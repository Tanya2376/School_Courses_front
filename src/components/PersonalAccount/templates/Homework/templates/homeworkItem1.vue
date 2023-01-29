<template>
  <div class="homework_item1"></div>
  <section class="articles_section_padding">
    <h1 class="pb-16">Секция по отправке домашнего задания</h1>
    <!-- <p class="articles_title pb-16">
      Из выведенных предметов, выберите нужный, скопируйте и вставьте в строку
      ниже
    </p> -->
    <!-- <div
      v-for="item in ListPredmetov"
      v-bind:key="item"
      class="flex-col flex-col--12"
    >
      <div id="v-model-multiple-checkboxes">
        <label>{{ item.title_object }}</label>
      </div> -->
    <!-- </div> -->
<!--     
    <p>
      <input type="text" v-model="title_object" class="mb-16 reg_input" />
    </p> -->
    <p class="articles_title pb-16">
    <select name="title_object" id="title_object" v-model="title_object">
  <option value="" >Выберете предмет</option>
  <option value="Информатика">Информатика</option>
  <option value="Математика">Математика</option>
  <option value="Русский язык">Русский язык</option>
  <option value="Обществознание">Обществознание</option>
    </select>
    </p>

    <!-- <p class="articles_title pb-16">
      Выберите тип [ОГЭ/ЕГЭ], которому будете задавать домашнее задание
    </p>
    <div id="v-model-multiple-checkboxes">
      <input type="text" v-model="type_task" class="mb-16 reg_input" />
    </div> -->

    <p class="articles_title pb-16">
    <select name="type_task" id="type_task" v-model="type_task">
  <option value="" >Выберете тип [ОГЭ/ЕГЭ]</option>
  <option value="ОГЭ">ОГЭ</option>
  <option value="ЕГЭ">ЕГЭ</option>

</select>
    </p>
    <br />
    <p class="articles_title pb-16">
      Выберите ученика, которому будете задавать домашнее задание, скопируйте и
      вставьте ниже логин
    </p>
    <br />
    <div
      v-for="item in ImenaPupil"
      v-bind:key="item"
      class="flex-col flex-col--12"
    >
      <div id="v-model-multiple-checkboxes">
        <label>{{ item.login }} ({{ item.family }} {{ item.name }})</label>
      </div>
    </div>
    <input type="text" v-model="login" class="mb-16 reg_input" />
    <p class="articles_title pb-16">Введите название домашнего задания</p>
    <input type="text" v-model="title" class="mb-16 reg_input" />

    <p class="articles_title pb-16">
      Выберите фотографию домашнего задания и загрузите
    </p>
    <div class="pb-16">
      Ваше фото
      <input type="file" id="file" name="file" />
    </div>
    <div class="loading">
      <my-button @click="goAway">Отправить дз ученикам</my-button>
    </div>
    <my-dialog v-model:show="show_dialog">
      <span class="red_msg">Дз отправлено!</span>
    </my-dialog>
    <br />
    <br />
  </section>
  <section class="articles_section_padding">
    <h1 class="pb-16">Секция со списком выполненных работ</h1>
    <div
      v-for="item in PupilAnswer"
      v-bind:key="item"
      class="flex-col flex-col--12"
    >
    <div class="flex-col flex-col--12">
        <p class="articles_title pb-16"> 
             Ученик:            
        <label>{{ item.login }} </label></p> 

            <p class="articles_title pb-16"> Задание:</p>
          <div class="test_task_img">
            <p>
              <img
                :src="
                  require(`@/components/PersonalAccount/resources/image/task/${item.task}`)
                "
                alt=""
              />
            </p>
          
        </div>
        
        <p class="articles_title pb-16"> 
        Ответ:
        <label>{{ item.answer_pupil }} </label>
        <br />
        Оценка:
        <label>{{ item.valuation }} </label></p>
      </div></div>
    
  </section>
  <br />
  <br />
  <section class="articles_section_padding">
    <h1 class="pb-16">Раздел оценивания результатов</h1>

    <p class="articles_title pb-16">
      Выберите логин ученика, кому будете выставлять оценку
    </p>

    <input type="text" v-model="login" class="mb-16 reg_input" />
    <p class="articles_title pb-16">
      Введите оценку за результат домашнего задания
    </p>

    <input type="text" v-model="valuation" class="mb-16 reg_input" />
    <div class="loading">
      <my-button @click="goOcenka">Отправить оценку ученикам</my-button>
    </div>
  </section>
</template>
<script>
import homework from "@/service/Homework/homework.js";
export default {
  name: "homework-item1",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      answerItem: {},
      ImenaPupil: [],
      login: "",
      ListPredmetov: [],
      title_object: "",
      type_task: "",
      testAnswers: [],
      users_params: {},
      title: "",
      task: "",
      PupilAnswer: [],
      valuation: "",
      show_dialog: false,
      params: {
        login: localStorage.login,
        type_task: this.type,
      },
      paramsObj: {
        login: localStorage.login,
        type_task: this.type,
      },
    };
  },
  methods: {
    name() {
      homework.getNameFamilyPUPIL(this.params).then((res) => {
        this.ImenaPupil = res.data;
        console.log(this.ImenaPupil);
      });
    },
    object() {
      homework.getObject().then((res) => {
        this.ListPredmetov = res.data;
        console.log(this.ListPredmetov);
      });
    },
    answerPupil() {
      homework.getAllHomework(this.params).then((res) => {
        this.PupilAnswer = res.data;
        console.log(this.PupilAnswer);
      });
    },
    goAway() {
      var formData = new FormData();
      var imagefile = document.querySelector("#file");
      formData.append("image", imagefile.files[0]);

      this.users_params = {
        login: this.login,
        title: this.title,
        type_task: this.type_task,
        title_object: this.title_object,
        task: imagefile.files[0].name,
      };

      homework.loadPhotoTask(formData).then(() => {
        homework.insertTeacherHome(this.users_params).then((res) => {
          console.log(res.data);
          this.show_dialog = true;
        });
      });
    },
    goOcenka() {
      this.ocenka_params = {
        valuation: this.valuation,
        login: this.login,
      };
      homework.insertOcenkaPupils(this.ocenka_params).then((res) => {
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.name(), this.object(), this.answerPupil();
  },
};
</script>

<style scoped>
.reg_input {
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid gray;
  width: 100%;
}

.test_task_img {
  width: 248px;
  height: 248px;

  overflow: hidden;
  display: flex;
}
</style>
