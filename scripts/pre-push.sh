#!/bin/bash

echo "🔍 Running pre-push checks..."

echo "1. Running ESLint..."
if ! bun lint; then
    echo "❌ ESLint failed. Fix errors before pushing."
    exit 1
fi
echo "✅ ESLint passed"

echo "2. Building project..."
if ! bun run build; then
    echo "❌ Build failed. Fix errors before pushing."
    exit 1
fi
echo "✅ Build successful"

echo "3. Checking unused components..."
bun run scripts/check-unused-components.ts
echo "⚠ Note: Unused component check is informational only"

echo "4. Checking unused dependencies..."
bunx depcheck

echo "🎉 All checks passed! You may push."
exit 0
