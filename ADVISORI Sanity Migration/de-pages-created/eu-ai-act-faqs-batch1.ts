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
    console.log('Updating EU AI Act page with C-Level FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die EU AI Act für die C-Suite mehr als nur eine Compliance-Anforderung und wie positioniert ADVISORI die KI-Verordnung als strategischen Wettbewerbsvorteil?",
        answer: "Für Führungskräfte repräsentiert die EU AI Act einen fundamentalen Paradigmenwechsel in der KI-Landschaft und schafft neue Marktchancen für strategisch positionierte Unternehmen. ADVISORI versteht die KI-Verordnung nicht als regulatorische Belastung, sondern als Katalysator für nachhaltiges Wachstum, Stakeholder-Vertrauen und Marktdifferenzierung. Unser Ansatz verwandelt Compliance-Investitionen in strategische Assets.\n\n🎯 Strategische Imperative für die Geschäftsleitung:\n• First-Mover-Advantage: Proaktive EU AI Act Compliance verschafft Wettbewerbsvorteile bei Ausschreibungen, Partnerschaften und Markteinträgen, da viele Konkurrenten noch reaktiv agieren.\n• Trust Premium: Nachweisbare Compliance schafft Vertrauen bei Kunden, Investoren und Regulierungsbehörden, was sich direkt in höhere Bewertungen und bessere Geschäftsbedingungen übersetzt.\n• Risk Mitigation: Systematische Compliance reduziert Haftungsrisiken für Geschäftsführung und Aufsichtsrat und schützt vor kostspieligen Strafen und Reputationsschäden.\n• Market Access: EU AI Act konforme Systeme ermöglichen privilegierten Zugang zu europäischen Märkten und schaffen Exportchancen in andere regulierte Jurisdiktionen.\n\n🚀 ADVISORI's Strategic Value Creation:\n• Business-aligned Compliance: Entwicklung von Compliance-Strategien, die sich nahtlos in Ihre Geschäftsziele integrieren und Wertschöpfung maximieren.\n• Competitive Intelligence: Nutzung der Compliance-Positionierung als Differenzierungsmerkmal in Marketing, Sales und Investor Relations.\n• Innovation Enablement: Schaffung von Governance-Frameworks, die Innovation fördern statt behindern und mutige KI-Initiativen ermöglichen.\n• Ecosystem Leadership: Positionierung als vertrauenswürdiger Partner in KI-Ökosystemen und Aufbau strategischer Allianzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir den Return on Investment einer EU AI Act Compliance-Initiative und welche direkten Auswirkungen hat strategische Compliance auf Unternehmenswert und Marktkapitalisierung?",
        answer: "Die Investition in strategische EU AI Act Compliance von ADVISORI generiert messbare Renditen durch Risikominimierung, Marktchancen und operative Effizienz. Unser ROI-Framework macht Compliance-Investitionen zu nachweisbaren Werttreibern für Stakeholder und Investoren.\n\n💰 Direkte finanzielle Werttreiber:\n• Penalty Avoidance: Vermeidung von EU AI Act Strafen, die bis zu vier Prozent des weltweiten Jahresumsatzes betragen können, schützt direkt die Profitabilität.\n• Insurance Premium Reduction: Nachweisbare Compliance führt zu reduzierten Versicherungsprämien und besseren Konditionen bei Cyber- und Haftpflichtversicherungen.\n• Operational Efficiency: Strukturierte AI Governance reduziert Entwicklungszyklen, minimiert Nachbesserungskosten und optimiert Ressourcenallokation.\n• Capital Cost Reduction: Compliance-konforme Unternehmen profitieren von besseren Finanzierungskonditionen und reduzierten Kapitalkosten durch geringere Risikoprämien.\n\n📈 Strategische Wertsteigerung und Marktpositionierung:\n• Valuation Premium: Compliance-konforme Unternehmen erzielen höhere Bewertungsmultiples bei M&A-Transaktionen und IPOs durch reduzierte regulatorische Risiken.\n• Market Share Growth: Vertrauensvolle KI-Systeme führen zu höheren Conversion-Raten, besserer Kundenbindung und beschleunigtem Marktanteilswachstum.\n• Partnership Value: Compliance-Positionierung ermöglicht strategische Partnerschaften mit Premium-Brands und öffnet neue Geschäftschancen.\n• ESG Score Improvement: EU AI Act Compliance verbessert ESG-Ratings und macht Unternehmen attraktiver für nachhaltigkeitsorientierte Investoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die EU AI Act schafft neue Haftungsrisiken für Geschäftsführung und Aufsichtsrat. Wie stellt ADVISORI sicher, dass unsere Compliance-Strategie nicht nur regulatorische Anforderungen erfüllt, sondern auch persönliche Haftungsrisiken minimiert?",
        answer: "ADVISORI entwickelt ganzheitliche Compliance-Strategien, die sowohl Unternehmens- als auch persönliche Haftungsrisiken für Führungskräfte systematisch adressieren. Unser Ansatz schafft nachweisbare Due Diligence und etabliert robuste Governance-Strukturen für maximalen Haftungsschutz.\n\n⚖️ Haftungsschutz für die Geschäftsleitung:\n• Business Judgment Rule Protection: Dokumentation fundierter Entscheidungsprozesse und Etablierung nachweisbarer Sorgfaltspflichten für Haftungsschutz bei KI-Investitionen.\n• Compliance Officer Integration: Einrichtung spezialisierter AI Compliance Funktionen mit direkter Berichtslinie an Geschäftsführung und Aufsichtsrat.\n• Insurance Coverage Optimization: Beratung bei der Anpassung von D&O-Versicherungen für optimale Abdeckung EU AI Act spezifischer Risiken.\n• Legal Privilege Protection: Strukturierung der Compliance-Beratung unter Anwaltsprivileg für maximalen Schutz sensibler Informationen.\n\n🛡️ ADVISORI's Comprehensive Risk Mitigation:\n• Audit-ready Documentation: Entwicklung lückenloser Dokumentationssysteme, die bei regulatorischen Prüfungen nachweisbare Compliance belegen.\n• Escalation Frameworks: Etablierung klarer Eskalationsprozesse für KI-Risiken mit definierten Verantwortlichkeiten und Entscheidungswegen.\n• Regular Compliance Reviews: Kontinuierliche Überwachung und Berichterstattung über Compliance-Status mit proaktiver Risikokommunikation.\n• Crisis Management Preparation: Vorbereitung auf potenzielle Compliance-Vorfälle mit vordefinierten Kommunikations- und Reaktionsstrategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI EU AI Act Compliance von einer defensiven Maßnahme zu einem proaktiven Business Enabler und welche konkreten Marktchancen eröffnet eine überlegene Compliance-Positionierung?",
        answer: "ADVISORI positioniert EU AI Act Compliance als strategischen Wachstumskatalysator und Marktdifferenziator. Unser Ansatz verwandelt regulatorische Investitionen in Wettbewerbsvorteile und schafft neue Geschäftsmöglichkeiten durch vertrauensvolle KI-Leadership.\n\n🚀 Von Compliance zu Competitive Advantage:\n• Market Leadership Positioning: Etablierung als vertrauenswürdiger KI-Leader durch nachweisbare Compliance-Excellence und Thought Leadership.\n• Premium Service Development: Entwicklung compliance-basierter Premium-Services mit höheren Margen und differenzierten Wertversprechen.\n• Ecosystem Orchestration: Aufbau von Compliance-Netzwerken mit Partnern, Kunden und Lieferanten für strategische Marktvorteile.\n• Innovation Acceleration: Nutzung robuster Governance-Frameworks für mutigere KI-Innovation mit kalkulierbaren Risiken.\n\n💡 ADVISORI's Business Value Creation Framework:\n• Compliance-as-a-Service: Monetarisierung Ihrer Compliance-Expertise durch Beratungsservices für andere Unternehmen.\n• Regulatory Arbitrage: Nutzung früher Compliance für Markteintritte in regulierten Branchen vor Wettbewerbern.\n• Trust-based Partnerships: Aufbau strategischer Allianzen basierend auf nachweisbarer KI-Vertrauenswürdigkeit.\n• Global Expansion: EU AI Act Compliance als Sprungbrett für internationale Expansion in andere regulierte Märkte."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
