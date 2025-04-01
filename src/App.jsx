import { Provider } from 'react-redux';
import './App.css'
import store from './features/store';
import Cake from './components/Cake.';
import Milk from './components/Milk';

function App() {

  return (
    <Provider store={store}>
        <Cake />
        <hr />
        <Milk />
    </Provider>
  )
}

export default App;
