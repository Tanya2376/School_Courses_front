import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Object/'

class Objects {
   async getOGE() {
      return await axios.get(`${TEST_API_URL}/getObjectsOGE.php`)
   }

   async getUSE() {
      return await axios.get(`${TEST_API_URL}/getObjectsUSE.php`)
   }
}

export default new Objects()
