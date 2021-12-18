<template>
  <!-- <NavigationSlide /> -->
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";
// import NavigationSlide from "./components/NavigationSlide.vue";

export default {
  name: "App",
  components: {
    Navigation,
    // NavigationSlide
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --font-color: #2c3e50;
  --main-color: #96ceb4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16pt;
}
#app a {
  text-decoration: none;
  color: inherit;
}

.content {
  max-width: 40vw;
  margin: auto;
}

u {
  text-decoration-color: var(--main-color);
}

ol.roman {
  list-style-type: lower-roman;
}
table{
  margin: auto;
}
table, td {
  align-content: center;
  border: 1px solid var(--main-color);
  border-collapse: collapse;
}
td {
  padding: 0 0.5rem;
  text-align: center;
}
</style>
