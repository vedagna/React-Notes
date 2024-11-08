// server/routes/userRoutes.js
const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

// const {
//     registerUser,
//     loginUser,
//     logoutUser,
//   } = require("../controllers/userController");
  
  router.post("/register", registerUser);
  // router.post("/login", loginUser);
  // router.post("/logout", logoutUser);
  

module.exports = router;
