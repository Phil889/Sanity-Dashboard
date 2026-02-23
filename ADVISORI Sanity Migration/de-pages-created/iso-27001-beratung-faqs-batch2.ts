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
    console.log('Updating ISO 27001 Beratung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-beratung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-beratung" not found')
    }
    
    // Create new FAQs for ISO 27001 consulting implementation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie gestaltet ADVISORI den Risikomanagement-Prozess bei ISO 27001 Implementierungen?',
        answer: "Das Risikomanagement bildet das Herzstück jeder erfolgreichen ISO 27001 Implementierung und erfordert einen systematischen, methodischen Ansatz, der über einfache Checklisten hinausgeht. ADVISORI entwickelt maßgeschneiderte Risikomanagement-Frameworks, die optimal auf Ihre Geschäftsrealität abgestimmt sind und nachhaltigen Schutz bieten.\n\n🔍 Systematische Risikoidentifikation und -bewertung:\n• Umfassende Analyse aller Informationswerte und deren Kritikalität für Ihre Geschäftsprozesse\n• Systematische Identifikation von Bedrohungen unter Berücksichtigung aktueller Cyber-Bedrohungslandschaften\n• Bewertung von Schwachstellen in technischen, organisatorischen und physischen Bereichen\n• Quantitative und qualitative Risikobewertung mit Business-Impact-Analyse\n• Integration branchenspezifischer Risikoszenarien und regulatorischer Anforderungen\n\n📊 Datengetriebene Risikobewertung:\n• Einsatz modernster Risikobewertungstools und -methoden für präzise Analysen\n• Entwicklung organisationsspezifischer Risikokategorien und Bewertungskriterien\n• Berücksichtigung von Eintrittswahrscheinlichkeiten und potenziellen Schadensauswirkungen\n• Integration historischer Sicherheitsvorfälle und Lessons Learned\n• Kontinuierliche Aktualisierung der Risikobewertung basierend auf neuen Erkenntnissen\n\n🛡️ Strategische Risk Treatment Planung:\n• Entwicklung maßgeschneiderter Kontrollmaßnahmen basierend auf Kosten-Nutzen-Analysen\n• Priorisierung von Sicherheitsmaßnahmen nach Risikoreduktion und strategischer Bedeutung\n• Integration bestehender Sicherheitskontrollen und Optimierung deren Wirksamkeit\n• Berücksichtigung von Risikotoleranz und Geschäftsanforderungen bei der Maßnahmenauswahl\n• Entwicklung von Notfallplänen und Incident Response Strategien\n\n🔄 Kontinuierliches Risikomanagement:\n• Etablierung regelmäßiger Risikobewertungszyklen und Update-Prozesse\n• Integration von Threat Intelligence und aktuellen Sicherheitstrends\n• Aufbau von Monitoring-Systemen für frühzeitige Risikoerkennung\n• Entwicklung von KPIs und Metriken zur Messung der Risikomanagement-Effektivität\n• Schaffung einer risikobewussten Unternehmenskultur durch Schulung und Sensibilisierung\n\n📈 Business-orientierte Risikokommunikation:\n• Entwicklung verständlicher Risikoreports für verschiedene Stakeholder-Gruppen\n• Visualisierung von Risiken und deren Auswirkungen auf Geschäftsziele\n• Regelmäßige Risikokommunikation an Management und Aufsichtsgremien\n• Integration von Risikoinformationen in strategische Entscheidungsprozesse\n• Aufbau von Risikotransparenz für fundierte Geschäftsentscheidungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt die Integration mit anderen Compliance-Frameworks in der ISO 27001 Beratung?',
        answer: "Die Integration mit anderen Compliance-Frameworks ist ein zentraler Erfolgsfaktor moderner ISO 27001 Implementierungen und ermöglicht erhebliche Synergieeffekte, Kostenoptimierung und operative Effizienz. ADVISORI entwickelt ganzheitliche Compliance-Architekturen, die multiple Standards harmonisch verbinden und Doppelarbeiten vermeiden.\n\n🌐 Strategische Multi-Framework-Integration:\n• Systematische Analyse bestehender Compliance-Landschaften und Identifikation von Überschneidungen\n• Entwicklung einheitlicher Governance-Strukturen, die multiple Standards effizient abdecken\n• Harmonisierung von Prozessen, Dokumentation und Kontrollmechanismen\n• Schaffung gemeinsamer Audit- und Monitoring-Infrastrukturen\n• Optimierung von Ressourceneinsatz durch intelligente Framework-Kombination\n\n🔗 Praktische Synergieeffekte:\n• DORA-Integration: Nahtlose Verbindung von ISO 27001 mit Digital Operational Resilience Act Anforderungen\n• NIS2-Harmonisierung: Optimale Abstimmung mit Network and Information Security Directive\n• GDPR-Alignment: Integration von Datenschutz-Anforderungen in das ISMS-Framework\n• SOX-Compliance: Verbindung mit Sarbanes-Oxley Kontrollanforderungen\n• Branchenstandards: Integration spezifischer Anforderungen wie PCI-DSS, HIPAA oder ISO 9001\n\n📋 Einheitliche Dokumentations- und Prozesslandschaft:\n• Entwicklung gemeinsamer Richtlinien und Verfahren, die multiple Standards abdecken\n• Schaffung einheitlicher Risikomanagement-Prozesse für alle Compliance-Bereiche\n• Integration von Audit-Trails und Nachweisführung für verschiedene Standards\n• Harmonisierung von Incident Management und Business Continuity Prozessen\n• Aufbau gemeinsamer Schulungs- und Awareness-Programme\n\n💰 Kostenoptimierung und Effizienzsteigerung:\n• Reduzierung von Implementierungs- und Betriebskosten durch gemeinsame Infrastrukturen\n• Minimierung von Audit-Aufwänden durch koordinierte Prüfungszyklen\n• Optimierung von Personalressourcen durch übergreifende Verantwortlichkeiten\n• Vermeidung redundanter Kontrollmechanismen und Dokumentation\n• Maximierung des Return on Investment durch intelligente Framework-Kombination\n\n🚀 Zukunftsorientierte Compliance-Architektur:\n• Aufbau flexibler Strukturen, die sich an neue regulatorische Anforderungen anpassen können\n• Proaktive Vorbereitung auf kommende Standards und Regulierungen\n• Entwicklung einer lernenden Compliance-Organisation\n• Integration von Automatisierung und digitalen Tools für effiziente Compliance-Überwachung\n• Schaffung einer nachhaltigen Basis für kontinuierliche Compliance-Erweiterungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie unterstützt ADVISORI bei der Auswahl und Implementierung geeigneter Sicherheitstechnologien?',
        answer: "Die Auswahl und Implementierung geeigneter Sicherheitstechnologien ist ein kritischer Erfolgsfaktor für jede ISO 27001 Implementierung und erfordert tiefgreifende technische Expertise kombiniert mit strategischem Verständnis. ADVISORI bietet herstellerunabhängige Beratung, die optimal auf Ihre spezifischen Anforderungen und Budgets abgestimmt ist.\n\n🔧 Strategische Technologie-Bewertung:\n• Umfassende Analyse Ihrer bestehenden IT-Infrastruktur und Sicherheitsarchitektur\n• Bewertung von Sicherheitslücken und Identifikation technologischer Verbesserungspotenziale\n• Entwicklung einer maßgeschneiderten Security Technology Roadmap\n• Berücksichtigung von Skalierbarkeit, Integration und Zukunftsfähigkeit\n• Kosten-Nutzen-Analyse verschiedener Technologieoptionen und Implementierungsansätze\n\n🛡️ Herstellerunabhängige Lösungsauswahl:\n• Objektive Bewertung verschiedener Sicherheitslösungen ohne Herstellerbindung\n• Entwicklung detaillierter Anforderungsprofile basierend auf Ihren spezifischen Bedürfnissen\n• Durchführung strukturierter Proof-of-Concepts und Technologie-Evaluierungen\n• Verhandlungsunterstützung und Vertragsoptimierung mit Technologieanbietern\n• Berücksichtigung von Total Cost of Ownership und langfristigen Betriebskosten\n\n🔄 Ganzheitliche Implementierungsbegleitung:\n• Entwicklung detaillierter Implementierungspläne mit klaren Meilensteinen und Erfolgskriterien\n• Projektmanagement und Koordination zwischen verschiedenen Stakeholdern und Anbietern\n• Technische Implementierungsunterstützung und Konfigurationsberatung\n• Integration in bestehende Systeme und Prozesse ohne Betriebsunterbrechungen\n• Umfassende Tests und Validierung der implementierten Sicherheitslösungen\n\n📊 Monitoring und Optimierung:\n• Aufbau effektiver Security Operations Center Strukturen und Prozesse\n• Implementierung von SIEM-Systemen und Security Analytics Plattformen\n• Entwicklung von Dashboards und Reporting-Mechanismen für verschiedene Stakeholder\n• Etablierung von Incident Response und Threat Hunting Capabilities\n• Kontinuierliche Optimierung und Tuning der implementierten Sicherheitstechnologien\n\n🎓 Kompetenzaufbau und Wissenstransfer:\n• Schulung Ihrer IT-Teams in der Bedienung und Wartung der neuen Sicherheitstechnologien\n• Entwicklung von Betriebshandbüchern und Dokumentation\n• Aufbau interner Expertise für eigenständige Systembetreuung\n• Mentoring und Coaching für kontinuierliche Kompetenzentwicklung\n• Etablierung von Best Practices und Lessons Learned für zukünftige Technologie-Projekte"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie gewährleistet ADVISORI eine erfolgreiche Zertifizierungsvorbereitung und Audit-Begleitung?',
        answer: "Eine erfolgreiche ISO 27001 Zertifizierung erfordert systematische Vorbereitung, professionelle Begleitung und tiefgreifendes Verständnis der Audit-Prozesse. ADVISORI bietet umfassende Zertifizierungsunterstützung, die von der strategischen Planung bis zur erfolgreichen Zertifikatserteilung reicht und langfristigen Erfolg sicherstellt.\n\n📋 Strategische Zertifizierungsplanung:\n• Entwicklung einer detaillierten Zertifizierungsstrategie mit optimaler Timing-Planung\n• Auswahl der geeigneten Zertifizierungsstelle basierend auf Branche, Reputation und Expertise\n• Festlegung des Zertifizierungsumfangs und der relevanten Standorte\n• Koordination mit anderen laufenden Zertifizierungsprojekten für Synergieeffekte\n• Budgetplanung und Ressourcenallokation für den gesamten Zertifizierungsprozess\n\n🔍 Umfassende Pre-Assessment-Durchführung:\n• Systematische Überprüfung aller ISMS-Komponenten gegen ISO 27001 Anforderungen\n• Identifikation und Behebung von Compliance-Lücken vor dem offiziellen Audit\n• Simulation von Audit-Situationen und Vorbereitung der Mitarbeiter auf Auditor-Interviews\n• Überprüfung der Dokumentation auf Vollständigkeit, Konsistenz und Auditierbarkeit\n• Validierung der Wirksamkeit implementierter Kontrollmaßnahmen\n\n👥 Professionelle Audit-Begleitung:\n• Anwesenheit erfahrener Berater während der gesamten Audit-Phase\n• Unterstützung bei der Kommunikation mit Auditoren und Klärung technischer Fragen\n• Koordination von Audit-Terminen und Bereitstellung erforderlicher Nachweise\n• Sofortige Unterstützung bei unerwarteten Audit-Herausforderungen\n• Dokumentation von Audit-Erkenntnissen und Lessons Learned\n\n🔧 Effiziente Nonkonformitäten-Behandlung:\n• Systematische Analyse identifizierter Nonkonformitäten und deren Ursachen\n• Entwicklung effektiver Korrekturmaßnahmen mit nachhaltiger Wirkung\n• Projektmanagement für die zeitgerechte Umsetzung aller Korrekturmaßnahmen\n• Dokumentation der Maßnahmen entsprechend Auditor-Anforderungen\n• Vorbereitung auf Follow-up-Audits und Nachweis der Wirksamkeit\n\n🎯 Nachhaltige Zertifizierungserhaltung:\n• Entwicklung von Prozessen für kontinuierliche Compliance-Überwachung\n• Vorbereitung auf Überwachungsaudits und Re-Zertifizierungen\n• Aufbau interner Audit-Kompetenzen für eigenständige ISMS-Bewertung\n• Etablierung von Verbesserungsprozessen für kontinuierliche ISMS-Optimierung\n• Langfristige Beratung für Zertifizierungserhaltung und -erweiterung"
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
