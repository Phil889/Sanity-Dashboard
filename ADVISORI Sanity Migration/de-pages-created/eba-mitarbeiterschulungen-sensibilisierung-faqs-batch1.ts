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
    console.log('Updating EBA Mitarbeiterschulungen & Sensibilisierung page with FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum sind strategische Mitarbeiterschulungen zu EBA-Vorschriften für Finanzinstitute mehr als nur ein regulatorisches Erfordernis?",
        answer: "Strategische Mitarbeiterschulungen zu EBA-Vorschriften gehen weit über die bloße Erfüllung regulatorischer Anforderungen hinaus und stellen einen fundamentalen Wertschöpfungshebel für Finanzinstitute dar. Sie transformieren Compliance von einer reinen Pflichtübung zu einem strategischen Wettbewerbsvorteil mit messbaren positiven Auswirkungen auf Geschäftsergebnisse und Unternehmenskultur.\n\n🔑 Strategische Dimensionen effektiver EBA-Schulungsprogramme:\n• Risikominimierung durch Prävention: Gut geschulte Mitarbeiter erkennen Compliance-Risiken frühzeitig und können proaktiv handeln, bevor Verstöße entstehen, was potenzielle Bußgelder und Reputationsschäden verhindert.\n• Effizienzsteigerung durch Integration: Die Integration von Compliance-Anforderungen in tägliche Arbeitsprozesse reduziert Reibungsverluste und vermeidet nachträgliche Korrekturen, was die Prozesseffizienz signifikant steigert.\n• Kulturelle Transformation: Strategische Schulungsprogramme fördern eine Unternehmenskultur, in der Compliance nicht als Hindernis, sondern als integraler Bestandteil der Geschäftsstrategie verstanden wird.\n• Wettbewerbsdifferenzierung: Institute mit ausgeprägter Compliance-Kultur genießen höheres Vertrauen bei Kunden, Partnern und Aufsichtsbehörden, was in einem stark regulierten Markt ein entscheidender Differenzierungsfaktor sein kann.\n\n💡 Der ADVISORI-Ansatz für transformative Schulungsprogramme:\n• Strategische Verankerung: Wir alignieren Schulungsprogramme mit Ihrer Unternehmensstrategie und machen Compliance zum Enabler für Geschäftsziele statt zum isolierten Pflichtprogramm.\n• Verhaltensbasiertes Learning Design: Unsere Schulungskonzepte basieren auf neuesten Erkenntnissen der Verhaltensökonomie und Erwachsenenbildung, um nachhaltige Verhaltensänderungen zu bewirken.\n• Digitale Innovation: Wir nutzen adaptive Lernplattformen, Microlearning und Gamification, um Engagement zu erhöhen und kontinuierliches Lernen im Arbeitsalltag zu ermöglichen.\n• Messbare Wirksamkeit: Unsere Schulungsprogramme werden durch KPIs und fortschrittliche Analysetools evaluiert, die den konkreten Geschäftswert der Maßnahmen nachweisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir sicherstellen, dass unsere Mitarbeiterschulungen zu EBA-Vorschriften tatsächlich zu nachhaltigem Compliance-Verhalten führen?",
        answer: "Die Transformation von Schulungsinhalten in nachhaltiges Compliance-Verhalten erfordert einen wissenschaftlich fundierten, ganzheitlichen Ansatz, der weit über traditionelle Wissensvermittlung hinausgeht. Entscheidend ist die Überbrückung der sogenannten \"Knowing-Doing Gap\" – der Kluft zwischen Wissen und tatsächlichem Handeln im Arbeitsalltag.\n\n🧠 Psychologische Grundlagen für Verhaltensänderung in der Compliance:\n• Intrinsische Motivation stärken: Mitarbeiter müssen den persönlichen Wert von Compliance verstehen – nicht nur für das Institut, sondern auch für ihre eigene Rolle und berufliche Entwicklung.\n• Soziale Normen nutzen: Die sichtbare Vorbildfunktion von Führungskräften und Peers hat stärkeren Einfluss auf Compliance-Verhalten als formale Regeln oder Schulungsinhalte.\n• Entscheidungsarchitektur optimieren: Arbeitsabläufe und Systeme sollten so gestaltet sein, dass compliances Verhalten der einfachere Weg ist (\"Compliance by Design\").\n• Selbstwirksamkeit fördern: Mitarbeiter müssen konkrete Handlungskompetenzen entwickeln und Erfolgserlebnisse in der Anwendung von Compliance-Wissen erfahren.\n\n🛠️ Praxiserprobte ADVISORI-Methoden für nachhaltiges Compliance-Verhalten:\n• Kontextbasiertes Microlearning: Kurze, relevante Lerneinheiten, die genau dann bereitgestellt werden, wenn Mitarbeiter sie in ihrem Arbeitskontext benötigen.\n• Immersive Szenariotrainings: Realitätsnahe Simulationen von Compliance-Herausforderungen mit direktem Feedback und Reflexionsmöglichkeiten.\n• Behavioural Nudging: Subtile Erinnerungen und Entscheidungshilfen im Arbeitsalltag, die compliances Verhalten fördern, ohne bevormundend zu wirken.\n• Kontinuierliche Verstärkung: Systematisches positives Feedback, Anerkennung und gezielte Reflexionsimpulse, die erwünschtes Verhalten verstärken und verstetigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir den ROI unserer Investitionen in EBA-Compliance-Schulungen und Sensibilisierungsmaßnahmen messen und maximieren?",
        answer: "Die Messung und Maximierung des ROI von Compliance-Schulungen erfordert einen mehrdimensionalen Ansatz, der sowohl direkte Kosteneinsparungen als auch indirekte Wertschöpfungsbeiträge quantifiziert. Eine strategische Herangehensweise ermöglicht es, Compliance-Schulungen von einem Kostenfaktor zu einem messbaren Werttreiber zu transformieren.\n\n📊 Framework zur ROI-Messung von Compliance-Schulungen:\n• Risikoreduktionsmetrik: Quantifizierung vermiedener Kosten durch Reduzierung von Compliance-Verstößen, regulatorischen Strafen und Prozessfehlern nach Schulungsmaßnahmen.\n• Effizienzgewinn-Tracking: Messung der Zeitersparnis durch verbesserte Prozessintegration und Reduktion von Nacharbeiten bei regulatorischen Anforderungen.\n• Produktivitätsbeitrag: Bewertung der erhöhten Entscheidungsgeschwindigkeit und verbesserten Selbständigkeit von Mitarbeitern bei compliance-relevanten Themen.\n• Cultural Impact Assessment: Analyse der Auswirkungen gesteigerter Compliance-Kultur auf Mitarbeiterzufriedenheit, Fluktuation und Attraktivität als Arbeitgeber.\n\n💼 Strategien zur ROI-Maximierung Ihrer Schulungsinvestitionen:\n• Segmentierte Schulungsansätze: Maßgeschneiderte Programme für verschiedene Rollen und Risikobereiche, die Ressourcen gezielt dort einsetzen, wo sie den größten Wertbeitrag leisten.\n• Technologiegestützte Skalierung: Einsatz digitaler Plattformen, die einmal entwickelte Inhalte kosteneffizient skalieren und kontinuierlich aktualisieren können.\n• Performance Support statt isolierter Schulungen: Integration von Lernressourcen in Arbeitsabläufe, was den Transfer in die Praxis maximiert und den Schulungsaufwand reduziert.\n• Datengesteuerte Optimierung: Kontinuierliche Analyse von Nutzungsdaten und Leistungsindikatoren zur iterativen Verbesserung der Schulungsmaßnahmen und gezielten Ressourcenallokation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir unsere Führungskräfte effektiv in die EBA-Compliance-Schulungsstrategie einbinden und als Vorbilder positionieren?",
        answer: "Die Einbindung von Führungskräften ist der entscheidende Erfolgsfaktor für die nachhaltige Wirksamkeit jeder Compliance-Schulungsstrategie. Führungskräfte setzen nicht nur den \"Tone from the Top\", sondern fungieren als Multiplikatoren und kulturelle Botschafter, die Compliance-Bewusstsein in ihren Teams verankern und vorleben können.\n\n👥 Strategische Rolle der Führungskräfte in der Compliance-Kultur:\n• Authentische Vorbildfunktion: Führungskräfte demonstrieren durch ihr eigenes Verhalten, dass Compliance keine optionale Zusatzaufgabe, sondern ein integraler Bestandteil aller Geschäftsentscheidungen ist.\n• Kommunikative Brückenfunktion: Sie übersetzen abstrakte regulatorische Anforderungen in konkrete, relevante Handlungsimplikationen für ihre Teams und schaffen Sinnzusammenhänge.\n• Ermächtigung und Accountability: Führungskräfte befähigen ihre Mitarbeiter zu eigenverantwortlichem Compliance-Handeln und schaffen gleichzeitig klare Verantwortlichkeiten.\n• Feedback-Kultur: Sie etablieren einen offenen Dialog über Compliance-Herausforderungen und fördern eine psychologisch sichere Umgebung, in der Bedenken ohne Angst vor Konsequenzen angesprochen werden können.\n\n🌟 ADVISORI-Ansatz zur Führungskräfteaktivierung:\n• Exklusive Leadership Enablement Sessions: Spezielle Workshops für Führungskräfte, die nicht nur Fachkompetenz vermitteln, sondern auch konkrete Kommunikations- und Coaching-Tools für die Compliance-Führung.\n• Storytelling-Toolkit: Entwicklung überzeugender Narrative und Fallbeispiele, mit denen Führungskräfte die Relevanz von EBA-Compliance für ihre Teams greifbar machen können.\n• Integrierte Performance-Indikatoren: Implementierung von Compliance-KPIs in Führungskennzahlen und Vergütungssysteme, um strategische Priorität zu signalisieren.\n• Peer-Learning-Netzwerke: Etablierung strukturierter Austauschformate zwischen Führungskräften, um Best Practices zu teilen und gemeinsame Herausforderungen zu adressieren."
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
