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
    console.log('Updating ESG Governance page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie unterstützt ADVISORI bei der Entwicklung von ESG-Performance-Measurement-Systemen und welche KPIs sind für C-Level-Führungskräfte besonders relevant?",
        answer: "Effektive ESG-Performance-Measurement-Systeme sind das Rückgrat einer datengetriebenen Nachhaltigkeitsstrategie und ermöglichen es C-Level-Führungskräften, ESG-Fortschritte zu quantifizieren, zu steuern und zu kommunizieren. ADVISORI entwickelt comprehensive Performance-Management-Frameworks, die sowohl quantitative als auch qualitative ESG-Indikatoren integrieren und dabei Stakeholder-Erwartungen mit strategischen Geschäftszielen verknüpfen.\n\n📊 Strategische KPI-Kategorien für C-Level-Steuerung:\n• Financial-Impact-Metriken: ROI von ESG-Investitionen, ESG-bezogene Kosteneinsparungen, Green-Revenue-Anteile und ESG-attributable EBITDA-Verbesserungen für direkte finanzielle Steuerung.\n• Operational-Excellence-Indikatoren: Ressourceneffizienz-Kennzahlen, Carbon-Intensity-Ratios, Waste-to-Landfill-Reduktion und Supply-Chain-Sustainability-Scores für operative Optimierung.\n• Stakeholder-Value-Metriken: Customer-Satisfaction-Scores bezüglich Nachhaltigkeit, Employee-Engagement in ESG-Initiativen und Investor-ESG-Rating-Entwicklung.\n• Risk-und-Compliance-Indikatoren: ESG-Compliance-Rate, Anzahl ESG-bezogener Incidents, Regulatory-Preparedness-Index und Reputation-Risk-Scores.\n\n🎯 ADVISORI's Performance-Management-Excellence-Ansatz:\n• Materiality-driven KPI-Selection: Systematische Auswahl von Kennzahlen basierend auf Wesentlichkeitsanalysen, die sowohl Business-Impact als auch Stakeholder-Relevanz berücksichtigen.\n• Integrated-Reporting-Frameworks: Entwicklung von KPI-Dashboards, die ESG-Performance nahtlos in bestehende Business-Intelligence-Systeme und Management-Reports integrieren.\n• Benchmarking und Target-Setting: Etablierung ambitionierter aber realistischer ESG-Ziele durch systematischen Vergleich mit Best-in-Class-Unternehmen und Science-based-Targets.\n• Real-time-Monitoring und Predictive-Analytics: Implementierung von Systemen, die nicht nur aktuelle Performance messen, sondern auch zukünftige Trends und Risiken prognostizieren.\n• Board-Level-Reporting und Executive-Scorecards: Entwicklung prägnanter, entscheidungsrelevanter ESG-Reports für Board-Meetings und Executive-Reviews."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt Supply-Chain-ESG-Governance bei der Gesamtstrategie und wie hilft ADVISORI bei der Implementierung nachhaltiger Lieferkettenmanagement-Systeme?",
        answer: "Supply-Chain-ESG-Governance ist ein kritischer Hebel für die Gesamtnachhaltigkeitsstrategie, da moderne Lieferketten oft 60-80% der Umwelt- und Sozialauswirkungen von Unternehmen verursachen. ADVISORI entwickelt end-to-end Supply-Chain-Sustainability-Systeme, die Transparenz schaffen, Risiken minimieren und Wertschöpfungschancen entlang der gesamten Wertschöpfungskette identifizieren und realisieren.\n\n🔗 Strategische Supply-Chain-ESG-Integration:\n• Supplier-ESG-Assessment und -Rating: Entwicklung comprehensive Bewertungssysteme für Lieferanten, die ESG-Performance systematisch messen und in Beschaffungsentscheidungen integrieren.\n• Risk-Management entlang der Lieferkette: Implementierung von Early-Warning-Systemen für ESG-Risiken in der Supply Chain, von Menschenrechtsverletzungen bis zu Umweltkatastrophen.\n• Circular-Economy-Integration: Design von Kreislaufwirtschafts-Ansätzen, die Ressourceneffizienz maximieren und Abfall minimieren durch innovative Supply-Chain-Modelle.\n• Collaborative-Sustainability-Programs: Entwicklung von Partnerschafts- und Entwicklungsprogrammen, die Lieferanten bei der Verbesserung ihrer ESG-Performance unterstützen.\n\n🌍 ADVISORI's Supply-Chain-Transformation-Methodology:\n• End-to-End-Mapping und Impact-Assessment: Comprehensive Analyse der gesamten Wertschöpfungskette zur Identifikation von ESG-Hotspots und Optimierungspotenzialen.\n• Technology-Enabled-Transparency: Implementierung digitaler Lösungen wie Blockchain, IoT und AI für Real-time-Monitoring und Traceability von ESG-Performance in der Supply Chain.\n• Supplier-Development und Capability-Building: Design und Implementierung von Programmen, die Lieferanten befähigen, ESG-Standards zu erfüllen und kontinuierlich zu verbessern.\n• Multi-Tier-Supply-Chain-Governance: Entwicklung von Governance-Systemen, die nicht nur direkte, sondern auch indirekte Lieferanten in ESG-Management einbeziehen.\n• Crisis-Management und Business-Continuity: Etablierung robuster Systeme für das Management von ESG-bezogenen Supply-Chain-Störungen und die Sicherstellung nachhaltiger Geschäftskontinuität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert ADVISORI die Herausforderungen der ESG-Datenqualität und -verfügbarkeit für eine reliable Governance und Entscheidungsfindung?",
        answer: "ESG-Datenqualität und -verfügbarkeit sind fundamentale Herausforderungen für effektive ESG-Governance, da reliable Entscheidungsfindung von accurate, timely und comprehensive Daten abhängt. ADVISORI entwickelt robuste Data-Governance-Frameworks, die systematisch ESG-Datenqualität verbessern, Datenlücken schließen und dabei sowohl interne als auch externe Datenquellen intelligent integrieren.\n\n📈 Datenqualitäts-Herausforderungen und Lösungsansätze:\n• Data-Standardization und -Harmonization: Entwicklung einheitlicher ESG-Datenstandards und -definitionen across verschiedene Geschäftsbereiche und Reporting-Systeme.\n• Automated-Data-Collection und -Validation: Implementierung automatisierter Systeme, die ESG-Daten direkt aus operativen Systemen extrahieren und dabei Datenqualität in Echtzeit validieren.\n• Third-Party-Data-Integration: Strategische Integration externer Datenquellen (Satellitenbilder, IoT-Sensoren, Supplier-Datenbanken) zur Ergänzung interner Datenbestände.\n• Audit-Trail und Data-Lineage: Etablierung comprehensive Nachverfolgbarkeit von ESG-Daten für Compliance, Audit-Zwecke und Stakeholder-Transparenz.\n\n🔍 ADVISORI's Data-Excellence-Framework:\n• Data-Maturity-Assessment: Systematische Bewertung der aktuellen ESG-Datenlandschaft, -qualität und -kapazitäten zur Identifikation von Verbesserungspotenzialen.\n• Master-Data-Management für ESG: Entwicklung zentraler ESG-Data-Repositories mit definierten Data-Ownership, -Governance und -Quality-Standards.\n• Predictive-Data-Analytics: Einsatz fortgeschrittener Analytik und Machine Learning zur Schätzung fehlender Daten und Vorhersage zukünftiger ESG-Trends.\n• Data-Visualization und Executive-Dashboards: Transformation komplexer ESG-Datenbestände in intuitive, entscheidungsrelevante Visualisierungen für C-Level-Führungskräfte.\n• Continuous-Data-Quality-Monitoring: Implementierung von KPIs und Alerting-Systemen, die Datenqualität kontinuierlich überwachen und Verbesserungen sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie unterstützt ADVISORI bei der Integration von ESG-Governance in Mergers & Acquisitions (M&A) und andere strategische Transaktionen?",
        answer: "ESG-Integration in M&A und strategische Transaktionen wird zunehmend geschäftskritisch, da ESG-Faktoren sowohl Deal-Value als auch Post-Merger-Integration-Erfolg erheblich beeinflussen. ADVISORI entwickelt comprehensive ESG-Due-Diligence-Frameworks und Integration-Strategien, die ESG-Risiken und -Opportunitäten systematisch in Transaktionsprozesse einbeziehen und dabei Wertschöpfung maximieren.\n\n🎯 ESG-Integration in Transaction-Lifecycle:\n• ESG-Due-Diligence und Risk-Assessment: Comprehensive Bewertung von ESG-Risiken und -Opportunitäten des Target-Unternehmens, einschließlich Hidden-ESG-Liabilities und Stranded-Assets-Risiken.\n• Valuation-Impact-Analysis: Quantifizierung der Auswirkungen von ESG-Faktoren auf Deal-Valuation, Cash-Flow-Projektionen und Synergy-Realisierung.\n• Integration-Planning für ESG-Systeme: Entwicklung detaillierter Pläne für die Harmonisierung von ESG-Governance-Strukturen, -Prozessen und -Systemen post-closing.\n• Stakeholder-Communication-Strategy: Management von ESG-bezogener Kommunikation mit Investoren, Regulatoren und anderen Stakeholdern während und nach Transaktionen.\n\n⚡ ADVISORI's M&A-ESG-Excellence-Approach:\n• ESG-Red-Flag-Identification: Entwicklung spezialisierter Screening-Prozesse zur frühzeitigen Identifikation kritischer ESG-Issues, die Deal-Breaker sein könnten.\n• Synergy-Quantification: Systematische Analyse von ESG-basierten Synergiepotenzialen, von Operational-Efficiency-Gains bis zu Enhanced-Market-Positioning.\n• Day-1-Readiness für ESG-Integration: Entwicklung von Action-Plans, die sicherstellen, dass ESG-Governance-Standards vom ersten Tag der Integration an aufrechterhalten werden.\n• Cultural-Integration und Change-Management: Design von Programmen, die verschiedene ESG-Kulturen erfolgreich integrieren und gemeinsame Nachhaltigkeitsvision etablieren.\n• Post-Merger-ESG-Performance-Tracking: Implementierung von Monitoring-Systemen, die ESG-Integration-Success messen und kontinuierliche Optimierung ermöglichen."
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
