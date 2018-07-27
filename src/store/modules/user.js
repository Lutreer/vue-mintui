// import * as TYPES from '../mutation-type'
// import UserService from '../../services/user'
// const userService = new UserService()
// const User = {
//   namespaced: true,
//   state: {
//     username: ''
//   },
//   getters: {
//     username: state => state.username
//   },
//   mutations: {
//     [TYPES.USER.LOGIN](state, loginUser) {
//       state.username = loginUser.username
//     },
//     [TYPES.USER.LOGOUT](state) {
//       state = {
//         username: ''
//       }
//     }
//   },
//   actions: {
//     login({ commit }, loginInfo) {
//       return new Promise((resolve, reject) => {
//         userService.login(loginInfo).then(response => {
//           commit(TYPES.USER.LOGIN, response.result)
//           resolve(response.result)
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     },
//     logout({ commit }) {
//       return new Promise((resolve, reject) => {
//         resolve()
//         userService.logout().then(response => {
//           commit(TYPES.USER.LOGOUT)
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     }
//   }
// }
// export default User
