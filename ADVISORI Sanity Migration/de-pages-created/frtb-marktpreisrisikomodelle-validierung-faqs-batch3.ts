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
    console.log('Updating FRTB Marktpreisrisikomodelle Validierung page with FAQs batch 3...')
    
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
        question: "Wie integrieren wir die FRTB-Modellvalidierung effektiv in unsere bestehende Modell-Governance, und welche Best Practices empfiehlt ADVISORI?",
        answer: "Die Integration der FRTB-Modellvalidierung in Ihre bestehende Modell-Governance erfordert einen strategischen Ansatz, der weit über punktuelle Anpassungen hinausgeht. Die erhöhten Anforderungen bieten die Chance, Ihre gesamte Modell-Governance zu transformieren und als strategischen Wettbewerbsvorteil zu positionieren.\n\n📋 Kernherausforderungen bei der Governance-Integration:\n• Erhöhte Komplexität: FRTB-Modelle sind komplexer und interdependenter als frühere Marktpreisrisikomodelle und erfordern entsprechend sophistiziertere Governance-Strukturen.\n• Erweiterte Stakeholder-Landschaft: Die Modellvalidierung unter FRTB betrifft eine breitere Gruppe von Stakeholdern, von Trading über Finance bis zum Senior Management, die alle eingebunden werden müssen.\n• Beschleunigte Validierungszyklen: Die laufenden Anforderungen (insbesondere P&L Attribution und Backtesting) erfordern schnellere Validierungsprozesse als traditionelle jährliche Reviews.\n• Regulatorische Dokumentationsanforderungen: Die umfassenden Dokumentationspflichten erfordern strukturierte Prozesse und klare Verantwortlichkeiten.\n\n🔄 ADVISORIs integriertes Governance-Framework:\n• Ganzheitliches Modell-Inventar: Entwicklung eines umfassenden Inventars aller FRTB-relevanten Modelle, ihrer Interdependenzen, Risikoprofile und Verantwortlichkeiten als Basis für eine effektive Governance.\n• Risiko-basierte Validierungsstrategie: Implementation eines tiered Validierungsansatzes, der Validierungsintensität und -frequenz auf Basis der Modellrisiken und -materialität priorisiert.\n• Integrierte Eskalationswege: Etablierung klarer Prozesse für den Umgang mit Validierungsergebnissen, einschließlich Eskalationswegen und Entscheidungsbefugnissen für Modelländerungen oder -einschränkungen.\n• Governance-Automatisierung: Digitalisierung von Validierungsworkflows, Genehmigungsprozessen und Dokumentationsanforderungen zur Effizienzsteigerung und Fehlerreduktion.\n• Kontinuierliches Monitoring: Implementierung eines Echtzeit-Monitoring-Frameworks, das frühzeitig Modelldegradation identifiziert und proaktive Maßnahmen ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Strategien zur Optimierung der Kapitalanforderungen können wir im Rahmen der FRTB-Modellvalidierung verfolgen?",
        answer: "Die FRTB-Modellvalidierung bietet über die reine Compliance hinaus erhebliche Potenziale zur strategischen Kapitaloptimierung. Ein fortschrittlicher Validierungsansatz kann direkt zur Reduzierung der Kapitalanforderungen beitragen und gleichzeitig das Risikomanagement verbessern.\n\n💰 Kapitaloptimierungspotenziale durch Modellvalidierung:\n• Interne vs. Standardmodelle: Der Unterschied zwischen internen Modellen und dem Standardansatz kann je nach Portfolio 30-50% der Kapitalanforderungen ausmachen – eine erfolgreiche Validierung ist daher ein direkter Kapitaleffizienz-Hebel.\n• NMRF-Optimierung: Non-Modellable Risk Factors können bis zu einem Drittel der gesamten Kapitalanforderungen ausmachen. Ihre Reduzierung durch verbesserte Validierungsmethoden und Datenstrategien bietet erhebliches Optimierungspotenzial.\n• Risikoaggregations-Effekte: Die Validierung der Korrelationsannahmen und Diversifikationseffekte kann die Kapitaleffizienz signifikant beeinflussen, da diese direkt in die Expected Shortfall-Berechnung einfließen.\n• Backtesting-Aufschlagsfaktoren: Die Vermeidung von Backtesting-Überschreitungen durch robustere Modelle reduziert direkt die regulatorischen Multiplikatoren und damit die Kapitalanforderungen.\n\n📈 ADVISORIs Kapitaloptimierungs-Framework:\n• Multidimensionale Kapitalimpakt-Analyse: Wir entwickeln detaillierte Simulationsmodelle, die den Kapitalimpakt verschiedener Validierungsstrategien und Modelldesigns quantifizieren und vergleichen.\n• Risikofaktor-Mapping-Optimierung: Methodische Überprüfung und Anpassung der Risikofaktor-Definitionen und -Mappings, um die Balance zwischen Modellgenauigkeit und Kapitaleffizienz zu optimieren.\n• Portfolio-Restrukturierungsanalyse: Identifikation von Portfolioanpassungen, die durch Umschichtung in besser modellierbare Risikofaktoren die Kapitalanforderungen reduzieren können.\n• Modellkalibrierungs-Optimierung: Entwicklung fortschrittlicher Kalibrierungsmethoden, die die Modellgenauigkeit verbessern und gleichzeitig unnötige Konservativität vermeiden.\n• Strategische Validierungspriorisierung: Fokussierung der Validierungsressourcen auf jene Modellkomponenten und Portfolios, die den größten Kapitalimpakt haben, für ein optimales Kosten-Nutzen-Verhältnis."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die regulatorischen Herausforderungen bei der Expected Shortfall (ES) Validierung unter FRTB bewältigen?",
        answer: "Die Validierung des Expected Shortfall (ES) unter FRTB stellt eine besondere methodische Herausforderung dar, da ES – im Gegensatz zum VaR – nicht direkt durch einfaches Backtesting validiert werden kann. Diese Komplexität erfordert innovative Ansätze, die sowohl regulatorische Anforderungen erfüllen als auch die Modellrobustheit sicherstellen.\n\n📉 Kernherausforderungen der ES-Validierung:\n• Fehlende direkte Überprüfbarkeit: ES als Durchschnitt der Verluste jenseits des VaR kann nicht durch einfaches Zählen von Überschreitungen validiert werden, wie es beim VaR möglich ist.\n• Stressperioden-Integration: Die Einbeziehung von Stressperioden in die ES-Berechnung erfordert spezifische Validierungsansätze für die Stressperioden-Identifikation und -Kalibrierung.\n• Tail-Risiko-Sensitivität: Die erhöhte Sensitivität des ES gegenüber Tail-Risiken erfordert besondere Aufmerksamkeit für die Validierung der Tail-Verteilungen.\n• Liquiditätshorizonte: Die differenzierten Liquiditätshorizonte im FRTB-ES-Modell stellen zusätzliche Validierungsanforderungen, insbesondere für weniger liquide Risikofaktoren.\n\n🔬 ADVISORIs fortschrittliches ES-Validierungs-Framework:\n• Elicitability-basierte Validierung: Implementierung fortschrittlicher statistischer Methoden basierend auf dem Konzept der Elicitability, die indirekte Validierungsmöglichkeiten für ES bieten.\n• Hierarchische Validierungsarchitektur: Entwicklung eines Mehrebenen-Ansatzes, der VaR-Backtesting mit speziellen ES-spezifischen Tests kombiniert, um ein umfassendes Validierungsbild zu schaffen.\n• Tail-Verteilungs-Validierung: Spezifische Analyse und Validierung der Tail-Verteilungen durch statistische Tests und Szenarioanalysen, die über regulatorische Mindestanforderungen hinausgehen.\n• Synthetische Portfolio-Tests: Entwicklung von Testportfolios mit bekannten Risikoeigenschaften zur Validierung spezifischer Aspekte des ES-Modells unter kontrollierten Bedingungen.\n• Sensitivitätsanalyse: Umfassende Analyse der Modellsensitivität gegenüber Schlüsselannahmen und Parametern, um Robustheit zu gewährleisten und potenzielle Schwachstellen zu identifizieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie sollten wir unsere Validierungsressourcen und -kompetenzen strategisch aufbauen, um den FRTB-Anforderungen gerecht zu werden?",
        answer: "Die FRTB-Modellvalidierung stellt erhöhte Anforderungen an Ressourcen und Kompetenzen, die weit über die traditionelle Marktpreisrisikovalidierung hinausgehen. Ein strategischer Aufbau dieser Kapazitäten ist entscheidend für den Erfolg Ihrer FRTB-Implementation und kann gleichzeitig breitere organisatorische Vorteile bieten.\n\n👥 Strategische Ressourcen- und Kompetenzanforderungen:\n• Erweiterte methodische Expertise: FRTB erfordert vertiefte Kenntnisse in fortgeschrittener Statistik, Zeitreihenanalyse und Finanzmathematik, insbesondere für Komponenten wie ES-Validierung und P&L-Attribution.\n• Technologische Kompetenzen: Die Komplexität und Datenintensität der FRTB-Validierung erfordert Fähigkeiten in Bereichen wie High-Performance-Computing, Big Data und moderne Programmiersprachen.\n• Regulatorisches Verständnis: Tiefgreifendes Wissen über die FRTB-Anforderungen und ihre Interpretationen durch verschiedene Aufsichtsbehörden ist essentiell für eine effektive Validierung.\n• Interdisziplinäre Kommunikationsfähigkeiten: Die Validierungsteams müssen effektiv mit verschiedenen Stakeholdern – von Tradern bis zum Board – kommunizieren können, was sowohl technische als auch geschäftliche Kommunikationsfähigkeiten erfordert.\n\n🌱 ADVISORIs Ansatz zum strategischen Kapazitätsaufbau:\n• Skill-Gap-Analyse: Wir führen eine detaillierte Bewertung Ihrer bestehenden Validierungskapazitäten durch und identifizieren präzise die Kompetenz- und Ressourcenlücken für die FRTB-Validierung.\n• Make-vs-Buy-Strategien: Entwicklung eines optimalen Mix aus internem Kapazitätsaufbau, strategischen Einstellungen und gezielter externer Unterstützung basierend auf Faktoren wie Verfügbarkeit, Kosten und strategischer Bedeutung.\n• Integrated-Learning-Roadmaps: Erstellung personalisierter Entwicklungspfade für Validierungsteams, die formale Schulungen mit praktischen Erfahrungen und Coaching durch Experten kombinieren.\n• Centers of Excellence: Aufbau spezialisierter Kompetenzteams für komplexe Validierungsaspekte wie ES-Validierung oder NMRF-Assessment, die als interne Expertenzentren fungieren.\n• Knowledge-Management-Systeme: Implementierung von Plattformen und Prozessen zur systematischen Erfassung, Teilung und Weiterentwicklung von Validierungswissen innerhalb der Organisation."
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
