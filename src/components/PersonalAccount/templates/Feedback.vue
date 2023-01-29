<template>
<div class="my_feedback">
   <div class="my_feedback_icon"></div>
</div>
</template>
<script>

export default {
    name: "my-feedback"
}
</script>


<style scoped>
.my_feedback {
   border-radius: 50%;
   position: absolute;
   bottom: 20px;
   right: 20px;
   width: 50px;
   height: 50px;
   background: #fc8507;
   width: 50px;
   height: 50px;
   background-size: contain;
   cursor: pointer;
   transition: 0.5s;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: hidden;
}

.my_feedback_icon {
   background: url('../resources/image/chat-bubble.svg') no-repeat;
   width: 20px;
   height: 20px;
}

</style>