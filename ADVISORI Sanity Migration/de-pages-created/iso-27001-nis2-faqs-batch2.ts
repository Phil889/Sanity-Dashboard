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
    console.log('Updating ISO 27001 NIS2 Integration page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-nis2' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-nis2" not found')
    }
    
    // Create new FAQs for ISO 27001 NIS2 Integration implementation strategies
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Implementierungsstrategie ist für die Integration von ISO 27001 und NIS2 am effektivsten?',
        answer: "Eine erfolgreiche Integration von ISO 27001 und NIS2 erfordert eine durchdachte, phasenorientierte Implementierungsstrategie, die sowohl die bestehenden ISMS-Strukturen optimal nutzt als auch die spezifischen NIS2-Anforderungen systematisch integriert. Der Schlüssel liegt in einem strukturierten Ansatz, der Synergien maximiert und Redundanzen minimiert.\n\n🎯 Strategische Planungsphase:\n• Umfassende Baseline-Bewertung der bestehenden ISO 27001-Implementierung und deren Reife\n• Detaillierte Gap-Analyse zwischen aktuellen ISMS-Kontrollen und NIS2-Anforderungen\n• Entwicklung einer integrierten Compliance-Roadmap mit klaren Meilensteinen und Abhängigkeiten\n• Stakeholder-Mapping und Kommunikationsstrategie für alle beteiligten Parteien\n• Ressourcenplanung und Budget-Allokation für die Integrationsprojekte\n\n🔄 Phasenweise Implementierung:\n• Phase 1: Governance-Integration und Rollen-Erweiterung für einheitliche Führungsstrukturen\n• Phase 2: Risikomanagement-Harmonisierung und Asset-Klassifizierung für kritische Infrastrukturen\n• Phase 3: Technische Kontrollen-Mapping und Sicherheitsmaßnahmen-Integration\n• Phase 4: Incident Response und Business Continuity Prozess-Vereinheitlichung\n• Phase 5: Monitoring, Reporting und kontinuierliche Verbesserung der integrierten Landschaft\n\n🏗️ Struktureller Integrationsansatz:\n• Aufbau auf bestehenden ISMS-Fundamenten anstatt paralleler Systementwicklung\n• Schrittweise Erweiterung der Dokumentationslandschaft um NIS2-spezifische Elemente\n• Integration von NIS2-Meldepflichten in bestehende Incident Management Prozesse\n• Harmonisierung von Audit-Zyklen und Compliance-Überwachung\n• Entwicklung einheitlicher KPI-Frameworks für ganzheitliches Compliance-Monitoring\n\n⚡ Beschleunigungsfaktoren:\n• Nutzung bewährter Change Management Methoden aus der ISO 27001-Implementierung\n• Leveraging bestehender Schulungs- und Awareness-Programme\n• Integration in etablierte Management Review und Verbesserungszyklen\n• Verwendung vorhandener Technologie-Infrastrukturen und Security Tools\n• Aufbau auf bestehenden Lieferanten- und Drittpartei-Beziehungen\n\n🎪 Erfolgsfaktoren und Best Practices:\n• Starke Führungsunterstützung und klare Verantwortlichkeiten für die Integration\n• Cross-funktionale Teams mit Expertise in beiden Compliance-Bereichen\n• Kontinuierliche Kommunikation und Stakeholder-Engagement\n• Agile Implementierungsansätze mit regelmäßigen Review- und Anpassungszyklen\n• Fokus auf Quick Wins und frühe Erfolge zur Motivation und Momentum-Erhaltung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie werden Incident Response Prozesse für beide Frameworks harmonisiert?',
        answer: "Die Harmonisierung von Incident Response Prozessen für ISO 27001 und NIS2 ist ein kritischer Erfolgsfaktor für eine effiziente integrierte Compliance-Architektur. Beide Frameworks haben spezifische Anforderungen an Incident Management, die durch eine durchdachte Prozessintegration optimal erfüllt werden können.\n\n🚨 Unified Incident Classification und Kategorisierung:\n• Entwicklung einer einheitlichen Incident-Taxonomie, die sowohl ISO 27001 als auch NIS2-Kategorien abdeckt\n• Integration von NIS2-spezifischen Incident-Typen in bestehende ISO 27001 Klassifizierungssysteme\n• Erweiterte Impact-Bewertung um gesellschaftliche und wirtschaftliche Auswirkungen für kritische Infrastrukturen\n• Harmonisierte Severity-Level, die beide Frameworks gleichzeitig bedienen\n• Automatisierte Klassifizierung durch intelligente Incident Management Systeme\n\n⏱️ Integrierte Meldepflichten und Zeitvorgaben:\n• Unified Reporting-Prozesse, die sowohl interne ISO 27001 als auch externe NIS2-Meldepflichten erfüllen\n• Automatisierte Eskalation basierend auf Incident-Typ und regulatorischen Anforderungen\n• Integrierte Zeitstempel und Tracking für verschiedene Meldezeiträume\n• Standardisierte Kommunikationsvorlagen für verschiedene Stakeholder-Gruppen\n• Koordinierte Behörden-Kommunikation und Stakeholder-Management\n\n🔧 Technische Prozessintegration:\n• Erweiterte SIEM-Integration für automatische Incident Detection und Initial Response\n• Unified Incident Management Plattformen mit Workflow-Automation\n• Integrierte Forensik-Capabilities für beide Compliance-Anforderungen\n• Automatisierte Evidence Collection und Chain of Custody Prozesse\n• Real-time Dashboards für integriertes Incident Monitoring\n\n👥 Organisatorische Harmonisierung:\n• Erweiterte Incident Response Teams mit NIS2-spezifischen Kompetenzen\n• Integrierte Rollen und Verantwortlichkeiten für beide Frameworks\n• Cross-Training für bestehende IR-Teams in NIS2-Anforderungen\n• Unified Command Structure für koordinierte Incident Response\n• Integrierte Kommunikationspläne für interne und externe Stakeholder\n\n📋 Dokumentation und Lessons Learned:\n• Harmonisierte Incident Documentation Standards für beide Frameworks\n• Integrierte Post-Incident Review Prozesse mit unified Improvement Actions\n• Gemeinsame Metrics und KPIs für Incident Response Performance\n• Koordinierte Threat Intelligence Integration und Sharing\n• Unified Training und Simulation Programme für beide Compliance-Bereiche"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Rolle spielt Risikomanagement bei der Integration von ISO 27001 und NIS2?',
        answer: "Risikomanagement bildet das strategische Herzstück der Integration von ISO 27001 und NIS2, da beide Frameworks auf risikobasierten Ansätzen fundieren. Eine intelligente Harmonisierung der Risikomanagement-Prozesse schafft nicht nur Compliance-Effizienz, sondern auch eine robuste, einheitliche Sicherheitsarchitektur für kritische Infrastrukturen.\n\n🎯 Unified Risk Assessment Methodologie:\n• Integration von ISO 27001 Risikobewertungsmethoden mit NIS2-spezifischen Bedrohungsszenarien\n• Erweiterte Asset-Klassifizierung um kritische Infrastruktur-spezifische Kategorien und Abhängigkeiten\n• Harmonisierte Risk Appetite und Tolerance-Level für beide Frameworks\n• Integrierte Threat Modeling Ansätze, die sowohl allgemeine als auch sektor-spezifische Bedrohungen berücksichtigen\n• Unified Risk Scoring und Priorisierung basierend auf beiden Compliance-Anforderungen\n\n🔍 Erweiterte Risikoidentifikation und -analyse:\n• Integration von NIS2-spezifischen Risikokategorien in bestehende ISO 27001 Risk Registers\n• Berücksichtigung von Supply Chain Risks und Drittpartei-Abhängigkeiten\n• Erweiterte Business Impact Analysis um gesellschaftliche und wirtschaftliche Auswirkungen\n• Szenario-basierte Risikoanalyse für kritische Infrastruktur-spezifische Bedrohungen\n• Cross-Border und Cascade-Effekt Analysen für vernetzte kritische Systeme\n\n⚖️ Integrierte Risk Treatment Strategien:\n• Harmonisierte Risk Treatment Optionen, die beide Frameworks optimal bedienen\n• Koordinierte Kontrollauswahl basierend auf ISO 27001 Controls und NIS2-Sicherheitsmaßnahmen\n• Integrierte Kosten-Nutzen-Analysen für Risk Mitigation Investments\n• Unified Risk Acceptance Prozesse mit angemessener Governance-Oversight\n• Koordinierte Residual Risk Management für beide Compliance-Bereiche\n\n📊 Kontinuierliches Risk Monitoring und Review:\n• Integrierte Risk Dashboards mit Real-time Monitoring für beide Frameworks\n• Harmonisierte Risk KPIs und Metrics für einheitliches Performance Management\n• Koordinierte Risk Review Zyklen mit Management Oversight\n• Automated Risk Assessment Updates basierend auf Threat Intelligence\n• Integrierte Risk Communication und Stakeholder Reporting\n\n🔄 Dynamic Risk Management und Anpassungsfähigkeit:\n• Agile Risk Management Prozesse, die sich an verändernde Bedrohungslandschaften anpassen\n• Integration von Threat Intelligence und Cyber Threat Landscape Updates\n• Koordinierte Risk Management für emerging Technologies und Digital Transformation\n• Integrierte Crisis Risk Management für Business Continuity und Disaster Recovery\n• Continuous Improvement der Risk Management Capabilities basierend auf Lessons Learned"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie wird die Dokumentation für beide Frameworks effizient organisiert?',
        answer: "Eine effiziente Dokumentationsorganisation für ISO 27001 und NIS2 ist entscheidend für nachhaltige Compliance-Effizienz und erfolgreiche Audits. Durch intelligente Strukturierung und Integration können Redundanzen vermieden und Synergien maximiert werden, während beide Frameworks vollständig abgedeckt werden.\n\n📚 Unified Documentation Architecture:\n• Entwicklung einer integrierten Dokumentenhierarchie, die beide Frameworks systematisch abdeckt\n• Master-Dokumente, die sowohl ISO 27001 als auch NIS2-Anforderungen gleichzeitig erfüllen\n• Cross-Reference-Systeme zwischen verschiedenen Compliance-Dokumenten\n• Modulare Dokumentenstruktur für flexible Anpassung und Erweiterung\n• Einheitliche Versionskontrolle und Change Management für alle Compliance-Dokumente\n\n🔗 Integrierte Policy und Prozess-Landschaft:\n• Harmonisierte Informationssicherheits-Policies, die beide Frameworks abdecken\n• Integrierte Verfahrensanweisungen für gemeinsame Prozesse wie Incident Response\n• Unified Risk Management Dokumentation mit Framework-spezifischen Anhängen\n• Koordinierte Business Continuity und Disaster Recovery Dokumentation\n• Integrierte Supplier und Third-Party Risk Management Dokumentation\n\n📋 Compliance-Mapping und Traceability:\n• Detaillierte Mapping-Matrizen zwischen ISO 27001 Controls und NIS2-Sicherheitsmaßnahmen\n• Traceability-Dokumentation für Audit-Evidenz und Compliance-Nachweis\n• Integrierte Compliance-Checklisten für beide Frameworks\n• Cross-Framework Impact Analysis für Änderungen und Updates\n• Unified Audit-Dokumentation für koordinierte Prüfungsaktivitäten\n\n🔧 Technische Dokumentationsmanagement:\n• Centralized Document Management Systeme mit Role-based Access Control\n• Automated Document Generation für Standard-Compliance-Reports\n• Integrierte Workflow-Systeme für Document Review und Approval Prozesse\n• Real-time Collaboration Tools für Cross-functional Documentation Teams\n• Automated Compliance-Tracking und Reminder-Systeme\n\n📊 Performance und Monitoring Dokumentation:\n• Integrierte KPI-Dokumentation für beide Frameworks\n• Unified Reporting-Templates für Management und Stakeholder Communication\n• Koordinierte Audit-Dokumentation und Evidence Management\n• Integrierte Lessons Learned und Improvement Documentation\n• Harmonisierte Training und Awareness Dokumentation für beide Compliance-Bereiche"
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
