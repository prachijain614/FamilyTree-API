var express = require('express');
var router = express.Router();

router.use('/api/v1/', require('./../api'));

module.exports = router;
