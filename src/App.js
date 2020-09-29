import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  //https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
  //https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2

  useEffect(() => {
    console.log("RUNNING USE EFFECT......", count, isActive);
    let interval;
    if (isActive) {
      interval = setInterval(() => setCount(count => count + 1), 1000);
    } else if (count === 0 && !isActive) {
      clearInterval(interval);
    }
    return () => {
      console.log("EXITING......")
      clearInterval(interval);
    };
  }, [count, isActive]);

  //const onStartHandler = () => {
  //setCount(count + 1);
  //const interval = setInterval(() => setCount(count => count + 1), 1000);
  //setTimer(timer);
  //};
  //const onPauseHandler = () => { };
  const onStopHandler = () => {
    setIsActive(false);
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count}
        </p>
        <button onClick={() => setIsActive(!isActive)}>{isActive ? "PAUSE" : "START"}</button>
        <button onClick={onStopHandler}>STOP</button>
      </header>
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     countDown: 0,
//     timer: null
//   }

//   onStartHandler = () => {
//     const timer = setInterval(() => this.setState((prevState) => ({
//       countDown: prevState.countDown + 1
//     })), 1000);
//     this.setState({ timer });
//   };

//   onStopHandler = () => {
//     clearInterval(this.state.timer);
//     this.setState({ countDown: 0, timer: null })
//   };

//   onPauseHandler = () => clearInterval(this.state.timer);

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {this.state.countDown}
//           </p>
//           <button onClick={this.onStartHandler}>START</button>
//           <button onClick={this.onPauseHandler}>PAUSE</button>
//           <button onClick={this.onStopHandler}>STOP</button>
//         </header>
//       </div>
//     );
//   };
// }

export default App;
