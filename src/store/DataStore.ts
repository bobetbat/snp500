import { observable, action } from 'mobx'
import apiCall from '../utils/apiCall'
import ApiStore from './ApiStore'

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
class DataStore {
  @observable customers:customer[] = []
  @observable customer = true

  @action 
  setCustomers = async () => {
    const res = await ApiStore.fetchCustomers()
    this.customers = res.customers
    console.log('res', this.customers)
  }

  @action
  set = () => {
    this.customer = false
    console.log('cstmr', this.customer)
  }
}

export default new DataStore()
