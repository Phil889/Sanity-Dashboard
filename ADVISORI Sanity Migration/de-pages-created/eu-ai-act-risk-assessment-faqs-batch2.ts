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
    console.log('Updating EU AI Act Risk Assessment page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie gewährleistet ADVISORI, dass unser AI Risk Assessment Framework sektorspezifische Anforderungen und branchenspezifische Risiken adäquat abbildet?",
        answer: "Verschiedene Branchen und Sektoren weisen fundamental unterschiedliche AI-Risikoprofile auf, die eine standardisierte Bewertung unzureichend machen. ADVISORI entwickelt maßgeschneiderte Risk Assessment Frameworks, die sowohl EU AI Act Compliance als auch branchenspezifische Regulierung und Risikokomplexität optimal adressieren.\n\n🏦 Sektor-spezifische Risk Assessment Expertise:\n• Financial Services: Integration von Prudential Regulation, DORA, MiFID II und anderen Banking-spezifischen Anforderungen in AI Risk Assessment Prozesse, mit besonderem Fokus auf Algorithmic Trading und Credit Decision Making.\n• Healthcare und Life Sciences: Berücksichtigung von Medical Device Regulation (MDR), GDPR Health Data Provisions und klinischer Validierungsanforderungen bei AI-gestützten Diagnose- und Behandlungssystemen.\n• Automotive und Manufacturing: Integration von ISO 26262 (Functional Safety), UNECE Regulations und Industry 4.0 Standards in AI Risk Assessment für autonome Systeme und predictive Maintenance.\n• Energy und Utilities: Compliance mit kritischer Infrastruktur-Regulierung, NIS2 Directive und Grid Code Requirements für AI-gestützte Smart Grid und Energy Management Systeme.\n\n🎯 Branchen-optimierte Methodologien:\n• Risk Context Mapping: Entwicklung branchenspezifischer Risk Context Maps, die regulatorische, technische und Geschäftsrisiken in Relation zu AI Use Cases setzen.\n• Stakeholder Impact Analysis: Systematische Bewertung der Auswirkungen von AI-Systemen auf branchenspezifische Stakeholder (Patienten, Anleger, Verbraucher, Mitarbeiter).\n• Regulatory Convergence Planning: Koordination zwischen EU AI Act Requirements und bestehenden sektorspezifischen Regulations für kohärente Compliance-Strategien.\n• Industry Best Practice Integration: Einbindung branchenführender Risk Management Praktiken und Standards in maßgeschneiderte Assessment Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt AI Risk Assessment bei der Optimierung unserer ESG-Performance und wie trägt dies zur nachhaltigen Unternehmensführung bei?",
        answer: "AI Risk Assessment entwickelt sich zunehmend zu einem kritischen ESG-Faktor, der direkt auf Environmental, Social und Governance Performance einzahlt. Für die C-Suite bedeutet dies, dass systematisches AI Risk Management nicht nur regulatorische Compliance sicherstellt, sondern auch ESG-Ratings verbessert und Zugang zu nachhaltigkeitsorientierten Investoren und Kunden schafft.\n\n🌱 ESG-Integration durch AI Risk Excellence:\n• Environmental Impact: Systematische Bewertung des Energieverbrauchs und CO2-Footprints von AI-Systemen, mit Optimierungsstrategien für Green AI und nachhaltige Computing-Praktiken.\n• Social Responsibility: Comprehensive Assessment von AI Bias, Fairness und Inclusive Design, um sicherzustellen, dass AI-Systeme positive gesellschaftliche Auswirkungen haben und keine diskriminierenden Effekte erzeugen.\n• Governance Excellence: Implementation transparenter AI Governance Strukturen mit klaren Accountability Mechanisms und ethischen Leitlinien, die institutional investor Standards erfüllen.\n• Stakeholder Transparency: Entwicklung von Public Reporting Frameworks für AI Risk Management, die Transparency und Trust bei externen Stakeholdern schaffen.\n\n📊 ESG Value Creation durch Risk Management:\n• Sustainable Finance Enablement: AI Risk Assessment Dokumentation erfüllt EU Taxonomy Requirements und ermöglicht Zugang zu Green Bonds und ESG-linked Financing mit günstigeren Konditionen.\n• Rating Agency Recognition: Professionelle AI Risk Management Praktiken werden zunehmend von ESG Rating Agencies (MSCI, Sustainalytics, ISS) als positive Faktoren bewertet.\n• Customer Trust und Brand Value: Transparente AI Risk Assessment stärkt Brand Reputation und ermöglicht Premium-Positionierung bei nachhaltigkeitsorientierten Kunden.\n• Talent Attraction und Retention: Moderne Professionals präferieren Arbeitgeber mit ethischen AI-Praktiken, was Recruitment-Kosten reduziert und Employee Engagement erhöht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integriert ADVISORI AI Risk Assessment in bestehende Enterprise Risk Management Systeme ohne organisatorische Disruption?",
        answer: "Die nahtlose Integration von AI Risk Assessment in etablierte ERM-Frameworks ist entscheidend für C-Level Akzeptanz und operative Effizienz. ADVISORI verfolgt einen integrativen Ansatz, der bestehende Risk Management Infrastrukturen nutzt und erweitert, anstatt parallele Systeme zu schaffen, die zu Fragmentierung und Ineffizienz führen würden.\n\n🔗 Seamless ERM Integration Strategy:\n• Risk Taxonomy Harmonization: Alignment von AI-spezifischen Risikokategorien mit bestehenden Enterprise Risk Taxonomies, um konsistente Reporting und Management Strukturen zu gewährleisten.\n• Governance Structure Integration: Einbindung von AI Risk Assessment in bestehende Risk Committee Strukturen und Board Reporting Frameworks ohne zusätzliche Governance-Komplexität.\n• System Architecture Compatibility: Design von AI Risk Assessment Tools und Dashboards, die mit bestehenden GRC Platforms und Risk Management Systemen interoperabel sind.\n• Process Optimization: Entwicklung von AI Risk Assessment Workflows, die bestehende Risk Review Zyklen und Reporting Deadlines respektieren und optimieren.\n\n⚙️ Operational Excellence durch Integration:\n• Three Lines of Defense Alignment: Klare Zuordnung von AI Risk Assessment Responsibilities zu First, Second und Third Line Functions entsprechend etablierter Risk Management Strukturen.\n• Risk Appetite Integration: Entwicklung von AI-spezifischen Risk Appetite Statements, die konsistent mit übergeordneten Enterprise Risk Tolerance Levels sind.\n• Incident Management Convergence: Integration von AI Risk Incidents in bestehende Operational Risk Event Management Systeme für holistische Risk Response Capabilities.\n• Training und Change Management: Structured Change Management Programme, die bestehende Risk Management Teams in AI Risk Assessment Methodologien schulen, ohne operative Kontinuität zu gefährden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie ermöglicht ein robustes AI Risk Assessment Framework die sichere Skalierung von AI-Innovationen ohne Kompromisse bei Geschwindigkeit oder Compliance?",
        answer: "Die zentrale Herausforderung für innovative Unternehmen liegt in der Balance zwischen AI Innovation Velocity und Risk Management Rigor. ADVISORI's AI Risk Assessment Framework ist darauf ausgelegt, als Innovation Accelerator zu fungieren, indem es predictable Risk Pathways und streamlined Approval Processes schafft, die Geschwindigkeit erhöhen, anstatt sie zu bremsen.\n\n🚀 Innovation Acceleration durch Risk Intelligence:\n• Pre-approved Risk Templates: Entwicklung von standardisierten Risk Assessment Templates für häufige AI Use Cases, die Fast-Track Approval Processes für ähnliche Anwendungen ermöglichen.\n• Risk-based Scaling Matrices: Creation von Risk-Score-basierten Skalierungsmatrizen, die automatische Freigaben für Low-Risk AI Deployments und expedited Reviews für Medium-Risk Applications ermöglichen.\n• Continuous Risk Monitoring: Implementation von Real-Time Risk Monitoring Systemen, die kontinuierliche Performance-Überwachung ermöglichen und Post-Deployment Risk Management automatisieren.\n• Innovation Sandbox Environments: Etablierung kontrollierter Testing-Umgebungen mit relaxed Risk Requirements für Proof-of-Concept und Pilot-Deployments.\n\n💡 Strategic Innovation Enablement:\n• Portfolio Risk Optimization: Holistische Betrachtung des AI Portfolio Risk Profiles, um Strategic Risk Budget Allocation für High-Value Innovation Opportunities zu optimieren.\n• Competitive Intelligence Integration: Einbindung von Competitive Risk Analysis in Innovation Planning, um First-Mover Advantages bei neuen AI Applications zu sichern.\n• Technology Roadmap Alignment: Integration von Risk Assessment Insights in Technology Roadmap Planning für proaktive Risk Mitigation in der Entwicklungsphase.\n• Cross-functional Innovation Teams: Aufbau integrierter Innovation Teams mit eingebetteten Risk Assessment Capabilities für Rapid Innovation Cycles ohne Compliance-Verzögerungen."
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
