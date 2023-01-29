<template>
   <div @click="showSuccessItem('success_item', item.id_object)" class="success_item">
      <h4>{{item.title_object}}</h4>
      <span>{{success}}%</span>
   </div>
</template>

<script>
import Success from '@/service/Success/Success'

export default {
   name: "success-item",
   props: {
      item: {
         type: Object,
         required: true
      },
      type: {
         type: String,
         required: true
      }
   },
   watch: {
      type: function() {
         this.params.type_task = this.type,
         this.getSuccess()
      }
   },
   data() {
      return {
         params: {
            login: localStorage.login,
            type_task: this.type,
            id_object: this.item.id_object
         },
         success: null
      }
   },
   methods: {
      showSuccessItem(name, id) {
         this.$emit('showSuccessItem', name,  id)
      },
      getSuccess() {
         Success.objectSuccess(this.params).then((res)=> {
         this.success = res.data
      })
      }
   },
   mounted() {
      this.getSuccess()
   }
}
</script>

<style scoped>
   .success_item {
      border-radius: 20px;
      box-shadow: 0px 0px 5px grey;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      cursor: pointer;
      font-size: 40px;
      transition: 0.3s;
   }

   .success_item:hover {
      transform: scale(1.02);
   }

</style>