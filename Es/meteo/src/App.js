import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      description: '',
      main: ''
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
      .then(data => this.setState({ term:'', description: data.weather[0].description, main: data.weather[0].main}))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <p> Meteo: {this.state.main} </p>
        <p> Descrizione: {this.state.description} </p>
      </div>
    );
  }
}

export default App;
