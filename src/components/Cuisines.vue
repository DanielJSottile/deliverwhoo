<template>
  <div class="cuisines">
    <!--Make a component -->
    <div class="cuisine-label">
      <h3>Cuisines:</h3>
      <button v-if="collapseCuisines" @click="toggleCuisineCollapse">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button v-else @click="toggleCuisineCollapse">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <div v-if="collapseCuisines" class="content">
      <button v-if="checkedToggle" @click="selectAll">
        <i class="fas fa-check-square"></i> Select All
      </button>
      <button v-else @click="selectNone">
        <i class="fas fa-times"></i> Select None
      </button>
      <div class="cuisine-list">
        <!--Make a component -->
        <template v-for="(cuisine, index) in cuisines">
          <div class="list-item" v-bind:key="index">
            <input
              class="checkbox"
              type="checkbox"
              v-bind:id="cuisine.cuisine.cuisine_id"
              v-bind:value="cuisine.cuisine.cuisine_id"
              @input="updateCuisines"
            />
            <label v-bind:for="cuisine.cuisine.cuisine_id">{{
              cuisine.cuisine.cuisine_name
            }}</label>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Cuisines",
  data: function() {
    return {
      collapseCuisines: false,
      checkedToggle: true
    };
  },
  computed: mapState({
    cuisines: state => state.zomato.cuisines,
    checkedCuisines: state => state.searchparams.checkedCuisines
  }),
  methods: {
    ...mapActions("zomato", ["getCuisines"]),
    ...mapActions("searchparams", ["updateCheckedCuisine"]),
    updateCuisine: function(e) {
      this.$store.dispatch("searchparams/updateCheckedCuisine", e.target);
    },
    selectAll: function() {
      const allIds = this.cuisines.map(cuisine => {
        return cuisine.cuisine.cuisine_id;
      });
      this.checkedCuisines = allIds;
      this.checkedToggle = !this.checkedToggle;
    },
    selectNone: function() {
      this.checkedCuisines = [];
      this.checkedToggle = !this.checkedToggle;
    },
    toggleCuisineCollapse: function() {
      this.collapseCuisines = !this.collapseCuisines;
    }
  }
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
input {
  all: revert;
}
.cuisines {
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}
.cuisine-list {
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.list-item {
  display: flex;
  flex-direction: row;
}

.checkbox:checked {
  background-color: #00a396;
}

.cuisine-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
