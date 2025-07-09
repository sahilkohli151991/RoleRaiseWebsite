# How to Access Replit Secrets

## Step 1: Find the Secrets Tab
1. Look at the **left sidebar** in Replit
2. You'll see various icons - look for a **lock icon** 🔒 or text that says "Secrets"
3. Click on it

## Step 2: View Your Environment Variables
Once in the Secrets tab, you'll see:
- `PAYPAL_CLIENT_ID` - Copy this value
- `PAYPAL_CLIENT_SECRET` - Copy this value  
- `GOOGLE_APPS_SCRIPT_URL` - Copy this value

## Step 3: Copy Values for Vercel
For each secret:
1. Click on the secret name
2. Copy the value (it might be hidden with dots)
3. Paste it into Vercel's environment variables

## Alternative Method: Check Tools Panel
If you don't see a Secrets tab:
1. Look for a **Tools** icon in the left sidebar
2. Click on "Tools" 
3. Look for "Secrets" in the tools menu

## What You'll Copy to Vercel:
```
PAYPAL_CLIENT_ID=[Copy from Replit Secrets]
PAYPAL_CLIENT_SECRET=[Copy from Replit Secrets]
GOOGLE_APPS_SCRIPT_URL=[Copy from Replit Secrets]
VITE_CALENDLY_URL=https://calendly.com/kohlisahil151991
NODE_ENV=production
```

## Visual Guide:
- Left sidebar → Lock icon 🔒 → Secrets
- Or: Left sidebar → Tools → Secrets

The secrets are there because your PayPal and Google integrations are currently working in this environment!