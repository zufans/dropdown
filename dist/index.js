'use strict';

var React = require('react');
var NavDropdown = require('react-bootstrap/NavDropdown');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var NavDropdown__default = /*#__PURE__*/_interopDefaultLegacy(NavDropdown);

function Dropdown({
  lable,
  title
}) {
  return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"], {
    title: title,
    menuVariant: "dark"
  }, lable.map((v, i) => {
    return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"].Item, {
      key: i,
      onClick: v.onClick
    }, v.lable);
  }));
}

module.exports = Dropdown;
