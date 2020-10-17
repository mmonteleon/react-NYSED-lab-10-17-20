import React from 'react';
import Navbar from './components/Navbar.js';
// Be sure to uncomment these components and the data before you use them!
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';
import './App.css';

function App() {
    console.log(data)
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">

            {data.map(school =>{
               return (<SchoolCard school = {school} />)
           })}  

        </div>
      </div>
    </div>
  );
}

export default App;
