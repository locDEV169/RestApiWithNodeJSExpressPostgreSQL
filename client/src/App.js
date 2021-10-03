import './App.css';
import { Component } from 'react';
import Headers from './components/Headers/header';
import Acount from './components/account/Acount';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Headers />
            <Acount />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
