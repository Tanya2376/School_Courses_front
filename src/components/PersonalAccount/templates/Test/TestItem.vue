<template>
   <div class="test_item mb-24 flex-col flex-col--12">
      <div class="flex-container">
         <div class="flex-col flex-col--12">
            <div class="test_task" @click="showDialog">
               <img 
               :src="require(`@/Tasks/${item.task}`)"
               >
            </div>
         </div>
         <div class="flex-col flex-col--12">
            <div class="test_answer">
               <p class="pb-24"> Введите свой ответ
                 
               </p>
               <div class="answer_field flex-container flex-container-space">
                  <my-input
                     v-if="!complete"
                     @input="inputAnswer"
                  />
                  <div v-if="complete" class="result">
                     <div v-if="total" class="right">
                        Ответ верный
                     </div>
                     <div v-else class="lose">
                        Ответ неверный
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <my-dialog v-model:show="show_dialog"
   >
      <img 
         :src="require(`@/Tasks/${item.task}`)"
         >
   </my-dialog>
</template>

<script>

export default {
    name: "test-item",
   props: {
      item: {
         type: Object,
         required: true
      },
      index: {
         type: Number,
         required: true
      },
      complete: {
         type: Boolean,
         required: true
      }
   },
   data() {
      return {
         answer: '',
         answerItem: {},
         show_dialog: false,
         total: false
      }
   },
   methods: {
      showDialog() {
         this.show_dialog = true
      },
      inputAnswer(event) {
         if(event.target.value === this.item.right_answer) {
            this.total = true
         }

         this.answerItem = {
            id_answer: this.index,
            login: localStorage.login,
            answer_user: event.target.value.trim(),
            id_task: this.item.id_task,
            theme: this.item.theme,
            total: this.total
         }
         this.$emit('setAnsw', this.answerItem)
      }
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
</style>