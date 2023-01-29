<template>
   <Header/>
   <main class="articles_main container">
      <div class="articles_content">
         <h1 class="articles_title pb-16">Все Статьи</h1>
         <div class="flex-container">
            <div v-for="item in ArticlesList" v-bind:key="item.id" class="flex-col flex-col--4">
               <a class="articles_item" :href="item.path">
                  <h2 class="title">{{ item.title }}</h2>
                  <br>
                  {{ item.description }}
               </a>
            </div>
         </div>
      </div>
   </main>
   <Footer/>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import articlesList from '@/components/Articles/config'

export default {
   name: "my-articles",
   components: {
      Header, Footer
   },
   data() {
      return {
         ArticlesList: articlesList
      }
   }

}
</script>


<style scoped>
.articles_main {
   padding-top: 110px;
   height: 100vh;
}

.articles_content {
   padding-top: 64px;
}

.articles_title {
   font-size: 20px;
}

.articles_item {
   display: block;
   background-color: rgb(236, 236, 236);
   padding: 12px;
   color: black;
   border-radius: 12px;
   height: 100%;
}

.title {
   font-size: 25px;
}
</style>