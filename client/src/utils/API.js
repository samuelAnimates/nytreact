import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "0b1aa24f2add4e819b14249352e06a9d";
const FILTERS = `&fq=source:("The New York Times")&fq=type_of_material:("News")`

export default {
  search: function(query) {
    return axios.get(`${BASEURL}&q=${query}&api-key=${APIKEY}${FILTERS}`);
  }
};