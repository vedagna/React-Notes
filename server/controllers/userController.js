// server/controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// exports.register = async (req, res) => {
//   const { name, email, password, phone } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) return res.status(400).json({ message: 'User already exists' });

//     const newUser = new User({ name, email, password, phone });
//     await newUser.save();

//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Check if the user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ message: "User not found" });
//       }
  
//       // Verify password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid credentials" });
//       }
  
//       // Generate a JWT token
//       const token = jwt.sign(
//         { userId: user._id },
//         process.env.JWT_SECRET, // Ensure you have a JWT_SECRET in your .env file
//         { expiresIn: "1h" } // Token expiration time
//       );
  
//       // Set the token in an HTTP-only cookie
//       res.cookie("token", token, { httpOnly: true });
  
//       return res.status(200).json({
//         message: "Login successful",
//         token, // Return token for authorization in frontend
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//         },
//       });
//     } catch (error) {
//       return res.status(500).json({ message: error.message });
//     }
//   };
  
//   // Logout
//   const logoutUser = (req, res) => {
//     //console.log("server logout");
//     res.cookie("token", "", { expires: new Date(0) });
//     return res.status(200).json({ message: "Logout successful" });
//   };
  
//   module.exports = { registerUser, loginUser, logoutUser };
  


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
console.log(req.body);
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        // Create new user
        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
};

module.exports = { registerUser };
