const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Require all models
let db = require("./models");

// Initialize Express
var app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksApp",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// =========Routes==========
app.post("/api/books/:book", function(req, res){         
    db.Book.create(req.body)
      .then(function(data) {
        return db.Book.post({}, { $push: { books: Book._id } }, { new: true });
      })
      .then(function(Book) {
        // If the Library was updated successfully, send it back to the client
        res.json(Book);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
