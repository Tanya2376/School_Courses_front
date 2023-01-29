<template>
<button class="my_btn">
   <slot></slot>
</button>
</template>
<script>

export default {
    name: "my-button"
}
</script>


<style scoped>
.my_btn {
   padding: 12px 16px;
   border: 1px solid gray;
   border-radius: 12px;
   transition: 0.3s;
}

.my_btn:hover {
   border: 1px solid deeppink;
   background-color: deeppink;
   color: white;
}
</style>