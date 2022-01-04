<template>
  <Sidebar />
  <div class="content">
    <h1>Aussagenlogik</h1>
    <h2 id="einleitung">Einleitung</h2>
    <p>
      Mathematische Inhalte werden durch Aussagen ausgedrückt. Eine Aussage
      beschreibt einen Sachverhalt der eindeutig entweder <u>wahr</u> oder
      <u>falsch</u> ist.
    </p>
    <p>
      Das bedeutet ausser den beiden Wahrheitswerten sind keine weiteren
      Wahrheitswerte zugelassen (Tertium non datur) und es trifft genau einer
      der beiden Wahrheitswerte zu (Prinzip vom ausgeschlossenen Widerspruchs).
    </p>
    <InfoBox>
      Diese Erkenntnisse gehen bereits auf Aristoteles in der Antike zurück.
    </InfoBox>
    <h3>Beispiele</h3>
    <ol class="roman">
      <li>5 ist kleiner als 3.</li>
      <li>Bonn ist die Hauptstadt der Bundesrepublik Deutschland.</li>
      <li>Der einzige Satz dieser Zeile ist falsch.</li>
      <li>Jede gerade Zahl größer als 2 ist die Summe von 2 Primzahlen</li>
      <li>Das Studium der Informatik ist schwer.</li>
    </ol>
    <p>
      Die Mathematik besteht aus Axiomen, Definitionen sowie Sätzen und deren
      Beweisen.
    </p>
    <h3>~ Definitionen</h3>
    <p>
      In einer Definition legt man einen neuen Begriff fest oder führt eine neue
      Bezeichnung ein.
    </p>
    <h3>~ Sätze bzw. Theoreme</h3>
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
    <h3>~ Axiome</h3>
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
    <h2 id="verknüpfung">Verknüpfungen von Aussagen</h2>
    <p>
      Wir wollen nun die verschiedenen Verknüpfungen von Aussagen durchgehen.
    </p>
    <Definition nummer="1" id="def1">
      Die <u>Negation</u> der Aussage $A$, ist die Aussage 'nicht $A$' ( in
      Zeichen $ \neg A$ oder $\overline{A}$). Sie ist definiert durch
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
    </Definition>
    <h3>Beispiel</h3>
    <p>
      Für ganze Zahlen $z \in \mathbb{Z}$ sei $A$ die Aussage $z$ ist
      <u>gerade</u>. Dann ist die Negation $\neg A$ die Aussage $z$ ist <u>ungerade</u>
    </p>
    <Definition nummer="2">
      Die <u>Konjunktion</u> der Aussagen $A$ und $B$, ist die Aussage '$A$ und
      $B$' ( in Zeichen $A \wedge B$). Sie ist definiert durch
      <table>
        <tr>
          <td>$A$</td>
          <td>$B$</td>
          <td>$A \wedge B$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$f$</td>
          <td>$f$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$w$</td>
          <td>$f$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$f$</td>
          <td>$f$</td>
        </tr>
      </table>
    </Definition>
    <h3>Beispiel</h3>
    <p>
      Für eine ganze Zahl $z \in \mathbb{Z}$ sei $A$ die Aussage $z$ ist durch
      $2$ teilbar und $B$ die Aussage $z$ ist durch $3$ teilbar. Dann ist die Konjunktion 
      $A \wedge B$ die Aussage $z$ ist durch $6$ teilbar.
    </p>
    <Definition nummer="3">
      Die <u>Disjunktion</u> der Aussage $A$ und $B$, ist die Aussage '$A$ oder
      $B$' (in Zeichen $A \vee B$). Sie ist definiert durch
      <table>
        <tr>
          <td>$A$</td>
          <td>$B$</td>
          <td>$A \vee B$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$f$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$f$</td>
          <td>$f$</td>
        </tr>
      </table>
    </Definition>
    <InfoBox>
      $A \vee B$ ist wahr, wenn <u>mindestens eine</u> der beiden Aussagen A oder B wahr ist.
    </InfoBox>
    <Definition nummer="4">
      Die <u>Implikation</u> von $A$ nach $B$, ist die Aussage 'wenn $A$ dann
      $B$' oder 'aus $A$ folgt $B$' (in Zeichen $A \Rightarrow B$). Sie ist definiert
      durch
      <table>
        <tr>
          <td>$A$</td>
          <td>$B$</td>
          <td>$A \Rightarrow B$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$f$</td>
          <td>$f$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$f$</td>
          <td>$w$</td>
        </tr>
      </table>
      Man nennt $A$ die Voraussetzung und $B$ die Schlussfolgerung. Man sagt
      auch $A$ ist ist eine <u>hinreichende</u> Bedingung für $B$ und $B$ ist
      eine <u>notwendige</u> Bedingung für $A$
    </Definition>
    <h3>Beispiel</h3>
    <p>
      Für ganze Zahl $z \in \mathbb{Z}$ sei $A$ die Aussage $z$ ist durch $4$ teilbar. Dann ist 
      $B$ die Aussage $z$ ist durch $2$ teilbar.
    </p>
    <Definition nummer="5">
      Die <u>Äquivalenz</u> der Aussagen $A$ und $B$, ist die Aussage '$A$ gilt
      genau dann, wenn $B$ gilt' oder '$A$ gilt dann und nur dann wenn $B$ gilt'
      (in Zeichen $A \Leftrightarrow B$). Sie ist definiert durch
      <table>
        <tr>
          <td>$A$</td>
          <td>$B$</td>
          <td>$A \Leftrightarrow B$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$w$</td>
          <td>$w$</td>
        </tr>
        <tr>
          <td>$w$</td>
          <td>$f$</td>
          <td>$f$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$w$</td>
          <td>$f$</td>
        </tr>
        <tr>
          <td>$f$</td>
          <td>$f$</td>
          <td>$w$</td>
        </tr>
      </table>
    </Definition>
    <InfoBox>
      Zwei immer wahre Aussagen bzw. zwei immer falsche Aussagen sind äquivalent.
    </InfoBox>
    <h3>Beispiel</h3>
    <p>
      Sei $x \in \mathbb{Z}$, dann ist <br>
      $x^2 \leq 4 \Leftrightarrow x^4 \leq 16$ <br>
      das heißt die Lösungsmengen der beiden Ungleichungen sind identisch.
    </p>

    <hr />
    <h2>Rechenregeln für Aussagenverknüpfungen</h2>
    <hr />
    <LessonSummary>
      <p>
        In diesem Kapitel haben wir uns mit der Aussagenlogik befasst. Da
        mathematische Inhalte durch Aussagen ausgedrückt werden, ist es das
        verstehen der Verknüpfungen logischer Aussagen essenziell.
      </p>
      <p>
        Logische Aussagen können verknüpft werden und ihr Wahrheitswert kann
        bestimmt werden. Der Wahrheitswert einer zusammengesetzen Aussagen lässt
        sich durch die Bestimmung der Wahrheitswerte ihrer atomaren Aussagen
        bestimmen. Hierzu kann man sogenannte Wahrheitstafel verwenden.
      </p>
    </LessonSummary>
    <br />
  </div>
</template>

<script>
import p5 from "p5";
import { Sets } from "@/sketches/Sets";

export default {
  name: "0_Logik",
  data() {
    return {};
  },
  mounted() {
    new p5(Sets, "bsp1");
  },
};
</script>

<style scoped>
.content {
  counter-reset: section;
  counter-reset: subsection;
}

h1,
h2,
p {
  margin: 1rem 0rem;
}

h3 {
  margin-top: 1rem;
}

h1::before {
  counter-increment: section;
  content: counter(section) ". ";
}
h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
</style>