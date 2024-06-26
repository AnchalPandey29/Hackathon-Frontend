import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div style={{ background: "#c6f2fd" }}>
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} style={{ background: "#c6f2fd" }}>
        <div className="drawer-header">
          <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Menu</h3>
          <button className="close-btn" onClick={toggleDrawer}>
            <img src="menu.png" alt="Close" style={{ width: "20px" }} />
          </button>
        </div>
        <ul>
          <div>
            <li><a href="/">Home</a></li>
          </div>

          <div>
            <li><a href="/employee">Employee Management</a></li>
          </div>
          <div>
            <li><a href="/leaveMng">Leave Management</a></li>
          </div>
          <div>
            <li><a href="/course">Training & Development</a></li>
          </div>
          <div>
            <li><a href="/payroll">Pay-roll Management</a></li>
          </div>
        </ul>
      </div>


      <div className='row' style={{ backgroundColor: "#5ac1db", height: "30vh", alignItems: "center", justifyContent: "center" }}>

        {!isDrawerOpen && (
          <div className="menu-icon" onClick={toggleDrawer}>
            <img src="menu.png" alt="Menu" style={{ width: "20px", marginTop: "20px" }} />
          </div>
        )}


        <h2 className='text-center' style={{ color: "white" }}> Unlock Your Team's full Potential with <strong style={{ color: "yellow" }}>WorkConnect</strong>
          <br />

          <span style={{ color: "#007bff" }}>

            "Let's begin optimizing your HR processes today!"</span>
        </h2>
      </div>

      <div className='row justify-content-center'>
        <img src="/dash.png" alt="" style={{ width: "632px" }} />
      </div>
    </div>
  );
}

export default Dashboard;
