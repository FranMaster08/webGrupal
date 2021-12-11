let express = require('express');
let router = express.Router();

router.use('/',require('./home'))
router.use('/users', require('./users.routes'));

module.exports = router;