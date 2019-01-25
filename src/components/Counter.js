import React from 'react';
import {Consumer} from './Context'
import PropTypes from 'prop-types';

const Counter = ({index, score, highScore}) => {
    return (
    <Consumer>
    {({players, actions}) => (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => actions.changeScore( index, -1)}> - </button>
            <span className="counter-score" onChange={() => actions.handleFindHighScore(players[index])}>{ players[index].score }</span>
            <button className="counter-action increment" onClick={() => actions.changeScore( index, 1)}> + </button>
        </div>
    )}
    </Consumer>
    );
}

    Counter.propTypes = {
        index: PropTypes.number,
        score: PropTypes.number,
        handleFindHighScore: PropTypes.func
    }
  export default Counter; 