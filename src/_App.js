import Navbar from "./navbar";
import { Switch, Route, Redirect, useParams } from 'react-router-dom'
import Home from "./Home";
import Borad from "./Board";
import Contact from "./Contact";
import MediaOfferTh from "./MediaOfferTh";
import MediaOfferEn from "./MedaiOfferEn";
import NotFound from "./NotFound";
import { useState } from "react";
import Pdpa from './Pdpa'


function App() {
  const [getHome, setHome] = useState(true)
  const Child = () => {
    let { id } = useParams();
    const getURL = ['timesheet', 'bee', 'leave', 'mfa', 'help', 'admin365', 'mbl',
      'home', 'contact', 'mediaOfferA', 'mediaOfferB', 'board', 'pdpa']
    let result = false
    for (let i = 0; i < getURL.length; i++) {
      if (getURL[i] === id) {
        result = true
      }
    }
    return (
      <div>
        {(result === false) ? <NotFound /> : null}
        {(id === 'timesheet') ? window.location.href = 'http://THBKK1SV0007:9000' : null}
        {(id === 'bee') ? window.location.href = 'https://bee.jcdecaux.com' : null}
        {(id === 'leave') ? window.location.href = 'https://jcdecaux.leaveonline.com' : null}
        {(id === 'mfa') ? window.location.href = 'https://aka.ms/mfasetup' : null}
        {(id === 'help') ? window.location.href = 'https://sgsin0ap0019:8080' : null}
        {(id === 'admin365') ? window.location.href = 'https://outlook.office365.com/ecp' : null}
        {(id === 'mbl') ? window.location.href = 'https://eu.quarantine.symantec.com' : null}
        {(id === 'home') ? <Home /> : null}
        {(id === 'contact') ? <Contact /> : null}
        {(id === 'mediaOfferA') ? <MediaOfferTh /> : null}
        {(id === 'mediaOfferB') ? <MediaOfferEn /> : null}
        {(id === 'board') ? <Borad /> : null}
        {(id === 'pdpa') ? <Pdpa /> : null }
      </div>
    );
  }
  console.log(getHome)
  return (
    <div className="App">
      <Navbar page={setHome} />
      <Switch>
        <Route path="/:id" children={<Child />} />
        <Route path='/'><Home page={setHome} /><Redirect to='/home' /></Route>
      </Switch>
    </div>
  )
}

export default App;
