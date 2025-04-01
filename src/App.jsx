import { Provider } from 'react-redux';
import './App.css'
import store from './features/store';
import Cake from './components/Cake.';
import Milk from './components/Milk';
import UserList from './components/UserList';

function App() {

  return (
    <Provider store={store}>
        <Cake />
        <hr />
        <Milk />
        <hr />
        <UserList />
    </Provider>
  )
}

export default App;
