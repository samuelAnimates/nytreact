const request = require("request");
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const FILTERS = `&fq=source:("The New York Times")&fq=type_of_material:("News")`;
//access environmental variables for username, password, host
require('dotenv').config({path: 'dotenv.env'});
const APIKEY = process.env.APIKEY;

// Defining methods for the booksController
module.exports = {
    search: function(req, res){   
        request.get(`${BASEURL}&q=${req.params.query}&api-key=${APIKEY}${FILTERS}`, (error, response, body) => {
                let info = JSON.parse(body)
                return res.json(info);
            });
    }
};