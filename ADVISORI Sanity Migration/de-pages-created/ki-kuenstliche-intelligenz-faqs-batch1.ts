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
    console.log('Updating KI - Künstliche Intelligenz page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-kuenstliche-intelligenz' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-kuenstliche-intelligenz" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Wie entwickelt ADVISORI strategische KI-Roadmaps für Unternehmen und welche Erfolgsfaktoren bestimmen eine nachhaltige AI-Transformation?',
        answer: "Die Entwicklung einer strategischen KI-Roadmap ist der Grundstein für erfolgreiche Enterprise AI-Transformation und erfordert einen ganzheitlichen Ansatz, der Geschäftsstrategie, technische Machbarkeit und organisatorische Readiness systematisch miteinander verknüpft. ADVISORI verfolgt eine methodische Herangehensweise, die nicht nur technische Exzellenz, sondern auch nachhaltigen Geschäftswert und ethische Verantwortung gewährleistet.\n\n🎯 Strategische KI-Roadmap-Entwicklung:\n• Umfassende Business-Impact-Analyse zur Identifikation der wertvollsten AI-Anwendungsfälle durch systematische Bewertung von Geschäftsprozessen, Datenqualität und Automatisierungspotenzialen für maximalen ROI und strategische Wettbewerbsvorteile.\n• AI-Readiness-Assessment mit detaillierter Bewertung der bestehenden IT-Infrastruktur, Datenarchitektur, technischen Kompetenzen und organisatorischen Fähigkeiten zur Identifikation von Gaps und Entwicklungsbedarfen.\n• Stakeholder-Alignment und Vision-Development durch Entwicklung einer gemeinsamen AI-Vision mit klaren Zielen, messbaren Erfolgskennzahlen und zielgruppenspezifischen Kommunikationsstrategien für organisationsweite Unterstützung.\n• Phasenweise Implementierungsplanung mit strukturierter Roadmap, die Quick Wins, mittelfristige Meilensteine und langfristige Transformationsziele für kontinuierliche Wertschöpfung und Momentum-Aufbau kombiniert.\n• Risk-Assessment und Mitigation-Strategien zur proaktiven Identifikation und Bewältigung von technischen, organisatorischen, regulatorischen und ethischen Risiken.\n\n🚀 Erfolgsfaktoren für nachhaltige AI-Transformation:\n• Executive Sponsorship und Leadership Commitment schaffen die notwendige organisatorische Dynamik und Ressourcenallokation für erfolgreiche AI-Adoption und kulturelle Transformation.\n• Datenqualität und Data Governance bilden das Fundament für effektive AI-Systeme und erfordern systematische Data Management-Strategien mit klaren Standards und Qualitätssicherungsprozessen.\n• Change Management und Skill Development bereiten die Organisation proaktiv auf AI-Integration vor durch gezielte Schulungen, transparente Kommunikation und kulturelle Transformation.\n• Agile Implementierung mit kontinuierlicher Optimierung ermöglicht iterative Entwicklung und kontinuierliche Verbesserung basierend auf Feedback, Lernerfahrungen und sich ändernden Geschäftsanforderungen.\n\n🔍 ADVISORI AI-Roadmap-Excellence:\n• Entwicklung maßgeschneiderter AI-Strategien, die perfekt auf Branche, Unternehmensgröße, Reifegrad und spezifische Geschäftsziele abgestimmt sind.\n• Integration von Emerging Technologies und Future-Proofing-Strategien für langfristige Wettbewerbsfähigkeit und Innovationskraft.\n• Kontinuierliche Roadmap-Optimierung basierend auf Marktentwicklungen, technologischen Fortschritten, Geschäftsergebnissen und strategischen Anpassungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie gewährleistet ADVISORI EU AI Act Compliance und welche konkreten Maßnahmen sind für rechtskonforme KI-Implementierung erforderlich?',
        answer: "Die EU AI Act Compliance ist ein zentraler Baustein verantwortungsvoller KI-Implementierung und erfordert einen systematischen Ansatz zur Risikobewertung, Governance-Implementierung und kontinuierlichen Überwachung. ADVISORI entwickelt umfassende Compliance-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Vertrauen schaffen und nachhaltige AI-Innovation ermöglichen.\n\n⚖️ EU AI Act Compliance-Framework:\n• Systematische AI-System-Klassifizierung nach Risikoebenen mit detaillierter Bewertung von Anwendungsbereichen, Auswirkungen auf Grundrechte und gesellschaftliche Risiken zur Bestimmung der erforderlichen Compliance-Maßnahmen.\n• High-Risk AI-System-Assessment mit umfassender Dokumentation von Zweck, Funktionsweise, Datenverwendung, Risikomanagement-Systemen und Qualitätssicherungsmaßnahmen gemäß EU AI Act Anforderungen.\n• Conformity Assessment-Prozesse mit Implementierung von CE-Kennzeichnung, technischer Dokumentation, Qualitätsmanagementsystemen und Post-Market-Monitoring für kontinuierliche Compliance-Sicherstellung.\n• Transparenz und Erklärbarkeit durch Entwicklung von Explainable AI-Systemen, Benutzerinformationen und Dokumentationsstandards für nachvollziehbare und vertrauensvolle AI-Anwendungen.\n• Fundamental Rights Impact Assessment zur Bewertung und Minimierung von Auswirkungen auf Grundrechte, Diskriminierungsrisiken und gesellschaftliche Fairness.\n\n🛡️ Konkrete Compliance-Maßnahmen:\n• Risk Management-System-Implementierung mit kontinuierlicher Risikobewertung, Mitigation-Strategien und Monitoring-Prozessen für proaktive Risikokontrolle und Compliance-Sicherstellung.\n• Data Governance und Quality Management durch Implementierung robuster Datenqualitätsstandards, Bias-Detection-Mechanismen und kontinuierliche Datenvalidierung für faire und zuverlässige AI-Systeme.\n• Human Oversight-Mechanismen mit klaren Rollen, Verantwortlichkeiten und Eingriffsmöglichkeiten für menschliche Kontrolle und Entscheidungshoheit bei kritischen AI-Anwendungen.\n• Accuracy und Robustness Testing durch umfassende Testverfahren, Validierungsprozesse und Performance-Monitoring für zuverlässige und sichere AI-Systeme.\n• Cybersecurity und Privacy-by-Design mit integrierten Sicherheitsmaßnahmen, Datenschutz-Mechanismen und DSGVO-konformer Datenverarbeitung.\n\n🔍 ADVISORI EU AI Act Excellence:\n• Entwicklung maßgeschneiderter Compliance-Strategien mit branchenspezifischen Anforderungen und Best-Practice-Integration für optimale Rechtssicherheit.\n• Kontinuierliche Regulatory Updates und Anpassungen an sich entwickelnde Rechtsprechung und Implementierungsrichtlinien.\n• Integration von Compliance in AI-Entwicklungsprozesse für Compliance-by-Design und effiziente Umsetzung regulatorischer Anforderungen.\n• Audit-Unterstützung und Behördenkommunikation für professionelle Compliance-Nachweise und regulatorische Zusammenarbeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Ansätze verfolgt ADVISORI für ethische KI-Entwicklung und wie werden Bias-Prevention und Fairness in AI-Systemen gewährleistet?',
        answer: "Ethische KI-Entwicklung ist fundamental für verantwortungsvolle Künstliche Intelligenz und erfordert systematische Ansätze zur Bias-Prevention, Fairness-Sicherstellung und kontinuierlichen Ethik-Überwachung. ADVISORI entwickelt umfassende Ethical AI-Frameworks, die nicht nur technische Exzellenz, sondern auch gesellschaftliche Verantwortung und nachhaltige Vertrauensbildung gewährleisten.\n\n🎯 Ethical AI-Framework-Entwicklung:\n• Comprehensive Bias-Assessment mit systematischer Identifikation von Datenverzerrungen, Algorithmus-Bias und gesellschaftlichen Vorurteilen durch fortschrittliche Analysemethoden und interdisziplinäre Bewertungsansätze.\n• Fairness-Metriken-Implementation mit mathematischen Fairness-Definitionen, quantitativen Bewertungskriterien und kontinuierlichen Monitoring-Systemen für objektive Fairness-Messung und -Optimierung.\n• Stakeholder-Inclusive Design durch Einbindung diverser Perspektiven, Betroffenengruppen und gesellschaftlicher Vertreter in AI-Entwicklungsprozesse für repräsentative und inklusive AI-Systeme.\n• Transparency und Explainability mit Entwicklung nachvollziehbarer AI-Entscheidungen, verständlicher Erklärungsmodelle und transparenter Kommunikation für Vertrauen und Akzeptanz.\n• Value-Alignment und Purpose-Definition durch klare ethische Prinzipien, Wertorientierung und gesellschaftlichen Nutzen als Grundlage für AI-Entwicklung.\n\n⚖️ Bias-Prevention und Fairness-Strategien:\n• Data Diversity und Representation durch systematische Datensammlung, repräsentative Stichproben und inklusive Datensätze für ausgewogene und faire AI-Modelle.\n• Algorithmic Auditing mit regelmäßigen Bias-Tests, Fairness-Evaluationen und Performance-Analysen für verschiedene Bevölkerungsgruppen und Anwendungsszenarien.\n• Counterfactual Fairness-Testing durch Simulation alternativer Szenarien und What-if-Analysen zur Bewertung von Entscheidungsgleichheit und Diskriminierungsfreiheit.\n• Intersectional Analysis zur Berücksichtigung mehrfacher Identitätsmerkmale und komplexer Diskriminierungsformen für umfassende Fairness-Sicherstellung.\n• Continuous Monitoring und Feedback-Loops mit Real-time Bias-Detection, automatisierten Alerts und kontinuierlicher Modell-Anpassung für nachhaltige Fairness.\n\n🔍 ADVISORI Ethical AI Excellence:\n• Entwicklung maßgeschneiderter Ethik-Frameworks mit branchenspezifischen Anforderungen, kulturellen Kontexten und gesellschaftlichen Werten für kontextuell angemessene AI-Ethik.\n• Integration von Human-in-the-Loop-Systemen für menschliche Kontrolle, ethische Entscheidungsfindung und Verantwortungsübernahme bei kritischen AI-Anwendungen.\n• Stakeholder-Engagement und Community-Involvement für gesellschaftliche Akzeptanz, Vertrauensbildung und demokratische Teilhabe an AI-Entwicklung.\n• Ethical Impact Assessment mit systematischer Bewertung gesellschaftlicher Auswirkungen, Risiken und Chancen für verantwortungsvolle AI-Innovation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie implementiert ADVISORI DSGVO-konforme KI-Systeme und welche Datenschutz-Mechanismen sind für Enterprise AI erforderlich?',
        answer: "DSGVO-konforme KI-Implementierung erfordert einen systematischen Privacy-by-Design-Ansatz, der Datenschutz von Anfang an in AI-Systeme integriert und kontinuierliche Compliance gewährleistet. ADVISORI entwickelt umfassende Datenschutz-Strategien, die nicht nur regulatorische Anforderungen erfüllen, sondern auch Vertrauen schaffen und innovative AI-Anwendungen ermöglichen.\n\n🔒 DSGVO-konforme AI-Architektur:\n• Privacy-by-Design-Implementation mit systematischer Integration von Datenschutzprinzipien in AI-Entwicklungsprozesse, Architektur-Design und Systemfunktionalitäten für grundlegenden Datenschutz.\n• Data Minimization-Strategien durch Implementierung von Zweckbindung, Datenreduktion und selektiver Datenverarbeitung für minimale Datenschutz-Risiken und optimale Compliance.\n• Consent Management-Systeme mit granularen Einwilligungsmechanismen, transparenten Informationen und einfachen Widerrufsmöglichkeiten für nutzerfreundliche Datenschutz-Kontrolle.\n• Anonymization und Pseudonymization durch fortschrittliche Techniken wie Differential Privacy, K-Anonymity und synthetische Datengeneration für datenschutzfreundliche AI-Entwicklung.\n• Data Subject Rights-Implementation mit automatisierten Prozessen für Auskunft, Berichtigung, Löschung und Datenportabilität für effiziente Betroffenenrechte-Erfüllung.\n\n🛡️ Enterprise AI Datenschutz-Mechanismen:\n• Federated Learning-Architekturen für dezentrale AI-Entwicklung ohne zentrale Datensammlung, lokale Modell-Trainings und Privacy-preserving Machine Learning.\n• Homomorphic Encryption für verschlüsselte Datenverarbeitung, sichere Berechnungen auf verschlüsselten Daten und Schutz sensibler Informationen während der AI-Verarbeitung.\n• Secure Multi-party Computation für kollaborative AI-Entwicklung ohne Datenpreisgabe, sichere Berechnungen zwischen Parteien und vertrauliche Datenanalyse.\n• Data Loss Prevention-Systeme mit automatischer Klassifizierung, Überwachung und Schutz sensibler Daten für proaktive Datenschutz-Sicherstellung.\n• Access Control und Identity Management mit rollenbasierten Zugriffskontrollen, Authentifizierung und Autorisierung für sichere AI-System-Nutzung.\n\n🔍 ADVISORI DSGVO AI Excellence:\n• Entwicklung maßgeschneiderter Privacy-Frameworks mit branchenspezifischen Anforderungen, Risikobewertungen und Best-Practice-Integration für optimale Datenschutz-Compliance.\n• Data Protection Impact Assessment für systematische Risikobewertung, Mitigation-Strategien und kontinuierliche Überwachung von Datenschutz-Auswirkungen.\n• Cross-border Data Transfer-Lösungen mit angemessenen Schutzmaßnahmen, Standardvertragsklauseln und internationaler Compliance für globale AI-Anwendungen.\n• Continuous Compliance-Monitoring mit automatisierten Überwachungssystemen, Audit-Trails und regelmäßigen Datenschutz-Bewertungen für nachhaltige DSGVO-Konformität."
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
