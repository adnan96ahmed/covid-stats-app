import React, { Component } from 'react';
import axios from '../axios-instance';
import { Link, Route } from 'react-router-dom';
import Country from '../components/Country';
import './Countries.css';

class Countries extends Component {
    state = {
        countries: [],
    };

    componentDidMount() {
        axios.get('/summary')
            .then(res => {
                let fetchedOrders = [];
                fetchedOrders = res.data.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
                this.setState({ countries: fetchedOrders.slice(0, 10) });
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (
            <div className='Countries'>
                <ol>
                    {this.state.countries.map(country => (
                        <li key={country.ID}>
                            <Link 
                                to={{
                                    pathname: '/countries/' + country.Country,
                                    search: '?newConfirmed='+country.NewConfirmed+
                                            '&totalConfirmed='+country.TotalConfirmed+
                                            '&newDeaths='+country.NewDeaths+
                                            '&totalDeaths='+country.TotalDeaths+
                                            '&newRecovered='+country.NewRecovered+
                                            '&totalRecovered='+country.TotalRecovered
                                }}>
                                <h4>{country.Country}</h4>
                            </Link>
                        </li>
                    ))}
                </ol>
                <Route path={"/countries/:countryName"} component={Country} />
            </div>
        );
    }
}

export default Countries;