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
    console.log('Updating ESG Due Diligence page with C-Level FAQs batch 2 (German)...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die zunehmende Komplexität von Supply Chain ESG Due Diligence und welche Auswirkungen hat das Lieferkettensorgfaltspflichtengesetz (LkSG) auf C-Level Entscheidungen?",
        answer: "Das deutsche Lieferkettensorgfaltspflichtengesetz (LkSG) und ähnliche internationale Regelungen haben Supply Chain ESG Due Diligence von einer freiwilligen Best Practice zu einer rechtlichen Verpflichtung transformiert. Für die C-Suite bedeutet dies fundamentale Änderungen in der strategischen Lieferantengestaltung und Risikomanagement-Architektur. ADVISORI entwickelt umfassende Lösungen, die nicht nur Compliance sicherstellen, sondern auch strategische Wettbewerbsvorteile durch resiliente und nachhaltige Lieferketten schaffen.\n\n⚖️ Regulatorische Imperative und C-Level Haftung:\n• Persönliche Haftungsrisiken: Geschäftsführer und Vorstände tragen persönliche Verantwortung für die Einhaltung des LkSG. Verstöße können zu erheblichen Bußgeldern (bis zu 2% des Jahresumsatzes) und Reputationsschäden führen.\n• Ausschluss von öffentlichen Aufträgen: Unternehmen, die gegen Sorgfaltspflichten verstoßen, können für bis zu drei Jahre von öffentlichen Ausschreibungen ausgeschlossen werden, was erhebliche Umsatzeinbußen bedeuten kann.\n• Internationale Compliance-Harmonisierung: Koordination verschiedener nationaler Gesetze (LkSG, französisches Vigilance Law, EU-Directive on Corporate Sustainability Due Diligence) erfordert strategische Abstimmung.\n• Stakeholder-Erwartungen und ESG-Ratings: Investoren, Kunden und NGOs bewerten Unternehmen zunehmend nach ihrer Supply Chain ESG Performance.\n\n🔗 ADVISORI's Supply Chain ESG Due Diligence Framework:\n• Multi-Tier Supplier Mapping und Risk Assessment: Systematische Identifikation und Bewertung von ESG-Risiken über mehrere Lieferkettenstufen hinweg, einschließlich indirekter Lieferanten und Subkontraktoren.\n• Digital Supply Chain Transparency Platform: Implementierung von Technologie-Lösungen für Real-Time-Monitoring von Lieferanten-ESG-Performance und automatisierte Risiko-Alerts.\n• Supplier ESG Development Programs: Entwicklung strukturierter Programme zur Unterstützung von Lieferanten bei der Verbesserung ihrer ESG-Performance, anstatt sie einfach auszuschließen.\n• Grievance Mechanisms und Remediation Processes: Etablierung effektiver Beschwerdemechanismen und Abhilfeprozesse, die den regulatorischen Anforderungen entsprechen und gleichzeitig praktikabel sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielen ESG-Daten und -Technologien in modernen Due Diligence Prozessen und wie stellt ADVISORI Datenqualität und -integrität sicher?",
        answer: "In der datengetriebenen ESG-Landschaft sind qualitativ hochwertige, verifizierbare ESG-Daten das Fundament für fundierte Investitions- und Geschäftsentscheidungen. Die Herausforderung liegt jedoch in der Fragmentierung, Inkonsistenz und teilweisen Unzuverlässigkeit verfügbarer ESG-Daten. ADVISORI adressiert diese Herausforderungen durch innovative Datenintegrations- und Validierungsansätze, die Entscheidungsträgern vertrauenswürdige und handlungsrelevante ESG-Insights liefern.\n\n📊 ESG Data Challenges und C-Level Impact:\n• Data Fragmentation und Standardisierung: Unterschiedliche ESG-Rating-Agenturen verwenden verschiedene Methodiken und kommen zu divergierenden Bewertungen desselben Unternehmens, was Vergleichbarkeit und Entscheidungsfindung erschwert.\n• Greenwashing Detection: Identifikation von Diskrepanzen zwischen berichteten ESG-Metriken und tatsächlicher Performance erfordert sophisticated Analysemethoden und unabhängige Verifikation.\n• Forward-Looking ESG Intelligence: Traditionelle ESG-Daten sind oft historisch und bieten begrenzte Einblicke in zukünftige ESG-Risiken und -Chancen.\n• Real-Time Monitoring Anforderungen: Dynamische Risikosituationen (z.B. Umweltkatastrophen, soziale Unruhen, Governance-Skandale) erfordern kontinuierliche Überwachung und schnelle Reaktionsfähigkeit.\n\n🔍 ADVISORI's ESG Data Intelligence Platform:\n• Multi-Source Data Integration: Systematische Integration von Daten aus verschiedenen Quellen (ESG-Rating-Agenturen, Satellitendaten, Social Media Sentiment, Regulatory Filings, On-Site Assessments) zu einem kohärenten Gesamtbild.\n• AI-Enhanced Data Validation: Nutzung von Machine Learning Algorithmen zur automatisierten Identifikation von Dateninkonsistenzen, Anomalien und potenziellen Greenwashing-Indikatoren.\n• Proprietary ESG Scoring Models: Entwicklung maßgeschneiderter ESG-Bewertungsmodelle, die branchenspezifische Risiken und Ihre Geschäftsprioritäten berücksichtigen, anstatt sich ausschließlich auf Standardratings zu verlassen.\n• Predictive ESG Analytics: Anwendung fortschrittlicher Analysetechniken zur Vorhersage zukünftiger ESG-Trends und deren potenzielle Auswirkungen auf Geschäftsperformance und Investitionsrenditen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Angesichts steigender Klimarisiken und Net-Zero-Commitments – wie integriert ADVISORI Klimawandel-bezogene Due Diligence in strategische Geschäftsentscheidungen?",
        answer: "Klimawandel-bezogene Risiken und Chancen sind zu einem zentralen Faktor für langfristige Geschäftsstabilität und Wertschöpfung geworden. Die zunehmenden physischen Risiken (Extremwetterereignisse, Meerespiegelanstieg) und Transitionsrisiken (Policy-Änderungen, Technologiewandel, Marktverschiebungen) erfordern eine fundamentale Neubetrachtung von Geschäftsmodellen und Investitionsstrategien. ADVISORI entwickelt climate-informed Due Diligence Frameworks, die diese Komplexität in strategische Entscheidungshilfen übersetzen.\n\n🌡️ Climate Risk Integration in C-Level Decision Making:\n• Physical Risk Assessment: Systematische Bewertung der Vulnerabilität von Geschäftsstandorten, Lieferketten und Assets gegenüber klimabedingten physischen Risiken durch Szenariomodellierung und Geographic Risk Mapping.\n• Transition Risk Quantification: Analyse der finanziellen Auswirkungen von Climate Policy Changes, Technologiedisruptionen und sich wandelnden Konsumentenpräferenzen auf bestehende Geschäftsmodelle und Investitionen.\n• Net-Zero Pathway Planning: Entwicklung wissenschaftsbasierter Dekarbonisierungsstrategien, die mit Paris-Agreement-Zielen kompatibel sind und gleichzeitig wirtschaftliche Viabilität sicherstellen.\n• Climate Opportunity Identification: Systematische Identifikation von Geschäftschancen, die sich aus der Klimatransition ergeben, von Clean Tech Investments bis zu neuen Marktchancen in grünen Sektoren.\n\n🔬 ADVISORI's Climate Due Diligence Methodology:\n• TCFD-Aligned Risk Assessment: Vollständige Integration der Task Force on Climate-related Financial Disclosures (TCFD) Empfehlungen in Due Diligence Prozesse, um Governance, Strategie, Risk Management und Metriken & Targets systematisch zu bewerten.\n• Scenario-Based Climate Modeling: Anwendung verschiedener Klimaszenarien (1.5°C, 2°C, 3°C+ Erwärmung) zur Bewertung der Resilienz von Geschäftsmodellen und Investitionen unter verschiedenen klimatischen Entwicklungspfaden.\n• Carbon Footprint und Scope 3 Assessment: Umfassende Analyse der direkten und indirekten CO2-Emissionen, einschließlich komplexer Scope 3 Emissionen entlang der gesamten Wertschöpfungskette.\n• Climate Technology Readiness Evaluation: Bewertung der Bereitschaft von Unternehmen für Climate Tech Adoption und deren Potenzial zur Erschließung neuer grüner Geschäftsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie stellt ADVISORI sicher, dass ESG Due Diligence nicht nur Risiken identifiziert, sondern auch konkrete, umsetzbare Handlungsempfehlungen für nachhaltige Performance-Steigerung liefert?",
        answer: "Die wahre Wertschöpfung von ESG Due Diligence liegt nicht nur in der Identifikation von Risiken und Chancen, sondern in der Transformation dieser Erkenntnisse in konkrete, umsetzbare Strategien für nachhaltige Performance-Verbesserung. ADVISORI geht über traditionelle Assessment-Ansätze hinaus und entwickelt comprehensive Action Plans, die ESG-Performance systematisch in Business Value übersetzen und langfristige Wettbewerbsvorteile schaffen.\n\n🎯 Von Assessment zu Action: ADVISORI's Umsetzungsphilosophie:\n• Materiality-Driven Prioritization: Fokussierung auf ESG-Faktoren mit dem höchsten Business Impact und der größten Stakeholder-Relevanz, um Ressourcen optimal zu allokieren und maximale Wirkung zu erzielen.\n• Quick Wins vs. Long-Term Transformation: Strukturierte Balance zwischen kurzfristig realisierbaren Verbesserungen und langfristigen strategischen Transformationsinitiativen.\n• Business Case Development: Quantifizierung des ROI für jede ESG-Initiative, einschließlich Kosteneinsparungen, Umsatzpotenziale, Risikominderung und Reputationsvorteile.\n• Stakeholder Alignment und Change Management: Entwicklung umfassender Change Management Strategien, die alle relevanten internen und externen Stakeholder in den Transformationsprozess einbeziehen.\n\n🚀 ADVISORI's Action-Oriented ESG Framework:\n• ESG Performance Roadmap Development: Erstellung detaillierter, zeitgebundener Roadmaps mit klaren Meilensteinen, Verantwortlichkeiten und Success Metrics für jeden ESG-Verbesserungsbereich.\n• Integration in Business Strategy: Seamlose Einbettung von ESG-Zielen in bestehende Geschäftsstrategien, KPIs und Incentive-Systeme, um Alignment und Accountability sicherzustellen.\n• Technology Enablement: Identifikation und Implementierung von ESG-Tech-Lösungen (ESG-Management-Plattformen, Sustainability-Analytics, Automated Reporting Tools), die operative Effizienz steigern.\n• Continuous Improvement Cycles: Etablierung systematischer Review- und Optimierungsprozesse, die sicherstellen, dass ESG-Initiativen kontinuierlich an sich ändernde Anforderungen und Marktbedingungen angepasst werden."
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
