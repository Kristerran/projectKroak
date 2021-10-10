const router = require('express').Router();
const { User } = require('../models');

// GET virtuefig app
router.get("/", async (req, res) => {
  try {
    res.render("virtuefig", {user: req.session.logged_in});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get login Page
router.get("/login", async (req, res) => {
  try {
    const { User } = req.session;
    res.render('login', {User});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get register page
router.get("/register", (req, res) => {
  res.render("register");
});

 module.exports = router;