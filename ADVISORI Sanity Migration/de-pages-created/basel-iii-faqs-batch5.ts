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
    console.log('Updating Basel III page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Implikationen hat Basel III für unsere Produktentwicklung und wie unterstützt ADVISORI uns bei der Entwicklung regulatorisch optimierter Finanzprodukte?",
        answer: "Basel III hat tiefgreifende Auswirkungen auf die Wirtschaftlichkeit und Attraktivität verschiedener Bankprodukte – durch differenzierte Kapitalanforderungen, Liquiditätsvorschriften und Leverage-Beschränkungen. Eine strategische Produktentwicklung, die regulatorische Anforderungen frühzeitig integriert, kann signifikante Wettbewerbsvorteile generieren. ADVISORI unterstützt Sie bei dieser regulatorisch optimierten Produktinnovation.\n\n💼 Regulatorisch intelligente Produktentwicklung:\n• Regulatorisches Design Thinking: Integration von regulatorischen Anforderungen bereits in der Konzeptionsphase neuer Produkte, um kostspielige Anpassungen nach der Markteinführung zu vermeiden.\n• Kapitaleffiziente Produktarchitekturen: Entwicklung von Produktstrukturen, die regulatorische Kapital- und Liquiditätsanforderungen minimieren, ohne Kundennutzen oder Margenerwartungen zu kompromittieren.\n• Smarte Bilanzsteuerung durch Produktmix: Strategische Anpassung des Produktportfolios zur Optimierung regulatorischer Kennzahlen (RWA, LCR, NSFR) bei gleichzeitiger Erfüllung von Markt- und Kundenanforderungen.\n• Konditionengestaltung mit regulatorischem Weitblick: Entwicklung von Preismodellen, die regulatorische Kosten präzise reflektieren und gleichzeitig wettbewerbsfähig und transparent bleiben.\n\n🔍 ADVISORIs Ansatz zur regulatorisch optimierten Produktentwicklung:\n• Regulatorische Produktanalyse: Detaillierte Bewertung bestehender und geplanter Produkte hinsichtlich ihrer regulatorischen Implikationen und Identifikation von Optimierungspotentialen.\n• Regulatory Product Innovation Lab: Interdisziplinäre Workshops, die Produktmanagement, Risikomanagement und Regulierungsexperten zusammenbringen, um innovative, regulatorisch optimierte Produktkonzepte zu entwickeln.\n• Dynamische Produktsimulation: Entwicklung von Simulationsmodellen, die die Auswirkungen verschiedener Produktkonfigurationen auf regulatorische Kennzahlen unter verschiedenen Markt- und Kundenszenarien analysieren.\n• Regulatory Product Governance: Implementierung von Governance-Prozessen, die sicherstellen, dass regulatorische Aspekte während des gesamten Produktlebenszyklus angemessen berücksichtigt werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Change-Management-Strategien empfiehlt ADVISORI für eine erfolgreiche Basel III-Transformation, die nicht nur technische, sondern auch kulturelle Veränderungen in unserer Bank bewirkt?",
        answer: "Die erfolgreiche Implementierung von Basel III erfordert weit mehr als technische und methodische Anpassungen – sie verlangt eine fundamentale Transformation der Unternehmenskultur und Arbeitsweisen. Ohne effektives Change Management scheitern selbst technisch exzellente Implementierungen oft an organisatorischen Widerständen und kulturellen Barrieren. ADVISORI unterstützt Sie bei einem ganzheitlichen Transformationsansatz.\n\n🔄 Ganzheitliches Change Management für Basel III:\n• Kulturelle Neuausrichtung: Förderung einer risikobewussten Unternehmenskultur, in der regulatorische Erwägungen integrale Bestandteile aller Geschäftsentscheidungen werden, statt als externe Einschränkungen wahrgenommen zu werden.\n• Leadership Alignment: Entwicklung eines gemeinsamen Verständnisses in der Führungsebene über die strategische Bedeutung von Basel III und Befähigung von Führungskräften, als glaubwürdige Vorbilder und Promotoren des Wandels zu agieren.\n• Kompetenzentwicklung: Systematischer Aufbau der notwendigen Fähigkeiten und Kenntnisse auf allen Ebenen, von technischem Fachwissen bis hin zu verändertem Entscheidungsverhalten und Risikobewusstsein.\n• Nachhaltige Verankerung: Integration regulatorischer Exzellenz in Performance-Management-Systeme, Anreizstrukturen und Karrierepfade, um langfristige Verhaltensänderungen zu fördern.\n\n🌱 ADVISORIs transformativer Change-Ansatz:\n• Stakeholder-zentriertes Design: Maßgeschneiderte Change-Strategien, die die spezifischen Bedürfnisse, Bedenken und Motivationsfaktoren verschiedener Stakeholder-Gruppen berücksichtigen.\n• Digitale Change-Beschleuniger: Einsatz digitaler Plattformen und Tools, die interaktives Lernen, Kollaboration und kontinuierliches Feedback ermöglichen und den Transformationsprozess beschleunigen.\n• Change Impact Mapping: Detaillierte Analyse der Auswirkungen regulatorischer Veränderungen auf verschiedene Rollen, Prozesse und Systeme als Grundlage für zielgerichtete Change-Maßnahmen.\n• Agiles Change Management: Flexible, iterative Implementierung von Change-Initiativen mit kontinuierlicher Anpassung basierend auf Feedback und sich verändernden Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie sollten wir uns auf die zukünftigen Entwicklungen von Basel III vorbereiten und wie unterstützt ADVISORI uns dabei, Wettbewerbsvorteile durch vorausschauende Implementierung zu sichern?",
        answer: "Die kontinuierliche Evolution des Basel-Rahmenwerks – oft als \"Basel IV\" oder \"Basel 3.1\" bezeichnet – stellt Banken vor die Herausforderung, sich auf regulatorische Veränderungen vorzubereiten, deren endgültige Form und Zeitpunkt noch ungewiss sind. Eine vorausschauende, strategische Herangehensweise kann jedoch nicht nur Risiken minimieren, sondern auch Wettbewerbsvorteile sichern. ADVISORI unterstützt Sie bei dieser zukunftsorientierten Positionierung.\n\n🔮 Strategische Antizipation regulatorischer Entwicklungen:\n• Regulatorische Früherkennung: Etablierung systematischer Prozesse zur frühzeitigen Identifikation und Analyse aufkommender regulatorischer Trends und Konsultationspapiere.\n• Szenariobasierte Planung: Entwicklung robuster Geschäftsstrategien, die unter verschiedenen regulatorischen Szenarien funktionsfähig bleiben und strategische Flexibilität sicherstellen.\n• Adaptive Implementierungsarchitektur: Aufbau von IT-Systemen und Prozessen, die flexibel an neue regulatorische Anforderungen angepasst werden können, ohne fundamentale Restrukturierungen zu erfordern.\n• Proaktive Aufsichtskommunikation: Aufbau eines konstruktiven, kontinuierlichen Dialogs mit Aufsichtsbehörden, um Einblicke in regulatorische Erwartungen zu gewinnen und die eigene Positionierung zu beeinflussen.\n\n🚀 ADVISORIs Ansatz für regulatorische Zukunftssicherung:\n• Regulatory Intelligence Hub: Kontinuierliche Überwachung und Analyse globaler regulatorischer Entwicklungen mit Fokus auf deren strategische Implikationen für Ihr spezifisches Geschäftsmodell.\n• Quantitative Auswirkungsanalysen: Frühzeitige Simulation der Auswirkungen potenzieller regulatorischer Änderungen auf Kapital, Liquidität und Geschäftsstrategie unter verschiedenen Implementierungsszenarien.\n• Strategischer Regulierungsdialog: Unterstützung bei der Entwicklung einer proaktiven Strategie für die Beteiligung an Konsultationsprozessen und den Dialog mit Aufsichtsbehörden.\n• Regulatorische Innovationspipeline: Kontinuierliche Entwicklung und Priorisierung von Initiativen zur Optimierung regulatorischer Prozesse und Systeme, abgestimmt auf erwartete zukünftige Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie verändert Basel III die Beziehung zwischen Risikomanagement und Geschäftsstrategie, und wie unterstützt ADVISORI uns bei der optimalen Integration dieser Funktionen?",
        answer: "Basel III transformiert die Beziehung zwischen Risikomanagement und Geschäftsstrategie fundamental – von einem traditionellen \"Check-and-Balance\"-Modell zu einer integrierten, wertschöpfenden Partnerschaft. Diese Neupositionierung erfordert nicht nur strukturelle und prozessuale Anpassungen, sondern auch einen tiefgreifenden kulturellen Wandel. ADVISORI unterstützt Sie bei dieser strategischen Neuausrichtung.\n\n🔄 Strategische Neupositionierung des Risikomanagements:\n• Vom Kontrolleur zum strategischen Partner: Transformation des Risikomanagements von einer primär kontrollierenden Funktion zu einem aktiven Mitgestalter der Geschäftsstrategie und Wertschöpfung.\n• Risikobasierte Strategieentwicklung: Integration von Risikoüberlegungen bereits in frühe Phasen der Strategieentwicklung statt nachgelagerter Risikobewertung bereits formulierter Strategien.\n• Wertorientierte Risikosteuerung: Ausrichtung des Risikomanagements auf die Optimierung der risikoadjustierten Rendite statt auf bloße Risikominimierung oder Compliance.\n• Kollaborative Governance: Etablierung von Entscheidungsstrukturen, die eine effektive Zusammenarbeit zwischen Geschäfts-, Risiko- und Finanzfunktionen fördern und Silodenken überwinden.\n\n🧠 ADVISORIs integrierter Business-Risk-Ansatz:\n• Strategic Risk Framework: Entwicklung eines maßgeschneiderten Frameworks, das Geschäfts- und Risikostrategien systematisch verknüpft und eine gemeinsame Sprache für den Dialog zwischen Geschäfts- und Risikofunktionen schafft.\n• Joint Strategy Labs: Durchführung interdisziplinärer Workshops, die Geschäfts-, Risiko- und Finanzexperten zusammenbringen, um integrierte Strategien zu entwickeln und Zielkonflikte konstruktiv zu adressieren.\n• Integrierte Performance-Metriken: Design von KPIs und Steuerungsgrößen, die sowohl Geschäfts- als auch Risikoperspektiven abbilden und eine ausgewogene Beurteilung der Gesamtperformance ermöglichen.\n• Cultural Alignment Program: Implementierung gezielter Initiativen zur Förderung einer gemeinsamen Risiko- und Geschäftskultur, die Risikobewusstsein und unternehmerisches Denken verbindet."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
