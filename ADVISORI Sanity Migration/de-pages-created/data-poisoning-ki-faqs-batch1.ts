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
    console.log('Updating Data Poisoning KI page with Strategic FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'data-poisoning-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "data-poisoning-ki" not found')
    }
    
    // Create new Strategic FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist Data Poisoning eine der gefährlichsten Bedrohungen für KI-Systeme und wie positioniert ADVISORI den Schutz als strategischen Wettbewerbsvorteil?",
        answer: "Data Poisoning repräsentiert eine der raffiniertesten und gefährlichsten Cyberbedrohungen für KI-Systeme, da sie die fundamentale Grundlage des maschinellen Lernens - die Trainingsdaten - kompromittiert. Anders als traditionelle Cyberangriffe, die auf Infrastruktur oder Anwendungen abzielen, manipulieren Data Poisoning Angriffe die Intelligenz selbst und können unentdeckt bleiben, bis kritische Geschäftsentscheidungen auf kompromittierten Modellen basieren. ADVISORI versteht diesen Schutz als essentiellen Baustein für vertrauensvolle KI-Adoption.\n\n🎯 Strategische Bedrohungsdimension für die Führungsebene:\n• Unsichtbare Kompromittierung: Data Poisoning Angriffe sind besonders tückisch, da sie oft während der Trainingsphase erfolgen und erst in kritischen Produktionsszenarien zu Fehlentscheidungen führen.\n• Langfristige Auswirkungen: Einmal kompromittierte Modelle können über Monate oder Jahre hinweg falsche Entscheidungen treffen, ohne dass die Manipulation erkannt wird.\n• Vertrauensverlust und Reputationsschäden: Wenn KI-Systeme aufgrund von Data Poisoning versagen, kann dies das Vertrauen in die gesamte digitale Transformation des Unternehmens erschüttern.\n• Regulatorische und Compliance-Risiken: Kompromittierte KI-Systeme können zu Verstößen gegen Datenschutz und Compliance-Anforderungen führen.\n\n🛡️ ADVISORI's proaktiver Schutzansatz:\n• Mehrstufige Verteidigung: Wir implementieren Defense-in-Depth-Strategien, die sowohl präventive als auch detektive Kontrollen umfassen, um Data Poisoning auf mehreren Ebenen zu verhindern.\n• Datenintegrität durch Design: Entwicklung von KI-Architekturen, die von Grund auf gegen Datenmanipulation gehärtet sind und kontinuierliche Integritätsprüfungen durchführen.\n• Intelligente Anomalieerkennung: Einsatz fortschrittlicher statistischer Methoden und Machine Learning zur Erkennung subtiler Manipulationen in Trainingsdaten.\n• Compliance-Integration: Sicherstellung, dass alle Schutzmaßnahmen DSGVO-konform sind und gleichzeitig maximale Sicherheit bieten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifizieren wir das Risiko von Data Poisoning Angriffen und welchen direkten Einfluss haben ADVISORI's Schutzmaßnahmen auf Geschäftskontinuität und Unternehmenswert?",
        answer: "Die Quantifizierung von Data Poisoning Risiken erfordert eine mehrdimensionale Betrachtung, die sowohl technische Vulnerabilitäten als auch Geschäftsauswirkungen berücksichtigt. ADVISORI entwickelt maßgeschneiderte Risikobewertungsframeworks, die es Unternehmen ermöglichen, fundierte Investitionsentscheidungen für KI-Sicherheit zu treffen und gleichzeitig den Return on Investment von Schutzmaßnahmen zu maximieren.\n\n📊 Risikoquantifizierung und Geschäftsauswirkungen:\n• Potenzielle Schadensbewertung: Analyse der möglichen finanziellen Auswirkungen kompromittierter KI-Entscheidungen auf Umsatz, Kosten und Marktposition des Unternehmens.\n• Wahrscheinlichkeitsanalyse: Bewertung der Eintrittswahrscheinlichkeit von Data Poisoning Angriffen basierend auf Branche, Datenquellen und Bedrohungslandschaft.\n• Ausfallzeiten und Wiederherstellungskosten: Kalkulation der Kosten für Systemausfälle, Modell-Retraining und Geschäftsunterbrechungen bei erfolgreichen Angriffen.\n• Reputations- und Vertrauensschäden: Bewertung der langfristigen Auswirkungen auf Kundenvertrauen und Marktposition bei bekannt gewordenen KI-Kompromittierungen.\n\n💰 ROI von ADVISORI's Schutzmaßnahmen:\n• Präventive Kostenvermeidung: Unsere Schutzmaßnahmen verhindern kostspielige Incident Response Maßnahmen, Modell-Retraining und Geschäftsunterbrechungen.\n• Vertrauensbildung und Marktdifferenzierung: Unternehmen mit nachweislich sicheren KI-Systemen können sich als vertrauensvolle Partner positionieren und Premium-Pricing durchsetzen.\n• Compliance-Effizienz: Integrierte Sicherheitsmaßnahmen reduzieren Audit-Aufwände und minimieren regulatorische Risiken.\n• Beschleunigte KI-Adoption: Mit robusten Sicherheitsmaßnahmen können Unternehmen schneller und selbstbewusster neue KI-Anwendungen einführen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Regulierungslandschaft für KI-Sicherheit entwickelt sich rasant. Wie stellt ADVISORI sicher, dass unsere Data Poisoning Schutzmaßnahmen auch zukünftige Compliance-Anforderungen erfüllen?",
        answer: "In einer Zeit sich schnell entwickelnder KI-Regulierung ist es entscheidend, Sicherheitsmaßnahmen zu implementieren, die nicht nur aktuelle Standards erfüllen, sondern auch für zukünftige regulatorische Entwicklungen gerüstet sind. ADVISORI verfolgt einen vorausschauenden Compliance-Ansatz, der regulatorische Trends antizipiert und adaptive Sicherheitsarchitekturen implementiert, die mit sich ändernden Anforderungen mitwachsen können.\n\n🔄 Adaptive Compliance-Strategie für KI-Sicherheit:\n• Regulatorische Früherkennung: Kontinuierliche Überwachung von Regulierungsentwicklungen in der EU, USA und anderen Schlüsselmärkten, um Compliance-Anforderungen frühzeitig zu identifizieren.\n• Zukunftssichere Architektur-Prinzipien: Implementierung modularer Sicherheitsarchitekturen, die sich schnell an neue regulatorische Anforderungen anpassen lassen, ohne grundlegende Systemänderungen zu erfordern.\n• Dokumentations- und Audit-Bereitschaft: Aufbau umfassender Dokumentationssysteme, die Transparenz über KI-Entscheidungen und Sicherheitsmaßnahmen schaffen und Audit-Anforderungen erfüllen.\n• Proaktive Governance-Integration: Etablierung von KI-Governance-Frameworks, die über Mindestanforderungen hinausgehen und als Best-Practice-Standard fungieren.\n\n🔍 ADVISORI's Regulatory Excellence Framework:\n• Branchenspezifische Compliance-Expertise: Tiefes Verständnis für sektorspezifische Anforderungen in regulierten Branchen wie Finanzdienstleistungen, Gesundheitswesen und kritische Infrastrukturen.\n• Internationale Harmonisierung: Koordination von Compliance-Maßnahmen über verschiedene Jurisdiktionen hinweg für global agierende Unternehmen.\n• Stakeholder-Engagement: Aufbau von Beziehungen zu Regulierungsbehörden und Standardisierungsorganisationen für frühzeitige Einblicke in regulatorische Entwicklungen.\n• Kontinuierliche Anpassung: Implementierung agiler Prozesse zur schnellen Anpassung von Sicherheitsmaßnahmen an neue regulatorische Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI Data Poisoning Schutz von einer defensiven Sicherheitsmaßnahme zu einem strategischen Enabler für vertrauensvolle KI-Innovation?",
        answer: "ADVISORI positioniert Data Poisoning Schutz nicht als isolierte Sicherheitsmaßnahme, sondern als fundamentalen Enabler für vertrauensvolle KI-Innovation und strategische Geschäftstransformation. Unser Ansatz verwandelt Sicherheitsinvestitionen in Wettbewerbsvorteile, die es Unternehmen ermöglichen, KI-Technologien selbstbewusst und aggressiv zu nutzen, während sie gleichzeitig höchste Sicherheits- und Compliance-Standards einhalten.\n\n🚀 Von Defensive zu strategischer Innovation:\n• Vertrauensbasierte Marktdifferenzierung: Unternehmen mit nachweislich sicheren KI-Systemen können sich als vertrauensvolle Partner positionieren und neue Geschäftsmöglichkeiten erschließen.\n• Beschleunigte KI-Adoption: Robuste Sicherheitsmaßnahmen ermöglichen es, KI-Projekte schneller und mit größerem Vertrauen zu skalieren, da Risiken proaktiv adressiert werden.\n• Ökosystem-Vertrauen: Sichere KI-Systeme ermöglichen tiefere Partnerschaften und Datenkooperationen, da Partner Vertrauen in die Sicherheit gemeinsamer KI-Initiativen haben.\n• Regulatorische Führerschaft: Proaktive Sicherheitsmaßnahmen positionieren Unternehmen als Vorreiter in der verantwortungsvollen KI-Nutzung.\n\n💡 ADVISORI's Innovation-Security Integration:\n• Security-by-Design für KI-Innovation: Integration von Sicherheitsüberlegungen in den gesamten KI-Entwicklungszyklus, ohne Innovation zu behindern.\n• Vertrauensarchitekturen: Entwicklung von KI-Systemen, die Transparenz und Nachvollziehbarkeit bieten, um Stakeholder-Vertrauen zu stärken.\n• Kollaborative Sicherheit: Aufbau von Sicherheitsframeworks, die Zusammenarbeit und Datenaustausch zwischen Partnern ermöglichen, ohne Sicherheit zu kompromittieren.\n• Kontinuierliche Innovation: Etablierung von Prozessen zur kontinuierlichen Verbesserung von Sicherheitsmaßnahmen parallel zur KI-Innovation."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Strategic FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
