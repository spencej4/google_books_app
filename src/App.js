import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/index';
import Hero from './components/Hero/index';
import SearchInput from './components/SearchInput/index';
import Saved from './components/Saved/index';
import Books from './components/Books/index';
import API from './utils/API';


class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          text: '',
          results: [],
      };
  }


searchGoogleBooks = () => {
  let query = this.state.text;

  API.search(query)
    .then((response) => {
      this.setState(
        {results: response.data.items}
      );
    }).catch((error) => {
      console.log(error);
    });
};


handleChange(text) {
  this.setState(
    {text: text}
  );
}

handleSubmit = (event) => {
  event.preventDefault();
  this.searchGoogleBooks();
}

handleBookSave = (key, title, author, thumbnail, description, buyLink) => {
  API.saveBook({
    id: key,
    title: title,
    authors: author,
    image: thumbnail,
    description: description,
    link: buyLink,
  })
};


  render() 
    {
      return (
        <Router>
            <div className="App">
              <Header
                onChange={this.handleChange.bind(this)} 
                value={this.state.text}
                handleSubmit={this.handleSubmit}
              />
              <div>
                <Route exact path="/" component={Hero}/>
                <Route
                       exct path='/search'
                        render={(props) => 
                          <SearchInput 
                            onChange={this.handleChange.bind(this)} 
                            value={this.state.text}
                            handleSubmit={this.handleSubmit}
                          />
                        }
                  />
                <Route exact path="/saved" component={Saved} />
              </div>
 
              {this.state.results.length !== 0 ? (
                  <Books
                    results={this.state.results}
                    handleBookSave={this.handleBookSave}
                  />
                ) : (null)
              }
            </div>
        </Router>
      );
    }
}

export default App;
