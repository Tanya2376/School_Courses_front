import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Comment/'

class comment {
   async setComment(param) {
      return await axios.post(`${TEST_API_URL}save_comment.php`, JSON.stringify(param))
   }

   async getComment(param) {
      return await axios.post(`${TEST_API_URL}ListOfComments.php`,JSON.stringify(param))
   }

   // async NN(param) {
   //    return await axios.post(`${TEST_API_URL}NN.php`,JSON.stringify(param))
   // }

   // async NN(params) {
   //    return await axios.post(`${TEST_API_URL}NN.php`, params, {
   //       headers: {
   //          'Content-Type': 'multipart/form-data'
   //       }
   //    })
   // }
   // async NN(params) {
   //    return await axios.post(`${TEST_API_URL}NN.php`, params, {
         
   //    })
   // }
}

export default new comment()