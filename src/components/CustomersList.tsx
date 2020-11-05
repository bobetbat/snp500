// import './styles.scss';
import React from 'react'

import AppStore from '../store'

const CustomerList = () => {
  const customers = AppStore.customers
  
  if (customers.length === 0) return <div></div>

  return (
    <div className="customersListView">
      {customers.length > 0 &&
        <div>
          <div>
            titles
          </div>
          {customers.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>
      }
    </div>
  )
}

export default CustomerList
