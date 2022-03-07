import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./store/store";
import {MainPage} from "./pages/main/MainPage";
import {DetailsPage} from "./pages/details/DetailsPage";


import './App.css';


function App() {
  return (
      <Provider store={store}>
        <Router>
          <Routes>
            {<Route exact path="/" element={ <MainPage/> }/>}
            {<Route path="/search/:searchQuery" element={ <MainPage/> }/>}
            {<Route path="/movie/:id" element={ <DetailsPage/> }/>}
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
