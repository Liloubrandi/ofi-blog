---
sidebar_custom_props:
  id: c0387f92-5a73-4431-b9ea-348fec74334b
  source:
    name: rothe.io
    ref: https://rothe.io/?b=crypto&p=792141
---

import PrimfactorizationTiming from "@site/src/components/VisualizationTools/Crypto/PrimfactorizationTiming";

# Asymmetrie

Wir haben in den beiden vorherigen Kapiteln gesehen, dass es Vorgänge gibt, die in die eine Richtung einfach durchzuführen sind, in die entgegengesetzte Richtung allerdings sehr aufwändig oder gar unmöglich:

| einfacher Vorgang               | aufwändiger/schwieriger Vorgang    |
| :------------------------------ | :--------------------------------- |
| offenes Bügelschloss schliessen | Bügelschloss ohne Schlüssel öffnen |
| Farben mischen                  | Farben trennen                     |

Diese Beispiele zeigen deutlich, worauf die asymmetrische Verschlüsselung basiert:

:::finding Asymmetrische Verschlüsselung
Die asymmetrische Verschlüsselung basiert auf Aufgaben, die in eine Richtung einfach auszuführen sind, während man eine geheime Information braucht, um den Vorgang rückgängig zu machen.

Verfügt jemand nicht über diese geheime Information, ist die Umkehrung des Vorgangs nicht in sinnvoller Zeit zu bewältigen.
:::

## Ein mathematisches Problem dieser Art
Auch in der Mathematik gibt es Operationen, die einfach und schnell auszuführen sind. Die Umkehrung jedoch ist selbst für einen Computer aufwändig und kann Jahre dauern.

Ein Beispiel dafür ist das Multiplizieren zweier (Prim-)Zahlen. Jeder Computer kann pro Sekunde mehrere Milliarden Multiplikationen ausführen. Ein Produkt zweier Primzahlen in die beiden Faktoren zu zerlegen, ist jedoch ungleich aufwändiger – insbesondere wenn die Zahlen mehrere hundert Stellen lang sind.

:::aufgabe Multiplizieren vs. Faktorisieren

1. Berechnen Sie $41 \cdot 83$ auf Papier. Überlegen Sie sich dabei, wie Sie vorgehen.
2. Schaffen Sie es, die Zahl $3397$ in ihre zwei Primfaktoren zu zerlegen? Und $1117$? Wie könnte man dabei vorgehen?

:::


:::aufgabe Aufwand für den Computer
1. Wie schnell kann der Computer multiplizieren und faktorisieren? Überprüfen Sie mit dem folgenden Tool, wie schnell Ihr Computer beim Multiplizieren und Faktorisieren ist. Nehmen Sie für Primzahlen mit `6`, `7` und `8` Stellen einige (>3) Messungen vor.
2. Halten Sie die Messergebnisse fest (kopieren Sie den Plot und fügen diesen in der Antwort ein...)
3. Was bedeutet es für eine kryptographische Anwendungen, wenn die beiden Primzahlen statt `8` Stellen mehrere mehrere hundert Stellen lang sind?

<Answer type="text" webKey="ae59f85e-43e7-42f1-afd9-a8a079fc931d" />
:::


<PrimfactorizationTiming />



