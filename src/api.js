import axios from 'axios';

class API {
    get(url){
        return axios.get(url);
    }
    post(url,parame){
        return axios.post(url,parame)
    }
    delete(url){
        return axios.delete(url);
    }
}
export default new API();