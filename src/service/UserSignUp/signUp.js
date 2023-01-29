import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/Users'

class Users {
   async sign_up(params) {
      return await axios.post(`${TEST_API_URL}/signUp.php`, JSON.stringify(params))
   }

   async getUser(params) {
      return await axios.post(`${TEST_API_URL}/userInfo.php`, JSON.stringify(params))
   }

   async insertUser(params) {
      return await axios.post(`${TEST_API_URL}/insertUsers.php`, JSON.stringify(params))
   }

   async checkUser(params) {
      return await axios.post(`${TEST_API_URL}/checkUser.php`, JSON.stringify(params))
   }

   async loadPhotoUser(params) {
      return await axios.post(`${TEST_API_URL}/loadPhoto.php`, params, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }
}

export default new Users()