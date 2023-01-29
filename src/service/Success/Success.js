import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Uspevaemost_predm&theme/'

class Success {
   async objectSuccess(params) {
      return await axios.post(`${TEST_API_URL}/getUspevPredm.php`, JSON.stringify(params))
   }

   async themeSuccess(params) {
      return await axios.post(`${TEST_API_URL}/getUspevTema.php`, JSON.stringify(params))
   }
}

export default new Success()
