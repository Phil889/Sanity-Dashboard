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
    console.log('Updating DORA Implementation Framework page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-implementation-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-implementation-framework" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bietet ein strukturiertes DORA Implementation Framework für Finanzunternehmen?',
        answer: "Ein strategisches DORA Implementation Framework ist weit mehr als nur ein Compliance-Instrument – es ist ein transformativer Ansatz, der operative Resilienz mit nachhaltigen Geschäftsvorteilen verbindet. Ein durchdachtes Framework ermöglicht es Finanzunternehmen, DORA-Anforderungen nicht nur zu erfüllen, sondern als Katalysator für organisatorische Exzellenz und Wettbewerbsvorteile zu nutzen.\n\n🎯 Strategische Geschäftstransformation:\n• Operative Resilienz als Wettbewerbsvorteil: Ein robustes DORA Framework stärkt die Widerstandsfähigkeit gegen Cyber-Bedrohungen und Betriebsstörungen, was zu erhöhter Kundenzufriedenheit und Marktvertrauen führt.\n• Risikotransparenz und -steuerung: Systematische Identifikation und Bewertung von ICT-Risiken ermöglicht präzise Entscheidungsfindung und optimierte Ressourcenallokation für Sicherheitsinvestitionen.\n• Regulatorische Führungsposition: Frühzeitige und umfassende DORA-Compliance positioniert Ihr Unternehmen als vertrauenswürdigen Marktführer und kann Geschäftsmöglichkeiten mit regulierungsbewussten Partnern eröffnen.\n• Innovation Enablement: Robuste Governance-Strukturen und Risikomanagement-Frameworks schaffen die Grundlage für sichere Implementierung neuer Technologien und Geschäftsmodelle.\n\n🏗️ Organisatorische Exzellenz durch strukturierte Implementation:\n• Ganzheitliche Transformation: DORA Implementation erfordert die Integration von Governance, Risikomanagement, Technologie und Kultur, was zu einer umfassenden organisatorischen Modernisierung führt.\n• Prozessoptimierung: Die Implementierung von DORA-konformen Prozessen identifiziert und eliminiert Ineffizienzen, verbessert die operative Effizienz und reduziert Betriebskosten.\n• Stakeholder-Vertrauen: Transparente Governance-Strukturen und nachweisbare Risikomanagement-Fähigkeiten stärken das Vertrauen von Investoren, Aufsichtsbehörden und Geschäftspartnern.\n• Talentattraktivität: Moderne, gut strukturierte Arbeitsumgebungen mit klaren Governance-Frameworks ziehen qualifizierte Fachkräfte an und verbessern die Mitarbeiterbindung.\n\n💡 Langfristige Wertschöpfung:\n• Skalierbare Frameworks: Gut konzipierte DORA Implementation Frameworks sind erweiterbar und anpassungsfähig, was zukünftige regulatorische Änderungen und Geschäftswachstum unterstützt.\n• Kostenoptimierung: Strukturierte Ansätze reduzieren Implementierungskosten, vermeiden Doppelarbeit und maximieren den Return on Investment für Compliance-Initiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine effektive DORA Governance-Struktur, die sowohl regulatorische Anforderungen erfüllt als auch operative Effizienz maximiert?',
        answer: "Eine effektive DORA Governance-Struktur erfordert eine ausgewogene Balance zwischen regulatorischer Compliance und operativer Agilität. Sie muss klare Verantwortlichkeiten definieren, Entscheidungsprozesse optimieren und gleichzeitig die Flexibilität bewahren, die für moderne Finanzdienstleistungen erforderlich ist.\n\n🏛️ Strategische Governance-Architektur:\n• Board-Level Oversight: Etablierung eines dedizierten Board-Komitees oder Integration von DORA-Verantwortlichkeiten in bestehende Risiko- oder Audit-Komitees mit klaren Berichtswegen und Entscheidungsbefugnissen.\n• Three Lines of Defense Integration: Nahtlose Integration von DORA-Governance in das bestehende Three Lines of Defense Modell mit klarer Abgrenzung zwischen operativer Verantwortung, Risikomanagement und interner Revision.\n• Cross-funktionale Koordination: Schaffung von DORA-spezifischen Steering Committees und Working Groups, die IT, Risikomanagement, Compliance, Geschäftsbereiche und externe Dienstleister koordinieren.\n• Escalation Frameworks: Definition klarer Eskalationswege für DORA-relevante Vorfälle, Risiken und Entscheidungen mit angemessenen Zeitrahmen und Verantwortlichkeiten.\n\n📋 Operative Governance-Mechanismen:\n• Policy Framework Development: Entwicklung einer hierarchischen Policy-Struktur von High-Level-Prinzipien bis zu detaillierten Arbeitsanweisungen, die DORA-Anforderungen in praktische Handlungsrichtlinien übersetzt.\n• Role-Based Access Control: Implementation von rollenbasierten Zugriffs- und Genehmigungsstrukturen, die sowohl Sicherheitsanforderungen als auch operative Effizienz berücksichtigen.\n• Performance Management Integration: Einbindung von DORA-relevanten KPIs und Zielen in individuelle und organisatorische Performance Management Systeme.\n• Continuous Improvement Mechanisms: Etablierung regelmäßiger Governance Reviews, Lessons Learned Prozesse und Feedback-Schleifen zur kontinuierlichen Optimierung der Governance-Effektivität.\n\n🔄 Agile Governance-Prinzipien:\n• Risk-Based Decision Making: Implementierung risikobasierter Entscheidungsprozesse, die schnelle Reaktionen auf sich ändernde Bedrohungslandschaften ermöglichen, ohne die Governance-Integrität zu kompromittieren.\n• Automated Compliance Monitoring: Nutzung von Technologie zur Automatisierung von Routine-Governance-Aktivitäten, um menschliche Ressourcen für strategische Aufgaben freizusetzen.\n• Stakeholder Engagement: Strukturierte Einbindung aller relevanten Stakeholder in Governance-Prozesse durch regelmäßige Kommunikation, Feedback-Mechanismen und partizipative Entscheidungsfindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Erfolgsfaktoren müssen bei der organisatorischen Transformation für DORA-Compliance berücksichtigt werden?',
        answer: "Die organisatorische Transformation für DORA-Compliance ist ein komplexer Change-Prozess, der technische, kulturelle und strukturelle Dimensionen umfasst. Erfolgreiche Transformationen erfordern einen ganzheitlichen Ansatz, der Menschen, Prozesse und Technologie gleichermaßen berücksichtigt und dabei die spezifischen Herausforderungen des Finanzdienstleistungssektors adressiert.\n\n👥 Menschen und Kultur:\n• Leadership Commitment: Sichtbare und konsistente Unterstützung durch die Geschäftsleitung ist entscheidend für den Erfolg der Transformation. Leaders müssen als Vorbilder fungieren und die Bedeutung von DORA-Compliance in ihrer Kommunikation und ihren Entscheidungen demonstrieren.\n• Change Champions Network: Aufbau eines Netzwerks von Change Champions in verschiedenen Geschäftsbereichen, die als Multiplikatoren fungieren und die Transformation auf operativer Ebene vorantreiben.\n• Kompetenzentwicklung: Systematische Identifikation von Skill Gaps und Entwicklung gezielter Schulungsprogramme, die sowohl technische DORA-Kenntnisse als auch Change Management Fähigkeiten vermitteln.\n• Kulturwandel: Förderung einer Sicherheits- und Compliance-Kultur, die proaktives Risikomanagement und kontinuierliche Verbesserung als Kernwerte etabliert.\n\n🔧 Prozess-Transformation:\n• Process Reengineering: Fundamentale Überarbeitung bestehender Geschäftsprozesse zur Integration von DORA-Anforderungen, wobei Effizienz und Compliance gleichermaßen optimiert werden.\n• Workflow Automation: Implementierung automatisierter Workflows für DORA-relevante Aktivitäten wie Risikobewertungen, Incident Response und Compliance Monitoring.\n• Quality Assurance: Etablierung robuster Qualitätssicherungsmechanismen, die sicherstellen, dass neue Prozesse konsistent und effektiv implementiert werden.\n• Continuous Monitoring: Aufbau von Monitoring-Systemen, die die Effektivität der Prozess-Transformation kontinuierlich überwachen und Optimierungsmöglichkeiten identifizieren.\n\n🏗️ Strukturelle Anpassungen:\n• Organisationsdesign: Anpassung der Organisationsstruktur zur Unterstützung von DORA-Anforderungen, einschließlich neuer Rollen, Verantwortlichkeiten und Berichtswege.\n• Governance Integration: Nahtlose Integration von DORA-Governance in bestehende Unternehmensstrukturen ohne Schaffung von Silos oder Redundanzen.\n• Resource Allocation: Strategische Allokation von personellen und finanziellen Ressourcen zur Unterstützung der Transformation, einschließlich Investitionen in Technologie und externe Expertise.\n• Performance Measurement: Entwicklung von Metriken und KPIs, die den Fortschritt der organisatorischen Transformation messbar machen und kontinuierliche Verbesserung ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie kann man die Kosten-Nutzen-Relation einer DORA Implementation optimieren und nachhaltigen ROI sicherstellen?',
        answer: "Die Optimierung der Kosten-Nutzen-Relation einer DORA Implementation erfordert einen strategischen Ansatz, der kurzfristige Compliance-Kosten mit langfristigen Geschäftsvorteilen ausbalanciert. Erfolgreiche Organisationen betrachten DORA nicht als Kostenfaktor, sondern als Investition in operative Exzellenz und Zukunftsfähigkeit.\n\n💰 Strategische ROI-Maximierung:\n• Value-Based Implementation: Priorisierung von DORA-Maßnahmen basierend auf ihrem Beitrag zu Geschäftszielen und Risikoreduktion, nicht nur auf regulatorischen Anforderungen.\n• Synergieeffekte nutzen: Integration von DORA-Initiativen mit anderen regulatorischen Projekten und Geschäftstransformationen zur Maximierung von Synergien und Kosteneinsparungen.\n• Phased Approach: Implementierung in strategisch geplanten Phasen, die schnelle Wins ermöglichen und Cashflow-positive Ergebnisse in frühen Phasen generieren.\n• Business Case Development: Entwicklung robuster Business Cases, die sowohl quantifizierbare als auch qualitative Vorteile berücksichtigen und regelmäßig aktualisiert werden.\n\n📊 Kostenoptimierung durch intelligente Ressourcennutzung:\n• Shared Services Model: Entwicklung von Shared Services für DORA-relevante Funktionen, die Skaleneffekte nutzen und Redundanzen eliminieren.\n• Technology Leverage: Strategische Nutzung von Automatisierung, KI und Cloud-Technologien zur Reduzierung manueller Aufwände und Betriebskosten.\n• Outsourcing Strategy: Selektives Outsourcing spezialisierter DORA-Funktionen an qualifizierte Dienstleister, um interne Ressourcen für strategische Aufgaben zu reservieren.\n• Vendor Consolidation: Konsolidierung von Lieferanten und Verhandlung von Rahmenverträgen zur Erzielung besserer Konditionen und reduzierter Verwaltungskosten.\n\n🎯 Messbare Wertschöpfung:\n• Risk Reduction Quantification: Quantifizierung der Risikoreduktion durch DORA-Maßnahmen in monetären Begriffen, einschließlich vermiedener Verluste und reduzierter Versicherungsprämien.\n• Operational Efficiency Gains: Messung und Monetarisierung von Effizienzsteigerungen durch verbesserte Prozesse, reduzierte Ausfallzeiten und optimierte Ressourcennutzung.\n• Revenue Enhancement: Identifikation und Realisierung von Umsatzsteigerungen durch verbesserte Kundenvertrauen, neue Geschäftsmöglichkeiten und Marktdifferenzierung.\n• Long-term Value Creation: Bewertung langfristiger Wertschöpfung durch verbesserte Resilienz, Innovationsfähigkeit und strategische Flexibilität.\n\n🔄 Kontinuierliche Optimierung:\n• Performance Monitoring: Implementierung kontinuierlicher Monitoring-Systeme zur Verfolgung von ROI-Metriken und Identifikation von Optimierungsmöglichkeiten.\n• Lessons Learned Integration: Systematische Erfassung und Integration von Lessons Learned zur kontinuierlichen Verbesserung der Implementation-Effizienz.\n• Adaptive Planning: Flexible Anpassung der Implementation-Strategie basierend auf sich ändernden Geschäftsanforderungen und regulatorischen Entwicklungen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
