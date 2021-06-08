import React from 'react';

import ChartBar from './ChartBar';
import "./Chart.css";

const Chart = (props) => {
      const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
      console.log("🚀 ~ file: Chart.js ~ line 8 ~ Chart ~ dataPointValues", dataPointValues)
      const totalMaximum = Math.max(...dataPointValues);
      console.log("🚀 ~ file: Chart.js ~ line 9 ~ Chart ~ totalMaximum", totalMaximum)
      return (
            <div className="chart">
                  {props.dataPoints.map(dataPoints => <ChartBar key={dataPoints.label} value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} />)}
            </div>
      )
}

export default Chart;