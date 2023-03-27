import { ApiServise } from '../api.service';

class Comment extends ApiServise {
   constructor() {
      super('Comment');
   }

   async setComment(param) {
      return await this.api.post(`save_comment.php`, JSON.stringify(param))
   }

   async getComment(param) {
      return await this.api.post(`ListOfComments.php`, JSON.stringify(param))
   }

   // async NN(param) {
   //    return await this.api.post(`NN.php`,JSON.stringify(param))
   // }

   // async NN(params) {
   //    return await this.api.post(`NN.php`, params, {
   //       headers: {
   //          'Content-Type': 'multipart/form-data'
   //       }
   //    })
   // }

   // async NN(params) {
   //    return await this.api.post(`NN.php`, params, {
   //    })
   // }
}

export default new Comment()