import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { Button, Modal, FormControl, OutlinedInput, InputLabel, Typography, Slide, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

const EmpMgmt = () => {
    const [open, setOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [employees, setEmployees] = useState([
        { id: 1, EmployeeID: 'EMP001', name: 'John Doe', startDate: '2023-04-10', department: 'IT', address: '123 Main St', phoneNumber: '555-1234', email: 'john.doe@example.com', position: 'Software Engineer', endDate: '2024-04-10', salary: '50000' },
        { id: 2, EmployeeID: 'EMP002', name: 'Jane Smith', startDate: '2022-09-15', department: 'HR', address: '456 Elm St', phoneNumber: '555-5678', email: 'jane.smith@example.com', position: 'HR Manager', endDate: '2024-09-15', salary: '60000' },
        { id: 3, EmployeeID: 'EMP003', name: 'Michael Johnson', startDate: '2023-01-20', department: 'Finance', address: '789 Oak St', phoneNumber: '555-9101', email: 'michael.johnson@example.com', position: 'Financial Analyst', endDate: '2024-01-20', salary: '55000' },
        // Add 47 more records...
    ]);

    // Generate random data for 47 records
    const generateRandomEmployee = (id) => {
        const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];
        const positions = ['Software Engineer', 'HR Manager', 'Financial Analyst', 'Marketing Specialist', 'Operations Manager'];
        return {
            id,
            EmployeeID: `EMP00${id}`,
            name: `Employee ${id}`,
            startDate: '2023-04-10',
            department: departments[Math.floor(Math.random() * departments.length)],
            address: `${Math.floor(Math.random() * 1000)} Elm St`,
            phoneNumber: `555-${Math.floor(Math.random() * 10000)}`,
            email: `employee${id}@example.com`,
            position: positions[Math.floor(Math.random() * positions.length)],
            endDate: '2024-04-10',
            salary: `${Math.floor(Math.random() * 50000) + 50000}`,
        };
    };

    // Generate 47 random employees and add to the employees state
    const newEmployees = Array.from({ length: 47 }, (_, index) => generateRandomEmployee(index + 4));

    const handleRowSelection = (row) => {
        setSelectedEmployee(row.data);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setOpen(true);
    };

    const handleSaveEdit = () => {
        const updatedEmployees = employees.map(emp => (emp.id === selectedEmployee.id ? selectedEmployee : emp));
        setEmployees(updatedEmployees);
        setOpen(false);
    };

    const handleCancelEdit = () => {
        setOpen(false);
    };

    const handleDelete = (employee) => {
        setEmployees(employees.filter(emp => emp.id !== employee.id));
        setOpen(false);
    };

    const columns = [
        { field: 'EmployeeID', headerName: 'Employee ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'department', headerName: 'Department', width: 200 },
        { field: 'position', headerName: 'Position', width: 200 },
        { field: 'endDate', headerName: 'End Date', width: 150 },
        { field: 'salary', headerName: 'Salary', width: 150 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <div>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    const getRowClassName = (params) => {
        if (params.index % 2 === 0) {
            return 'even-row';
        }
        return '';
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center',font:'Sans-serif', color: '#3f51b5', marginBottom: '20px' }}><strong>Employee Data</strong></h1>
            <div style={{ height: 'auto' }}>
                <Modal
                    open={open}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <div style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)' }}>
                        {selectedEmployee && (
                            <form>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel htmlFor="department">Department</InputLabel>
                                    <OutlinedInput
                                        id="department"
                                        type="text"
                                        value={selectedEmployee.department}
                                        name="department"
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, department: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel htmlFor="position">Position</InputLabel>
                                    <OutlinedInput
                                        id="position"
                                        type="text"
                                        value={selectedEmployee.position}
                                        name="position"
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, position: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel htmlFor="endDate">End Date</InputLabel>
                                    <OutlinedInput
                                        id="endDate"
                                        type="date"
                                        value={selectedEmployee.endDate}
                                        name="endDate"
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, endDate: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                    <InputLabel htmlFor="salary">Salary</InputLabel>
                                    <OutlinedInput
                                        id="salary"
                                        type="text"
                                        value={selectedEmployee.salary}
                                        name="salary"
                                        onChange={(e) => setSelectedEmployee({ ...selectedEmployee, salary: e.target.value })}
                                    />
                                </FormControl>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant="contained" color="primary" onClick={handleSaveEdit}>Save</Button>
                                    <Button variant="contained" color="secondary" onClick={handleCancelEdit}>Cancel</Button>
                                </div>
                            </form>
                        )}
                    </div>
                </Modal>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    pagination
                    getRowId={(row) => row.id}
                    onRowSelected={handleRowSelection}
                    slots={{ toolbar: CustomToolbar }}
                    getRowClassName={getRowClassName}
                    style={{ borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
                />
            </div>
        </div>
    );
}

export default EmpMgmt;
