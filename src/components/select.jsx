import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import SelectUi from '@material-ui/core/Select'
import styles from '../styles'

export const Select = ({
  label, selectedOption, onChange, options, classes,
}) => (
  <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-native-simple">
      {label}
    </InputLabel>
    <SelectUi
      native
      value={selectedOption}
      onChange={onChange}
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
  classes: PropTypes.object.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

Select.defaultProps = {
  label: null,
}

export default withStyles(styles)(Select)
