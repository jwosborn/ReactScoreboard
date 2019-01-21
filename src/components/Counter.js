import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({index, score, changeScore, handleFindHighScore}) => {


    return (
    <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore( index, -1)} > - </button>
        <span className="counter-score" onChange={() => handleFindHighScore()}>{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore( index, 1)}> + </button>
    </div>
    );
}

    Counter.propTypes = {
        index: PropTypes.number,
        score: PropTypes.number,
        changeScore: PropTypes.func,
        handleFindHighScore: PropTypes.func
    }
  export default Counter; 