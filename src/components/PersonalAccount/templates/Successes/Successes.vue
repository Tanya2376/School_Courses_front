<template>
   <div class="successes">
      <div class="flex-container">
         <div class="flex-col flex-col--2 flex-col--xm12">
            <div @click="changeType('ЕГЭ')" class="object_type" :class="{'active': typeSusccess==='ЕГЭ'}">Успехи по ЕГЭ</div>
         </div>
         <div class="flex-col flex-col--2 flex-col--xm12">
            <div @click="changeType('ОГЭ')" class="object_type" :class="{'active': typeSusccess==='ОГЭ'}">Успехи по ОГЭ</div>
         </div>
      </div>
      <SuccessItem
         v-for="(item, index) in courseList"
         v-bind:key="index"
         v-bind:item="item"
         v-bind:type="typeSusccess"
         @showSuccessItem="showSuccessItem"
      />
   </div>
</template>

<script>
import SuccessItem from '@/components/PersonalAccount/templates/Successes/templates/successItem.vue'

export default {
   name: "my-successes",
   components: {
      SuccessItem
   },
   props: {
      courseList: {
         type: Array,
         required: true
      },
      Type: {
         type: String,
         required: true
      }
   },
   watch: {
      Type: function() {
         this.typeSusccess = this.Type
      }
   },
   data() {
      return {
         typeSusccess: this.Type
      }
   },
   methods: {
      changeType(type) {
         this.$emit('changeType', type)
      },
      showSuccessItem(name, id) {
         this.$emit('showSuccessItem', name,  id)
      }
   }
}
</script>


<style scoped>
.successes {

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