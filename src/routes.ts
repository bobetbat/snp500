import loadable from 'react-loadable'
import Loading from './components/Loading'
const routes = [
  {
    path: '/',
    exact: true,
    component: loadable({
      loader: () => import('./views/Main'),
      loading: Loading
    })
  },
  {
    path: '/:id',
    exact: true,
    component: loadable({
      loader: () => import('./views/Customer'),
      loading: Loading
    })
  }
]
export default routes
