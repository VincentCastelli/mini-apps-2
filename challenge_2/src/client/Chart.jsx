import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2'; // add Bar

class Chart extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {

    };

    // this.handleChange = this.handleChange.bind( this );
  }

  // handleChange( evt ) {
  //   console.log( evt );
  // }

  render() {
    const data = {
      labels: this.props.chartLabels,
      datasets: [ {
        data: this.props.chartDataset,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      } ],
    };
    return (
      <div>
        <Line
          data={ data }
          width={ 600 }
          height={ 200 }
          options={ {
            maintainAspectRatio: false,
          } }
        />
        <div>
          <button type="submit" onClick={ this.props.onClick }>
            Search
          </button>
        </div>
      </div>
    );
  }
}

Chart.propTypes = {
  onClick: PropTypes.func.isRequired,
  chartLabels: PropTypes.arrayOf( PropTypes.string ).isRequired,
  chartDataset: PropTypes.arrayOf( PropTypes.number ).isRequired,
};

export default Chart;
