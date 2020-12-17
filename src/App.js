import React from 'react';
import './App.css';

// import compponents
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
    // write JavaScript here    
    
  return (
    <div className="App">
          <h1>Coding is the beginning!</h1>
          <div className='home'>
              <Nav />
              <Tweets />
          </div>
    </div>
  );
}

export default App;
