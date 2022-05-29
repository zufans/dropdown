import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown({itemProperty, title}){
    return(
        <NavDropdown title={title} menuVariant="dark"  >
          {itemProperty.map((v, i)=>{
            return  <NavDropdown.Item key={i} href={v.href} onClick={v.onClick}>{v.lable}</NavDropdown.Item>
          })}
        </NavDropdown>
     
    )
  }

  Dropdown.PropTypes= {
    itemProperty:PropTypes.shape({
      lable: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      href: PropTypes.string,
    }),
    title: PropTypes.string,
  }
  
  export default Dropdown