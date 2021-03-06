import React, { Component } from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from './api'

export default class App extends Component {
state = {
data : {},
country : '',
}

async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData})
}

handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData, country : country})
}
    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
               <div className={styles.footer}>
               <ul>
                    <li><pre>&lt; <span>&#x2764;</span>&#47;&gt;</pre></li>
                    <li><a href="mailto:shreeswetass@gmail.com">shreesweta</a></li>
                </ul>
               </div>
            </div>
        )
    }
}
