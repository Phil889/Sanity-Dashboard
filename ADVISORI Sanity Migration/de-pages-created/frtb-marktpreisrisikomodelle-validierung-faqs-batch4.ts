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
    console.log('Updating FRTB Marktpreisrisikomodelle Validierung page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-marktpreisrisikomodelle-validierung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-marktpreisrisikomodelle-validierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie sollte unser Validierungsansatz für FRTB-Modelle den Aspekt der Modellrisiken strategisch adressieren?",
        answer: "Die FRTB-Modellvalidierung muss über die regulatorische Compliance hinaus ein umfassendes Modellrisikomanagement integrieren. Dieser strategische Ansatz kann nicht nur Compliance-Risiken minimieren, sondern auch operative und finanzielle Risiken reduzieren und die Entscheidungsfindung verbessern.\n\n⚠️ Erweiterte Modellrisikodimensionen unter FRTB:\n• Erhöhte methodische Komplexität: Die fortgeschrittenen statistischen Methoden in FRTB-Modellen, insbesondere für ES und NMRF, erhöhen das Risiko von methodischen Fehlern und Missverständnissen.\n• Datenqualitätsrisiken: Die umfangreichen Datenanforderungen für historische Zeitreihen, Stressperioden und Korrelationen erhöhen die Anfälligkeit für Datenqualitätsprobleme.\n• Implementierungsrisiken: Die technische Umsetzung komplexer Modelle birgt erhebliche Risiken, von Programmierfehlern bis zu Performanceproblemen.\n• Governance-Risiken: Die umfassenden Governanceanforderungen an FRTB-Modelle schaffen neue Risikodimensionen in Bezug auf Verantwortlichkeiten, Eskalationswege und Entscheidungsprozesse.\n\n🛡️ ADVISORIs integriertes Modellrisikomanagement-Framework:\n• Risikoorientierte Validierungspriorisierung: Wir entwickeln einen risikobasierten Ansatz, der Validierungsressourcen auf die Modellkomponenten mit dem höchsten Risikopotenzial konzentriert, basierend auf Faktoren wie Komplexität, Materialität und historischer Performance.\n• Umfassendes Risiko-Assessment: Implementation eines strukturierten Prozesses zur Identifikation, Bewertung und Dokumentation aller relevanten Modellrisiken, der weit über regulatorische Mindestanforderungen hinausgeht.\n• Robustheitsanalyse: Entwicklung fortschrittlicher Stresstests und Sensitivitätsanalysen, die die Modellrobustheit unter extremen oder unerwarteten Bedingungen evaluieren.\n• Prozessintegriertes Risikomanagement: Integration von Modellrisikokontrollen in den gesamten Modelllebenszyklus, von der Entwicklung über die Implementierung bis zum laufenden Monitoring.\n• Unabhängige Risikobewertung: Etablierung einer unabhängigen Modellrisikobewertung, die über die regulatorische Validierung hinausgeht und eine ganzheitliche Perspektive auf alle Modellrisikodimensionen bietet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten methodischen Ansätze empfiehlt ADVISORI für die Validierung der Korrelationsannahmen in FRTB-Modellen?",
        answer: "Die Validierung von Korrelationsannahmen ist ein kritischer Aspekt der FRTB-Modellvalidierung mit erheblichem Einfluss auf die Kapitalanforderungen. Die Herausforderung liegt in der Komplexität und Instabilität von Korrelationen, insbesondere in Stressperioden, was innovative Validierungsansätze erfordert.\n\n🔗 Zentrale Herausforderungen bei der Korrelationsvalidierung:\n• Zeitliche Instabilität: Korrelationen zwischen Risikofaktoren sind inhärent instabil und können sich in Stressperioden dramatisch verändern, was ihre Validierung besonders anspruchsvoll macht.\n• Dimensionalität: Die hohe Anzahl an Korrelationspaaren in typischen FRTB-Modellen führt zu einer Dimensionalitäts-Explosion, die spezielle Validierungstechniken erfordert.\n• Datenknappheit: Für viele Korrelationspaare, insbesondere für exotische oder illiquide Instrumente, stehen oft nur begrenzte historische Daten zur Verfügung.\n• Regulatorische Anforderungen: FRTB stellt spezifische Anforderungen an die Validierung von Korrelationsannahmen, insbesondere in Bezug auf Stressperioden und Diversifikationseffekte.\n\n📐 ADVISORIs fortschrittliches Korrelationsvalidierungs-Framework:\n• Hierarchische Korrelationsmodellierung: Implementierung eines mehrschichtigen Ansatzes, der Korrelationen auf verschiedenen Aggregationsebenen analysiert und validiert, um die Dimensionalitäts-Herausforderung zu bewältigen.\n• Regime-Switching-Analyse: Anwendung fortschrittlicher statistischer Methoden zur Identifikation verschiedener Marktregime und Validierung der Korrelationsstabilität innerhalb und zwischen diesen Regimen.\n• Copula-basierte Validierung: Einsatz von Copula-Methoden zur Validierung der gemeinsamen Verteilungen von Risikofaktoren, die über einfache lineare Korrelationen hinausgehen und komplexere Abhängigkeitsstrukturen erfassen.\n• Bayesianische Validierungstechniken: Anwendung bayesianischer Methoden zur Integration von Expertenmeinungen und historischen Daten bei der Validierung von Korrelationsschätzungen, besonders wertvoll bei Datenknappheit.\n• Stressperioden-spezifische Validierung: Entwicklung spezialisierter Validierungstechniken für Korrelationen in Stressperioden, einschließlich der Analyse historischer Stressereignisse und hypothetischer Stressszenarien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir den regulatorischen Dialog und die Zusammenarbeit mit Aufsichtsbehörden im Rahmen der FRTB-Modellvalidierung optimieren?",
        answer: "Die erfolgreiche Validierung von FRTB-Modellen erfordert einen proaktiven, transparenten und konstruktiven Dialog mit den Aufsichtsbehörden. Dieser Dialog sollte strategisch gestaltet werden, um regulatorische Erwartungen frühzeitig zu verstehen, Interpretationsspielräume zu klären und die Genehmigungswahrscheinlichkeit zu maximieren.\n\n🏛️ Schlüsselelemente eines effektiven regulatorischen Dialogs:\n• Frühzeitige Einbindung: Die Komplexität und der Interpretationsspielraum der FRTB-Anforderungen erfordern einen frühzeitigen und kontinuierlichen Dialog mit den Aufsichtsbehörden, idealerweise bereits in der Konzeptionsphase.\n• Transparenz und Nachvollziehbarkeit: Vollständige Transparenz über Modellansätze, Annahmen und Einschränkungen ist essentiell für den Aufbau von Vertrauen und regulatorischer Akzeptanz.\n• Evidenzbasierte Argumentation: Fundierte, datengestützte Begründungen für Modellentscheidungen und Validierungsansätze erhöhen die Überzeugungskraft im regulatorischen Dialog.\n• Konsistente Kommunikation: Eine einheitliche und kohärente Kommunikation über alle Organisationsebenen und Funktionen hinweg ist entscheidend für die regulatorische Glaubwürdigkeit.\n\n🤝 ADVISORIs regulatorischer Dialogansatz:\n• Regulatorische Landkarten: Wir entwickeln detaillierte Mappings der FRTB-Anforderungen zu Ihren spezifischen Implementierungen und Validierungsansätzen, die als Basis für strukturierte regulatorische Diskussionen dienen.\n• Pre-Validation Workshops: Organisation von Workshops mit Aufsichtsbehörden vor der formellen Einreichung, um frühzeitiges Feedback zu erhalten und potenzielle Bedenken zu adressieren.\n• Evidenzbasierte Dokumentation: Erstellung umfassender, klar strukturierter Dokumentation, die nicht nur Compliance nachweist, sondern auch den Mehrwert Ihrer Validierungsansätze für das Risikomanagement hervorhebt.\n• Regulatory Relations Management: Entwicklung eines strategischen Ansatzes für den kontinuierlichen Dialog mit Aufsichtsbehörden, einschließlich regelmäßiger Updates, Feedback-Sessions und proaktiver Kommunikation von Modelländerungen.\n• Regulatorische Szenarioanalyse: Vorbereitung auf verschiedene regulatorische Feedback-Szenarien mit vordefinierten Aktionsplänen, die schnelle und effektive Reaktionen auf aufsichtliche Anforderungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI die Integration der FRTB-Modellvalidierungsergebnisse in das übergreifende Risikomanagement und die Geschäftsstrategie?",
        answer: "Die wahre Wertschöpfung der FRTB-Modellvalidierung liegt in der strategischen Integration ihrer Ergebnisse in das übergreifende Risikomanagement und die Geschäftsentscheidungen. Dieser integrative Ansatz transformiert die Validierung von einer reinen Compliance-Übung zu einem strategischen Werttreiber.\n\n🔄 Integrationsdimensionen für Validierungsergebnisse:\n• Strategische Entscheidungsunterstützung: Validierungsergebnisse können wertvolle Einblicke für strategische Entscheidungen liefern, von der Portfolioallokation bis zur Produktentwicklung.\n• Risk Appetite Framework: Die Validierungserkenntnisse sollten direkt in die Kalibrierung und Überprüfung des Risk Appetite Frameworks einfließen.\n• Limit-Management: Validierungsergebnisse können zur Verfeinerung und Optimierung des Limitsystems beitragen, insbesondere für komplexe Produkte und Risikofaktoren.\n• Kapitalallokation: Die Erkenntnisse aus der Modellvalidierung sollten in die Kapitalallokationsprozesse integriert werden, um eine risikoadjustierte Performancemessung zu ermöglichen.\n\n🌉 ADVISORIs Framework für die strategische Integration:\n• Integration Roadmap: Wir entwickeln eine maßgeschneiderte Roadmap, die definiert, wie Validierungsergebnisse systematisch in verschiedene Geschäfts- und Risikoprozesse integriert werden können.\n• Validierungsergebnis-Taxonomie: Entwicklung einer strukturierten Klassifikation von Validierungsergebnissen nach ihrer strategischen Relevanz, Dringlichkeit und Auswirkung auf verschiedene Geschäftsbereiche.\n• Geschäftsorientierte Reporting-Frameworks: Design von Validierungsberichten, die über technische Details hinausgehen und geschäftsrelevante Erkenntnisse in einer für verschiedene Stakeholder verständlichen Form präsentieren.\n• Cross-funktionale Validierungsworkshops: Organisation von Workshops, die Validierungsteams mit Front Office, Finanzen und Senior Management zusammenbringen, um gemeinsam die geschäftlichen Implikationen von Validierungsergebnissen zu analysieren.\n• Kontinuierliche Feedback-Schleifen: Etablierung strukturierter Prozesse, die sicherstellen, dass Geschäftsfeedback in die Validierungsansätze zurückfließt und umgekehrt, Validierungserkenntnisse kontinuierlich in die Geschäftsprozesse integriert werden."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
