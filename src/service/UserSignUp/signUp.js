import { ApiServise } from '../api.service';

class Users extends ApiServise {
   constructor() {
      super('Users');
   }

   async sign_up(params) {
      return await this.api.post(`signUp.php`, JSON.stringify(params))
   }

   async getUser(params) {
      return await this.api.post(`userInfo.php`, JSON.stringify(params))
   }

   async insertUser(params) {
      return await this.api.post(`insertUsers.php`, JSON.stringify(params))
   }

   async checkUser(params) {
      return await this.api.post(`checkUser.php`, JSON.stringify(params))
   }

   async loadPhotoUser(params) {
      return await this.api.post(`loadPhoto.php`, params, {
         headers: {
            'Content-Type': 'multipart/form-data',
         }
      })
   }
}

export default new Users()