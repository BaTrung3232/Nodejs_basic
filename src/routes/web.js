const express = require('express');
const { getHomepage, getABC, get123, postCreateUsers, getCreatePage } = require('../controllers/homeController')
const router = express.Router();



router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/123', get123);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUsers);

module.exports = router;