import React from 'react'
import classnames from 'classnames'
import { DateInput } from '@blueprintjs/datetime'

const RenderDate = ({input, meta, label, dateFormat, ...other}) => {
  const errorMessage = meta.touched && meta.error
  return (
    <div className={classnames('pt-form-group', {'pt-intent-danger': errorMessage})}>
      <label className='pt-label' htmlFor={input.name}>
        {label}
      </label>
      <div className='pt-form-content'>
        <div className={classnames('pt-input-group', {'pt-intent-danger': errorMessage})}>
          <DateInput
            value={input.value}
            onChange={input.onChange}
            format={dateFormat}
            {...other} />
        </div>
        <div className='pt-form-helper-text'>{errorMessage}</div>
      </div>
    </div>
  )
}

export default RenderDate
