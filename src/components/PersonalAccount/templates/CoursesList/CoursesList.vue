<template>

<div class="">
   <div class="types">
      <div @click="checkType(0, 'ЕГЭ')" :class="{'USE' : check_type[0].check}" class="type">ЕГЭ</div>
      <div @click="checkType(1, 'ОГЭ')" :class="{'OGE' : check_type[1].check}" class="type">ОГЭ</div>
   </div>
   <div class="flex-container flex-container-space">
      <div v-for="course in course_list" v-bind:key="course.id" class="flex-col flex-col--6 flex-col--md12">
         <div v-if="check_type[0].check" @click="openCoures('course_item', course.id_object)" class="course_item">
            <img :src="require(`@/components/PersonalAccount/templates/CoursesList/${images[course.id_object]}`)">
            <div class="course_title"></div>
            <div class="course_title_text">{{course.title_object}}</div>
         </div>
         <div v-if="check_type[1].check" @click="openCoures('course_item', course.id_object)" class="course_item">
            <img :src="require(`@/components/PersonalAccount/templates/CoursesList/${images[course.id_object]}`)">
            <div class="course_title"></div>
            <div class="course_title_text">{{course.title_object}}</div>
         </div>
      </div>
   </div>
</div>

</template>

<script>

import CourseImg from '@/components/PersonalAccount/templates/CoursesList/courseImages'

export default {
    name: "my-course-list",
   props: {
      courseList: {
         type: Array,
         required: true
      },
      type: {
         type: String
      }
   },
   watch: {
      type: function() {
         this.Type = this.type
      },
      courseList: function() {
         this.course_list = this.courseList
      }
   },
   data() {
      return {
         course_list: [],
         check_type: [
            {check: false},
            {check: false}
         ],
         Type: this.type,
         images: CourseImg
      }
   },
   methods: {
      openCoures(name, id) {
         this.$emit('openCourse', name, id)
      },
      checkType(number, type) {
         for (let i = 0; i<=1; i++) {
            if(i!= number) {
               this.check_type[i].check = false
            }else{
               this.check_type[i].check = true
            }
         }
         this.$emit('checkType', type)
      },
      setType() {
         if (this.Type=='ЕГЭ') {
            this.check_type[0].check = true
         }else {
            this.check_type[1].check = true
         }
      }
   },
   beforeMount() {
      this.setType();
   }
}
</script>


<style scoped>
.course_item {
   border-radius: 12px;
   cursor: pointer;
   transition: 0.3s;
   height: 200px;
   overflow: hidden;
   position: relative;
}

.course_item:hover {
   transform: scale(1.01);
}

.types {
   display: flex;
   margin-bottom: 10px;
}

.type {
   margin-right: 5px;
   cursor: pointer;
   padding: 7px;
   box-shadow: 0px 0px 5px grey;
   border-radius: 10px;
}

.type.active {
   
}

.course_title {
   position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 36px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    opacity: 0.2;
}

.course_title_text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 22;
   font-size: 30px;
   color: white;
}

.OGE {
   background-color: rgb(6, 252, 157);
}
.USE {
   background-color: rgb(141, 80, 255);
}
</style>