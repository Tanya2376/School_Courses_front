import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Reiting/'

class Reiting {
  

 async Reiting(params) {
    return await axios.post(`${TEST_API_URL}Reiting.php`, JSON.stringify(params))
 }
}

export default new Reiting()
