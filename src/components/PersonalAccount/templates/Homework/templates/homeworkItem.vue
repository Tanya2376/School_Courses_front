<template>
   
   
   <div class="homework_item">
      <p class="articles_title pb-16">
         Домашнее задание по предмету: "{{id.title_object}}"</p>
      </div>
      <div class="homework_item">
         <p class="articles_title pb-16">  
    С темой: "{{id.title}}"</p>
   </div> 
   <br>
   <div class="flex-col flex-col--12">
      <div class="test_task_img">
         <img :src="require(`@/components/PersonalAccount/resources/image/task/${id.task}`)" alt="">
      </div>
   </div>
      <div class="flex-col flex-col--12">
         <div class="test_answer">
            <p class="pb-24"> Введите свой ответ
               <input type="text"   v-model="answer_pupil" class=" mb-16 reg_input" />
            </p>
            <my-button @click="GoAnswer">Отправить свой ответ</my-button>
            <my-dialog v-model:show="show_dialog">
      <span class="red_msg">Ответ отправлен!</span>
    </my-dialog>
         </div>
      </div>
   <br>
   <br>
   
      <div class="homework_item">
         <p class="articles_title pb-16">  
         Оценка: {{id.valuation}}</p>
      </div> 
      <br>
   

</template>

<script>
import homework from '@/service/Homework/homework.js';

export default {
   name: "homework-item",
   props: {
      
      id: {
         type: Array,
         required: true
      },
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
         show_dialog:false,
         answer_pupil:'',
         answer_params:{},
         params: {
            login: localStorage.login,
            type_task: this.type,
            
         }
         
         
      }
   },
   methods: {
      
      Zadanie() {
         homework.getHomework(this.params).then((res)=>{
            this.homeworkZadanie=res.data;
            console.log(this.homeworkZadanie);
         })
      },
     
      GoAnswer() {
         this.answer_params = {
            answer_pupil: this.answer_pupil,
            login: localStorage.login

         }
         homework.insertAnswerPupils(this.answer_params).then((res)=> {
            console.log(res.data);
            this.show_dialog=true
         })
      }
      },
      mounted() {
         
         this.Zadanie();
     
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

.test_task_img {
  width: 348px;
  height: 248px;
  overflow: hidden;
  display: flex;
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