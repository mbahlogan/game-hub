import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0b31c875d7dc48efa6ef1d2937139437'
    }
})