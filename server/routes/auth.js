const express = require('express');
const router = express.Router();
const { register, login, getAllAccounts, getMe, updateDetails } = require('../controllers/auth');
const { auth } = require('../middleware/security');

// TODO - list
router.get('/list', getAllAccounts);
router.get('/me', auth, getMe);
router.post('/login', login);
router.post('/register', register);
router.put('/updatedetails', auth, updateDetails);

module.exports = router;
