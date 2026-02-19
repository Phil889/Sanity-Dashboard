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
    console.log('Updating CRA Corrective Actions page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-corrective-actions' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-corrective-actions" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie gestaltet ADVISORI das Change Management für CRA-Korrekturmaßnahmen, um Mitarbeiterakzeptanz und organisatorische Transformation zu sichern?",
        answer: "Erfolgreiche CRA-Korrekturmaßnahmen erfordern nicht nur technische Änderungen, sondern auch einen kulturellen Wandel und die Akzeptanz aller Beteiligten. ADVISORI entwickelt umfassende Change Management-Strategien, die Menschen in den Mittelpunkt der Transformation stellen und nachhaltigen organisatorischen Wandel ermöglichen.\n\n👥 Menschenzentrierte Transformation:\n• Stakeholder Engagement: Systematische Einbindung aller betroffenen Personen und Gruppen in den Veränderungsprozess von der Planung bis zur Umsetzung.\n• Communication Excellence: Entwicklung transparenter, kontinuierlicher Kommunikationsstrategien, die Ängste abbauen und Motivation fördern.\n• Skills Development: Identifikation von Kompetenzlücken und Entwicklung gezielter Schulungsprogramme für alle betroffenen Rollen.\n• Cultural Alignment: Integration von Cybersecurity-Awareness in die Unternehmenskultur und Wertesysteme.\n\n🎯 ADVISORI's Change Management-Methodik:\n• Behavioral Change Psychology: Anwendung bewährter verhaltenspsychologischer Prinzipien zur Förderung nachhaltiger Verhaltensänderungen.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen durch gezielte Maßnahmen und Unterstützung.\n• Champions Network: Aufbau eines Netzwerks interner Botschafter und Multiplikatoren zur organischen Verbreitung der Veränderungen.\n• Continuous Feedback Loops: Etablierung regelmäßiger Feedback-Mechanismen zur kontinuierlichen Anpassung der Change-Strategie."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Governance-Modelle empfiehlt ADVISORI für die langfristige Überwachung und Optimierung von CRA-Compliance nach erfolgter Remediation?",
        answer: "Nachhaltige CRA-Compliance erfordert robuste Governance-Strukturen, die kontinuierliche Überwachung, proaktive Verbesserung und Anpassung an sich ändernde Anforderungen ermöglichen. ADVISORI etabliert bewährte Governance-Modelle für dauerhaft erfolgreiche Compliance-Management.\n\n🏛️ Nachhaltige Compliance-Governance:\n• Board-Level Oversight: Integration von Cybersecurity und CRA-Compliance in die Aufsichtsrats- und Vorstandsebene für strategische Steuerung.\n• Risk Committee Structures: Aufbau spezialisierter Risikoausschüsse mit klaren Mandaten für Cybersecurity und regulatorische Compliance.\n• Three Lines of Defense: Implementierung des bewährten Drei-Linien-Verteidigungsmodells für umfassende Risikokontrolle.\n• Continuous Improvement Cycles: Etablierung regelmäßiger Review- und Optimierungszyklen für alle Compliance-Prozesse.\n\n📋 ADVISORI's Governance-Excellence:\n• Integrated Risk Management: Verbindung von CRA-Compliance mit bestehenden Enterprise Risk Management-Frameworks.\n• Performance Dashboard Development: Entwicklung von Executive-Dashboards für Real-time-Übersicht über Compliance-Status und Risikokennzahlen.\n• Audit und Assurance: Aufbau interner Audit-Kapazitäten und Vorbereitung auf externe Prüfungen und Zertifizierungen.\n• Strategic Planning Integration: Einbindung von Compliance-Überlegungen in alle strategischen Planungs- und Entscheidungsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie bereitet ADVISORI Unternehmen auf Post-Incident-Analysen und Lessons Learned-Prozesse vor, um aus CRA-Compliance-Vorfällen maximalen Lerneffekt zu ziehen?",
        answer: "Compliance-Vorfälle und deren Bewältigung bieten wertvolle Lernmöglichkeiten für die kontinuierliche Verbesserung von Sicherheits- und Compliance-Systemen. ADVISORI etabliert strukturierte Post-Incident-Analyse-Prozesse, die aus jeder Herausforderung strategischen Wert generieren und die organisatorische Resilienz stärken.\n\n🔍 Systematische Post-Incident-Analyse:\n• Root Cause Analysis: Tiefgreifende Untersuchung der grundlegenden Ursachen von Compliance-Vorfällen, nicht nur der oberflächlichen Symptome.\n• Timeline Reconstruction: Detaillierte Rekonstruktion der Ereignisabläufe zur Identifikation kritischer Entscheidungspunkte und Verbesserungsmöglichkeiten.\n• Multi-Perspective Assessment: Einbeziehung verschiedener Stakeholder-Perspektiven für umfassende Lerneffekte.\n• Impact Quantification: Messbare Bewertung aller Auswirkungen - finanziell, operativ, reputativ und strategisch.\n\n📈 ADVISORI's Learning-Excellence-Framework:\n• Organizational Learning Culture: Förderung einer offenen Lernkultur, die Fehler als Verbesserungschancen betrachtet, nicht als Schuldzuweisungen.\n• Knowledge Capture und -Sharing: Systematische Erfassung und Weitergabe von Lessons Learned an alle relevanten Organisationsbereiche.\n• Process Improvement Integration: Direkte Übertragung der Lernergebnisse in konkrete Verbesserungen von Prozessen, Systemen und Verfahren.\n• Predictive Improvement Planning: Nutzung der Analyse-Ergebnisse zur proaktiven Identifikation und Adressierung potenzieller zukünftiger Schwachstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Welche langfristigen strategischen Vorteile können Unternehmen durch die professionelle Bewältigung von CRA-Compliance-Herausforderungen mit ADVISORI erzielen?",
        answer: "Die professionelle Bewältigung von CRA-Compliance-Herausforderungen kann weit über die reine Regulatory Compliance hinausgehen und zu nachhaltigen strategischen Wettbewerbsvorteilen führen. ADVISORI positioniert Compliance-Exzellenz als strategischen Enabler für Geschäftswachstum und Marktführerschaft.\n\n🚀 Strategische Transformation durch Compliance-Excellence:\n• Market Leadership durch Security Excellence: Demonstration von Cybersecurity-Führerschaft als differenzierender Wettbewerbsvorteil und Vertrauensbildner.\n• Innovation Enablement: Solide Compliance-Grundlagen als Basis für sichere Innovation und die Erschließung neuer digitaler Geschäftsmöglichkeiten.\n• Operational Excellence: Integration von Sicherheits- und Compliance-Prozessen in operative Exzellenz-Programme für erhöhte Effizienz.\n• Stakeholder Trust Building: Nachgewiesene Compliance-Kompetenz als Vertrauensgrundlage für Kunden, Partner und Investoren.\n\n🎯 ADVISORI's Strategic Value Creation:\n• Business-IT Alignment: Optimale Abstimmung von Cybersecurity-Investitionen mit strategischen Geschäftszielen und Wachstumsplänen.\n• Ecosystem Advantage: Aufbau von Partnerschaften und Allianzen basierend auf gemeinsamen Sicherheits- und Compliance-Standards.\n• Talent Attraction: Positionierung als attraktiver Arbeitgeber für Cybersecurity-Talente durch demonstrierte Sicherheitsexzellenz.\n• Future-Ready Positioning: Vorbereitung auf zukünftige regulatorische Entwicklungen und Marktanforderungen durch proaktive Compliance-Kultivierung."
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
