import axios from 'axios'

const TEST_API_URL = 'http://localhost/TanyaGit/SchoolCourses_back/HomeWork/'

class HomeWork {
   async getListHomework(param) {
      return await axios.post(`${TEST_API_URL}getListHomework.php`, JSON.stringify(param))
   }
  
   async getHomework(param) {
      return await axios.post(`${TEST_API_URL}getHomework.php`,JSON.stringify(param))
   }
   async getObjectHomework (param) {
      return await axios.post(`${TEST_API_URL}getObjectHomework.php`,JSON.stringify(param))
   }
   async getRoleTeacher(param) {
      return await axios.post(`${TEST_API_URL}getRoleTeacher.php`,JSON.stringify(param))
   }
   async getNameFamilyPUPIL (param) {
      return await axios.post(`${TEST_API_URL}getNameFamilyPUPIL.php`,JSON.stringify(param))
   }

   async getObject (param) {
      return await axios.post(`${TEST_API_URL}getObject.php`,JSON.stringify(param))
   }
   async insertTeacherHome (param) {
      return await axios.post(`${TEST_API_URL}insertTeacherHome.php`,JSON.stringify(param))
   }
   async getAllHomework (param) {
      return await axios.post(`${TEST_API_URL}getAllHomework.php`,JSON.stringify(param))
   }

   async  insertOcenkaPupils (param) {
      return await axios.post(`${TEST_API_URL}insertOcenkaPupils.php`,JSON.stringify(param))
   }
   
   async  getOcenkaThisPupil (param) {
      return await axios.post(`${TEST_API_URL}getOcenkaThisPupil.php`,JSON.stringify(param))
   }

   async insertAnswerPupils (param) {
      return await axios.post(`${TEST_API_URL}insertAnswerPupils.php`,JSON.stringify(param))
   }
   async loadPhotoTask(params) {
      return await axios.post(`${TEST_API_URL}/loadPhoto.php`, params, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }
}

export default new HomeWork()