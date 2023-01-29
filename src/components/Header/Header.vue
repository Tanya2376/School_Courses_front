<template>
  <header>
    <div class="header_body">
      <div class="container">
        <div class="flex-container flex-container-space flex-container-aling-center">
          <div class="flex-col--1 flex-container flex-container-center flex-container-aling-center">
            <a href="/"><div class="header_logo"></div></a>
          </div>
          <div class="flex-col--8">
            <div class="header_menu flex-container flex-container-space">
              <div class="header_menu-item">
                <a class="header_menu-item-link" href="/#programs">Программы обучения</a>
              </div>
              <div class="header_menu-item">
                <a class="header_menu-item-link" href="/#courses">Курсы</a>
              </div>
              <div class="header_menu-item">
                <a class="header_menu-item-link" href="/#teachers">Преподаватели</a>
              </div>
              <div class="header_menu-item">
                <a class="header_menu-item-link" href="/#reviews">Отзывы</a>
              </div>
              <div class="header_menu-item">
                <a class="header_menu-item-link" href="/articles">Статьи</a>
              </div>
            </div>
          </div>
          <div class="flex-col--2">
            <div v-if="auth" @click="signOut" class="header_sing_up">Личный кабинет</div>
            <div v-else @click="showSignUpMenu" class="header_sing_up">Войти</div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <my-dialog v-model:show="dialogVisible">
      <SignUpMenu v-if="dialogVisible"></SignUpMenu>
  </my-dialog>
</template>

<script>
import SignUpMenu from './templates/SignUpMenu.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {
    SignUpMenu
  },
  data(){
    return {
      dialogVisible: false,
      auth: false
    }
  },
  methods: {
    showSignUpMenu() {
      this.dialogVisible = true;
    },
    signOut() {
      this.$router.push('/personal_account')
    }
  },
  beforeMount() {
    if(localStorage.login) {
      this.auth = true
    }
  }
}
</script>

<style scoped>
 @import "header.css";
</style>