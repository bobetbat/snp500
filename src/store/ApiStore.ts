import { observable, action } from 'mobx'
import apiCall from '../utils/apiCall'
type customer = {
  id: string,
  name: string,
  surname: string,
  created: string,
}
type responseCustomers = {
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
}

export default new ApiStore()
