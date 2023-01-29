<template>
   <div class="my_course">
      <div class="flex-container flex-container-aling-center pb-32">
         <div class="flex-col">
            <h1 class="course_title">{{list.get(id).title}}</h1>  
         </div>
         <div class="flex-col">
            <my-button @click="openCourse">Пройти тест</my-button>
         </div>
      </div>
      <div class="advantages">
         <div class="flex-container pb-32">
            <div v-for="item in list.get(id).advantages" v-bind:key="item" class="flex-col flex-col--4">
               <div class="flex-container flex-container-column adv_item">
                  <div class="adv_title pb-16">{{item.title}}</div>
                  <div class="adv_desc">{{item.desc}}</div>
               </div>
            </div>
         </div>
         <div class="whyHelp">
            <h4 class="help_title pb-16">Почему этот курс поможет вам</h4>
            <div class="flex-container">
               <div v-for="item in list.get(id).helpers" v-bind:key="item" class="flex-col flex-col--4">
                  <div class="help_item flex-container flex-container-column">
                     <h3 class="pb-16 help_item_title">{{item.title}}</h3>
                     <img class="help_img" :src="require(`@/components/PersonalAccount/templates/Course/resources/images/${item.img}`)" alt=""/>
                     <p class="help_desc">
                        {{item.desc}}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div class="generate_test">
            <h4 class="help_title pb-16">Генерируем случайный тест</h4>
            <p class="help_desc pb-24">Всё как на экзамене. Вам выпадет тест из случайных заданий. Больше такой же тест вы пройти не сможете. С каждым последующим тестом вы будете не зубрить каждый ответ на задание. А учиться РЕШАТЬ!)) задания по тематикам. Чтобы на экзамене быть готовым к любым труностям</p>
         </div>
      </div>
   </div>
   <div class="comments_wrpper">
      <div class="flex-container flex-container-column">
         <div v-for="item in Comment" v-bind:key="item" class="flex-col">
            <div class="message flex-container ">
               <div class="message_image">
                  <img :title="item.name + ' ' + item.family" :src="require(`@/components/PersonalAccount/resources/image/users/${item.photo}`)" alt=""/>
               </div>
               <div class="message_text_login">
                  <p class="msg-text">
                     {{ item.message }}
                  </p>
                  <span class="msg_time">
                     {{ item.time }}
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="flex-container">
      <div class="flex-col flex-col--12">
         <div class="label">Оставьте коментарий</div>
      </div>
      <div class="flex-col flex-col--5">
         <!-- <my-input :value = "sendedComment" @input="inputComment"></my-input> -->
         <input class="comment_input" type="text" v-model="sendedComment">
      </div>
      <div class="flex-col">
         <my-button @click="sendComment">Отправить</my-button>
      </div>
   </div>
</template>

<script>
import courseDesc from '@/components/PersonalAccount/templates/Course/courseDesc'
import courseDescOGE from '@/components/PersonalAccount/templates/Course/courseDescOGE'

//достаем комментарии из бэка
import comment from '@/service/Comment/comment.js';
import MyDate from '@/components/PersonalAccount/templates/Course/resources/getDate.js'

export default {
    name: "my-course",
    props: {
      id: {
         type: String,
         required: true
      },
      type: {
         type: String,
         required: true
      }
    },
   data() {
      return {
         list: courseDesc,
         Comment:[],
         sendedComment: '',
         comment_params: {
            login: localStorage.login,
            id_object: this.id,
            message: '',
            time: '',
            type_task: this.type
         },
         commmentParam:{
            id_object: this.id,
            type_task: this.type
         },
         login: localStorage.login
      }
   },
   methods: {
   openCourse() {
      this.$router.push('/test?id='+this.id+'&'+'type='+this.type)
      },
      inputComment(event) {
         this.sendedComment = event.target.value.trim()
      },
      sendComment() {
         this.comment_params.message = this.sendedComment
         this.comment_params.time = MyDate.generateDate()
         if(this.sendedComment) {
            comment.setComment(this.comment_params).then(() => {
               comment.getComment(this.commmentParam).then((res)=>{
                  this.Comment = res.data
                  this.sendedComment = ''
               })
            })
         }
      }
   },
   beforeMount() {
      if(this.type==='ЕГЭ') {
         this.list = courseDesc
      }else{
         this.list = courseDescOGE
      }

      comment.getComment(this.commmentParam).then((res)=>{
         this.Comment = res.data
      })
   }
}
</script>

<style scoped>
.my_course {

}

.course_title {
   font-size: 50px;
}

.adv_title {
   font-size: 20px;
}

.adv_item {
   border-radius: 12px;
   box-shadow: 0px 0px 5px grey;
   height: 100%;
   padding: 16px 16px;
}

.adv_item:hover {
   box-shadow: 0px 0px 5px rgb(253, 0, 253);
   transition: 0.3;
   cursor: pointer;
}

.adv_desc {
   word-break: break-word;
}

.help_title {
   font-size: 40px;
}

.help_item {
   border-radius: 12px;
   box-shadow: 0px 0px 5px grey;
   height: 100%;
   padding: 16px 16px;
   align-items: center;
   justify-content: space-between;
}

.help_img {
   width: 60%;
   margin-bottom: 12px;
}

.help_item_title {
   font-size: 20px;
}

.help_desc {
   font-size: 18px;
   word-break: break-word;
}

.message_image {
   width: 45px;
   height: 45px;
   border-radius: 50%;
   overflow: hidden;
}

.message_text {
   margin-left: 10px;
   border-radius: 25px;
   background-color: #cbcecf;
   padding: 10px 15px;
   display: flex;
   flex-direction: column;
}

.message_text_login {
   margin-left: 10px;
   border-radius: 25px;
   background-color: #d1f3ff;
   padding: 10px 15px;
   display: flex;
   flex-direction: column;
}

.msg_time {
   font-size: 12px;
   text-align: end;
}

.comment_input {
  padding: 12px 16px;
   border-radius: 12px;
   border: 1px solid gray;
   width: 100%;
}

.comment_input:hover {
  border: 1px solid deeppink;
}

.comments_wrpper {
   max-height: 500px;
   overflow: hidden;
   overflow-y: scroll;
   width: 1000px;
}
</style>