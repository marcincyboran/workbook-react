const express = require('express');
const router = express.Router();
const { register, login, getAllAccounts } = require('../controllers/auth');

router.get('/list', getAllAccounts);
router.post('/login', login);
router.post('/register', register);

module.exports = router;
