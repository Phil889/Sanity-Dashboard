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
    console.log('Updating ISO 27001 Checkliste page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-checkliste" not found')
    }
    
    // Create new FAQs for ISO 27001 checkliste implementation and gap analysis
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie führt man eine effektive Gap-Analyse mit ISO 27001 Checklisten durch?',
        answer: "Eine effektive Gap-Analyse mit ISO 27001 Checklisten erfordert einen systematischen, strukturierten Ansatz, der sowohl technische als auch organisatorische Aspekte umfasst. Die Gap-Analyse bildet das Fundament für eine erfolgreiche ISMS-Implementierung und muss präzise, vollständig und handlungsorientiert durchgeführt werden, um maximalen Nutzen zu gewährleisten.\n\n🔍 Systematische Vorbereitung und Planung:\n• Vollständige Inventarisierung aller relevanten Geschäftsprozesse, IT-Systeme und Informationsassets\n• Identifikation und Einbindung aller relevanten Stakeholder aus verschiedenen Organisationsbereichen\n• Definition klarer Bewertungskriterien und Scoring-Methoden für konsistente Ergebnisse\n• Festlegung des Scope und der Grenzen der ISMS-Implementierung entsprechend Geschäftsanforderungen\n• Sammlung und Analyse bestehender Sicherheitsdokumentationen, Richtlinien und Verfahren\n\n📋 Strukturierte Durchführung der Gap-Analyse:\n• Systematische Bewertung aller 114 ISO 27001 Annex A Kontrollen mit detailliertem Compliance-Mapping\n• Verwendung standardisierter Bewertungsskalen für objektive und vergleichbare Ergebnisse\n• Dokumentation aktueller Implementierungsstände mit konkreten Evidenzen und Nachweisen\n• Identifikation von Compliance-Lücken mit Priorisierung basierend auf Risikobewertung\n• Erfassung bestehender Sicherheitsmaßnahmen und deren Wirksamkeit durch strukturierte Interviews\n\n🎯 Risikoorientierte Bewertung und Priorisierung:\n• Integration von Risikobewertungen in die Gap-Analyse für risikobasierte Priorisierung\n• Bewertung der Kritikalität von Informationsassets und deren Schutzbedarf\n• Analyse von Bedrohungen und Schwachstellen im Kontext der identifizierten Gaps\n• Berücksichtigung regulatorischer Anforderungen und Compliance-Verpflichtungen\n• Bewertung der Auswirkungen von Compliance-Lücken auf Geschäftsprozesse und Unternehmensziele\n\n📊 Datensammlung und Evidence-Management:\n• Strukturierte Sammlung von Evidenzen für bestehende Kontrollmaßnahmen\n• Dokumentation von Interviews mit Prozessverantwortlichen und Fachexperten\n• Analyse bestehender Audit-Berichte, Penetrationstests und Sicherheitsbewertungen\n• Bewertung der Dokumentationsqualität und Vollständigkeit bestehender Verfahren\n• Erfassung von Metriken und KPIs für quantitative Bewertung der aktuellen Sicherheitslage\n\n📈 Ergebnisanalyse und Handlungsableitung:\n• Erstellung detaillierter Gap-Analyse-Berichte mit klaren Handlungsempfehlungen\n• Entwicklung priorisierter Implementierungsroadmaps basierend auf Risiko und Aufwand\n• Quantifizierung des Implementierungsaufwands für identifizierte Maßnahmen\n• Definition von Quick Wins für schnelle Verbesserungen und Momentum-Aufbau\n• Erstellung von Business Cases für notwendige Investitionen und Ressourcenallokation\n\n🔄 Kontinuierliche Validierung und Updates:\n• Regelmäßige Überprüfung und Aktualisierung der Gap-Analyse-Ergebnisse\n• Integration von Feedback aus Implementierungsfortschritten und Lessons Learned\n• Anpassung der Bewertungen basierend auf sich ändernden Geschäftsanforderungen\n• Verwendung der Gap-Analyse als Baseline für kontinuierliche Verbesserungsmessungen\n• Aufbau einer nachhaltigen Kultur der kontinuierlichen Compliance-Bewertung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche kritischen Implementierungsschritte sollten ISO 27001 Checklisten abdecken?',
        answer: "ISO 27001 Implementierungs-Checklisten müssen alle kritischen Phasen der ISMS-Einführung systematisch abdecken und dabei sowohl strategische als auch operative Aspekte berücksichtigen. Eine vollständige Implementierung erfordert strukturierte Herangehensweise, die technische, organisatorische und kulturelle Veränderungen koordiniert und nachhaltig verankert.\n\n🎯 Strategische Planung und Scope-Definition:\n• Definition des ISMS-Scope basierend auf Geschäftsanforderungen und Risikobewertung\n• Entwicklung der Informationssicherheitspolitik und strategischen Zielsetzungen\n• Etablierung der Governance-Struktur mit klaren Rollen und Verantwortlichkeiten\n• Ressourcenplanung für Personal, Budget und Technologie-Investitionen\n• Entwicklung der Kommunikationsstrategie für Stakeholder-Engagement und Change-Management\n\n📋 Risikomanagement-Framework-Implementierung:\n• Etablierung systematischer Risikobewertungsprozesse und Methodiken\n• Entwicklung von Risikokatalogen und Threat-Intelligence-Integration\n• Implementierung von Risikobewertungstools und Dokumentationssystemen\n• Definition von Risikoakzeptanzkriterien und Eskalationsprozessen\n• Aufbau kontinuierlicher Risikomanagement-Prozesse und Review-Zyklen\n\n🛡️ Kontrollmaßnahmen-Implementierung:\n• Systematische Umsetzung aller relevanten ISO 27001 Annex A Kontrollen\n• Entwicklung detaillierter Implementierungspläne für jede Kontrollmaßnahme\n• Integration bestehender Sicherheitsmaßnahmen und Identifikation von Verbesserungsbedarfen\n• Implementierung technischer Sicherheitskontrollen und Monitoring-Systeme\n• Etablierung organisatorischer Kontrollen und Verfahrensdokumentationen\n\n📄 Dokumentationsmanagement und Evidence-Sammlung:\n• Entwicklung vollständiger ISMS-Dokumentationsstrukturen entsprechend ISO 27001 Anforderungen\n• Erstellung standardkonformer Richtlinien, Verfahren und Arbeitsanweisungen\n• Implementierung von Dokumentenmanagement-Systemen mit Versionskontrolle\n• Aufbau systematischer Evidence-Sammlung für Audit-Vorbereitung\n• Etablierung von Dokumentations-Workflows und Freigabeprozessen\n\n👥 Awareness und Training-Programme:\n• Entwicklung rollenspezifischer Schulungsprogramme für verschiedene Zielgruppen\n• Implementierung kontinuierlicher Awareness-Kampagnen und Kommunikationsmaßnahmen\n• Aufbau von Kompetenz-Assessment-Programmen und Zertifizierungs-Tracking\n• Etablierung von Incident-Response-Training und Notfallübungen\n• Integration von Sicherheitsbewusstsein in Onboarding-Prozesse und Performance-Management\n\n🔄 Monitoring und kontinuierliche Verbesserung:\n• Implementierung von KPI-Dashboards und Performance-Monitoring-Systemen\n• Etablierung regelmäßiger Management-Reviews und Compliance-Assessments\n• Aufbau von Incident-Management-Prozessen und Lessons-Learned-Integration\n• Implementierung kontinuierlicher Verbesserungsprozesse und Feedback-Mechanismen\n• Entwicklung von Surveillance-Audit-Vorbereitungen und Re-Zertifizierungsplanung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleisten ISO 27001 Checklisten vollständige Compliance-Abdeckung?',
        answer: "ISO 27001 Checklisten gewährleisten vollständige Compliance-Abdeckung durch systematische Strukturierung, detailliertes Mapping und kontinuierliche Validierung aller Standardanforderungen. Eine umfassende Compliance-Sicherung erfordert methodische Herangehensweise, die sowohl explizite als auch implizite Anforderungen erfasst und nachhaltig überwacht.\n\n📋 Vollständiges Requirements-Mapping:\n• Systematische Erfassung aller 114 ISO 27001 Annex A Kontrollen mit detailliertem Requirement-Mapping\n• Integration aller Hauptstandard-Anforderungen aus Kapiteln vier bis zehn der ISO 27001\n• Berücksichtigung impliziter Anforderungen und Best-Practice-Empfehlungen\n• Cross-Referenzierung zwischen verschiedenen Standardabschnitten für ganzheitliche Abdeckung\n• Mapping zu relevanten unterstützenden Standards wie ISO 27002 und ISO 27005\n\n🔍 Granulare Kontroll-Dekomposition:\n• Aufschlüsselung komplexer Kontrollen in spezifische, messbare Teilanforderungen\n• Definition klarer Implementierungskriterien und Erfolgsmessungen für jede Kontrolle\n• Entwicklung detaillierter Checklisten-Items mit eindeutigen Pass-Fail-Kriterien\n• Integration von Implementierungsleitfäden und Best-Practice-Empfehlungen\n• Berücksichtigung verschiedener Implementierungsansätze und Technologie-Optionen\n\n🎯 Risikoorientierte Priorisierung:\n• Integration von Risikobewertungen in Checklisten-Strukturen für risikobasierte Compliance\n• Priorisierung kritischer Kontrollen basierend auf Bedrohungslandschaft und Geschäftskontext\n• Berücksichtigung branchenspezifischer Risiken und regulatorischer Anforderungen\n• Anpassung von Checklisten an organisationsspezifische Risikoprofile\n• Kontinuierliche Aktualisierung basierend auf sich ändernden Bedrohungen und Geschäftsanforderungen\n\n📊 Systematische Evidence-Sammlung:\n• Definition spezifischer Evidence-Anforderungen für jede Checklisten-Komponente\n• Strukturierte Sammlung und Dokumentation von Compliance-Nachweisen\n• Integration von automatisierten Evidence-Sammlung-Tools und Monitoring-Systemen\n• Aufbau vollständiger Audit-Trails für lückenlose Nachverfolgung\n• Entwicklung von Evidence-Management-Systemen für effiziente Audit-Vorbereitung\n\n🔄 Kontinuierliche Validierung und Updates:\n• Regelmäßige Überprüfung der Checklisten-Vollständigkeit gegen aktuelle Standardversionen\n• Integration von Auditor-Feedback und Lessons Learned aus Zertifizierungsprojekten\n• Kontinuierliche Verbesserung basierend auf sich entwickelnden Best Practices\n• Anpassung an neue Bedrohungen, Technologien und regulatorische Anforderungen\n• Aufbau von Feedback-Mechanismen für kontinuierliche Checklisten-Optimierung\n\n🛡️ Multi-Layer-Validierung:\n• Implementierung mehrschichtiger Validierungsprozesse für Compliance-Sicherung\n• Cross-Validation zwischen verschiedenen Checklisten-Komponenten\n• Integration von Peer-Reviews und Vier-Augen-Prinzip für kritische Bewertungen\n• Automatisierte Konsistenz-Checks und Vollständigkeits-Validierung\n• Regelmäßige externe Validierung durch unabhängige Experten und Mock-Audits"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen Checklisten bei der ISO 27001 Dokumentationserstellung?',
        answer: "Checklisten spielen eine zentrale Rolle bei der ISO 27001 Dokumentationserstellung, indem sie systematische Strukturierung, Vollständigkeit und Qualitätssicherung gewährleisten. Sie fungieren als strategische Leitfäden, die komplexe Dokumentationsanforderungen in manageable, nachvollziehbare Arbeitsschritte transformieren und dabei höchste Standards für Audit-Konformität sicherstellen.\n\n📋 Strukturierte Dokumentationsplanung:\n• Systematische Identifikation aller erforderlichen ISMS-Dokumente entsprechend ISO 27001 Anforderungen\n• Entwicklung hierarchischer Dokumentationsstrukturen mit klaren Abhängigkeiten und Referenzen\n• Definition von Dokumentationsstandards und Templates für konsistente Qualität\n• Planung von Dokumentations-Workflows mit Erstellungs-, Review- und Freigabeprozessen\n• Integration von Versionskontrolle und Change-Management-Prozessen\n\n📄 Vollständigkeits-Sicherung:\n• Checklisten für alle mandatory dokumentierten Informationen gemäß ISO 27001 Anforderungen\n• Systematische Abdeckung aller Richtlinien, Verfahren und Arbeitsanweisungen\n• Sicherstellung vollständiger Dokumentation für alle implementierten Kontrollen\n• Integration von Dokumentationsanforderungen für Risikomanagement-Prozesse\n• Abdeckung aller Management-Review- und Audit-Dokumentationsanforderungen\n\n🎯 Qualitätssicherung und Standardkonformität:\n• Checklisten für Dokumentenqualität mit spezifischen Kriterien für Klarheit, Vollständigkeit und Verständlichkeit\n• Validierung der Standardkonformität durch systematische Requirements-Checks\n• Sicherstellung konsistenter Terminologie und Referenzierung zwischen Dokumenten\n• Integration von Review-Checklisten für Peer-Reviews und Qualitätskontrolle\n• Aufbau von Approval-Workflows mit definierten Freigabekriterien\n\n🔗 Integration und Konsistenz:\n• Checklisten für Cross-Referenzierung zwischen verschiedenen Dokumententypen\n• Sicherstellung konsistenter Prozessbeschreibungen und Verantwortlichkeiten\n• Integration von Dokumenten in übergeordnete ISMS-Architektur\n• Validierung von Dokumenten-Interdependenzen und Workflow-Konsistenz\n• Aufbau kohärenter Dokumentationslandschaften ohne Redundanzen oder Widersprüche\n\n📊 Evidence-Management und Audit-Vorbereitung:\n• Checklisten für systematische Evidence-Sammlung und Dokumentation\n• Strukturierung von Audit-Trails und Nachweisführung\n• Aufbau von Evidence-Repositories mit kategorisierter Ablage\n• Integration von Monitoring-Daten und Performance-Metriken in Dokumentationsstrukturen\n• Vorbereitung audit-ready Dokumentationspakete mit vollständiger Nachweisführung\n\n🔄 Kontinuierliche Dokumentations-Maintenance:\n• Checklisten für regelmäßige Dokumenten-Reviews und Updates\n• Systematische Validierung der Dokumentenaktualität und Relevanz\n• Integration von Change-Management-Prozessen für Dokumentationsänderungen\n• Aufbau von Feedback-Mechanismen für kontinuierliche Dokumentationsverbesserung\n• Etablierung von Archivierungs- und Aufbewahrungsfristen-Management\n\n🛡️ Compliance und Governance:\n• Checklisten für Compliance-Validierung aller dokumentierten Prozesse\n• Sicherstellung angemessener Governance-Strukturen in Dokumentationsframeworks\n• Integration von Datenschutz- und Vertraulichkeitsanforderungen\n• Aufbau von Access-Control und Information-Classification-Systemen\n• Etablierung von Incident-Response-Dokumentation und Lessons-Learned-Integration"
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
