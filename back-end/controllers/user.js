const User = require('../models/User');
const generateToken = require('../utils/generateToken');

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;
    let message;

    try {
      const foundUser = await User.findOne({ email });

      if (foundUser) {
        message = 'User already exists';
        res.status(400).json({ message });
        throw new Error(message);
      }

      const createdUser = await User.create({ email, password });

      if (createdUser) {
        const { _id, email } = createdUser;
        res.status(201).json({ _id, email, token: generateToken(_id) });
      } else {
        message = 'User could not be created'
        res.status(400).json({ message });
        throw new Error(message);
      }
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const message = !email || !password
      ? 'Please fill all fields above'
      : 'Invalid email or password';

    try {
      const foundUser = await User.findOne({ email });

      if (foundUser && (await foundUser.matchPassword(password))) {
        const { _id, email } = foundUser;
        res.json({ _id, email, token: generateToken(_id) });
      } else {
        res.status(400).json({ message });
        throw new Error(message);
      }
    } catch (err) {
      console.log(err);
    }
  }
};
