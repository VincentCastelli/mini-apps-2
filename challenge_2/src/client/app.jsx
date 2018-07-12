import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';

const App = () => {
  return (
    <div>
      <h1>
        Cryptocurrency Charting Tool
      </h1>
      <p>
        Bitcoin Price Index (BPI) | USD
      </p>
      <div>
        <Chart />
      </div>
      <p>
        Powered by Coindesk
      </p>
    </div>
  );
};

export default App;
ReactDOM.render( <App />, document.getElementById( 'app' ) );
