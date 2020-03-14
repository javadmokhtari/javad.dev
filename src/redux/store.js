import { createStore } from "redux";
import mySimpleReducer from "./reducers";
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

const store = createStore(mySimpleReducer, /* preloadedState, */ devToolsEnhancer(
    // options like actionSanitizer, stateSanitizer
  ));
export default store;