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
    console.log('Updating IT-Grundschutz BSI page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'it-grundschutz-bsi' })
    
    if (!existingDoc) {
      throw new Error('Document "it-grundschutz-bsi" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie unterstützt ADVISORI die C-Suite dabei, IT-Grundschutz als Teil einer ganzheitlichen Enterprise Risk Management Strategie zu etablieren?",
        answer: "Enterprise Risk Management (ERM) erfordert eine integrierte Betrachtung aller Unternehmensrisiken, wobei IT-Sicherheitsrisiken eine zunehmend kritische Rolle spielen. ADVISORI positioniert IT-Grundschutz nicht als isolierte IT-Aufgabe, sondern als integralen Bestandteil Ihrer übergreifenden Risikomanagement-Strategie, die direkten Einfluss auf Geschäftsergebnisse und Unternehmenswert hat.\n\n🎯 Integration von IT-Grundschutz in Enterprise Risk Management:\n• Risiko-Taxonomie-Harmonisierung: Entwicklung einer einheitlichen Risikobewertungssprache, die IT-Sicherheitsrisiken nahtlos in Ihre bestehenden ERM-Frameworks integriert.\n• Quantitative Risikomodellierung: Transformation qualitativer IT-Grundschutz-Bewertungen in quantifizierbare Risikoindikatoren für C-Level-Dashboards.\n• Cross-Functional Risk Governance: Etablierung interdisziplinärer Risikomanagement-Gremien, die IT-Sicherheit mit Business Continuity, Compliance und strategischer Planung verknüpfen.\n• Integrierte Berichterstattung: Entwicklung konsolidierter Risikoreports, die IT-Grundschutz-Status in den Kontext anderer Unternehmensrisiken stellen.\n\n📊 ADVISORI's ERM-Integration für IT-Grundschutz:\n• Risk Appetite Definition: Unterstützung bei der Definition von IT-Sicherheits-Risikoappetit und -toleranzen im Einklang mit Ihrer übergeordneten Risikostrategie.\n• Scenario-Based Planning: Entwicklung von Risikoszenarien, die IT-Grundschutz-Ausfälle mit operationellen und finanziellen Auswirkungen verknüpfen.\n• KRI Development: Etablierung von Key Risk Indicators (KRIs), die frühzeitige Warnsignale für IT-Sicherheitsrisiken liefern.\n• Board-Level Reporting: Aufbereitung von IT-Grundschutz-Informationen für Aufsichtsrat und Vorstand in strategisch relevanter Form.\n\n🔄 Kontinuierliche Risiko-Optimierung:\n• Dynamic Risk Assessment: Implementierung kontinuierlicher Risikobewertungsprozesse, die sich an verändernde Geschäfts- und Bedrohungslagen anpassen.\n• Control Effectiveness Monitoring: Laufende Überwachung der Wirksamkeit von IT-Grundschutz-Maßnahmen im Kontext Ihrer Gesamtrisikolage.\n• Strategic Risk Alignment: Sicherstellung, dass IT-Grundschutz-Investitionen optimal zu Ihrer strategischen Risikopositionierung beitragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche spezifischen Governance-Strukturen empfiehlt ADVISORI für die C-Suite zur effektiven Überwachung und Steuerung der IT-Grundschutz-Implementierung?",
        answer: "Effektive IT-Grundschutz-Governance erfordert klare Verantwortlichkeiten, transparente Entscheidungsprozesse und regelmäßige Erfolgsmessung auf C-Level. ADVISORI entwickelt maßgeschneiderte Governance-Strukturen, die IT-Grundschutz-Management nahtlos in Ihre bestehenden Unternehmensführungsprozesse integrieren und der Geschäftsleitung die notwendige Kontrolle und Transparenz bieten.\n\n🏛️ C-Level IT-Grundschutz Governance Framework:\n• IT-Security Board: Etablierung eines strategischen IT-Sicherheitsgremiums mit C-Level-Beteiligung für grundsätzliche Richtungsentscheidungen.\n• CISO-Empowerment: Stärkung der Chief Information Security Officer Rolle mit direktem Zugang zur Geschäftsleitung und angemessenen Ressourcen.\n• Three Lines of Defense: Implementierung eines robusten Kontrollsystems mit klarer Abgrenzung zwischen operativer Umsetzung, Überwachung und unabhängiger Prüfung.\n• Risk Committee Integration: Einbindung von IT-Grundschutz-Themen in bestehende Risiko- und Audit-Ausschüsse für ganzheitliche Risikosteuerung.\n\n📋 ADVISORI's Governance-Implementierungsansatz:\n• Responsibility Assignment Matrix (RACI): Entwicklung klarer Verantwortungsmatrizen für alle IT-Grundschutz-relevanten Entscheidungen und Prozesse.\n• Executive Dashboards: Design aussagekräftiger Management-Dashboards mit relevanten KPIs und Risikoindikatoren für schnelle Entscheidungsfindung.\n• Escalation Procedures: Definition strukturierter Eskalationswege für kritische IT-Sicherheitsereignisse bis hin zur C-Suite.\n• Performance Management: Etablierung von IT-Grundschutz-bezogenen Leistungsindikatoren für Führungskräfte und deren Integration in Incentive-Systeme.\n\n⚖️ Compliance und Oversight-Mechanismen:\n• Regular Board Reporting: Standardisierte Berichterstattung über IT-Grundschutz-Status, Risiken und Investitionsbedarfe an Aufsichtsrat und Geschäftsführung.\n• Independent Assurance: Organisation regelmäßiger unabhängiger Bewertungen der IT-Grundschutz-Wirksamkeit durch externe Experten.\n• Regulatory Alignment: Sicherstellung, dass Governance-Strukturen allen relevanten regulatorischen Anforderungen (DORA, NIS2) entsprechen.\n• Continuous Improvement: Implementierung strukturierter Verbesserungsprozesse basierend auf Lessons Learned und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie positioniert ADVISORI IT-Grundschutz im Kontext der digitalen Transformation und welche Rolle spielt dies bei der Erschließung neuer Geschäftsmodelle?",
        answer: "Digitale Transformation und IT-Grundschutz werden oft als konkurrierende Prioritäten wahrgenommen – Geschwindigkeit versus Sicherheit. ADVISORI zeigt, wie IT-Grundschutz als Enabler für beschleunigte und sichere digitale Transformation fungiert und damit neue Geschäftsmöglichkeiten erschließt, statt sie zu behindern.\n\n🚀 IT-Grundschutz als Digital Transformation Accelerator:\n• Secure Foundation Building: Nutzung von IT-Grundschutz-Prinzipien zur Schaffung einer robusten digitalen Infrastruktur, die als Basis für Innovation dient.\n• DevSecOps Integration: Einbettung von IT-Grundschutz-Anforderungen in agile Entwicklungsprozesse für secure-by-design Lösungen.\n• Cloud Security Enablement: Anwendung von IT-Grundschutz-Bausteinen auf Cloud-Architekturen für sichere und skalierbare digitale Services.\n• API Security Framework: Entwicklung sicherer API-Strategien basierend auf IT-Grundschutz-Prinzipien für robuste digitale Ecosysteme.\n\n💼 Geschäftsmodell-Innovation durch sichere Digitalisierung:\n• Platform Business Enablement: IT-Grundschutz als Vertrauensbasis für digitale Plattform-Geschäftsmodelle und Ecosystem-Partnerschaften.\n• Data Monetization Security: Sichere Datennutzungsstrategien, die neue Geschäftsmöglichkeiten erschließen, ohne Compliance-Risiken einzugehen.\n• Digital Customer Experience: Vertrauensvolle Kundenbeziehungen durch nachweisbar sichere digitale Touchpoints und Services.\n• IoT and Edge Computing: Sichere Integration von IoT-Technologien für innovative Produkte und Services im Industrial Internet.\n\n🔮 ADVISORI's Future-Ready Digital Security Strategy:\n• Emerging Technology Assessment: Proaktive Bewertung neuer Technologien (AI, Blockchain, Quantum) hinsichtlich IT-Grundschutz-Kompatibilität.\n• Agile Security Architecture: Entwicklung flexibler Sicherheitsarchitekturen, die schnelle Anpassungen an neue digitale Anforderungen ermöglichen.\n• Zero Trust Integration: Kombination von IT-Grundschutz-Prinzipien mit Zero Trust-Architekturen für moderne, verteilte Arbeitsumgebungen.\n• Continuous Security Innovation: Etablierung von Innovation Labs für die Erprobung neuer Sicherheitstechnologien im IT-Grundschutz-Kontext."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche konkreten Schritte unternimmt ADVISORI, um sicherzustellen, dass unsere IT-Grundschutz-Strategie mit internationalen Standards harmoniert und globale Expansion unterstützt?",
        answer: "In einer globalisierten Wirtschaft müssen IT-Grundschutz-Strategien über nationale Grenzen hinweg funktionieren und mit internationalen Standards kompatibel sein. ADVISORI entwickelt harmonisierte Sicherheitsframeworks, die deutsche IT-Grundschutz-Exzellenz mit internationaler Kompatibilität kombinieren und so Ihre globale Expansion sicher unterstützen.\n\n🌍 Internationale Standards-Harmonisierung:\n• ISO 27001 Mapping: Systematische Verknüpfung von IT-Grundschutz-Bausteinen mit ISO 27001-Controls für internationale Zertifizierungskompatibilität.\n• NIST Framework Integration: Brückenbildung zwischen BSI IT-Grundschutz und NIST Cybersecurity Framework für US-Markt-Kompatibilität.\n• Regional Compliance Mapping: Anpassung an lokale Regulierungsanforderungen (GDPR, SOX, lokale Datenschutzgesetze) ohne Kompromisse bei IT-Grundschutz-Qualität.\n• Cross-Border Data Protection: Entwicklung grenzüberschreitender Datenübertragungsstrategien, die IT-Grundschutz-Prinzipien mit internationalen Datenschutzanforderungen vereinen.\n\n📊 ADVISORI's Global Harmonization Approach:\n• Multi-Standard Architecture: Design von Sicherheitsarchitekturen, die gleichzeitig IT-Grundschutz, ISO 27001, SOC 2 und andere relevante Standards erfüllen.\n• Cultural Adaptation: Anpassung von IT-Grundschutz-Implementierungen an lokale Geschäftskulturen und Arbeitsweisen in verschiedenen Märkten.\n• Global Risk Assessment: Bewertung länderspezifischer Risiken und deren Integration in IT-Grundschutz-basierte Sicherheitsstrategien.\n• Vendor Risk Management: Entwicklung globaler Lieferanten-Bewertungsframeworks basierend auf IT-Grundschutz-Prinzipien.\n\n🚀 Expansion-Enablement durch sichere Globalisierung:\n• Scalable Security Operations: Aufbau skalierbarer Security Operations Centers (SOC), die IT-Grundschutz-Standards global durchsetzen.\n• International Incident Response: Entwicklung grenzüberschreitender Incident Response-Capabilities, die lokale Besonderheiten berücksichtigen.\n• Global Compliance Monitoring: Implementierung zentraler Compliance-Überwachung für alle internationalen Standorte.\n• Cross-Cultural Security Training: Entwicklung kulturell angepasster Sicherheitsschulungen, die IT-Grundschutz-Prinzipien global verständlich machen."
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
