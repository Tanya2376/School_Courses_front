export default {
   actions: {},
   mutations: {},
   state: {
      login: '',
      authorized: false
   },
   getters: {
      isAuthorized(state) {
         return state.authorized
      }
   }
}