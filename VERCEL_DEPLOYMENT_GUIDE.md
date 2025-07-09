# Vercel Deployment Guide for RoleRaise

## Why Vercel is Perfect for Your Business

**Cost**: FREE (Hobby plan) or $20/month (Pro plan)
**Performance**: Global CDN, lightning fast
**Reliability**: 99.99% uptime guarantee
**Scalability**: Handles traffic spikes automatically

## Deployment Steps

### Step 1: Prepare for Vercel (2 minutes)
Your app needs minor modifications for Vercel's serverless architecture.

### Step 2: Create GitHub Repository (5 minutes)
1. Go to https://github.com/new
2. Repository name: `roleraise-platform`
3. Push your code to GitHub

### Step 3: Deploy to Vercel (5 minutes)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import your repository
4. Vercel automatically detects and deploys

### Step 4: Add Environment Variables (3 minutes)
In Vercel dashboard:
```
NODE_ENV=production
PAYPAL_CLIENT_ID=[Your Live PayPal Client ID]
PAYPAL_CLIENT_SECRET=[Your Live PayPal Client Secret]
GOOGLE_APPS_SCRIPT_URL=[Your Google Apps Script URL]
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
```

### Step 5: Connect Custom Domain (5 minutes)
- Add `roleraise.com` in Vercel dashboard
- Update DNS at GoDaddy
- Automatic SSL certificate

## Benefits Over Replit
- **Cost**: FREE vs $20/month
- **Performance**: Global CDN vs single server
- **Reliability**: Enterprise-grade vs shared hosting
- **Scalability**: Unlimited vs fixed resources

## What You Get
✅ Full PayPal integration
✅ Calendly booking system
✅ Career assessment forms
✅ All mentor profiles
✅ Customer testimonials
✅ Mobile responsive design
✅ Custom domain with SSL
✅ Global performance

Ready to save money and get better performance with Vercel?