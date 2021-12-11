<template>
  <GreetingMA1 />
  <div class="grid">
    <card-lesson v-for="lesson in lessons"
    :key="lesson.nummer"
    :nummer="lesson.nummer"
    :name="lesson.name"
    :description="lesson.description"
    :innerRef="lesson.innerRef"
    />
  </div>
</template>

<script>
import GreetingMA1 from "@/components/GreetingMA1.vue";
import CardLesson from "@/components/CardLesson.vue";

export default {
  name: "Home",
  components: {
    GreetingMA1,
    CardLesson,
  },
  data() {
    return {
      lessons: [
        {
          nummer: 0,
          name: "Logik",
          description: "Aussagenlogik",
          innerRef: "MA1/0_logik"
        },
        {
          nummer: 1,
          name: "Mengenlehre",
          description: "Naive Mengenlehre nach G. Cantor",
          innerRef: "MA1/1_Mengenlehre"
        },
        {
          nummer: 2,
          name: "Vollständige Induktion",
          description: "Beweisstrategie der Natürlichen Zahlen",
        },
        {
          nummer: 3,
          name: "Relationen und Abbildungen",
          description: ""
          
        },
        {
          nummer: 4,
          name: "Körper",
          description: ""
          
        }
      ],
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  height: 100%;
}
</style>
