<template>

<div v-if="SetFeedback" class="green_arrow">
   <img 
      src="@/components/PersonalAccount/templates/green_arrow.png"
      >
</div>

<div v-else class="feedback flex-container flex-container-column flex-container-space">
   <h4 class="feedback_title mb-24">Оставьте отзыв</h4>
   Ваше Имя
   <my-input @input="inputName" class="mb-24"></my-input>
   Ваш Email
   <my-input @input="inputEmail" class="mb-24"></my-input>
   Отзыв
   <my-input @input="inputFeedback" class="mb-24 feedback_text"></my-input>
   <p class="pb-16">Ваша оценка</p>
   <div class="stars flex-container flex-container-space mb-24">
      <div @mousemove="check(1)" @click="clickStar(1)" @mouseleave="close" class="star_body"><my-star :class="{'gold': stars[0]}" class="star"></my-star></div>
      <div @mousemove="check(2)" @click="clickStar(2)" @mouseleave="close" class="star_body"><my-star :class="{'gold': stars[1]}" class="star"></my-star></div>
      <div @mousemove="check(3)" @click="clickStar(3)" @mouseleave="close" class="star_body"><my-star :class="{'gold': stars[2]}" class="star"></my-star></div>
      <div @mousemove="check(4)" @click="clickStar(4)" @mouseleave="close" class="star_body"><my-star :class="{'gold': stars[3]}" class="star"></my-star></div>
      <div @mousemove="check(5)" @click="clickStar(5)" @mouseleave="close" class="star_body"><my-star :class="{'gold': stars[4]}" class="star"></my-star></div>
   </div>
   <my-button @click="setFeedback" >отправить</my-button>
   <my-dialog v-model:show="show_dialog">
         <div class="label">ваш комментарий - спам!</div>
    </my-dialog>
</div>

</template>

<script>
import Feedback from '@/service/Feedback/Feedbacks.js';

export default {
   name: "my-feedback-dialog",
   methods: {
      check(number) {
         if(!this.checkClickStar) {
            for (let i = 0; i< this.stars.length; i++) {
            if (i<number) {
               this.stars[i] = true
            }
         }
         }
      },
      close() {
         if(!this.checkClickStar) {
            for (let i = 0; i < this.stars.length; i++) {
               this.stars[i] = false
         }
         }
      },
      clickStar(mark) {
         if(!this.checkClickStar) {
            this.checkClickStar = true
         for (let i = 0; i< this.stars.length; i++) {
            if (i<mark) {
               this.stars[i] = true
            }
         }
         this.feedback.grade_reviews = mark
         }
      },
      setFeedback() {
         if((this.feedback.name!='') && (this.feedback.email!='') && (this.feedback.text_reviews!='') && (this.feedback.grade_reviews!='')){
            Feedback.setFeedback(this.feedback).then((res)=> {
               console.log(res.data);
               console.log(typeof res.data);
               if (res.data == '') {
                  this.show_dialog = true
               }
            else {
               this.SetFeedback =true
            }
               
               
               
              

            })
         }else{
            alert('Заполни поля или вали отсюда')
         }
      },
      inputName(event) {
         this.feedback.name = event.target.value.trim()
      },
      inputEmail(event) {
         this.feedback.email = event.target.value.trim()
      },
      inputFeedback(event) {
         this.feedback.text_reviews = event.target.value.trim()
      }
   },
   data() {
      return {
         stars: [false, false, false, false, false],
         checkClickStar: false,
         show_dialog: false,
         feedback: {
            name: '',
            login: localStorage.login,
            email: '',
            text_reviews: '',
            grade_reviews: ''
         },
         SetFeedback: false
      }
   }
}
</script>


<style scoped>
.feedback {
   width: 500px;
}

.feedback_title {
   text-align: center;
}

.feedback_text {
   height: 100px;
}

.stars {
   width: 150px;
}

.star {
   fill: grey;
}

.gold {
   fill: gold;
}

.star_body {
   cursor: pointer;
   width: 20%;
   padding: 2px;
}

.green_arrow>img {
   width: 100px;
   height: auto;
}

</style>