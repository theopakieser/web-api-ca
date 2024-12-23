import router from '.';

const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async ({ username, password }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists.');
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

export default router;
