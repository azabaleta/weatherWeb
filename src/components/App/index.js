import React from 'react';
import './App.css';
import { CurrentWeather } from '../CurrentWeather';
import { DaysList } from '../DaysList';
import { Header } from '../Header';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main className='main'>
        <CurrentWeather/>
        <DaysList></DaysList>
      </main>
    </React.Fragment>
  );
}

export { App };
