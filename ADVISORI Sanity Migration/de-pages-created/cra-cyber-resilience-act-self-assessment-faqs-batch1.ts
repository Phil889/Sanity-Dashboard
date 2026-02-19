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
    console.log('Updating CRA Cyber Resilience Act Self-Assessment page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-self-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-self-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein professionelles CRA Self-Assessment für die C-Suite weit mehr als eine regulatorische Pflichtübung und wie transformiert ADVISORI dies zu einem strategischen Competitive Advantage?",
        answer: "Für C-Level-Führungskräfte stellt das CRA Self-Assessment eine einmalige Gelegenheit dar, Cybersecurity von einer Cost-Center-Funktion zu einem Value-Driver und Differentiator zu transformieren. Ein strategisch durchgeführtes Self-Assessment demonstriert nicht nur EU-Compliance, sondern auch proaktive Cyber-Resilience-Leadership und schafft nachhaltiges Vertrauen bei Stakeholdern, Kunden und Partnern. ADVISORI positioniert Self-Assessments als Business-Enabler für Premium-Marktpositionierung.\n\n🎯 Strategische Value-Dimensionen für die Führungsebene:\n• Market Differentiation durch Security Excellence: Professionelle Self-Assessments signalisieren Cyber-Maturity und schaffen Competitive Advantages in sicherheitskritischen Märkten und bei Enterprise-Kunden.\n• Risk-adjusted Business Growth: Strukturierte Cybersecurity-Bewertungen ermöglichen kalkuliertes Wachstum in digitalen Geschäftsfeldern mit optimierter Risiko-Rendite-Balance.\n• Stakeholder Confidence Building: Transparente Sicherheitsstandards stärken Investor Relations, Partner-Kooperationen und Kunden-Vertrauen durch demonstrierte Cyber-Resilience.\n• Insurance und Legal Protection: Professionelle Self-Assessments verbessern Cyber-Versicherungskonditionen und schaffen rechtliche Absicherung bei Security-Incidents.\n\n🛡️ Der ADVISORI Self-Assessment-Excellence-Ansatz:\n• Strategic Security Positioning: Wir entwickeln Self-Assessment-Strategien, die nicht nur CRA-konform sind, sondern auch Ihre Marktpositionierung als Security-Leader unterstützen.\n• Business-integrated Cybersecurity: Integration von Security-Assessments in Ihre Geschäftsstrategie, Produktentwicklung und Customer-Acquisition-Prozesse.\n• Stakeholder Communication Excellence: Aufbereitung von Assessment-Ergebnissen für verschiedene Zielgruppen - von Board-Präsentationen bis zu Customer-Security-Narratives.\n• Continuous Value Creation: Self-Assessment-Frameworks, die ongoing Business Value generieren durch kontinuierliche Security-Improvement und Market-Positioning-Optimierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie strukturiert ADVISORI CRA Self-Assessment-Prozesse, um C-Level-Führungskräften nicht nur Compliance-Sicherheit zu gewährleisten, sondern auch operative Effizienz und Time-to-Market zu optimieren?",
        answer: "Moderne Digital-Business-Geschwindigkeit erfordert Self-Assessment-Prozesse, die Compliance-Rigor mit operativer Agilität verbinden. ADVISORI hat innovative Assessment-Methodologien entwickelt, die nicht nur alle CRA-Anforderungen erfüllen, sondern auch Entwicklungszyklen beschleunigen und Business-Continuity optimieren. Unser Ansatz eliminiert Assessment-Bottlenecks und transformiert Compliance zu einem Business-Accelerator.\n\n⚡ High-Velocity Assessment-Architecture:\n• Automated Assessment Integration: Implementierung automatisierter Security-Assessment-Tools in DevSecOps-Pipelines für kontinuierliche CRA-Compliance ohne Entwicklungs-Delays.\n• Risk-based Assessment Prioritization: Intelligente Fokussierung auf business-kritische Components und High-Risk-Areas für maximale Effizienz bei minimaler Ressourcenbindung.\n• Parallel Processing Frameworks: Simultane Assessment-Durchführung verschiedener Product-Components für drastisch reduzierte Time-to-Market bei maintained Quality.\n• Pre-approved Security Patterns: Etablierung von Standard-Security-Patterns und -Templates für wiederkehrende Anwendungsfälle zur Beschleunigung zukünftiger Assessments.\n\n🚀 ADVISORI's Agile Assessment-Methodology:\n• Sprint-based Assessment Cycles: Agile Assessment-Durchführung in iterativen Sprints, die perfekt in moderne Entwicklungsmethologien integriert sind.\n• Real-time Compliance Monitoring: Kontinuierliche Überwachung der CRA-Compliance während der Produktentwicklung zur Vermeidung von Last-Minute-Corrections.\n• Business Impact Optimization: Assessment-Priorisierung basierend auf Business-Value und Market-Impact für optimale Resource-Allocation.\n• Cross-functional Team Integration: Nahtlose Integration von Security-, Development-, Product- und Business-Teams für holistische Assessment-Excellence.\n• Scalable Assessment Infrastructure: Aufbau wiederverwendbarer Assessment-Frameworks und -Processes für effiziente Skalierung bei Portfolio-Wachstum."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "In welcher Weise nutzt ADVISORI CRA Self-Assessment-Erkenntnisse zur Stärkung der Cyber-Resilience-Governance und zur Optimierung von C-Level-Entscheidungen in digitalen Transformationsprojekten?",
        answer: "CRA Self-Assessments generieren wertvolle Security-Intelligence, die weit über Compliance-Documentation hinausgeht und als strategische Decision-Support-Basis für digitale Transformationsinitiativen dient. ADVISORI transformiert Assessment-Daten in actionable Business-Intelligence, die C-Level-Entscheidungen in Cybersecurity-Investitionen, Technologie-Auswahl und Risk-Management optimiert.\n\n📊 Strategic Intelligence-Generation aus Self-Assessments:\n• Cyber-Risk-Portfolio-Optimization: Systematische Analyse von Security-Risks across Product-Portfolio für intelligente Risk-Diversification und Investment-Prioritization.\n• Technology Security ROI-Analysis: Assessment-basierte Bewertung verschiedener Technologie-Optionen hinsichtlich Security-Costs, Compliance-Effort und Business-Enablement.\n• Security-Investment-Guidance: Datengestützte Empfehlungen für Cybersecurity-Budgets, Tool-Investments und Team-Development basierend auf Assessment-Insights.\n• Digital Transformation Risk-Mapping: Integration von CRA-Assessment-Erkenntnissen in strategische Digital-Transformation-Roadmaps für risk-aware Innovation.\n\n🎯 ADVISORI's Intelligence-driven Governance-Framework:\n• Executive Dashboard Development: Aufbau von Management-Dashboards, die Assessment-KPIs in business-relevante Metrics und Trends übersetzen für informed Decision-Making.\n• Predictive Security Analytics: Nutzung von Assessment-Daten für Predictive Modeling von Security-Trends und proaktive Risk-Mitigation-Strategien.\n• Business-Security-Alignment: Assessment-basierte Optimierung der Alignment zwischen Business-Objectives und Security-Investments für maximale Value-Creation.\n• Stakeholder Communication Optimization: Transformation von technischen Assessment-Results in stakeholder-spezifische Narratives für Board, Investors und Business-Partners.\n• Continuous Improvement Frameworks: Etablierung von Assessment-driven Continuous-Improvement-Prozessen für ongoing Security-Excellence und Business-Agility."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie positioniert ADVISORI CRA Self-Assessment-Excellence als Enabler für Premium-Partnerschaften und Market-Expansion, um C-Level-Investitionen in Security-Compliance zu Revenue-generating Assets zu transformieren?",
        answer: "Erstklassige CRA Self-Assessment-Capabilities sind mächtige Business-Enabler, die Türen zu Premium-Märkten, Enterprise-Partnerschaften und strategischen Allianzen öffnen. ADVISORI transformiert Security-Compliance-Investments in competitive Market-Assets, die direkt Revenue-Generation, Market-Access und Business-Growth unterstützen. Unser Ansatz positioniert Security-Excellence als Business-Differentiator und Growth-Catalyst.\n\n💼 Self-Assessment als Business-Growth-Engine:\n• Enterprise Market Access: CRA-Excellence als Eintrittskarte in security-kritische Enterprise-Märkte und Government-Contracts, die Premium-Pricing und Long-term-Contracts ermöglichen.\n• Strategic Partnership Enablement: Security-Leadership als Basis für Partnerschaften mit führenden Technology-Providern und Fortune-500-Unternehmen, die joint Value-Creation verlangen.\n• Premium Customer Acquisition: Self-Assessment-Zertifikate und Security-Excellence-Nachweise als Sales-Enabler für High-Value-Customers mit strengen Security-Requirements.\n• Market Differentiation Strategy: Security-Compliance als Unique-Selling-Proposition in commoditized Markets für Pricing-Power und Competitive-Moats.\n\n🌟 ADVISORI's Revenue-generating Assessment-Strategy:\n• Security-as-a-Brand-Asset: Entwicklung von Security-Excellence-Narratives und Market-Positioning-Strategien, die Assessment-Results in Brand-Value und Customer-Trust transformieren.\n• Partner Ecosystem Development: Aufbau von Security-Excellence-basierten Partner-Networks und Certification-Programs für expanded Market-Reach.\n• Cross-selling Security Solutions: Nutzung von Assessment-Expertise für Development zusätzlicher Security-Services und Consulting-Revenue-Streams.\n• International Market Expansion: CRA-Compliance als Foundation für EU-Market-Entry und Global-Expansion-Strategien mit consistent Security-Standards.\n• Investment Attraction Strategy: Security-Excellence-Documentation als Key-Asset für Fundraising, IPO-Preparation und Strategic-Investor-Acquisition."
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
