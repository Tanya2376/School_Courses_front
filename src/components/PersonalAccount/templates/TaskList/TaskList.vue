<template>

   <div class="">
      <div v-for="task in taskList" v-bind:key="task.id" class="task_item">
         <h4>{{task.name}}</h4>
         <p>{{task.desc}}</p>
      </div>
   </div>
   
   </template>
   
   <script>
   
   export default {
       name: "my-task-list",
      props: {
         taskList: {
            type: Array,
            required: true
         }
      }
   }
   </script>
   
   
   <style scoped>
   .task_item{
      padding: 12px 16px;
      border-radius: 12px;
      box-shadow: 0px 0px 5px grey;
      margin-bottom: 12px;
      cursor: pointer;
      transition: 0.3s;
   }

   .task_item:hover {
      transform: scale(1.01);
   }
   
   </style>