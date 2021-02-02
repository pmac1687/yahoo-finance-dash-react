
import React, { useEffect, useState, setState } from 'react';
import { useQuery } from 'react-query';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import axios from 'axios';

const datas1 = [
  {
    high: 20,
    low: 10
  },
  {
    high: 30,
    low: 15
  },
  {
    high: 56,
    low: 12
  },
  {
    high: 43,
    low: 4
  }
]

  



export default class CardLineChart extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        data: [],
        stockArray: this.props.stockArray,

      };
    }
    
    async componentDidMount() {
      var axios = require("axios").default;
      var self = this;
      var options = {
        method: 'GET',
        url: 'https://rapidapi.p.rapidapi.com/stock/v3/get-historical-data',
        params: {symbol: this.state.stockArray[0], region: 'US'},
        headers: {
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
          'x-rapidapi-key': '32494ddbdemshb22f418b5bbd699p1321c1jsn5450422cd553'
        }
      };

        axios.request(options).then(function (response) {
          console.log(response.data.prices);
          self.setState({ data: response.data.prices })
        }).catch(function (error) {
        	console.error(error);
        });
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.stockArray !== this.props.stockArray) {
        console.log('pokemons state has changed.')
        this.setState({ stockArray: this.props.stockArray})
        var axios = require("axios").default;
        var self = this;
        var options = {
          method: 'GET',
          url: 'https://rapidapi.p.rapidapi.com/stock/v3/get-historical-data',
          params: {symbol: this.state.stockArray[0], region: 'US'},
          headers: {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': '32494ddbdemshb22f418b5bbd699p1321c1jsn5450422cd553'
          }
        };
                 axios.request(options).then(function (response) {
            console.log(response.data.prices);
            self.setState({ data: response.data.prices })
          }).catch(function (error) {
          	console.error(error);
          });
               }
    }
    
    render() {
      return (
        <LineChart
        width={1000}
        height={500}
        style={{backgroundColor:'black', color: 'white'}}
        data={this.props.data2}

        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey='' />
        <yAxis />
        <Tooltip />
        <Legend />
        <Line dot={false} type="monotone"  dataKey="low" stroke="#8884d8"  />
        <Line dot={false} type="monotone"  dataKey="high" stroke="#82ca9d" />
      </LineChart>
      );
    }
    
}  