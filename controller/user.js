const user = require('../models/user');
const {v4:uuidv4} =require("uuid")
const {setUser,getUser}=require('../service/auth.js')

const handleSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    await user.create({
      name: name,
      email: email,
      password: password
    });

    return res.redirect('/');
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const u = await user.findOne({ email, password });

    if (!u) {
      return res.render("login", {
        err: "invalid credentials"
      });
    }
    const sessionId=uuidv4();
    setUser(sessionId,u);
    res.cookie("uid", sessionId)
    req.user=user
    return res.redirect('/');
  } catch (err) {
    console.error("LOGIN ERROR:", err);
  return res.status(500).send(err.message);
  }
};

module.exports = { handleSignup, handleLogin };
