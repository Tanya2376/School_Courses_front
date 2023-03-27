import { ApiServise } from '../api.service';

class Test extends ApiServise {
   constructor() {
      super('Tasks');
   }

   async generateTest(id_object, type_object) {
      return await this.api.get(`GenerationTest.php`, { params: { id: id_object, type: type_object } })
   }
}

export default new Test()
