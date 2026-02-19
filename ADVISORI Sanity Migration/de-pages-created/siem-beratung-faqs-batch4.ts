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
    console.log('Updating SIEM Beratung page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'siem-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "siem-beratung" not found')
    }
    
    // Create new FAQs for SIEM Beratung implementation methodologies and governance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Implementierungs-Methodologien haben sich für SIEM-Projekte bewährt und wie strukturiert man erfolgreiche Rollouts?',
        answer: "Bewährte SIEM-Implementierungs-Methodologien kombinieren strukturierte Projektmanagement-Ansätze mit agilen Elementen und risikominimierenden Strategien. Erfolgreiche Rollouts erfordern sorgfältige Planung, schrittweise Einführung und kontinuierliche Validierung für nachhaltige Projektergebnisse.\n\n📋 Strukturierte Projektmethodologie:\n• Phased Implementation Approach mit klaren Meilensteinen und Validierungspunkten\n• Agile Elements Integration für Flexibilität und schnelle Anpassung an sich ändernde Anforderungen\n• Risk-driven Planning mit proaktiver Identifikation und Mitigation kritischer Risiken\n• Stakeholder-centric Approach für kontinuierliche Einbindung und Feedback-Integration\n• Quality Gates Definition für systematische Qualitätssicherung in jeder Projektphase\n\n🎯 Pre-Implementation Planning:\n• Comprehensive Requirements Engineering für detaillierte Anforderungsanalyse und Dokumentation\n• Infrastructure Readiness Assessment für technische Voraussetzungen und Kapazitätsplanung\n• Resource Allocation Planning für optimale Team-Zusammenstellung und Skill-Verfügbarkeit\n• Timeline Development mit realistischen Zeitschätzungen und Pufferzeiten\n• Success Criteria Definition für messbare Projektziele und Erfolgsbewertung\n\n🔧 Implementation Execution:\n• Pilot Deployment für kontrollierte Einführung und frühzeitige Erfahrungssammlung\n• Incremental Rollout mit schrittweiser Erweiterung von Scope und Funktionalität\n• Continuous Testing und Validation für Qualitätssicherung und Funktionsnachweis\n• Change Management Integration für organisatorische Akzeptanz und Adoption\n• Documentation und Knowledge Transfer für nachhaltige Wartbarkeit und Support\n\n📊 Monitoring und Optimization:\n• Performance Baseline Establishment für objektive Leistungsmessung und Vergleichswerte\n• User Feedback Collection für praxisnahe Verbesserungen und Anpassungen\n• Continuous Improvement Implementation für iterative Optimierung und Enhancement\n• Lessons Learned Capture für zukünftige Projekte und Best Practice Development\n• Post-Implementation Review für systematische Projektevaluierung und Erfolgsmessung\n\n🚀 Scaling und Expansion:\n• Horizontal Scaling Strategies für Erweiterung auf zusätzliche Systeme und Datenquellen\n• Vertical Scaling Planning für erweiterte Funktionalitäten und Use Cases\n• Geographic Rollout für Multi-Site-Implementierungen und globale Abdeckung\n• Integration Expansion für zusätzliche Security-Tools und Plattformen\n• Capability Enhancement für Advanced Analytics und Automation-Features"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie implementiert man effektive Qualitätssicherung in SIEM-Projekten und welche Testing-Strategien sind erfolgskritisch?',
        answer: "Effektive Qualitätssicherung in SIEM-Projekten erfordert umfassende Testing-Strategien, systematische Validierung und kontinuierliche Qualitätskontrolle. Erfolgreiche QA-Implementierung kombiniert technische Tests mit funktionaler Validierung und Performance-Verifikation für robuste und zuverlässige SIEM-Systeme.\n\n🧪 Comprehensive Testing Framework:\n• Multi-layer Testing Approach mit verschiedenen Test-Ebenen und Validierungsmethoden\n• Functional Testing für Verifikation aller SIEM-Funktionalitäten und Use Cases\n• Performance Testing unter realistischen Lastbedingungen und Stress-Szenarien\n• Integration Testing für nahtlose Zusammenarbeit aller System-Komponenten\n• Security Testing für Verifikation der SIEM-Sicherheit und Schutzmaßnahmen\n\n📊 Data Quality und Accuracy Testing:\n• Data Ingestion Validation für korrekte Datenerfassung und Parsing\n• Event Correlation Testing für Verifikation der Regel-Logik und Alert-Generierung\n• False Positive Analysis für Optimierung der Detection-Accuracy\n• Data Integrity Checks für Vollständigkeit und Konsistenz der verarbeiteten Daten\n• Compliance Validation für Einhaltung regulatorischer Anforderungen und Standards\n\n⚡ Performance und Scalability Testing:\n• Load Testing mit realistischen Datenvolumen und Concurrent-User-Szenarien\n• Stress Testing für Identifikation von Performance-Grenzen und Bottlenecks\n• Endurance Testing für Langzeit-Stabilität und Memory-Leak-Detection\n• Scalability Testing für Verifikation der Erweiterungsfähigkeit\n• Recovery Testing für Disaster-Recovery-Fähigkeiten und Business-Continuity\n\n🔄 Automated Testing und Continuous Validation:\n• Test Automation Framework für wiederholbare und konsistente Testausführung\n• Continuous Integration Testing für frühzeitige Defekt-Erkennung\n• Regression Testing für Verifikation bestehender Funktionalitäten nach Änderungen\n• Smoke Testing für schnelle Validierung kritischer Funktionen\n• Monitoring Integration für kontinuierliche Qualitätsüberwachung im Betrieb\n\n🎯 User Acceptance und Operational Testing:\n• User Acceptance Testing mit realen Anwendern und Szenarien\n• Operational Readiness Testing für Betriebsfähigkeit und Support-Prozesse\n• Training Validation für Effektivität der Schulungsmaßnahmen\n• Documentation Testing für Vollständigkeit und Verständlichkeit der Dokumentation\n• Handover Testing für erfolgreiche Übergabe an Operations-Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Strategien gibt es für effektives Stakeholder-Management in SIEM-Projekten und wie sichert man organisatorische Akzeptanz?',
        answer: "Effektives Stakeholder-Management ist kritisch für den Erfolg von SIEM-Projekten und erfordert strategische Kommunikation, proaktive Einbindung und kontinuierliche Relationship-Pflege. Organisatorische Akzeptanz entsteht durch transparente Information, partizipative Entscheidungsfindung und demonstrierten Wert.\n\n👥 Stakeholder Identification und Mapping:\n• Comprehensive Stakeholder Analysis für Identifikation aller betroffenen Gruppen und Personen\n• Influence-Interest Matrix für Priorisierung und Engagement-Strategien\n• Role Definition für klare Verantwortlichkeiten und Erwartungsmanagement\n• Communication Preferences Assessment für optimale Interaktions-Kanäle\n• Decision Authority Mapping für effiziente Entscheidungsprozesse und Eskalation\n\n📢 Strategic Communication Planning:\n• Tailored Messaging für verschiedene Stakeholder-Gruppen und deren spezifische Interessen\n• Multi-channel Communication Strategy für optimale Reichweite und Engagement\n• Regular Update Cycles für kontinuierliche Information und Transparenz\n• Success Story Communication für Motivation und Unterstützung\n• Risk Communication für proaktive Adressierung von Bedenken und Herausforderungen\n\n🤝 Participative Engagement Strategies:\n• Stakeholder Workshops für kollaborative Planung und Entscheidungsfindung\n• Advisory Committees für kontinuierliche Beratung und Feedback\n• User Groups für praxisnahe Anforderungen und Validierung\n• Executive Briefings für strategische Unterstützung und Ressourcenbereitstellung\n• Cross-functional Teams für interdisziplinäre Zusammenarbeit und Integration\n\n💡 Value Demonstration und Benefits Realization:\n• Quick Wins Identification für frühe Erfolge und Stakeholder-Motivation\n• ROI Communication für finanzielle Rechtfertigung und Unterstützung\n• Use Case Demonstrations für praktischen Nutzen und Anwendbarkeit\n• Success Metrics Sharing für objektive Erfolgsmessung und Transparenz\n• Continuous Value Delivery für nachhaltige Stakeholder-Zufriedenheit\n\n🔄 Resistance Management und Change Facilitation:\n• Resistance Analysis für Verständnis von Bedenken und Widerständen\n• Targeted Interventions für spezifische Stakeholder-Herausforderungen\n• Change Champion Network für organisatorische Unterstützung und Multiplikation\n• Training und Support für Kompetenzaufbau und Confidence-Building\n• Feedback Integration für responsive Anpassung an Stakeholder-Bedürfnisse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie etabliert man nachhaltige SIEM-Governance und welche Frameworks eignen sich für operative Exzellenz?',
        answer: "Nachhaltige SIEM-Governance erfordert strukturierte Frameworks, klare Verantwortlichkeiten und kontinuierliche Überwachung. Operative Exzellenz entsteht durch systematische Governance-Prozesse, die strategische Ausrichtung mit operativer Effizienz und kontinuierlicher Verbesserung verbinden.\n\n🏛️ Governance Framework Development:\n• Multi-tier Governance Structure mit strategischen, taktischen und operativen Ebenen\n• Clear Accountability Framework für eindeutige Verantwortlichkeiten und Entscheidungsbefugnisse\n• Policy und Standards Development für konsistente Richtlinien und Verfahren\n• Risk Management Integration für systematische Risikobewertung und -steuerung\n• Compliance Framework für regulatorische Anforderungen und Audit-Readiness\n\n📋 Operational Governance Processes:\n• Change Management Procedures für kontrollierte Änderungen und Updates\n• Incident Management Integration für systematische Problem-Behandlung\n• Performance Management Framework für kontinuierliche Leistungsüberwachung\n• Capacity Management für proaktive Ressourcenplanung und Skalierung\n• Service Level Management für definierte Leistungsstandards und Erwartungen\n\n🔍 Monitoring und Oversight Mechanisms:\n• Governance Dashboard Development für transparente Überwachung aller Governance-Aspekte\n• Regular Review Cycles für systematische Evaluierung und Anpassung\n• Audit und Compliance Monitoring für kontinuierliche Regelkonformität\n• Performance Metrics Tracking für objektive Leistungsmessung\n• Risk Assessment und Reporting für proaktive Risikominimierung\n\n📊 Decision-Making und Escalation:\n• Decision Rights Matrix für klare Entscheidungsbefugnisse und Verantwortlichkeiten\n• Escalation Procedures für effiziente Problem-Lösung und Konflikt-Management\n• Committee Structure für kollaborative Entscheidungsfindung\n• Approval Workflows für strukturierte Genehmigungsprozesse\n• Communication Protocols für transparente Information und Koordination\n\n🚀 Continuous Improvement und Evolution:\n• Maturity Assessment Framework für systematische Governance-Entwicklung\n• Best Practice Integration für kontinuierliche Optimierung\n• Innovation Management für strategische Weiterentwicklung\n• Lessons Learned Integration für organisatorisches Lernen\n• Governance Evolution Planning für adaptive Anpassung an sich ändernde Anforderungen"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
