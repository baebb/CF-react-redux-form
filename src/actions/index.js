import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';
// const API_KEY = ''; //no api key needed

export function submitForm(props) {
    //axios serializes our form object and makes a post request to a dummy URL (as a promise)
    const request = axios.post(`${ROOT_URL}/posts`, props);

    // console.log("post form action received!");
    // console.log(request);

    return {
        type: CREATE_POST,
        payload: request
    };
    //using redux-promise we can apply middleware to transform promises into response data
}