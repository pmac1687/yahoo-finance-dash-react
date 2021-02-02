import React, { useState, useRef, setState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/styles/tailwind.css';
import './assets/styles/index.css';
import Dashboard from './dashboard/index';
import Sidebar from './components/Sidebar';
import AdminNavbar from './components/AdminNavbar';
import HeaderStats from './components/HeaderStats';
import FooterAdmin from './components/FooterAdmin';
import Popup from './components/popup';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [],
       data1: [],
       stockArray: 'TSLA',
       gStyle: '',
       today: {},
       yest: {},
      };
  }



  async componentDidMount() {
    var axios = require("axios").default;
    var self = this;
    var stockArray = this.state.stockArray
    var dataArr = []
    
    var options = {
      method: 'GET',
      url: 'https://rapidapi.p.rapidapi.com/stock/v3/get-historical-data',
      params: {symbol: stockArray, region: 'US'},
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '32494ddbdemshb22f418b5bbd699p1321c1jsn5450422cd553'
      }
    }
      axios.request(options).then(function (response) {
        console.log(response.data.prices);
        self.setState({ data: response.data.prices })
        dataArr.push(response.data.prices)
        self.setHeaders()
        self.setBars()
        
      }).catch(function (error) {
        console.error(error);
      });
      

    }
  

  dataMerge(arr){
    console.log(arr)
  }

  updateStocks = arr => {
    this.setState({ stockArray: arr })
    this.componentDidMount()
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  setHeaders() {
    let len = this.state.data.length
    let data = this.state.data
    let today = this.state.data[len-1];
    let yest = this.state.data[len-2];
    let arr = [];
    for (let i=0;i<10;i++){
      arr.push(data[i])
    }
    this.setState({ today: today, yest: yest, data1: arr})

  }

  setBars() {
    let v = new Date(this.state.data[30].date);
    console.log(v)
  }

  updateGraph(){
    var axios = require("axios").default;
    var self = this;
    var stockArray = this.state.stockArray
    var dataArr = []
    for(let a=0;a<stockArray.length;a++){
      if(stockArray[a] != ''){
        var options = {
          method: 'GET',
          url: 'https://rapidapi.p.rapidapi.com/stock/v3/get-historical-data',
          params: {symbol: stockArray[a], region: 'US'},
          headers: {
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
            'x-rapidapi-key': '32494ddbdemshb22f418b5bbd699p1321c1jsn5450422cd553'
          }
        };

          axios.request(options).then(function (response) {
            console.log(response.data.prices);
            self.setState({ data: response.data.prices })
            console.log('data prices:', response.data.prices)
            dataArr.push(response.data.prices)
            if( a === 4){
              this.dataMerge(dataArr)
            }
            self.setHeaders()
            self.setBars()
          }).catch(function (error) {
            console.error(error);
          });
      }

    }
  }

  setGraphStyle(type){
    
  }

  render() {
  return (
    <>
      <Sidebar stocks={this.state.stockArray} updateStocks={this.updateStocks} updateGraph={this.updateGraph.bind(this)} setGStyle={this.setState.stockArray} setStockArray={this.setState} />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats yest={this.state.yest} today={this.state.today} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Dashboard today={this.state.today} data1={this.state.data1} data2={this.state.data} setGraphStyle={this.props.setGraphStyle} updatesGraph={this.props.updatesGraph} gStyle={this.state.gStyle} stockArray={this.state.stockArray} />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}}

