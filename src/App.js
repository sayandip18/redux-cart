import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Cart from './Cart';

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
