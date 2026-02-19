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
    console.log('Updating CIS Controls Kontrolle & Reifegradbewertung page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-kontrolle-reifegradbewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-kontrolle-reifegradbewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie gewährleistet ADVISORI, dass unsere CIS Controls Reifegradbewertung auch die strategischen Auswirkungen auf Mergers & Acquisitions und Unternehmensbewertungen berücksichtigt?",
        answer: "Cybersecurity-Reife ist zunehmend ein entscheidender Faktor bei M&A-Transaktionen und Unternehmensbewertungen. Eine robuste CIS Controls Implementierung kann den Unternehmenswert erheblich steigern, während Cybersecurity-Schwächen zu Deal-Breaks oder signifikanten Bewertungsabschlägen führen können. ADVISORI integriert M&A-Perspektiven systematisch in die CIS Controls Reifegradbewertung und bereitet Unternehmen auf transaktionsrelevante Cybersecurity Due Diligence vor.\n\n🎯 M&A-orientierte CIS Controls Assessment:\n• Transaction Readiness Evaluation: Bewertung der CIS Controls Reife aus der Perspektive potenzieller Acquirer und Identifikation von Deal-relevanten Cybersecurity-Assets und -Risiken.\n• Due Diligence Preparedness: Strukturierung der CIS Controls Dokumentation und Metriken für effiziente und positive Cybersecurity Due Diligence Prozesse.\n• Valuation Impact Analysis: Quantifizierung des Wertbeitrags überlegener CIS Controls Reife zur Unternehmensbewertung und zum strategischen Value Proposition.\n• Integration Risk Assessment: Bewertung der Cybersecurity-Integrationsrisiken bei M&A-Transaktionen und Entwicklung von Post-Merger Integration Strategien.\n\n💼 Strategische Value Creation:\n• Cybersecurity as Competitive Differentiator: Positionierung überlegener CIS Controls Reife als strategischen Wettbewerbsvorteil in M&A-Szenarien und Investoren-Kommunikation.\n• Regulatory Synergies: Identifikation von Compliance-Synergien durch standardisierte CIS Controls Implementation bei Multi-Entity-Strukturen.\n• Digital Asset Protection: Bewertung der CIS Controls Wirksamkeit beim Schutz kritischer digitaler Assets und Intellectual Property für M&A-Kontexte.\n• Post-Transaction Cybersecurity Optimization: Strategien zur Harmonisierung und Optimierung der CIS Controls über verschiedene Unternehmenseinheiten hinweg nach Transaktionsabschluss."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche spezifischen Metriken und Dashboards entwickelt ADVISORI für die kontinuierliche C-Level-Überwachung der CIS Controls Performance und strategischen Cybersecurity-KPIs?",
        answer: "Effektive C-Level-Governance erfordert präzise, handlungsrelevante Metriken, die komplexe CIS Controls Performance in strategisch verständliche Insights transformieren. ADVISORI entwickelt maßgeschneiderte Executive Dashboards und KPI-Frameworks, die der C-Suite kontinuierliche Transparenz über die Cybersecurity-Posture bieten und evidenzbasierte strategische Entscheidungen ermöglichen.\n\n📊 Executive-Level CIS Controls Dashboards:\n• Cybersecurity Health Score: Aggregierte Metrik, die die Gesamtperformance aller 18 CIS Controls in einem einzigen, C-Level-verständlichen Score zusammenfasst.\n• Risk Exposure Trends: Visualisierung der zeitlichen Entwicklung des Cyber-Risikos basierend auf CIS Controls Implementierung und aktueller Bedrohungslandschaft.\n• Investment Efficiency Metrics: ROI-Tracking für Cybersecurity-Investitionen mit direkter Zuordnung zu CIS Controls Verbesserungen und Risikoreduktion.\n• Compliance Posture Overview: Real-time Status der regulatorischen Compliance basierend auf CIS Controls Implementation.\n\n🎛️ Strategische Performance Indikatoren:\n• Business Impact Correlation: Metriken, die CIS Controls Performance direkt mit Business-Outcomes verknüpfen (z.B. System Availability, Customer Trust Metrics, Operational Efficiency).\n• Threat Mitigation Effectiveness: Bewertung der CIS Controls Wirksamkeit bei der Abwehr realer Bedrohungen und Minimierung von Incident Impact.\n• Competitive Cyber Positioning: Benchmarking der CIS Controls Reife gegen Branchenstandards und Wettbewerber-Performance.\n• Future Readiness Index: Bewertung der Anpassungsfähigkeit der aktuellen CIS Controls an emerging Threats und technologische Entwicklungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer integrierten ESG-Strategie, die CIS Controls als Baustein für nachhaltige und verantwortungsvolle Unternehmensführung positioniert?",
        answer: "Environmental, Social, and Governance (ESG) Kriterien gewinnen zunehmend an Bedeutung für Investoren, Stakeholder und regulatorische Bewertungen. Cybersecurity und CIS Controls spielen eine kritische Rolle in der Governance-Dimension von ESG und beeinflussen direkt die Nachhaltigkeitsbewertung von Unternehmen. ADVISORI integriert CIS Controls systematisch in umfassende ESG-Strategien und positioniert Cybersecurity als Enabler für verantwortungsvolle Unternehmensführung.\n\n🌱 ESG-integrierte CIS Controls Strategie:\n• Governance Excellence through Cybersecurity: Positionierung robuster CIS Controls als Demonstration überlegener Corporate Governance und Risk Management Capabilities.\n• Stakeholder Trust and Transparency: Nutzung der CIS Controls Reife zur Stärkung des Stakeholder-Vertrauens durch nachweisbare Cybersecurity-Verantwortung.\n• Sustainable Digital Transformation: Integration von Cybersecurity-Überlegungen in nachhaltige Digitalisierungsstrategien und verantwortungsvolle Technologie-Adoption.\n• Social Impact through Cyber Resilience: Bewertung der gesellschaftlichen Auswirkungen von Cybersecurity-Maßnahmen, insbesondere bei kritischen Infrastrukturen und systemrelevanten Services.\n\n📈 ESG-Reporting und Compliance Integration:\n• ESG-konforme Cybersecurity Metriken: Entwicklung von CIS Controls KPIs, die ESG-Reporting-Standards entsprechen und in Nachhaltigkeitsberichte integriert werden können.\n• Regulatory ESG Alignment: Sicherstellung, dass CIS Controls Implementation den steigenden ESG-Regulierungsanforderungen (EU Taxonomy, CSRD) entspricht.\n• Investor-Grade Cybersecurity Reporting: Aufbereitung der CIS Controls Performance für ESG-fokussierte Investoren und Rating-Agenturen.\n• Long-term Value Creation: Demonstration des langfristigen Wertbeitrags nachhaltiger Cybersecurity-Praktiken zur Unternehmensentwicklung und Stakeholder-Value."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristige Partnerschaftsstrategie verfolgt ADVISORI zur kontinuierlichen Weiterentwicklung und Optimierung unserer CIS Controls Reife über mehrere Jahre hinweg?",
        answer: "Cybersecurity-Exzellenz ist ein kontinuierlicher Journey, kein einmaliges Projekt. ADVISORI entwickelt langfristige Partnerschaftsmodelle, die über traditionelle Beratungsengagements hinausgehen und eine strategische Allianz für kontinuierliche CIS Controls Optimierung und Cybersecurity-Innovation schaffen. Für die C-Suite bedeutet dies einen verlässlichen, strategischen Partner für die langfristige Cybersecurity-Transformation.\n\n🤝 Strategische Langzeit-Partnerschaft:\n• Cyber Maturity Journey Roadmap: Entwicklung mehrjähriger CIS Controls Entwicklungspläne mit klaren Meilensteinen, Erfolgskriterien und kontinuierlichen Anpassungsmechanismen.\n• Adaptive Partnership Model: Flexible Partnerschaftsstrukturen, die sich an verändernde Geschäftsanforderungen, Bedrohungslandschaften und technologische Entwicklungen anpassen.\n• Innovation Co-Development: Gemeinsame Entwicklung neuer Cybersecurity-Ansätze und -Technologien, die speziell auf Ihre Branche und Geschäftsmodell zugeschnitten sind.\n• Executive Advisory Services: Kontinuierliche strategische Beratung der C-Suite bei cybersecurity-relevanten Geschäftsentscheidungen und Investitionsplanungen.\n\n🔄 Kontinuierliche Optimierung und Innovation:\n• Quarterly Business Reviews: Regelmäßige strategische Reviews der CIS Controls Performance mit der C-Suite zur Bewertung des Fortschritts und Anpassung der Strategien.\n• Threat Intelligence Integration: Kontinuierliche Integration aktueller Threat Intelligence in die CIS Controls Optimierung und proaktive Anpassung an neue Bedrohungen.\n• Technology Evolution Support: Unterstützung bei der Integration neuer Technologien und Geschäftsmodelle in die bestehende CIS Controls Architektur.\n• Knowledge Transfer und Capability Building: Systematischer Aufbau interner Cybersecurity-Kompetenzen und Befähigung zur eigenständigen CIS Controls Weiterentwicklung."
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
