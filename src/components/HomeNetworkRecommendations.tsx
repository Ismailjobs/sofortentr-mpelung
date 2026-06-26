import Link from "next/link";
import { PARTNER_PATH, SITE_PARTNERS } from "@/data/site-content";

const objektraeumung = SITE_PARTNERS.find((p) => p.url.includes("objektraeumung.at"));
const swiftUmzug = SITE_PARTNERS.find((p) => p.url.includes("swiftumzug.at"));

const externalLinkClass =
  "font-medium text-brand-dark underline decoration-brand-orange/35 underline-offset-[3px] transition hover:text-brand-orange hover:decoration-brand-orange";

const internalLinkClass =
  "font-medium text-brand-dark underline decoration-brand-orange/35 underline-offset-[3px] transition hover:text-brand-orange hover:decoration-brand-orange";

/** Startseite: dezente Partner-Empfehlung direkt über dem Footer (SEO-Netzwerk, kein Link-Spam). */
export default function HomeNetworkRecommendations() {
  if (!objektraeumung || !swiftUmzug) return null;

  return (
    <section
      aria-labelledby="home-network-recommendations"
      className="border-t border-black/[0.06] bg-brand-muted/60 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[min(100%,88rem)] px-3 sm:px-5 lg:px-6">
        <h2
          id="home-network-recommendations"
          className="sr-only"
        >
          Empfohlene Partner im Netzwerk
        </h2>
        <p className="mx-auto max-w-3xl text-pretty text-center text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem] sm:leading-7">
          Suchen Sie professionelle Räumungsdienste in Wien oder planen Sie einen kompletten Umzug? Für
          erstklassige Wohnungsauflösungen, Entrümpelungen und zertifizierte Verlassenschaftsräumungen im
          Wiener Raum empfehlen wir unseren spezialisierten Partner{" "}
          <a
            href={objektraeumung.url}
            target="_blank"
            rel="noopener noreferrer"
            className={externalLinkClass}
          >
            Objekträumung Wien
          </a>
          . Wenn Sie einen zuverlässigen Umzugsservice mit klarer Kostenplanung in ganz Österreich suchen, ist{" "}
          <a href={swiftUmzug.url} target="_blank" rel="noopener noreferrer" className={externalLinkClass}>
            Swift Umzug
          </a>{" "}
          die direkte Option. Unser gesamtes österreichweites Netzwerk finden Sie auf unserer{" "}
          <Link href={PARTNER_PATH} className={internalLinkClass}>
            Partnerseite
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
