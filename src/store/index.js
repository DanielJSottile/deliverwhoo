import Vue from "vue";
import Vuex from "vuex";
import zomato from "./modules/zomato";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { zomato }
});
