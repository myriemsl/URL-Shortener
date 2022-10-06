const url = require('../models/url.model');
const urlValidation = require('../validations/urlValidation');
const shortid = require('shortid')

// get main page 
const home = async (req, res) => {
    const shortUrls = await url.find();
    res.render('index', {shortUrls:shortUrls})
}


// create short url
const createURL = async (req, res) => {
    const { originalUrl } = req.body;
    if(urlValidation(originalUrl)) {
        try {
            URL = await url.findOne({ originalUrl });
            const shortUrl = shortid.generate();
            newUrl = new url({
                originalUrl,
                shortUrl,
                date: new Date()
            });
            await newUrl.save();
            res.redirect('/')
        } catch (err) {
            console.log(err)
            res.status(500).json('server error')
        }
    } else {
        res.status(400).json('invalid url')
    }
};

// get short url
const getURL = async(req, res) => {
    try {
 const shortUrl = await url.findOne({ shortUrl: req.params.shortUrl});

  if (shortUrl === null) {
    return res.sendStatus(404);
  } else {
    shortUrl.clicks++
    shortUrl.save()
    res.redirect(shortUrl.originalUrl)
  }
    } catch (error) {
        console.log(err)
    }

};


module.exports = { home, createURL, getURL }