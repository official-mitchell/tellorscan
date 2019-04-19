import React from 'react';
import {
  chartConfig
} from 'Components/Chart/ChartTemplates';
import LineShadow from 'Components/Chart/LineShadow';
import {formatTime} from 'Utils/time';

const lineColor = "#414141";

export default class Chart extends React.Component {
  render() {
    const {
      data,
      height
    } = this.props;

    let labels = [];
    let tips = [];
    data.forEach(d=>{
      labels.push(formatTime(d.timestamp, "MM/DD HH:mm"));
      tips.push(d.tip);
    });

    let config = chartConfig();
    let configWithData = {
      ...config
    };
    configWithData.data = {
      labels,
      datasets: [
        {
          label: "Tip",
          data: tips,
          borderColor: lineColor,
          pointBackgroundColor: lineColor,
          pointBorderColor: lineColor,
          pointHoverBackgroundColor: lineColor,
          pointHoverBorderColor: lineColor,
          pointRadius: 4,
          borderDash: null,
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          fill: false,
          borderWidth: 2,
          backgroundColor: "#e5eff5"
        }
      ]
    }
    return (
      <LineShadow {...configWithData} height={height} />
    )
  }
}