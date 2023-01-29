<template>
  <div v-if="course.col==7" v-bind:class="[flexCol[0]]" class="flex-col flex-col--xm12">
    <div v-bind:class="[course.class]" class="course">
      <h3 class="h3 course-title pb-16">{{course.title}}</h3>
      <p class="course_desc pb-24"> {{course.desc}}</p>
      <a class="course_link" href="#!">Записаться</a>
  </div>
  </div>
  <div v-if="course.col==5" v-bind:class="[flexCol[1]]" class="flex-col flex-col--xm12">
    <div v-bind:class="[course.class]" class="course">
      <h3 class="h3 course-title pb-16">{{course.title}}</h3>
      <p class="course_desc pb-24"> {{course.desc}}</p>
      <a class="course_link" href="#!">Записаться</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseBlock",
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      flexCol: [
        'flex-col--7',
        'flex-col--5'
      ]
    }
  }
}
</script>

<style scoped>
  @import "CourseBlock.css";

  .course_desc {
    word-break: break-all;
  }
</style>