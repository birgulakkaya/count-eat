const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const { userSchema } = require("../models/users");


userSchema.statics.register = async function (username, email, password) {
    // Kullanıcı adı veya e-postanın zaten var olup olmadığını kontrol edin
    const existingUser = await this.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new Error('Kullanıcı adı veya e-posta zaten var');
    }

    // Parolayı hashleyin
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // E-posta doğrulama kodu oluştur
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    // Yeni bir kullanıcı oluşturun
    const newUser = new this({
        username,
        email,
        password: hashedPassword,
        verificationCode
    });

    // Bir doğrulama e-postası gönderin
    await sendVerificationEmail(email, verificationCode);

    // Kullanıcıyı veritabanına kaydedin
    await newUser.save();

    return newUser;
};

module.exports = { sendVerificationEmail };
