import React from 'react'
import Customer from '../views/Customer'
import { NavLink } from 'react-router-dom'
import { customer } from '../store/DataStore'
import './styles.scss'

const ListItem = ({id, key}:{id:string, key:string}) => {
  console.log('customer', id)
  return (
    <div>
      <div className='border' />
      <NavLink to={`/customers/${id}`} className="grid-rows">
        <img />
        <div>{id}</div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
        <div></div>
      </NavLink>
    </div>
  )
}

export default ListItem
