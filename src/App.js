import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './Components/Header';

function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Sign-In' element={<SignIn />} />
    <Route path='/Sign-Up' element={<SignUp />} />
    <Route path='/About' element={<About />} />
    <Route path='/Profile' element={<Profile />} />
    
    

    
  </Routes>
  </BrowserRouter>
}

export default App
