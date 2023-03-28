import { ApiServise } from '../api.service';

class Success extends ApiServise {
   constructor() {
      super('Uspevaemost_predm&theme');
   }

   async objectSuccess(params) {
      return await this.api.post(`getUspevPredm.php`, JSON.stringify(params))
   }

   async themeSuccess(params) {
      return await this.api.post(`getUspevTema.php`, JSON.stringify(params))
   }
}

export default new Success()
