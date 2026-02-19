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
    console.log('Updating NIS2 Security Measures page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-security-measures' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-security-measures" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind umfassende NIS2-Sicherheitsmaßnahmen für C-Level-Entscheidungsträger strategisch kritisch und wie transformiert ADVISORI technische Compliance in Geschäftswert?",
        answer: "NIS2-Sicherheitsmaßnahmen repräsentieren für die C-Suite weit mehr als technische Compliance-Anforderungen – sie bilden das Fundament für eine resiliente, zukunftsfähige Unternehmensarchitektur. In einer zunehmend vernetzten und digitalisierten Geschäftswelt werden Cybersicherheitsmaßnahmen zu kritischen Geschäftsfunktionen, die direkten Einfluss auf Unternehmenswert, Wettbewerbsfähigkeit und strategische Handlungsfähigkeit haben.\n\n🎯 Strategische Dimensionen von NIS2-Sicherheitsmaßnahmen:\n• Business Continuity als Wettbewerbsvorteil: Robuste Sicherheitsarchitekturen gewährleisten unterbrechungsfreie Geschäftsoperationen auch bei eskalierenden Cyberbedrohungen und schaffen nachhaltigen Marktvorsprung.\n• Vertrauen als strategisches Asset: Demonstrierte Cybersicherheits-Exzellenz wird zum Differenzierungsmerkmal gegenüber Kunden, Partnern und Investoren und ermöglicht Premium-Positionierung im Markt.\n• Regulatory Resilience: Proaktive NIS2-Implementierung schützt vor regulatorischen Risiken und positioniert das Unternehmen als Vorreiter bei zukünftigen Compliance-Entwicklungen.\n• Innovation-Enablement: Sichere digitale Infrastrukturen bilden die Grundlage für fortschrittliche Technologieadaption und neue Geschäftsmodelle.\n\n🛡️ ADVISORIs Business-Value-Transformation:\n• Strategische Sicherheitsarchitektur: Wir entwickeln Sicherheitsmaßnahmen, die nicht nur NIS2-konform sind, sondern auch als Enabler für Geschäftswachstum und operative Exzellenz fungieren.\n• ROI-optimierte Implementierung: Jede Sicherheitsinvestition wird auf ihren Beitrag zu Geschäftszielen analysiert und entsprechend priorisiert, um maximalen strategischen Nutzen zu generieren.\n• Integrierte Governance: Cybersicherheit wird nahtlos in bestehende Unternehmenssteuerung integriert, statt als isolierte IT-Funktion behandelt zu werden.\n• Zukunftsorientierte Resilienz: Unsere Sicherheitsmaßnahmen antizipieren nicht nur aktuelle NIS2-Anforderungen, sondern bereiten auf zukünftige regulatorische und technologische Entwicklungen vor."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten finanziellen und operativen Risiken entstehen durch unzureichende NIS2-Sicherheitsmaßnahmen und wie quantifiziert ADVISORI diese?",
        answer: "Unzureichende NIS2-Sicherheitsmaßnahmen exponieren Unternehmen einem Spektrum von finanziellen und operativen Risiken, die existenzbedrohende Ausmaße annehmen können. Die neue Regulierung verschärft nicht nur Sanktionsmechanismen, sondern etabliert auch neue Haftungsregime, die das Management direkt in die Verantwortung nehmen.\n\n💰 Quantifizierte finanzielle Risikoexpositionen:\n• Drastische regulatorische Sanktionen: Bußgelder bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes, wobei Wiederholungstäter mit noch härteren Strafen rechnen müssen.\n• Geschäftsunterbrechungskosten: Cybersicherheitsvorfälle können täglich Millionenverluste verursachen, wobei inadequate Sicherheitsmaßnahmen die Ausfallzeiten exponentiell verlängern.\n• Reputationsschäden: Quantifizierbare Marktwertverluste von 5-15% nach bedeutenden Cybersicherheitsvorfällen, mit langfristigen Auswirkungen auf Kundenbindung und Neukundenakquisition.\n• Wiederherstellungskosten: Notfall-Sicherheitsmaßnahmen kosten typischerweise das 5-10fache einer geplanten, präventiven Implementierung.\n\n⚠️ Operative Risikokaskaden:\n• Lieferketten-Disruption: Sicherheitsvorfälle können gesamte Wertschöpfungsketten lahmlegen und kritische Geschäftsbeziehungen gefährden.\n• Talentabwanderung: Cybersicherheitsvorfälle führen häufig zum Verlust von Schlüsselpersonal und beeinträchtigen die Arbeitgeberattraktivität nachhaltig.\n• Strategische Handlungsunfähigkeit: Unzureichende Sicherheitsmaßnahmen limitieren digitale Transformationsmöglichkeiten und verhindern innovative Geschäftsentwicklung.\n• Compliance-Dominoeffekte: NIS2-Verstöße können weitere regulatorische Prüfungen auslösen und zusätzliche Compliance-Kosten verursachen.\n\n📊 ADVISORIs Risikoquantifizierung:\n• Business Impact Analysis: Präzise Berechnung der finanziellen Auswirkungen verschiedener Sicherheitsszenarien mit Monte-Carlo-Simulationen und Sensitivitätsanalysen.\n• Total Cost of Risk: Ganzheitliche Bewertung aller direkten und indirekten Kosten inadequater Sicherheitsmaßnahmen inklusive Opportunitätskosten.\n• ROI-Modellierung: Quantitative Darstellung des Return on Investment verschiedener Sicherheitsmaßnahmen zur datengestützten Entscheidungsfindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können NIS2-Sicherheitsmaßnahmen als strategischer Enabler für Digitalisierung und Geschäftswachstum genutzt werden?",
        answer: "NIS2-Sicherheitsmaßnahmen bilden das strategische Fundament für beschleunigte Digitalisierung und nachhaltiges Geschäftswachstum. Statt Sicherheit als Kostenfaktor zu betrachten, nutzen visionäre Führungskräfte die NIS2-Implementation als Katalysator für umfassende digitale Transformation und operative Exzellenz.\n\n🚀 Digitalisierung durch Sicherheits-Excellence:\n• Zero-Trust-Architektur als Digital Enabler: Implementierung moderner Sicherheitskonzepte ermöglicht sichere Cloud-Migration, Remote-Work-Excellenz und flexible Geschäftsmodelle.\n• Data Security als Innovation-Foundation: Robuste Datenschutzmaßnahmen schaffen Vertrauen für datengetriebene Geschäftsmodelle und ermöglichen fortschrittliche Analytics-Anwendungen.\n• API-Security für Ecosystem-Integration: Sichere Schnittstellen ermöglichen nahtlose Partner-Integration und innovative Kollaborationsmodelle.\n• Compliance-Automatisierung: Automatisierte Sicherheitsprozesse reduzieren operative Kosten und ermöglichen Fokussierung auf wertschöpfende Aktivitäten.\n\n💡 Geschäftswachstum durch Sicherheitsdifferenzierung:\n• Trusted Partner Status: Überlegene Cybersicherheit wird zum Wettbewerbsvorteil bei B2B-Geschäften und ermöglicht Premium-Pricing.\n• Neue Marktchancen: NIS2-Compliance eröffnet Zugang zu sicherheitskritischen Märkten und regulierten Industrien.\n• Customer Confidence: Demonstrierte Sicherheitsexzellenz stärkt Kundenbindung und reduziert Kundenakquisitionskosten.\n• Investoren-Attraktivität: Robuste Cybersicherheit erhöht Unternehmensbewertungen und erleichtert Kapitalzugang.\n\n🎯 ADVISORIs Growth-orientierter Ansatz:\n• Business-Security-Alignment: Integration von Sicherheitsmaßnahmen in Geschäftsstrategien zur maximalen Wertschöpfung.\n• Innovation-Security-Balance: Optimierung zwischen Sicherheitsanforderungen und Innovationsgeschwindigkeit durch intelligente Architekturentscheidungen.\n• Scalable Security Design: Entwicklung skalierbarer Sicherheitslösungen, die mit dem Unternehmenswachstum mitwachsen können.\n• Digitale Resilienz: Aufbau adaptiver Sicherheitssysteme, die neue Technologien und Geschäftsmodelle unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche kritischen Entscheidungen muss das C-Level bei der Implementierung von NIS2-Sicherheitsmaßnahmen treffen und wie unterstützt ADVISORI dabei?",
        answer: "Die Implementierung von NIS2-Sicherheitsmaßnahmen erfordert fundamentale strategische Entscheidungen auf C-Level, die die zukünftige Cyber-Resilienz, operative Effizienz und Wettbewerbsfähigkeit der Organisation maßgeblich prägen. Diese Entscheidungen gehen weit über technische Implementierungsdetails hinaus und betreffen Kernaspekte der Unternehmensführung und -strategie.\n\n🔑 Strategische C-Level-Entscheidungsdimensionen:\n• Security-Investment-Strategie: Bestimmung der optimalen Balance zwischen Mindest-Compliance und strategischer Cyber-Excellence mit klaren ROI-Erwartungen und Risiko-Rendite-Optimierung.\n• Governance-Integration: Entscheidung über die organisatorische Verankerung von Cybersicherheit – von der Vorstandsebene bis zur operativen Umsetzung mit entsprechenden Accountability-Strukturen.\n• Technology vs. Process vs. People-Allocation: Strategische Ressourcenverteilung zwischen technischen Lösungen, Prozessoptimierung und Human-Capital-Development.\n• Build vs. Buy vs. Partner-Strategien: Kritische Abwägung zwischen interner Kapazitätsentwicklung, Technologie-Akquisition und strategischen Sicherheitspartnerschaften.\n\n⚡ Zeitkritische Implementierungsentscheidungen:\n• Phasenplanung und Priorisierung: Bestimmung der Implementierungsgeschwindigkeit mit Balance zwischen Risikominimierung und Geschäftskontinuität.\n• Scope und Ambition Level: Definition des Sicherheitsambitionsniveaus – von minimaler Compliance bis zur Cyber-Security-Leadership-Position.\n• Change Management Intensität: Entscheidung über das Ausmaß kultureller Transformation parallel zur technischen Implementation.\n• Risk Appetite Definition: Festlegung der Risikotoleranz und entsprechender Sicherheitsinvestitionen.\n\n🏆 ADVISORIs Executive Decision Support:\n• Strategisches Advisory Board: Bereitstellung von C-Level-Expertise für komplexe Sicherheitsentscheidungen mit Industrie-Benchmarking und Best-Practice-Transfer.\n• Quantitative Entscheidungsgrundlagen: Entwicklung datengestützter Entscheidungsmodelle mit ROI-Analysen, Risikoquantifizierung und Szenario-Planning.\n• Executive Readiness Assessment: Bewertung der organisatorischen Bereitschaft für verschiedene Implementierungsansätze.\n• Stakeholder Alignment: Unterstützung bei der Abstimmung zwischen verschiedenen C-Level-Interessen und Prioritäten für kohärente Strategieentwicklung."
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
