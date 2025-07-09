# Deploy RoleRaise to GoDaddy Hosting

## Important: GoDaddy Hosting Requirements

**GoDaddy offers different hosting types:**
- **Shared Hosting**: Only supports static HTML/CSS/JS (won't work for your app)
- **VPS Hosting**: Supports Node.js applications (what you need)
- **Dedicated Server**: Full control (overkill for most cases)

## Option 1: GoDaddy VPS Hosting (Recommended)

### Step 1: Set Up GoDaddy VPS
1. Go to GoDaddy and purchase VPS hosting
2. Choose a plan with Node.js support
3. Set up your server with Ubuntu/CentOS
4. Get your server IP address and SSH access

### Step 2: Connect to Your Server
```bash
# SSH into your GoDaddy server
ssh root@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Git
sudo apt install git -y
```

### Step 3: Deploy Your Application
```bash
# Clone your repository
git clone https://github.com/sahilkohli151991/roleraise-platform.git
cd roleraise-platform

# Install dependencies
npm install

# Set up environment variables
nano .env
```

Add these environment variables:
```
NODE_ENV=production
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
GOOGLE_APPS_SCRIPT_URL=your_google_script_url
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
PORT=3000
```

### Step 4: Build and Start Application
```bash
# Build the application
npm run build

# Start with PM2
pm2 start npm --name "roleraise" -- run start

# Save PM2 configuration
pm2 save
pm2 startup
```

### Step 5: Configure Domain
1. Point your domain (roleraise.com) to your VPS IP
2. Set up Nginx as reverse proxy:

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/roleraise
```

Add this configuration:
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

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/roleraise /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Set Up SSL (HTTPS)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d roleraise.com -d www.roleraise.com
```

## Option 2: Alternative - Use Vercel + GoDaddy Domain

If GoDaddy VPS is complex, you can:

1. **Deploy to Vercel (Free):**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Get your Vercel deployment URL

2. **Point GoDaddy Domain to Vercel:**
   - In GoDaddy DNS management
   - Add CNAME record: `www` → `your-app.vercel.app`
   - Add A record: `@` → `76.76.19.19` (Vercel's IP)

## Option 3: Build Static Version for GoDaddy Shared Hosting

**Warning: This removes server functionality (PayPal backend, etc.)**

If you only have shared hosting:
```bash
# Build static version
npm run build

# Upload the 'dist' folder contents to GoDaddy's public_html directory
```

**This will NOT work for:**
- PayPal payment processing
- Google Forms backend
- Server-side functionality

## Recommended Approach

**For full functionality:** Use GoDaddy VPS or deploy to Vercel/Netlify and point your domain there.

**For budget option:** Use Vercel (free) + GoDaddy domain pointing.

## Environment Variables Needed
```
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
GOOGLE_APPS_SCRIPT_URL=your_google_script_url
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
```

## Monitoring Your Application
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs roleraise

# Restart application
pm2 restart roleraise
```

Your RoleRaise platform will be live at roleraise.com with full PayPal integration!