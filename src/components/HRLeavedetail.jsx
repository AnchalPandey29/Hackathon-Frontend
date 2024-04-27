// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const HRLeavedetail = () => {
  
//   const { id } = useParams();

//   const [blogData, setBlogData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchLeaveById = async () => {
//     setLoading(true);
//     const res = await fetch("http://localhost:5000/leave/getbyid/" + id);
//     const data = await res.json();
//     console.log(data);
//     setLeaveData(data.result);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchLeaveById();
//   }, []);

//   const displayDetails = () => {
//     if (!loading && leaveData) {
//       return
//       <>
//        <div style={{backgroundColor:"#9c3353",height:"40vh",marginBottom:"-300px"}}>    </div>

//       <div className='card m-5 p-5'>
//         <h3 className='mb-5'>{LeaveData.type}</h3>
//         <img
                        
//                         src={url + '/' + LeaveData.empimage}
//                         className="img-fluid mx-auto mb-4"
//                         style={{ display: "block" ,maxHeight: "400px"}}
//                       />
//         <p>{LeaveData.empname}</p>
//         <p>{LeaveData.desc}</p>
//         <p>{new Date(leave.startdatee).toLocaleDateString()}</p>
//         <p>{new Date(leave.enddate).toLocaleDateString()}</p>

//         <button onClick={} className="btn btn-block mb-4" style={{ backgroundColor: "#31b309", color: "white", width: "200px" }}>Accept</button>

//  <button onClick={} className="btn btn-block mb-4" style={{ backgroundColor: "#b32e09", color: "white", width: "200px" }}>Reject</button>
//       </div>
//       </>
//     }
//     else{
//       return <div className='text-center'><img src="https://cdn.dribbble.com/users/3533804/screenshots/6666006/all-anim-gif.gif" style={{width:"500px"}} alt="" />
//       <h1 style={{color:"#518f3d"}}>Loading...</h1></div>
//     }
  
// };

// return displayDetails()
// }

// export default HRLeavedetail;
