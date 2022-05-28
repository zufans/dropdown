import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Buttons ({lable="Button"}){
    return (
        <Button variant="primary">{lable}</Button>
    )
}

Buttons.propTypes={
    lable: PropTypes.string,
}