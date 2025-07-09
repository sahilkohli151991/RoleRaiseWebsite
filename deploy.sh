#!/bin/bash

# RoleRaise Digital Ocean Deployment Script
# Run this script on your Digital Ocean droplet

set -e

echo "🚀 Starting RoleRaise deployment..."

# Configuration
APP_NAME="roleraise"
APP_DIR="/var/www/$APP_NAME"
NGINX_CONFIG="/etc/nginx/sites-available/$APP_NAME"
DOMAIN="roleraise.com"
USER="root"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   log_error "This script must be run as root"
   exit 1
fi

# Update system
log_info "Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18
log_info "Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verify Node.js installation
node_version=$(node --version)
npm_version=$(npm --version)
log_info "Node.js version: $node_version"
log_info "npm version: $npm_version"

# Install PM2 globally
log_info "Installing PM2..."
npm install -g pm2

# Install PostgreSQL (optional - if not using managed database)
read -p "Do you want to install PostgreSQL locally? (y/n): " install_postgres
if [[ $install_postgres == "y" ]]; then
    log_info "Installing PostgreSQL..."
    apt install -y postgresql postgresql-contrib
    
    # Create database and user
    log_info "Setting up database..."
    sudo -u postgres psql -c "CREATE DATABASE $APP_NAME;"
    read -p "Enter database password: " -s db_password
    echo
    sudo -u postgres psql -c "CREATE USER ${APP_NAME}_user WITH PASSWORD '$db_password';"
    sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE $APP_NAME TO ${APP_NAME}_user;"
    log_info "Database setup complete"
fi

# Install Nginx
log_info "Installing Nginx..."
apt install -y nginx

# Install Certbot for SSL
log_info "Installing Certbot..."
apt install -y certbot python3-certbot-nginx

# Create application directory
log_info "Creating application directory..."
mkdir -p $APP_DIR
mkdir -p $APP_DIR/logs

# Set up application (assuming code is already uploaded)
cd $APP_DIR

# Install dependencies
log_info "Installing application dependencies..."
npm install --production

# Build application
log_info "Building application..."
npm run build

# Create environment file
log_info "Creating environment file..."
cat > .env.production << EOF
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://${APP_NAME}_user:${db_password}@localhost:5432/$APP_NAME
PAYPAL_CLIENT_ID=your_production_paypal_client_id
PAYPAL_CLIENT_SECRET=your_production_paypal_client_secret
GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url
VITE_CALENDLY_URL=your_calendly_url
EOF

log_warning "Please update the environment variables in .env.production"

# Create PM2 ecosystem file
log_info "Creating PM2 configuration..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'roleraise',
    script: './dist/server/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_file: '.env.production',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
EOF

# Start application with PM2
log_info "Starting application with PM2..."
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup

# Configure Nginx
log_info "Configuring Nginx..."
cat > $NGINX_CONFIG << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable site
ln -sf $NGINX_CONFIG /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
log_info "Testing Nginx configuration..."
nginx -t

# Start Nginx
log_info "Starting Nginx..."
systemctl enable nginx
systemctl restart nginx

# Set up SSL certificate
log_info "Setting up SSL certificate..."
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# Test SSL renewal
log_info "Testing SSL renewal..."
certbot renew --dry-run

# Set up firewall
log_info "Configuring firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# Create backup script
log_info "Creating backup script..."
cat > /usr/local/bin/backup-roleraise.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/var/backups/roleraise"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Backup database
pg_dump roleraise > $BACKUP_DIR/database_$DATE.sql

# Backup application
tar -czf $BACKUP_DIR/app_$DATE.tar.gz -C /var/www roleraise

# Keep only last 7 days of backups
find $BACKUP_DIR -type f -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /usr/local/bin/backup-roleraise.sh

# Add to crontab for daily backups
(crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/backup-roleraise.sh") | crontab -

# Final status check
log_info "Checking application status..."
pm2 status
systemctl status nginx

log_info "🎉 Deployment complete!"
log_info "Your application should be running at: https://$DOMAIN"
log_info ""
log_info "Next steps:"
log_info "1. Update DNS records at GoDaddy to point to this server"
log_info "2. Update environment variables in .env.production"
log_info "3. Restart the application: pm2 restart roleraise"
log_info ""
log_info "Useful commands:"
log_info "- Check logs: pm2 logs roleraise"
log_info "- Restart app: pm2 restart roleraise"
log_info "- Check Nginx: systemctl status nginx"
log_info "- SSL renewal: certbot renew"