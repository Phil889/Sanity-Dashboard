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
    console.log('Updating FRTB Risikodatenerhebung Datenqualität page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-risikodatenerhebung-datenqualitaet' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-risikodatenerhebung-datenqualitaet" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können international tätige Banken die FRTB-Datenanforderungen über verschiedene Jurisdiktionen hinweg konsistent umsetzen?",
        answer: "International tätige Banken stehen vor der doppelten Herausforderung, FRTB-Datenanforderungen nicht nur zu erfüllen, sondern diese auch über verschiedene Jurisdiktionen, regulatorische Regime und lokale Implementierungen hinweg konsistent umzusetzen. Die Komplexität wird durch unterschiedliche Zeitlinien, lokale Interpretationen und zusätzliche regionale Anforderungen weiter erhöht.\n\n🌐 Kernherausforderungen bei der internationalen FRTB-Datenharmonisierung:\n• Regulatorische Fragmentierung: Unterschiedliche Implementierungszeitpläne, lokale Anpassungen und Interpretationen des FRTB-Standards in verschiedenen Jurisdiktionen erfordern flexible, anpassbare Datenarchitekturen.\n• Organisatorische Silodaten: Historisch gewachsene, dezentrale Datenstrukturen und Governance-Modelle in verschiedenen Ländern und Geschäftseinheiten erschweren eine einheitliche Datenerhebung und -qualitätssicherung.\n• Technologische Heterogenität: Unterschiedliche Systemlandschaften, Datenformate und technologische Reifegraden in verschiedenen Regionen stellen hohe Anforderungen an Integrationsfähigkeit und Datenkonsistenz.\n• Multiple Reporting-Verpflichtungen: Die parallele Berichterstattung nach verschiedenen Regelwerken (lokale FRTB-Varianten, Basel III, nationale Anforderungen) erfordert eine koordinierte, wiederverwendbare Datenstrategie.\n\n🔄 ADVISORIs globaler Harmonisierungsansatz:\n• Flexible Global-Local Data Architecture: Entwicklung einer mehrstufigen Datenarchitektur mit einem konsistenten globalen Kern und flexiblen lokalen Erweiterungen, die sowohl weltweite Standards als auch regionale Besonderheiten berücksichtigt.\n• Federated Data Governance: Implementierung eines föderalen Governance-Modells mit globalen Mindeststandards und klaren Rollen und Verantwortlichkeiten zwischen Zentrale und lokalen Einheiten, das lokale Autonomie mit globaler Konsistenz verbindet.\n• Common Data Dictionary mit lokalen Erweiterungen: Etablierung eines zentralen Datenbegriffslexikons mit transparenten Mappings zu lokalen Definitionen und regulatorischen Anforderungen, das als Lingua Franca für die gesamte Organisation dient.\n• Harmonisierte Datenqualitätsstandards: Entwicklung global einheitlicher Datenqualitätsregeln und -metriken mit lokalen Schwellenwerten und Priorisierungen, die dennoch eine konsistente Qualitätsmessung ermöglichen.\n• Staged Implementation Approach: Umsetzung einer gestuften Implementierungsstrategie, die globale Prioritäten mit lokalen regulatorischen Zeitplänen in Einklang bringt und iterative Verbesserungen ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Datenanforderungen bestehen für die Expected Shortfall-Berechnung unter FRTB und wie unterstützt ADVISORI deren Implementierung?",
        answer: "Die Umstellung von Value-at-Risk (VaR) auf Expected Shortfall (ES) als primäre Risikomaßzahl unter FRTB stellt Banken vor anspruchsvolle Datenanforderungen. Die ES-Berechnung benötigt nicht nur mehr und granularere Daten, sondern stellt auch höhere Anforderungen an Datenqualität und Marktdatenhistorien, um Tail-Risiken adäquat zu erfassen.\n\n📈 Erweiterte Datenanforderungen für Expected Shortfall:\n• Längere und konsistentere Zeitreihen: ES erfordert robustere historische Daten, insbesondere für Stressperioden, um die Tail-Risiken präzise zu quantifizieren – typischerweise mindestens 10 Jahre für die Kalibrierung der Stressperiode.\n• Erhöhte Granularität von Risikofaktoren: Die ES-Berechnung benötigt detailliertere Risikofaktor-Repräsentation mit höherer Sensitivität gegenüber Marktveränderungen, insbesondere in extremen Marktphasen.\n• Diversifizierte Marktdatenquellen: Die robuste ES-Berechnung erfordert multiple, unabhängige Datenquellen zur Validierung und zum Füllen von Datenlücken, besonders für illiquide Instrumente und Krisenzeiten.\n• Höhere Anforderungen an Datenintegrität: ES reagiert sensitiver auf Datenqualitätsprobleme, Ausreißer und Inkonsistenzen, was erhöhte Validierungs- und Bereinigungsprozesse erfordert.\n• Strikte Dokumentation und Nachvollziehbarkeit: Die regulatorischen Anforderungen an Transparenz und Erklärbarkeit erfordern lückenlose Dokumentation der Datenquellen, -transformationen und -annahmen für die ES-Berechnung.\n\n🛠️ ADVISORIs umfassender Unterstützungsansatz:\n• Zeitreihen-Optimierungsmethodik: Wir entwickeln fortschrittliche Methoden zur Identifikation, Vervollständigung und Validierung historischer Zeitreihen, mit besonderem Fokus auf Stressperioden und illiquide Märkte.\n• Proxy-Methoden für Datenlücken: Implementation statistisch robuster Ansätze zur Schätzung fehlender Daten und Risikofaktoren, die regulatorischen Anforderungen entsprechen und die Volatilitätsstruktur in Stressperioden bewahren.\n• Datenqualitäts-Framework für Tail-Risiken: Etablierung spezialisierter Qualitätskontrollen, die besonders auf die Erkennung von Anomalien und Verzerrungen in den Verteilungsenden ausgerichtet sind.\n• Performance-optimierte Datenarchitektur: Entwicklung effizienter Datenstrukturen und Berechnungsalgorithmen, die die erhöhten Rechenlastanforderungen der ES-Berechnung bewältigen können.\n• Kalibrierungsmethodik für Stressperioden: Unterstützung bei der Entwicklung robuster Verfahren zur Identifikation und Kalibrierung relevanter Stressperioden unter Berücksichtigung des aktuellen Portfolioprofils."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann die Konsistenz der Risikodaten zwischen dem Standardansatz (SA) und dem Internal Models Approach (IMA) unter FRTB sichergestellt werden?",
        answer: "Die Gewährleistung von Datenkonsistenz zwischen dem Standardansatz (SA) und dem Internal Models Approach (IMA) unter FRTB ist eine zentrale Herausforderung mit strategischen Implikationen. Diese Konsistenz ist nicht nur ein regulatorisches Erfordernis, sondern auch essenziell für eine effektive Kapitalplanung und Risikosteuerung.\n\n🔄 Kernherausforderungen bei der Datenharmonisierung zwischen SA und IMA:\n• Unterschiedliche Granularitätsanforderungen: Der SA basiert auf vordefinierten Risikofaktoren und Sensitivitäten, während der IMA typischerweise feinere, bankintern definierte Risikofaktoren verwendet.\n• Divergierende Datenverarbeitungsprozesse: Historisch gewachsene, separate Prozesse und Systeme für Standardansatz und interne Modelle führen zu Inkonsistenzen in Datendefinitionen, -transformationen und -annahmen.\n• Herausforderungen bei der Abstimmung von Risikofaktoren: Die konsistente Zuordnung und Abstimmung von Risikofaktoren zwischen SA und IMA erfordert fortschrittliche Mapping-Methoden und klare Governanceprozesse.\n• Unterschiedliche Zeitpunkte der Datenerfordernisse: Während der SA täglich berechnet werden muss, erfordert der IMA zusätzliche Berechnungen wie P&L Attribution Tests und Backtesting mit spezifischen Zeitpunkten und Datenhistorien.\n• Unterschiedliche Validierungsanforderungen: Die regulatorischen Anforderungen an Datenvalidierung unterscheiden sich zwischen SA und IMA, was zu divergierenden Qualitätssicherungsprozessen führen kann.\n\n🛠️ ADVISORIs integrierter Harmonisierungsansatz:\n• Gemeinsame Risikofaktor-Taxonomie: Entwicklung einer einheitlichen, hierarchischen Taxonomie von Risikofaktoren, die sowohl die Anforderungen des SA als auch des IMA erfüllt und transparente Mappings zwischen verschiedenen Granularitätsebenen ermöglicht.\n• Integrierte Datenarchitektur: Design einer Datenarchitektur mit einem gemeinsamen Kern an Markt- und Positionsdaten, der beide Ansätze bedient und Inkonsistenzen durch redundante Datenhaltung vermeidet.\n• Reconciliation Framework: Implementierung eines systematischen Prozesses zur regelmäßigen Abstimmung von Risikofaktoren, Sensitivitäten und Kapitalberechnungen zwischen SA und IMA mit klaren Toleranzschwellen und Eskalationswegen.\n• Harmonisierte Datenqualitätskontrollen: Etablierung einheitlicher Qualitätssicherungsprozesse, die beide Ansätze abdecken und gleichzeitig spezifische zusätzliche Kontrollen für IMA-spezifische Anforderungen wie PLAT berücksichtigen.\n• Change Management für Dual Approach: Entwicklung eines robusten Change-Management-Prozesses, der sicherstellt, dass Änderungen an Marktdatenquellen, Risikofaktordefinitionen oder Bewertungsmethoden konsistent in beiden Ansätzen reflektiert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Ansätze empfiehlt ADVISORI für die effiziente Erhebung, Bereinigung und Aufbewahrung historischer Marktdaten für FRTB?",
        answer: "Die effiziente Erhebung, Bereinigung und Aufbewahrung historischer Marktdaten ist für die FRTB-Implementierung von entscheidender Bedeutung. Angesichts der umfangreichen Datenanforderungen, insbesondere für Stressperioden und die Expected Shortfall-Berechnung, wird ein strategischer Ansatz zum Marktdatenmanagement zum kritischen Erfolgsfaktor.\n\n📊 Strategische Dimensionen des FRTB-Marktdatenmanagements:\n• Umfang und Tiefe historischer Daten: FRTB erfordert extensive Zeitreihen (mindestens ein Jahr für Current Period, zusätzlich identifizierte Stressperioden) für eine Vielzahl von Risikofaktoren mit täglicher Granularität.\n• Qualitätsanforderungen an historische Daten: Konsistente Definitionen, behandelte Ausreißer, dokumentierte Anpassungen und Gap-Filling-Methoden sind entscheidend für regulatorisch konforme und risikogerechte Berechnungen.\n• Datenvolumen und Performance-Implikationen: Die schiere Menge an historischen Marktdaten stellt erhebliche Anforderungen an Speicherung, Verarbeitung und Zugriffsgeschwindigkeit, insbesondere für intraday-Berechnungen.\n• Regulatorische Dokumentation und Audit-Trail: Vollständige Nachvollziehbarkeit der Datenquellen, -transformationen und -bereinigungen ist für die aufsichtliche Anerkennung unerlässlich.\n\n🔧 ADVISORIs Multi-Layer-Ansatz zum historischen Marktdatenmanagement:\n• Strategische Vendor-und-Quellen-Diversifikation: Entwicklung einer ausgewogenen Strategie zur Kombination verschiedener Datenquellen (Vendor-Daten, interne Preise, Pooling-Lösungen) für optimale Abdeckung und Kosteneffizienz.\n• Hierarchisches Data-Cleansing-Framework: Implementation eines mehrstufigen Bereinigungsprozesses mit klaren Verfahren für die Erkennung und Behandlung von Ausreißern, Lücken und Inkonsistenzen, abgestimmt auf die spezifischen Anforderungen verschiedener Risikofaktorklassen.\n• Intelligentes Historisches Datenmanagement: Etablierung eines tiered-storage-Konzepts, das häufig benötigte Daten hochperformant bereithält, während selten genutzte historische Daten kosteneffizient archiviert werden, ohne die Nachvollziehbarkeit zu beeinträchtigen.\n• Automatisierte Metadaten-Erfassung: Implementierung durchgängiger Prozesse zur automatischen Erfassung und Verwaltung von Metadaten (Quellen, Anpassungen, Qualitätskennzahlen) für alle historischen Marktdaten als Grundlage für Audit-Trails und regulatorische Dokumentation.\n• Proxy-Methodik für historische Lücken: Entwicklung statistisch robuster und dokumentierter Methoden zur Schätzung historischer Daten für Perioden oder Instrumente mit eingeschränkter Datenverfügbarkeit, insbesondere für identifizierte Stressperioden."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
