import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import app_config from './config'
import Header from './Header';

const HRleavelist = () => {

    // const [LeaveList, setLeaveList] = useState([]);

    // const fetchData = async () => {
    //     const res = await fetch(url+'/Leave/getall');
    //     const data = await res.json();
    //     console.log(data);
    //     setLeaveList(data.result);
    // }

    // useEffect(() => {
    //   fetchData();
    // }, [])
        
    return (
        <div>
            {/* <Header />
            <div >
                <div className='row p-5 justify-content-center'>
                    {
                        LeaveList.map((leave) => (
                            <div className='col-md-3 card m-3 mt-0 pt-3'>
                                <div className='col-md-3 mx-auto'>

                                    <img className='img-fluid ' src={url + '/' + leave.image} alt='' style={{ maxHeight: "260px" }} />
                                </div>

                                <div className='row-md-7 p-4'>
                                    <h2>{leave.empname}</h2>
                                    <p>{leave.empdep}</p>
                                    <p>{new Date(leave.startdatee).toLocaleDateString()}</p>
                                    <p>{new Date(leave.enddate).toLocaleDateString()}</p>

                                    <Link
                                        to={"/hrleavedetail" + leave._id}
                                        type='button'
                                        className='btn mb-2'
                                        style={{ backgroundColor: '#9c3353', color: 'white' }}
                                    >
                                        Open
                                    </Link>
                                </div>

                            </div>

                        ))
                    }
                    <div className="row">
                        <Link className="btn mt-5" style={{ background: "#9c3353", color: "white", width: "fit-content", marginLeft: "10%" }} to="/">Back to Home</Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default HRleavelist