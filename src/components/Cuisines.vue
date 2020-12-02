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
              v-model="checkedCuisines"
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
