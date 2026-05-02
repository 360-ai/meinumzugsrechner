import { FaqAccordion } from "@/components/FaqAccordion";
import { GuideLayout } from "@/components/GuideLayout";
import { JsonLd } from "@/components/JsonLd";
import type { GuideSection } from "@/lib/generateGuidePdf";
import { webPageAndFaqSchema } from "@/lib/schema";
import { pageCanonical } from "@/lib/site";
import { UMZUG_MIT_KINDERN_FAQS } from "@/lib/tool-faq";
import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE =
  "Umzug mit Kindern: Stressfrei umziehen mit der Familie | meinumzugsrechner.de";
const PAGE_DESC =
  "Schulwechsel, Kita-Anmeldung, emotionale Vorbereitung — wie Sie einen Umzug mit Kindern altersgerecht planen und typische Fehler vermeiden.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "Umzug mit Kindern",
    "Umzug Familie",
    "Schulwechsel Umzug",
    "Kita Anmeldung neuer Wohnort",
    "Kind auf Umzug vorbereiten",
  ],
  ...pageCanonical("/ratgeber/umzug-mit-kindern/"),
  openGraph: {
    title: "Umzug mit Kindern: Stressfrei umziehen mit der Familie",
    description: PAGE_DESC,
    url: "/ratgeber/umzug-mit-kindern/",
    type: "article",
    publishedTime: "2026-05-02T00:00:00Z",
  },
  robots: { index: true, follow: true },
};

const sections: GuideSection[] = [
  {
    heading: "Kinder altersgerecht vorbereiten",
    items: [
      {
        label: "Kleinkinder (1–3 Jahre)",
        text: "Passen sich meist schnell an, brauchen aber vertraute Gegenstände in der neuen Umgebung. Lieblingskuscheltier und Schnuller griffbereit halten.",
      },
      {
        label: "Kindergartenkinder (3–6 Jahre)",
        text: "Können Trennungsangst entwickeln. Bilderbücher über Umzüge helfen, die Veränderung einzuordnen. Beziehen Sie das Kind beim Packen der eigenen Spielsachen ein.",
      },
      {
        label: "Grundschulkinder (6–10 Jahre)",
        text: "Trauern oft um Freundschaften. Kontaktdaten der Freunde sammeln, Besuche planen. Das Kind bei der Zimmergestaltung mitentscheiden lassen.",
      },
      {
        label: "Teenager (ab 11 Jahre)",
        text: "Reagieren häufig mit Wut oder Rückzug. Ehrlich erklären, warum der Umzug nötig ist. Eigenes Zimmer als Rückzugsort ist besonders wichtig.",
      },
    ],
  },
  {
    heading: "Timing: Wann ist der beste Zeitpunkt?",
    items: [
      {
        label: "Sommerferien ideal",
        text: "Kein Unterrichtsausfall, genug Zeit zum Einleben, Schulwechsel fällt auf den natürlichen Jahresbeginn.",
      },
      {
        label: "Vermeiden Sie kritische Phasen",
        text: "Nicht direkt vor Prüfungen, in der Kita-Eingewöhnung oder den ersten Schulwochen umziehen.",
      },
      {
        label: "Wochenende bevorzugen",
        text: "Wenn möglich am Freitag/Samstag umziehen, damit die Familie das Wochenende zum Einrichten hat.",
      },
    ],
  },
  {
    heading: "Schule und Kita am neuen Wohnort",
    items: [
      {
        label: "Schulanmeldung frühzeitig",
        text: "Schulamt am neuen Wohnort kontaktieren. Benötigt werden: Geburtsurkunde, letztes Zeugnis, Meldebescheinigung.",
      },
      {
        label: "Sprengelprinzip bei Grundschulen",
        text: "In den meisten Bundesländern wird die Grundschule nach Wohnort zugewiesen. Bei weiterführenden Schulen gibt es mehr Wahlfreiheit.",
      },
      {
        label: "Kita-Plätze sind knapp",
        text: "Mindestens 3–6 Monate vorher am neuen Wohnort anmelden. Viele Städte nutzen zentrale Portale wie Little Bird oder Kita-Navigator.",
      },
      {
        label: "Übergangszeit einplanen",
        text: "Zwischen letztem Tag in der alten Einrichtung und erstem Tag in der neuen kann eine Lücke entstehen. Betreuung organisieren.",
      },
    ],
  },
  {
    heading: "Am Umzugstag mit Kindern",
    items: [
      {
        label: "Betreuung organisieren",
        text: "Idealerweise sind Kinder am Umzugstag nicht vor Ort. Großeltern, Freunde oder ein vertrauter Babysitter sind die beste Lösung.",
      },
      {
        label: "Kinderzimmer zuerst einrichten",
        text: "Das Kinderzimmer als erstes fertig machen: Bett aufbauen, Lieblingssachen auspacken. So hat das Kind sofort einen vertrauten Rückzugsort.",
      },
      {
        label: "Notfall-Tasche packen",
        text: "Lieblingsspielzeug, Kuscheltier, Snacks, Wechselkleidung, Ladekabel — alles was das Kind in den ersten Stunden braucht, separat transportieren.",
      },
      {
        label: "Routine am Abend",
        text: "Trotz Chaos: Abendessen, Zähneputzen und Gute-Nacht-Geschichte wie gewohnt durchziehen. Routine gibt Sicherheit.",
      },
    ],
  },
  {
    heading: "Nach dem Umzug: Eingewöhnung",
    items: [
      {
        label: "Geduld mitbringen",
        text: "Die Eingewöhnung dauert je nach Alter 2–8 Wochen. Rückschritte wie Bettnässen oder Klammern sind normal und vorübergehend.",
      },
      {
        label: "Neue Kontakte fördern",
        text: "Sportverein, Musikschule oder Spielplatzbesuche helfen, schnell Anschluss zu finden. Kinder finden meist schneller Freunde als Erwachsene.",
      },
      {
        label: "Alte Freundschaften pflegen",
        text: "Videoanrufe, Briefe schreiben, Besuche planen. Der Umzug muss nicht das Ende von Freundschaften bedeuten.",
      },
      {
        label: "Aufmerksam bleiben",
        text: "Achten Sie auf Verhaltensänderungen: Schlafprobleme, Appetitlosigkeit oder Aggression können Zeichen von Überforderung sein. Im Zweifel kinderärztlichen Rat einholen.",
      },
    ],
  },
];

