import React from "react";
import Home from './Home'
import Board from './Board'
import Contact from './Contact'
import MediaOfferEn from './MedaiOfferEn'
import MediaOfferTh from './MediaOfferTh'
import Navbar from "./Navbar";
import Pdpa from "./Pdpa";
import Outsite from "./components/Outsite";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CookieAlert from "./components/CookieAlert";


const App = () => {

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div style={{ height: '45px' }}></div>
        <Switch>
          <Route exact path='/media_Offer_th'><MediaOfferTh /></Route>
          <Route exact path='/media_Offer_en'><MediaOfferEn data={{ clicked: true }} /></Route>
          <Route exact path='/contact'><Contact /></Route>
          <Route exact path='/board'><Board /></Route>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/pdpa'><Pdpa /></Route>
          <Route exact path='/timesheet'><Outsite link='http://THBKK1SV0007:9000' /></Route>
          <Route exact path='/bee'><Outsite link='https://bee.jcdecaux.com' /></Route>
          <Route exact path='/leave'><Outsite link='https://jcdecaux.leaveonline.com' /></Route>
          <Route exact path='/mfa'><Outsite link='https://aka.ms/mfasetup' /></Route>
          <Route exact path='/help'><Outsite link='https://sgsin0ap0019:8080' /></Route>
          <Route exact path='/qmail'><Outsite link='https://eu.quarantine.symantec.com' /></Route>
          <Route exact path='/admin365'><Outsite link='https://outlook.office365.com/ecp' /></Route>
        </Switch>
        <CookieAlert />
      </BrowserRouter>
    </div>
  )
}

export default App;
