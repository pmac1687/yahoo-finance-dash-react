import React, {useState, useEffect} from "react";

// components

import CardLineChart from "../cards/CardLineChart.js";
import CardBarChart from "../cards/CardBarChart.js";
import CardPageVisits from "../cards/CardPageVisits.js";
import CardSocialTraffic from "../cards/CardSocialTraffic.js";

export default function Dashboard(props) {
  const [lineGraph, setLineGraph] = useState('show');
  const [barGraph, setBarGraph] = useState('no-show')
  const [areaGraph, setAreaGraph] = useState('no-show');
  const [graphStyle, setGraphStyle] = useState('line')

  function updatesGraph() {
    console.log('hits')
  }

  function graphType(props){
    var graph = graphStyle
    console.log(graph)
    if(graph === 'line'){
      setLineGraph('show');
      setBarGraph('no-show');
      setAreaGraph('no-show')

    }
    if(graph === 'bar'){
      setLineGraph('no-show');
      setBarGraph('show');
      setAreaGraph('no-show')

    }
    if(graph === 'area'){
      setLineGraph('no-show');
      setBarGraph('no-show');
      setAreaGraph('show')

    }
  }
  console.log(graphStyle)
  return (
    <>
      <div className="flex flex-wrap">
        <div class={lineGraph} className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart data2={props.data2} stockArray={props.stockArray} />
        </div>
        <div class={barGraph} className="w-full xl:w-4/12 mb-12 px-4">
          <CardBarChart data1={props.data1} data2={props.data2} stockArray={props.stockArray} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits stock={props.stockArray} today={props.today}/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
        </div>
      </div>
    </>
  );
}