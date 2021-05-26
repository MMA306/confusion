import React, { Component } from 'react';

import Main from './components/MainComponent';

import './App.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {


  render() {

    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
        </Provider>
      </BrowserRouter>
    );

  }

}

export default App;