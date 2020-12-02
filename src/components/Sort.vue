<template>
  <div clas="sort">
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
        <input type="radio" id="cost" value="cost" v-model="sortValue" />
        <label for="cost">Cost</label>
      </div>
      <div>
        <input type="radio" id="rating" value="rating" v-model="sortValue" />
        <label for="rating">Rating</label>
      </div>
      <div>
        <input
          type="radio"
          id="real_distance"
          value="real_distance"
          v-model="sortValue"
        />
        <label for="real_distance">Distance</label>
      </div>
    </div>
  </div>
</template>
