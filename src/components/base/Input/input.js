import React from 'react';
import { string, func, bool } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const Input = ({ label, value, onChange, type, placeholder, required, error, disabled}) => (
  <TextField
    label={label}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    required={required}
    error={error}
    disabled={disabled}
  />
);

Input.propTypes = {
  label: string 
}