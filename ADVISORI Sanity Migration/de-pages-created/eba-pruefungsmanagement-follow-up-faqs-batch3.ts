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
    console.log('Updating EBA Prüfungsmanagement & Follow-up page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-pruefungsmanagement-follow-up' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-pruefungsmanagement-follow-up" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir die Dokumentation und Informationsbereitstellung für EBA-Prüfungen optimieren, um sowohl die Prüfungseffizienz zu steigern als auch unser Risiko zu minimieren?",
        answer: "Eine strategisch durchdachte Dokumentations- und Informationsstrategie ist ein entscheidender Erfolgsfaktor für EBA-Prüfungen. Sie bestimmt maßgeblich den Prüfungsverlauf, beeinflusst die Wahrnehmung Ihres Instituts durch die Prüfer und kann erhebliche Effizienzgewinne bei gleichzeitiger Risikominimierung ermöglichen.\n\n📋 Strategische Aspekte der Prüfungsdokumentation:\n• Informationsarchitektur: Entwicklung einer durchdachten Struktur für prüfungsrelevante Informationen, die sowohl die aufsichtliche Perspektive als auch die interne Organisation berücksichtigt und konsistente Navigation ermöglicht.\n• Qualitätssicherung: Implementierung eines mehrstufigen Qualitätssicherungsprozesses, der Vollständigkeit, Aktualität, Konsistenz und fachliche Korrektheit aller Prüfungsdokumente gewährleistet.\n• Kontextualisierung: Strategische Einbettung von Einzeldokumenten in einen aussagekräftigen Gesamtkontext, der Prüfern das Verständnis komplexer Zusammenhänge erleichtert und die Interpretation unterstützt.\n• Versionierung und Änderungsmanagement: Etablierung eines transparenten Systems zur Dokumentation von Änderungen, das Nachvollziehbarkeit sicherstellt und gleichzeitig die Effizienz der Dokumentenaktualisierung maximiert.\n\n💾 ADVISORIs Optimierungsansatz für Prüfungsdokumentation:\n• Dokumentationslandkarte: Wir entwickeln eine umfassende Dokumentationslandkarte, die prüfungsrelevante Dokumente katalogisiert, klassifiziert und ihre Interdependenzen visualisiert, um Vollständigkeit zu gewährleisten und Redundanzen zu vermeiden.\n• Digitale Dokumentenplattform: Implementation einer spezialisierten Plattform für die strukturierte Bereitstellung von Prüfungsdokumenten mit intelligenten Such-, Filter- und Verknüpfungsfunktionen.\n• Methodische Vorlagenbibliothek: Entwicklung standardisierter Vorlagen für wiederkehrende Dokumententypen, die konsistente Qualität sicherstellen und den Erstellungsaufwand signifikant reduzieren.\n• Agile Dokumentationsprozesse: Etablierung flexibler, aber kontrollierter Prozesse für die bedarfsgerechte Erstellung und Aktualisierung von Dokumenten während der Prüfung, die schnelle Reaktionen auf Prüferanfragen ermöglichen.\n\nDurch diese systematische Optimierung der Dokumentations- und Informationsbereitstellung transformiert ADVISORI einen oft als administrativ wahrgenommenen Prozess in einen strategischen Erfolgsfaktor für Ihre Prüfung. Dies resultiert nicht nur in höherer Prüfungseffizienz und geringerem Risiko von Missverständnissen oder Fehlinterpretationen, sondern positioniert Ihr Institut auch als professionellen, transparenten Partner der Aufsicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Rolle spielt die Vorbereitung von Mitarbeitern auf Interviews im Rahmen von EBA-Prüfungen und wie kann ADVISORI dabei unterstützen?",
        answer: "Die systematische Vorbereitung von Mitarbeitern auf Prüferinterviews ist ein kritischer Erfolgsfaktor für EBA-Prüfungen, der weit über inhaltliche Aspekte hinausgeht. Gut vorbereitete Interviewpartner vermitteln nicht nur fachliche Kompetenz, sondern prägen maßgeblich das Gesamtbild Ihres Instituts bei den Prüfern und können den Verlauf und das Ergebnis der Prüfung entscheidend beeinflussen.\n\n👥 Dimensionen erfolgreicher Interviewvorbereitung:\n• Inhaltliche Präzision: Sicherstellung, dass Interviewpartner alle fachlichen Aspekte ihres Verantwortungsbereichs fundiert darstellen können, einschließlich regulatorischer Grundlagen, methodischer Ansätze und institutsspezifischer Umsetzungen.\n• Kommunikative Kompetenz: Entwicklung der Fähigkeit, komplexe Sachverhalte klar, strukturiert und adressatengerecht zu vermitteln sowie auf kritische Fragen souverän und konstruktiv zu reagieren.\n• Kontextuelle Einordnung: Vermittlung eines umfassenden Verständnisses für den breiteren Kontext der Prüfung, um die eigene Rolle im Gesamtbild zu erkennen und konsistente Aussagen im Einklang mit der Gesamtstrategie zu treffen.\n• Psychologische Vorbereitung: Stärkung der mentalen Resilienz für Prüfungssituationen, Reduktion von Stress und Aufbau von Selbstsicherheit für authentisches und kompetentes Auftreten.\n\n🎓 ADVISORIs Interview-Vorbereitungsprogramm:\n• Personalisierte Briefing-Pakete: Entwicklung maßgeschneiderter Vorbereitungsmaterialien für jeden Interviewpartner, die spezifische Themenkomplexe, potenzielle Fragestellungen und institutsspezifische Schlüsselbotschaften abdecken.\n• Mock-Interviews mit Feedback: Durchführung realistischer Prüfungssimulationen mit ehemaligen Aufsehern oder Prüfungsexperten, die authentisches, konstruktives Feedback zur inhaltlichen und kommunikativen Performance geben.\n• Kommunikationstraining: Vermittlung praxisorientierter Techniken für klare, präzise Kommunikation in Prüfungssituationen, einschließlich Strategien zum Umgang mit komplexen, kritischen oder unerwarteten Fragen.\n• Kollaborative Abstimmungssessions: Moderation bereichsübergreifender Abstimmungen zu übergreifenden Themen, um konsistente Botschaften sicherzustellen und potenzielle Widersprüche frühzeitig zu identifizieren und zu adressieren.\n\nDurch diese umfassende Interviewvorbereitung transformiert ADVISORI potenzielle Risikosituationen in Chancen, die Kompetenz und Professionalität Ihres Instituts zu demonstrieren. Gut vorbereitete Mitarbeiter vermitteln nicht nur relevante Fachinformationen, sondern transportieren auch eine positive Unternehmenskultur und ein proaktives Verständnis regulatorischer Anforderungen, was das Vertrauen der Aufsicht in Ihr Institut nachhaltig stärkt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Qualität und Wirksamkeit von Maßnahmen, die aus EBA-Prüfungen resultieren, objektiv messen und nachweisen?",
        answer: "Die objektive Messung und der Nachweis der Qualität und Wirksamkeit von Prüfungsmaßnahmen stellen eine zentrale Herausforderung im aufsichtlichen Dialog dar. Ein systematischer, evidenzbasierter Ansatz zur Wirksamkeitsmessung schafft nicht nur Transparenz gegenüber der Aufsicht, sondern ermöglicht auch interne Steuerung und kontinuierliche Optimierung der Maßnahmenumsetzung.\n\n📏 Grundprinzipien effektiver Wirksamkeitsmessung:\n• Mehrdimensionale Bewertung: Entwicklung eines Bewertungsframeworks, das über formale Umsetzungskriterien hinausgeht und auch qualitative Aspekte, nachhaltige Verankerung und systemische Auswirkungen der Maßnahmen erfasst.\n• Objektivierbare Metriken: Etablierung quantifizierbarer, reproduzierbarer Kennzahlen, die direkt mit den Zielen der Maßnahmen korrelieren und eine faktenbasierte Bewertung des Umsetzungserfolgs ermöglichen.\n• Prozessintegrierte Messung: Implementation von Messverfahren, die in operative Prozesse integriert sind und kontinuierliche Datenerhebung ohne zusätzlichen administrativen Aufwand ermöglichen.\n• Unabhängige Validierung: Sicherstellung einer objektiven Bewertung durch unabhängige, qualifizierte Instanzen, die keinen Interessenkonflikten unterliegen und methodisch fundiert vorgehen.\n\n📊 ADVISORIs Framework zur Wirksamkeitsmessung:\n• Maßnahmenspezifische KPI-Entwicklung: Wir konzipieren für jede Maßnahme maßgeschneiderte Key Performance Indicators, die präzise auf die spezifischen Ziele und Risiken abgestimmt sind und eine differenzierte Bewertung ermöglichen.\n• Integriertes Messsystem: Implementierung eines systematischen Messkonzepts, das verschiedene Datenquellen (Systemdaten, Prozessmetriken, Qualitätskontrollen, Stichproben) intelligent verknüpft und zu aussagekräftigen Wirksamkeitsindikatoren verdichtet.\n• Evidenzbasiertes Testingkonzept: Entwicklung einer strukturierten Testingstrategie mit definierten Testfällen, Szenarien und Belastungstests, die die reale Wirksamkeit der Maßnahmen unter verschiedenen Bedingungen nachweist.\n• Transparentes Reporting: Gestaltung eines mehrstufigen Berichtswesens, das sowohl detaillierte technische Nachweise als auch management-orientierte Zusammenfassungen umfasst und eine zielgruppengerechte Kommunikation der Wirksamkeit ermöglicht.\n\nDurch diesen systematischen Ansatz zur Wirksamkeitsmessung transformiert ADVISORI den Nachweis der Maßnahmenumsetzung von einer formalen Pflichtübung zu einem strategischen Instrument, das nicht nur die Aufsicht überzeugt, sondern auch intern wertvolle Steuerungsinformationen liefert und die kontinuierliche Verbesserung Ihrer Compliance- und Risikomanagementprozesse unterstützt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir als Institut sicherstellen, dass wir aus EBA-Prüfungen nicht nur punktuelle Verbesserungen, sondern nachhaltige organisatorische Lerneffekte erzielen?",
        answer: "Die Transformation von EBA-Prüfungen in nachhaltige organisatorische Lernprozesse stellt einen entscheidenden Wettbewerbsvorteil dar und unterscheidet führende Institute von jenen, die in reaktiven Compliance-Mustern verharren. Ein strategischer Ansatz zum institutionellen Lernen aus Prüfungen ermöglicht es, regulatorische Anforderungen in Innovationstreiber zu verwandeln und kontinuierliche Verbesserung als Kernkompetenz zu etablieren.\n\n🧠 Schlüsseldimensionen organisationalen Lernens aus Prüfungen:\n• Systematische Wissensextraktion: Strukturierte Prozesse zur Identifikation, Dokumentation und Kontextualisierung von implizitem und explizitem Wissen aus Prüfungserfahrungen, um wiederverwendbare Erkenntnisse zu generieren.\n• Kulturelle Verankerung: Entwicklung einer offenen Lernkultur, die Prüfungsfeststellungen nicht als Kritik, sondern als wertvolle Entwicklungschance begreift und konstruktive Reflexion auf allen Organisationsebenen fördert.\n• Organisationsübergreifende Wissensverbreitung: Etablierung effektiver Mechanismen zur bereichsübergreifenden Vermittlung von Prüfungserkenntnissen, um Silodenken zu überwinden und kollektives Lernen zu ermöglichen.\n• Institutionalisierte Anwendung: Systematische Integration von Prüfungserkenntnissen in Governance-Strukturen, Prozesse, Kontrollen und Entscheidungsfindung, um nachhaltige Verhaltens- und Systemänderungen zu bewirken.\n\n🔄 ADVISORIs Ansatz zum organisationalen Lernen:\n• Prüfungs-Knowledge-Hub: Wir implementieren eine zentrale Wissensplattform, die Prüfungserkenntnisse strukturiert erfasst, kategorisiert und mit Kontextinformationen, Best Practices und konkreten Anwendungsbeispielen anreichert.\n• Cross-funktionale Lernzirkel: Etablierung moderierter, funktionsübergreifender Austauschformate, in denen Prüfungserkenntnisse diskutiert, reflektiert und in bereichsspezifische Anwendungskontexte übersetzt werden.\n• Adaptive Governance-Frameworks: Entwicklung flexibler Governance-Strukturen und Prozesse, die kontinuierlich aus Prüfungserfahrungen lernen und sich evolutionär an veränderte regulatorische Anforderungen und Best Practices anpassen.\n• Metriken für organisationales Lernen: Implementation eines Kennzahlensystems, das den Reifegrad des organisationalen Lernens misst und die Wirksamkeit von Wissenstransfer- und Anwendungsprozessen quantifiziert.\n\nDurch diesen strategischen Ansatz zum organisationalen Lernen unterstützt ADVISORI Ihr Institut dabei, über die reine Behebung von Prüfungsfeststellungen hinauszugehen und eine selbstlernende Organisation zu entwickeln, die kontinuierlich aus Erfahrungen lernt, Innovationen fördert und sich proaktiv an regulatorische Entwicklungen anpasst. Dies schafft nicht nur nachhaltige Compliance, sondern auch einen dauerhaften Wettbewerbsvorteil in einem zunehmend komplexen regulatorischen Umfeld."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
