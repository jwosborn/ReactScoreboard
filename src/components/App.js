import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


  
class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        isHighestScore: false
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        isHighestScore: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        isHighestScore: false
      },
      {
        name: "James",
        score: 1,
        id: 4,
        isHighestScore: false
      }
    ]
  };

 prevPlayerId = 4;


  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }
  
  handleFindHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } return null;
  
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1,
            isHighestScore: false
          }
        ]
      }
    })
  }

  render() {
    const highScore = this.handleFindHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score= { player.score }
            id={player.id}
            changeScore={ this.handleScoreChange }
            key={player.id.toString()} 
            index={index}
            removePlayer={ this.handleRemovePlayer }  
            isHighestScore={ highScore === player.score } 
            highScore={this.highScore}       
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
