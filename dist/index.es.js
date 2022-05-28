import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Dropdown({
  lable,
  title
}) {
  return /*#__PURE__*/React.createElement(NavDropdown, {
    title: title,
    menuVariant: "dark"
  }, lable.map((v, i) => {
    return /*#__PURE__*/React.createElement(NavDropdown.Item, {
      key: i,
      onClick: v.onClick
    }, v.lable);
  }));
}

export { Dropdown as default };
