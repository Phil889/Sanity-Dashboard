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
    console.log('Updating BCBS-239 Data Governance Rollen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'bcbs-239-data-governance-rollen' })
    
    if (!existingDoc) {
      throw new Error('Document "bcbs-239-data-governance-rollen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche Rolle spielt der Chief Data Officer (CDO) bei der BCBS-239 Compliance und wie sollte diese Position optimal ausgestaltet werden?",
        answer: "Der Chief Data Officer (CDO) ist eine Schlüsselrolle für die erfolgreiche Umsetzung der BCBS-239 Anforderungen, da er die strategische Verantwortung für die institutsweite Datenqualität und -governance trägt. Die richtige Positionierung und Ausgestaltung dieser Rolle ist entscheidend für die Effektivität des gesamten BCBS-239 Governance-Frameworks.\n\n🎯 Strategische Bedeutung des CDO für BCBS-239:\n• Organisatorischer Katalysator: Der CDO fungiert als zentrale Instanz, die die bereichsübergreifende Zusammenarbeit bei Datenthemen fördert und Silodenken überwindet – eine Grundvoraussetzung für erfolgreiche BCBS-239 Compliance.\n• Strategische Führung: Der CDO entwickelt und verantwortet die übergreifende Datenstrategie, die alle Aspekte der Risikodatenaggregation und -berichterstattung abdeckt und mit der Geschäftsstrategie abgestimmt ist.\n• Kultureller Wandel: Als Treiber der Datenkultur fördert der CDO das Verständnis für die Bedeutung qualitativ hochwertiger Risikodaten auf allen Unternehmensebenen.\n• Regulatorische Schnittstelle: Der CDO fungiert als primärer Ansprechpartner für Aufsichtsbehörden zu Themen der Datengovernance und -qualität im BCBS-239 Kontext.\n\n💼 Optimale organisatorische Verankerung des CDO:\n• Hierarchische Positionierung: Der CDO sollte idealerweise auf C-Level oder direkt darunter angesiedelt sein, mit direkter Berichtslinie an den Vorstand (CEO, CRO oder COO).\n• Organisatorische Zuordnung: Die optimale Zuordnung variiert je nach Institutsstruktur – mögliche Ansätze sind die Verankerung im Risikomanagement, in einer eigenständigen Datenorganisation oder als Teil der IT-Funktion.\n• Governance-Befugnisse: Der CDO benötigt klare Weisungs- und Entscheidungsbefugnisse für datenrelevante Themen über Abteilungsgrenzen hinweg, unterstützt durch ein formales Mandat des Vorstands.\n• Ressourcenausstattung: Dem CDO sollte ein dediziertes Team zur Verfügung stehen, das die operativen Aspekte der Datengovernance koordiniert und fachlich steuert.\n\n📋 Kernverantwortlichkeiten des CDO im BCBS-239 Kontext:\n• Entwicklung und Durchsetzung übergreifender Datenqualitätsstandards und -metriken für Risikodaten\n• Etablierung und Überwachung von Data-Ownership-Strukturen in allen relevanten Geschäftsbereichen\n• Konzeption und Steuerung des Datenqualitätsmanagements und Metadaten-Managements\n• Überwachung der BCBS-239 Compliance aus Datengovernance-Perspektive\n• Aufbau und Leitung des Data Governance Council als zentrales Entscheidungsgremium\n\n🔍 Erfolgsfaktoren für wirksame CDO-Modelle:\n• Kombination aus fachlicher, technischer und regulatorischer Expertise im CDO-Profil\n• Klare Abgrenzung und Zusammenarbeit mit anderen C-Level-Rollen (CIO, CRO, CCO)\n• Starke Kommunikations- und Überzeugungsfähigkeiten für den kulturellen Wandel\n• Formalisierte Einbindung in Entscheidungsprozesse zu Risikodatenthemen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gestaltet man ein effektives Data Ownership Modell für BCBS-239 und welche praktischen Herausforderungen gilt es zu meistern?",
        answer: "Ein durchdachtes Data Ownership Modell ist das Rückgrat einer effektiven BCBS-239 Compliance. Es stellt sicher, dass für jeden relevanten Risikodatenbereich klare Verantwortlichkeiten definiert sind und die Datenqualität dort verankert ist, wo das tiefste fachliche Verständnis für die Daten existiert.\n\n🏢 Kernelemente eines BCBS-239-konformen Data Ownership Modells:\n• Mehrstufige Verantwortungsstruktur: Differenzierung zwischen strategischen Data Owners (typischerweise Führungskräfte mit Budget- und Personalverantwortung) und operativen Data Stewards als ausführende Instanz für das tägliche Datenqualitätsmanagement.\n• Domänenbasierter Ansatz: Strukturierung der Risikodaten in logische Domänen (z.B. Marktrisikodaten, Kreditrisikodaten, Kontrahentendaten), die jeweils einem Data Owner zugeordnet werden.\n• End-to-End-Verantwortung: Klare Zuordnung der Verantwortung für den gesamten Lebenszyklus der Daten – von der Erfassung über Transformation bis zur Berichterstattung.\n• Formalisierte Aufgabenbeschreibung: Detaillierte Definition der Aufgaben, Kompetenzen und Verantwortlichkeiten für jede Rolle im Data Ownership Modell, idealerweise verankert in offiziellen Stellenbeschreibungen.\n\n🚧 Typische Herausforderungen bei der Implementierung und Lösungsansätze:\n• Fragmentierte Datenprozesse: Bei komplexen Datenflüssen über mehrere Abteilungen hinweg ist die klare Zuordnung von Verantwortung schwierig. Lösung: Prozessorientierte Verantwortungsbereiche mit definierten Übergabepunkten und geteilten Verantwortlichkeiten.\n• Ressourcenengpässe: Data Ownership wird oft als Zusatzaufgabe ohne ausreichende Kapazitäten zugewiesen. Lösung: Explizite Berücksichtigung in Ressourcenplanung und Performance Management.\n• Kompetenzlücken: Ernannte Data Owners verfügen nicht immer über das notwendige Wissen zu Datenqualitätsmanagement. Lösung: Gezielte Schulungsprogramme und unterstützende Tools für Data Owners und Stewards.\n• Mangelnde Akzeptanz: Widerstand gegen zusätzliche Verantwortung ohne erkennbaren Nutzen. Lösung: Klare Kommunikation des Wertes und Integration in bestehende Verantwortlichkeiten und Anreizsysteme.\n\n📈 Praktische Implementierungsschritte für ein erfolgreiches Data Ownership Modell:\n• Bestandsaufnahme: Identifikation aller relevanten Risikodatendomänen und -prozesse und ihrer aktuellen Verantwortungsstrukturen\n• Gap-Analyse: Bewertung der Abdeckung durch bestehende Verantwortlichkeiten und Identifikation von Lücken\n• Rollendesign: Entwicklung eines maßgeschneiderten Data Ownership Modells mit klaren Rollenprofilen und RACI-Matrizen\n• Nominierungsprozess: Strukturierter Prozess zur Identifikation und Ernennung geeigneter Data Owners und Stewards\n• Enablement: Schulung und Coaching der Rollenträger zu ihren Aufgaben und Verantwortlichkeiten\n• Monitoring: Kontinuierliche Überwachung der Effektivität des Data Ownership Modells und Anpassung bei Bedarf"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie sollten Data Governance Gremien für BCBS-239 strukturiert werden und welche Entscheidungsprozesse haben sich bewährt?",
        answer: "Effektive Data Governance Gremien sind unverzichtbar für eine erfolgreiche BCBS-239 Implementierung, da sie die notwendigen Entscheidungsstrukturen bieten, um bereichsübergreifende Datenthemen zu koordinieren und strategische Prioritäten zu setzen. Eine durchdachte Gremienstruktur mit klaren Entscheidungsprozessen ist entscheidend für nachhaltige Compliance.\n\n🔄 Mehrstufige Gremienstruktur für optimale BCBS-239 Governance:\n• Data Governance Board (strategische Ebene): Hochrangiges Gremium mit Vertretern der Geschäftsleitung, das grundlegende strategische Entscheidungen trifft, budgetäre Prioritäten setzt und den übergreifenden Fortschritt überwacht.\n• Data Governance Council (taktische Ebene): Zentrales Steuerungsgremium mit Bereichsleitern und Senior Managern, das Richtlinien verabschiedet, Standards definiert und bei bereichsübergreifenden Konflikten entscheidet.\n• Data Quality Working Groups (operative Ebene): Fachspezifische Arbeitsgruppen, die für bestimmte Datendomänen oder -prozesse die operative Umsetzung der Datenqualitätsmaßnahmen koordinieren.\n• Special Interest Groups: Temporäre Gremien für spezifische BCBS-239 Themen wie Datenarchitektur, Metadatenmanagement oder Datenqualitätsmetriken.\n\n📝 Bewährte Governance-Prozesse und Mechanismen:\n• Eskalationspfade: Klar definierte Prozesse für die Eskalation von Datenqualitätsproblemen und Entscheidungskonflikten zwischen den Gremienebenen.\n• Entscheidungsmatrix: Formale Definition der Entscheidungsbefugnisse jedes Gremiums nach Themen und Tragweite der Entscheidung (RACI-Prinzip).\n• Regelmäßige Berichterstattung: Standardisierte Berichte über Datenqualitätsmetriken, Compliance-Status und Fortschritt von Verbesserungsmaßnahmen für jede Gremienebene.\n• Priorisierungsmechanismen: Strukturierte Methoden zur Bewertung und Priorisierung von Datenqualitätsproblemen und Verbesserungsinitiativen nach Business Impact und regulatorischem Risiko.\n\n⚙️ Praktische Gestaltungsprinzipien für wirksame Governance-Gremien:\n• Klare Mandate: Jedes Gremium benötigt ein formales Mandat mit definierten Zielen, Verantwortlichkeiten und Befugnissen.\n• Optimale Größe und Zusammensetzung: Balance zwischen Repräsentativität aller relevanten Stakeholder und Handlungsfähigkeit (typischerweise 8-12 Mitglieder für den Data Governance Council).\n• Sitzungsfrequenz: Angemessene Tagungshäufigkeit je nach Gremienebene (monatlich für operative Gremien, quartalsweise für strategische Ebenen).\n• Verbindlichkeit: Formalisierte Entscheidungsprozesse mit dokumentierten Beschlüssen und nachverfolgbaren Aktionspunkten.\n• Vorbereitete Agenda: Strukturierte Sitzungsvorbereitung mit vorab verteilten Unterlagen und klarem Fokus auf Entscheidungspunkte.\n\n🌟 Best Practices aus erfolgreichen BCBS-239 Implementierungen:\n• Integration in bestehende Gremienlandschaft: Vermeidung von Parallelstrukturen durch Anknüpfung an existierende Risikomanagement- oder IT-Governance-Gremien.\n• Rotierendes Chairmanship: Wechselnder Vorsitz im Data Governance Council zwischen verschiedenen Geschäftsbereichen fördert die bereichsübergreifende Akzeptanz.\n• Formalisierte Stakeholder-Einbindung: Systematische Konsultationsprozesse für wichtige Entscheidungen, die breite Akzeptanz sicherstellen.\n• Transparenz über Entscheidungen: Breite Kommunikation von Governance-Entscheidungen in der Organisation zur Förderung der Akzeptanz und Umsetzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können Finanzinstitute sicherstellen, dass ihre Data Governance Rollen nicht nur formal definiert, sondern auch nachhaltig und wirksam implementiert werden?",
        answer: "Die nachhaltige Implementierung von Data Governance Rollen geht weit über die formale Definition von Aufgaben und Verantwortlichkeiten hinaus. Sie erfordert einen ganzheitlichen Change-Management-Ansatz, der kulturelle, organisatorische und prozessuale Aspekte berücksichtigt, um sicherzustellen, dass die Rollen dauerhaft und wirksam gelebt werden.\n\n🔄 Erfolgsfaktoren für nachhaltige Rollenimplementierung:\n• Executive Sponsorship: Aktive und sichtbare Unterstützung durch die oberste Führungsebene signalisiert die strategische Bedeutung der Datengovernance und schafft die notwendige Aufmerksamkeit und Priorisierung.\n• Klare Anreizstrukturen: Integration von Datenqualitäts- und Governance-Zielen in Leistungsbeurteilungen und Vergütungssysteme der Rollenträger erhöht die Verbindlichkeit und Priorität.\n• Kapazitätsmanagement: Realistische Allokation von Zeit und Ressourcen für Governance-Aufgaben, idealerweise mit dedizierten Stellenanteilen statt als Nebentätigkeit.\n• Kontinuierliche Entwicklung: Regelmäßige Schulungen und Weiterbildungen für Rollenträger zu regulatorischen Anforderungen, Methodenwissen und Best Practices.\n\n💡 Kulturelle Verankerung von Datenverantwortung:\n• Awareness-Kampagnen: Organisationsweite Kommunikation zur Bedeutung von Datenqualität und den Konsequenzen unzureichender Governance für die BCBS-239 Compliance.\n• Erfolgsgeschichten: Aktive Kommunikation von positiven Beispielen, wo gute Datengovernance zu messbaren Verbesserungen in Geschäftsprozessen oder Compliance geführt hat.\n• Community Building: Etablierung von Netzwerken und Austauschplattformen für Data Owners und Stewards zum Wissensaustausch und zur gegenseitigen Unterstützung.\n• Führungskräfte als Vorbilder: Aktive Demonstration der Bedeutung von Datenqualität durch das Management in ihrem eigenen Handeln und Entscheiden.\n\n📋 Operative Unterstützungsmechanismen:\n• Governance-Tooling: Bereitstellung dedizierter Tools für das Datenqualitätsmanagement, die den Rollenträgern ihre Aufgaben erleichtern (z.B. Datenqualitäts-Dashboards, Issue-Management-Systeme).\n• Klare Prozesse: Detaillierte Beschreibung der Kernprozesse wie Issue-Management, Datenaggregation und Qualitätskontrolle mit klaren Verantwortlichkeiten.\n• Support-Strukturen: Zentrale Anlaufstellen und Expertenteams, die Rollenträger bei komplexen Fragestellungen oder Herausforderungen unterstützen.\n• Dokumentation und Guidelines: Umfassende, leicht zugängliche Dokumentation aller relevanten Standards, Prozesse und Verantwortlichkeiten.\n\n🔍 Kontinuierliches Monitoring und Anpassung:\n• Rolleneffektivitäts-Assessments: Regelmäßige Bewertung der Wirksamkeit der Governance-Rollen durch Befragungen, Audits und Performance-Analysen.\n• Feedback-Mechanismen: Strukturierte Sammlung von Rückmeldungen der Rollenträger zu Herausforderungen und Verbesserungspotentialen.\n• Rollenevolution: Kontinuierliche Anpassung und Weiterentwicklung der Rollenprofile und Governance-Prozesse basierend auf praktischen Erfahrungen und sich ändernden Anforderungen.\n• Regelmäßige Reifegradmessung: Systematische Bewertung des Reifegrads der Datengovernance anhand etablierter Reifegradmodelle zur Identifikation von Verbesserungspotenzialen."
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
