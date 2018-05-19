import { validateUser } from '../actions/user-details'

class user {
  constructor(user = {}) {
    this.username = user.username || '';
    this.userId = user.userId || '';
    this.role = user.role || '';
    this.designation = user.designation || '';
  }
}
const state = {
  user : new user()
}
const mutations = {
  SET_WORKING_USER(state, userData) {
    state.user = new user({ username: 'test1', userId: 101, role: 'admin', designation: 'manager' });
  }
}
export default {
  state,
  mutations,
  actions: {
    validateUser
  }
}
