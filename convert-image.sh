#!/bin/bash
# Quick script to convert HEIC to JPG for hero background

echo "Converting IMG_2490.heic to hero-background.jpg..."

# Try sips (macOS built-in)
if command -v sips &> /dev/null; then
    sips -s format jpeg public/IMG_2490.heic --out public/hero-background.jpg
    echo "✓ Conversion complete using sips!"
    exit 0
fi

# Try ImageMagick
if command -v convert &> /dev/null; then
    convert public/IMG_2490.heic public/hero-background.jpg
    echo "✓ Conversion complete using ImageMagick!"
    exit 0
fi

# Try Python with Pillow
if command -v python3 &> /dev/null; then
    python3 -c "from PIL import Image; img = Image.open('public/IMG_2490.heic'); img.convert('RGB').save('public/hero-background.jpg', 'JPEG', quality=90)" 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "✓ Conversion complete using Python/Pillow!"
        exit 0
    fi
fi

echo "❌ No conversion tool found. Please convert manually:"
echo "   1. Open public/IMG_2490.heic in Preview (macOS)"
echo "   2. File → Export"
echo "   3. Format: JPEG"
echo "   4. Save as: public/hero-background.jpg"

