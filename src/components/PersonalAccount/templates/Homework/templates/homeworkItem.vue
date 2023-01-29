<template>
   <div v-for="item in  homeworkObj" v-bind:key="item"  class="flex-col flex-col--12">
      <div class="homework_item">
         Домашнее задание по предмету: "{{item.title_object}}"
      </div>
   </div>
   <div v-for="item in  homeworkZadanie" v-bind:key="item"  class="flex-col flex-col--12">
   <div class="homework_item">
    {{item.title}}
   </div> 
   <br>
   <div class="flex-col flex-col--12">
      <div class="test_task" >
         <img :src="require(`@/components/PersonalAccount/resources/image/task/${item.task}`)" alt="">
      </div>
   </div>
      <div class="flex-col flex-col--12">
         <div class="test_answer">
            <p class="pb-24"> Введите свой ответ
               <input type="text"   v-model="answer_pupil" class=" mb-16 reg_input" />
            </p>
            <my-button @click="GoAnswer">Отправить свой ответ</my-button>
         </div>
      </div>
   <br>
   <br>
   <div v-for="item in  PupilAnswer" v-bind:key="item"  class="flex-col flex-col--12">
      <div class="homework_item">
         Оценка: {{item.valuation}}
      </div> 
      <br>
   </div>
</div>
</template>

<script>
import homework from '@/service/Homework/homework.js';

export default {
   name: "homework-item",
   props: {
    
      type: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         homeworkObj: [ ],
         homeworkZadanie: [ ],
         PupilAnswer: [],
         answer_pupil:'',
         answer_params:{},
         params: {
            login: localStorage.login,
            type_task: this.type,
            
         },
         paramsObj: {
            login: localStorage.login,
            type_task: this.type
           
         }
      }
   },
   methods: {
      object() {
         homework.getObjectHomework(this.paramsObj).then((res)=>{
            this.homeworkObj = res.data
            console.log(this.homeworkObj);
         })
      },
      Zadanie() {
         homework.getHomework(this.params).then((res)=>{
            this.homeworkZadanie = res.data
            console.log(this.homeworkZadanie);
         })
      },
      Ocenka(){
         homework.getOcenkaThisPupil(this.params).then((res)=>{
            this.PupilAnswer = res.data
            console.log(this.PupilAnswer);
         })
      },
      GoAnswer() {
         this.answer_params = {
            answer_pupil: this.answer_pupil,
            login: localStorage.login

         }
         homework.insertAnswerPupils(this.answer_params).then((res)=> {
            console.log(res.data);
         })
      }
      },
      mounted() {
         this.object(),
         this.Zadanie(),
         this.Ocenka();
     
      }
   }
</script>

<style scoped>
.test_item {
   border-radius: 15px;
   box-shadow: 0px 0px 10px grey;
   padding-top: 32px;
}

.test_task {
   cursor: pointer;
}

.test_answer {
   display: flex;
   flex-direction: column;
}

.right {
   color: green;
}

.lose {
   color: red;
}
.reg_input {
  padding: 12px 16px;
   border-radius: 12px;
   border: 1px solid gray;
   width: 100%;
}
</style>