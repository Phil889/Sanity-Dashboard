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
    console.log('Updating NIS2 Business Continuity Management page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-business-continuity-management' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-business-continuity-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie stellt ADVISORI sicher, dass unser NIS2-Business Continuity Management den spezifischen Anforderungen kritischer Infrastrukturen gerecht wird und gleichzeitig Sektorspezifika berücksichtigt?",
        answer: "Die NIS2-Richtlinie differenziert bewusst zwischen kritischen und wichtigen Einrichtungen und erkennt die besonderen Herausforderungen verschiedener Sektoren an. ADVISORI entwickelt sektorspezifische BCM-Ansätze, die sowohl die einheitlichen NIS2-Grundanforderungen erfüllen als auch die individuellen operativen Realitäten und regulatorischen Kontexte verschiedener Branchen berücksichtigen.\n\n🏭 Sektorspezifische BCM-Expertise:\n• Energiesektor: Besondere Berücksichtigung von Netzstabilität, Smart Grid-Sicherheit und der Interdependenz zwischen physischen und cyber-physischen Systemen bei der BCM-Planung.\n• Finanzdienstleistungen: Integration von PCI-DSS, Basel III und anderen Finanzregulierungen in die NIS2-BCM-Strategie, mit Fokus auf Transaktionsintegrität und Liquiditätsmanagement.\n• Gesundheitswesen: Spezielle Berücksichtigung von Patientensicherheit, medizinischen Geräten und GDPR-Compliance in kritischen Gesundheitssituationen.\n• Transport und Logistik: BCM-Ansätze, die die komplexen Lieferketten, internationale Abhängigkeiten und Just-in-Time-Operationen berücksichtigen.\n\n⚙️ ADVISORI's differenzierter Ansatz:\n• Sektor-spezifische Risikobewertung: Entwicklung von BCM-Strategien, die die spezifischen Bedrohungsprofile und operativen Herausforderungen Ihres Sektors reflektieren.\n• Regulatory Convergence Management: Harmonisierung der NIS2-Anforderungen mit bestehenden sektorspezifischen Regulierungen zur Vermeidung von Redundanzen und Konflikten.\n• Industry Best Practice Integration: Einbindung bewährter Branchenpraktiken und -standards in die NIS2-BCM-Implementierung.\n• Cross-Sector Dependency Mapping: Analyse und Management von Abhängigkeiten zwischen verschiedenen kritischen Infrastruktursektoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Die NIS2-Richtlinie erfordert detaillierte Incident Response Integration mit BCM. Wie orchestriert ADVISORI diese kritische Verzahnung für maximale Effektivität?",
        answer: "Die NIS2-Richtlinie erkennt an, dass Business Continuity Management und Incident Response keine isolierten Funktionen sind, sondern eng verzahnte Disziplinen, die nahtlos zusammenarbeiten müssen. ADVISORI entwickelt integrierte IR-BCM-Ökosysteme, die sowohl präventive Resilienz als auch reaktive Wiederherstellung optimieren und dabei die spezifischen NIS2-Meldepflichten und Koordinationsanforderungen erfüllen.\n\n🔗 Strategische IR-BCM-Integration:\n• Unified Command Structure: Etablierung einer einheitlichen Führungsstruktur, die sowohl Incident Response als auch Business Continuity Maßnahmen koordiniert und Entscheidungszeiten minimiert.\n• Real-time Damage Assessment: Implementierung von Systemen zur sofortigen Bewertung der Geschäftsauswirkungen von Sicherheitsvorfällen und automatischen Aktivierung entsprechender BCM-Maßnahmen.\n• Dynamic Recovery Prioritization: Entwicklung von Algorithmen zur dynamischen Priorisierung von Wiederherstellungsmaßnahmen basierend auf aktuellen Incident-Parametern und Geschäftsanforderungen.\n• Regulatory Reporting Automation: Automatisierte Erfüllung der NIS2-Meldepflichten durch Integration von IR- und BCM-Datenströmen.\n\n💡 ADVISORI's Orchestrierungsansatz:\n• Scenario-based Response Playbooks: Entwicklung spezifischer Handlungsanleitungen für verschiedene Incident-Kategorien, die sowohl technische Response als auch geschäftliche Continuity-Maßnahmen definieren.\n• Cross-functional Training Programs: Schulung von Teams, die sowohl IR- als auch BCM-Kompetenzen besitzen und nahtlos zwischen beiden Modi wechseln können.\n• Technology Stack Integration: Implementierung von Plattformen, die IR-Tools mit BCM-Systemen verknüpfen und einheitliche Dashboards für Entscheidungsträger bereitstellen.\n• Continuous Improvement Loops: Etablierung von Feedback-Mechanismen, die Erkenntnisse aus echten Vorfällen sowohl in IR- als auch BCM-Prozesse einfließen lassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI, dass unser NIS2-BCM die komplexen Supply Chain-Abhängigkeiten moderner Geschäftsmodelle angemessen adressiert und Third-Party-Risiken effektiv managt?",
        answer: "Die NIS2-Richtlinie erkennt explizit die kritische Bedeutung von Lieferkettenresilienz an und fordert die Berücksichtigung von Drittanbieter-Risiken im BCM. In einer vernetzten Wirtschaft, wo Geschäftsprozesse zunehmend von externen Partnern abhängen, entwickelt ADVISORI BCM-Strategien, die die gesamte Wertschöpfungskette umfassen und Drittanbieter-Risiken proaktiv managen.\n\n🌐 Ganzheitliches Supply Chain BCM:\n• End-to-End Dependency Mapping: Vollständige Kartierung aller kritischen Lieferanten, Service Provider und Technologiepartner sowie deren Abhängigkeiten und potenzielle Single Points of Failure.\n• Supplier Risk Assessment Framework: Entwicklung systematischer Bewertungsverfahren für die BCM-Reife und Cyber-Resilienz kritischer Drittanbieter.\n• Cascading Failure Analysis: Modellierung potenzieller Kaskadeneffekte bei Ausfällen in der Lieferkette und Entwicklung entsprechender Mitigation-Strategien.\n• Alternative Sourcing Strategies: Etablierung von Backup-Lieferanten und redundanten Sourcing-Optionen für kritische Geschäftsfunktionen.\n\n🔍 ADVISORI's Supply Chain Resilience Ansatz:\n• Contractual BCM Requirements: Integration spezifischer BCM- und Cyber-Resilienz-Klauseln in Lieferantenverträge und SLAs.\n• Third-Party Monitoring und Assessment: Kontinuierliche Überwachung der BCM-Performance und Cyber-Sicherheitslage kritischer Drittanbieter.\n• Joint Crisis Simulation: Durchführung gemeinsamer Krisenübungen mit kritischen Partnern zur Verbesserung der koordinierten Response-Fähigkeiten.\n• Ecosystem Resilience Programs: Entwicklung branchenweiter Initiativen zur Stärkung der kollektiven Resilienz in kritischen Lieferketten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie positioniert ADVISORI NIS2-Business Continuity Management als strategischen Hebel für ESG-Compliance und nachhaltige Unternehmensführung?",
        answer: "Die Konvergenz von NIS2-Anforderungen mit ESG-Zielen (Environmental, Social, Governance) schafft einzigartige Synergien für nachhaltige Wertschöpfung. ADVISORI positioniert BCM nicht nur als Compliance-Tool, sondern als integrierten Baustein einer ganzheitlichen ESG-Strategie, die Cyber-Resilienz, ökologische Nachhaltigkeit und verantwortungsvolle Unternehmensführung verbindet.\n\n🌱 BCM-ESG Synergien für nachhaltige Resilienz:\n• Environmental Integration: Entwicklung von BCM-Strategien, die Umweltrisiken (Klimawandel, Naturkatastrophen) berücksichtigen und gleichzeitig zur Reduktion des ökologischen Fußabdrucks beitragen.\n• Social Responsibility durch Resilienz: Sicherstellung, dass BCM-Maßnahmen die Kontinuität kritischer gesellschaftlicher Dienstleistungen gewährleisten und vulnerable Bevölkerungsgruppen schützen.\n• Governance Excellence: Integration von BCM in die Unternehmensführung als Demonstration von Risikomanagement-Kompetenz und strategischer Voraussicht.\n• Stakeholder Value Creation: Nachweis gegenüber Investoren, Kunden und Regulierungsbehörden, dass Cyber-Resilienz Teil einer umfassenden Nachhaltigkeitsstrategie ist.\n\n📊 ADVISORI's ESG-integrierter BCM-Ansatz:\n• Sustainability-aligned Recovery Strategies: Entwicklung von Wiederherstellungsverfahren, die ökologische Nachhaltigkeitsziele berücksichtigen und grüne Technologien priorisieren.\n• ESG Impact Assessment: Integration von ESG-Kriterien in die Bewertung von BCM-Investitionen und -Entscheidungen.\n• Transparent Reporting und Disclosure: Entwicklung von Reporting-Frameworks, die BCM-Performance als Teil der ESG-Berichterstattung darstellen.\n• Stakeholder Engagement Programs: Einbindung von ESG-relevanten Stakeholdern in BCM-Planungsprozesse zur Sicherstellung umfassender Berücksichtigung gesellschaftlicher Anforderungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
