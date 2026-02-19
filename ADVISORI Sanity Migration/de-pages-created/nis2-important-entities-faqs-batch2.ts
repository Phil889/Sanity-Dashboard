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
    console.log('Updating NIS2 Important Entities page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-important-entities' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-important-entities" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche spezifischen Herausforderungen entstehen für Important Entities bei der Incident Response unter NIS2 und wie entwickelt ADVISORI schlanke aber effektive Reaktionsprozesse?",
        answer: "Important Entities stehen vor der Herausforderung, effektive Incident Response Capabilities aufzubauen, ohne die Komplexität und Kosten großer Enterprise-Lösungen zu übernehmen. ADVISORI entwickelt maßgeschneiderte, proportionale Incident Response-Strategien, die schnelle Reaktionszeiten ermöglichen und gleichzeitig NIS2-Meldepflichten erfüllen, ohne operative Flexibilität zu beeinträchtigen.\n\n🚨 Spezifische Incident Response Herausforderungen für Important Entities:\n• Ressourceneffiziente 24/7-Überwachung: Aufbau kontinuierlicher Überwachung ohne kostspieliges rund-um-die-Uhr Personal durch intelligente Automatisierung und externe Monitoring-Services.\n• Schnelle Entscheidungsfindung: Etablierung klarer Eskalationspfade und Entscheidungskompetenzen, die auch außerhalb der Geschäftszeiten funktionieren und kritische Reaktionszeiten einhalten.\n• Proportionale Response-Teams: Aufbau schlanker, aber kompetenter Incident Response Teams, die interne Expertise mit externen Spezialisten kombinieren.\n• Cost-Effective Forensics: Zugang zu forensischen Capabilities ohne permanente Investition in spezialisierte Tools und Expertise.\n\n⚡ ADVISORI's schlanke Incident Response Architektur:\n• Automated Detection & Triage: Implementierung intelligenter Erkennungssysteme, die routine incidents automatisch klassifizieren und nur kritische Ereignisse an menschliche Experten weiterleiten.\n• Hybrid Response Model: Kombination interner Response-Capabilities mit externen Managed Security Services für komplexere Incidents, wodurch Expertise verfügbar ist ohne Vollzeit-Personal.\n• Pre-Defined Response Playbooks: Entwicklung spezifischer, getesteter Handlungsanweisungen für typische Incident-Szenarien, die schnelle und konsistente Reaktionen ermöglichen.\n• Integrated Communication Systems: Aufbau automatisierter Kommunikationsprozesse, die sowohl interne Stakeholder als auch Aufsichtsbehörden zeitnah und vollständig informieren.\n• Business Continuity Integration: Verknüpfung von Incident Response mit Business Continuity Planning, um Geschäftsausfälle zu minimieren und kritische Prozesse aufrechtzuerhalten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie kann ADVISORI Important Entities dabei unterstützen, ihre begrenzten Cybersicherheits-Budgets strategisch zu allokieren, um maximale NIS2-Compliance bei optimalem ROI zu erreichen?",
        answer: "ADVISORI versteht die Budgetbeschränkungen von Important Entities und entwickelt datengetriebene Investitionsstrategien, die jeder Euro maximalen Sicherheitswert und Compliance-Nutzen generiert. Unser Ansatz kombiniert Risikobewertung, Kostenanalyse und Business Impact Assessment, um Cybersicherheitsinvestitionen zu priorisieren, die sowohl regulatorische Anforderungen erfüllen als auch geschäftlichen Mehrwert schaffen.\n\n💰 Strategische Budget-Allokations-Framework:\n• Risk-Return Investment Matrix: Entwicklung einer systematischen Bewertungsmatrix, die Cybersicherheitsinvestitionen nach Risikominimierung, Compliance-Impact und Business-Benefit priorisiert.\n• Phased Investment Roadmap: Strukturierung der Cybersicherheitsinvestitionen in logische Phasen, die es ermöglichen, Budget über mehrere Jahre zu verteilen und frühe Erfolge zu demonstrieren.\n• Multi-Purpose Solution Prioritization: Fokussierung auf Sicherheitslösungen, die multiple Compliance-Anforderungen erfüllen und gleichzeitig operative Effizienz steigern.\n• Shared Cost Opportunities: Identifikation von Möglichkeiten, Cybersicherheitskosten mit anderen IT-Modernisierungszielen zu teilen und Synergien zu nutzen.\n\n📊 ROI-Optimierung durch intelligente Priorisierung:\n• Critical Asset Protection First: Konzentration der ersten Investitionen auf den Schutz der geschäftskritischsten Assets, wodurch maximaler Risikoschutz mit minimalem Budget erreicht wird.\n• Automation-First Strategy: Priorisierung von Automatisierungslösungen, die langfristig Personal- und Betriebskosten reduzieren und gleichzeitig Compliance-Effizienz steigern.\n• Cloud-Native Security Services: Nutzung skalierbarer Cloud-basierter Sicherheitsdienste, die niedrige Einstiegskosten haben und mit dem Unternehmenswachstum mitwachsen.\n• Measurable Impact Tracking: Implementierung von Metriken und KPIs, die den Business Impact von Cybersicherheitsinvestitionen quantifizieren und ROI-Nachweise für zukünftige Budgetentscheidungen liefern.\n• Compliance-to-Competitive-Advantage Pipeline: Aufbau von Sicherheitsinvestitionen, die zunächst Compliance gewährleisten und später als Basis für Wettbewerbsvorteile und neue Geschäftsmöglichkeiten dienen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche konkreten Automatisierungsstrategien empfiehlt ADVISORI für Important Entities, um NIS2-Compliance-Aufwände zu minimieren und gleichzeitig menschliche Ressourcen für wertschöpfende Aktivitäten freizusetzen?",
        answer: "ADVISORI entwickelt für Important Entities intelligente Automatisierungsstrategien, die repetitive Compliance-Aufgaben eliminieren und menschliche Expertise für strategische Cybersicherheitsentscheidungen freisetzen. Unser Ansatz fokussiert auf kostengünstige, aber hocheffektive Automatisierungslösungen, die sowohl Compliance-Effizienz als auch operative Excellence steigern.\n\n🤖 Strategische Automatisierung für maximale Effizienz:\n• Intelligent Compliance Monitoring: Implementierung selbstlernender Überwachungssysteme, die kontinuierlich Compliance-Status bewerten und nur bei kritischen Abweichungen menschliche Intervention erfordern.\n• Automated Vulnerability Management: Aufbau automatisierter Patch-Management- und Vulnerability-Assessment-Prozesse, die kritische Sicherheitslücken prioritisieren und routine updates selbstständig durchführen.\n• Self-Service Security Orchestration: Entwicklung automatisierter Workflows für häufige Sicherheitsanfragen (Zugriffsberechtigungen, Konfigurationsänderungen), die IT-Teams entlasten und Bearbeitungszeiten reduzieren.\n• Predictive Threat Detection: Einsatz von AI-gestützten Erkennungssystemen, die Bedrohungsmuster automatisch identifizieren und präventive Maßnahmen einleiten, bevor menschliche Analyse erforderlich wird.\n\n⚡ Wertschöpfungs-Optimierung durch intelligente Automatisierung:\n• Automated Reporting & Documentation: Implementierung von Systemen, die Compliance-Berichte, Audit-Trails und Dokumentation automatisch generieren und aktualisieren, wodurch administrative Aufwände drastisch reduziert werden.\n• Dynamic Policy Enforcement: Aufbau selbstanpassender Sicherheitsrichtlinien, die sich automatisch an neue Bedrohungen und regulatorische Änderungen anpassen, ohne manuelle Konfigurationsarbeit.\n• Integrated Workflow Automation: Verknüpfung von Cybersicherheits-Automatisierung mit bestehenden Geschäftsprozessen, um Synergien zu schaffen und doppelte Arbeit zu eliminieren.\n• Continuous Improvement Loops: Etablierung automatisierter Lernzyklen, die Sicherheitsprozesse kontinuierlich optimieren und dabei menschliche Expertise für strategische Entscheidungen und Innovation freisetzen.\n• Stakeholder Communication Automation: Automatisierung von Kommunikationsprozessen mit internen und externen Stakeholdern, wodurch Compliance-Teams mehr Zeit für proaktive Sicherheitsmaßnahmen haben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie bereitet ADVISORI Important Entities auf zukünftige Cybersicherheits-Herausforderungen vor und stellt sicher, dass NIS2-Compliance-Investitionen auch bei evolving threats und regulatory changes relevant bleiben?",
        answer: "ADVISORI entwickelt für Important Entities zukunftssichere Cybersicherheits-Architekturen, die nicht nur heutige NIS2-Anforderungen erfüllen, sondern auch adaptive Resilienz gegenüber unbekannten zukünftigen Bedrohungen und regulatorischen Entwicklungen bieten. Unser Ansatz kombiniert technologische Flexibilität mit strategischer Voraussicht, um langfristige Investitionssicherheit zu gewährleisten.\n\n🔮 Zukunftssichere Cybersicherheits-Strategie:\n• Technology-Agnostic Security Framework: Aufbau flexibler Sicherheitsarchitekturen, die unabhängig von spezifischen Technologien funktionieren und sich an neue IT-Umgebungen (Cloud, Edge Computing, IoT) anpassen können.\n• Adaptive Threat Intelligence Integration: Implementierung von Threat Intelligence-Systemen, die sich automatisch an neue Bedrohungslandschaften anpassen und proaktive Schutzmaßnahmen entwickeln.\n• Regulatory Change Management: Etablierung von Prozessen zur kontinuierlichen Überwachung regulatorischer Entwicklungen und automatischen Anpassung von Compliance-Strategien.\n• Scenario-Based Preparedness: Entwicklung und regelmäßige Aktualisierung von Sicherheitsszenarien für verschiedene Zukunftslagen, einschließlich Quantum Computing, AI-basierter Angriffe und geopolitischer Cyberbedrohungen.\n\n🛡️ Investitionssicherheit durch strategische Zukunftsplanung:\n• Scalable Investment Architecture: Strukturierung von Cybersicherheitsinvestitionen als modulare, erweiterbare Systeme, die mit dem Unternehmenswachstum und neuen Anforderungen mitwachsen können.\n• Cross-Industry Learning Networks: Aufbau von Peer-to-Peer-Netzwerken mit anderen Important Entities zum Erfahrungsaustausch und kollektiven Lernen von emerging best practices.\n• Innovation Integration Pathways: Etablierung von Prozessen zur kontrollierten Integration neuer Cybersicherheitstechnologien ohne Disruption bestehender Systeme.\n• Continuous Strategic Review: Implementierung regelmäßiger Strategic Security Reviews, die Cybersicherheitsstrategien an sich ändernde Geschäfts- und Bedrohungslandschaften anpassen.\n• Future-Ready Skill Development: Aufbau interner Capabilities und Partnerschaften, die es ermöglichen, neue Cybersicherheits-Herausforderungen proaktiv anzugehen und dabei von technologischen Entwicklungen zu profitieren anstatt von ihnen überrascht zu werden."
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
