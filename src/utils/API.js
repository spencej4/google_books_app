import axios from "axios";

const BASEURL = "https:////www.googleapis.com/books/v1/volumes?q=";

const APIKEY = "&api_key=AIzaSyCs7U8ifQclZeF1-qxsmWZHEhlJiPnK9F0";

// google books api key
// AIzaSyCs7U8ifQclZeF1-qxsmWZHEhlJiPnK9F0

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },

  /* new */
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData);
  }
  /* end new */

};
