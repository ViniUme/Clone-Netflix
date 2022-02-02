import React from 'react';
import Tmdb from './Tmdb';
import './styles/App.css';

function App() {

  const response = async () => {
    let x = Tmdb.getHomeList();
    console.log(x);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
