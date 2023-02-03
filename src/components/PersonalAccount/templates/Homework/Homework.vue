<template>
<div class="homework_wrapper">
   <h2 class="pb-16">Здесь будет домашнее задание</h2>
   <!-- Переключалку типа спиздил из Успехов -->
   <!-- Вообще мождешь все по аналогии с успехами делать -->
   <div class="flex-container">
         <div class="flex-col flex-col--2 flex-col--xm12">
            <div @click="changeType('ЕГЭ')" class="object_type" :class="{'active': typeSusccess==='ЕГЭ'}">Домашнее задание по ЕГЭ</div>
         </div>
         <div class="flex-col flex-col--2 flex-col--xm12">
            <div @click="changeType('ОГЭ')" class="object_type" :class="{'active': typeSusccess==='ОГЭ'}">Домашнее задание по ОГЭ</div>
         </div>
      </div>
   <div class="flex-container">
      <!-- Вызываем собатие и пехаем в него айдишник домашки. НО. Кст. Можно пехнуть не только id, но и весь item Тогда в homeworkItem попадет весь набор связанный с заданием -->
      <div v-for="item in homeworkList" v-bind:key="item" @click="openHomework('homework_item', item)" class="flex-col flex-col--12">
         <div class="item">
            {{ item.title }}
         </div>
      </div>
   </div>
  
   <div v-for="item in homeworkTeacher" v-bind:key="item" @click="openTeacher('homework_item1', item.id)" class="teacher">
     Учитель с логином: {{ item.login }} нажми  на логин для продолжения работы
   </div>
   
</div>
</template>

<script>
import homework from '@/service/Homework/homework.js';
export default {
   name: "my-homework",
   props: {
      Type: {
         type: String,
         required: true
      },
      
   },
    data() {
      return{
         // Допустим мы вытащили список домашки с бэка. Можну сюда в принципе импортировать из service то, что связано с домашкой.
         homeworkList: [ ],
         homeworkTeacher: [],
         typeSusccess: this.Type,
         params: {
            login: localStorage.login,
            type_task: this.Type
           
         },
         paramsTeacher:{
            login: localStorage.login,
            type_task: this.Type
         },
         
         show_dialog: false
      }
   },
   watch: {
      Type: function() {
         this.typeSusccess = this.Type
         this.params.type_task = this.Type,
         this.getHomework()
      }
   },
   methods: {
      openHomework(name, id) {
         this.$emit('homework_item', name, id);
      },
      openTeacher(name, id){      
         this.$emit('homework_item1',name, id );
      },
      changeType(type) {
         this.$emit('changeType', type)
      },
      getHomework() {
         homework.getHomework(this.params).then((res)=> {
         this.homeworkList = res.data
         console.log(this.homeworkList);
      })
      },
      getRole(){
      homework.getRoleTeacher(this.paramsTeacher).then((res)=> {
         this.homeworkTeacher = res.data
         console.log(this.homeworkTeacher);
      })}
   },
   mounted() {
      this.getHomework(),
      this.getRole()
   }
}
</script>

<style scoped>
.item {
   background: rgba(128, 128, 128, 0.2);
   padding: 10px;
   border-radius: 12px;
   cursor: pointer;
}
.teacher {
   
 
   padding: 12px 16px;
   border: 1px solid gray;
   border-radius: 12px;
   transition: 0.3s;
}
.teacher:hover {
   border: 1px solid deeppink;
   background-color: deeppink;
   color: white;
}
 
  

.object_type {
   border-radius: 24px;
   box-shadow: 0px 0px 5px grey;
   padding: 10px;
   color: black;
   text-align: center;
   cursor: pointer;
}

.object_type.active {
   background-color: #d6ede2;
}
</style>