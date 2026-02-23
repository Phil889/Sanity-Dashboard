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
    console.log('Updating EBA Eskalations- & Kommunikationsstrukturen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-eskalations-kommunikationsstrukturen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-eskalations-kommunikationsstrukturen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir als Finanzinstitut sicherstellen, dass unsere Kommunikationsstrukturen auch in Krisenszenarien effektiv funktionieren und regulatorische Anforderungen erfüllen?",
        answer: "Krisenrobuste Kommunikationsstrukturen stellen einen kritischen Erfolgsfaktor für die Bewältigung außergewöhnlicher Situationen dar und sind zugleich ein zentrales Element regulatorischer Erwartungen. Die Herausforderung besteht darin, Kommunikationssysteme zu entwickeln, die gerade dann zuverlässig funktionieren, wenn normale Betriebsabläufe gestört sind und Entscheidungen unter hohem Zeit- und Handlungsdruck getroffen werden müssen.\n\n🛡️ Kernelemente krisenresilienter Kommunikationsstrukturen:\n• Redundanz und Ausfallsicherheit: Implementierung mehrfach redundanter Kommunikationskanäle und -systeme, die auch bei Ausfall primärer Infrastrukturen funktionsfähig bleiben und einen unterbrechungsfreien Informationsfluss gewährleisten.\n• Eskalationsdynamik: Entwicklung adaptiver Eskalationsmechanismen, die sich an die Intensität und Entwicklung der Krisensituation anpassen, mit progressiven Triggern, beschleunigten Entscheidungswegen und automatisierten Eskalationsstufen.\n• Krisenkommunikationsteams: Bildung dedizierter Teams mit klar definierten Rollen, Verantwortlichkeiten und Vertretungsregelungen, die speziell für die Steuerung der internen und externen Kommunikation in Krisensituationen geschult sind.\n• Regulatorische Schnittstellen: Etablierung direkter Kommunikationslinien zu relevanten Aufsichtsbehörden mit definierten Ansprechpartnern, Meldepflichten und Kommunikationsprotokollen für verschiedene Krisenszenarien.\n\n🔄 Implementierungsstrategien für krisenrobuste Kommunikationsstrukturen:\n• Szenariobasierte Entwicklung: Ableitung spezifischer Kommunikationsanforderungen aus realistischen Krisenszenarien unterschiedlicher Intensität und Art, von Systemausfällen über Liquiditätskrisen bis hin zu Cyberangriffen und operationellen Störfällen.\n• Dokumentierte Krisenkommunikationspläne: Erstellung detaillierter, aber praxistauglicher Kommunikationspläne mit klaren Aktivierungskriterien, Verantwortlichkeiten, Kommunikationsmatrizen und vorbereiteten Kommunikationsvorlagen für typische Krisenszenarien.\n• Regelmäßige Krisensimulationen: Durchführung realistischer Übungen und Simulationen, die die Funktionsfähigkeit der Kommunikationsstrukturen unter Stressbedingungen testen und Verbesserungspotenziale identifizieren.\n• Technologische Resilienzsicherung: Implementierung krisenfester Kommunikationstechnologien mit dezentralen Backup-Systemen, offline-fähigen Komponenten und alternativen Kommunikationswegen, die unabhängig von der primären IT-Infrastruktur funktionieren.\n\nDurch die systematische Implementation dieser Elemente schaffen Sie Kommunikationsstrukturen, die nicht nur regulatorische Anforderungen erfüllen, sondern einen echten Wettbewerbsvorteil in Krisensituationen darstellen, indem sie schnelle, fundierte Entscheidungen ermöglichen, das Vertrauen von Stakeholdern sichern und die Handlungsfähigkeit Ihres Instituts auch unter extremen Bedingungen gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche technologischen Lösungen empfiehlt ADVISORI für die Digitalisierung und Automatisierung von Eskalations- und Kommunikationsstrukturen?",
        answer: "Die Digitalisierung von Eskalations- und Kommunikationsstrukturen repräsentiert einen Paradigmenwechsel von reaktiven, manuellen Prozessen zu proaktiven, intelligenten Systemen. Moderne Technologielösungen können die Effizienz, Konsistenz und Wirksamkeit dieser kritischen Strukturen signifikant verbessern und gleichzeitig die regulatorische Compliance stärken und nachhaltig sichern.\n\n💻 Schlüsseltechnologien für moderne Eskalations- und Kommunikationsstrukturen:\n• Integrierte GRC-Plattformen: Spezialisierte Governance, Risk & Compliance-Systeme mit konfigurierbaren Workflow-Engines, die automatisierte Eskalationspfade, Frühwarnsysteme und Compliance-Monitoring in einer einheitlichen Plattform integrieren.\n• Kommunikations- und Kollaborationsplattformen: Moderne Enterprise-Lösungen, die verschiedene Kommunikationskanäle (Chat, Video, Audio, Dokumentenaustausch) mit strukturierten Workflows, Versionskontrolle und Audit-Trails verbinden.\n• Process Mining und Analytik: Fortschrittliche Analysewerkzeuge, die Kommunikations- und Eskalationsprozesse kontinuierlich überwachen, Muster erkennen und Optimierungspotenziale identifizieren, basierend auf Echtzeit-Daten und historischen Trends.\n• Low-Code/No-Code Entwicklungsplattformen: Flexible Systeme, die die agile Entwicklung und kontinuierliche Anpassung von Kommunikations- und Eskalationsprozessen ohne tiefgreifende IT-Kenntnisse ermöglichen.\n\n🔧 ADVISORIs technologischer Lösungsansatz:\n• Architekturfokussierte Technologieberatung: Wir entwickeln eine maßgeschneiderte Technologiearchitektur, die die spezifischen Anforderungen Ihres Instituts berücksichtigt und bestehende Systeme optimal integriert, statt isolierte Punktlösungen zu implementieren.\n• Modularer Implementierungsansatz: Realisierung eines stufenweisen Transformationspfads mit schnell umsetzbaren Quick Wins und langfristigen Strukturverbesserungen, der unmittelbare Effizienzgewinne mit strategischer Transformation verbindet.\n• Hybride Lösungsmodelle: Kombination kommerzieller Standardsoftware mit maßgeschneiderten Komponenten, die spezifische regulatorische oder institutsspezifische Anforderungen adressieren und ein optimales Verhältnis von Standardisierung und Individualisierung schaffen.\n• KI und Automatisierung: Integration intelligenter Technologien wie Natural Language Processing für die automatisierte Analyse von Kommunikationsinhalten, prädiktive Analytik für Frühwarnsysteme und Robotic Process Automation für repetitive Compliance-Aufgaben.\n\nDurch die strategische Implementierung dieser Technologien unterstützt ADVISORI Sie dabei, Ihre Eskalations- und Kommunikationsstrukturen von statischen Prozessen zu dynamischen, adaptiven Systemen zu transformieren, die nicht nur regulatorische Anforderungen erfüllen, sondern auch operative Effizienz steigern und die Entscheidungsfähigkeit Ihrer Organisation signifikant verbessern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Wirksamkeit und Effizienz unserer Eskalations- und Kommunikationsstrukturen messen und kontinuierlich verbessern?",
        answer: "Die kontinuierliche Evaluation und Optimierung von Eskalations- und Kommunikationsstrukturen erfordert einen systematischen Messansatz, der sowohl quantitative als auch qualitative Dimensionen erfasst. Eine datengestützte Performance-Messung bildet die Grundlage für gezielte Verbesserungen und ermöglicht es, die Wirksamkeit implementierter Strukturen objektiv zu bewerten und regulatorischen Anforderungen nachweisbar zu genügen.\n\n📊 Schlüsselindikatoren zur Leistungsmessung:\n• Prozesseffizienz-Metriken: Quantitative Kennzahlen wie Durchlaufzeiten von Eskalationen, Time-to-Resolution für identifizierte Probleme, Anzahl der Eskalationsstufen bis zur Lösung und Ressourcenaufwand pro Eskalationsvorgang.\n• Kommunikationsqualität-Indikatoren: Messgrößen zur Beurteilung der Informationsqualität wie Vollständigkeit, Genauigkeit, Aktualität und Relevanz der kommunizierten Informationen über verschiedene Eskalationsstufen hinweg.\n• Compliance-Kennzahlen: Metriken zur Bewertung der regulatorischen Konformität wie Einhaltung von Meldepflichten, Dokumentationsqualität, Transparenz von Entscheidungsprozessen und Nachvollziehbarkeit von Eskalationswegen.\n• Kulturelle Indikatoren: Messgrößen zur Beurteilung der Eskalationskultur wie Anzahl proaktiver Meldungen, Offenheit der Kommunikation und Akzeptanz der Eskalationswege auf verschiedenen Organisationsebenen.\n\n🔄 Framework für kontinuierliche Verbesserung:\n• Systematisches Monitoring: Implementierung eines kontinuierlichen Überwachungssystems mit Echtzeit-Dashboards, die Schlüsselindikatoren visualisieren und Abweichungen von definierten Zielwerten automatisch signalisieren.\n• Post-Incident-Analysen: Strukturierte Aufarbeitung signifikanter Eskalationsereignisse mit Root-Cause-Analysen, Lessons-Learned-Workshops und systematischer Dokumentation von Verbesserungspotenzialen.\n• Regelmäßige Wirksamkeitstests: Durchführung periodischer Simulationen und Stresstests, die die Reaktionsfähigkeit und Belastbarkeit der Eskalations- und Kommunikationsstrukturen unter verschiedenen Szenarien evaluieren.\n• Feedbackschleifen: Etablierung systematischer Feedbackmechanismen, die Erfahrungen und Verbesserungsvorschläge von Prozessbeteiligten auf allen Ebenen erfassen und in den Optimierungszyklus einspeisen.\n\nDurch die Implementierung dieses mehrdimensionalen Mess- und Verbesserungsansatzes transformieren Sie Ihre Eskalations- und Kommunikationsstrukturen von statischen Regelwerken zu dynamischen, lernenden Systemen, die sich kontinuierlich an veränderte regulatorische Anforderungen, organisatorische Entwicklungen und neue Risikoszenarien anpassen und dabei sowohl Compliance als auch operative Exzellenz sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche organisatorischen und kulturellen Faktoren sind entscheidend für die erfolgreiche Implementierung und Akzeptanz neuer Eskalations- und Kommunikationsstrukturen?",
        answer: "Die erfolgreiche Implementierung effektiver Eskalations- und Kommunikationsstrukturen ist nur zu etwa 30% eine technische Herausforderung – zu 70% handelt es sich um ein kulturelles und organisatorisches Transformationsprojekt. Selbst perfekt konzipierte Strukturen bleiben wirkungslos, wenn sie nicht von den Mitarbeitern verstanden, akzeptiert und aktiv gelebt werden. Die systematische Adressierung der menschlichen Dimension ist daher entscheidend für den nachhaltigen Erfolg.\n\n🏢 Organisatorische Erfolgsfaktoren:\n• Leadership Commitment: Sichtbares und konsequentes Bekenntnis der Führungsebene zu transparenten Eskalations- und Kommunikationsprozessen, manifestiert durch aktive Vorbildfunktion, klare Priorisierung und Bereitstellung notwendiger Ressourcen.\n• Klare Verantwortlichkeiten: Eindeutige Definition und Kommunikation von Rollen, Zuständigkeiten und Entscheidungsbefugnissen innerhalb der Eskalations- und Kommunikationsstrukturen auf allen Organisationsebenen.\n• Integrative Governance: Verankerung der Eskalations- und Kommunikationsprozesse in bestehenden Governance-Strukturen mit klaren Schnittstellen zu verwandten Bereichen wie Risikomanagement, Compliance und internes Kontrollsystem.\n• Cross-funktionale Alignment: Harmonisierung von Zielen, Anreizen und Prozessen über Abteilungs- und Bereichsgrenzen hinweg, um Silodenken zu überwinden und eine ganzheitliche Perspektive zu fördern.\n\n🌱 Kulturelle Transformationselemente:\n• Psychologische Sicherheit: Schaffung eines Arbeitsumfelds, in dem das Ansprechen von Problemen und das Auslösen von Eskalationen als positiver Beitrag zur Organisationsentwicklung wertgeschätzt wird, nicht als Kritik oder Schuldzuweisung.\n• Transparenzkultur: Förderung einer offenen Kommunikationskultur, die Transparenz als Wert etabliert und den freien Informationsfluss über Hierarchieebenen hinweg ermöglicht und honoriert.\n• Lernorientierung: Entwicklung einer organisationalen Lernkultur, die Fehler und Probleme als Lernchancen begreift und systematisch aus Erfahrungen – insbesondere aus Eskalationssituationen – Verbesserungspotenziale ableitet.\n• Empowerment: Befähigung der Mitarbeiter, eigenverantwortlich Eskalationsentscheidungen zu treffen, durch Kompetenzaufbau, klare Handlungsspielräume und positive Verstärkung proaktiven Verhaltens.\n\n🔄 ADVISORIs ganzheitlicher Transformationsansatz:\n• Kulturanalyse und Change-Readiness-Assessment: Systematische Erhebung des kulturellen Status quo, der Veränderungsbereitschaft und potenzieller Barrieren als Basis für eine maßgeschneiderte Transformationsstrategie.\n• Multiperspektivische Stakeholder-Einbindung: Frühzeitige und kontinuierliche Einbeziehung aller relevanten Stakeholder-Gruppen in den Gestaltungs- und Implementierungsprozess, um Ownership und Akzeptanz zu fördern.\n• Mehrdimensionales Schulungs- und Kommunikationskonzept: Entwicklung zielgruppenspezifischer Trainings-, Sensibilisierungs- und Kommunikationsmaßnahmen, die sowohl Wissen vermitteln als auch Einstellungen und Verhaltensweisen adressieren.\n• Kulturelle Ankerpunkte und Rituale: Etablierung wiederkehrender Praktiken und symbolischer Handlungen, die die neuen Eskalations- und Kommunikationsstrukturen im Organisationsalltag verankern und kontinuierlich verstärken.\n\nDurch diesen ganzheitlichen Transformationsansatz unterstützt ADVISORI Sie dabei, Eskalations- und Kommunikationsstrukturen zu implementieren, die nicht nur formal existieren, sondern tatsächlich gelebt werden und einen nachhaltigen Mehrwert für Ihre Organisation schaffen."
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
