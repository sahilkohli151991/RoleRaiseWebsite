#!/bin/bash

# RoleRaise Production Build Script
# Run this script to build your application for Digital Ocean deployment

set -e

echo "🔨 Building RoleRaise for production deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    log_error "npm is not installed. Please install npm."
    exit 1
fi

# Clean previous builds
log_info "Cleaning previous builds..."
rm -rf dist/
rm -rf client/dist/

# Install dependencies
log_info "Installing dependencies..."
npm install

# Build client (frontend)
log_info "Building client (frontend)..."
npm run build:client

# Build server (backend)
log_info "Building server (backend)..."
npm run build:server

# Create production package structure
log_info "Creating production package structure..."
mkdir -p dist/client
cp -r client/dist/* dist/client/
cp package.json dist/
cp package-lock.json dist/

# Create production package.json
log_info "Creating production package.json..."
cat > dist/package.json << 'EOF'
{
  "name": "roleraise-production",
  "version": "1.0.0",
  "description": "RoleRaise - Career Mentorship Platform",
  "main": "server/index.js",
  "scripts": {
    "start": "node server/index.js",
    "migrate": "drizzle-kit push:pg"
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.7.2",
    "@paypal/paypal-server-sdk": "^1.1.0",
    "connect-pg-simple": "^9.0.1",
    "drizzle-orm": "^0.29.1",
    "drizzle-zod": "^0.5.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "googleapis": "^128.0.0",
    "memorystore": "^1.6.7",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "ws": "^8.14.2",
    "zod": "^3.22.4",
    "zod-validation-error": "^1.5.0"
  },
  "devDependencies": {
    "drizzle-kit": "^0.20.4"
  }
}
EOF

# Copy necessary files
log_info "Copying configuration files..."
cp drizzle.config.ts dist/
cp -r shared/ dist/
cp ecosystem.config.js dist/
cp nginx.conf dist/
cp testimonials.json dist/
cp mentors.json dist/
cp -r attached_assets/ dist/ 2>/dev/null || log_warning "No attached assets found"

# Create deployment package
log_info "Creating deployment package..."
cd dist
tar -czf ../roleraise-production.tar.gz .
cd ..

# Create deployment instructions
log_info "Creating deployment instructions..."
cat > DEPLOYMENT_INSTRUCTIONS.md << 'EOF'
# RoleRaise Production Deployment Instructions

## Files Generated:
- `roleraise-production.tar.gz` - Production build package
- `DIGITAL_OCEAN_DEPLOYMENT_GUIDE.md` - Complete deployment guide
- `deploy.sh` - Automated deployment script

## Quick Deployment Steps:

### 1. Upload to Digital Ocean Droplet
```bash
# Upload the production package
scp roleraise-production.tar.gz root@your_server_ip:/tmp/
scp deploy.sh root@your_server_ip:/tmp/
```

### 2. SSH into your server and run deployment
```bash
ssh root@your_server_ip
cd /tmp
chmod +x deploy.sh
./deploy.sh
```

### 3. Extract and setup application
```bash
cd /var/www
mkdir -p roleraise
cd roleraise
tar -xzf /tmp/roleraise-production.tar.gz
```

### 4. Configure environment variables
Edit `.env.production` with your actual values:
```bash
nano .env.production
```

### 5. Install dependencies and start
```bash
npm install --production
pm2 start ecosystem.config.js --env production
```

### 6. Configure DNS at GoDaddy
Point your domain to your Digital Ocean droplet IP:
- A Record: @ → your_droplet_ip
- A Record: www → your_droplet_ip

Your application will be live at https://roleraise.com
EOF

log_info "✅ Production build complete!"
log_info ""
log_info "Generated files:"
log_info "- roleraise-production.tar.gz (deployment package)"
log_info "- DIGITAL_OCEAN_DEPLOYMENT_GUIDE.md (complete guide)"
log_info "- deploy.sh (automated deployment script)"
log_info "- DEPLOYMENT_INSTRUCTIONS.md (quick start guide)"
log_info ""
log_info "Next steps:"
log_info "1. Upload roleraise-production.tar.gz to your Digital Ocean droplet"
log_info "2. Follow the DIGITAL_OCEAN_DEPLOYMENT_GUIDE.md for detailed setup"
log_info "3. Or run the deploy.sh script for automated deployment"
log_info ""
log_info "Your RoleRaise application is ready for production! 🚀"