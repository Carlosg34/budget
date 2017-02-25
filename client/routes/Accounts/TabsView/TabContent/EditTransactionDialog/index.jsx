import React from 'react'
import { Dialog } from '@blueprintjs/core'

import EditTransactionForm from './EditTransactionForm'

const EditTransactionDialog = ({isOpen, onClose, transaction, actions}) => (
  <Dialog
    iconName='edit'
    isOpen={isOpen}
    onClose={onClose}
    title='Edit Transaction'>
    <EditTransactionForm
      transaction={transaction}
      initialValues={transaction}
      actions={actions}
      onClose={onClose}
    />
  </Dialog>
)

export default EditTransactionDialog
