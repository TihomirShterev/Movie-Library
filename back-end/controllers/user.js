const User = require('../models/User');
const generateToken = require('../utils/generateToken');

module.exports = {
  register: async (req, res) => {
    const { email, password } = req.body;

    try {
      const foundUser = await User.findOne({ email });

      if (foundUser) {
        res.status(400);
        throw new Error('User already exists!');
      }

      const createdUser = await User.create({ email, password });

      if (createdUser) {
        const { _id, email } = createdUser;
        res.status(201).json({
          _id,
          email,
          token: generateToken(createdUser._id)
        });
      } else {
        res.status(400);
        throw new Error('Error occured!');
      }
    } catch (err) {
      console.log(err);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const foundUser = await User.findOne({ email });

      if (foundUser && (await foundUser.matchPassword(password))) {
        const { _id, email } = foundUser;
        res.json({
          _id,
          email,
          token: generateToken(foundUser._id)
        });
      } else {
        res.status(400);
        throw new Error('Invalid email or password!');
      }
    } catch (err) {
      console.log(err);
    }
  },
  logout: async () => { }
};
