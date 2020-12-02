<template>
  <div class="enter-city">
    <div class="enter-area">
      <label>Enter your city to start finding restaurants that deliver!</label>
      <div>
        <input v-model="cityValue" placeholder="e.g. San Francisco, CA" />
        <button @click="getLocation">
          <i class="fas fa-location-arrow"></i>
        </button>
        <button @click="sendInfoToPage">
          <i class="fas fa-search-location"></i> Search
        </button>
      </div>
      <p v-if="geoLocation.lat && geoLocation.lng">Coordinates Saved!</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "EnterCity",
  props: {},
  data: function() {
    return {
      cityValue: ""
    };
  },
  computed: mapState({
    cities: state => state.zomato.cities,
    city: state => state.zomato.city,
    geoLocation: state => state.zomato.geoLocation,
    collections: state => state.zomato.collections,
    cuisines: state => state.zomato.cuisines,
    establishments: state => state.zomato.establishments,
    locations: state => state.zomato.locations
  }),
  methods: {
    ...mapActions("zomato", [
      "getCurrentLocations",
      "getPossibleCities",
      "getCurrentCity",
      "getGeoLocation",
      "getCollections",
      "getCuisines",
      "getEstablishments"
    ]),
    getLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },
    getPosition: function(position) {
      this.$store.dispatch("zomato/getGeoLocation", position.coords);
    },
    sendInfoToPage: function() {
      const query = {
        q: this.cityValue,
        query: this.cityValue,
        lat: this.geoLocation.lat,
        lon: this.geoLocation.lng
      };
      this.$store.dispatch("zomato/getCurrentLocations", query);
      this.$store.dispatch("zomato/getPossibleCities", query);
      this.$router.push("search");
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
.enter-area {
  background-color: white;
  text-align: center;
  margin: auto;
  padding: 32px;
  width: 75%;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
