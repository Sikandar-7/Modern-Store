# File Usage Analysis

## ✅ Files Currently Used

### Images (Used):
1. **`logo-v3.webp`** - USED ✅
   - Navbar (line 29)
   - Footer (line 130)
   - Open Graph metadata (layout.tsx line 54)
   - Contact page schema (line 24)
   - About page schema (line 24)

2. **`icon.webp`** - USED ✅
   - Favicon (layout.tsx line 31)

3. **`apple-icon.webp`** - USED ✅
   - Apple touch icon (layout.tsx line 32)

4. **Product images** - USED ✅
   - `/images/products/*` - All product images
   - `/images/carousel/*` - Hero carousel images

---

## ❌ Files NOT Used (Can Be Removed)

### Unused Images:
1. **`logo-v2.webp`** - NOT USED ❌
2. **`logo.webp`** - NOT USED ❌

### Unused SVG Files:
3. **`file.svg`** - NOT USED ❌
4. **`globe.svg`** - NOT USED ❌
5. **`next.svg`** - NOT USED ❌
6. **`vercel.svg`** - NOT USED ❌
7. **`window.svg`** - NOT USED ❌

---

## 📊 Summary

**Total files in `/public`:** 10 files + 1 directory  
**Used:** 3 files + 1 directory (images folder)  
**Unused:** 7 files

**Safe to delete:** 7 files (2 logos + 5 SVGs)  
**Space saved:** ~300KB

---

## 🎯 Recommendation

**Delete these files:**
```
/public/logo-v2.webp
/public/logo.webp
/public/file.svg
/public/globe.svg
/public/next.svg
/public/vercel.svg
/public/window.svg
```

**Keep these files:**
```
/public/logo-v3.webp (actively used)
/public/icon.webp (favicon)
/public/apple-icon.webp (iOS icon)
/public/images/ (all product images)
```
