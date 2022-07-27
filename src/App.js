import React from "react";
import Home from './Home'
import Board from './Board'
import Contact from './Contact'
import MediaOfferEn from './MedaiOfferEn'
import MediaOfferTh from './MediaOfferTh'
import Navbar from "./Navbar";
import Pdpa from "./Pdpa";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div style={{ height: '45px' }}></div>
        <Switch>
          <Route exact path='/media_Offer_th'><MediaOfferTh /></Route>
          <Route exact path='/media_Offer_en'><MediaOfferEn /></Route>
          <Route exact path='/contact'><Contact /></Route>
          <Route exact path='/board'><Board /></Route>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/pdpa'><Pdpa /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
