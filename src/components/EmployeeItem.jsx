import React, { useState } from 'react';

const EmployeeItem = ({ employee, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        position: employee.position,
        department: employee.department,
        salary: employee.salary,
        status: employee.status,
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(employee.emp_id, editedData);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    return (
        <tr>
            <td>{employee.name}</td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        name="position"
                        value={editedData.position}
                        onChange={handleChange}
                    />
                ) : (
                    employee.position
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        name="department"
                        value={editedData.department}
                        onChange={handleChange}
                    />
                ) : (
                    employee.department
                )}
            </td>
            <td>
                {isEditing ? (
                    <input
                        type="text"
                        name="salary"
                        value={editedData.salary}
                        onChange={handleChange}
                    />
                ) : (
                    employee.salary
                )}
            </td>
            <td>
                {isEditing ? (
                    <select
                        name="status"
                        value={editedData.status}
                        onChange={handleChange}
                    >
                        <option value="Onboarded">Onboarded</option>
                        <option value="Pending">Pending</option>
                    </select>
                ) : (
                    employee.status
                )}
            </td>
            <td>
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <div className='button-container'>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => onDelete(employee.emp_id)}>Delete</button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default EmployeeItem;
