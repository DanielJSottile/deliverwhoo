<template>
  <div class="radius">
    <div class="radius-label">
      <h3>Distance:</h3>
      <button v-if="collapseRadius" @click="toggleRadiusCollapse">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button v-else @click="toggleRadiusCollapse">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <div v-if="collapseRadius" class="content">
      <select v-model="selectRadius">
        <option disabled value="">Please select one</option>
        <option>5 mi.</option>
        <option>10 mi.</option>
        <option>15 mi.</option>
        <option>20 mi.</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchSideBar",
  props: {},
  data: function() {
    return {
      selectRadius: "",
      collapseRadius: false
    };
  },
  methods: {
    toggleRadiusCollapse: function() {
      this.collapseRadius = !this.collapseRadius;
    }
  },
  components: {}
};
</script>

<style>

</style>
