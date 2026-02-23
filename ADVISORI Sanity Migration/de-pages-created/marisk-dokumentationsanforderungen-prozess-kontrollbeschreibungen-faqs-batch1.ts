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
    console.log('Updating MaRisk Dokumentationsanforderungen page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-dokumentationsanforderungen-prozess-kontrollbeschreibungen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind qualitativ hochwertige Prozess- und Kontrollbeschreibungen für die MaRisk-Compliance entscheidend und wie unterstützt ADVISORI bei deren Erstellung?",
        answer: "Fundierte Prozess- und Kontrollbeschreibungen sind nicht nur ein formales Erfordernis der MaRisk, sondern ein zentraler Erfolgsfaktor für ein wirksames Risikomanagement und die Erfüllung regulatorischer Anforderungen. Sie bilden das Rückgrat eines nachhaltigen Compliance-Managements und sind entscheidend für die operative Umsetzung von Kontrollaktivitäten.\n\n* Regulatorische Bedeutung qualitativ hochwertiger Dokumentation:\n• Konkrete MaRisk-Anforderung: AT 4.3.1 fordert explizit eine angemessene und nachvollziehbare Dokumentation der Aufbau- und Ablauforganisation sowie der Prozesse des Risikomanagements und Internen Kontrollsystems.\n• Prüfungsfokus der Aufsicht: Dokumentationsqualität ist ein primärer Fokuspunkt bei Prüfungen durch BaFin und Bundesbank, da die Dokumentation die Nachvollziehbarkeit und Angemessenheit des gesamten Risikomanagementsystems belegt.\n• Nachweispflicht: Bei fehlender oder unzureichender Dokumentation gilt der regulatorische Grundsatz: \"Was nicht dokumentiert ist, existiert nicht\" - selbst wenn Prozesse und Kontrollen in der Praxis funktionieren.\n• Basis für Wirksamkeitsprüfungen: Eine präzise Dokumentation ist unverzichtbare Grundlage für die Prüfung der Wirksamkeit von Kontrollen durch Interne Revision und externe Prüfer.\n\n* Der ADVISORI-Ansatz für exzellente Dokumentation:\n• Methodische Erfassung: Wir nutzen strukturierte Methoden und Workshops, um alle relevanten Prozessinformationen systematisch zu erfassen und Dokumentationslücken zu identifizieren.\n• End-to-End-Betrachtung: Unsere Dokumentationsansätze berücksichtigen die gesamte Prozesskette, einschließlich Schnittstellen und Verantwortlichkeiten über Abteilungsgrenzen hinweg.\n• Integriertes Risiko-Kontroll-Mapping: Wir verknüpfen Prozesse systematisch mit identifizierten Risiken und implementierten Kontrollen, um die Risikoadressierung transparent darzustellen.\n• Standardisierte Vorlagen: Wir entwickeln maßgeschneiderte, praxiserprobte Dokumentationsvorlagen, die sowohl regulatorische Anforderungen erfüllen als auch eine effiziente Erstellung und Pflege ermöglichen.\n• Schulung und Wissenstransfer: Wir befähigen Ihre Mitarbeiter, die Dokumentationsmethodik selbständig anzuwenden und weiterzuentwickeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Mindestinhalte müssen MaRisk-konforme Prozess- und Kontrollbeschreibungen enthalten und wie stellt ADVISORI deren Vollständigkeit sicher?",
        answer: "MaRisk-konforme Dokumentation ist mehr als eine Auflistung von Arbeitsschritten - sie muss alle relevanten Aspekte der Risikokontrollumgebung umfassend und nachvollziehbar abbilden. Die Herausforderung liegt in der Balance zwischen Detailtiefe und praktischer Nutzbarkeit sowie in der konsistenten Strukturierung über alle Prozessbereiche hinweg.\n\n* Essentielle Elemente MaRisk-konformer Prozessdokumentation:\n• Prozessverantwortlichkeiten: Klare Benennung des Prozessverantwortlichen sowie der ausführenden Rollen unter Berücksichtigung der Funktionstrennung (MaRisk AT 4.3.1).\n• Prozessdetails und -abläufe: Systematische Darstellung der Prozessschritte, Entscheidungspunkte und Prozessschnittstellen mit definierten Ein- und Ausgaben.\n• Risikobewertung: Identifikation und Bewertung prozessspezifischer Risiken hinsichtlich Eintrittswahrscheinlichkeit und Auswirkung sowie deren Kategorisierung nach MaRisk-relevanten Risikoarten.\n• Kontrollaktivitäten: Detaillierte Beschreibung implementierter Kontrollen inklusive Kontrollart (präventiv, detektiv), Frequenz, Durchführungsverantwortung und Dokumentationsanforderungen.\n• Kontrollnachweise: Definition der Kontrollnachweise, die zur Dokumentation der Kontrolldurchführung erstellt und aufbewahrt werden müssen.\n• IT-Systeme und Daten: Darstellung eingesetzter Systeme, Schnittstellen und kritischer Datenflüsse im Kontext des Prozesses.\n• Eskalationswege: Dokumentation definierter Eskalationspfade bei Prozessstörungen oder Kontrollabweichungen.\n\n* ADVISORI-Qualitätssicherungsansatz:\n• Strukturierte Assessment-Methodik: Wir nutzen eine mehrstufige Methodik zur systematischen Erfassung aller regulatorisch erforderlichen Dokumentationselemente.\n• MaRisk-Compliance-Check: Prüfung der Dokumentation gegen einen umfassenden Kriterienkatalog, der direkt aus den MaRisk-Anforderungen abgeleitet ist.\n• Konsistenzprüfung: Sicherstellung einer einheitlichen Detailtiefe und Struktur über alle Prozessbereiche hinweg.\n• Lückenanalyse: Systematische Identifikation fehlender Dokumentationselemente durch Abgleich mit Best-Practice-Mustern und aufsichtlichen Erwartungen.\n• Vier-Augen-Prinzip: Konsequente Anwendung des Vier-Augen-Prinzips bei der Erstellung und Überprüfung der Dokumentation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie lassen sich Prozess- und Kontrolldokumentation effizient mit dem IKS integrieren und wie unterstützt ADVISORI die Schaffung eines durchgängigen Kontrollnachweises?",
        answer: "Eine isolierte Betrachtung von Prozessdokumentation und Internem Kontrollsystem (IKS) führt häufig zu Redundanzen, Inkonsistenzen und ineffizienten Kontrollaktivitäten. Die nahtlose Integration beider Elemente ist entscheidend für ein wirksames Risikomanagement gemäß MaRisk und schafft die Grundlage für einen lückenlosen Kontrollnachweis gegenüber der Aufsicht.\n\n* Integrationsansatz für Prozesse und Kontrollen:\n• Risikoorientierte Prozessanalyse: Systematische Identifikation von Schlüsselrisiken innerhalb der dokumentierten Prozesse als Ausgangspunkt für die Ableitung notwendiger Kontrollen.\n• End-to-End-Kontrollketten: Entwicklung durchgängiger Kontrollketten, die den gesamten Prozessverlauf und alle relevanten Risikofelder abdecken und Kontrollücken eliminieren.\n• Mehrstufige Kontrollarchitektur: Integration der Three Lines of Defense in die Prozessdokumentation mit klarer Zuordnung von Kontrollen zu den entsprechenden Verteidigungslinien.\n• Kontrollkatalog-Mapping: Verknüpfung der Prozessdokumentation mit einem zentralen Kontrollkatalog, der als Single Point of Truth für alle IKS-relevanten Informationen dient.\n• Schlüsselkontroll-Framework: Identifikation und besondere Hervorhebung von Schlüsselkontrollen, die für die Risikomitigierung besonders kritisch sind und entsprechend prioritisiert überwacht werden müssen.\n\n* ADVISORI-Ansatz für lückenlose Kontrolldokumentation:\n• Methodische Kontrollbeschreibung: Wir entwickeln standardisierte Kontrollbeschreibungen, die alle wesentlichen Kontrollattribute (Ziel, Frequenz, Verantwortlichkeit, Nachweise) konsistent erfassen.\n• Kontroll-Risiko-Matrix: Erstellung von Kontroll-Risiko-Matrizen, die die Abdeckung identifizierter Risiken durch implementierte Kontrollen transparent darstellen.\n• Nachweis-Management-System: Konzeption eines strukturierten Systems zur Verwaltung von Kontrollnachweisen, das die Nachvollziehbarkeit und Prüfbarkeit der Kontrolldurchführung sicherstellt.\n• Kontrollschwächen-Tracking: Implementierung eines systematischen Prozesses zur Erfassung, Bewertung und Nachverfolgung identifizierter Kontrollschwächen bis zu deren Behebung.\n• IT-gestützte Dokumentation: Beratung bei der Auswahl und Implementierung geeigneter IT-Lösungen zur integrierten Verwaltung von Prozess- und Kontrolldokumentation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Revision bestehender Dokumentation und welche Best Practices werden dabei angewendet, um sie MaRisk-konform zu gestalten?",
        answer: "Viele Finanzinstitute verfügen bereits über umfangreiche Prozess- und Kontrolldokumentationen, die jedoch oft historisch gewachsen, fragmentiert und nicht vollständig MaRisk-konform sind. Die Überarbeitung dieser Dokumentation erfordert einen strukturierten Ansatz, der bestehende Werte erhält und gleichzeitig regulatorische Lücken systematisch schließt.\n\n* Strategischer Revisionsansatz für bestehende Dokumentation:\n• Gap-Analyse-Methodik: Wir führen eine systematische Bewertung Ihrer vorhandenen Dokumentation gegen aktuelle MaRisk-Anforderungen und aufsichtliche Erwartungen durch, um Lücken präzise zu identifizieren.\n• Priorisierungsframework: Entwicklung eines strukturierten Frameworks zur Priorisierung von Dokumentationsanpassungen basierend auf regulatorischer Kritikalität und operativem Risiko.\n• Dokumentationsoptimierung: Identifikation von Redundanzen, Inkonsistenzen und Überregulierung in bestehenden Dokumenten mit dem Ziel, die Dokumentation zu verschlanken und zu fokussieren.\n• Change-Impact-Analyse: Bewertung der Auswirkungen von Dokumentationsänderungen auf verbundene Prozesse, Kontrollen und IT-Systeme, um unbeabsichtigte Nebeneffekte zu vermeiden.\n• Stakeholder-Management: Strukturierte Einbindung relevanter Fachbereiche und Schlüsselpersonen, um deren Expertise zu nutzen und die Akzeptanz der überarbeiteten Dokumentation zu fördern.\n\n* ADVISORI Best Practices für MaRisk-konforme Dokumentation:\n• Modulare Dokumentationsstruktur: Entwicklung einer modularen Struktur, die die Pflege und Aktualisierung einzelner Dokumentationskomponenten erleichtert, ohne das Gesamtsystem zu beeinträchtigen.\n• Layered Documentation Approach: Implementierung eines mehrschichtigen Dokumentationsansatzes mit unterschiedlichen Detailierungsgraden für verschiedene Zielgruppen (Überblick für Management, Details für operative Ebene).\n• Prozess-Risiko-Kontroll-Integration: Konsequente Verknüpfung von Prozessbeschreibungen mit Risikobewertungen und Kontrollmechanismen in einem integrierten Dokumentationsrahmen.\n• Governance-Integration: Einbettung der Dokumentation in einen übergeordneten Governance-Rahmen mit klaren Verantwortlichkeiten für Erstellung, Qualitätssicherung, Freigabe und regelmäßige Überprüfung.\n• Nachhaltige Dokumentationspflege: Etablierung eines kontinuierlichen Prozesses zur regelmäßigen Aktualisierung und Validierung der Dokumentation, um deren Aktualität und Relevanz dauerhaft sicherzustellen."
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
