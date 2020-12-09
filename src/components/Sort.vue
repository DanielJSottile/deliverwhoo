<template>
  <div class="sort">
    <!--Make a component -->
    <div class="sort-label">
      <h3>Sort by:</h3>
      <button v-if="collapseSort" @click="toggleSortCollapse">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button v-else @click="toggleSortCollapse">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <div v-if="collapseSort" class="content">
      <div>
        <input type="radio" id="cost" value="cost" @input="updateSort" />
        <label for="cost">Cost</label>
      </div>
      <div>
        <input type="radio" id="rating" value="rating" @input="updateSort" />
        <label for="rating">Rating</label>
      </div>
      <div>
        <input
          type="radio"
          id="real_distance"
          value="real_distance"
          @input="updateSort"
        />
        <label for="real_distance">Distance</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Sort",
  props: {},
  data: function() {
    return {
      collapseSort: false
    };
  },
  computed: mapState({
    sortValue: state => state.searchparams.sortValue
  }),
  methods: {
    ...mapActions("searchparams", ["updateSortValue"]),
    updateSort: function(e) {
      this.$store.dispatch("searchparams/updateSortValue", e.target);
    },
    toggleSortCollapse: function() {
      this.collapseSort = !this.collapseSort;
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

.sort {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}

.sort-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
