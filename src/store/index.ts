import { observable } from 'mobx'

class AppStore {
  @observable customers = [{name: 'asd'}, {name: 'asd2'}]
  @observable customer = {}
}

export default new AppStore()
