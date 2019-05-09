import React, { Component } from "react";
import { Provider } from "react-redux";
import { StyleProvider } from "native-base";

import AppWithNavigationState from "../App";
import {store} from "./configureStore";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      </StyleProvider>
    );
  }
}
export {
  Setup, store
}
