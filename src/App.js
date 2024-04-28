import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PayrollManagement from "./components/PayrollManagement";
import Home from "./components/Home";
import React from "react";
import LoginPage from "./components/Login";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import EmpMgmt from "./components/EmployeeManagement";
import CourseBrowse from "./components/CourseBrowse";
import AddCourse from "./components/addCourse";
import LeaveApproval from "./components/LeaveApproval";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<EmpMgmt />} path="/employee" />
        <Route element={<CourseBrowse />} path="/course" />
        <Route element={<AddCourse />} path="/addCourse" />
        <Route element={<LeaveApproval />} path="/leaveMng" />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
