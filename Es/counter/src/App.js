import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	state = {count: 0}

	incrementCount(){
		this.setState({
			count: this.state.count + 1				
		})
	  }

	decrementCount(){
    	this.setState({
    		count: this.state.count - 1
    	})
    	
	}

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button className="btn" onClick={() => this.incrementCount()}>Increment</button>
        <button className="btn" onClick={() => this.decrementCount()}>Decrement</button>
      </div>
    );
  }
}

export default App;


