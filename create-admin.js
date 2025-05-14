const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./backend/models/User');
const connectDB = require('./backend/config/db');

(async () => {
  try {
    await connectDB();
    
    const adminUser = new User({
      username: 'arushi',
      email: 'arushi@health',
      password: 'arushi',
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin user:', err);
    process.exit(1);
  }
})();

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000
});