import React from 'react';
import List from '../list';
import store from '../../store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <List/>
    </Provider>
  )
};

export default App;
