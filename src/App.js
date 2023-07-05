import logo from './logo.svg';
import './App.css';
import MainContentWrapper from './components/main-weather-content/main-content-wrapper';
import { Provider } from 'react-redux';
import store from './components/redux/redux-store';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/weather-forecast" element={<MainContentWrapper store={store} />} />
      </Routes>
    </Provider>
  );
}

export default App;
