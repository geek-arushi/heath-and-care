require('dotenv').config(); // Remove the path parameter to look in the root directory
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

(async () => {
  try {
    // Change MONGO_URI to MONGODB_URI to match your db.js configuration
    await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://aarushisingh1121:arushi@arushi.pjxccan.mongodb.net/healthandcare?retryWrites=true&w=majority&appName=arushi");
    
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (user) {
      // Update existing user
      user.password = hashedPassword;
      user.role = 'admin';
      await user.save();
      console.log('Admin credentials updated successfully');
    } else {
      // Create new admin user
      await User.create({
        username: 'arushi',
        email,
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Admin created successfully');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
