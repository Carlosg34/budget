import React from 'react'
import classnames from 'classnames'

const RenderInput = ({input, meta, label, ...other}) => {
  const errorMessage = meta.touched && meta.error
  return (
    <div className={classnames('pt-form-group', {'pt-intent-danger': errorMessage})}>
      <label className='pt-label' htmlFor={input.name}>
        {label}
      </label>
      <div className='pt-form-content'>
        <div className={classnames('pt-input-group', {'pt-intent-danger': errorMessage})}>
          <input
            id={input.name}
            className='pt-input'
            type='text'
            dir='auto'
            {...input}
            {...other} />
        </div>
        <div className='pt-form-helper-text'>{errorMessage}</div>
      </div>
    </div>
  )
}

export default RenderInput
