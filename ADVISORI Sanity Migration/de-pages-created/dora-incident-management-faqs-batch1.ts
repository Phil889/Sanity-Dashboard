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
    console.log('Updating DORA Incident Management page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-incident-management' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-incident-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche strategischen Vorteile bietet ein umfassendes DORA Incident Management Framework für Finanzunternehmen?',
        answer: "Ein strategisches DORA Incident Management Framework ist weit mehr als nur ein operatives Notfallsystem – es ist ein transformativer Ansatz, der operative Resilienz mit nachhaltigen Geschäftsvorteilen verbindet. Ein durchdachtes Framework ermöglicht es Finanzunternehmen, ICT-Incidents nicht nur schnell zu erkennen und zu behandeln, sondern proaktiv zu verhindern und als strategische Lernmöglichkeiten zu nutzen.\n\n🎯 Strategische Geschäftstransformation:\n• Operative Resilienz als Differenzierungsmerkmal: Ein robustes DORA Incident Management Framework stärkt die Widerstandsfähigkeit gegen Cyber-Bedrohungen und operative Störungen, was zu erhöhter Kundenzufriedenheit, Marktvertrauen und letztendlich zu Wettbewerbsvorteilen führt.\n• Risikotransparenz und strategische Entscheidungsfindung: Systematische Incident Detection und Response ermöglicht präzise, datenbasierte Entscheidungen und optimierte Ressourcenallokation für Sicherheitsinvestitionen und Geschäftsentwicklung.\n• Regulatorische Führungsposition: Frühzeitige und umfassende DORA-Compliance positioniert Ihr Unternehmen als vertrauenswürdigen Marktführer und kann neue Geschäftsmöglichkeiten mit regulierungsbewussten Partnern und Kunden eröffnen.\n• Innovation Enablement: Robuste Incident Management Frameworks schaffen die Grundlage für sichere Implementierung neuer Technologien, Geschäftsmodelle und digitaler Innovationen.\n\n🏗️ Organisatorische Exzellenz durch strukturiertes Incident Management:\n• Ganzheitliche Incident Response Kultur: DORA Incident Management erfordert die Integration von Governance, Technologie, Prozessen und Kultur, was zu einer umfassenden organisatorischen Modernisierung und verbesserter Incident Response Fähigkeiten führt.\n• Prozessoptimierung und Effizienzsteigerung: Die Implementierung von DORA-konformen Incident Management Prozessen identifiziert und eliminiert Ineffizienzen, verbessert die operative Effizienz und reduziert Ausfallzeiten.\n• Stakeholder Vertrauen und Reputation: Transparente Incident Management Strukturen und nachweisbare Response Fähigkeiten stärken das Vertrauen von Investoren, Aufsichtsbehörden, Geschäftspartnern und Kunden.\n• Talentattraktivität und Mitarbeiterbindung: Moderne, gut strukturierte Incident Management Umgebungen mit klaren Response Frameworks ziehen qualifizierte Fachkräfte an und verbessern die Mitarbeiterbindung.\n\n💡 Langfristige Wertschöpfung und Nachhaltigkeit:\n• Skalierbare und anpassungsfähige Frameworks: Gut konzipierte DORA Incident Management Frameworks sind erweiterbar und anpassungsfähig, was zukünftige regulatorische Änderungen, Geschäftswachstum und technologische Entwicklungen unterstützt.\n• Kostenoptimierung und ROI Maximierung: Strukturierte Ansätze reduzieren Implementierungskosten, vermeiden Doppelarbeit und maximieren den Return on Investment für Incident Management Initiativen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine effektive ICT-Incident Detection Strategie, die sowohl DORA-Anforderungen erfüllt als auch praktikabel für den operativen Einsatz ist?',
        answer: "Eine effektive ICT-Incident Detection Strategie für DORA erfordert eine ausgewogene Balance zwischen regulatorischer Compliance und operativer Praktikabilität. Sie muss systematisch, nachvollziehbar und gleichzeitig flexibel genug sein, um sich an die dynamische Natur von ICT-Bedrohungen anzupassen und dabei die spezifischen Geschäftsanforderungen des Finanzunternehmens zu berücksichtigen.\n\n🔍 Systematische Detection Architektur:\n• Multi-Layer Detection Approach: Entwicklung einer umfassenden Detection Strategie, die verschiedene Ebenen der ICT-Infrastruktur abdeckt, von Netzwerk und Systemen bis hin zu Anwendungen und Daten, und dabei sowohl technische als auch operative Anomalien erfasst.\n• Real-time Monitoring Integration: Systematische Integration von Real-time Monitoring Tools und Technologien, die kontinuierliche Überwachung kritischer Systeme und Prozesse ermöglichen und dabei automatisierte Alerting Mechanismen bereitstellen.\n• Threat Intelligence Integration: Implementation von Threat Intelligence Feeds und externen Datenquellen, um proaktive Detection von bekannten Bedrohungen und emerging Threats zu ermöglichen.\n• Behavioral Analytics: Einbindung von Machine Learning und Behavioral Analytics zur Erkennung von Anomalien und ungewöhnlichen Mustern, die auf potenzielle Incidents hinweisen könnten.\n\n📊 Intelligente Detection und Correlation:\n• Event Correlation Engines: Entwicklung von intelligenten Correlation Engines, die Events aus verschiedenen Quellen aggregieren und analysieren, um False Positives zu reduzieren und echte Incidents zu identifizieren.\n• Risk-based Alerting: Implementation von Risk-based Alerting Systemen, die Alerts basierend auf Criticality, Impact und Wahrscheinlichkeit priorisieren und dabei Ressourcen optimal allokieren.\n• Automated Triage Processes: Entwicklung automatisierter Triage Prozesse, die Initial Assessment und Categorization von Incidents durchführen und dabei menschliche Expertise für komplexe Fälle reservieren.\n• Contextual Information Enrichment: Bereitstellung von kontextuellen Informationen und historischen Daten, um Incident Response Teams bei der schnellen Bewertung und Entscheidungsfindung zu unterstützen.\n\n🔄 Operative Integration und Continuous Improvement:\n• Workflow Integration: Nahtlose Integration der Detection Systeme in bestehende Incident Response Workflows und ITSM Prozesse, um sicherzustellen, dass Detections zeitnah und effektiv behandelt werden.\n• Performance Monitoring und Tuning: Kontinuierliche Überwachung der Detection Performance mit regelmäßigem Tuning und Optimierung der Detection Rules und Thresholds basierend auf operativen Erfahrungen.\n• Feedback Loop Implementation: Etablierung von Feedback Loops zwischen Detection und Response Teams, um Lessons Learned zu integrieren und Detection Capabilities kontinuierlich zu verbessern.\n• Compliance Reporting Integration: Automatisierte Integration von Detection Events in DORA Compliance Reporting Systeme, um regulatorische Anforderungen effizient zu erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche kritischen Erfolgsfaktoren müssen bei der Etablierung einer DORA-konformen Incident Classification und Impact Assessment Methodik berücksichtigt werden?',
        answer: "Die Etablierung einer DORA-konformen Incident Classification und Impact Assessment Methodik ist ein komplexer Prozess, der strategische Planung, technische Präzision und organisatorische Anpassungen umfasst. Erfolgreiche Classification erfordert eine klare Taxonomie, konsistente Bewertungskriterien und die nahtlose Integration in bestehende Incident Response Prozesse.\n\n👥 Strategische Classification Framework Architektur:\n• DORA-konforme Taxonomie Entwicklung: Etablierung einer umfassenden Incident Classification Taxonomie, die DORA-spezifische Kategorien und Severity Levels berücksichtigt und dabei branchenweite Standards und Best Practices integriert.\n• Multi-dimensional Classification Approach: Entwicklung eines multi-dimensionalen Classification Ansatzes, der technische, operative, regulatorische und geschäftliche Dimensionen von Incidents berücksichtigt und dabei eine ganzheitliche Impact Bewertung ermöglicht.\n• Stakeholder Alignment: Sicherstellung der Alignment zwischen verschiedenen Stakeholdern wie IT, Risk Management, Compliance und Business Units bezüglich Classification Kriterien und Impact Assessment Methodologien.\n• Regulatory Mapping: Klare Zuordnung von Incident Classifications zu regulatorischen Reporting Anforderungen und Compliance Obligations unter DORA.\n\n📋 Operative Classification und Assessment Mechanismen:\n• Automated Classification Tools: Implementation von intelligenten Classification Tools, die Initial Assessment und Categorization basierend auf vorgefinierten Regeln und Machine Learning Algorithmen durchführen können.\n• Severity Matrix Development: Entwicklung einer strukturierten Severity Matrix, die Impact und Urgency Faktoren systematisch bewertet und dabei konsistente Priorisierung und Resource Allocation ermöglicht.\n• Business Impact Assessment Integration: Integration von Business Impact Assessment Prozessen, die finanzielle, operative und reputationelle Auswirkungen von Incidents quantifizieren und bewerten.\n• Dynamic Re-classification Processes: Etablierung von Prozessen für Dynamic Re-classification von Incidents basierend auf evolving Information und changing Circumstances während der Incident Response.\n\n🔄 Kontinuierliche Verbesserung und Quality Assurance:\n• Classification Accuracy Monitoring: Implementierung von Monitoring Systemen zur kontinuierlichen Überwachung der Classification Accuracy und Identification von Verbesserungsmöglichkeiten.\n• Peer Review und Validation: Etablierung von Peer Review Prozessen für kritische Incident Classifications, um Consistency und Accuracy sicherzustellen.\n• Historical Analysis und Trend Identification: Regelmäßige Analyse historischer Classification Daten zur Identification von Trends, Patterns und Verbesserungsmöglichkeiten in der Classification Methodik.\n• Training und Competency Development: Kontinuierliche Schulung und Competency Development für Incident Response Teams bezüglich Classification Standards und Assessment Methodologien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie kann man effektive Incident Response Teams aufbauen und koordinieren, um DORA-konforme Response Zeiten und Qualitätsstandards zu gewährleisten?',
        answer: "Der Aufbau effektiver Incident Response Teams für DORA-Compliance erfordert einen systematischen Ansatz, der klare Rollen und Verantwortlichkeiten, effektive Koordinationsmechanismen und kontinuierliche Capability Development umfasst. Erfolgreiche Teams kombinieren technische Expertise mit regulatorischem Verständnis und operativer Exzellenz.\n\n🔍 Strategische Team Struktur und Organisation:\n• Multi-tier Response Team Architecture: Entwicklung einer strukturierten Team Architektur mit verschiedenen Eskalationsebenen, von First-Level Response bis hin zu Senior Expert Teams, die komplexe und kritische Incidents behandeln können.\n• Cross-functional Team Composition: Zusammenstellung cross-funktionaler Teams, die IT Security, Operations, Risk Management, Compliance, Legal und Business Expertise integrieren, um ganzheitliche Incident Response zu gewährleisten.\n• Role Definition und Responsibility Matrix: Klare Definition von Rollen, Verantwortlichkeiten und Entscheidungsbefugnissen für alle Team Mitglieder, einschließlich Incident Commander, Technical Leads, Communication Coordinators und Compliance Officers.\n• Escalation Pathways und Decision Authority: Etablierung klarer Escalation Pathways und Decision Authority Strukturen, die schnelle Entscheidungsfindung und angemessene Executive Involvement ermöglichen.\n\n📋 Operative Koordination und Communication:\n• Incident Command Structure: Implementation einer strukturierten Incident Command Structure, die effektive Koordination und Communication während komplexer Multi-team Response Aktivitäten ermöglicht.\n• Communication Protocols und Channels: Entwicklung robuster Communication Protocols und Channels, die interne Koordination, Stakeholder Updates und externe Communication mit Regulatoren und Kunden unterstützen.\n• Real-time Collaboration Tools: Bereitstellung moderner Collaboration Tools und Platforms, die Real-time Information Sharing, Document Collaboration und Remote Team Coordination ermöglichen.\n• Status Tracking und Progress Monitoring: Implementation von Status Tracking Systemen, die Real-time Visibility in Response Progress, Resource Allocation und Milestone Achievement bieten.\n\n🔄 Capability Development und Performance Optimization:\n• Continuous Training und Skill Development: Etablierung kontinuierlicher Training Programme, die technische Skills, DORA Compliance Knowledge und Incident Response Best Practices entwickeln und aufrechterhalten.\n• Simulation Exercises und Tabletop Drills: Regelmäßige Durchführung von Simulation Exercises und Tabletop Drills, die Team Readiness testen und Response Capabilities unter realistischen Bedingungen entwickeln.\n• Performance Metrics und KPI Monitoring: Definition und Monitoring von Performance Metrics und KPIs, die Response Time, Resolution Quality, Stakeholder Satisfaction und Compliance Adherence messen.\n• After Action Reviews und Lessons Learned: Systematische Durchführung von After Action Reviews nach jedem signifikanten Incident, um Lessons Learned zu identifizieren und Team Performance kontinuierlich zu verbessern."
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
