import {
  getCategories,
  getCities,
  getCollections,
  getCuisines,
  getEstablishments,
  getGeocode,
  getLocationDetails,
  getLocations,
  getDailyMenu,
  getRestaurant,
  getReviews,
  getSearch
} from "../../services/ZomatoService";

const state = () => ({
  cities: [],
  collections: [],
  cuisines: [],
  establishments: [],
  restaurantInfo: [],
  dailyMenu: [],
  reviews: [],
  // geolocation specific
  geoLocation: {},
  geoCode: [],
  nearbyRestaurants: [],
  locations: [],
  locationDetails: {},
  searchResults: []
});

const getters = {};

const actions = {
  getCategories({ commit }) {
    getCategories().then(data => {
      commit("setCategories", data.categories);
    });
  },

  getPossibleCities({ commit }, query) {
    getCities(query).then(data => {
      commit("setPossibleCities", data.location_suggestions);
    });
  },

  getCurrentCollections({ commit }, query) {
    getCollections(query).then(data => {
      commit("setCurrentCollections", data.collections);
    });
  },

  getCurrentCuisines({ commit }, query) {
    getCuisines(query).then(data => {
      commit("setCurrentCuisines", data.cuisines);
    });
  },

  getCurrentEstablishments({ commit }, query) {
    getEstablishments(query).then(data => {
      commit("setCurrentEstablishments", data.establishments);
    });
  },

  getCurrentRestaurant({ commit }, query) {
    getRestaurant(query).then(data => {
      commit("setCurrentRestaurant", data);
    });
  },

  getCurrentDailyMenu({ commit }, query) {
    getDailyMenu(query).then(data => {
      commit("setCurrentDailyMenu", data);
    });
  },

  getCurrentReviews({ commit }, query) {
    getReviews(query).then(data => {
      commit("setCurrentReviews", data);
    });
  },

  // geolocation

  getGeoLocation({ commit }, data) {
    commit("setGeoLocation", data);
  },

  getCurrentGeoCode({ commit }, query) {
    getGeocode(query).then(data => {
      commit("setCurrentGeoCode", data);
    });
  },

  getCurrentLocations({ commit }, query) {
    getLocations(query).then(data => {
      commit("setCurrentLocations", data.location_suggestions);
    });
  },

  getCurrentLocationDetails({ commit }, query) {
    getLocationDetails(query).then(data => {
      commit("setCurrentLocationDetails", data);
    });
  },

  getCurrentSearchResults({ commit }, query) {
    getSearch(query).then(data => {
      commit("setCurrentSearchResults", data);
    });
  }
};

const mutations = {
  setCategories(state, c) {
    state.categories = c;
  },

  setPossibleCities(state, c) {
    state.cities = c;
  },

  setCurrentCollections(state, c) {
    state.collections = c;
  },

  setCurrentCuisines(state, c) {
    state.cuisines = c;
  },

  setCurrentEstablishments(state, e) {
    state.establishments = e;
  },

  setCurrentRestaurant(state, r) {
    state.restaurantInfo = r;
  },

  setCurrentDailyMenu(state, d) {
    state.dailyMenu = d;
  },

  setCurrentReviews(state, r) {
    state.reviews = r;
  },

  // geolocation

  setGeoLocation(state, g) {
    const coords = { lat: g.latitude, lng: g.longitude };
    state.geoLocation = coords;
  },

  setCurrentGeoCode(state, g) {
    state.geoCode = g;
  },

  setCurrentLocations(state, l) {
    state.locations = l;
  },

  setCurrentLocationDetails(state, l) {
    state.locationDetails = l;
  },

  setSearchResults(state, s) {
    state.searchResults = s;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
