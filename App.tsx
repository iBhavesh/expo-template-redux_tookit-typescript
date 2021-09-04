import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

import Base from "./src/components/Base";

export default function App() {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
}
