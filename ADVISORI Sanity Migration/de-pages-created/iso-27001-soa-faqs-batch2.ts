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
    console.log('Updating ISO 27001 SOA page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-soa' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-soa" not found')
    }
    
    // Create new FAQs for SOA development process and methodology
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie entwickelt man eine SOA systematisch und welche Methodik hat sich bewährt?',
        answer: "Die systematische Entwicklung einer Statement of Applicability erfordert eine strukturierte, phasenorientierte Methodik, die bewährte Praktiken mit organisationsspezifischen Anforderungen kombiniert. Ein methodischer Ansatz gewährleistet Vollständigkeit, Konsistenz und Nachvollziehbarkeit der SOA-Entwicklung.\n\n🎯 Vorbereitungsphase und Grundlagenarbeit:\n• Umfassende Analyse der Organisationsstruktur, Geschäftsprozesse und Informationsassets\n• Inventarisierung aller relevanten Systeme, Anwendungen und Datenbestände\n• Identifikation der Stakeholder und Definition ihrer Rollen im SOA-Entwicklungsprozess\n• Festlegung des ISMS-Scope und der Anwendungsgrenzen\n• Sammlung und Analyse bestehender Sicherheitsdokumentation und Policies\n\n📊 Risikobewertung als Fundament:\n• Durchführung einer systematischen Informationssicherheits-Risikoanalyse\n• Identifikation und Bewertung von Bedrohungen, Schwachstellen und Auswirkungen\n• Bestimmung des Risikoappetits und der Risikotoleranz der Organisation\n• Priorisierung der Risiken basierend auf Eintrittswahrscheinlichkeit und Schadenshöhe\n• Dokumentation der Risikobewertungsmethodik und verwendeten Kriterien\n\n🔍 Systematische Control-Bewertung:\n• Strukturierte Durchsicht aller 93 Annex A Controls in den 14 Kategorien\n• Bewertung jedes Controls hinsichtlich seiner Relevanz für die identifizierten Risiken\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Analyse bestehender Sicherheitsmaßnahmen und deren Mapping zu ISO 27001 Controls\n• Dokumentation der Bewertungskriterien und Entscheidungslogik\n\n⚖️ Anwendbarkeitsentscheidung und Begründung:\n• Systematische Entscheidung für jedes Control: anwendbar oder nicht anwendbar\n• Entwicklung fundierter, nachvollziehbarer Begründungen für alle Entscheidungen\n• Berücksichtigung von Geschäftsanforderungen, technischen Gegebenheiten und Ressourcen\n• Validierung der Entscheidungen durch Fachexperten und Stakeholder\n• Dokumentation der Entscheidungsgrundlagen und verwendeten Kriterien\n\n📝 Dokumentation und Qualitätssicherung:\n• Erstellung einer strukturierten, audit-sicheren SOA-Dokumentation\n• Implementierung von Versionskontrolle und Change Management Prozessen\n• Durchführung von Peer Reviews und Qualitätsprüfungen\n• Sicherstellung der Konsistenz mit anderen ISMS-Dokumenten\n• Vorbereitung für interne und externe Audits\n\n🔄 Validierung und kontinuierliche Verbesserung:\n• Durchführung von Plausibilitätsprüfungen und Konsistenzanalysen\n• Validierung durch interne Audits und Management Reviews\n• Integration von Feedback und Lessons Learned\n• Etablierung regelmäßiger Review und Update-Zyklen\n• Kontinuierliche Anpassung an veränderte Geschäftsanforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Stakeholder müssen in die SOA-Entwicklung einbezogen werden und welche Rollen haben sie?',
        answer: "Die erfolgreiche SOA-Entwicklung erfordert die systematische Einbindung verschiedener Stakeholder mit unterschiedlichen Perspektiven und Expertisen. Eine klare Rollenverteilung und strukturierte Zusammenarbeit sind entscheidend für die Qualität und Akzeptanz der Statement of Applicability.\n\n👑 Top-Management und Führungsebene:\n• Bereitstellung strategischer Ausrichtung und Unterstützung für die SOA-Entwicklung\n• Definition des Risikoappetits und der Sicherheitsziele der Organisation\n• Genehmigung von Ressourcen und Budget für die SOA-Implementierung\n• Verantwortung für die finale Freigabe und Verabschiedung der SOA\n• Sicherstellung der Integration in die Unternehmensstrategie und Governance\n\n🔒 ISMS-Manager und Sicherheitsverantwortliche:\n• Gesamtverantwortung für die SOA-Entwicklung und Koordination des Prozesses\n• Methodische Führung und Qualitätssicherung der SOA-Erstellung\n• Sicherstellung der Compliance mit ISO 27001 Anforderungen\n• Koordination zwischen verschiedenen Stakeholdern und Fachbereichen\n• Dokumentation und Pflege der SOA sowie Change Management\n\n💼 Fachbereichsleiter und Prozessverantwortliche:\n• Bereitstellung von Geschäftsprozess-Expertise und Anforderungen\n• Bewertung der Geschäftsauswirkungen von Sicherheitsmaßnahmen\n• Identifikation kritischer Informationsassets und Geschäftsprozesse\n• Validierung der Angemessenheit ausgewählter Controls für ihre Bereiche\n• Unterstützung bei der praktischen Umsetzung und Integration\n\n🖥️ IT-Leitung und technische Experten:\n• Bewertung der technischen Machbarkeit und Implementierbarkeit von Controls\n• Analyse bestehender technischer Sicherheitsmaßnahmen und Infrastruktur\n• Identifikation technischer Abhängigkeiten und Integrationsmöglichkeiten\n• Schätzung von Aufwand und Ressourcenbedarf für technische Implementierungen\n• Beratung zu technischen Alternativen und Best Practices\n\n⚖️ Compliance und Rechtsabteilung:\n• Bewertung regulatorischer Anforderungen und rechtlicher Verpflichtungen\n• Sicherstellung der Compliance mit branchenspezifischen Regulierungen\n• Analyse von Vertragsanforderungen und Kundenanforderungen\n• Bewertung rechtlicher Risiken und Haftungsaspekte\n• Integration von Datenschutz und anderen Compliance-Anforderungen\n\n🛡️ Risikomanagement und interne Revision:\n• Bereitstellung von Risikobewertungsmethoden und Expertise\n• Validierung der Risikoanalyse und Bewertungsergebnisse\n• Sicherstellung der Konsistenz mit dem organisationsweiten Risikomanagement\n• Durchführung unabhängiger Bewertungen und Qualitätsprüfungen\n• Integration in bestehende Audit und Assurance Prozesse\n\n🏢 Externe Berater und Auditoren:\n• Bereitstellung spezialisierter ISO 27001 und SOA-Expertise\n• Objektive Bewertung und Validierung der SOA-Entwicklung\n• Benchmarking mit Best Practices und Branchenstandards\n• Unterstützung bei komplexen oder spezialisierten Anforderungen\n• Vorbereitung auf externe Zertifizierungsaudits"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie integriert man die SOA-Entwicklung in bestehende Managementsysteme und Prozesse?',
        answer: "Die Integration der SOA-Entwicklung in bestehende Managementsysteme und Prozesse ist entscheidend für Effizienz, Konsistenz und nachhaltige Wirksamkeit. Eine systematische Integration vermeidet Doppelarbeit, nutzt Synergien und gewährleistet eine ganzheitliche Governance-Struktur.\n\n🔗 Integration mit Risikomanagement-Systemen:\n• Nutzung bestehender Risikobewertungsmethoden und Risikoregister\n• Harmonisierung von Risikokategorien und Bewertungskriterien\n• Integration der SOA-Risiken in das organisationsweite Risikomanagement\n• Verwendung etablierter Risiko-Reporting und Monitoring-Prozesse\n• Sicherstellung konsistenter Risikokommunikation und Governance\n\n📋 Harmonisierung mit anderen Managementsystemen:\n• Mapping und Integration mit ISO 9001 Qualitätsmanagementsystemen\n• Abstimmung mit ISO 14001 Umweltmanagementsystemen\n• Integration mit ISO 45001 Arbeitsschutz-Managementsystemen\n• Nutzung gemeinsamer Dokumentationsstrukturen und Prozesse\n• Entwicklung integrierter Audit und Review-Zyklen\n\n🏛️ Einbindung in IT-Governance und Architektur:\n• Integration mit COBIT oder anderen IT-Governance-Frameworks\n• Abstimmung mit Enterprise Architecture und IT-Strategieprozessen\n• Nutzung bestehender IT-Risikomanagement und Compliance-Strukturen\n• Integration mit Change Management und Configuration Management\n• Harmonisierung mit IT-Service Management nach ITIL\n\n⚖️ Compliance-Integration und regulatorische Harmonisierung:\n• Mapping zu branchenspezifischen Regulierungen und Standards\n• Integration mit DSGVO-Compliance und Datenschutz-Management\n• Abstimmung mit Finanzregulierung wie DORA, MaRisk oder BAIT\n• Harmonisierung mit Branchenstandards wie PCI DSS oder HIPAA\n• Nutzung bestehender Compliance-Monitoring und Reporting-Systeme\n\n📊 Integration in Geschäftsprozesse und Operations:\n• Einbindung in bestehende Geschäftsprozess-Dokumentation\n• Integration mit Business Continuity und Disaster Recovery Planning\n• Abstimmung mit Vendor Management und Supplier Assessment\n• Integration in Projekt und Change Management Prozesse\n• Harmonisierung mit Performance Management und KPI-Systemen\n\n🔄 Prozessintegration und Workflow-Optimierung:\n• Nutzung bestehender Dokumentenmanagement und Workflow-Systeme\n• Integration mit etablierten Approval und Review-Prozessen\n• Harmonisierung von Rollen und Verantwortlichkeiten\n• Nutzung bestehender Training und Awareness-Programme\n• Integration in regelmäßige Management Reviews und Reporting-Zyklen\n\n🛠️ Technische Integration und Tool-Harmonisierung:\n• Nutzung bestehender GRC-Plattformen und Compliance-Tools\n• Integration mit Monitoring und Alerting-Systemen\n• Harmonisierung mit Asset Management und Configuration Databases\n• Nutzung etablierter Reporting und Dashboard-Systeme\n• Integration mit Identity und Access Management Systemen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Tools und Technologien unterstützen die effiziente SOA-Entwicklung und -Verwaltung?',
        answer: "Moderne Tools und Technologien können die SOA-Entwicklung und -Verwaltung erheblich effizienter gestalten, die Qualität verbessern und die kontinuierliche Pflege vereinfachen. Die Auswahl der richtigen Werkzeuge hängt von Organisationsgröße, Komplexität und spezifischen Anforderungen ab.\n\n🏢 Integrierte GRC-Plattformen:\n• Umfassende Governance, Risk und Compliance Plattformen wie ServiceNow GRC, MetricStream oder SAP GRC\n• Integrierte Risikobewertung, Control-Management und Compliance-Monitoring\n• Automatisierte Workflows für SOA-Entwicklung, Review und Approval-Prozesse\n• Zentrale Dokumentation und Versionskontrolle aller ISMS-Dokumente\n• Dashboard und Reporting-Funktionen für Management und Stakeholder\n\n📊 Spezialisierte ISMS-Management-Tools:\n• Dedizierte ISO 27001 Tools wie Vanta, Drata, oder Compliance.ai\n• Vorgefertigte Templates und Frameworks für SOA-Entwicklung\n• Automatisierte Control-Bewertung und Gap-Analyse-Funktionen\n• Integrierte Audit-Trails und Compliance-Nachweise\n• Kontinuierliches Monitoring und Alerting bei Abweichungen\n\n🔍 Risikomanagement und Assessment-Tools:\n• Spezialisierte Risikobewertungstools wie Resolver, LogicGate oder Riskonnect\n• Quantitative und qualitative Risikobewertungsmethoden\n• Monte Carlo Simulationen und Szenario-Analysen\n• Integration mit Threat Intelligence und Vulnerability Management\n• Automatisierte Risiko-Aggregation und Reporting\n\n📝 Dokumentenmanagement und Kollaboration:\n• Enterprise Content Management Systeme wie SharePoint oder Confluence\n• Versionskontrolle und Change Management für SOA-Dokumente\n• Kollaborative Bearbeitung und Review-Workflows\n• Automatisierte Benachrichtigungen und Erinnerungen\n• Integration mit E-Mail und Kalendersystemen\n\n🤖 Automatisierung und Workflow-Tools:\n• Business Process Management Systeme wie Camunda oder Nintex\n• Automatisierte SOA-Review und Update-Zyklen\n• Integration mit IT-Service Management Tools\n• Robotic Process Automation für wiederkehrende Aufgaben\n• API-Integration mit bestehenden Systemen und Datenquellen\n\n📈 Analytics und Business Intelligence:\n• BI-Plattformen wie Tableau, Power BI oder Qlik für SOA-Analytics\n• Trend-Analysen und Predictive Analytics für Risikobewertung\n• Benchmarking und Maturity Assessment Dashboards\n• Automatisierte KPI-Berechnung und Performance-Monitoring\n• Integration mit Data Lakes und Big Data Plattformen\n\n☁️ Cloud-basierte und SaaS-Lösungen:\n• Cloud-native Compliance-Plattformen mit globaler Verfügbarkeit\n• Skalierbare Lösungen für wachsende Organisationen\n• Regelmäßige Updates und neue Features ohne Wartungsaufwand\n• Integration mit Cloud-Infrastrukturen und DevOps-Pipelines\n• Mobile Apps für unterwegs Zugriff und Genehmigungen\n\n🔧 Open Source und Custom-Entwicklungen:\n• Open Source GRC-Tools wie ERAMBA oder SimpleRisk\n• Anpassbare Lösungen für spezifische Organisationsanforderungen\n• Integration mit bestehenden IT-Landschaften und Legacy-Systemen\n• Kosteneffektive Alternativen für kleinere Organisationen\n• Community-Support und kontinuierliche Weiterentwicklung"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
