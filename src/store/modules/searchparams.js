const state = () => ({
  checkedCategories: [],
  checkedCuisines: [],
  checkedEstablishments: [],
  selectRadius: "",
  sortValue: []
});

const getters = {};

const actions = {
  updateCheckedCategory({ commit }, category) {
    if (category.checked) {
      commit("setCheckedCategory", category.id);
    } else {
      commit("removeCheckedCategory", category.id);
    }
  },
  updateCheckedCuisine({ commit }, cuisine) {
    if (cuisine.checked) {
      commit("setCheckedCuisine", cuisine.id);
    } else {
      commit("removeCheckedCuisine", cuisine.id);
    }
  },
  updateCheckedEstablishment({ commit }, establishment) {
    if (establishment.checked) {
      commit("setCheckedCuisine", establishment.id);
    } else {
      commit("removeCheckedCuisine", establishment.id);
    }
  },
  updateSortValue({ commit }, sort) {
    commit("setSortValue", sort.id);
  },
  updateDistanceValue({ commit }, distance) {
    commit("setDistanceValue", distance.value);
  }
};

const mutations = {
  setCheckedCategory(state, c) {
    state.checkedCategories = [...state.checkedCategories, c];
  },
  removeCheckedCategory(state, c) {
    state.checkedCategories = state.checkedCategories.filter(category => {
      return category !== c;
    });
  },
  setCheckedCuisine(state, c) {
    state.checkedCuisines = [...state.checkedCuisines, c];
  },
  removeCheckedCuisine(state, c) {
    state.checkedCuisines = state.checkedCuisines.filter(cuisine => {
      return cuisine !== c;
    });
  },
  setCheckedEstablishment(state, c) {
    state.checkedEstablishments = [...state.checkedEstablishments, c];
  },
  removeCheckedEstablishment(state, c) {
    state.checkedEstablishments = state.checkedEstablishments.filter(
      establishment => {
        return establishment !== c;
      }
    );
  },
  setSortValue(state, s) {
    state.sortValue = [s];
  },
  setDistanceValue(state, d) {
    state.selectRadius = d;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
