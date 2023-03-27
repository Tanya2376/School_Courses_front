import { ApiServise } from '../api.service';

class Answers extends ApiServise {
   constructor() {
      super('Answer');
   }

   async setAnswer(param) {
      return await this.api.post(`InsertAnswerUser.php`, JSON.stringify(param))
   }
}

export default new Answers()