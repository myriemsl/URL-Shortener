const express = require('express');
const router = express.Router();

const { home, createURL, getURL } = require('../controllers/url.controllers')

// home
router.get('/', home);

// create short url
router.post('/shortUrls', createURL);

// get short url
router.get('/:shortUrl', getURL)


module.exports = router;