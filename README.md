# Luxury Restaurant Management System
## Full-Stack Headless Architecture: React & WooCommerce

[![INSFP Rahmania](https://img.shields.io/badge/Institute-INSFP%20Rahmania-blue.svg)](https://rahmania.dz)
[![Instructor](https://img.shields.io/badge/Instructor-Mdm%20Menayache-orange.svg)](#)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](#)

### 📖 About the Project
This system is a high-performance restaurant management application built using a **Headless CMS** architecture. It decouples the presentation layer from the business logic, utilizing **React** for a premium user interface and **WooCommerce** as a robust administrative backend.

This project was developed as a core requirement for the **S3 Web Development** module at **INSFP Rahmania**.

---

### 👥 Development Team
The development and implementation of this system were carried out by:
- **Nayer Mohamed**
- **Djellid Mohamed Ayoub**
- **Guellati Nadjia Khouloud**
- **Messadh Imane Sarah**

---

### 📂 Project Structure

A clean separation of concerns is maintained through the following directory structure:

| Folder | Responsibility |
| :--- | :--- |
| `frontend/` | React.js application (State, Context, UI) |
| `backend/` | WordPress/WooCommerce Assets (DB, Plugins) |
| `root` | Documentation & Configuration |

```text
luxury-restaurant-project/
├── frontend/               # React.js application
│   ├── src/                # Global State & Components
│   └── .env.example        # API key template
├── backend/                # WordPress Assets
│   ├── database.sql        # MySQL Database Export
│   ├── plugins.txt         # Required plugins list
│   └── instructions.txt    # Restoration guide
└── README.md               # Main documentation
🛠 Technical Highlights
Headless Architecture: Full communication via WooCommerce REST API using Axios.

Global State: Managed through React Context API (StoreContext) for persistence.

Backend Logic: All pricing and order statuses are managed by WooCommerce.

Session Management: Integrated with CoCart API for seamless cart handling.

🚀 Installation & Deployment
1. Backend Restoration (WordPress)
Database: Import backend/database.sql into your MySQL environment.

Plugins: Install the plugins listed in backend/plugins.txt.

Permalinks: Set to Post name in WordPress Settings.

Legacy API: Enable in WooCommerce > Settings > Advanced.

2. Frontend Setup (React)
Bash

# Navigate to the directory
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
Note: Fill in your REACT_APP_WC_URL and Keys in the new .env file.

Bash

# Start development server
npm start
💡 Local Development Support
When running on localhost, ensure you activate the Permission Filter snippet found in backend/plugins.txt. This allows the React application to interact with the API without SSL blocks.

⚖️ License
This project is developed for educational purposes at INSFP Rahmania. All rights reserved by the project team.


---

### How to see the "Styled" version before GitHub:
If you want to be sure it looks good before pushing:
1.  Open the file in **VS Code**.
2.  Press **`Ctrl + Shift + V`** (Windows) or **`Cmd + Shift + V`** (Mac).
3.  VS Code will show you the "Preview" which is exactly how it will look on GitHub.

**Should I give you the terminal commands to push this to your GitHub profile now?**