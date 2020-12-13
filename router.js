const express = require('express');
const router = express.Router();

const authRouter = require('./auth')
const listRouter = require('./list')

router.use('/auth',authRouter);
router.use('/list',listRouter);

module.exports.router = router;