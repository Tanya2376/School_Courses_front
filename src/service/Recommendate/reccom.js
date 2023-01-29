import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/RecommTest/'

class Reccom {
   async insertRecc(params) {
      return await axios.post(`${TEST_API_URL}insertRecomm.php`, JSON.stringify(params))
   }

   async getReccomTest(params) {
      return await axios.post(`${TEST_API_URL}RecomTest.php`, JSON.stringify(params))
   }
}

export default new Reccom()
