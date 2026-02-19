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
    console.log('Updating Basel III page with C-Level FAQs batch 2 (German)...')
    
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
        question: "Wie können wir die umfangreichen Liquiditätsanforderungen von Basel III (LCR, NSFR) nutzen, um unsere Treasury-Funktion strategisch neu zu positionieren?",
        answer: "Die Liquiditätsvorschriften von Basel III – insbesondere die Liquidity Coverage Ratio (LCR) und Net Stable Funding Ratio (NSFR) – werden oft primär als regulatorische Belastung wahrgenommen. Bei strategischer Herangehensweise bieten sie jedoch die Chance, die Treasury-Funktion von einem traditionellen Cost Center zu einem strategischen Wertschöpfungsfaktor zu transformieren.\n\n💧 Strategische Neupositionierung des Treasury durch Basel III:\n• Vom Liquiditätsverwalter zum strategischen Ressourcenallozierer: Die Notwendigkeit, verschiedene Liquiditätskennzahlen simultan zu optimieren, erfordert und ermöglicht eine aktivere Rolle des Treasury bei der Geschäftssteuerung.\n• Präziseres Funding-Mix-Management: Die Differenzierung von Finanzierungsquellen nach Stabilität (NSFR) ermöglicht eine feinere Abstimmung des Fundingmix auf Geschäftsziele und kann Finanzierungskosten signifikant senken.\n• Integration in die Produktentwicklung: Eine frühzeitige Berücksichtigung von Liquiditätseffekten bei der Entwicklung neuer Produkte kann Liquiditätskosten als aktiven Designparameter etablieren.\n• Dynamische Bilanzsteuerung: Die kontinuierliche Überwachung und Projektion von Liquiditätskennzahlen ermöglicht eine proaktive statt reaktive Bilanzsteuerung mit positiven P&L-Effekten.\n\n🔮 ADVISORIs fortschrittlicher Liquiditätsmanagement-Ansatz:\n• Integrierte Steuerungslogik: Wir entwickeln Steuerungsmodelle, die regulatorische Liquiditätsmetriken mit ökonomischen Zielen (Margenbeiträge, Kapitalkosten) in einem ganzheitlichen Framework verbinden.\n• Szenariobasierte Modellierung: Implementierung fortschrittlicher Szenarioanalysen zur Simulation von Liquiditätsauswirkungen verschiedener Geschäftsstrategien und Marktszenarien.\n• Technologische Transformation: Aufbau moderner Treasury-Plattformen, die Echtzeit-Datenanalyse, fortschrittliche Visualisierungen und automatisierte Steuerungsimpulse ermöglichen.\n• Treasury-as-a-Service: Entwicklung von internen Service-Modellen, bei denen Treasury als strategischer Partner für Geschäftsbereiche agiert und Liquiditätsoptimierung als Mehrwertdienst anbietet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Ansätze verfolgt ADVISORI, um die Komplexität der Basel III-Implementierung für das Top-Management zu reduzieren und gleichzeitig maximalen strategischen Nutzen zu erzielen?",
        answer: "Die Implementierung von Basel III gehört zu den komplexesten regulatorischen Programmen, mit denen Banken konfrontiert sind. Für das Top-Management besteht die Herausforderung darin, diese Komplexität beherrschbar zu machen, ohne die strategischen Dimensionen aus den Augen zu verlieren. ADVISORI hat einen spezifischen Ansatz entwickelt, der genau diesen Balanceakt ermöglicht.\n\n🧩 Komplexitätsreduktion bei maximaler Wertschöpfung:\n• Strategische Priorisierung: Wir identifizieren die für Ihr Geschäftsmodell kritischsten Basel III-Komponenten und entwickeln eine fokussierte Roadmap, die sich auf die größten Hebel konzentriert.\n• Executive Dashboard-Ansatz: Entwicklung maßgeschneiderter Management-Cockpits, die komplexe regulatorische Metriken in strategisch relevante KPIs übersetzen und klare Entscheidungsgrundlagen bieten.\n• Modulare Implementierung: Strukturierung der Basel III-Anforderungen in logisch zusammenhängende, separat umsetzbare Module, die schnellere Erfolge und bessere Ressourcenallokation ermöglichen.\n• Integrierte Governance: Etablierung einer klaren, aber schlanken Governance-Struktur, die regulatorische Überwachung mit strategischer Steuerung verbindet und Redundanzen eliminiert.\n\n🔑 ADVISORIs Schlüsselansätze für strategische Einfachheit:\n• C-Suite Translation Layer: Wir entwickeln speziell für das Top-Management konzipierte Kommunikations- und Entscheidungsvorlagen, die regulatorische Komplexität in geschäftsrelevante Implikationen übersetzen.\n• Rapid Impact Assessment: Schnelle, fokussierte Analysen, die die unmittelbaren und langfristigen Auswirkungen spezifischer Basel III-Anforderungen auf Ihre Schlüsselkennzahlen quantifizieren.\n• Digitales Navigationssystem: Implementation digitaler Tools, die Führungskräften erlauben, komplexe regulatorische Zusammenhänge intuitiv zu erfassen und Auswirkungen von Geschäftsentscheidungen zu simulieren.\n• Agile Regulierungsanpassung: Flexible Implementierungsansätze, die schnelle Anpassungen an regulatorische Änderungen ermöglichen, ohne strategische Initiativen zu unterbrechen oder neu ausrichten zu müssen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Kapitalkosten unter Basel III strategisch optimieren und welche innovativen Ansätze bietet ADVISORI zur Steigerung der Eigenkapitalrendite?",
        answer: "Basel III hat die Kapitalkosten für Banken signifikant erhöht – durch höhere Eigenkapitalanforderungen, zusätzliche Kapitalpuffer und strengere Qualitätsanforderungen an anrechenbares Kapital. Diese Veränderungen stellen eine fundamentale Herausforderung für die Eigenkapitalrendite (ROE) dar. ADVISORI bietet innovative Ansätze zur strategischen Kapitaloptimierung, die weit über konventionelle Maßnahmen hinausgehen.\n\n💹 Strategische Hebel zur Kapitaloptimierung unter Basel III:\n• Risikosensitive Portfoliosteuerung: Entwicklung fortschrittlicher Analysetools zur Identifikation von Geschäften mit suboptimalem Kapital-Ertrags-Verhältnis und systematische Reallokation von Kapital zu höhermargigen Aktivitäten.\n• Optimierung der Kapitalstruktur: Strategische Neuausrichtung der Kapitalzusammensetzung mit Fokus auf kosteneffiziente Tier 1 und Tier 2 Instrumente unter Berücksichtigung der TLAC/MREL-Anforderungen.\n• Bilanzmanagement der nächsten Generation: Implementierung von KI-gestützten Prognosemodellen für RWA-Entwicklung, die proaktive Bilanzsteuerung und vorausschauende Kapitalplanung ermöglichen.\n• Strategisches Collateral Management: Optimierung der Sicherheitenallokation zur gleichzeitigen Reduktion von RWA und Verbesserung der Liquiditätskennzahlen.\n\n🚀 ADVISORIs innovative Ansätze zur ROE-Steigerung:\n• Dynamische Kapital-Performancemessung: Entwicklung maßgeschneiderter Steuerungskennzahlen, die regulatorische Kapitalkosten mit ökonomischer Wertschöpfung verbinden und echte Performancetransparenz schaffen.\n• Capital-as-a-Service Modelle: Implementierung interner Marktplätze für Kapital, die effiziente Allokationsmechanismen und marktorientierte Preisgestaltung ermöglichen.\n• Regulatorische Arbitrage 2.0: Identifikation legaler Optimierungspotenziale durch unterschiedliche Interpretationen und Implementierungen von Basel III in verschiedenen Jurisdiktionen.\n• Digitale Kapitaloptimierer: Einsatz fortschrittlicher Algorithmen zur kontinuierlichen Überwachung und Optimierung der Kapitalallokation mit automatisierten Anpassungsempfehlungen in Echtzeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können wir Basel III nutzen, um unsere Datenarchitektur und Analytics-Fähigkeiten zu transformieren und welchen Mehrwert schafft dies über die reine Compliance hinaus?",
        answer: "Die umfangreichen Datenanforderungen von Basel III können als strategischer Katalysator für eine umfassende Transformation der Datenarchitektur und Analytics-Fähigkeiten Ihrer Bank genutzt werden. Eine solche Transformation generiert erheblichen Mehrwert jenseits der regulatorischen Compliance und schafft die Grundlage für datengetriebene Wettbewerbsvorteile in allen Geschäftsbereichen.\n\n📊 Strategische Datentransformation durch Basel III:\n• Enterprise Data Architecture: Die für Basel III erforderliche Integration von Risiko-, Finanz- und Kundendaten ermöglicht eine ganzheitliche 360°-Sicht auf das Geschäft und bildet die Grundlage für fortschrittliche Analytics.\n• Datenqualität als strategischer Asset: Der Aufbau systematischer Datenqualitätsprozesse für regulatorische Zwecke schafft einen zentralen Wettbewerbsvorteil für alle datengetriebenen Initiativen, von Kreditentscheidungen bis Kundenservice.\n• Real-time Processing Capabilities: Die Anforderung an zeitnahe Risikoaggregation fördert den Aufbau von Echtzeit-Datenverarbeitungsfähigkeiten, die auch für operative Prozesse und Kundeninteraktionen genutzt werden können.\n• Advanced Analytics Foundation: Die für Basel III benötigten statistischen Modelle und Prognoseansätze bilden die methodische Grundlage für fortgeschrittene Business Analytics und KI-Anwendungen.\n\n🧠 ADVISORIs Ansatz zur strategischen Datennutzung:\n• Integrierte Datenstrategieentwicklung: Wir verbinden regulatorische Datenanforderungen mit strategischen Geschäftszielen in einer kohärenten, mehrjährigen Datentransformationsroadmap.\n• Business-Value-Driven Data Governance: Implementierung von Data-Governance-Frameworks, die nicht nur Compliance sicherstellen, sondern aktiv Geschäftswertschöpfung durch verbesserte Datennutzung fördern.\n• Aufbau von Analytics Competence Centers: Entwicklung zentraler Analytics-Kapazitäten, die regulatorische Modelle mit kommerziellen Anwendungsfällen verbinden und Synergien systematisch nutzen.\n• Demokratisierung von Daten: Bereitstellung von Self-Service-Analytics-Plattformen, die es Fachabteilungen ermöglichen, regulatorische Daten für eigene Geschäftsentscheidungen zu nutzen."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
