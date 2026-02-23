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
    console.log('Updating DORA Compliance Checkliste page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'dora-compliance-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "dora-compliance-checkliste" not found')
    }
    
    // Create new FAQs for DORA compliance checklist fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche grundlegenden Komponenten sollte eine umfassende DORA Compliance Checkliste enthalten?',
        answer: "Eine effektive DORA Compliance Checkliste muss alle wesentlichen Bereiche der Regulierung systematisch abdecken und dabei sowohl strategische als auch operative Aspekte berücksichtigen. Die Struktur sollte eine logische Progression von der initialen Bewertung bis zur kontinuierlichen Überwachung ermöglichen.\n\n🏗️ Strukturelle Grundkomponenten:\n• Umfassende Scope-Bestimmung und Entitätsklassifizierung als Ausgangspunkt für alle weiteren Compliance-Aktivitäten\n• Systematische IKT-Risiko-Governance-Bewertung einschließlich Rollen, Verantwortlichkeiten und Entscheidungsstrukturen\n• Detaillierte Drittanbieter-Risikomanagement-Checklisten mit Fokus auf kritische IKT-Services und deren Überwachung\n• Incident-Management und Reporting-Frameworks mit klaren Eskalationswegen und Zeitvorgaben\n• Testing- und Resilienz-Assessment-Komponenten für verschiedene Testarten und Bewertungsmethoden\n\n📋 Bewertungs- und Dokumentationsframeworks:\n• Strukturierte Bewertungskriterien mit klaren Scoring-Mechanismen für jede Compliance-Anforderung\n• Standardisierte Dokumentationsvorlagen für Richtlinien, Verfahren und Nachweise\n• Gap-Analyse-Tools zur systematischen Identifikation von Compliance-Lücken\n• Priorisierungsframeworks zur Bewertung von Risiken und Umsetzungsaufwand\n• Fortschrittsverfolgung und Status-Reporting-Mechanismen für kontinuierliche Überwachung\n\n🔄 Prozess- und Governance-Elemente:\n• Change-Management-Prozesse für die Anpassung an regulatorische Entwicklungen\n• Schulungs- und Awareness-Programme zur Sicherstellung organisationsweiter Compliance-Kompetenz\n• Interne Audit- und Review-Zyklen für regelmäßige Compliance-Validierung\n• Stakeholder-Engagement und Kommunikationsstrukturen für effektive Koordination\n• Kontinuierliche Verbesserungsprozesse basierend auf Lessons Learned und Best Practices\n\n🎯 Spezifische DORA-Säulen-Integration:\n• IKT-Risikomanagement-Checklisten mit detaillierten Kontrollen für Identifikation, Bewertung und Behandlung von Risiken\n• Incident-Reporting-Checklisten mit spezifischen Kriterien für Meldepflichten und Fristen\n• Operational Resilience Testing-Frameworks mit verschiedenen Testszenarien und Bewertungskriterien\n• Information Sharing-Mechanismen für Cyber-Threat-Intelligence und Best-Practice-Austausch\n• Third-Party Risk Management-Checklisten mit Fokus auf kritische IKT-Drittanbieter und deren Überwachung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickle ich ein systematisches Assessment-Framework für die DORA-Compliance-Bewertung?',
        answer: "Ein robustes DORA Assessment-Framework bildet das Fundament für eine erfolgreiche Compliance-Strategie und ermöglicht eine objektive, nachvollziehbare Bewertung des aktuellen Compliance-Status. Das Framework sollte sowohl quantitative als auch qualitative Bewertungsmethoden integrieren.\n\n🔍 Mehrdimensionale Bewertungsstruktur:\n• Entwicklung spezifischer Bewertungskriterien für jede DORA-Anforderung mit klaren Definitionen von Compliance-Levels\n• Integration verschiedener Bewertungsmethoden wie Dokumentenreviews, Interviews, technische Assessments und Prozessbeobachtungen\n• Gewichtung verschiedener Compliance-Bereiche basierend auf Risikobewertung und regulatorischer Priorität\n• Berücksichtigung organisationsspezifischer Faktoren wie Größe, Komplexität und Geschäftsmodell\n• Einbeziehung externer Benchmarks und Industry Best Practices für kontextuelle Bewertung\n\n📊 Scoring und Maturity-Modelle:\n• Entwicklung eines konsistenten Scoring-Systems mit klaren Kriterien für verschiedene Reifegrade\n• Definition von Maturity-Levels von Initial über Managed bis zu Optimized für jede Compliance-Komponente\n• Quantitative Metriken für messbare Aspekte wie Incident-Response-Zeiten oder Test-Coverage\n• Qualitative Bewertungskriterien für Governance-Aspekte und kulturelle Faktoren\n• Aggregation von Einzelbewertungen zu aussagekräftigen Gesamtscores und Dashboards\n\n🎯 Risiko-basierte Priorisierung:\n• Systematische Risikobewertung für jede identifizierte Compliance-Lücke basierend auf Eintrittswahrscheinlichkeit und Auswirkung\n• Berücksichtigung regulatorischer Fristen und Enforcement-Prioritäten bei der Priorisierung\n• Integration von Business-Impact-Analysen zur Bewertung der Auswirkungen von Compliance-Lücken\n• Entwicklung von Eskalationskriterien für kritische Compliance-Risiken\n• Kontinuierliche Neubewertung von Prioritäten basierend auf sich ändernden Umständen\n\n📈 Kontinuierliche Überwachung und Verbesserung:\n• Etablierung regelmäßiger Assessment-Zyklen mit definierten Frequenzen für verschiedene Compliance-Bereiche\n• Entwicklung von Key Performance Indicators und Key Risk Indicators für kontinuierliche Überwachung\n• Integration von Trend-Analysen zur Identifikation von Verbesserungen oder Verschlechterungen\n• Feedback-Mechanismen zur kontinuierlichen Verfeinerung des Assessment-Frameworks\n• Benchmarking gegen Industry Standards und Peer-Organisationen für kontinuierliche Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche spezifischen Checklisten-Elemente sind für das IKT-Risikomanagement unter DORA erforderlich?',
        answer: "Das IKT-Risikomanagement bildet das Herzstück der DORA-Compliance und erfordert umfassende, detaillierte Checklisten, die alle Aspekte von der strategischen Governance bis zur operativen Umsetzung abdecken. Die Checklisten müssen sowohl präventive als auch reaktive Maßnahmen berücksichtigen.\n\n🏛️ Governance und strategische Ausrichtung:\n• Etablierung einer klaren IKT-Risiko-Governance-Struktur mit definierten Rollen und Verantwortlichkeiten auf Vorstandsebene\n• Integration der IKT-Risikostrategie in die Gesamtgeschäftsstrategie und Risikotoleranz der Organisation\n• Entwicklung umfassender IKT-Risiko-Policies und -Verfahren mit regelmäßigen Review-Zyklen\n• Implementierung angemessener Berichtswege und Eskalationsmechanismen für IKT-Risiken\n• Sicherstellung ausreichender Ressourcen und Expertise für effektives IKT-Risikomanagement\n\n🔍 Risiko-Identifikation und -Bewertung:\n• Systematische Identifikation aller IKT-Assets und deren Kritikalität für Geschäftsprozesse\n• Umfassende Threat-Landscape-Analysen einschließlich Cyber-Bedrohungen und operationeller Risiken\n• Vulnerability-Assessments für alle kritischen IKT-Systeme und -Infrastrukturen\n• Bewertung von Interdependenzen zwischen verschiedenen IKT-Systemen und -Services\n• Regelmäßige Aktualisierung von Risikoinventaren und -bewertungen basierend auf sich ändernden Bedrohungslandschaften\n\n🛡️ Risiko-Behandlung und -Kontrollen:\n• Implementierung angemessener technischer Sicherheitskontrollen basierend auf identifizierten Risiken\n• Entwicklung und Umsetzung von Incident-Response-Plänen für verschiedene IKT-Risikoszenarien\n• Etablierung robuster Backup- und Recovery-Verfahren für kritische IKT-Systeme\n• Implementierung von Monitoring- und Alerting-Systemen für frühzeitige Risikoerkennung\n• Regelmäßige Testing und Validierung der Wirksamkeit implementierter Kontrollen\n\n📊 Monitoring und Berichterstattung:\n• Entwicklung aussagekräftiger IKT-Risiko-Metriken und Key Risk Indicators\n• Implementierung kontinuierlicher Monitoring-Prozesse für kritische IKT-Risiken\n• Etablierung regelmäßiger Berichterstattung an Geschäftsleitung und Aufsichtsgremien\n• Integration von IKT-Risiko-Informationen in Gesamtrisikoberichte der Organisation\n• Dokumentation von Lessons Learned und kontinuierliche Verbesserung der Risikomanagement-Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie strukturiere ich Checklisten für die kontinuierliche Überwachung und Verbesserung der DORA-Compliance?',
        answer: "Kontinuierliche Überwachung und Verbesserung sind entscheidend für nachhaltige DORA-Compliance und erfordern strukturierte, systematische Ansätze, die sowohl proaktive als auch reaktive Elemente integrieren. Die Checklisten müssen verschiedene Überwachungsebenen und -frequenzen berücksichtigen.\n\n📈 Mehrschichtige Monitoring-Struktur:\n• Entwicklung von Real-Time-Monitoring-Checklisten für kritische IKT-Systeme und -Prozesse\n• Etablierung täglicher, wöchentlicher und monatlicher Routine-Checks für verschiedene Compliance-Bereiche\n• Implementierung quartalsweiser umfassender Compliance-Reviews mit detaillierter Bewertung\n• Jährliche strategische Compliance-Assessments mit Fokus auf regulatorische Entwicklungen\n• Ad-hoc-Monitoring-Trigger basierend auf spezifischen Ereignissen oder Risikoindikatoren\n\n🎯 Key Performance und Risk Indicators:\n• Definition spezifischer KPIs für jede DORA-Säule mit klaren Zielwerten und Toleranzbereichen\n• Entwicklung von Leading Indicators zur frühzeitigen Erkennung potenzieller Compliance-Probleme\n• Implementierung von Lagging Indicators zur Bewertung der Wirksamkeit implementierter Maßnahmen\n• Integration von externen Benchmarks und Industry Standards für kontextuelle Bewertung\n• Regelmäßige Review und Anpassung der Indikatoren basierend auf sich ändernden Anforderungen\n\n🔄 Kontinuierliche Verbesserungsprozesse:\n• Etablierung strukturierter Root-Cause-Analysen für identifizierte Compliance-Abweichungen\n• Implementierung von Corrective und Preventive Action-Programmen mit klaren Verantwortlichkeiten\n• Entwicklung von Lessons-Learned-Prozessen zur Nutzung von Erfahrungen für zukünftige Verbesserungen\n• Integration von Feedback-Mechanismen von internen und externen Stakeholdern\n• Regelmäßige Bewertung und Optimierung der Compliance-Prozesse selbst\n\n📊 Reporting und Kommunikation:\n• Entwicklung aussagekräftiger Compliance-Dashboards für verschiedene Zielgruppen\n• Etablierung regelmäßiger Berichterstattung an Geschäftsleitung und Aufsichtsgremien\n• Implementation von Exception-Reporting für kritische Compliance-Abweichungen\n• Entwicklung von Trend-Analysen zur Identifikation langfristiger Compliance-Entwicklungen\n• Sicherstellung transparenter Kommunikation von Compliance-Status und Verbesserungsmaßnahmen"
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
