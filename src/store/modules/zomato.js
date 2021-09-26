import { getData } from "../../services/ZomatoService";
import { GET_STRINGS } from "../../utils/constants";

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
    getData(GET_STRINGS.categories).then(data => {
      commit("setCategories", data.categories);
    });
  },

  getPossibleCities({ commit }, query) {
    getData(GET_STRINGS.cities, query).then(data => {
      commit("setPossibleCities", data.location_suggestions);
    });
  },

  getCurrentCollections({ commit }, query) {
    getData(GET_STRINGS.collections, query).then(data => {
      commit("setCurrentCollections", data.collections);
    });
  },

  getCurrentCuisines({ commit }, query) {
    getData(GET_STRINGS.cuisines, query).then(data => {
      commit("setCurrentCuisines", data.cuisines);
    });
  },

  getCurrentEstablishments({ commit }, query) {
    getData(GET_STRINGS.establishments, query).then(data => {
      commit("setCurrentEstablishments", data.establishments);
    });
  },

  getCurrentRestaurant({ commit }, query) {
    getData(GET_STRINGS.restaurant, query).then(data => {
      commit("setCurrentRestaurant", data);
    });
  },

  getCurrentDailyMenu({ commit }, query) {
    getData(GET_STRINGS.dailyMenu, query).then(data => {
      commit("setCurrentDailyMenu", data);
    });
  },

  getCurrentReviews({ commit }, query) {
    getData(GET_STRINGS.reviews, query).then(data => {
      commit("setCurrentReviews", data);
    });
  },

  // geolocation

  getGeoLocation({ commit }, data) {
    commit("setGeoLocation", data);
  },

  getCurrentGeoCode({ commit }, query) {
    getData(GET_STRINGS.geocode, query).then(data => {
      commit("setCurrentGeoCode", data);
    });
  },

  getCurrentLocations({ commit }, query) {
    getData(GET_STRINGS.locations, query).then(data => {
      commit("setCurrentLocations", data.location_suggestions);
    });
  },

  getCurrentLocationDetails({ commit }, query) {
    getData(GET_STRINGS.locationDetails, query).then(data => {
      commit("setCurrentLocationDetails", data);
    });
  },

  getCurrentSearchResults({ commit }, query) {
    getData(GET_STRINGS.search, query).then(data => {
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
