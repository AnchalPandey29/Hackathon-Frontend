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
<<<<<<< HEAD
import UserLeave from './components/UserLeave'
=======
import HRleavelist from './components/HRleavelist';
import HRLeavedetail from './components/HRLeavedetail';
>>>>>>> d957beb779268d830441ec446cb211da259a56cb

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<LoginPage/>} path="/login" />
        <Route element={<Home/>} path="/" />
        <Route element={<Contact/>} path="/contact" />  
        <Route element={<Dashboard/>} path="/dashboard" />
        <Route element={<EmpMgmt/>} path="/employee" />
<<<<<<< HEAD
        <Route element={<UserLeave/>} path="/userleave" />
=======
        <Route element={<HRleavelist/>} path="/hrleavelist" />
        {/* <Route element={<HRLeavedetail/>} path="/hrleavedetail" /> */}
>>>>>>> d957beb779268d830441ec446cb211da259a56cb


        <Route path="*" element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App