import logo from './logo.svg';
import './App.css';
import MainContentWrapper from './components/main-weather-content/main-content-wrapper';
import { Provider } from 'react-redux';
import store from './components/redux/redux-store';

function App() {
  return (
    <Provider store={store}>
      <MainContentWrapper store={store} />
    </Provider>
  );
}

export default App;
