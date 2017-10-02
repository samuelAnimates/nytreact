const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
    {
        title: "Is Microvascular Heart Disease a Serious Condition?",
        date: "2017-09-29",
        link: "https://www.nytimes.com/2017/09/29/well/live/is-microvascular-heart-disease-a-serious-condition.html",
        snippet: "Microvascular heart disease affects about four times as many women as men, and the condition can be very serious." 
    },
    {
        title: "The Fatal Toll of Cheap Cigarettes",
        date: "2017-09-19",
        link: "ttps://www.nytimes.com/2017/09/19/well/family/the-fatal-toll-of-cheap-cigarettes.html",
        snippet: "The availability of cheaper, off-brand cigarettes is associated with an increase in infant mortality."
    },
    {
        title: "A Rare Victory for Science in an F.D.A. Move",
        date: "2017-07-28",
        link: "https://www.nytimes.com/2017/07/28/business/dealbook/a-rare-victory-for-science-in-an-fda-move.html",
        snippet: "In defying corporate interests by seeking to lower nicotine levels, the Food and Drug Administration is the odd regulator out in the Trump administration."
    }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });