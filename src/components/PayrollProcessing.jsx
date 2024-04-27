import React from 'react';
function PayrollProcessing({employee}){
    const calculateTotalPayroll=()=>{
        let totalPayroll=0;
        employee.forEach((employee)=>{
            totalPayroll+=employee.salary;
        });
        return totalPayroll;
    };
    return (
        <div>
            <p>Total Payroll : {calculateTotalPayroll}</p>
        </div>
    );
}
export default PayrollProcessing;