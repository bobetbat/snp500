import axios from 'axios'

const apiCall = (path:string) => {
  const url = `localhost:5000/${path}`
  try {
    const response = axios.get(url)
    return response
  } catch (e) {
    console.error(e)
  }
}

export default apiCall
