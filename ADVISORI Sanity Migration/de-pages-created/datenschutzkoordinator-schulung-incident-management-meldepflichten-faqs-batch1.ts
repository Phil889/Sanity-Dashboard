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
    console.log('Updating Datenschutzkoordinator Schulung - Incident Management & Meldepflichten page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenschutzkoordinator-schulung-incident-management-meldepflichten' })
    
    if (!existingDoc) {
      throw new Error('Document "datenschutzkoordinator-schulung-incident-management-meldepflichten" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine strukturierte Datenschutz-Incident Management Schulung für Koordinatoren aus strategischer C-Level Sicht mehr als eine Compliance-Pflicht und wie positioniert ADVISORI diese als Wettbewerbsvorteil?",
        answer: "Für die Unternehmensleitung stellt eine professionelle Datenschutz-Incident Management Schulung eine strategische Investition in die operative Resilienz und den Reputationsschutz dar. In einer Zeit zunehmender Cyber-Bedrohungen und verschärfter Regulierung kann eine gut geschulte Datenschutzorganisation den Unterschied zwischen kontrollierter Krisenbewältigung und existenzbedrohenden Reputationsschäden bedeuten. ADVISORI versteht diese Schulung als fundamentalen Baustein des Enterprise Risk Managements.\n\n🎯 Strategische Imperative für die C-Suite:\n• Risikominimierung und Schadensbegrenzung: Professionell geschulte Koordinatoren können Datenschutzvorfälle schneller identifizieren, bewerten und eindämmen, was direkte Auswirkungen auf Schadenssummen und Geschäftskontinuität hat.\n• Regulatory Excellence als Marktdifferenziator: Unternehmen mit nachweislich professionellem Incident Management genießen höheres Vertrauen bei Kunden, Partnern und Aufsichtsbehörden, was sich in Vertragsverhandlungen und Marktpositionierung niederschlägt.\n• Kostenoptimierung durch Prävention: Gut geschulte Teams reduzieren die Wahrscheinlichkeit kostspieliger Eskalationen, Bußgelder und externer Krisenberatung erheblich.\n• Stärkung der digitalen Transformation: Robuste Datenschutz-Incident-Capabilities ermöglichen mutigere Digitalisierungsstrategien und Innovationen, da Risiken kalkulierbarer werden.\n\n🛡️ Der ADVISORI-Ansatz für strategische Datenschutz-Resilienz:\n• Business-Impact-orientierte Schulungskonzepte: Unsere Programme fokussieren nicht nur auf rechtliche Compliance, sondern vermitteln Verständnis für die geschäftlichen Auswirkungen und Prioritäten bei Vorfällen.\n• Integrierte Krisenmanagement-Perspektive: Wir schulen Koordinatoren darin, Datenschutzvorfälle als Teil größerer Unternehmenskrisensituationen zu verstehen und entsprechend zu handeln.\n• Stakeholder-Management und Kommunikation: Professionelle Kommunikation mit Aufsichtsbehörden, Medien und Betroffenen wird als Kernkompetenz vermittelt, die direkt den Reputationsschutz beeinflusst.\n• Continuous Improvement Mindset: Wir etablieren Prozesse zur kontinuierlichen Verbesserung der Incident-Response-Fähigkeiten basierend auf Lessons Learned und sich verändernden Bedrohungslagen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den Return on Investment einer ADVISORI Datenschutz-Incident Management Schulung und welchen messbaren Beitrag leistet diese zur Risikoreduktion und operativen Effizienz?",
        answer: "Eine professionelle Datenschutz-Incident Management Schulung von ADVISORI generiert messbaren ROI durch Risikoreduktion, Effizienzsteigerung und Schadensvermeidung. Für die C-Suite ist es essentiell, diese Investition nicht als reine Kostenstelle, sondern als strategischen Value Driver zu verstehen, der sich in harten KPIs und weichen Faktoren wie Reputationsschutz niederschlägt.\n\n💰 Direkte ROI-Komponenten und Kostenvermeidung:\n• Reduktion von Bußgeldrisiken: Professionell abgewickelte Incident-Meldungen und nachweisbare Compliance-Anstrengungen können Bußgelder um bis zu 50% reduzieren. Bei durchschnittlichen DSGVO-Bußgeldern im Millionenbereich ist dies eine erhebliche Ersparnis.\n• Minimierung von Schadenersatzforderungen: Schnelle und transparente Incident Response reduziert das Risiko erfolgreicher Schadenersatzklagen von betroffenen Personen erheblich.\n• Kostenoptimierung bei externen Dienstleistern: Gut geschulte interne Teams reduzieren die Abhängigkeit von teuren externen Krisenberatern und Anwaltskanzleien im Ernstfall.\n• Verkürzung von Incident-Response-Zeiten: Professionell geschulte Teams können Vorfälle bis zu 70% schneller abwickeln, was direkt die Geschäftsunterbrechungskosten reduziert.\n\n📈 Indirekte Werttreiber und strategische Vorteile:\n• Verbesserte Versicherungskonditionen: Nachweisbare Incident Management Capabilities können zu reduzierten Cyber-Versicherungsprämien und besseren Deckungskonditionen führen.\n• Erhöhte Kundenakquisition und -bindung: Unternehmen mit professionellem Datenschutz-Incident Management haben bei B2B-Verträgen oft bessere Verhandlungspositionen.\n• Operational Excellence: Strukturierte Incident-Prozesse verbessern die allgemeine Datenschutz-Governance und reduzieren operative Reibungsverluste.\n• Talentakquisition und -bindung: Professionelle Schulungsprogramme stärken die Arbeitgeberattraktivität und reduzieren Fluktuation in kritischen Datenschutzrollen.\n\n🎯 Messbare KPIs für die C-Suite:\n• Mean Time to Detection (MTTD) und Mean Time to Response (MTTR) bei Datenschutzvorfällen\n• Anzahl und Schwere von Compliance-Verstößen und deren Entwicklung\n• Kostenentwicklung bei Incident Response und externen Beratungskosten\n• Kundenzufriedenheit und Vertrauen in Datenschutz-Capabilities (NPS-Scores, Vertragserneuerungsraten)"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In einer Zeit zunehmender Cyber-Bedrohungen und komplexer Datenschutzvorfälle – wie stellt ADVISORI sicher, dass unsere Koordinatoren nicht nur aktuelle, sondern auch zukünftige Incident-Szenarien professionell bewältigen können?",
        answer: "Die Datenschutz-Bedrohungslandschaft entwickelt sich exponentiell – von sophistizierten Ransomware-Angriffen über Supply Chain Attacks bis hin zu KI-gestützten Datenexfiltrationen. ADVISORI's Schulungsansatz fokussiert nicht nur auf aktuelle Incident-Typen, sondern bereitet Koordinatoren durch adaptive Methodiken und Forward-Looking-Szenarien auf unbekannte zukünftige Bedrohungen vor.\n\n🔄 Adaptive Incident Management Methodologie:\n• Threat Intelligence Integration: Unsere Schulungen incorporieren aktuelle Threat Intelligence und Erkenntnisse aus globalen Incident Response Erfahrungen, um Koordinatoren über emerging threats zu informieren.\n• Scenario-based Learning: Wir nutzen nicht nur historische Fälle, sondern entwickeln kontinuierlich neue, realistische Szenarien basierend auf aktuellen Bedrohungstrends und technologischen Entwicklungen.\n• Multi-Vector Incident Simulation: Training an komplexen, mehrdimensionalen Vorfällen, die mehrere Angriffsvektoren, Datentypen und Stakeholder-Gruppen betreffen.\n• Technology-agnostic Principles: Vermittlung universeller Incident Management Prinzipien, die unabhängig von spezifischen Technologien oder Angriffsmethoden anwendbar sind.\n\n🚀 Future-Ready Training Components:\n• AI und Machine Learning Impact: Schulung zu den Auswirkungen von KI auf Datenschutzvorfälle, sowohl als Bedrohung (KI-gestützte Angriffe) als auch als Lösung (KI-basierte Detection).\n• IoT und Edge Computing Challenges: Vorbereitung auf Datenschutzvorfälle in komplexen, vernetzten Umgebungen mit IoT-Geräten und Edge Computing Infrastrukturen.\n• Cloud-native Incident Response: Spezielle Methodiken für Vorfälle in Multi-Cloud- und Hybrid-Cloud-Umgebungen mit komplexen Datenflüssen.\n• Cross-border und Jurisdictional Complexity: Training für internationale Datenschutzvorfälle, die multiple Rechtssysteme und Aufsichtsbehörden betreffen.\n\n🛡️ Kontinuierliche Weiterentwicklung und Updates:\n• Quarterly Threat Briefings: Regelmäßige Updates zu neuen Bedrohungen und deren Incident Management Implikationen.\n• Peer Learning Networks: Aufbau von Erfahrungsaustausch-Netzwerken zwischen geschulten Koordinatoren verschiedener Organisationen.\n• Post-Incident Learning Integration: Systematische Integration von Lessons Learned aus realen Vorfällen in die Schulungsinhalte.\n• Regulatory Change Management: Proaktive Anpassung der Schulungsinhalte an sich verändernde rechtliche Anforderungen und Aufsichtspraxis."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI's Datenschutz-Incident Management Schulung unsere Organisation von einer reaktiven Compliance-Haltung zu einer proaktiven, resilienz-orientierten Datenschutz-Kultur aus strategischer Führungssicht?",
        answer: "Die Transformation einer Organisation von reaktiver Compliance zu proaktiver Datenschutz-Resilienz erfordert einen fundamentalen Kulturwandel, der weit über einzelne Schulungen hinausgeht. ADVISORI's Incident Management Training ist der Katalysator für diesen Wandel, indem es nicht nur technische Fähigkeiten vermittelt, sondern eine neue Denkweise und Haltung gegenüber Datenschutz als strategischem Enabler etabliert.\n\n🎯 Kultureller Paradigmenwechsel - Von Compliance zu Excellence:\n• Mindset Shift: Von 'Datenschutz als Hindernis' zu 'Datenschutz als Wettbewerbsvorteil' - geschulte Koordinatoren werden zu Botschaftern dieser neuen Perspektive.\n• Proaktive Risikoanticipation: Entwicklung einer Kultur der kontinuierlichen Risikobewertung und präventiven Maßnahmen statt reaktiver Schadensbegrenzung.\n• Cross-funktionale Integration: Aufbau von Brücken zwischen Datenschutz, IT-Security, Legal und Business Units für ganzheitliches Risikomanagement.\n• Innovation Enablement: Positionierung von Datenschutz-Excellence als Grundlage für sichere digitale Innovation und neue Geschäftsmodelle.\n\n🚀 Strategische Transformation durch ADVISORI's Ansatz:\n• Leadership Development: Schulung von Koordinatoren nicht nur als Bearbeiter, sondern als interne Datenschutz-Leader, die andere Abteilungen inspirieren und befähigen.\n• Business Integration: Vermittlung von Business Impact Awareness, sodass Datenschutz-Entscheidungen immer im Kontext der Geschäftsziele getroffen werden.\n• Stakeholder Evangelism: Befähigung der Koordinatoren zur professionellen Kommunikation der Datenschutz-Vision auf allen Ebenen der Organisation.\n• Continuous Improvement Culture: Etablierung einer Lernkultur, die aus jedem Incident wertvolle Erkenntnisse für die Organisationsentwicklung zieht.\n\n🏗️ Strukturelle Veränderungen und nachhaltige Wirkung:\n• Governance Integration: Eingliederung der Incident Management Expertise in strategische Entscheidungsprozesse und Board-Level Reporting.\n• Process Excellence: Entwicklung von Datenschutz-Incident Management als Referenz für operative Exzellenz in anderen Bereichen.\n• Talent Magnetsimus: Etablierung der Organisation als attraktiver Arbeitgeber für Top-Datenschutz-Talente durch professionelle Entwicklungsmöglichkeiten.\n• Market Positioning: Nutzung der demonstrierten Datenschutz-Kompetenz für Marketing, Sales und Partnerschaftsentwicklung.\n\n📊 Messbare Transformationsindikatoren:\n• Erhöhung der proaktiven Meldungen und Self-Assessments\n• Verbesserung der abteilungsübergreifenden Datenschutz-Kooperation\n• Reduktion der Incident-Eskalationen durch frühe Intervention\n• Positive Entwicklung bei Mitarbeiterumfragen zu Datenschutz-Awareness und -Kultur"
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
