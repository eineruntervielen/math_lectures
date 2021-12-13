<template>
  <div class="sidenav">
    <ul>
      <li v-for="item in chapters" v-bind:key="item.nr">
        <a :href="content.link">{{ content.nr }}. {{ content.name }}</a>
      </li>
    </ul>
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
  display: block;
  width: 20vw;
  overflow-x: hidden;
  background: rgb(237, 237, 237);
}

.sidenav a {
  color: inherit;
}
</style>