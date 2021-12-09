<template>
  <div id="nav">
  <router-link to="/"><font-awesome-icon icon="bars" /></router-link>
    <!-- <router-link to="/1_3_mengen">Mengen</router-link> -->
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
#nav {
  top: 0;
  width: 100%;
  height: 90px;
  display: flex;
  border-bottom: 1px solid #e1ebf2;
}

#nav a {
  margin: 1rem;
  font-size: 3rem;
  text-decoration: none;
  color: #2c3e50;
}
</style>
