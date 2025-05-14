const mongoose = require('mongoose');
require('dotenv').config();

// Import the User model
const User = require('./backend/models/User');

// Connect to MongoDB with updated options
mongoose.connect(process.env.MONGO_URI, {
  // Remove deprecated options
  // Add SSL options to address TLS errors
  ssl: true,
  tls: true,
  tlsAllowInvalidCertificates: true,
  tlsAllowInvalidHostnames: true,
  serverSelectionTimeoutMS: 15000 // Increase timeout
});

const createAdminUser = async () => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: 'arushisingh@healthandcare' });
    
    if (existingUser) {
      // If user exists but is not admin, update role to admin
      if (existingUser.role !== 'admin') {
        existingUser.role = 'admin';
        await existingUser.save();
        console.log('User role updated to admin successfully!');
      } else {
        console.log('Admin user already exists!');
      }
    } else {
      // Create new admin user
      await User.create({
        name: 'Arushi Singh',
        email: 'arushisingh@healthandcare',
        password: 'arushi',
        role: 'admin'
      });
      console.log('Admin user created successfully!');
    }
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin user:', error);
    mongoose.connection.close();
  }
};

createAdminUser();