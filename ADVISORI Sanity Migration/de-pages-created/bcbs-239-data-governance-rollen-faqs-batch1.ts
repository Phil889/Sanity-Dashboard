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
    console.log('Updating BCBS-239 Data Governance Rollen page with FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist die korrekte Implementierung von Data Governance Rollen für die BCBS-239 Compliance so kritisch und wie unterstützt ADVISORI dabei?",
        answer: "Die BCBS-239 Regulierung fordert explizit ein robustes Data Governance Framework, das klare Verantwortlichkeiten für Risikodatenqualität und -management auf allen Organisationsebenen festlegt. Eine unzureichende Definition und Implementierung von Governance-Rollen ist laut unserer Erfahrung einer der Hauptgründe für aufsichtsrechtliche Beanstandungen und ineffektive BCBS-239 Programme.\n\n🔍 Kritische Bedeutung klar definierter Governance-Rollen:\n• Regulatorische Compliance: Die Prinzipien 1 und 2 der BCBS-239 Richtlinie fordern explizit klare Verantwortlichkeiten und eine starke Governance für Risikodaten – ohne ein durchdachtes Rollenkonzept ist eine Compliance nicht erreichbar.\n• Nachhaltige Implementierung: Eine rein technische Umsetzung ohne klare organisatorische Verankerung führt nachweislich zu einer oberflächlichen Compliance ohne nachhaltige Wirkung.\n• Effektive Entscheidungsprozesse: Klar definierte Rollen ermöglichen schnellere und fundierte Entscheidungen bei Datenqualitätsproblemen und beschleunigen die Eskalation kritischer Issues.\n• Kulturelle Verankerung: Erst durch die Etablierung dedizierter Rollen wird Datenqualitätsverantwortung zu einem integralen Teil der Unternehmenskultur.\n\n💼 Der ADVISORI-Ansatz für optimale BCBS-239 Governance-Rollen:\n• Ganzheitliches Rollenkonzept: Wir entwickeln ein umfassendes Governance-Modell, das von der Vorstandsebene (Board Governance) über das mittlere Management (Executive Governance) bis zur operativen Ebene (Operational Governance) reicht.\n• Maßgeschneiderte Rollendefinition: Statt generischer Rollenmodelle analysieren wir Ihre spezifische Organisationsstruktur und entwickeln ein passgenaues Konzept, das bestehende Verantwortlichkeiten berücksichtigt und optimal ergänzt.\n• Präzise Verantwortungsabgrenzung: Wir definieren detaillierte RACI-Matrizen, die für jeden Aspekt des Risikodatenmanagements klare Zuständigkeiten festlegen und Überlappungen oder Lücken eliminieren.\n• Change-Management-Fokus: Neben der formalen Rollendefinition unterstützen wir Sie bei der nachhaltigen Implementierung durch zielgerichtete Kommunikation, Schulung und Begleitung der Rollenträger."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Data Governance Rollen sind für die BCBS-239 Compliance zentral und wie sollten diese optimal ausgestaltet werden?",
        answer: "Für eine effektive BCBS-239 Compliance ist ein differenziertes Set von Governance-Rollen erforderlich, die zusammen alle Aspekte des Risikodatenmanagements abdecken. Die Herausforderung liegt nicht nur in der formalen Definition dieser Rollen, sondern in ihrer wirksamen Integration in bestehende Organisationsstrukturen und der präzisen Abgrenzung ihrer Verantwortlichkeiten.\n\n👑 Kernrollen eines effektiven BCBS-239 Governance-Modells:\n• Chief Data Officer (CDO): Gesamtverantwortung für die Datengovernance-Strategie und übergreifende Datenqualitätsstandards. Der CDO sollte direkt an den Vorstand berichten und mit ausreichender Autorität und Ressourcen ausgestattet sein, um organisationsweite Veränderungen durchzusetzen.\n• Data Owner: Geschäftsseitige Verantwortliche für definierte Datenbereiche, die die fachliche Korrektheit, Bedeutung und Verwendung der Daten sicherstellen. Idealerweise sind dies Führungskräfte auf Bereichsleiterebene mit tiefem Geschäftsverständnis.\n• Data Steward: Operative Verantwortliche, die als verlängerter Arm der Data Owner das tägliche Datenqualitätsmanagement koordinieren, Probleme identifizieren und Lösungen vorantreiben. Diese Rolle erfordert sowohl fachliches als auch technisches Verständnis.\n• IT Data Custodian: Technische Verantwortliche für die Implementierung und Wartung der Systeme zur Risikodatenaggregation und -speicherung, die die technische Qualität und Verfügbarkeit der Daten sicherstellen.\n\n🔄 Governance-Gremien und Entscheidungsstrukturen:\n• Data Governance Council: Hochrangiges Entscheidungsgremium mit Vertretern aus allen relevanten Geschäftsbereichen, das strategische Prioritäten setzt und bei bereichsübergreifenden Konflikten entscheidet.\n• Data Quality Working Group: Operatives Gremium zur regelmäßigen Überwachung der Datenqualität, Identifikation von Trends und Koordination von Verbesserungsmaßnahmen.\n• Regulatory Reporting Committee: Spezialisiertes Gremium zur Sicherstellung der regulatorischen Compliance und Qualität der aufsichtsrechtlichen Berichterstattung.\n\n📋 Kritische Erfolgsfaktoren bei der Rollengestaltung:\n• Klare Hierarchie und Eskalationswege zwischen den verschiedenen Rollenebenen\n• Dedizierte Kapazitäten für die Rollenträger, anstatt Governance-Aufgaben als Nebentätigkeit zu behandeln\n• Formale Verankerung der Datengovernance-Verantwortlichkeiten in Stellenbeschreibungen und Leistungsbeurteilungen\n• Regelmäßige Schulung und Weiterbildung der Rollenträger zu regulatorischen Anforderungen und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lässt sich ein BCBS-239-konformes Rollenkonzept in bestehende Organisationsstrukturen integrieren und welche Herausforderungen sind dabei zu überwinden?",
        answer: "Die Integration eines BCBS-239-konformen Rollenkonzepts in bestehende Organisationsstrukturen ist eine komplexe Change-Management-Aufgabe. Der Schlüssel zum Erfolg liegt in einer sorgfältigen Balance zwischen regulatorischen Anforderungen und organisatorischer Realität, um ein Governance-Modell zu entwickeln, das sowohl compliant als auch praktisch umsetzbar ist.\n\n🔄 Strategische Integrationsansätze:\n• Evolutionärer vs. revolutionärer Ansatz: Die Integration kann entweder durch schrittweise Erweiterung bestehender Rollen oder durch Etablierung komplett neuer Governance-Strukturen erfolgen. Der optimale Ansatz hängt vom Reifegrad Ihrer bestehenden Datengovernance und der Dringlichkeit der Compliance-Anforderungen ab.\n• Zentrales vs. dezentrales Modell: Die Governance-Verantwortlichkeiten können entweder in einer zentralen Einheit gebündelt oder auf verschiedene Geschäftsbereiche verteilt werden. Häufig ist ein hybrides Modell am effektivsten, mit zentraler strategischer Steuerung und dezentraler operativer Umsetzung.\n• Organisatorische Verankerung: Die optimale Positionierung von Schlüsselrollen wie dem Chief Data Officer variiert – mögliche Ansätze sind die Ansiedlung im Risikomanagement, in der IT oder als eigenständige Funktion mit direkter Vorstandsberichtslinie.\n\n🚧 Typische Herausforderungen und Lösungsansätze:\n• Widerstand gegen neue Verantwortlichkeiten: Durch frühzeitige Einbindung der Stakeholder, klare Kommunikation des Nutzens und Anerkennung des zusätzlichen Aufwands können Widerstände überwunden werden.\n• Kompetenzlücken der Rollenträger: Gezielte Schulungsprogramme und anfängliche externe Unterstützung helfen, die erforderlichen Fähigkeiten aufzubauen und Unsicherheiten zu reduzieren.\n• Überlappung mit bestehenden Rollen: Eine sorgfältige Analyse der bestehenden Governance-Strukturen und klare RACI-Matrizen verhindern Konflikte und Ineffizienzen.\n• Ressourcenknappheit: Die Priorisierung kritischer Governance-Funktionen und ein phasenweiser Implementierungsansatz können helfen, den Ressourcenbedarf zu managen.\n\n📈 ADVISORIs bewährte Implementierungsmethodik:\n• Assessment-Phase: Detaillierte Analyse der bestehenden Governance-Strukturen, Rollen und Verantwortlichkeiten\n• Design-Phase: Entwicklung eines maßgeschneiderten Zielmodells mit klaren Rollenprofilen und Entscheidungsprozessen\n• Transition-Planung: Erarbeitung einer schrittweisen Überführung vom Ist- zum Zielzustand mit konkreten Meilensteinen\n• Pilotierung: Testweise Implementierung in ausgewählten Bereichen zur Validierung und Feinjustierung des Modells\n• Skalierung: Schrittweise Ausweitung auf alle relevanten Organisationsbereiche mit kontinuierlicher Unterstützung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie misst und überwacht man die Effektivität von BCBS-239 Governance-Rollen und welche KPIs empfiehlt ADVISORI für ein nachhaltiges Governance-Monitoring?",
        answer: "Ein effektives Monitoring der BCBS-239 Governance-Rollen ist unerlässlich, um deren Wirksamkeit zu bewerten, frühzeitig Schwachstellen zu identifizieren und kontinuierliche Verbesserungen zu ermöglichen. Die richtigen Kennzahlen ermöglichen nicht nur die Messung der regulatorischen Compliance, sondern schaffen auch Transparenz über den Mehrwert des Governance-Modells für die Organisation.\n\n📊 Zentrale KPIs für das BCBS-239 Governance-Monitoring:\n• Rollenabdeckung: Prozentualer Anteil der Risikodaten-Domänen mit vollständig besetzten Governance-Rollen (Data Owner, Data Steward, etc.)\n• Governance-Aktivitätsmetriken: Häufigkeit und Effektivität von Governance-Gremien, gemessen an Sitzungsfrequenz, Teilnahmequoten und Entscheidungsraten\n• Issue-Management-Metriken: Durchschnittliche Zeit zur Lösung von Datenqualitätsproblemen, Rückfallquoten und Eskalationsstatistiken\n• Audit-Ergebnisse: Anzahl und Schweregrad der Governance-bezogenen Audit-Findings und deren Behebungsrate\n• Reifegradentwicklung: Regelmäßige Selbstbewertung oder externe Bewertung des Governance-Reifegrads anhand eines strukturierten Reifegradmodells\n\n🔍 Qualitative Bewertungsdimensionen:\n• Klarheit der Verantwortlichkeiten: Befragung der Rollenträger und Stakeholder zur wahrgenommenen Klarheit der Aufgaben und Entscheidungsbefugnisse\n• Kulturelle Verankerung: Bewertung der Verankerung von Datenqualitätsverantwortung in der Unternehmenskultur durch regelmäßige Mitarbeiterbefragungen\n• Regulatorisches Feedback: Systematische Erfassung und Analyse von Rückmeldungen der Aufsichtsbehörden zu Governance-Aspekten\n• Geschäftlicher Mehrwert: Bewertung der wahrgenommenen Verbesserung der Entscheidungsqualität durch verbesserte Datengovernance\n\n📈 ADVISORIs Empfehlungen für ein nachhaltiges Governance-Monitoring:\n• Monitoring-Dashboard: Implementierung eines integrierten Dashboards, das sowohl quantitative KPIs als auch qualitative Bewertungen zusammenführt und Trends visualisiert\n• Regelmäßige Governance-Reviews: Vierteljährliche tiefgehende Bewertung der Governance-Effektivität mit allen relevanten Stakeholdern\n• Peer-Benchmarking: Vergleich Ihres Governance-Modells und dessen Wirksamkeit mit Best Practices anderer Finanzinstitute\n• Continuous Improvement Cycle: Etablierung eines strukturierten Prozesses zur kontinuierlichen Verbesserung der Governance-Strukturen basierend auf Monitoring-Ergebnissen"
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
