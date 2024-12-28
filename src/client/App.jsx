import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />} >
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App