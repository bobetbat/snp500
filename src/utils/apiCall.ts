import axios from 'axios'
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
const apiCall = async (endpoint:string):Promise<any> => {
  const url = `http://localhost:5000/${endpoint}`
  try {
    const response: any = await axios.get(url)
    console.log(response)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

export default apiCall
