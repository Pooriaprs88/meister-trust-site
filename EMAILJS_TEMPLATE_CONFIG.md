# EmailJS Template Configuration

## Step 3: Create Email Template - Detailed Instructions

### Quick Start: Use "Contact Us" Template

Since you see the "Contact Us" template in the modal:

1. **Click "Contact Us"** in the template list (it's already highlighted)
2. Click **"Use this template"** or **"Continue"** button
3. You'll be taken to the template editor

### Template Configuration Settings

Once in the template editor, configure it as follows:

#### Basic Settings:
- **Template Name:** `Contact Form Submission` (or any name you prefer)

#### Email Settings:
- **Service:** Select your service (the one with ID: `service_isid7ey`)
- **To Email:** `MeisterTrustServices@outlook.com`
- **From Name:** `Meister Trust Website`
- **Reply To:** `{{from_email}}` (this allows you to reply directly to the person who filled the form)

#### Subject Line:
```
New Contact Form Submission from {{from_name}}
```

#### Email Content/Body:

Copy and paste this content:

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

**Important:** Make sure to use the exact variable names:
- `{{from_name}}` - Name from the form
- `{{from_email}}` - Email from the form
- `{{phone}}` - Phone number from the form
- `{{message}}` - Message from the form

### After Creating Template:

1. **Click "Save"** button
2. **Copy your Template ID** - it will look like `template_xxxxxxx`
   - You'll need this in Step 5!

### What Your Form Sends:

Your contact form sends these variables:
- `from_name` → Maps to `{{from_name}}` in template
- `from_email` → Maps to `{{from_email}}` in template
- `phone` → Maps to `{{phone}}` in template
- `message` → Maps to `{{message}}` in template

### Next Steps:

After creating the template:
1. ✅ Copy your **Template ID** (e.g., `template_abc123`)
2. ⏭️ Go to **Step 4** - Get your Public Key
3. ⏭️ Then **Step 5** - Update your website code with all three values:
   - Public Key
   - Service ID: `service_isid7ey` (you already have this!)
   - Template ID (from this step)

---

**Need Help?**
- EmailJS Template Docs: https://www.emailjs.com/docs/user-guide/creating-email-templates/
- The template editor has a preview feature - use it to test your template!

