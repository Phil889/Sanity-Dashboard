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
    console.log('Updating KI-Governance page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-governance" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt ADVISORI maßgeschneiderte KI-Governance-Strukturen, die sowohl globale Compliance-Anforderungen als auch lokale Geschäftsrealitäten berücksichtigen?',
        answer: "Die Entwicklung effektiver KI-Governance erfordert ein tiefes Verständnis sowohl globaler regulatorischer Trends als auch lokaler Geschäftskontexte. ADVISORI entwickelt adaptive Governance-Frameworks, die internationale Standards erfüllen und gleichzeitig die spezifischen Anforderungen Ihres Unternehmens, Ihrer Branche und Ihres Marktes berücksichtigen.\n\n🌍 Globale Compliance-Integration:\n• Multi-jurisdiktionale Regulatorik: Berücksichtigung verschiedener regulatorischer Frameworks wie DSGVO, AI Act, CCPA und branchenspezifische Vorschriften in einem kohärenten Governance-System.\n• Internationale Best Practices: Integration bewährter Governance-Praktiken aus verschiedenen Märkten und Branchen für umfassende Compliance-Abdeckung.\n• Cross-Border-Koordination: Entwicklung von Governance-Strukturen, die grenzüberschreitende Datenflüsse und internationale Geschäftstätigkeiten unterstützen.\n• Regulatorische Harmonisierung: Schaffung einheitlicher Governance-Standards, die verschiedene regulatorische Anforderungen effizient erfüllen.\n\n🏢 Lokale Geschäftsanpassung:\n• Unternehmenskultur-Integration: Anpassung der Governance-Frameworks an Ihre spezifische Unternehmenskultur, Werte und Arbeitsweisen für maximale Akzeptanz.\n• Branchenspezifische Anforderungen: Berücksichtigung spezifischer Governance-Herausforderungen Ihrer Branche, von Finanzdienstleistungen bis hin zu Healthcare oder Manufacturing.\n• Stakeholder-Erwartungen: Integration der Erwartungen verschiedener Stakeholder-Gruppen, von Kunden über Investoren bis hin zu Regulierungsbehörden.\n• Operative Realitäten: Entwicklung praktikabler Governance-Prozesse, die in Ihre bestehenden Geschäftsabläufe integriert werden können.\n\n🔧 ADVISORI Maßschneiderungs-Ansatz:\n• Umfassende Governance-Assessments zur Identifikation spezifischer Anforderungen und Herausforderungen.\n• Modulare Framework-Entwicklung, die globale Standards mit lokalen Anpassungen kombiniert.\n• Iterative Implementierung mit kontinuierlicher Anpassung basierend auf praktischen Erfahrungen.\n• Change Management-Unterstützung für erfolgreiche Governance-Adoption in Ihrer Organisation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche konkreten Governance-Mechanismen implementiert ADVISORI, um KI-Bias zu verhindern und Fairness in algorithmischen Entscheidungen sicherzustellen?',
        answer: "Bias-Prevention und Fairness-Sicherung sind zentrale Elemente effektiver KI-Governance. ADVISORI entwickelt umfassende Governance-Mechanismen, die systematisch Verzerrungen identifizieren, verhindern und kontinuierlich überwachen, um faire und diskriminierungsfreie KI-Systeme zu gewährleisten.\n\n🔍 Systematische Bias-Detection-Governance:\n• Multi-Level-Bias-Assessments: Implementierung von Governance-Prozessen zur Identifikation von Bias auf Daten-, Algorithmus- und Output-Ebene durch strukturierte Bewertungsverfahren.\n• Kontinuierliche Monitoring-Frameworks: Aufbau von Governance-Strukturen für laufende Bias-Überwachung mit automatisierten Alerts und Eskalationsprozessen.\n• Stakeholder-Diversität in Governance: Integration verschiedener Perspektiven in Governance-Committees zur Identifikation potenzieller Blind Spots.\n• Historical Bias-Analyse: Governance-Prozesse zur systematischen Analyse historischer Daten auf versteckte Verzerrungen.\n\n⚖️ Fairness-Governance-Frameworks:\n• Fairness-Metriken-Definition: Entwicklung unternehmensweiter Standards für Fairness-Messung mit klaren Schwellenwerten und Bewertungskriterien.\n• Algorithmic Accountability-Strukturen: Implementierung von Governance-Mechanismen zur Verantwortlichkeitszuweisung für algorithmische Entscheidungen.\n• Transparenz-Governance: Aufbau von Strukturen für nachvollziehbare Entscheidungsprozesse und Stakeholder-Kommunikation über Fairness-Maßnahmen.\n• Remediation-Prozesse: Governance-Frameworks für schnelle Korrekturmaßnahmen bei identifizierten Fairness-Problemen.\n\n🛡️ Präventive Governance-Maßnahmen:\n• Inclusive Design-Governance: Integration von Diversitäts- und Inklusionsaspekten in alle Phasen der KI-Entwicklung durch strukturierte Governance-Prozesse.\n• Data Governance für Fairness: Implementierung von Datenqualitäts- und Repräsentativitäts-Standards als Teil der übergeordneten Governance-Struktur.\n• Ethical Review-Boards: Aufbau spezialisierter Governance-Gremien für ethische Bewertung von KI-Systemen vor der Implementierung.\n• Continuous Learning-Governance: Etablierung von Feedback-Schleifen und Lernmechanismen zur kontinuierlichen Verbesserung der Fairness-Governance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie strukturiert ADVISORI effektive KI-Governance-Committees und welche Rollen, Verantwortlichkeiten und Entscheidungsprozesse sind für nachhaltigen Erfolg entscheidend?',
        answer: "Effektive KI-Governance-Committees sind das Herzstück erfolgreicher AI-Governance. ADVISORI entwickelt strukturierte Governance-Gremien mit klaren Rollen, definierten Verantwortlichkeiten und effizienten Entscheidungsprozessen, die sowohl strategische Führung als auch operative Exzellenz gewährleisten.\n\n👥 Strategische Committee-Strukturierung:\n• Multi-Level-Governance-Architektur: Aufbau hierarchischer Governance-Strukturen von Executive-Level bis zu operativen Teams mit klaren Eskalationswegen und Entscheidungskompetenzen.\n• Cross-funktionale Zusammensetzung: Integration von Vertretern aus IT, Legal, Compliance, Business Units, HR und externen Stakeholdern für umfassende Perspektiven.\n• Expertise-basierte Rollenverteilung: Zuweisung spezifischer Governance-Rollen basierend auf fachlicher Kompetenz und organisatorischer Verantwortung.\n• Stakeholder-Repräsentation: Sicherstellung angemessener Vertretung aller relevanten Interessensgruppen in Governance-Entscheidungen.\n\n🎯 Klare Rollen und Verantwortlichkeiten:\n• AI Governance Officer: Zentrale Koordination und strategische Führung der Governance-Aktivitäten mit direkter Berichtslinie zur C-Suite.\n• Technical Ethics Lead: Verantwortung für technische Ethik-Standards, Bias-Detection und Fairness-Implementierung in KI-Systemen.\n• Compliance Coordinator: Überwachung regulatorischer Anforderungen und Sicherstellung kontinuierlicher Compliance-Konformität.\n• Business Integration Manager: Verbindung zwischen Governance-Anforderungen und Geschäftszielen für praktikable Implementierung.\n\n⚡ Effiziente Entscheidungsprozesse:\n• Strukturierte Decision-Frameworks: Entwicklung klarer Entscheidungskriterien und Bewertungsmatrizen für konsistente Governance-Entscheidungen.\n• Agile Governance-Zyklen: Implementierung regelmäßiger Review-Zyklen mit definierten Meilensteinen und Anpassungsmöglichkeiten.\n• Eskalations-Mechanismen: Klare Prozesse für die Eskalation kritischer Governance-Entscheidungen an höhere Ebenen.\n• Dokumentations-Standards: Umfassende Dokumentation aller Governance-Entscheidungen für Nachvollziehbarkeit und Compliance-Nachweis.\n\n🔄 ADVISORI Committee-Excellence-Ansatz:\n• Governance-Maturity-Assessment zur Bestimmung der optimalen Committee-Struktur für Ihre Organisation.\n• Maßgeschneiderte Governance-Charter-Entwicklung mit klaren Mandaten und Erfolgskennzahlen.\n• Kontinuierliche Committee-Performance-Optimierung durch regelmäßige Effektivitätsbewertungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie gewährleistet ADVISORI, dass KI-Governance-Frameworks nicht nur theoretisch robust sind, sondern auch praktisch umsetzbar und geschäftstauglich bleiben?',
        answer: "Die Herausforderung effektiver KI-Governance liegt in der Balance zwischen theoretischer Robustheit und praktischer Umsetzbarkeit. ADVISORI entwickelt Governance-Frameworks, die nicht nur regulatorische und ethische Standards erfüllen, sondern auch nahtlos in bestehende Geschäftsprozesse integriert werden können und echten Geschäftswert schaffen.\n\n🏗️ Praxisorientierte Framework-Entwicklung:\n• Business-First-Ansatz: Entwicklung von Governance-Frameworks, die primär Geschäftsziele unterstützen und Compliance als integrierten Bestandteil behandeln.\n• Iterative Implementierung: Schrittweise Einführung von Governance-Elementen mit kontinuierlicher Anpassung basierend auf praktischen Erfahrungen.\n• Stakeholder-Feedback-Integration: Regelmäßige Konsultation mit Endnutzern und Geschäftsbereichen zur Sicherstellung praktischer Relevanz.\n• Change Management-Integration: Umfassende Begleitung des Governance-Wandels mit Fokus auf Akzeptanz und Adoption.\n\n⚙️ Operative Exzellenz in der Governance:\n• Workflow-Integration: Nahtlose Einbettung von Governance-Prozessen in bestehende Geschäftsabläufe ohne disruptive Unterbrechungen.\n• Automatisierung wo möglich: Einsatz von Technologie zur Automatisierung routinemäßiger Governance-Aufgaben und Reduzierung manueller Belastung.\n• Skalierbare Prozesse: Entwicklung von Governance-Mechanismen, die mit dem Unternehmenswachstum und der KI-Expansion mithalten können.\n• Performance-Monitoring: Kontinuierliche Überwachung der Governance-Effektivität mit messbaren KPIs und Anpassungsmechanismen.\n\n💼 Geschäftstauglichkeit und Wertschöpfung:\n• ROI-orientierte Governance: Entwicklung von Governance-Maßnahmen, die nachweisbar Geschäftswert schaffen und nicht nur Kosten verursachen.\n• Competitive Advantage-Integration: Positionierung von Governance als Differenzierungsfaktor und Wettbewerbsvorteil im Markt.\n• Innovation-Enablement: Governance-Strukturen, die Innovation fördern statt behindern und neue Geschäftsmöglichkeiten erschließen.\n• Stakeholder-Value-Creation: Entwicklung von Governance-Ansätzen, die Wert für alle Stakeholder schaffen, von Kunden bis zu Investoren.\n\n🎯 ADVISORI Praktikabilitäts-Sicherung:\n• Pilot-Implementierungen zur Validierung der Governance-Frameworks in realen Geschäftsumgebungen.\n• Kontinuierliche Optimierung basierend auf praktischen Erfahrungen und Geschäftsergebnissen.\n• Umfassende Schulungs- und Support-Programme für nachhaltige Governance-Adoption.\n• Langfristige Partnerschaft zur kontinuierlichen Anpassung und Weiterentwicklung der Governance-Strukturen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
