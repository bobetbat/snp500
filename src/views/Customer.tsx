import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'
import { source, parsed } from '../store/DataStore'
import './styles.scss'
import Loading from '../components/Loading'

const Customer = (props:any) => {
  useEffect(() => {
    props.store.data.init()
  }, [])

  if (props.store.data.loading) return <Loading />

  const { events, sources, customerById, idFromPath, parsed, parsedCustomerEvents } = props.store.data
  const customer = customerById(idFromPath())
  // const parsedEvents = parsedCustomerEvents()
  // console.log('asd', parsedEvents)
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
        {parsed.map( (eventGroup:parsed[], i:number) => 
          (eventGroup.length == 1) ? (
            <div key={i} className="event">
              <img src={`/img/source_logos/${eventGroup[0].icon}`}/>
              <div>{eventGroup[0].title}</div>
              <span>{eventGroup[0].date}</span>
            </div>
          ):
            <div className="eventGroupList">
              <div className="eventGroup">

                {eventGroup.map((event:parsed, k:number) => {
                  <div className="smallEvent" key={k}>hello</div>
                  
                })}
                <button>s</button>
              </div>
            </div>
        )}
      </div>
      <div></div>
    </div>
  )
}

export default inject('store')(observer(Customer))
