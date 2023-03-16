<template>
 
 <div class="flex-container">
    
<div class="comments_wrpper">
   <h2 class="pb-16">Рейтинг пользователей</h2>
      <div class="flex-container flex-container-column">
         <div v-for="item in Reitings" v-bind:key="item" class="flex-col">
            <div class="message flex-container ">
               <div class="message_image">
                  <img :src="require(`@/components/PersonalAccount/resources/image/users/${item.photo}`)" alt=""/>
               </div> 
               {{ item.family }}
                {{ item.name }}
               
               <div class="message_text_login">
                  <p class="msg-text">
                     Количество набранных баллов:
                     {{ item.total_qnt }}
                  </p>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="flex-col flex-col--4 flex-col--xm12 news_wrapper">
                  <h3 class="pb-16">Новости</h3>
                  <div class="scroll_wrapper">
                     <div class="flex-container">
                        <div v-for="item in newsList" v-bind:key="item.id" class="flex-col flex-col--12">
                           <a class="news_item" :href="item.link" target="_blank">
                              {{item.title}}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
</div>
 
</template>
<script>
import news from '@/components/PersonalAccount/templates/News/newsItems'
import reiting from '@/service/Reiting/reiting.js';
export default {
    name: "my-course",
   
   data() {
      return {
         newsList: news,
         Reitings:[],
         
      }
   },
   beforeMount() {
    reiting.Reiting().then((res)=>{
        this.Reitings = res.data
        console.log(res.data);
      })
    }}
   


</script>
<style scoped>


.course_title {
   font-size: 50px;
}

.adv_title {
   font-size: 20px;
}

.adv_item {
   border-radius: 12px;
   box-shadow: 0px 0px 5px grey;
   height: 100%;
   padding: 16px 16px;
}
.news_item {
   display: block;
   background-color: rgba(169, 169, 169, 0.2);
   width: 100%;
   border-radius: 12px;
   padding: 12px;
   word-break: break-word;
   color: inherit;
}

.news_wrapper {
   padding-top: 25px;
}

.scroll_wrapper {
   overflow: hidden;
   overflow-y: scroll;
   height: 600px;
}
.adv_item:hover {
   box-shadow: 0px 0px 5px rgb(253, 0, 253);
   transition: 0.3;
   cursor: pointer;
}

.adv_desc {
   word-break: break-word;
}

.help_title {
   font-size: 40px;
}

.help_item {
   border-radius: 12px;
   box-shadow: 0px 0px 5px grey;
   height: 100%;
   padding: 16px 16px;
   align-items: center;
   justify-content: space-between;
}

.help_img {
   width: 60%;
   margin-bottom: 12px;
}

.help_item_title {
   font-size: 20px;
}

.help_desc {
   font-size: 18px;
   word-break: break-word;
}

.message_image {
   width: 45px;
   height: 45px;
   border-radius: 50%;
   overflow: hidden;
}

.message_text {
   margin-left: 10px;
   border-radius: 25px;
   background-color: #cbcecf;
   padding: 10px 15px;
   display: flex;
   flex-direction: column;
}

.message_text_login {
   margin-left: 10px;
   border-radius: 25px;
   background-color: #d1f3ff;
   padding: 10px 15px;
   display: flex;
   flex-direction: column;
}

.msg_time {
   font-size: 12px;
   text-align: end;
}

.comment_input {
  padding: 12px 16px;
   border-radius: 12px;
   border: 1px solid gray;
   width: 100%;
}

.comment_input:hover {
  border: 1px solid deeppink;
}

.comments_wrpper {
   max-height: 500px;
   overflow: hidden;
   overflow-y: scroll;
   width: 1000px;
   padding-top: 25px;
}
</style>