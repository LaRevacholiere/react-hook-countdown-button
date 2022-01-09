import React from 'react';
import { useTimer } from 'use-timer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [disable, setDisable] = React.useState(false);
  const { time, start, status } = useTimer({
    endTime: 0,
    initialTime: 60,
    timerType: 'DECREMENTAL',
    onTimeOver: () => {setDisable(false)},
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <button disabled={disable} onClick={() => setDisable(true), start}>
              Click Here
           </button>
           <p>Please Wait: {time}</p>
          {status === 'RUNNING' && <p>Verification...</p>}
        </header>
      </div>
    </>
  );
};

export default App;
