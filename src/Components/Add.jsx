import React, { useState } from 'react';
import EmployeeService from '../Service/EmployeeService.jsx';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const save = (e) => {
        e.preventDefault();
        EmployeeService.save(employee)
            .then((res) => {
                usenavigate('/employeeList')
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const reset=(e)=>{
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });

    }
   const usenavigate= useNavigate();

    return (
        <div className='flex max-w-2xl mx-auto shadow-md border-b '>
            <div className=' px-8 py-8'>
                <div className=' font-thin  text-2xl tracking-wider'>
                    <h1>New Employee</h1>
                </div>
                <div className='items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>First Name</label>
                    <input type="text" name="firstName" value={employee.firstName} required onChange={(e) => handleChange(e)} id="" className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className='mt-5 items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>Last Name</label>
                    <input type="text" name="lastName" value={employee.lastName} required id="" onChange={(e) => handleChange(e)} className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className=' mt-5 items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>Email</label>
                    <input type="email" name="emailId" value={employee.emailId} required id="" onChange={(e) => handleChange(e)} className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className=' mt-5 items-center justify-center w-full h-14 flex justify-between '>
                    <button onClick={save} className=' rounded-md text-white font-semibold bg-green-500 py-2 px-2 hover:bg-blue-800'>
                        Save
                    </button>
                    <button onClick={reset} className=' rounded-md text-white font-semibold bg-red-500 py-2 px-2 hover:bg-blue-800'>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Add;
