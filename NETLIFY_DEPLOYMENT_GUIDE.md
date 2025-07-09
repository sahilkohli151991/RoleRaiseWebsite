# Complete Netlify Deployment Guide for RoleRaise

## Step 1: Prepare Your Project for Static Deployment

### Modify PayPal Integration for Static Site
Instead of server-side PayPal processing, we'll use direct PayPal payment links:

1. **Essential Plan ($2,497)**: Direct PayPal payment link
2. **Premium Plan ($4,997)**: Direct PayPal payment link  
3. **Elite Plan ($9,997)**: Direct PayPal payment link

### Modify Form Submission for Netlify Forms
Your assessment form will use Netlify's built-in form handling instead of your Express server.

## Step 2: Deploy to Netlify

### A. Create Netlify Account
1. Go to **https://netlify.com**
2. Click **"Sign up"** 
3. Sign up with your GitHub account

### B. Deploy Your Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your repository: `roleraise-platform`
4. Configure build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
5. Click **"Deploy site"**

### C. Your Site is Live!
- You'll get a URL like: `amazing-unicorn-123456.netlify.app`
- Your site is now live and accessible!

## Step 3: Connect Your GoDaddy Domain

### A. Add Domain in Netlify
1. In your Netlify dashboard, go to your site
2. Click **"Domain settings"**
3. Click **"Add custom domain"**
4. Enter: `roleraise.com`
5. Click **"Verify"**

### B. Update DNS in GoDaddy
1. Log in to your **GoDaddy account**
2. Go to **"My Products"** → **"DNS"** for roleraise.com
3. **Delete any existing A or CNAME records for @ and www**
4. Add these new records:

```
Type: A
Name: @
Value: 75.2.60.5
TTL: 1 Hour

Type: CNAME  
Name: www
Value: [your-site-name].netlify.app
TTL: 1 Hour
```

Replace `[your-site-name]` with your actual Netlify site name.

## Step 4: Configure Environment Variables

In your Netlify dashboard:
1. Go to **"Site settings"** → **"Environment variables"**
2. Add these variables:
   ```
   VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
   NODE_ENV=production
   ```

## Step 5: Enable Form Handling

For your assessment form to work with Netlify:
1. Go to **"Site settings"** → **"Forms"**
2. Enable **"Form detection"**
3. Set **"Form notifications"** to your email

## Step 6: Test Your Live Site

### What to Test:
- **Site loading**: Does roleraise.com load properly?
- **PayPal buttons**: Do they redirect to PayPal?
- **Calendly integration**: Does booking work?
- **Assessment form**: Does it submit successfully?
- **Mobile responsiveness**: Check on phone

### Expected Timeline:
- **Netlify site**: Live immediately
- **Custom domain**: 1-48 hours for DNS propagation
- **SSL certificate**: Automatic once domain connects

## Step 7: Monitoring and Updates

### Automatic Deployments
- Every time you push to GitHub, Netlify automatically rebuilds and deploys
- Check deployment status in Netlify dashboard

### Form Submissions
- View form submissions in Netlify dashboard under "Forms"
- Get email notifications for new submissions

## Benefits of This Approach

### Cost
- **$0/month** - Completely free
- **No server costs**
- **No database fees**

### Performance
- **Global CDN** - Fast worldwide
- **Automatic SSL** - Secure HTTPS
- **99.9% uptime** - Reliable hosting

### Maintenance
- **Zero maintenance** - No servers to manage
- **Automatic updates** - Deploy via GitHub
- **Built-in forms** - No external services needed

## Your Final URLs
- **Primary**: https://roleraise.com
- **Backup**: https://amazing-unicorn-123456.netlify.app

Your RoleRaise platform will be live, fast, and completely free!