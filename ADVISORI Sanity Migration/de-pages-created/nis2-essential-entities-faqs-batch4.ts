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
    console.log('Updating NIS2 Essential Entities page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-essential-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-essential-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie navigiert ADVISORI Essential Entities durch die komplexen grenzüberschreitenden Compliance-Anforderungen, wenn ihre kritischen Services mehrere EU-Mitgliedstaaten betreffen?",
        answer: "Essential Entities, die grenzüberschreitend operieren, stehen vor der Herausforderung, verschiedene nationale Umsetzungen der NIS2-Richtlinie zu navigieren, während sie gleichzeitig konsistente Cybersicherheitsstandards aufrechterhalten. ADVISORI entwickelt für die C-Suite harmonisierte Compliance-Strategien, die regulatorische Komplexität minimieren und operative Effizienz maximieren.\n\n🌍 Cross-Border NIS2 Compliance Management:\n• Multi-Jurisdictional Mapping: Entwicklung detaillierter Übersichten über die verschiedenen nationalen Umsetzungen der NIS2-Richtlinie und deren spezifische Anforderungen für Essential Entities in verschiedenen Mitgliedstaaten.\n• Unified Compliance Framework: Aufbau einheitlicher Cybersicherheitsstandards, die die höchsten Anforderungen aller relevanten Jurisdiktionen erfüllen und damit Compliance-Komplexität reduzieren.\n• Regulatory Coordination Strategy: Etablierung strukturierter Kommunikationskanäle mit verschiedenen nationalen Aufsichtsbehörden, um koordinierte Aufsichtsansätze zu fördern und Doppelarbeit zu vermeiden.\n• Cross-Border Incident Management: Entwicklung spezialisierter Protokolle für die Meldung und das Management von Cybersicherheitsvorfällen, die mehrere Jurisdiktionen betreffen könnten.\n\n⚖️ Strategic Harmonization für operative Excellence:\n• Lead Regulator Identification: Strategische Identifikation und Etablierung von Beziehungen zu Lead Regulators in Schlüsseljurisdiktionen, um koordinierte Aufsichtsansätze zu fördern.\n• Standardization Benefits: Nutzung harmonisierter Cybersicherheitsstandards als Wettbewerbsvorteil bei der europäischen Expansion und als Basis für effiziente Skalierung.\n• Regulatory Intelligence Network: Aufbau eines Netzwerks zur kontinuierlichen Überwachung regulatorischer Entwicklungen in allen relevanten Jurisdiktionen.\n• Cross-Border Crisis Communication: Vorbereitung koordinierter Kommunikationsstrategien für Krisensituationen, die mehrere Mitgliedstaaten betreffen könnten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Maßnahmen ergreift ADVISORI, um Essential Entities bei der Bewältigung der besonderen Herausforderungen durch Cloud-Services und Drittanbieter-Dependencies unter NIS2 zu unterstützen?",
        answer: "Essential Entities sind zunehmend abhängig von Cloud-Services und komplexen Drittanbieter-Ökosystemen, die unter NIS2 besonderen Compliance- und Sicherheitsanforderungen unterliegen. ADVISORI entwickelt für die C-Suite intelligente Cloud- und Vendor-Management-Strategien, die operative Flexibilität mit regulatorischer Compliance und Cybersicherheitsexzellenz verbinden.\n\n☁️ Cloud-Security Excellence für Essential Entities:\n• Multi-Cloud Security Architecture: Entwicklung robuster Sicherheitsarchitekturen für Multi-Cloud-Umgebungen, die sowohl die Flexibilität moderner Cloud-Services als auch die strengen NIS2-Anforderungen für Essential Entities erfüllen.\n• Cloud Provider Risk Assessment: Implementierung umfassender Bewertungsframeworks für Cloud-Anbieter, die deren Cybersicherheitskapazitäten, Compliance-Status und Resilienz gegenüber verschiedenen Bedrohungsszenarien evaluieren.\n• Data Sovereignty Management: Entwicklung von Strategien zur Gewährleistung der Datensouveränität und Compliance mit nationalen Anforderungen, auch bei der Nutzung internationaler Cloud-Services.\n• Cloud Incident Response Integration: Aufbau integrierter Incident Response Mechanismen, die Cloud-spezifische Vorfälle nahtlos in die übergeordneten NIS2-Compliance-Prozesse einbinden.\n\n🔗 Strategic Third-Party Risk Management:\n• Critical Vendor Identification: Systematische Identifikation und Klassifikation kritischer Drittanbieter basierend auf ihrer Bedeutung für Essential Services und potenziellen Auswirkungen auf die Cybersicherheit.\n• Vendor Cybersecurity Maturity Programs: Entwicklung strukturierter Programme zur Bewertung und kontinuierlichen Verbesserung der Cybersicherheitskapazitäten kritischer Drittanbieter.\n• Contractual Security Integration: Integration spezifischer NIS2-relevanter Cybersicherheitsanforderungen in Drittanbieter-Verträge mit klaren Haftungs- und Compliance-Regelungen.\n• Supply Chain Resilience Testing: Implementierung regelmäßiger Tests der Drittanbieter-Resilienz durch Szenarien-basierte Übungen und Stress-Tests."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie unterstützt ADVISORI Essential Entities dabei, eine zukunftssichere Cybersicherheits-Workforce aufzubauen, die den spezialisierten Anforderungen von NIS2 gerecht wird?",
        answer: "Der Erfolg der NIS2-Compliance für Essential Entities hängt entscheidend von hochqualifizierten Cybersicherheitsexperten ab, die sowohl technische Expertise als auch regulatorisches Verständnis mitbringen. ADVISORI entwickelt für die C-Suite umfassende Talent-Strategien, die nicht nur aktuellen Compliance-Anforderungen genügen, sondern auch zukünftige Cybersicherheits-Herausforderungen antizipieren.\n\n👥 Strategic Cybersecurity Talent Development:\n• Specialized NIS2 Training Programs: Entwicklung maßgeschneiderter Schulungsprogramme, die technische Cybersicherheitskompetenzen mit spezifischem NIS2-Wissen für Essential Entities verbinden.\n• Cross-Functional Security Integration: Aufbau von Programmen, die Cybersicherheitsbewusstsein und -kompetenzen in alle Unternehmensbereiche integrieren, von Operations bis hin zu Business Development.\n• Executive Cybersecurity Education: Spezialisierte Bildungsprogramme für C-Level und Board-Mitglieder, um strategisches Cybersicherheitsverständnis und effektive Governance sicherzustellen.\n• Industry-Academic Partnerships: Aufbau von Partnerschaften mit Universitäten und Forschungseinrichtungen zur Entwicklung des nächsten Generation von Cybersicherheitsexperten für kritische Infrastrukturen.\n\n🚀 Future-Ready Cybersecurity Organization:\n• Agile Security Teams: Etablierung flexibler, interdisziplinärer Teams, die schnell auf neue Bedrohungen und regulatorische Änderungen reagieren können.\n• Continuous Learning Culture: Implementierung einer Lernkultur, die kontinuierliche Weiterbildung und Anpassung an evolving Cybersicherheits-Landschaften fördert.\n• Retention and Attraction Strategies: Entwicklung attraktiver Karrierewege und Arbeitsumgebungen, die Top-Cybersicherheitstalente anziehen und langfristig binden.\n• Knowledge Management Systems: Aufbau umfassender Wissensmanagementsysteme, die kritisches Cybersicherheitswissen dokumentieren, teilen und institutionalisieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche innovativen Metriken und KPIs entwickelt ADVISORI für Essential Entities, um den Erfolg ihrer NIS2-Compliance und Cybersicherheitsinvestitionen zu messen und zu demonstrieren?",
        answer: "Für Essential Entities ist es entscheidend, den Wert und Erfolg ihrer NIS2-Compliance-Initiativen quantifizieren und kommunizieren zu können. ADVISORI entwickelt für die C-Suite innovative Mess- und Berichterstattungssysteme, die nicht nur regulatorische Compliance dokumentieren, sondern auch den Business Value und strategischen Nutzen von Cybersicherheitsinvestitionen demonstrieren.\n\n📊 Advanced Cybersecurity Performance Metrics:\n• Cyber Resilience Index: Entwicklung eines umfassenden Index, der die Cyber-Resilienz von Essential Entities quantifiziert und Benchmarking mit Peer-Organisationen ermöglicht.\n• Compliance Maturity Scorecards: Implementation detaillierter Bewertungssysteme, die den Fortschritt bei der NIS2-Umsetzung messbar machen und Verbesserungsbereiche identifizieren.\n• Business Impact Quantification: Entwicklung von Modellen zur finanziellen Quantifizierung der Auswirkungen von Cybersicherheitsmaßnahmen auf Geschäftsergebnisse und Risikoreduktion.\n• Stakeholder Confidence Metrics: Messung des Vertrauens verschiedener Stakeholder-Gruppen (Kunden, Partner, Investoren, Aufsichtsbehörden) in die Cybersicherheitskapazitäten der Organisation.\n\n🎯 Strategic Value Demonstration Framework:\n• ROI-Modelling für Cybersicherheitsinvestitionen: Entwicklung sophistizierter Modelle, die sowohl direkte als auch indirekte Renditen von Cybersicherheitsinvestitionen erfassen und kommunizieren.\n• Predictive Risk Analytics: Implementation von Analysen, die zukünftige Cybersicherheitsrisiken vorhersagen und den präventiven Wert aktueller Maßnahmen demonstrieren.\n• Regulatory Relationship Metrics: Messung der Qualität und Effektivität der Beziehungen zu Aufsichtsbehörden und deren Auswirkungen auf das Geschäft.\n• Innovation Enablement Tracking: Quantifizierung, wie robuste Cybersicherheit neue Geschäftsmöglichkeiten ermöglicht und Innovation fördert."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
