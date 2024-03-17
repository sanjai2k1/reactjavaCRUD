
import './App.css';
import AddEmployee from './Components/AddEmployee';
import EmployeeList from './Components/EmployeeList';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import UpdateEmployee from './Components/UpdateEmployee';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route index element={<EmployeeList/>} />
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/employeesList' element={<EmployeeList/>} />
        <Route path='/addemployee' element={<AddEmployee/>} />
        <Route path='/editemployee/:id'  element={<UpdateEmployee/>} />
      </Routes>

      </BrowserRouter>
    </>
   
  );
}

export default App;
