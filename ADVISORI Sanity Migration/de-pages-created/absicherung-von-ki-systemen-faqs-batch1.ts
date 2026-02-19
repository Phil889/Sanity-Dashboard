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
    console.log('Updating Absicherung von KI-Systemen page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'absicherung-von-ki-systemen' })
    
    if (!existingDoc) {
      throw new Error('Document "absicherung-von-ki-systemen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die Absicherung von KI-Systemen für die C-Suite mehr als nur eine technische Notwendigkeit und wie positioniert ADVISORI KI-Security als strategischen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte repräsentiert die Absicherung von KI-Systemen einen fundamentalen Baustein der Unternehmensresilienz und strategischen Zukunftsfähigkeit. KI-Systeme sind nicht nur wertvolle Geschäftsassets, sondern auch potenzielle Angriffsvektoren für neuartige Cyber-Bedrohungen. Eine proaktive KI-Security-Strategie schützt nicht nur vor finanziellen Verlusten, sondern sichert auch das Vertrauen von Kunden, Partnern und Regulierungsbehörden. ADVISORI versteht KI-Sicherheit als strategischen Enabler für nachhaltiges Wachstum.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Schutz kritischer Geschäftsassets: KI-Modelle enthalten oft proprietäre Algorithmen und sensible Geschäftsdaten, deren Kompromittierung erhebliche Wettbewerbsnachteile zur Folge haben kann.\n• Regulatorische Compliance und Risikominimierung: Mit der EU-KI-Verordnung und verschärften Datenschutzbestimmungen wird KI-Security zur Compliance-Notwendigkeit mit direkten Haftungsrisiken für die Geschäftsleitung.\n• Vertrauensbildung und Marktpositionierung: Nachweisbare KI-Security-Kompetenz wird zunehmend zu einem Differenzierungsmerkmal und Vertrauensfaktor bei Kunden und Geschäftspartnern.\n• Zukunftssicherung der KI-Investitionen: Robuste Security-Maßnahmen schützen bestehende KI-Investitionen und ermöglichen sichere Skalierung und Weiterentwicklung.\n\n🛡️ Der ADVISORI-Ansatz für strategische KI-Security:\n• Ganzheitliche Threat Intelligence: Wir analysieren nicht nur technische Vulnerabilitäten, sondern auch die geschäftlichen Auswirkungen potenzieller KI-Angriffe auf Ihre strategischen Ziele.\n• Adaptive Security-Architekturen: Entwicklung flexibler Security-Frameworks, die mit der Evolution Ihrer KI-Systeme mitwachsen und neue Bedrohungsvektoren antizipieren.\n• Business-aligned Risk Management: Integration von KI-Security-Überlegungen in Ihre strategische Planung und Investitionsentscheidungen.\n• Competitive Intelligence Protection: Spezieller Fokus auf den Schutz Ihrer KI-basierten Wettbewerbsvorteile vor industrieller Spionage und Model Extraction Attacks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den ROI einer Investition in ADVISORI's KI-Security-Lösungen und welchen direkten Einfluss hat dies auf Unternehmenswert und Risikoprofil?",
        answer: "Die Investition in umfassende KI-Security-Lösungen von ADVISORI ist ein strategischer Wertschöpfungshebel, der sowohl direkte Kosteneinsparungen als auch indirekte Wertsteigerungen generiert. Der Return on Investment manifestiert sich in der Vermeidung kostspieliger Security-Incidents, der Sicherung von KI-Investitionen und der Stärkung der Marktposition durch nachweisbare Security-Excellence.\n\n💰 Direkte finanzielle Auswirkungen und Kostenvermeidung:\n• Vermeidung von KI-spezifischen Cyber-Incidents: Model Extraction, Adversarial Attacks oder Data Poisoning können zu erheblichen finanziellen Schäden führen, die durch proaktive Security-Maßnahmen vermieden werden.\n• Schutz von IP und Competitive Intelligence: KI-Modelle enthalten oft Millionen-schwere Forschungs- und Entwicklungsinvestitionen, deren Diebstahl oder Kompromittierung existenzbedrohend sein kann.\n• Compliance-Kostenvermeidung: Proaktive KI-Security reduziert das Risiko regulatorischer Strafen und vermeidet kostspielige Nachbesserungen bei Compliance-Verstößen.\n• Operational Continuity: Robuste KI-Security gewährleistet die Verfügbarkeit geschäftskritischer KI-Systeme und vermeidet Produktivitätsverluste durch Security-Incidents.\n\n📈 Strategische Werttreiber und Marktpositionierung:\n• Enhanced Due Diligence Value: Bei M&A-Transaktionen oder Investorenprüfungen wird nachweisbare KI-Security zunehmend als Wertfaktor und Risikominimierung bewertet.\n• Premium Market Positioning: Unternehmen mit zertifizierter KI-Security können Premium-Pricing für ihre KI-basierten Produkte und Services durchsetzen.\n• Accelerated Market Entry: Robuste Security-Frameworks ermöglichen schnellere Markteinführung neuer KI-Produkte ohne langwierige Security-Reviews.\n• Insurance Premium Optimization: Nachweisbare KI-Security-Maßnahmen können zu günstigeren Cyber-Versicherungsprämien und besseren Deckungskonditionen führen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die KI-Bedrohungslandschaft entwickelt sich exponentiell – von Adversarial Machine Learning bis zu Model Inversion Attacks. Wie stellt ADVISORI sicher, dass unsere KI-Security-Strategie diesen dynamischen Risiken gewachsen ist?",
        answer: "In einer Ära sich rasant entwickelnder KI-Bedrohungen erfordert effektive KI-Security einen proaktiven und adaptiven Ansatz, der über traditionelle Cybersecurity-Maßnahmen hinausgeht. ADVISORI setzt auf kontinuierliche Threat Intelligence, adaptive Defense-Mechanismen und zukunftsorientierte Security-Architekturen, um Ihre KI-Systeme gegen bekannte und unbekannte Bedrohungsvektoren zu schützen.\n\n🔄 Adaptive Threat Defense als Kernprinzip:\n• Kontinuierliche AI Threat Intelligence: Wir überwachen aktiv die globale KI-Security-Forschung, analysieren neue Angriffsmuster und integrieren diese Erkenntnisse in unsere Defense-Strategien.\n• Proaktive Vulnerability Assessment: Regelmäßige Bewertung Ihrer KI-Systeme gegen neueste Angriffstechniken wie Adversarial Examples, Model Extraction und Membership Inference Attacks.\n• Adaptive Defense Mechanisms: Implementierung selbstlernender Security-Systeme, die sich automatisch an neue Bedrohungsmuster anpassen und ihre Defense-Strategien kontinuierlich optimieren.\n• Red Team Exercises: Durchführung spezialisierter KI-Security-Penetrationstests, die realistische Angriffsszenarios simulieren und Schwachstellen aufdecken.\n\n🔍 ADVISORI's Future-Ready Security Framework:\n• Emerging Threat Anticipation: Wir analysieren Forschungstrends und technologische Entwicklungen, um zukünftige Bedrohungsvektoren zu antizipieren und präventive Maßnahmen zu entwickeln.\n• Multi-layered Defense Architecture: Implementierung gestaffelter Security-Maßnahmen, die verschiedene Angriffsvektoren abdecken und auch bei Kompromittierung einzelner Schichten Schutz bieten.\n• Quantum-resistant Preparations: Vorbereitung Ihrer KI-Security-Infrastruktur auf die Herausforderungen der Quantum-Computing-Ära und Post-Quantum-Kryptographie.\n• Collaborative Defense Networks: Aufbau von Partnerschaften mit Forschungseinrichtungen und Security-Communities für frühzeitige Warnung vor neuen Bedrohungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI KI-Security von einem Kostenfaktor zu einem strategischen Business Enabler und welche konkreten Geschäftschancen eröffnet eine robuste KI-Security-Positionierung?",
        answer: "ADVISORI positioniert KI-Security nicht als defensive Notwendigkeit, sondern als strategischen Wachstumskatalysator und Marktdifferenziator. Unser Ansatz verwandelt Security-Investitionen in Wettbewerbsvorteile, ermöglicht neue Geschäftsmodelle und schafft Vertrauen bei Kunden und Partnern, das sich direkt in Umsatzwachstum und Marktexpansion übersetzt.\n\n🚀 Von Defense zu Strategic Advantage:\n• Trust-based Market Differentiation: Nachweisbare KI-Security wird zunehmend zu einem entscheidenden Auswahlkriterium für Kunden, insbesondere in regulierten Branchen und bei Enterprise-Kunden.\n• Premium Service Positioning: Robuste KI-Security ermöglicht die Entwicklung und Vermarktung von Premium-KI-Services mit höheren Margen und längerfristigen Kundenbeziehungen.\n• Accelerated Partnership Development: Starke Security-Credentials erleichtern strategische Partnerschaften und Joint Ventures, da Partner Vertrauen in die Sicherheit gemeinsamer KI-Initiativen haben.\n• Regulatory Advantage: Proaktive Compliance-Positionierung verschafft Vorteile bei Ausschreibungen und ermöglicht frühzeitige Markteintritte in regulierten Bereichen.\n\n💡 ADVISORI's Business Value Creation Framework:\n• Security-as-a-Service Monetization: Entwicklung von Geschäftsmodellen, die Ihre KI-Security-Expertise als eigenständige Einnahmequelle nutzen.\n• Ecosystem Trust Building: Aufbau von Vertrauensnetzwerken mit Kunden, Partnern und Regulierungsbehörden, die langfristige Geschäftsbeziehungen und Marktchancen schaffen.\n• Innovation Acceleration: Sichere KI-Umgebungen ermöglichen mutigere Innovation und schnellere Produktentwicklung, da Security-Risiken minimiert sind.\n• Global Market Access: Internationale Security-Standards und Zertifizierungen öffnen Türen zu globalen Märkten und multinationalen Kunden."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
