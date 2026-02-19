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
    console.log('Updating EBA FinRep COREP Anpassungen page with C-Level FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-finrep-corep-anpassungen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-finrep-corep-anpassungen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die Qualität und Konsistenz der Datengrundlage für FinRep- und COREP-Meldungen nachhaltig verbessern?",
        answer: "Die nachhaltige Verbesserung der Datenqualität für FinRep- und COREP-Meldungen erfordert einen ganzheitlichen Ansatz, der weit über punktuelle Korrekturmaßnahmen hinausgeht. Ein strategisches Datenqualitätsmanagement adressiert sowohl technische Infrastrukturen als auch organisatorische Prozesse und etabliert eine qualitätsorientierte Datenkultur im gesamten Unternehmen.\n\n🔄 Systematische Datenqualitätsarchitektur:\n• Data Lineage & Mapping: Implementierung durchgängiger Dokumentation des Datenflusses von der Quelle bis zur Meldung, mit klarer Abbildung aller Transformationsschritte und Verantwortlichkeiten.\n• Zentrale Masterdaten-Governance: Etablierung eines institutionsweiten Masterdaten-Management-Systems mit einheitlichen Definitionen, Standards und Pflegeprozessen für kritische Referenzdaten.\n• Integrierte Validierungsschichten: Aufbau eines mehrstufigen Validierungssystems mit Prüfungen auf Quellsystem-, ETL-, Datenhub- und Reporting-Ebene zur frühzeitigen Fehlererkennung.\n• Datenqualitäts-Dashboards: Entwicklung transparenter Monitoring-Systeme, die Datenqualitätsmetriken auf verschiedenen Granularitätsebenen visualisieren und Trends sichtbar machen.\n\n👥 Organisatorische Exzellenz für nachhaltige Datenqualität:\n• Datenqualitäts-Stewardship: Etablierung dedizierter Rollen mit klarer Verantwortung für die Qualität bestimmter Datenbereiche, ausgestattet mit entsprechenden Befugnissen und Ressourcen.\n• Cross-funktionale Datenqualitäts-Gremien: Einrichtung bereichsübergreifender Arbeitsgruppen, die Datenqualitätsprobleme analysieren und koordinierte Lösungsansätze entwickeln.\n• Anreizsysteme für Datenqualität: Integration von Datenqualitätszielen in Performance-Bewertungen und Vergütungssysteme zur Förderung qualitätsbewussten Verhaltens.\n• Kontinuierliche Schulung und Sensibilisierung: Durchführung regelmäßiger Trainings und Kommunikationsmaßnahmen zur Stärkung des Bewusstseins für die Bedeutung von Datenqualität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Strategien empfehlen Sie für ein effektives Change Management bei der Implementierung neuer FinRep- und COREP-Anforderungen?",
        answer: "Die erfolgreiche Implementierung neuer FinRep- und COREP-Anforderungen erfordert ein durchdachtes Change-Management, das weit über technische Anpassungen hinausgeht. Ein ganzheitlicher Ansatz berücksichtigt sowohl strukturelle als auch kulturelle Dimensionen des Wandels und schafft die Voraussetzungen für eine nachhaltige Transformation der Meldeprozesse.\n\n🌱 Strategische Fundamente eines wirksamen Change Managements:\n• Integrierte Change-Governance: Etablierung einer klaren Governance-Struktur mit definierten Rollen, Entscheidungsbefugnissen und Kommunikationslinien spezifisch für regulatorische Änderungsprojekte.\n• Stakeholder-zentrierte Planung: Systematische Identifikation und Analyse aller betroffenen Stakeholder-Gruppen mit maßgeschneiderten Engagement-Strategien für unterschiedliche Interessenlagen und Einflussniveaus.\n• Kaskadierendes Sponsorship: Aufbau einer durchgängigen Sponsorship-Kette von der Vorstandsebene bis zu operativen Führungskräften, die den Wandel aktiv fördern und legitimieren.\n• Integriertes Ressourcenmanagement: Entwicklung realistischer Ressourcenpläne, die sowohl die Implementierung als auch den parallelen Regelbetrieb berücksichtigen und Überlastungen vermeiden.\n\n🚀 Operative Exzellenz in der Umsetzung:\n• Phasenorientierte Kommunikation: Gestaltung einer differenzierten Kommunikationsstrategie, die den spezifischen Informationsbedarf in verschiedenen Projektphasen adressiert und Unsicherheiten reduziert.\n• Befähigungs- und Schulungsprogramme: Implementierung umfassender Trainingsmaßnahmen, die fachliche, methodische und technische Kompetenzen für neue Meldeanforderungen vermitteln.\n• Frühe Erfolge und Momentum: Identifikation und Realisierung schneller Erfolge, die den Nutzen der Veränderung demonstrieren und die Motivation für weitere Transformationsschritte stärken.\n• Kontinuierliches Feedback und Anpassung: Etablierung strukturierter Feedback-Mechanismen, die frühzeitig Implementierungsprobleme erkennen und agile Anpassungen des Change-Ansatzes ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollten wir unsere internen Kontrollen für FinRep- und COREP-Prozesse gestalten, um maximale Sicherheit bei optimaler Effizienz zu erreichen?",
        answer: "Die Gestaltung optimaler interner Kontrollen für FinRep- und COREP-Prozesse erfordert eine Balance zwischen robuster Sicherheit und operativer Effizienz. Ein durchdachtes Kontrollframework kombiniert präventive, detektive und korrektive Maßnahmen an strategischen Kontrollpunkten und nutzt Technologie zur Automatisierung und Intelligenz von Kontrollprozessen.\n\n🔒 Architektur eines effektiven Kontrollsystems:\n• Risikobasierte Kontrollstrategie: Priorisierung von Kontrollen basierend auf einer systematischen Bewertung von Risiken hinsichtlich Eintrittswahrscheinlichkeit, potenzieller Auswirkung und Erkennbarkeit.\n• Mehrstufige Kontrolllinien: Implementation eines koordinierten Three-Lines-of-Defense-Modells mit klarer Abgrenzung zwischen operativen Kontrollen, unabhängiger Überwachung und interner Revision.\n• Integrierte Kontrollen: Einbettung von Kontrollen direkt in Geschäftsprozesse und IT-Systeme, statt nachgelagerter manueller Prüfungen, um Effizienz zu steigern und Fehlerrisiken zu reduzieren.\n• Kontrollkonvergenz: Harmonisierung von Kontrollen über verschiedene regulatorische Domänen (FinRep, COREP, Statistik, etc.) hinweg, um Redundanzen zu vermeiden und Synergien zu nutzen.\n\n⚙️ Operative Exzellenz im Kontrollmanagement:\n• Automatisierte Kontrolltechnologien: Einsatz von regelbasierten Systemen, Mustererkennungsalgorithmen und KI zur Automatisierung von Routinekontrollen und Identifikation komplexer Anomalien.\n• Echtzeit-Monitoring und Dashboards: Implementierung von Echtzeit-Überwachungssystemen mit intuitiven Visualisierungen, die Kontrollstatus, Ausnahmen und Trends transparent darstellen.\n• Kontrolldokumentation und -nachvollziehbarkeit: Etablierung strukturierter Dokumentationsprozesse, die alle Kontrollergebnisse, Abweichungen und Korrekturmaßnahmen lückenlos erfassen.\n• Kontinuierliche Verbesserung: Regelmäßige Evaluation der Kontrolleffektivität und -effizienz mit systematischer Anpassung basierend auf neuen Risiken, Compliance-Anforderungen und technologischen Möglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Aspekte sind bei der Auswahl oder Entwicklung technischer Lösungen für FinRep- und COREP-Anpassungen besonders zu beachten?",
        answer: "Die Auswahl oder Entwicklung technischer Lösungen für FinRep- und COREP-Anpassungen erfordert einen strategischen Entscheidungsansatz, der weit über kurzfristige funktionale Anforderungen hinausgeht. Eine zukunftssichere Technologieentscheidung berücksichtigt sowohl aktuelle Compliance-Erfordernisse als auch langfristige Flexibilität, Skalierbarkeit und Total Cost of Ownership.\n\n📋 Strategische Bewertungskriterien für Technologieentscheidungen:\n• Regulatorische Agilität: Fähigkeit der Lösung, auf neue oder geänderte aufsichtsrechtliche Anforderungen ohne umfangreiche Programmierungen oder Versionsupdates zu reagieren.\n• Integrationsarchitektur: Qualität und Flexibilität der Schnittstellen zu bestehenden Quellsystemen, Datenplattformen und anderen Meldewesenkomponenten.\n• Governance-Unterstützung: Funktionalitäten für Versionierung, Audit Trails, Berechtigungsmanagement und Nachvollziehbarkeit aller Änderungen und Anpassungen.\n• Skalierbarkeit und Performance: Fähigkeit, mit wachsenden Datenvolumina, zusätzlichen Meldeanforderungen und kürzeren Berichtszyklen umzugehen, ohne Einbußen bei Verarbeitungsgeschwindigkeit oder Stabilität.\n\n🔄 Implementierungstechnische Erfolgsfaktoren:\n• Business-IT-Alignment: Enge Zusammenarbeit zwischen Fachbereich und IT bei der Definition von Anforderungen, Priorisierung von Funktionalitäten und Validierung von Lösungsansätzen.\n• Modularer Aufbau: Strukturierung der Lösung in unabhängig aktualisierbare Komponenten für Datenintegration, Berechnungslogik, Validierung und Reporting-Output.\n• Flexible Konfigurierbarkeit: Möglichkeit, wesentliche Anpassungen wie Taxonomie-Updates, Validierungsregeln oder Mapping-Logiken durch Konfiguration statt Programmierung umzusetzen.\n• Testbarkeit und DevOps-Integration: Unterstützung für automatisierte Tests, Continuous Integration und Deployment-Prozesse speziell für regulatorische Anwendungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ EBA FinRep COREP Anpassungen C-Level FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
