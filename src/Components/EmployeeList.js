import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
   const navigate= useNavigate();
   const [loading,setLoading] = useState(false);
   const [employees,setEmployees]=useState(null);
   useEffect(()=>{
    const fetchData = async ()=>{
        if(!loading){
        try{
            const response = await EmployeeService.getEmployess();
            setEmployees(response.data);
            setLoading(true);
            
        }catch(error){
            console.log(error);
        }
        
    }

    }
    fetchData();
   },[]);

   function deleteEmployee(e,id){
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then(res=>{
        if(employees){
            setEmployees((prev)=>{
                return prev.filter((employee)=>employee.id!==id);
            });
        }
    })
   }
  return (
    <>
        <div className='container'>
        <div className='container'>
            <button class="btn btn-success" onClick={()=>navigate("/addemployee")}>Add Employee</button>
            </div>
            <div className='container'>
            {loading ? employees.length>0 ?
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                   { employees.map((employee,index)=>
                    
                    <Employee key={index} props={employee} id= {index} deleteEmployee={deleteEmployee}/>
                    )
                   }
                    </tbody>
                    </table>
                    :<h3>List is Emptry...</h3>

                    :<h3>loading...</h3>
                  
                   

              
            }
            </div>
        </div>
    </>
  )
}

export default EmployeeList