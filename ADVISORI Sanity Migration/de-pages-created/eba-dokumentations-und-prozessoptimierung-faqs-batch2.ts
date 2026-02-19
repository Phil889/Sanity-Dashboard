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
    console.log('Updating EBA Dokumentations- und Prozessoptimierung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-dokumentations-und-prozessoptimierung' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-dokumentations-und-prozessoptimierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie unterstützt ADVISORI Finanzinstitute bei der Integration von SREP-Dokumentationsanforderungen in ein übergreifendes Compliance-Dokumentationskonzept?",
        answer: "Die Integration von SREP-spezifischen Dokumentationsanforderungen in ein ganzheitliches Compliance-Dokumentationskonzept stellt viele Finanzinstitute vor erhebliche Herausforderungen. Statt isolierter Dokumentationssilos für unterschiedliche regulatorische Anforderungen empfiehlt ADVISORI einen integrierten Ansatz, der Synergien erschließt und Redundanzen vermeidet.\n\n🔄 Strategische Integrationsansätze:\n• Regulatorische Taxonomie-Harmonisierung: Entwicklung einer übergreifenden regulatorischen Taxonomie, die SREP-Anforderungen mit anderen regulatorischen Frameworks (ICAAP, ILAAP, BCBS 239, etc.) systematisch verknüpft und gemeinsame Grundelemente identifiziert.\n• Cross-Reference-Architektur: Implementierung eines intelligenten Verweissystems, das thematische Verbindungen zwischen verschiedenen regulatorischen Dokumenten herstellt und so Konsistenz sicherstellt, ohne Inhalte zu duplizieren.\n• Modulares Content-Management: Strukturierung der Dokumentation in wiederverwendbare Module, die in verschiedenen regulatorischen Kontexten referenziert werden können, statt vollständiger Dokumentduplikation.\n• Single-Source-of-Truth-Prinzip: Etablierung definierter Master-Dokumente für übergreifende Themen wie Governance-Strukturen, Risikomanagementprozesse oder Datenarchitektur, die in allen spezifischen regulatorischen Dokumentationen referenziert werden.\n• Integrierte Aktualisierungsprozesse: Entwicklung synchronisierter Update-Zyklen und Verantwortlichkeiten, die eine konsistente Aktualisierung aller betroffenen Dokumentationsbereiche bei regulatorischen oder organisatorischen Änderungen sicherstellen.\n\n🛠️ ADVISORI's praktische Implementierungsschritte:\n• Comprehensive Regulatory Mapping: Detaillierte Analyse und Kartierung aller regulatorischen Dokumentationsanforderungen mit ihren inhaltlichen Überschneidungen, Abhängigkeiten und Widersprüchen.\n• Integriertes Dokumentationskonzept: Entwicklung eines maßgeschneiderten, hierarchisch strukturierten Dokumentationskonzepts, das SREP-Anforderungen nahtlos in die Gesamtarchitektur integriert.\n• Template-Harmonisierung: Standardisierung von Dokumentvorlagen und Strukturen über verschiedene regulatorische Bereiche hinweg, unter Berücksichtigung spezifischer SREP-Anforderungen.\n• Prozessintegration: Harmonisierung der Dokumentationsprozesse für verschiedene regulatorische Anforderungen, einschließlich koordinierter Review-Zyklen, Genehmigungsverfahren und Qualitätssicherung.\n• Change-Impact-Analyse-Framework: Implementierung eines systematischen Prozesses zur Bewertung der Auswirkungen regulatorischer Änderungen auf das gesamte Dokumentationsökosystem."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Best Practices empfiehlt ADVISORI zur Optimierung von Prozessen für die regelmäßige Aktualisierung und Qualitätssicherung regulatorischer Dokumentation?",
        answer: "Die kontinuierliche Aktualisierung und Qualitätssicherung regulatorischer Dokumentation stellt einen kritischen, aber oft ineffizient gestalteten Prozess dar. ADVISORI hat spezialisierte Best Practices entwickelt, die sowohl Compliance-Qualität als auch Prozesseffizienz signifikant verbessern und die typischen Fallstricke periodischer Updates vermeiden.\n\n🔍 Kernelemente effektiver Aktualisierungs- und Qualitätssicherungsprozesse:\n• Differenzierte Update-Zyklen: Implementierung risikoadaptiver Aktualisierungsfrequenzen – von quartalsweisen Updates für kritische, hochdynamische Bereiche bis zu jährlichen Reviews für stabilere Dokumentationselemente.\n• Automatisierte Trigger-Mechanismen: Etablierung systematischer Auslöser für außerplanmäßige Dokumentationsupdates basierend auf definierten Events wie regulatorischen Änderungen, internen Reorganisationen oder Prüfungsergebnissen.\n• Mehrstufige Qualitätssicherung: Implementierung eines differenzierten QS-Prozesses mit unterschiedlichen Prüfebenen – von automatisierten formalen Checks über fachliche Reviews bis hin zu regulatorischer Konsistenzprüfung.\n• Parallele Review-Prozesse: Optimierung der Prozesseffizienz durch koordinierte, gleichzeitige Reviews verschiedener Stakeholder statt sequentieller Genehmigungsschleifen.\n• Dokumentierte Review-Evidenz: Systematische Erfassung und Archivierung der Review-Aktivitäten als regulatorischer Nachweis, einschließlich prüfungssicherer Dokumentation von Änderungsentscheidungen.\n\n🚀 ADVISORI's innovative Optimierungsansätze:\n• KI-gestützte Konsistenzprüfung: Einsatz von Natural Language Processing zur automatisierten Identifikation potenzieller Inkonsistenzen zwischen verschiedenen Dokumentationselementen nach Updates.\n• Risikoadaptive Freigabeprozesse: Implementierung differenzierter Genehmigungsanforderungen basierend auf der regulatorischen Kritikalität und dem Umfang der Änderungen.\n• Versionskontrolle mit semantischer Versionierung: Nutzung eines ausgereiften Versionierungskonzepts, das die Bedeutung und Tragweite von Updates transparent macht (z.B. Major/Minor/Patch-Versioning).\n• Regulatory Change Monitoring Integration: Direkte Verknüpfung des Dokumentationsaktualisierungsprozesses mit dem regulatorischen Änderungsmanagement für frühzeitige Identifikation von Anpassungsbedarfen.\n• Qualitätsmetriken und Performance-Tracking: Etablierung quantifizierbarer KPIs für die Dokumentationsqualität und Prozesseffizienz mit regelmäßigem Reporting und systematischer Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können Finanzinstitute sicherstellen, dass ihre Dokumentation nicht nur formal den EBA-Anforderungen entspricht, sondern auch tatsächlich die operative Praxis authentisch widerspiegelt?",
        answer: "Die Lücke zwischen dokumentierten Prozessen und gelebter Praxis stellt eines der größten Risiken in regulatorischen Prüfungen dar. ADVISORI hat spezifische Methoden entwickelt, um diese kritische \"Say-Do-Gap\" zu identifizieren und zu schließen, damit die Dokumentation nicht nur formalen Anforderungen genügt, sondern die tatsächliche operative Realität authentisch abbildet.\n\n🔍 Kernprobleme der dokumentarischen Realitätslücke:\n• Aspirational Documentation: Tendenz zur Dokumentation idealisierter Prozesse und Kontrollen, die in der operativen Realität nicht vollständig umgesetzt sind – ein häufiger Befund in aufsichtlichen Prüfungen.\n• Veraltete Prozessbeschreibungen: Kontinuierliche operative Anpassungen, die nicht in entsprechende Dokumentationsupdates einfließen und zu wachsenden Diskrepanzen führen.\n• Fehlende Granularität: Zu abstrakte Dokumentation, die zwar grundsätzlich korrekt, aber für die praktische Anwendung und Prüfung nicht ausreichend detailliert ist.\n• Unterschiedliche Perspektiven: Divergenz zwischen der Sichtweise dokumentationserstellender Einheiten (oft Compliance/Regulierung) und der operativen Umsetzung in den Fachbereichen.\n• Implizites Wissen: Wesentliche Aspekte der tatsächlichen Prozessdurchführung, die auf nicht dokumentiertem Erfahrungswissen basieren und in Prüfungssituationen nicht nachgewiesen werden können.\n\n🛠️ ADVISORI's Methoden zur Authentizitätssicherung:\n• Operatives Reality-Testing: Durchführung strukturierter Validierungsinterviews und Beobachtungen in den operativen Einheiten zur Verifizierung der dokumentierten Prozesse und Kontrollen in der Praxis.\n• Evidence-Based Documentation: Implementierung eines evidenzbasierten Dokumentationsansatzes, der konkrete Nachweise der tatsächlichen Prozessdurchführung systematisch in die Dokumentation integriert.\n• Collaborative Documentation Approach: Etablierung eines kollaborativen Dokumentationsprozesses mit aktiver Beteiligung der operativen Einheiten an der Erstellung und Validierung der sie betreffenden Dokumentation.\n• Process Mining für Dokumentationsvalidierung: Einsatz von Process-Mining-Technologien zur datengestützten Analyse der tatsächlichen Prozessabläufe und ihrem Abgleich mit der dokumentierten Sollprozessstruktur.\n• Kontinuierliches Alignment-Monitoring: Implementierung regelmäßiger, strukturierter Reviews zur proaktiven Identifikation und Adressierung entstehender Diskrepanzen zwischen Dokumentation und Praxis.\n\n💡 Implementierungsansatz für authentische Dokumentation:\n• Dokumentations-Realitäts-Assessment: Systematische Gap-Analyse zwischen dokumentierten Prozessen und operativer Realität mit transparenter Priorisierung der Handlungsfelder.\n• Prozessarchäologie: Rekonstruktion der tatsächlichen operativen Prozesse durch strukturierte Interviews und Beobachtungen als Basis für authentische Dokumentation.\n• Bidirektionale Anpassungsstrategie: Entwicklung eines ausgewogenen Ansatzes, der sowohl Dokumentationsanpassungen als auch gezielte operative Veränderungen umfasst, um Konvergenz herzustellen.\n• Dokumentations-Governance mit operativer Verankerung: Etablierung eines Governance-Modells, das operative Einheiten strukturell in Dokumentationsverantwortung einbindet.\n• Kulturwandel von Compliance zu Integrity: Förderung einer organisationsweiten Kultur, die Transparenz und Authentizität über formale Compliance-Kriterien stellt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können wir unsere Dokumentation und Prozesse optimieren, um auf zukünftige Entwicklungen und Verschärfungen der EBA-Anforderungen vorbereitet zu sein?",
        answer: "Die zunehmende Dynamik regulatorischer Entwicklungen erfordert einen vorausschauenden Ansatz in der Gestaltung von Dokumentation und Prozessen. ADVISORI unterstützt Finanzinstitute dabei, nicht nur aktuelle Anforderungen zu erfüllen, sondern proaktiv Strukturen zu schaffen, die flexibel auf künftige regulatorische Entwicklungen reagieren können.\n\n🔮 Zukunftsorientierte Dokumentations- und Prozessgestaltung:\n• Prinzipienbasierte Architektur: Entwicklung einer Dokumentationsstruktur, die auf fundamentalen regulatorischen Prinzipien statt auf spezifischen Anforderungsdetails basiert und damit robuster gegenüber regulatorischen Änderungen ist.\n• Skalierbare Detaillierungsebenen: Implementierung einer modularen Dokumentationshierarchie, die bei Bedarf um zusätzliche Detailebenen erweitert werden kann, ohne die Grundstruktur zu kompromittieren.\n• Regulatory-Change-Ready Prozessdesign: Gestaltung von Prozessen mit expliziten Anpassungsmechanismen und definierten Flexibilitätspunkten, die gezielte Modifikationen ohne umfassende Neukonzeption ermöglichen.\n• Integrierte Simulation und Stresstesting: Entwicklung von Methoden zur systematischen Überprüfung der Dokumentations- und Prozessrobustheit gegenüber verschiedenen regulatorischen Zukunftsszenarien.\n• Kontinuierliches Regulatory Intelligence: Etablierung systematischer Prozesse zur frühzeitigen Identifikation, Bewertung und Antizipation regulatorischer Trends und Entwicklungen.\n\n📈 Trends und strategische Implikationen für die Dokumentations- und Prozessgestaltung:\n• Intensivierung quantitativer Nachweisanforderungen: Vorbereitung auf umfassendere Datenanforderungen durch Schaffung flexibler Datenerfassungs- und -analysemöglichkeiten in dokumentierten Prozessen.\n• Verstärkte Fokussierung auf operative Resilienz: Integration von Kontinuitäts- und Resilienzkonzepten in die Prozessdokumentation, über dedizierte BCM-Dokumentation hinaus.\n• Erhöhte Anforderungen an Nachvollziehbarkeit: Implementierung granularer Audit-Trails und Entscheidungsdokumentation in Prozessabläufen und Governance-Strukturen.\n• Konvergenz verschiedener regulatorischer Frameworks: Entwicklung einer integrierten Dokumentationsarchitektur, die Querverbindungen zwischen verschiedenen regulatorischen Domänen explizit berücksichtigt.\n• ESG-Integration in Kernprozesse: Vorbereitung auf die systematische Einbindung von Nachhaltigkeitsaspekten in dokumentierte Prozesse und Kontrollen aller Geschäftsbereiche.\n\n🛠️ ADVISORI's Implementierungsansatz für zukunftssichere Dokumentation und Prozesse:\n• Regulatory Horizon Scanning: Systematische Analyse emergenter regulatorischer Trends und deren potenzielle Auswirkungen auf bestehende Dokumentations- und Prozessstrukturen.\n• Dokumentations-Resilienz-Assessment: Bewertung der Anpassungsfähigkeit bestehender Dokumentation gegenüber typischen regulatorischen Änderungsmustern mit gezielten Verbesserungsmaßnahmen.\n• Regulatory Change Impact Simulation: Durchführung von Simulationsübungen für verschiedene regulatorische Szenarien zur Identifikation von Flexibilitäts- und Anpassungsbedarfen.\n• Evolutionary Documentation Framework: Entwicklung eines evolutionären Dokumentationsrahmens mit definierten Erweiterungs- und Anpassungsmechanismen für verschiedene Änderungstypen.\n• Future-Proofing Workshops: Durchführung cross-funktionaler Workshops zur proaktiven Identifikation potenzieller regulatorischer Entwicklungen und deren Integration in aktuelle Dokumentations- und Prozessoptimierungen."
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
