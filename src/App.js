import React, { Component } from 'react';
import './App.css';
import CardList from './Weather/CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      location:[]
    };
  }
  componentDidMount() {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=95f16632360b44e79a6173255200712&q=Haldwani&days=1')
      .then(response=> response.json())
      .then(
        (result) => {
          this.setState({
            weather: result.forecast.forecastday[0].hour,
            location: result.location
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render(){
    const { weather,location } = this.state;
    return (
      <div className="App">
        <CardList weather={weather} location={location} />
      </div>
    );
  }
}
export default App;