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
    console.log('Updating ISO 27001 Implementation page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-implementation' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-implementation" not found')
    }
    
    // Create new FAQs for ISO 27001 Implementation fundamentals
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche kritischen Erfolgsfaktoren bestimmen den Erfolg einer ISO 27001 Implementierung?',
        answer: "Der Erfolg einer ISO 27001 Implementierung hängt von einer Vielzahl strategischer, organisatorischer und technischer Faktoren ab, die systematisch geplant und koordiniert werden müssen. Eine erfolgreiche ISMS-Einführung erfordert mehr als nur die Erfüllung normativer Anforderungen - sie muss nachhaltig in die Organisationskultur integriert werden.\n\n🎯 Strategische Führung und Commitment:\n• Uneingeschränkte Unterstützung und sichtbares Engagement der Geschäftsführung als Grundvoraussetzung\n• Klare Definition der ISMS-Vision und strategischen Ziele in Abstimmung mit Unternehmenszielen\n• Bereitstellung ausreichender Ressourcen für alle Implementierungsphasen\n• Etablierung einer ISMS-Governance-Struktur mit definierten Rollen und Verantwortlichkeiten\n• Regelmäßige Kommunikation der Bedeutung von Informationssicherheit auf allen Organisationsebenen\n\n📋 Systematische Projektplanung und -steuerung:\n• Entwicklung einer detaillierten Implementierungsroadmap mit realistischen Zeitplänen und Meilensteinen\n• Professionelles Projektmanagement mit bewährten Methoden und Tools\n• Klare Abgrenzung des ISMS-Geltungsbereichs basierend auf Geschäftsanforderungen\n• Kontinuierliches Risikomanagement für das Implementierungsprojekt selbst\n• Etablierung effektiver Kommunikations- und Eskalationsprozesse\n\n👥 Organisatorische Verankerung und Change Management:\n• Aufbau interner ISMS-Kompetenzen durch gezielte Schulungen und Zertifizierungen\n• Systematisches Change Management zur Überwindung von Widerständen\n• Integration der Informationssicherheit in bestehende Geschäftsprozesse\n• Schaffung einer positiven Sicherheitskultur durch Awareness und Motivation\n• Etablierung nachhaltiger Kommunikations- und Feedback-Mechanismen\n\n🔧 Technische Exzellenz und Integration:\n• Sorgfältige Auswahl und Implementierung geeigneter Sicherheitskontrollen\n• Integration mit bestehenden IT-Systemen und Managementsystemen\n• Aufbau effektiver Monitoring- und Überwachungskapazitäten\n• Implementierung automatisierter Prozesse wo möglich und sinnvoll\n• Kontinuierliche Bewertung und Optimierung der technischen Umsetzung\n\n📊 Kontinuierliche Verbesserung und Nachhaltigkeit:\n• Etablierung eines robusten internen Audit-Programms\n• Implementierung effektiver Kennzahlen und Reporting-Mechanismen\n• Regelmäßige Management Reviews und strategische Bewertungen\n• Aufbau von Kapazitäten für kontinuierliche Anpassung an neue Bedrohungen\n• Langfristige Planung für ISMS-Weiterentwicklung und -optimierung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie entwickelt man eine effektive ISMS-Implementierungsstrategie für verschiedene Organisationstypen?',
        answer: "Die Entwicklung einer maßgeschneiderten ISMS-Implementierungsstrategie erfordert eine tiefgreifende Analyse der organisationsspezifischen Gegebenheiten und eine systematische Anpassung der Implementierungsansätze. Verschiedene Organisationstypen haben unterschiedliche Anforderungen, Ressourcen und Herausforderungen, die in der Strategieentwicklung berücksichtigt werden müssen.\n\n🏢 Organisationsanalyse und Strategieentwicklung:\n• Umfassende Bewertung der aktuellen Sicherheitsreife und bestehenden Managementsysteme\n• Analyse der Organisationskultur, Struktur und Entscheidungsprozesse\n• Identifikation kritischer Geschäftsprozesse und Informationsassets\n• Bewertung verfügbarer Ressourcen, Kompetenzen und Budgets\n• Analyse regulatorischer Anforderungen und Compliance-Verpflichtungen\n\n🏭 Strategien für verschiedene Organisationsgrößen:\n• Kleine Unternehmen: Fokus auf pragmatische, kosteneffiziente Lösungen mit externem Support\n• Mittelständische Unternehmen: Ausgewogener Ansatz zwischen internen Kapazitäten und externer Expertise\n• Große Organisationen: Komplexe, phasenweise Implementierung mit dedizierten internen Teams\n• Konzerne: Harmonisierte Implementierung mit lokalen Anpassungen und zentraler Koordination\n• Internationale Organisationen: Berücksichtigung verschiedener rechtlicher und kultureller Kontexte\n\n🎯 Branchenspezifische Anpassungen:\n• Finanzdienstleister: Integration mit bestehenden Compliance-Frameworks und regulatorischen Anforderungen\n• Gesundheitswesen: Besondere Berücksichtigung von Patientendatenschutz und medizinischen Geräten\n• Kritische Infrastrukturen: Fokus auf Verfügbarkeit und Resilienz kritischer Systeme\n• Technologieunternehmen: Integration mit agilen Entwicklungsprozessen und DevSecOps\n• Produktionsunternehmen: Berücksichtigung von OT-Sicherheit und Lieferkettensicherheit\n\n📈 Phasenorientierte Implementierungsansätze:\n• Pilotprojekt-Ansatz: Beginn mit einem begrenzten Bereich zur Sammlung von Erfahrungen\n• Big Bang-Ansatz: Vollständige Implementierung in kurzer Zeit bei ausreichenden Ressourcen\n• Iterativer Ansatz: Schrittweise Erweiterung des ISMS-Geltungsbereichs\n• Modularer Ansatz: Implementierung einzelner Sicherheitsbereiche in definierten Reihenfolgen\n• Hybridansatz: Kombination verschiedener Methoden je nach Organisationsbereich\n\n🔄 Integration und Harmonisierung:\n• Nutzung bestehender Managementsysteme als Grundlage für ISMS-Integration\n• Harmonisierung mit anderen Standards wie ISO 9001, ISO 14001 oder ISO 20000\n• Integration in bestehende Governance-Strukturen und Entscheidungsprozesse\n• Aufbau von Synergien zwischen verschiedenen Compliance-Anforderungen\n• Entwicklung einheitlicher Dokumentations- und Reporting-Standards\n\n🚀 Erfolgsmessung und Anpassung:\n• Definition spezifischer, messbarer Implementierungsziele und KPIs\n• Etablierung regelmäßiger Fortschrittsreviews und Anpassungsmechanismen\n• Aufbau von Feedback-Schleifen für kontinuierliche Strategieoptimierung\n• Benchmarking gegen Branchenstandards und Best Practices\n• Langfristige Planung für ISMS-Evolution und Weiterentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Ressourcen und Kompetenzen sind für eine erfolgreiche ISO 27001 Implementierung erforderlich?',
        answer: "Eine erfolgreiche ISO 27001 Implementierung erfordert eine strategische Kombination aus personellen Ressourcen, technischen Kompetenzen, finanziellen Mitteln und organisatorischen Kapazitäten. Die richtige Ressourcenplanung und Kompetenzentwicklung sind entscheidend für den nachhaltigen Erfolg des ISMS-Projekts.\n\n👥 Personelle Ressourcen und Rollen:\n• ISMS-Manager als zentrale Koordinationsstelle mit umfassender ISO 27001 Expertise\n• Informationssicherheitsbeauftragte für operative Umsetzung und Überwachung\n• Projektmanager mit Erfahrung in komplexen Transformationsprojekten\n• Fachexperten aus verschiedenen Geschäftsbereichen für Requirements und Validierung\n• IT-Sicherheitsspezialisten für technische Implementierung und Systemintegration\n\n🎓 Erforderliche Kompetenzen und Qualifikationen:\n• Tiefgreifende Kenntnisse der ISO 27001 Norm und verwandter Standards\n• Praktische Erfahrung in Risikomanagement und Sicherheitsbewertungen\n• Projektmanagement-Kompetenzen mit bewährten Methoden und Tools\n• Change Management Fähigkeiten für organisatorische Transformation\n• Technische Expertise in IT-Sicherheit, Netzwerken und Systemadministration\n\n💰 Finanzielle Ressourcenplanung:\n• Beratungskosten für externe Expertise und Implementierungsunterstützung\n• Interne Personalkosten für dedizierte Projektmitarbeiter und Schulungen\n• Technologie-Investitionen für Sicherheitstools, Software und Infrastructure-Upgrades\n• Zertifizierungs- und Auditkosten für externe Bewertungen und Validierung\n• Kontinuierliche Betriebskosten für ISMS-Aufrechterhaltung und Weiterentwicklung\n\n🔧 Technische Ressourcen und Tools:\n• ISMS-Management-Software für Dokumentation, Workflow und Compliance-Tracking\n• Risikomanagement-Tools für systematische Bewertung und Monitoring\n• Sicherheitstechnologien wie Firewalls, Intrusion Detection, Verschlüsselung\n• Monitoring- und Logging-Systeme für kontinuierliche Überwachung\n• Backup- und Disaster Recovery Lösungen für Geschäftskontinuität\n\n📚 Wissensmanagement und Schulungsressourcen:\n• Umfassende Schulungsprogramme für alle Mitarbeiterebenen\n• Externe Zertifizierungskurse für Schlüsselpersonal\n• Aufbau interner Wissensdatenbanken und Best Practice Repositories\n• Regelmäßige Weiterbildung zu neuen Bedrohungen und Technologien\n• Etablierung von Communities of Practice für Wissensaustausch\n\n⏱️ Zeitressourcen und Kapazitätsplanung:\n• Realistische Zeitschätzungen für alle Implementierungsphasen\n• Berücksichtigung von Lernkurven und Anpassungszeiten\n• Pufferzeiten für unvorhergesehene Herausforderungen und Iterationen\n• Koordination mit anderen Projekten und Geschäftsaktivitäten\n• Langfristige Planung für kontinuierliche ISMS-Weiterentwicklung\n\n🤝 Externe Unterstützung und Partnerschaften:\n• Auswahl qualifizierter Beratungsunternehmen mit nachgewiesener ISO 27001 Expertise\n• Zusammenarbeit mit Technologieanbietern für spezialisierte Sicherheitslösungen\n• Aufbau von Beziehungen zu Zertifizierungsstellen und Auditoren\n• Teilnahme an Branchennetzwerken und Erfahrungsaustausch\n• Nutzung von Schulungsanbietern für spezialisierte Kompetenzentwicklung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie gestaltet man einen realistischen Zeitplan für die ISO 27001 Implementierung?',
        answer: "Die Entwicklung eines realistischen Zeitplans für die ISO 27001 Implementierung erfordert eine sorgfältige Analyse aller Projektphasen, Abhängigkeiten und Einflussfaktoren. Ein gut strukturierter Zeitplan berücksichtigt sowohl die normativen Anforderungen als auch die organisationsspezifischen Gegebenheiten und schafft ausreichend Flexibilität für Anpassungen.\n\n📅 Phasenorientierte Zeitplanung:\n• Vorbereitungsphase mit Projektinitiierung und Stakeholder-Alignment: 4 bis 8 Wochen\n• Gap-Analyse und Ist-Zustand-Bewertung: 6 bis 12 Wochen je nach Organisationsgröße\n• ISMS-Design und Architekturentwicklung: 8 bis 16 Wochen für umfassende Konzeption\n• Implementierungsphase mit schrittweiser Umsetzung: 16 bis 40 Wochen abhängig vom Umfang\n• Zertifizierungsvorbereitung und Audit-Durchführung: 8 bis 12 Wochen für finale Validierung\n\n🎯 Einflussfaktoren auf die Zeitplanung:\n• Organisationsgröße und Komplexität der IT-Landschaft als Hauptdeterminanten\n• Bestehende Sicherheitsreife und verfügbare Grundlagen für ISMS-Aufbau\n• Verfügbarkeit interner Ressourcen und Expertise für Projektdurchführung\n• Umfang des ISMS-Geltungsbereichs und Anzahl der einzubeziehenden Standorte\n• Regulatorische Anforderungen und Compliance-Verpflichtungen der Branche\n\n⚡ Beschleunigungsmöglichkeiten:\n• Parallele Bearbeitung unabhängiger Workstreams zur Zeitoptimierung\n• Nutzung bestehender Managementsysteme und Sicherheitsmaßnahmen als Basis\n• Einsatz erfahrener externer Berater für kritische Pfad-Aktivitäten\n• Fokussierung auf kritische Bereiche mit schrittweiser Erweiterung\n• Automatisierung wiederkehrender Aufgaben und Standardprozesse\n\n🚧 Risikofaktoren und Pufferplanung:\n• Einplanung von Pufferzeiten für unvorhergesehene Herausforderungen und Iterationen\n• Berücksichtigung von Lernkurven bei neuen Technologien und Prozessen\n• Koordination mit anderen Projekten und Geschäftsaktivitäten\n• Saisonale Schwankungen und Urlaubszeiten in der Ressourcenplanung\n• Potenzielle Verzögerungen durch externe Abhängigkeiten und Lieferanten\n\n📊 Meilenstein-basierte Kontrolle:\n• Definition klarer Meilensteine mit messbaren Erfolgskriterien\n• Regelmäßige Fortschrittsreviews und Anpassung der Zeitplanung\n• Etablierung von Go/No-Go-Entscheidungspunkten für kritische Phasen\n• Kontinuierliches Monitoring von Projektrisiken und Abhängigkeiten\n• Flexible Anpassung der Zeitpläne basierend auf Lessons Learned\n\n🔄 Iterative Planungsansätze:\n• Agile Planungsmethoden für komplexe und sich ändernde Anforderungen\n• Rolling Wave Planning für detaillierte Planung der nächsten Phasen\n• Kontinuierliche Verfeinerung der Zeitschätzungen basierend auf Erfahrungen\n• Szenario-basierte Planung für verschiedene Implementierungsgeschwindigkeiten\n• Integration von Feedback-Schleifen für kontinuierliche Planungsoptimierung\n\n🎯 Realistische Erwartungssteuerung:\n• Transparente Kommunikation von Zeitplänen und potenziellen Risiken\n• Aufklärung über die Komplexität und den iterativen Charakter der ISMS-Implementierung\n• Betonung der Wichtigkeit von Qualität über Geschwindigkeit\n• Vorbereitung auf mögliche Anpassungen und Planungsänderungen\n• Fokus auf nachhaltige Implementierung statt kurzfristige Zertifizierung"
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
