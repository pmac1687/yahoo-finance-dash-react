/*eslint-disable*/
import React, { useState } from "react";
import '../assets/styles/App.css';
import '../assets/styles/dashboard.css';
import '../assets/styles/dashboard.js';
import DatePicker from "react-datepicker";
import Popup from './popup';

import "react-datepicker/dist/react-datepicker.css";

//import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
//import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar(props) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [stockShow, setStockShow] = useState('no-show');
  const [gTypes, setGTypes] = useState('show');
  const [gSubject, setGSubject] = useState('show');

  const [dates, setDates] = useState('show');
  const [stockArr, setStockArr] = useState('TSLA');


  const [graphType, setGraphType] = useState('line');
  const [gParams, setGParams] = useState('no-show');
  const [arrStocks, setArrStocks] = useState('no-show');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false)



    
    function showsStock(){
        if(stockShow === 'no-show'){
            setStockShow('show')
        }
        else{
            setStockShow('no-show')
        }
    }

    function showsgTypes(){
        if(gTypes === 'no-show'){
            setGTypes('show')
        }
        else{
            setGTypes('no-show')
        }
    }

    function showsDates(){
      if(dates === 'no-show'){
          setDates('show')
      }
      else{
          setDates('no-show')
      }
  }

  function showsgSubject(){
    if(gSubject === 'no-show'){
        setGSubject('show')
    }
    else{
        setGSubject('no-show')
    }
}

    function showsgParams(){
        if(gParams === 'no-show'){
            setGParams('show')
        }
        else{
            setGParams('no-show')
        }
    }

    function chooseStock(e){
      e.stopPropagation()
      e.preventDefault()
      var arr = []
      var stock1 = document.getElementById('stock1').value
      setStockArr(stock1)
      console.log(stockArr)
      props.updateStocks(stock1)
      props.updateGraph()
      


    }

    function togglePopup() {
      setShowPopup(!showPopup)
    }

    function checkBox(e,type){
        setGraphType(type);
        e.target.checked = 'true';
        charts.splice(charts.indexOf(id), 1);
        props.carryFunc

        
    }
  return (
    <>
      <nav style={{backgroundColor: 'rgb(24,24,23)'}} className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <a
            className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Pat's Stock App
          </a>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
           
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <a
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Stock WebApp
                  </a>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <a onClick={showsStock} style={{display: 'flex'}}>
                <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  Choose Stock
                </h6>
                <svg class={stockShow==='no-show' ? 'show': 'no-show'} style={{transform: 'scale(.4)', marginLeft: '-50px', marginTop: '-6%', color: 'gray'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <svg class={stockShow} style={{transform: 'scale(.4)', marginLeft: '-50px', marginTop: '-6%', color: 'gray'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </a>
            {/* Navigation */}
            <form onSubmit={(e) => chooseStock(e)} class={stockShow} >
                    <div  class="">
                        <div>
                            <label id='stock-input' class="text-gray-700" for="username">Stock #1</label>
                            <input className='text' id='stock1' name='stock1'  class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text"></input>
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button  class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700" >Save</button>
                    </div>
            </form>
      

            {/* Divider */}
            <hr  className="my-4 md:min-w-full" />
            {/* Heading */}
            <a style={{ display: 'none' }} onClick={showsgSubject} style={{display: 'flex'}}>
                <h6 style={{ display: 'none'}} className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  Choose Graph Subject
                </h6>
                <svg style={{ display: 'none'}} class={gSubject==='no-show' ? 'show': 'no-show'} style={{transform: 'scale(.4)', marginLeft: '-50px', marginTop: '-6%', color: 'gray'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <svg style={{ display: 'none' }} class={gSubject} style={{transform: 'scale(.4)', marginLeft: '-50px', marginTop: '-6%', color: 'gray'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path style={{ display: 'none'}} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </a>
            {/* Navigation */}
            <form style={{ display: 'none' }} id={gSubject} >
                    <div id='stock-input' class="">
                        <div class="rounded-md bg-white py-4 px-4 overflow-x-auto">
                            <label class="block items-center">
                                <input type="radio" class="form-radio h-5 w-5 text-white-600" id='line'  onChange={(e) => chooseStock(e,'open')} class={stockShow} ></input><span class="ml-2 text-gray-700">Open</span>
                            </label>

                            <label class="block items-center">
                                <input type="radio" class="form-radio h-5 w-5 text-gray-600" id='bar' onChange={checkBox} ></input><span class="ml-2 text-gray-700">High</span>
                            </label>

                            <label class="block items-center">
                                <input type="radio" class="form-radio h-5 w-5 text-gray-600" id='area' onChange={checkBox} ></input><span class="ml-2 text-gray-700">Low</span>
                            </label>

                            <label class="block items-center">
                                <input type="radio" class="form-radio h-5 w-5 text-gray-600" id='area' onChange={checkBox} ></input><span class="ml-2 text-gray-700">Close</span>
                            </label>

                            <label class="block items-center">
                                <input type="radio" class="form-radio h-5 w-5 text-gray-600" id='area' onChange={checkBox} ></input><span class="ml-2 text-gray-700">Volume</span>
                            </label>

                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
            </form>

            
              
          </div>
        </div>
      </nav>
    </>
  );
}