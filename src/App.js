import { Home } from './Components/Home/home';
import { Login } from './Components/Login/login';
import { Like } from './Components/Like/like';
import { Upgrade } from './Components/Upgrade/upgrade';
import {Signup} from './Components/Login/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
