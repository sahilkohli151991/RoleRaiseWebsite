# Railway Deployment Guide for RoleRaise

## Step 1: Prepare Your GitHub Repository

### 1.1 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `roleraise-platform`
3. Set to Public or Private
4. Don't initialize with README (we'll push existing code)

### 1.2 Push Your Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit - RoleRaise production ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roleraise-platform.git
git push -u origin main
```

## Step 2: Deploy to Railway

### 2.1 Sign Up for Railway
1. Go to https://railway.app
2. Sign up with your GitHub account
3. Connect your GitHub repository

### 2.2 Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `roleraise-platform` repository
4. Railway will automatically detect it's a Node.js app

### 2.3 Configure Environment Variables
In Railway dashboard, add these environment variables:

**Required Variables:**
```
NODE_ENV=production
PAYPAL_CLIENT_ID=[Your Live PayPal Client ID]
PAYPAL_CLIENT_SECRET=[Your Live PayPal Client Secret]
GOOGLE_APPS_SCRIPT_URL=[Your Google Apps Script URL]
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
```

## Step 3: Get Live PayPal Credentials

### 3.1 PayPal Developer Dashboard
1. Go to https://developer.paypal.com
2. Click "Create App"
3. Choose "Live" environment (not sandbox)
4. App Name: "RoleRaise"
5. Merchant: Your business account
6. Features: Accept Payments

### 3.2 Get Credentials
1. Copy the "Client ID" 
2. Copy the "Client Secret"
3. Add these to Railway environment variables

## Step 4: Connect Custom Domain

### 4.1 In Railway Dashboard
1. Go to your project
2. Click "Settings" tab
3. Click "Domains"
4. Click "Custom Domain"
5. Enter: `roleraise.com`

### 4.2 Update DNS at GoDaddy
1. Login to GoDaddy
2. Go to DNS Management for roleraise.com
3. Add CNAME record:
   - Type: CNAME
   - Name: @ (or leave blank)
   - Value: [Railway will provide this]

## Step 5: Test Your Production App

### 5.1 Test Payment Processing
1. Visit your live site: https://roleraise.com
2. Try "Enroll Now" buttons
3. Test with real PayPal account (small amount)
4. Verify Calendly booking works

### 5.2 Test Assessment Form
1. Fill out career assessment
2. Check Google Sheets integration
3. Verify email notifications

## Step 6: Production Checklist

- ✅ App deployed to Railway
- ✅ Custom domain connected
- ✅ SSL certificate active
- ✅ PayPal live credentials configured
- ✅ Calendly integration working
- ✅ Assessment form operational
- ✅ All mentor profiles loading
- ✅ Testimonials displaying
- ✅ Mobile responsive design
- ✅ Error handling active

## Cost Breakdown
- **Railway**: $5/month
- **Domain**: Already owned (roleraise.com)
- **PayPal**: 2.9% + $0.30 per transaction
- **Total Monthly**: $5 + transaction fees

## Auto-Deploy Setup
Railway automatically deploys when you push to GitHub:
1. Make changes to your code
2. Commit and push to GitHub
3. Railway automatically deploys updates
4. Live site updates in 2-3 minutes

## Support Resources
- Railway Documentation: https://docs.railway.app
- PayPal Developer Docs: https://developer.paypal.com
- Domain Setup Help: Railway will provide specific DNS instructions

Your RoleRaise platform will be live at https://roleraise.com within 30 minutes!