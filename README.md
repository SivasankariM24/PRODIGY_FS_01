# MERN Authentication Project

A simple authentication system built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
Features user registration, login, JWT-based authentication, and protected routes.

---

## 🚀 Features

- User Registration (with hashed passwords)
- User Login (with JWT token)
- Protected Dashboard Route
- Role field in user schema (for future RBAC)
- React frontend with private routes
- Simple, modern styling

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Axios, React Router
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Styling:** CSS

---

## 📦 Folder Structure

```
PRODIGY_FS_01/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── ...
│   └── ...
│
├── README.md
└── ...
```

---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/SivasankariM24/PRODIGY_FS_01.git
cd mern-auth-project
```

---

### 2. **Backend Setup**

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend/` folder:

    ```
    MONGO_URI=mongodb://localhost:27017/mern-auth-db
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

- Start MongoDB (locally or with MongoDB Atlas)
- Start the backend server:

    ```bash
    node server.js
    # or
    npm start
    ```

---

### 3. **Frontend Setup**

```bash
cd ../frontend
npm install
npm start
```

- The React app will run at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Usage

1. Visit `/register` to create a new account.
2. Login at `/login`.
3. Access the protected `/dashboard` route after login.
4. Use the navigation links to move between pages.

---

## 📝 Environment Variables

**Backend (`backend/.env`):**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Frontend:**  
If you use any API keys or environment variables, add them to `frontend/.env` (not required for this basic setup).

---

## 🛡️ Security Notes

- Passwords are hashed with bcrypt before storing in MongoDB.
- JWT tokens are used for authentication.
- For production, use HTTPS and store JWT in HTTP-only cookies.
- Add input validation and rate limiting for better security.

---

## 🎨 Customization

- To change the look, edit `frontend/src/App.css` or use a UI library like [Material UI](https://mui.com/) or [Bootstrap](https://getbootstrap.com/).
- To add features (profile, password reset, roles), extend the backend and frontend as needed.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Questions?

If you have any questions or need help, feel free to open an issue or contact the maintainer.

---

**Happy Coding! 🚀**

---
