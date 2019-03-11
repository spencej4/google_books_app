import axios from "axios";

const BASEURL = "https:////www.googleapis.com/books/v1/volumes?q=";

const APIKEY = "&api_key=AIzaSyCs7U8ifQclZeF1-qxsmWZHEhlJiPnK9F0";

// google books api key
// AIzaSyCs7U8ifQclZeF1-qxsmWZHEhlJiPnK9F0


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
