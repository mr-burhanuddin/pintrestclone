import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID feT0FicHSPoC6gwSEilQ-Al8W4jhTElAgElOmh4Nrnw'
    }
});