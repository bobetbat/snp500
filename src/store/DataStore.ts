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
  id: string,
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

class DataStore {
  @observable customers:customer[] = []
  @observable events:event[] = []
  @observable customerEvents:customerEvent[] = []
  @observable sources:source[] = []
  @observable loading: boolean = false
  @action 
  setCustomers = async () => {
    const res = await ApiStore.fetchCustomers()
    this.customers = res.customers
  }

  @action 
  setEvents = async () => {
    this.loading = true
    const res = await ApiStore.fetchEvents()
    this.events = res.events
    this.loading = false
  }

  @action 
  setCustomerEvents = async () => {
    const path = window.location.pathname.match(/^\/customers\/([A-zA-Z\d]+)/)
    const id = path ? path[1] : ''
    this.loading = true

    const res = await ApiStore.fetchCustomerEvents(id)
    this.customerEvents = res.customer_events
    this.loading = false
  }

  @action 
  setSources = async () => {
    this.loading = true
    const res = await ApiStore.fetchSources()
    this.sources = res.sources
    this.loading = false
  }

  @computed 
  get getEvents() {
    return this.events
  }
}

export default new DataStore()
