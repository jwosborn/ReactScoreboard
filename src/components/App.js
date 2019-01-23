import React from 'react';
import Header from './Header';
import Player from './Player';
import {Consumer} from './Context';
import AddPlayerForm from './AddPlayerForm';


  
const App = () =>  {
  return (
    <Consumer>
      {context => {
        return (
          <div className="scoreboard">
          <Header />
    
          {/* Players list */}
          {context.players.map( (player, index) =>
            <Player />
          )}
          <AddPlayerForm />
        </div>
        );
      }}

    </Consumer>
    );
  }

export default App;
