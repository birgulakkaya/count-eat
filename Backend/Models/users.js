const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationCode: {
    type: Number,
    required: true,
  },
});

userSchema.statics.login = async function (identifier, password) {
  const user = await this.findOne({
    $or: [{ username: identifier }, { email: identifier }],
  });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      throw Error("Parolanız yanlış.");
    }
  } else {
    throw Error("Kullanıcı bulunamadı.");
  }
};

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = mongoose.model("User", userSchema);
