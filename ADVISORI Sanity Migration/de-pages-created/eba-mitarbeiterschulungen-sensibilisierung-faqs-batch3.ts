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
    console.log('Updating EBA Mitarbeiterschulungen & Sensibilisierung page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-mitarbeiterschulungen-sensibilisierung' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-mitarbeiterschulungen-sensibilisierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können wir sicherstellen, dass unser EBA-Schulungsprogramm auch die neuen und sich ständig ändernden regulatorischen Anforderungen abdeckt?",
        answer: "Ein effektives EBA-Schulungsprogramm muss die Agilität besitzen, kontinuierlich mit dem rapiden Tempo regulatorischer Veränderungen Schritt zu halten. Dies erfordert einen systematischen, proaktiven Ansatz, der weit über reaktive Aktualisierungen hinausgeht und regulatorische Intelligenz als Kernkompetenz in der Organisation verankert.\n\n🔄 Strukturierte Ansätze für regulatorische Agilität:\n• Regulatorisches Horizon Scanning: Implementierung eines systematischen Prozesses zur frühzeitigen Identifikation und Analyse aufkommender regulatorischer Trends und Anforderungen, um Schulungsinhalte proaktiv anzupassen.\n• Modulare Schulungsarchitektur: Entwicklung einer flexiblen Schulungsstruktur mit klar segmentierten Modulen, die einzeln aktualisiert werden können, ohne das gesamte Schulungsprogramm neu konzipieren zu müssen.\n• Automatisierte Content-Update-Prozesse: Etablierung technologiegestützter Workflows, die regulatorische Änderungen automatisch in Schulungsinhalte übersetzen und betroffene Mitarbeiter gezielt informieren.\n• Experteneinbindung: Systematische Integration von Compliance- und Fachexperten in den Schulungsentwicklungsprozess, um die fachliche Aktualität und Praxisrelevanz kontinuierlich sicherzustellen.\n\n🛠️ Praktische Implementierungsstrategien:\n• Regulatory Change Management Committee: Etablierung eines interdisziplinären Gremiums, das regulatorische Änderungen bewertet und deren Implikationen für Schulungsinhalte und -zielgruppen definiert.\n• Just-in-Time-Learning: Implementierung von Microlearning-Formaten, die zeitnah nach regulatorischen Änderungen bereitgestellt werden und spezifische Anpassungen fokussiert vermitteln.\n• Integrierte Knowledge-Base: Entwicklung einer zentralen, stets aktuellen Wissensdatenbank, die als Single Point of Truth für regulatorische Anforderungen dient und direkt mit Schulungsinhalten verknüpft ist.\n• Continuous Learning Culture: Förderung einer Unternehmenskultur, in der kontinuierliches Lernen und regulatorische Aufmerksamkeit als Kernkompetenzen aller Mitarbeiter verankert sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie integrieren wir EBA-Compliance-Schulungen optimal in bestehende Personalentwicklungsprogramme und Karrierepfade?",
        answer: "Die strategische Integration von EBA-Compliance-Schulungen in bestehende Personalentwicklungsstrukturen transformiert regulatorisches Learning von einer isolierten Pflichtübung zu einem integralen Bestandteil professioneller Entwicklung. Dies erhöht nicht nur die Wirksamkeit der Schulungen, sondern steigert auch deren Akzeptanz und wahrgenommenen Wert bei Mitarbeitern.\n\n🔄 Integrationsdimensionen für ganzheitliche Personalentwicklung:\n• Kompetenzmodell-Integration: Verankerung von Compliance-Kompetenzen als explizite Bestandteile der organisationsweiten Kompetenzmodelle und Rollenprofile, differenziert nach Funktionen und Karrierestufen.\n• Karrierepfad-Alignment: Definition klarer EBA-Compliance-Kompetenzanforderungen für verschiedene Karrierestufen und Integration entsprechender Schulungsmaßnahmen in Beförderungsprozesse und Entwicklungspläne.\n• Performance Management Verknüpfung: Einbindung von Compliance-Schulungserfolgen und -anwendung in reguläre Leistungsbeurteilungen und Feedbackprozesse zur Stärkung der Verbindlichkeit.\n• Talentmanagement-Perspektive: Nutzung von Compliance-Schulungen zur Identifikation von Talenten mit ausgeprägtem regulatorischen Verständnis und analytischen Fähigkeiten für spezifische Entwicklungspfade.\n\n💼 Praktische Implementierungsstrategien:\n• Integrierte Lernpfade: Entwicklung funktionsspezifischer Lernpfade, die fachliche, methodische und Compliance-Kompetenzen gezielt kombinieren und aufeinander aufbauen.\n• Compliance als Karrierekatalysator: Positionierung von Compliance-Expertise als wertvolle Zusatzqualifikation, die Karrieremöglichkeiten erweitert und Mitarbeiter für komplexere Rollen qualifiziert.\n• Mentoring und Coaching: Etablierung spezialisierter Mentoring-Programme, in denen erfahrene Compliance-Experten jüngere Mitarbeiter bei der Integration regulatorischer Anforderungen in ihre tägliche Arbeit unterstützen.\n• Rotationsprogramme: Implementation zeitlich begrenzter Einsätze in Compliance-Funktionen als Teil von Führungskräfteentwicklungsprogrammen, um tieferes Verständnis regulatorischer Zusammenhänge zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche innovativen Ansätze gibt es, um EBA-Compliance-Wissen nachhaltig im gesamten Unternehmen zu verankern?",
        answer: "Die nachhaltige Verankerung von EBA-Compliance-Wissen erfordert mehr als traditionelle Schulungsansätze – sie benötigt eine systematische Strategie, die verschiedene Lernformate, organisationale Strukturen und kulturelle Faktoren integriert, um Compliance zu einem selbstverständlichen Element der Unternehmens-DNA zu machen.\n\n🌱 Innovative Ansätze für nachhaltige Wissensverankerung:\n• Communities of Practice: Etablierung funktionsübergreifender Experten-Netzwerke, die regelmäßigen Austausch zu Compliance-Themen fördern, Best Practices teilen und gemeinsam Lösungen für regulatorische Herausforderungen entwickeln.\n• Compliance Champions Programm: Identifikation und spezielle Ausbildung ausgewählter Mitarbeiter aus verschiedenen Abteilungen, die als lokale Ansprechpartner und Multiplikatoren für EBA-Compliance-Themen fungieren.\n• Storytelling und Fallstudien: Entwicklung einer Bibliothek authentischer, unternehmensspezifischer Fallbeispiele und Erfolgsgeschichten, die regulatorische Anforderungen greifbar machen und ihre praktische Relevanz verdeutlichen.\n• Gamification und Competition: Implementation spielerischer Elemente wie Team-Challenges, Leaderboards und Badges, die kontinuierliches Lernen motivieren und positiven Wettbewerb um Compliance-Excellence fördern.\n\n🔄 Systemische Verankerungsstrategien:\n• Ritualisierte Reflexionsräume: Etablierung regelmäßiger Team-Reflexionen zu Compliance-Themen, in denen Herausforderungen offen diskutiert und gemeinsame Lösungsansätze entwickelt werden können.\n• Analogie- und Metaphern-Toolkit: Entwicklung eingängiger Analogien und Metaphern, die komplexe regulatorische Konzepte in alltagsnahe Bilder übersetzen und dadurch besser verständlich und merkbar machen.\n• Compliance-integrierte Arbeitsumgebung: Gestaltung der physischen und digitalen Arbeitsumgebung mit subtilen Erinnerungen und Entscheidungshilfen, die compliances Verhalten unterstützen und im Arbeitsalltag präsent halten.\n• Cross-functional Shadowing: Organisation kurzfristiger gegenseitiger Hospitationen zwischen Business- und Compliance-Funktionen, um gegenseitiges Verständnis zu fördern und Compliance-Anforderungen besser in Geschäftsprozesse zu integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie können wir sicherstellen, dass unsere Mitarbeiter nicht nur die EBA-Vorschriften kennen, sondern sie auch in komplexen Entscheidungssituationen richtig anwenden können?",
        answer: "Die Fähigkeit, EBA-Vorschriften in komplexen, mehrdeutigen Entscheidungssituationen korrekt anzuwenden, erfordert mehr als Faktenwissen – sie verlangt tiefes Verständnis, kritisches Denken und situatives Urteilsvermögen. Moderne Schulungsansätze müssen gezielt diese höheren kognitiven Fähigkeiten entwickeln, um Mitarbeiter auf die Komplexität realer Anwendungssituationen vorzubereiten.\n\n🧩 Ansätze zur Entwicklung anwendungsorientierter Compliance-Kompetenz:\n• Szenariobasiertes Training: Konfrontation mit realistischen, ambivalenten Fallbeispielen, die keine offensichtlichen Lösungen bieten und kritische Abwägungen erfordern – ähnlich der Case-Study-Methode in führenden Business Schools.\n• Ethische Dilemma-Diskussionen: Strukturierte Auseinandersetzung mit Situationen, in denen Compliance-Anforderungen mit anderen Unternehmenszielen oder persönlichen Interessen in Konflikt geraten können, um ethische Entscheidungskompetenz zu stärken.\n• Decision Simulation Labs: Durchführung komplexer Simulationen mit zeitkritischen Entscheidungen unter Unsicherheit, die die kognitiven und emotionalen Herausforderungen realer Compliance-Entscheidungen nachbilden.\n• Cognitive Bias Training: Gezielte Sensibilisierung für typische kognitive Verzerrungen und Entscheidungsfallen, die in Compliance-Situationen auftreten können, und Entwicklung von Gegenstrategie.\n\n🔄 Implementierungsstrategien für die Praxis:\n• Expert Modeling: Beobachtung und Analyse von Entscheidungsprozessen erfahrener Compliance-Experten bei komplexen Fragestellungen, um Denk- und Problemlösungsstrategien transparent zu machen.\n• Deliberate Practice: Systematisches, wiederholtes Üben spezifischer Compliance-Entscheidungen mit unmittelbarem Feedback und schrittweiser Steigerung der Komplexität.\n• Reflexive Journaling: Implementierung strukturierter Selbstreflexion zu herausfordernden Compliance-Situationen, um ein tieferes Verständnis der eigenen Entscheidungsprozesse zu entwickeln.\n• Collaborative Problem Solving: Etablierung interdisziplinärer Fallbesprechungen, in denen komplexe Compliance-Situationen aus verschiedenen fachlichen Perspektiven beleuchtet und ganzheitliche Lösungsansätze entwickelt werden."
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
