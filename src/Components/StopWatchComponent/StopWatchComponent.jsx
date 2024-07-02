import React, { useEffect, useState } from 'react'
import './StopWatchComponent.css'
import clockImage from '../../assets/images/clock.jpg';

const StopWatchComponent = () => {
    const [time,setTime]=useState(0)
    const [isRunning,setRunning]=useState(false)

    useEffect(()=>{
        let interval=null;
        
        
    if (isRunning) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 10);
        }, 10); 
      } else {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval); 
    }, [isRunning]);
      
    const startHandler=()=>{
        setRunning(true)
    }
    const stopHandler=()=>{
        setRunning(false)
    }
    const resetHandler=()=>{
      setRunning(false)
      setTime(0)
    }
    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };
  return (
    <React.Fragment>
    <main className='container'>
      <h1>Stopwatch</h1>
      <div className='border'>
        <div className='title-holder'>
          <img src={clockImage} alt="Clock" />
          <h2>Timer</h2>
        </div>
        <div className='time-display'>{formatTime(time)}</div>
        <div className='button-container'>
          <button onClick={startHandler} className='start'>Start</button>
          <button onClick={stopHandler} className='stop'>Stop</button>
          <button onClick={resetHandler} className='reset' disabled={isRunning || time === 0}>Reset</button>
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default StopWatchComponent