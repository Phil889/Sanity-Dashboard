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
    console.log('Updating CRA Cyber Resilience Act page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie gestalten wir eine effektive Change Management-Strategie für die CRA-Transformation und wie können wir Mitarbeiter zu Cybersicherheits-Champions entwickeln?",
        answer: "Die erfolgreiche CRA-Transformation erfordert ein strategisches Change Management, das weit über technische Implementation hinausgeht und eine fundamentale Kulturveränderung im Umgang mit Cybersicherheit bewirkt. Für die Führungsebene bedeutet dies die Entwicklung einer umfassenden Transformation-Strategie, die Mitarbeiter zu aktiven Sicherheits-Protagonisten macht. Eine erfolgreiche kulturelle Transformation kann CRA-Compliance von einer Belastung zu einem Wettbewerbsvorteil und Mitarbeiter-Engagement-Faktor entwickeln.\n\n🔄 Strategic Change Management für CRA-Excellence:\n• Culture-First-Approach: Entwicklung einer Cybersicherheits-Kultur, die Sicherheitsbewusstsein als Kernwert und persönliche Verantwortung aller Mitarbeiter verankert.\n• Leadership-driven Transformation: Sichtbare Unterstützung und Vorbildfunktion der Führungsebene für glaubwürdige und nachhaltige Veränderung.\n• Skill-based Development Programs: Systematischer Aufbau von Cybersicherheits-Kompetenzen auf allen Ebenen mit klaren Karrierepfaden und Anreizsystemen.\n• Innovation-oriented Security Mindset: Förderung einer Denkweise, die Cybersicherheit als Innovationschance und Differenzierungsmerkmal begreift.\n\n🚀 ADVISORIs Transformation Excellence Framework:\n• Behavioral Change Architecture: Entwicklung psychologisch fundierter Change-Programme, die intrinsische Motivation für Cybersicherheit schaffen und nachhaltig verankern.\n• Gamified Security Learning: Implementation innovativer Lernansätze, die Cybersicherheits-Education durch Gamification und praktische Anwendung engaging und effektiv gestalten.\n• Cross-functional Champion Networks: Aufbau dezentraler Champion-Netzwerke, die als Multiplikatoren und lokale Experten für kontinuierliche Transformation sorgen.\n• Continuous Feedback Loops: Etablierung systematischer Feedback-Mechanismen für kontinuierliche Optimierung der Change-Strategie basierend auf Mitarbeiter-Insights."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Metriken und KPIs sind entscheidend für die strategische Steuerung der CRA-Compliance und wie können wir den Erfolg messbar machen?",
        answer: "Die strategische Steuerung von CRA-Compliance erfordert ein multidimensionales Mess- und Steuerungssystem, das über traditionelle Compliance-Metriken hinausgeht und Business-Impact quantifiziert. Für die Unternehmensführung bedeutet dies die Entwicklung eines integrierten Dashboard-Systems, das sowohl regulatorische Compliance als auch strategische Wertschöpfung transparent macht. Effektive Metriken können CRA-Investments rechtfertigen und kontinuierliche Optimierung ermöglichen.\n\n📊 Strategic KPI Framework für CRA-Excellence:\n• Business-Impact-Metriken: Quantifizierung von Umsatzeffekten, Marktanteilsveränderungen und Kundenzufriedenheit durch verbesserte Cybersicherheit und CRA-Compliance.\n• Risk-adjusted Performance Indicators: Messung von Risikoreduktion, vermiedenen Kosten und Resilienz-Verbesserungen durch proaktive Sicherheitsmaßnahmen.\n• Innovation-driven Metrics: Bewertung von Produktinnovationen, Time-to-Market-Verbesserungen und neuen Geschäftsmöglichkeiten durch Security-by-Design-Ansätze.\n• Stakeholder-Confidence-Indices: Tracking von Investor-, Kunden- und Partner-Vertrauen sowie ESG-Ratings durch enhanced Cybersicherheit.\n\n🎯 ADVISORIs Performance Management System:\n• Real-time Compliance Dashboards: Entwicklung interaktiver Management-Dashboards, die CRA-Compliance-Status, Trends und Prognosen in Echtzeit visualisieren.\n• Predictive Analytics für Security ROI: Implementation fortschrittlicher Analytics, die zukünftige Sicherheitsrisiken und Investitionsbedarfe vorhersagen.\n• Benchmark-driven Optimization: Kontinuierlicher Vergleich mit Branchenstandards und Best-in-Class-Performern für strategische Positionierung.\n• Integrated Reporting Frameworks: Entwicklung ganzheitlicher Reporting-Systeme, die CRA-Performance mit Geschäfts-KPIs verbinden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können wir CRA-Compliance als Katalysator für ESG-Verbesserung und nachhaltige Unternehmensführung nutzen?",
        answer: "CRA-Compliance bietet eine strategische Gelegenheit, Cybersicherheit als integralen Bestandteil einer umfassenden ESG-Strategie zu positionieren und nachhaltige Unternehmensführung zu stärken. Für visionäre Führungskräfte bedeutet dies die Chance, Cybersicherheits-Investments als ESG-Werttreiber zu nutzen und Stakeholder-Vertrauen auf allen Ebenen zu stärken. Die Integration von CRA-Compliance in ESG-Frameworks kann erhebliche Kapitalkosten-Vorteile und Investor-Appeal generieren.\n\n🌱 ESG-Integration durch CRA-Excellence:\n• Governance-Strengthening: Nutzung von CRA-Compliance-Strukturen für die Verbesserung der allgemeinen Corporate Governance und Risikomanagement-Praktiken.\n• Social Responsibility durch Cybersicherheit: Positionierung von Produktsicherheit als gesellschaftliche Verantwortung und Beitrag zur digitalen Gesellschaftssicherheit.\n• Environmental Impact durch Efficiency: Nutzung von Security-by-Design für ressourceneffizientere Produkte und nachhaltigere Technologieentwicklung.\n• Stakeholder Trust Enhancement: Aufbau von Vertrauen bei Investoren, Kunden und Gesellschaft durch transparente und proaktive Cybersicherheits-Governance.\n\n💡 ADVISORIs ESG-CRA Integration Strategy:\n• Sustainability-linked Security Investments: Entwicklung von Investitionsstrategien, die Cybersicherheit mit Nachhaltigkeitszielen verbinden und ESG-Ratings verbessern.\n• Transparent ESG-Security Reporting: Implementation von Reporting-Standards, die Cybersicherheits-Performance als ESG-Beitrag quantifizieren und kommunizieren.\n• Stakeholder Engagement Excellence: Aufbau systematischer Stakeholder-Dialoge, die CRA-Compliance als Ausdruck verantwortungsvoller Unternehmensführung positionieren.\n• Long-term Value Creation: Entwicklung langfristiger Strategien, die CRA-Compliance als Grundlage für nachhaltige Wertschöpfung und Stakeholder-Capitalism nutzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche strategischen Überlegungen sind bei der Auswahl von CRA-Compliance-Technologien erforderlich und wie können wir Vendor Lock-in vermeiden?",
        answer: "Die strategische Auswahl von CRA-Compliance-Technologien erfordert eine ganzheitliche Bewertung, die kurzfristige Compliance-Ziele mit langfristiger technologischer Flexibilität und strategischen Geschäftszielen balanciert. Für die Unternehmensführung bedeutet dies die Entwicklung einer Technologie-Strategie, die Abhängigkeiten minimiert und gleichzeitig optimale Performance und Skalierbarkeit gewährleistet. Eine durchdachte Vendor-Management-Strategie kann signifikante Kostenersparnisse und strategische Flexibilität schaffen.\n\n🔧 Strategic Technology Selection für CRA-Excellence:\n• Multi-Vendor-Architecture: Entwicklung modularer Technologie-Architekturen, die Best-of-Breed-Lösungen integrieren und Vendor-Abhängigkeiten reduzieren.\n• Open Standards-First-Policy: Priorisierung von Standards-basierten Lösungen für maximale Interoperabilität und Zukunftssicherheit.\n• Build-vs-Buy-Strategien: Systematische Evaluation von Eigenentwicklung versus Zukauf basierend auf strategischer Wichtigkeit und verfügbarer Expertise.\n• Cloud-Hybrid-Flexibility: Aufbau hybrider Cloud-Strategien, die On-Premise-, Public- und Private-Cloud-Optionen optimal für verschiedene Compliance-Anforderungen nutzen.\n\n⚖️ ADVISORIs Vendor Independence Strategy:\n• Strategic Vendor Portfolio Management: Entwicklung diversifizierter Vendor-Portfolios mit klaren Exit-Strategien und Alternativ-Optionen für kritische Komponenten.\n• Negotiation Excellence für CRA-Compliance: Aufbau überlegener Verhandlungsstrategien, die günstige Vertragsbedingungen, Flexibilität und strategische Partnerschaftsvorteile schaffen.\n• Technology Roadmap Alignment: Kontinuierliche Abstimmung der Vendor-Roadmaps mit internen Strategien für optimale langfristige Wertschöpfung.\n• Risk-balanced Implementation: Implementierung gestaffelter Einführungsstrategien, die Risiken minimieren und kontinuierliche Optimierungsmöglichkeiten schaffen."
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
