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
    console.log('Updating ISO 27001 Checkliste page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-checkliste' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-checkliste" not found')
    }
    
    // Create new FAQs for ISO 27001 checkliste fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Warum sind strukturierte ISO 27001 Checklisten entscheidend für eine erfolgreiche ISMS-Implementierung?',
        answer: "Strukturierte ISO 27001 Checklisten sind das Fundament für eine systematische, vollständige und risikoarme ISMS-Implementierung. Sie transformieren die komplexen Anforderungen des Standards in praktikable, nachvollziehbare Arbeitsschritte und gewährleisten dabei vollständige Compliance-Abdeckung. Professionelle Checklisten fungieren als strategische Navigationsinstrumente, die Implementierungsrisiken minimieren und gleichzeitig Effizienz maximieren.\n\n📋 Systematische Compliance-Sicherung:\n• Vollständige Abdeckung aller 114 ISO 27001 Kontrollen durch strukturierte Prüflisten mit detailliertem Mapping\n• Systematische Identifikation von Compliance-Lücken durch methodische Gap-Analyse-Checklisten\n• Priorisierte Handlungsempfehlungen basierend auf Risikobewertung und Implementierungskomplexität\n• Kontinuierliche Validierung des Implementierungsfortschritts durch Meilenstein-Checklisten\n• Proaktive Vermeidung von Audit-Nonconformities durch präventive Compliance-Checks\n\n🎯 Strukturierte Projektsteuerung:\n• Klare Phasenaufteilung mit spezifischen Checklisten für Planung, Implementierung und Betrieb\n• Abhängigkeits-Mapping zwischen verschiedenen Implementierungsbereichen für optimale Ressourcenallokation\n• Qualitätssicherungs-Checkpoints zur kontinuierlichen Validierung der Implementierungsqualität\n• Eskalationsmechanismen für kritische Implementierungshürden und Risikosituationen\n• Dokumentations-Checklisten für audit-konforme Nachweisführung und Evidence-Management\n\n⚡ Effizienzsteigerung und Zeitersparnis:\n• Reduzierung der Implementierungszeit durch vordefinierte, bewährte Arbeitsabläufe\n• Minimierung von Doppelarbeiten durch strukturierte Aufgabenverteilung und klare Verantwortlichkeiten\n• Automatisierte Fortschrittsverfolgung durch digitale Checklisten-Tools und Dashboards\n• Standardisierte Kommunikation zwischen Projektteam, Management und externen Stakeholdern\n• Wiederverwendbare Templates für zukünftige Compliance-Projekte und Zertifizierungserweiterungen\n\n🔍 Qualitätssicherung und Risikominimierung:\n• Integrierte Validierungsmechanismen zur kontinuierlichen Überprüfung der Implementierungsqualität\n• Präventive Identifikation potenzieller Implementierungsfehler durch strukturierte Review-Prozesse\n• Konsistente Anwendung von Best Practices durch standardisierte Checklisten-Frameworks\n• Reduzierung menschlicher Fehler durch systematische Arbeitsabläufe und Kontrollfunktionen\n• Aufbau einer nachhaltigen Compliance-Kultur durch strukturierte Prozesse und klare Verantwortlichkeiten\n\n📊 Messbare Implementierungserfolge:\n• Quantifizierbare KPIs für Implementierungsfortschritt und Compliance-Level\n• Benchmark-Vergleiche mit Branchenstandards und Best-Practice-Implementierungen\n• Kontinuierliche Verbesserung durch Lessons-Learned-Integration und Checklisten-Optimierung\n• Transparente Kommunikation des Implementierungsstatus an Management und Stakeholder\n• Aufbau einer evidenzbasierten Grundlage für strategische ISMS-Entscheidungen und Investitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche spezifischen Komponenten sollte eine umfassende ISO 27001 Checklisten-Suite enthalten?',
        answer: "Eine professionelle ISO 27001 Checklisten-Suite muss alle kritischen Aspekte der ISMS-Implementierung systematisch abdecken und dabei sowohl strategische Planung als auch operative Umsetzung unterstützen. Die Komponenten sollten nahtlos ineinandergreifen und einen durchgängigen Workflow von der initialen Bewertung bis zur kontinuierlichen Verbesserung ermöglichen.\n\n🔍 Gap-Analyse und Assessment-Checklisten:\n• Umfassende Compliance-Checklisten mit detailliertem Mapping zu allen ISO 27001 Anforderungen und Kontrollen\n• Strukturierte Reifegrad-Bewertung mit quantitativen Scoring-Methoden und Benchmark-Vergleichen\n• Risikobewertungs-Checklisten mit branchenspezifischen Threat-Katalogen und Vulnerability-Assessments\n• Readiness-Assessment-Tools zur Bewertung der organisatorischen Implementierungsbereitschaft\n• Stakeholder-Analyse-Checklisten für effektive Projektplanung und Change-Management\n\n📋 Implementierungs- und Projektmanagement-Checklisten:\n• Phasenorientierte Implementierungsroadmaps mit detaillierten Meilensteinen und Abhängigkeiten\n• Kontrollmaßnahmen-Checklisten für alle 114 ISO 27001 Annex A Kontrollen mit Implementierungsleitfäden\n• Ressourcenplanungs-Checklisten für Budget, Personal und Technologie-Allokation\n• Change-Management-Checklisten für organisatorische Transformation und Kulturwandel\n• Qualitätssicherungs-Checklisten für kontinuierliche Implementierungsvalidierung\n\n📄 Dokumentations- und Evidence-Management-Checklisten:\n• Vollständige Dokumentations-Checklisten für alle erforderlichen ISMS-Dokumente und Richtlinien\n• Evidence-Sammlung-Checklisten mit strukturiertem Audit-Trail-Management\n• Versionskontroll- und Freigabe-Checklisten für professionelles Dokumentenmanagement\n• Template-Checklisten für standardkonforme Richtlinien, Verfahren und Arbeitsanweisungen\n• Archivierungs- und Aufbewahrungsfristen-Checklisten für Compliance-konforme Dokumentenverwaltung\n\n🎯 Audit-Vorbereitungs- und Zertifizierungs-Checklisten:\n• Pre-Audit-Checklisten für umfassende Zertifizierungsvorbereitung und Readiness-Validierung\n• Auditor-Interview-Checklisten mit typischen Fragestellungen und Antwortleitfäden\n• Evidence-Präsentations-Checklisten für strukturierte und überzeugende Nachweisführung\n• Mock-Audit-Checklisten für interne Zertifizierungssimulation und Schwachstellenidentifikation\n• Post-Audit-Checklisten für Nonconformity-Management und Korrekturmaßnahmen-Tracking\n\n📊 Monitoring- und Compliance-Überwachungs-Checklisten:\n• Kontinuierliche Compliance-Review-Checklisten mit KPI-Monitoring und Trend-Analyse\n• Incident-Response-Checklisten für systematisches Störungsmanagement und Eskalationsprozesse\n• Management-Review-Checklisten für strategische ISMS-Steuerung und Entscheidungsfindung\n• Surveillance-Audit-Checklisten für jährliche Überwachungsaudits und kontinuierliche Compliance\n• Kontinuierliche Verbesserungs-Checklisten für adaptive ISMS-Optimierung und Innovation"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie unterscheiden sich ADVISORI ISO 27001 Checklisten von standardisierten Marktlösungen?',
        answer: "ADVISORI ISO 27001 Checklisten zeichnen sich durch ihre tiefgreifende Praxisorientierung, innovative Methodenintegration und ganzheitliche Compliance-Perspektive aus. Sie basieren auf jahrelanger Implementierungserfahrung und kontinuierlicher Optimierung durch reale Projekterfahrungen, wodurch sie weit über generische Marktlösungen hinausgehen und echten strategischen Mehrwert schaffen.\n\n🔬 Praxisbasierte Entwicklung und Validierung:\n• Entwicklung basierend auf über 500 erfolgreichen ISO 27001 Implementierungen in verschiedenen Branchen und Unternehmensgrößen\n• Kontinuierliche Optimierung durch direktes Auditor-Feedback und Lessons Learned aus realen Zertifizierungsprojekten\n• Integration von Erkenntnissen aus komplexen, multinationalen Implementierungen mit besonderen Herausforderungen\n• Berücksichtigung branchenspezifischer Besonderheiten und regulatorischer Anforderungen\n• Anpassung an aktuelle Bedrohungslandschaften und emerging Technologies wie Cloud Computing und IoT\n\n🚀 Innovative Methodenintegration:\n• Integration von Agile und Lean-Prinzipien für beschleunigte und effiziente Implementierungsprozesse\n• Einsatz von Risk-Based-Thinking-Ansätzen für priorisierte und risikooptimierte Checklisten-Strukturen\n• Berücksichtigung von Human-Factors und Change-Management-Aspekten in allen Checklisten-Komponenten\n• Integration von Continuous-Improvement-Mechanismen für adaptive Checklisten-Evolution\n• Anwendung von Design-Thinking-Prinzipien für benutzerfreundliche und intuitive Checklisten-Gestaltung\n\n🌐 Ganzheitliche Multi-Standard-Perspektive:\n• Simultane Berücksichtigung von ISO 27001, DORA, NIS2, GDPR und anderen relevanten Compliance-Frameworks\n• Entwicklung von Synergieeffekten zwischen verschiedenen Standards für maximale Effizienz\n• Cross-Standard-Mapping für integrierte Compliance-Strategien und Ressourcenoptimierung\n• Zukunftsorientierte Architektur für nahtlose Integration neuer regulatorischer Anforderungen\n• Aufbau einer einheitlichen Governance-Struktur für Multi-Standard-Compliance\n\n🎯 Branchenspezifische Spezialisierung:\n• Maßgeschneiderte Checklisten-Varianten für Finanzdienstleister, Gesundheitswesen, Industrie und öffentlichen Sektor\n• Integration branchenspezifischer Risikokataloge und Threat-Intelligence-Daten\n• Berücksichtigung sektoraler Regulierungsanforderungen und Compliance-Standards\n• Anpassung an spezifische Geschäftsmodelle und operative Herausforderungen\n• Integration von Industry-Best-Practices und Benchmark-Daten für optimale Positionierung\n\n💡 Strategische Beratungsintegration:\n• Kombination von Checklisten-Nutzung mit strategischer Expertenberatung und Mentoring\n• Zugang zu ADVISORI Wissensbasis und kontinuierlicher fachlicher Unterstützung\n• Regelmäßige Updates basierend auf aktuellen Marktentwicklungen und regulatorischen Änderungen\n• Individuelle Anpassungsmöglichkeiten für spezifische Unternehmensanforderungen und Besonderheiten\n• Langfristige Partnerschaft für kontinuierliche ISMS-Weiterentwicklung und Compliance-Optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche konkreten Vorteile bieten digitale und automatisierte ISO 27001 Checklisten-Tools?',
        answer: "Digitale und automatisierte ISO 27001 Checklisten-Tools revolutionieren die ISMS-Implementierung durch intelligente Automatisierung, Echtzeit-Monitoring und datengetriebene Insights. Sie transformieren traditionelle, papierbasierte Checklisten in dynamische, interaktive Compliance-Instrumente, die kontinuierliche Verbesserung und proaktive Risikosteuerung ermöglichen.\n\n⚡ Intelligente Automatisierung und Effizienzsteigerung:\n• Automatisierte Fortschrittsverfolgung mit Echtzeit-Updates und dynamischen Dashboards\n• Intelligente Aufgabenverteilung basierend auf Rollen, Kompetenzen und Verfügbarkeiten\n• Automatische Erinnerungen und Eskalationen für kritische Meilensteine und Deadlines\n• Integrierte Workflow-Automatisierung für wiederkehrende Compliance-Aufgaben\n• KI-gestützte Empfehlungen für optimale Implementierungsreihenfolge und Ressourcenallokation\n\n📊 Echtzeit-Monitoring und Analytics:\n• Live-Dashboards mit aktuellen Compliance-Metriken und KPI-Visualisierungen\n• Predictive Analytics für frühzeitige Identifikation potenzieller Implementierungsrisiken\n• Trend-Analysen für kontinuierliche Verbesserung und strategische Entscheidungsfindung\n• Benchmark-Vergleiche mit anonymisierten Branchendaten und Best-Practice-Standards\n• Automatisierte Reporting-Funktionen für Management und Stakeholder-Kommunikation\n\n🔗 Nahtlose Integration und Interoperabilität:\n• API-Integration mit bestehenden Unternehmenssystemen wie ERP, CRM und GRC-Plattformen\n• Single-Sign-On-Integration für benutzerfreundlichen Zugang und erhöhte Sicherheit\n• Cloud-native Architektur für skalierbare und flexible Nutzung über verschiedene Standorte\n• Mobile Optimierung für ortsunabhängige Checklisten-Bearbeitung und Statusupdates\n• Offline-Funktionalität für kontinuierliche Arbeitsfähigkeit auch ohne Internetverbindung\n\n🛡️ Erweiterte Sicherheit und Compliance:\n• Granulare Berechtigungskonzepte für rollenbasierte Zugriffskontrolle und Datenschutz\n• Vollständige Audit-Trails für lückenlose Nachverfolgung aller Aktivitäten und Änderungen\n• Verschlüsselte Datenübertragung und -speicherung für maximale Informationssicherheit\n• Backup- und Disaster-Recovery-Mechanismen für Geschäftskontinuität\n• Compliance mit internationalen Datenschutzstandards wie GDPR und lokalen Regulierungen\n\n🎯 Personalisierung und Anpassungsfähigkeit:\n• Konfigurierbare Checklisten-Templates für verschiedene Implementierungsszenarien\n• Anpassbare Workflows und Genehmigungsprozesse entsprechend Unternehmensstrukturen\n• Mehrsprachige Unterstützung für internationale Implementierungen und diverse Teams\n• Flexible Reporting-Optionen für verschiedene Zielgruppen und Kommunikationsanforderungen\n• Skalierbare Architektur für Unternehmenswachstum und sich ändernde Anforderungen\n\n📈 Kontinuierliche Verbesserung und Innovation:\n• Machine Learning Algorithmen für kontinuierliche Optimierung der Checklisten-Effizienz\n• Feedback-Integration für benutzergetriebene Verbesserungen und Feature-Entwicklung\n• Regelmäßige Updates mit neuen Features und Compliance-Anforderungen\n• Community-Features für Best-Practice-Sharing und Peer-Learning\n• Integration emerging Technologies wie Blockchain für erweiterte Audit-Trail-Funktionalitäten"
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
