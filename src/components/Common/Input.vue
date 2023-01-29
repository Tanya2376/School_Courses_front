<template>
   <input class="input" :type="type" name="" id="" :value="val">
</template>

<script>

export default {
    name: "my-input",
    props: {
      type: {
         type: String
      },
      value: {
         type: String
      }
    },
    watch:  {
      value: function() {
         this.val = this.value
      }
    },
    data() {
      return {
         val: this.value
      }
    }
}
</script>

<style scoped>
.input {
   padding: 12px 16px;
   border-radius: 12px;
   border: 1px solid gray;
   width: 100%;
}

.input:hover {
   border: 1px solid deeppink;
}
</style>