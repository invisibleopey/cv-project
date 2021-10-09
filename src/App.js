import React, { Component } from 'react';
import GeneralInfo from './components/General-Info';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        firstName: 'Abdullah',
        lastName: 'Murtala',
        title: 'Jnr Developer',
        address: 'Agbede, Ilorin',
        email: 'oabdullahi@example.com',
        phoneNumber: '09012345678',
      },
    };
  }

  render() {
    const { genInfo } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Resume Regenetor with React</h1>
        </header>
        <GeneralInfo genInfo={genInfo} />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
