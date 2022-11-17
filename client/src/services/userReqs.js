import { axios } from '../helpers/axiosHelper';
// import { toast } from 'react-toastify';


/**
 *
 * @param {object} objReq
 * @returns if success, returns promise for data in data component, if not and failed, return null after rendering error in toast
 */
export const postUser = async (objReq) => {
   const res = await axios.post('/', objReq, {
      headers: {
         'Content-Type': 'application/json',
      },
   });
   if (res.data.success) {
      return res.data;
   } else {
      // toast.error(res.data.status.message);
   }
   return null;
};

/**
 *
 * @param {object} objReq object consist of two main component, botID and flowId
 * @returns if success, returns promise for data of node in data component, if not and failed, returns promise for null after rendering error in toast
 */
export const getUsers = async (objReq) => {
   const res = await axios.get('/');

   if (res.data.success) {
      debugger;
      return res.data;
   } else {
      // toast.error(res.data.status.message);
   }
   return null;
};
