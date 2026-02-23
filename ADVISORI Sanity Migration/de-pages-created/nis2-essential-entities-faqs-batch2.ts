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
    console.log('Updating NIS2 Essential Entities page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-essential-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-essential-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie navigiert ADVISORI Essential Entities durch die komplexen Incident Response und Meldepflichten unter NIS2, ohne dabei die Geschäftskontinuität zu gefährden?",
        answer: "Die NIS2-Richtlinie stellt Essential Entities vor die Herausforderung, schwerwiegende Cybersicherheitsvorfälle innerhalb von 24 Stunden zu melden, während gleichzeitig die Geschäftskontinuität aufrechterhalten werden muss. ADVISORI entwickelt für die C-Suite intelligente Incident Response Strategien, die regulatorische Compliance mit operativer Exzellenz verbinden.\n\n🚨 Strategische Incident Response für Essential Entities:\n• Crisis-Ready Communication Protocols: Etablierung vordefinierter Kommunikationsketten mit klaren Rollen und Verantwortlichkeiten, die es ermöglichen, binnen Stunden koordinierte Reaktionen zu initiieren, ohne Entscheidungsprozesse zu verzögern.\n• Business Impact Assessment Integration: Entwicklung von Bewertungsframeworks, die es ermöglichen, die Geschäftsauswirkungen eines Incidents in Echtzeit zu quantifizieren und fundierte Entscheidungen über Meldepflichten und Schutzmaßnahmen zu treffen.\n• Legal-Technical Coordination: Aufbau interdisziplinärer Teams aus IT-Security, Legal und Business Continuity Experten, die gemeinsam sicherstellen, dass Incident Response sowohl rechtlich compliant als auch geschäftlich optimal ist.\n• Automated Compliance Reporting: Implementation intelligenter Systeme, die automatisch relevante Incident-Daten sammeln und für Behördenmeldungen aufbereiten, wodurch manuelle Fehler minimiert und Reaktionszeiten verkürzt werden.\n\n⚡ Geschäftskontinuitäts-optimierte Incident Response:\n• Parallel Processing Approach: Während Incident Response Teams die technische Behebung vorantreiben, arbeiten spezialisierte Compliance Teams parallel an der Erfüllung der Meldepflichten, ohne sich gegenseitig zu behindern.\n• Stakeholder Communication Management: Vordefinierte Kommunikationsstrategien für verschiedene Stakeholder-Gruppen (Kunden, Partner, Investoren, Medien), die Transparenz schaffen ohne Panik zu verursachen oder Wettbewerbsnachteile zu schaffen.\n• Recovery-First Methodology: Priorisierung der schnellen Wiederherstellung kritischer Geschäftsfunktionen, während forensische Analysen und detaillierte Berichterstattung parallel und ohne Beeinträchtigung der operativen Wiederherstellung erfolgen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Governance-Strukturen und Board-Level-Prozesse etabliert ADVISORI für Essential Entities, um NIS2-Compliance auf höchster Führungsebene zu verankern?",
        answer: "Die NIS2-Richtlinie macht Cybersicherheit zur unmittelbaren Verantwortung der Unternehmensführung. ADVISORI unterstützt Essential Entities dabei, robuste Governance-Strukturen zu etablieren, die nicht nur regulatorische Anforderungen erfüllen, sondern auch strategische Entscheidungsfindung und Risikomanagement auf Board-Level optimieren.\n\n🏛️ Board-Level Cybersecurity Governance Framework:\n• Cybersecurity Committee Establishment: Einrichtung spezialisierter Aufsichtsrats-Ausschüsse mit definierten Mandaten, Expertise-Anforderungen und regelmäßigen Berichterstattungszyklen, die Cybersicherheit als strategische Priorität behandeln.\n• Executive Accountability Matrix: Klare Zuordnung von Cybersicherheits-Verantwortlichkeiten auf C-Level-Ebene mit messbaren KPIs und direkter Verknüpfung zu Vergütungsstrukturen, um persönliche Verantwortung und Engagement sicherzustellen.\n• Risk Appetite Definition: Entwicklung quantifizierbarer Cybersicherheits-Risikotoleranzen, die es dem Board ermöglichen, fundierte Entscheidungen über Investitionen und Risikoakzeptanz zu treffen.\n• Strategic Cybersecurity Roadmap: Integration von Cybersicherheitszielen in die langfristige Unternehmensstrategie mit klaren Meilensteinen und Investitionsplänen.\n\n📊 Entscheidungsunterstützung und Performance Management:\n• Executive Dashboard Development: Bereitstellung von Business Intelligence Dashboards, die komplexe Cybersicherheitsmetriken in verständliche Geschäftsindikatoren übersetzen und Trends visualisieren.\n• Cyber Risk Quantification: Implementierung von Modellen zur finanziellen Quantifizierung von Cybersicherheitsrisiken, die es dem Board ermöglichen, Cybersicherheitsinvestitionen direkt mit anderen Geschäftsinvestitionen zu vergleichen.\n• Regular Governance Reviews: Etablierung strukturierter Überprüfungszyklen der Cybersicherheits-Governance, um kontinuierliche Verbesserung und Anpassung an sich ändernde Bedrohungslagen sicherzustellen.\n• Crisis Governance Protocols: Vordefinierte Entscheidungsstrukturen und Eskalationswege für Cybersicherheitskrisen, die es dem Board ermöglichen, auch in Stresssituationen effektiv zu führen und zu überwachen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie adressiert ADVISORI die besonderen Herausforderungen von Essential Entities bei der Implementierung von Supply Chain Security unter NIS2, ohne dabei Lieferantenbeziehungen zu gefährden?",
        answer: "Essential Entities sind besonders abhängig von komplexen Lieferketten, die unter NIS2 erhöhten Cybersicherheitsanforderungen unterliegen. ADVISORI entwickelt für die C-Suite ausbalancierte Supply Chain Security Strategien, die rigorose Sicherheitsstandards durchsetzen, während gleichzeitig strategische Partnerschaften gestärkt und Innovationen ermöglicht werden.\n\n🔗 Strategische Supply Chain Security für Essential Entities:\n• Risk-Based Supplier Segmentation: Entwicklung differenzierter Sicherheitsanforderungen basierend auf der Kritikalität der Lieferanten für Essential Services, um Ressourcen optimal zu allokieren und unverhältnismäßige Belastungen zu vermeiden.\n• Collaborative Security Enhancement: Aufbau von Win-Win-Partnerschaften mit Schlüssellieferanten durch gemeinsame Investitionen in Cybersicherheit und geteilte Threat Intelligence, die beide Seiten stärken.\n• Supply Chain Resilience Modeling: Implementation von Szenarien-basierten Analysen, die es Essential Entities ermöglichen, die Auswirkungen von Lieferantenausfällen zu verstehen und proaktive Kontinuitätspläne zu entwickeln.\n• Vendor Security Maturity Programs: Entwicklung strukturierter Programme zur Unterstützung von Lieferanten bei der Verbesserung ihrer Cybersicherheitskapazitäten, wodurch das gesamte Ökosystem gestärkt wird.\n\n🤝 Beziehungsmanagement und Competitive Advantage:\n• Strategic Vendor Partnerships: Transformation der Cybersicherheits-Compliance von einer Compliance-Belastung zu einem Differenzierungsfaktor, der bevorzugte Lieferantenbeziehungen stärkt.\n• Innovation-Security Integration: Etablierung von Prozessen, die Cybersicherheitsüberlegungen in gemeinsame Innovationsprojekte mit Lieferanten integrieren, ohne Kreativität zu hemmen.\n• Market Leadership Positioning: Nutzung überlegener Supply Chain Security als Wettbewerbsvorteil bei der Auswahl und Bewertung durch nachgelagerte Kunden und Partner.\n• Ecosystem Risk Sharing: Entwicklung innovativer Risikoteilungsmodelle mit kritischen Lieferanten, die Anreize für kontinuierliche Sicherheitsverbesserungen schaffen und gleichzeitig faire Risikoverteilung gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche konkreten Schritte unternimmt ADVISORI, um Essential Entities bei der Bewältigung der verschärften Aufsichtsinteraktionen unter NIS2 zu unterstützen und gleichzeitig strategische Flexibilität zu bewahren?",
        answer: "Essential Entities unterliegen unter NIS2 intensiverer behördlicher Aufsicht mit erweiterten Prüfungsbefugnissen und Ad-hoc-Anfragen. ADVISORI bereitet die C-Suite darauf vor, diese Aufsichtsinteraktionen nicht nur erfolgreich zu bewältigen, sondern sie als Gelegenheit zur Demonstration von Cybersicherheitsexzellenz und zum Aufbau vertrauensvoller Behördenbeziehungen zu nutzen.\n\n🏛️ Proaktives Aufsichtsmanagement für Essential Entities:\n• Regulatory Relationship Building: Aufbau konstruktiver, langfristiger Beziehungen zu relevanten Aufsichtsbehörden durch regelmäßige Kommunikation, proaktive Information und Demonstrierung von Compliance-Commitment.\n• Audit-Ready Documentation: Etablierung kontinuierlicher Dokumentationsprozesse, die sicherstellen, dass alle erforderlichen Nachweise jederzeit abrufbar sind, ohne zusätzlichen Stress oder Ressourcenaufwand bei Prüfungsankündigungen.\n• Expert Witness Preparation: Vorbereitung von Key Personnel auf Aufsichtsinteraktionen durch spezialisierte Trainings, die technische Expertise mit regulatorischer Kommunikationsfähigkeit verbinden.\n• Strategic Compliance Communication: Entwicklung von Kommunikationsstrategien, die nicht nur Compliance demonstrieren, sondern auch das strategische Cybersicherheits-Commitment und die Innovationsfähigkeit des Unternehmens hervorheben.\n\n⚖️ Strategische Flexibilität bei intensiver Aufsicht:\n• Adaptive Compliance Framework: Implementierung flexibler Compliance-Strukturen, die schnelle Anpassungen an neue regulatorische Anforderungen ermöglichen, ohne fundamentale Geschäftsprozesse zu stören.\n• Innovation-Compliance Balance: Entwicklung von Ansätzen, die es Essential Entities ermöglichen, auch unter verstärkter Aufsicht mutige Technologie- und Geschäftsinnovationen zu verfolgen.\n• Precedent-Setting Engagement: Positionierung als Thought Leader und konstruktiver Partner bei der Entwicklung neuer regulatorischer Praktiken und Standards, um zukünftige Regulierung mitzugestalten.\n• Crisis Communication Protocols: Vorbereitung auf verschiedene Szenarien der Aufsichtseskalation mit vorgeplanten Kommunikations- und Eskalationsstrategien, die Reputationsrisiken minimieren und die Autorität des Managements stärken."
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
