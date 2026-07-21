# Bombay Restaurant — Production Deployment & Booking Automation Guide

This guide provides step-by-step instructions for deploying the **Bombay Restaurant** Next.js website and setting up the **Hermes AI Booking Agent** using a highly optimized, professional hybrid architecture.

---

## Architecture Overview

```
                           [ Cloudflare (DNS / CDN) ]
                                      |
                 +--------------------+--------------------+
                 |                                         |
     (Root Domain: @ / www)                      (Subdomain: agent)
                 v                                         v
         [ Vercel (Hobby) ]                      [ Hostinger (KVM 1 VPS) ]
                 |                                         |
         Next.js Frontend                          Hermes Node.js Agent
                 |                                         |
         (Automated Git Deploy)                  (Persistent WhatsApp Client)
```

1.  **Frontend (Next.js)**: Hosted on **Vercel** (Free, integrated edge CDN, auto-builds on Git push).
2.  **AI Reservation Agent (Hermes)**: Hosted on a **Hostinger KVM 1 VPS** (Persistent Ubuntu environment with root terminal access).
3.  **DNS & CDN**: Managed via **Cloudflare** (Free tier, provides SSL, caching, and custom routing).
4.  **Domains & Mail**: Registered on **Hostinger** (Consolidated billing, premium professional email).

---

## Step 1: Purchasing Assets (Hostinger)

1.  **Domain Name**: Buy your domain name (e.g., `bombayrestaurant.com` or similar) through Hostinger.
2.  **VPS Server**: Purchase the **KVM 1 VPS Plan** (1 vCPU, 4 GB RAM, 50 GB NVMe).
    *   *OS Recommendation*: Choose **Ubuntu 24.04 LTS (64-bit)** during the initial OS installation wizard.
3.  **Professional Email**: Purchase Hostinger's **Business Email** plan (adds custom mailboxes like `reservations@bombayrestaurant.com`).

---

## Step 2: Configuring Cloudflare DNS & CDN (Free)

Using Cloudflare improves page speeds, provides free SSL, and allows you to easily route subdomains to your VPS.

1.  Create a free account at [Cloudflare.com](https://www.cloudflare.com).
2.  Click **Add Site** and input your domain.
3.  Cloudflare will scan your existing DNS records and provide you with **two Nameservers** (e.g., `alisa.ns.cloudflare.com` and `bob.ns.cloudflare.com`).
4.  Log into **Hostinger hPanel** $\rightarrow$ **Domains** $\rightarrow$ **Change Nameservers**. Replace Hostinger's default nameservers with Cloudflare's.
5.  Wait 5–10 minutes for DNS propagation. All DNS records will now be managed inside the Cloudflare Dashboard.

---

## Step 3: Deploying the Frontend (Vercel)

1.  Create a free account at [Vercel.com](https://vercel.com) using your GitHub profile.
2.  Click **Add New** $\rightarrow$ **Project**, then import your `Bombaydar` repository.
3.  Keep default Next.js build settings and click **Deploy**.
4.  Once deployed, go to **Project Settings** $\rightarrow$ **Domains**.
5.  Add your custom domain (e.g., `bombayrestaurant.com`).
6.  Vercel will instruct you to add a DNS record. Go to your **Cloudflare Dashboard** $\rightarrow$ **DNS Settings**, and add:
    *   **Type**: `CNAME`
    *   **Name**: `@` (or your root domain)
    *   **Target**: `cname.vercel-dns.com`
    *   **Proxy Status**: *DNS Only* (Grey cloud) or *Proxied* (Orange cloud). *Note: Vercel recommends DNS Only during verification, but you can turn on Proxied once active.*

---

## Step 4: Setting up the Hermes Agent on Hostinger VPS

### A. Initial Server Configuration
Log into your Hostinger hPanel, click **VPS**, open the **Browser Terminal** (or connect via SSH using PowerShell: `ssh root@your_vps_ip`), and run the setup script:

```bash
# Update Ubuntu packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (Version 20+) and Node Package Manager (NPM)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Git and build utilities
sudo apt-get install -y git build-essential

# Install PM2 (Process Manager to run Hermes persistently in the background)
sudo npm install --global pm2
```

### B. Installing & Configuring Hermes Agent
1. Clone the official Hermes repository on the VPS:
   ```bash
   git clone https://github.com/NousResearch/hermes-agent.git /opt/hermes-agent
   cd /opt/hermes-agent
   npm install
   ```
2. Set up the environment variables:
   Create a `.env` file in the `/opt/hermes-agent` folder:
   ```env
   OPENAI_API_KEY=your_key_here
   PORT=4000
   ```
3. Initialize the WhatsApp connection:
   ```bash
   npx hermes gateway setup
   ```
   Select **WhatsApp** (Baileys client). The terminal will generate a **QR Code**. 
   *   Open **WhatsApp** on your restaurant's business phone.
   *   Go to **Settings** $\rightarrow$ **Linked Devices** $\rightarrow$ **Link a Device**.
   *   Scan the terminal QR code to log the Hermes Agent into your WhatsApp account.

4. Run Hermes persistently using PM2:
   ```bash
   pm2 start npm --name "hermes-agent" -- start
   pm2 save
   pm2 startup
   ```
   *Your agent will now run 24/7, keeping the WhatsApp connection alive even if you close your terminal.*

---

## Step 5: Connecting the Next.js Frontend to Hermes

1.  In **Cloudflare**, point a subdomain (e.g., `agent.bombayrestaurant.com`) to your Hostinger VPS IP address:
    *   **Type**: `A` record
    *   **Name**: `agent`
    *   **IPv4 Address**: `YOUR_HOSTINGER_VPS_IP`
    *   **Proxy Status**: *Proxied* (Orange Cloud)
2.  Update the API endpoint URL in your React code. Edit [BookingWidget.tsx](file:///d:/bombaydar/src/components/BookingWidget.tsx) (or the route handler) to forward the **EatNow form submissions** to the VPS:
    ```typescript
    const handleSubmit = async (data) => {
      await fetch("https://agent.bombayrestaurant.com/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    };
    ```

---

## Troubleshooting & Maintenance Commands (VPS)

*   **View Live Agent Logs (WhatsApp messages, errors)**:
    ```bash
    pm2 logs hermes-agent
    ```
*   **Restart the Agent**:
    ```bash
    pm2 restart hermes-agent
    ```
*   **Stop the Agent**:
    ```bash
    pm2 stop hermes-agent
    ```
*   **Update the Agent's Code**:
    ```bash
    cd /opt/hermes-agent
    git pull
    npm install
    pm2 restart hermes-agent
    ```
