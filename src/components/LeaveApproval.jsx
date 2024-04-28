import React, { useEffect, useState } from "react";
import "./LeaveApproval.css";
import { Button } from "@mui/material";
import axios from "axios";
const LeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leave-requests");
        setLeaveRequests(response.data);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchLeaveRequests();
  }, []);

  // Handler for approving a leave request
  const handleApprove = async (employeeId) => {
    try {
      await axios.post(`http://localhost:5000/api/leave-requests/approve/${employeeId}`);
      setLeaveRequests((prev) =>
        prev.filter((request) => request.employeeId !== employeeId)
      );
    } catch (error) {
      console.error("Error approving leave:", error);
    }
  };

  // Handler for rejecting a leave request
  const handleReject = async (employeeId) => {
    try {
      await axios.post(`http://localhost:5000/api/leave-requests/reject/${employeeId}`);
      setLeaveRequests((prev) =>
        prev.filter((request) => request.employeeId !== employeeId)
      );
    } catch (error) {
      console.error("Error rejecting leave:", error);
    }
  };

  return (
    <div className="leave-approval-container">
      <h2>Leave Approval</h2>
      {leaveRequests.length === 0 ? (
        <p>No leave requests pending approval.</p>
      ) : (
        <div className="leave-approval-cards">
          {leaveRequests.map((request) => (
            <div className="leave-card" key={request.employeeId}>
              <h3>Employee ID: {request.employeeId}</h3>
              <p>Leave Apply Date: {request.leaveApplyDate}</p>
              <p>No. of Days: {request.days}</p>
              <p>Reason: {request.reason}</p>
              <div className="leave-card-actions">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleApprove(request.employeeId)}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleReject(request.employeeId)}
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaveApproval;
