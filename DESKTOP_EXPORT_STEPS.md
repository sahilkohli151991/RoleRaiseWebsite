# Push RoleRaise from Desktop to GitHub

## Step 1: Create Repository on GitHub
1. Go to https://github.com/sahilkohli151991
2. Click "New repository"
3. Repository name: `roleraise-platform`
4. Description: "Professional career coaching platform for $200K+ tech roles"
5. **Important**: Keep it PUBLIC and do NOT check any boxes (no README, .gitignore, or license)
6. Click "Create repository"

## Step 2: Open Terminal/Command Prompt
Navigate to your project folder on desktop:

**Windows:**
```cmd
cd Desktop/your-project-folder-name
```

**Mac/Linux:**
```bash
cd ~/Desktop/your-project-folder-name
```

## Step 3: Push to GitHub
Run these commands one by one:

```bash
# Initialize git (if not already)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/sahilkohli151991/roleraise-platform.git

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: RoleRaise career coaching platform"

# Push to GitHub
git push -u origin main
```

## If You Get Errors:

**If "git not found":**
- Install Git from https://git-scm.com/downloads

**If authentication fails:**
- Use: `git config --global user.name "Your Name"`
- Use: `git config --global user.email "your@email.com"`
- You may need to use a Personal Access Token instead of password

**If branch name issues:**
```bash
git branch -M main
git push -u origin main
```

## Step 4: Verify Success
- Go to https://github.com/sahilkohli151991/roleraise-platform
- You should see all your files uploaded
- The repository should show your project structure

## Your Repository Will Include:
✅ Complete React/TypeScript frontend
✅ Express.js backend with PayPal integration
✅ All pricing plans ($2,497, $4,997, $9,997)
✅ Calendly booking system
✅ Google Forms integration
✅ Mentor profiles and testimonials
✅ Professional responsive design
✅ All configuration files

## Next Steps After Upload:
1. Deploy to Vercel/Netlify for production
2. Set up environment variables
3. Configure your custom domain (roleraise.com)
4. Monitor payment processing

Your RoleRaise platform is ready for production!