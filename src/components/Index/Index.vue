<template>
<Header></Header>
  <main style="padding-top: 74px; padding-bottom: 50px;">
    <section class="border_bottom section-mb56">
      <div class="banner">
        <div class="banner_title"><h1>ОНЛАЙН ШКОЛА</h1></div>
      </div>
      <div id="programs" class="anchor_heading"></div>
    </section>
    <section class="section-mb56 border_bottom">
      <div class="container">
        <h2 class="h2 pb-32">УЧЁБА ДЛЯ ПОДГОТОВКИ К ОГЭ<br>И ЕГЭ</h2>
        <div class="flex-container study_items">
          <div class="flex-col flex-col--12">
            <div class="study_item study-item-subject-preschool">
              <h3 class="h3 pb-16">ТЕСТИРОВАНИЕ</h3>
              <div class="study-item-subject flex-container">
                <div class="study-item-subject-item flex-col">
                  <a href="">Все предметы ОГЭ</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">Все предметы ЕГЭ</a>
                </div>
             
              </div>
            </div>
          </div>
         
          <div class="flex-col flex-col--12">
            <div class="study_item study-item-subject_5-9">
              <h3 class="h3 pb-16">5-9 классы</h3>
              <div class="study-item-subject flex-container">
                <div class="study-item-subject-item flex-col">
                  <a href="">ОГЭ по информатике</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ОГЭ по математике</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ОГЭ по русскому языку</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ОГЭ по обществознанию</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ОГЭ по биологии</a>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col flex-col--12">
            <div class="study_item study-item-subject_10-11">
              <h3 class="h3 pb-16">10-11 классы</h3>
              <div class="study-item-subject flex-container">
                <div class="study-item-subject-item flex-col">
                  <a href="">ЕГЭ по обществознанию</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ЕГЭ по математике</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ЕГЭ по информатике</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ЕГЭ по русскому языку</a>
                </div>
                <div class="study-item-subject-item flex-col">
                  <a href="">ЕГЭ по биологии</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="courses" class="anchor_heading"></div>
    <section class="section_courses section-mb56 pt-56 pb-56">
      <div class="container">
        <div class="courses">
          <h2 class="h2 pb-32">НАШИ КУРСЫ</h2>
          <div class="flex-container">
              <CourseBlock v-bind:key="course" v-for="course in courses" v-bind:course="course"></CourseBlock>
          </div>
        </div>
      </div>
    </section>
    <div id="teachers" class="anchor_heading"></div>
    <section class="section-teachers section-mb56 border_bottom">
      <div class="container">
        <div class="teachers">
          <h2 class="h2 pb-32">У НАС ПРЕПОДАЮТ<br>ЛУЧШИЕ СПЕЦИАЛИСТЫ</h2>
            <Teachers></Teachers>
        </div>
      </div>
    </section>
    <div id="reviews" class="anchor_heading"></div>
    <section class="section-mb56 section_reviews" v-if="students.length>0">
      <div class="container">
        <div class="reviews">
            <h2 class="h2 pb-32">ОТЗЫВЫ</h2>
            <div class="flex-container">
                <div class="flex-col flex-col--3 flex-col--xm3">
                  <div class="review_img image">
                    <img :src="require(`@/components/PersonalAccount/resources/image/users/${students[counter]?.photo}`)" alt="">
                  </div>
                </div>
                <div class="flex-col flex-col--8 flex-col--xm9">
                  <div class="review_text">
                    <h3 class="h3 pb-16">{{students[counter].name}}</h3>
                    <p>
                      {{students[counter].text_reviews}}
                    </p>
                  </div>
                </div>
                <div class="arrow_slider flex-col flex-col--1 flex-col--xm12">
                  <div @click="leftClick" class="arrow_field ">
                    <div class="arrow left"></div>
                  </div>
                  <div @click="rightClick" class="arrow_field">
                    <div class="arrow right"></div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  </main>
<Footer></Footer>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CourseBlock from "@/components/Index/templates/CourseBlock/CourseBlock";
import courses from "@/components/Index/templates/CourseBlock/items";
import Teachers from "@/components/Index/templates/Teachers/Teachers";
import Feedback from '@/service/Feedback/Feedbacks.js';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    Header, Footer, CourseBlock, Teachers
  },
  data() {
    return {
      courses: courses,
      counter: 0,
      students: []
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
  beforeMount() {
    Feedback.getFeedbacks().then((res)=>{
      this.students = res.data
    })
  }
}
</script>

<style scoped>
 @import "index.css";
  .review_img {
    border-radius: 15px;
    overflow: hidden;
    transition: 0.5s;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .review_img>img {
    border-radius: 15px;
  }

  @media (max-width: 800px) {
    .review_img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .review_text {
      padding: 15px;
  }

  .arrow_slider {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
  }

  .arrow {
    background: url('@/components/Index/resources/images/arrow.png');
    background-size: contain;
    width: 24px;
    height: 24px;
  }

  .arrow_field {
    width: 38px;
    height: 38px;
  }
  .arrow.left {
    transform: rotate(180deg);
  }
</style>