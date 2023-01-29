<template>
<div class="test">
   <div class="container">
      <div class="flex-container flex-container-space test_title_body">
         <div class="test_title">Тест по {{type}} {{Objects[id_object-1].name}}</div>
         <my-button @click="goAway">
            Пройти потом
         </my-button>
      </div>
      <div v-if="load" class="test_items flex-container">
         <TestItemVue
            v-for="(item, index ) in Test"
            v-bind:key="index"
            v-bind:index="index"
            v-bind:item="item"
            @setAnsw="answer"
            v-bind:complete="test_complete"
         />
         <my-button v-if="test_complete" @click="goAway">
            Завершить тест
         </my-button>
         <my-button v-else @click="goAnswer">
            Завершить тест
         </my-button>
      </div>
      <div v-else class="loading">
         Создаем тест...
      </div>
   </div>
</div>
<my-dialog v-model:show="show_dialog">
<span class="red_msg">Заполните все ответы!!!</span>
</my-dialog>
</template>

<script>
import TestItemVue from '@/components/PersonalAccount/templates/Test/TestItem.vue';
import objects from '@/components/PersonalAccount/templates/Test/objects';
import Answers from '@/service/Answers/setAnswer'

//достаем тест из бэка
import Test from '@/service/Test/generateTest.js';
import Reccom from '@/service/Recommendate/reccom.js'

export default {
    name: "my-test",
    components: {
      TestItemVue
    },
   props: {
      showTest: {
         type: Boolean,
         required: true
      }
   },
   data() {
      return {
         Test: [],
         id_object: 0,
         Objects: objects,
         testAnswers: [],
         type: '',
         reccom: false,
         load: false,
         show_dialog: false,
         test_complete: false,
         check: true,
         checkNumber: [],
         params: {
            login: localStorage.login,
            theme: []
         }
      }
   },
   methods: {
      getTest() {
         var url = new URL(window.location.href);

         this.id_object = url.searchParams.get("id")
         this.type = url.searchParams.get("type")
         this.reccom = url.searchParams.get("reccom")
         this.reccom = false

         if(this.reccom) {
            Reccom.getReccomTest(this.params.login).then((res)=> {
               this.Test = res.data
               this.load = true
               this.testAnswers.length = this.Test.length
            })
         }else{
            Test.generateTest(this.id_object, this.type).then((res)=>{
               this.Test = res.data
               this.load = true
               this.testAnswers.length = this.Test.length
               this.checkNumber.length = this.Test.length
            })
         }
      },
      answer(obj) {
         this.testAnswers[obj.id_answer] = obj
         this.params.theme.push(this.testAnswers[obj.id_answer].theme)
      },
      goAnswer() {
         for(let i = 0; i<=this.testAnswers.length-1; i++) {
            if(this.testAnswers[i] === undefined) {
               this.checkNumber[i] = false
               this.show_dialog = true
            }else {
               this.checkNumber[i] = true
            }
         }
         if(!this.show_dialog) {
            Answers.setAnswer(this.testAnswers).then(()=>{
               this.test_complete = true
               window.scrollTo({top: 0, behavior: 'smooth'})
               Reccom.insertRecc(this.params)
            })
         }
      },
      goAway() {
         this.$router.replace('/personal_account')
      }
   },
   beforeMount() {
      this.getTest()
   }
}
</script>
<style scoped>
.test {
   width: 100%;
   height: 100vh;
   padding-top: 80px;
}

.test_title {
   font-size: 40px;
}

.test_title_body {
 
}

.person {
   width: 48px;
   border-radius: 50%;
   background-color: grey;
   cursor: pointer;
}

.test_items {
   padding: 32px 24px
}

.loading {
   font-size: 36px;
   padding-top: 32px;
}

.red_msg {
   color: red;
   font-size: 20px;
   text-align: center;
}
</style>