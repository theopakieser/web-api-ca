const bcrypt = require('bcrypt');
const User = require('../models/User');

const registerUser = async ({ username, password }) => {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    throw new Error('User already exists.');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

export default router;