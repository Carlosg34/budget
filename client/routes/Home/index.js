import React from 'react'
import Container from './redux/container'

import AccountSummary from './components/AccountSummary'

// const TabPane = Tabs.TabPane

// let longContent = ''
// for(let i = 0; i < 1000; i++) {
//   longContent += ' ' + i
// }
//
// const dataSource = []
// for(let i = 0; i < 100; i++) {
//   dataSource.push({
//     key: i,
//     name: 'Mike',
//     age: i,
//     address: `${i} Downing Street`,
//     occupation: 'Doctor',
//     country: 'Canada',
//     email: `test${i*100}@email.com`
//
//   })
// }
//
// const columns = [{
//   title: 'Name',
//   dataIndex: 'name',
//   key: 'name',
// }, {
//   title: 'Age',
//   dataIndex: 'age',
//   key: 'age',
// }, {
//   title: 'Address',
//   dataIndex: 'address',
//   key: 'address',
// }, {
//   title: 'Occupation',
//   dataIndex: 'occupation',
//   key: 'occupation',
// }, {
//   title: 'Country',
//   dataIndex: 'country',
//   key: 'country',
// }, {
//   title: 'Email',
//   dataIndex: 'email',
//   key: 'email',
// }]


const AppLayout = ({children, home, actions}) =>
  <div>
    <AccountSummary />
  </div>

export default AppLayout
