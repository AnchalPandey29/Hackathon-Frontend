import React from 'react';
function EmployeeList({employees}){
    return (
        <div>
            <ul>
                {employees.map((employee,index)=>(
                    <li key={index}>{employee.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default EmployeeList;