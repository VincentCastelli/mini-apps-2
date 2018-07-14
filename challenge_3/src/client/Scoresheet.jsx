import React from 'react';
import PropTypes from 'prop-types';

const Scoresheet = props => (
  <ul className="scoresheet">
    <li className="cell name">
      {props.player}
    </li>
    <li className="cell">
      <div className="frame">
        1
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        2
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        3
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        4
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        5
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        6
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        7
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        8
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        9
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
      </ul>
    </li>
    <li className="cell">
      <div className="frame">
        10
      </div>
      <ul>
        <li className="cell bowl">
          F1
        </li>
        <li className="cell bowl">
          F2
        </li>
        <li className="cell bowl">
          F3
        </li>
      </ul>
    </li>
    <li className="cell score">
      Total Score
    </li>
  </ul>
);

Scoresheet.propTypes = {
  player: PropTypes.string.isRequired,
};

export default Scoresheet;
