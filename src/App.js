import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Typography from './Components/Test';
import Raven from 'raven-js';
import Button from './Components/Button.js'; // Import the Button component

function App() {
  const [x, setX] = useState(0);
  useEffect(() => {
    Raven.config('https://40b5111085cd45e2b5e93a68c23e3795@o144116.ingest.sentry.io/1194253');
    console.log(Raven.isSetup());
    setX(prev => prev+1);
  }, []);
  const handleClick = () => {
    console.log("Button clicked");
    setX(prev => prev+1);
    Raven.captureMessage(`Button clicked ${x}`);
    Raven.setUserContext({email: 'xyz@gmail.com'});
    console.log(Raven.lastEventId());
    // Raven.setEnvironment('development1');
    // Raven.setTagsContext({environment: 'development', version: '1.0.0'});
    // Raven.withScope(scope => {
    //   scope.setExtra('x', x);
    //   scope.setLevel('warning');
    //   Raven.captureMessage('Button clicked', { level: 'warning' });
    // });
  }
  return (
    <ErrorBoundary>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {x}
        </a>
        <Typography>Inside the Typography components</Typography>
          <Button onClick={handleClick}>Click me</Button>
      </header>
    </div>
    </ErrorBoundary>
  );
}

export default App;
