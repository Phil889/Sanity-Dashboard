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
    console.log('Updating CRA Act page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-act' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-act" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie entwickeln wir eine strategische CRA Act Implementierungsroadmap, die sowohl Compliance-Anforderungen als auch Geschäftsziele optimal berücksichtigt?',
        answer: "Die Entwicklung einer strategischen CRA Act Implementierungsroadmap erfordert eine ganzheitliche Betrachtung, die regulatorische Compliance mit strategischen Geschäftszielen und operativen Realitäten in Einklang bringt. Eine erfolgreiche Roadmap geht über die reine Erfüllung von Mindestanforderungen hinaus und schafft nachhaltigen Mehrwert für das Unternehmen durch die Integration von Cybersicherheit als strategischen Wettbewerbsvorteil.\n\n🎯 Strategische Analyse und Zielsetzung:\n• Umfassende Bewertung der aktuellen Produktlandschaft und Identifikation aller CRA-relevanten digitalen Produkte, einschließlich ihrer Klassifizierung nach Risikokategorien und Marktbedeutung.\n• Alignment der CRA-Implementierung mit übergeordneten Unternehmenszielen wie Marktexpansion, Produktinnovation, Kostenoptimierung und Risikominimierung.\n• Definition klarer Erfolgskriterien und KPIs, die sowohl Compliance-Aspekte als auch Geschäftswert messbar machen.\n• Berücksichtigung von Marktdynamiken, Kundenanforderungen und Wettbewerbspositionierung bei der Prioritätensetzung.\n• Integration von Stakeholder-Erwartungen aus verschiedenen Geschäftsbereichen und externen Partnern.\n\n📊 Strukturierte Roadmap-Entwicklung:\n• Phasenweise Implementierungsplanung mit klaren Meilensteinen, die sowohl Quick-Wins als auch langfristige strategische Ziele berücksichtigt.\n• Risiko-basierte Priorisierung der Implementierungsschritte, beginnend mit kritischen Produkten und hochriskanten Bereichen.\n• Ressourcenplanung und Budgetallokation unter Berücksichtigung interner Kapazitäten und externer Unterstützungsbedarfe.\n• Zeitliche Koordination mit anderen strategischen Initiativen und Produktentwicklungszyklen zur Maximierung von Synergien.\n• Flexibilität für Anpassungen basierend auf regulatorischen Entwicklungen und Marktveränderungen.\n\n🔄 Kontinuierliche Optimierung und Anpassung:\n• Etablierung von Review-Zyklen zur regelmäßigen Bewertung des Implementierungsfortschritts und Anpassung der Roadmap.\n• Integration von Lessons Learned und Best Practices aus frühen Implementierungsphasen.\n• Monitoring von regulatorischen Entwicklungen und deren Auswirkungen auf die Roadmap.\n• Berücksichtigung technologischer Entwicklungen und deren Potenzial für effizientere Compliance-Lösungen.\n• Aufbau interner Expertise und Kompetenzen als strategische Ressource für nachhaltige Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen eine erfolgreiche CRA Act Implementierung und wie können wir diese systematisch adressieren?',
        answer: "Eine erfolgreiche CRA Act Implementierung hängt von der systematischen Adressierung mehrerer kritischer Erfolgsfaktoren ab, die sowohl technische als auch organisatorische Dimensionen umfassen. Diese Faktoren sind eng miteinander verknüpft und erfordern eine koordinierte Herangehensweise, die über traditionelle Compliance-Ansätze hinausgeht und Cybersicherheit als integralen Bestandteil der Geschäftsstrategie etabliert.\n\n🏗️ Organisatorische Erfolgsfaktoren:\n• Starke Führungsunterstützung und klare Verantwortlichkeiten auf C-Level-Ebene, die CRA-Compliance als strategische Priorität kommunizieren und entsprechende Ressourcen bereitstellen.\n• Cross-funktionale Zusammenarbeit zwischen IT, Compliance, Produktentwicklung, Qualitätsmanagement und Geschäftsführung zur Sicherstellung ganzheitlicher Implementierung.\n• Aufbau interner Expertise durch gezielte Schulungen und Rekrutierung von Cybersicherheitsspezialisten mit CRA-Kenntnissen.\n• Etablierung einer sicherheitsbewussten Unternehmenskultur, die proaktive Risikoidentifikation und kontinuierliche Verbesserung fördert.\n• Klare Governance-Strukturen mit definierten Entscheidungsprozessen und Eskalationswegen für CRA-bezogene Themen.\n\n⚙️ Technische und Prozessuale Erfolgsfaktoren:\n• Integration von Security-by-Design Prinzipien in alle Entwicklungsprozesse von der Konzeption bis zur Markteinführung.\n• Implementierung robuster Schwachstellenmanagement-Prozesse mit automatisierten Scanning-Tools und strukturierten Response-Verfahren.\n• Etablierung kontinuierlicher Monitoring- und Alerting-Systeme für Echtzeit-Überwachung der Cybersicherheitslage.\n• Aufbau effektiver Incident Response Capabilities mit klaren Prozessen, Verantwortlichkeiten und Kommunikationswegen.\n• Dokumentationsmanagement-Systeme, die vollständige Nachverfolgbarkeit und Compliance-Nachweis ermöglichen.\n\n🎯 Strategische Erfolgsfaktoren:\n• Alignment der CRA-Implementierung mit Geschäftszielen und Produktstrategien zur Maximierung des Return on Investment.\n• Proaktive Stakeholder-Kommunikation und Change Management zur Sicherstellung breiter Akzeptanz und Unterstützung.\n• Kontinuierliche Marktbeobachtung und Anpassung an sich entwickelnde regulatorische Anforderungen und Branchenstandards.\n• Aufbau strategischer Partnerschaften mit Technologieanbietern, Beratungsunternehmen und Zertifizierungsstellen.\n• Messung und Kommunikation des Geschäftswerts der CRA-Implementierung zur Rechtfertigung weiterer Investitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie können wir die CRA Act Implementierung als Katalysator für digitale Transformation und Prozessoptimierung nutzen?',
        answer: "Die CRA Act Implementierung bietet eine einzigartige Gelegenheit, sie als strategischen Katalysator für umfassende digitale Transformation und Prozessoptimierung zu nutzen. Anstatt die Compliance-Anforderungen isoliert zu betrachten, können vorausschauende Unternehmen die notwendigen Veränderungen als Sprungbrett für modernere, effizientere und widerstandsfähigere Geschäftsprozesse verwenden.\n\n🚀 Digitale Transformation durch CRA-Integration:\n• Modernisierung der IT-Infrastruktur und Systemarchitekturen im Zuge der Security-by-Design Implementierung, wodurch gleichzeitig Skalierbarkeit, Performance und Wartbarkeit verbessert werden.\n• Automatisierung von Sicherheitsprozessen und Compliance-Monitoring, die als Grundlage für weitergehende Prozessautomatisierung in anderen Geschäftsbereichen dienen kann.\n• Implementierung von DevSecOps-Praktiken, die nicht nur Sicherheit integrieren, sondern auch Entwicklungszyklen beschleunigen und Qualität verbessern.\n• Aufbau von Data Analytics und Monitoring Capabilities für Cybersicherheit, die auch für Business Intelligence und operative Optimierung genutzt werden können.\n• Etablierung von Cloud-first und API-first Architekturen zur Unterstützung sowohl der CRA-Anforderungen als auch der digitalen Geschäftstransformation.\n\n⚡ Prozessoptimierung und Effizienzsteigerung:\n• Standardisierung und Dokumentation von Entwicklungs- und Qualitätsprozessen im Rahmen der CRA-Compliance, die zu konsistenteren und effizienteren Arbeitsabläufen führt.\n• Integration von Risikomanagement in operative Prozesse, wodurch proaktive Entscheidungsfindung und bessere Ressourcenallokation ermöglicht wird.\n• Implementierung von kontinuierlichen Verbesserungsprozessen und Feedback-Schleifen, die über Cybersicherheit hinaus auf alle Geschäftsbereiche angewendet werden können.\n• Aufbau von Cross-funktionalen Teams und Kompetenzen, die Silos aufbrechen und organisatorische Agilität fördern.\n• Etablierung von Metriken und KPIs für Cybersicherheit, die als Modell für datengetriebene Entscheidungsfindung in anderen Bereichen dienen.\n\n💡 Strategische Wertschöpfung und Innovation:\n• Nutzung der CRA-Implementierung als Differenzierungsmerkmal im Markt und als Grundlage für Premium-Positionierung bei sicherheitskritischen Kunden.\n• Entwicklung neuer Geschäftsmodelle und Services rund um Cybersicherheit und Compliance-Expertise.\n• Aufbau von Partnerschaften und Ökosystemen mit anderen CRA-konformen Unternehmen zur Schaffung integrierter Lösungsangebote.\n• Investition in Forschung und Entwicklung für innovative Sicherheitstechnologien, die sowohl interne Compliance als auch externe Marktchancen unterstützen.\n• Etablierung als Thought Leader und Referenz für CRA-Implementierung in der jeweiligen Branche."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Governance-Strukturen und Entscheidungsprozesse sind für eine effektive CRA Act Implementierung erforderlich?',
        answer: "Eine effektive CRA Act Implementierung erfordert robuste Governance-Strukturen und klare Entscheidungsprozesse, die sowohl strategische Führung als auch operative Exzellenz gewährleisten. Diese Strukturen müssen die Komplexität der CRA-Anforderungen bewältigen, während sie gleichzeitig Agilität und Reaktionsfähigkeit auf sich ändernde Umstände ermöglichen.\n\n🏛️ Strategische Governance-Architektur:\n• Etablierung eines CRA Steering Committees auf C-Level-Ebene mit Vertretern aus IT, Compliance, Produktentwicklung, Risikomanagement und Geschäftsführung zur strategischen Ausrichtung und Ressourcenallokation.\n• Definition klarer Rollen und Verantwortlichkeiten für alle Stakeholder, einschließlich CRA Officer, Security Champions, Produktverantwortliche und externe Partner.\n• Implementierung einer Matrix-Organisation, die funktionale Expertise mit produktspezifischen Anforderungen verknüpft und effiziente Entscheidungsfindung ermöglicht.\n• Aufbau von Advisory Boards mit externen Experten für regulatorische Updates, technologische Trends und Best Practice Sharing.\n• Integration der CRA-Governance in bestehende Unternehmensführungsstrukturen zur Vermeidung von Silos und Redundanzen.\n\n⚖️ Entscheidungsprozesse und Eskalationswege:\n• Definition von Entscheidungskompetenzen und Eskalationskriterien für verschiedene Arten von CRA-bezogenen Entscheidungen, von operativen Anpassungen bis hin zu strategischen Investitionen.\n• Implementierung von Risk-based Decision Making Frameworks, die Cybersicherheitsrisiken systematisch in Geschäftsentscheidungen integrieren.\n• Etablierung von Fast-Track-Prozessen für kritische Sicherheitsupdates und Incident Response, die schnelle Reaktionen ohne Kompromisse bei der Governance ermöglichen.\n• Aufbau von Konfliktlösungsmechanismen für Situationen, in denen CRA-Anforderungen mit anderen Geschäftszielen in Konflikt stehen.\n• Implementierung von regelmäßigen Review- und Anpassungszyklen für Governance-Strukturen basierend auf Erfahrungen und sich ändernden Anforderungen.\n\n📋 Operative Governance und Kontrollen:\n• Entwicklung von Policies und Procedures, die CRA-Anforderungen in konkrete Arbeitsanweisungen und Qualitätskriterien übersetzen.\n• Implementierung von Compliance-Monitoring und Audit-Prozessen zur kontinuierlichen Überwachung der CRA-Konformität.\n• Etablierung von Performance Management Systemen, die CRA-bezogene Ziele und KPIs in individuelle und Team-Bewertungen integrieren.\n• Aufbau von Training und Awareness Programmen zur Sicherstellung, dass alle Mitarbeiter ihre Rollen und Verantwortlichkeiten verstehen.\n• Integration von CRA-Governance in bestehende Qualitätsmanagement- und Risikomanagement-Systeme für ganzheitliche Kontrolle."
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
