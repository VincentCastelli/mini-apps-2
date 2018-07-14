import React from 'react';
import Scoresheet from './Scoresheet';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // player: '',
      // currentScore: 0
    };
  }
  render() {
    return (
      <Scoresheet />
    );
  }
}

export default App;

