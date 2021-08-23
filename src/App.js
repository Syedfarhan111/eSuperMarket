import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/store/configStore";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./componnents/Home";

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
