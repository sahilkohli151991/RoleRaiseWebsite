# Digital Ocean Deployment Guide for RoleRaise

This guide will help you deploy your RoleRaise application on Digital Ocean and connect it to your GoDaddy domain (roleraise.com).

## Prerequisites

1. Digital Ocean account
2. GoDaddy domain (roleraise.com)
3. PayPal production credentials
4. Google Sheets API credentials (optional)
5. Calendly URL

## Step 1: Create Digital Ocean Droplet

### Option A: App Platform (Recommended - Easier)

1. **Login to Digital Ocean**
   - Go to https://cloud.digitalocean.com/
   - Sign in to your account

2. **Create New App**
   - Click "Create" → "Apps"
   - Choose "GitHub" as source (you'll need to push your code to GitHub first)
   - Or choose "Docker Hub" if you prefer containerization

3. **Configure App Settings**
   - **Name**: `roleraise-app`
   - **Region**: Choose closest to your target audience
   - **Plan**: Basic ($5/month) or Professional ($12/month)

4. **Environment Variables**
   ```
   NODE_ENV=production
   PORT=8080
   DATABASE_URL=your_postgresql_connection_string
   PAYPAL_CLIENT_ID=your_production_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_production_paypal_client_secret
   GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url
   VITE_CALENDLY_URL=your_calendly_url
   ```

### Option B: Droplet (More Control)

1. **Create Droplet**
   - Click "Create" → "Droplets"
   - Choose Ubuntu 22.04 LTS
   - Size: Basic plan, $6/month (1 GB RAM, 1 vCPU)
   - Add your SSH key

2. **Connect to Droplet**
   ```bash
   ssh root@your_droplet_ip
   ```

## Step 2: Set Up Database

### Option A: Digital Ocean Managed Database (Recommended)

1. **Create Database**
   - Go to "Databases" in Digital Ocean
   - Click "Create Database Cluster"
   - Choose PostgreSQL 14
   - Basic plan ($15/month)
   - Same region as your app

2. **Get Connection String**
   - Copy the connection string from the database dashboard
   - Format: `postgresql://username:password@host:port/database?sslmode=require`

### Option B: Self-Hosted PostgreSQL (Cheaper)

```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE roleraise;
CREATE USER roleraise_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE roleraise TO roleraise_user;
\q
```

## Step 3: Deploy Application (Droplet Method)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install PM2 (Process Manager)**
   ```bash
   sudo npm install -g pm2
   ```

3. **Clone and Setup Application**
   ```bash
   git clone https://github.com/yourusername/roleraise.git
   cd roleraise
   npm install
   ```

4. **Create Environment File**
   ```bash
   nano .env.production
   ```
   
   Add your environment variables:
   ```
   NODE_ENV=production
   PORT=3000
   DATABASE_URL=postgresql://roleraise_user:password@localhost:5432/roleraise
   PAYPAL_CLIENT_ID=your_production_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_production_paypal_client_secret
   GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url
   VITE_CALENDLY_URL=your_calendly_url
   ```

5. **Build Application**
   ```bash
   npm run build
   ```

6. **Create PM2 Configuration**
   ```bash
   nano ecosystem.config.js
   ```
   
   ```javascript
   module.exports = {
     apps: [{
       name: 'roleraise',
       script: './dist/server/index.js',
       env_production: {
         NODE_ENV: 'production',
         PORT: 3000
       },
       env_file: '.env.production'
     }]
   }
   ```

7. **Start Application**
   ```bash
   pm2 start ecosystem.config.js --env production
   pm2 save
   pm2 startup
   ```

## Step 4: Configure Nginx (Droplet Method)

1. **Install Nginx**
   ```bash
   sudo apt install nginx
   ```

2. **Create Nginx Configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/roleraise
   ```
   
   ```nginx
   server {
       listen 80;
       server_name roleraise.com www.roleraise.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/roleraise /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

## Step 5: Configure GoDaddy Domain

1. **Login to GoDaddy**
   - Go to https://dcc.godaddy.com/
   - Navigate to "My Products" → "DNS"

2. **Update DNS Records**
   - **A Record**: `@` points to your Digital Ocean droplet IP
   - **A Record**: `www` points to your Digital Ocean droplet IP
   - **CNAME Record**: `www` points to `roleraise.com` (alternative)

3. **DNS Configuration Example**
   ```
   Type    Name    Value                TTL
   A       @       your_droplet_ip      600
   A       www     your_droplet_ip      600
   ```

## Step 6: Set Up SSL Certificate

1. **Install Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **Obtain SSL Certificate**
   ```bash
   sudo certbot --nginx -d roleraise.com -d www.roleraise.com
   ```

3. **Test Auto-Renewal**
   ```bash
   sudo certbot renew --dry-run
   ```

## Step 7: Configure PayPal for Production

1. **Update PayPal Settings**
   - Change `NODE_ENV=production` in your environment
   - Use production PayPal credentials
   - Update return URLs to use `https://roleraise.com`

2. **PayPal Production Settings**
   ```
   PAYPAL_CLIENT_ID=your_production_client_id
   PAYPAL_CLIENT_SECRET=your_production_client_secret
   ```

## Step 8: Final Deployment Steps

1. **Update Application for Production**
   ```bash
   cd /path/to/roleraise
   git pull origin main
   npm install
   npm run build
   pm2 restart roleraise
   ```

2. **Monitor Application**
   ```bash
   pm2 logs roleraise
   pm2 status
   ```

## Cost Breakdown

### App Platform Option:
- App Platform: $12/month (Professional)
- Managed Database: $15/month
- **Total: ~$27/month**

### Droplet Option:
- Droplet: $6/month (Basic)
- Managed Database: $15/month (or $0 if self-hosted)
- **Total: ~$21/month (or $6/month with self-hosted DB)**

## Troubleshooting

### Common Issues:

1. **Application Won't Start**
   ```bash
   pm2 logs roleraise
   # Check for missing environment variables
   ```

2. **Database Connection Issues**
   ```bash
   # Test database connection
   psql "postgresql://username:password@host:port/database"
   ```

3. **Domain Not Resolving**
   ```bash
   # Check DNS propagation
   nslookup roleraise.com
   ```

4. **PayPal Issues**
   - Ensure production credentials are correct
   - Check webhook URLs are using HTTPS
   - Verify return URLs match your domain

## Maintenance

1. **Regular Updates**
   ```bash
   cd /path/to/roleraise
   git pull origin main
   npm install
   npm run build
   pm2 restart roleraise
   ```

2. **Database Backups**
   ```bash
   pg_dump roleraise > backup_$(date +%Y%m%d).sql
   ```

3. **SSL Certificate Renewal**
   - Certbot should auto-renew, but check with: `sudo certbot renew --dry-run`

## Security Checklist

- [ ] SSL certificate installed and working
- [ ] Environment variables secured
- [ ] Database password is strong
- [ ] PayPal webhooks use HTTPS
- [ ] Nginx security headers configured
- [ ] Regular security updates applied

## Support

For issues:
1. Check PM2 logs: `pm2 logs roleraise`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Monitor system resources: `htop`

Your RoleRaise application should now be live at https://roleraise.com!