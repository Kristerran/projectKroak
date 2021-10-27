const router = require('express').Router();
const { User, Question, Options, Fig } = require('../models');

// GET virtuefig app
router.get('/', async (req, res) => {
  try {
    // Get all questions
    const questionData = await Question.findAll({
      include: Options
    });
    console.log(questionData[0].Options)
    const form = questionData.map((question) => question.get({ plain: true }));
    console.log(form[0].Options)
      res.render('virtuefig', {form, logged_in:req.session.logged_in});
 } catch (err) {
   res.status(500).json(err);
 }
});

// Get login Page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


// Get register page
router.get('/register', async (req, res) => {
  try {
        res.render('register');
  } catch (err) {
    res.status(500).json(err);
  }
});

 module.exports = router;
// Get the dashboard
 router.get('/dashboard', async (req, res) => {
  try {
    if(req.session.logged_in){
      // Get all posts, sorted by name
      const figData = await Fig.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
      // Serialize user data so templates can read it
      const fig = figData.map((fig) => fig.get({ plain: true }));
      // Pass serialized data into Handlebars.js template
      res.render('dashboard', { fig,
        logged_in: req.session.logged_in});
      } else {
      res.redirect('/login')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});