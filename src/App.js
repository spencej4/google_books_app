import React, { Component } from 'react';
import './App.css';
// import Books from './components/Books/index';
import API from './utils/API';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          searchInput: '',
          results: '',

      };
      // bind params
      // this.checkForDuplicates = this.checkForDuplicates.bind(this);
  }

 
  searchGoogleBooks = query => {
    API.search(query)
      // .then(res => console.log(res))
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
      // console.log(this.state.results);
  };

  render() {
    // this.searchGoogleBooks('coffee');

    return (
      <div className="App">
        <header className="App-header">
         Google Books
        </header>
        {/* <Books/> */}
      </div>

    );
  }
}

export default App;
