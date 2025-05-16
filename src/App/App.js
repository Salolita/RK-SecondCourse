import React from 'react';
import './App.css';
// import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AllSkill from '../Skills/Skills';
import SKILLS from '../Skills/SKILLS.json'

function App() {
  // console.log("SKIILS", SKIILS);
  return (
    <div className="App">
      <Header />
      <AllSkill 
        data={SKILLS}
      />
      <Footer />
    </div>
  );
}

export default App;
