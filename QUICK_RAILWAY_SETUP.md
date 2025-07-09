# Quick Railway Deployment for RoleRaise

## 🚀 Your app is production-ready! Here's how to deploy:

### Step 1: Push to GitHub (5 minutes)
```bash
git init
git add .
git commit -m "RoleRaise production ready"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roleraise-platform.git
git push -u origin main
```

### Step 2: Deploy to Railway (5 minutes)
1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway automatically detects Node.js and deploys

### Step 3: Add Environment Variables (5 minutes)
In Railway dashboard, add these variables:
```
NODE_ENV=production
PAYPAL_CLIENT_ID=your_live_paypal_client_id
PAYPAL_CLIENT_SECRET=your_live_paypal_client_secret
GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
```

### Step 4: Get Live PayPal Credentials (10 minutes)
1. Go to https://developer.paypal.com
2. Create app in "Live" mode (not sandbox)
3. Copy Client ID and Secret
4. Add to Railway environment variables

### Step 5: Connect Custom Domain (5 minutes)
1. In Railway, go to Settings → Domains
2. Add custom domain: `roleraise.com`
3. Update DNS at GoDaddy with provided CNAME

## 🎯 Ready to Launch!

Your RoleRaise platform includes:
- ✅ Professional landing page
- ✅ PayPal payment processing ($2,497, $4,997, $9,997)
- ✅ Calendly booking integration
- ✅ Career assessment with Google Sheets
- ✅ 8 mentor profiles from top companies
- ✅ Customer testimonials
- ✅ Mobile responsive design
- ✅ Error handling and fallbacks

## 💰 Cost: $5/month + PayPal fees
## 🌐 Live at: https://roleraise.com
## ⚡ Deployment time: 30 minutes total

Your business will be live and accepting payments within 30 minutes!