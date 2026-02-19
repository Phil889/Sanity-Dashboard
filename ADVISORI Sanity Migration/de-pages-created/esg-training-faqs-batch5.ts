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
    console.log('Updating ESG Training page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-training' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-training" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie entwickelt ADVISORI ESG Training-Programme für Supply Chain Partner und externe Stakeholder zur Sicherstellung durchgängiger Nachhaltigkeitsstandards?",
        answer: "ESG-Exzellenz endet nicht an den Unternehmensgrenzen - Supply Chains und Partner-Ökosysteme sind integrale Bestandteile nachhaltiger Geschäftsmodelle. ADVISORI entwickelt umfassende Stakeholder Training-Programme, die ESG-Standards und -Kompetenzen entlang der gesamten Wertschöpfungskette verankern und ein kohärentes Nachhaltigkeits-Ökosystem schaffen.\n\n🔗 Ecosystem-Wide ESG Capability Building:\n• Supplier ESG Academy: Entwicklung strukturierter Training-Programme für Lieferanten verschiedener Tier-Level zur Etablierung einheitlicher ESG-Standards und -Praktiken entlang der Supply Chain.\n• Partner Certification Programs: Implementierung von ESG-Zertifizierungsprogrammen für Geschäftspartner, die sowohl Kompetenznachweis als auch kontinuierliche Verbesserung sicherstellen.\n• Stakeholder Engagement Training: Schulung interner Teams in effektivem ESG-Stakeholder-Management und in der Kommunikation von Nachhaltigkeitserwartungen an externe Partner.\n• Collaborative Learning Networks: Aufbau branchenweiter Lerngemeinschaften für den Erfahrungsaustausch und die gemeinsame Entwicklung von ESG-Best Practices.\n\n🌐 ADVISORI's Extended Enterprise Training Strategy:\n• Risk-Based Partner Prioritization: Systematische Priorisierung von Training-Investitionen basierend auf ESG-Risikobewertungen und strategischer Bedeutung verschiedener Partner-Segmente.\n• Cultural Adaptation für diverse Partner: Anpassung von Training-Inhalten und -Methoden an verschiedene Unternehmenskulturen, Größen und Reifegrade der Partner-Organisationen.\n• Digital Training Platforms für Skalierung: Bereitstellung skalierbarer digitaler Lernplattformen, die auch kleineren Partnern Zugang zu hochwertigen ESG-Training ermöglichen.\n• Incentive und Recognition Systems: Entwicklung von Anreizsystemen und Anerkennungsprogrammen für Partner mit herausragender ESG-Performance und Training-Teilnahme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie adressiert ADVISORI die ESG Training-Herausforderungen bei Post-Merger-Integration und Joint Ventures zur Harmonisierung unterschiedlicher Nachhaltigkeitskulturen?",
        answer: "M&A-Transaktionen und Joint Ventures bringen oft Unternehmen mit unterschiedlichen ESG-Reifegrad und -Kulturen zusammen. Die erfolgreiche Integration verschiedener Nachhaltigkeitsansätze ist entscheidend für die Realisierung von Synergiepotentialen und die Vermeidung von ESG-Risiken. ADVISORI entwickelt spezialisierte Training-Programme für die harmonische Integration unterschiedlicher ESG-Kulturen in komplexen Unternehmensstrukturen.\n\n🤝 ESG Cultural Integration Excellence:\n• Cultural Assessment und Gap Analysis: Umfassende Bewertung der ESG-Kulturen, -Praktiken und -Kompetenzen aller beteiligten Organisationen zur Identifikation von Harmonisierungsbedarfen.\n• Unified ESG Vision Development: Kollaborative Entwicklung einer gemeinsamen ESG-Vision und -Strategie, die die Stärken aller beteiligten Organisationen integriert und synergistische Effekte maximiert.\n• Cross-Cultural ESG Leadership Training: Spezialisierte Programme für Führungskräfte zur Navigation kultureller Unterschiede und zur Förderung einer integrierten ESG-Führungskultur.\n• Change Management für ESG Integration: Strukturierte Change Management-Ansätze zur Überwindung von Widerständen und zur Schaffung von Akzeptanz für neue, harmonisierte ESG-Praktiken.\n\n⚡ ADVISORI's Integration-Focused Training Methodology:\n• Phased Integration Approach: Stufenweise Integration von ESG-Training-Programmen, die schrittweise Annäherung und kulturelle Adaptation ermöglichen.\n• Best Practice Synthesis: Identifikation und Synthese der besten ESG-Praktiken aus allen beteiligten Organisationen zu neuen, überlegenen Ansätzen.\n• Joint Learning Initiatives: Gemeinsame Training-Projekte und Workshops, die Vertrauen aufbauen und kulturelle Brücken zwischen verschiedenen Organisationen schaffen.\n• Success Metric Alignment: Entwicklung gemeinsamer ESG-Erfolgskennzahlen und -Ziele, die alle beteiligten Organisationen auf eine einheitliche Nachhaltigkeitsagenda ausrichten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie entwickelt ADVISORI ESG Training-Programme für Crisis Management und Reputation Recovery bei ESG-bezogenen Unternehmenskrisen?",
        answer: "ESG-bezogene Krisen können verheerend für Unternehmensreputation und -wert sein. Von Umweltkatastrophen bis zu sozialen Kontroversen - die angemessene Reaktion erfordert spezialisierte Kompetenzen und vorbereitende Training-Programme. ADVISORI entwickelt Crisis-Ready ESG Training, das Teams auf verschiedene Nachhaltigkeitskrisen vorbereitet und effektive Response-Strategien vermittelt.\n\n🚨 ESG Crisis Preparedness Training:\n• Scenario-Based Crisis Simulation: Intensive Krisensimulationen für verschiedene ESG-Szenarien (Umweltunfälle, Arbeitsrechtsverletzungen, Governance-Skandale) zur praktischen Vorbereitung auf Ernstfälle.\n• Stakeholder Communication in Crisis: Spezialisiertes Training in der Kommunikation mit verschiedenen Stakeholder-Gruppen während ESG-Krisen, von Regulatoren bis zu NGOs und Medien.\n• Legal und Regulatory Crisis Response: Schulung in den rechtlichen Aspekten von ESG-Krisen und angemessenen Compliance-Reaktionen zur Minimierung rechtlicher Risiken.\n• Reputation Recovery Strategies: Entwicklung langfristiger Strategien zur Wiederherstellung von Vertrauen und Reputation nach ESG-bezogenen Reputationsschäden.\n\n🛡️ ADVISORI's Crisis-Ready Training Framework:\n• Early Warning System Training: Befähigung von Teams zur Erkennung früher Warnsignale für potentielle ESG-Krisen und zur proaktiven Risikominimierung.\n• Cross-Functional Crisis Teams: Training interdisziplinärer Krisenteams, die verschiedene Aspekte einer ESG-Krise (legal, operational, communicational) koordiniert adressieren können.\n• Media und Digital Communication: Spezialisierte Schulung in moderner Krisenkommunikation, einschließlich Social Media Management und digitaler Reputation Management.\n• Post-Crisis Learning und Improvement: Etablierung von Lernprozessen zur systematischen Aufarbeitung von Krisen und kontinuierlichen Verbesserung der ESG-Resilience."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie etabliert ADVISORI ESG Training als Competitive Intelligence Tool zur Antizipation von Markttrends und Wettbewerbsvorteilen in der Nachhaltigkeitstransformation?",
        answer: "ESG Training kann über reine Compliance-Erfüllung hinaus als strategisches Intelligence-Tool für Marktantizipation und Wettbewerbsvorteile genutzt werden. ADVISORI entwickelt forward-looking Training-Programme, die nicht nur aktuelle ESG-Anforderungen adressieren, sondern auch zukünftige Marktchancen und competitive Advantages in der nachhaltigen Transformation identifizieren und erschließen.\n\n🔍 ESG Market Intelligence Training:\n• Trend Anticipation und Future Scenario Planning: Training in der systematischen Analyse von ESG-Trends und der Entwicklung von Zukunftsszenarien für strategische Planung und Opportunity Recognition.\n• Competitive ESG Benchmarking: Schulung in der Bewertung und dem Benchmarking der ESG-Performance von Wettbewerbern zur Identifikation von Differenzierungsmöglichkeiten.\n• Innovation Opportunity Mapping: Befähigung zur Identifikation von ESG-getriebenen Innovationschancen und neuen Geschäftsmodellen vor der Konkurrenz.\n• Regulatory Horizon Scanning: Training in der proaktiven Überwachung kommender ESG-Regulatorik und deren strategischen Implikationen für Marktpositionierung.\n\n🎯 ADVISORI's Strategic ESG Intelligence Framework:\n• First-Mover Advantage Development: Entwicklung von Strategien zur Nutzung früher ESG-Adoption für nachhaltige Wettbewerbsvorteile und Marktführerschaft.\n• Ecosystem Mapping und Partnership Intelligence: Training in der strategischen Analyse von ESG-Partner-Ökosystemen und der Identifikation wertvoller Kooperationsmöglichkeiten.\n• Investment und Capital Market Intelligence: Schulung in der Bewertung von ESG-Investment-Trends und deren Auswirkungen auf Kapitalzugang und Unternehmensbewertung.\n• Technology und Innovation Scouting: Befähigung zur frühzeitigen Identifikation ESG-relevanter Technologien und deren strategischen Potentiale für competitive Differentiation."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
