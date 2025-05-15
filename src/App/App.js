import React from 'react';
import './App.css';
// import Button from '../Button/Button';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SKILLS from '../Skills/SKILLS.json';
import Button from '../Button/Button';

function App() {
  // console.log("SKIILS", SKIILS);
  return (
    <div className="App">
      <Header />
        <ul className='Skill'>
          {SKILLS.map((item) => (
            <li>
              <h3>{item.Skill}</h3>
              <img src={item.image} />
              <span className='history'>amount of experience : {item.history}</span>
              <span className='numberSpan'>{item.Number}</span>
              <Button />
            </li>
          ))}
        </ul>
      <Footer />
    </div>
  );
}

export default App;
