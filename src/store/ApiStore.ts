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

class ApiStore {
  @action 
  fetchCustomers = ():Promise<responseCustomers> => apiCall('customers')

  @action 
  fetchCustomerById = (id:string):Promise<customer> => apiCall(`customers/${id}`)

  @action 
  fetchEvents = ():Promise<event[]> => apiCall('events')

  @action 
  fetchCustomerEvents = (id:string):Promise<customerEvent[]> => apiCall(`customers/${id}`)
    
  @action 
  fetchSources = ():Promise<source[]> => apiCall('sources')
}

export default new ApiStore()
