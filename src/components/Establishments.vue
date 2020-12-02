<template>
  <div class="establishments">
    <!--Make a component -->
    <div class="establishments-label">
      <h3>Establishments:</h3>
      <button
        v-if="collapseEstablishments"
        @click="toggleEstablishmentCollapse"
      >
        <i class="fas fa-chevron-up"></i>
      </button>
      <button v-else @click="toggleEstablishmentCollapse">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
    <div v-if="collapseEstablishments" class="content">
      <button v-if="checkedToggleEstablishments" @click="selectAllEst">
        <i class="fas fa-check-square"></i> Select All
      </button>
      <button v-else @click="selectNoneEst">
        <i class="fas fa-times"></i> Select None
      </button>
      <div class="establishment-list">
        <!--Make a component -->
        <template v-for="(establishment, index) in establishments">
          <div class="list-item" v-bind:key="index">
            <input
              class="checkbox"
              type="checkbox"
              v-bind:id="establishment.establishment.id"
              v-bind:value="establishment.establishment.id"
              v-model="checkedEstablishments"
            />
            <label v-bind:for="establishment.establishment.id">{{
              establishment.establishment.name
            }}</label>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
