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
    console.log('Updating CRR/CRD Offenlegungsanforderungen Pillar III page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-offenlegungsanforderungen-pillar-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-offenlegungsanforderungen-pillar-iii" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche grundlegenden regulatorischen Anforderungen müssen Finanzinstitute im Rahmen der Pillar III Offenlegung erfüllen und wie unterstützt ADVISORI bei deren Umsetzung?",
        answer: "Die Säule III (Pillar III) der CRR/CRD-Regulierung zielt auf erhöhte Markttransparenz durch umfassende Offenlegungspflichten ab. Finanzinstitute müssen detaillierte Informationen zu ihrer Risikosituation, Kapitalausstattung, Vergütungspraktiken und Governance-Strukturen veröffentlichen, wobei die Anforderungen kontinuierlich erweitert und verfeinert werden. ADVISORI bietet einen ganzheitlichen Implementierungsansatz, der alle Aspekte der Offenlegungsanforderungen adressiert.\n\n📊 Kernelemente der Pillar III Offenlegung:\n• Kapital- und Risikotransparenz: Detaillierte Darstellung der Eigenkapitalstruktur, Kapitalquoten und verschiedener Risikoarten (Kredit-, Markt-, Liquiditätsrisiken etc.).\n• Vergütungspolitik: Offenlegung von Vergütungssystemen und -praktiken, insbesondere für Risikoträger und Führungskräfte.\n• Governance-Strukturen: Transparenz bezüglich der Risikomanagement-Prozesse, Kontrollsysteme und Entscheidungsfindung.\n• ESG-Risiken: Zunehmende Anforderungen zur Offenlegung von Nachhaltigkeitsrisiken und deren Integration in das Risikomanagement.\n• Leverage Ratio und Liquiditätskennzahlen: Detaillierte Angaben zu Verschuldungsgrad, LCR und NSFR.\n\n🔍 ADVISORI-Methodik zur effektiven Umsetzung:\n• Regulatorische Gap-Analyse: Identifikation spezifischer Anforderungen und Bewertung bestehender Offenlegungspraktiken.\n• Implementierungsplanung: Entwicklung einer priorisierten Roadmap unter Berücksichtigung von Proportionalitätsprinzipien und institutsspezifischen Anforderungen.\n• Prozessintegration: Einbettung der Offenlegungsanforderungen in die bestehende Berichtsarchitektur.\n• Datenmanagement: Etablierung zuverlässiger Datenpfade von Quellsystemen bis zum finalen Bericht.\n• Validierung und Qualitätssicherung: Implementierung robuster Prüf- und Freigabeprozesse zur Sicherstellung der Datenqualität und -konsistenz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute den Prozess der Pillar III Berichterstattung optimieren und welche Automatisierungspotenziale identifiziert ADVISORI?",
        answer: "Die Pillar III Berichterstattung bindet in vielen Instituten erhebliche Ressourcen durch manuelle Prozesse, Dateninkonsistenzen und redundante Arbeitsschritte. ADVISORI identifiziert systematisch Optimierungs- und Automatisierungspotenziale, um die Effizienz zu steigern, die Datenqualität zu verbessern und den manuellen Aufwand deutlich zu reduzieren.\n\n⚙️ Schlüsselbereiche für Prozessoptimierung:\n• Datenmanagement: Zentralisierung der Datenhaltung und Schaffung eines Single Point of Truth für alle Offenlegungsdaten.\n• End-to-End-Prozesse: Etablierung durchgängiger Prozesse von der Datenextraktion bis zur finalen Berichterstellung.\n• Governance-Framework: Implementierung klarer Verantwortlichkeiten, Freigabeprozesse und Kontrollmechanismen.\n• Integriertes Reporting: Harmonisierung der Offenlegungsberichte mit anderen regulatorischen und internen Berichtsformaten.\n• Versionierung und Audit-Trail: Lückenlose Nachvollziehbarkeit aller Änderungen und Anpassungen im Berichtsprozess.\n\n🤖 Automatisierungspotenziale und technische Lösungen:\n• Datenextraktion und -transformation: Automatisierte ETL-Prozesse zur Übernahme von Daten aus Quellsystemen ohne manuelle Eingriffe.\n• Berechnungsengines: Implementierung regelbasierter Berechnungen mit automatisierten Validierungsschritten.\n• Berichtsgenerierung: Automatisierte Erstellung von tabellarischen und textuellen Berichtselementen auf Basis vordefinierter Templates.\n• Workflow-Management: Digitalisierte Abstimmungs- und Freigabeprozesse mit integrierten Benachrichtigungsfunktionen.\n• Dashboarding und Monitoring: Echtzeit-Überwachung des Berichtsstatus und frühzeitige Erkennung von Engpässen oder Qualitätsproblemen.\n\nDurch diese Maßnahmen kann der manuelle Aufwand typischerweise um 50-70% reduziert werden, während gleichzeitig die Datenqualität und Prozesssicherheit signifikant steigt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Herausforderungen entstehen durch die stetige Weiterentwicklung der Pillar III Anforderungen und wie unterstützt ADVISORI bei der langfristigen Compliance?",
        answer: "Die Offenlegungsanforderungen unter Pillar III unterliegen einem kontinuierlichen Wandel durch neue regulatorische Vorgaben, technische Standards und Markterwartungen. Diese dynamische Regulierungslandschaft stellt Finanzinstitute vor erhebliche Herausforderungen bei der Aufrechterhaltung einer nachhaltigen Compliance. ADVISORI unterstützt durch einen zukunftsorientierten Ansatz, der nicht nur aktuelle Anforderungen erfüllt, sondern auch Flexibilität für künftige Entwicklungen schafft.\n\n🔄 Zentrale Herausforderungen der regulatorischen Evolution:\n• Erweiterung des Offenlegungsumfangs: Kontinuierliche Ausweitung der zu berichtenden Kennzahlen und Informationen, insbesondere in Bereichen wie ESG, Klimarisiken und operationelle Resilienz.\n• Granularitätssteigerung: Zunehmende Anforderungen an die Detailtiefe der offengelegten Informationen und deren Aufschlüsselung.\n• Harmonisierung mit anderen Frameworks: Notwendige Abstimmung mit parallelen Berichtsanforderungen wie FINREP, COREP, ICAAP/ILAAP und Stresstests.\n• Verkürzte Implementierungszyklen: Tendenziell knappe Umsetzungsfristen bei gleichzeitiger Zunahme der Komplexität.\n• Technologischer Wandel: Steigende Erwartungen an digitale Berichtsformate und maschinenlesbare Datenstrukturen (XBRL, XML).\n\n🛡️ ADVISORIs Ansatz für nachhaltige Compliance:\n• Regulatorisches Horizon Scanning: Kontinuierliche Überwachung regulatorischer Entwicklungen und frühzeitige Identifikation neuer Anforderungen.\n• Modulare Systemarchitektur: Implementierung flexibler Daten- und Prozessarchitekturen, die leicht an neue Anforderungen angepasst werden können.\n• Kompetenzaufbau: Transfer von Expertenwissen an Ihre Teams für langfristige Selbstständigkeit bei der Umsetzung neuer Anforderungen.\n• Versionierungskonzept: Etablierung robuster Prozesse für die parallele Verwaltung verschiedener regulatorischer Versionen und Übergangsperioden.\n• Automatisierte Compliance-Checks: Integration von Kontrollen zur kontinuierlichen Überwachung der Einhaltung aktueller regulatorischer Vorgaben.\n\nUnser Ziel ist es, nicht nur punktuelle Compliance-Lösungen zu implementieren, sondern eine Offenlegungsarchitektur aufzubauen, die robust genug für aktuelle Anforderungen und flexibel genug für zukünftige Entwicklungen ist."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann die Qualität und Konsistenz der offengelegten Daten sichergestellt werden und welche Kontrollmechanismen empfiehlt ADVISORI?",
        answer: "Die Gewährleistung von Datenqualität und -konsistenz ist eine der größten Herausforderungen bei der Pillar III Offenlegung. Inkonsistenzen oder Qualitätsmängel können nicht nur regulatorische Konsequenzen nach sich ziehen, sondern auch das Vertrauen von Investoren und anderen Stakeholdern beeinträchtigen. ADVISORI implementiert ein umfassendes Qualitätsmanagement-Framework, das die Integrität der offengelegten Informationen sicherstellt.\n\n🔍 Kritische Dimensionen der Datenqualität:\n• Genauigkeit: Korrektheit der Daten im Vergleich zu den Quellsystemen und internen Aufzeichnungen.\n• Vollständigkeit: Abdeckung aller erforderlichen Datenpunkte ohne Lücken oder fehlende Informationen.\n• Konsistenz: Übereinstimmung zwischen verschiedenen Berichtsformaten (Pillar III, FINREP, COREP, Jahresabschluss).\n• Plausibilität: Logische Stimmigkeit der Daten und Übereinstimmung mit erwarteten Größenordnungen und Trends.\n• Aktualität: Verwendung der jeweils aktuellsten verfügbaren Daten gemäß den regulatorischen Stichtagen.\n\n⚙️ Empfohlenes Kontroll- und Validierungsframework:\n• Multi-Level-Validierung: Implementierung von Kontrollen auf verschiedenen Ebenen (Quellsysteme, Datentransformation, Berichtsoutput).\n• Automatisierte Plausibilitätsprüfungen: Regelbasierte Überprüfung von Datenbeziehungen, Größenordnungen und zeitlichen Entwicklungen.\n• Cross-Report-Reconciliation: Systematischer Abgleich zwischen verschiedenen regulatorischen Berichten und internen Management-Informationen.\n• Vier-Augen-Prinzip: Strukturierte Review-Prozesse mit klar definierten Verantwortlichkeiten und Freigabestufen.\n• Materiality Assessment: Fokussierung von Kontrollressourcen auf besonders kritische oder risikobehaftete Datenpunkte.\n\n📈 ADVISORI-Methodik zur Qualitätssteigerung:\n• Data Lineage: Implementierung durchgängiger Datenpfade mit Nachvollziehbarkeit von der Quelle bis zum finalen Bericht.\n• Metadata Management: Dokumentation von Definitionen, Berechnungslogiken und regulatorischen Referenzen für alle Kennzahlen.\n• Root Cause Analysis: Strukturierte Analyse von Qualitätsproblemen zur Identifikation und Behebung systemischer Ursachen.\n• Continuous Improvement: Etablierung eines Kreislaufs kontinuierlicher Verbesserung auf Basis von Erfahrungswerten und Feedback.\n• Performance Metrics: Entwicklung und Tracking von KPIs zur Messung und Verbesserung der Datenqualität über Zeit."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
