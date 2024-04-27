import React, {useState} from 'react';
import EmployeeList from './EmployeeList';
import PayrollProcessing from './PayrollProcessing';

function PayrollManagement(){
    const [employees,setEmployees]=useState([]);
    const [newEmployee,setNewEmployee]=useState({name:'',salary:0});

    const addEmployee=()=>{
        setEmployees([...employees,newEmployee]);
        setNewEmployee({name:'',salary:0});
    };
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setNewEmployee({...newEmployee,[name]:value});
    };
    return (
        <div>
            <h2>Add new employee</h2>
            <input type="text" placeholder="Name" name="name" value={newEmployee.name} onChange={handleInputChange}/>
            <input type="number" placeholder="Salary" name="salary" value={newEmployee.salary} onChange={handleInputChange}/>
            <button onClick={addEmployee}>Add Employee</button>
            <h2>Employee List</h2>
            <EmployeeList employees={employees}/>
            <h2>Payroll Processing</h2>
            <PayrollProcessing employees={employees}/>
        </div>
    );
}
export default PayrollManagement;
