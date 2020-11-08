import { observable, action } from 'mobx'
import DataStore from './DataStore'
import ApiStore from './ApiStore'

const AppStore = {
  data: DataStore,
  api: ApiStore
}

export default AppStore
