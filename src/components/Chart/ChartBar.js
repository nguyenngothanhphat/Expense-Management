import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
      let barFillHeigh = '0%';

      if (props.maxValue > 0) {
            barFillHeigh = Math.round((props.value / props.maxValue) * 100) + "%"
      }
      console.log("🚀 ~ file: ChartBar.js ~ line 10 ~ ChartBar ~ barFillHeigh", barFillHeigh)
      return (
            <div className="chart-bar">
                  <div className="chart-bar__inner">
                        <div className="chart-bar__fill" style={{height: barFillHeigh}}></div>
                  </div>
                  <div className="chart-bar__label">{props.label}</div>
            </div>
      )
}

export default ChartBar;