# Vercel Deployment Checklist for RoleRaise

## ✅ GitHub Repository Ready
Repository: https://github.com/sahilkohli151991/roleraise-platform

## Step 1: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Start Deploying"
   - Sign in with GitHub

2. **Import Your Repository**:
   - Click "Add New..." → "Project"
   - Find `sahilkohli151991/roleraise-platform`
   - Click "Import"

3. **Configure Project**:
   - Project Name: `roleraise-platform`
   - Framework Preset: `Other`
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   Click "Environment Variables" and add each one:
   ```
   Name: PAYPAL_CLIENT_ID
   Value: [Your PayPal Client ID]

   Name: PAYPAL_CLIENT_SECRET
   Value: [Your PayPal Client Secret]

   Name: GOOGLE_APPS_SCRIPT_URL
   Value: [Your Google Apps Script URL]

   Name: VITE_CALENDLY_URL
   Value: https://calendly.com/kohlisahil151991

   Name: NODE_ENV
   Value: production
   ```

5. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - You'll get a URL like: `roleraise-platform-xyz.vercel.app`

## Step 2: Connect GoDaddy Domain

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `roleraise.com`
   - Add domain: `www.roleraise.com`

2. **In GoDaddy DNS Management**:
   - Login to GoDaddy account
   - Go to "My Products" → "DNS"
   - Select your domain `roleraise.com`
   - Click "Manage DNS"

3. **Update DNS Records**:
   Replace existing records with:
   ```
   Type: A
   Host: @
   Points to: 76.76.19.19
   TTL: 1 Hour

   Type: CNAME
   Host: www
   Points to: cname.vercel-dns.com
   TTL: 1 Hour
   ```

## Step 3: Verify Deployment

**Test Your Live Site** (after DNS propagation):
- Visit https://roleraise.com
- Test PayPal buttons on all 3 pricing plans
- Test Calendly booking integration
- Test career assessment form
- Check mobile responsiveness

## Environment Variables You Need

**PayPal Integration**:
- Get from https://developer.paypal.com
- Switch to "Live" mode for production
- Copy Client ID and Client Secret

**Google Apps Script**:
- Your webhook URL from Google Apps Script
- Should look like: `https://script.google.com/macros/s/[ID]/exec`

**Calendly**:
- Already set: `https://calendly.com/kohlisahil151991`

## Expected Results

✅ **Live at**: https://roleraise.com
✅ **SSL Certificate**: Automatic HTTPS
✅ **PayPal Payments**: All 3 pricing tiers working
✅ **Calendly Booking**: Strategy call scheduling
✅ **Google Forms**: Assessment data collection
✅ **Global CDN**: Fast loading worldwide
✅ **Auto-deployment**: Updates when you push to GitHub

## DNS Propagation Time
- **Immediate**: Vercel subdomain works instantly
- **24-48 hours**: Custom domain may take time to propagate
- **Check status**: Use https://dnschecker.org

## Troubleshooting

**Build fails**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json

**PayPal not working**:
- Verify environment variables are set correctly
- Check PayPal credentials are for production

**Domain not connecting**:
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records in GoDaddy
- Check domain is added correctly in Vercel

**Need help?**:
- Check Vercel docs: https://vercel.com/docs
- Contact support if domain issues persist

Your RoleRaise platform will be live and fully functional!