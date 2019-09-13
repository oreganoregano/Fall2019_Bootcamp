/* Add all the required libraries*/
var mongoose = require("mongoose"),
  Listing = require("./ListingSchema.js"),
  config = require("./config");
/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html
mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ name: "Library West" }, (err, docs) => {
    if (err) throw err;
    console.log(docs);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 

   */
  Listing.findOneAndDelete({ code: "CABL" }, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate(
    { name: "Phelps Laboratory" },
    { address: "1953 Museum Rd, Gainesville, FL 32603" },
    { new: true },
    (err, res) => {
      if (err) throw err;
      console.log(res);
    }
  );
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
