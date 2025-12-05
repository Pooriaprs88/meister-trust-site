# Vercel Domain Configuration Guide

## Current Domain Status

Based on your Vercel dashboard, you have the following domains:

### ✅ Working:
- **`meister-trust-site-jvwc.vercel.app`** - Valid Configuration (This is your default Vercel domain - always works!)

### ⚠️ Needs Configuration:
- **`meistertrustservices.com`** - Invalid Configuration
- **`www.meistertrustservices.com`** - DNS Change Recommended
- **`meistertrustservices.ca`** - Invalid Configuration  
- **`www.meistertrustservices.ca`** - DNS Change Recommended

---

## How to Fix Domain Configuration Issues

### Option 1: Fix DNS Configuration (Recommended)

To fix the "Invalid Configuration" and "DNS Change Recommended" statuses:

1. **Click "Learn more"** next to each domain to see specific instructions
2. **Or click "Edit"** on each domain to see the DNS records you need

#### For each domain, you typically need to:

**For root domains (meistertrustservices.com, meistertrustservices.ca):**
- Add an **A record** pointing to Vercel's IP addresses, OR
- Add a **CNAME record** pointing to `cname.vercel-dns.com`

**For www subdomains (www.meistertrustservices.com, www.meistertrustservices.ca):**
- Add a **CNAME record** pointing to `cname.vercel-dns.com`

### Step-by-Step DNS Configuration:

1. **Go to your domain registrar** (where you bought the domain)
   - Common registrars: GoDaddy, Namecheap, Google Domains, etc.

2. **Find DNS Management/DNS Settings**

3. **Add the following DNS records:**

   For **meistertrustservices.com**:
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.21.21
   ```

   For **www.meistertrustservices.com**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   For **meistertrustservices.ca**:
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 76.76.21.21
   ```

   For **www.meistertrustservices.ca**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS propagation** (can take a few minutes to 48 hours)

5. **In Vercel, click "Refresh"** on each domain to check status

---

### Option 2: Use Vercel's Nameservers (Easier)

Instead of managing DNS records, you can use Vercel's nameservers:

1. In Vercel, click "Edit" on a domain
2. Look for "Nameservers" option
3. Copy the nameservers provided
4. Go to your domain registrar
5. Replace your current nameservers with Vercel's nameservers
6. Wait for propagation (24-48 hours)

---

## Current Setup Analysis

Looking at your configuration:
- **Primary domain:** `meistertrustservices.ca` (set to Production)
- **Redirects:** Other domains redirect to `meistertrustservices.ca`
- **Default Vercel domain:** `meister-trust-site-jvwc.vercel.app` (always works as backup)

---

## Quick Actions

### To View Your Site Right Now:
- Visit: `https://meister-trust-site-jvwc.vercel.app`
- This always works while you're fixing custom domains!

### To Fix Domain Issues:
1. Click **"Edit"** on any domain with issues
2. Follow the DNS instructions shown
3. Update DNS at your domain registrar
4. Click **"Refresh"** in Vercel after 10-15 minutes

### To Test DNS Configuration:
You can check if DNS is working:
- Visit: https://dnschecker.org/
- Enter your domain
- Check if it resolves correctly

---

## Common Issues & Solutions

### Issue: "Invalid Configuration"
**Solution:** DNS records are not set correctly or not propagated yet
- Check DNS records match Vercel's requirements
- Wait for DNS propagation (can take time)
- Click "Refresh" in Vercel after waiting

### Issue: "DNS Change Recommended"
**Solution:** DNS is working but Vercel recommends updating for better performance
- Usually means you should use CNAME instead of A record
- Or update to Vercel's recommended nameservers

### Issue: Domain Not Working
**Solution:**
1. Use the default Vercel domain: `meister-trust-site-jvwc.vercel.app`
2. Fix DNS at your registrar
3. Wait for DNS propagation
4. Contact your domain registrar if issues persist

---

## Need Help?

1. **In Vercel:** Click "Learn more" next to any domain for specific instructions
2. **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
3. **Domain Registrar:** Contact your domain provider's support

---

## Your Working URLs

✅ **Always Works:**
- `https://meister-trust-site-jvwc.vercel.app`

⏳ **After DNS is Fixed:**
- `https://meistertrustservices.ca`
- `https://www.meistertrustservices.ca`
- `https://meistertrustservices.com`
- `https://www.meistertrustservices.com`

---

**Remember:** Your site is live and working on the Vercel domain! Custom domains are just for branding. Take your time to configure DNS correctly.

