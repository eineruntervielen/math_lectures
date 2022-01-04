<template>
<div class="definition">
  <h1>Definition {{ nummer }}</h1>
  <slot></slot>
 </div>

</template>

<script>
export default {
  name: "definition",
  props: {
    nummer: String,
  }
}
</script>

<style scoped>
.definition {
  margin-top: 1rem;
  scroll-margin: 95px;
  padding: 1rem;
  border: 1px var(--main-color) dashed;
  border-radius: .5rem;
}
.definition h1 {
  font-size: 1.5rem;
  margin: 0;
}
</style>