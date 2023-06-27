
import React from 'react';
import './App.css';
import TwoPlayer from './components/Twoplayer.js';
import OnePlayer from './components/Oneplayer.js';
import { useState } from 'react';

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
        {/* <button onClick={oneClick}>Oneplayer</button> */}
        {isShown.player1 ? <OnePlay/> : <button onClick={oneClick}>Oneplayer</button>}
        {/* <button onClick={twoClick}>Two player</button> */}
        {isShown.player2 ? <TwoPlay/> : <button onClick={twoClick}>Two player</button>}
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