<template>
<div class="definition">
  <h1>Definition {{ nummer }}</h1>
  <span v-html="txt"></span>
 </div>

</template>

<script>
export default {
  name: "definition",
  props: {
    nummer: String,
    txt: String
  }
}
</script>

<style scoped>
.definition {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px #2c3e50 dashed;
  border-radius: 1rem;
}
.definition h1 {
  font-size: 1.5rem;
  margin: 0;
}
</style>