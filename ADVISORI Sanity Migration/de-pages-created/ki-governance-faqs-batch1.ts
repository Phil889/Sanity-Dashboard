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
    console.log('Updating KI-Governance page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-governance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum ist strategische KI-Governance für die C-Suite mehr als nur Compliance und wie positioniert ADVISORI Governance als Wettbewerbsvorteil?',
        answer: "Für die Unternehmensführung ist KI-Governance weit mehr als eine regulatorische Pflichtübung. Sie ist ein strategischer Enabler, der Innovation ermöglicht, Risiken kontrolliert und nachhaltigen Geschäftswert schafft. ADVISORI versteht KI-Governance als fundamentalen Baustein für erfolgreiche AI-Transformation, der nicht nur Compliance sicherstellt, sondern aktiv Wettbewerbsvorteile generiert und Stakeholder-Vertrauen aufbaut.\n\n🎯 Strategische Governance-Imperative für die Führungsebene:\n• Risikominimierung und Wertsteigerung: Effektive KI-Governance reduziert operative, regulatorische und Reputationsrisiken erheblich, während sie gleichzeitig die Wertschöpfung aus KI-Investitionen maximiert.\n• Stakeholder-Vertrauen und Marktakzeptanz: Transparente Governance-Strukturen schaffen Vertrauen bei Kunden, Investoren, Partnern und Regulierungsbehörden, was sich direkt in besserer Marktposition niederschlägt.\n• Innovation durch Struktur: Klare Governance-Frameworks ermöglichen kontrollierte Innovation und beschleunigen die Markteinführung neuer KI-Lösungen durch reduzierte Unsicherheit.\n• Skalierbarkeit und Nachhaltigkeit: Robuste Governance-Strukturen ermöglichen die skalierbare Implementierung von KI-Systemen ohne proportionale Erhöhung der Compliance-Kosten.\n\n🏆 Der ADVISORI-Ansatz für strategische KI-Governance:\n• Geschäftswert-orientierte Governance-Frameworks: Wir entwickeln Governance-Strukturen, die nicht nur Risiken managen, sondern aktiv Geschäftswert schaffen und strategische Ziele unterstützen.\n• Adaptive Governance-Architekturen: Implementierung flexibler Frameworks, die mit der technologischen Entwicklung und sich ändernden Geschäftsanforderungen mithalten können.\n• Stakeholder-zentrierte Kommunikation: Entwicklung transparenter Governance-Kommunikation, die das Vertrauen aller Stakeholder stärkt und regulatorische Akzeptanz fördert.\n• Kontinuierliche Wertoptimierung: Governance als dynamischer Prozess, der kontinuierlich optimiert wird, um maximalen Geschäftswert bei minimalen Risiken zu erzielen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie quantifiziert ADVISORI den ROI effektiver KI-Governance und welchen direkten Einfluss hat diese auf Unternehmensbewertung und Investoren-Attraktivität?',
        answer: "Die Investition in robuste KI-Governance ist eine strategische Entscheidung mit messbaren finanziellen Auswirkungen. ADVISORI entwickelt umfassende ROI-Modelle für Governance-Investitionen, die sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen durch effektive AI-Governance quantifizieren und für die C-Suite transparent machen.\n\n💰 Direkte finanzielle Auswirkungen effektiver KI-Governance:\n• Reduktion von Compliance-Kosten: Proaktive Governance-Frameworks reduzieren Kosten für nachträgliche Compliance-Anpassungen, Audits und regulatorische Strafen um erhebliche Beträge.\n• Vermeidung von Governance-Failures: Effektive Governance verhindert kostspielige KI-Systemausfälle, Datenschutzverletzungen oder Bias-bedingte Rechtsstreitigkeiten.\n• Effizienzsteigerung durch Struktur: Klare Governance-Prozesse reduzieren Entscheidungszeiten, eliminieren Doppelarbeit und beschleunigen KI-Projektimplementierungen.\n• Versicherungsvorteile: Nachweisbare Governance-Standards können zu günstigeren Cyber- und Haftpflichtversicherungsprämien führen.\n\n📈 Indirekte Wertsteigerung und Marktvorteile:\n• ESG-Compliance und Investoren-Attraktivität: Robuste KI-Governance verbessert ESG-Ratings und macht Unternehmen für nachhaltigkeitsorientierte Investoren attraktiver.\n• Marktdifferenzierung durch Vertrauen: Transparente Governance ermöglicht Premium-Positionierung und Zugang zu governance-sensitiven Märkten und Kunden.\n• Strategische Partnerschaften: Effektive Governance öffnet Türen zu Kooperationen mit anderen governance-bewussten Unternehmen und Organisationen.\n• Regulatorische Vorteile: Proaktive Governance kann zu bevorzugter Behandlung durch Regulierungsbehörden und frühzeitigem Zugang zu neuen Märkten führen.\n\n🔍 ADVISORI ROI-Quantifizierung für KI-Governance:\n• Entwicklung maßgeschneiderter Governance-KPI-Dashboards zur Messung von Governance-Performance und deren Geschäftsauswirkungen.\n• Benchmarking gegen Branchenstandards und Best Practices zur Identifikation von Optimierungspotenzialen.\n• Langfristige Wertmodellierung, die sowohl kurzfristige Governance-Investitionen als auch langfristige Wertsteigerungen berücksichtigt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'In einer Zeit rasanter KI-Entwicklung und sich ständig ändernder regulatorischer Landschaft – wie stellt ADVISORI sicher, dass unsere Governance-Frameworks zukunftssicher und anpassungsfähig bleiben?',
        answer: "Die Dynamik der KI-Entwicklung und regulatorischen Landschaft erfordert Governance-Frameworks, die nicht nur aktuelle Anforderungen erfüllen, sondern auch flexibel genug sind, um sich an zukünftige Entwicklungen anzupassen. ADVISORI entwickelt adaptive Governance-Systeme, die mit der technologischen und regulatorischen Evolution Schritt halten und gleichzeitig stabile Grundprinzipien bewahren.\n\n🔄 Adaptive Governance-Architektur als Grundprinzip:\n• Modulare Framework-Struktur: Entwicklung von Governance-Frameworks mit modularen Komponenten, die einzeln aktualisiert werden können, ohne das gesamte System zu destabilisieren.\n• Kontinuierliches Regulatory Monitoring: Implementierung von Systemen zur laufenden Überwachung regulatorischer Entwicklungen und frühzeitigen Identifikation von Anpassungsbedarfen.\n• Stakeholder-Feedback-Schleifen: Etablierung regelmäßiger Konsultationen mit internen und externen Stakeholdern zur Identifikation neuer Governance-Herausforderungen.\n• Technology-Scouting: Proaktive Beobachtung technologischer Entwicklungen und deren potenzielle Governance-Implikationen für rechtzeitige Framework-Anpassungen.\n\n🌐 Zukunftsorientierte Governance-Strukturen:\n• Flexible Entscheidungsprozesse: Aufbau von Governance-Committees mit der Befugnis und den Ressourcen, schnell auf neue Herausforderungen zu reagieren.\n• Szenario-basierte Planung: Entwicklung von Governance-Szenarien für verschiedene technologische und regulatorische Entwicklungspfade und deren präventive Bewertung.\n• Cross-industrielle Vernetzung: Aufbau von Netzwerken mit anderen Unternehmen, Forschungseinrichtungen und Regulierungsbehörden für gemeinsames Lernen.\n• Regulatorische Antizipation: Proaktive Analyse regulatorischer Trends und frühzeitige Anpassung der Frameworks an erwartete Gesetzesänderungen.\n\n🛡️ ADVISORI Zukunftssicherung für KI-Governance:\n• Entwicklung von Governance-Roadmaps, die technologische und regulatorische Trends berücksichtigen und präventive Anpassungsstrategien definieren.\n• Implementierung von Learning-Systemen, die aus Governance-Entscheidungen und deren Auswirkungen lernen und das Framework kontinuierlich verbessern.\n• Aufbau interner Governance-Kompetenzen durch Schulungen und Weiterbildungen, die Ihre Teams befähigen, Governance-Herausforderungen selbstständig zu bewältigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie transformiert ADVISORI KI-Governance von einem potenziellen Innovationshemmnis zu einem aktiven Katalysator für Geschäftswachstum und technologische Durchbrüche?',
        answer: "Traditionell wird Governance oft als Bremse für Innovation wahrgenommen. ADVISORI verfolgt einen revolutionären Ansatz, der Governance-Prinzipien als Innovationstreiber positioniert. Für die C-Suite bedeutet dies, dass effektive KI-Governance nicht nur Risiken minimiert, sondern aktiv neue Geschäftsmöglichkeiten schafft und technologische Durchbrüche ermöglicht.\n\n🚀 Governance als Innovationskatalysator:\n• Strukturierte Innovation durch klare Frameworks: Governance-Strukturen schaffen Klarheit und Sicherheit, die Innovationsteams benötigen, um mutige Entscheidungen zu treffen und neue Technologien zu erkunden.\n• Risikominimierung ermöglicht Risikobereitschaft: Robuste Governance reduziert unkalkulierbare Risiken und schafft damit Raum für kalkulierte Innovationsrisiken.\n• Vertrauen als Innovationsgrundlage: Transparente Governance schafft Stakeholder-Vertrauen, das für die Akzeptanz und Adoption innovativer KI-Lösungen entscheidend ist.\n• Compliance als Marktöffner: Proaktive Governance-Compliance ermöglicht den Zugang zu regulierten Märkten und governance-sensitiven Kundensegmenten.\n\n💡 Strategische Innovation durch Governance-Excellence:\n• Governance-by-Design: Integration von Governance-Überlegungen von Anfang an in den Innovationsprozess führt zu nachhaltigeren und marktfähigeren Lösungen.\n• Stakeholder-zentrierte Innovation: Governance-Frameworks berücksichtigen alle Stakeholder-Interessen und führen zu Innovationen mit breiterer Akzeptanz und höherem Marktpotenzial.\n• Transparenz als Differenzierungsfaktor: Offene und nachvollziehbare Governance-Praktiken werden zum Alleinstellungsmerkmal in einem zunehmend governance-bewussten Markt.\n• Präventive Problemlösung: Governance-Frameworks identifizieren potenzielle Probleme frühzeitig und ermöglichen proaktive Lösungen statt reaktive Schadensbegrenzung.\n\n🎯 ADVISORI Innovation-Enablement durch Governance:\n• Entwicklung von Innovation-Governance-Frameworks, die Kreativität fördern und gleichzeitig Risiken kontrollieren.\n• Aufbau von Governance-Innovation-Labs, die gezielt governance-konforme Innovationen entwickeln und deren Marktpotenzial erkunden.\n• Schaffung von Governance-Innovation-Partnerschaften mit Forschungseinrichtungen, Start-ups und anderen Unternehmen für gemeinsame Durchbrüche.\n• Implementierung von Innovation-Governance-KPIs, die sowohl Innovation als auch Governance-Performance gleichermaßen messen und belohnen."
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
