<template>
  <GreetingMA1 />
  <div class="grid">
    <card-lesson
      v-for="lesson in lessons"
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
          nummer: 1,
          name: "Aussagenlogik",
          description: "Logik",
          innerRef: "/MA1/0_Logik",
        },
        {
          nummer: 2,
          name: "Beweismethoden",
          description: "Direkter Beweis, Indirekter Beweis, Widerspruchsberweis, Vollständige Induktion",
          innerRef: "/MA1/1_Vollstaendige_Induktion",
        },
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
