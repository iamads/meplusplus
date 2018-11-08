import React from 'react';
import Button from '../Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { map } from 'lodash';
import { string, bool, func, arrayOf } from 'prop-types';

const DropDown = ({ label, selected, show, toggleShow, options, handleSelect, anchorEl, setAnchor }) => (
  <div>
    <Button label={ selected ? selected : label} color="default" onClick={(e) => {
      setAnchor(e.currentTarget);
      return toggleShow();
    }} />
    <Menu
      open={show}
      onClose={toggleShow}
      anchorEl={anchorEl}
    >
      {
        map(options, (val) => (<MenuItem key={val} onClick={() => handleSelect(val)}>{val}</MenuItem>))
      }
    </Menu>
  </div> 
)

DropDown.propTypes = {
  label: string.isRequired,
  show: bool.isRequired,
  toggleShow: func.isRequired,
  handleSelect: func.isRequired,
  options: arrayOf(string),
  selected: string,
}

DropDown.defaultProps = {
  options: [],
  selected: null
}

export default DropDown;


