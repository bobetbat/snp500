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

  const { events, sources, customerById, idFromPath, customerEvents } = props.store.data
  const customer = customerById(idFromPath())
  return (
    <div className="customerView">
      <div className='header'>
        <div className='title'>{customer && `${customer.name} ${customer.surname}`}</div>
        <div className="sources">{sources.map( (s:any) => 
          <div className="tab" key={s.id}>
            <img src={`/img/source_logos/${s.frontend_settings.icon}`} />
            <div>{s.name}</div>
          </div>
        )}</div>
      </div>
      <div>
        {events.map( (e:any) => 
          <div key={e.id}>
            {/* <img src={`/img/source_logos/${e.frontend_settings.icon}`}/> */}
            <div>{e.title}</div>
            <div>{e.datetime}</div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  )
}

export default inject('store')(observer(Customer))
