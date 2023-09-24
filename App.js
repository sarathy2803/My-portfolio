import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Menu } from './Router portfolio/Menu/Menu';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Hello } from './Helloworld/Hello';
import { Congrats } from './Congrats Card/Congrats';
import { Superover } from './SuperOver/Superover';
import { Socialbutton} from './Socialbuttons/Socialbuttons';
import { Notification } from './Notifications/Notification';
import { Technologies } from './Technology card/technology';
import { Hooks } from './Hooks Task/Hooks';
import { Fruitcount } from './Fruit Counter/Fruit counter';
import { Feedback } from './Feedback/Feedback';
import { Feedbacktwo } from './Feedback/Feedback2';
import { Datefunction } from './Date Function/Date Function';
import { Products } from './Api Task/Api Task';
import { Productss } from './Api Task/Api second Task';
import { About } from './Router portfolio/About/About';
import { Home } from './Router portfolio/Home/Home';
import { Certification } from './Router portfolio/Certification/Certification';
import { Skills } from './Router portfolio/Skills/Skills';
import { Qualification } from './Router portfolio/Qualification/Qualification';
import { Contact } from './Router portfolio/Contact/Contact';

 export function App() {
  return (
  <>
  

<BrowserRouter>
<Routes>
  <Route path='/' element={[<Menu/>,<Home/>]}></Route>
  <Route path='/Home' element={[<Menu/>,<Home/>]}></Route>
  <Route path='/About' element={[<Menu/>,<About/>]}></Route>
  <Route path='/Skills' element={[<Menu/>,<Skills/>]}></Route>
 <Route path='/Certification' element={[<Menu/>,<Certification/>]}></Route>
 <Route path='/Contact' element={[<Menu/>,<Contact/>]}></Route>
{/* <Route path='/' element={<Menu/>}/>
<Route path="/Hello" element={[<Menu/>,<Hello/>]}/>
<Route path="/Congrats" element={[<Menu/>,<Congrats/>]}/>
<Route path='/Superover' element={[<Menu/>,<Superover/>]}/>
<Route path='/Socialbuttons' element={[<Menu/>,<Socialbutton/>]}/>
<Route path='/Notification' element={[<Menu/>,<Notification/>]}/>
<Route path='/Technologies' element={[<Menu/>,<Technologies/>]}/>
<Route path='/hooks' element={[<Menu/>,<Hooks/>]}/>
<Route path='/Fruitcount' element={[<Menu/>,<Fruitcount/>]}/>
<Route path='/Feedback' element={[<Menu/>,<Feedback/>]}/>
<Route path='/Feedbacktwo' element={[<Menu/>,<Feedbacktwo/>]}/>
<Route path='/Datefunction' element={[<Menu/>,<Datefunction/>]}/>
<Route path='/products' element={[<Menu/>,<Products/>]}/>
<Route path='/Productss/:id' element={[<Menu/>,<Productss/>]}/> */}
</Routes>
</BrowserRouter>
      </>
  );
}
export default App;
