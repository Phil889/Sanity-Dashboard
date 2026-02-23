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
    console.log('Updating CRA Security by Default page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI die C-Suite bei der strategischen Talentakquisition und dem Aufbau von Security by Default Expertise innerhalb der Organisation?",
        answer: "Der Aufbau von Security by Default Expertise erfordert eine strategische Herangehensweise an Talentmanagement, die sowohl externe Akquisition als auch interne Entwicklung umfasst. ADVISORI unterstützt C-Level-Teams dabei, eine nachhaltige Security by Default Kompetenzarchitektur aufzubauen, die sowohl aktuelle CRA-Anforderungen erfüllt als auch zukünftige Herausforderungen bewältigen kann.\n\n🎯 Strategic Talent Architecture Development:\n• Competency Mapping und Skills Gap Analysis: Systematische Bewertung der aktuellen Fähigkeiten und Identifikation kritischer Kompetenzlücken in Security by Default Bereichen.\n• Role Definition und Career Path Planning: Entwicklung neuer Stellenprofile und Karrierewege für Security by Default Experten, die sowohl technische als auch strategische Aspekte abdecken.\n• Compensation Benchmarking: Marktanalyse und Entwicklung wettbewerbsfähiger Vergütungsstrukturen für hochqualifizierte Security by Default Professionals.\n• Retention Strategies: Implementierung von Strategien zur langfristigen Bindung kritischer Security-Talente durch attraktive Entwicklungsmöglichkeiten und Projekte.\n\n🚀 Internal Capability Building Programme:\n• Security by Default Leadership Development: Spezialisierte Führungskräfteprogramme für Manager, die Security by Default Teams leiten und strategische Entscheidungen treffen müssen.\n• Cross-functional Security Training: Schulungsprogramme für nicht-technische Teams (Marketing, Sales, Legal) zur Förderung des organisationsweiten Security by Default Verständnisses.\n• Mentorship und Knowledge Transfer: Etablierung strukturierter Mentorship-Programme zwischen Senior Security Experts und aufstrebenden Talenten.\n• Continuous Learning Infrastructure: Aufbau von Learning Management Systemen und Ressourcen für kontinuierliche Weiterbildung in Security by Default Technologien.\n\n💼 External Talent Acquisition Excellence:\n• Executive Search Strategien für Security by Default C-Level Positionen (CISO, CPO, CTO mit Security Focus)\n• Technical Recruitment Optimization für spezialisierte Security by Default Engineers und Architects\n• University Partnership Programme für Early Talent Identification und Graduate Recruitment\n• Industry Network Development für Zugang zu passiven Kandidaten und Thought Leaders\n\n📊 Performance und ROI Measurement:\n• Talent ROI Metrics zur Bewertung der Wertschöpfung durch Security by Default Investments\n• Skill Development Tracking und Competency Progress Monitoring\n• Team Performance Indicators für Security by Default Deliverables und Outcomes\n• Cultural Integration Assessment für neue Security-Hires und deren Einfluss auf die Organisationskultur"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt Security by Default bei der ESG-Strategie und wie positioniert ADVISORI dies für C-Level Sustainability und Corporate Governance Initiativen?",
        answer: "Security by Default ist ein integraler Bestandteil moderner ESG-Strategien (Environmental, Social, Governance) und wird zunehmend von Investoren, Stakeholdern und Regulatoren als Indikator für verantwortliche Unternehmensführung betrachtet. ADVISORI hilft C-Level-Teams dabei, Security by Default als strategischen ESG-Enabler zu positionieren und nachhaltigen Unternehmenswert zu schaffen.\n\n🌱 Environmental Sustainability Integration:\n• Green Security Architecture: Entwicklung energieeffizienter Security by Default Implementierungen, die den ökologischen Fußabdruck minimieren.\n• Sustainable Supply Chain Security: Integration von Umweltkriterien in die Bewertung und Auswahl von Security-Lieferanten und -Technologien.\n• Carbon Footprint Optimization: Implementierung von Security-Lösungen, die den Energieverbrauch reduzieren und zu Klimazielen beitragen.\n• Circular Economy Principles: Anwendung von Nachhaltigkeitsprinzipien bei der Auswahl und Implementierung von Security by Default Technologien.\n\n👥 Social Responsibility und Stakeholder Value:\n• Digital Inclusion und Accessibility: Sicherstellung, dass Security by Default Implementierungen allen Nutzern zugänglich sind und digitale Teilhabe fördern.\n• Privacy by Design Integration: Harmonisierung von Security by Default mit Datenschutzprinzipien für umfassenden Nutzerschutz.\n• Community Impact Assessment: Bewertung der gesellschaftlichen Auswirkungen von Security by Default Initiativen auf lokale Gemeinschaften.\n• Ethical Security Practices: Entwicklung ethischer Guidelines für Security by Default Implementierungen und deren Auswirkungen auf verschiedene Stakeholder-Gruppen.\n\n🏛️ Governance Excellence und Transparency:\n• Board-Level Security Governance: Integration von Security by Default in Corporate Governance Strukturen und Entscheidungsprozesse.\n• Stakeholder Transparency: Entwicklung transparenter Berichterstattung über Security by Default Performance und Compliance-Status.\n• Risk Management Integration: Einbindung von Security by Default Risiken in Enterprise Risk Management Frameworks.\n• Regulatory Compliance Leadership: Positionierung als Industry Leader durch proaktive CRA-Compliance und Security by Default Excellence.\n\n📈 ESG Value Creation und Investor Relations:\n• ESG Rating Optimization durch nachweisbare Security by Default Performance\n• Sustainable Finance Access durch verbesserte ESG-Scores und Risk Profiles\n• Impact Measurement und Reporting für Security by Default ESG Contributions\n• Investor Communication Strategies zur Demonstration des ESG-Wertes von Security by Default Investitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie entwickelt ADVISORI Crisis Management und Business Continuity Strategien für Security by Default Implementierungen und welche C-Level Preparedness ist erforderlich?",
        answer: "Die strategische Vorbereitung auf Krisen im Kontext von Security by Default erfordert eine umfassende Business Continuity Planung, die sowohl technische Ausfälle als auch regulatorische Änderungen, Cyberangriffe und Reputationsrisiken adressiert. ADVISORI entwickelt robuste Crisis Management Frameworks, die C-Level-Teams auf verschiedene Notfallszenarien vorbereiten und die Geschäftskontinuität gewährleisten.\n\n⚡ Crisis Scenario Planning und Preparedness:\n• Multi-dimensional Crisis Scenarios: Entwicklung umfassender Krisenszenarien von technischen Security by Default Ausfällen bis hin zu regulatorischen Enforcement-Aktionen.\n• Business Impact Modeling: Quantitative Bewertung der Auswirkungen verschiedener Krisenszenarien auf Geschäftsoperationen, Umsatz und Marktposition.\n• Stakeholder Impact Assessment: Analyse der Auswirkungen auf verschiedene Stakeholder-Gruppen (Kunden, Investoren, Regulatoren, Partner) und Entwicklung zielgruppenspezifischer Response-Strategien.\n• Recovery Time Optimization: Strategische Planung zur Minimierung von Recovery-Zeiten und Maximierung der Geschäftskontinuität.\n\n🎯 C-Level Crisis Leadership Framework:\n• Executive Crisis Team Structure: Etablierung klarer Rollen und Verantwortlichkeiten für C-Level-Führungskräfte während Security-bezogener Krisen.\n• Decision-Making Protocols: Entwicklung strukturierter Entscheidungsprozesse für kritische Security by Default Krisensituationen.\n• Communication Authority Matrix: Klare Definition von Kommunikationsverantwortlichkeiten und Eskalationswegen für verschiedene Krisentypen.\n• Board Engagement Strategies: Frameworks für die angemessene Einbindung des Aufsichtsrats in kritische Security-Entscheidungen.\n\n🛡️ Operational Crisis Response Excellence:\n• Automated Crisis Detection Systems: Implementierung von Systemen zur frühzeitigen Erkennung potenzieller Security by Default Krisen.\n• Rapid Response Team Activation: Strukturierte Prozesse zur schnellen Mobilisierung spezialisierter Crisis Response Teams.\n• Vendor und Partner Coordination: Koordinationsmechanismen für die Zusammenarbeit mit externen Partnern während Krisensituationen.\n• Customer Communication Management: Strategien für transparente und vertrauensbildende Kundenkommunikation während Security-Krisen.\n\n📊 Post-Crisis Analysis und Continuous Improvement:\n• Crisis Performance Analytics zur Bewertung der Effektivität von Response-Maßnahmen\n• Lessons Learned Integration in zukünftige Security by Default Strategien\n• Regulatory Relationship Management für proaktive Kommunikation mit Aufsichtsbehörden\n• Reputation Recovery Strategies und Long-term Trust Rebuilding Programme"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie unterstützt ADVISORI die C-Suite bei der strategischen Roadmap-Entwicklung für Security by Default Evolution und welche langfristigen Investitionsstrategien sind erforderlich?",
        answer: "Die Entwicklung einer langfristigen Security by Default Roadmap erfordert eine strategische Vision, die technologische Evolution, regulatorische Entwicklungen und Geschäftswachstum in Einklang bringt. ADVISORI unterstützt C-Level-Teams bei der Entwicklung zukunftsorientierter Investitionsstrategien, die sowohl kurzfristige CRA-Compliance als auch langfristige Wettbewerbsvorteile sicherstellen.\n\n🚀 Strategic Roadmap Architecture:\n• Technology Evolution Forecasting: Systematische Analyse kommender Technologietrends und deren Auswirkungen auf Security by Default Anforderungen.\n• Regulatory Landscape Projection: Vorhersage zukünftiger regulatorischer Entwicklungen und proaktive Anpassung der Security by Default Strategie.\n• Business Growth Integration: Harmonisierung der Security by Default Roadmap mit Unternehmenswachstumsplänen und strategischen Initiativen.\n• Resource Allocation Optimization: Strategische Planung der Budgetverteilung für Security by Default Investitionen über mehrjährige Zeiträume.\n\n💰 Investment Strategy Development:\n• Capital Allocation Framework: Entwicklung strukturierter Ansätze für die Bewertung und Priorisierung von Security by Default Investitionen.\n• ROI-basierte Investitionsentscheidungen: Quantitative Modelle zur Bewertung des erwarteten Returns verschiedener Security by Default Initiativen.\n• Risk-adjusted Investment Planning: Integration von Risikofaktoren in Investitionsentscheidungen für ausgewogene Portfolio-Ansätze.\n• Technology Partnership Strategies: Strategische Allianzen und Partnerschaften zur Optimierung von Investitionseffizienz und Innovationsgeschwindigkeit.\n\n📈 Future-Proofing und Adaptability:\n• Modular Investment Architecture: Entwicklung flexibler Investitionsansätze, die sich an verändernde Anforderungen anpassen lassen.\n• Scalability Planning: Strategische Planung für die Skalierung von Security by Default Capabilities mit Unternehmenswachstum.\n• Innovation Investment Allocation: Dedicated Budgets für experimentelle und zukunftsorientierte Security by Default Technologien.\n• Continuous Strategy Evolution: Frameworks für die regelmäßige Anpassung der Roadmap an sich ändernde Markt- und Technologiebedingungen.\n\n🔍 Performance Measurement und Optimization:\n• Strategic KPI Development für langfristige Security by Default Performance\n• Milestone Tracking und Progress Monitoring für Roadmap Execution\n• Market Positioning Analysis zur Bewertung der Wettbewerbsposition\n• Stakeholder Value Optimization für nachhaltige Business Case Validierung"
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
