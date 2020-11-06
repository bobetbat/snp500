import React from 'react'
import { useObserver } from 'mobx-react'
import './styles.scss'
import AppStore from '../store'
import Customer from '../views/Customer'
const titles = ['', 'Name', 'attribute', 'result', 'attribute created', 'user created']


const CustomerList = () => {
  const customers = AppStore.data.customers
  
  if (customers.length === 0) return <div></div>

  return (
    <div className="customersList">
      <div className="grid">
        <div className="grid-title">
          {titles.map(title => <div key={title}>{title}</div>)}
        </div>
        {customers.map((customer, i) => (
          <div key={i} className="grid-rows">
            <img />
            <div>{i}</div>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>{customer.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default CustomerList
