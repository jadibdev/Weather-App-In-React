import React, {Component} from 'react'
import {Button} from 'reactstrap'

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <br/><br/>
    <Button color="primary" id="weather-button" size="sm">Get Weather</Button>
  </form>
)

export default Form
