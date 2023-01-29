import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Comment/'

class comment {
   async setComment(param) {
      return await axios.post(`${TEST_API_URL}save_comment.php`, JSON.stringify(param))
   }

   async getComment(param) {
      return await axios.post(`${TEST_API_URL}ListOfComments.php`,JSON.stringify(param))
   }
}

export default new comment()