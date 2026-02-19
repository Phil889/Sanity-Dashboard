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
    console.log('Updating CRA Security-by-Design page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-security-by-design' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-security-by-design" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie können wir Security-by-Design als Hebel für die Erschließung neuer Finanzierungsquellen und Investoreninteresse nutzen?",
        answer: "Security-by-Design-Excellence wird zunehmend zu einem kritischen Bewertungsfaktor für Investoren und Finanzierungspartner, da Cybersicherheitsrisiken als materielle Geschäftsrisiken anerkannt werden. Für die C-Suite eröffnet sich die Möglichkeit, CRA-konforme Security-Capabilities als Differentiator bei Funding-Runden, M&A-Transaktionen und strategischen Partnerschaften zu positionieren. Security-by-Design wird zum Investment-Magnet für ESG-fokussierte und risikoaverse Investoren.\n\n💰 Investment-Attraktivitätsfaktoren durch Security Excellence:\n• ESG-Compliance Premium: Security-by-Design-Leadership qualifiziert für ESG-fokussierte Investment-Funds und Green Bonds mit günstigeren Konditionen.\n• Risk-Adjusted Valuations: Nachweisbare Security-Excellence reduziert Cyber-Risk-Discounts bei Unternehmensbewertungen um 15-25%.\n• Strategic Investor Appeal: CRA-konforme Capabilities ziehen strategische Investoren aus regulierten Industrien an, die Compliance-Partner suchen.\n• Insurance Cost Optimization: Security-by-Design-Zertifizierungen ermöglichen günstigere Cyber-Versicherungsprämien und bessere D&O-Konditionen.\n\n📈 Finanzierungsstrategien durch Security-Positioning:\n• Security-Innovation-Bonds: Entwicklung spezieller Finanzierungsinstrumente für Security-by-Design-Transformationen und CRA-Compliance-Projekte.\n• Public-Private-Partnerships: Akquisition von Government-Funding für Security-Research und -Development durch Demonstration von CRA-Leadership.\n• Strategic Partnership Financing: Co-Investments mit Technologie-Partnern für gemeinsame Security-by-Design-Entwicklungen und IP-Creation.\n• Revenue-Based Financing: Strukturierung von Revenue-Share-Agreements basierend auf Security-Premium-Pricing für CRA-konforme Produkte.\n\n🎯 ADVISORI's Investment-Readiness-Strategien:\n• Investor Pitch Development: Entwicklung überzeugender Investment-Narratives, die Security-by-Design-Excellence als Wachstums- und Differenzierungstreiber positionieren.\n• Due Diligence Preparation: Vorbereitung umfassender Security-Documentation und Compliance-Nachweise für beschleunigte Investment-Prozesse.\n• Strategic Value Communication: Training für C-Level-Executives zur effektiven Kommunikation von Security-by-Design-Value-Propositions gegenüber verschiedenen Investor-Typen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche langfristigen Auswirkungen hat Security-by-Design auf unsere Unternehmenskultur und Employee Value Proposition?",
        answer: "Security-by-Design transformiert Unternehmenskultur von reaktivem Risikomanagement zu proaktiver Innovation und schafft eine neue Employee Value Proposition, die auf Vertrauen, Verantwortung und technischer Exzellenz basiert. Für die C-Suite bedeutet dies die Möglichkeit, CRA-Compliance als Katalysator für kulturelle Transformation zu nutzen und gleichzeitig eine attraktive, zukunftsorientierte Arbeitsumgebung zu schaffen, die Top-Talente anzieht und bindet.\n\n🌟 Kulturelle Transformationsdimensionen:\n• Security-First-Mindset: Entwicklung einer Organisationskultur, die Sicherheit als gemeinsame Verantwortung und Innovationsmöglichkeit versteht.\n• Continuous Learning Culture: Security-by-Design erfordert kontinuierliche Weiterbildung und schafft eine Kultur des lebenslangen Lernens und der technischen Exzellenz.\n• Cross-Functional Collaboration: Interdisziplinäre Security-Teams fördern Zusammenarbeit zwischen traditionell getrennten Organisationsbereichen.\n• Innovation Through Constraints: Security-Constraints werden als Kreativitätstreiber verstanden, die zu eleganteren und robusteren Lösungen führen.\n\n💼 Enhanced Employee Value Proposition:\n• Skill Development Opportunities: Mitarbeiter entwickeln gefragte Security-by-Design-Kompetenzen, die ihre Karriereaussichten und Marktposition stärken.\n• Purpose-Driven Work: Beitrag zu sichereren digitalen Produkten schafft Sinnhaftigkeit und gesellschaftlichen Impact in der täglichen Arbeit.\n• Technical Leadership: Arbeit an Cutting-Edge-Security-Technologien positioniert Mitarbeiter als Industry-Leaders und Technical Thought Leaders.\n• Autonomy und Responsibility: Security-by-Design-Frameworks geben Entwicklern mehr Eigenverantwortung und Entscheidungsfreiheit bei Sicherheitsentscheidungen.\n\n🎯 ADVISORI's Culture Transformation Support:\n• Change Management Strategies: Entwicklung umfassender Change-Management-Programme für die kulturelle Integration von Security-by-Design-Prinzipien.\n• Employee Engagement Programs: Design von Engagement-Programmen, die Security-by-Design-Adoption fördern und belohnen.\n• Leadership Development: Training für Führungskräfte zur effektiven Führung von Security-First-Teams und -Kulturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie können wir Security-by-Design als Basis für die Entwicklung von Industry-Standard-Frameworks und Intellectual Property nutzen?",
        answer: "Die Entwicklung proprietärer Security-by-Design-Frameworks und deren Transformation in Industry-Standards eröffnet einzigartige IP-Monetarisierungs- und Market-Leadership-Opportunities. Für die C-Suite bedeutet dies die Möglichkeit, CRA-Compliance-Investitionen in wertvolles geistiges Eigentum und Licensing-Revenue-Streams zu transformieren, während gleichzeitig Industry-Thought-Leadership etabliert wird.\n\n🔬 IP-Development und Standardisierungsstrategien:\n• Proprietary Framework Development: Entwicklung einzigartiger Security-by-Design-Methodologien und -Tools, die über Standard-CRA-Requirements hinausgehen.\n• Patent Portfolio Building: Strategische Patentierung innovativer Security-by-Design-Technologien und -Prozesse für langfristige IP-Protektion.\n• Open Standard Contributions: Strategische Contribution von IP zu Open Standards für Market-Influence und Ecosystem-Leadership.\n• Reference Architecture Licensing: Monetarisierung bewährter Security-Architekturen durch Licensing an andere Unternehmen und System Integrators.\n\n🏛️ Industry Leadership und Standards-Entwicklung:\n• Technical Committee Leadership: Führung relevanter Standardisierungskomitees für direkten Einfluss auf Industry-Standard-Entwicklung.\n• Best Practice Codification: Transformation interner Security-by-Design-Erfahrungen in codifizierte Best Practices und Industry Guidelines.\n• Certification Scheme Development: Entwicklung eigener Zertifizierungsverfahren für Security-by-Design-Excellence als neue Revenue-Source.\n• Academic Research Partnerships: Zusammenarbeit mit Forschungseinrichtungen für wissenschaftlich fundierte IP-Entwicklung und Publikationen.\n\n🎯 ADVISORI's IP-Strategy-Development:\n• IP Portfolio Assessment: Bewertung vorhandener und potenzieller IP-Assets aus Security-by-Design-Implementierungen.\n• Standardization Strategy: Entwicklung strategischer Roadmaps für die Transformation von Unternehmens-IP in Industry-Standards.\n• Licensing Model Design: Strukturierung profitabler Licensing-Modelle für Security-by-Design-IP und -Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche strategischen Überlegungen sind erforderlich für die Skalierung unserer Security-by-Design-Ansätze in einem globalen, multi-regulatorischen Umfeld?",
        answer: "Die Skalierung von Security-by-Design-Ansätzen in globalen, multi-regulatorischen Umgebungen erfordert sophisticated strategische Planung, die lokale Compliance-Anforderungen mit globaler Effizienz und Konsistenz balanciert. Für die C-Suite bedeutet dies die Entwicklung adaptiver Security-Frameworks, die sowohl CRA-Konformität als auch Compliance mit anderen internationalen Standards gewährleisten, ohne die operative Effizienz zu beeinträchtigen.\n\n🌍 Global Regulatory Harmonization Strategies:\n• Multi-Jurisdiction Compliance Mapping: Systematische Analyse und Harmonisierung von Security-Requirements über verschiedene Rechtssysteme (EU CRA, US NIST, ISO 27001, etc.).\n• Adaptive Security Frameworks: Entwicklung flexibler Security-Architekturen, die sich an verschiedene regulatorische Kontexte anpassen können ohne fundamentale Änderungen.\n• Regional Center of Excellence: Etablierung spezialisierter Teams für verschiedene Regulatory-Regions mit lokaler Expertise und globaler Koordination.\n• Cross-Border Data Governance: Implementation von Data-Governance-Frameworks, die internationale Datenübertragung bei gleichzeitiger Multi-Jurisdiction-Compliance ermöglichen.\n\n🏢 Organizational Scaling Mechanisms:\n• Hub-and-Spoke Security Architecture: Zentrale Security-by-Design-Standards mit lokalen Implementierungsanpassungen für regionale Anforderungen.\n• Global Security Talent Network: Aufbau internationaler Teams mit spezialisierten Kenntnissen verschiedener Regulatory-Frameworks.\n• Shared Security Services: Entwicklung wiederverwendbarer Security-Components und -Services, die global deployiert aber lokal angepasst werden können.\n• Cross-Cultural Security Training: Programme zur Standardisierung von Security-by-Design-Practices über verschiedene Unternehmenskulturen und Länder hinweg.\n\n🎯 ADVISORI's Global Scaling Support:\n• Multi-Regulatory Strategy Development: Beratung zur Entwicklung kohärenter Security-Strategien, die multiple Regulatory-Frameworks effizient adressieren.\n• Global Implementation Roadmaps: Entwicklung phasierter Rollout-Pläne für weltweite Security-by-Design-Implementierung mit regionalen Anpassungen.\n• Cross-Border Compliance Optimization: Strategien zur Minimierung von Compliance-Overhead bei maximaler regulatorischer Abdeckung und operativer Effizienz."
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
