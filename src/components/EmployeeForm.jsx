import React, { useState } from "react";
import "./Employee.css";

const EmployeeForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        phno: "",
        position: "",
        department: "",
        salary: "",
        startDate: "",
        endDate: "",
        email: "",
    });

    const departments = ["HR", "Finance", "IT"];
    const departmentPositions = {
        HR: ["HR Manager", "HR Executive", "HR Assistant"],
        Finance: ["Accountant", "Financial Analyst", "Finance Manager"],
        IT: ["Software Engineer", "System Administrator", "IT Support Specialist"],
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "department") {
            setFormData({
                ...formData,
                [name]: value,
                position: "",
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: "",
            phno: "",
            position: "",
            department: "",
            salary: "",
            startDate: "",
            endDate: "",
            email: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="employee-form">
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="input-field"
            />
            <input
                type="text"
                name="phno"
                value={formData.phno}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="input-field"
            />
            <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="select-field"
            >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>
            <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="select-field"
            >
                <option value="">Select Position</option>
                {formData.department &&
                    departmentPositions[formData.department].map((pos) => (
                        <option key={pos} value={pos}>
                            {pos}
                        </option>
                    ))}
            </select>
            <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
                required
                className="input-field"
            />
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                placeholder="Start Date"
                required
                className="input-field"
            />
            <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                placeholder="End Date"
                className="input-field"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="input-field"
            />
            <button type="submit" className="submit-button">Add Employee</button>
        </form>
    );
};

export default EmployeeForm;
