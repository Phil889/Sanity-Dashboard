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
    console.log('Updating EBA SREP Readiness page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-srep-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-srep-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Veränderungen zeichnen sich in der SREP-Methodik ab und wie können wir uns frühzeitig auf diese aufsichtsrechtlichen Entwicklungen vorbereiten?",
        answer: "Die SREP-Methodik der EBA unterliegt einer kontinuierlichen Weiterentwicklung, die von neuen Risikokategorien, technologischen Innovationen und makroökonomischen Entwicklungen geprägt ist. Eine frühzeitige Antizipation und proaktive Anpassung an diese Veränderungen kann einen signifikanten Wettbewerbsvorteil darstellen. ADVISORI verfolgt regulatorische Trends intensiv und unterstützt Sie dabei, kommende Anforderungen frühzeitig zu erkennen und strategisch zu adressieren.\n\n🔮 Zentrale Entwicklungstrends in der SREP-Methodik:\n• Integration von ESG-Risiken: Zunehmende Berücksichtigung von Umwelt-, Sozial- und Governance-Risiken in allen SREP-Elementen, mit besonderem Fokus auf Klimarisiken und deren Auswirkungen auf das Geschäftsmodell und die Kapitalplanung.\n• Erweiterter Fokus auf IT- und Cyber-Resilienz: Verstärkte Prüfung der operationellen Widerstandsfähigkeit gegen Cyberbedrohungen und IT-Ausfälle, inklusive der Governance von IT-Risiken und Notfallplänen.\n• Datenqualität als eigenständige Bewertungsdimension: Erhöhte Anforderungen an die Qualität, Konsistenz und Nachvollziehbarkeit von Daten, die für aufsichtsrechtliche Meldungen und interne Risikosteuerung verwendet werden.\n• Proportionalitätsprinzip mit differenzierter Anwendung: Weiterentwicklung der risiko- und größenbasierten Proportionalität bei gleichzeitiger Sicherstellung eines soliden Mindeststandards für alle Institute.\n• Verschärfte Bewertung der Geschäftsmodell-Nachhaltigkeit: Intensivere Prüfung der langfristigen Tragfähigkeit und Rentabilität von Geschäftsmodellen angesichts struktureller Marktveränderungen und neuer Wettbewerber.\n\n🛠️ ADVISORI's proaktiver Vorbereitungsansatz:\n• Regulatorische Früherkennung: Kontinuierliches Monitoring aufsichtsrechtlicher Entwicklungen und Analyse von EBA-Publikationen, Konsultationspapieren und Best Practices führender Institute.\n• Gap-Analyse mit Zukunftsperspektive: Bewertung Ihrer aktuellen Prozesse und Kontrollen nicht nur gegen aktuelle, sondern auch gegen absehbare zukünftige Anforderungen.\n• Methodische Erweiterung: Unterstützung bei der Entwicklung und Integration neuer Risikobewertungsmethoden, wie ESG-Risikometrik oder fortgeschrittene Cyber-Risikoszenarien.\n• Agile Implementierungsplanung: Entwicklung flexibler Roadmaps, die eine schrittweise Anpassung an kommende Anforderungen ermöglichen, ohne disruptive Großprojekte zu erzwingen.\n• Strategischer Dialog mit der Aufsicht: Etablierung eines konstruktiven Austauschs mit den Aufsichtsbehörden zu erwarteten Entwicklungen, der ein gemeinsames Verständnis fördert und Überraschungen minimiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie lässt sich der SREP-Prozess mit anderen regulatorischen Anforderungen wie MaRisk, BAIT oder internationalen Standards effizient harmonisieren, um Redundanzen zu vermeiden?",
        answer: "Die Harmonisierung des SREP-Prozesses mit anderen regulatorischen Anforderungen stellt eine zentrale Herausforderung für Finanzinstitute dar. Eine ineffiziente, siloorientierte Umsetzung führt zu Redundanzen, erhöhtem Ressourcenbedarf und potenziellen Inkonsistenzen. ADVISORI unterstützt Sie dabei, einen integrierten Compliance-Ansatz zu entwickeln, der regulatorische Synergien maximiert und gleichzeitig die Einhaltung aller spezifischen Anforderungen sicherstellt.\n\n🔄 Strategische Hebel für eine effiziente regulatorische Integration:\n• Harmonisiertes Governance-Framework: Entwicklung einer übergreifenden Governance-Struktur, die MaRisk, BAIT, SREP und internationale Standards kohärent adressiert und klare Verantwortlichkeiten für alle regulatorischen Dimensionen definiert.\n• Integrierte Risikotaxonomie: Etablierung eines einheitlichen Risikokatalogs, der unterschiedliche regulatorische Perspektiven zusammenführt und eine konsistente Risikobewertung über alle Anforderungen hinweg ermöglicht.\n• Konsolidierte Dokumentationsarchitektur: Aufbau eines zentralen Dokumentenmanagements, das Querverweise zwischen verschiedenen regulatorischen Anforderungen transparent macht und die mehrfache Nutzung von Nachweisen erlaubt.\n• Synchronisierte Kontrollprozesse: Abstimmung von Kontroll- und Überwachungsaktivitäten, sodass eine Kontrolle gleichzeitig mehrere regulatorische Anforderungen abdecken kann, ohne an Wirksamkeit zu verlieren.\n• Einheitliches Reporting-Framework: Entwicklung eines harmonisierten Berichtswesens, das verschiedene regulatorische Anforderungen aus einer konsistenten Datenbasis bedient und Doppelarbeit vermeidet.\n\n📋 ADVISORI's methodischer Integrationsansatz:\n• Regulatorische Mapping-Matrix: Erstellung einer detaillierten Übersicht, die die Überschneidungen und Unterschiede zwischen SREP, MaRisk, BAIT und anderen relevanten Standards systematisch analysiert.\n• Priorisierung nach Synergiepotenzialen: Identifikation von Bereichen mit besonders hohem Synergiepotenzial und Entwicklung spezifischer Integrationsstrategien für diese Schwerpunkte.\n• Prozessoptimierung mit Compliance-Fokus: Neugestaltung von Schlüsselprozessen, um regulatorische Anforderungen effizienter zu erfüllen, ohne die Kerngeschäftstätigkeit zu beeinträchtigen.\n• Technologische Enabler: Implementierung von GRC-Tools (Governance, Risk & Compliance), die eine integrierte Sicht auf verschiedene regulatorische Dimensionen ermöglichen und automatisierte Kontrollen unterstützen.\n• Kulturelle Transformation: Förderung eines bereichsübergreifenden Verständnisses für regulatorische Zusammenhänge, das Silodenken überwindet und eine ganzheitliche Compliance-Kultur stärkt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Anforderungen stellt der SREP an unsere Datenarchitektur und -governance, und wie können wir diese nachhaltig erfüllen?",
        answer: "Die Qualität der Datenarchitektur und -governance ist ein entscheidender Erfolgsfaktor im SREP-Prozess, der weit über technische Aspekte hinausgeht. Die Aufsichtsbehörden erwarten eine nachvollziehbare, konsistente und qualitätsgesicherte Datenbasis für alle risikorelevanten Entscheidungen und Berichte. ADVISORI unterstützt Sie dabei, eine SREP-konforme Datenarchitektur zu etablieren, die gleichzeitig Mehrwert für Ihre Geschäftssteuerung schafft.\n\n💾 Zentrale SREP-Anforderungen an die Datenarchitektur:\n• End-to-End-Datennachvollziehbarkeit: Lückenlose Dokumentation und Verfolgbarkeit aller risikorelevanten Datenflüsse von der Quelle bis zur Berichterstattung, einschließlich aller Transformationen und Aggregationen.\n• Konsistenz über Berichtsebenen hinweg: Sicherstellung, dass Daten für unterschiedliche Berichtszwecke (z.B. regulatorisches Reporting, ICAAP, Vorstandsberichte) konsistent und widerspruchsfrei sind.\n• Automatisierte Datenqualitätskontrollen: Implementierung systematischer Prüfroutinen zur Sicherstellung der Vollständigkeit, Richtigkeit und Aktualität aller risikorelevanten Daten.\n• Integrierte Datengovernance: Klare Definition von Rollen und Verantwortlichkeiten für Datenqualität, -sicherheit und -management über alle Organisationsebenen hinweg.\n• Angemessene Datengranularität: Verfügbarkeit von Daten in der erforderlichen Detailtiefe für unterschiedliche Analysezwecke, ohne die Komplexität unnötig zu erhöhen.\n\n🏗️ ADVISORI's Architektur- und Governance-Ansatz:\n• Datenarchitektur-Assessment: Umfassende Bewertung Ihrer bestehenden Datenarchitektur gegen SREP-Anforderungen mit Identifikation kritischer Gaps und Schwachstellen.\n• Datenflussmapping: Visualisierung und Dokumentation aller risikorelevanten Datenflüsse mit besonderem Fokus auf SREP-kritische Datenpunkte und potenzielle Inkonsistenzen.\n• Strategische Datengovernance-Organisation: Entwicklung einer effektiven Governance-Struktur mit klaren Verantwortlichkeiten für Datenqualität und -management auf allen Ebenen.\n• Implementierung von Data Lineage: Einführung von Tools und Prozessen, die eine durchgängige Nachvollziehbarkeit von Datentransformationen ermöglichen und Prüfungen erheblich vereinfachen.\n• Datenqualitäts-Framework: Etablierung eines umfassenden Frameworks zur kontinuierlichen Überwachung und Verbesserung der Datenqualität mit klaren KPIs und Eskalationsmechanismen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir unsere Risikokultur messbar verbessern, um im SREP-Prozess positiv bewertet zu werden und gleichzeitig einen nachhaltigen Geschäftswert zu schaffen?",
        answer: "Die Risikokultur eines Instituts ist ein zentraler Bewertungsfaktor im SREP-Prozess und gleichzeitig ein wesentlicher Treiber für nachhaltige Wertschöpfung. Eine starke, auf allen Ebenen verankerte Risikokultur reduziert operationelle Verluste, verbessert die Entscheidungsqualität und stärkt das Vertrauen von Kunden und Aufsichtsbehörden. ADVISORI unterstützt Sie dabei, Ihre Risikokultur systematisch zu entwickeln und ihren Wertbeitrag messbar zu machen.\n\n🧭 Zentrale Dimensionen einer SREP-konformen Risikokultur:\n• Tone from the Top: Glaubwürdige Verankerung von Risikobewusstsein und ethischen Standards auf Vorstands- und Aufsichtsratsebene, die sich in konkreten Handlungen und Entscheidungen widerspiegelt.\n• Transparente Kommunikation: Offener Umgang mit Risiken und Fehlern über alle Hierarchieebenen hinweg, der kritisches Denken fördert und eine vertrauensvolle Atmosphäre schafft.\n• Verknüpfung mit Anreizsystemen: Konsistente Integration von Risikometriken in Vergütungs- und Beförderungsentscheidungen, die verantwortungsvolles Handeln belohnt und Fehlverhalten konsequent adressiert.\n• Operationalisierung von Risikoappetit: Übersetzung des übergeordneten Risikoappetits in konkrete, verständliche Handlungsleitlinien für alle Mitarbeiter in ihrem jeweiligen Verantwortungsbereich.\n• Kontinuierliches Lernen: Etablierung einer Feedback- und Lernkultur, die systematisch aus Fehlern, Near-Misses und externen Ereignissen lernt und Verbesserungen implementiert.\n\n📊 ADVISORI's Ansatz zur messbaren Kulturentwicklung:\n• Risikokultur-Assessment: Durchführung einer umfassenden, datenbasierten Bestandsaufnahme Ihrer aktuellen Risikokultur mittels Befragungen, Interviews und Verhaltensbeobachtungen.\n• Entwicklung aussagekräftiger KPIs: Etablierung eines Indikatorensystems, das sowohl Frühindikatoren (z.B. Meldebereitschaft, Schulungsteilnahme) als auch Spätindikatoren (z.B. Verlustereignisse, Regelverstöße) umfasst.\n• Gezielte Kulturinterventionen: Konzeption und Umsetzung maßgeschneiderter Maßnahmen zur Adressierung identifizierter Schwachstellen, von Leadership-Programmen bis hin zu operativen Prozessanpassungen.\n• Kommunikations- und Change-Strategie: Entwicklung einer durchdachten Kommunikationsstrategie, die den Wertbeitrag einer starken Risikokultur verdeutlicht und Widerstände gegen Veränderungen adressiert.\n• Nachhaltige Verankerung: Unterstützung bei der Integration von Risikokultur-Aspekten in Kernprozesse wie Mitarbeiterrekrutierung, Leistungsbeurteilung und strategische Planung."
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
