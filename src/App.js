import Navbar from "./navbar";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Home";
import Borad from "./Board";
import Contact from "./Contact";
import MediaOfferTh from "./MediaOfferTh";
import MediaOfferEn from "./MedaiOfferEn";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const app = '/'
  const home = "/home"
  const board = "/board"
  const contact = "/contact"
  const mediaOfferTh = "/mediaOfferA"
  const mediaOfferEn = "/mediaOfferB"
  const [getHome, setHome] = useState(true)
  return (
    <div className="App">
      <Navbar page={setHome} />
      <Switch>
        {(getHome === true) ? <Route path={app}><Home page={setHome}/><Redirect to='/home' /></Route> : null}
        <Route path={home}><Home page={setHome}/></Route>
        <Route path={board}><Borad /></Route>
        <Route path={contact}><Contact /></Route>
        <Route path={mediaOfferTh}><MediaOfferTh /></Route>
        <Route path={mediaOfferEn}><MediaOfferEn /></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
