<template>
  <!-- <NavigationSlide /> -->
  <Navigation />
    <router-view/>
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
</style>
