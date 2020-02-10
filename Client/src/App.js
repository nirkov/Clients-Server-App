import React, { Component } from 'react';
import logo from './logo.svg';

// This file contains some functions that define the graphic design of what we print on the screen.
import './App.css';


class App extends Component {
/**
 * When <App /> is passed to ReactDOM.render(), React calls the constructor of the App component.
 */
constructor(props){
  super(props);
  this.state = {
    data: null,
    clock: new Date()
  };
}


  /**
   * When the App output is inserted in the DOM, React calls the componentDidMount()
   * lifecycle method. Inside it, the App component start the request from the server with
   * the helper function we wrote.
   */
  componentDidMount() {
    this.clockID = setInterval(() => this.tick(), 1000);
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  componentWillUnmount(){
   // clearInterval(this.clockID);
  }

   tick(){
    this.setState({
      clock: new Date()
    });
   }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/coffeeheader.jpg');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  /**
   * React then calls the App component’s render() method. This is how React learns what 
   * should be displayed on the screen. React then updates the DOM to match the App's render output.
   */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">{this.state.data}</p>
        </header>
        <div className="App-intro"> The Time Is : {this.state.clock.toLocaleTimeString()}</div>
        <h1 className="App-intro"> The Time Is : {this.state.clock.toLocaleTimeString()}</h1>
      </div>
    );
  }
}


export default App;