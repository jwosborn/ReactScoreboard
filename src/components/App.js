import React from 'react';
import Header from './Header';
import Playerslist from './Playerslist';
import AddPlayerForm from './AddPlayerForm';


  
const App = () =>  {
  return (
        <div className="scoreboard">
          <Header />
          {/* Players list */}
          <Playerslist />
          <AddPlayerForm />
        </div>
    );
  }

export default App;
