import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import './Employee.css';

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/employees/${id}`);
            fetchEmployees();
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const handleEdit = async (id, data) => {
        try {
            await axios.put(`http://localhost:5000/api/employees/${id}`, data);
            fetchEmployees();
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    const handleSubmit = async (formData) => {
        try {
            await axios.post('http://localhost:5000/api/employees', formData);
            fetchEmployees();
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    return (
        <div className="employee-management">
            <div className="employee-list-container">
                <EmployeeList employees={employees} onDelete={handleDelete} onEdit={handleEdit} />
            </div>
            <div className="employee-form-container">
                <EmployeeForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default EmployeeManagement;
