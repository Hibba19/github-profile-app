import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserProfileThunk from './components/UserProfileThunk';
import UserProfileRTK from './components/UserProfileRTK';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>🚀 GitHub User Profile App</h1>

        <div className="sections">
          <div className="section">
            <h2>🔹 Redux Thunk Example</h2>
            <UserProfileThunk />
          </div>

          <div className="section">
            <h2>🔹 RTK Query Example</h2>
            <UserProfileRTK />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
