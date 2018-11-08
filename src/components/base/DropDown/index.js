import DropDown from './dropDown';
import { withState, withHandlers, compose } from 'recompose';

export default compose(
  withState('show', 'setShow', false),
  withState('anchorEl', 'setAnchor', null),
  withHandlers({
    toggleShow: ({ setShow, show }) => () => (setShow(!show)),
    handleSelect: ({ onSelect, setShow, show }) => (val) => {
      onSelect(val);
      setShow(!show);
    }
  })
)(DropDown);