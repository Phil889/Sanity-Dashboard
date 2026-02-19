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
    console.log('Updating Intelligent Automation Companies page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-companies' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-companies" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie unterstützt ADVISORI bei der strategischen Vendor-Selection für Intelligent Automation Projekte?',
        answer: "Die strategische Auswahl von Intelligent Automation Anbietern ist eine kritische Entscheidung, die langfristige Auswirkungen auf die digitale Transformation und Wettbewerbsfähigkeit eines Unternehmens hat. ADVISORI entwickelt maßgeschneiderte Vendor-Selection-Prozesse, die sowohl objektive Bewertungskriterien als auch strategische Fit-Analysen umfassen und dabei die spezifischen Geschäftsanforderungen und Zukunftsziele berücksichtigen.\n\n🎯 Requirements Engineering und Fit-Gap-Analyse:\n• Systematische Erfassung und Strukturierung aller funktionalen und nicht-funktionalen Anforderungen an die Automatisierungslösung mit Priorisierung nach Geschäftskritikalität.\n• Detaillierte Analyse der bestehenden IT-Landschaft, Legacy-Systeme und Integration-Requirements für nahtlose Implementierung.\n• Bewertung der organisatorischen Readiness, Change-Management-Anforderungen und Skill-Gap-Analysen für erfolgreiche Adoption.\n• Assessment der regulatorischen Anforderungen, Compliance-Needs und Governance-Strukturen für rechtssichere Implementierung.\n\n📊 Multi-Kriterien-Bewertung und Scoring:\n• Entwicklung gewichteter Bewertungsmatrizen mit quantitativen und qualitativen Kriterien für objektive Vendor-Vergleiche.\n• Implementierung von Scoring-Modellen, die technische Capabilities, Business-Fit und strategische Alignment gleichgewichtig berücksichtigen.\n• Durchführung von Proof-of-Concept-Evaluationen mit realen Daten und Use Cases für praktische Leistungsbewertung.\n• Assessment von Total-Cost-of-Ownership, ROI-Projektionen und Value-Realization-Timelines für fundierte Investitionsentscheidungen.\n\n🔍 Strategic Fit und Future-Readiness:\n• Bewertung der strategischen Alignment zwischen Vendor-Vision und Unternehmenszielen für langfristige Partnerschaftsfähigkeit.\n• Analyse der Vendor-Roadmaps, Innovation-Pipelines und Technology-Evolution für Zukunftssicherheit.\n• Assessment der Skalierungskapazitäten, geografischen Abdeckung und Support-Strukturen für Wachstumsanforderungen.\n• Evaluation der Ecosystem-Partnerschaften, Integration-Capabilities und Platform-Strategien für erweiterte Wertschöpfung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt Vendor-Relationship-Management in der ADVISORI Beratung für Automation Companies?',
        answer: "Vendor-Relationship-Management ist ein kritischer Erfolgsfaktor für nachhaltige Intelligent Automation Implementierungen und erfordert strukturierte Ansätze für Verhandlung, Vertragsgestaltung und laufende Partnerschaftsbetreuung. ADVISORI entwickelt umfassende Vendor-Management-Strategien, die sowohl kurzfristige Implementierungserfolge als auch langfristige Wertschöpfung sicherstellen.\n\n🤝 Strategische Verhandlungsunterstützung:\n• Professionelle Vorbereitung und Durchführung von Vendor-Verhandlungen mit Fokus auf Win-Win-Strukturen und langfristige Partnerschaftsfähigkeit.\n• Entwicklung von Verhandlungsstrategien, die sowohl Kostenoptimierung als auch Qualitätssicherung und Innovation-Incentives berücksichtigen.\n• Strukturierung von flexiblen Vertragsmodellen mit Performance-basierten Komponenten und Anpassungsmöglichkeiten für sich ändernde Anforderungen.\n• Implementierung von Eskalations- und Konfliktresolutions-Mechanismen für konstruktive Problemlösung.\n\n📋 Contract Management und SLA-Definition:\n• Entwicklung detaillierter Service Level Agreements mit messbaren KPIs, Performance-Metriken und Qualitätsindikatoren.\n• Implementierung von Contract-Governance-Strukturen mit regelmäßigen Reviews, Anpassungsmechanismen und Performance-Assessments.\n• Aufbau von Risk-Sharing-Modellen und Incentive-Strukturen für optimale Vendor-Performance und kontinuierliche Verbesserung.\n• Etablierung von Change-Management-Prozessen für Vertragsanpassungen und Scope-Erweiterungen.\n\n🔄 Kontinuierliches Performance-Monitoring:\n• Implementierung umfassender Vendor-Performance-Dashboards mit Real-Time-Monitoring und Trend-Analysen.\n• Durchführung regelmäßiger Business Reviews mit datengetriebener Performance-Bewertung und Verbesserungsempfehlungen.\n• Aufbau von Benchmarking-Systemen für kontinuierliche Marktvergleiche und Competitive-Intelligence.\n• Entwicklung von Vendor-Development-Programmen für gemeinsame Capability-Erweiterung und Innovation-Förderung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie bewertet ADVISORI die Sicherheit und Datenschutz-Compliance von Intelligent Automation Anbietern?',
        answer: "Sicherheit und Datenschutz sind fundamentale Anforderungen bei der Auswahl von Intelligent Automation Anbietern, insbesondere in regulierten Industrien und bei der Verarbeitung sensibler Unternehmensdaten. ADVISORI hat spezialisierte Security-Assessment-Frameworks entwickelt, die sowohl technische Sicherheitsmaßnahmen als auch organisatorische Governance-Strukturen umfassend bewerten.\n\n🔒 Technische Sicherheitsarchitektur-Bewertung:\n• Detaillierte Analyse der Security-by-Design-Implementierungen, Verschlüsselungsstandards und Access-Control-Mechanismen der Anbieter-Lösungen.\n• Assessment der Network-Security, Firewall-Konfigurationen und Intrusion-Detection-Systeme für umfassenden Perimeter-Schutz.\n• Bewertung der Data-Protection-Mechanismen, Backup-Strategien und Disaster-Recovery-Capabilities für Business-Continuity.\n• Evaluation der Identity-and-Access-Management-Systeme, Multi-Factor-Authentication und Privileged-Access-Management.\n\n📋 Compliance und Governance-Assessment:\n• Umfassende Bewertung der DSGVO-Compliance, Privacy-by-Design-Implementierungen und Data-Subject-Rights-Management.\n• Analyse der ISO-Zertifizierungen, SOC-Reports und anderen Compliance-Nachweise für Vertrauensbildung.\n• Assessment der Incident-Response-Prozesse, Security-Monitoring und Threat-Intelligence-Capabilities.\n• Evaluation der Vendor-Security-Governance, Risk-Management-Frameworks und Security-Awareness-Programme.\n\n🛡️ Operational Security und Monitoring:\n• Bewertung der Security-Operations-Centers, Threat-Hunting-Capabilities und Vulnerability-Management-Prozesse.\n• Analyse der Penetration-Testing-Programme, Security-Audits und kontinuierlichen Security-Assessments.\n• Assessment der Supply-Chain-Security, Third-Party-Risk-Management und Vendor-Security-Oversight.\n• Evaluation der Security-Incident-Handling, Forensics-Capabilities und Regulatory-Reporting-Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Continuous Market Intelligence Services bietet ADVISORI für Intelligent Automation Companies?',
        answer: "Die Intelligent Automation Landschaft entwickelt sich kontinuierlich weiter, mit neuen Anbietern, Technologien und Markttrends, die regelmäßige Neubewertung der Vendor-Landschaft erfordern. ADVISORI bietet umfassende Market Intelligence Services, die Unternehmen dabei unterstützen, ihre Automatisierungspartner-Portfolios kontinuierlich zu optimieren und neue Chancen zu identifizieren.\n\n📊 Kontinuierliches Vendor-Monitoring:\n• Systematische Überwachung aller relevanten Intelligent Automation Anbieter mit regelmäßigen Updates zu Produktentwicklungen, Finanzierungen und strategischen Änderungen.\n• Implementierung von Alert-Systemen für kritische Marktveränderungen, Merger-and-Acquisition-Aktivitäten und Compliance-Updates.\n• Aufbau von Vendor-Performance-Tracking mit kontinuierlicher Bewertung der Marktposition und Kundenzufriedenheit.\n• Entwicklung von Trend-Analysen und Forecast-Modellen für proaktive Marktantizipation und strategische Planung.\n\n🔍 Emerging Technology Scouting:\n• Frühzeitige Identifikation und Bewertung neuer Technologien, Startups und disruptiver Innovationen im Automation-Bereich.\n• Analyse von Research-Publikationen, Patent-Anmeldungen und Academic-Developments für Technology-Trend-Identifikation.\n• Assessment von Proof-of-Concepts, Beta-Programmen und Early-Adopter-Implementierungen für Innovation-Bewertung.\n• Evaluation von Technology-Convergence-Trends und Cross-Industry-Innovations für neue Anwendungsmöglichkeiten.\n\n🎯 Strategic Advisory und Portfolio-Optimierung:\n• Regelmäßige Reviews der bestehenden Vendor-Portfolios mit Empfehlungen für Optimierung, Konsolidierung oder Erweiterung.\n• Entwicklung von Vendor-Diversification-Strategien für Risikominimierung und Competitive-Advantage-Maximierung.\n• Implementierung von Vendor-Lifecycle-Management mit strukturierten Evaluation-, Selection- und Exit-Prozessen.\n• Aufbau von Strategic-Roadmaps für zukünftige Vendor-Relationships und Technology-Adoption-Pläne."
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
