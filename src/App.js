import React, { Component } from 'react';
import GeneralInfo from './components/General-Info';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
        </header>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
