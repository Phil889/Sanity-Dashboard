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
    console.log('Updating MaRisk Schulungen und Sensibilisierung page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'marisk-schulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "marisk-schulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann ein nachhaltiges Wissensmanagement für MaRisk-relevante Inhalte im Institut etabliert werden?",
        answer: "Ein nachhaltiges Wissensmanagement für MaRisk-relevante Inhalte ist ein strategischer Erfolgsfaktor für die langfristige Compliance-Sicherung im Institut. Es geht weit über die einmalige Wissensvermittlung hinaus und erfordert systematische Prozesse und Strukturen, die regulatorisches Wissen kontinuierlich erfassen, aktualisieren, verteilen und verankern. Ein ganzheitliches MaRisk-Wissensmanagement fördert nicht nur die Compliance, sondern steigert auch die operative Effizienz und reduziert personenbezogene Abhängigkeiten.\n\n🧠 Kernkomponenten eines MaRisk-Wissensmanagements:\n• Zentrale Wissensdatenbank mit intelligenter Struktur: Aufbau eines zentralen, digital zugänglichen Repositories für alle MaRisk-relevanten Inhalte mit systematischer Taxonomie, Versionierung und kontextbezogenen Verknüpfungen zwischen verwandten Inhalten.\n• Dynamisches Aktualisierungsmanagement: Etablierung klarer Prozesse und Verantwortlichkeiten für die kontinuierliche Pflege und Aktualisierung der Wissensbasis, insbesondere bei regulatorischen Änderungen oder neuen aufsichtlichen Erwartungen.\n• Mehrkanalige Distributionsstrategie: Implementierung eines intelligenten Push-Pull-Systems, das relevantes Wissen sowohl proaktiv an definierte Zielgruppen verteilt als auch bedarfsgerechten Zugriff im Arbeitskontext ermöglicht.\n• Kollaborative Wissenskultur: Förderung einer aktiven Beteiligung aller Mitarbeiter am Wissensaufbau durch niedrigschwellige Feedback-Mechanismen, Expertencommunitys und kollaborative Wissensformate.\n\n📊 Praktische Implementierungsstrategien:\n• Knowledge Map für regulatorische Anforderungen: Visuelle Kartierung der MaRisk-Anforderungen und ihrer Zusammenhänge, die komplexe regulatorische Strukturen transparent macht und die Navigation im Regelwerk erleichtert.\n• Prozessintegrierte Wissenszugänge: Einbindung kontextrelevanter regulatorischer Informationen direkt in operativen Prozessen und Systemen genau an den Stellen, wo sie im Arbeitskontext benötigt werden.\n• Erfahrungswissensmanagement: Systematische Erfassung und Aufbereitung impliziten Wissens erfahrener Mitarbeiter zu praktischen Umsetzungsaspekten, häufigen Herausforderungen und bewährten Lösungsansätzen.\n• Kontinuierliche Wissensaktivierung: Etablierung regelmäßiger Formate zur Auffrischung und Vertiefung des Wissens, wie thematische Kurz-Updates, Expertensprechstunden oder fokussierte Wissens-Challenges."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Herausforderungen stellen sich bei der Schulung und Sensibilisierung dezentraler Teams oder internationaler Einheiten für MaRisk-Anforderungen?",
        answer: "Die Schulung und Sensibilisierung dezentraler Teams und internationaler Einheiten für MaRisk-Anforderungen stellt besondere Herausforderungen, die über die klassische Wissensvermittlung hinausgehen und spezifische Lösungsansätze erfordern. Die geografische Verteilung, unterschiedliche regulatorische Kontexte und kulturelle Vielfalt erfordern eine differenzierte Strategie, die Einheitlichkeit im Compliance-Verständnis mit lokaler Relevanz verbindet.\n\n🌐 Kernherausforderungen bei dezentralen und internationalen Strukturen:\n• Konsistenzwahrung bei lokaler Adaptierung: Sicherstellung eines einheitlichen Verständnisses der MaRisk-Anforderungen über verschiedene Standorte hinweg bei gleichzeitiger Berücksichtigung standortspezifischer Besonderheiten und lokaler regulatorischer Kontexte.\n• Kulturelle und sprachliche Barrieren: Überwindung sprachlicher Hürden und kulturell unterschiedlicher Interpretationen regulatorischer Konzepte, die zu Missverständnissen oder inkonsistenter Umsetzung führen können.\n• Koordination und Synchronisation: Herausforderung der zeitlichen und inhaltlichen Koordination von Schulungsmaßnahmen über verschiedene Zeitzonen und organisatorische Einheiten hinweg, besonders bei regulatorischen Änderungen.\n• Engagement und Priorisierung: Schaffung eines gemeinsamen Verständnisses für die Relevanz deutscher regulatorischer Anforderungen in internationalen Einheiten, die möglicherweise primär lokale Regulierungen im Fokus haben.\n\n🛠️ Strategische Lösungsansätze für globale MaRisk-Compliance:\n• Modulares Schulungskonzept mit lokaler Anpassbarkeit: Entwicklung eines Kern-Schulungsprogramms mit zentralen MaRisk-Inhalten, das durch lokalisierte Module ergänzt wird, die die Verbindung zu regionalen Regulierungen und Geschäftspraktiken herstellen.\n• Multiplikatoren-Netzwerk mit lokalen Champions: Aufbau eines Netzwerks lokaler Compliance-Experten, die als kulturelle Brücke zwischen zentralen MaRisk-Anforderungen und lokalen Kontexten fungieren und die Relevanz vor Ort vermitteln können.\n• Digitale Kollaborationsformate für standortübergreifenden Austausch: Implementierung virtueller Communities of Practice, die den Erfahrungsaustausch zwischen verschiedenen Standorten zu praktischen Umsetzungsaspekten fördern und Best Practices teilen.\n• Multi-Channel-Kommunikationsstrategie: Kombination synchroner und asynchroner Formate, die unterschiedliche Zeitzonen berücksichtigen und flexible Lernmöglichkeiten bieten, ergänzt durch regelmäßige virtuelle Live-Sessions für direkten Austausch."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann die Wirksamkeit von MaRisk-Schulungen im Rahmen des Three Lines of Defense-Modells optimal gestaltet werden?",
        answer: "Die Wirksamkeit von MaRisk-Schulungen im Rahmen des Three Lines of Defense-Modells erfordert eine differenzierte und systematisch abgestimmte Qualifizierungsstrategie, die den spezifischen Rollen, Verantwortlichkeiten und Perspektiven der drei Verteidigungslinien Rechnung trägt. Eine zielgerichtete Schulungskonzeption, die auf die unterschiedlichen Kontrollaufgaben und Interaktionen zwischen den Verteidigungslinien ausgerichtet ist, fördert nicht nur ein gemeinsames Compliance-Verständnis, sondern stärkt auch die Effektivität des gesamten Kontrollsystems.\n\n🛡️ Differenzierte Schulungsansätze für die drei Verteidigungslinien:\n• Erste Verteidigungslinie (Operative Geschäftsbereiche): Fokus auf die praktische Anwendung regulatorischer Anforderungen im Tagesgeschäft, mit besonderem Schwerpunkt auf Eigenverantwortung, integrierte Kontrollaktivitäten und prozessbezogene Compliance-Aspekte.\n• Zweite Verteidigungslinie (Risikomanagement und Compliance): Vertiefung methodischer Kompetenzen zur Identifikation, Bewertung und Überwachung von Compliance-Risiken sowie Vermittlung von Beratungs- und Kommunikationsfähigkeiten für die effektive Unterstützung der ersten Linie.\n• Dritte Verteidigungslinie (Interne Revision): Fokus auf prüfungsbezogene Aspekte der MaRisk, systematische Bewertung der Kontrolleffektivität und Beurteilung von Compliance-Strukturen, einschließlich Methoden zur Identifikation systemischer Schwachstellen.\n\n🔄 Integrationsansätze für übergreifende Zusammenarbeit:\n• Gemeinsame Schulungsmodule für Schnittstellenthemen: Entwicklung spezifischer Trainingseinheiten, die die Zusammenarbeit und Kommunikation zwischen den Verteidigungslinien adressieren und ein gemeinsames Verständnis für die jeweiligen Rollen und Erwartungen schaffen.\n• Kollaborative Fallstudien mit Perspektivwechsel: Implementation von Schulungsformaten, in denen Teilnehmer aus unterschiedlichen Verteidigungslinien gemeinsam an praxisnahen Fallbeispielen arbeiten und dabei bewusst die Perspektiven der anderen Linien einnehmen.\n• Strukturierter Wissensaustausch zwischen den Linien: Etablierung regelmäßiger Formate wie Fachzirkel, in denen Compliance-Erkenntnisse, neue aufsichtliche Erwartungen und Prüfungserfahrungen systematisch zwischen den Verteidigungslinien ausgetauscht werden.\n• Koordinierte Sensibilisierungskampagnen: Entwicklung linienbezogener Kommunikationsstrategien, die in ihrer Gesamtheit eine konsistente Compliance-Botschaft vermitteln, aber in ihrer Ausgestaltung auf die spezifischen Rollen und Verantwortlichkeiten der jeweiligen Verteidigungslinie zugeschnitten sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche innovativen Methoden und Formate können die Akzeptanz und Attraktivität von MaRisk-Schulungen steigern?",
        answer: "Die Akzeptanz und Attraktivität von MaRisk-Schulungen kann durch innovative Methoden und Formate signifikant gesteigert werden, die über traditionelle Präsentationsformate hinausgehen und emotionales Engagement, aktive Beteiligung und praxisnahe Relevanz in den Mittelpunkt stellen. Eine kreative didaktische Gestaltung kann die oft als trocken und abstrakt wahrgenommenen regulatorischen Inhalte in ansprechende, motivierende Lernerlebnisse transformieren.\n\n🎮 Innovative Lernformate für emotionales Engagement:\n• Gamification und Serious Games: Entwicklung spielbasierter Lernszenarien, die MaRisk-Anforderungen in interaktive Herausforderungen transformieren, etwa durch Compliance-Quests, Risikosimulationen oder kompetitive Team-Challenges mit Punktesystemen und Leaderboards.\n• Immersive Learning Experiences: Einsatz von Virtual oder Augmented Reality, um komplexe regulatorische Zusammenhänge erlebbar zu machen, beispielsweise durch virtuelle Compliance-Walkthroughs oder simulierte Prüfungssituationen mit interaktiven Entscheidungsmöglichkeiten.\n• Storytelling und Narrative Designs: Einbettung regulatorischer Anforderungen in emotionale Narrative und Fallgeschichten, die persönliche Betroffenheit erzeugen und die praktischen Auswirkungen von Compliance-Entscheidungen auf Kunden, Mitarbeiter und Institut veranschaulichen.\n• Micro-Learning mit kreativen Medienformaten: Kurzweilige, multimediale Lernhäppchen wie animierte Erklärvideos, interaktive Infografiken oder humorvolle Compliance-Comics, die komplexe Inhalte prägnant auf den Punkt bringen.\n\n🚀 Partizipative Methoden für aktives Lernen:\n• Co-Creation-Workshops: Partizipative Formate, in denen Teilnehmer aktiv an der Entwicklung praxisnaher Compliance-Werkzeuge für ihren Arbeitsbereich mitwirken, etwa durch kollaborative Erstellung von Checklisten, Prozessvisualisierungen oder Entscheidungshilfen.\n• Real-World-Challenges: Praxisorientierte Projektarbeit, bei der Teams konkrete Compliance-Herausforderungen aus ihrem Arbeitsumfeld analysieren und Lösungsansätze entwickeln, die direkt in den Arbeitsalltag implementiert werden können.\n• Expert Swap und Reverse Mentoring: Formate, die den Wissensaustausch zwischen Compliance-Experten und operativen Fachbereichen fördern, etwa durch temporäre Hospitationen, Shadowing oder umgekehrtes Mentoring, bei dem jüngere Mitarbeiter digitale Skills einbringen.\n• Open Space und BarCamp-Formate: Selbstorganisierte Konferenzformate, die den Teilnehmern maximalen Raum für eigene Themensetzung und interaktiven Austausch geben und dadurch Eigenverantwortung und Relevanz stärken."
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
