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
    console.log('Updating FRTB Auswahl Standard Approach vs. Internal Models page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-auswahl-standard-approach-vs-internal-models' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-auswahl-standard-approach-vs-internal-models" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die strategische Entscheidung zwischen FRTB-Standardansatz und internen Modellen ein kritischer Erfolgsfaktor für Finanzinstitute und wie unterstützt ADVISORI diese komplexe Abwägung?",
        answer: "Die Wahl zwischen dem FRTB-Standardansatz (SA) und dem Internal Models Approach (IMA) ist keine rein technische Entscheidung, sondern eine fundamentale strategische Weichenstellung mit tiefgreifenden Auswirkungen auf Ihr Geschäftsmodell, Ihre Wettbewerbsfähigkeit und Ihre langfristige Rentabilität. Diese Entscheidung bestimmt maßgeblich die Kapitaleffizienz, die operativen Kosten und die strategischen Handlungsoptionen Ihres Instituts in den kommenden Jahren.\n\n🔍 Strategische Dimensionen der FRTB-Methodenentscheidung:\n• Kapitaleffizienz und -kosten: Der Unterschied in den Kapitalanforderungen zwischen SA und IMA kann je nach Portfoliostruktur 30-50% betragen – mit signifikanten Auswirkungen auf Ihre Rentabilität und Wettbewerbsfähigkeit.\n• Geschäftsmodell-Implikationen: Die Methodenwahl beeinflusst direkt, welche Handelsstrategien und Produkte unter FRTB kapitaleffizient angeboten werden können, und definiert damit Ihren strategischen Handlungsspielraum.\n• Organisatorische Transformation: Die Implementation des IMA erfordert tiefgreifende Anpassungen in Prozessen, Systemen und Governance-Strukturen, die weit über die reine Risikofunktion hinausgehen.\n• Regulatorische Beziehung: Die Entscheidung für den IMA etabliert eine intensivere Interaktion mit den Aufsichtsbehörden und schafft sowohl Chancen als auch Herausforderungen im regulatorischen Dialog.\n\n🛡️ ADVISORI's differenzierter Ansatz zur strategischen Entscheidungsfindung:\n• Multi-dimensionale Entscheidungsmatrix: Wir evaluieren nicht nur die direkten Kapitalauswirkungen, sondern alle relevanten strategischen Dimensionen – von Geschäftsmodell-Implikationen über operative Komplexität bis hin zu regulatorischen Beziehungen.\n• Quantitative Präzision: Unsere proprietären Simulationsmodelle quantifizieren präzise die Kapitalauswirkungen verschiedener Implementierungsszenarien und ermöglichen eine datengestützte Entscheidungsfindung.\n• Hybrid-Strategien: Wir entwickeln maßgeschneiderte Hybrid-Strategien, bei denen bestimmte Trading Desks für den IMA und andere für den SA optimiert werden, um die Kapitaleffizienz zu maximieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche quantitativen und qualitativen Faktoren sind bei der Auswahl zwischen FRTB-Standardansatz und internen Modellen zu berücksichtigen und wie kann eine optimale Hybrid-Strategie gestaltet werden?",
        answer: "Die Entscheidung zwischen FRTB-Standardansatz und internen Modellen erfordert eine systematische Evaluation zahlreicher quantitativer und qualitativer Faktoren, die weit über eine einfache Kapitalberechnung hinausgehen. Eine optimale Entscheidung berücksichtigt das komplexe Zusammenspiel dieser Faktoren und evaluiert verschiedene Implementierungsszenarien, einschließlich potenzieller Hybrid-Strategien.\n\n📊 Kernfaktoren für eine fundierte Methodenentscheidung:\n• Kapitalauswirkungen: Detaillierte Quantifizierung der Kapitalanforderungen unter beiden Ansätzen auf Ebene einzelner Trading Desks und des Gesamtportfolios – unter Berücksichtigung von Diversifikationseffekten, Expected Shortfall-Multiplikatoren und SES-Aufschlägen.\n• Operativer Aufwand und Implementierungskosten: Analyse der IT-Investitionen, Ressourcenanforderungen und laufenden Betriebskosten für beide Ansätze, einschließlich der Kosten für die kontinuierliche Modellwartung und -validierung.\n• Modellrisiko und regulatorische Unsicherheit: Bewertung der Wahrscheinlichkeit von Modellablehnungen, Multiplikator-Erhöhungen oder regulatorischen Fallback-Szenarien und deren potenzielle Kapitalauswirkungen.\n• Geschäftsstrategie und Produktmix: Evaluation der Auswirkungen beider Ansätze auf Ihre Handelsstrategie, Produktangebot und Wettbewerbsfähigkeit in verschiedenen Marktsegmenten.\n\n🔄 Entwicklung einer optimalen Hybrid-Strategie:\n• Desk-spezifische Analyse: Detaillierte Evaluation jedes Trading Desks hinsichtlich seiner Eignung für den IMA oder SA, basierend auf Faktoren wie Komplexität, Liquidität, Modellierbarkeit und Kapitaleffizienz.\n• Strategische Desk-Reorganisation: Optimierung der Trading-Desk-Struktur zur Maximierung der Kapitaleffizienz unter FRTB, einschließlich potenzieller Reallokation von Positionen zwischen Desks.\n• Implementierungsphasen: Entwicklung eines gestaffelten Implementierungsplans, der eine schrittweise Einführung des IMA für ausgewählte Desks ermöglicht und operationale Risiken minimiert.\n• Kontinuierliche Evaluierung: Etablierung eines fortlaufenden Monitoring-Prozesses, der die Kapitaleffizienz jedes Desks überwacht und eine dynamische Anpassung der Hybrid-Strategie ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche spezifischen Herausforderungen stellt der FRTB Internal Models Approach an Finanzinstitute und wie unterstützt ADVISORI bei deren Bewältigung?",
        answer: "Der FRTB Internal Models Approach (IMA) stellt Finanzinstitute vor beispiellose methodische, technische und organisatorische Herausforderungen, die weit über traditionelle Marktrisiko-Modellierungsanforderungen hinausgehen. Die verschärften Anforderungen an Datenqualität, Modellierung und Governance erfordern eine tiefgreifende Transformation bestehender Risikomanagement-Frameworks und eine strategische Neuausrichtung Ihrer Modellierungskapazitäten.\n\n🔧 Kritische Herausforderungen des FRTB-IMA:\n• Non-Modellable Risk Factors (NMRFs): Die strengen Anforderungen an die Identifikation und Quantifizierung von NMRFs stellen eine fundamentale Herausforderung dar – mit signifikanten Kapitalaufschlägen für nicht-modellierbare Risikofaktoren, die bis zu 30% der gesamten IMA-Kapitalanforderungen ausmachen können.\n• P&L Attribution Test (PLAT): Die verschärften PLAT-Kriterien mit ihren rigorosen statistischen Tests stellen selbst für fortschrittliche Handelsplattformen eine erhebliche Hürde dar und erfordern oft grundlegende Anpassungen in der Front-Office-Bewertung und Risikoquantifizierung.\n• Expected Shortfall auf Liquiditätshorizonten: Die Implementierung des Expected Shortfall-Ansatzes mit verschiedenen Liquiditätshorizonten erfordert eine vollständige Neuentwicklung der Risikoaggregationsmethodik und stellt extreme Anforderungen an die Rechenleistung.\n• Governance und Validierung: Die erhöhten Anforderungen an Modellgovernance, unabhängige Validierung und aufsichtliche Überprüfung erfordern eine grundlegende Neugestaltung Ihres Modellrisiko-Management-Frameworks.\n\n🛠️ ADVISORI's spezialisierte Unterstützung für IMA-Implementierung:\n• NMRF-Optimierungsmethodik: Unsere proprietäre Methodik zur Identifikation und Optimierung von NMRFs kombiniert regulatorisches Know-how mit fortschrittlichen Datenanalysetechniken zur signifikanten Reduzierung von NMRF-Aufschlägen.\n• PLAT-Enhancement-Framework: Wir haben ein spezialisiertes Framework zur systematischen Verbesserung der PLAT-Performance entwickelt, das Front-Office- und Risikobewertungen harmonisiert und die Wahrscheinlichkeit erfolgreicher Tests maximiert.\n• IMA-Governance-Blueprint: Unser bewährtes Governance-Modell für den IMA definiert klare Rollen, Verantwortlichkeiten und Eskalationswege und stellt sicher, dass Ihr IMA-Framework alle regulatorischen Anforderungen erfüllt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie gestaltet sich der Implementierungsprozess für den gewählten FRTB-Ansatz und welche kritischen Erfolgsfaktoren müssen berücksichtigt werden?",
        answer: "Die erfolgreiche Implementierung des gewählten FRTB-Ansatzes – sei es SA, IMA oder eine Hybrid-Strategie – erfordert einen strukturierten, multidisziplinären Transformationsansatz, der technische, methodische und organisatorische Aspekte integriert. Ein systematisches Vorgehen mit klaren Meilensteinen, robusten Governance-Strukturen und einem umfassenden Test- und Validierungsansatz ist entscheidend für den Projekterfolg.\n\n🔄 Strukturierter Implementierungsprozess:\n• Detaillierte Gap-Analyse: Umfassende Bewertung Ihrer aktuellen Risikomanagement-Infrastruktur gegenüber den FRTB-Anforderungen auf Ebene von Daten, Methoden, Systemen, Prozessen und Governance.\n• Zielarchitektur-Design: Entwicklung einer robusten Zielarchitektur für Ihre FRTB-Implementierung, die sowohl aktuelle regulatorische Anforderungen erfüllt als auch flexibel genug ist, um zukünftige Änderungen zu akkommodieren.\n• Phased-Approach-Implementierung: Strukturierung der Implementierung in klar definierte Phasen mit spezifischen Meilensteinen, die eine schrittweise Realisierung und frühzeitige Validierung kritischer Komponenten ermöglichen.\n• Parallel-Run und Kalibrierung: Durchführung eines umfassenden Parallel-Runs mit Ihrem bestehenden Ansatz, um die Implementierung zu validieren, Abweichungen zu identifizieren und Methoden und Parameter zu kalibrieren.\n\n🏆 Kritische Erfolgsfaktoren für die FRTB-Implementierung:\n• Executive Sponsorship: Aktive Unterstützung und Engagement auf C-Level-Ebene sind entscheidend, um die notwendigen Ressourcen zu sichern und funktionsübergreifende Zusammenarbeit zu fördern.\n• Cross-funktionale Zusammenarbeit: Enge Kooperation zwischen Handel, Risikomanagement, IT, Finance und Compliance ist essentiell für eine kohärente Implementierung und die Harmonisierung von Front-Office- und Risikosystemen.\n• Datenqualität und -integration: Robuste Datenmanagement-Prozesse und eine integrierte Datenarchitektur sind fundamental für die FRTB-Compliance und besonders kritisch für den IMA.\n• Frühzeitiger regulatorischer Dialog: Proaktive Kommunikation mit den Aufsichtsbehörden und transparente Diskussion von Implementierungsherausforderungen fördern das regulatorische Vertrauen und minimieren Compliance-Risiken."
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
