<template>
  <div class="lesson-summary">
    <h1 class="header">Zusammenfassung</h1>
    <div class="lesson-summary-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lesson-Summary",
  props: {
    txt: String,
  },
};
</script>

<style scoped>
.header {
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: fit-content;
  border: 2px solid var(--main-color);
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  border-bottom: none;

}
.lesson-summary-content {
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid var(--main-color);
  border-radius: 0.2rem;
  border-top-left-radius: 0;

}
</style>