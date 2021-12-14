import React from 'react';
import '../css/Chart.css';
import ChartBar from './ChartBar';

function Chart({ dataPoints }) {
  const dataPointsValue = dataPoints.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={totalMax} label={label} />
      ))}
    </div>
  );
}

export default Chart;
