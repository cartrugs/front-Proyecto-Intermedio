const express = require("express");
const router = express.Router();

const { logIn, signUp, searchPeli, gotPeli  } = require('../controllers/frontController')

router.get('/', logIn);

router.get('/signup', signUp)

router.get('/search',searchPeli)

router.get('/search/:title', gotPeli)


module.exports = router