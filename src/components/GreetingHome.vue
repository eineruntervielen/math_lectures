<template>
  <div class="greeting">
    <h1>Mathematik</h1>
    <h2>Für Informatiker:innen</h2>
  </div>
</template>

<script>
export default {
  name: "GreetingHome",
};
</script>

<style scoped>
.greeting {
  width: 100vw;
  background: var(--main-color);
  height: 35vh;
  color: white;
  text-shadow: 2px 2px #559376;
}

.greeting h1 {
  font-size: 5rem;
  margin-left: 20vw;
  padding-top: 5vh;
}
.greeting h2 {
  font-size: 3rem;
  margin-left: 25vw;
}
</style>