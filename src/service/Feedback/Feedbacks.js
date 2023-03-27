import { ApiServise } from '../api.service';

class Feedback extends ApiServise {
   constructor() {
      super('Reviews');
   }

   async setFeedback(param) {
      return await this.api.post(`insertReviews.php`, JSON.stringify(param))
      
   }

   async getFeedbacks() {
      return await this.api.get(`get10Reviews.php`)
   }
}

export default new Feedback()