import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Reviews/'

class Feedback {
   async setFeedback(param) {
      return await axios.post(`${TEST_API_URL}insertReviews.php`, JSON.stringify(param))
   }

   async getFeedbacks() {
      return await axios.get(`${TEST_API_URL}get10Reviews.php`)
   }
}

export default new Feedback()