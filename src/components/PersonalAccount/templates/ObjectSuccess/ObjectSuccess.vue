<template>
   <div class="">
      <div class="flex-container flex-container-aling-center">
         <div class="flex-col">
            <h3 class="object_title">{{title}}</h3>
         </div>
         <div class="flex-col">
           <my-button @click="show_dialog">Рекомендательный тест</my-button>
         </div>
      </div>

      <div v-for="(item, index) in objectThemes" v-bind:key="item.id" class="mb-16 success_item flex-container flex-container-space flex-container-aling-center flex-container--noGutter">
         <div class="flex-col">
            {{item}}
         </div>
         <div class="flex-col theme_success">
            {{themesSuccess[index]}}%
         </div>
         
      </div>
   </div>
   <MyDialogVue
      v-model:show = showDialog
   >
   <div class="recomended_test flex-container flex-container-column flex-container-aling-center">
      <div class="recomended_test_title flex-col">
         На основе ваших показателей мы составили для вас рекомендательный тест.<br>В нем собраны задания, по которым у вас низкая успеваемость. 
      </div>
      <div class="flex-col">
         <my-button @click="goTest">Пройти тест</my-button>
      </div>
   </div>
   </MyDialogVue>
</template>
<script>
import themesUSE from '@/components/PersonalAccount/templates/ObjectSuccess/resources/objectThemes'
import themesOGE from '@/components/PersonalAccount/templates/ObjectSuccess/resources/objectThemeOGE'
import MyButton from '@/components/Common/MyButton.vue';
import MyDialogVue from '@/components/Common/MyDialog.vue';
import Success from '@/service/Success/Success'
import {body} from "@/main";

export default {
   name: "object-success",
   components: { MyButton, MyDialogVue },
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
         objectThemes: [],
         themesSuccess: [],
         title: '',
         showDialog: false,
         params: {
            login: localStorage.login,
            id_object: this.id,
            type_task: this.type,
            theme: this.objectThemes
         }
      }
   },
   methods: {
      show_dialog() {
         this.showDialog = true
      },
      goTest() {
         body[0].classList.remove("lock");
         this.$router.push('/test?id='+this.id+'&'+'type='+this.type + '&reccom=true')
      }
   },
   mounted() {
      if(this.type === 'ЕГЭ') {
         themesUSE.forEach(element => {
            if(element.id === this.id) {
               this.objectThemes = element.theme
               this.params.theme = element.theme
               this.title = element.title
            }
         });
      }else{
         themesOGE.forEach(element => {
            if(element.id === this.id) {
               this.objectThemes = element.theme
               this.params.theme = element.theme
               this.title = element.title
            }
         });
      }

      Success.themeSuccess(this.params).then((res)=> {
         this.themesSuccess = res.data
      })
   }
}
</script>
<style scoped>
.object_title {
   font-size: 36px;
}

.success_item {
   padding: 20px;
   box-shadow: 0px 0px 5px grey;
   font-size: 24px;
}

.theme_success {
   
}

.recomended_test {
   text-align: center;
}
</style>