import Link from "next/link";
import { SITE_BRAND } from "@/config/site-brand";
import { CONTACT_BLOCK, CONTACT_LEGAL_NAME, PHONE_DISPLAY, PHONE_TEL_HREF } from "@/data/site-content";

type Props = {
  siteHost: string;
};

const hint = "Hinweis: Vorlage ohne anwaltliche Rechtsberatung — Stand: Mai 2026";

export default function DatenschutzBody({ siteHost }: Props) {
  const { email, address } = CONTACT_BLOCK;

  return (
    <article className="space-y-10 text-sm leading-relaxed text-neutral-800 sm:text-base">
      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">1. Datenschutz auf einen Blick</h2>
        <h3 className="font-bold text-brand-dark">Allgemeine Hinweise</h3>
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
          ausschließlich auf Grundlage der gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung
          (DSGVO), des österreichischen Datenschutzgesetzes (DSG), des Telekommunikationsgesetzes (TKG) sowie des
          Telekommunikation-Telemedien-Datenschutz-Gesetzes, soweit anwendbar.
        </p>
        <p>
          Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten beim Besuch unserer Website{" "}
          <span className="font-semibold">{siteHost}</span> und bei der Kontaktaufnahme mit uns verarbeitet werden.
          Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich identifiziert werden können, zum
          Beispiel Name, Adresse, Telefonnummer, E-Mail-Adresse oder IP-Adresse.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">2. Verantwortlicher</h2>
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <p className="rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900">
          <strong>{CONTACT_LEGAL_NAME}</strong>
          <br />
          <span className="text-neutral-700">{SITE_BRAND}</span>
          <br />
          {address}
          <br />
          Österreich
          <br />
          E-Mail:{" "}
          <a className="font-semibold text-brand-orange underline" href={`mailto:${email}`}>
            {email}
          </a>
          <br />
          Telefon:{" "}
          <a className="font-semibold text-brand-orange underline" href={PHONE_TEL_HREF}>
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          Verantwortlicher ist jene natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
          Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">3. Welche Daten wir verarbeiten</h2>
        <p>Beim Besuch unserer Website können insbesondere folgende Daten verarbeitet werden:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seite bzw. Datei</li>
          <li>übertragene Datenmenge</li>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Angaben, die Sie uns über Kontaktformulare, E-Mail, Telefon oder WhatsApp freiwillig übermitteln</li>
        </ul>
        <p className="text-xs text-neutral-500">{hint}</p>
        <p>
          Diese Daten werden verarbeitet, um die Website technisch bereitzustellen, die Sicherheit der Website zu
          gewährleisten, Anfragen zu bearbeiten und unsere Leistungen anbieten zu können.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">4. Hosting bei IONOS</h2>
        <p>Unsere Website wird bei IONOS gehostet.</p>
        <p>
          Beim Besuch unserer Website verarbeitet der Hosting-Anbieter technische Zugriffsdaten, sogenannte Server-Logfiles.
          Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser, Betriebssystem,
          Referrer-URL und aufgerufene Seiten gehören.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt, um die Website sicher, stabil und technisch fehlerfrei bereitzustellen.
          Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Soweit IONOS personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage eines Vertrages
          über Auftragsverarbeitung gemäß Art. 28 DSGVO.
        </p>
        <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt durch uns nicht.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
          5. Kontaktaufnahme per Formular, E-Mail oder Telefon
        </h2>
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren, verarbeiten wir jene Daten,
          die Sie uns freiwillig mitteilen. Dazu können insbesondere gehören:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Adresse oder Einsatzort</li>
          <li>gewünschte Leistung</li>
          <li>Nachricht bzw. Beschreibung des Anliegens</li>
        </ul>
        <p>
          Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage, zur Erstellung eines Angebots, zur
          Durchführung vorvertraglicher Maßnahmen oder zur Abwicklung eines Auftrags.
        </p>
        <p>Rechtsgrundlagen der Verarbeitung sind:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Art. 6 Abs. 1 lit. b DSGVO, sofern die Verarbeitung zur Erfüllung eines Vertrages oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist;
          </li>
          <li>Art. 6 Abs. 1 lit. f DSGVO, sofern wir ein berechtigtes Interesse an der Bearbeitung Ihrer Anfrage haben;</li>
          <li>Art. 6 Abs. 1 lit. a DSGVO, sofern Sie uns eine Einwilligung erteilt haben.</li>
        </ul>
        <p>
          Ihre Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben, außer dies ist zur Bearbeitung Ihrer
          Anfrage, zur Vertragserfüllung oder aufgrund gesetzlicher Verpflichtungen erforderlich.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">6. Kontaktaufnahme über WhatsApp</h2>
        <p>Auf unserer Website kann eine Kontaktaufnahme über WhatsApp angeboten werden.</p>
        <p>
          Wenn Sie uns über WhatsApp kontaktieren, werden personenbezogene Daten wie Telefonnummer, Profilname,
          Nachrichteninhalt und gegebenenfalls übermittelte Fotos oder Dokumente verarbeitet.
        </p>
        <p>
          Bitte beachten Sie, dass WhatsApp ein Dienst der WhatsApp Ireland Limited bzw. der Meta-Unternehmensgruppe
          ist. Bei der Nutzung von WhatsApp können Daten auch durch WhatsApp selbst verarbeitet werden. Wir haben keinen
          vollständigen Einfluss auf die Datenverarbeitung durch WhatsApp.
        </p>
        <p className="text-xs text-neutral-500">{hint}</p>
        <p>
          Die Nutzung von WhatsApp erfolgt freiwillig. Alternativ können Sie uns jederzeit per E-Mail oder telefonisch
          kontaktieren.
        </p>
        <p>
          Rechtsgrundlage für die Verarbeitung Ihrer an uns übermittelten Daten ist Art. 6 Abs. 1 lit. b DSGVO, sofern die
          Kommunikation der Vertragsanbahnung oder Vertragsabwicklung dient, sowie Art. 6 Abs. 1 lit. f DSGVO aufgrund
          unseres berechtigten Interesses an einer einfachen und schnellen Kommunikation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">7. Cookies</h2>
        <p>Unsere Website kann Cookies verwenden.</p>
        <p>
          Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, die Website
          nutzerfreundlicher, sicherer und technisch funktionsfähig zu machen.
        </p>
        <p>
          Wir verwenden, soweit technisch erforderlich, sogenannte notwendige Cookies. Diese sind erforderlich, damit die
          Website ordnungsgemäß funktioniert.
        </p>
        <p>
          Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
          liegt in der sicheren und funktionsfähigen Bereitstellung unserer Website.
        </p>
        <p>
          Sollten darüber hinaus nicht notwendige Cookies, Analyse-Cookies oder Marketing-Cookies eingesetzt werden,
          erfolgt deren Verwendung nur nach Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können
          eine erteilte Einwilligung jederzeit widerrufen.
        </p>
        <p>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden, Cookies nur im
          Einzelfall erlauben oder Cookies generell ausschließen. Bei der Deaktivierung von Cookies kann die
          Funktionalität der Website eingeschränkt sein.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">8. Kontaktformular auf der Website</h2>
        <p>
          Unsere Website enthält ein Kontaktformular zur Anfrage von Leistungen wie Räumung, Entrümpelung, Entsorgung,
          Auflösung, Reinigung oder Besichtigung.
        </p>
        <p>
          Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen
          Kontaktdaten zwecks Bearbeitung der Anfrage und für etwaige Anschlussfragen gespeichert.
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage mit der Erfüllung eines
          Vertrags oder vorvertraglichen Maßnahmen zusammenhängt. In allen übrigen Fällen erfolgt die Verarbeitung auf
          Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO an der effizienten Bearbeitung Ihrer
          Anfrage.
        </p>
        <p>
          Die von Ihnen eingegebenen Daten verbleiben bei uns, bis der Zweck der Speicherung entfällt, Sie uns zur Löschung
          auffordern oder gesetzliche Aufbewahrungspflichten einer Löschung entgegenstehen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">9. Kunden- und Vertragsdaten</h2>
        <p>
          Wir verarbeiten personenbezogene Daten von Kunden und Interessenten, soweit dies zur Angebotserstellung,
          Auftragsabwicklung, Rechnungslegung, Kommunikation und Erfüllung gesetzlicher Pflichten erforderlich ist.
        </p>
        <p>Dazu können insbesondere gehören:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Name, Adresse, Telefonnummer, E-Mail-Adresse</li>
          <li>Leistungsdaten, Auftragsdaten</li>
          <li>Zahlungsdaten und Rechnungsdaten</li>
        </ul>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO für die Vertragserfüllung und Durchführung vorvertraglicher
          Maßnahmen sowie Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Verpflichtungen, insbesondere steuer- und
          unternehmensrechtlicher Aufbewahrungspflichten.
        </p>
        <p className="text-xs text-neutral-500">{hint}</p>
        <p>
          Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, soweit dies zur Vertragsabwicklung erforderlich
          ist, etwa an Steuerberater, Zahlungsdienstleister, Behörden, Entsorgungs- oder Transportpartner, oder wenn eine
          gesetzliche Verpflichtung besteht.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">10. Speicherdauer</h2>
        <p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist.</p>
        <p>
          Daten aus Anfragen werden gelöscht, sobald die Anfrage vollständig erledigt ist und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
        <p>
          Kunden-, Vertrags- und Rechnungsdaten werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert. In
          Österreich können unternehmens- und steuerrechtliche Aufbewahrungspflichten insbesondere sieben Jahre betragen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">11. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
          TLS-Verschlüsselung.
        </p>
        <p>
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt und
          ein Schloss-Symbol angezeigt wird.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können Daten, die Sie an uns übermitteln, grundsätzlich
          nicht von Dritten mitgelesen werden.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">12. Google-Bewertungen und externe Links</h2>
        <p>
          Auf unserer Website können Hinweise auf Google-Bewertungen oder Links zu externen Profilen eingebunden sein.
        </p>
        <p>
          Wenn Sie auf einen solchen externen Link klicken, verlassen Sie unsere Website. Für die Datenverarbeitung auf
          den verlinkten Seiten ist der jeweilige Anbieter verantwortlich.
        </p>
        <p>Bitte beachten Sie die Datenschutzhinweise des jeweiligen Anbieters.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">13. Keine Nutzung von WordPress</h2>
        <p>
          Diese Website ist kein Produkt von WordPress. Es werden daher keine WordPress-spezifischen Datenverarbeitungen,
          WordPress-Kommentarfunktionen oder WordPress-Plugins beschrieben.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
          14. Keine pauschale Nutzung von Analyse- und Marketingdiensten
        </h2>
        <p>
          Nach aktuellem Stand werden in dieser Datenschutzerklärung keine Dienste wie Google Analytics, Google Ads, Google
          AdSense, Facebook Pixel, Instagram-Plugins, Twitter/X-Plugins, Pinterest-Plugins, YouTube-Plugins, Google Maps
          oder OpenStreetMap beschrieben.
        </p>
        <p>
          Sollten solche Dienste künftig tatsächlich auf der Website eingebunden werden, muss diese Datenschutzerklärung
          vorab entsprechend erweitert werden. Falls nicht notwendige Cookies oder Tracking-Technologien verwendet
          werden, ist in der Regel zusätzlich eine vorherige Einwilligung über ein Cookie-Banner erforderlich.
        </p>
        <p className="text-xs text-neutral-500">{hint}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">15. Ihre Rechte</h2>
        <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
          <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
          <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
          <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
          <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
          <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
          <li>Recht auf Widerruf einer erteilten Einwilligung gemäß Art. 7 Abs. 3 DSGVO</li>
        </ul>
        <p>
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht
          verstößt, haben Sie das Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzubringen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
          16. Zuständige Datenschutzaufsichtsbehörde
        </h2>
        <p className="rounded-lg border border-neutral-200 bg-white p-4">
          Österreichische Datenschutzbehörde
          <br />
          Barichgasse 40–42
          <br />
          1030 Wien
          <br />
          Österreich
          <br />
          E-Mail:{" "}
          <a className="font-semibold text-brand-orange underline" href="mailto:dsb@dsb.gv.at">
            dsb@dsb.gv.at
          </a>
          <br />
          Website:{" "}
          <a
            className="font-semibold text-brand-orange underline"
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dsb.gv.at
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">17. Widerruf einer Einwilligung</h2>
        <p>
          Wenn eine Datenverarbeitung auf Ihrer Einwilligung beruht, können Sie diese Einwilligung jederzeit mit Wirkung
          für die Zukunft widerrufen.
        </p>
        <p>
          Dazu reicht eine formlose Mitteilung per E-Mail an:{" "}
          <a className="font-semibold text-brand-orange underline" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p>Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">
          18. Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen
        </h2>
        <p>
          Wenn wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht,
          aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung
          einzulegen.
        </p>
        <p>
          Wenn Sie Widerspruch einlegen, verarbeiten wir Ihre personenbezogenen Daten nicht mehr, es sei denn, wir können
          zwingende schutzwürdige Gründe für die Verarbeitung nachweisen oder die Verarbeitung dient der Geltendmachung,
          Ausübung oder Verteidigung von Rechtsansprüchen.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">19. Datensicherheit</h2>
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre personenbezogenen Daten gegen Verlust,
          Missbrauch, unbefugten Zugriff, Veränderung oder Veröffentlichung zu schützen.
        </p>
        <p>
          Wir weisen jedoch darauf hin, dass die Datenübertragung im Internet, insbesondere bei der Kommunikation per
          E-Mail, Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </p>
        <p className="text-xs text-neutral-500">{hint}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-extrabold uppercase tracking-tight text-brand-dark">20. Aktualität dieser Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung ist aktuell gültig.</p>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website, die eingesetzten Dienste oder
          die gesetzlichen Anforderungen ändern.
        </p>
        <p>
          <Link href="#kontakt-formular" className="font-semibold text-brand-orange underline">
            Zum Kontaktformular
          </Link>
        </p>
      </section>
    </article>
  );
}
