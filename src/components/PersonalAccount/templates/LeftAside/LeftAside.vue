<template>
 <div class="account_body" :class="{ 'wide': opened_AccountItem }">
   <div class="account_header flex-container">
      <div class="account_logo flex-col--3" :class="{ 'flex-col--4': opened_AccountItem }">
         <div class="account_img">
            <img :src="require(`@/components/PersonalAccount/resources/image/users/${photo}`)" alt="">
         </div>
      </div>
      <div class="account_name flex-col--6">
         <p class="user_name">{{name}}</p>
      </div>
      <div class="account_attr flex-col--3" :class="{ 'hide': opened_AccountItem }">
         <p @click="goMain">Главная</p>
      </div>
   </div>
   <div class="account_list flex-container flex-container-column flex-container-aling-center">
      <div @click="openAsideItem('news')" class="account_list_items">Новости</div>
      <div @click="openAsideItem('courses_list')" class="account_list_items">Мои курсы</div>
      <div @click="openAsideItem('sucesses_list')" class="account_list_items">Успехи</div>
      <div @click="openAsideItem('homework_list')" class="account_list_items">Домашнее задание</div>
   </div>
   <div @click="signOut" class="sign_out">Выйти</div>
 </div>
</template>

<script>

export default {
    name: "left-aside",
    props: {
      photo: {
         type: String,
         required: true
      },
      name: {
         type: String,
         required: true
      },
      openedAccountItem: {
         type: String,
         required: true
      }
    },
    watch: {
      openedAccountItem: function() {
         this.opened_AccountItem = this.openedAccountItem
      }
    },
    data() {
      return {
         opened_AccountItem: ''
      }
    },
    methods: {
      goMain() {
         this.$router.push('/');
      },
      signOut() {
         localStorage.clear()
         this.goMain()
      },
      openAsideItem(name) {
         this.$emit('openAsideItem', name)
      }
    }
}
</script>


<style scoped>
.account_body {
   overflow: hidden;
   position: absolute;
   left: 0;
   right: 0;
   width: 400px;
   height: 100vh;
   box-shadow: 2px 0px 15px gray;
   transition: 0.5s;
   z-index: 100;
}

.wide {
   width: 200px;
}

.hide {
   display: none;
}

.account_header {
   height: 80px;
   width: 100%;
   border-bottom: 1px solid grey;
   align-items: center;
   padding: 12px 12px;
}

.account_logo {
   height: 100%;
   align-items: center;
}

.account_img {
   width: 48px;
   height: 48px;
   border-radius: 50%;
   background-color: grey;
   overflow: hidden;
   display: flex;
}

.account_img>img {
   max-width: none;
}

.account_name .account_attr {
   height: 100%;
   align-items: center;
   display: flex;
}

.account_attr:hover {
   cursor: pointer;
}

.account_list {
   width: 100%;
   padding-top: 24px;
}

.account_list_items {
   width: 100%;
   padding: 12px 12px;
   transition: 0.3s;
}

.account_list_items:hover {
   position: relative;
   cursor: pointer;
   padding-left: 24px;
   background-color: pink;
   border-radius: 12px;
}

.user_name {
   word-break: break-word;
}

.sign_out {
   position: absolute;
   bottom:0;
   padding: 12px;
   cursor: pointer;
   width: 100%;
   transition: 0.3s ease;
}

.sign_out:hover {
   color: red;
   transition: 0.3s;
   font-size: 18px;
}
</style>
