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
              v-model="checkedCategories"
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
