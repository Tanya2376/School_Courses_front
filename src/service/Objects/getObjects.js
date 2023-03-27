import { ApiServise } from '../api.service';

class Objects extends ApiServise {
   constructor() {
      super('Object');
   }

   async getOGE() {
      return await this.api.get(`getObjectsOGE.php`)
   }

   async getUSE() {
      return await this.api.get(`getObjectsUSE.php`)
   }
}

export default new Objects()
