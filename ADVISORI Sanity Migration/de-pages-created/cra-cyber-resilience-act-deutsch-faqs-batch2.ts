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
    console.log('Updating CRA Cyber Resilience Act Deutsch page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-deutsch' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-deutsch" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie integrieren wir CRA-Anforderungen effektiv in bestehende deutsche IT-Sicherheitsarchitekturen und BSI-konforme Systeme?',
        answer: "Die Integration von CRA-Anforderungen in bestehende deutsche IT-Sicherheitsarchitekturen erfordert eine systematische Herangehensweise, die sowohl technische Kompatibilität als auch regulatorische Konformität mit BSI-Standards gewährleistet. Eine erfolgreiche Integration nutzt bestehende deutsche Sicherheitsinfrastrukturen als Fundament und erweitert diese strategisch um CRA-spezifische Komponenten.\n\n🏗️ Architektur-Assessment und Mapping:\n• Umfassende Bewertung bestehender deutscher IT-Sicherheitsarchitekturen und deren Kompatibilität mit CRA-Anforderungen im deutschen Kontext.\n• Detailliertes Mapping von BSI-Standards auf CRA-Komponenten zur Identifikation von Synergien und Optimierungspotenzialen.\n• Analyse bestehender deutscher Sicherheitskontrollen und deren Erweiterungsmöglichkeiten für CRA-Compliance ohne Systembrüche.\n• Bewertung der Integration mit deutschen Identity Management Systemen, Netzwerksicherheit und Endpoint Protection Lösungen.\n• Strategische Planung für die Nutzung bestehender deutscher Monitoring- und Logging-Infrastrukturen für CRA-Compliance.\n\n🔧 Technische Integration und Implementierung:\n• Entwicklung von Integrationsplänen, die bestehende deutsche Sicherheitstechnologien optimal nutzen und CRA-Anforderungen nahtlos einbinden.\n• Implementation von API-basierten Integrationen zwischen CRA-Komponenten und bestehenden deutschen Sicherheitssystemen.\n• Aufbau von Datenflüssen und Reporting-Mechanismen, die sowohl deutsche als auch CRA-Anforderungen erfüllen.\n• Entwicklung von Automatisierungslösungen für kontinuierliche Compliance-Überwachung in deutschen IT-Umgebungen.\n• Integration von CRA-spezifischen Sicherheitskontrollen in bestehende deutsche Change Management und Deployment Prozesse.\n\n⚙️ Prozess-Integration und Governance:\n• Anpassung bestehender deutscher IT-Governance-Prozesse zur Berücksichtigung von CRA-Anforderungen und BSI-Konformität.\n• Integration von CRA-Compliance-Checks in bestehende deutsche Entwicklungs- und Deployment-Pipelines.\n• Entwicklung von deutschen Incident Response Prozessen, die sowohl traditionelle IT-Sicherheit als auch CRA-spezifische Anforderungen abdecken.\n• Aufbau von deutschen Training- und Awareness-Programmen für die Integration neuer CRA-Komponenten in bestehende Arbeitsabläufe.\n• Etablierung von deutschen Compliance-Monitoring-Dashboards, die einheitliche Sicht auf alle Sicherheitsaspekte bieten.\n\n🔄 Kontinuierliche Optimierung und Wartung:\n• Implementation von deutschen Monitoring-Systemen für kontinuierliche Überwachung der integrierten CRA-Sicherheitsarchitektur.\n• Aufbau von deutschen Feedback-Mechanismen zur kontinuierlichen Verbesserung der Integration und Optimierung der Performance.\n• Entwicklung von deutschen Update- und Patch-Management-Prozessen für die integrierte Sicherheitslandschaft.\n• Etablierung von deutschen Performance-Metriken zur Bewertung der Effektivität der integrierten Lösung.\n• Planung für zukünftige deutsche Technologie-Upgrades und deren nahtlose Integration in die CRA-konforme Architektur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche spezifischen deutschen Marktanforderungen müssen bei der CRA-Implementierung berücksichtigt werden?',
        answer: "Die CRA-Implementierung im deutschen Markt erfordert die Berücksichtigung spezifischer deutscher Marktanforderungen, die über allgemeine europäische Standards hinausgehen und die Besonderheiten der deutschen Geschäftskultur, Regulatorik und Kundenerwartungen widerspiegeln. Eine erfolgreiche deutsche CRA-Implementierung integriert diese nationalen Besonderheiten strategisch in die Compliance-Architektur.\n\n🇩🇪 Deutsche Regulatorische Besonderheiten:\n• Integration mit dem deutschen IT-Sicherheitsgesetz und dessen spezifischen Anforderungen für kritische Infrastrukturen und Unternehmen.\n• Berücksichtigung deutscher Datenschutzbestimmungen und deren Wechselwirkung mit CRA-Anforderungen im deutschen Rechtskontext.\n• Anpassung an deutsche Telekommunikationsgesetze und deren Auswirkungen auf digitale Produkte und Services.\n• Integration mit deutschen Branchenstandards und Zertifizierungsanforderungen, die über EU-weite Mindeststandards hinausgehen.\n• Berücksichtigung deutscher Haftungsregelungen und Versicherungsanforderungen für Cybersicherheitsvorfälle.\n\n🏢 Deutsche Geschäfts- und Kulturspezifische Anforderungen:\n• Anpassung an deutsche Qualitätsansprüche und Gründlichkeitserwartungen bei Dokumentation und Compliance-Nachweisen.\n• Berücksichtigung deutscher Geschäftspraktiken wie ausführliche Vertragsverhandlungen und detaillierte Compliance-Audits.\n• Integration deutscher Sprach- und Kommunikationsanforderungen in alle CRA-bezogenen Prozesse und Dokumentationen.\n• Anpassung an deutsche Arbeitszeiten, Urlaubsregelungen und Betriebsabläufe bei der Implementierung von Sicherheitsmaßnahmen.\n• Berücksichtigung deutscher Mitbestimmungsrechte und Betriebsratsanforderungen bei der Einführung neuer Sicherheitstechnologien.\n\n🔒 Deutsche Sicherheits- und Technologieanforderungen:\n• Integration mit deutschen Cloud-Strategien und Souveränitätsanforderungen für sensible Daten und Systeme.\n• Berücksichtigung deutscher Verschlüsselungsstandards und kryptographischer Anforderungen, die über EU-Standards hinausgehen.\n• Anpassung an deutsche Netzwerksicherheitsanforderungen und Infrastrukturbeschränkungen.\n• Integration mit deutschen Identity Management Systemen und Authentifizierungsstandards.\n• Berücksichtigung deutscher Backup- und Disaster Recovery Anforderungen für geschäftskritische Systeme.\n\n🤝 Deutsche Stakeholder- und Partnerschaftsanforderungen:\n• Aufbau von Beziehungen zu deutschen Technologiepartnern und Sicherheitsdienstleistern für lokale Unterstützung.\n• Integration mit deutschen Lieferkettenanforderungen und Due Diligence Prozessen für Cybersicherheit.\n• Berücksichtigung deutscher Kundenerwartungen bezüglich lokaler Unterstützung und deutschsprachiger Services.\n• Anpassung an deutsche Vertriebskanäle und Markterschließungsstrategien für CRA-konforme Produkte.\n• Entwicklung deutscher Kommunikationsstrategien für Compliance-bezogene Kundeninformationen und Marketing."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie entwickeln wir ein effektives deutsches CRA-Incident-Response-System mit BSI-Integration?',
        answer: "Die Entwicklung eines effektiven deutschen CRA-Incident-Response-Systems erfordert eine strategische Integration mit BSI-Strukturen und deutschen Behörden, die sowohl nationale Sicherheitsanforderungen als auch CRA-spezifische Meldepflichten erfüllt. Ein erfolgreiches deutsches System kombiniert bewährte deutsche Sicherheitspraktiken mit innovativen CRA-Compliance-Mechanismen.\n\n🚨 Deutsche Incident Detection und Classification:\n• Implementierung deutscher Monitoring-Systeme, die sowohl traditionelle IT-Sicherheitsvorfälle als auch CRA-spezifische Incidents erkennen und klassifizieren.\n• Integration mit deutschen SIEM-Lösungen und Threat Intelligence Plattformen für umfassende Bedrohungserkennung.\n• Entwicklung deutscher Klassifizierungsschemata, die BSI-Standards mit CRA-Anforderungen harmonisieren.\n• Aufbau automatisierter deutscher Alerting-Mechanismen für verschiedene Incident-Kategorien und Schweregrade.\n• Integration mit deutschen Vulnerability Management Systemen für proaktive Bedrohungsidentifikation.\n\n📞 Deutsche Response-Koordination und Kommunikation:\n• Etablierung deutscher Incident Response Teams mit klaren Rollen, Verantwortlichkeiten und Eskalationspfaden.\n• Entwicklung deutscher Kommunikationsprotokolle für interne Teams, externe Partner und Regulierungsbehörden.\n• Integration mit deutschen Notfallkommunikationssystemen und Krisenmanagement-Strukturen.\n• Aufbau deutscher Stakeholder-Kommunikation für Kunden, Partner und Medien bei größeren Sicherheitsvorfällen.\n• Entwicklung deutscher Dokumentationsstandards für alle Incident-Response-Aktivitäten und Lessons Learned.\n\n🏛️ BSI-Integration und Behördenkommunikation:\n• Aufbau direkter Kommunikationskanäle mit dem BSI und anderen relevanten deutschen Sicherheitsbehörden.\n• Entwicklung deutscher Meldeverfahren, die sowohl CRA-Anforderungen als auch nationale Meldepflichten erfüllen.\n• Integration mit deutschen Cyber-Sicherheitsnetzwerken und Informationsaustauschplattformen.\n• Etablierung deutscher Koordinationsmechanismen für grenzüberschreitende Sicherheitsvorfälle.\n• Aufbau deutscher Compliance-Reporting-Systeme für regulatorische Anforderungen und Audit-Zwecke.\n\n🔧 Deutsche Recovery und Kontinuität:\n• Entwicklung deutscher Business Continuity Pläne, die CRA-Compliance auch während und nach Sicherheitsvorfällen gewährleisten.\n• Implementation deutscher Backup- und Recovery-Systeme mit CRA-konformen Sicherheitsstandards.\n• Aufbau deutscher Disaster Recovery Capabilities für kritische CRA-relevante Systeme und Daten.\n• Entwicklung deutscher Testing- und Übungsszenarien für regelmäßige Validierung der Incident Response Fähigkeiten.\n• Integration deutscher Forensik-Capabilities für detaillierte Incident-Analyse und Beweissicherung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche deutschen Zertifizierungs- und Auditanforderungen sind für CRA-Compliance relevant?',
        answer: "Deutsche Zertifizierungs- und Auditanforderungen für CRA-Compliance umfassen eine komplexe Landschaft nationaler und europäischer Standards, die strategisch koordiniert werden müssen, um sowohl deutsche Marktanforderungen als auch CRA-Verpflichtungen zu erfüllen. Eine erfolgreiche deutsche Zertifizierungsstrategie nutzt bestehende deutsche Qualitätssicherungssysteme und erweitert diese um CRA-spezifische Komponenten.\n\n🏅 Deutsche Zertifizierungslandschaft und Standards:\n• Identifikation relevanter deutscher Zertifizierungsstellen und akkreditierter Prüforganisationen für CRA-bezogene Assessments.\n• Integration mit bestehenden deutschen Qualitätsmanagementsystemen wie ISO-Zertifizierungen und branchenspezifischen Standards.\n• Berücksichtigung deutscher Konformitätsbewertungsverfahren und deren Harmonisierung mit CRA-Anforderungen.\n• Aufbau von Beziehungen zu deutschen Notified Bodies und Prüfstellen für effiziente Zertifizierungsprozesse.\n• Entwicklung deutscher Zertifizierungsroadmaps, die sowohl nationale als auch europäische Anforderungen berücksichtigen.\n\n📋 Deutsche Audit-Frameworks und Compliance-Strukturen:\n• Implementation deutscher Audit-Frameworks, die sowohl interne Qualitätssicherung als auch externe CRA-Compliance-Prüfungen unterstützen.\n• Entwicklung deutscher Dokumentationsstandards, die den Anforderungen verschiedener Audit-Typen und Zertifizierungsstellen genügen.\n• Integration mit deutschen Risikomanagement-Systemen für kontinuierliche Compliance-Überwachung und Audit-Vorbereitung.\n• Aufbau deutscher Internal Audit Capabilities mit spezifischer CRA-Expertise und Marktkenntnis.\n• Entwicklung deutscher Audit-Trails und Nachweisführung für alle CRA-relevanten Prozesse und Kontrollen.\n\n🔍 Deutsche Prüfungsverfahren und Assessment-Prozesse:\n• Vorbereitung auf deutsche Penetrationstests und Sicherheitsassessments mit CRA-spezifischen Prüfkriterien.\n• Entwicklung deutscher Testverfahren für kontinuierliche Validierung der CRA-Compliance und Sicherheitskontrollen.\n• Integration deutscher Vulnerability Assessments in regelmäßige Compliance-Überprüfungen.\n• Aufbau deutscher Red Team Exercises zur Validierung der Incident Response Capabilities.\n• Entwicklung deutscher Compliance-Metriken und KPIs für kontinuierliche Leistungsmessung und Verbesserung.\n\n📊 Deutsche Reporting und Nachweisführung:\n• Etablierung deutscher Reporting-Systeme, die sowohl interne Governance als auch externe Audit-Anforderungen erfüllen.\n• Entwicklung deutscher Compliance-Dashboards für Real-Time Überwachung aller relevanten Zertifizierungs- und Audit-Aspekte.\n• Integration deutscher Dokumentenmanagement-Systeme für effiziente Verwaltung aller Zertifizierungs- und Audit-Unterlagen.\n• Aufbau deutscher Stakeholder-Reporting für Management, Aufsichtsgremien und externe Partner.\n• Entwicklung deutscher Kommunikationsstrategien für Zertifizierungserfolge und Compliance-Achievements als Marketingvorteil."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
