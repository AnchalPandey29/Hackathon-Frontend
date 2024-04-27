import React, { useState } from 'react';

const EmpMgmt = () => {
    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', title: 'Software Engineer', status: 'Active', position: 'Senior' },
        { id: 2, name: 'Jane Smith', title: 'HR Manager', status: 'Onboarding', position: 'Junior' },
        { id: 3, name: 'Michael Johnson', title: 'Financial Analyst', status: 'Awaiting', position: 'Senior' },
        // Add more records...
    ]);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setOpen(true);
    };

    const handleSaveEdit = () => {
        const updatedEmployees = employees.map(emp => (emp.id === selectedEmployee.id ? selectedEmployee : emp));
        setEmployees(updatedEmployees);
        setOpen(false);
    };

    const handleDelete = (employee) => {
        setEmployees(employees.filter(emp => emp.id !== employee.id));
        setOpen(false);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <div className="outer">
            <h1 style={{ textAlign: 'center', font: 'Sans-serif', color: '#3f51b5', marginBottom: '20px' }}><strong>Employee Data</strong></h1>
            <div style={{ height: 'auto' }}>
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Position</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={`https://mdbootstrap.com/img/new/avatars/${employee.id}.jpg`}
                                            alt=""
                                            style={{ width: '45px', height: '45px' }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{employee.name}</p>
                                            <p className="text-muted mb-0">{'{employee.email}'}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{employee.title}</p>
                                    <p className="text-muted mb-0">{employee.department}</p>
                                </td>
                                <td>
                                    <span className={`badge badge-${employee.status === 'Active' ? 'success' : employee.status === 'Onboarding' ? 'primary' : 'warning'} rounded-pill d-inline`}>{employee.status}</span>
                                </td>
                                <td>{employee.position}</td>
                                <td>
                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => handleEdit(employee)}>Edit</button>
                                    <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={() => handleDelete(employee)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {open && (
                <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}>
                    {selectedEmployee && (
                        <form>
                            <label htmlFor="department">Department</label>
                            <input type="text" id="department" value={selectedEmployee.department} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })} />
                            <label htmlFor="position">Position</label>
                            <input type="text" id="position" value={selectedEmployee.position} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, position: e.target.value })} />
                            <label htmlFor="status">Status</label>
                            <input type="text" id="status" value={selectedEmployee.status} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, status: e.target.value })} />
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={selectedEmployee.title} onChange={(e) => setSelectedEmployee({ ...selectedEmployee, title: e.target.value })} />
                            <div>
                                <button className="btn btn-primary" onClick={handleSaveEdit}>Save</button>
                                <button className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
}

export default EmpMgmt;
