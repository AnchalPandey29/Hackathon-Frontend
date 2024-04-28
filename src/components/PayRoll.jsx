import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./payroll.css"
const PaymentComponent = () => {
    const [unpaidEmployees, setUnpaidEmployees] = useState([]);
    const [paidEmployees, setPaidEmployees] = useState([]);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    useEffect(() => {
        const fetchUnpaidEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/payroll/unpaid');
                setUnpaidEmployees(response.data);
            } catch (error) {
                console.error('Error fetching unpaid employees:', error);
            }
        };
        const fetchPaidEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/payroll/paid');
                setPaidEmployees(response.data);
            } catch (error) {
                console.error('Error fetching paid employees:', error);
            }
        };

        fetchUnpaidEmployees();
        fetchPaidEmployees();
    }, []);

    const handlePay = async (employeeId) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/payroll/pay/${employeeId}`);
            if (response.status === 200) {
                const updatedUnpaidEmployees = unpaidEmployees.filter(
                    (employee) => employee.id !== employeeId
                );
                const selectedEmployee = unpaidEmployees.find(
                    (employee) => employee.id === employeeId
                );
                setUnpaidEmployees(updatedUnpaidEmployees);
                setPaidEmployees([...paidEmployees, selectedEmployee]);
            }
        } catch (error) {
            console.error('Error paying employee:', error);
        }
    };
    {
        console.log(unpaidEmployees)
    }
    return (
        <div className="payment-container">
            <div className="unpaid-employees">
                <h2>Unpaid Employees</h2>
                <ul>
                    {unpaidEmployees.map((employee) => (
                        <li key={employee.id} onClick={() => setSelectedEmployeeId(employee.id)}>
                            {employee.emp_name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="paid-employees">
                <h2>Paid Employees</h2>
                <ul>
                    {paidEmployees.map((employee) => (
                        <li key={employee.id}>{employee.emp_name}</li>
                    ))}
                </ul>
            </div>
            {
                selectedEmployeeId && (
                    <button onClick={() => handlePay(selectedEmployeeId)}>Pay</button>
                )
            }
        </div >
    );
};

export default PaymentComponent;
