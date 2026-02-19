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
    console.log('Updating KRITIS Schwachstellenanalyse & Risikobewertung page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schwachstellenanalyse-risikobewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schwachstellenanalyse-risikobewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie integriert ADVISORI die Schwachstellenanalyse in unsere bestehenden Governance- und Risk-Management-Frameworks und welche Board-Level-Berichterstattung wird unterstützt?",
        answer: "Effektive Schwachstellenanalyse muss nahtlos in bestehende Governance-Strukturen integriert werden, um strategischen Wert zu schaffen. ADVISORI versteht die Komplexität moderner Corporate Governance und entwickelt Integrationsansätze, die Schwachstellenmanagement als integralen Bestandteil des Enterprise Risk Managements etablieren.\n\n🏛️ Governance-Integration und strategische Einbettung:\n• Board-Ready-Risk-Reporting: Entwicklung von Executive Summaries und Board-Präsentationen, die Schwachstellenrisiken in den Kontext von Geschäftsrisiken und strategischen Zielen stellen.\n• Risk-Appetite-Alignment: Integration von Schwachstellenbewertungen in bestehende Risk-Appetite-Frameworks und Risikotoleranz-Definitionen.\n• Three-Lines-of-Defense-Integration: Einbettung von Schwachstellenmanagement-Prozessen in bestehende Three-Lines-of-Defense-Modelle mit klaren Rollen und Verantwortlichkeiten.\n• Audit-Committee-Support: Bereitstellung spezialisierter Berichterstattung für Audit-Committees mit Fokus auf Compliance-Risiken und regulatorische Auswirkungen.\n\n📊 Strategic Risk Intelligence und Entscheidungsunterstützung:\n• Enterprise-Risk-Dashboard-Integration: Nahtlose Einbindung von Schwachstellenmetriken in bestehende ERM-Dashboards und Risiko-Heatmaps.\n• Scenario-Planning-Support: Unterstützung bei der Entwicklung von Risikoszenarien für strategische Planung und Stress-Testing.\n• Investment-Committee-Reporting: Aufbereitung von Schwachstellenanalyse-Ergebnissen für Investitionsentscheidungen und Budget-Allokation.\n• Crisis-Management-Integration: Verknüpfung von Schwachstellenmanagement mit bestehenden Crisis-Management- und Business-Continuity-Frameworks."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Expertise bringt ADVISORI bei der Bewertung von Schwachstellen in hochspezialisierten kritischen Infrastrukturen wie Kraftwerken, Wasserversorgung oder Finanzinfrastrukturen mit?",
        answer: "Kritische Infrastrukturen sind hochspezialisierte Umgebungen mit einzigartigen technischen Herausforderungen und regulatorischen Anforderungen. ADVISORI verfügt über tiefgreifende, branchenspezifische Expertise und versteht die besonderen Sicherheitsanforderungen verschiedener kritischer Sektoren.\n\n⚡ Sektor-spezifische Expertise und Methodensets:\n• Energiesektor-Spezialisierung: Tiefgreifende Kenntnis von SCADA-Systemen, Smart-Grid-Technologien und IEC 61850-Protokollen in Kraftwerks- und Netzinfrastrukturen.\n• Wasserversorgung-Security: Expertise in Wassermanagement-Systemen, SCADA-Protokollen für Wasserwirtschaft und spezifischen Compliance-Anforderungen für Versorgungsunternehmen.\n• Finanzinfrastruktur-Sicherheit: Spezialisierte Kenntnisse in Payment-Systemen, Trading-Infrastrukturen und Finanzmarkt-spezifischen Compliance-Frameworks (DORA, PCI-DSS).\n• Transport-und-Logistik-Systeme: Analyse von Verkehrsleitsystemen, Logistik-Infrastrukturen und Connected-Vehicle-Technologien.\n\n🔬 Advanced Technical Assessment Capabilities:\n• Industrial-Protocol-Analysis: Deep-Dive-Analyse industrieller Kommunikationsprotokolle und deren spezifischer Schwachstellen und Angriffsvektoren.\n• Legacy-System-Integration: Spezialisierte Bewertung von Legacy-Systemen, die oft jahrzehntelang in kritischen Infrastrukturen eingesetzt werden.\n• Safety-Security-Convergence: Integration von Functional-Safety-Anforderungen (ISO 26262, IEC 61508) mit Cybersecurity-Bewertungen.\n• Regulatory-Compliance-Mapping: Detaillierte Kenntnis sektorspezifischer Regulierungen und deren Auswirkungen auf Schwachstellenmanagement-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie stellt ADVISORI sicher, dass die Schwachstellenanalyse auch globale Supply-Chain-Risiken und geopolitische Faktoren berücksichtigt, die kritische Infrastrukturen bedrohen?",
        answer: "Moderne kritische Infrastrukturen sind durch komplexe, globale Lieferketten geprägt, die neue Risikodimensionen schaffen. ADVISORI integriert geopolitische Intelligence und Supply-Chain-Risikobewertung in umfassende Schwachstellenanalysen, um ein vollständiges Bild der Bedrohungslandschaft zu erstellen.\n\n🌍 Geopolitische Risikointegration und Threat Intelligence:\n• Nation-State-Threat-Modeling: Analyse staatlich gesponserter Bedrohungsakteure und deren spezifische Taktiken gegen kritische Infrastrukturen in Ihrer Region.\n• Geopolitical-Risk-Assessment: Bewertung geopolitischer Spannungen und deren potenzielle Auswirkungen auf Ihre Infrastruktur und Lieferketten.\n• Sanctions-Impact-Analysis: Analyse der Auswirkungen internationaler Sanktionen auf Ihre Technologie-Lieferketten und Vendor-Beziehungen.\n• Economic-Warfare-Preparedness: Bewertung der Resilienz gegen wirtschaftliche Angriffe und Disruption kritischer Lieferketten.\n\n🔗 Supply-Chain-Security und Vendor-Risk-Management:\n• Third-Party-Risk-Assessment: Umfassende Bewertung der Sicherheitslage aller kritischen Lieferanten und Service-Provider.\n• Software-Supply-Chain-Analysis: Spezialisierte Analyse von Software-Lieferketten, einschließlich Open-Source-Komponenten und deren Schwachstellen.\n• Hardware-Integrity-Verification: Bewertung der Integrität kritischer Hardware-Komponenten und Identifikation potenzieller Backdoors oder Manipulationen.\n• Vendor-Concentration-Risk: Analyse von Single-Point-of-Failure-Risiken durch Abhängigkeiten von einzelnen kritischen Lieferanten oder Regionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche langfristige Partnerschaft bietet ADVISORI nach der initialen Schwachstellenanalyse und wie wird kontinuierliche Verbesserung und Anpassung an neue Bedrohungen gewährleistet?",
        answer: "ADVISORI versteht Schwachstellenmanagement als kontinuierlichen strategischen Prozess, nicht als einmalige Übung. Wir entwickeln langfristige Partnerschaften, die sicherstellen, dass Ihre Sicherheitslage kontinuierlich an sich entwickelnde Bedrohungen und Geschäftsanforderungen angepasst wird.\n\n🔄 Kontinuierliche Verbesserung und adaptive Sicherheit:\n• Continuous-Monitoring-Framework: Implementierung von Systemen zur kontinuierlichen Überwachung und automatisierten Erkennung neuer Schwachstellen und Bedrohungen.\n• Threat-Intelligence-Integration: Regelmäßige Updates zu neuen Bedrohungsvektoren und deren spezifische Auswirkungen auf Ihre Infrastruktur.\n• Quarterly-Risk-Reviews: Regelmäßige strategische Reviews zur Bewertung der Entwicklung Ihrer Risikolage und Anpassung der Schutzmaßnahmen.\n• Technology-Evolution-Tracking: Proaktive Bewertung neuer Technologien und deren Sicherheitsimplikationen für Ihre Infrastruktur.\n\n🤝 Strategische Partnerschaft und Capability Building:\n• Security-Maturity-Roadmap: Entwicklung langfristiger Roadmaps zur kontinuierlichen Verbesserung Ihrer Sicherheitsreife und -fähigkeiten.\n• Internal-Team-Development: Schulung und Mentoring Ihrer internen Sicherheitsteams zur Stärkung eigenständiger Schwachstellenmanagement-Fähigkeiten.\n• Crisis-Response-Partnership: 24/7-Verfügbarkeit für kritische Sicherheitsvorfälle und schnelle Response-Unterstützung.\n• Strategic-Advisory-Services: Regelmäßige strategische Beratung zu emerging Threats, neuen Compliance-Anforderungen und Best-Practice-Evolution."
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
