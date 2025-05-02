
# 🚀 GizmoRent – Gadget Rental Marketplace

[![Live Site](https://img.shields.io/badge/Live%20Demo-Visit-blue?style=for-the-badge&logo=vercel)](https://gizmorent-7af7c.web.app/)

GizmoRent is a feature-rich gadget rental marketplace designed to connect tech enthusiasts and gadget owners in a secure, real-time environment. Whether you're looking to rent a device affordably or earn from idle tech, GizmoRent provides a seamless, trustworthy platform for it all.

---

## 🎯 Project Goal

- **Accessibility & Affordability**: Rent high-end gadgets without buying.
- **Monetization for Owners**: Earn by lending unused gadgets.
- **Secure Transactions**: Safe payments, deposits & agreements.
- **Trust & Reliability**: User verification, ratings & reviews.
- **Real-Time Rental Experience**: Instant booking & availability updates.

---

## 🖥️ Live Demo

👉 **[Click here to visit GizmoRent](https://gizmorent-7af7c.web.app/)**

---

## 📌 Core Features

### 🏠 Home Page
- Dynamic Navbar with login-aware rendering
- Banner/Slider with eye-catching UI
- Top Categories & Top Rented Gadgets section
- Contributor leaderboard and Best Deals of the Day
- Real-time renting & easy booking form
- How it Works, Testimonials, FAQ, Footer with links

### 🔐 Authentication
- Email/Password login & register
- Google Sign-In
- Password strength validation & error handling
- Toast notifications for feedback

### 🛍️ Product Features
- All Products page with search, filter by category & price
- Product Details: specs, ratings, availability, wishlist/cart
- Cart & Wishlist Management
- Checkout with billing & Stripe payment integration
- Order Tracking and rental management

### 🧑‍💼 Dashboards

#### Renter Dashboard
- Add Gadget (Admin approval needed)
- Order condition management
- Withdrawal requests
- Profile management

#### Admin Dashboard
- Full statistics (users, gadgets, orders, revenue)
- Add/Edit Gadget with approval flow
- Renter approval, earnings tracking, notifications

---

## 📄 Additional Pages

- **About Us**: Platform overview, gallery, FAQs
- **Pricing**: Rental and premium plan tiers
- **Review Page**: Share user experiences
- **Privacy Policy** & **Terms & Conditions**
- **Contact Us** & **WhatsApp Message Widget**

---

## 🛠️ Tech Stack

### 🌐 Frontend
- **React.js** + **Vite** for blazing fast performance
- **Tailwind CSS**, **DaisyUI** for elegant UI
- **React Router DOM** for routing
- **Redux Toolkit**, **React Query** for state/data
- **React Hook Form**, **SweetAlert2**, **Swiper**, **Recharts**

### 🔌 Backend & Services
- **Firebase** for auth & hosting
- **Stripe** for secure payments
- **EmailJS** for sending emails
- **Axios** for HTTP requests
- **Localforage** for client-side storage

---

## 📁 Project Setup

```bash
git clone https://github.com/yourusername/gizmorent-client.git
cd gizmorent-client
npm install
npm run dev
````

> Configure `.env` with your Firebase, Stripe, and EmailJS keys as shown below:

```
VITE_apiKey=...
VITE_authDomain=...
VITE_projectId=...
VITE_publishable_key=...
```

---

## 📌 License

This project is licensed under the [MIT License](LICENSE).

---




