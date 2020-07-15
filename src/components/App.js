import React from 'react';
import Menu from './Menu';
import Card from './Card';
import AddCard from './AddCard';

const App = () => {
  return (
    <div>
      <Menu />
      <div className="ui container grid">
        <div className="ui row">
          <div className="column">
            <h1 className="ui header">Task list</h1>    
          </div>
        </div>
        <div className="ui row">
          <div className="ui four column centered grid stackable cards">    
            <Card/>
            <AddCard/>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default App;
