import React, { useState } from 'react';
import '../Explore/Explore.css';
import TemperatureChart from './TemperatureChart';

function Explore() {
  const [data, setData] = useState(null);
  const [variables, setVariables] = useState([]);
  const [tempUnit, setTempUnit] = useState('celsius');
  const [wind, setWind] = useState('kmh');
  const [credentials, setCredentials] = useState({ longitude: '', latitude: '', timezone: 'GMT+0' });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [success, setSuccess] = useState(false);

  const handleVariables = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setVariables([...variables, value]);
    } else {
      setVariables(variables.filter(item => item !== value));
    }
  };

  const handleTemp = (e) => {
    setTempUnit(e.target.value);
  };

  const handleWind = (e) => {
    setWind(e.target.value);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const handleStartChange = (event) => {
    const formattedDate = formatDate(event.target.value);
    setStartDate(formattedDate);
  };

  const handleEndChange = (event) => {
    const formattedDate = formatDate(event.target.value);
    setEndDate(formattedDate);
  };

  const api = `https://archive-api.open-meteo.com/v1/archive?latitude=${credentials.latitude}&longitude=${credentials.longitude}&start_date=${startDate}&end_date=${endDate}&temperature_unit=${tempUnit}&wind_speed_unit=${wind}&daily=${variables.join(',')}&timezone=${credentials.timezone}`;

  const handleClicks = async () => {
    let response = await fetch(api);
    let parsedData = await response.json();
    setSuccess(true);
    setData(parsedData.daily);
    console.log(parsedData)
  };

  return (
    <>
      <div className="text-center">
        <div className="explore-home">
          <p className="heading-home">Track Weather</p>
          <p className="subhead-home">Discover how weather has shaped our world from 1940 until now</p>
        </div>
        <div className="main-content">
          <p style={{ fontWeight: 700, fontSize: '29px' }} className="">Enter Location and Time Period</p>
          <div className="grid-input">
            <div className="row">
              <input type="number" value={credentials.latitude} onChange={onChange} className="form-control" name="latitude" id="latitude" step="0.000001" min="-90" max="90" required />
              <label htmlFor="latitude">Latitude</label>
            </div>
            <div className="row">
              <input type="number" value={credentials.longitude} onChange={onChange} className="form-control" name="longitude" id="longitude" step="0.000001" min="-180" max="180" required />
              <label htmlFor="longitude">Longitude</label>
            </div>
            <div className="row">
              <select value={credentials.timezone} onChange={onChange} className="form-select" name="timezone" id="timezone" aria-label="Timezone">
                <option value="America/Anchorage">America/Anchorage</option>
                <option value="America/Los_Angeles">America/Los_Angeles</option>
                <option value="America/Denver">America/Denver</option>
                <option value="America/Chicago">America/Chicago</option>
                <option value="America/New_York">America/New_York</option>
                <option value="America/Sao_Paulo">America/Sao_Paulo</option>
                <option value="UTC">Not set (GMT+0)</option>
                <option value="GMT">GMT+0</option>
                <option value="auto">Automatically detect time zone</option>
                <option value="Europe/London">Europe/London</option>
                <option value="Europe/Berlin">Europe/Berlin</option>
                <option value="Europe/Moscow">Europe/Moscow</option>
                <option value="Africa/Cairo">Africa/Cairo</option>
                <option value="Asia/Bangkok">Asia/Bangkok</option>
                <option value="Asia/Singapore">Asia/Singapore</option>
                <option value="Asia/Tokyo">Asia/Tokyo</option>
                <option value="Australia/Sydney">Australia/Sydney</option>
                <option value="Pacific/Auckland">Pacific/Auckland</option>
              </select>
              <label htmlFor="timezone">Timezone</label>
            </div>
            <div className="row">
              <input id="dateInput" type="date" value={startDate} onChange={handleStartChange} required />
              <label htmlFor="start">Start Date</label>
            </div>
            <div className="row">
              <input id="dateInput" type="date" value={endDate} onChange={handleEndChange} required />
              <label htmlFor="end">End Date</label>
            </div>
          </div>
          <p style={{ fontWeight: 700, fontSize: '29px' }} className="">Daily Weather Variables</p>
          <div className="grid-input form-check-grid">
            {[
              { label: 'Weather code', value: 'weather_code' },
              { label: 'Maximum Temperature (2 m)', value: 'temperature_2m_max' },
              { label: 'Minimum Temperature (2 m)', value: 'temperature_2m_min' },
              { label: 'Mean Temperature (2 m)', value: 'temperature_2m_mean' },
              { label: 'Maximum Apparent Temperature (2 m)', value: 'apparent_temperature_max' },
              { label: 'Minimum Apparent Temperature (2 m)', value: 'apparent_temperature_min' },
              { label: 'Mean Apparent Temperature (2 m)', value: 'apparent_temperature_mean' },
              { label: 'Sunrise', value: 'sunrise' },
              { label: 'Sunset', value: 'sunset' },
              { label: 'Daylight Duration', value: 'daylight_duration' },
              { label: 'Sunshine Duration', value: 'sunshine_duration' }
            ].map(item => (
              <div className="form-check" key={item.value}>
                <input onChange={handleVariables} className="form-check-input" type="checkbox" value={item.value} id={item.value} name="daily" />
                <label className="form-check-label" htmlFor={item.value}>{item.label}</label>
              </div>
            ))}
          </div>
          <p style={{ fontWeight: 700, fontSize: '29px' }} className="">Set Units</p>
          <div className="grid-input">
            <div className="row">
              <select value={tempUnit} onChange={handleTemp} className="form-select" name="temperature_unit" id="temperature_unit" aria-label="Temperature Unit">
                <option value="celsius">Celsius °C</option>
                <option value="fahrenheit">Fahrenheit °F</option>
              </select>
              <label htmlFor="tempunit">Temperature Unit</label>
            </div>
            <div className="row">
              <select value={wind} onChange={handleWind} className="form-select" name="wind_speed_unit" id="wind_speed_unit" aria-label="Windspeed Unit">
                <option value="kmh">Km/h</option>
                <option value="ms">m/s</option>
                <option value="mph">Mph</option>
                <option value="kn">Knots</option>
              </select>
              <label htmlFor="windunit">Wind Speed Unit</label>
            </div>
          </div>
          <button style={{ margin: '7vh 0px' }} className="text-center btns font-bold" onClick={handleClicks}>Generate</button>
        </div>
        {success && data && (
          <TemperatureChart style={{margin:'3vh auto'}} data={data} variables={variables}/>
        )}
      </div>
    </>
  );
}

export default Explore;
