import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
