import React from 'react'
import { observer, inject } from 'mobx-react'
import './styles.scss'
import Customer from '../views/Customer'
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
        {props.store.data.customers.map((customer:any, i:number) => (
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


export default inject('store')(observer(CustomerList))
