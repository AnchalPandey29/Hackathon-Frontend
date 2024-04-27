import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PayrollManagement from './components/PayrollManagement';
import Home from './components/Home';
import React from 'react'
import LoginPage from './components/Login';
import NotFound from './components/NotFound';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import EmpMgmt from './components/EmployeeManagement';
import UserLeave from './components/UserLeave'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<Home/>} path="/" />
        <Route element={<Contact/>} path="/contact" />  
        <Route element={<Dashboard/>} path="/dashboard" />
        <Route element={<EmpMgmt/>} path="/employee" />
        <Route element={<UserLeave/>} path="/userleave" />


        <Route path="*" element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App