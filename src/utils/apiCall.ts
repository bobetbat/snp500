import axios from 'axios'

const apiCall = async (endpoint:string):Promise<any> => {
  const url = `http://localhost:5000/${endpoint}`
  try {
    const response: any = await axios.get(url)
    console.log(response)
    return response.data
  } catch (e) {
    throw e
  }
}

export default apiCall
