<template>
  <div class="sidenav">
    <!-- <ul>
      <li v-for="item in chapters" v-bind:key="item.nr">
        <a :href="content.link">{{ content.nr }}. {{ content.name }}</a>
      </li>
    </ul> -->
    <ol>
      <li class="lvl1">
        <a href="#einleitung">1.1 Einleitung</a>
      </li>
      <li class="lvl1">
        <a href="#verknüpfung">1.2. Verknüfungen</a>
        <ol>
          <li class="lvl2">
            <a href="#def1">Definition 1</a>
          </li>
          <li class="lvl2">
            <a href="#def2">Definition 2</a>
          </li>
          <li class="lvl2">
            <a href="#def3">Definition 3</a>
          </li>
          <li class="lvl2">
            <a href="#def4">Definition 4</a>
          </li>
          <li class="lvl2">
            <a href="#def5">Definition 5</a>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    content: Object,
  }
};
</script>


<style scoped>
.sidenav {
  height: 100%;
  margin-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 20vw;
  background: rgb(237, 237, 237);
}

.sidenav a {
  color: inherit;
}

.lvl1 {
  background-color: rgb(200, 200, 200);
}
.lvl2 {
  background-color: rgb(220, 220, 220);
}
</style>