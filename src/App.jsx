import React , { useState} from 'react';
import axios from 'axios';
import {BrowserRouter , Routes , Route } from "react-router-dom" ;

import Home from './home';
import Register from './register';
import Login from './login';
import Homes from './homes';
import Lofi from './lofi';
import HotHindi from './hotHindi';
import HotKorea from './hotKorea';
import HotUSA from './hotUsa';
import HotTamil from './hotTamil';
import HotMalayalam from './hotMala';
import HotPunjab from './hotPunjabi';
import Global from './global';
import TopIndia from './topindia';
import Top50Global from './global50';
import Top50India from './india50';
import ViralGlobal from './viral50global';
import ViralIndia from './viralindia';
import ViralKorea from './viralkorea';
import Throw1 from './throwback1';
import Throw2 from './throw2';
import Throw3 from './throw3';
import Throw4 from './throw4';
import Throw5 from './throw5';
import Throw6 from './throw6';
import Throw7 from './throw7';
import Throw8 from './throw8';
import Sing1 from './sing1';
import Sing2 from './sing2';
import Sing3 from './sing3';
import Sing4 from './sing4';
import Sing5 from './sing5';
import Sing6 from './sing6';
import Sing7 from './sing7';
import Try1 from './try1';
import Try2 from './try2';
import Try3 from './try3';
import Try4 from './try4';
import Try5 from './try5';
import Try6 from './try6';
import Try7 from './try7';
import CreatePlay from './createplay';
import Search from './search';
import Profile from './profile';

function App() {
  let mode = import.meta.env.MODE;
  if(mode == "development"){
    axios.defaults.baseURL = `http://localhost:${import.meta.env.VITE_PORT}`;

  }
  if(mode == "production"){
    axios.defaults.baseURL = location.origin;
  }

  const [isLoggedin , setLoggedin] = useState(false);
    const [isRegistered , setRegistered] = useState(false);

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/register" element={<Register setRegistered={setRegistered} />} />
    <Route path="/login" element={<Login setLoggedin={setLoggedin} />}  />
    <Route path='/homes' element={<Homes />} />
    <Route path='/hothitshindi' element={<HotHindi />} />
    <Route path='/hothitstamil' element={<HotTamil />} />
    <Route path='/hothitskorea' element={<HotKorea />} />
    <Route path='/hothitspunjabi' element={<HotPunjab />} />
    <Route path='/hothitsmala' element={<HotMalayalam />} />
    <Route path='/hothitsusa' element={<HotUSA />} />
    <Route path='/lofi' element={<Lofi />} />

    <Route path='/global' element={<Global />} />
    <Route path='/india' element={<TopIndia />} />
    <Route path='/50global' element={<Top50Global />} />
    <Route path='/50india' element={<Top50India />} />
    <Route path='/v50global' element={<ViralGlobal />} />
    <Route path='/v50india' element={<ViralIndia />} />
    <Route path='/v50korea' element={<ViralKorea />} />

    <Route path='/koreansound' element={<Throw1 />} />
    <Route path='/ost' element={<Throw2 />} />
    <Route path='/lovetelugu' element={<Throw3 />} />
    <Route path='/odlvinyls' element={<Throw4 />} />
    <Route path='/bestkpop' element={<Throw5 />} />
    <Route path='/millenium' element={<Throw6 />} />
    <Route path='/all10' element={<Throw7 />} />
    <Route path='/all90s' element={<Throw8 />} />

    <Route path='/kclubparty' element={<Sing1 />} />
    <Route path='/girlkaroke' element={<Sing2 />} />
    <Route path='/popfavourites' element={<Sing3 />} />
    <Route path='/singindie' element={<Sing4 />} />
    <Route path='/classicoldies' element={<Sing5 />} />
    <Route path='/karokeespanol' element={<Sing6 />} />
    <Route path='/partydeluxe' element={<Sing7 />} />

    <Route path='/bts' element={<Try1 />} />
    <Route path='/toptrack2023' element={<Try2 />} />
    <Route path='/kimbops' element={<Try3 />} />
    <Route path='/kpopfresh' element={<Try4 />} />
    <Route path='/kpoppk' element={<Try5 />} />
    <Route path='/jk' element={<Try6 />} />
    <Route path='/workout' element={<Try7 />} />

    <Route path='/createplay' element={<CreatePlay />} />
    <Route path='/search' element={<Search />} />
    <Route path='/profile' element={<Profile />} />

    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
