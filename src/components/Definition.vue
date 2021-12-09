<template>
<div class="definition">
  <h1>Definition {{ nummer }}</h1>
  <vue-mathjax :formula="txt" />
</div>

</template>

<script>
export default {
  name: "Definition",
  props: {
    nummer: String,
    txt: String
  }
}
</script>

<style scoped>
.definition h1 {
  font-size: 1.5rem;
  margin: 0;
}
.definition p{
  font-size: 1rem;
  margin: 0;
}
</style>