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
    console.log('Updating KI-Anwendungsfall-Identifikation page with FAQs batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: 'Welche Rolle spielen Stakeholder und Change Management bei der Identifikation und Implementierung von KI-Anwendungsfällen?',
        answer: "Erfolgreiche KI-Anwendungsfall-Identifikation ist nicht nur eine technische, sondern vor allem eine organisatorische Herausforderung. ADVISORI integriert Stakeholder-Management und Change Management von Anfang an in den Use Case Identifikationsprozess, um Akzeptanz zu schaffen und Implementierungsbarrieren zu minimieren.\n\n👥 Stakeholder-Integration in Use Case Identifikation:\n• Cross-funktionale Teams: Einbindung von Vertretern aus allen relevanten Geschäftsbereichen, IT, Compliance und Management in den Identifikationsprozess.\n• Bedarfsanalyse: Systematische Erfassung der Anforderungen, Erwartungen und Bedenken verschiedener Stakeholder-Gruppen.\n• Kommunikationsstrategie: Entwicklung zielgruppenspezifischer Kommunikationsansätze zur Erklärung von KI-Potenzialen und Implementierungsplänen.\n• Feedback-Integration: Etablierung von Mechanismen zur kontinuierlichen Einbindung von Stakeholder-Feedback in die Use Case Entwicklung.\n\n🔄 Change Management für KI-Transformation:\n• Organisatorische Readiness: Bewertung der organisatorischen Bereitschaft für KI-Adoption und Identifikation von Change Management-Anforderungen.\n• Kompetenzentwicklung: Analyse der erforderlichen Fähigkeiten und Entwicklung von Schulungs- und Weiterbildungsprogrammen für betroffene Mitarbeiter.\n• Kultureller Wandel: Unterstützung bei der Entwicklung einer datengetriebenen und innovationsoffenen Unternehmenskultur.\n• Widerstandsmanagement: Proaktive Identifikation und Adressierung von Widerständen gegen KI-Implementierung durch transparente Kommunikation und Einbindung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Wie bewertet ADVISORI die Skalierbarkeit von KI-Anwendungsfällen und welche Faktoren sind entscheidend für langfristigen Erfolg?',
        answer: "Die Skalierbarkeit von KI-Anwendungsfällen ist ein kritischer Erfolgsfaktor, der bereits bei der initialen Use Case Identifikation berücksichtigt werden muss. ADVISORI entwickelt Bewertungsframeworks, die sowohl technische als auch organisatorische Skalierungsaspekte umfassen, um nachhaltige KI-Lösungen zu gewährleisten.\n\n📈 Technische Skalierbarkeits-Dimensionen:\n• Performance-Skalierung: Bewertung der Fähigkeit von KI-Systemen, mit wachsenden Datenmengen und Nutzerzahlen umzugehen, ohne Performance-Einbußen.\n• Infrastruktur-Elastizität: Analyse der Anforderungen an skalierbare Cloud-Infrastrukturen und Computing-Ressourcen für verschiedene Wachstumsszenarien.\n• Datenarchitektur-Flexibilität: Bewertung der Anpassungsfähigkeit von Datenarchitekturen an wachsende Datenvolumen und neue Datenquellen.\n• Algorithmus-Adaptabilität: Prüfung der Fähigkeit von KI-Modellen, sich an veränderte Anforderungen und neue Use Cases anzupassen.\n\n🏢 Organisatorische Skalierungsfaktoren:\n• Prozess-Integration: Bewertung der Integrationsfähigkeit von KI-Lösungen in bestehende Geschäftsprozesse und deren Skalierbarkeit auf andere Bereiche.\n• Governance-Skalierung: Entwicklung skalierbarer KI-Governance-Strukturen, die mit der Ausweitung von KI-Anwendungen mitwachsen können.\n• Kompetenz-Skalierung: Analyse der Anforderungen an Personalentwicklung und Kompetenzaufbau für die Skalierung von KI-Initiativen.\n• Compliance-Skalierung: Sicherstellung, dass Compliance-Frameworks mit der Ausweitung von KI-Anwendungen skalieren und regulatorische Anforderungen erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Metriken und KPIs verwendet ADVISORI zur Messung des Erfolgs von KI-Anwendungsfällen und wie wird kontinuierliche Optimierung sichergestellt?',
        answer: "Die Definition aussagekräftiger Erfolgsmetriken ist entscheidend für die Bewertung und kontinuierliche Optimierung von KI-Anwendungsfällen. ADVISORI entwickelt mehrdimensionale KPI-Frameworks, die sowohl quantitative als auch qualitative Erfolgsfaktoren berücksichtigen und kontinuierliche Verbesserung ermöglichen.\n\n📊 Mehrdimensionale KPI-Frameworks:\n• Geschäftswert-Metriken: ROI, Kosteneinsparungen, Umsatzsteigerungen, Produktivitätssteigerungen und andere direkt messbare Geschäftsvorteile.\n• Technische Performance-Metriken: Modellgenauigkeit, Verarbeitungsgeschwindigkeit, Systemverfügbarkeit und andere technische Leistungsindikatoren.\n• Nutzererfahrungs-Metriken: Benutzerakzeptanz, Zufriedenheitswerte, Adoption-Raten und Feedback-Qualität von internen und externen Nutzern.\n• Compliance-Metriken: DSGVO-Konformität, Audit-Ergebnisse, Risiko-Indikatoren und andere regulatorische Erfolgsfaktoren.\n\n🔄 Kontinuierliche Optimierungszyklen:\n• Real-time Monitoring: Implementierung von Monitoring-Systemen zur kontinuierlichen Überwachung aller definierten KPIs und frühzeitigen Erkennung von Abweichungen.\n• Regelmäßige Reviews: Etablierung strukturierter Review-Prozesse zur systematischen Bewertung der Use Case Performance und Identifikation von Optimierungspotenzialen.\n• Adaptive Anpassungen: Entwicklung von Mechanismen zur schnellen Anpassung von KI-Modellen und -Prozessen basierend auf Performance-Daten und sich ändernden Anforderungen.\n• Lessons Learned Integration: Systematische Erfassung und Integration von Lernerfahrungen in die Entwicklung neuer Use Cases und die Optimierung bestehender Anwendungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie adressiert ADVISORI ethische Überlegungen und Bias-Risiken bei der Identifikation und Bewertung von KI-Anwendungsfällen?',
        answer: "Ethische Überlegungen und Bias-Risiken sind fundamentale Aspekte verantwortungsvoller KI-Entwicklung, die bereits bei der Use Case Identifikation berücksichtigt werden müssen. ADVISORI integriert ethische Bewertungen und Bias-Analysen systematisch in den gesamten Use Case Identifikationsprozess, um faire und verantwortungsvolle KI-Lösungen zu gewährleisten.\n\n⚖️ Ethische Bewertungsframeworks:\n• Fairness-Analyse: Systematische Bewertung potenzieller Diskriminierungsrisiken und Entwicklung von Maßnahmen zur Sicherstellung fairer KI-Entscheidungen.\n• Transparenz-Anforderungen: Definition von Transparenz- und Erklärbarkeitsanforderungen für jeden Use Case, um nachvollziehbare KI-Entscheidungen zu gewährleisten.\n• Autonomie-Respekt: Bewertung der Auswirkungen von KI-Systemen auf menschliche Autonomie und Entscheidungsfreiheit.\n• Gesellschaftliche Auswirkungen: Analyse der breiteren gesellschaftlichen Implikationen von KI-Anwendungsfällen und deren Alignment mit gesellschaftlichen Werten.\n\n🔍 Bias-Risiko-Management:\n• Daten-Bias-Analyse: Systematische Untersuchung von Trainingsdaten auf potenzielle Verzerrungen und Entwicklung von Strategien zur Bias-Minimierung.\n• Algorithmus-Fairness: Bewertung verschiedener KI-Algorithmen hinsichtlich ihrer Fairness-Eigenschaften und Auswahl bias-minimierender Ansätze.\n• Kontinuierliche Bias-Überwachung: Implementierung von Monitoring-Systemen zur kontinuierlichen Überwachung von Bias-Indikatoren in produktiven KI-Systemen.\n• Diverse Teams: Sicherstellung diverser und multidisziplinärer Teams bei der Use Case Entwicklung, um verschiedene Perspektiven und potenzielle Bias-Quellen zu identifizieren."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
