<template>
  <Sidebar />
  <div class="content">
    <h1>Aussagenlogik</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima enim
      itaque repellat reiciendis quidem odit vel! Inventore dolores eligendi
      accusantium rerum! Omnis sit voluptates expedita quasi, ullam quas. Minus,
      nulla!gql
    </p>
    <br>
    <hr>
    <br>
    <p>
      Mathematische Inhalte werden durch Aussagen ausgedrückt. Eine Aussage
      beschreibt einen Sachverhalt der eindeutig entweder wahr oder falsch ist.
      Das heißt
    </p>
    <ol>
      <li>
        Ausser wahr oder falsch sind keine Wahrheitswerte zugelassen
        $$x^2 = \mathbb{R}$$
      </li>
      <li>
        Es trifft genau einer der Wahrheitswerte zu. $$Prinzip des
        ausgeschlossenen Widerspruchs$$
      </li>
    </ol>
    <br>
    <br>
    <Summary
      txt="
      <p>
        In diesem Kapitel haben wir uns mit der Aussagenlogik befasst. Da
        mathematische Inhalte durch Aussagen ausgedrückt werden, ist es das 
        verstehen der Verknüpfungen logischer Aussagen essenziell.
      </p>
      <br>
      <p>
        Logische Aussagen können verknüpft werden und ihr Wahrheitswert kann bestimmt werden.
        Der Wahrheitswert einer zusammengesetzen Aussagen lässt sich durch die Bestimmung der
        Wahrheitswerte ihrer atomaren Aussagen bestimmen. Hierzu kann man
        sogenannte Wahrheitstafel verwenden.
      </p>
    " />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
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
.content {
  counter-reset: section;
}
h1::before {
  counter-reset: subsection;
  counter-increment: section;
  content: counter(section) ". ";
}
h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
</style>