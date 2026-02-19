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
    console.log('Updating DORA Risk Management Framework page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-risk-management-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-risk-management-framework" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Rolle spielen kontinuierliche Risikoüberwachung und Frühwarnsysteme in einem DORA-konformen Risikomanagement-Framework?',
        answer: "Kontinuierliche Risikoüberwachung und Frühwarnsysteme sind das Nervensystem eines DORA-konformen Risikomanagement-Frameworks und ermöglichen proaktive Risikomanagement-Entscheidungen in Echtzeit. Sie transformieren traditionelle, reaktive Risikomanagement-Ansätze in dynamische, vorausschauende Systeme, die Bedrohungen identifizieren, bevor sie zu kritischen Vorfällen werden.\n\n📊 Real-time Risk Intelligence und Monitoring:\n• Kontinuierliche Datensammlung und -analyse: Implementation von Systemen zur automatisierten Sammlung und Analyse risikorelevanter Daten aus verschiedenen internen und externen Quellen, einschließlich Systemlogs, Netzwerkverkehr, Threat Intelligence Feeds und Marktdaten.\n• Multi-dimensionale Risikoindikatoren: Entwicklung umfassender Key Risk Indicator Frameworks, die technische, operative, strategische und externe Risikofaktoren integrieren und dabei sowohl quantitative Metriken als auch qualitative Signale berücksichtigen.\n• Predictive Analytics und Machine Learning: Nutzung fortschrittlicher Analytik-Technologien zur Identifikation von Risiko-Trends, Anomalien und potenziellen Bedrohungsmustern, die menschliche Analysten möglicherweise übersehen würden.\n• Kontextuelle Risikobewertung: Integration von Geschäftskontext, regulatorischen Änderungen und Marktbedingungen in die Risikobewertung, um relevante und umsetzbare Insights zu generieren.\n\n🚨 Intelligente Alerting und Eskalationssysteme:\n• Adaptive Schwellenwert-Management: Implementation dynamischer Schwellenwerte, die sich an verändernde Geschäftsbedingungen, saisonale Schwankungen und evolvierende Bedrohungslandschaften anpassen können.\n• Risiko-Korrelation und -Aggregation: Entwicklung von Systemen, die multiple Risikosignale korrelieren und aggregieren, um False Positives zu reduzieren und kritische Risiko-Kombinationen zu identifizieren.\n• Intelligente Priorisierung: Automatische Priorisierung von Alerts basierend auf Geschäftsauswirkung, Dringlichkeit und verfügbaren Ressourcen zur Optimierung der Response-Effizienz.\n• Multi-Channel-Kommunikation: Integration verschiedener Kommunikationskanäle und -protokolle zur Sicherstellung, dass kritische Alerts die richtigen Stakeholder zur richtigen Zeit erreichen.\n\n🔄 Proaktive Risikomanagement-Workflows:\n• Automatisierte Response-Mechanismen: Implementation von Systemen, die bei bestimmten Risikoschwellen automatische Gegenmaßnahmen einleiten können, wie Systemabschaltungen, Zugriffsbeschränkungen oder Backup-Aktivierungen.\n• Scenario-basierte Simulation: Regelmäßige Durchführung von Risiko-Simulationen und Stress-Tests basierend auf aktuellen Monitoring-Daten zur Validierung der Effektivität von Risikomanagement-Maßnahmen.\n• Kontinuierliche Verbesserung: Systematische Analyse von Monitoring-Daten und Alert-Performance zur kontinuierlichen Optimierung der Überwachungssysteme und Reduzierung von False Positives und False Negatives."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie kann man Risikominderungsstrategien entwickeln, die sowohl effektiv als auch kosteneffizient sind?',
        answer: "Die Entwicklung effektiver und kosteneffizienter Risikominderungsstrategien erfordert einen strategischen Ansatz, der Risiko-Return-Optimierung mit operativer Praktikabilität verbindet. Erfolgreiche Strategien balancieren Investitionen in Risikominderung mit Geschäftszielen und berücksichtigen dabei sowohl direkte als auch indirekte Kosten und Nutzen.\n\n💰 Strategische Kosten-Nutzen-Optimierung:\n• Risk-adjusted ROI-Bewertung: Entwicklung von Bewertungsmodellen, die nicht nur die direkten Kosten von Risikominderungsmaßnahmen berücksichtigen, sondern auch die vermiedenen Verluste, Reputationsschäden und regulatorischen Strafen quantifizieren.\n• Portfolio-Ansatz für Risikominderung: Betrachtung von Risikominderungsmaßnahmen als Portfolio-Investitionen, die synergistische Effekte nutzen und Diversifikationsvorteile realisieren können.\n• Lifecycle-Kostenanalyse: Berücksichtigung der gesamten Lebensdauer von Risikominderungsmaßnahmen, einschließlich Implementierung, Betrieb, Wartung und eventueller Ablösung oder Modernisierung.\n• Opportunity Cost Assessment: Bewertung der Opportunitätskosten von Risikominderungsinvestitionen im Vergleich zu alternativen Geschäftsinvestitionen und strategischen Initiativen.\n\n🎯 Risiko-basierte Priorisierung und Optimierung:\n• Critical Path Analysis: Identifikation der kritischsten Risikopfade und Konzentration der Ressourcen auf Maßnahmen mit der höchsten Risikoreduktion pro investiertem Euro.\n• Multi-Kriterien-Entscheidungsanalyse: Nutzung strukturierter Entscheidungsframeworks, die multiple Faktoren wie Risikoreduktion, Kosten, Implementierungszeit und strategische Bedeutung berücksichtigen.\n• Risiko-Toleranz-Alignment: Ausrichtung der Risikominderungsstrategien an der organisatorischen Risikotoleranz und den strategischen Geschäftszielen.\n• Adaptive Strategieentwicklung: Entwicklung flexibler Strategien, die sich an verändernde Risikoprofile, Geschäftsbedingungen und verfügbare Technologien anpassen können.\n\n🔧 Innovative Risikominderungsansätze:\n• Technology-enabled Solutions: Nutzung fortschrittlicher Technologien wie KI, Automatisierung und Cloud-Services zur Kostenreduktion und Effektivitätssteigerung von Risikominderungsmaßnahmen.\n• Shared Services und Outsourcing: Strategische Nutzung von Shared Services, Outsourcing und Managed Services zur Realisierung von Skaleneffekten und Spezialisierungsvorteilen.\n• Risiko-Transfer-Mechanismen: Optimale Kombination von Risiko-Retention, -Transfer und -Sharing durch Versicherungen, Verträge und strategische Partnerschaften.\n• Präventive vs. reaktive Maßnahmen: Strategische Balance zwischen präventiven Maßnahmen, die Risiken verhindern, und reaktiven Maßnahmen, die Schäden begrenzen, basierend auf Kosten-Nutzen-Analysen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Best Practices gibt es für die Integration von DORA Risk Management in bestehende Unternehmensstrukturen?',
        answer: "Die erfolgreiche Integration von DORA Risk Management in bestehende Unternehmensstrukturen erfordert einen systematischen Change Management Ansatz, der organisatorische, technische und kulturelle Dimensionen gleichermaßen berücksichtigt. Effektive Integration minimiert Disruption, maximiert Synergien und schafft nachhaltige Veränderungen.\n\n🏗️ Strukturelle Integration und Organisationsdesign:\n• Governance-Integration: Nahtlose Einbindung von DORA Risk Management in bestehende Governance-Strukturen, einschließlich Board Committees, Executive Committees und operativer Steuerungskreise, ohne Schaffung redundanter Strukturen.\n• Rollen- und Verantwortlichkeits-Mapping: Systematische Zuordnung neuer DORA-spezifischer Verantwortlichkeiten zu bestehenden Rollen und Schaffung neuer Rollen nur dort, wo unbedingt erforderlich.\n• Matrix-Organisation-Ansätze: Nutzung von Matrix-Organisationsstrukturen zur Koordination zwischen verschiedenen Fachbereichen und Sicherstellung, dass DORA-Anforderungen in allen relevanten Geschäftsbereichen berücksichtigt werden.\n• Centers of Excellence: Etablierung von DORA Risk Management Centers of Excellence, die Expertise bündeln, Best Practices entwickeln und organisationsweite Unterstützung bieten.\n\n📋 Prozess-Integration und Workflow-Optimierung:\n• Bestehende Prozess-Analyse: Umfassende Analyse bestehender Risikomanagement-, Compliance- und Governance-Prozesse zur Identifikation von Integrationsmöglichkeiten und Synergien.\n• Prozess-Harmonisierung: Harmonisierung von DORA-Anforderungen mit bestehenden regulatorischen Frameworks wie Basel III, GDPR, MiFID II und anderen relevanten Vorschriften.\n• Workflow-Automatisierung: Nutzung bestehender Workflow-Systeme und -Plattformen zur Integration von DORA-spezifischen Aktivitäten und Minimierung manueller Aufwände.\n• Kontinuierliche Prozessverbesserung: Implementation von Feedback-Mechanismen und kontinuierlichen Verbesserungsprozessen zur Optimierung der Integration über die Zeit.\n\n🔄 Change Management und Kulturwandel:\n• Stakeholder-Engagement-Strategie: Entwicklung umfassender Stakeholder-Engagement-Strategien, die verschiedene Interessensgruppen identifizieren, ihre Bedürfnisse verstehen und gezielte Kommunikations- und Einbindungsansätze entwickeln.\n• Training und Kompetenzentwicklung: Systematische Schulung bestehender Mitarbeiter in DORA-spezifischen Anforderungen und Risikomanagement-Praktiken, aufbauend auf vorhandenen Kenntnissen und Erfahrungen.\n• Kulturelle Transformation: Förderung einer Risiko- und Compliance-Kultur, die DORA-Prinzipien als integralen Bestandteil der Geschäftstätigkeit versteht, nicht als zusätzliche Belastung.\n• Success Stories und Quick Wins: Identifikation und Kommunikation früher Erfolge und Quick Wins zur Schaffung von Momentum und Unterstützung für die Integration."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie kann man die Effektivität eines DORA Risk Management Frameworks messen und kontinuierlich verbessern?',
        answer: "Die Messung und kontinuierliche Verbesserung eines DORA Risk Management Frameworks erfordert ein umfassendes Performance Management System, das sowohl quantitative Metriken als auch qualitative Bewertungen integriert. Effektive Messung ermöglicht datenbasierte Entscheidungen und kontinuierliche Optimierung der Risikomanagement-Effektivität.\n\n📊 Comprehensive Performance Measurement Framework:\n• Multi-dimensionale KPI-Systeme: Entwicklung umfassender KPI-Frameworks, die Effektivität, Effizienz, Compliance und Geschäftsauswirkungen des Risikomanagements messen und dabei sowohl Leading- als auch Lagging-Indikatoren berücksichtigen.\n• Risk-adjusted Performance Metrics: Implementation von Metriken, die die Performance des Risikomanagements im Verhältnis zu den eingegangenen Risiken und den verfügbaren Ressourcen bewerten.\n• Benchmarking und Peer-Vergleiche: Regelmäßige Benchmarking-Aktivitäten gegen Branchenstandards, Best Practices und Peer-Organisationen zur Identifikation von Verbesserungsmöglichkeiten.\n• Stakeholder-Satisfaction-Messung: Systematische Messung der Zufriedenheit verschiedener Stakeholder-Gruppen mit der Effektivität und Effizienz des Risikomanagements.\n\n🔍 Qualitative Bewertung und Maturity Assessment:\n• Risikomanagement-Maturity-Modelle: Nutzung strukturierter Maturity-Modelle zur Bewertung der Reife und Entwicklung des Risikomanagement-Frameworks über verschiedene Dimensionen hinweg.\n• Governance-Effectiveness-Reviews: Regelmäßige qualitative Bewertungen der Governance-Effektivität, einschließlich Entscheidungsqualität, Stakeholder-Engagement und strategischer Ausrichtung.\n• Culture und Behavior Assessment: Bewertung der Risikomanagement-Kultur und -Verhaltensweisen in der Organisation durch Umfragen, Interviews und Beobachtungen.\n• External Validation: Nutzung externer Assessments, Audits und Zertifizierungen zur objektiven Bewertung der Risikomanagement-Effektivität.\n\n🔄 Kontinuierliche Verbesserung und Innovation:\n• Feedback-Loop-Integration: Etablierung systematischer Feedback-Schleifen, die Erkenntnisse aus Performance-Messungen in konkrete Verbesserungsmaßnahmen übersetzen.\n• Agile Improvement Methodologies: Nutzung agiler Verbesserungsmethodologien wie Kaizen, Lean Six Sigma oder Design Thinking zur kontinuierlichen Optimierung des Risikomanagements.\n• Innovation und Emerging Technologies: Systematische Evaluation und Integration neuer Technologien, Methodologien und Best Practices zur Verbesserung der Risikomanagement-Effektivität.\n• Learning Organization Principles: Förderung einer Lernkultur, die Fehler als Lernmöglichkeiten betrachtet und kontinuierliche Verbesserung als Kernwert etabliert."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
