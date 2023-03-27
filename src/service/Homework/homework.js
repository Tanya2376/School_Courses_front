import { ApiServise } from '../api.service';

class HomeWork extends ApiServise {
   constructor() {
      super('HomeWork');
   }

   async getListHomework(param) {
      return await this.api.post(`getListHomework.php`, JSON.stringify(param))
   }

   async getHomework(param) {
      return await this.api.post(`getHomework.php`, JSON.stringify(param))
   }
   async getObjectHomework(param) {
      return await this.api.post(`getObjectHomework.php`, JSON.stringify(param))
   }
   async getRoleTeacher(param) {
      return await this.api.post(`getRoleTeacher.php`, JSON.stringify(param))
   }
   async getNameFamilyPUPIL(param) {
      return await this.api.post(`getNameFamilyPUPIL.php`, JSON.stringify(param))
   }

   async getObject(param) {
      return await this.api.post(`getObject.php`, JSON.stringify(param))
   }
   async insertTeacherHome(param) {
      return await this.api.post(`insertTeacherHome.php`, JSON.stringify(param))
   }
   async getAllHomework(param) {
      return await this.api.post(`getAllHomework.php`, JSON.stringify(param))
   }

   async insertOcenkaPupils(param) {
      return await this.api.post(`insertOcenkaPupils.php`, JSON.stringify(param))
   }

   async getOcenkaThisPupil(param) {
      return await this.api.post(`getOcenkaThisPupil.php`, JSON.stringify(param))
   }

   async insertAnswerPupils(param) {
      return await this.api.post(`insertAnswerPupils.php`, JSON.stringify(param))
   }
   async loadPhotoTask(params) {
      return await this.api.post(`loadPhoto.php`, params, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   }
}

export default new HomeWork()