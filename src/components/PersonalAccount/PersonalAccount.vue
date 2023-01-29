<template>
  <div>
    <LeftAsideVue
      @openAsideItem = openAsideItem
      :openedAccountItem = openedAccountItem
      :photo = user_photo
      :name = user_name
    />
    <AccountContent
      :courseList = courseList
      :type = typeList
      @change_type = change_type
      @openAccountItem = openAccountItem
      :showedAccountitem = showedAccountitem
      :openedAccountItem = openedAccountItem
    />
    <FeedbackVue
      @click="openDialog"
    />
    <my-dialog
      v-model:show="dialogVisible"
    >
      <feedbackDialog></feedbackDialog>
    </my-dialog>
  </div>
</template>

<script>
import LeftAsideVue from './templates/LeftAside/LeftAside.vue';
import AccountContent from '@/components/PersonalAccount/templates/AccountContent/AcoountContent.vue'
import FeedbackVue from '@/components/PersonalAccount/templates/Feedback.vue';
import MyDialog from '../Common/MyDialog.vue';
import feedbackDialog from '@/components/PersonalAccount/templates/feedbackDialog.vue'

//подрубаем данные с бэка
import Users from '@/service/UserSignUp/signUp'
import Objects from '@/service/Objects/getObjects.js';

export default {
  name: "PersonalAccount",
  components: {
    LeftAsideVue,AccountContent,FeedbackVue,
    MyDialog, feedbackDialog
  },
  data() {
    return {
      showedAccountitem: 'news',
      openedAccountItem: '',
      courseList: [],
      typeList: 'ЕГЭ',
      dialogVisible: false,
      log: {
        login: ''
      },
      user_name: '',
      user_photo: ''
    }
  }, 
  methods: {
    openAsideItem(name) {
      this.change_type(this.typeList)
      this.showedAccountitem = name
      this.openedAccountItem = ''
    },
    openAccountItem(name) {
      this.openedAccountItem = name
      this.showedAccountitem = ''
    },
    openDialog() {
      this.dialogVisible = true;
    },
    change_type(type) {
      if(type==='ЕГЭ') {
        Objects.getUSE().then((res)=>{
          this.courseList = res.data
        })
      }
      if(type==='ОГЭ') {
        Objects.getOGE().then((res)=>{
          this.courseList =  res.data
        })
      }
      this.typeList = type
    },
  },
  beforeMount() {
    this.log.login = localStorage.login
    Users.getUser(this.log.login).then((res)=>{
       console.log(res.data);
      if(res.data) {
        this.user_name = res.data[0].name + ' ' + res.data[0].family
        this.user_photo = res.data[0].photo
       
      }
    })
  }
}
</script>

<style scoped>
  @import "PersonalAccount.css";
  body{
    overflow-y: hidden;
  }
</style>