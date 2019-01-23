import React from 'react';
import {Consumer} from './Context'
import PropTypes from 'prop-types';

const Counter = ({index, score, highScore}) => {
    return (
    <Consumer>
    {context => (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => context.actions.changeScore( index, -1)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => context.actions.changeScore( index, 1)}> + </button>
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