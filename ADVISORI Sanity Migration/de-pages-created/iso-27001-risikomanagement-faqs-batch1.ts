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
    console.log('Updating ISO 27001 Risikomanagement page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikomanagement' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikomanagement" not found')
    }
    
    // Create new FAQs for ISO 27001 Risikomanagement fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist strategisches Risikomanagement nach ISO 27001 und wie unterscheidet es sich von der reinen Risikoanalyse?',
        answer: "Strategisches Risikomanagement nach ISO 27001 geht weit über die punktuelle Risikoanalyse hinaus und etabliert eine umfassende Risiko-Governance, die Informationssicherheit als integralen Bestandteil der Unternehmensführung verankert. Es transformiert Risikomanagement von einem reaktiven Compliance-Instrument zu einem proaktiven strategischen Enabler für nachhaltigen Geschäftserfolg.\n\n🎯 Strategische Risiko-Governance:\n• Entwicklung einer unternehmensweiten Risikostrategie, die sich an Geschäftszielen und strategischen Prioritäten orientiert\n• Etablierung klarer Governance-Strukturen mit definierten Rollen, Verantwortlichkeiten und Entscheidungsbefugnissen auf allen Organisationsebenen\n• Integration von Risikomanagement in strategische Planungsprozesse und Geschäftsentscheidungen\n• Schaffung einer Risikokultur, die proaktives Risikobewusstsein und verantwortungsvolles Handeln fördert\n• Kontinuierliche Ausrichtung der Risikostrategie an sich verändernde Geschäftsanforderungen und Marktbedingungen\n\n📊 Kontinuierliches Enterprise Risk Management:\n• Implementierung kontinuierlicher Monitoring-Prozesse, die Risiken in Echtzeit erfassen und bewerten\n• Entwicklung automatisierter Dashboards und KPI-basierter Steuerungsinstrumente für datengetriebene Entscheidungen\n• Etablierung proaktiver Frühwarnsysteme, die potenzielle Risiken vor ihrer Manifestation identifizieren\n• Integration von Risikomanagement in operative Geschäftsprozesse und Workflow-Management-Systeme\n• Aufbau adaptiver Risiko-Frameworks, die sich dynamisch an verändernde Bedrohungslandschaften anpassen\n\n🔄 Business-Integration und Wertschöpfung:\n• Nahtlose Integration des Risikomanagements in bestehende Geschäftsprozesse und Entscheidungsstrukturen\n• Entwicklung risiko-informierter Geschäftsstrategien, die Chancen und Risiken gleichermaßen berücksichtigen\n• Schaffung von Synergien zwischen Risikomanagement und anderen Governance-Funktionen wie Compliance, Audit und Qualitätsmanagement\n• Etablierung von Risikomanagement als Wettbewerbsvorteil durch verbesserte Entscheidungsqualität und Stakeholder-Vertrauen\n• Transformation von Risikomanagement von einem Kostenfaktor zu einem strategischen Wertschöpfungsinstrument\n\n🚀 Technologie-gestützte Innovation:\n• Implementierung moderner GRC-Plattformen für integriertes Governance, Risk und Compliance Management\n• Nutzung von AI und Machine Learning für prädiktive Risikoanalyse und automatisierte Risikobewertung\n• Entwicklung digitaler Risiko-Dashboards mit Real-Time-Analytics und interaktiven Visualisierungen\n• Integration von IoT und Sensordaten für kontinuierliches Asset-Monitoring und Risiko-Früherkennung\n• Aufbau von Cloud-basierten Risikomanagement-Ökosystemen für skalierbare und flexible Risiko-Governance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie wird eine effektive Risiko-Governance-Struktur für ISO 27001 etabliert und in die Unternehmensführung integriert?',
        answer: "Eine effektive Risiko-Governance-Struktur bildet das strategische Fundament für nachhaltiges Risikomanagement und erfordert eine systematische Integration in alle Ebenen der Unternehmensführung. Sie schafft die organisatorischen Voraussetzungen für risikobasierte Entscheidungen und kontinuierliche Verbesserung der Informationssicherheit.\n\n🏛️ Strategische Governance-Architektur:\n• Etablierung eines Risiko-Komitees auf Vorstandsebene mit klaren Mandaten und Entscheidungsbefugnissen für strategische Risikofragen\n• Definition von Risiko-Governance-Prinzipien, die sich an Unternehmenswerten und strategischen Zielen orientieren\n• Entwicklung einer Risikostrategie, die Risikobereitschaft, Risikotoleranz und strategische Risikoziele definiert\n• Integration von Risikomanagement in bestehende Corporate Governance Strukturen und Berichtswege\n• Schaffung klarer Verbindungen zwischen Risiko-Governance und anderen Governance-Funktionen wie Compliance, Audit und Qualitätsmanagement\n\n👥 Rollen und Verantwortlichkeiten:\n• Benennung eines Chief Risk Officers oder Risk Managers mit direkter Berichtslinie zur Geschäftsführung\n• Definition von Risiko-Ownern für verschiedene Geschäftsbereiche und kritische Assets mit klaren Verantwortlichkeiten\n• Etablierung von Risiko-Champions in allen Organisationseinheiten als Multiplikatoren für Risikobewusstsein\n• Entwicklung von Stellenbeschreibungen und Kompetenzprofilen für risikorelevante Rollen\n• Implementierung von Risikomanagement-Zielen in Leistungsbeurteilungen und Incentive-Systemen\n\n📋 Governance-Prozesse und Entscheidungsstrukturen:\n• Entwicklung strukturierter Entscheidungsprozesse für Risikobewertung, Risikobehandlung und Ressourcenallokation\n• Etablierung regelmäßiger Risiko-Reviews und Management-Berichte mit klaren Eskalationswegen\n• Implementation von Risiko-Komitees auf verschiedenen Organisationsebenen mit definierten Mandaten\n• Schaffung standardisierter Risiko-Reporting-Formate und Kommunikationskanäle\n• Entwicklung von Krisenmanagement-Prozessen und Notfall-Governance-Strukturen\n\n📊 Performance Management und Steuerung:\n• Definition von Risiko-KPIs und Leistungsindikatoren für kontinuierliches Monitoring der Governance-Effektivität\n• Implementierung von Risiko-Dashboards für Management-Reporting und strategische Entscheidungsunterstützung\n• Etablierung von Benchmarking-Prozessen zur kontinuierlichen Verbesserung der Governance-Strukturen\n• Entwicklung von Risiko-Scorecards für verschiedene Organisationsebenen und Geschäftsbereiche\n• Integration von Risikomanagement-Metriken in strategische Balanced Scorecards und Management-Cockpits\n\n🔄 Kontinuierliche Verbesserung und Anpassung:\n• Implementierung regelmäßiger Governance-Reviews und Maturity-Assessments\n• Etablierung von Feedback-Mechanismen zur kontinuierlichen Optimierung der Governance-Strukturen\n• Anpassung der Governance-Architektur an sich verändernde Geschäftsanforderungen und regulatorische Entwicklungen\n• Integration von Lessons Learned aus Risikoeintritten und Governance-Herausforderungen\n• Aufbau einer lernenden Organisation, die Governance-Innovationen proaktiv vorantreibt"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen KPIs und Metriken im kontinuierlichen Risiko-Monitoring und wie werden sie effektiv implementiert?',
        answer: "KPIs und Metriken bilden das Nervensystem des kontinuierlichen Risiko-Monitorings und ermöglichen datengetriebene Entscheidungen sowie proaktive Risikosteuerung. Sie transformieren qualitative Risikobewertungen in quantifizierbare Leistungsindikatoren und schaffen die Grundlage für automatisierte Risiko-Dashboards und Frühwarnsysteme.\n\n📈 Strategische KPI-Architektur:\n• Entwicklung einer mehrstufigen KPI-Hierarchie von strategischen Risiko-Indikatoren bis zu operativen Leistungsmetriken\n• Alignment von Risiko-KPIs mit Geschäftszielen und strategischen Prioritäten für maximale Relevanz\n• Definition von Leading Indicators für proaktive Risiko-Früherkennung und Lagging Indicators für Performance-Bewertung\n• Etablierung von Risiko-Scorecards, die komplexe Risikoinformationen in verständliche Management-Berichte übersetzen\n• Integration von Risiko-KPIs in bestehende Performance Management Systeme und Balanced Scorecards\n\n🎯 Kategorien und Dimensionen von Risiko-Metriken:\n• Technische Sicherheitsmetriken wie Vulnerability-Scores, Patch-Management-Raten und Incident-Response-Zeiten\n• Compliance-Metriken für Überwachung regulatorischer Anforderungen und Audit-Readiness\n• Geschäftskontinuitäts-Metriken wie Recovery Time Objectives und Business Impact Assessments\n• Governance-Metriken für Bewertung der Risikomanagement-Reife und Organisationseffektivität\n• Stakeholder-Metriken wie Kundenzufriedenheit, Vertrauensindizes und Reputations-Scores\n\n🔄 Automatisierte Monitoring-Systeme:\n• Implementierung von Real-Time-Dashboards mit automatisierten Datensammlung und Visualisierung\n• Entwicklung von Alerting-Systemen, die bei Überschreitung kritischer Schwellenwerte automatische Benachrichtigungen senden\n• Integration von IoT-Sensoren und Monitoring-Tools für kontinuierliche Datenerfassung\n• Aufbau von Data Lakes und Analytics-Plattformen für umfassende Risikodatenanalyse\n• Nutzung von Machine Learning für prädiktive Risikomodellierung und Anomalie-Erkennung\n\n📊 Datenqualität und Governance:\n• Etablierung von Datenqualitäts-Standards und Validierungsprozessen für zuverlässige Risikometriken\n• Definition von Datenverantwortlichkeiten und Governance-Prozessen für Risikodaten-Management\n• Implementierung von Datenintegrations-Plattformen für konsolidierte Risikosicht\n• Entwicklung von Daten-Lineage und Audit-Trails für Nachvollziehbarkeit und Compliance\n• Aufbau von Master Data Management für konsistente Risikodaten-Definitionen\n\n🎨 Visualisierung und Reporting:\n• Entwicklung interaktiver Risiko-Dashboards mit Drill-Down-Funktionalitäten für verschiedene Zielgruppen\n• Implementierung von Heat Maps und Risiko-Landkarten für intuitive Risiko-Visualisierung\n• Aufbau automatisierter Reporting-Systeme für regelmäßige Management-Berichte\n• Integration von Mobile-Dashboards für ortsunabhängigen Zugriff auf Risikoinformationen\n• Nutzung von Augmented Analytics für selbsterklärende Risiko-Insights und Handlungsempfehlungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie wird Risikomanagement erfolgreich in bestehende Geschäftsprozesse integriert und welche Change Management Aspekte sind zu beachten?',
        answer: "Die erfolgreiche Integration von Risikomanagement in bestehende Geschäftsprozesse erfordert einen systematischen Change Management Ansatz, der sowohl technische als auch kulturelle Transformation umfasst. Es geht darum, Risikomanagement als natürlichen Bestandteil der täglichen Geschäftstätigkeit zu etablieren und eine risikobewusste Organisationskultur zu schaffen.\n\n🔄 Prozess-Integration und Workflow-Design:\n• Mapping bestehender Geschäftsprozesse und Identifikation von Risiko-Touchpoints für nahtlose Integration\n• Entwicklung von Risiko-Checkpoints in kritischen Geschäftsprozessen wie Projektmanagement, Beschaffung und Produktentwicklung\n• Implementation von Risiko-Gates in Entscheidungsprozessen, die risikoinformierte Genehmigungen ermöglichen\n• Aufbau automatisierter Workflow-Systeme, die Risikobewertungen in operative Abläufe einbetten\n• Entwicklung von Risiko-Templates und Checklisten für standardisierte Prozessintegration\n\n👥 Change Management und Kulturwandel:\n• Entwicklung einer umfassenden Change-Strategie, die Stakeholder-Bedürfnisse und Widerstandspotenziale berücksichtigt\n• Implementierung von Kommunikationskampagnen, die den Mehrwert von Risikomanagement für individuelle Rollen verdeutlichen\n• Aufbau von Risiko-Champion-Netzwerken als Multiplikatoren für kulturellen Wandel\n• Entwicklung von Incentive-Systemen, die risikobewusstes Verhalten belohnen und fördern\n• Etablierung von Success Stories und Best Practices zur Demonstration des Risikomanagement-Nutzens\n\n🎓 Kompetenzentwicklung und Training:\n• Design rollenspezifischer Schulungsprogramme, die praktische Risikomanagement-Fähigkeiten vermitteln\n• Implementierung von E-Learning-Plattformen für kontinuierliche Kompetenzentwicklung\n• Aufbau von Mentoring-Programmen zwischen erfahrenen Risk Managern und Geschäftsbereichen\n• Entwicklung von Simulation und Gamification-Ansätzen für praxisnahes Risikomanagement-Training\n• Etablierung von Zertifizierungsprogrammen für Risikomanagement-Kompetenzen\n\n🛠️ Technologie-Integration und Tool-Harmonisierung:\n• Integration von Risikomanagement-Tools in bestehende IT-Landschaften und Business-Systeme\n• Entwicklung von APIs und Schnittstellen für nahtlosen Datenaustausch zwischen Systemen\n• Aufbau von Single-Sign-On und User Experience Optimierung für benutzerfreundliche Risiko-Tools\n• Implementation von Mobile-Lösungen für ortsunabhängiges Risikomanagement\n• Etablierung von Cloud-basierten Plattformen für skalierbare Risikomanagement-Infrastruktur\n\n📋 Governance und Nachhaltigkeit:\n• Entwicklung von Governance-Strukturen, die kontinuierliche Prozess-Integration überwachen und steuern\n• Etablierung von Feedback-Mechanismen zur kontinuierlichen Verbesserung der Prozess-Integration\n• Implementation von Maturity-Assessments zur Bewertung des Integrations-Fortschritts\n• Aufbau von Continuous Improvement Prozessen für adaptive Risikomanagement-Integration\n• Entwicklung von Sustainability-Strategien für langfristige Verankerung des Risikomanagements"
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
