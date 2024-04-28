import React,{useState} from "react";
import './Dashboard.css'; 



const UserLeave = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
    return (
        <div>
             {/* Left Sliding Drawer */}
      <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} style={{ background: "#c6f2fd" }}>
        <div className="drawer-header">
          <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>Menu</h3>
          <button className="close-btn" onClick={toggleDrawer}>
            <img src="menu.png" alt="Close" style={{ width: "20px" }} />
          </button>
        </div>
        <ul>
          <div>
            <li><a href="/employee">Employee Management</a></li>
          </div>
          <div>
            <li><a href="#">Leave Management</a></li>
          </div>
          <div>
            <li><a href="#">Training & Development</a></li>
          </div>
          <div>
            <li><a href="#">Pay-roll Management</a></li>
          </div>
        </ul>
      </div>

            {/* Form */}
            <div className="container mt-5">
                <form action="./core/application-submission.php" method="post" encType="multipart/form-data">
                    <h2 className="text-center">Apply for Leave</h2>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name of the Employee</label>
                                <input type="text" className="form-control" placeholder="" name="employeeName" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Department</label>
                                <input type="text" className="form-control" placeholder="" name="department" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Phone No.</label>
                                <input type="number" className="form-control" placeholder="" name="phoneNumber" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ paddingTop: '10px' }}>
                        <span style={{ paddingTop: '15px', paddingLeft: '15px' }}>Period of Leave</span>
                        <div className="col-md-5" style={{ paddingRight: '20px' }}>
                            <div className="form-group">
                                <div className="input-group date" id="datepicker" data-date-format="dd-mm-yyyy">
                                    <input type="date" className="form-control" name="startDate" id="startDate" />
                                    <span className="input-group-addon">
                                        <span className="fa fa-calendar-alt fa-2x"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span style={{ paddingTop: '10px', paddingRight: '20px' }}>to</span>
                        <div className="col-md-5">
                            <div className="form-group">
                                <div className="input-group date" id="datepicker1" data-date-format="dd-mm-yyyy">
                                    <input type="date" className="form-control" name="endDate" />
                                    <span className="input-group-addon">
                                        <i className="fa fa-calendar-alt fa-2x"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ paddingTop: '30px' }}>
                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Leave Description</label>
                                <input type="textarea" className="form-control" id="phone" placeholder="" name="description" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Address during leave</label>
                                <input type="text" className="form-control" name="address" placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                            <div className="form-group">
                                <label>Leave Type</label>
                            <div className="input-field">
                            <div className="btn">
                                <select id="leaveType" name="leaveType">
                                <option value="HomeTown">HomeTown</option>
                                <option value="LocalFestival">LocalFestival</option>
                                <option value="Condolence">Condolence</option>
                                <option value="Emergency">Emergency</option>
                                <option value="FamilyFunction">FamilyFunction</option>
                                <option value="Others">Others</option>
                                </select>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="company">Attachments (if any)</label>
                                <div className="file-field input-field">
                                    <div className="btn">
                                        <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    </div>

                    <div style={{ paddingTop: '20px' }}>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserLeave;