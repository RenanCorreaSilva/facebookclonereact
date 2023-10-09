import './App.css';
import {useState, useEffect} from 'react'
import {db, auth} from './firebase'

import Header from './Header'
import Stories from './Stories'
import Postar from './Postar'
import Posts from './Posts'





function App() {

  
  

  

  return (
    <div className="App">
      <Header />
      <Stories />
      <Postar nome="Renan" />
      <Posts nome="Renan Correa" horario="14h"/>
       
     
    </div>
  );
}

export default App;
