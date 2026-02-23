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
    console.log('Updating EU AI Act Documentation Requirements page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-documentation-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-documentation-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir die Qualitätsmanagementsystem-Dokumentation für KI-Systeme so gestalten, dass sie sowohl EU AI Act-konform ist als auch operative Exzellenz fördert?",
        answer: "Ein strategisch konzipiertes Qualitätsmanagementsystem (QMS) für KI-Systeme geht über reine Compliance hinaus und wird zum Enabler für operative Exzellenz, kontinuierliche Verbesserung und nachhaltiges Wachstum. Die richtige QMS-Dokumentation schafft systematische Grundlagen für höchste KI-Qualität und Zuverlässigkeit.\n\n🏗️ Strategische QMS-Architektur für KI-Systeme:\n• Process Excellence Integration: Einbettung von KI-spezifischen Qualitätsprozessen in bestehende operative Exzellenz-Frameworks für nahtlose organisatorische Integration.\n• Continuous Improvement Loops: Implementierung systematischer Feedback-Mechanismen, die Qualitätsdaten in konkrete Verbesserungsmaßnahmen überführen.\n• Risk-Quality Nexus: Intelligente Verknüpfung von Qualitätsmetriken mit Risikobewertungen für proaktive Qualitätssicherung.\n• Stakeholder Value Creation: Ausrichtung des QMS auf messbare Stakeholder-Werte wie Kundenzufriedenheit, operative Effizienz und Innovationsgeschwindigkeit.\n\n📊 ADVISORIs wertschöpfende QMS-Implementierung:\n• Performance-Driven Documentation: Entwicklung von QMS-Dokumentation, die systematisch Leistungsverbesserungen identifiziert und umsetzt.\n• AI-Specific Quality Metrics: Definition und Implementierung KI-spezifischer Qualitätsindikatoren, die über traditionelle Software-Qualität hinausgehen.\n• Organizational Learning Systems: Aufbau von QMS-Strukturen, die organisatorisches Lernen fördern und Best Practices systematisch verbreiten.\n• Business Impact Measurement: Integration von Business-Impact-Metriken in das QMS für direkten Nachweis des Geschäftswerts von Qualitätsinvestitionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche besonderen Herausforderungen entstehen bei der Dokumentation von KI-Systemen in kritischen Infrastrukturen und wie bewältigen wir diese systematisch?",
        answer: "KI-Systeme in kritischen Infrastrukturen stellen außergewöhnliche Dokumentationsanforderungen, da sie sowohl höchste Sicherheitsstandards als auch regulatorische Compliance in systemkritischen Umgebungen gewährleisten müssen. Diese Systeme erfordern spezielle Dokumentationsansätze, die Sicherheit, Resilienz und kontinuierliche Verfügbarkeit sicherstellen.\n\n🛡️ Kritische Dokumentationsaspekte für Infrastructure-KI:\n• Safety-Critical Documentation: Umfassende Dokumentation aller sicherheitskritischen Aspekte, einschließlich Fail-Safe-Mechanismen, Redundanzen und Notfallprozeduren.\n• Cybersecurity Integration: Vollständige Integration von Cybersecurity-Dokumentation in die KI-Systemdokumentation für ganzheitliche Sicherheitsbetrachtung.\n• Operational Continuity: Detaillierte Dokumentation von Betriebskontinuitätsmaßnahmen und Disaster-Recovery-Prozessen für KI-Systeme.\n• Stakeholder Coordination: Koordinierte Dokumentation für multiple Stakeholder von Betreibern bis Aufsichtsbehörden mit verschiedenen Informationsbedürfnissen.\n• Compliance Convergence: Integration verschiedener regulatorischer Anforderungen (EU AI Act, NIS2, Kritische Infrastrukturen-Verordnung) in kohärente Dokumentationsstrukturen.\n\n🎯 ADVISORIs spezialisierter Critical Infrastructure-Ansatz:\n• Multi-Domain Expertise: Kombination von KI-Expertise mit tiefem Verständnis kritischer Infrastrukturen für systemspezifische Dokumentationslösungen.\n• Security-by-Design Documentation: Integration von Sicherheitsprinzipien bereits in die Dokumentationsarchitektur für inhärente Sicherheit.\n• Resilience-Focused Framework: Entwicklung dokumentationsbasierter Resilienz-Frameworks, die systematische Widerstandsfähigkeit gegen verschiedene Bedrohungsszenarien schaffen.\n• Regulatory Convergence Management: Harmonisierung verschiedener regulatorischer Anforderungen in einheitliche, effiziente Dokumentationssysteme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir die Dokumentation der automatischen Protokollierung und Aufzeichnungen so implementieren, dass sie sowohl Compliance erfüllt als auch operative Intelligenz liefert?",
        answer: "Die automatische Protokollierung für EU AI Act Compliance bietet erhebliche Chancen zur Generierung operativer Intelligenz und datengetriebener Geschäftsoptimierung. Eine strategisch konzipierte Logging-Infrastruktur wird zum wertvollen Asset für Compliance, Operations und strategische Entscheidungsfindung.\n\n📈 Strategische Dimensionen intelligenter KI-Protokollierung:\n• Business Intelligence Integration: Transformation von Compliance-Logs in strategische Business Intelligence für datengetriebene Entscheidungsfindung.\n• Predictive Operations: Nutzung historischer Logging-Daten für vorausschauende Systemoptimierung und proaktive Problemvermeidung.\n• Performance Optimization: Systematische Analyse von Protokolldaten zur kontinuierlichen Leistungsverbesserung und Effizienzsteigerung.\n• Risk Intelligence: Entwicklung intelligenter Frühwarnsysteme basierend auf Pattern Recognition in Logging-Daten.\n• Customer Experience Enhancement: Nutzung von Protokolldaten zur Verbesserung der User Experience und Kundeninteraktion.\n\n🔍 ADVISORIs intelligente Logging-Architektur:\n• AI-Powered Log Analysis: Implementierung fortschrittlicher KI-Technologien zur automatischen Analyse und Kategorisierung von Protokolldaten.\n• Real-Time Intelligence: Aufbau von Echtzeit-Analytics-Systemen, die sofortige Einblicke in Systemverhalten und Geschäftsauswirkungen liefern.\n• Compliance-Business Convergence: Entwicklung von Systemen, die gleichzeitig Compliance-Anforderungen erfüllen und maximalen Geschäftswert generieren.\n• Privacy-Preserving Analytics: Implementation von Privacy-by-Design-Prinzipien in Logging-Systemen für datenschutzkonforme Intelligenz-Generierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie entwickeln wir eine nachhaltige Dokumentationsstrategie, die mit dem Wachstum unseres KI-Portfolios skaliert und gleichzeitig Effizienz maximiert?",
        answer: "Eine skalierbare Dokumentationsstrategie ist entscheidend für Unternehmen mit wachsenden KI-Portfolios, da sie sowohl operative Effizienz als auch Compliance-Konsistenz über verschiedene Systeme und Projekte hinweg sicherstellen muss. Die richtige Strategie transformiert Dokumentation von einem Kostenfaktor zu einem strategischen Enabler für KI-Skalierung.\n\n🚀 Prinzipien skalierbarer KI-Dokumentation:\n• Modular Architecture: Entwicklung modularer Dokumentationskomponenten, die über verschiedene KI-Systeme hinweg wiederverwendet und angepasst werden können.\n• Standardization Excellence: Implementierung konsistenter Dokumentationsstandards, die Effizienz steigern und Qualität sicherstellen.\n• Automation-First Approach: Priorisierung automatisierter Dokumentationsprozesse für reduzierte manuelle Aufwände bei wachsenden Portfolios.\n• Centralized Governance: Etablierung zentraler Governance-Strukturen für konsistente Dokumentationsqualität bei dezentraler Umsetzung.\n• Knowledge Syndication: Aufbau von Systemen zur systematischen Verbreitung und Nutzung von Dokumentationswissen über verschiedene Teams und Projekte.\n\n⚙️ ADVISORIs skalierungsoptimierte Implementierung:\n• Portfolio Management Integration: Integration der Dokumentationsstrategie in übergeordnete KI-Portfolio-Management-Prozesse für strategische Alignment.\n• Resource Optimization: Entwicklung ressourcenoptimierter Dokumentationsansätze, die maximalen Wert bei minimalen Kosten generieren.\n• Cross-Project Intelligence: Implementierung von Systemen, die Dokumentationswissen projektübergreifend nutzen und Synergien schaffen.\n• Scalable Quality Assurance: Aufbau skalierbarer Qualitätssicherungsprozesse, die auch bei wachsenden Portfolios hohe Standards gewährleisten."
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
