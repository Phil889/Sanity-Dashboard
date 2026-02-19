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
    console.log('Updating NIS2 Supply Chain Security page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-supply-chain-security' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-supply-chain-security" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die Komplexität globaler Lieferketten im Kontext der NIS2-Richtlinie und welche spezifischen Herausforderungen bringt Multi-Jurisdictional Compliance mit sich?",
        answer: "Globale Lieferketten bringen einzigartige Komplexitäten mit sich, da verschiedene Rechtsräume unterschiedliche Cybersicherheitsanforderungen haben können. Die NIS2-Richtlinie muss dabei mit lokalen Gesetzen, GDPR, US-Regulierung und anderen internationalen Standards harmonisiert werden. ADVISORI entwickelt Compliance-Frameworks, die diese Multi-Jurisdictional-Herausforderungen systematisch adressieren und globale Lieferkettensicherheit gewährleisten.\n\n🌍 Globale Supply Chain Governance nach NIS2:\n• Cross-Border Compliance Mapping: Systematische Analyse und Harmonisierung verschiedener Rechtsräume und deren Cybersicherheitsanforderungen mit NIS2-Standards.\n• Unified Security Framework: Entwicklung einheitlicher Security-Standards, die gleichzeitig NIS2-Compliance und lokale Anforderungen in verschiedenen Märkten erfüllen.\n• Cultural Adaptation von Security Practices: Anpassung von Supply Chain Security-Maßnahmen an lokale Geschäftskulturen und Praktiken, ohne dabei die NIS2-Compliance zu gefährden.\n• Regional Risk Assessment: Bewertung geopolitischer und regulatorischer Risiken in verschiedenen Regionen und deren Auswirkungen auf die Lieferkettensicherheit.\n\n🔧 ADVISORI's Multi-Jurisdictional Compliance-Strategie:\n• Regulatory Convergence Analysis: Identifikation von Überschneidungen und Konflikten zwischen NIS2 und anderen internationalen Cybersicherheitsstandards.\n• Localized Implementation Roadmaps: Entwicklung regionsspezifischer Umsetzungspläne, die lokale Besonderheiten berücksichtigen, aber globale Konsistenz gewährleisten.\n• Cross-Border Incident Response: Etablierung von Verfahren für Supply Chain-Vorfälle, die mehrere Rechtsräume betreffen können.\n• Global Vendor Standardization: Schaffung einheitlicher Vendor Assessment-Kriterien, die in allen Betriebsregionen anwendbar sind und gleichzeitig höchste Sicherheitsstandards gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt Künstliche Intelligenz in der NIS2-Supply Chain Security und wie nutzt ADVISORI AI für predictive risk management und automated threat detection?",
        answer: "Künstliche Intelligenz revolutioniert die Art und Weise, wie Supply Chain Security überwacht, analysiert und gesteuert wird. Im Kontext der NIS2-Richtlinie ermöglicht AI nicht nur die Erfüllung der Compliance-Anforderungen, sondern auch die proaktive Identifikation und Mitigation von Risiken, bevor sie zu Sicherheitsvorfällen werden. ADVISORI implementiert cutting-edge AI-Lösungen, die Supply Chain Security von reaktiv zu prädiktiv transformieren.\n\n🤖 AI-powered Supply Chain Intelligence:\n• Predictive Risk Modeling: Einsatz von Machine Learning-Algorithmen zur Vorhersage von Supply Chain-Risiken basierend auf historischen Daten, Markttrends und externen Threat Intelligence.\n• Behavioral Analytics für Supplier Monitoring: Kontinuierliche Analyse des Verhaltens von Lieferanten zur Früherkennung von Anomalien, die auf Sicherheitsbedrohungen hindeuten könnten.\n• Automated Vulnerability Assessment: KI-gestützte Systeme zur automatischen Bewertung und Priorisierung von Schwachstellen in der gesamten Lieferkette.\n• Natural Language Processing für Contract Analysis: Automatisierte Analyse von Lieferantenverträgen zur Identifikation von Security-relevanten Klauseln und Compliance-Lücken.\n\n⚡ ADVISORI's AI-Integration für NIS2-Compliance:\n• Real-time Threat Correlation: Verknüpfung von Threat Intelligence aus verschiedenen Quellen zur sofortigen Bewertung von Auswirkungen auf Ihre Lieferkette.\n• Intelligent Incident Response: AI-gestützte Systeme zur automatischen Klassifizierung und Priorisierung von Supply Chain Security-Vorfällen.\n• Dynamic Risk Scoring: Kontinuierliche Neubewertung von Lieferantenrisiken basierend auf sich ändernden Bedrohungslagen und Marktbedingungen.\n• Automated Compliance Monitoring: KI-Systeme zur kontinuierlichen Überwachung der NIS2-Compliance aller Lieferanten und automatischen Erstellung von Compliance-Reports."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI die Integration von NIS2-Supply Chain Security mit bestehenden Enterprise Risk Management-Systemen und welche Synergien entstehen dabei?",
        answer: "Die Integration von NIS2-Supply Chain Security in bestehende Enterprise Risk Management (ERM)-Systeme ist entscheidend für eine ganzheitliche Unternehmensresilienz. ADVISORI entwickelt integrierte Ansätze, die Supply Chain Security nicht als isolierte Funktion betrachten, sondern als integralen Bestandteil der strategischen Risikosteuerung positionieren. Dies schafft Synergien, die sowohl Compliance-Effizienz als auch strategische Wertschöpfung maximieren.\n\n🔗 Holistische Risk Management Integration:\n• Unified Risk Taxonomy: Entwicklung einer einheitlichen Risikokategorisierung, die Supply Chain-Risiken nahtlos in Ihre bestehende ERM-Struktur integriert.\n• Cross-functional Risk Correlation: Analyse von Wechselwirkungen zwischen Supply Chain-Risiken und anderen Unternehmensrisiken wie operationellen, finanziellen oder strategischen Risiken.\n• Integrated Risk Reporting: Konsolidierung von Supply Chain Security-Metriken in bestehende Risk Dashboards und Management-Reports.\n• Strategic Risk Appetite Alignment: Abstimmung der Supply Chain Security-Strategien mit der übergeordneten Risikotoleranz und den Geschäftszielen des Unternehmens.\n\n📊 Synergien und Effizienzgewinne durch Integration:\n• Resource Optimization: Vermeidung von Doppelarbeiten durch gemeinsame Nutzung von Risk Assessment-Ressourcen und -Infrastrukturen.\n• Enhanced Decision Making: Verbesserung der strategischen Entscheidungsfindung durch ganzheitliche Sicht auf alle Unternehmensrisiken.\n• Streamlined Governance: Vereinfachung der Risk Governance durch einheitliche Prozesse und Verantwortlichkeiten.\n• Cost Synergies: Reduktion der Gesamtkosten für Risikomanagement durch effizientere Ressourcennutzung und gemeinsame Investitionen in Risk Management-Technologien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche spezifischen Messmethoden und KPIs entwickelt ADVISORI für die Bewertung der Effektivität von NIS2-Supply Chain Security-Maßnahmen?",
        answer: "Die Messung der Effektivität von Supply Chain Security-Maßnahmen erfordert spezifische KPIs und Metriken, die sowohl NIS2-Compliance als auch geschäftliche Auswirkungen transparent machen. ADVISORI entwickelt umfassende Measurement-Frameworks, die der C-Suite datengestützte Einblicke in die Performance und den ROI ihrer Supply Chain Security-Investitionen liefern.\n\n📈 NIS2-spezifische Performance Metriken:\n• Supplier Security Maturity Index: Bewertung der Cybersicherheitsreife aller kritischen Lieferanten basierend auf NIS2-Kriterien und Best Practices.\n• Supply Chain Vulnerability Exposure: Messung der Gesamtexposition gegenüber Schwachstellen in der Lieferkette und deren potenzielle Auswirkungen.\n• Incident Response Effectiveness: Bewertung der Geschwindigkeit und Qualität der Reaktion auf Supply Chain Security-Vorfälle.\n• Compliance Coverage Ratio: Prozentsatz der Lieferanten, die vollständige NIS2-Compliance nachweisen können.\n\n💰 Business Impact und ROI-Metriken:\n• Supply Chain Disruption Prevention: Quantifizierung verhindeter Lieferkettenunterbrechungen und deren finanzieller Auswirkungen.\n• Risk Mitigation Cost-Benefit: Verhältnis zwischen Investitionen in Supply Chain Security und vermiedenen Risiko-Kosten.\n• Supplier Onboarding Efficiency: Messung der Zeit und Kosten für die Sicherheitsbewertung neuer Lieferanten.\n• Insurance Premium Optimization: Reduktion der Versicherungskosten durch nachweisbare Supply Chain Security-Verbesserungen.\n\n🎯 Advanced Analytics und Benchmarking:\n• Predictive Risk Indicators: Frühindikatoren für potenzielle Supply Chain-Risiken basierend auf historischen Daten und Marktanalysen.\n• Industry Benchmarking: Vergleich Ihrer Supply Chain Security-Performance mit Branchenstandards und Best-in-Class-Unternehmen.\n• Trend Analysis und Forecasting: Langfristige Analyse von Supply Chain Security-Trends zur strategischen Planung."
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
