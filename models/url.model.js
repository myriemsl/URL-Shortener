const mongoose  = require('mongoose');


const urlSchema = new mongoose.Schema({
  
    originalUrl: {
        type: String,
      },
      shortUrl: {
        type: String,
      },
      clicks: {
        type: Number,
        default: 0
      }
      
}, {timestamps: true});

module.exports = mongoose.model('url', urlSchema);
