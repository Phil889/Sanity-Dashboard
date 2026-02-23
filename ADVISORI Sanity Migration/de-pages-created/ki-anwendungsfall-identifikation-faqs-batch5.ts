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
    console.log('Updating KI-Anwendungsfall-Identifikation page with FAQs batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-anwendungsfall-identifikation' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-anwendungsfall-identifikation" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Bedeutung hat die kulturelle Transformation für die erfolgreiche Identifikation und Umsetzung von KI-Anwendungsfällen?',
        answer: "Die kulturelle Transformation ist oft der entscheidende, aber unterschätzte Faktor für den Erfolg von KI-Initiativen. ADVISORI integriert Change Management und Kulturentwicklung systematisch in die Use Case Identifikation, um eine datengetriebene und innovationsoffene Unternehmenskultur zu fördern, die KI-Adoption nachhaltig unterstützt.\n\n🧠 Kulturelle Readiness-Bewertung:\n• Innovationsbereitschaft: Analyse der organisatorischen Offenheit für neue Technologien und Veränderungen sowie Identifikation kultureller Barrieren für KI-Adoption.\n• Datenkultur-Assessment: Bewertung der bestehenden Datenkultur und des Verständnisses für datengetriebene Entscheidungsfindung im Unternehmen.\n• Risikobereitschaft: Analyse der Unternehmenskultur hinsichtlich Experimentierfreudigkeit und Toleranz für iterative Lernprozesse bei KI-Projekten.\n• Kollaborationskultur: Bewertung der Fähigkeit zur cross-funktionalen Zusammenarbeit, die für erfolgreiche KI-Projekte essentiell ist.\n\n🔄 Kulturwandel-Strategien für KI-Erfolg:\n• Leadership-Engagement: Entwicklung von Strategien zur Sicherstellung starker Führungsunterstützung für KI-Initiativen und kulturellen Wandel.\n• Kommunikations-Frameworks: Aufbau transparenter Kommunikationsstrukturen, die Ängste abbauen und Verständnis für KI-Potenziale schaffen.\n• Erfolgsgeschichten-Sharing: Systematische Kommunikation von KI-Erfolgen und Lernerfahrungen zur Stärkung des Vertrauens in KI-Technologien.\n• Incentive-Alignment: Anpassung von Anreizsystemen und Performance-Metriken zur Unterstützung datengetriebener Entscheidungsfindung und KI-Adoption."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie gewährleistet ADVISORI die Nachhaltigkeit und kontinuierliche Weiterentwicklung identifizierter KI-Anwendungsfälle?',
        answer: "Nachhaltigkeit von KI-Anwendungsfällen erfordert mehr als nur erfolgreiche Implementierung – sie benötigt kontinuierliche Optimierung, Anpassung und Weiterentwicklung. ADVISORI entwickelt Frameworks für das langfristige Management von KI-Use Cases, die Wertschöpfung maximieren und technologische Evolution berücksichtigen.\n\n🔄 Kontinuierliche Optimierungs-Frameworks:\n• Performance-Monitoring: Implementierung umfassender Monitoring-Systeme zur kontinuierlichen Überwachung von KI-Performance, Geschäftswert und Nutzererfahrung.\n• Adaptive Learning: Etablierung von Prozessen zur kontinuierlichen Verbesserung von KI-Modellen basierend auf neuen Daten und sich ändernden Geschäftsanforderungen.\n• Feedback-Integration: Systematische Erfassung und Integration von Nutzer-Feedback zur kontinuierlichen Optimierung von KI-Anwendungen.\n• Technology-Refresh: Planung regelmäßiger Technologie-Updates und -Upgrades zur Aufrechterhaltung der Wettbewerbsfähigkeit.\n\n📈 Langfristige Wertschöpfungs-Strategien:\n• Skalierungs-Roadmaps: Entwicklung von Strategien zur schrittweisen Ausweitung erfolgreicher Use Cases auf neue Bereiche und Anwendungsfelder.\n• Innovation-Pipelines: Etablierung von Prozessen zur kontinuierlichen Identifikation und Entwicklung neuer KI-Anwendungsfälle basierend auf Lernerfahrungen.\n• Ecosystem-Evolution: Aufbau von KI-Ökosystemen, die sich selbst verstärken und kontinuierlich neue Wertschöpfungsmöglichkeiten generieren.\n• Knowledge-Management: Systematische Erfassung und Weitergabe von KI-Expertise und Lernerfahrungen für zukünftige Projekte und Organisationsentwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielen regulatorische Entwicklungen und Compliance-Anforderungen bei der strategischen KI-Anwendungsfall-Planung?',
        answer: "Regulatorische Entwicklungen prägen zunehmend die KI-Landschaft und müssen proaktiv in die Use Case Planung integriert werden. ADVISORI verfolgt einen vorausschauenden Compliance-Ansatz, der nicht nur aktuelle Anforderungen erfüllt, sondern auch zukünftige regulatorische Entwicklungen antizipiert und Unternehmen für eine sich wandelnde Rechtslandschaft positioniert.\n\n⚖️ Proaktive Regulatory Intelligence:\n• Regulierungs-Monitoring: Kontinuierliche Überwachung regulatorischer Entwicklungen auf EU-, nationaler und branchenspezifischer Ebene, einschließlich EU AI Act, DSGVO-Updates und sektoraler Regulierungen.\n• Impact-Assessment: Systematische Bewertung der Auswirkungen neuer Regulierungen auf bestehende und geplante KI-Anwendungsfälle.\n• Compliance-Roadmapping: Entwicklung von Compliance-Roadmaps, die regulatorische Meilensteine mit Use Case Entwicklung synchronisieren.\n• Stakeholder-Engagement: Aufbau von Beziehungen zu Regulierungsbehörden und Branchenverbänden für frühzeitige Einblicke in regulatorische Trends.\n\n🛡️ Compliance-by-Design für KI-Use Cases:\n• Regulatory-First-Ansatz: Integration regulatorischer Anforderungen als Grundlage für Use Case Design, nicht als nachträgliche Anpassung.\n• Dokumentations-Standards: Entwicklung umfassender Dokumentationsstandards, die regulatorische Transparenz- und Nachweispflichten erfüllen.\n• Audit-Readiness: Aufbau von Systemen und Prozessen, die kontinuierliche Compliance-Überwachung und Audit-Bereitschaft gewährleisten.\n• Risk-Mitigation: Entwicklung von Strategien zur Minimierung regulatorischer Risiken durch proaktive Compliance-Maßnahmen und Risikomanagement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie unterstützt ADVISORI bei der Entwicklung einer unternehmensweiten KI-Governance-Strategie basierend auf identifizierten Anwendungsfällen?',
        answer: "Eine effektive KI-Governance-Strategie ist das Fundament für nachhaltigen KI-Erfolg und muss auf den spezifischen Anwendungsfällen und Geschäftsanforderungen des Unternehmens basieren. ADVISORI entwickelt maßgeschneiderte Governance-Frameworks, die strategische Ziele mit operativer Exzellenz und regulatorischer Compliance verbinden.\n\n🏛️ Strategische Governance-Architektur:\n• Governance-Framework-Design: Entwicklung umfassender KI-Governance-Strukturen, die Entscheidungsprozesse, Verantwortlichkeiten und Kontrollmechanismen für alle identifizierten Use Cases definieren.\n• Stakeholder-Integration: Einbindung aller relevanten Stakeholder in Governance-Strukturen, von C-Level über IT und Compliance bis hin zu Fachbereichen.\n• Policy-Entwicklung: Erstellung detaillierter KI-Richtlinien und -Standards, die ethische, rechtliche und geschäftliche Anforderungen berücksichtigen.\n• Decision-Making-Prozesse: Etablierung klarer Entscheidungsprozesse für KI-Investitionen, -Implementierungen und -Optimierungen.\n\n🔧 Operative Governance-Umsetzung:\n• Governance-Tools: Implementierung von Tools und Systemen zur Unterstützung von KI-Governance-Prozessen, einschließlich Monitoring, Reporting und Compliance-Tracking.\n• Training und Awareness: Entwicklung umfassender Schulungsprogramme zur Stärkung des KI-Governance-Verständnisses in der gesamten Organisation.\n• Kontinuierliche Verbesserung: Etablierung von Feedback-Mechanismen und Review-Prozessen zur kontinuierlichen Optimierung der Governance-Strukturen.\n• Performance-Messung: Definition von KPIs und Metriken zur Bewertung der Effektivität von KI-Governance und deren Beitrag zum Geschäftserfolg."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
