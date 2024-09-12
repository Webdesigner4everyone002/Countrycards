// src/App.jsx
import React from 'react';
import CountryList from './components/CountryList';
import './App.css'; // Optional: For global styles

const App = () => {
  return (
    <div className="App">
      <h1>Country Information</h1>
      <CountryList />
    </div>
  );
};

export default App;
