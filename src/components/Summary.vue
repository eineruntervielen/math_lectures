<template>
  <div class="summary">
    <h1 class="header">Zusammenfassung</h1>
    <div class="summary-content">
      <span v-html="txt"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    txt: String,
  },
};
</script>

<style scoped>
.summary {

}
.header {
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
  border: 1px solid var(--font-color);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom: none;

}
.summary-content {
  color: var(--font-color);
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid var(--font-color);
  border-radius: 0.2rem;
  border-top-left-radius: 0;

}
</style>