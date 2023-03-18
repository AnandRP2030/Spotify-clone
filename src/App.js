import { Home } from './Components/Home/home';
import { Login } from '../src/Components/Login/Log_in/login';
import { Like } from './Components/Like/like';
import { Upgrade } from './Components/Upgrade/upgrade';
import {Signup} from "../src/Components/Login/SignUp/SignUp"


import { Routes, Route,useLocation} from 'react-router-dom'

import { PrivatePayment } from './Components/Payment/plansDetails/PrivatePayment';
import  {Payment}  from './Components/Payment/payment';
import NotFound from './Components/CommonComponents/NotFoundPage/Notfound';
import { AnimatePresence } from 'framer-motion';
import { PaymentSuccess } from './Components/Payment/PaymentSuccess';



function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <AnimatePresence mode='wait' >
        <Routes key={location.pathname} location={location} >
          <Route path="/" element={<Home/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/upgrade" element={<Upgrade/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/paymentsuccess" element={<PaymentSuccess />}/>
          <Route path="/payment" element={<PrivatePayment><Payment /></PrivatePayment>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
        </AnimatePresence>

    </div>
  );
}

export default App;
