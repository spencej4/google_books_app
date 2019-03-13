import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }


  onChange(e) {
    this.setState({
        value: e.target.value,
    }, () => {
        this.props.onChange(this.state.value);
    });
  }


  render() {
        return (
         <div className='centered-search-bar' onSubmit={this.props.handleSubmit}>
                <form className='search-form search-bar'>
                    <div className='icon icon-search'></div>
                    <input 
                        className='centered-search-input' 
                        placeholder={'Search Google Books'}
                        name="queryTerm"
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                    />
                </form>
          </div> 
        );
    }
}

export default SearchInput;