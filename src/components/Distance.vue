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
      <select @input="updateDistance">
        <option value="">Please select one</option>
        <option>5 mi.</option>
        <option>10 mi.</option>
        <option>15 mi.</option>
        <option>20 mi.</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Distance",
  props: {},
  data: function() {
    return {
      collapseRadius: false
    };
  },
  computed: mapState({
    selectRadius: state => state.searchparams.selectRadius
  }),
  methods: {
    ...mapActions("searchparams", ["updateDistanceValue"]),
    updateDistance: function(e) {
      this.$store.dispatch("searchparams/updateDistanceValue", e.target);
    },
    toggleRadiusCollapse: function() {
      this.collapseRadius = !this.collapseRadius;
    }
  },
  components: {}
};
</script>

<style scoped>
button {
  color: white;
  border: none;
  border-radius: 4px;
  background-color: #00ccbc;
  min-height: 36px;
  margin: 5px;
  padding: 12px 24px;
}
button:hover {
  background-color: #00a396;
  transition: 0.3s;
  cursor: pointer;
}
h3 {
  padding: 5px;
  margin: 5px;
}
.radius {
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}

input {
  all: revert;
}

.radius-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
