import Vue from "vue";
import Vuex from "vuex";
import zomato from "./modules/zomato";
import searchparams from "./modules/searchparams";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { zomato, searchparams }
});
