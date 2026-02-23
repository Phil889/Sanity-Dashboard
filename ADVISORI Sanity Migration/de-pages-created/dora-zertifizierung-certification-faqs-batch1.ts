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
    console.log('Updating DORA Zertifizierung page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-zertifizierung-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-zertifizierung-certification" not found')
    }
    
    // Create new FAQs for DORA certification fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was umfasst eine DORA-Zertifizierung und welche Vorteile bietet sie für Finanzinstitute?',
        answer: "DORA-Zertifizierung ist ein strategischer Nachweis für die digitale operationelle Resilienz einer Organisation und geht weit über die reine regulatorische Compliance hinaus. Sie demonstriert systematische Exzellenz im IKT-Risikomanagement und schafft nachhaltigen Wettbewerbsvorteil durch vertrauensbildende Maßnahmen bei allen Stakeholdern.\n\n🎯 Umfang und Kernelemente der DORA-Zertifizierung:\n• Umfassende Validierung aller DORA-Compliance-Bereiche einschließlich IKT-Risikomanagement, Incident-Reporting, operationeller Resilienz-Tests, Drittanbieter-Risikomanagement und Informationsaustausch\n• Systematische Bewertung der Governance-Strukturen und Management-Frameworks für digitale operationelle Resilienz\n• Detaillierte Prüfung der technischen Implementierung von Sicherheitskontrollen und Monitoring-Systemen\n• Validierung der Dokumentations- und Berichtsprozesse sowie deren Nachhaltigkeit\n• Bewertung der organisatorischen Fähigkeiten zur kontinuierlichen Aufrechterhaltung der Compliance-Standards\n\n💼 Strategische Geschäftsvorteile:\n• Erhöhtes Vertrauen bei Kunden, Partnern und Aufsichtsbehörden durch unabhängige Validierung der digitalen Resilienz-Fähigkeiten\n• Wettbewerbsdifferenzierung im Markt durch nachgewiesene operative Exzellenz und Risikomanagement-Kompetenz\n• Reduzierte Aufsichtsrisiken und potenzielle Sanktionen durch proaktive Compliance-Demonstration\n• Verbesserte Verhandlungsposition bei Geschäftspartnerschaften und Drittanbieter-Verträgen\n• Optimierte Versicherungskonditionen und Risikobewertungen durch externe Validierung\n\n🔍 Zertifizierungsarten und Scope-Optionen:\n• Vollständige DORA-Compliance-Zertifizierung für alle regulatorischen Anforderungen\n• Bereichsspezifische Zertifizierungen für einzelne DORA-Säulen wie IKT-Risikomanagement oder Drittanbieter-Management\n• Kontinuierliche Zertifizierung mit regelmäßigen Überwachungs-Audits und Updates\n• Konzernweite Zertifizierung für komplexe Organisationsstrukturen mit mehreren Entitäten\n• Branchenspezifische Zertifizierungsansätze für verschiedene Finanzdienstleistungssektoren\n\n📈 Langfristige organisatorische Vorteile:\n• Systematische Verbesserung der operationellen Resilienz und Krisenreaktionsfähigkeit\n• Aufbau nachhaltiger Compliance-Kultur und kontinuierlicher Verbesserungsprozesse\n• Entwicklung interner Expertise und Kompetenzen im Bereich digitaler Resilienz\n• Optimierte Ressourcenallokation durch strukturierte Risikobewertung und Prioritätensetzung\n• Verbesserte Stakeholder-Kommunikation durch transparente und validierte Compliance-Nachweise"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie bereite ich mein Finanzinstitut optimal auf ein DORA-Zertifizierungsaudit vor?',
        answer: "Die Vorbereitung auf ein DORA-Zertifizierungsaudit erfordert eine systematische und umfassende Herangehensweise, die weit über die reine Dokumentensammlung hinausgeht. Erfolgreiche Audit-Vorbereitung kombiniert strategische Planung, operative Exzellenz und kulturelle Transformation zu einem ganzheitlichen Readiness-Programm.\n\n📋 Strategische Audit-Vorbereitung und Planung:\n• Entwicklung einer detaillierten Audit-Roadmap mit klaren Meilensteinen, Verantwortlichkeiten und Zeitplänen für alle Vorbereitungsaktivitäten\n• Durchführung umfassender Gap-Analysen gegen DORA-Anforderungen zur Identifikation kritischer Verbesserungsbereiche\n• Etablierung eines dedizierten Audit-Vorbereitungsteams mit klaren Rollen und Eskalationswegen\n• Entwicklung einer Kommunikationsstrategie für interne und externe Stakeholder während des Audit-Prozesses\n• Risikobewertung potenzieller Audit-Herausforderungen und Entwicklung entsprechender Mitigation-Strategien\n\n📚 Dokumentations-Exzellenz und Evidence-Management:\n• Systematische Sammlung und Organisation aller compliance-relevanten Dokumentationen, Richtlinien, Verfahren und Nachweise\n• Entwicklung eines zentralen Evidence-Management-Systems mit versionskontrollierten Dokumenten und Audit-Trails\n• Erstellung umfassender Compliance-Matrizen, die DORA-Anforderungen mit spezifischen organisatorischen Maßnahmen verknüpfen\n• Vorbereitung detaillierter Prozessdokumentationen mit Flowcharts, Verantwortlichkeits-Matrizen und Performance-Metriken\n• Entwicklung standardisierter Templates und Checklisten für konsistente Dokumentationsqualität\n\n🎭 Mock-Audits und Simulation-Exercises:\n• Durchführung realistischer Mock-Audits mit externen Beratern zur Simulation echter Audit-Bedingungen\n• Entwicklung verschiedener Audit-Szenarien einschließlich kritischer Fragestellungen und Herausforderungen\n• Training von Schlüsselpersonal in Audit-Interview-Techniken und professioneller Kommunikation\n• Testen der Audit-Logistik einschließlich Räumlichkeiten, Technologie und Support-Prozesse\n• Bewertung und Optimierung der Audit-Response-Zeiten und Informationsbereitstellung\n\n👥 Stakeholder-Readiness und Team-Preparation:\n• Umfassendes Training aller audit-relevanten Mitarbeiter in DORA-Anforderungen und organisatorischen Compliance-Maßnahmen\n• Entwicklung von Kommunikations-Guidelines und Key-Message-Frameworks für konsistente Audit-Kommunikation\n• Etablierung klarer Eskalationswege und Entscheidungsprozesse für Audit-spezifische Situationen\n• Vorbereitung von Subject-Matter-Experts mit detailliertem Fachwissen in spezifischen DORA-Bereichen\n• Entwicklung von Backup-Plänen für Personalausfälle oder unvorhergesehene Situationen während des Audits"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen Drittanbieter bei der DORA-Zertifizierung und wie manage ich deren Compliance?',
        answer: "Drittanbieter-Management ist ein kritischer Erfolgsfaktor für DORA-Zertifizierung, da die digitale operationelle Resilienz einer Organisation maßgeblich von der Qualität und Compliance ihrer externen Partner abhängt. Ein strategischer Ansatz zum Drittanbieter-Zertifizierungsmanagement schafft nicht nur regulatorische Compliance, sondern auch operative Exzellenz und Risikominimierung.\n\n🔗 Strategische Drittanbieter-Zertifizierungsintegration:\n• Entwicklung einer umfassenden Drittanbieter-Zertifizierungsstrategie, die alle kritischen und wichtigen IKT-Services abdeckt\n• Etablierung klarer Zertifizierungsanforderungen und Standards für verschiedene Kategorien von Drittanbietern\n• Integration von Drittanbieter-Zertifizierungen in die Gesamtzertifizierungsstrategie der Organisation\n• Entwicklung von Drittanbieter-spezifischen Compliance-Frameworks und Bewertungskriterien\n• Aufbau strategischer Partnerschaften mit Drittanbietern zur gemeinsamen Zertifizierungsexzellenz\n\n📊 Drittanbieter-Assessment und Due-Diligence:\n• Systematische Bewertung der aktuellen Zertifizierungslandschaft aller kritischen Drittanbieter\n• Entwicklung standardisierter Assessment-Frameworks für verschiedene Service-Kategorien und Risikoprofile\n• Durchführung regelmäßiger Compliance-Reviews und Zertifizierungs-Health-Checks\n• Implementierung kontinuierlicher Monitoring-Systeme für Drittanbieter-Zertifizierungsstatus\n• Etablierung von Benchmark-Vergleichen und Best-Practice-Sharing zwischen Drittanbietern\n\n🤝 Kollaborative Zertifizierungsansätze:\n• Entwicklung gemeinsamer Zertifizierungsprogramme mit strategischen Drittanbietern\n• Etablierung von Drittanbieter-Zertifizierungs-Communities und Knowledge-Sharing-Plattformen\n• Koordination von Multi-Vendor-Audits und konsolidierten Zertifizierungsprozessen\n• Implementierung von Drittanbieter-Mentoring-Programmen für Zertifizierungsexzellenz\n• Aufbau von Incentive-Strukturen für überdurchschnittliche Drittanbieter-Zertifizierungsleistung\n\n⚠️ Risikomanagement und Contingency-Planning:\n• Entwicklung von Risikobewertungs-Frameworks für Drittanbieter-Zertifizierungsausfälle\n• Etablierung von Backup-Strategien und alternativen Service-Providern für kritische Services\n• Implementierung von Frühwarnsystemen für potenzielle Drittanbieter-Compliance-Probleme\n• Entwicklung von Incident-Response-Plänen für Drittanbieter-Zertifizierungskrisen\n• Aufbau von Drittanbieter-Exit-Strategien und Transition-Plänen für Non-Compliance-Situationen\n\n📈 Kontinuierliche Optimierung und Value-Creation:\n• Implementierung von Performance-Monitoring und KPI-Systemen für Drittanbieter-Zertifizierungen\n• Entwicklung von Continuous-Improvement-Programmen für Drittanbieter-Compliance\n• Etablierung von Innovation-Partnerschaften für fortschrittliche Zertifizierungstechnologien\n• Aufbau von Drittanbieter-Feedback-Loops für bidirektionale Verbesserung\n• Integration von Drittanbieter-Zertifizierungsdaten in strategische Entscheidungsprozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie stelle ich die kontinuierliche Aufrechterhaltung meiner DORA-Zertifizierung sicher?',
        answer: "Die kontinuierliche Aufrechterhaltung einer DORA-Zertifizierung erfordert einen systematischen und proaktiven Ansatz, der über punktuelle Compliance-Aktivitäten hinausgeht. Erfolgreiche Zertifizierungserhaltung basiert auf der Integration von Compliance-Exzellenz in die täglichen Geschäftsprozesse und der Entwicklung einer nachhaltigen Kultur der kontinuierlichen Verbesserung.\n\n🔄 Kontinuierliches Monitoring und Alerting-Systeme:\n• Implementierung automatisierter Compliance-Monitoring-Systeme, die Echtzeit-Überwachung aller zertifizierungsrelevanten Parameter ermöglichen\n• Entwicklung intelligenter Alerting-Mechanismen mit priorisierten Eskalationswegen für verschiedene Compliance-Risikostufen\n• Etablierung von Predictive-Analytics-Systemen zur Früherkennung potenzieller Compliance-Abweichungen\n• Integration von Compliance-Metriken in Executive-Dashboards und Management-Reporting-Systeme\n• Aufbau von Trend-Analyse-Capabilities zur proaktiven Identifikation von Verbesserungspotenzialen\n\n📅 Strukturierte Maintenance-Programme und Review-Zyklen:\n• Entwicklung umfassender Zertifizierungs-Maintenance-Kalender mit regelmäßigen Review-Terminen und Audit-Zyklen\n• Etablierung verschiedener Review-Ebenen von täglichen Operational-Checks bis hin zu jährlichen Strategic-Assessments\n• Implementierung von Risk-based-Review-Ansätzen, die Ressourcen auf kritische Bereiche fokussieren\n• Aufbau von Cross-functional-Review-Teams mit Expertise aus verschiedenen Organisationsbereichen\n• Integration von externen Perspektiven durch regelmäßige Independent-Assessments und Peer-Reviews\n\n🚀 Proaktives Regulatory-Change-Management:\n• Etablierung systematischer Regulatory-Intelligence-Systeme zur frühzeitigen Identifikation relevanter Regulierungsänderungen\n• Entwicklung strukturierter Impact-Assessment-Prozesse für neue regulatorische Anforderungen\n• Aufbau agiler Anpassungsmechanismen für schnelle Integration neuer Compliance-Anforderungen\n• Implementierung von Regulatory-Sandboxing-Ansätzen zum Testen neuer Compliance-Maßnahmen\n• Etablierung von Industry-Collaboration-Netzwerken für Best-Practice-Sharing und gemeinsame Lösungsentwicklung\n\n🎯 Performance-Optimierung und Continuous-Improvement:\n• Implementierung von Zertifizierungs-Performance-KPIs und Benchmark-Systemen für kontinuierliche Leistungsmessung\n• Entwicklung strukturierter Lessons-Learned-Prozesse aus Audit-Erfahrungen und Compliance-Herausforderungen\n• Etablierung von Innovation-Labs für die Entwicklung fortschrittlicher Compliance-Technologien und -Methoden\n• Aufbau von Employee-Engagement-Programmen zur Förderung einer starken Compliance-Kultur\n• Integration von Compliance-Excellence in Mitarbeiter-Performance-Management und Incentive-Systeme\n\n🔧 Technology-enabled Compliance-Automation:\n• Implementierung fortschrittlicher GRC-Plattformen für integriertes Zertifizierungs-Lifecycle-Management\n• Entwicklung von AI-powered-Compliance-Assistenten für automatisierte Routine-Tasks und Anomalie-Detection\n• Aufbau von Blockchain-basierten Audit-Trail-Systemen für unveränderliche Compliance-Nachweise\n• Integration von RPA-Lösungen für automatisierte Compliance-Reporting und Dokumentations-Management\n• Etablierung von Cloud-nativen Compliance-Architekturen für Skalierbarkeit und Flexibilität"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
