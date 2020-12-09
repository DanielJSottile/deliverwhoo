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
              @input="updateEstablishments"
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

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Establishments",
  data: function() {
    return {
      collapseEstablishments: false,
      checkedToggleEstablishments: true
    };
  },
  computed: mapState({
    establishments: state => state.zomato.establishments,
    checkedEstablishments: state => state.searchparams.checkedEstablishments
  }),
  methods: {
    ...mapActions("zomato", ["getEstablishments"]),
    ...mapActions("searchparams", ["updateCheckedEstablishment"]),
    updateEstablishments: function(e) {
      this.$store.dispatch("searchparams/updateCheckedEstablishment", e.target);
    },
    selectAllEst: function() {
      const allIds = this.establishments.map(establishment => {
        return establishment.establishment.id;
      });
      this.checkedEstablishments = allIds;
      this.checkedToggleEstablishments = !this.checkedToggleEstablishments;
    },
    selectNoneEst: function() {
      this.checkedEstablishments = [];
      this.checkedToggleEstablishments = !this.checkedToggleEstablishments;
    },
    toggleEstablishmentCollapse: function() {
      this.collapseEstablishments = !this.collapseEstablishments;
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

.establishments {
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}

.establishment-list {
  text-align: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.list-item {
  display: flex;
  flex-direction: row;
}

.establishments-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}
</style>
