import axios from 'axios';

const Instance = axios.create({
    baseURL:"https://api.tvmaze.com"
});

export default Instance;