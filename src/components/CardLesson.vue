<template class="card">
  <a :href="innerRef">
    <div class="card-lesson">
      <div class="card-lesson-header">
        <h1>{{ nummer }}. {{ name }}</h1>
      </div>
      <p class="card-lesson-info">{{ description }}</p>
      <div class="card-lesson-footer"></div>
    </div>
  </a>
</template>


<script>
export default {
  name: "CardLesson",
  props: {
    nummer: Number,
    name: String,
    description: String,
    innerRef: String,
  },
};
</script>

<style scoped>
.card-lesson {
  background-color: honeydew;
  min-width: 20vw;
  max-width: 30vw;
  min-height: 40vh;

  margin: 1rem;
  padding: 1rem;
  border: 2px solid rgb(140, 240, 153);
  box-shadow: 5px 5px 3px rgb(92, 157, 100);
}
.card-lesson:hover {
  background-color: rgb(140, 240, 153);
}

.card-lesson-header {
  display: flex;
  min-height: 80px;
  align-content: center;
}

.card-lesson-info {
  display: block;
}
.card-lesson-footer {
  margin-top: 1rem;
}
.card-lesson-chapter {
  margin-left: 0.5rem;
}
</style>