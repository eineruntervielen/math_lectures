<template>
    <GreetingHome />
    <div class="flexbox">
      <Card-Lecture 
      header="Mathematik 1"
      description="Basisvorlesung mit Einführung in Mengentheorie und Lineare Algebra"
      numberOfChapters="10"
      innerRef="MA1"
      />
      <Card-Lecture 
      header="Mathematik 2"
      description="Basisvorlesung in Analysis für Informatiker mit reeller Analysis"
      numberOfChapters="8"
      innerRef="MA2"
      />
    </div>
</template>

<script>
import GreetingHome from "@/components/GreetingHome.vue";
import CardLecture from "@/components/CardLecture.vue";

export default {
  name: "Home",
  components: {
    GreetingHome,
    CardLecture,
  },
};
</script>

<style scoped>
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}
</style>
