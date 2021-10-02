const User = require('../models/User');

module.exports = {
  add: async (req, res) => {
    const { userId: _id, movie } = req.body;

    try {
      await User.updateOne(
        { _id },
        { $push: { favorites: movie } }
      );

      res.json({ favorite: movie });
    } catch (err) {
      console.log(err);
    }
  },
  remove: async (req, res) => {
    const { userId: _id, favoriteId } = req.body;

    try {
      const foundUser = await User.findOne({ _id });
      const filteredFavorites = foundUser.favorites.filter(f => f.id !== favoriteId);
      await User.updateOne(
        { _id },
        { favorites: filteredFavorites }
      );

      res.json(favoriteId);
    } catch (err) {
      console.log(err);
    }
  },
  list: async (req, res) => {
    const { userId: _id } = req.params;

    try {
      const foundUser = await User.findOne({ _id });

      if (foundUser) {
        const { favorites } = foundUser;
        res.json({ favorites });
      } else {
        res.status(400).json({ message: 'User not found' });
      }
    } catch (err) {
      console.log(err);
    }
  }
};
