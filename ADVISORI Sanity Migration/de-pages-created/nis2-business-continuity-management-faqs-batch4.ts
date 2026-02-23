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
    console.log('Updating NIS2 Business Continuity Management page with C-Level FAQs batch 4 (German)...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI eine NIS2-konforme BCM-Strategie, die gleichzeitig Post-Pandemic-Erkenntnisse integriert und hybride Arbeitsmodelle berücksichtigt?",
        answer: "Die COVID-19-Pandemie hat fundamentale Erkenntnisse über Business Continuity und die Bedeutung flexibler Arbeitsmodelle geliefert. ADVISORI integriert diese Learnings in NIS2-konforme BCM-Strategien, die sowohl traditionelle als auch moderne Arbeitsformen unterstützen und dabei die spezifischen Herausforderungen verteilter Organisationen adressieren.\n\n🌐 Post-Pandemic BCM Evolution:\n• Distributed Workforce Resilience: Entwicklung von BCM-Strategien, die sowohl physische als auch virtuelle Arbeitsplätze berücksichtigen und nahtlose Übergänge zwischen verschiedenen Arbeitsmodellen ermöglichen.\n• Remote Crisis Management: Etablierung von Führungs- und Koordinationsstrukturen, die auch bei vollständig verteilten Teams effektive Krisenreaktion gewährleisten.\n• Digital Collaboration Continuity: Sicherstellung der Verfügbarkeit und Resilienz kritischer Kollaborationstools und digitaler Arbeitsplattformen.\n• Health Crisis Integration: Berücksichtigung von Pandemie-Szenarien und Gesundheitskrisen als eigenständige BCM-Risikokategorie mit spezifischen Maßnahmen.\n\n💡 ADVISORI's Hybrid-Ready BCM Framework:\n• Location-Agnostic Operations: Entwicklung von Geschäftsprozessen und BCM-Verfahren, die unabhängig vom physischen Standort der Mitarbeiter funktionieren.\n• Technology Dependency Management: Proaktive Identifikation und Absicherung kritischer IT-Services, die für hybride Arbeitsmodelle essentiell sind.\n• Cultural Resilience Building: Aufbau organisationaler Kulturen, die sowohl in Präsenz- als auch in Remote-Situationen Resilienz und Zusammenhalt fördern.\n• Flexible Governance Models: Implementation von Governance-Strukturen, die sich schnell an verändernde Arbeitsmodelle und Krisensituationen anpassen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie stellt ADVISORI sicher, dass NIS2-Business Continuity Management auch emerging threats wie Quantum Computing und Deep Fake-Technologien proaktiv adressiert?",
        answer: "Die Bedrohungslandschaft entwickelt sich exponentiell weiter, wobei emerging technologies neue Angriffsvektoren und Risiken für Business Continuity schaffen. ADVISORI entwickelt zukunftsorientierte BCM-Strategien, die nicht nur aktuelle NIS2-Anforderungen erfüllen, sondern auch proaktiv aufkommende Bedrohungen antizipieren und adressieren.\n\n🔮 Future-Threat BCM Preparedness:\n• Quantum Threat Assessment: Bewertung der Auswirkungen von Quantum Computing auf bestehende Verschlüsselungssysteme und Entwicklung von Post-Quantum-Kryptographie-Migrationsstrategien.\n• AI-generated Threat Modeling: Berücksichtigung von Deep Fake-Technologien und KI-generierten Social Engineering-Angriffen in BCM-Szenarien und Trainings.\n• IoT and Edge Computing Risks: Erweiterung der BCM-Betrachtung auf die wachsende Anzahl von IoT-Geräten und Edge-Computing-Infrastrukturen.\n• Biological and Cyber Convergence: Vorbereitung auf Bedrohungen an der Schnittstelle zwischen biologischen und cyber-physischen Systemen.\n\n⚡ ADVISORI's Adaptive Threat Intelligence Integration:\n• Continuous Horizon Scanning: Systematische Überwachung technologischer Entwicklungen und deren potenzielle Auswirkungen auf Business Continuity.\n• Scenario-based Future Planning: Entwicklung von BCM-Szenarien für verschiedene Technology-Adoption-Pfade und deren Risikoprofile.\n• Research Partnership Networks: Kooperation mit Forschungseinrichtungen und Technology Think Tanks zur frühzeitigen Identifikation emerging threats.\n• Adaptive Defense Architecture: Aufbau von BCM-Systemen, die sich schnell an neue Bedrohungstypen anpassen können ohne fundamentale Reorganisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie etabliert ADVISORI ein NIS2-konformes BCM-System, das auch bei asymmetrischen Bedrohungen und staatlich unterstützten Angriffen effektiv funktioniert?",
        answer: "Moderne Bedrohungen für kritische Infrastrukturen gehen zunehmend von staatlichen Akteuren und hochorganisierten Gruppen aus, die sophisticated und persistente Angriffe durchführen. ADVISORI entwickelt BCM-Strategien, die auch gegen Advanced Persistent Threats (APTs) und staatlich unterstützte Cyber-Operationen resilient sind und dabei vollständig NIS2-konform bleiben.\n\n🛡️ National Security-Grade BCM Resilience:\n• APT-resistant Architecture: Entwicklung von BCM-Systemen, die auch bei langfristigen, unentdeckten Kompromittierungen kritische Geschäftsfunktionen aufrechterhalten können.\n• Intelligence-driven Risk Assessment: Integration von Threat Intelligence über staatliche Akteure und deren Methoden in die BCM-Planung.\n• Compartmentalized Recovery Systems: Aufbau isolierter Recovery-Kapazitäten, die auch bei umfassenden Netzwerk-Kompromittierungen funktionsfähig bleiben.\n• Cross-Sector Coordination: Etablierung von Kommunikations- und Koordinationsmechanismen mit anderen kritischen Infrastrukturen und Behörden.\n\n🔍 ADVISORI's High-Threat Environment BCM:\n• Assume Breach Mentality: Entwicklung von BCM-Strategien unter der Annahme, dass Angreifer bereits im Netzwerk präsent sind oder sein könnten.\n• Zero Trust Recovery Protocols: Implementation von Recovery-Verfahren, die keine impliziten Vertrauensbeziehungen voraussetzen.\n• Operational Security Integration: Einbindung von OPSEC-Prinzipien in BCM-Prozesse zum Schutz vor Intelligence Gathering durch Angreifer.\n• National Resilience Contribution: Positionierung der organisationalen BCM-Kapazitäten als Beitrag zur nationalen Cyber-Resilienz und Sicherheitsarchitektur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie entwickelt ADVISORI ein NIS2-Business Continuity Management, das sowohl kurzfristige operative Exzellenz als auch langfristige strategische Transformation unterstützt?",
        answer: "Effektives BCM muss sowohl unmittelbare operative Anforderungen erfüllen als auch langfristige strategische Ziele unterstützen. ADVISORI entwickelt BCM-Systeme, die als Plattform für kontinuierliche organisationale Evolution dienen und dabei durchgehend NIS2-Compliance gewährleisten, ohne Innovationsfähigkeit oder Agilität zu beeinträchtigen.\n\n⚖️ Balanced Short-term Excellence und Long-term Vision:\n• Dual-Horizon BCM Planning: Entwicklung von BCM-Strategien, die sowohl kurzfristige operative Stabilität als auch langfristige strategische Flexibilität gewährleisten.\n• Innovation-Compatible Resilience: Aufbau von BCM-Systemen, die Experimente und Innovationen ermöglichen ohne Sicherheit oder Compliance zu gefährden.\n• Adaptive Capability Building: Systematische Entwicklung organisationaler Fähigkeiten, die sowohl für aktuelle als auch zukünftige BCM-Herausforderungen relevant sind.\n• Value-driven BCM Investment: Optimierung von BCM-Investitionen für maximalen Beitrag sowohl zur aktuellen Performance als auch zur strategischen Positionierung.\n\n🚀 ADVISORI's Strategic BCM Evolution Framework:\n• Continuous Transformation Support: BCM-Systeme, die organisationale Veränderungen unterstützen und beschleunigen anstatt sie zu behindern.\n• Future-State Readiness: Vorbereitung der BCM-Infrastruktur auf geplante strategische Initiativen und Geschäftsmodelländerungen.\n• Learning Organization Integration: Einbindung von BCM-Erkenntnissen in organisationale Lernprozesse für kontinuierliche strategische Verbesserung.\n• Ecosystem-Level Resilience: Entwicklung von BCM-Kapazitäten, die nicht nur die eigene Organisation, sondern das gesamte Geschäftsökosystem stärken."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
