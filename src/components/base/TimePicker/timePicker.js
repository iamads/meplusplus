import React from 'react';
import { string, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const TimePicker = ({ label, step }) => ( // label
  <TextField
    id="time"
    label={label}
    type="time"
    defaultValue="07:30"
    InputLabelProps={{
        shrink: true
    }}
    inputProps={{
        step: step
    }}
  />
);

TimePicker.defaultProps ={
  step: 300, // 5mins 
};

TimePicker.propTypes = {
  label: string.isRequired,
  step: number
};

export default withStyles(styles)(TimePicker);