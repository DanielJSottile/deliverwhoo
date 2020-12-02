<template>
  <div v-if="cities.length" class="search">
    <!--Make a component -->
    <h3>Searching within:</h3>
    <h2>{{ locations[0].title }}</h2>
    <div class="break" />
    <div class="info">
      <Sort />
      <div class="break" />
      <Distance />
      <div class="break" />
      <Categories />
      <div class="break" />
      <Establishments />
      <div class="break" />
      <Cuisines />
    </div>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import Cuisines from "./Categories.vue";
import Distance from "./Distance.vue";
import Establishments from "./Establishments.vue";
import Sort from "./Sort.vue";
export default {
  name: "SearchSideBar",
  props: ["cities", "locations"],
  components: { Sort, Distance, Categories, Establishments, Cuisines }
};
</script>
