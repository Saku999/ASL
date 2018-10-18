import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      description: '',
      main: '',
      icon: '',
      name: '',
      wind:'',
      humidity: '',
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = '5fb4d3747616770330d302de74d46e4b';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.term}&APPID=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term:'', name: data.name, description: data.weather[0].description, main: data.weather[0].main, wind: data.wind.speed, humudity: data.main.humidity}))
      .catch(e => console.log('error', e));
  }

  render() {
    const icona = "http://openweathermap.org/img/w/" + this.state.icon;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p id="title">City: <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button> </p>
        </form>
        <p> Location: <span class="text"> {this.state.name} </span> </p>
        <p> Weather: <span class="text"> {this.state.main} </span> </p>
        <p> Description: <span class="text"> {this.state.description} </span></p>
        <p> Wind speed: <span class="text"> {this.state.wind} Km/h</span></p>
        <p> Humidity: <span class="text"> {this.state.humudity} %</span></p>
      </div>
    );
  }
}

export default App;
