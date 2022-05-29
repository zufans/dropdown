'use strict';

var React = require('react');
var NavDropdown = require('react-bootstrap/NavDropdown');
var PropTypes = require('prop-types');
require('bootstrap/dist/css/bootstrap.min.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var NavDropdown__default = /*#__PURE__*/_interopDefaultLegacy(NavDropdown);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Dropdown({
  itemProperty,
  title
}) {
  return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"], {
    title: title,
    menuVariant: "dark"
  }, itemProperty.map((v, i) => {
    return /*#__PURE__*/React__default["default"].createElement(NavDropdown__default["default"].Item, {
      key: i,
      href: v.href,
      onClick: v.onClick
    }, v.lable);
  }));
}

Dropdown.PropTypes = {
  itemProperty: PropTypes__default["default"].shape({
    lable: PropTypes__default["default"].string.isRequired,
    onClick: PropTypes__default["default"].func,
    href: PropTypes__default["default"].string
  }),
  title: PropTypes__default["default"].string
};

module.exports = Dropdown;
