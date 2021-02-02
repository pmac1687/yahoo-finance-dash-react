import React from "react";

// components

import CardStats from "../cards/CardStats.js";

export default function HeaderStats(props) {
  return (
    <>
      {/* Header */}
      <div style={{ zIndex: 0}} className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="HIGH"
                  statTitle={Number(props.today.high).toFixed(2)}
                  statArrow="up"
                  statPercent={(props.today.high > props.yest.high) ? `${100- (100 *( props.yest.high/props.today.high))}` : `${ 100- (100 *(props.today.high/props.yest.high))}`}
                  statPercentColor={(props.today.high > props.yest.high) ? 'text-green-500' : 'text-red-500'}
                  statDescripiron="Since Yesterday"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="LOW"
                  statTitle={Number(props.today.low).toFixed(2)}
                  statArrow="down"
                  statPercent={(props.today.low > props.yest.low) ? `${100 - (100 * (props.yest.low/props.today.low))}` : `${100 - ( 100 * (props.today.low/props.yest.low))}`}
                  statPercentColor={(props.today.low < props.yest.low) ? 'text-green-500' : 'text-red-500'}
                  statDescripiron="Since Yesterday"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="VOLUME"
                  statTitle={Number(props.today.volume).toFixed(2)}
                  statArrow="down"
                  statPercent={(props.today.volume > props.yest.volume) ? `${100 - (100 * (props.yest.volume/props.today.volume))}` : `${100- ( 100 * (props.today.volume/props.yest.volume))}`}
                  statPercentColor={(props.today.volume > props.yest.volume) ? 'text-green-500' : 'text-red-500'}
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CLOSE"
                  statTitle={Number(props.today.close).toFixed(2)}
                  statArrow="up"
                  statPercent={(props.today.close > props.yest.close) ? `${100 -(100 * (props.yest.close/props.today.close))}` : `${100 -(100* (props.today.close/props.yest.close))}`}
                  statPercentColor={(props.today.close > props.yest.close) ? 'text-green-500' : 'text-red-500'}
                  statDescripiron="Since Yesterday"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}