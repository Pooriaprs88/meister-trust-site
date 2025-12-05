# GitHub Upload Guide

## Your Repository Info
- **Repository URL:** https://github.com/Pooriaprs88/meister-trust-site.git
- **Current Branch:** main
- **Status:** Connected and ready to push

## Step-by-Step Instructions

### Step 1: Review Your Changes
You have several files that have been modified or added:
- ✅ Updated `index.html` (certificates, contact form)
- ✅ Updated `js/scripts.js` (EmailJS integration)
- ✅ Updated `css/styles.css` (certificate styling)
- ✅ New certificate images (JPEG files)
- ✅ Documentation files (setup guides)

### Step 2: Stage All Changes
This will add all modified and new files to be committed.

**Command:**
```bash
git add .
```

### Step 3: Commit Your Changes
Create a commit with a descriptive message.

**Command:**
```bash
git commit -m "Update website: Add EmailJS contact form, update certificates to JPEG format, and add documentation"
```

Or use a shorter message:
```bash
git commit -m "Complete website updates: EmailJS integration and certificate updates"
```

### Step 4: Push to GitHub
Upload your changes to GitHub.

**Command:**
```bash
git push origin main
```

### Step 5: Verify on GitHub
1. Go to: https://github.com/Pooriaprs88/meister-trust-site
2. Refresh the page
3. You should see all your latest changes!

---

## Quick One-Line Commands (All at Once)

If you want to do everything in sequence:

```bash
git add . && git commit -m "Complete website updates: EmailJS integration and certificate updates" && git push origin main
```

---

## Important Notes

### EmailJS Credentials
Your EmailJS credentials (Public Key, Service ID, Template ID) are in your JavaScript file. This is **normal and safe** because:
- ✅ EmailJS is designed for client-side use
- ✅ Public keys are meant to be visible
- ✅ EmailJS has built-in security features
- ✅ Your private email and password are NOT exposed

### What Gets Uploaded
- ✅ All website files (HTML, CSS, JS)
- ✅ All images and assets
- ✅ Documentation files
- ✅ Certificate images (JPEG files)

### What Doesn't Get Uploaded (Protected by .gitignore)
- ❌ `.DS_Store` files (Mac system files)

---

## Troubleshooting

### If you get an error about authentication:
You may need to authenticate with GitHub. Options:
1. Use GitHub Desktop app
2. Set up SSH keys
3. Use GitHub CLI
4. Use Personal Access Token

### If you want to see what will be committed:
```bash
git status
```

### If you want to see the differences:
```bash
git diff
```

---

## Next Steps After Uploading

Once your code is on GitHub, you can:

1. **Deploy to a hosting service** like:
   - GitHub Pages (free, easy)
   - Netlify (free, great for static sites)
   - Vercel (free, fast)
   - Any web hosting service

2. **Set up GitHub Pages** (if you want to host directly from GitHub):
   - Go to your repository settings
   - Enable GitHub Pages
   - Your site will be live at: `https://pooriaprs88.github.io/meister-trust-site/`

---

**Ready to upload? Run the commands above!** 🚀

