<template>
  <div id="navslide">
    <button id="close">
      <font-awesome-icon icon="times" />
    </button>
    <div id="linklist">
      <ol>
        <a href="/"><li>Home</li></a>
        <a href="/"><li>Mathematik</li></a>
        <a href=""><li>Über</li></a>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationSlide",
};
</script>

<style scoped>
#navslide {
    display: table;
  width: 100vw;
  height: 100vh;
  color: blue;
}

#navslide is-active {

}
#linklist {
    width: 100%;
    padding: 0;
    vertical-align: middle;
    display: table-cell;
}
#linklist li{
    align-content: center;
    display: block;
    font-size: 3rem;
}
#close {
  margin: 1rem;
  font-size: 3rem;
  text-decoration: none;
  color: #2c3e50;
  background: none;
  border: none;
}
</style>