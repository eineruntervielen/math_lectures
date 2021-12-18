<template>
  <sidebar />
  <div class="content">
    <h1>Aussagenlogik</h1>
    <p>
      Mathematische Inhalte werden durch Aussagen ausgedrückt. Eine Aussage
      beschreibt einen Sachverhalt der eindeutig entweder <u>wahr</u> oder <u>falsch</u> ist.
    </p>
    <p>
      Das bedeutet ausser den beiden Wahrheitswerten sind keine weiteren
      Wahrheitswerte zugelassen (Tertium non datur) und es trifft genau einer
      der beiden Wahrheitswerte zu (Prinzip vom ausgeschlossenen Widerspruchs).
    </p>
    <h3>Beispiele</h3>
    <ol class="roman">
      <li>5 ist kleiner als 3.</li>
      <li>Bonn ist die Hauptstadt der Bundesrepublik Deutschland.</li>
      <li>Der einzige Satz dieser Zeile ist falsch.</li>
      <li>Jede gerade Zahl größer als 2 ist die Summe von 2 Primzahlen</li>
      <li>Das Studium der Informatik ist schwer.</li>
    </ol>
    <hr />
    <p>
      Die Mathematik besteht aus Axiomen, Definitionen sowie Sätzen und deren
      Beweisen.
    </p>
    <h3>Definitionen</h3>
    <p>
      In einer Definition legt man einen neuen Begriff fest oder führt eine neue
      Bezeichnung ein.
    </p>
    <h3>Sätze bzw. Theoreme</h3>
    <p>
      Auch Propositionen (Hilfssätze), Korollare (Folgerungen) und Lemmata
      (sinular Lemma) sind vom Typ her Sätze.
    </p>
    <p>
      Sätze machen wahre Aussagen über Eigenschaften von mathematischen Objekten
      oder über Beziehungen zwischen mathematischen Objekten. Diese Aussagen
      müssen über logische Schlüsse aus anderen wahren Aussagen hergeleitet
      werden.
    </p>
    <h3>Axiome</h3>
    <p>
      Das sind Grundlegende Aussagen, die nicht mehr aus anderen Aussagen
      hergeleitet werden können, die man aber als wahr annimmt.
    </p>
    <h3>Beispiel</h3>
    <ol class="roman">
      <li>1 ist eine natürliche Zahl.</li>
      <li>Zu jeder natürlichen Zahl gibt es genau einen Nachfolger.</li>
      <li>Es gibt keine natürliche Zahl deren Nachfolger 1 ist.</li>
      <li>Verschiedene natürliche Zahlen haben verschiedene Nachfolger.</li>
      <li>
        Enthält eine Menge natürlicher Zahlen die Zahl 1 und mit jeder
        natürlichen Zahl $n$ auch deren Nachfolger $n' = (n+1)$, so enthält sie
        alle natürlichen Zahlen.
      </li>
    </ol>
    <hr />
    <p>
      Wir wollen nun die verschiedenen Verknüpfungen von Aussagen durchgehen.
    </p>

    <definition
      nummer="1"
      txt="
    Die Negation oder Verneinung der Aussage $A$ ist die Aussage 'nicht $A$' 
    ( in Zeichen $ \neg A$ oder $\overline{A}$). Sie sind definiert durch
    <br>
    <table>
      <tr>
        <td>$A$</td>
        <td>$\neg A$</td>
      </tr>
      <tr>
        <td>$w$</td>
        <td>$f$</td>
      </tr>
      <tr>
        <td>$f$</td>
        <td>$w$</td>
      </tr>
    </table>
    "
    />
    <h3>Beispiel</h3>
    <definition
      nummer="2"
      txt="
      Die Konjunktion der Aussagen $A$ und $B$, ist die Aussage '$A$ und $B$' (
      in Zeichen $A \wedge B$). Sie ist definiert durch 
      " />
    <h3>Beispiel</h3>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <lesson-summary
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
    "
    />
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
export default {
 name: "0_Logik",

};
</script>

<style scoped>
.content {
  counter-reset: section;
}

h1,
h2,
p {
  margin: 1rem 0rem;
}

h3 {
  margin-top: 1rem;
}

hr {
  color: var(--main-color);
  border-style: solid;
  margin: 2em;
  margin-left: 3rem;
  margin-right: 3rem;
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