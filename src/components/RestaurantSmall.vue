<template>
  <div class="restaurant" v-bind:key="index">
    <h3>
      {{ restaurant.restaurant.name }}
      <i
        v-for="n in restaurant.restaurant.price_range"
        v-bind:key="n"
        class="fas fa-comment-dollar"
      ></i>
    </h3>
    <div class="rating">
      <h4
        class="rating-num"
        v-bind:style="{
          color: `#${restaurant.restaurant.user_rating.rating_color}`
        }"
      >
        <i class="fas fa-star"></i>
        {{ restaurant.restaurant.user_rating.aggregate_rating }}
      </h4>
      <h4 class="italic grey">
        ({{ restaurant.restaurant.all_reviews_count }} ratings)
      </h4>
    </div>

    <h4>{{ restaurant.restaurant.cuisines }}</h4>
    <p class="italic grey">{{ calcDistance }} mi from your location</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "RestaurantSmall",
  props: ["restaurant", "index"],
  computed: {
    calcDistance: function() {
      let lat_one = Number(this.restaurant.restaurant.location.latitude);
      let lon_one = Number(this.restaurant.restaurant.location.longitude);
      let lat_two = Number(this.geoLocation.lat);
      let lon_two = Number(this.geoLocation.lng);
      let degree = 0.017453292519943295;
      let cos = Math.cos;
      let answer =
        0.5 -
        cos((lat_one - lat_two) * degree) / 2 +
        (cos(lat_two * degree) *
          cos(lat_one * degree) *
          (1 - cos((lon_one - lon_two) * degree))) /
          2;
      return (12742 * Math.asin(Math.sqrt(answer)) * 0.621371).toFixed(2);
    },
    ...mapState({
      geoLocation: state => state.zomato.geoLocation
    })
  },
  methods: {
    ...mapActions("zomato", ["getGeoLocation"]),
    mounted() {
      this.$store.dispatch("zomato/getGeoLocation");
    }
  }
};
</script>

<style scoped>
h3,
h4,
p {
  padding: 0px;
  margin: 2px;
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
  transition: 0.1s;
}

.restaurant:hover .rating .grey {
  color: white;
  transition: 0.1s;
}

.restaurant:hover .grey {
  color: white;
  transition: 0.1s;
}
</style>
