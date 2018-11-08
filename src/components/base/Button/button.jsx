import React from 'react';
import { string, bool, oneOf, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUButton from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Button = ({ label, color, disabled, onClick }) => (
  <MUButton variant="contained" color={color} disabled={disabled} onClick={onClick}>
    {label}
  </MUButton>
);

Button.defaultProps = {
  color: 'default',
  disabled: false,
  onClick: (e) => e,
}

Button.propTypes = {
  label: string.isRequired,
  color: oneOf([ 'default', 'inherit', 'primary', 'secondary']),
  disabled: bool,
  onClick: func,
};

export default withStyles(styles)(Button);

