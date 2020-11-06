
import React from 'react'
import logo from './../logo.svg'
import './styles.scss'
import CustomersList from '../components/CustomersList'
import AppStore from '../store'

const Main = () => {

  return (
    <div className="mainView">
      <div className="header">
        <div className="title">Customer search</div>
        <div className="search">
          <input placeholder="Search attributes, customers and more..."></input>
          <button onClick={() => AppStore.data.setCustomers()}>s</button>
        </div>
        <div></div>
      </div>
      <CustomersList />
    </div>
  )
}

export default Main
