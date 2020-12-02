<template>
  <div class="home-view">
    <section>
      <div>
        <EnterCity />
      </div>
    </section>
    <section></section>
    <section>
      <p>some useless fucking content. ohh look some pears and asian food</p>
    </section>
    <section>
      <h3>Are you sick of not knowing where things are?</h3>
      <h3>Do you want to know what kind of food is actually around you?</h3>
      <h3>Why does the air taste like car batteries?</h3>
      <p>
        Um forget you heard that last one, because <b>Deliverwho</b> helps you
        figure out who the f*ck can deliver to your location, and the kinds of
        food around you. You might be able to find something new and refreshing!
        Or maybe not, because this API is really broken. Heck, I can't even find
        the town I live in and it's the third largest in my state! Thanks
        <b>Zomato</b>, you're great!
      </p>
    </section>
  </div>
</template>

<script>
import EnterCity from "./EnterCity";
export default {
  name: "HomeComp",
  props: {},
  methods: {},
  components: { EnterCity }
};
</script>

<style scoped>
section {
  padding-top: 55px;
  padding-bottom: 55px;
}

section:nth-child(1) {
  background-color: #d1eb99;
}

section:nth-child(3) {
  background-color: white;
}

section:nth-child(4) {
  background-color: #ed9121;
}

h3 {
  letter-spacing: 1.5px;
  word-spacing: 2px;
  font-style: italic;
}

p {
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 25px;
  margin: auto;
  width: 55%;
}
</style>
