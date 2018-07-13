import React from 'react';
import PropTypes from 'prop-types';
import { Line, Bar } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      value: 'line',
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( evt ) {
    this.setState( {
      value: evt.target.value,
    } );
  }

  render() {
    const data = {
      labels: this.props.chartLabels,
      datasets: [ {
        label: 'Bitcoin Price Index',
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
        <div>
          <select onChange={ this.handleChange }>
            <option value="line">
              Line
            </option>
            <option value="bar">
              Bar
            </option>
          </select>
        </div>
        {
        ( this.state.value === 'line' ) ?
          <Line
            data={ data }
            width={ 600 }
            height={ 200 }
            options={ {
              maintainAspectRatio: false,
            } }
          /> :
          <Bar
            data={ data }
            width={ 600 }
            height={ 200 }
            options={ {
              maintainAspectRatio: false,
            } }
          />
        }
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
