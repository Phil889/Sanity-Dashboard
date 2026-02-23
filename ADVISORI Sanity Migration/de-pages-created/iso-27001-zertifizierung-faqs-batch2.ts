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
    console.log('Updating ISO 27001 Zertifizierung page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-zertifizierung' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-zertifizierung" not found')
    }
    
    // Create new FAQs for ISO 27001 certification preparation and audit readiness
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie bereitet man sich optimal auf ein ISO 27001 Zertifizierungsaudit vor?',
        answer: "Die optimale Vorbereitung auf ein ISO 27001 Zertifizierungsaudit erfordert eine systematische und strukturierte Herangehensweise, die alle kritischen Aspekte der Audit-Readiness berücksichtigt. Eine professionelle Vorbereitung maximiert die Erfolgswahrscheinlichkeit und minimiert Risiken während des gesamten Audit-Prozesses.\n\n📋 Systematische Dokumentationsvorbereitung:\n• Vollständige Überprüfung und Aktualisierung aller ISMS-Dokumente auf Aktualität und Standardkonformität\n• Strukturierte Organisation der Nachweisdokumentation in logischer und nachvollziehbarer Reihenfolge\n• Erstellung umfassender Evidenz-Sammlungen für alle implementierten Sicherheitskontrollen\n• Aufbau einer effizienten Dokumentennavigation für schnellen Zugriff während des Audits\n• Sicherstellung der Verfügbarkeit aller erforderlichen Aufzeichnungen und Protokolle\n\n🎯 Strategische Audit-Simulation:\n• Durchführung realistischer Mock-Audits zur Identifikation potenzieller Schwachstellen\n• Simulation typischer Audit-Szenarien und Fragestellungen für optimale Vorbereitung\n• Systematische Überprüfung aller Audit-Trails und Nachweisketten\n• Bewertung der Audit-Bereitschaft durch unabhängige Experten\n• Kontinuierliche Optimierung basierend auf Simulation-Ergebnissen\n\n👥 Mitarbeitervorbereitung und Kompetenzentwicklung:\n• Gezielte Schulung aller Audit-Teilnehmer auf ihre spezifischen Rollen und Verantwortlichkeiten\n• Training für typische Audit-Fragen und professionelle Kommunikation mit Auditoren\n• Aufbau von Sicherheit und Kompetenz bei der Präsentation von ISMS-Komponenten\n• Entwicklung klarer Kommunikationsrichtlinien für konsistente Audit-Antworten\n• Etablierung von Backup-Kompetenzen für kritische Audit-Bereiche\n\n🔍 Technische Systemvorbereitung:\n• Umfassende Überprüfung aller technischen Sicherheitskontrollen auf Funktionsfähigkeit\n• Sicherstellung der Verfügbarkeit und Demonstrierbarkeit aller Monitoring-Systeme\n• Vorbereitung aussagekräftiger Reports und Dashboards für Audit-Präsentationen\n• Optimierung der System-Performance für reibungslose Audit-Demonstrationen\n• Aufbau redundanter Zugriffsmöglichkeiten für kritische Systeme und Daten\n\n⚡ Kontinuierliche Qualitätssicherung:\n• Regelmäßige interne Audits zur Sicherstellung der kontinuierlichen Compliance\n• Systematische Überwachung und Messung der ISMS-Performance\n• Proaktive Identifikation und Behebung potenzieller Audit-Findings\n• Aufbau robuster Korrektur- und Verbesserungsprozesse\n• Etablierung einer Kultur der kontinuierlichen Audit-Bereitschaft"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt die Auswahl der richtigen Zertifizierungsstelle für den Erfolg?',
        answer: "Die Auswahl der richtigen Zertifizierungsstelle ist ein kritischer Erfolgsfaktor für eine erfolgreiche ISO 27001 Zertifizierung und hat weitreichende Auswirkungen auf den gesamten Zertifizierungsprozess. Eine strategische Auswahl berücksichtigt multiple Faktoren und schafft optimale Voraussetzungen für nachhaltigen Zertifizierungserfolg.\n\n🏆 Reputation und Marktanerkennung:\n• Auswahl einer international anerkannten und akkreditierten Zertifizierungsstelle mit nachweislicher Expertise\n• Bewertung der Marktreputation und Glaubwürdigkeit bei Kunden, Partnern und Stakeholdern\n• Berücksichtigung der geografischen Präsenz und lokalen Marktkenntnis\n• Analyse der Zertifizierungshistorie und Erfolgsraten in vergleichbaren Organisationen\n• Sicherstellung der langfristigen Stabilität und Kontinuität der Zertifizierungsstelle\n\n🎯 Branchenexpertise und Spezialisierung:\n• Identifikation von Zertifizierungsstellen mit spezifischer Expertise in Ihrer Branche\n• Bewertung der Auditor-Qualifikationen und deren Verständnis branchenspezifischer Herausforderungen\n• Berücksichtigung von Erfahrungen mit ähnlichen Organisationsgrößen und Komplexitätsgraden\n• Analyse der Fähigkeit zur Bewertung innovativer Technologien und moderner Sicherheitsansätze\n• Sicherstellung des Verständnisses für regulatorische Anforderungen und Compliance-Frameworks\n\n💼 Service-Qualität und Kundenorientierung:\n• Bewertung der Kommunikationsqualität und Responsivität während der Anbahnungsphase\n• Analyse der Flexibilität bei Terminplanung und Audit-Durchführung\n• Berücksichtigung der Verfügbarkeit zusätzlicher Services wie Training oder Beratung\n• Bewertung der Qualität der Audit-Reports und Feedback-Mechanismen\n• Sicherstellung einer konstruktiven und entwicklungsorientierten Audit-Philosophie\n\n📊 Kostenstruktur und Wertschöpfung:\n• Transparente Analyse aller Zertifizierungskosten einschließlich versteckter Gebühren\n• Bewertung des Preis-Leistungs-Verhältnisses im Kontext der gebotenen Qualität\n• Berücksichtigung langfristiger Kosten für Überwachungsaudits und Re-Zertifizierungen\n• Analyse zusätzlicher Wertschöpfung durch Expertise und Marktanerkennung\n• Sicherstellung der Budgetkompatibilität ohne Kompromisse bei der Qualität\n\n🔄 Langfristige Partnerschaft und Kontinuität:\n• Aufbau einer strategischen Partnerschaft für kontinuierliche Compliance-Unterstützung\n• Sicherstellung der Verfügbarkeit für zukünftige Zertifizierungserweiterungen\n• Bewertung der Fähigkeit zur Unterstützung bei regulatorischen Änderungen\n• Berücksichtigung der Möglichkeiten für Multi-Site oder Multi-Standard Zertifizierungen\n• Etablierung einer vertrauensvollen und entwicklungsorientierten Zusammenarbeit"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie geht man mit Audit-Findings um und welche Strategien führen zu erfolgreichen Korrekturmaßnahmen?',
        answer: "Der professionelle Umgang mit Audit-Findings ist entscheidend für den Zertifizierungserfolg und bietet gleichzeitig wertvolle Möglichkeiten zur kontinuierlichen Verbesserung des ISMS. Eine strukturierte Herangehensweise transformiert Findings von Problemen zu Verbesserungschancen und stärkt die langfristige Compliance-Exzellenz.\n\n🔍 Systematische Finding-Analyse:\n• Umfassende Analyse der Root Causes für jedes identifizierte Finding zur Entwicklung nachhaltiger Lösungen\n• Kategorisierung der Findings nach Schweregrad, Auswirkung und Dringlichkeit für priorisierte Bearbeitung\n• Bewertung der systemischen Implikationen und potenzieller Auswirkungen auf andere ISMS-Bereiche\n• Identifikation von Mustern und wiederkehrenden Themen für strukturelle Verbesserungen\n• Dokumentation aller Analyseergebnisse für nachvollziehbare Maßnahmenentwicklung\n\n📋 Strategische Korrekturplanung:\n• Entwicklung umfassender Korrektur- und Korrekturmaßnahmenpläne mit klaren Zeitrahmen und Verantwortlichkeiten\n• Priorisierung der Maßnahmen basierend auf Risikobewertung und Compliance-Kritikalität\n• Integration der Korrekturmaßnahmen in bestehende Geschäftsprozesse ohne operative Störungen\n• Aufbau robuster Projektstrukturen für effiziente Maßnahmenumsetzung\n• Sicherstellung ausreichender Ressourcenallokation für nachhaltige Problemlösung\n\n🎯 Nachhaltige Implementierung:\n• Umsetzung struktureller Verbesserungen statt oberflächlicher Quick-Fixes für langfristige Wirksamkeit\n• Integration der Korrekturmaßnahmen in die kontinuierlichen ISMS-Prozesse\n• Aufbau präventiver Mechanismen zur Vermeidung ähnlicher Findings in der Zukunft\n• Entwicklung robuster Kontroll- und Überwachungssysteme für nachhaltige Compliance\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und Lernbereitschaft\n\n📊 Wirksamkeitsnachweis und Validierung:\n• Systematische Überprüfung der Wirksamkeit aller implementierten Korrekturmaßnahmen\n• Entwicklung messbarer Erfolgskriterien und KPIs für objektive Bewertung\n• Durchführung unabhängiger Validierungen zur Sicherstellung der Maßnahmenqualität\n• Dokumentation aller Nachweise in strukturierter und auditfähiger Form\n• Aufbau kontinuierlicher Monitoring-Prozesse für langfristige Wirksamkeitssicherung\n\n🚀 Strategische Kommunikation und Stakeholder-Management:\n• Professionelle Kommunikation mit der Zertifizierungsstelle über Fortschritte und Herausforderungen\n• Transparente Berichterstattung an das Management über Korrekturmaßnahmen und deren Auswirkungen\n• Einbindung aller relevanten Stakeholder in die Maßnahmenumsetzung für maximale Akzeptanz\n• Nutzung der Finding-Bearbeitung als Gelegenheit zur Demonstration von ISMS-Reife\n• Aufbau von Vertrauen durch proaktive und konstruktive Herangehensweise"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche langfristigen Vorteile bietet eine erfolgreiche ISO 27001 Zertifizierung für das Unternehmen?',
        answer: "Eine erfolgreiche ISO 27001 Zertifizierung bietet weit mehr als nur Compliance-Nachweis und schafft nachhaltigen strategischen Mehrwert für das gesamte Unternehmen. Die langfristigen Vorteile erstrecken sich über alle Geschäftsbereiche und positionieren das Unternehmen als vertrauenswürdigen und zukunftsfähigen Partner im digitalen Zeitalter.\n\n🏆 Strategische Marktpositionierung und Wettbewerbsvorteile:\n• Differenzierung im Markt durch nachweisliche Informationssicherheitsexzellenz und Vertrauenswürdigkeit\n• Erschließung neuer Geschäftsmöglichkeiten durch erfüllte Sicherheitsanforderungen von Kunden und Partnern\n• Stärkung der Marktposition bei öffentlichen Ausschreibungen und regulierten Branchen\n• Aufbau einer starken Reputation als sicherheitsbewusstes und verantwortungsvolles Unternehmen\n• Schaffung von Markteintrittsbarrieren für Wettbewerber ohne vergleichbare Zertifizierungen\n\n💼 Operative Exzellenz und Effizienzsteigerung:\n• Systematische Optimierung von Geschäftsprozessen durch strukturierte ISMS-Implementierung\n• Reduzierung operativer Risiken und Minimierung potenzieller Geschäftsunterbrechungen\n• Verbesserung der Incident-Response-Fähigkeiten und Krisenmanagement-Kompetenzen\n• Aufbau robuster Business Continuity und Disaster Recovery Kapazitäten\n• Etablierung einer Kultur der kontinuierlichen Verbesserung und operativen Exzellenz\n\n🛡️ Risikominimierung und Compliance-Sicherheit:\n• Systematische Identifikation und Behandlung von Informationssicherheitsrisiken\n• Proaktive Compliance mit aktuellen und zukünftigen regulatorischen Anforderungen\n• Reduzierung der Wahrscheinlichkeit und Auswirkungen von Sicherheitsvorfällen\n• Aufbau robuster Governance-Strukturen für nachhaltige Risikokontrolle\n• Schaffung einer soliden Basis für weitere Compliance-Frameworks und Zertifizierungen\n\n💰 Finanzielle Vorteile und Kosteneinsparungen:\n• Reduzierung von Versicherungsprämien durch nachweislich verbesserte Sicherheitslage\n• Vermeidung kostspieliger Sicherheitsvorfälle und deren Folgekosten\n• Optimierung von IT-Investitionen durch strukturierte Sicherheitsplanung\n• Steigerung der Unternehmensbewertung durch reduzierte Risikoprofile\n• Erschließung neuer Finanzierungsmöglichkeiten durch verbesserte Kreditwürdigkeit\n\n🌐 Zukunftsfähigkeit und Innovation:\n• Aufbau einer adaptiven Sicherheitsarchitektur für zukünftige Herausforderungen\n• Schaffung von Grundlagen für digitale Transformation und Innovation\n• Entwicklung einer lernenden Organisation mit kontinuierlicher Anpassungsfähigkeit\n• Positionierung als Technologie-Leader und Early Adopter von Sicherheitsstandards\n• Aufbau strategischer Partnerschaften mit anderen zertifizierten Organisationen"
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
