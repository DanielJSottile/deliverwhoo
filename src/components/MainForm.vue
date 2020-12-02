<template>
  <div class="main-form">
    <div v-if="cities.length" class="search">
      <!--Make a component -->
      <h3>Searching within:</h3>
      <h2>{{ locations[0].title }}</h2>
      <div class="break" />
      <div class="info">
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
              <input
                type="radio"
                id="rating"
                value="rating"
                v-model="sortValue"
              />
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
        <div class="break" />
        <div class="radius">
          <!--Make a component -->
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
            <select v-model="selectRadius">
              <option disabled value="">Please select one</option>
              <option>5 mi.</option>
              <option>10 mi.</option>
              <option>15 mi.</option>
              <option>20 mi.</option>
            </select>
          </div>
        </div>
        <div class="break" />
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
        <div class="break" />
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
        <div class="break" />
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
      </div>
    </div>
    <div class="form">
      <div v-if="cities.length">
        <h3>Here's your most likely location based on our data:</h3>
        <h2>{{ locations[0].title }}</h2>
        <p class="suggestion">
          Did we get it correct? If not, you can choose from one of these other
          likely locations:
        </p>
        <select v-model="selected">
          <option disabled value="">Please select a new city</option>
          <option
            v-for="(city, index) in cities"
            v-bind:key="index"
            v-bind:value="city.id"
            >{{ city.name }}</option
          >
        </select>
        <button @click="rechoose"><i class="fas fa-redo"></i> Rechoose</button>
        <div class="cuisine-label">
          <h2>Popular Cuisines:</h2>
        </div>
        <div class="popular-cuisines">
          <template v-for="(cuisine, index) in locationDetails.top_cuisines">
            <div class="fancy-cuisine" v-bind:key="index">
              <h3>{{ cuisine }}</h3>
            </div>
          </template>
        </div>
        <div class="best-restaurant-label">
          <h1>Best Restaurants in the Area:</h1>
        </div>
        <div class="best-restaurants">
          <RestaurantSmall
            v-for="(restaurant, index) in locationDetails.best_rated_restaurant"
            v-bind:key="index"
            v-bind:restaurant="restaurant"
          />
        </div>
      </div>
      <RedoCity v-else />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import RestaurantSmall from "./RestaurantSmall.vue";
import RedoCity from "./RedoCity.vue";
export default {
  name: "MainForm",
  props: {},
  data: function() {
    return {
      cityValue: "",
      selected: "",
      checkedCategories: [],
      collapseCategories: false,
      checkedEstablishments: [],
      collapseEstablishments: false,
      checkedCuisines: [],
      collapseCuisines: false,
      sortValue: [],
      collapseSort: false,
      selectRadius: "",
      collapseRadius: false,
      checkedToggle: true,
      checkedToggleCategories: true,
      checkedToggleEstablishments: true
    };
  },
  watch: {
    locations: function() {
      const query = {
        city_id: this.locations[0].city_id,
        lat: this.geoLocation.lat,
        lon: this.geoLocation.lng
      };

      const locationQuery = {
        entity_id: this.locations[0].entity_id,
        entity_type: this.locations[0].entity_type
      };
      this.$store.dispatch("zomato/getCategories");
      this.$store.dispatch("zomato/getCurrentCuisines", query);
      this.$store.dispatch("zomato/getCurrentCollections", query);
      this.$store.dispatch("zomato/getCurrentEstablishments", query);
      this.$store.dispatch("zomato/getCurrentLocationDetails", locationQuery);
    }
  },
  computed: mapState({
    categories: state => state.zomato.categories,
    cities: state => state.zomato.cities,
    geoLocation: state => state.zomato.geoLocation,
    collections: state => state.zomato.collections,
    cuisines: state => state.zomato.cuisines,
    establishments: state => state.zomato.establishments,
    locations: state => state.zomato.locations,
    locationDetails: state => state.zomato.locationDetails
  }),
  methods: {
    ...mapActions("zomato", [
      "getCategories",
      "getCurrentLocations",
      "getPossibleCities",
      "getGeoLocation",
      "getCollections",
      "getCuisines",
      "getEstablishments",
      "getCurrentLocationDetails"
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
      this.selected = "";
    },
    rechoose: function() {
      const query = {
        city_ids: this.selected,
        lat: this.geoLocation.lat,
        lon: this.geoLocation.lng
      };
      this.$store.dispatch("zomato/getCurrentLocations", query);
      this.$store.dispatch("zomato/getPossibleCities", query);
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
    },
    toggleCategoryCollapse: function() {
      this.collapseCategories = !this.collapseCategories;
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
    },
    toggleCuisineCollapse: function() {
      this.collapseCuisines = !this.collapseCuisines;
    },
    toggleSortCollapse: function() {
      this.collapseSort = !this.collapseSort;
    },
    toggleRadiusCollapse: function() {
      this.collapseRadius = !this.collapseRadius;
    }
  },
  components: { RestaurantSmall, RedoCity }
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
.break {
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #828585;
}
.main-form {
  display: flex;
  flex-direction: row;
}

.info {
  height: 1000px;
  overflow-x: hidden;
  overflow-y: auto;
}

.search {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 32px;
  width: 20%;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}
.sort {
  display: flex;
  flex-direction: column;
}
.form {
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 32px;
  width: 65%;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.redo-city {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.suggestion {
  font-style: italic;
  color: #828585;
}

.cuisine-list,
.category-list,
.establishment-list {
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

input {
  all: revert;
}

.categories-label,
.cuisine-label,
.sort-label,
.radius-label,
.establishments-label {
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
}

.popular-cuisines {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.rating {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.rating-num {
  text-shadow: 1px 1px white;
}

.italic {
  font-style: italic;
}

.grey {
  color: #828585;
}

.best-restaurants {
  column-count: 3;
}

.restaurant {
  padding: 15px;
  margin: 15px;
  width: 90%;
  border: 1px solid #2e334c;
  border-radius: 14px;
  display: inline-block;
  overflow: hidden;
}

.restaurant:hover {
  cursor: pointer;
  color: white;
  background-color: #00ccbb;
  transition: 0.3s;
}

.restaurant:hover .rating .grey {
  color: white;
  transition: 0.3s;
}
</style>
