import axios from 'axios';

const apiBaseUrl = "localhost:5000";



// axios global configuration for basic purpose use
const axiosBasic = () => {
   return axios.create({
      baseURL: apiBaseUrl + '/api/users',
      headers: {
         'Access-Control-Allow-Origin': '*',
      },
   });
};

export { axios, axiosBasic };
