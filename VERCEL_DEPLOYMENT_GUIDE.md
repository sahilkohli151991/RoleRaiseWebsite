# Deploy RoleRaise to Vercel + GoDaddy Domain

## Step 1: Upload Your Code to GitHub

First, make sure your code is on GitHub:
```bash
# Navigate to your project folder on Mac
cd Desktop/your-project-folder

# Initialize and push to GitHub
git init
git remote add origin https://github.com/sahilkohli151991/roleraise-platform.git
git add .
git commit -m "Initial commit: RoleRaise platform"
git push -u origin main
```

## Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Start Deploying"
   - Sign up/login with your GitHub account

2. **Import Repository**:
   - Click "Add New..." → "Project"
   - Find your `roleraise-platform` repository
   - Click "Import"

3. **Configure Build Settings**:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**:
   Click "Environment Variables" and add:
   ```
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   GOOGLE_APPS_SCRIPT_URL=your_google_script_url
   VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
   NODE_ENV=production
   ```

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - You'll get a URL like: `roleraise-platform.vercel.app`

## Step 3: Connect Your GoDaddy Domain

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add domain: `roleraise.com`
   - Add domain: `www.roleraise.com`

2. **In GoDaddy DNS Management**:
   - Login to GoDaddy
   - Go to "My Products" → "DNS"
   - Find your domain `roleraise.com`

3. **Update DNS Records**:
   Delete existing A records and add:
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

## Step 4: Verify SSL Certificate

- Wait 10-15 minutes for DNS propagation
- Vercel will automatically generate SSL certificates
- Your site will be live at https://roleraise.com

## Step 5: Test Everything

Visit your live site and test:
- ✅ PayPal payment buttons (all 3 pricing plans)
- ✅ Calendly booking integration
- ✅ Google Forms submission
- ✅ Mobile responsiveness
- ✅ All mentor profiles and testimonials

## Step 6: Automatic Updates

**Big advantage**: Every time you push code to GitHub, Vercel automatically deploys!

```bash
# To update your site in the future:
git add .
git commit -m "Update message"
git push origin main
# Site updates automatically!
```

## Environment Variables You Need

Get these from your current integrations:

**PayPal** (from your PayPal developer dashboard):
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`

**Google Apps Script** (your webhook URL):
- `GOOGLE_APPS_SCRIPT_URL`

**Calendly** (already set):
- `VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991`

## Benefits of This Setup

✅ **Free hosting** with enterprise-grade performance
✅ **Automatic SSL** certificates
✅ **Global CDN** for fast loading worldwide
✅ **Automatic deployments** from GitHub
✅ **All features working**: PayPal, Calendly, Google Forms
✅ **Custom domain** roleraise.com
✅ **Zero maintenance** required

## Troubleshooting

**If domain doesn't work:**
- Wait 24-48 hours for DNS propagation
- Check DNS settings in GoDaddy
- Verify domain is added in Vercel

**If PayPal doesn't work:**
- Check environment variables in Vercel
- Ensure PayPal credentials are for production (not sandbox)

**If builds fail:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json

Your RoleRaise platform will be live at roleraise.com with full functionality!