#!/bin/bash

# Test script to verify environment variable configuration
echo "🧪 Testing Environment Variable Configuration"
echo "============================================="

# Check if .env file exists
if [ -f "octofit-tracker/frontend/.env" ]; then
    echo "✅ .env file exists"
    echo "📋 Contents:"
    cat octofit-tracker/frontend/.env
else
    echo "❌ .env file not found"
    echo "💡 Creating .env from example..."
    cp octofit-tracker/frontend/.env.example octofit-tracker/frontend/.env
    echo "✅ .env file created from template"
fi

echo ""
echo "🔍 Checking for hardcoded URLs in components..."
hardcoded_count=$(grep -r "https://didactic-zebra" octofit-tracker/frontend/src/ 2>/dev/null | wc -l)
if [ "$hardcoded_count" -eq 0 ]; then
    echo "✅ No hardcoded URLs found in components"
else
    echo "❌ Found $hardcoded_count hardcoded URLs"
    grep -r "https://didactic-zebra" octofit-tracker/frontend/src/
fi

echo ""
echo "🔍 Checking for environment variable usage..."
env_var_count=$(grep -r "process.env.REACT_APP_API_URL" octofit-tracker/frontend/src/ 2>/dev/null | wc -l)
echo "✅ Found $env_var_count components using environment variable"

echo ""
echo "📝 Environment variable usage examples:"
grep -r "process.env.REACT_APP_API_URL" octofit-tracker/frontend/src/ 2>/dev/null | head -3

echo ""
echo "🎉 Configuration test completed!"