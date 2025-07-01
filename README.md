# 🔗 URL Shortener

A simple URL shortener built using **Node.js**, **Express**, **MongoDB**, and **EJS**. It takes a long URL and generates a short code, allowing redirection back to the original URL.

----
## 🚀 Features

- Shortens any valid URL
- Stores short-original URL mappings in MongoDB
- Redirects from short URL to original URL
- Basic EJS frontend interface
- Uses `.env` for secure environment variable management

---
## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (for frontend rendering)
- dotenv (for secure config management)

---
## 📦 Installation & Setup

1. Clone the repository
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
2. Install dependencies
  npm install
3. Create a .env file in the root directory
   MONGO_URI=your_mongodb_connection_string
4. Start the server
   node index.js
   or
  npx nodemon index.js
5. Visit in browser
  http://localhost:3000


🔐 Security Notes
MongoDB connection URI is stored in .env and never pushed to GitHub.

.gitignore includes .env and node_modules.
