import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import SelectUi from '@material-ui/core/Select'
import styles from '../styles'

export const Select = ({
  label,
  selectedOption,
  onChange,
  options,
  classes,
  disabled,
}) => (
  <FormControl className={classes.formControl}>
    {
      label && (
        <InputLabel htmlFor="age-native-simple">
          {label}
        </InputLabel>
      )
    }
    <SelectUi
      native
      value={selectedOption}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="" />
      {
        options.map(opt => (
          <option
            key={opt}
            value={opt}
          >
            {opt}
          </option>
        ))
      }
    </SelectUi>
  </FormControl>
)

Select.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  selectedOption: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

Select.defaultProps = {
  label: null,
  disabled: false,
  selectedOption: '',
}

export default withStyles(styles)(Select)
