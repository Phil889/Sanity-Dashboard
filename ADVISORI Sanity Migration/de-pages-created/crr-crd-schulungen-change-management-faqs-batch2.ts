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
    console.log('Updating CRR/CRD Schulungen & Change Management page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-schulungen-change-management' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-schulungen-change-management" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir den Return on Investment unserer CRR/CRD-Schulungsprogramme maximieren und messbar machen?",
        answer: "Die Maximierung und Messung des ROI von CRR/CRD-Schulungsprogrammen erfordert einen ganzheitlichen Ansatz, der über traditionelle Compliance-Betrachtungen hinausgeht. Strategische Schulungsinvestitionen sollten sowohl direkte Compliance-Vorteile als auch indirekte Geschäftswertbeiträge quantifizieren und optimieren.\n\n💰 Strategien zur ROI-Maximierung regulatorischer Schulungen:\n• Business Case-Orientierung: Verknüpfen Sie Schulungsziele direkt mit geschäftlichen Prioritäten wie Risikoreduktion, Prozesseffizienz, Kundenvertrauen und Mitarbeiterproduktivität, anstatt sie als reine Compliance-Maßnahme zu betrachten.\n• Zielgerichtete Ressourcenallokation: Priorisieren Sie Schulungsinvestitionen nach Risikoexposition und strategischer Relevanz der verschiedenen CRR/CRD-Themenbereiche für Ihr spezifisches Geschäftsmodell.\n• Skalierbare Schulungsarchitektur: Entwickeln Sie wiederverwendbare Schulungsmodule und -materialien, die mit minimalen Anpassungen für verschiedene Zielgruppen und bei regulatorischen Änderungen aktualisiert werden können.\n• Blended Learning-Optimierung: Balancieren Sie kosteneffiziente digitale Lernformate mit hochwertigem Präsenztraining für komplexe Themen, um Kosten zu optimieren ohne Qualitätseinbußen.\n\n📊 Mehrdimensionales ROI-Messframework:\n• Direkte Compliance-Kosteneinsparungen: Quantifizieren Sie reduzierte Bußgelder, vermiedene Nachbesserungskosten, verkürzte Prüfungsdauer und effizientere Implementierung regulatorischer Änderungen.\n• Risikoreduktionsmetriken: Messen Sie die Verringerung operationeller Risiken durch reduzierte Compliance-Verstöße, verbesserte Kontrollen und frühzeitige Risikoerkennung.\n• Prozesseffizienzgewinne: Evaluieren Sie Zeiteinsparungen bei regulatorischen Prozessen, reduzierte Fehlerquoten und optimierte Entscheidungsfindung durch besser geschulte Mitarbeiter.\n• Mitarbeiterwertsteigerung: Bewerten Sie verbesserte Mitarbeiterzufriedenheit, reduzierte Fluktuation in regulatorischen Schlüsselpositionen und gesteigerte Attraktivität als Arbeitgeber.\n\n🔍 Innovative ROI-Messansätze:\n• Predictive Analytics: Setzen Sie fortschrittliche Analysemodelle ein, um den Zusammenhang zwischen Schulungsmaßnahmen und zukünftigen Compliance-Risiken vorherzusagen und präventiv zu steuern.\n• Kosten-Nutzen-Simulation: Entwickeln Sie Simulationsmodelle, die verschiedene Schulungsszenarien und deren Auswirkungen auf Compliance-Risiken und -Kosten modellieren.\n• Control Group Testing: Implementieren Sie kontrollierte Vergleichsstudien zwischen geschulten und nicht-geschulten Gruppen, um den kausalen Effekt von Schulungsmaßnahmen zu isolieren.\n• Longitudinale Wirkungsanalyse: Führen Sie langfristige Untersuchungen durch, die den anhaltenden Wert von Schulungsinvestitionen über mehrere regulatorische Zyklen hinweg bewerten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Best Practices gibt es für das Management des kulturellen Wandels bei der Implementierung neuer CRR/CRD-Anforderungen?",
        answer: "Die erfolgreiche Umsetzung von CRR/CRD-Anforderungen erfordert weit mehr als technische Implementierung – sie verlangt einen tiefgreifenden kulturellen Wandel in der Organisation. Die Transformation der Unternehmenskultur zu einer proaktiven Compliance-Orientierung ist ein komplexer, mehrschichtiger Prozess, der strategisch gestaltet werden muss.\n\n🧭 Kulturwandel-Leitprinzipien für regulatorische Transformationen:\n• Tone from the Top: Sichern Sie ein authentisches, konsistentes Commitment der Führungsebene, das sich in persönlichem Engagement, Ressourcenbereitstellung und klaren Prioritätensignalen manifestiert.\n• Narrativ jenseits der Compliance: Entwickeln Sie eine sinnstiftende Geschichte, die CRR/CRD nicht als lästige Pflicht, sondern als strategischen Wettbewerbsvorteil und Werttreiber für alle Stakeholder positioniert.\n• Kulturelle Landkarte erstellen: Analysieren Sie systematisch bestehende kulturelle Elemente, die den regulatorischen Anforderungen förderlich oder hinderlich sind, und entwickeln Sie gezielte Interventionen.\n• Regulatorische Intelligenz demokratisieren: Fördern Sie ein Grundverständnis regulatorischer Zusammenhänge auf allen Ebenen, um die Identifikation mit und Eigenverantwortung für Compliance-Ziele zu stärken.\n\n🛠️ Kulturelle Transformationshebel für nachhaltige Veränderung:\n• Symbolische Handlungen: Setzen Sie gezielte Signalaktionen ein, die den Kulturwandel sichtbar machen – vom persönlichen Engagement der Geschäftsleitung in Schulungen bis zur prominenten Platzierung regulatorischer Themen in der internen Kommunikation.\n• Anreizsysteme neu ausrichten: Integrieren Sie regulatorische Leistungen explizit in Beurteilungs- und Vergütungssysteme; würdigen Sie proaktives Compliance-Verhalten durch formelle und informelle Anerkennung.\n• Kulturelle Botschafter einsetzen: Identifizieren und fördern Sie informelle Führungspersönlichkeiten auf allen Ebenen als Vorbilder und Multiplikatoren für die neue Compliance-Kultur.\n• Rituale und Routinen etablieren: Verankern Sie regulatorische Belange in wiederkehrenden Prozessen wie Team-Meetings, Projektreviews und Abteilungsbesprechungen, um sie zum selbstverständlichen Teil des Arbeitsalltags zu machen.\n\n🌱 Nachhaltige Kulturverankerung durch systemischen Ansatz:\n• Communities of Practice: Etablieren Sie funktions- und hierarchieübergreifende Netzwerke, die den Austausch zu regulatorischen Themen fördern und eine kollektive Lernkultur unterstützen.\n• Kontinuierliches Kulturmonitoring: Implementieren Sie regelmäßige Kulturpulsmessungen, die die Entwicklung kultureller Indikatoren in Bezug auf regulatorische Anforderungen verfolgen und frühzeitig Interventionsbedarf aufzeigen.\n• Storytelling fördern: Sammeln und teilen Sie Erfolgsgeschichten, die demonstrieren, wie die neue Compliance-Kultur zu besseren Geschäftsergebnissen, reduziertem Risiko oder verbesserten Stakeholder-Beziehungen geführt hat.\n• Safe-to-Fail-Umgebung: Kultivieren Sie eine psychologisch sichere Atmosphäre, in der Unsicherheiten oder Fehler im Umgang mit regulatorischen Anforderungen offen angesprochen werden können, um kollektives Lernen zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir sicherstellen, dass unsere Führungskräfte als Vorbilder für CRR/CRD-Compliance agieren und den Kulturwandel effektiv vorantreiben?",
        answer: "Die transformative Kraft authentischer Führung ist entscheidend für den Erfolg regulatorischer Veränderungsinitiativen. Führungskräfte müssen nicht nur intellektuell von der Bedeutung der CRR/CRD-Compliance überzeugt sein, sondern diese Überzeugung durch konsistentes Handeln und klare Prioritätensetzung zum Ausdruck bringen. Eine strategische Befähigung und Aktivierung der Führungsebene ist daher ein kritischer Erfolgsfaktor.\n\n👑 Führungskräfteentwicklung für regulatorische Excellence:\n• Executive Compliance Coaching: Implementieren Sie ein gezieltes Coaching-Programm für die oberste Führungsebene, das nicht nur regulatorisches Wissen vermittelt, sondern auch die persönliche Reflexion über die eigene Vorbildrolle fördert.\n• Regulatory Leadership Journey: Entwickeln Sie einen strukturierten Entwicklungspfad für Führungskräfte, der von grundlegendem CRR/CRD-Verständnis bis hin zu transformationaler Führung in regulatorischen Veränderungsprozessen reicht.\n• Peer Learning Circles: Etablieren Sie regelmäßige, moderierte Austauschrunden zwischen Führungskräften verschiedener Bereiche, in denen regulatorische Herausforderungen und Lösungsansätze diskutiert werden.\n• Führungskräfte als Lehrende: Integrieren Sie Führungskräfte aktiv in Schulungsprogramme als Dozenten oder Diskussionsleiter, was sowohl ihr eigenes Wissen vertieft als auch ihre Glaubwürdigkeit und ihr Commitment signalisiert.\n\n🔍 Transparenz und Accountability im Führungshandeln:\n• Regulatorische Führungsdashboards: Entwickeln Sie transparente Leistungsindikatoren für regulatorische Verantwortungsbereiche und machen Sie diese auf Führungsebene sichtbar und vergleichbar.\n• Symbolische Priorisierungsakte: Fördern Sie bewusste Entscheidungen von Führungskräften, die regulatorische Compliance über kurzfristige Geschäftsziele stellen, und kommunizieren Sie diese als Best Practices.\n• Structured Walkabouts: Implementieren Sie regelmäßige, strukturierte Besuche von Führungskräften in operativen Bereichen mit spezifischem Fokus auf regulatorische Themen und direktem Dialog mit Mitarbeitern.\n• Fehlerkultur von oben: Ermutigen Sie Führungskräfte, offen über eigene Unsicherheiten oder Fehler im Zusammenhang mit regulatorischen Anforderungen zu sprechen, um eine lernorientierte Kultur zu fördern.\n\n📣 Kraftvolle Kommunikation und Narrative:\n• Persönliche Regulatorische Narrative: Unterstützen Sie Führungskräfte dabei, ihre eigene authentische Geschichte zu entwickeln, warum CRR/CRD-Compliance für sie persönlich und für das Unternehmen wichtig ist.\n• Mikrokommunikation optimieren: Sensibilisieren Sie für die Wirkung beiläufiger Äußerungen und indirekter Signale zu regulatorischen Themen und deren Einfluss auf die wahrgenommene Priorität.\n• Kommunikationsroutinen etablieren: Integrieren Sie regulatorische Themen als festen Bestandteil in regelmäßige Führungskommunikation wie Town Halls, Teammeetings und Strategiediskussionen.\n• Kommunikationskaskaden: Entwickeln Sie strukturierte Kommunikationsprozesse, die sicherstellen, dass regulatorische Botschaften konsistent durch alle Führungsebenen transportiert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche innovativen Methoden können wir nutzen, um komplexe CRR/CRD-Inhalte für verschiedene Zielgruppen verständlich und praxisnah zu vermitteln?",
        answer: "Die Vermittlung komplexer CRR/CRD-Inhalte erfordert innovative didaktische Ansätze, die Abstraktion in Anwendung transformieren und regulatorische Komplexität in praxisnahe Relevanz übersetzen. Durch den gezielten Einsatz fortschrittlicher Lernmethoden und -technologien können auch hochkomplexe Regulierungsinhalte zielgruppengerecht und nachhaltig vermittelt werden.\n\n🎯 Zielgruppenspezifische Didaktikkonzepte:\n• Management-Ebene: Entwickeln Sie Executive Briefings mit Fokus auf strategische Implikationen, Entscheidungsverantwortung und Business Case-Betrachtungen, angereichert mit Benchmark-Vergleichen zu Wettbewerbern.\n• Fachexperten: Gestalten Sie tiefgehende Analyseworkshops mit komplexen Fallstudien, regulatorischen Originaltexten und Expert-Exchange-Formaten zum kritischen Diskurs über Interpretationsspielräume.\n• Umsetzungsverantwortliche: Konzipieren Sie praxisorientierte Simulationen und interaktive Prozessdurchläufe, die den vollständigen Workflow von regulatorischen Anforderungen bis zur operativen Umsetzung abbilden.\n• Indirekt Betroffene: Bieten Sie kontextbezogene Microlearning-Einheiten, die präzise aufzeigen, wie die eigene Rolle mit CRR/CRD-Anforderungen verknüpft ist und welche Handlungsimplikationen sich ergeben.\n\n🎮 Innovative Vermittlungsformate und -technologien:\n• Regulatory Gamification: Entwickeln Sie kompetitive oder kooperative Spielszenarien, die regulatorische Herausforderungen simulieren – von strategischen Entscheidungssimulationen für Führungskräfte bis zu operativen Compliance-Challenges für Fachbereiche.\n• Augmented Reality Lernumgebungen: Nutzen Sie AR-Technologie, um komplexe regulatorische Zusammenhänge zu visualisieren, beispielsweise durch Überblendung von Compliance-Anforderungen auf reale Geschäftsprozesse oder Bankbilanzen.\n• Interactive Storytelling: Kreieren Sie narrative Lernreisen mit verzweigten Entscheidungspfaden, die Lernende durch realistische regulatorische Szenarien führen und unmittelbares Feedback zu Entscheidungskonsequenzen geben.\n• Regulatory Escape Rooms: Gestalten Sie physische oder virtuelle Escape-Room-Szenarien, in denen Teams komplexe regulatorische Probleme gemeinsam unter Zeitdruck lösen müssen.\n\n🧩 Komplexitätsreduktion und Transferförderung:\n• Visuelle Regulatorische Landkarten: Entwickeln Sie interaktive Visualisierungen der CRR/CRD-Anforderungen, die Zusammenhänge, Hierarchien und Abhängigkeiten verdeutlichen und intuitives Navigieren ermöglichen.\n• Analogie-basierte Vermittlung: Nutzen Sie kraftvolle Metaphern und Analogien aus vertrauten Kontexten, um abstrakte regulatorische Konzepte greifbar zu machen – vom Risikomanagement als Immunsystem bis zur Liquiditätssteuerung als Wassermanagement.\n• Just-in-Time Learning Nuggets: Gestalten Sie ultraspezifische, situativ abrufbare Lerneinheiten, die genau im Moment des Bedarfs die relevante regulatorische Information liefern, eingebettet in Arbeitsprozesse und -systeme.\n• Peer-to-Peer Wissenstransfer: Fördern Sie strukturierte Formate, in denen Fachexperten ihr spezialisiertes Wissen für andere Bereiche aufbereiten und praktische Anwendungsbezüge herstellen."
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
