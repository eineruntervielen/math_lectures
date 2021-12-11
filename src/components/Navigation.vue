<template>
  <div id="nav">
    <button id="bars"><font-awesome-icon icon="bars" /></button>
  <!-- <router-link to="/"><font-awesome-icon icon="bars" /></router-link> -->
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
  position: sticky;
  border-bottom: 1px solid #e1ebf2;
  background-color: white;
  z-index: 1;
}

#nav a {
  margin: 1rem;
  font-size: 3rem;
  text-decoration: none;
  color: #2c3e50;
}

#bars{
  margin: 1rem;
  font-size: 3rem;
  text-decoration: none;
  color: #2c3e50;
  background: none;
  border: none;
}
</style>
