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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI die C-Suite bei der strategischen Budgetplanung für IT-Grundschutz-Investitionen und deren Priorisierung?",
        answer: "Strategische IT-Grundschutz-Budgetplanung erfordert eine ausgewogene Balance zwischen Risikoreduzierung, Compliance-Anforderungen und verfügbaren Ressourcen. ADVISORI entwickelt datengestützte Budgetierungsmodelle, die der C-Suite transparente Entscheidungsgrundlagen für optimale IT-Grundschutz-Investitionen bieten und dabei sowohl kurz- als auch langfristige Unternehmensziele berücksichtigen.\n\n💰 Strategische Budgetplanung für IT-Grundschutz:\n• Risk-Based Budgeting: Entwicklung von Budgetmodellen, die Investitionen direkt an identifizierte Risiken und deren potenzielle Geschäftsauswirkungen koppeln.\n• Multi-Year Investment Planning: Erstellung langfristiger Investitionspläne, die IT-Grundschutz-Maßnahmen mit strategischen Geschäftszielen synchronisieren.\n• Cost-Benefit-Optimierung: Quantitative Analyse verschiedener Sicherheitsmaßnahmen zur Identifikation der kosteneffektivsten Risikoreduktionsstrategien.\n• Compliance-Driven Budgeting: Integration regulatorischer Anforderungen in die Budgetplanung zur Vermeidung von Bußgeldern und Compliance-Kosten.\n\n📊 ADVISORI's Investment Prioritization Framework:\n• Risk Heat Maps: Visuelle Darstellung von Risiko-Investment-Relationen für schnelle C-Level-Entscheidungen.\n• ROI-Projections: Detaillierte Renditeberechnungen für verschiedene IT-Grundschutz-Investitionsszenarien.\n• Phased Implementation Planning: Entwicklung strukturierter Umsetzungsphasen, die Budget-Constraints und operative Kapazitäten berücksichtigen.\n• Resource Allocation Optimization: Optimale Verteilung von Personal-, Technologie- und Beratungsbudgets für maximale Sicherheitswirkung.\n\n🎯 Value-Driven Investment Strategies:\n• Quick Wins Identification: Identifikation von High-Impact, Low-Cost Maßnahmen für sofortige Sicherheitsverbesserungen.\n• Strategic Investment Clusters: Bündelung synergistischer Sicherheitsinvestitionen für Skaleneffekte und Kosteneinsparungen.\n• Vendor Consolidation Strategies: Optimierung der Lieferantenlandschaft zur Reduzierung von Komplexität und Kosten.\n• Technology Lifecycle Management: Integration von IT-Grundschutz-Anforderungen in bestehende Technology-Refresh-Zyklen für Kostenoptimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Metriken und KPIs empfiehlt ADVISORI der C-Suite zur kontinuierlichen Überwachung der IT-Grundschutz-Performance?",
        answer: "Effektive IT-Grundschutz-Steuerung erfordert aussagekräftige Kennzahlen, die sowohl technische Sicherheitsaspekte als auch geschäftliche Auswirkungen transparent machen. ADVISORI entwickelt mehrdimensionale KPI-Frameworks, die der C-Suite kontinuierliche Einblicke in die Wirksamkeit und den Geschäftswert ihrer IT-Grundschutz-Investitionen bieten.\n\n📈 C-Level IT-Grundschutz Performance Metrics:\n• Security Maturity Index: Quantitative Bewertung des IT-Grundschutz-Reifegrads mit klar definierten Zielvorgaben und Entwicklungspfaden.\n• Risk Reduction Rate: Messbare Reduzierung von IT-Sicherheitsrisiken durch implementierte Maßnahmen im Zeitverlauf.\n• Compliance Coverage Ratio: Prozentualer Abdeckungsgrad der IT-Grundschutz-Anforderungen zur Sicherstellung vollständiger Compliance.\n• Business Impact Metrics: Direkte Auswirkungen von IT-Grundschutz-Maßnahmen auf Geschäftskontinuität und operative Effizienz.\n\n🎯 ADVISORI's Executive Dashboard Design:\n• Real-Time Risk Indicators: Live-Überwachung kritischer Sicherheitsindikatoren mit automatischen Eskalationsmechanismen.\n• Investment ROI Tracking: Kontinuierliche Messung der Rendite von IT-Grundschutz-Investitionen mit Trend-Analysen.\n• Incident Impact Assessment: Quantifizierung der geschäftlichen Auswirkungen von Sicherheitsvorfällen zur Bewertung der Schutzwirkung.\n• Stakeholder Confidence Metrics: Messung von Kunden- und Partnervertrauen durch Sicherheitszertifizierungen und -nachweise.\n\n🔍 Operational Excellence Indicators:\n• Mean Time to Detection (MTTD): Geschwindigkeit der Erkennung von Sicherheitsbedrohungen als Indikator für Überwachungsqualität.\n• Control Effectiveness Score: Bewertung der Wirksamkeit implementierter IT-Grundschutz-Maßnahmen durch regelmäßige Tests.\n• Employee Security Awareness Level: Messung der Sicherheitskompetenz der Mitarbeiter durch Schulungen und Phishing-Simulationen.\n• Vendor Security Compliance Rate: Überwachung der IT-Grundschutz-Konformität von Lieferanten und Dienstleistern zur Reduzierung von Supply Chain Risiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie gewährleistet ADVISORI, dass unsere IT-Grundschutz-Strategie mit den dynamischen Anforderungen der Lieferkette und Ecosystem-Partnerschaften Schritt hält?",
        answer: "Moderne Geschäftsmodelle sind zunehmend von komplexen Lieferketten und digitalen Ecosystemen abhängig, wodurch IT-Grundschutz über Unternehmensgrenzen hinweg erweitert werden muss. ADVISORI entwickelt ganzheitliche Supply Chain Security-Strategien, die IT-Grundschutz-Prinzipien auf Ihr gesamtes Geschäftsökosystem ausweiten und dabei Flexibilität für dynamische Partnerschaftsstrukturen bieten.\n\n🔗 Supply Chain IT-Grundschutz Integration:\n• Vendor Risk Assessment Framework: Systematische Bewertung aller Lieferanten und Partner nach IT-Grundschutz-Kriterien mit kontinuierlicher Überwachung.\n• Third-Party Security Standards: Definition einheitlicher Sicherheitsanforderungen für alle Ecosystem-Partner basierend auf IT-Grundschutz-Prinzipien.\n• Supply Chain Visibility: Implementierung umfassender Transparenz über Sicherheitsrisiken in der gesamten Wertschöpfungskette.\n• Incident Response Coordination: Etablierung koordinierter Incident Response-Prozesse mit allen kritischen Partnern und Lieferanten.\n\n🌐 ADVISORI's Ecosystem Security Approach:\n• Dynamic Partner Onboarding: Entwicklung skalierbarer Onboarding-Prozesse für neue Partner mit automatisierter IT-Grundschutz-Bewertung.\n• Continuous Monitoring Solutions: Implementierung kontinuierlicher Überwachung der Sicherheitslage bei kritischen Lieferanten.\n• Contractual Security Requirements: Integration von IT-Grundschutz-Anforderungen in alle Partnerschaftsverträge mit klaren Haftungsregelungen.\n• Collaborative Security Operations: Aufbau gemeinsamer Security Operations mit strategischen Partnern für verbesserte Bedrohungserkennung.\n\n⚡ Adaptive Ecosystem Management:\n• Rapid Partner Assessment: Entwicklung beschleunigter Sicherheitsbewertungsprozesse für agile Partnerschaftsentscheidungen.\n• Risk-Adjusted Partnership Models: Flexible Partnerschaftsstrukturen, die Sicherheitsrisiken angemessen berücksichtigen und kompensieren.\n• Cross-Ecosystem Threat Intelligence: Etablierung von Threat Intelligence-Sharing mit Partnern für verbesserte kollektive Sicherheit.\n• Digital Supply Chain Resilience: Aufbau redundanter und resilienterer Lieferketten durch diversifizierte und sicherheitsbewusste Partnerschaften."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche Rolle spielt ADVISORI bei der Vorbereitung und Begleitung von IT-Grundschutz-bezogenen Board-Präsentationen und Investorenbeziehungen?",
        answer: "Die Kommunikation von IT-Grundschutz-Strategien an Aufsichtsräte, Investoren und andere Stakeholder erfordert eine präzise Balance zwischen technischer Genauigkeit und strategischer Relevanz. ADVISORI unterstützt C-Level-Führungskräfte dabei, IT-Grundschutz als Werttreiber und strategischen Vorteil zu positionieren und dabei das Vertrauen von Investoren und Aufsichtsgremien zu stärken.\n\n🎯 Board-Ready IT-Grundschutz Kommunikation:\n• Executive Summary Development: Erstellung prägnanter und aussagekräftiger Zusammenfassungen, die IT-Grundschutz-Status und -strategie für Nicht-Techniker verständlich machen.\n• Risk-Business Impact Translation: Übersetzung technischer Risikobewertungen in geschäftliche Auswirkungen und strategische Implikationen.\n• Investment Justification Documents: Entwicklung überzeugender Business Cases für IT-Grundschutz-Investitionen mit klaren ROI-Projektionen.\n• Regulatory Compliance Reporting: Strukturierte Berichterstattung über Compliance-Status und regulatorische Risiken für Aufsichtsgremien.\n\n📊 ADVISORI's Investor Relations Support:\n• ESG Integration: Positionierung von IT-Grundschutz als wichtiger Bestandteil der Environmental, Social und Governance (ESG) Strategie.\n• Competitive Advantage Messaging: Entwicklung von Narrativen, die IT-Grundschutz als Differenzierungsmerkmal und Wettbewerbsvorteil hervorheben.\n• Due Diligence Preparation: Vorbereitung umfassender Dokumentation für Investoren-Due-Diligence-Prozesse.\n• Benchmarking and Best Practices: Bereitstellung von Marktvergleichen und Best Practice-Beispielen zur Untermauerung der IT-Grundschutz-Strategie.\n\n🔮 Strategic Stakeholder Engagement:\n• Crisis Communication Planning: Vorbereitung von Kommunikationsstrategien für den Fall von Sicherheitsvorfällen oder regulatorischen Änderungen.\n• Annual Security Reporting: Entwicklung regelmäßiger Sicherheitsberichte, die Fortschritte und Erfolge der IT-Grundschutz-Implementierung dokumentieren.\n• Media and Public Relations: Unterstützung bei der externen Kommunikation von Sicherheitsinitiativen zur Stärkung der Unternehmensreputation.\n• Industry Leadership Positioning: Positionierung als Branchenführer in IT-Sicherheit durch strategische Teilnahme an Fachkonferenzen und Publikationen."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
