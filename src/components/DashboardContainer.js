import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            {/* Left Sliding Drawer */}
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                    <li>Menu Item 4</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className='row' style={{ backgroundColor: "#5ac1db", height: "30vh", alignItems: "center" }}>
                {/* Menu Icon */}
                <div className="menu-icon" onClick={toggleDrawer}>
                    <i className="fas fa-bars"></i>
                </div>

                {/* Header Text */}
                <h2 className='text-center' style={{ color: "white" }}> Unlock Your Team's full Potential with "<strong style={{ color: "yellow" }}>WorkConnect</strong>
                    <br />
                    "Let's begin optimizing your HR processes today!"</h2>
            </div>

            <div className="row justify-content-center">
                <img src="/cute.gif" alt="" style={{ width: "700px" }} />
            </div>
        </div>
    );
}

export default Dashboard;
