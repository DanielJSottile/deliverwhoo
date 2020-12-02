<template>
  <div class="home">
    <div class="title">
      <h1>Figuring out who the f*ck can actually deliver to you</h1>
    </div>
    <HomeComp />
  </div>
</template>

<script>
import HomeComp from "../components/HomeComp";
export default {
  name: "Home",
  beforeCreate: function() {
    document.body.className = "home";
  },
  components: { HomeComp }
};
</script>

<style scoped>
a {
  color: orange;
}
.title {
  margin: 0;
  padding: 0;
}
</style>
