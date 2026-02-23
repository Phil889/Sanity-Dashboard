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
    console.log('Updating CRA Product Security Requirements page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-product-security-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-product-security-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie kann unsere C-Suite CRA-Compliance zur Stärkung der Unternehmenskultur und Employee Engagement nutzen?",
        answer: "Die strategische Integration von CRA-Compliance in die Unternehmenskultur schafft neue Dimensionen für Employee Engagement und transformiert Cybersecurity von einer technischen Compliance-Aufgabe zu einem kulturellen Wettbewerbsvorteil. Für die C-Suite eröffnet dies Möglichkeiten zur Stärkung der Employer Brand und zur Entwicklung einer Security-First-Mentalität als Kernkompetenz.\n\n🎯 Cultural Transformation durch CRA-Excellence:\n• Security-First-Mindset als Corporate Value: Integration von Cybersecurity-Exzellenz in die Kern-Unternehmenswerte und kulturelle DNA, wodurch Mitarbeiter zu proaktiven Security-Champions werden.\n• Innovation Culture Enhancement: CRA-getriebene Security-by-Design-Prinzipien fördern eine Kultur der präventiven Innovation und Qualitätsorientierung in allen Geschäftsbereichen.\n• Cross-Functional Collaboration: CRA-Implementierung erfordert intensive Zusammenarbeit zwischen Teams und schafft neue kulturelle Brücken zwischen traditionell getrennten Bereichen.\n• Continuous Learning Culture: Reguläre CRA-Trainings und Updates fördern eine Lernkultur und halten das Unternehmen an der Spitze technologischer Entwicklungen.\n\n💪 Employee Engagement und Retention Excellence:\n• Purpose-Driven Work: Mitarbeiter erleben ihre Arbeit als Beitrag zu gesellschaftlich relevanter Cybersicherheit und digitalem Verbraucherschutz.\n• Skill Development Opportunities: CRA-Compliance-Training entwickelt zukunftsrelevante Kompetenzen und erhöht die Marktfähigkeit der Mitarbeiter.\n• Recognition und Reward Programs: Etablierung von Anreizsystemen für Security-Excellence und CRA-Compliance-Beiträge als Motivation und Retention-Tool.\n• Internal Mobility und Career Paths: Neue Karrierewege in Cybersecurity und Compliance schaffen Wachstumschancen und reduzieren Talent-Abwanderung.\n\n🚀 ADVISORI's Culture Excellence: Wir entwickeln maßgeschneiderte Change Management-Programme und Cultural Transformation-Strategien, die CRA-Compliance in eine positive, engagierte Unternehmenskultur integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Performance Management und KPI-Frameworks sollte unsere C-Suite für CRA-Compliance etablieren?",
        answer: "Die Entwicklung präziser Performance Management-Systeme und KPI-Frameworks für CRA-Compliance ermöglicht der C-Suite datengetriebene Entscheidungsfindung und kontinuierliche Optimierung der Compliance-Performance. Ein durchdachtes Metrics-System transformiert CRA-Compliance von einem qualitativen Ziel zu einem quantifizierbaren Geschäftsergebnis.\n\n📊 Strategic Performance Metrics Framework:\n• Compliance Maturity Scoring: Entwicklung mehrdimensionaler Maturity-Modelle zur objektiven Bewertung des CRA-Compliance-Fortschritts mit Benchmarking gegen Industry Standards.\n• Risk-Adjusted ROI Metrics: Quantifizierung des Return on Investment von CRA-Compliance-Maßnahmen unter Berücksichtigung von Risikominimierung und Marktchancen.\n• Time-to-Compliance KPIs: Messung der Geschwindigkeit von Compliance-Implementierung und Identifikation von Effizienz-Optimierungspotenzialen.\n• Business Impact Assessment: Quantifizierung des direkten Business Impact von CRA-Compliance auf Revenue, Customer Satisfaction und Market Share.\n\n⚡ Operational Excellence Indicators:\n• Vulnerability Response Time: Messung der Geschwindigkeit von Security-Incident-Detection und -Response als Indikator für operative CRA-Readiness.\n• Supplier Compliance Rate: Tracking der CRA-Konformität in der Supply Chain als Indikator für Ecosystem-Gesundheit und -Risiken.\n• Employee Security Competency: Bewertung der CRA-relevanten Mitarbeiter-Kompetenzen und Training-Effektivität durch regelmäßige Assessments.\n• Regulatory Relationship Quality: Messung der Qualität und Proaktivität der Beziehungen zu EU-Regulatoren und Marktaufsichtsbehörden.\n\n🎯 ADVISORI's Performance Excellence: Wir entwickeln maßgeschneiderte KPI-Dashboards und Performance Management-Systeme, die CRA-Compliance-Performance transparent, messbar und kontinuierlich optimierbar machen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie sollte unsere C-Suite Future-Proofing-Strategien für evolvierende CRA-Anforderungen entwickeln?",
        answer: "Die Entwicklung zukunftssicherer Strategien für evolvierende CRA-Anforderungen ist entscheidend für langfristige Compliance-Exzellenz und ermöglicht der C-Suite, proaktiv auf regulatorische Entwicklungen zu reagieren statt nur zu reagieren. Ein intelligentes Future-Proofing-Konzept transformiert CRA-Compliance von einer statischen Anforderung zu einem adaptiven Wettbewerbsinstrument.\n\n🔮 Adaptive Compliance Architecture:\n• Modular Security Framework: Entwicklung flexibler, modularer Security-Architekturen, die schnelle Anpassungen an neue CRA-Anforderungen ermöglichen ohne komplette System-Überarbeitungen.\n• AI-Powered Regulatory Intelligence: Einsatz von Machine Learning zur kontinuierlichen Überwachung und Antizipation von EU-Regulatory-Entwicklungen und deren Auswirkungen auf Ihr Geschäftsmodell.\n• Scenario Planning und Stress Testing: Regelmäßige Simulation verschiedener CRA-Entwicklungsszenarien zur Vorbereitung auf unterschiedliche Regulatory-Futures.\n• Technology Investment Roadmaps: Strategische IT-Investment-Planung mit Fokus auf zukunftsfähige, CRA-kompatible Technologien und Plattformen.\n\n🚀 Innovation-Driven Future Readiness:\n• Emerging Technology Integration: Proaktive Evaluation und Integration emerging Technologies (Quantum Computing, Advanced AI, IoT Security) für Next-Generation CRA-Compliance.\n• Cross-Border Regulatory Harmonization: Vorbereitung auf internationale Harmonisierung von Cybersecurity-Standards durch Participation in globalen Standardisierungs-Initiativen.\n• Customer-Centric Compliance Evolution: Antizipation zukünftiger Kundenbedürfnisse und -erwartungen an CRA-konforme Produkte und Services.\n• Ecosystem Evolution Planning: Strategische Vorbereitung auf Veränderungen im Supplier- und Partner-Ecosystem durch evolvierende CRA-Anforderungen.\n\n💼 ADVISORI's Future-Proofing Excellence: Wir entwickeln adaptive Compliance-Strategien und Future-Readiness-Frameworks, die Ihr Unternehmen optimal für die Evolution der CRA-Landschaft positionieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche Exit-Strategien und Contingency-Pläne sollte unsere C-Suite für Non-Compliance-Szenarien entwickeln?",
        answer: "Die Entwicklung robuster Exit-Strategien und Contingency-Pläne für Non-Compliance-Szenarien ist ein kritischer Aspekt des strategischen Risk Managements und ermöglicht der C-Suite, auch in Worst-Case-Szenarien handlungsfähig zu bleiben. Intelligente Contingency-Planung minimiert Business-Disruption und schützt langfristige Unternehmenswerte auch bei temporären Compliance-Herausforderungen.\n\n🚨 Strategic Contingency Framework:\n• Gradual Market Exit Strategies: Entwicklung stufenweiser EU-Markt-Exit-Pläne für den Fall von Non-Compliance mit minimierten Revenue-Impacts und optimierten Alternative-Market-Opportunities.\n• Product Portfolio Triage: Priorisierung von Produktlinien für Compliance-Investitionen versus strategische Divestiture bei übermäßigen Compliance-Kosten.\n• Legal und Regulatory Defense: Vorbereitung rechtlicher Verteidigungsstrategien für potenzielle CRA-Violations mit spezialisierten Legal-Teams und Pre-Negotiated-Response-Frameworks.\n• Stakeholder Communication Crisis Plans: Entwicklung präziser Kommunikationsstrategien für Investors, Customers und Partners bei Non-Compliance-Ereignissen.\n\n⚡ Business Continuity und Recovery Excellence:\n• Alternative Revenue Streams: Aufbau CRA-unabhängiger Business-Lines und Geographic Markets als Backup-Revenue-Sources bei EU-Market-Disruption.\n• Technology Asset Liquidation: Strategische Planung für die Monetarisierung von CRA-Investments durch Licensing oder Asset-Sales bei Geschäftsmodell-Pivots.\n• Talent Retention during Crisis: Employee-Retention-Strategien für Key-Talent während Non-Compliance-Perioden zur Sicherung der Organisational-Capability.\n• Rapid Compliance Recovery: Fast-Track-Compliance-Recovery-Pläne mit Pre-Identified-Resources und Accelerated-Implementation-Protocols.\n\n🛡️ ADVISORI's Contingency Excellence: Wir entwickeln maßgeschneiderte Risk Mitigation-Strategien und Business Continuity-Pläne, die auch in Non-Compliance-Szenarien optimale Business-Outcomes und Recovery-Geschwindigkeit sicherstellen."
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
