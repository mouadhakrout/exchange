const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/devices', require('./devices'));
module.exports = router;