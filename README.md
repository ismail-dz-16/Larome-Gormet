# 🍽️ Luxury Restaurant Management System
## A Professional Headless E-commerce Solution

[![Developer](https://img.shields.io/badge/Developer-Ismail%20Benmbarek-blue.svg)](https://github.com/ismail-dz-16)
[![Framework](https://img.shields.io/badge/Frontend-React.js-61DAFB.svg)](#)
[![Backend](https://img.shields.io/badge/Backend-WooCommerce-96588A.svg)](#)

### 🌟 Project Overview
This is a modern, full-stack restaurant application. It uses **React** for a beautiful, fast user interface and **WordPress/WooCommerce** as a powerful "Engine" to manage food items, prices, and customer orders.

---

### 👥 Credits & Roles
* **Lead Developer:** **Ismail Benmbarek** (System Architecture & Full-Stack Development)

---

### 📂 Folder Structure Made Simple
| Folder | Content |
| :--- | :--- |
| **`frontend/`** | The React.js source code (The "Visual" part) |
| **`backend/`** | The WordPress data, SQL database, and plugin list |

---

### 🚀 Detailed Setup Guide

#### 1. Backend Configuration (WordPress)
You need a local server environment (like **LocalWP**, **XAMPP**, or **Laragon**).

1.  **Create a Site:** Setup a fresh WordPress installation.
2.  **Import Database:**
    * Open **phpMyAdmin**.
    * Select your database name on the left.
    * Click the **Import** tab, choose `backend/database.sql`, and click **Go**.
3.  **Update URLs (Required):**
    * Install the **"Better Search Replace"** plugin.
    * Search for: `http://luxury.local`
    * Replace with: `http://your-new-local-url.local`
4.  **Plugins & API:**
    * Install: **WooCommerce**, **CoCart**, and **WooCommerce Legacy REST API**.
    * **Permalinks:** Go to *Settings > Permalinks* and select **"Post name"**.
    * **Legacy API:** Go to *WooCommerce > Settings > Advanced > Legacy API* and check **"Enable"**.

---

#### 2. Frontend Configuration (React)
Connect your React interface to your WordPress data.

1.  **Environment Variables:**
    * Find `frontend/.env.example`.
    * **Rename** it to simply `.env`.
    * Open it and fill in your site URL and API Keys:
    ```bash
    REACT_APP_WC_URL=[http://your-site.local](http://your-site.local)
    REACT_APP_WC_CONSUMER_KEY=ck_xxxxxxxxxxx
    REACT_APP_WC_CONSUMER_SECRET=cs_xxxxxxxxxxx
    ```
2.  **Install & Launch:**
    ```bash
    cd frontend
    npm install
    npm start
    ```

---

### 🛠 Technical Highlights
* **Headless Design:** Frontend and Backend communicate via secure REST API.
* **StoreContext:** Custom React state management for the shopping cart and order history.
* **Localhost Bypass:** Specialized PHP filters included to allow development without SSL.

---

### ⚖️ License & Usage
This project was custom-built by **Ismail Benmbarek** for the INSFP Rahmania student group. It is intended for educational evaluation and portfolio demonstration.

---
> **💡 Tip for the Teacher:** To view the styled version of this document in VS Code, press `Ctrl + Shift + V`.
