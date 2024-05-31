const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middlewares/authMiddleware");
const authController = require("./controllers/authController");

//!config
dotenv.config();

//!Route imports
const MainRoute = require("./Routes/index.js");
const authRoutes = require("./Routes/authRoutes.js");
const adminRoutes = require("./Routes/adminRoutes.js");

//!database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

app.set("view engine", "ejs");

//!Middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("*", checkUser);

app.use("/api", MainRoute);
app.use("/", authRoutes);
app.use("/admin", requireAuth, adminRoutes);

//! Auth Routes
app.post("/signup", authController.signup_post);

app.listen(port, () => {
  connect();
  console.log(`Server ${port} portunda çalışıyor.`);
});
