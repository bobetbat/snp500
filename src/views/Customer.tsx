import React, { useEffect } from 'react'
import { observer, inject } from 'mobx-react'

import './styles.scss'
import AppStore from './../store'

const Customer = (props:any) => {
  useEffect(() => {
    AppStore.data.setEvents()
  }, [])

  return (
    <div className="customerView">
      <div>
        {/* {console.log('1', props.store.data.events)} */}
        {/* {props.store.data.events.map( (e:any) => <div key={e.id}>{e.id}</div>)} */}
      </div>
      <div></div>
    </div>
  )
}

export default inject('store')(observer(Customer))
