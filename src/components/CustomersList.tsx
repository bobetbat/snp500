import React from 'react'
import { observer, inject } from 'mobx-react'
import './styles.scss'
import Customer from '../views/Customer'
import ListItem from './ListItem'
const titles = ['', 'Name', 'attribute', 'result', 'attribute created', 'user created']


const CustomerList = (props:any) => {
  console.log('asd', props)

  if (props.store.data.customers.length === 0) return <div></div>

  return (
    <div className="customersList">
      <div className="grid">
        <div className="grid-title">
          {titles.map(title => <div key={title}>{title}</div>)}
        </div>
        {props.store.data.customers.map((customer:any) => (
          <ListItem 
            key={customer.id} 
            id={customer.id}
          />
        ))}
      </div>
    </div>
  )
}


export default inject('store')(observer(CustomerList))
