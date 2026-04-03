# 💰 Finance Backend System

A simple backend project built using Node.js, Express, and MongoDB to manage users, transactions, and dashboard analytics.

---

## 🚀 Features

- User Management (Create & Get Users)
- Transaction Management (Income & Expense)
- Role-based Access (Admin / Viewer)
- Dashboard Summary (Total Income, Expense, Balance)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📂 API Endpoints

### 👤 Users
- GET /users → Get all users  
- POST /users → Create user  

### 💸 Transactions
- GET /transactions → Get all transactions  
- POST /transactions → Add transaction (Admin only)  
- PUT /transactions/:id → Update (Admin only)  
- DELETE /transactions/:id → Delete (Admin only)  

### 📊 Dashboard
- GET /dashboard → Get total income, expense & balance  

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/ChaurasiyaDharmendra/backend-finance-system.git
cd backend-finance-system
npm install
npm start
