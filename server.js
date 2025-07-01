import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { shortUrl, orginalUrl } from "./controllers/url.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", "./views");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "url_shortner_",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

//rendering the ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

//shorting url logic
app.post("/shorten", shortUrl);

//redirecting to the long url
app.get("/:shortCode", orginalUrl);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
