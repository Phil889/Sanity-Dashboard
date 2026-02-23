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
    console.log('Updating CIS Controls Priorisierung & Risikoanalyse page with C-Level FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cis-controls-priorisierung-risikoanalys' })
    
    if (!existingDoc) {
      throw new Error('Document "cis-controls-priorisierung-risikoanalys" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir durch CIS Controls Priorisierung unsere Supply-Chain-Security optimieren und gleichzeitig Vendor-Management-Prozesse verbessern?",
        answer: "Supply-Chain-Security ist zu einem der kritischsten Cyber-Risikofaktoren geworden, mit über 60% aller erfolgreichen Cyber-Angriffe, die über Drittanbieter erfolgen. Eine strategische CIS Controls Priorisierung bietet Ihnen einen systematischen Ansatz zur Absicherung Ihrer gesamten Wertschöpfungskette und kann gleichzeitig Ihre Vendor-Management-Prozesse erheblich professionalisieren.\n\n🔗 Supply-Chain-Security durch strategische CIS Controls:\n• Vendor-Risk-Assessment-Framework: Systematische Bewertung von Lieferanten anhand priorisierter CIS Controls zur objektiven Risikobewertung und Due-Diligence-Optimierung.\n• Third-Party-Monitoring: Kontinuierliche Überwachung der Security-Posture kritischer Vendor mit automatisierten Compliance-Checks und Frühwarnsystemen.\n• Contractual-Security-Standards: Integration spezifischer CIS Controls Anforderungen in Vendor-Verträge mit messbaren SLAs und Penalty-Mechanismen.\n• Incident-Response-Coordination: Entwicklung integrierter Incident-Response-Prozesse, die Vendor-Breaches automatisch in Ihre Cyber-Defense-Strategie einbeziehen.\n\n⚙️ Vendor-Management-Transformation durch Controls-Priorisierung:\n• Risikobasierte Vendor-Segmentierung: Klassifizierung von Lieferanten nach Kritikalität und entsprechende Anwendung differenzierter CIS Controls Anforderungen.\n• Automated-Compliance-Monitoring: Implementierung von Tools zur kontinuierlichen Überwachung der Vendor-Compliance mit minimierten manuellen Aufwänden.\n• Performance-Based-Contracting: Entwicklung von Vertragsmodellen, die Security-Performance incentivieren und Best-Practice-Sharing fördern.\n• Strategic-Partnership-Development: Transformation kritischer Vendor-Beziehungen zu strategischen Security-Partnerschaften mit gemeinsamen Threat-Intelligence und koordinierten Defense-Strategien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Auswirkungen hat die CIS Controls Priorisierung auf unsere M&A-Aktivitäten und wie können wir sie für Due-Diligence-Prozesse nutzen?",
        answer: "CIS Controls Priorisierung revolutioniert M&A-Due-Diligence-Prozesse und kann zu einem strategischen Differenzierungsfaktor bei Akquisitionen werden. Durch systematische Security-Bewertung können Sie nicht nur Cyber-Risiken bei Übernahmen minimieren, sondern auch Post-Merger-Integration beschleunigen und Synergien maximieren.\n\n🔍 M&A-Due-Diligence-Transformation durch CIS Controls:\n• Objektive Security-Bewertung: Standardisierte Bewertungsmatrix für die Cyber-Security-Posture von Akquisitionszielen basierend auf CIS Controls Implementation.\n• Quantifizierte Risikomodellierung: Präzise Berechnung von Cyber-Risiken und deren finanziellen Auswirkungen auf Deal-Valuation und Kaufpreisanpassungen.\n• Integration-Roadmap-Development: Entwicklung detaillierter Security-Integration-Pläne bereits während der Due-Diligence-Phase zur Beschleunigung der Post-Merger-Integration.\n• Regulatory-Compliance-Assessment: Systematische Bewertung der Combined-Entity-Compliance-Anforderungen und Identifikation kritischer Integration-Dependencies.\n\n⚡ Strategic M&A Advantages durch Controls-Expertise:\n• Accelerated-Integration: Vordefinierte Security-Integration-Playbooks reduzieren Post-Merger-Integration-Zeit um 30-50% bei gleichzeitig höherer Security-Qualität.\n• Value-Creation-Opportunities: Identifikation von Security-Synergien und Cross-Selling-Opportunitäten durch verbesserte Combined-Entity-Security-Posture.\n• Risk-Mitigation-Strategies: Entwicklung spezifischer Risk-Mitigation-Strategien für identifizierte Security-Gaps mit klaren Timelines und Budgets.\n• Competitive-Intelligence: Nutzung der Security-Assessment-Expertise zur Bewertung der Cyber-Resilienz von Wettbewerbern und Identification strategischer Vulnerabilities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir CIS Controls Priorisierung nutzen, um unsere Incident-Response-Fähigkeiten zu stärken und Business-Continuity zu verbessern?",
        answer: "CIS Controls Priorisierung geht weit über präventive Maßnahmen hinaus und kann Ihre Incident-Response-Fähigkeiten dramatisch verbessern. Durch strategische Fokussierung auf die wirksamsten Detection- und Response-Controls können Sie Ihre Mean Time to Detection (MTTD) und Mean Time to Response (MTTR) erheblich reduzieren und gleichzeitig Business-Continuity-Resilienz stärken.\n\n🚨 Incident-Response-Optimierung durch strategische Controls:\n• Detection-Capability-Enhancement: Priorisierung der CIS Controls mit höchstem Detection-Value (insbesondere Controls 6, 8, und 13) für frühere Bedrohungserkennung.\n• Response-Automation: Implementierung automatisierter Response-Mechanismen basierend auf priorisierten Controls zur Reduktion der MTTR um bis zu 70%.\n• Threat-Hunting-Capabilities: Entwicklung proaktiver Threat-Hunting-Programme, die auf den effektivsten CIS Controls basieren und Advanced Persistent Threats identifizieren.\n• Forensic-Readiness: Strategische Implementierung von Logging- und Monitoring-Controls, die Forensic-Analysen beschleunigen und rechtliche Verwertbarkeit sicherstellen.\n\n🛡️ Business-Continuity-Resilienz durch Controls-Integration:\n• Critical-Asset-Protection: Priorisierung von Controls zum Schutz geschäftskritischer Systeme und Daten mit minimalen Recovery-Time-Objectives (RTO).\n• Backup-and-Recovery-Optimization: Strategische Implementierung von Data-Recovery-Controls (Control 11) mit Business-Impact-orientierten Recovery-Prioritäten.\n• Communication-Continuity: Sicherstellung kontinuierlicher Stakeholder-Kommunikation auch während Cyber-Incidents durch robuste Communication-Channels.\n• Lessons-Learned-Integration: Systematische Integration von Incident-Learnings in die Controls-Priorisierung für kontinuierliche Resilienz-Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche regulatorischen Vorteile können wir durch strategische CIS Controls Priorisierung erzielen und wie unterstützt dies unsere Compliance-Strategie?",
        answer: "Strategische CIS Controls Priorisierung kann Ihre regulatorische Compliance-Strategie transformieren und zu einem erheblichen Wettbewerbsvorteil werden. Durch intelligente Auswahl und Implementierung der Controls können Sie nicht nur multiple Compliance-Anforderungen gleichzeitig erfüllen, sondern auch Audit-Aufwände reduzieren und Regulatoren-Beziehungen stärken.\n\n📋 Multi-Regulatory-Compliance durch strategische Controls:\n• Framework-Harmonisierung: Mapping der CIS Controls auf multiple Regulierungs-Frameworks (ISO 27001, NIST CSF, SOC 2, GDPR/DSGVO) für effiziente Multi-Compliance-Strategien.\n• Audit-Efficiency-Gains: Konsolidierte Evidence-Collection für multiple Audits durch strategisch ausgewählte Controls mit 40-60% Aufwandsreduktion.\n• Regulatory-Change-Adaptability: Flexible Controls-Architektur, die sich schnell an neue regulatorische Anforderungen anpassen lässt ohne komplette Neuimplementierung.\n• Proactive-Compliance: Antizipation zukünftiger regulatorischer Trends durch forward-looking Controls-Auswahl und Early-Adopter-Vorteile.\n\n🎯 Strategische Regulatoren-Beziehungen und Reputation:\n• Demonstrable-Due-Diligence: Dokumentierte, wissenschaftlich fundierte Controls-Priorisierung als Nachweis angemessener Sorgfaltspflicht bei regulatorischen Prüfungen.\n• Industry-Leadership-Positioning: Positionierung als Best-Practice-Beispiel durch innovative Controls-Implementation mit Reputation-Benefits und Peer-Recognition.\n• Regulatory-Sandbox-Opportunities: Qualifikation für regulatorische Sandbox-Programme durch nachweislich robuste Security-Governance.\n• Penalty-Mitigation: Reduzierte Strafen bei eventuellen Compliance-Verletzungen durch dokumentierte Good-Faith-Efforts und systematische Controls-Implementation."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
