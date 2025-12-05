# Fix Domain: meistertrustservices.ca

## Current Issue
- **Status:** Invalid Configuration
- **Domain:** meistertrustservices.ca

## What Vercel Requires

Vercel has provided specific instructions to fix this domain. You need to make changes at your **domain registrar** (where you bought the domain).

---

## Step-by-Step Fix

### Step 1: Go to Your Domain Registrar
Log in to where you purchased `meistertrustservices.ca`. Common registrars:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Your hosting provider

### Step 2: Find DNS Management
Look for:
- "DNS Management"
- "DNS Settings"
- "Domain Settings" → "DNS"
- "Nameservers & DNS"

### Step 3: Remove the Conflicting Record
**You need to DELETE this DNS record:**
```
Type: AAAA
Name: @
Value: 100::
```

**How to remove:**
1. Find the DNS record list
2. Look for a record with Type "AAAA" and Name "@"
3. Click Delete/Remove/Trash icon
4. Confirm deletion

### Step 4: Add the New A Record
**You need to ADD this DNS record:**
```
Type: A
Name: @ (or leave blank, depending on your registrar)
Value: 216.198.79.1
```

**How to add:**
1. Click "Add Record" or "+ Add DNS Record"
2. Select Type: **A**
3. Enter Name: **@** (or leave blank)
4. Enter Value: **216.198.79.1**
5. Save the record

---

## Important Notes

### About the New IP Address
- **New Value:** `216.198.79.1` ✅ (Use this - recommended)
- **Old Value:** `76.76.21.21` (Still works but not recommended)
- Vercel is expanding their IP range, so the new address is preferred

### DNS Propagation
- Changes can take **10 minutes to 48 hours** to take effect
- Usually works within **30-60 minutes**
- Don't worry if it doesn't work immediately!

### After Making Changes
1. **Wait 10-15 minutes**
2. Go back to Vercel dashboard
3. Click **"Refresh"** next to the domain
4. Check if status changed to "Valid Configuration"

---

## Detailed Instructions by Registrar

### If using GoDaddy:
1. Go to "My Products" → "Domains"
2. Click on `meistertrustservices.ca`
3. Scroll to "DNS Records"
4. Delete the AAAA record with value `100::`
5. Click "Add" → Select "A" record
6. Name: `@`, Value: `216.198.79.1`
7. Save

### If using Namecheap:
1. Go to "Domain List"
2. Click "Manage" next to your domain
3. Go to "Advanced DNS" tab
4. Delete the AAAA record with `100::`
5. Click "Add New Record" → Type "A Record"
6. Host: `@`, Value: `216.198.79.1`
7. Save

### If using Google Domains:
1. Go to "My domains"
2. Click on your domain
3. Go to "DNS" tab
4. Delete the AAAA record with `100::`
5. Click "Add custom record"
6. Type: A, Name: @, IPv4: `216.198.79.1`
7. Save

### If using Cloudflare:
1. Select your domain
2. Go to "DNS" → "Records"
3. Delete the AAAA record with `100::`
4. Click "Add record"
5. Type: A, Name: @, IPv4: `216.198.79.1`
6. Save

---

## Quick Copy-Paste Values

**Remove this:**
```
AAAA | @ | 100::
```

**Add this:**
```
A | @ | 216.198.79.1
```

---

## Verify the Fix

After making changes and waiting 10-15 minutes:

1. **In Vercel:** Click "Refresh" button
2. **Check status:** Should change from "Invalid Configuration" to "Valid Configuration" ✅
3. **Test the domain:** Visit `https://meistertrustservices.ca` in a browser

---

## Need Help?

If you're not sure which registrar you're using:
1. Check your email for domain purchase confirmation
2. Or check your billing/credit card statement
3. The email usually says which company you registered with

**Common registrars:**
- If you see "GoDaddy" in emails → GoDaddy
- If you see "Namecheap" → Namecheap  
- If you see "Google" → Google Domains
- If you see "Cloudflare" → Cloudflare

---

## Summary

✅ **Remove:** AAAA record with value `100::`  
✅ **Add:** A record with value `216.198.79.1`  
⏳ **Wait:** 10-60 minutes for DNS to update  
🔄 **Refresh:** Click refresh in Vercel to check status  

Your site will work once DNS propagates! 🚀

