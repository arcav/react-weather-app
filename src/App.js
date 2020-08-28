import './App.css';
import Home from './pages/Home'
import React ,{useEffect}from 'react';

/* useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])
 */


function App() {
  return (
    <div>
     <Home/>
      <h1>React Weather App</h1>
    </div>

  );
}

export default App;
