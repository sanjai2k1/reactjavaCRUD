import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({props,id,deleteEmployee}) => {
  const navigate = useNavigate();
  function editEmployee (e,id){
    e.preventDefault();
    console.log(id)
    navigate(`/editemployee/${id}`);
  }
  return (
    <tr key={id}>
    <td>{props.firstname}</td>
    <td>{props.lastname}</td>
    <td>{props.emailId}</td>
    <td>
    <div  class="" role="group" aria-label="Basic example">
    <button class="btn btn-primary" onClick={(e,id)=>editEmployee(e,props.id)} >Edit</button>
    <button class="btn btn-danger" onClick={(e,id)=>deleteEmployee(e,props.id)}>Delete</button>
    </div></td>
</tr>
  )
}

export default Employee