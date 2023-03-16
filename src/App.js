import { Home } from './Components/Home/home';
import { Login } from '../src/Components/Login/Log_in/login';
import { Like } from './Components/Like/like';
import { Upgrade } from './Components/Upgrade/upgrade';
import {Signup} from "../src/Components/Login/SignUp/SignUp"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import  Payment  from './Components/Payment/payment';
import NotFound from './Components/CommonComponents/NotFoundPage/Notfound';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/upgrade" element={<Upgrade/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>

          <Route path="/payment" element={<Payment />}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
