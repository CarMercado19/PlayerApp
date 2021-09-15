import React from 'react';
import './App.scss';

import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="sideBar">
          <div className="logo">
            <PlayCircleFilledRoundedIcon />
          </div>
          <ul>
            <li>Inicio</li>
            <li>Buscar</li>
            <li>Libreria</li>
          </ul>
        </div>
      </div>
      <div className="musicControls">
        Previous/Play/Next
      </div>
    </div>
  );
}

export default App;
