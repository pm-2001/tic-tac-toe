
import React from 'react';
import './App.css';
import TwoPlayer from './components/Twoplayer.js';
import OnePlayer from './components/Oneplayer.js';
import { useState } from 'react';
import bg from './tictactoe.avif'

const initialState = {
    player1:false,
    player2:false,
}

export default function App() {
    const [isShown, setIsShown] = useState({initialState});
  
    function oneClick(){
      setIsShown({player1:true, player2:false});
    };
    function twoClick(){
      setIsShown({player1:false, player2:true});
    };
  
    return (
      <div>
        {isShown.player1 || isShown.player2 ? null : <img src={bg} alt="logo" className="logo"/> }
        {isShown.player1 ? <OnePlay/> : null }
        {isShown.player2 ? <TwoPlay/> : null}
        <div className="twobutton">
                <button onClick={oneClick} className="oneplayer">One Player</button>
                <button onClick={twoClick} className="twoplayer">Two Player</button>
        </div>
      </div>
    );
  }
  
  function OnePlay() {
    return (
      <OnePlayer />
    );
  }
  function TwoPlay() {
    return (
      <TwoPlayer />
    );
  }