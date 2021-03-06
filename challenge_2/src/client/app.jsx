import React from 'react';
import axios from 'axios';
import Chart from './Chart';

class App extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      url: 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-06-01&end=2018-07-12',
      labels: [],
      dataset: [],
    };

    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    axios.get( this.state.url )
      .then( ( response ) => {
        const chartLabels = Object.keys( response.data.bpi );
        const chartDataset = Object.values( response.data.bpi );
        this.setState( {
          labels: chartLabels,
          dataset: chartDataset,
        } );
      } );
  }

  render() {
    return (
      <div>
        <h1>
            Cryptocurrency Charting Tool
        </h1>
        <h3>
            Bitcoin Price Index (BPI) | USD
        </h3>
        <div>
          <Chart
            onClick={ this.handleClick }
            chartLabels={ this.state.labels }
            chartDataset={ this.state.dataset }
          />
        </div>
        <a href="https://www.coindesk.com/price/">
            Powered by Coindesk
        </a>
      </div>
    );
  }
}

export default App;
