import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import SelectUi from '@material-ui/core/Select'
import { useStyles } from '../styles'

export const Select = ({
  label,
  selectedOption,
  onChange,
  options,
  disabled,
}) => {
  const { formControl } = useStyles()

  return (
    <FormControl className={formControl}>
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
}

Select.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  selectedOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

Select.defaultProps = {
  label: null,
  disabled: false,
  selectedOption: '',
}
