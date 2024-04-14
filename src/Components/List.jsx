import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';
import EmployeeService from '../Service/EmployeeService';

const List = () => {
const navigate=useNavigate();

const [loading,setLoading]=useState(true);
const [employee,setEmployee]= useState(null);
useEffect(()=>{
    const fetchDate=async ()=>{
        setLoading(true)
    try {
        const res=await EmployeeService.getEmp();
       // console.log(res)
        setEmployee(res.data)
    } catch (error) {
     console.log(error)   
    }
setLoading(false)
    };
    fetchDate()
},[]);
//console.log(employee)
const  deleleEmployee=(e,id)=>{
    console.log(e,id)
  e.preventDefault();
  EmployeeService.delete(id).then((res)=>{
    if(res){
        setEmployee((predata)=>{
            return predata.filter((employee)=>employee.id!=id);
        });
    }
  });

}

const update=(e,id)=>{
    e.preventDefault();
const empl=EmployeeService.getEmpbyid(id);
empl.then((res)=>{
    console.log(res.data);
    navigate(`/Update/${id}`)
})

.catch((error)=>{
    console.log(error)
})
    EmployeeService.update(id, {
        firstName: empl.firstName,
        lastName: empl.lastName,
        email: empl.email
    })

}

  return (
    <div className=' container '>
    <div>
     <button onClick={()=>navigate('/Add')} className=' my-4 rounded-md text-white font-semibold bg-red-500 py-2 px-2 hover:bg-blue-800'>AddEmployee</button>
    </div>
    <div className='flex justify-between shadow border-b'>
<table className=' w-full'>
    <thead className='bg-grey-50'>
        <th className=' uppercase tracking-wider'>ID</th>
        <th className=' uppercase tracking-wider'>First</th>
        <th className=' uppercase tracking-wider'>Last</th>
        <th className=' uppercase tracking-wider'>Email</th>
        <th className=' uppercase tracking-wider'>Action</th>
    </thead>
    {!loading && (
    <tbody className=' my-4'>
        {employee.map(emp => (
            <tr key={emp.id}>
                <td className='text-left px-6 py-4 whitespace-nowrap align-middle'>{emp.id}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>{emp.firstName}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>{emp.lastName}</td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>{emp.emailId}</td>
                <td className='text-left flex justify-between px-6 py-4 whitespace-nowrap'>
                    <a className='my-4 rounded-md text-white font-semibold bg-green-500 py-2 px-2 hover:bg-blue-800'
                    onClick={(e)=>update(e,emp.id)}
                    href="">Edit</a> 
                    <a className='my-4 rounded-md text-white font-semibold bg-red-500 py-2 px-2 hover:bg-blue-800' 
                    onClick={(e)=>{
                        deleleEmployee(e,emp.id);
                    }} href="">Delete</a>
                </td>
            </tr>
        ))}
    </tbody>
)}

</table>
    </div>
   </div>
  )
}

export default List
