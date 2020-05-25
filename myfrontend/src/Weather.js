import React, {Component} from 'react';
import axios from 'axios';
import classes from './Weather.module.css';

class Weather extends Component{

  state= {
    weather : "Not Yet Gotten"
  };

  buttonClickHandler= () => {
    axios.get('/getWeatherOfNewYork').then(response =>{
      this.setState({
        weather : response.data.temp
      });
    });
  }

  render(){
      return (
        <div>
            <button onClick={this.buttonClickHandler} className={classes.btn}>Get Temperature</button>
            <h1> Weather in New York City is : {this.state.weather}</h1>
        </div>
      );
  }
}

export default Weather;
