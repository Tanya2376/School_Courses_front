<template>
   <div class="flex-container flex-container-column flex-container-space article_main flex-container-nowrpap">
      <Header/>
         <div class="article_container container">
            <div class="flex-container">
               <div class="flex-col flex-col--8 flex-col--xm12">
                  <router-view></router-view>
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
         </div>
      <Footer/>
   </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import news from '@/components/PersonalAccount/templates/News/newsItems'
import config from "@/components/Articles/config"

export default {
   name: "default-article",
   components: {
      Header, Footer
   },
   data() {
      return {
         newsList: news,
         metaData: config
      }
   },
   beforeMount() {
      var addr = new URL(document.location)
      this.metaData.forEach((item) => {
         if(item.path === addr.pathname) {
            document.querySelector('meta[name="title"]').setAttribute("content", item.seo.title)
            document.querySelector('meta[name="description"]').setAttribute("content", item.seo.description)
            document.title = item.seo.title
         }
      })
   }
}
</script>

<style>
h1 {
   font-size: 36px;
   word-break: break-word;
}

h2 {
   font-size: 32px;
   word-break: break-word;
}

h3 {
   font-size: 24px;
   word-break: break-word;
}

p {
   font-size: 18px;
   word-break: break-word;
   line-height: 25px;
}

li {
   word-break: break-word;
   line-height: 25px;
}

li.articles_li {
   font-size: 18px;
}

ul.articles_ul {
   list-style: none;
   padding-left: 16px;
}

ul li.articles_li:before {
    content:  "—";
    position: relative;
    left: -5px;
}


.articles_section_padding {
   padding-bottom: 32px;
}

.breadcumps_link {
   color: #587ab0;
}
.article_container {
   padding-top: 150px;
}

.article_main {
   height: 100vh;
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
</style>