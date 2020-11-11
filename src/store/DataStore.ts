import { observable, action, computed } from 'mobx'
import apiCall from '../utils/apiCall'
import ApiStore from './ApiStore'

export type customer = {
  id: string,
  name: string,
  surname: string,
  created: string,
}

export type customerEvent = {
  id: number,
  event_id: string,
  datetime: string
}

export type event = {
  id: string,
  source_id : string,
  title : string,
  short_title : string
}

export type source = {
  id: string,
  name : string,
  frontend_settings : {
    icon: string,
    color: string
  }
}
const localCustomerEvents = [
  {
    id: 2,
    event_id: 'website_ad_clicked',
    datetime: '2020-10-18T12:22:33.123Z'
  },
  {
    id: 3,
    event_id: 'website_page_view',
    datetime: '2020-10-19T20:22:33.123Z'
  },
  {
    id: 12,
    event_id: 'website_ad_clicked',
    datetime: '2020-10-18T12:22:33.123Z'
  },
  {
    id: 13,
    event_id: 'website_page_view',
    datetime: '2020-10-19T20:22:33.123Z'
  },
  {
    id: 22,
    event_id: 'website_ad_clicked',
    datetime: '2020-10-18T12:22:33.123Z'
  },
  {
    id: 23,
    event_id: 'website_page_view',
    datetime: '2020-10-19T20:22:33.123Z'
  },
  {
    id: 32,
    event_id: 'website_ad_clicked',
    datetime: '2020-10-18T12:22:33.123Z'
  },
  {
    id: 33,
    event_id: 'website_page_view',
    datetime: '2020-10-19T20:22:33.123Z'
  }
]
class DataStore {
  @observable customers:customer[] = []
  @observable events:event[] = []
  @observable customerEvents:customerEvent[] = localCustomerEvents
  @observable sources:source[] = []
  @observable loading: boolean = false
  @observable parsed:any = []
  @action 
  setCustomers = async () => {
    this.loading = true
    const res = await ApiStore.fetchCustomers()
    this.customers = res.customers
    this.loading = false
  }

  @action 
  setEvents = async () => {
    const res = await ApiStore.fetchEvents()
    this.events = res.events
  }
  @action 
  init = async () => {
    this.loading = true
    await this.setEvents()
    // await this.setCustomerEvents()
    await this.setSources()
    this.loading = false
    this.parsedCustomerEvents()
  }

  @action
  parsedCustomerEvents = () => {
    let events
    // let eventGroup 
    this.customerEvents.map( e => {
      console.log('events', e)
      const event = this.findEventById(e.event_id)
      if (event) {
        const source = this.findSourceById(event.source_id)
        if (source) {
          let parsedEvent = {
            date: e.datetime,
            title: event.title,
            short_title: event.short_title,
            icon: source?.frontend_settings.icon,
            color: source?.frontend_settings.color
          }
          console.log('parsed', parsedEvent)
          this.parsed.push(parsedEvent)
        }
      }
    })
    // console.log('parsed', this.parsed)
  }

  @action
  findSourceById = (id:string):source | undefined => {
    const sources = this.sources.find( s => s.id === id)
    return sources
  }

  @action
  findEventById = (id:string):event | undefined => {
    const event = this.events.find( e => e.id === id)
    return event
  }

  @action 
  idFromPath = () => {
    const path = window.location.pathname.match(/^\/customers\/([A-zA-Z\d]+)/)
    const id = path ? path[1] : ''
    return id
  }

  @action 
  setCustomerEvents = async () => {
    const res = await ApiStore.fetchCustomerEvents(this.idFromPath())
    this.customerEvents = res.customer_events
  }

  @action 
  setSources = async () => {
    const res = await ApiStore.fetchSources()
    this.sources = res.sources
  }

  @action
  customerById = (id:string) => {
    const customer = this.customers.find(customer => customer.id === id)
    return customer
  }
}

export default new DataStore()
