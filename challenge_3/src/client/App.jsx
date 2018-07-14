import React from 'react';
import Scoresheet from './Scoresheet';
import PinSelector from './PinSelector';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: 'Vincent',
      // currentScore: 0
    };
  }

  render() {
    return (
      <div>
        <div>
          <Scoresheet player={this.state.player} />
        </div>
        <div>
          <PinSelector />
        </div>
      </div>
    );
  }
}

export default App;
