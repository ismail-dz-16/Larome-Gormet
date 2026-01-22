🍽️ Luxury Restaurant Management System
A Professional Headless E-commerce Solution
🌟 Project Overview
This is a modern, full-stack restaurant application. It uses React for a beautiful, fast user interface and WordPress/WooCommerce as a powerful "Engine" to manage food items, prices, and customer orders.

👥 Credits & Roles
Lead Developer: Ismail Benmbarek (System Architecture & Full-Stack Development)

📂 Folder Structure Made Simple
frontend/: Contains the visual website (React).

backend/: Contains the WordPress data and setup files.

🚀 Detailed Setup Guide
1. Backend Configuration (WordPress)
You need a local server environment (like LocalWP, XAMPP, or Laragon).

Create a Site: Setup a fresh WordPress installation.

Import Database: - Open phpMyAdmin.

Select your database name on the left.

Click the Import tab at the top.

Choose the file backend/database.sql.

Scroll down and click Import/Go.

Update URLs (Important): - Since the database was exported from a different local URL, use the "Better Search Replace" plugin.

Search for the old URL (e.g., http://luxury.local) and replace it with your new local URL (e.g., http://localhost/restaurant).

Install Plugins:

Go to Plugins > Add New.

Search and Install: WooCommerce, CoCart, and WooCommerce Legacy REST API.

Critical Settings:

Permalinks: Go to Settings > Permalinks, select "Post name", and Save.

Legacy API: Go to WooCommerce > Settings > Advanced > Legacy API and check "Enable the legacy REST API".

2. Frontend Configuration (React)
Before running the app, you must link it to your WordPress backend.

Open Terminal: Navigate to the frontend/ folder.

Setup Environment Variables:

Find the file named .env.example.

Rename it to exactly .env.

Open .env in VS Code and fill in your details:

Bash

REACT_APP_WC_URL=http://your-local-site.local
REACT_APP_WC_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxx
REACT_APP_WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxx
(Generate these keys in WooCommerce > Settings > Advanced > REST API)

Install & Run:

Run npm install to download the libraries.

Run npm start to launch the website.

🛠 Technical Highlights
Headless Design: The React frontend consumes the WooCommerce REST API for products and orders.

StoreContext: Uses React Context API to handle global state without external libraries like Redux.

Localhost Bypass: Includes a custom PHP filter (see backend/plugins.txt) to allow local API requests without SSL.

⚖️ License & Usage
This project was custom-built by Ismail Benmbarek for the INSFP Rahmania student group. It is intended for educational evaluation and portfolio demonstration.

💡 Pro Tip
To see the rendered version of this documentation locally, press Ctrl + Shift + V in VS Code.
