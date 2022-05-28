import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown({lable, title}){
    return(
        <NavDropdown title={title} menuVariant="dark"  >
          {lable.map((v, i)=>{
            return  <NavDropdown.Item key={i} onClick={v.onClick}>{v.lable}</NavDropdown.Item>
          })}
        </NavDropdown>
     
    )
  }
  
  export default Dropdown