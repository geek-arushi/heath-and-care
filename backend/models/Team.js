const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  tImg: {
    type: String,
    required: [true, 'Please add an image']
  },
  bio: {
    type: String
  },
  specialization: {
    type: String
  },
  education: {
    type: String
  },
  experience: {
    type: Number
  },
  featured: {
    type: Boolean,
    default: false
  },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Team', TeamSchema);