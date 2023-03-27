import { ApiServise } from '../api.service';

class Reiting extends ApiServise {
   constructor() {
      super('Reiting');
   }

   async Reiting(params) {
      return await this.api.post(`Reiting.php`, JSON.stringify(params))
   }
}

export default new Reiting()
