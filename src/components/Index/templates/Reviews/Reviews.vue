<template>
 <div class="flex-container">
   <div @click="leftClick" class=" arrow_slider flex-col flex-col--1 flex-container-column flex-container-center">←</div>
    <div class="flex-col flex-col--4">
      <div class="review_img image">
        <img :src="require(`@/components/PersonalAccount/resources/image/users/${students[counter].photo}`)" alt="">
      </div>
    </div>
    <div class="flex-col flex-col--6">
      <div class="review_text">
        <h3 class="h3 pb-16">{{students[counter].name}}</h3>
        <p>
          {{students[counter].text_reviews}}
        </p>
      </div>
    </div>
   <div @click="rightClick" class=" arrow_slider flex-col flex-col--1 flex-container-column flex-container-center">→</div>
 </div>
</template>
<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Reviews",
  props: {
    Students: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      counter: 0,
      students: this.Students
    }
  },
  methods: {
    rightClick() {
      this.counter++;
      if(this.counter > this.students.length-1){
        this.counter = 0;
      }
    },
    leftClick() {
      this.counter--;
      if(this.counter < 0){
        this.counter = this.students.length-1;
      }
    }
  },
}
</script>

<style scoped>
  @import "Reviews.css";
</style>