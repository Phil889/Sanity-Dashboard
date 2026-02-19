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
    console.log('Updating MaRisk Schulungen und Sensibilisierung page with FAQs batch 2...')
    
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
        question: "Wie können digitale Lernformate und E-Learning-Lösungen optimal für die MaRisk-Schulung und kontinuierliche Sensibilisierung eingesetzt werden?",
        answer: "Digitale Lernformate und E-Learning-Lösungen haben das Potenzial, die Effektivität und Reichweite von MaRisk-Schulungen signifikant zu steigern, wenn sie strategisch konzipiert und in ein ganzheitliches Lernökosystem integriert werden. Die digitale Transformation des regulatorischen Lernens ermöglicht nicht nur Skalierbarkeit und Kosteneffizienz, sondern auch innovative didaktische Ansätze, die den komplexen Anforderungen der MaRisk gerecht werden.\n\n💻 Strategische Erfolgsfaktoren für digitale MaRisk-Lernlösungen:\n• Modularer Mikrolearning-Ansatz: Strukturierung der komplexen regulatorischen Inhalte in kurze, fokussierte Lerneinheiten (5-10 Minuten), die gezielt einzelne MaRisk-Aspekte behandeln und flexibel in den Arbeitsalltag integrierbar sind.\n• Adaptive Lernpfade: Implementierung intelligenter Lernwegsteuerung, die basierend auf individuellen Vorkenntnissen, Funktionen im Institut und Lernfortschritten personalisierte Inhalte und Vertiefungen anbietet.\n• Multimediale Wissensaufbereitung: Kombination verschiedener Medienformate (Videos, Infografiken, interaktive Elemente, Audio) zur Ansprache unterschiedlicher Lerntypen und zur Förderung einer tieferen Informationsverarbeitung.\n• Kontextbezogene Just-in-Time-Verfügbarkeit: Bereitstellung von regulatorischem Wissen genau dann, wenn es im Arbeitskontext benötigt wird, durch integrierte Wissensdatenbanken und kontextsensitive Hilfe-Funktionen.\n\n🔄 Kontinuierliche Sensibilisierung durch digitale Touchpoints:\n• Regelmäßige Microlearning-Impulse: Etablierung eines systematischen Rhythmus kurzer Lernimpulse (z.B. wöchentliche 5-Minuten-Updates), die kontinuierlich Compliance-Bewusstsein aktivieren und regulatorisches Wissen aktuell halten.\n• Gamification-Elemente zur Motivationssteigerung: Integration spielerischer Komponenten wie Punktesysteme, Badges, Leaderboards oder Challenges, die langfristiges Engagement fördern und die kontinuierliche Auseinandersetzung mit Compliance-Themen stimulieren.\n• Digitale Wissens-Checks und Quizformate: Regelmäßige, niedrigschwellige Selbsttests, die sowohl der Selbstreflexion als auch der Identifikation von Wissenslücken dienen und automatisierte Empfehlungen für Auffrischungsinhalte generieren.\n• Learning Nuggets zu aktuellen Entwicklungen: Schnelle Reaktion auf regulatorische Änderungen oder neue aufsichtliche Erwartungen durch agil produzierte und sofort verfügbare digitale Kurzinformationen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie kann eine MaRisk-Awareness-Kampagne gestaltet werden, die nachhaltig das Risikobewusstsein und die Compliance-Kultur im Institut stärkt?",
        answer: "Eine wirksame MaRisk-Awareness-Kampagne geht über isolierte Informationsaktionen hinaus und stellt einen strategisch orchestrierten Change-Prozess dar, der auf eine nachhaltige Verhaltens- und Kulturveränderung abzielt. Die systematische Konzeption und mehrdimensionale Implementierung einer solchen Kampagne kann einen substantiellen Beitrag zur Stärkung der Compliance-Kultur und des regulatorischen Risikobewusstseins im gesamten Institut leisten.\n\n🎯 Strategische Erfolgsfaktoren für nachhaltige Awareness-Kampagnen:\n• Ganzheitliche Kampagnenarchitektur: Entwicklung eines umfassenden Konzepts mit klarer Storyline, aufeinander aufbauenden Phasen und konsistenter visueller Identität, das über mehrere Monate hinweg verschiedene Awareness-Dimensionen adressiert.\n• Emotionale Ansprache und Storytelling: Transformation abstrakter regulatorischer Anforderungen in emotionale, alltagsnahe Narrative, die persönliche Betroffenheit erzeugen und die praktische Relevanz von Compliance für jeden einzelnen Mitarbeiter verdeutlichen.\n• Multi-Channel-Kommunikationsstrategie: Orchestrierter Einsatz verschiedener Kommunikationskanäle (Digital Signage, Intranet, E-Mail, Printmedien, Präsenzformate), um verschiedene Wahrnehmungsebenen anzusprechen und kontinuierliche Präsenz im Arbeitsalltag zu schaffen.\n• Aktive Einbindung von Multiplikatoren: Gezielte Aktivierung von Führungskräften und informellen Meinungsführern als Botschafter der Kampagne, die die Bedeutung der MaRisk-Compliance authentisch in ihre Teams tragen und vorleben.\n\n🧩 Praktische Kampagnenbausteine für maximale Wirksamkeit:\n• Aufmerksamkeitsstarke Initialphase: Auftakt mit überraschenden, unkonventionellen Elementen (z.B. inszenierte Compliance-Vorfälle, provokante Fragen, unerwartete Interventionen), die Aufmerksamkeit generieren und Diskussionen anstoßen.\n• Interaktive Beteiligungsformate: Integration partizipativer Elemente wie Compliance-Challenges, Team-Wettbewerbe oder kollaborative Problem-Solving-Formate, die aktives Engagement fördern und die persönliche Auseinandersetzung mit dem Thema intensivieren.\n• Alltagsintegrierte Erinnerungsanker: Platzierung visueller und haptischer Awareness-Trigger im täglichen Arbeitsumfeld (z.B. Mousepads, Bildschirmschoner, Kaffeetassen), die als kontinuierliche Erinnerungsimpulse für compliance-relevante Verhaltensweisen dienen.\n• Nachhaltige Verankerungsmechanismen: Entwicklung von Formaten, die über die eigentliche Kampagnenlaufzeit hinaus wirken, wie Compliance-Rituale in Teammeetings, kontinuierliche digitale Wissens-Nuggets oder regelmäßige Reflexionsimpulse in bestehenden Kommunikationskanälen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Rolle spielen Führungskräfte bei der Förderung einer MaRisk-konformen Kultur und wie können sie dafür gezielt qualifiziert werden?",
        answer: "Führungskräfte nehmen eine Schlüsselrolle bei der Etablierung und Aufrechterhaltung einer MaRisk-konformen Unternehmenskultur ein, da sie an der Schnittstelle zwischen strategischen Compliance-Vorgaben und operativer Umsetzung agieren. Ihre Vorbildfunktion, kommunikative Vermittlungsrolle und kontinuierliche Aufmerksamkeitslenkung sind entscheidende Hebel für die kulturelle Verankerung regulatorischer Compliance im täglichen Handeln aller Mitarbeiter.\n\n🔑 Zentrale Führungsfunktionen für eine MaRisk-konforme Kultur:\n• Authentische Vorbildfunktion (\"Walk the Talk\"): Konsequente Demonstration von Compliance-konformem Verhalten im eigenen Handeln, insbesondere in Entscheidungssituationen mit potenziellen Zielkonflikten zwischen Geschäftserfolg und regulatorischen Anforderungen.\n• Kulturelle Übersetzungsleistung: Transformation abstrakter regulatorischer Anforderungen in konkrete, funktionsspezifische Handlungsimplikationen und Verdeutlichung ihrer praktischen Relevanz für den spezifischen Verantwortungsbereich des Teams.\n• Konsequente Erwartungsklärung: Explizite und implizite Kommunikation klarer Erwartungen an compliance-konformes Verhalten, gekoppelt mit konsequentem Feedback bei Abweichungen und aktiver Wertschätzung bei vorbildlicher Umsetzung.\n• Kontinuierliche Sensibilisierung: Regelmäßige Thematisierung von Compliance-Aspekten in Teammeetings, Einzelgesprächen und Entscheidungsprozessen, um das Bewusstsein für regulatorische Anforderungen dauerhaft präsent zu halten.\n\n📋 Qualifizierungsansätze für Führungskräfte als Compliance-Multiplikatoren:\n• Zweistufige Führungskräfteschulung: Kombination aus vertiefter fachlicher Qualifizierung zu MaRisk-Anforderungen und gezieltem Training kommunikativer und kulturprägender Kompetenzen für die Vermittlung und Verankerung im Team.\n• Praxisorientierte Dilemma-Workshops: Bearbeitung konkreter, alltagsnaher Fallbeispiele mit potenziellen Zielkonflikten zwischen Geschäfts- und Compliance-Zielen, um Entscheidungs- und Argumentationssicherheit in kritischen Situationen zu entwickeln.\n• Toolbox für kulturelle Interventionen: Bereitstellung konkreter Methoden, Gesprächsleitfäden und Workshop-Formate, mit denen Führungskräfte eigenständig Compliance-Themen in ihren Teams adressieren und verankern können.\n• Kollegiale Fallberatung und Erfahrungsaustausch: Etablierung moderierter Austauschformate zwischen Führungskräften unterschiedlicher Bereiche zur Reflexion kultureller Herausforderungen und zum Transfer erfolgreicher Interventionsansätze."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Kriterien sollten bei der Auswahl externer Schulungs- und Trainingsanbieter für MaRisk-Schulungen besonders berücksichtigt werden?",
        answer: "Die sorgfältige Auswahl geeigneter externer Schulungs- und Trainingsanbieter ist ein entscheidender Erfolgsfaktor für die Wirksamkeit von MaRisk-Qualifizierungsmaßnahmen. Eine fundierte Auswahlentscheidung sollte auf einer systematischen Bewertung verschiedener Qualitätsdimensionen basieren, die sowohl die fachliche Expertise als auch die didaktische Kompetenz und die Passgenauigkeit zum Institut umfassen.\n\n🔍 Kernkriterien für die Anbieterauswahl:\n• Duale Expertise: Umfassende Fachkompetenz sowohl in regulatorischen Anforderungen und aufsichtlichen Erwartungen als auch in bankenspezifischen Geschäftsprozessen und organisatorischen Rahmenbedingungen, um regulatorische Anforderungen praxisnah kontextualisieren zu können.\n• Praxiserfahrung und Umsetzungskompetenz: Nachgewiesene Erfahrung in der praktischen Implementierung von MaRisk-Anforderungen und direkter Umgang mit der Aufsicht, nicht nur theoretisches Wissen über regulatorische Texte.\n• Didaktische Exzellenz und methodische Vielfalt: Professionelle Trainingskonzeption mit zeitgemäßen, aktivierenden Lernmethoden, die über klassische Frontalvermittlung hinausgehen und nachhaltigen Wissenstransfer in die Praxis sicherstellen.\n• Branchen- und institutsspezifische Anpassungsfähigkeit: Bereitschaft und Fähigkeit zur maßgeschneiderten Kontextualisierung von Schulungsinhalten auf die spezifischen Geschäftsmodelle, Risikoprofile und organisatorischen Besonderheiten des Instituts.\n\n📋 Systematischer Auswahlprozess in drei Schritten:\n• Strukturierte Anforderungsdefinition: Präzise Formulierung der fachlichen, methodischen und organisatorischen Anforderungen an den Schulungsanbieter in einem detaillierten Anforderungskatalog, der als Bewertungsgrundlage dient.\n• Mehrstufiger Evaluationsprozess: Kombinierte Bewertung auf Basis von Referenzen, Konzeptpräsentationen und praktischen Probetrainings, um sowohl konzeptionelle Qualität als auch tatsächliche Umsetzungskompetenz zu evaluieren.\n• Kontinuierliche Qualitätssicherung: Etablierung eines systematischen Monitorings der Schulungsqualität durch strukturierte Teilnehmerfeedbacks, Learning Assessments und regelmäßige Review-Gespräche mit Fokus auf kontinuierliche Optimierung."
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
