import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Navbar/NavBar';
import './App.css';
import Dashboard from './Components/NotAccess/Dashboard';
import Login from './Components/NotAccess/Login';
import SignUp from './Components/SignUp/SignUp';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import DoctorDetail from './Components/DoctorProfile/DoctorDetail';

function App() {
  let isLogged = false

  return (
    <>
    <BrowserRouter>
    <NavBar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path="/signup" element={<SignUp/>} />
  <Route path='/doctorprofile' element={<DoctorProfile/>}/>
  <Route path='doctorprofile/:id' element={<DoctorDetail/>}/>
  <Route path="/dashboard" element={isLogged ?<Dashboard/> : <Navigate to="/login" replace/>} />
  <Route path="/login" element={<Login/>}/>


  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
