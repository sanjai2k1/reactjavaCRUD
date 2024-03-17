import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';
const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee,setEmployee] = useState({
        id:"",
        firstname:"",
        lastname:"",
        emailId:"",
    })

    function handleChange(e){
        const {name,value}=e.target;
        setEmployee((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        });
    }
     
    function save(e){
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
        clear();
        navigate("/employeeslist")

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
    }


  return (
   
       
            <div class="container ">
            <div className='container text-center'>
            <h1>New Employee</h1>
            </div>
                
                <div className='container'>
                <form>
                <div class="mb-3">
                    <label htmlFor='firstname' class="form-label">First name</label>
                    <input type='text' id='firstname' class="form-control" onChange={(e)=>handleChange(e)}  name="firstname" value={employee.firstname} required/>
                    </div>
                    <div class="mb-3">
                    <label htmlFor='lastname' class="form-label">Last name</label>
                    <input type='text' id='lastname' name="lastname" class="form-control" onChange={(e)=>handleChange(e)}  value={employee.lastname} required/>
                    </div>
                    <div class="mb-3">
                    <label htmlFor='emailId' class="form-label">E-mail</label>
                    <input type='email' id='emailId' name="emailId"  class="form-control" onChange={(e)=>handleChange(e)}  value={employee.emailId} required/>
                    </div>
                    <div class="" role="group" aria-label="Basic example">
                    <input type='button' value="Submit"  class="btn btn-primary" onClick={(e)=>save(e)} name="formsubmit"/>
                    <input type='button' value="Clear" class="btn btn-danger" onClick={clear} name="clearform"/>
                    </div>
                </form>
            </div>
        </div>
   
  )
}

export default AddEmployee