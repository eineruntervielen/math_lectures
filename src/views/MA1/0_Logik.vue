<template>
  <Sidebar />
  <div class="content">
    <p>
      Mathematische Inhalte werden durch Aussagen ausgedrückt. Eine Aussage
      beschreibt einen Sachverhalt der eindeutig entweder wahr oder falsch ist. Das heißt
    </p>
    <ol>
      <li>Ausser wahr oder falsch sind keine Wahrheitswerte zugelassen
        $$Prinzip vom ausgeschlossenen Dritten (Tertium non datur)$$
      </li>
      <li>
        Es trifft genau einer der Wahrheitswerte zu.
        $$Prinzip des ausgeschlossenen Widerspruchs$$
      </li>
    </ol>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
// import definition from "@/components/Definition.vue";
// import {Sets} from "@/sketches/Sets.js"
// const p5 = require("p5");

export default {
  name: "0_Logik",
  components: {
    Sidebar,
    // definition,
  },
};
</script>

<style scoped>
</style>