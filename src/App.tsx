import React from 'react';
import Calendar from './calender/calendar';
import './App.css';

function App() {
  const someDate = new Date(2023, 8, 20); // September 20, 2023
  return (
    <div className="App">
      <Calendar date={someDate} />
    </div>
  );
} 

export default App;
