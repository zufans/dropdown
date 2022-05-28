import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuickNav = ({
  dark,
  brand,
  brandLink,
  brandOnClick,
  left,
  center,
  right,
  brandStyling
}) => {
  const [darkMode, setDarkMode] = useState();
  const [textsColor, setTextsColor] = useState();
  useEffect(() => {
    dark = dark ? 'dark' : 'light';
    setDarkMode(dark);
    const textColor = dark == 'dark' ? '#f7f7f7' : '#292b2c';
    setTextsColor(textColor);
  }, [dark]);
  const style = {
    txtColor: {
      color: textsColor
    }
  };
  return /*#__PURE__*/React.createElement(Navbar, {
    bg: darkMode,
    variant: darkMode,
    expand: "lg"
  }, /*#__PURE__*/React.createElement(Container, {
    style: style.txtColor ? style.txtColor : ''
  }, /*#__PURE__*/React.createElement(Navbar.Brand, {
    href: brandLink,
    onClick: brandOnClick,
    style: brandStyling
  }, brand), /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, {
    className: "justify-content-between"
  }, /*#__PURE__*/React.createElement(Nav, null, left), /*#__PURE__*/React.createElement(Nav, null, center), /*#__PURE__*/React.createElement(Nav, null, right))));
};

QuickNav.PropTypes = {
  dark: PropTypes.bool,
  brand: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  brandLink: PropTypes.string,
  brandOnClick: PropTypes.func,
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  center: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  brandStyling: PropTypes.object
};

export { QuickNav as default };
