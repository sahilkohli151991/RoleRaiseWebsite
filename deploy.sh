#!/bin/bash

# RoleRaise Production Deployment Script
echo "🚀 Deploying RoleRaise to Production..."

# Step 1: Build the application
echo "📦 Building application..."
npm run build

# Step 2: Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Step 3: Start production server
echo "🌐 Starting production server..."
NODE_ENV=production npm start