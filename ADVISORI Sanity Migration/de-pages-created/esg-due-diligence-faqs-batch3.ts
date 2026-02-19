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
    console.log('Updating ESG Due Diligence page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-due-diligence' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-due-diligence" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie navigiert ADVISORI die komplexen Stakeholder-Dynamiken in ESG Due Diligence Prozessen und stellt sicher, dass unterschiedliche Erwartungen optimal berücksichtigt werden?",
        answer: "ESG Due Diligence ist inherent ein Multi-Stakeholder-Prozess, bei dem divergierende Interessen und Erwartungen von Investoren, Kunden, Mitarbeitern, Regulatoren und der Gesellschaft in Einklang gebracht werden müssen. Für die C-Suite bedeutet dies die Herausforderung, komplexe Stakeholder-Landschaften zu verstehen und strategische Entscheidungen zu treffen, die verschiedene Interessensgruppen zufriedenstellen, ohne die Geschäftsstrategie zu kompromittieren. ADVISORI entwickelt sophisticated Stakeholder-Management-Frameworks, die diese Komplexität in handhabbare, strategische Lösungen übersetzen.\n\n🎭 Stakeholder Complexity Management:\n• Multi-Dimensional Stakeholder Mapping: Systematische Identifikation und Priorisierung aller relevanten Stakeholder-Gruppen basierend auf ihrer Einflussstärke, ESG-Relevanz und strategischen Bedeutung für das Unternehmen.\n• Expectation Gap Analysis: Detaillierte Analyse der ESG-Erwartungen verschiedener Stakeholder-Gruppen und Identifikation von Konvergenz- und Divergenzpunkten, um strategische Handlungsprioritäten zu definieren.\n• Materiality Assessment Integration: Verbindung von Stakeholder-Erwartungen mit Materiality-Bewertungen, um ESG-Fokusgebiete zu identifizieren, die sowohl geschäftskritisch als auch stakeholder-relevant sind.\n• Conflicting Interest Resolution: Entwicklung von Frameworks zur systematischen Auflösung von Interessenskonflikten zwischen verschiedenen Stakeholder-Gruppen durch Win-Win-Lösungsansätze.\n\n🤝 ADVISORI's Stakeholder-Centric ESG Framework:\n• Dynamic Stakeholder Engagement Strategies: Entwicklung maßgeschneiderter Engagement-Ansätze für verschiedene Stakeholder-Gruppen, die deren spezifische ESG-Prioritäten und Kommunikationspräferenzen berücksichtigen.\n• Stakeholder Value Creation Models: Analyse und Optimierung der Wertschöpfung für verschiedene Stakeholder-Gruppen durch ESG-Initiativen, um langfristige Loyalität und Unterstützung zu sichern.\n• Transparent Communication Frameworks: Entwicklung differenzierter Kommunikationsstrategien, die ESG-Performance und -Fortschritte stakeholder-spezifisch aufbereiten und vermitteln.\n• Stakeholder Feedback Integration Mechanisms: Etablierung systematischer Prozesse zur kontinuierlichen Erfassung und Integration von Stakeholder-Feedback in ESG-Strategien und Due Diligence Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt die Integration von ESG Due Diligence in M&A-Transaktionen und wie beeinflusst dies Unternehmensbewertungen und Deal-Strukturen?",
        answer: "ESG-Faktoren haben sich von Nice-to-Have zu Deal-Breakern in M&A-Transaktionen entwickelt. Die Integration von ESG Due Diligence in M&A-Prozesse ist nicht nur zur Risikominimierung erforderlich, sondern auch zur Identifikation von Wertschöpfungspotenzialen und zur Optimierung von Deal-Strukturen. ADVISORI entwickelt integrierte ESG-M&A-Frameworks, die ESG-Bewertungen nahtlos in traditionelle Due Diligence Prozesse einbetten und deren Ergebnisse direkt in Transaktionsstrukturen und Post-Merger-Integration-Pläne übersetzen.\n\n💼 ESG Impact auf M&A Deal Economics:\n• Valuation Adjustments: ESG-Risiken und -Chancen führen zu direkten Bewertungsanpassungen. Positive ESG-Performance kann zu Bewertungsprämien von 10-20% führen, während ESG-Risiken entsprechende Abschläge zur Folge haben.\n• Deal Structure Optimization: ESG-Erkenntnisse beeinflussen Deal-Strukturen, von Earn-Out-Mechanismen, die an ESG-Performance gekoppelt sind, bis zu Indemnity-Klauseln für ESG-bezogene Risiken.\n• Financing Considerations: ESG-konforme Targets erhalten besseren Zugang zu nachhaltigen Finanzierungsoptionen (Green Bonds, Sustainability-Linked Loans), was Deal-Finanzierung und Post-Transaction-Kapitalkosten optimiert.\n• Regulatory Approval Acceleration: Starke ESG-Performance kann regulatorische Genehmigungsprozesse beschleunigen und das Risiko von behördlichen Eingriffen reduzieren.\n\n🔍 ADVISORI's ESG-M&A Integration Methodology:\n• Pre-Deal ESG Screening: Entwicklung von ESG-Screening-Kriterien für Target-Identifikation und -Evaluation, um ESG-inkompatible Targets frühzeitig zu identifizieren und Ressourcen zu schonen.\n• Integrated ESG-Financial Due Diligence: Nahtlose Integration von ESG-Bewertungen in traditionelle Commercial, Financial und Legal Due Diligence, um ganzheitliche Target-Bewertungen zu ermöglichen.\n• ESG Value Creation Planning: Entwicklung detaillierter Post-Merger ESG-Integration-Pläne, die Synergien zwischen Acquirer und Target ESG-Strategien identifizieren und realisieren.\n• ESG-Driven Deal Protection: Strukturierung von ESG-bezogenen Representations, Warranties und Indemnities, um Acquirer gegen unentdeckte ESG-Risiken zu schützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Angesichts der zunehmenden Bedeutung von Social Impact und sozialer Nachhaltigkeit – wie bewertet ADVISORI soziale Faktoren in ESG Due Diligence und deren Auswirkungen auf Business Performance?",
        answer: "Soziale Faktoren (Social) sind oft die komplexesten und schwer quantifizierbaren Aspekte von ESG, gewinnen jedoch zunehmend an Bedeutung für langfristige Geschäftsstabilität und Stakeholder-Vertrauen. Von Diversity & Inclusion über Human Rights bis zu Community Impact – soziale Nachhaltigkeit beeinflusst direkt Talentakquisition, Kundenloyalität und operative Exzellenz. ADVISORI entwickelt sophisticated Social Impact Assessment Frameworks, die soziale Faktoren systematisch bewerten und deren Business Impact quantifizieren.\n\n👥 Social Factor Complexity und Business Relevance:\n• Human Capital Management: Bewertung von Talent-Strategien, Diversity-Programmen, Employee Engagement und Retention-Raten als Indikatoren für organisationale Resilienz und Innovationsfähigkeit.\n• Community Relations und Social License to Operate: Analyse der Beziehungen zu lokalen Gemeinschaften und deren Einfluss auf operative Kontinuität, Reputationsrisiken und Wachstumsmöglichkeiten.\n• Supply Chain Labor Practices: Bewertung von Arbeitsbedingungen und Menschenrechts-Compliance entlang der gesamten Lieferkette als Risikofaktor für Reputationsschäden und regulatorische Sanctions.\n• Product Impact und Social Value Creation: Analyse der sozialen Auswirkungen von Produkten und Dienstleistungen und deren Beitrag zu gesellschaftlichen Herausforderungen als Differenzierungsmerkmal am Markt.\n\n📊 ADVISORI's Social Impact Assessment Framework:\n• Quantitative Social Metrics Development: Entwicklung messbarer KPIs für soziale Performance, von Employee Net Promoter Scores bis zu Community Investment Returns, um soziale Faktoren in Business-Sprache zu übersetzen.\n• Social Risk Materiality Matrix: Systematische Bewertung sozialer Risiken nach ihrer Eintrittswahrscheinlichkeit und potenziellen Business Impact, um Prioritäten für Social Due Diligence zu setzen.\n• Stakeholder Social Impact Analysis: Bewertung der sozialen Auswirkungen auf verschiedene Stakeholder-Gruppen und deren Rückwirkungen auf Geschäftsperformance und Reputation.\n• Social Innovation Opportunity Identification: Identifikation von Geschäftschancen durch Social Innovation, von Purpose-Driven Products bis zu Impact Business Models, die soziale und finanzielle Returns kombinieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie unterstützt ADVISORI Unternehmen dabei, ESG Due Diligence nicht nur für externe Investments, sondern auch für interne strategische Entscheidungen und Portfolio-Optimierung zu nutzen?",
        answer: "ESG Due Diligence sollte nicht auf externe Investitions- oder M&A-Entscheidungen beschränkt bleiben, sondern als strategisches Tool für kontinuierliche Portfolio-Optimierung und interne Geschäftsentscheidungen genutzt werden. ADVISORI entwickelt Internal ESG Due Diligence Frameworks, die Unternehmen dabei unterstützen, ihre bestehenden Geschäftseinheiten, Produkte und Märkte systematisch unter ESG-Gesichtspunkten zu bewerten und zu optimieren.\n\n🏢 Internal ESG Portfolio Assessment:\n• Business Unit ESG Performance Evaluation: Systematische Bewertung der ESG-Performance verschiedener Geschäftseinheiten, um High-Performer zu identifizieren und Best Practices zu skalieren sowie Underperformer zu transformieren oder zu divest.\n• Product Portfolio ESG Screening: Analyse des gesamten Produktportfolios unter ESG-Gesichtspunkten, um zukunftsfähige, nachhaltige Produkte zu identifizieren und Legacy-Produkte strategisch zu managen.\n• Market Entry ESG Risk Assessment: Integration von ESG-Faktoren in geografische Expansions- und neue Markt-Entry-Entscheidungen, um regulatorische, reputations- und operative Risiken zu minimieren.\n• Investment Priority ESG Alignment: Bewertung geplanter Investitionen und Capex-Allokationen auf ihre ESG-Kompatibilität und langfristige Nachhaltigkeit.\n\n🎯 ADVISORI's Internal ESG Optimization Framework:\n• ESG-Based Resource Allocation Models: Entwicklung von Entscheidungsmodellen, die ESG-Kriterien in Budgetierung, Ressourcenallokation und strategische Prioritätensetzung integrieren.\n• Internal ESG Benchmarking und Performance Tracking: Etablierung von internen ESG-Benchmarks und Performance-Tracking-Systemen, die kontinuierliche Verbesserung und Best Practice Sharing zwischen Geschäftseinheiten ermöglichen.\n• ESG-Driven Innovation Pipeline: Integration von ESG-Kriterien in Innovationsprozesse und F&E-Strategien, um zukunftsfähige, nachhaltige Produktentwicklung zu fördern.\n• Strategic ESG Transformation Roadmaps: Entwicklung langfristiger Transformationsstrategien, die das gesamte Unternehmensportfolio systematisch in Richtung nachhaltiger, ESG-konformer Geschäftsmodelle entwickeln."
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
