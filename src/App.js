import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles'
import Weather from './components/Weather'
import Form from './components/Form'


const API_KEY = 'c308d1310b607be1af9129c27252e642'

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter value"
      })
    }
  }
  render() {
    return (
        <Container>
          <ul className="list">
            <li>
              <Titles/>
              <br/>
            </li>
            <li>
              <Form getWeather={this.getWeather} />
              <br/>
              <Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                error={this.state.error}
              />
            </li>
          </ul>
        </Container>
    )
  }
}




export default App;
