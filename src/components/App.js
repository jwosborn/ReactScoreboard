import React, { Component } from 'react';
import Header from './Header';
import { Provider } from './Context'
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
        score: 0,
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
      <Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.handleScoreChange,
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handleAddPlayer
        }
        }}>
        <div className="scoreboard">
          <Header />
    
          {/* Players list */}
          {this.state.players.map( (player, index) =>
            <Player 
              name={player.name}
              score= { player.score }
              id={player.id}
              key={player.id.toString()} 
              index={index}
              isHighestScore={ highScore === player.score } 
              highScore={this.highScore}       
            />
          )}

          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
