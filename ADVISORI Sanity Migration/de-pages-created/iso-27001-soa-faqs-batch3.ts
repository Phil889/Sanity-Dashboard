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
    console.log('Updating ISO 27001 SOA page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-soa' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-soa" not found')
    }
    
    // Create new FAQs for SOA control evaluation and implementation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie bewertet man die 93 Annex A Controls systematisch und trifft fundierte Anwendbarkeitsentscheidungen?',
        answer: "Die systematische Bewertung aller 93 Annex A Controls erfordert eine strukturierte Herangehensweise, die objektive Kriterien mit organisationsspezifischen Anforderungen kombiniert. Eine fundierte Anwendbarkeitsentscheidung basiert auf einer ganzheitlichen Analyse von Risiken, Geschäftsanforderungen und praktischer Umsetzbarkeit.\n\n📊 Strukturierte Control-Kategorisierung:\n• Systematische Durchsicht aller 14 Control-Kategorien von A.5 bis A.18\n• Gruppierung der Controls nach Funktionsbereichen wie technische, organisatorische und physische Maßnahmen\n• Priorisierung basierend auf Kritikalität für die Geschäftsprozesse\n• Berücksichtigung von Abhängigkeiten zwischen verschiedenen Controls\n• Mapping zu bestehenden Sicherheitsmaßnahmen und Policies\n\n🎯 Risikobasierte Bewertungskriterien:\n• Verknüpfung jedes Controls mit den identifizierten Informationssicherheitsrisiken\n• Bewertung der Risikoreduktion durch Implementierung des jeweiligen Controls\n• Analyse der Auswirkungen bei Nicht-Implementierung auf die Risikosituation\n• Berücksichtigung der Eintrittswahrscheinlichkeit und Schadenshöhe\n• Integration von Bedrohungsanalysen und Schwachstellenbewertungen\n\n💼 Geschäftsrelevanz und Angemessenheit:\n• Bewertung der Relevanz für die spezifischen Geschäftsprozesse der Organisation\n• Analyse der Auswirkungen auf Geschäftsabläufe und operative Effizienz\n• Berücksichtigung von Kundenanforderungen und Vertragsvereinbarungen\n• Bewertung der strategischen Bedeutung für die Unternehmensziele\n• Integration von Stakeholder-Anforderungen und Erwartungen\n\n⚖️ Regulatorische und Compliance-Anforderungen:\n• Mapping zu branchenspezifischen Regulierungen und gesetzlichen Verpflichtungen\n• Berücksichtigung von Datenschutzanforderungen nach DSGVO\n• Integration von Finanzregulierung wie DORA, MaRisk oder Solvency II\n• Analyse von Branchenstandards wie PCI DSS, HIPAA oder SOX\n• Bewertung internationaler Standards und Zertifizierungsanforderungen\n\n🛠️ Technische Machbarkeit und Ressourcenbewertung:\n• Analyse der technischen Infrastruktur und Implementierungsmöglichkeiten\n• Bewertung des Aufwands für Implementierung und laufenden Betrieb\n• Berücksichtigung verfügbarer Ressourcen und Kompetenzen\n• Analyse von Kosten-Nutzen-Verhältnissen für jedes Control\n• Integration in bestehende IT-Landschaft und Architektur\n\n📝 Dokumentation der Entscheidungslogik:\n• Strukturierte Begründung für jede Anwendbarkeitsentscheidung\n• Verwendung einheitlicher Bewertungskriterien und Scoring-Methoden\n• Dokumentation von Alternativen und kompensierenden Maßnahmen\n• Nachvollziehbare Argumentation für Control-Ausschlüsse\n• Versionierung und Audit-Trail aller Bewertungsentscheidungen\n\n🔄 Validierung und Qualitätssicherung:\n• Peer Review durch Fachexperten und Stakeholder\n• Plausibilitätsprüfung der Bewertungsergebnisse\n• Konsistenzanalyse zwischen verschiedenen Control-Kategorien\n• Validierung durch interne Audits und Management Reviews\n• Kontinuierliche Überprüfung und Anpassung der Bewertungskriterien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche häufigen Fehler sollten bei der SOA-Entwicklung vermieden werden?',
        answer: "Die SOA-Entwicklung ist ein komplexer Prozess, bei dem verschiedene Fallstricke die Qualität und Wirksamkeit der Statement of Applicability beeinträchtigen können. Das Bewusstsein für häufige Fehler und deren systematische Vermeidung ist entscheidend für eine erfolgreiche SOA-Implementierung.\n\n❌ Unvollständige oder oberflächliche Control-Bewertung:\n• Auslassung einzelner Controls oder ganzer Kategorien ohne fundierte Begründung\n• Oberflächliche Bewertung ohne tiefgreifende Analyse der Geschäftsrelevanz\n• Verwendung von Standardbegründungen ohne organisationsspezifische Anpassung\n• Fehlende Berücksichtigung von Interdependenzen zwischen verschiedenen Controls\n• Mangelnde Integration mit der Risikoanalyse und Geschäftsanforderungen\n\n🔍 Inadäquate Risikobewertung als Grundlage:\n• Verwendung veralteter oder unvollständiger Risikobewertungen\n• Fehlende Verknüpfung zwischen identifizierten Risiken und Control-Auswahl\n• Unzureichende Berücksichtigung neuer Bedrohungen und Schwachstellen\n• Mangelnde Quantifizierung von Risiken und deren Auswirkungen\n• Fehlende regelmäßige Aktualisierung der Risikobewertung\n\n📋 Mangelhafte Dokumentation und Begründung:\n• Unzureichende oder nicht nachvollziehbare Begründungen für Control-Ausschlüsse\n• Fehlende Dokumentation der verwendeten Bewertungskriterien und Methodik\n• Inkonsistente Argumentation zwischen ähnlichen Controls\n• Mangelnde Versionskontrolle und Change Management\n• Unvollständige Audit-Trails für Entscheidungsprozesse\n\n🏢 Unzureichende Stakeholder-Einbindung:\n• Fehlende Einbindung relevanter Fachbereiche und Geschäftsprozessverantwortlicher\n• Mangelnde Kommunikation mit IT-Abteilungen und technischen Experten\n• Unzureichende Abstimmung mit Compliance und Rechtsabteilungen\n• Fehlende Validierung durch das Management und Entscheidungsträger\n• Mangelnde Berücksichtigung von Endnutzer-Perspektiven und operativen Anforderungen\n\n⚖️ Compliance-Lücken und regulatorische Versäumnisse:\n• Unvollständige Berücksichtigung branchenspezifischer Regulierungen\n• Fehlende Integration von Datenschutzanforderungen und DSGVO-Compliance\n• Mangelnde Abstimmung mit anderen Managementsystemen und Standards\n• Unzureichende Berücksichtigung internationaler Anforderungen\n• Fehlende Harmonisierung mit Vertragsanforderungen und Kundenerwartungen\n\n🔄 Statische Betrachtung ohne kontinuierliche Anpassung:\n• Behandlung der SOA als einmaliges Dokument ohne regelmäßige Updates\n• Fehlende Integration in kontinuierliche Verbesserungsprozesse\n• Mangelnde Anpassung an veränderte Geschäftsanforderungen und Technologien\n• Unzureichende Berücksichtigung von Lessons Learned aus Sicherheitsvorfällen\n• Fehlende Synchronisation mit organisatorischen Veränderungen\n\n🛠️ Technische und praktische Umsetzungsfehler:\n• Unrealistische Einschätzung der Implementierungskosten und des Aufwands\n• Fehlende Berücksichtigung technischer Abhängigkeiten und Infrastrukturbeschränkungen\n• Mangelnde Integration mit bestehenden IT-Systemen und Sicherheitstools\n• Unzureichende Planung für Change Management und Benutzerakzeptanz\n• Fehlende Berücksichtigung von Skalierbarkeit und zukünftigen Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie dokumentiert man Control-Ausschlüsse audit-sicher und compliance-konform?',
        answer: "Die audit-sichere Dokumentation von Control-Ausschlüssen ist ein kritischer Aspekt der SOA-Entwicklung, der über die reine Compliance hinausgeht und die Grundlage für nachhaltige Informationssicherheit bildet. Eine professionelle Dokumentation schützt vor Audit-Beanstandungen und demonstriert die Professionalität des ISMS.\n\n📝 Strukturierte Begründungslogik:\n• Klare, nachvollziehbare Argumentation für jeden Control-Ausschluss\n• Verwendung einheitlicher Begründungskategorien wie Nicht-Anwendbarkeit, technische Unmöglichkeit oder Geschäftsirrelevanz\n• Detaillierte Beschreibung der organisationsspezifischen Umstände\n• Verknüpfung mit der Risikoanalyse und Geschäftskontext\n• Objektive, faktenbasierte Argumentation ohne subjektive Bewertungen\n\n🔍 Evidenzbasierte Nachweisführung:\n• Bereitstellung konkreter Belege und Nachweise für die Begründung\n• Dokumentation relevanter Geschäftsprozesse und technischer Gegebenheiten\n• Integration von Risikobewertungen und Impact-Analysen\n• Verwendung quantitativer Daten wo möglich und angemessen\n• Referenzierung auf bestehende Dokumentation und Standards\n\n⚖️ Compliance-konforme Formulierung:\n• Verwendung präziser, rechtssicherer Formulierungen\n• Berücksichtigung regulatorischer Anforderungen und Branchenstandards\n• Integration von Datenschutz und anderen Compliance-Aspekten\n• Harmonisierung mit anderen Managementsystemen und Frameworks\n• Sicherstellung der Konsistenz mit organisationsweiten Policies\n\n🔄 Alternative und kompensierende Maßnahmen:\n• Dokumentation alternativer Sicherheitsmaßnahmen bei Control-Ausschluss\n• Beschreibung kompensierender Controls und deren Wirksamkeit\n• Analyse der Restrisiken und deren Akzeptanz durch das Management\n• Integration in den Risk Treatment Plan und Risikomanagement-Prozess\n• Monitoring und Bewertung der Wirksamkeit alternativer Maßnahmen\n\n📊 Systematische Dokumentationsstruktur:\n• Einheitliche Template und Dokumentationsstandards für alle Ausschlüsse\n• Strukturierte Kategorisierung nach Control-Bereichen und Begründungstypen\n• Klare Referenzierung zu ISO 27001 Annex A Controls\n• Integration in die Gesamtdokumentation des ISMS\n• Verwendung eindeutiger Identifikatoren und Versionsnummern\n\n🕒 Zeitstempel und Versionskontrolle:\n• Vollständige Dokumentation aller Änderungen mit Zeitstempel\n• Nachvollziehbare Versionierung und Change Management\n• Dokumentation der Verantwortlichen für Entscheidungen und Änderungen\n• Aufbewahrung historischer Versionen für Audit-Zwecke\n• Integration in organisationsweite Dokumentenmanagement-Systeme\n\n✅ Validierung und Qualitätssicherung:\n• Regelmäßige Review und Validierung aller Control-Ausschlüsse\n• Peer Review durch Fachexperten und unabhängige Prüfer\n• Management-Genehmigung für kritische Control-Ausschlüsse\n• Integration in interne Audit-Zyklen und Compliance-Überwachung\n• Kontinuierliche Verbesserung der Dokumentationsqualität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie stellt man die kontinuierliche Aktualität und Relevanz der SOA sicher?',
        answer: "Die kontinuierliche Aktualität der Statement of Applicability ist entscheidend für die Wirksamkeit des ISMS und erfordert systematische Prozesse, die über punktuelle Updates hinausgehen. Eine lebendige SOA entwickelt sich mit der Organisation und bleibt ein strategisches Instrument für Informationssicherheit.\n\n🔄 Etablierung regelmäßiger Review-Zyklen:\n• Definition fester Review-Intervalle basierend auf Organisationsgröße und Dynamik\n• Integration in den PDCA-Zyklus des ISMS und Management Review Prozesse\n• Ereignisbasierte Reviews bei signifikanten Änderungen oder Sicherheitsvorfällen\n• Koordination mit anderen Compliance-Zyklen und Audit-Terminen\n• Dokumentation und Nachverfolgung aller Review-Aktivitäten\n\n📊 Kontinuierliches Monitoring und Alerting:\n• Implementierung von Monitoring-Systemen für relevante Änderungen\n• Automatisierte Benachrichtigungen bei kritischen Geschäfts oder IT-Änderungen\n• Integration mit Change Management und Configuration Management Systemen\n• Überwachung regulatorischer Entwicklungen und Branchenstandards\n• Tracking von Technologie-Trends und neuen Bedrohungen\n\n🎯 Trigger-basierte Update-Mechanismen:\n• Definition klarer Trigger für SOA-Updates wie neue Geschäftsprozesse oder Technologien\n• Automatische Eskalation bei kritischen Änderungen der Risikosituation\n• Integration mit Incident Management und Lessons Learned Prozessen\n• Berücksichtigung von M&A-Aktivitäten und organisatorischen Umstrukturierungen\n• Reaktion auf neue regulatorische Anforderungen und Compliance-Verpflichtungen\n\n🔍 Systematische Gap-Analysen:\n• Regelmäßige Bewertung der Vollständigkeit und Angemessenheit der SOA\n• Vergleich mit Best Practices und Branchenbenchmarks\n• Analyse neuer ISO 27001 Versionen und Standard-Updates\n• Bewertung der Wirksamkeit implementierter Controls\n• Identifikation von Verbesserungspotenzialen und Optimierungsmöglichkeiten\n\n👥 Stakeholder-Integration und Feedback:\n• Regelmäßige Einbindung relevanter Stakeholder in Review-Prozesse\n• Sammlung und Bewertung von Feedback aus operativen Bereichen\n• Integration von Audit-Erkenntnissen und externen Bewertungen\n• Berücksichtigung von Kundenfeedback und Marktanforderungen\n• Koordination mit anderen Managementsystemen und Compliance-Funktionen\n\n📈 Performance-Messung und KPIs:\n• Definition messbarer Indikatoren für SOA-Qualität und Aktualität\n• Tracking der Implementierungsfortschritte und Control-Wirksamkeit\n• Messung der Compliance-Performance und Audit-Ergebnisse\n• Bewertung der Geschäftsauswirkungen und des ROI\n• Benchmarking mit Branchenstandards und Best Practices\n\n🛠️ Technische Unterstützung und Automatisierung:\n• Einsatz von GRC-Tools für automatisierte SOA-Verwaltung\n• Integration mit IT-Service Management und Configuration Databases\n• Verwendung von Workflow-Systemen für Review und Approval-Prozesse\n• Automatisierte Berichterstattung und Dashboard-Funktionen\n• Integration mit Risikomanagement und Compliance-Plattformen"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
