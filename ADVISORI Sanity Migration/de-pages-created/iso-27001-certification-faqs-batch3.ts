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
    console.log('Updating ISO 27001 Certification page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-certification' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-certification" not found')
    }
    
    // Create new FAQs for ISO 27001 certification maintenance and compliance
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie lange dauert eine ISO 27001 Zertifizierung und welche Faktoren beeinflussen den Zeitrahmen?',
        answer: "Die Dauer einer ISO 27001 Zertifizierung variiert erheblich je nach Organisationsgröße, Komplexität und Ausgangslage. Eine realistische Zeitplanung berücksichtigt alle Projektphasen und schafft ausreichend Puffer für unvorhergesehene Herausforderungen und Optimierungen.\n\n⏱️ Typische Projektphasen und Zeitrahmen:\n• Vorbereitung und Gap-Analyse: Ein bis drei Monate für umfassende Bestandsaufnahme und Strategieentwicklung\n• ISMS-Implementierung: Drei bis zwölf Monate je nach Komplexität und verfügbaren Ressourcen\n• Dokumentation und Prozessaufbau: Zwei bis sechs Monate für vollständige Dokumentationsarchitektur\n• Interne Audits und Optimierung: Ein bis drei Monate für Qualitätssicherung und Verbesserungen\n• Zertifizierungsaudits: Ein bis zwei Monate für Stage 1 und Stage 2 Audits inklusive Nacharbeiten\n\n🏢 Organisationsspezifische Einflussfaktoren:\n• Unternehmensgröße und Anzahl der Standorte beeinflussen Komplexität und Koordinationsaufwand erheblich\n• Branche und regulatorische Anforderungen bestimmen spezifische Sicherheitsanforderungen und Compliance-Verpflichtungen\n• Bestehende Sicherheitsinfrastruktur und Managementsysteme können Implementierungszeit verkürzen oder verlängern\n• Verfügbare interne Ressourcen und Kompetenzen bestimmen Abhängigkeit von externer Unterstützung\n• Komplexität der IT-Landschaft und Anzahl der zu schützenden Informationswerte\n\n📊 Ausgangslage und Reifegrad:\n• Bestehende Sicherheitsmaßnahmen und deren Dokumentationsgrad verkürzen oder verlängern Implementierungszeit\n• Vorhandene Managementsysteme können Synergien schaffen und Aufwand reduzieren\n• Sicherheitskultur und Mitarbeiterbewusstsein beeinflussen Akzeptanz und Umsetzungsgeschwindigkeit\n• Historische Sicherheitsvorfälle können zusätzliche Maßnahmen und Dokumentation erfordern\n• Bestehende Compliance-Verpflichtungen können Integration erleichtern oder erschweren\n\n⚡ Beschleunigungsfaktoren:\n• Professionelle externe Begleitung kann Implementierungszeit erheblich verkürzen und Qualität verbessern\n• Dedizierte interne Projektressourcen ermöglichen fokussierte und kontinuierliche Bearbeitung\n• Klare Management-Unterstützung und Priorisierung beschleunigen Entscheidungsprozesse\n• Nutzung bewährter Templates und Frameworks reduziert Entwicklungsaufwand\n• Phasenweise Implementierung ermöglicht parallele Bearbeitung verschiedener Bereiche\n\n🎯 Realistische Planungsempfehlungen:\n• Kleine Organisationen: Sechs bis zwölf Monate für vollständige Zertifizierung\n• Mittlere Unternehmen: Zwölf bis achtzehn Monate je nach Komplexität und Ressourcen\n• Große Organisationen: Achtzehn bis vierundzwanzig Monate für umfassende Implementierung\n• Zusätzliche Zeit für Nacharbeiten und Optimierungen einplanen\n• Pufferzeiten für unvorhergesehene Herausforderungen und Lernkurven berücksichtigen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Was passiert nach der erfolgreichen Zertifizierung und wie wird die Compliance langfristig sichergestellt?',
        answer: "Nach der erfolgreichen ISO 27001 Zertifizierung beginnt die Phase der kontinuierlichen Compliance-Sicherung und Weiterentwicklung. Eine nachhaltige Zertifizierungserhaltung erfordert systematische Überwachung, regelmäßige Verbesserungen und proaktive Anpassung an verändernde Anforderungen.\n\n📅 Überwachungsaudit-Zyklus:\n• Jährliche Überwachungsaudits zur Bestätigung der kontinuierlichen Compliance und Wirksamkeit\n• Re-Zertifizierungsaudit alle drei Jahre für vollständige Erneuerung der Zertifizierung\n• Mögliche zusätzliche Audits bei wesentlichen Änderungen oder besonderen Anlässen\n• Kontinuierliche Vorbereitung auf Audits durch systematische Dokumentation und Nachweisführung\n• Aufbau vertrauensvoller Beziehungen zu Auditoren für konstruktive Zusammenarbeit\n\n🔄 Kontinuierliche Verbesserung:\n• Implementierung systematischer Verbesserungsprozesse basierend auf Audit-Ergebnissen und internen Erkenntnissen\n• Regelmäßige Überprüfung und Aktualisierung der Risikoanalyse zur Berücksichtigung neuer Bedrohungen\n• Anpassung von Sicherheitskontrollen an veränderte Geschäftsanforderungen und Technologien\n• Integration von Lessons Learned aus Sicherheitsvorfällen und Best Practices\n• Aufbau einer lernenden Organisation, die kontinuierlich ihre Sicherheitsreife weiterentwickelt\n\n📊 Performance-Monitoring:\n• Etablierung aussagekräftiger KPIs und Metriken zur Messung der ISMS-Wirksamkeit\n• Regelmäßige Management-Reviews zur strategischen Bewertung und Steuerung\n• Systematische Überwachung von Sicherheitsvorfällen und deren Behandlung\n• Kontinuierliche Bewertung der Mitarbeiterzufriedenheit und des Sicherheitsbewusstseins\n• Aufbau von Dashboards und Reporting-Systemen für transparente Kommunikation\n\n🎓 Kompetenzentwicklung:\n• Kontinuierliche Weiterbildung der ISMS-Verantwortlichen und Sicherheitsexperten\n• Regelmäßige Awareness-Programme für alle Mitarbeiter zur Aufrechterhaltung des Sicherheitsbewusstseins\n• Aufbau interner Audit-Kompetenzen für eigenständige Qualitätssicherung\n• Teilnahme an Fachkonferenzen und Netzwerken für Erfahrungsaustausch\n• Entwicklung von Karrierepfaden im Bereich Informationssicherheit\n\n🚀 Strategische Weiterentwicklung:\n• Integration neuer Technologien und Sicherheitslösungen in das bestehende ISMS\n• Erweiterung der Zertifizierung auf zusätzliche Standorte oder Geschäftsbereiche\n• Aufbau von Synergien mit anderen Managementsystemen und Compliance-Anforderungen\n• Entwicklung zur Benchmark-Organisation in der Branche\n• Nutzung der Zertifizierung für strategische Geschäftsentwicklung und Markterschließung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Welche Herausforderungen entstehen bei Multi-Site-Zertifizierungen und wie werden sie bewältigt?',
        answer: "Multi-Site-Zertifizierungen bringen spezifische Herausforderungen mit sich, die systematische Planung, koordinierte Umsetzung und einheitliche Standards erfordern. Eine erfolgreiche standortübergreifende Zertifizierung schafft konsistente Sicherheitsstandards bei gleichzeitiger Berücksichtigung lokaler Besonderheiten.\n\n🌐 Koordination und Governance:\n• Aufbau einer zentralen ISMS-Governance-Struktur mit klaren Verantwortlichkeiten für alle Standorte\n• Entwicklung einheitlicher Standards und Richtlinien bei gleichzeitiger Flexibilität für lokale Anpassungen\n• Etablierung effektiver Kommunikations- und Koordinationsmechanismen zwischen allen Standorten\n• Implementierung standardisierter Reporting- und Überwachungsprozesse für konsistente Qualitätssicherung\n• Aufbau von Redundanzen und Backup-Strukturen für kritische ISMS-Funktionen\n\n📊 Einheitliche Standards bei lokaler Flexibilität:\n• Entwicklung eines Master-ISMS mit standortspezifischen Anpassungen für lokale Gegebenheiten\n• Berücksichtigung unterschiedlicher regulatorischer Anforderungen und kultureller Besonderheiten\n• Standardisierung von Kernprozessen bei Flexibilität in der operativen Umsetzung\n• Aufbau einheitlicher Schulungs- und Awareness-Programme mit lokalen Anpassungen\n• Implementierung konsistenter Audit- und Bewertungsstandards für alle Standorte\n\n🔍 Audit-Komplexität und Sampling:\n• Strategische Auswahl repräsentativer Standorte für detaillierte Audit-Prüfungen\n• Entwicklung effizienter Audit-Routen und Zeitpläne zur Minimierung von Reiseaufwand\n• Koordination zwischen verschiedenen Audit-Teams und Auditoren\n• Sicherstellung einheitlicher Audit-Standards und Bewertungskriterien\n• Aufbau lokaler Audit-Unterstützung und Koordination an allen Standorten\n\n💼 Ressourcenmanagement:\n• Optimale Allokation von ISMS-Ressourcen zwischen zentralen und dezentralen Funktionen\n• Aufbau lokaler Kompetenzen zur Reduzierung der Abhängigkeit von zentralen Ressourcen\n• Entwicklung kosteneffizienter Schulungs- und Unterstützungsstrukturen\n• Nutzung von Technologie für virtuelle Zusammenarbeit und Remote-Support\n• Etablierung von Shared-Service-Modellen für gemeinsame ISMS-Funktionen\n\n🔄 Kontinuierliche Harmonisierung:\n• Regelmäßige Überprüfung und Harmonisierung von Standards und Prozessen\n• Systematischer Erfahrungsaustausch und Best-Practice-Sharing zwischen Standorten\n• Koordinierte Weiterentwicklung des ISMS unter Berücksichtigung aller Standorte\n• Aufbau einer gemeinsamen Sicherheitskultur trotz geografischer Verteilung\n• Integration neuer Standorte in bestehende ISMS-Strukturen durch bewährte Onboarding-Prozesse"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Wie integriert man ISO 27001 mit anderen Managementsystemen und Compliance-Anforderungen?',
        answer: "Die Integration von ISO 27001 mit anderen Managementsystemen und Compliance-Anforderungen schafft Synergien, reduziert Aufwand und verbessert die Gesamteffizienz der Organisationssteuerung. Ein systematischer Integrationsansatz maximiert den Nutzen bei minimaler Komplexität.\n\n🔗 Managementsystem-Integration:\n• Aufbau einer integrierten Managementsystem-Architektur mit gemeinsamen Governance-Strukturen\n• Harmonisierung von Dokumentationsstandards und Prozessstrukturen zwischen verschiedenen Standards\n• Nutzung gemeinsamer Audit-Zyklen und kombinierter Assessments zur Effizienzsteigerung\n• Entwicklung einheitlicher KPIs und Reporting-Strukturen für ganzheitliche Performance-Bewertung\n• Etablierung gemeinsamer Schulungs- und Awareness-Programme für alle Managementsysteme\n\n📊 Compliance-Mapping und Harmonisierung:\n• Systematische Analyse von Überschneidungen und Synergien zwischen verschiedenen Compliance-Anforderungen\n• Entwicklung einer Master-Compliance-Matrix zur Vermeidung von Doppelarbeit\n• Integration von regulatorischen Anforderungen in einheitliche Kontrollframeworks\n• Aufbau gemeinsamer Risikomanagement-Prozesse für alle Compliance-Bereiche\n• Koordination von Reporting-Zyklen und Nachweisführung für verschiedene Stakeholder\n\n🛡️ Technische Integration:\n• Implementierung integrierter GRC-Plattformen für einheitliche Steuerung und Überwachung\n• Aufbau gemeinsamer Dokumentenmanagement-Systeme für alle Managementsysteme\n• Integration von Monitoring- und Alerting-Systemen für ganzheitliche Risikoüberwachung\n• Entwicklung einheitlicher Dashboards und Reporting-Tools für Management-Information\n• Nutzung gemeinsamer Technologie-Infrastrukturen zur Kostenoptimierung\n\n👥 Organisatorische Synergien:\n• Aufbau integrierter Compliance-Teams mit übergreifenden Verantwortlichkeiten\n• Entwicklung gemeinsamer Schulungs- und Zertifizierungsprogramme für Mitarbeiter\n• Etablierung einheitlicher Change-Management-Prozesse für alle Managementsysteme\n• Koordination von internen Audits und Assessments zur Effizienzsteigerung\n• Aufbau einer integrierten Compliance-Kultur mit einheitlichen Werten und Standards\n\n🚀 Strategische Vorteile:\n• Reduzierung von Compliance-Kosten durch Synergien und gemeinsame Ressourcennutzung\n• Verbesserung der Managementsystem-Reife durch Best-Practice-Transfer zwischen Standards\n• Erhöhung der Glaubwürdigkeit durch umfassende und integrierte Compliance-Demonstration\n• Schaffung von Wettbewerbsvorteilen durch ganzheitliche Governance-Exzellenz\n• Aufbau einer zukunftsfähigen Compliance-Architektur, die sich an neue Anforderungen anpassen kann"
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
