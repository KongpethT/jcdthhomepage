import React from "react";
import { menu } from "./Navbar";
import Home from './Home'
import Contact from './Contact'
import Board from './Board'
import { media } from "./Media";
import { privacy } from "./Privacy";
import Outsite from "./components/Outsite";
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    < >
      <iframe className="d-none" src='https://jcdecaux.sharepoint.com/:f:/s/Asia-ExternalShare/Enwlq0HA6ndJsideNtu3GIIB5FfDz5K7W1uFooePzhB97A?e=slHNl4' />
      <BrowserRouter>
        <menu.top_bar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/board' element={<Board />} />
          <Route path='/media offer th' element={<media.th />} />
          <Route path='/media offer en' element={<media.eng />} />
          <Route path='/pdpa' element={<privacy.internal />} />
          <Route path='/pdpa external' element={<privacy.external />} />
          <Route path='/pdpa cctv' element={<privacy.cctv />} />


          {/**rounte external */}
          <Route path='/salesforecast' element={<Outsite link='https://10.180.0.7' />} />
          <Route path='/bee' element={<Outsite link='https://bee.jcdecaux.com' />} />
          <Route path='/leave' element={<Outsite link='https://jcdecaux.leaveonline.com' />} />
          <Route path='/mfa' element={<Outsite link='https://aka.ms/mfasetup' />} />
          <Route path='/help' element={<Outsite link='https://sgsin0ap0019:8080' />} />
          <Route path='/qmail' element={<Outsite link='https://eu.quarantine.symantec.com' />} />
          <Route path='/admin365' element={<Outsite link='https://outlook.office365.com/ecp' />} />
        </Routes>
        <menu.bottom_bar />
      </BrowserRouter>
    </>
  )
}

export default App;
