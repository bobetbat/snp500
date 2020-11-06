import { observable, action } from 'mobx'
import DataStore from './DataStore'
import ApiStore from './ApiStore'

class AppStore {
  data = DataStore
  api = ApiStore
}

export default new AppStore()