export default function UmzugMitKindernPage() {
  const faqLd = webPageAndFaqSchema({
    path: "/ratgeber/umzug-mit-kindern/",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    faqs: UMZUG_MIT_KINDERN_FAQS,
  });

  return (
    <>
      <JsonLd id="ld-umzug-kinder-faq" data={faqLd} />

      <GuideLayout
        title="Umzug mit Kindern"
        category="ratgeber"
        categoryLabel="Ratgeber"
        sections={sections}
        articleSeo={{
          path: "/ratgeber/umzug-mit-kindern/",
          description: PAGE_DESC,
        }}
      >
        {/* Intro */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Warum Kinder besondere Vorbereitung brauchen
          </h2>
          <p className="text-sm text-[#5A7A8A] leading-relaxed">
            Ein Umzug ist für Erwachsene stressig — für Kinder kann er eine
            Welt bedeuten, die zusammenbricht. Vertraute Umgebung, Freunde,
            Schule: Alles ändert sich auf einmal. Mit der richtigen Vorbereitung
            wird der Umzug aber auch für die Kleinsten zu einem positiven
            Neuanfang. Dieser Ratgeber zeigt Ihnen, wie Sie je nach Alter
            vorgehen und welche organisatorischen Schritte nicht vergessen
            werden dürfen.
          </p>
        </div>

        {/* Altersgerechte Vorbereitung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Kinder altersgerecht vorbereiten
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">
                Kleinkinder (1–3 Jahre)
              </h3>
              <p className="mt-1 text-sm text-[#5A7A8A] leading-relaxed">
                Passen sich meist schnell an, brauchen aber vertraute
                Gegenstände. Lieblingskuscheltier, Schnuller und gewohnte Decke
                immer griffbereit halten — nicht im Umzugskarton verschwinden
                lassen.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">
                Kindergartenkinder (3–6 Jahre)
              </h3>
              <p className="mt-1 text-sm text-[#5A7A8A] leading-relaxed">
                Können Trennungsangst entwickeln. Bilderbücher über Umzüge
                helfen, die Veränderung einzuordnen. Lassen Sie das Kind beim
                Packen der eigenen Spielsachen mithelfen und die neue Wohnung
                vorab besuchen — idealerweise mit Fotos des zukünftigen
                Kinderzimmers.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">
                Grundschulkinder (6–10 Jahre)
              </h3>
              <p className="mt-1 text-sm text-[#5A7A8A] leading-relaxed">
                Trauern oft um Freundschaften und die gewohnte Schulumgebung.
                Sammeln Sie gemeinsam Kontaktdaten der besten Freunde und planen
                Sie bereits vor dem Umzug erste Besuchstermine. Lassen Sie das
                Kind bei der Gestaltung des neuen Zimmers mitentscheiden.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0D2137]">
                Teenager (ab 11 Jahre)
              </h3>
              <p className="mt-1 text-sm text-[#5A7A8A] leading-relaxed">
                Reagieren häufig mit Wut, Traurigkeit oder Rückzug. Erklären
                Sie ehrlich, warum der Umzug nötig ist, und beziehen Sie
                Teenager in Entscheidungen ein. Ein eigenes Zimmer als
                Rückzugsort ist in dieser Phase besonders wichtig.
              </p>
            </div>
          </div>
        </div>

        {/* Timing */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Timing: Wann ist der beste Zeitpunkt?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Sommerferien ideal:</strong>{" "}
                Kein Unterrichtsausfall, genug Zeit zum Einleben, der
                Schulwechsel fällt auf den natürlichen Jahresstart.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Kritische Phasen vermeiden:
                </strong>{" "}
                Nicht direkt vor Prüfungen, in der Kita-Eingewöhnung oder den
                ersten Schulwochen umziehen.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Wochenende bevorzugen:
                </strong>{" "}
                Freitag oder Samstag umziehen, damit die Familie das Wochenende
                zum Einrichten nutzen kann.
              </span>
            </li>
          </ul>
        </div>

        {/* Schule & Kita */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Schule und Kita am neuen Wohnort
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Schulamt kontaktieren:</strong>{" "}
                Möglichst früh das Schulamt am neuen Wohnort anrufen. Benötigt
                werden: Geburtsurkunde, letztes Zeugnis, Meldebescheinigung.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">Sprengelprinzip:</strong> Bei
                Grundschulen wird die Schule meist nach Wohnort zugewiesen.
                Weiterführende Schulen bieten mehr Wahlfreiheit.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">
                  Kita-Platz frühzeitig sichern:
                </strong>{" "}
                Mindestens 3–6 Monate vor dem Umzug am neuen Wohnort anmelden.
                Viele Städte nutzen zentrale Online-Portale (Little Bird,
                Kita-Navigator).
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EBF6FD]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0088CC"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3 w-3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>
                <strong className="text-[#0D2137]">
                  Betreuungslücke einplanen:
                </strong>{" "}
                Zwischen letztem Tag in der alten Einrichtung und erstem Tag in
                der neuen kann eine Lücke entstehen — Betreuung organisieren.
              </span>
            </li>
          </ul>
        </div>

        {/* Umzugstag */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Am Umzugstag mit Kindern
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Betreuung organisieren:
                </strong>{" "}
                Idealerweise sind Kinder am Umzugstag nicht vor Ort.
                Großeltern, Freunde oder ein vertrauter Babysitter sind die
                beste Lösung.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Kinderzimmer zuerst einrichten:
                </strong>{" "}
                Bett aufbauen, Lieblingssachen auspacken. So hat das Kind sofort
                einen vertrauten Rückzugsort in der neuen Wohnung.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Notfall-Tasche packen:
                </strong>{" "}
                Lieblingsspielzeug, Kuscheltier, Snacks, Wechselkleidung — alles
                was das Kind in den ersten Stunden braucht, separat
                transportieren.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Abendroutine beibehalten:
                </strong>{" "}
                Trotz Chaos: Abendessen, Zähneputzen und Gute-Nacht-Geschichte
                wie gewohnt durchziehen. Routine gibt Sicherheit.
              </span>
            </li>
          </ul>
        </div>

        {/* Eingewöhnung */}
        <div
          className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          style={{ borderLeft: "4px solid #0088CC" }}
        >
          <h2 className="mb-3 text-lg font-bold text-[#0D2137]">
            Nach dem Umzug: Eingewöhnung
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">Geduld mitbringen:</strong>{" "}
                Die Eingewöhnung dauert je nach Alter 2–8 Wochen. Rückschritte
                wie Bettnässen oder Klammern sind normal und vorübergehend.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Neue Kontakte fördern:
                </strong>{" "}
                Sportverein, Musikschule oder Spielplatzbesuche helfen, schnell
                Anschluss zu finden.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Alte Freundschaften pflegen:
                </strong>{" "}
                Videoanrufe, Briefe schreiben, Besuche planen. Der Umzug muss
                nicht das Ende von Freundschaften bedeuten.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#5A7A8A]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0088CC]" />
              <span>
                <strong className="text-[#0D2137]">
                  Aufmerksam bleiben:
                </strong>{" "}
                Schlafprobleme, Appetitlosigkeit oder Aggression können Zeichen
                von Überforderung sein. Im Zweifel kinderärztlichen Rat
                einholen.
              </span>
            </li>
          </ul>
        </div>

        {/* Tipp-Box */}
        <div
          className="rounded-2xl border p-4 text-sm"
          style={{ borderColor: "#FF770040", backgroundColor: "#FFF3E8" }}
        >
          <strong className="text-[#0D2137]">Tipp:</strong>{" "}
          <span className="text-[#5A7A8A]">
            Erstellen Sie eine{" "}
            <Link
              href="/checklisten/adressaenderung/"
              className="font-medium text-[#0088CC] hover:underline"
            >
              Adressänderungs-Checkliste
            </Link>{" "}
            speziell für Kinder-Einrichtungen: Schule, Kita, Kinderarzt,
            Sportverein und Musikschule dürfen nicht vergessen werden.
          </span>
        </div>

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#0D2137]">
            Häufige Fragen
          </h2>
          <FaqAccordion items={UMZUG_MIT_KINDERN_FAQS} />
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#EBF6FD" }}
        >
          <p className="mb-4 font-bold text-[#0D2137]">
            Umzugskosten für Ihre Familie berechnen
          </p>
          <Link
            href="/rechner/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-bold text-[#0D2137] transition-transform hover:scale-105"
            style={{ backgroundColor: "#FFCC00" }}
          >
            Zum Umzugskosten-Rechner →
          </Link>
        </div>
      </GuideLayout>
    </>
  );
}
