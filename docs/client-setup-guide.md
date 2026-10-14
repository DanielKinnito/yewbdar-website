# Yewbdar Junk Removal — Client Setup & Onboarding Guide

Welcome! This step-by-step guide will walk you through setting up your two external cloud services:
1. **Resend** (to automatically deliver customer estimate inquiries and booking requests to your dispatch inbox).
2. **Sanity Studio** (your visual dashboard where you can edit prices, truck photos, Google review links, and before/after job photos anytime).

Both services have generous **free tiers** that cost $0/month.

Once you have completed the steps below, you will send **4 short configuration values** (environment variables) to your developer so they can plug them into the live website on Vercel.

---

## Part 1: Resend Setup (Lead Notification Engine)

Resend handles sending instant email alerts whenever an Atlanta customer submits a booking or estimate request on the website.

### Step 1: Create a Free Resend Account
1. Go to [resend.com/signup](https://resend.com/signup).
2. Sign up with your business email or Google account.

### Step 2: Generate an API Key
1. Once logged in, click **API Keys** in the left sidebar menu (or visit [resend.com/api-keys](https://resend.com/api-keys)).
2. Click **Create API Key**.
3. Set the name to: `Yewbdar Website Production`.
4. Leave permissions set to **Full access**.
5. Click **Add**.
6. **Important:** Copy the generated key immediately (it looks like `re_123456789_abcdef...`). You will not be able to see it again after closing the modal.

### Step 3: Choose Your Lead Recipient Email
Decide which email address should receive new customer bookings (e.g., `dispatch@yewbdarjunk.com` or your personal business Gmail).

> **Note for Initial Testing:** On free Resend trial accounts before custom domain verification, Resend only delivers emails to the exact email address you used to register your Resend account. Once your custom domain is connected (see optional Step 4), you can deliver to any address.

### Step 4 (Optional): Connect Your Custom Domain
If you own your domain (e.g. `yewbdarjunk.com`):
1. In Resend, click **Domains** in the sidebar → **Add Domain**.
2. Enter your domain name (e.g. `yewbdarjunk.com`).
3. Resend will provide 3 DNS records (DKIM, SPF, and MX). Add these to your domain provider (GoDaddy, Namecheap, Google Domains, or Cloudflare).
4. Once verified, emails will be delivered cleanly from `dispatch@yewbdarjunk.com` with zero spam warnings.

---

## Part 2: Sanity CMS Setup (Your Content Dashboard)

Sanity powers the `/studio` dashboard where you can change phone numbers, rates, hero photos, and add recent job cleanouts.

### Step 1: Create a Free Sanity Account
1. Go to [sanity.io/get-started](https://sanity.io/get-started).
2. Sign up using your Google, GitHub, or business email.

### Step 2: Create a Project
1. In your Sanity dashboard ([sanity.io/manage](https://sanity.io/manage)), click **Create Project**.
2. Project Name: `Yewbdar Junk Removal`.
3. Choose the **Free** plan.
4. When prompted for a dataset name, use: `production` (default).

### Step 3: Find Your Project ID
1. Once the project is created, look at the top-left of the project dashboard.
2. You will see your **Project ID** (an 8-character string, e.g., `mq9s2re7` or `ab12cd34`). Copy this ID.

### Step 4: Authorize Your Live Website (CORS Setup)
*This allows your website to securely fetch your content from Sanity.*
1. In your Sanity project dashboard, click **API** in the top navigation bar.
2. Scroll to the **CORS Origins** section and click **Add CORS Origin**.
3. In the **Origin** field, enter:
   - For your Vercel deployment: `https://your-project-name.vercel.app` (or enter `*` during initial testing).
   - Also add: `http://localhost:3000` (for local development preview).
4. Check the box labeled **Allow credentials**.
5. Click **Save**.

### Step 5: Invite Your Team Members
1. Click **Members** or **Team** in the top bar.
2. Click **Invite Member** to add anyone else who should have access to update website prices, cleanouts, or photos.

---

## Part 3: What to Send to Your Developer

Once you've completed Parts 1 & 2, copy the block below, fill in your details, and send it directly to your developer:

```text
RESEND_API_KEY=re_paste_your_resend_api_key_here
LEAD_NOTIFICATION_EMAIL=your_dispatch_email@domain.com
NEXT_PUBLIC_SANITY_PROJECT_ID=paste_your_8_char_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Your developer will add these values into the **Vercel Project Settings** under **Environment Variables**, and your live site will instantly be fully operational!

---

## Part 4: Managing Your Website Content

Once the website is live, you can log in to your portal anytime by visiting:
**`https://your-website.com/studio`** (or `https://your-project.vercel.app/studio`)

Inside the Studio, you will see 4 easy sections:

1. **Pricing Tiers**:
   - Add new tiers (e.g. *3/4 Truckload*, *Appliance Special*, *Yard Waste*).
   - Change prices, pickup bed equivalents, or descriptions.
   - Delete tiers you no longer offer.
   - Check the **Most Popular** box to highlight your best-seller.

2. **Recent Projects**:
   - Click `+ Create` to post a newly finished cleanout.
   - Upload **Before Cleanout** and **After Cleanout** photos.
   - Enter neighborhood, truckload volume, crew time, and eco-diversion percentage.

3. **Customer Reviews**:
   - Add top customer reviews, star ratings, and quotes from your clients.

4. **Company Settings**:
   - Update your main business phone number or dispatch email.
   - Add your **Google Maps / Google Business Profile URL** so review badges link straight to your Google reviews.
   - Upload fresh photos of your 16-ft box truck or uniformed crew members.
   - Update business hours and top banner notification text.
