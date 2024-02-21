import axios from "axios"
import path from "./path"
import base from './path'

const api = {
  getchenpin(){
    return axios.get(path.baseUrl + path.chengpin)
  }
}

export default  api
