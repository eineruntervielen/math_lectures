<template>
  <Sidebar />
  <div class="content">
     <h2>definition</h2>
    <p>
      When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and
      they are \[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]
    </p>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "1_3_Mengen",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
</style>