import { authEndpoint } from '../utility/constants';
import { vuePost } from '../utility/helper'

export const loginService = async (loginDetails) => {
	debugger
  return new Promise((resolve, reject) => {resolve(true);
    //vuePost(authEndpoint, loginDetails, { emulateJSON: true }).then(data => 
//{debugger;
//resolve(data)}).catch(err => {
     // reject(err)
    //});
  });
}
