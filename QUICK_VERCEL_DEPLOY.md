# Quick Vercel Deployment - RoleRaise Platform

## Your Repository Ready
✅ https://github.com/sahilkohli151991/roleraise-platform

## Step 1: Deploy to Vercel (5 minutes)

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign in with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select `sahilkohli151991/roleraise-platform`
   - Click "Import"

3. **Build Configuration**:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   Copy these exact values:
   ```
   PAYPAL_CLIENT_ID=[Your existing PayPal Client ID]
   PAYPAL_CLIENT_SECRET=[Your existing PayPal Client Secret]
   GOOGLE_APPS_SCRIPT_URL=[Your existing Google Apps Script URL]
   VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
   NODE_ENV=production
   ```

5. **Deploy**: Click "Deploy" button

## Step 2: Connect Your Domain (5 minutes)

1. **In Vercel Dashboard**:
   - Go to your project → Settings → Domains
   - Add: `roleraise.com`
   - Add: `www.roleraise.com`

2. **In GoDaddy DNS**:
   - Login to GoDaddy
   - Go to DNS Management for roleraise.com
   - Update records:
     ```
     A Record: @ → 76.76.19.19
     CNAME: www → cname.vercel-dns.com
     ```

## Step 3: Go Live!

**Your site will be live at**: https://roleraise.com

**What will work immediately**:
✅ PayPal payments for all 3 pricing plans ($2,497, $4,997, $9,997)
✅ Calendly booking integration
✅ Google Forms assessment data collection
✅ All mentor profiles and testimonials
✅ Professional responsive design
✅ Automatic SSL certificate

**DNS propagation**: 10 minutes to 24 hours for custom domain

**Auto-deployment**: Every GitHub push updates your site automatically

Ready to deploy? The process takes about 10 minutes total!