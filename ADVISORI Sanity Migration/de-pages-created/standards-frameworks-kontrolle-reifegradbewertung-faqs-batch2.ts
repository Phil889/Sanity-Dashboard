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
    console.log('Updating Standards Frameworks Kontrolle Reifegradbewertung page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie orchestriert ADVISORI eine organisationsweite Kontrolle Reifegradbewertung in komplexen Unternehmensstrukturen und welche Stakeholder-Management-Herausforderungen adressiert dies?",
        answer: "Die Durchführung einer umfassenden Kontrolle Reifegradbewertung in komplexen Organisationsstrukturen erfordert ein strategisches Change Management und sophisticated Stakeholder-Orchestrierung. ADVISORI hat eine bewährte Methodik entwickelt, die technische Evaluierung mit organisatorischer Transformation verbindet und alle Unternehmensebenen strategisch einbindet.\n\n🎭 Enterprise-wide Assessment Orchestration:\n• Multi-Stakeholder Engagement Framework: Systematische Einbindung aller relevanten Stakeholder von C-Level über IT-Security bis hin zu Operational Teams durch strukturierte Workshop-Serien und Interview-Zyklen.\n• Federated Assessment Approach: Koordination dezentraler Bewertungsprozesse bei multinationalen Konzernen unter Berücksichtigung lokaler Gegebenheiten und globaler Standards.\n• Cultural Sensitivity Integration: Anpassung der Bewertungsmethodik an verschiedene Unternehmenskulturen, Reifegrade und regionale Compliance-Anforderungen.\n• Executive Sponsorship Enablement: Entwicklung von Executive-Level Champions und Change Agents zur Sicherstellung organisationsweiter Akzeptanz und Momentum.\n\n🚀 Stakeholder Alignment und Buy-in:\n• Business-IT Convergence: Überbrückung der traditionellen Kluft zwischen Business und IT durch gemeinsame Bewertungskriterien und geteilte Verantwortlichkeiten für Cybersecurity-Outcomes.\n• Risk Owner Identification: Klare Zuordnung von Kontrollverantwortlichkeiten zu spezifischen Business Process Owners und Definition messbarer Accountability-Mechanismen.\n• Communication Strategy Development: Maßgeschneiderte Kommunikationsstrategien für verschiedene Zielgruppen mit entsprechend angepassten Botschaften und Argumentationslogiken.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen durch gezielte Stakeholder-Analyse und individualisierte Überzeugungsstrategien.\n\n🎯 ADVISORI's Orchestration Excellence:\n• Assessment Program Management Office (PMO): Etablierung einer temporären PMO-Struktur zur Koordination aller Assessment-Aktivitäten und Sicherstellung konsistenter Durchführung.\n• Cross-functional Working Groups: Bildung interdisziplinärer Teams aus verschiedenen Unternehmensbereichen zur Sicherstellung holistischer Perspektiven und organisationsweiter Ownership.\n• Continuous Stakeholder Pulse: Regelmäßige Stakeholder-Feedback-Zyklen zur Anpassung des Assessment-Ansatzes an sich verändernde organisatorische Dynamiken.\n• Executive Dashboard Integration: Real-time Visibility für die C-Suite über Assessment-Progress, Stakeholder-Engagement und preliminary Findings für proaktive Steuerung des Gesamtprozesses."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche differenzierten Bewertungsansätze verwendet ADVISORI für verschiedene Industrien und wie berücksichtigt dies branchenspezifische Risikoprofile und regulatorische Landschaften?",
        answer: "Jede Industrie präsentiert unique Cybersecurity-Herausforderungen, regulatorische Rahmenbedingungen und Risikoprofile, die eine hochspezialisierte Bewertungsapproach erfordern. ADVISORI hat industry-specific Assessment Frameworks entwickelt, die nicht nur technische Kontrollen evaluieren, sondern auch branchenspezifische Threat Landscapes und Business Contexts berücksichtigen.\n\n🏭 Industry-Specific Assessment Frameworks:\n• Financial Services: Integration von Basel III/IV-Anforderungen, DORA-Compliance, Operational Resilience Testing und Cyber-Operational Risk Assessments mit speziellem Fokus auf systemische Risiken und Interconnectedness.\n• Healthcare & Life Sciences: HIPAA/GDPR-konforme Bewertungsansätze mit Schwerpunkt auf Patient Data Protection, Medical Device Security (FDA 510k), Clinical Trial Data Integrity und Supply Chain Vulnerabilities.\n• Critical Infrastructure: KRITIS-Verordnung und NIS2-Directive-aligned Assessments mit Fokus auf Industrial Control Systems (ICS/SCADA), Physical-Cyber Convergence und National Security Implications.\n• Manufacturing & Industry 4.0: Integration von IT/OT-Convergence-Bewertungen, Smart Factory Security, Supply Chain Cyber Risk und Intellectual Property Protection Assessments.\n\n📊 Regulatory Landscape Integration:\n• Compliance Mapping Excellence: Automatisierte Mappings zwischen CIS Controls und branchenspezifischen Regulatorien (PCI DSS, SOX, GDPR, TISAX, etc.) zur Optimierung von Compliance-Effizienz.\n• Regulatory Horizon Scanning: Proaktive Integration kommender regulatorischer Änderungen (EU AI Act, Cyber Resilience Act) in aktuelle Bewertungsframeworks.\n• Multi-Jurisdiction Coordination: Harmonisierung von Assessment-Ergebnissen über verschiedene regulatorische Jurisdiktionen hinweg für multinationale Organisationen.\n• Regulatory Risk Quantification: Bewertung nicht nur von technischen, sondern auch von Compliance-Risiken und deren potentieller finanzieller Auswirkungen.\n\n🎯 ADVISORI's Industry Expertise:\n• Sector-Specific Threat Intelligence: Integration aktueller, branchenspezifischer Threat Intelligence und Attack Patterns in die Bewertungskriterien und -gewichtungen.\n• Industry Benchmarking: Vergleich mit Peer-Organisationen und Industry Leaders zur Identifikation von Competitive Gaps und Best-Practice-Opportunities.\n• Specialized Assessment Teams: Deployment von Industry-Expert Teams mit Deep Domain Knowledge und entsprechenden Zertifizierungen (CISA, CISSP, CISM, etc.).\n• Regulatory Relationship Management: Enge Zusammenarbeit mit Regulatoren und Industry Bodies zur Sicherstellung, dass Assessment-Ergebnisse auch aus Aufsichtsperspektive relevant und wertvoll sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integriert ADVISORI emerging Technologies und Third-Party-Risiken in die Kontrolle Reifegradbewertung und welche Auswirkungen hat dies auf unsere digitale Transformation?",
        answer: "Die moderne Cybersecurity-Landschaft ist geprägt von rapid evolving Technologies und komplexen Ecosystem-Dependencies, die traditionelle Assessment-Approaches herausfordern. ADVISORI hat innovative Bewertungsmethodiken entwickelt, die nicht nur Current-State bewerten, sondern auch Future-State Readiness für emerging Technologies und Third-Party-Ecosystem-Risiken evaluieren.\n\n🚀 Emerging Technology Assessment Integration:\n• AI/ML Security Maturity: Spezialisierte Bewertung von Machine Learning Pipeline Security, Model Governance, Adversarial Attack Resilience und AI Ethics Implementation.\n• Cloud-Native Security Posture: Comprehensive Assessment von Container Security, Serverless Architecture Risks, Multi-Cloud Governance und DevSecOps Integration Maturity.\n• IoT/OT Convergence Evaluation: Bewertung der Sicherheit von Internet of Things Implementations, Operational Technology Integration und Edge Computing Security Architectures.\n• Zero Trust Architecture Readiness: Assessment der organizational und technical Readiness für Zero Trust Implementation mit Fokus auf Identity-Centric Security und Microsegmentation.\n\n🔗 Third-Party Risk Ecosystem Assessment:\n• Supply Chain Cyber Risk Evaluation: Umfassende Bewertung der Cybersecurity-Posture kritischer Supplier und Vendor mit Integration von Fourth-Party-Risk Considerations.\n• Cloud Service Provider Assessment: Detailed Evaluation von CSP Security Controls, Data Residency Compliance und Vendor Lock-in Risk Mitigation Strategies.\n• Digital Partner Ecosystem Security: Bewertung der Security-Integration mit Fintech Partners, API-Economy Participants und Digital Platform Providers.\n• Outsourcing Risk Assessment: Evaluation der Cybersecurity-Implications von IT-Outsourcing Arrangements und Managed Service Provider Dependencies.\n\n🎯 Digital Transformation Enablement:\n• Technology Roadmap Security Integration: Proaktive Assessment-Integration in Ihre Digital Transformation Roadmap zur early Identification von Security Gaps in geplanten Technology Implementations.\n• Innovation Security Framework: Entwicklung von Security-by-Design Principles für Ihre Innovation Labs und Digital Experimentation Initiatives.\n• Agile Security Assessment: Anpassung traditioneller Assessment-Zyklen an agile Development Practices und Continuous Integration/Continuous Deployment (CI/CD) Environments.\n• Digital Business Model Risk Assessment: Evaluation der Cybersecurity-Implications neuer digitaler Geschäftsmodelle, Plattform-Strategien und Ecosystem-Orchestration Approaches.\n\n💡 ADVISORI's Future-Ready Assessment Methodology:\n• Predictive Risk Modeling: Verwendung von Advanced Analytics zur Vorhersage zukünftiger Risiko-Entwicklungen basierend auf Technology Adoption Patterns und Threat Evolution.\n• Scenario-based Assessment: Multi-Scenario-Evaluierung zur Preparation auf verschiedene Technology Evolution Paths und deren Security Implications.\n• Continuous Technology Monitoring: Integration von Technology Trend Monitoring in ongoing Assessment Processes zur real-time Anpassung an emerging Threats und Opportunities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche innovativen Metriken und KPIs entwickelt ADVISORI zur kontinuierlichen Überwachung der Kontrollreife und wie unterstützen diese die strategische Entscheidungsfindung der C-Suite?",
        answer: "Traditional Security Metrics fokussieren oft auf technische Aspekte und versäumen es, den Strategic Business Value von Cybersecurity-Investitionen zu demonstrieren. ADVISORI hat innovative, C-Level-orientierte Metriken entwickelt, die Kontrollreife in Business-relevante KPIs übersetzen und kontinuierliche strategic Decision-Making ermöglichen.\n\n📊 Business-Aligned Security Metrics Framework:\n• Cyber Risk-Adjusted Return on Assets (CRARO): Innovative Metrik, die traditional ROIC mit Cyber Risk Exposure korreliert und zeigt, wie Cybersecurity-Investitionen Asset-Performance schützen und verbessern.\n• Security Investment Efficiency Ratio (SIER): Measurement der Cost-Effectiveness von Security Controls durch Verhältnis von Risk Reduction zu Investment Cost pro Control Category.\n• Digital Trust Index (DTI): Composite Metric aus Customer Confidence, Partner Trust Scores und Market Reputation Indicators zur Quantifizierung des Business Impact verbesserter Security Posture.\n• Cyber Resilience Velocity (CRV): Measurement der Speed-to-Recovery und Business Continuity Effectiveness bei Security Incidents als Indikator für operational Resilience.\n\n🎯 Predictive Intelligence Metrics:\n• Threat Exposure Forecasting (TEF): Predictive Metrics zur Vorhersage zukünftiger Threat Exposure basierend auf Current Control Maturity und Industry Threat Evolution.\n• Control Decay Analytics (CDA): Measurement der natural Degradation von Security Controls über Zeit zur proaktiven Maintenance-Planung und Investment-Timing.\n• Compliance Drift Indicators (CDI): Early Warning Metrics für sich entwickelnde Compliance Gaps durch regulatory Changes oder organizational Growth.\n• Innovation Security Readiness Score (ISRS): Assessment der Security-Readiness für neue Technology Adoptions und Digital Transformation Initiatives.\n\n🚀 Real-Time Decision Support Dashboards:\n• Executive Risk Heat Maps: Dynamic, real-time Visualisierung von Risk Concentrations und Control Effectiveness mit Direct Business Impact Correlation.\n• Investment Prioritization Matrices: Data-driven Recommendation Engines für optimal Security Investment Allocation basierend auf Risk-Return-Calculations.\n• Competitive Security Positioning: Benchmarking-Dashboards zeigen Ihre Security Posture relative zu Industry Peers und Market Leaders.\n• Board-Ready Executive Summaries: Automated Generation von C-Level-appropriate Reports mit Key Insights, Trends und Action Items.\n\n💡 ADVISORI's Metrics Innovation:\n• AI-Powered Analytics: Machine Learning-basierte Pattern Recognition zur Identification von Correlation zwischen Control Improvements und Business Outcomes.\n• Behavioral Security Metrics: Integration von Human Factor Analytics zur Measurement von Security Culture Maturity und Employee Risk Behaviors.\n• Ecosystem Security Scorecards: Holistic Metrics die nicht nur Internal Controls bewerten, sondern auch Third-Party und Supply Chain Security Contributions.\n• Dynamic Materiality Assessment: Kontinuierliche Re-evaluation von Security Risk Materiality basierend auf sich verändernden Business Priorities und Market Conditions."
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
