import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Header from './Components/Header';

function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Sign-In' element={<SignIn />} />
    <Route path='/Sign-Out' element={<SignOut />} />
    <Route path='/About' element={<About />} />
    <Route path='/Profile' element={<Profile />} />
    
    

    
  </Routes>
  </BrowserRouter>
}

export default App
