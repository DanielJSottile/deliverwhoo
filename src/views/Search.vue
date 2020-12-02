<template>
  <div class="search-page">
    <div class="title">
      <h1>Here's where we figure it out</h1>
      <MainForm />
    </div>
  </div>
</template>

<script>
import MainForm from "../components/MainForm.vue";
export default {
  beforeCreate: function() {
    document.body.className = "search";
  },
  components: { MainForm }
};
</script>

<style scoped>
.search {
  background-color: white;
  height: 100%;
}
</style>
