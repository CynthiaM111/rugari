#!/bin/bash

# Quick diagnostic script for Vercel NOT_FOUND errors
# Run this locally to check for common issues before deploying

echo "🔍 Checking Next.js App Router structure..."
echo ""

# Check for root layout
if [ ! -f "app/layout.tsx" ]; then
  echo "❌ ERROR: app/layout.tsx is missing (REQUIRED)"
  exit 1
else
  echo "✅ app/layout.tsx exists"
  
  # Check for default export
  if ! grep -q "export default" app/layout.tsx; then
    echo "❌ ERROR: app/layout.tsx missing default export"
    exit 1
  else
    echo "✅ app/layout.tsx has default export"
  fi
  
  # Check for RootLayout function
  if ! grep -q "RootLayout" app/layout.tsx; then
    echo "⚠️  WARNING: app/layout.tsx doesn't export RootLayout (might still work)"
  else
    echo "✅ app/layout.tsx exports RootLayout"
  fi
fi

echo ""
echo "🔍 Checking page files..."

# Check each expected page
pages=("app/page.tsx" "app/about/page.tsx" "app/contact/page.tsx" "app/get-involved/page.tsx" "app/programs/page.tsx" "app/impact/page.tsx")

for page in "${pages[@]}"; do
  if [ ! -f "$page" ]; then
    echo "❌ ERROR: $page is missing"
    exit 1
  else
    if ! grep -q "export default" "$page"; then
      echo "❌ ERROR: $page missing default export"
      exit 1
    else
      echo "✅ $page exists with default export"
    fi
  fi
done

echo ""
echo "🔍 Checking for TypeScript errors..."

# Check TypeScript
if command -v npx &> /dev/null; then
  if npx tsc --noEmit 2>&1 | grep -q "error"; then
    echo "❌ TypeScript errors found. Run 'npx tsc --noEmit' to see details."
    npx tsc --noEmit 2>&1 | head -20
    exit 1
  else
    echo "✅ No TypeScript errors"
  fi
else
  echo "⚠️  npx not found, skipping TypeScript check"
fi

echo ""
echo "🔍 Checking Node.js version..."

if command -v node &> /dev/null; then
  node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
  echo "Current Node.js version: v$(node -v | cut -d'v' -f2)"
  if [ "$node_version" -lt 18 ]; then
    echo "⚠️  WARNING: Node.js 18+ recommended for Next.js 14"
  else
    echo "✅ Node.js version is compatible"
  fi
else
  echo "⚠️  node not found"
fi

echo ""
echo "🔍 Attempting build..."

if command -v npm &> /dev/null; then
  echo "Running: npm run build"
  if npm run build 2>&1 | tail -20; then
    echo ""
    echo "✅ Build completed successfully!"
    echo "If Vercel still shows NOT_FOUND, check:"
    echo "  1. Vercel build logs for specific errors"
    echo "  2. Node.js version in Vercel settings"
    echo "  3. Environment variables (if required)"
    echo "  4. Build command in Vercel settings"
  else
    echo ""
    echo "❌ Build failed. Fix the errors above before deploying."
    exit 1
  fi
else
  echo "⚠️  npm not found, skipping build check"
fi

echo ""
echo "✅ Basic checks complete!"

