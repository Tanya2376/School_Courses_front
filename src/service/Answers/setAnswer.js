import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Answer/'

class Answers {

   async setAnswer(param) {
      return await axios.post(`${TEST_API_URL}InsertAnswerUser.php`, JSON.stringify(param))
   }
}

export default new Answers()