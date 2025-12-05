# EmailJS Setup Instructions

This guide will help you configure EmailJS so your contact form sends emails to **MeisterTrustServices@outlook.com**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Create an account using your email address
4. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose **"Outlook"** (since you're using @outlook.com)
4. Follow the connection wizard:
   - You may need to connect your Outlook account
   - Or you can use **"Custom SMTP Server"** with Outlook settings:
     - **SMTP Server:** smtp-mail.outlook.com
     - **SMTP Port:** 587
     - **SMTP Username:** MeisterTrustServices@outlook.com
     - **SMTP Password:** (your Outlook email password)
5. Give your service a name (e.g., "Meister Trust Contact Form")
6. Click **"Create Service"**
7. **Copy your Service ID** - you'll need this later (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use these template settings:

   **Template Name:** Contact Form Submission

   **Subject:** New Contact Form Submission from {{from_name}}

   **Content:**
   ```
   You have received a new message from your website contact form.

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}

   Message:
   {{message}}

   ---
   This email was sent from the Meister Trust Services website contact form.
   Reply directly to: {{from_email}}
   ```

4. Set **"To Email"** to: `MeisterTrustServices@outlook.com`
5. Set **"From Name"** to: `Meister Trust Website`
6. Set **"Reply To"** to: `{{from_email}}`
7. Click **"Save"**
8. **Copy your Template ID** - you'll need this later (e.g., `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the left sidebar
2. Scroll down to find your **"Public Key"** (e.g., `xxxxxxxxxxxxxxx`)
3. **Copy this Public Key** - you'll need it

## Step 5: Update Your Website Code

You need to update three values in your `js/scripts.js` file:

1. Open the file: `/Users/pooria/Documents/Meister Trust/js/scripts.js`

2. Find these lines (around lines 61-62 and 104):
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   ```
   and
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
   ```

3. Replace:
   - `YOUR_PUBLIC_KEY` with your Public Key from Step 4
   - `YOUR_SERVICE_ID` with your Service ID from Step 2
   - `YOUR_TEMPLATE_ID` with your Template ID from Step 3

4. Save the file

### Example:
```javascript
emailjs.init("abc123xyz456"); // Your actual Public Key

// ... later in the code ...

emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Step 6: Test Your Form

1. Open your website in a browser
2. Navigate to the Contact Us section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email at **MeisterTrustServices@outlook.com** - you should receive the message!

## Troubleshooting

### Form doesn't send emails
- Make sure you've replaced all three values (Public Key, Service ID, Template ID) in `js/scripts.js`
- Check the browser console (F12) for any error messages
- Verify your EmailJS service is connected properly

### Emails go to spam
- Check your Outlook spam/junk folder
- Make sure your EmailJS account is verified
- Consider adding EmailJS to your Outlook safe senders list

### Error messages
- Verify all IDs are correct (no extra spaces)
- Make sure the template variables match: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`
- Check that your EmailJS account is active

## Free Tier Limits

EmailJS free tier includes:
- **200 emails per month** - perfect for small businesses
- If you need more, they offer paid plans starting at $15/month

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Important Notes:**
- Never share your EmailJS Public Key, Service ID, or Template ID publicly
- These credentials are visible in your website's JavaScript (front-end), which is normal for EmailJS
- If you want extra security, consider upgrading to a paid plan with domain restrictions

