import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Tasks/'

class Test {
   async generateTest(id_object, type_object) {
      return await axios.get(`${TEST_API_URL}GenerationTest.php`, {params: {id: id_object, type: type_object}})
   }
}

export default new Test()
