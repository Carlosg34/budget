import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, Intent } from '@blueprintjs/core'
import RenderInput from 'common/RenderInput'
import RenderDate from 'common/RenderDate'
import formatCurrency from 'utils/formatCurrency'

class EditTransactionForm extends Component {
  onSubmit = (values) => {
    const request = new Promise((resolve, reject) => {
      this.props.actions.updateTransaction(values, resolve, reject)
    })

    request.then(this.props.onClose)

    return request
  }

  render() {
    const {handleSubmit, transaction} = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="pt-dialog-body">

          <Field
            name='date'
            label='Date'
            component={RenderDate}
            dateFormat='DD/MM/YYYY' />

          <Field
            name='description'
            label='Description'
            component={RenderInput} />

          <Field
            name='inAccountId'
            label='In Account'
            component={RenderInput} />

          <Field
            name='outAccountId'
            label='Out Account'
            component={RenderInput} />

          <Field
            name='amount'
            label='Amount'
            format={(val) => '$' + (val/100)}
            parse={(val) => {
              const result = Number(val.replace(/[^0-9\.]+/g, '')) * 100
              console.log(val, result)
              return result
            }}
            component={RenderInput} />

        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button text="Cancel" />
            <Button
              type="submit"
              intent={Intent.PRIMARY}
              text="Update"
             />
          </div>
        </div>
      </form>
    )
  }
}

EditTransactionForm = reduxForm({
  form: 'transaction'
})(EditTransactionForm)

export default EditTransactionForm
