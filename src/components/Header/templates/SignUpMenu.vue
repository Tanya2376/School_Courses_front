<template>
  <div v-if="show_reg" class="signUpMenu flex-container flex-container-column flex-container-space">
    <h4 class="sigh_up_title pb-16">Регистрация</h4>
      <div class="pb-16">Логин <div v-if="reg_err" class="login_error">Логин уже существует</div></div>
     
      <input class="mb-16 reg_input" v-model="login" type="text">
      <div class="pb-16">Пароль</div>
      <input class="mb-16 reg_input" v-model="pass" type="password">
      <div class="pb-16">Имя</div>
      <input type="text" v-model="name" class="mb-16 reg_input">
      <div class="pb-16">Фамилия</div>
      <input type="text" v-model="family" class="mb-16 reg_input">
      <div class="pb-16">Отчество</div>
      <input type="text" v-model="last_name" class="mb-16 reg_input">
      <div class="pb-16">Email</div>
      <input type="email" v-model="mail" class="mb-16 reg_input">
      <div class="pb-16">Телефон</div>
      <input type="tel" v-model="telephone" class="mb-16 reg_input">
      <div class="pb-16">Ваше фото</div>
      <input type="file" id="file" name="file"/>
      <div v-if="empty_err" class="pb-16 login_error">Поля не заполнены!</div>
      <my-button @click="reg_user">Зарегестрироваться</my-button>
  </div>
  <div v-else class="signUpMenu flex-container flex-container-column flex-container-space flex-container-aling-center">
    <h4 class="sigh_up_title pb-16">Авторизация</h4>
    <input type="text" v-model="login" class="mb-16 reg_input">
    <input type="password" v-model="pass" class="mb-16 reg_input">
    <div v-if="showError" class="err_msg pb-16">Неверный логин или пароль</div>
    <my-button @click="sign_up" class="sign_up_input mb-16">Войти</my-button>
    <div @click="open_reg" class="registration">Зарегистрироваться</div>
    <div v-if="regCheck" class="success">Вы успешно зарегестрированы, можете войти!</div>
  </div>
</template>

<script>
import Users from '@/service/UserSignUp/signUp'
import {body} from "@/main";
import MyButton from '@/components/Common/MyButton.vue';

export default {
  components: { MyButton },
  name: "SignUpMenu",
  data() {
    return {
      users_params: {},
      login: '',
      name: '',
      family: '',
      last_name: '',
      mail: '',
      telephone: '',
      photo: '',
      pass: '',
      showError: false,
      show_reg: false,
      reg_err: false,
      empty_err: false,
      regCheck: false
    }
  },
  methods: {
    reg_user() {
      var formData = new FormData();
      var imagefile = document.querySelector('#file');
      formData.append("image", imagefile.files[0]);

      this.users_params = {
        login: this.login,
        name: this.name,
        family: this.family,
        last_name: this.last_name,
        mail: this.mail,
        telephone: this.telephone,
        photo: imagefile.files[0].name,
        password: this.pass
      }

      Users.checkUser(this.users_params).then((res)=>{
        if(res.data === false) {
          Users.loadPhotoUser(formData).then(()=>{
            Users.insertUser(this.users_params).then(()=> {
              localStorage.setItem('login', this.login)
              this.show_reg = false
              this.regCheck = true
              body[0].classList.remove("lock");
            })
            })
        }else{
          this.login = ''
          this.pass = ''
          this.reg_err = true
        }
      })
    },
    sign_up() {
      var users_params = {
        login: this.login,
        password: this.pass
      }
      
      Users.sign_up(users_params).then((res)=>{
        if(res.data === 1){
          localStorage.setItem('login', this.login)
          this.$router.push('/personal_account')
          body[0].classList.remove("lock");
        }else{
          this.login = ''
          this.pass = ''
          this.showError = true
        }
      })
    },
    open_reg() {
      this.show_reg = true
    }
  }
}
</script>

<style scoped>
.sigh_up_title {
  font-size: 20px;
  text-align: center;
}

.signUpMenu {
  min-width: 500px;
}

.sign_up_input {
  width: 100%;
}

.sigh_up_link {
  font-size: 16px;
}

sign_up_input:focus::-webkit-input-placeholder {
  color: transparent
}

sign_up_input:focus::-moz-placeholder {
  color: transparent
}

sign_up_input:focus:-moz-placeholder {
  color: transparent
}

sign_up_input:focus:-ms-input-placeholder {
  color: transparent
}

.err_msg, .login_error {
  color: red;
}

.registration {
  cursor: pointer;
  transition: 0.3s;
}

.registration:hover {
  letter-spacing: 2px;
}

.reg_input {
  padding: 12px 16px;
   border-radius: 12px;
   border: 1px solid gray;
   width: 100%;
}

.reg_input:hover {
  border: 1px solid deeppink;
}

.success {
  color: rgb(0, 255, 21);
}
</style>