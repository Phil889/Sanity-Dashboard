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
    console.log('Updating MaRisk Schulungen und Sensibilisierung page with FAQs batch 1...')
    
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
        question: "Wie kann eine nachhaltige MaRisk-Compliance-Kultur in Finanzinstituten verankert werden und welche Rolle spielen dabei Schulungs- und Sensibilisierungsmaßnahmen?",
        answer: "Die nachhaltige Verankerung einer MaRisk-Compliance-Kultur ist ein vielschichtiger Transformationsprozess, der weit über formale Schulungen hinausgeht und eine tiefgreifende Veränderung von Denk- und Verhaltensmustern innerhalb der Organisation erfordert. Ziel ist es, regulatorische Anforderungen nicht als externe Vorgabe, sondern als integralen Bestandteil der Unternehmensidentität zu etablieren. Schulungs- und Sensibilisierungsmaßnahmen fungieren dabei als zentrale Katalysatoren dieses Kulturwandels.\n\n🔄 Kernelemente einer nachhaltigen MaRisk-Compliance-Kultur:\n• Gemeinsames Werteverständnis: Entwicklung eines institutsweit geteilten Verständnisses, dass regulatorische Konformität nicht nur gesetzliche Anforderung, sondern Grundlage für nachhaltigen Geschäftserfolg und Risikominimierung ist.\n• Führungsverantwortung und Vorbildfunktion: Aktive Übernahme und Demonstration von Compliance-Verantwortung durch Management und Führungskräfte auf allen Ebenen (\"Tone from the Top\" und \"Tone from the Middle\").\n• Eigenverantwortliches Risikobewusstsein: Förderung eines proaktiven Compliance-Verständnisses, bei dem Mitarbeiter regulatorische Risiken selbstständig erkennen und adressieren, statt nur auf Anweisungen zu reagieren.\n• Integrierte Entscheidungsprozesse: Verankerung regulatorischer Perspektiven als selbstverständlichen Bestandteil aller Entscheidungsprozesse, von der Produktentwicklung bis zum operativen Tagesgeschäft.\n\n📚 Transformative Rolle von Schulungs- und Sensibilisierungsmaßnahmen:\n• Wissensaufbau und -transfer: Vermittlung eines tiefen Verständnisses der regulatorischen Anforderungen, ihrer Hintergründe und praktischen Implikationen für unterschiedliche Rollen und Funktionen.\n• Verhaltensänderung durch Kontextualisierung: Transformation abstrakter Regulierungen in konkrete, alltagsrelevante Handlungsanweisungen durch praxisnahe Beispiele und institutsspezifische Szenarien.\n• Kontinuierliche Sensibilisierung: Etablierung eines kontinuierlichen Dialogs über Compliance-Themen durch regelmäßige Kommunikationsformate, die Awareness wachhalten und regulatorische Updates vermitteln.\n• Kulturstärkung durch Partizipation: Aktive Einbindung der Mitarbeiter in die Gestaltung von Compliance-Prozessen und Förderung von Feedback-Mechanismen, die Verbesserungspotenziale identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Schulungsformate und methodischen Ansätze haben sich als besonders wirksam für die Vermittlung komplexer MaRisk-Anforderungen erwiesen?",
        answer: "Die effektive Vermittlung komplexer MaRisk-Anforderungen erfordert einen durchdachten Methodenmix, der unterschiedliche Lernpräferenzen bedient und sowohl kognitives Verständnis als auch praktische Handlungskompetenz fördert. Angesichts der Komplexität und Vielschichtigkeit regulatorischer Anforderungen hat sich ein mehrdimensionaler Ansatz als besonders wirksam erwiesen, der verschiedene Formate und Methoden integriert.\n\n🎓 Bewährte Schulungsformate für nachhaltige Lerneffekte:\n• Blended Learning-Konzepte: Kombination von Präsenzformaten für interaktiven Austausch mit digitalen Selbstlernmodulen für flexibles, selbstgesteuertes Lernen im eigenen Tempo und zur bedarfsorientierten Wissensvertiefung.\n• Modulare Mikrolearning-Formate: Aufteilung komplexer Inhalte in kurze, fokussierte Lerneinheiten (5-15 Minuten), die gezielt einzelne Aspekte behandeln und in den Arbeitsalltag integrierbar sind – ideal für regelmäßige Auffrischung und kontinuierliche Sensibilisierung.\n• Interaktive Workshops mit Praxisfokus: Kollaborative Arbeitsformate mit hohem Anwendungsbezug, in denen Teilnehmer konkrete Fallbeispiele aus ihrem eigenen Arbeitskontext analysieren und regulatorische Anforderungen auf reale Szenarien anwenden.\n• Rollenspezifische Learning Journeys: Maßgeschneiderte Lernpfade, die spezifisch auf die regulatorischen Anforderungen und Handlungsbedarfe unterschiedlicher Funktionen und Verantwortungsbereiche zugeschnitten sind.\n\n🧠 Didaktische Prinzipien für tiefgehendes Verständnis:\n• Case-Based Learning: Vermittlung abstrakter regulatorischer Konzepte anhand konkreter, institutsspezifischer Fallbeispiele und Szenarien, die direkte Relevanz für den Arbeitsalltag der Teilnehmer haben.\n• Storytelling-Ansatz: Einbettung regulatorischer Anforderungen in narrative Kontexte, die emotionale Anknüpfungspunkte schaffen und die praktischen Auswirkungen von Compliance-Entscheidungen veranschaulichen.\n• Gamification-Elemente: Integration spielerischer Komponenten wie Wettbewerbe, Punktesysteme oder Simulationen, die Motivation steigern und komplexe Zusammenhänge erlebbar machen.\n• Collaborative Learning: Förderung des kollegialen Austauschs und gemeinsamen Lernens durch Peer-Learning-Formate, Diskussionsgruppen und bereichsübergreifende Lerngemeinschaften."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Schulungsinhalte sollten für verschiedene Zielgruppen im Institut (Geschäftsleitung, Führungskräfte, operative Mitarbeiter) priorisiert werden?",
        answer: "Eine effektive MaRisk-Schulungsstrategie erfordert eine zielgruppenspezifische Differenzierung der Inhalte, die den unterschiedlichen Verantwortungsbereichen, Entscheidungskompetenzen und Handlungskontexten der verschiedenen Hierarchieebenen und Funktionsbereiche im Institut Rechnung trägt. Die Priorisierung und Tiefe der vermittelten Inhalte sollte dabei systematisch auf die spezifischen Compliance-Anforderungen und -Risiken der jeweiligen Zielgruppe ausgerichtet sein.\n\n🏢 Geschäftsleitung und Aufsichtsorgane:\n• Strategische Governance-Implikationen: Vertiefte Auseinandersetzung mit den übergreifenden Governance-Anforderungen der MaRisk, insbesondere zu Gesamtverantwortung, Risikostrategie und Überwachungspflichten.\n• Regulatorischer Kontext und Entwicklungstrends: Umfassendes Verständnis des breiteren regulatorischen Frameworks, aktueller aufsichtlicher Schwerpunkte und zukünftiger Entwicklungen im Regulierungsumfeld.\n• Haftungsrechtliche Dimensionen: Klare Vermittlung der persönlichen haftungsrechtlichen Konsequenzen bei Verstoß gegen MaRisk-Anforderungen, inklusive potenzieller zivilrechtlicher und strafrechtlicher Folgen.\n• Integrative Steuerungsmechanismen: Methoden zur Integration regulatorischer Anforderungen in strategische Entscheidungsprozesse und zur Etablierung einer nachhaltigen Compliance-Kultur im Gesamtinstitut.\n\n👔 Führungskräfte und mittleres Management:\n• Bereichsspezifische Anforderungskaskaden: Detaillierte Vermittlung der MaRisk-Anforderungen mit besonderem Fokus auf die für den jeweiligen Verantwortungsbereich relevanten Bestimmungen und Prozessvorgaben.\n• Implementierungsverantwortung: Konkrete Handlungsanleitungen zur operativen Umsetzung regulatorischer Anforderungen in den eigenen Organisationseinheiten und zur Überwachung der Compliance.\n• Kommunikations- und Eskalationsprozesse: Klare Definition von Berichts-, Eskalations- und Informationswegen bei Compliance-relevanten Sachverhalten und potenziellen Regelverstößen.\n• Mitarbeiterführung und Kulturprägung: Strategien zur Förderung einer Compliance-Kultur im eigenen Team und zur Motivation von compliance-konformem Verhalten bei Mitarbeitern.\n\n👥 Operative Mitarbeiter und Fachspezialisten:\n• Handlungsorientierte Compliance-Guidelines: Präzise, auf konkrete Arbeitsprozesse bezogene Handlungsanleitungen zur Einhaltung regulatorischer Anforderungen im täglichen Arbeitskontext.\n• Prozessspezifische Kontrollanforderungen: Detaillierte Vermittlung der im eigenen Tätigkeitsbereich relevanten Kontrollaktivitäten, Dokumentationspflichten und Qualitätsstandards.\n• Problemidentifikation und Eskalationswege: Sensibilisierung für Warnsignale potenzieller Compliance-Verstöße und klare Kommunikation der entsprechenden Melde- und Eskalationswege.\n• Praxisorientierte Fallbeispiele: Anwendungsorientierte Szenarien aus dem direkten Arbeitsumfeld mit konkreten Entscheidungs- und Handlungssituationen zur Verankerung des regulatorischen Wissens."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können der Erfolg und die Wirksamkeit von MaRisk-Schulungsmaßnahmen gemessen und nachhaltig gesichert werden?",
        answer: "Die systematische Messung und nachhaltige Sicherung der Wirksamkeit von MaRisk-Schulungsmaßnahmen ist ein vielschichtiger Prozess, der über traditionelle Feedback-Erhebungen hinausgeht und eine mehrdimensionale Evaluation auf verschiedenen Ebenen erfordert. Eine umfassende Wirksamkeitsmessung berücksichtigt sowohl unmittelbare Lerneffekte als auch langfristige Verhaltensänderungen und organisationale Auswirkungen.\n\n📊 Mehrstufiges Evaluationsmodell für ganzheitliche Wirksamkeitsmessung:\n• Reaktionsebene: Systematische Erfassung der Teilnehmerzufriedenheit und subjektiven Einschätzung der Relevanz und Qualität der Schulungsinhalte durch strukturierte Feedback-Bögen und qualitative Interviews.\n• Lernebene: Objektive Überprüfung des Wissenszuwachses durch Pre- und Post-Tests, die sowohl theoretisches Verständnis als auch die Anwendung auf praktische Szenarien abprüfen.\n• Verhaltensebene: Evaluation der tatsächlichen Verhaltensänderungen im Arbeitsalltag durch strukturierte Beobachtungen, Vorgesetztenbeurteilungen und Self-Assessment-Instrumente mit Fokus auf konkrete Compliance-relevante Handlungsmuster.\n• Organisationsebene: Messung der übergreifenden Auswirkungen auf institutionelle Kennzahlen wie Anzahl der Compliance-Verstöße, Ergebnisse interner Audits, Qualität der Compliance-Dokumentation und Performance in externen Prüfungen.\n\n🔄 Strategien zur nachhaltigen Wirksamkeitssicherung:\n• Kontinuierliche Refresh-Mechanismen: Implementierung eines systematischen Auffrischungszyklus mit regelmäßigen Microlearnings, Wissens-Checks und kurzen Update-Formaten, die das erlernte Wissen regelmäßig aktivieren.\n• Adaptive Lernpfade: Entwicklung personalisierbarer Lernwege, die basierend auf Evaluationsergebnissen individuelle Wissens- und Verständnislücken adressieren und zielgerichtete Nachschulungen ermöglichen.\n• Integration in Performancemanagement: Verankerung von Compliance-Kompetenzen in Mitarbeiterbeurteilungen und Zielvereinbarungen mit klaren, messbaren Kriterien für compliance-konformes Verhalten.\n• Wissensgemeinschaften und Praxisnetzwerke: Förderung von Peer-Learning und kontinuierlichem Wissensaustausch durch Communities of Practice, die den Dialog über MaRisk-Themen lebendig halten und praktische Umsetzungsfragen kollaborativ adressieren."
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
