import React from 'react';
import './App.scss';

import Slidebar from './components/Slidebar/Slidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Slidebar />
        <Main />
      </div>
      <div className="musicControls">
        Previous/Play/Next
      </div>
    </div>
  );
}

export default App;
