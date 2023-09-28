import React from 'react';
import logo from './backstage-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="250"
          height="250"
        />
        <p>
          All set to start <code>coding</code>, have fun!
        </p>
        <iframe
          title="Cats Coding"
          src="https://giphy.com/embed/ule4vhcY1xEKQ"
          width="280"
          height="280"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <a
          className="Backstage Web App Hello World"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Happy Developer, Make Happy Code!
        </a>
      </header>
    </div>
  );
}

export default App;
