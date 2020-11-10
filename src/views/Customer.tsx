import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { source } from '../store/DataStore'
import './styles.scss'
import AppStore from './../store'
import Loading from '../components/Loading'

const Customer = (props:any) => {
  useEffect(() => {
    AppStore.data.setEvents()
    AppStore.data.setCustomerEvents()
    AppStore.data.setSources()
  }, [])
  
  if (props.store.data.loading) return <Loading />
  
  const { events, sources } = props.store.data

  return (
    <div className="customerView">
      <div className='header'>
        <div>as</div>
        <div>{sources.map( (s:any) => <div key={s.id}>{s.id}</div>)}</div>
      </div>
      <div>
        {events.map( (e:any) => <div key={e.id}>{e.id}</div>)}
      </div>
      <div></div>
    </div>
  )
}

export default inject('store')(observer(Customer))
