import { loginService} from '../../_services/user-service'
export const validateUser = ({ commit }, loginDetails) => {
  return new Promise((resolve, reject) => {
  loginService(loginDetails).then(data => {
    var v = { isValidUser: true }
    commit('SET_WORKING_USER', data);
    return resolve(v);
  }).catch(err => {
    reject(err);
    });
  });
}
