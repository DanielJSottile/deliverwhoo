<template>
  <div v-if="cities.length" class="search">
    <h3>Searching within:</h3>
    <h2>{{ locations[0].title }}</h2>
    <div class="info">
      <Sort />
      <Distance />
      <Categories />
      <Establishments />
      <Cuisines />
    </div>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import Cuisines from "./Cuisines.vue";
import Distance from "./Distance.vue";
import Establishments from "./Establishments.vue";
import Sort from "./Sort.vue";
export default {
  name: "SearchSideBar",
  props: ["cities", "locations"],
  components: { Sort, Distance, Categories, Establishments, Cuisines }
};
</script>

<style scoped>
h3 {
  padding: 5px;
  margin: 5px;
}

.info {
  height: 1000px;
  overflow-x: hidden;
  overflow-y: auto;
}

.search {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 32px;
  width: 20%;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
