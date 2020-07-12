import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
import Header from './Header';


class App extends Component {

  constructor(props) {

      super(props);
      this.handleChange =  this.handleChange.bind(this)
      this.state = {
          items: [],
          isLoaded: false,
          selectedOption: null,
          keyword: "patagonia nano puff"
      }
  }


  handleChange(event) {
    this.setState({selectedOption: event })
  }

  componentDidMount() {
      fetch('http://testtwo-env.eba-mvhukwi9.us-east-1.elasticbeanstalk.com/' + this.state.keyword)
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


  render () {
    var filteredSize = (this.state.selectedOption === null) ? this.state.items : this.state.items.filter((item) => {
      return item.size.toLowerCase() === this.state.selectedOption.value.toLowerCase()
    })
    
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;600&display=swap" rel="stylesheet"></link>
            <Header items={this.state.items} value={this.state.selectedOption} onChange={this.handleChange}/>
            <Cards search={this.state.keyword} loaded={this.state.isLoaded} filteredSize={filteredSize}/>
        </div>
      )
  };
}

export default App;

//Hacking the mainframe
