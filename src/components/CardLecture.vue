<template>
  <a :href="innerRef">
    <div class="card-lecture">
      <div class="card-lecture-header">
        <h1>{{ header }}</h1>
      </div>
      <p>{{ description }}</p>
      <div class="card-lecture-footer">
        <font-awesome-icon icon="list" />
        <label class="card-lecture-chapter"
          >{{ numberOfChapters }} Kapitel</label
        >
      </div>
    </div>
  </a>
</template>


<script>
export default {
  name: "CardLecture",
  props: {
    header: String,
    description: String,
    numberOfChapters: String,
    innerRef: String,
  },
};
</script>

<style scoped>
.card-lecture {
  background-color: honeydew;
  border-style: 1px solid red;
  min-width: 20vw;
  max-width: 30vw;
  min-height: 40vh;

  margin: 1rem;
  padding: 1rem;
}
.card-lecture:hover {
  background-color: khaki;
}

.card-lecture-header {
  display: flex;
  height: 80px;
  align-content: center;
}

.card-lecture-info {
  display: block;
}
.card-lecture-footer {
  margin-top: 1rem;
}
.card-lecture-chapter {
  margin-left: 0.5rem;
}
</style>