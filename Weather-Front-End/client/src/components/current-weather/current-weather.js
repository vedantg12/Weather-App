import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const CurrentWeather = ({data}) => (
  <div className="main">

      <div className="top">
        <p className="header">{data.city}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{data.data.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {data.data.main.temp} F</p>
        <p className="temp">Humidity: {data.data.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(data.data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(data.data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)

export default CurrentWeather;