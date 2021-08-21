import { Home } from "./componnents/Home";
import { Provider, useDispatch } from "react-redux";
import { configStore } from "./state/store/configStore";
import "bootstrap/dist/css/bootstrap.min.css";
// import { configStore} from "./state/store/configStore"

function App() {
  const localStore = configStore();

  return (
    <div>
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
}
export default App;
