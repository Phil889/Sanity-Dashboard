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
    console.log('Updating ISO 27001 Framework page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-framework" not found')
    }
    
    // Create new FAQs for ISO 27001 Framework fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Was ist das ISO 27001 Framework und wie unterscheidet es sich von anderen Sicherheitsframeworks?',
        answer: "Das ISO 27001 Framework ist eine strukturierte Architektur für systematisches Informationssicherheitsmanagement, die über traditionelle Sicherheitsansätze hinausgeht und eine ganzheitliche, prozessorientierte Methodik für nachhaltige Informationssicherheit bietet. Als international anerkannter Standard definiert es nicht nur Sicherheitsanforderungen, sondern etabliert ein vollständiges Managementsystem für kontinuierliche Sicherheitsverbesserung.\n\n🏗️ Framework-Architektur und Struktur:\n• Das ISO 27001 Framework basiert auf einer modularen Architektur, die strategische Governance mit operativer Umsetzung verbindet\n• Systematische Gliederung in logische Komponenten ermöglicht strukturierte Implementierung und Management\n• Framework-integrierte Risikomanagement-Prozesse schaffen durchgängige Risikobehandlung\n• Kontinuierliche Verbesserungszyklen durch Plan-Do-Check-Act-Methodik gewährleisten nachhaltige Entwicklung\n• Skalierbare Framework-Komponenten passen sich an organisatorische Veränderungen und Wachstum an\n\n🔄 Prozessorientierter Managementansatz:\n• Integration von Informationssicherheit in alle Geschäftsprozesse und strategischen Entscheidungen\n• Framework-basierte Governance-Strukturen schaffen klare Verantwortlichkeiten und Entscheidungswege\n• Systematische Dokumentation und Nachverfolgung aller Sicherheitsaktivitäten\n• Automatisierte Workflows und Kontrollmechanismen für effiziente Prozessabwicklung\n• Kontinuierliche Überwachung und Bewertung der Framework-Performance\n\n🎯 Differenzierung zu anderen Frameworks:\n• Während andere Frameworks oft technische Aspekte fokussieren, bietet ISO 27001 einen ganzheitlichen Managementansatz\n• Einziger zertifizierbarer Standard der ISO 27000-Familie mit internationaler Anerkennung\n• Framework-integrierte Compliance-Mechanismen für verschiedene regulatorische Anforderungen\n• Nahtlose Integration mit anderen Managementsystemen wie ISO 9001 oder ISO 14001\n• Flexibilität zur Anpassung an branchenspezifische Anforderungen und Besonderheiten\n\n📊 Strategische Framework-Vorteile:\n• Aufbau einer nachhaltigen Sicherheitskultur durch strukturierte Framework-Implementierung\n• Systematische Identifikation und Behandlung von Informationssicherheitsrisiken\n• Optimierung von Sicherheitsinvestitionen durch risikobasierte Priorisierung\n• Verbesserung der operativen Effizienz durch standardisierte Sicherheitsprozesse\n• Schaffung von Vertrauen bei Stakeholdern durch nachweisbare Sicherheitsstandards\n\n🚀 Framework-Evolution und Zukunftsfähigkeit:\n• Kontinuierliche Weiterentwicklung des Frameworks entsprechend neuer Bedrohungen und Technologien\n• Integration moderner Sicherheitstechnologien und Cloud-Strategien\n• Vorbereitung auf zukünftige regulatorische Entwicklungen und Compliance-Anforderungen\n• Aufbau von Kompetenzen für emerging Technologies und digitale Transformation\n• Etablierung einer lernenden Organisation im Bereich Informationssicherheit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Welche Kernkomponenten umfasst das ISO 27001 Framework und wie arbeiten sie zusammen?',
        answer: "Das ISO 27001 Framework besteht aus integrierten Kernkomponenten, die systematisch zusammenwirken und eine vollständige Sicherheitsarchitektur bilden. Diese modulare Struktur ermöglicht es Organisationen, ihre Informationssicherheit strategisch zu planen, operativ umzusetzen und kontinuierlich zu optimieren.\n\n🎯 Strategische Framework-Komponenten:\n• ISMS-Governance bildet das strategische Fundament mit klaren Rollen, Verantwortlichkeiten und Entscheidungsstrukturen\n• Informationssicherheitspolitik definiert die strategische Ausrichtung und grundlegenden Prinzipien\n• Risikomanagement-Framework etabliert systematische Prozesse für Risikoidentifikation, -bewertung und -behandlung\n• Compliance-Management integriert regulatorische Anforderungen in die Framework-Architektur\n• Kontinuierliche Verbesserung durch strukturierte Bewertungs- und Optimierungszyklen\n\n🔧 Operative Framework-Elemente:\n• Kontrollziele und Sicherheitsmaßnahmen aus Anhang A bilden das operative Herzstück des Frameworks\n• Prozessdokumentation schafft Transparenz und Nachvollziehbarkeit aller Sicherheitsaktivitäten\n• Incident Management ermöglicht strukturierte Behandlung von Sicherheitsvorfällen\n• Business Continuity Planning gewährleistet Aufrechterhaltung kritischer Geschäftsprozesse\n• Supplier Management integriert Lieferanten und Partner in die Sicherheitsarchitektur\n\n📋 Management-System-Komponenten:\n• Dokumentenmanagement strukturiert alle Framework-relevanten Informationen und Nachweise\n• Schulungs- und Awareness-Programme entwickeln Sicherheitskompetenz in der Organisation\n• Interne Audits überprüfen systematisch die Wirksamkeit des Frameworks\n• Management Review gewährleistet strategische Steuerung und kontinuierliche Anpassung\n• Korrektur- und Verbesserungsmaßnahmen schließen identifizierte Lücken systematisch\n\n🔗 Framework-Integration und Synergie:\n• Alle Komponenten sind durch definierte Schnittstellen und Workflows miteinander verbunden\n• Informationsflüsse zwischen den Komponenten ermöglichen ganzheitliche Sicherheitssteuerung\n• Feedback-Mechanismen gewährleisten kontinuierliche Optimierung der Komponenteninteraktion\n• Automatisierte Prozesse reduzieren manuellen Aufwand und erhöhen Konsistenz\n• Zentrale Dashboards bieten integrierte Sicht auf alle Framework-Komponenten\n\n⚙️ Technische Framework-Infrastruktur:\n• ISMS-Management-Plattformen unterstützen die operative Umsetzung des Frameworks\n• Monitoring- und Reporting-Systeme liefern kontinuierliche Einblicke in die Framework-Performance\n• Workflow-Automatisierung optimiert die Effizienz der Framework-Prozesse\n• Integration mit bestehenden IT-Systemen schafft nahtlose Sicherheitsarchitektur\n• Cloud-Integration ermöglicht moderne, skalierbare Framework-Implementierung\n\n📈 Framework-Maturity und Entwicklung:\n• Reifegrad-Modelle ermöglichen systematische Bewertung und Weiterentwicklung der Framework-Komponenten\n• Benchmarking-Mechanismen vergleichen Framework-Performance mit Best Practices\n• Kontinuierliche Anpassung an veränderte Geschäftsanforderungen und Bedrohungslandschaften\n• Skalierung der Framework-Komponenten entsprechend organisatorischem Wachstum\n• Evolution zu fortgeschrittenen Sicherheitsarchitekturen und Zero-Trust-Modellen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Wie entwickelt man eine maßgeschneiderte ISO 27001 Framework-Architektur für spezifische Organisationsanforderungen?',
        answer: "Die Entwicklung einer maßgeschneiderten ISO 27001 Framework-Architektur erfordert einen systematischen Ansatz, der die spezifischen Geschäftsanforderungen, Risikolandschaft und organisatorischen Besonderheiten berücksichtigt. Dieser strategische Prozess verbindet bewährte Framework-Prinzipien mit individuellen Anpassungen für optimale Wirksamkeit.\n\n🔍 Strategische Framework-Analyse:\n• Umfassende Bewertung der aktuellen Informationssicherheitslandschaft und bestehender Managementsysteme\n• Identifikation spezifischer Geschäftsanforderungen, regulatorischer Verpflichtungen und Stakeholder-Erwartungen\n• Analyse der Organisationsstruktur, Prozesslandschaft und technologischen Infrastruktur\n• Bewertung der Sicherheitskultur und verfügbaren Ressourcen für Framework-Implementierung\n• Definition strategischer Ziele und Erfolgskriterien für die Framework-Architektur\n\n🏗️ Modulare Architektur-Entwicklung:\n• Design einer skalierbaren Framework-Struktur mit flexiblen Komponenten und Schnittstellen\n• Entwicklung organisationsspezifischer Governance-Modelle und Entscheidungsstrukturen\n• Anpassung der Kontrollziele und Sicherheitsmaßnahmen an branchenspezifische Anforderungen\n• Integration bestehender Sicherheitstools und -prozesse in die neue Framework-Architektur\n• Berücksichtigung zukünftiger Entwicklungen und Skalierungsanforderungen\n\n📊 Risikoorientierte Framework-Gestaltung:\n• Entwicklung einer maßgeschneiderten Risikomanagement-Methodik entsprechend der Organisationscharakteristika\n• Anpassung der Risikobewertungskriterien an spezifische Geschäftsmodelle und Bedrohungslandschaften\n• Integration branchenspezifischer Risikofaktoren und Compliance-Anforderungen\n• Entwicklung organisationsspezifischer Risikoappetit und -toleranz-Definitionen\n• Etablierung kontinuierlicher Risikobewertung und -anpassung\n\n🔧 Prozess-Integration und Automatisierung:\n• Nahtlose Integration der Framework-Prozesse in bestehende Geschäftsabläufe\n• Entwicklung automatisierter Workflows für effiziente Framework-Umsetzung\n• Anpassung der Dokumentationsanforderungen an organisatorische Gegebenheiten\n• Integration mit bestehenden IT-Service-Management und Governance-Strukturen\n• Optimierung der Schnittstellen zwischen verschiedenen Managementsystemen\n\n👥 Organisationsspezifische Anpassungen:\n• Entwicklung rollenbasierter Verantwortlichkeiten entsprechend der Organisationsstruktur\n• Anpassung der Schulungs- und Awareness-Programme an Zielgruppen und Kompetenzniveaus\n• Berücksichtigung kultureller Faktoren und Change-Management-Anforderungen\n• Integration dezentraler Strukturen und internationaler Standorte\n• Anpassung an spezifische Branchen-Standards und Best Practices\n\n🚀 Implementierungs-Roadmap und Phasenplanung:\n• Entwicklung einer strukturierten Implementierungsstrategie mit klaren Meilensteinen\n• Priorisierung der Framework-Komponenten basierend auf Risiko und Geschäftswert\n• Planung von Pilot-Implementierungen und schrittweiser Rollout-Strategien\n• Definition von Erfolgsmessungen und KPIs für kontinuierliche Optimierung\n• Etablierung von Feedback-Mechanismen für kontinuierliche Framework-Verbesserung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Welche Rolle spielt Framework-Governance bei der erfolgreichen ISO 27001 Implementierung?',
        answer: "Framework-Governance bildet das strategische Rückgrat einer erfolgreichen ISO 27001 Implementierung und gewährleistet, dass alle Framework-Komponenten effektiv gesteuert, koordiniert und kontinuierlich optimiert werden. Eine robuste Governance-Struktur schafft die notwendigen Entscheidungswege, Verantwortlichkeiten und Kontrollmechanismen für nachhaltige Framework-Excellence.\n\n🎯 Strategische Governance-Funktionen:\n• Etablierung klarer Führungsstrukturen und Entscheidungskompetenzen für alle Framework-Aspekte\n• Definition strategischer Ziele und Ausrichtung des Frameworks an Geschäftszielen\n• Sicherstellung angemessener Ressourcenallokation für Framework-Implementierung und -betrieb\n• Überwachung der Framework-Performance und strategische Steuerung von Verbesserungsmaßnahmen\n• Integration des Frameworks in die Gesamtstrategie und Corporate Governance der Organisation\n\n🏛️ Organisatorische Governance-Strukturen:\n• Information Security Steering Committee als zentrales Entscheidungsgremium für strategische Framework-Fragen\n• ISMS-Manager als operative Führungsrolle für tägliche Framework-Koordination und -steuerung\n• Fachbereichsverantwortliche als Framework-Champions in verschiedenen Organisationsbereichen\n• Risk Owner für spezifische Risikobereiche und Kontrollmaßnahmen\n• Audit-Funktionen für unabhängige Bewertung der Framework-Wirksamkeit\n\n📋 Governance-Prozesse und -Mechanismen:\n• Regelmäßige Management Reviews zur strategischen Bewertung und Anpassung des Frameworks\n• Strukturierte Entscheidungsprozesse für Framework-Änderungen und -Weiterentwicklungen\n• Eskalationsmechanismen für kritische Sicherheitsvorfälle und Framework-Probleme\n• Budgetplanung und -kontrolle für Framework-bezogene Investitionen und Betriebskosten\n• Performance-Monitoring und KPI-basierte Steuerung der Framework-Effektivität\n\n🔄 Kontinuierliche Governance-Verbesserung:\n• Systematische Bewertung der Governance-Effektivität und Anpassung an veränderte Anforderungen\n• Integration von Lessons Learned und Best Practices in die Governance-Strukturen\n• Benchmarking mit anderen Organisationen und Branchenstandards\n• Anpassung der Governance an organisatorische Veränderungen und Wachstum\n• Evolution zu fortgeschrittenen Governance-Modellen und digitalen Steuerungsmechanismen\n\n📊 Governance-Reporting und Transparenz:\n• Entwicklung aussagekräftiger Dashboards und Berichte für verschiedene Stakeholder-Gruppen\n• Regelmäßige Kommunikation der Framework-Performance an Führungsebene und Aufsichtsgremien\n• Transparente Darstellung von Risiken, Compliance-Status und Verbesserungsmaßnahmen\n• Integration in bestehende Unternehmensberichterstattung und Governance-Zyklen\n• Externe Kommunikation der Framework-Erfolge und Zertifizierungsstatus\n\n⚖️ Compliance und Risiko-Governance:\n• Systematische Überwachung regulatorischer Entwicklungen und deren Auswirkungen auf das Framework\n• Integration von Compliance-Anforderungen in die Framework-Governance-Prozesse\n• Risikoorientierte Governance-Entscheidungen basierend auf aktuellen Bedrohungsanalysen\n• Koordination mit anderen Compliance-Funktionen und Governance-Strukturen\n• Vorbereitung auf externe Audits und Zertifizierungsprozesse durch robuste Governance"
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
