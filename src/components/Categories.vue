<template>
  <div class="categories">
    <!--Make a component -->
    <div class="categories-label">
      <h3>Categories:</h3>
      <button v-if="collapseCategories" @click="toggleCategoryCollapse">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button v-else @click="toggleCategoryCollapse">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <div v-if="collapseCategories" class="content">
      <button v-if="checkedToggleCategories" @click="selectAllCat">
        <i class="fas fa-check-square"></i> Select All
      </button>
      <button v-else @click="selectNoneCat">
        <i class="fas fa-times"></i> Select None
      </button>
      <div class="category-list">
        <!--Make a component -->
        <template v-for="(category, index) in categories">
          <div class="list-item" v-bind:key="index">
            <input
              class="checkbox"
              type="checkbox"
              v-bind:id="category.categories.id"
              v-bind:value="category.categories.id"
              @input="updateCategories"
            />
            <label v-bind:for="category.categories.id">{{
              category.categories.name
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
  name: "Categories",
  data: function() {
    return {
      collapseCategories: false,
      checkedToggleCategories: true
    };
  },
  computed: mapState({
    categories: state => state.zomato.categories,
    checkedCategories: state => state.searchparams.checkedCategories
  }),
  methods: {
    ...mapActions("zomato", ["getCategories"]),
    ...mapActions("searchparams", ["updateCheckedCategory"]),
    updateCategories: function(e) {
      this.$store.dispatch("searchparams/updateCheckedCategory", e.target);
    },
    toggleCategoryCollapse: function() {
      this.collapseCategories = !this.collapseCategories;
    },
    selectAllCat: function() {
      const allIds = this.categories.map(category => {
        return category.categories.id;
      });
      this.checkedCategories = allIds;
      this.checkedToggleCategories = !this.checkedToggleCategories;
    },
    selectNoneCat: function() {
      this.checkedCategories = [];
      this.checkedToggleCategories = !this.checkedToggleCategories;
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

.categories {
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}
.category-list {
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

.categories-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
