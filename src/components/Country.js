import React, { Component } from 'react';
import * as QueryString from 'query-string';

class Country extends Component {
    state = {
        countryName: null,
        newConfirmed: null,
        totalConfirmed: null,
        newDeaths: null,
        totalDeaths: null,
        newRecovered: null,
        totalRecovered: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        if (this.state.countryName !== this.props.match.params.countryName) {
            this.loadData();
        }
    }

    loadData() {
        const countryName = this.props.match.params.countryName;
        const params = QueryString.parse(this.props.location.search);
        const newConfirmed = params.newConfirmed;
        const totalConfirmed = params.totalConfirmed;
        const newDeaths = params.newDeaths;
        const totalDeaths = params.totalDeaths;
        const newRecovered = params.newRecovered;
        const totalRecovered = params.totalRecovered;
        this.setState({
            countryName: countryName,
            newConfirmed: newConfirmed,
            totalConfirmed: totalConfirmed,
            newDeaths: newDeaths,
            totalDeaths: totalDeaths,
            newRecovered: newRecovered,
            totalRecovered: totalRecovered
        });
    }

    render() {
        return (
            <div>
                <hr />
                <h1>{this.state.countryName}</h1>
                <p>New Confirmed Cases: {this.state.newConfirmed}</p>
                <p>Total Confirmed Cases: {this.state.totalConfirmed}</p>
                <p>New Deaths: {this.state.newDeaths}</p>
                <p>Total Deaths: {this.state.totalDeaths}</p>
                <p>New Recovered: {this.state.newRecovered}</p>
                <p>Total Recovered: {this.state.totalRecovered}</p>
            </div>
        );
    }
}

export default Country;