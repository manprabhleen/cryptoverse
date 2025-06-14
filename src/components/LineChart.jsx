import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title as ChartTitle
} from 'chart.js';
import{Col, Row, Typography} from 'antd';
const {Title}=Typography;


ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartTitle
);

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  if(!coinHistory?.data?.history){
    return <div>Loading chart data...</div>
  }
  const coinPrice = [];
  const coinTimestamp = [];
  for(let i=0; i<coinHistory?.data?.history?.length; i+=1){
    coinPrice.push(parseFloat(coinHistory?.data?.history[i].price))
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
console.log("coinHistory:", coinHistory);
console.log("coinPrice:", coinPrice);
console.log("coinTimestamp:", coinTimestamp);

  const data={
    labels: coinTimestamp,
    datasets:[
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
  };

  return (
    <>
        <Row className="chart-header">
            <Title level={2} className="chart-title">{coinName} Price Chart</Title>
            <Col className="price-container">
            <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
            <Title level={5} className="current-price">Current {coinName} Price: ${currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options}/>
    </>
  )
}

export default LineChart