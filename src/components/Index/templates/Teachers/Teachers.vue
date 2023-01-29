<template>
  <div class="teachers_prepods">
    <div class="teachers_prepods_body flex-container-space flex-container-nowrpap">
      <div v-bind:key="item.id" v-for="item in items" class="flex-col pt-15">
        <div class="teachers-item">
          <img class="teachers-item-img image" :src="require(`@/components/Index/templates/Teachers/resources/${item.img}`)" alt=""/>
         
          <div class="teachers-item-name">
            <h3>{{item.name}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "@/components/Index/templates/Teachers/resources/items";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teachers",
  data() {
    return {
      items: items
    }
  }
}
</script>

<style scoped>
  @import "Teachers.css";
</style>