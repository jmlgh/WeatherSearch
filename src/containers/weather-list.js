import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp )
        const pressures = cityData.list.map(weather => weather.main.pressure )
        const humidities = cityData.list.map(weather => weather.main.humidity )

        return(
            <tr key={ name }>
                <td>{ name } </td>
                <td> <Chart data={ temps } color='red'/> </td>
                <td> <Chart data={ pressures } color='green'/> </td>
                <td> <Chart data={ humidities } color='black'/> </td>
            </tr>
        )
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map( this.renderWeather ) }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps( { weather } ) {
    // we have availabe weather prop thanks to combineReducer in index of reducers dir
    // in which we defined weather as key
    return { weather } // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)