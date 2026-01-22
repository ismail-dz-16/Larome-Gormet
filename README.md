# 🍽️ Luxury Restaurant Management System
## A Professional Headless E-commerce Solution

[![Developer](https://img.shields.io/badge/Developer-Ismail%20Benmbarek-blue.svg)](https://github.com/ismail-dz-16)
[![Framework](https://img.shields.io/badge/Frontend-React.js-61DAFB.svg)](#)
[![Backend](https://img.shields.io/badge/Backend-WooCommerce-96588A.svg)](#)

### 🌟 Project Overview
This is a modern, full-stack restaurant application. It uses **React** for a beautiful, fast user interface and **WordPress/WooCommerce** as a powerful "Engine" to manage food items, prices, and customer orders.

---

### 👥 Credits & Roles
* **Lead Developer:** Ismail Benmbarek (System Architecture & Full-Stack Development)

---

### 📂 Folder Structure Made Simple
* `frontend/`: Contains the visual website (React).
* `backend/`: Contains the WordPress data and setup files.

---

### 🚀 How to Setup the Project (Easy Steps)

#### 1. Setup the Backend (WordPress)
You need a "local server" to run WordPress. I recommend using **LocalWP** or **XAMPP**.

1.  **Create a Site:** Create a new WordPress site on your computer.
2.  **Import Database:** - Open **phpMyAdmin**.
    - Click on your site's database name.
    - Click **Import**, choose the `backend/database.sql` file, and click **Go**.
3.  **Install Plugins:**
    - Go to your WordPress Dashboard > Plugins.
    - Install: **WooCommerce**, **CoCart**, and **WooCommerce Legacy REST API**.
4.  **Final Tweak:** - Go to **Settings > Permalinks**, select **"Post name"**, and Save.
    - Go to **WooCommerce > Settings > Advanced > Legacy API** and check the box to **Enable** it.

#### 2. Setup the Frontend (React)
1.  **Open Terminal:** Go into the `frontend` folder.
2.  **Install:** Type `npm install` and wait for it to finish.
3.  **Connect:** - Enter `.env`.
    - Put your WordPress link and your API Keys inside.
4.  **Run:** Type `npm start`.
---

### 🛠 Technical Highlights
* **Headless Design:** The website "talks" to WordPress through the cloud.
* **Smart Cart:** Orders are saved and managed automatically.
* **Localhost Ready:** Includes a special fix for running on local computers without SSL errors.

---

### ⚖️ License & Usage
This project was custom-built by **Ismail Benmbarek** for the INSFP Rahmania student group. It is intended for educational evaluation and portfolio demonstration.
