<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-link" to="/"
        ><h2><i class="fas fa-question"></i>deliverwho</h2></router-link
      >
      <div class="router-links">
        <router-link to="/about"
          ><i class="fas fa-scroll"></i> About</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed&family=IBM+Plex+Sans:wght@400;500&display=swap");

/* #app {} */

body {
  font-family: "IBM Plex Sans", sans-serif;
  color: #2e334c;
  text-align: center;
  margin: 0;
  padding: 0;
}

body.home {
  background-color: #00ccbc;
  transition: 0.3s;
}
body.search {
  background-color: white;
  transition: 0.3s;
}

body.about {
  background-color: #ed9121;
  transition: 0.3s;
}

#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: #440063;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  margin: 15px;
  padding: 15px;
}

h2.home {
  color: white;
  font-size: 24px;
  padding: 15px;
  margin: 15px;
}

a {
  padding: 15px;
  margin: 15px;
  color: #00a396;
}

.home-link {
  margin-left: 0px;
  text-decoration: none;
}

.router-links {
  display: flex;
  flex-direction: row;
}

.router-links a {
  color: #2e334c;
  text-decoration: none;
  background-color: white;
  padding: 8px 16px;
  border: 1px solid #e8ebeb;
  border-radius: 4px;
}

.router-links a:hover {
  background-color: #e8ebeb;
  transition: 0.3s;
}

.home-link:hover {
  color: #e8ebeb;
}

input {
  margin: 10px;
  caret-color: #00ccbc;
  color: #828585;
  padding: 12px 16px;
  border: 1px solid #e8ebeb;
  border-radius: 4px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05), inset 0 0 0 100px #fff;
  transition-property: box-shadow, -webkit-box-shadow;
  transition-duration: 0.15s;
}

input::placeholder {
  color: #cccccc;
}
label {
  color: #828585;
}

span {
  font-style: italic;
  color: #828585;
}
</style>
