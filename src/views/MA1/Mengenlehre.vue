<template>
  <Sidebar />
  <div class="content">
    <p>
      Zunächst wollen wir uns mit den Grundlagen der Mengenlehre auseinander
      setzen.
    </p>
    <p>
      Der bedeutende Deutsche Mathematiker Georg Cantor (*1845 in Sankt
      Petersburg , † 1918 in Halle an der Saale) gilt als Begründer der naiven
      Mengenlehre. Den Begriff der Menge fasste er wie folgt zusammen:
    </p>
    <definition
      nummer="1"
      txt="
    Eine Menge ist eine Zusammenfassung von unterscheidbaren Objekten.
    Diese Objekte heissen Elemente der Menge.<br>
    Man bezeichnet Mengen meist mit lateinischen Großbuchstaben und Elemente mit
    lateinischen Kleinbuchstaben.<br>
    Sei $M$ eine Menge und $x$ ein Objekt, dann schreibt man:<br>
    $x \in M$, falls $x$ ein Element von $M$ ist<br>
    $x \notin M$, falls $x$ kein Element von $M$ ist.
    "
    />

    <p>
      Die Elemente einer Menge müssen nicht gleichartig sein.
      <br />
      Man kann Mengen als zwei verschiedene Arten definieren: $$A := \lbrace
      rot, blau, geld \rbrace$$
    </p>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import definition from "@/components/Definition.vue";
// import {Sets} from "@/sketches/Sets.js"
// const p5 = require("p5");

export default {
  name: "MA1",
  components: {
    Sidebar,
    definition,
  },
};
</script>

<style scoped>
p {
  margin-top: 1rem;
  padding: 1rem;
}
</style>