import { ApiServise } from '../api.service';

class Reccom extends ApiServise {
   constructor() {
      super('RecommTest');
   }

   async insertRecc(params) {
      return await this.api.post(`insertRecomm.php`, JSON.stringify(params))
   }

   async getReccomTest(params) {
      return await this.api.post(`RecomTest.php`, JSON.stringify(params))
   }
}

export default new Reccom()
