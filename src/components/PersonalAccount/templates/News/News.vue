<template>
   <div class="news">
      <div class="flex-container">
         <div v-for="(item, index) in News" v-bind:key="index" class="flex-col flex-col--6 flex-col--xm12">
            <a :href="item.link" target="_blank" rel="noopener" class="news_link">
               <div class="news_item">
                  <h4 class="news_title">{{item.title}}</h4>
                  <br/>
                  {{item.desc}}
               </div>
            </a>
         </div>
      </div>
   </div>

</template>

<script>
import news from '@/components/PersonalAccount/templates/News/newsItems'

export default {
   name: "my-news",
   data() {
      return {
         News: news
      }
   }
}
</script>


<style scoped>
.news_item {
   padding: 12px;
   height: 100%;
   box-shadow: 0px 0px 5px grey;
   word-break: break-word;
   transition: 0.3s;
}

.news_item:hover {
   border-radius: 12px;
   transition: 0.3s;
   transform: scale(1.02);
}

.news_title {
   font-weight: bold;
}

.news_link {
   cursor: pointer;
   color: inherit
}
</style>