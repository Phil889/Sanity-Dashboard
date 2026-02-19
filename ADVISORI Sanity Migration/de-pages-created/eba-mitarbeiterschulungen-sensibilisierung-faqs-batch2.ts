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
    console.log('Updating EBA Mitarbeiterschulungen & Sensibilisierung page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Welche digitalen Innovationen revolutionieren aktuell die EBA-Compliance-Schulungen und wie können wir diese in unserer Organisation implementieren?",
        answer: "Die Digitalisierung von EBA-Compliance-Schulungen hat in den letzten Jahren einen transformativen Sprung erlebt, der weit über die bloße Verlagerung von Präsenztrainings in virtuelle Formate hinausgeht. Innovative Technologien ermöglichen heute personalisierte, kontextsensitive und hocheffiziente Lernlösungen, die sowohl die Wirksamkeit als auch die Kosteneffizienz von Compliance-Schulungen signifikant steigern können.\n\n🚀 Disruptive Innovationen in der digitalen Compliance-Schulung:\n• Adaptive Learning Systeme: KI-gestützte Plattformen, die Lerninhalte und -tempo automatisch an das individuelle Wissen, die Rolle und das Lernverhalten jedes Mitarbeiters anpassen und damit die Relevanz und Effizienz maximieren.\n• Augmented Reality (AR) für Prozesstraining: AR-Anwendungen, die regulatorische Anforderungen in reale Arbeitsprozesse einblenden und Mitarbeiter im exakten Moment der Entscheidungsfindung unterstützen.\n• Learning Experience Platforms (LXP): Moderne Lernökosysteme, die traditionelles E-Learning mit Social Learning, kuratiertem Content und personalisierten Lernpfaden kombinieren und damit kontinuierliches Lernen fördern.\n• Analytics und Predictive Compliance: Fortschrittliche Datenanalysen, die Risikobereiche für potenzielle Compliance-Verstöße identifizieren und proaktiv gezielte Schulungsinterventionen auslösen können.\n\n🔄 Implementierungsstrategien für Ihre Organisation:\n• Digital Learning Governance: Etablierung eines klaren Governance-Rahmens, der die Rollen, Verantwortlichkeiten und Qualitätsstandards für digitale Compliance-Schulungen definiert.\n• Agile Pilotierung: Implementierung neuer Technologien in kontrollierten Pilotprojekten mit schnellen Feedback-Zyklen, bevor sie unternehmensweit ausgerollt werden.\n• Integrierte Technologielandschaft: Sicherstellung, dass neue Lernplattformen nahtlos mit bestehenden Systemen (HR, Compliance Management, etc.) interagieren und Daten austauschen können.\n• Digital Learning Champions: Identifikation und Förderung interner Multiplikatoren, die als Botschafter für digitale Lernlösungen fungieren und den kulturellen Wandel unterstützen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie können wir Mitarbeiterschulungen zu EBA-Vorschriften kulturell sensibel gestalten, um globale Teams effektiv zu erreichen?",
        answer: "Die erfolgreiche Implementierung von EBA-Compliance-Schulungen in globalen Teams erfordert weit mehr als eine reine Übersetzung von Inhalten. Kulturelle Unterschiede in Lernstilen, Risikowahrnehmung, Hierarchieverständnis und kommunikativen Präferenzen haben signifikanten Einfluss auf die Wirksamkeit von Schulungsmaßnahmen und müssen systematisch berücksichtigt werden.\n\n🌍 Dimensionen kultureller Sensibilität in Compliance-Schulungen:\n• Kontextuelle Anpassung regulatorischer Konzepte: EBA-Vorschriften müssen in lokale Geschäftspraktiken und Regulierungskontexte eingebettet werden, um ihre praktische Relevanz zu verdeutlichen.\n• Differenzierte Risikowahrnehmung: Kulturell bedingte Unterschiede in der Wahrnehmung und Bewertung von Compliance-Risiken erfordern angepasste Sensibilisierungsansätze.\n• Hierarchiedynamiken: Der Einfluss von Machtdistanz auf Feedback-Prozesse und offene Diskussionen über Compliance-Herausforderungen variiert erheblich zwischen verschiedenen Kulturkreisen.\n• Kommunikationspräferenzen: Die Wirksamkeit direkter versus indirekter Kommunikation, narrativer versus faktischer Darstellung und verschiedener medialer Formate unterscheidet sich kulturell signifikant.\n\n🛠️ Framework für kulturell sensible Compliance-Schulungen:\n• Lokale Co-Creation: Einbindung lokaler Compliance-Experten und Mitarbeiter in die Entwicklung und Anpassung von Schulungsinhalten, um kulturelle Relevanz sicherzustellen.\n• Modulare Design-Architektur: Entwicklung eines Core-Satellite-Ansatzes mit kulturübergreifenden Kerninhalten und kulturspezifischen Erweiterungsmodulen.\n• Diversifizierte Delivery-Methoden: Angebot verschiedener Lernformate und -wege, die unterschiedliche kulturelle Präferenzen bedienen und verschiedene Lernstile ansprechen.\n• Kulturelle Sensibilisierung der Trainer: Spezifisches Training für Schulungsleiter zu kulturellen Unterschieden in Lernverhalten, Feedback-Prozessen und der Diskussion sensibler Compliance-Themen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie können wir die neuesten Erkenntnisse der Verhaltensökonomie nutzen, um die Wirksamkeit unserer EBA-Compliance-Schulungen zu steigern?",
        answer: "Die Verhaltensökonomie bietet revolutionäre Einblicke in menschliche Entscheidungsprozesse, die traditionelle Annahmen über rationales Handeln in Frage stellen. Diese Erkenntnisse können gezielt genutzt werden, um Compliance-Schulungen zu transformieren – von der reinen Wissensvermittlung hin zu einer systematischen Beeinflussung tatsächlichen Verhaltens im Arbeitsalltag.\n\n🧠 Verhaltensökonomische Prinzipien für effektive Compliance-Schulungen:\n• Framing-Effekte nutzen: Die Art, wie Compliance-Anforderungen dargestellt werden, beeinflusst maßgeblich deren Wahrnehmung und Umsetzung. Positive Frames (Chancen und Vorteile) versus negative Frames (Risiken und Konsequenzen) wirken unterschiedlich auf verschiedene Zielgruppen.\n• Default-Optionen strategisch setzen: Die Gestaltung von Systemen und Prozessen mit compliances Verhalten als Standardoption (Opt-out statt Opt-in) reduziert kognitive Barrieren und erleichtert regelkonformes Handeln.\n• Present Bias adressieren: Menschen neigen dazu, kurzfristige Vorteile (z.B. Abkürzungen bei Prozessen) gegenüber langfristigen Risiken (regulatorische Konsequenzen) zu übergewichten. Diesen Bias gilt es durch unmittelbare positive Verstärkung compliances Verhaltens auszugleichen.\n• Soziale Normen aktivieren: Die Kommunikation darüber, dass die Mehrheit der Kollegen sich regelkonform verhält, kann wirksamer sein als die Androhung von Sanktionen bei Verstößen.\n\n💡 ADVISORI-Methoden zur Implementierung verhaltensökonomischer Ansätze:\n• Verhaltensbasierte Schulungsdiagnostik: Systematische Analyse der spezifischen kognitiven Verzerrungen und Entscheidungsheuristiken, die in Ihrer Organisation zu Compliance-Risiken führen können.\n• Nudging-Architekturen: Entwicklung subtiler Entscheidungshilfen im Arbeitsumfeld, die compliances Verhalten unterstützen, ohne die Entscheidungsfreiheit einzuschränken.\n• Just-in-Time-Interventionen: Implementierung kontextsensitiver Erinnerungen und Unterstützungsmechanismen, die genau in den Momenten aktiviert werden, in denen Compliance-Entscheidungen getroffen werden müssen.\n• Experimentelles Design: Systematisches Testen verschiedener verhaltensbasierter Interventionen durch kontrollierte Experimente, um deren Wirksamkeit zu messen und kontinuierlich zu optimieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können wir die Effektivität unserer EBA-Compliance-Schulungen kontinuierlich messen und evidenzbasiert optimieren?",
        answer: "Die Messung und evidenzbasierte Optimierung von Compliance-Schulungen erfordert einen mehrdimensionalen Ansatz, der über traditionelle Zufriedenheitsumfragen und Wissenstests hinausgeht. Ein fortschrittliches Evaluierungsframework erfasst den gesamten Wirkungspfad – von der unmittelbaren Reaktion über Wissenszuwachs und Verhaltensänderung bis hin zu organisationalen Ergebnissen.\n\n📏 Mehrstufiges Evaluierungsmodell für Compliance-Schulungen:\n• Reaktionsebene: Systematische Erfassung der Teilnehmerzufriedenheit, wahrgenommenen Relevanz und Engagement-Metriken durch differenzierte Feedback-Mechanismen und Interaktionsdaten.\n• Lernebene: Messung des tatsächlichen Wissenszuwachses durch adaptive Assessments, die verschiedene kognitive Ebenen (Verstehen, Anwenden, Analysieren) abdecken und latentes Wissen überprüfen.\n• Verhaltensebene: Evaluation der tatsächlichen Anwendung des Gelernten im Arbeitsalltag durch strukturierte Beobachtungen, Prozessanalysen und systematisches Feedback von Führungskräften.\n• Ergebnisebene: Quantifizierung der organisationalen Auswirkungen durch Korrelationsanalysen zwischen Schulungsmaßnahmen und Compliance-KPIs wie Vorfallraten, Audit-Ergebnissen und Prozesseffizienz.\n\n🔄 Kontinuierlicher Optimierungszyklus:\n• Predictive Analytics: Nutzung fortschrittlicher Datenanalysen zur Identifikation von Faktoren, die die Wirksamkeit von Schulungsmaßnahmen beeinflussen, und zur Vorhersage potenzieller Compliance-Risikobereiche.\n• Formativer Evaluationsansatz: Integration kontinuierlicher Feedbackschleifen in den Schulungsprozess, die Anpassungen in Echtzeit ermöglichen und eine agile Weiterentwicklung fördern.\n• A/B-Testing von Schulungsinterventionen: Systematisches Experimentieren mit verschiedenen Schulungsansätzen in kontrollierten Umgebungen zur evidenzbasierten Identifikation der wirksamsten Methoden.\n• Learning Experience Data: Aggregation und Analyse detaillierter Nutzungsdaten aus digitalen Lernplattformen zur Identifikation von Engagement-Mustern, Lernbarrieren und optimalen Lernpfaden."
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
