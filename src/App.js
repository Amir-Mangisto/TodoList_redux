import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos/Todos";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
