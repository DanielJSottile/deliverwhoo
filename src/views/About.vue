<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  beforeCreate: function() {
    document.body.className = "about";
  }
};
</script>
