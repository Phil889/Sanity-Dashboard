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
    console.log('Updating MiFID Produkt Anlegerschutz page with strategic FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollten Finanzinstitute die MiFID II-Anforderungen an Zielmarkt und Geeignetheitsprüfung mit der Datenschutz-Grundverordnung (DSGVO) in Einklang bringen?",
        answer: "Die gleichzeitige Einhaltung von MiFID II und DSGVO stellt Finanzinstitute vor eine besondere Herausforderung, da beide Regelwerke umfangreiche, teils gegensätzliche Anforderungen an den Umgang mit Kundendaten stellen. Eine durchdachte, integrierte Compliance-Strategie ist erforderlich, um beiden regulatorischen Anforderungen gerecht zu werden und gleichzeitig betriebliche Effizienz zu wahren.\n\n🔄 Zentrale Spannungsfelder zwischen MiFID II und DSGVO:\n• Datensammlung vs. Datenminimierung: MiFID II erfordert eine umfassende Erhebung von Kundendaten für Geeignetheitsprüfungen, während die DSGVO den Grundsatz der Datenminimierung verfolgt.\n• Langfristige Aufbewahrung vs. Löschpflicht: MiFID II verlangt die langfristige Aufbewahrung von Beratungsdokumentationen, während die DSGVO Löschpflichten und Speicherbegrenzungen vorschreibt.\n• Datenweitergabe vs. Einwilligungserfordernis: MiFID II kann den Austausch von Kundendaten zwischen Produktherstellern und -vertreibern erfordern, während die DSGVO strikte Einwilligungserfordernisse für Datenübermittlungen vorsieht.\n• Profilbildung vs. Automatisierungsverbot: Zielmarktdefinitionen und digitale Geeignetheitsprüfungen können eine Form der Profilbildung darstellen, die unter der DSGVO besonderen Beschränkungen unterliegt.\n\n⚖️ Der ADVISORI-Harmonisierungsansatz:\n• Rechtmäßigkeitsgrundlagen-Framework: Entwicklung eines strukturierten Frameworks zur Identifikation der jeweils passenden Rechtsgrundlagen für verschiedene Datenverarbeitungszwecke im MiFID II-Kontext.\n• Transparente Kundeninformation: Gestaltung klarer, verständlicher Informationen für Kunden über die Verarbeitung ihrer Daten im Rahmen von Anlegerschutzprozessen, die sowohl MiFID II als auch DSGVO-Anforderungen erfüllen.\n• Integrierte Datenarchitektur: Konzeption einer Datenarchitektur, die sowohl die umfassenden Dokumentationspflichten unter MiFID II als auch Lösch- und Zugriffsverwaltungsfunktionen gemäß DSGVO unterstützt.\n• Privacy by Design-Ansatz: Integration von Datenschutzprinzipien direkt in die Gestaltung von MiFID II-Prozessen und -Systemen, um Compliance-Konflikte von vornherein zu minimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielen ESG-Kriterien im Kontext von MiFID II-Produktgovernance und Geeignetheitsprüfungen und wie unterstützt ADVISORI bei deren Integration?",
        answer: "Die Integration von ESG-Kriterien (Environmental, Social, Governance) in MiFID II-Prozesse gewinnt zunehmend an Bedeutung und wird durch regulatorische Änderungen wie die Novelle der MiFID II-Delegierten Verordnung weiter verstärkt. Diese Entwicklung stellt Finanzinstitute vor die Herausforderung, Nachhaltigkeitspräferenzen systematisch in ihre Produktgovernance- und Beratungsprozesse zu integrieren.\n\n🌱 Schlüsselaspekte der ESG-Integration in MiFID II-Prozesse:\n• Nachhaltigkeitspräferenzen in der Kundenprofilierung: Erweiterung der Geeignetheitsprüfung um eine strukturierte Erfassung und Bewertung der Nachhaltigkeitspräferenzen von Kunden mit differenzierten Abstufungen und klaren Definitionen.\n• ESG-Faktoren in der Zielmarktdefinition: Integration von Nachhaltigkeitsmerkmalen als explizite Dimension in die Zielmarktdefinition von Finanzprodukten mit klaren Kriterien für nachhaltige, teilweise nachhaltige und nicht-nachhaltige Produkte.\n• Produktklassifizierung nach ESG-Kriterien: Entwicklung einer systematischen Methodik zur Klassifizierung und Kennzeichnung von Finanzprodukten hinsichtlich ihrer Nachhaltigkeitsmerkmale auf Basis regulatorischer Anforderungen und Marktstandards.\n• Beraterqualifikation für ESG: Sicherstellung, dass Berater über ausreichende Kenntnisse und Fähigkeiten verfügen, um Nachhaltigkeitsaspekte kompetent in die Kundenberatung zu integrieren.\n\n🔍 Der ADVISORI-Integrationsansatz für ESG:\n• Ganzheitliches ESG-Framework: Entwicklung eines umfassenden, regulatorisch robusten Frameworks zur Integration von Nachhaltigkeitsaspekten in alle relevanten MiFID II-Prozesse – von der Produktentwicklung bis zur Kundendokumentation.\n• Präferenzerfassungs-Methodik: Konzeption einer strukturierten, nuancierten Methodik zur Erfassung und Gewichtung verschiedener Nachhaltigkeitspräferenzen von Kunden, die sowohl regulatorisch konform als auch praktisch anwendbar ist.\n• ESG-Produkt-Mapping: Erstellung eines systematischen Ansatzes zum Matching von Kundenpräferenzen mit entsprechenden ESG-Produkteigenschaften auf Basis transparenter, nachvollziehbarer Kriterien.\n• Change Management für ESG: Unterstützung bei der organisatorischen und kulturellen Transformation, um Nachhaltigkeitsaspekte erfolgreich in die Beratungspraxis und Produktgovernance zu integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können grenzüberschreitend tätige Finanzinstitute mit nationalen Unterschieden bei der Umsetzung von MiFID II-Anlegerschutzanforderungen umgehen?",
        answer: "Die MiFID II als europäische Richtlinie lässt den Mitgliedstaaten gewisse Spielräume bei der nationalen Umsetzung, was zu Unterschieden in den konkreten Anforderungen führen kann. Für grenzüberschreitend tätige Finanzinstitute stellt diese regulatorische Fragmentierung eine besondere Herausforderung dar, die ein durchdachtes, strategisches Management erfordert.\n\n🌍 Zentrale Herausforderungen der grenzüberschreitenden Compliance:\n• Nationale Goldplating-Initiativen: Identifikation und Management zusätzlicher Anforderungen in einzelnen Ländern, die über die Mindestanforderungen der MiFID II hinausgehen und spezifische lokale Anpassungen erfordern.\n• Divergierende Interpretationen: Umgang mit unterschiedlichen Auslegungen und Umsetzungspraktiken der nationalen Aufsichtsbehörden, selbst bei identischen Rechtstexten.\n• Prozessuale Besonderheiten: Berücksichtigung länderspezifischer Anforderungen an Prozesse, Dokumentation und Berichterstattung, die erheblich variieren können.\n• Sprachliche und kulturelle Unterschiede: Anpassung der Kundenkommunikation und Dokumentation an lokale sprachliche und kulturelle Gegebenheiten bei gleichzeitiger Wahrung der inhaltlichen Konsistenz.\n\n🔄 Der ADVISORI-Ansatz für grenzüberschreitende Compliance:\n• Regulatorische Heat Map: Entwicklung einer detaillierten Übersicht nationaler Besonderheiten in der MiFID II-Umsetzung mit Fokus auf Anlegerschutz und Produktgovernance-Anforderungen.\n• Modulares Compliance-Framework: Konzeption eines flexiblen Compliance-Frameworks mit einem konsistenten Kern und modularen Erweiterungen für länderspezifische Anforderungen.\n• Skalierbare Prozessarchitektur: Gestaltung skalierbarer Prozesse und Systeme, die zentrale Standards einhalten und gleichzeitig lokale Variationen effizient unterstützen.\n• Koordiniertes Aufsichtsbehörden-Management: Etablierung eines strukturierten Ansatzes zur proaktiven Kommunikation mit verschiedenen nationalen Aufsichtsbehörden, um konsistente Interpretationen zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute ihre MiFID II-Anlegerschutzprozesse effektiv prüfen und kontinuierlich verbessern?",
        answer: "Die erfolgreiche Implementierung von MiFID II-Anlegerschutzprozessen erfordert mehr als eine einmalige Umsetzung – sie bedingt eine kontinuierliche Überprüfung, Bewertung und Optimierung. Ein systematisches Qualitätsmanagement ist essentiell, um sowohl regulatorische Compliance sicherzustellen als auch operationelle Effizienz und Kundenorientierung zu verbessern.\n\n🔄 Kernelemente eines effektiven Qualitätsmanagements für MiFID II-Prozesse:\n• Mehrdimensionales Monitoring-Framework: Etablierung eines umfassenden Überwachungssystems, das sowohl Compliance-Aspekte als auch operative Effizienz und Kundenzufriedenheit kontinuierlich erfasst und bewertet.\n• Regelmäßige Compliance-Reviews: Durchführung strukturierter, periodischer Überprüfungen aller Anlegerschutzprozesse auf Konformität mit aktuellen regulatorischen Anforderungen und internen Standards.\n• Prozessleistungsmessung: Implementation eines KPI-basierten Systems zur objektiven Bewertung der Effizienz und Effektivität der Anlegerschutzprozesse mit klaren Zielwerten und Benchmarks.\n• Feedback-Integration: Systematische Erfassung und Analyse von Feedback aus verschiedenen Quellen – von Mitarbeitern über Kunden bis hin zu Aufsichtsbehörden – als Basis für kontinuierliche Verbesserungen.\n\n📈 Der ADVISORI-Qualitätsmanagement-Ansatz:\n• Integriertes Assurance-Modell: Entwicklung eines ganzheitlichen Prüfungs- und Qualitätssicherungsmodells, das verschiedene Verteidigungslinien – von Selbstkontrollen über interne Überprüfungen bis hin zu externen Audits – systematisch koordiniert.\n• Datenbasierte Prozessanalyse: Nutzung fortschrittlicher Analysetechniken zur Identifikation von Mustern, Trends und Anomalien in Anlegerschutzprozessen, die auf Optimierungspotenziale oder Compliance-Risiken hindeuten.\n• Continuous Improvement Framework: Etablierung eines strukturierten Rahmenwerks für kontinuierliche Verbesserungen mit klaren Prozessen für die Identifikation, Priorisierung, Umsetzung und Erfolgsmessung von Optimierungsmaßnahmen.\n• Benchmarking und Best Practices: Systematischer Vergleich mit Branchenstandards und Best Practices sowie gezielte Integration externer Impulse und Innovationen in die eigenen Prozesse."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
