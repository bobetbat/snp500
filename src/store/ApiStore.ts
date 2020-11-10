import { observable, action } from 'mobx'
import apiCall from '../utils/apiCall'
import { customer, event, customerEvent, source } from './DataStore'

export type responseCustomers = {
  customers: customer[],
  selection_settings: {
    offset: number,
    limit: number,
    search: string
  }
}

export type responseEvents = {
  events: event[]
}

export type responseCustomerEvents = {
  customer_events: customerEvent[]
}

export type responseSources = {
  sources: source[]
}



class ApiStore {
  @action 
  fetchCustomers = ():Promise<responseCustomers> => apiCall('customers')

  @action 
  fetchCustomerById = (id:string):Promise<customer> => apiCall(`customers/${id}`)

  @action 
  fetchEvents = ():Promise<responseEvents> => apiCall('events')

  @action 
  fetchCustomerEvents = (id:string):Promise<responseCustomerEvents> => apiCall(`customers/${id}/events`)
    
  @action 
  fetchSources = ():Promise<responseSources> => apiCall('sources')
}

export default new ApiStore()
