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
    console.log('Updating Datenlecks durch LLMs verhindern page with Enterprise Risk Management FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenlecks-durch-llms-verhindern' })
    
    if (!existingDoc) {
      throw new Error('Document "datenlecks-durch-llms-verhindern" not found')
    }
    
    // Create new Enterprise Risk Management FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI umfassende LLM-Governance-Frameworks für Enterprise-Umgebungen und welche Rollen definieren wir?",
        answer: "Enterprise LLM-Governance erfordert strukturierte Frameworks, die klare Verantwortlichkeiten, Entscheidungsprozesse und Kontrollmechanismen definieren. ADVISORI entwickelt maßgeschneiderte Governance-Strukturen, die LLM-spezifische Risiken adressieren und gleichzeitig Innovation und Geschäftswert fördern, während sie nahtlos in bestehende Unternehmens-Governance integriert werden.\n\n🏛️ LLM-Governance-Framework-Komponenten:\n• Executive Steering Committee: Etablierung eines C-Level-Gremiums für strategische LLM-Entscheidungen, Budgetallokation und Risikotoleranz-Definition mit klaren Eskalationspfaden.\n• AI Ethics Board: Implementierung eines interdisziplinären Ethik-Gremiums, das ethische Richtlinien für LLM-Nutzung entwickelt und überwacht, einschließlich Bias-Vermeidung und Fairness-Standards.\n• Technical Governance Committee: Aufbau technischer Governance-Strukturen für Architekturentscheidungen, Sicherheitsstandards und technische Compliance-Überwachung.\n• Risk Management Office: Spezialisierte Risikomanagement-Einheit für kontinuierliche LLM-Risikobewertung, -überwachung und -minderung.\n\n👥 Rollen und Verantwortlichkeiten:\n• Chief AI Officer: Definition der strategischen Rolle des CAO für LLM-Governance, einschließlich Verantwortlichkeiten für Strategie, Compliance und Innovation.\n• LLM Security Officer: Spezialisierte Sicherheitsrolle für LLM-spezifische Bedrohungen, Incident Response und Sicherheitsarchitektur.\n• Data Protection Officer Integration: Erweiterte DPO-Rolle für LLM-spezifische Datenschutzanforderungen und DSGVO-Compliance.\n• Business Unit AI Champions: Dezentrale Governance-Rollen in Geschäftsbereichen für lokale LLM-Implementierung und Compliance-Überwachung.\n• Technical AI Architects: Technische Governance-Rollen für LLM-Architektur, Integration und Performance-Überwachung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Risikomanagement-Strategien implementiert ADVISORI für LLM-Datenlecks und wie integrieren wir diese in bestehende Enterprise-Risk-Frameworks?",
        answer: "LLM-Datenleck-Risiken erfordern spezialisierte Risikomanagement-Ansätze, die traditionelle IT-Risiken erweitern und LLM-spezifische Bedrohungen adressieren. ADVISORI entwickelt integrierte Risikomanagement-Strategien, die nahtlos in bestehende Enterprise-Risk-Frameworks eingebettet werden und kontinuierliche Risikobewertung und -minderung gewährleisten.\n\n⚠️ LLM-spezifische Risikokategorien:\n• Datenexfiltrations-Risiken: Systematische Bewertung und Minderung von Risiken unbeabsichtigter Datenpreisgabe durch LLM-Outputs, einschließlich Training-Data-Leakage und Prompt-Injection-Angriffe.\n• Modell-Inversion-Risiken: Bewertung von Risiken, bei denen Angreifer sensible Trainingsdaten durch gezielte Anfragen rekonstruieren können.\n• Compliance-Risiken: Umfassende Bewertung regulatorischer Risiken durch LLM-Nutzung, einschließlich DSGVO-Verstöße und branchenspezifische Compliance-Anforderungen.\n• Reputationsrisiken: Bewertung potenzieller Reputationsschäden durch LLM-Sicherheitsvorfälle oder unethische AI-Nutzung.\n\n🔄 Integration in Enterprise-Risk-Frameworks:\n• Risk Register Erweiterung: Integration LLM-spezifischer Risiken in bestehende Unternehmens-Risikoregister mit angemessenen Bewertungsmetriken und Kontrollmaßnahmen.\n• Three Lines of Defense Modell: Anpassung des traditionellen Drei-Linien-Modells für LLM-Risiken mit spezialisierten Rollen und Verantwortlichkeiten.\n• Kontinuierliche Risikobewertung: Implementierung dynamischer Risikobewertungsprozesse, die sich an die schnell entwickelnde LLM-Landschaft anpassen.\n• Incident Response Integration: Erweiterung bestehender Incident-Response-Pläne um LLM-spezifische Szenarien und Eskalationspfade."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie gewährleistet ADVISORI effektive Incident Response und Business Continuity bei LLM-Sicherheitsvorfällen?",
        answer: "LLM-Sicherheitsvorfälle erfordern spezialisierte Incident-Response-Verfahren, die die Einzigartigkeit von AI-Systemen berücksichtigen. ADVISORI entwickelt umfassende Incident-Response-Pläne und Business-Continuity-Strategien, die schnelle Reaktion, effektive Schadensbegrenzung und kontinuierliche Geschäftstätigkeit gewährleisten, während sie regulatorische Anforderungen erfüllen.\n\n🚨 LLM-spezifische Incident-Response-Verfahren:\n• Rapid Detection und Alerting: Implementierung spezialisierter Erkennungssysteme für LLM-Sicherheitsvorfälle mit automatischen Benachrichtigungen und Eskalationsprozessen.\n• Forensische Analyse für LLMs: Entwicklung spezialisierter forensischer Verfahren für LLM-Systeme, einschließlich Prompt-Analyse, Output-Untersuchung und Modell-Forensik.\n• Containment-Strategien: Implementierung schneller Eindämmungsmaßnahmen für LLM-Vorfälle, einschließlich Modell-Isolation, API-Abschaltung und Datenfluss-Unterbrechung.\n• Communication und Stakeholder-Management: Entwicklung von Kommunikationsplänen für verschiedene Stakeholder, einschließlich Regulierungsbehörden, Kunden und interne Teams.\n\n🔄 Business Continuity für LLM-Systeme:\n• Backup-LLM-Systeme: Implementierung redundanter LLM-Systeme und Failover-Mechanismen für kontinuierliche Geschäftstätigkeit bei Sicherheitsvorfällen.\n• Degraded-Mode-Operations: Entwicklung von Betriebsmodi mit reduzierter Funktionalität, die kritische Geschäftsprozesse auch bei LLM-Ausfällen aufrechterhalten.\n• Recovery-Strategien: Umfassende Wiederherstellungspläne für LLM-Systeme, einschließlich Modell-Retraining, Daten-Wiederherstellung und System-Rekonfiguration.\n• Lessons Learned Integration: Systematische Integration von Erkenntnissen aus Sicherheitsvorfällen in Governance-Prozesse und Präventionsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche Vendor-Management- und Third-Party-Risk-Strategien entwickelt ADVISORI für LLM-Ökosysteme?",
        answer: "LLM-Ökosysteme umfassen oft komplexe Vendor-Beziehungen und Third-Party-Services, die zusätzliche Sicherheitsrisiken schaffen. ADVISORI entwickelt umfassende Vendor-Management-Strategien, die LLM-spezifische Risiken adressieren und gleichzeitig Innovation und Flexibilität in der Lieferantenwahl ermöglichen, während sie strenge Sicherheits- und Compliance-Standards durchsetzen.\n\n🤝 LLM-Vendor-Assessment-Kriterien:\n• Sicherheitsarchitektur-Bewertung: Umfassende Bewertung der Sicherheitsarchitekturen von LLM-Anbietern, einschließlich Datenverarbeitung, Modell-Training und Infrastruktursicherheit.\n• Compliance-Zertifizierungen: Überprüfung relevanter Compliance-Zertifizierungen wie SOC2, ISO27001, DSGVO-Compliance und branchenspezifische Standards.\n• Data Residency und Sovereignty: Bewertung von Datenstandorten, grenzüberschreitenden Datentransfers und Souveränitätsanforderungen für LLM-Services.\n• Transparenz und Auditierbarkeit: Bewertung der Transparenz von Vendor-Prozessen, Audit-Rechten und Dokumentationspraktiken.\n\n🔒 Third-Party-Risk-Mitigation:\n• Contractual Security Requirements: Entwicklung spezialisierter Vertragsklauseln für LLM-Vendor, einschließlich Sicherheitsanforderungen, Incident-Notification und Audit-Rechten.\n• Continuous Vendor Monitoring: Implementierung kontinuierlicher Überwachung von Vendor-Sicherheitspraktiken und -Performance mit regelmäßigen Assessments.\n• Vendor Incident Response Coordination: Etablierung koordinierter Incident-Response-Prozesse mit LLM-Vendoren für schnelle Reaktion auf Sicherheitsvorfälle.\n• Exit-Strategien und Data Portability: Entwicklung von Exit-Strategien für Vendor-Beziehungen, einschließlich Datenportabilität und Geschäftskontinuität bei Vendor-Wechsel."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Enterprise Risk Management FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Enterprise Risk Management FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
