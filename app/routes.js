const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  return res.render("../assets/views/homepage.pug")
});

router.get('/about', (req, res) => {
  return res.render("../assets/views/about.pug")
});
router.get('/menu', (req, res) => {
  return res.render("../assets/views/menu.pug")
});
router.get('/reservations', (req, res) => {
  return res.render("../assets/views/reservations.pug")
});

router.get('/contact', (req, res) => {
  return res.render("../assets/views/contact.pug")
});





module.exports = router;
