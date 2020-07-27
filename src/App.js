import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import Header from './Header';


class App extends Component {

  constructor(props) {

      super(props);
      this.handleChange =  this.handleChange.bind(this)
      this.handleKeywordChange = this.handleKeywordChange.bind(this)
      this.state = {
          items: [],
          isLoaded: false,
          selectedOption: "",
          keyword: "patagonia nano puff"
      }
  }


  handleChange(event, data) {
    this.setState({selectedOption: data.value })
  }

  handleKeywordChange(mutations) {
    console.log(mutations)
    this.setState({keyword: mutations[0].target.innerText})
    console.log(this.state.keyword)
  };

  componentDidMount() {
      fetch('https://shellz-poshmark-api-aoeje.run-us-west2.goorm.io/' + this.state.keyword)
          .then(res => res.json())
          .then(json => {
              console.log(json)
              this.setState({
                  items: json,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.keyword !== this.state.keyword) {
      this.setState({isLoaded: false})
      console.log("updating results")
      fetch('https://shellz-poshmark-api-aoeje.run-us-west2.goorm.io/' + this.state.keyword)
          .then(res => res.json())
          .then(json => {
              this.setState({
                  items: json,
                  isLoaded: true, 
              })
          }).catch((err) => {
              console.log(err);
          });
    }
  }


  render () {
    var filteredSize = (this.state.selectedOption === "") ? this.state.items : this.state.items.filter((item) => {
      return item.size.toLowerCase() === this.state.selectedOption.toLowerCase()
    })
    
    return (
        <div className="App">
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;600&display=swap" rel="stylesheet"></link>
            <Header items={this.state.items} value={this.state.selectedOption} onChange={this.handleChange}/>
            <Cards onKeywordChange={this.handleKeywordChange} search={this.state.keyword} loaded={this.state.isLoaded} filteredSize={filteredSize}/>
        </div>
      )
  };
}

export default App;
