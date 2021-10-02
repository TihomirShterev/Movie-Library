const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w.]{5,}@[a-z]{3,}\.[a-z]{2,}$/g.test(v);
        },
        message: props => `${props.value} should be valid`
      }
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password should be at least 6 characters'],
      validate: {
        validator: function (v) {
          return /^\S+$/g.test(v);
        },
        message: props => `${props.value} should not contain whitespace characters`
      }
    },
    favorites: [{ type: Object }]
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (err) {
    console.log(err);
  }
});

module.exports = mongoose.model('User', userSchema);
