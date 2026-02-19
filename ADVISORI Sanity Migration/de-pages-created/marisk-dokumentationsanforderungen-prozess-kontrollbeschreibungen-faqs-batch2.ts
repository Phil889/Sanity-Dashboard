import 'dotenv/config'
import { createClient } from '@sanity/client'

// Create client with direct credentials
const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Helper function to generate unique keys
function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating MaRisk Dokumentationsanforderungen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können technische Lösungen die MaRisk-konforme Prozess- und Kontrolldokumentation unterstützen und welche Kriterien sollten bei deren Auswahl berücksichtigt werden?",
        answer: "Moderne technische Lösungen können die Erstellung, Verwaltung und Nutzung von Prozess- und Kontrolldokumentation erheblich effizienter gestalten und die Qualität sowie Konsistenz der Dokumentation verbessern. Die richtige Auswahl und Implementierung solcher Tools ist jedoch ein kritischer Erfolgsfaktor.\n\n* Mehrwerte technischer Dokumentationslösungen:\n• Zentrale Wissensdatenbank: Etablierung eines Single Point of Truth für alle prozess- und kontrollbezogenen Informationen, der konsistente und aktuelle Daten für alle Stakeholder bereitstellt.\n• Automatisierte Versionierung: Lückenlose Nachvollziehbarkeit von Änderungen und Möglichkeit, zu früheren Versionen zurückzukehren, was besonders für regulatorische Prüfungen wichtig ist.\n• Workflow-Integration: Einbindung von Freigabe- und Qualitätssicherungsprozessen direkt in den Dokumentationsprozess, um die Einhaltung des Vier-Augen-Prinzips sicherzustellen.\n• Echtzeit-Kollaboration: Ermöglichung der gleichzeitigen Arbeit mehrerer Fachbereiche an derselben Dokumentation, was die Effizienz steigert und Silodenken reduziert.\n• Automatisierte Konsistenzprüfungen: Identifikation von Inkonsistenzen, Lücken oder Widersprüchen in der Dokumentation durch systemseitige Prüfroutinen.\n\n* Auswahlkriterien für eine optimale Dokumentationslösung:\n• Regulatorische Compliance: Die Lösung muss die spezifischen Anforderungen der MaRisk an die Dokumentation abbilden können und entsprechende Vorlagen und Prüfroutinen bereitstellen.\n• Prozess-Risiko-Kontroll-Integration: Fähigkeit, die Verbindungen zwischen Prozessen, Risiken und Kontrollen transparent darzustellen und zu verwalten.\n• Benutzerfreundlichkeit: Intuitive Bedienung für Fachbereiche ohne technischen Hintergrund, um die Akzeptanz und korrekte Nutzung zu fördern.\n• Anpassungsfähigkeit: Möglichkeit zur Anpassung an institutsspezifische Prozesse, Risikoarten und Kontrolltaxonomien ohne umfangreiche Programmierarbeiten.\n• Berichts- und Auswertungsfunktionen: Umfassende Möglichkeiten zur Erstellung von Management-Berichten, Prüfungsdokumenten und regulatorischen Nachweisen.\n\n* ADVISORI-Unterstützung bei der Toolauswahl und -implementierung:\n• Anforderungsanalyse: Systematische Erfassung Ihrer spezifischen Anforderungen an eine Dokumentationslösung unter Berücksichtigung regulatorischer Vorgaben und operativer Bedürfnisse.\n• Marktüberblick und Vorauswahl: Bewertung verfügbarer Lösungen anhand objektiver Kriterien und Erstellung einer Shortlist geeigneter Tools.\n• Proof of Concept: Durchführung zielgerichteter Testinstallationen mit realen Daten, um die Eignung für Ihre spezifischen Anforderungen zu validieren.\n• Implementierungsbegleitung: Unterstützung bei der Konfiguration, Datenmigration und Integration in Ihre IT-Landschaft.\n• Change Management: Entwicklung von Schulungskonzepten und Unterstützung bei der organisatorischen Verankerung der neuen Lösung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche besonderen Herausforderungen stellen Outsourcing-Prozesse an die MaRisk-konforme Dokumentation und wie kann ADVISORI bei deren Bewältigung unterstützen?",
        answer: "Outsourcing-Prozesse stellen besondere Anforderungen an die Prozess- und Kontrolldokumentation gemäß MaRisk, da hier einerseits die eigene Verantwortung trotz Auslagerung fortbesteht und andererseits Schnittstellen, Überwachungspflichten und Ausstiegsszenarien detailliert dokumentiert werden müssen. Diese spezifischen Herausforderungen erfordern eine besonders sorgfältige Dokumentationsgestaltung.\n\n* Spezifische Dokumentationsanforderungen für Outsourcing-Prozesse:\n• Verantwortungsfortbestand: Klare Dokumentation der trotz Auslagerung bestehenden Verantwortung des auslagernden Unternehmens gemäß AT 9 MaRisk und dessen Umsetzung in der Praxis.\n• Steuerungs- und Kontrollmechanismen: Detaillierte Beschreibung, wie die ausgelagerten Prozesse überwacht, gesteuert und in das eigene Risikomanagement eingebunden werden.\n• Schnittstellen-Management: Präzise Dokumentation aller technischen und organisatorischen Schnittstellen zwischen dem Institut und dem Auslagerungsunternehmen.\n• Service Level Agreements: Dokumentation der vereinbarten Leistungsniveaus, Qualitätsstandards und der Mechanismen zu deren Überwachung.\n• Berichtswesen: Festlegung und Dokumentation der regelmäßigen und anlassbezogenen Berichtspflichten des Dienstleisters und deren Einbindung in die internen Reporting-Strukturen.\n• Notfall- und Ausstiegsszenarien: Detaillierte Planung und Dokumentation von Maßnahmen bei Leistungsstörungen oder für den Fall der Beendigung der Auslagerungsbeziehung.\n\n* Typische Dokumentationslücken bei Outsourcing-Prozessen:\n• Unzureichende End-to-End-Prozessbeschreibung: Fehlende durchgängige Darstellung des Gesamtprozesses über die Organisationsgrenzen hinweg.\n• Unklare Kontrollverantwortlichkeiten: Fehlende klare Abgrenzung zwischen den Kontrollen, die vom Dienstleister durchzuführen sind, und den eigenen Überwachungspflichten.\n• Lückenhafte Notfalldokumentation: Unzureichende Dokumentation der Maßnahmen bei Leistungsstörungen oder für den Insourcing-Fall.\n• Unklare Eskalationswege: Fehlende Definition von Eskalationsverfahren bei Problemen oder Kontrollversagen.\n• Fragmentierte Risikobetrachtung: Isolierte Betrachtung von Risiken ohne Integration in das gesamte Risikomanagement des Instituts.\n\n* ADVISORI-Lösungsansatz für Outsourcing-Dokumentation:\n• Ganzheitliche Prozessbetrachtung: Wir entwickeln eine End-to-End-Prozessdokumentation, die sowohl die internen als auch die ausgelagerten Prozessschritte umfasst und deren Zusammenspiel transparent macht.\n• Kontrolltaxonomie für Outsourcing: Erstellung einer spezifischen Kontrolltaxonomie für ausgelagerte Aktivitäten mit klarer Unterscheidung zwischen Dienstleister-Kontrollen und eigenen Überwachungskontrollen.\n• Schnittstellen-Mapping: Systematische Erfassung und Dokumentation aller technischen, fachlichen und organisatorischen Schnittstellen zwischen Institut und Dienstleister.\n• Integrierte Notfallplanung: Entwicklung und Dokumentation umfassender Notfall- und Ausstiegsszenarien, die in das übergreifende Business Continuity Management integriert sind.\n• Governance-Framework: Etablierung einer transparenten Governance-Struktur für das Management und die Überwachung ausgelagerter Aktivitäten mit klaren Verantwortlichkeiten und Reportinglinien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie sollte ein nachhaltiges Lebenszyklusmanagement für MaRisk-konforme Prozess- und Kontrolldokumentation gestaltet werden und welche Best Practices empfiehlt ADVISORI?",
        answer: "Eine einmal erstellte Prozess- und Kontrolldokumentation verliert ohne systematische Pflege und regelmäßige Aktualisierung schnell an Aktualität und Relevanz. Ein professionelles Lebenszyklusmanagement für die Dokumentation ist daher entscheidend, um den kontinuierlichen regulatorischen Anforderungen gerecht zu werden und den operativen Nutzen der Dokumentation langfristig zu sichern.\n\n* Kernelemente eines effektiven Dokumentations-Lebenszyklusmanagements:\n• Klare Eigentümerschaft: Eindeutige Zuweisung der Verantwortung für jedes Dokumentationselement an einen Prozess- oder Fachbereichsverantwortlichen als primären Content Owner.\n• Definierte Reviewzyklen: Festlegung verbindlicher Zeiträume für die regelmäßige Überprüfung und Aktualisierung der Dokumentation, differenziert nach Kritikalität und Änderungsdynamik der dokumentierten Prozesse.\n• Änderungsmanagement: Etablierung eines strukturierten Prozesses für die Erfassung, Bewertung, Umsetzung und Kommunikation von Änderungen an der Dokumentation.\n• Versionierung und Historisierung: Lückenlose Nachvollziehbarkeit aller Änderungen und Möglichkeit, auf frühere Versionen der Dokumentation zuzugreifen, was besonders für rückblickende Prüfungen wichtig ist.\n• Qualitätssicherung: Implementation systematischer Qualitätssicherungsmaßnahmen, wie das Vier-Augen-Prinzip bei Änderungen und regelmäßige Qualitätsaudits der Dokumentation.\n\n* Auslöser für Dokumentationsaktualisierungen:\n• Regulatorische Änderungen: Anpassung an neue oder geänderte aufsichtsrechtliche Anforderungen, wie MaRisk-Novellen oder neue Rundschreiben der BaFin.\n• Organisatorische Veränderungen: Aktualisierung bei strukturellen Änderungen, neuen Verantwortlichkeiten oder Umorganisationen.\n• Prozessoptimierungen: Nachführung bei operativen Verbesserungen, Automatisierungsmaßnahmen oder Prozessanpassungen.\n• Neue Produkte oder Dienstleistungen: Erweiterung der Dokumentation bei der Einführung neuer Produkte, Dienstleistungen oder Geschäftsfelder.\n• Kontrollanpassungen: Aktualisierung bei Änderungen im Kontrolldesign, neuen Kontrollen oder angepassten Kontrollfrequenzen.\n• Feedback aus Prüfungen: Verbesserung basierend auf Feststellungen aus internen oder externen Prüfungen und Audits.\n\n* ADVISORI-Best-Practices für nachhaltiges Dokumentationsmanagement:\n• Governance-Rahmen: Etablierung eines integrierten Governance-Rahmens für das Dokumentationsmanagement mit klaren Rollen, Verantwortlichkeiten und Eskalationswegen.\n• Automatisierte Erinnerungen: Implementierung eines Systems zur automatisierten Benachrichtigung der Content Owner über anstehende Reviewzyklen oder notwendige Aktualisierungen.\n• Änderungsimpact-Analyse: Durchführung einer systematischen Analyse der Auswirkungen von Änderungen auf andere Dokumentationselemente vor deren Umsetzung.\n• Integriertes Metadatenmanagement: Nutzung von Metadaten zur Steuerung und Überwachung des Dokumentations-Lebenszyklus, einschließlich Gültigkeitsdaten, Verantwortlichkeiten und Abhängigkeiten.\n• Kommunikations- und Schulungskonzept: Entwicklung eines Konzepts zur Kommunikation von Dokumentationsänderungen und zur Schulung der betroffenen Mitarbeiter."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Inwiefern unterstützt eine hochwertige MaRisk-Prozessdokumentation die Interne Revision und externe Prüfer, und wie optimiert ADVISORI die Dokumentation für Prüfungszwecke?",
        answer: "Eine qualitativ hochwertige und gut strukturierte Prozess- und Kontrolldokumentation ist ein entscheidender Erfolgsfaktor für interne und externe Prüfungen. Sie bildet nicht nur die Grundlage für eine effiziente Prüfungsdurchführung, sondern trägt auch wesentlich zur positiven Bewertung des Risikomanagements und internen Kontrollsystems durch Prüfer bei.\n\n* Bedeutung der Dokumentation für Prüfungsprozesse:\n• Prüfungseffzienz: Eine transparente und vollständige Dokumentation ermöglicht Prüfern einen schnellen Überblick über Prozesse und Kontrollen, reduziert Rückfragen und verkürzt die Prüfungsdauer erheblich.\n• Nachvollziehbarkeit: Detaillierte Prozess- und Kontrollbeschreibungen schaffen Transparenz über das \"Was\", \"Wer\", \"Wie\" und \"Warum\" und ermöglichen Prüfern eine fundierte Beurteilung der Angemessenheit und Wirksamkeit.\n• Konsistenznachweis: Eine durchgängige Dokumentation belegt die konsistente Umsetzung regulatorischer Anforderungen über alle Geschäftsbereiche und Prozesse hinweg.\n• Kontrollnachweise: Klar definierte Kontrollnachweise und deren systematische Aufbewahrung erleichtern die Wirksamkeitsprüfung durch Stichproben und Nachweisanforderungen.\n• Veränderungshistorie: Die Dokumentation von Änderungen und deren Gründen ermöglicht Prüfern die Beurteilung der Anpassungsfähigkeit des Risikomanagements an neue Anforderungen.\n\n* Typische Kritikpunkte von Prüfern an der Dokumentation:\n• Inkonsistente Detailtiefe: Uneinheitliche Detaillierung der Dokumentation über verschiedene Prozesse oder Organisationseinheiten hinweg.\n• Fehlende Aktualität: Nicht nachgeführte Dokumentation, die nicht mehr den tatsächlichen Abläufen und Kontrollen entspricht.\n• Lückenhafte Risiko-Kontroll-Zuordnung: Unklare Verbindung zwischen identifizierten Risiken und implementierten Kontrollen.\n• Unzureichende Kontrollbeschreibungen: Zu allgemeine oder unspezifische Beschreibungen von Kontrollaktivitäten ohne klare Durchführungsanweisungen.\n• Mangelnde Nachweisführung: Fehlende Definition oder inkonsistente Aufbewahrung von Kontrollnachweisen.\n• Isolierte Dokumentationselemente: Fragmentierte Dokumentation ohne erkennbaren Gesamtzusammenhang oder mit Widersprüchen zwischen verschiedenen Dokumentationsteilen.\n\n* ADVISORI-Ansatz für prüfungsorientierte Dokumentationsoptimierung:\n• Prüferperspektive einbringen: Wir optimieren Ihre Dokumentation aus der Perspektive interner und externer Prüfer, um typische Kritikpunkte proaktiv zu adressieren.\n• Einheitliches Dokumentationsframework: Entwicklung einer konsistenten Dokumentationsstruktur mit standardisierten Vorlagen für alle Prozess- und Kontrollbeschreibungen.\n• Nachweismanagement-Konzept: Etablierung eines systematischen Ansatzes zur Definition, Erstellung und Aufbewahrung prüfungsrelevanter Nachweise.\n• Risiko-Kontroll-Matrizen: Erstellung transparenter Zuordnungen zwischen Risiken und Kontrollen mit klarer Darstellung der Risikoadressierung.\n• Prüfpfade (Audit Trails): Integration durchgängiger Prüfpfade in die Dokumentation, die die End-to-End-Nachvollziehbarkeit von Prozessen und Kontrollen sicherstellen.\n• Dokumentations-Qualitätssicherung: Durchführung systematischer Reviews der Dokumentation aus Prüfungsperspektive vor tatsächlichen Prüfungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
