import React, { useEffect, useState } from 'react';
import EmployeeService from '../Service/EmployeeService.jsx';
import { useNavigate, useParams } from 'react-router-dom';






const Update = () => {

    const {id}=useParams();

    const [employee, setEmployee] = useState({
        id: id,
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
   
   useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await EmployeeService.getEmpbyid(id);
            // Assuming res.data contains the employee data
            setEmployee({
                id: id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                emailId: res.data.emailId
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();
}, [id]); // Add id to the dependency array


    return (
        <div className='flex max-w-2xl mx-auto shadow-md border-b '>
            <div className=' px-8 py-8'>
                <div className=' font-thin  text-2xl tracking-wider'>
                    <h1>Update Employee</h1>
                </div>
                <div className='items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>First Name</label>
                    <input type="text" name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} id="" className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className='mt-5 items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>Last Name</label>
                    <input type="text" name="lastName" value={employee.lastName} id="" onChange={(e) => handleChange(e)} className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className=' mt-5 items-center justify-center w-full h-14 '>
                    <label htmlFor="" className='block text-gray-900'>Email</label>
                    <input type="email" name="emailId" value={employee.emailId} id="" onChange={(e) => handleChange(e)} className='h-10 w-96 border px-2 py-2' />
                </div>
                <div className=' mt-5 items-center justify-center w-full h-14 flex justify-between '>
                    <button onClick={save} className=' rounded-md text-white font-semibold bg-green-500 py-2 px-2 hover:bg-blue-800'>
                        Save
                    </button>
                    <button onClick={()=>{
                    usenavigate('/employeeList')
                    }} className=' rounded-md text-white font-semibold bg-red-500 py-2 px-2 hover:bg-blue-800'>
                       CENCEL
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Update;
