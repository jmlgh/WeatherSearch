import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import the action creator. This action creator will be used in the onFormSubmit method
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        // when creating the container, set the state to empty string
        this.state = {
            term: ''
        }

        // method bindings
        this.onFormSumbit = this.onFormSumbit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
    }

    onFormSumbit(event) {
        event.preventDefault()

        // fetch weather data
        // props now has a fetchWeather element, which is our action creator mapped
        // by the mapDispatchToProps function
        this.props.fetchWeather(this.state.term)
        // reset field
        this.setState({term: ''})
    }


    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSumbit}>
                <input
                    placeholder="Five-day forecast for any spanish city"
                    className="form-control"
                    value={this.state.term} // this creates a controlled container
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}


// bind the action creator we imported (fetchWeather) to the dispatcher
// the dispatcher passes down the data
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)