import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { source } from '../store/DataStore'
import './styles.scss'
import Loading from '../components/Loading'

const Customer = (props:any) => {
  useEffect(() => {
    props.store.data.init()
  }, [])

  if (props.store.data.loading) return <Loading />

  const { events, sources, customerById, idFromPath, parsed } = props.store.data
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
      <div className='eventList'>
        {parsed.map( (e:any) => 
          (typeof e == 'object') ? (
            <div key={e.id} className="event">
              <img src={`/img/source_logos/${e.icon}`}/>
              <div>{e.title}</div>
              <span>{e.date}</span>
            </div>
          ):
            <div className="event">
              hello
            </div>
        )}
      </div>
      <div></div>
    </div>
  )
}

export default inject('store')(observer(Customer))
