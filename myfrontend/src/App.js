import React, {Component} from 'react';
import './App.css';
import Weather from './Weather'

class App extends Component{
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <Weather />
          </header>
        </div>
      );
    }
}

export default App;
