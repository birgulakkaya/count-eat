const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "countneat@gmail.com",
    pass: "phdeapfmfetijhyb",
  },
});

const maxAge = 60 * 60 * 24;

const createToken = (id) => {
  return jwt.sign({ id }, "gizli kelime", { expiresIn: maxAge });
};

const sendVerificationEmail = async (email, verificationCode) => {
  const mailOptions = {
    from: "countneat@gmail.com",
    to: email,
    subject: "E-posta Adresinizi Doğrulayın",
    html: `
    <div style="background-color: #f3f4f6; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #4caf50; color: white; padding: 20px;">
          <h1 style="margin: 0;">E-posta Adresinizi Doğrulayın</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 18px; color: #333;">Merhaba,</p>
          <p style="font-size: 18px; color: #333;">Hesabınızı doğrulamak için aşağıdaki kodu kullanın:</p>
          <div style="margin: 20px 0; padding: 10px; font-size: 24px; font-weight: bold; background-color: #f1f1f1; border-radius: 4px;">${verificationCode}</div>
          <p style="font-size: 18px; color: #333;">E-posta adresinizi doğrulamak için lütfen aşağıdaki butona tıklayın:</p>
          <a href="http://localhost:5173/" style="display: inline-block; margin: 20px 0; padding: 15px 25px; font-size: 18px; color: white; background-color: #4caf50; text-decoration: none; border-radius: 5px;">E-posta Doğrulama</a>
          <p style="font-size: 18px; color: #333;">Eğer bu e-postayı siz istemediyseniz, lütfen bu mesajı dikkate almayın.</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 10px; color: #999; font-size: 12px;">
          <p style="margin: 0;">&copy; 2024 Count Neat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  `,
  };

  await transporter.sendMail(mailOptions);
};

const login_get = (req, res) => {
  res.render("login", { title: "Giris" });
};

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid credentials" });
  }
};

const signup_get = (req, res) => {
  res.render("signup", { title: "Kayit" });
};

const signup_post = async (req, res) => {
  const { username, email, password } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  try {
    await sendVerificationEmail(email, verificationCode);
    const user = new User({ username, email, password, verificationCode });
    await user.save();
    res.status(201).json({ message: "Kayıt başarılı!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Kayıt başarısız." });
  }
};

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/login");
};

module.exports = {
  login_get,
  login_post,
  signup_get,
  signup_post,
  logout_get,
  sendVerificationEmail,
};
