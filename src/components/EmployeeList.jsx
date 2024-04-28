import React from 'react';
import EmployeeItem from './EmployeeItem';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
    return (
        <div className="employee-list-container">
            <h2>Employee List</h2>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <EmployeeItem key={employee.emp_id} employee={employee} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;
