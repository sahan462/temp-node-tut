const express = require('express');

//getting router instance
const router = express.Router();

const login = require('../controllers/auth');

router.post('/',login);

module.exports = router;