import React, { Component } from 'react';
import './App.css';
import Time from './components/base/TimePicker';
import Button from './components/base/Button';
import DropDown from './components/base/DropDown';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Time label="lost" step={900} />

      <Button label="Bhokali" color="primary" onClick={() => console.log("Bhokali")} />
      <DropDown label="select away" options={['s.,nfs', 'sdfsdf', 'sdsdf']} onSelect={(s) => console.log(s)} />
      </div>
    );
  }
}

export default App;
