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
    console.log('Updating Intelligent Automation Partner page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'intelligent-automation-partner' })
    
    if (!existingDoc) {
      throw new Error('Document "intelligent-automation-partner" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was unterscheidet einen strategischen Intelligent Automation Partner von einem traditionellen Beratungsunternehmen?',
        answer: "Ein strategischer Intelligent Automation Partner geht weit über die Rolle eines traditionellen Beratungsunternehmens hinaus und etabliert eine langfristige, vertrauensvolle Zusammenarbeit, die auf gemeinsamen Zielen, geteilten Risiken und kollaborativer Innovation basiert. Während traditionelle Beratung oft projektbezogen und zeitlich begrenzt ist, investiert ein echter Partner in den nachhaltigen Erfolg des Unternehmens und entwickelt gemeinsam zukunftsfähige Lösungen.\n\n🤝 Langfristige strategische Ausrichtung:\n• Entwicklung einer gemeinsamen Vision und Roadmap, die über einzelne Projekte hinausgeht und die gesamte Automatisierungsstrategie des Unternehmens umfasst.\n• Kontinuierliche Anpassung der Strategie an sich ändernde Marktbedingungen, Technologieentwicklungen und Geschäftsanforderungen.\n• Aufbau einer vertrauensvollen Beziehung mit transparenter Kommunikation und gemeinsamer Verantwortung für den Erfolg.\n• Integration in die strategischen Planungsprozesse des Unternehmens als verlängerter Arm der internen Teams.\n\n🔬 Kollaborative Innovation und Co-Development:\n• Gemeinsame Forschungs- und Entwicklungsprojekte zur Erschließung neuer Automatisierungspotenziale und Technologiemöglichkeiten.\n• Aufbau von Innovation Labs und Prototyping-Umgebungen für experimentelle Ansätze und Proof-of-Concepts.\n• Kontinuierliches Technologie-Scouting und Bewertung neuer Trends für frühzeitige Wettbewerbsvorteile.\n• Entwicklung proprietärer Lösungen und IP-Schutz-Strategien für einzigartige Automatisierungsansätze.\n\n💼 Geteilte Verantwortung und Risikomanagement:\n• Übernahme von Mitverantwortung für den Erfolg der Automatisierungsinitiative mit entsprechenden Erfolgs- und Risikoteilungsmodellen.\n• Proaktive Identifikation und Mitigation von Risiken durch kontinuierliches Monitoring und Frühwarnsysteme.\n• Aufbau redundanter Systeme und Backup-Strategien für kritische Automatisierungsprozesse.\n• Gemeinsame Governance-Strukturen mit klaren Eskalationswegen und Entscheidungsprozessen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie stellt ADVISORI als Intelligent Automation Partner sicher, dass die Partnerschaft langfristig wertstiftend bleibt?',
        answer: "Die langfristige Wertstiftung einer Intelligent Automation Partnerschaft erfordert kontinuierliche Innovation, proaktive Anpassung an sich ändernde Anforderungen und den systematischen Aufbau nachhaltiger Wettbewerbsvorteile. ADVISORI etabliert strukturierte Prozesse und Mechanismen, die sicherstellen, dass die Partnerschaft auch über Jahre hinweg einen messbaren Mehrwert für das Unternehmen generiert.\n\n📊 Kontinuierliches Value Monitoring und Optimierung:\n• Implementierung umfassender KPI-Systeme zur Messung des Partnerschaftserfolgs auf strategischer, operativer und finanzieller Ebene.\n• Regelmäßige Value Assessments und ROI-Analysen zur Quantifizierung des generierten Mehrwerts und Identifikation von Optimierungspotenzialen.\n• Aufbau von Benchmarking-Systemen zur Bewertung der Partnerschaftsleistung im Vergleich zu Marktstandards und Best Practices.\n• Entwicklung von Predictive Analytics zur Vorhersage zukünftiger Wertschöpfungspotenziale und rechtzeitiger Strategieanpassung.\n\n🔄 Adaptive Partnerschaftsevolution:\n• Systematische Überprüfung und Anpassung der Partnerschaftsstrategie an sich ändernde Geschäftsanforderungen und Marktbedingungen.\n• Flexible Vertragsstrukturen, die Anpassungen an neue Technologien, Regulierungen und Geschäftsmodelle ermöglichen.\n• Kontinuierliche Weiterentwicklung der Service-Portfolio basierend auf emerging Technologies und Kundenbedürfnissen.\n• Aufbau von Feedback-Loops und kontinuierlichen Verbesserungsprozessen für optimale Partnerschaftsqualität.\n\n🚀 Innovation und Zukunftsfähigkeit:\n• Proaktive Identifikation und Integration neuer Technologietrends wie Generative AI, Quantum Computing oder Edge Computing in die Automatisierungsstrategie.\n• Aufbau von Centers of Excellence für emerging Technologies und deren praktische Anwendung.\n• Entwicklung von Future-Readiness-Assessments zur Bewertung der Zukunftsfähigkeit bestehender Automatisierungslösungen.\n• Kontinuierliche Investition in Forschung und Entwicklung für innovative Automatisierungsansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielt EU AI Act Compliance in der strategischen Partnerschaft mit ADVISORI?',
        answer: "EU AI Act Compliance bildet das fundamentale Fundament unserer strategischen Partnerschaft und ist nicht nur ein regulatorisches Erfordernis, sondern ein strategischer Wettbewerbsvorteil, der Vertrauen schafft und nachhaltige Geschäftsentwicklung ermöglicht. Als Partner übernehmen wir die Verantwortung für kontinuierliche Compliance und entwickeln gemeinsam zukunftssichere Governance-Strukturen.\n\n⚖️ Compliance als Partnerschaftsfundament:\n• Integration von EU AI Act Anforderungen in alle Phasen der Partnerschaftsentwicklung von der strategischen Planung bis zur operativen Umsetzung.\n• Aufbau robuster Governance-Strukturen, die sowohl aktuelle als auch zukünftige regulatorische Anforderungen antizipieren und proaktiv adressieren.\n• Entwicklung von Compliance-by-Design-Prinzipien, die regulatorische Anforderungen nahtlos in Automatisierungslösungen integrieren.\n• Etablierung gemeinsamer Compliance-Verantwortlichkeiten mit klaren Rollen und Eskalationsprozessen.\n\n🔍 Proaktives Risikomanagement:\n• Kontinuierliche Überwachung regulatorischer Entwicklungen und deren Impact-Assessment auf bestehende und geplante Automatisierungslösungen.\n• Implementierung von Frühwarnsystemen für potenzielle Compliance-Risiken mit automatisierten Monitoring- und Alerting-Mechanismen.\n• Regelmäßige Compliance-Audits und Gap-Analysen zur Sicherstellung kontinuierlicher Rechtskonformität.\n• Aufbau von Incident-Response-Prozessen für schnelle Reaktion auf Compliance-Verletzungen oder regulatorische Änderungen.\n\n📋 Strategische Compliance-Vorteile:\n• Nutzung von Compliance-Excellence als Differenzierungsmerkmal im Markt und Vertrauensbildung bei Kunden und Stakeholdern.\n• Entwicklung von Compliance-Frameworks, die als Best Practice für die gesamte Branche dienen können.\n• Aufbau von Competitive Intelligence zu regulatorischen Trends und deren strategische Nutzung für Marktvorteile.\n• Integration von Compliance-Metriken in die Partnerschafts-KPIs zur Messung des regulatorischen Erfolgs."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gewährleistet ADVISORI als Partner vendor-neutrale Beratung und vermeidet Technology Lock-in?',
        answer: "Vendor-Neutralität ist ein Kernprinzip unserer Partnerschaftsphilosophie und gewährleistet, dass alle Technologie-Entscheidungen ausschließlich im besten Interesse des Partners getroffen werden. Wir etablieren transparente Bewertungsprozesse und unabhängige Governance-Strukturen, die sicherstellen, dass die optimale Technologie-Auswahl erfolgt, unabhängig von kommerziellen Interessen oder bestehenden Vendor-Beziehungen.\n\n🔍 Unabhängige Technologie-Bewertung:\n• Entwicklung objektiver Bewertungskriterien und Scoring-Modelle, die technische Leistung, Kosten, Skalierbarkeit und strategische Passung gleichgewichtig berücksichtigen.\n• Durchführung umfassender Proof-of-Concepts mit verschiedenen Technologie-Alternativen zur empirischen Validierung der Leistungsfähigkeit.\n• Aufbau eines Technology Advisory Boards mit externen Experten für unabhängige Technologie-Bewertungen.\n• Implementierung von Blind-Evaluation-Prozessen, bei denen Vendor-Identitäten während der initialen Bewertung verborgen bleiben.\n\n🌐 Multi-Vendor-Ecosystem-Management:\n• Aufbau und Management eines diversifizierten Vendor-Ecosystems mit Best-of-Breed-Lösungen für verschiedene Automatisierungsanforderungen.\n• Entwicklung von Interoperabilitäts-Standards und API-Frameworks für nahtlose Integration verschiedener Technologie-Komponenten.\n• Implementierung von Vendor-Performance-Monitoring und kontinuierlicher Bewertung zur Sicherstellung optimaler Service-Qualität.\n• Aufbau von Redundanzen und Backup-Optionen für kritische Technologie-Komponenten zur Risikominimierung.\n\n🔒 Lock-in-Vermeidung und Flexibilität:\n• Entwicklung von Migration-Strategien und Exit-Plänen für alle implementierten Technologien zur Sicherstellung langfristiger Flexibilität.\n• Implementierung von Open-Source-First-Prinzipien wo möglich zur Reduzierung von Vendor-Abhängigkeiten.\n• Aufbau von Data Portability und Standardisierung zur Vereinfachung zukünftiger Technologie-Wechsel.\n• Kontinuierliche Marktbeobachtung und Technology-Roadmap-Updates zur rechtzeitigen Identifikation besserer Alternativen."
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
