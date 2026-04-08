## 🚀 Live Demo (URL)
🔗 Backend (Render): https://blogging-website-v2backend.onrender.com

🔗 Frontend (Netlify): https://blogging-version2.netlify.app/

## 🔑 Demo Credentials (For Testing)

To explore the live application without creating a new account, you can use the following test credentials:
```
- Email: kathirvelmuruganwanthan@gmail.com
- Password: Kathirvel@123
```
⚠️ Note: This is a demo account intended for testing purposes only.

# 📝 Fullstack MERN Blogging Website

A modern, fully functional **blogging platform** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This application allows users to create, edit, publish, and interact with blogs through a clean and responsive interface.

---

## ✨ Features

### 🖊️ Blogging & Editor
- Modern blog editor using **Editor.js**
- Create, edit, publish, and save drafts
- Dynamic blog pages with unique URLs

### 🔐 Authentication
- Secure login with **Google Authentication**
- User account management
- Change password from settings

### 🔍 Search & Discovery
- Search blogs and users
- Explore user profiles with published blogs

### 👤 User Profile
- Dedicated profile page
- Add social links & bio
- View all published blogs

### 📊 Dashboard
- Manage blogs (Published / Drafts)
- Edit or delete posts
- Blog analytics overview

### ❤️ Interactions
- Like blogs
- Comment on posts
- Nested comment system (Replies to comments)

### 🔔 Notifications
- Real-time notifications for interactions
- Separate recent and older notifications

### 📱 UI/UX
- Fully responsive design
- Smooth animations
- Clean and modern interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- Editor.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Authentication
- Google OAuth
### Blog image: 
- AWS S3 bucket
---


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/mern-blogging-website.git
cd mern-blogging-website
2️⃣ Install Dependencies
Backend
cd server
npm install
npm start
Frontend
npm install
npm run dev
3️⃣ Environment Variables
```
Create a .env file in the server folder and add:

## 🌐 Database
```
DB_LOCATION=your_database_connection_string
```
## 🔐 App Secret
```
SECRET_ACCESS_KEY=your_secret_key
```
## ☁️ AWS Credentials
```
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
```
## 🔥 Google / Firebase Service Account (Convert JSON → single line)
```
GOOGLE_TYPE=service_account
GOOGLE_PROJECT_ID=your_project_id
GOOGLE_PRIVATE_KEY_ID=your_private_key_id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your_client_email
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
GOOGLE_TOKEN_URI=https://oauth2.googleapis.com/token
GOOGLE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
GOOGLE_CLIENT_CERT_URL=your_client_cert_url
GOOGLE_UNIVERSE_DOMAIN=googleapis.com
```
4️⃣ Run the Application
- Start Backend
```
cd server
npm run dev
```
- Start Frontend
```
cd client
npm start
```
## 📦 Deployment
- Frontend: Netlify 
- Backend: Render 
- Database: MongoDB Atlas
- Blog image: AWS S3 bucket

---
## 🎯 Future Enhancements
- Bookmark blogs
- Follow/unfollow users
- Dark mode support
- Rich analytics dashboard
- AI-based blog recommendations