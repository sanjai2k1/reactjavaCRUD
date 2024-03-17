import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
const {id}= useParams();
const navigate = useNavigate();
const [employee,setEmployee] = useState({
    id:id,
    firstname:"",
    lastname:"",
    emailId:"",
})
const updateEmployee = (e)=>{
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee,id)
navigate("/employeeslist")
}
function handleChange(e){
    const {name,value}=e.target;
    setEmployee((prev)=>{
        return {
            ...prev,
            [name]:value
        }
    });
}
function clear(){
    setEmployee((prev)=>{
        return {
            ...prev,
            id:"",
            firstname:"",
            lastname:"",
            emailId:""
        }
    })
    navigate("/employeesList")
    
}
useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const response = await EmployeeService.getEmployeeById(id)
            setEmployee(response.data)
        }
        catch(error){
            console.log(error);

        }
    }
    fetchData();
},[]);
  return (
     <div class="container">
     <div className='container text-center'>
    <h1>Update Employee</h1>
    </div>
    <div className='container'>
    <form>
    <div class="mb-3">
        <label htmlFor='firstname' class="form-label">First name</label>
        <input type='text' id='firstname' class="form-control" onChange={(e)=>handleChange(e)}  name="firstname" value={employee.firstname}/>
        </div>
        <div class="mb-3">
        <label htmlFor='lastname' class="form-label">Last name</label>
        <input type='text' id='lastname' class="form-control" name="lastname" onChange={(e)=>handleChange(e)}  value={employee.lastname}/>
  </div>
  <div class="mb-3">
    
        <label htmlFor='emailId' class="form-label">E-mail</label>
        <input type='email' id='emailId' class="form-control" name="emailId" onChange={(e)=>handleChange(e)}  value={employee.emailId}/>
        </div>
        <div  class="" role="group" aria-label="Basic example">
        <input type='button' value="Update" class="btn btn-primary" onClick={(e)=>updateEmployee(e)} name="formsubmit"/>
        <input type='button' value="Cancel" class="btn btn-primary" onClick={clear} name="clearform"/>
        </div>
    </form>
</div>
</div>
  )
}

export default UpdateEmployee