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
    console.log('Updating CRA Cyber Resilience Act CE-Marking page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-act-ce-marking' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-act-ce-marking" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist die CE-Kennzeichnung nach dem Cyber Resilience Act für die C-Suite mehr als nur ein regulatorischer Compliance-Aspekt und wie positioniert ADVISORI dies strategisch?",
        answer: "Für C-Level-Führungskräfte stellt die CE-Kennzeichnung nach dem Cyber Resilience Act (CRA) einen fundamentalen Paradigmenwechsel dar: von reaktivem Compliance-Management hin zu proaktiver strategischer Marktpositionierung. Die CE-Markierung ist nicht nur ein regulatorisches 'Must-have', sondern ein entscheidender Wettbewerbsvorteil, der die Marktfähigkeit, Vertrauenswürdigkeit und langfristige Geschäftsentwicklung maßgeblich beeinflusst.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Marktmacht und Wettbewerbsvorteile: Unternehmen mit frühzeitiger CRA-Konformität können sich als vertrauenswürdige Partner positionieren und Marktanteile von nicht-konformen Wettbewerbern gewinnen.\n• Risikominimierung und Haftungsschutz: Rechtssichere CE-Kennzeichnung schützt vor empfindlichen Bußgeldern (bis zu 15 Millionen Euro oder 2,5% des weltweiten Jahresumsatzes) und Produkthaftungsrisiken.\n• Vertrauen und Reputation: CE-konforme Produkte signalisieren höchste Cybersicherheitsstandards und stärken das Vertrauen von Kunden, Partnern und Investoren nachhaltig.\n• Zukunftsfähigkeit und Innovation: CRA-Konformität als Grundlage für sichere digitale Transformation und Erschließung neuer Geschäftsfelder.\n\n🛡️ Der strategische ADVISORI-Ansatz:\n• Ganzheitliche Marktanalyse: Wir bewerten nicht nur technische Konformität, sondern auch die strategischen Marktchancen und Positionierungsmöglichkeiten durch frühzeitige CRA-Compliance.\n• Business-Case-Entwicklung: Transformation der CE-Kennzeichnung von einer Kostenstelle zu einem strategischen Investment mit messbarem ROI und Wettbewerbsvorteilen.\n• Integrierte Roadmap: Verzahnung der CRA-Compliance mit Ihrer digitalen Transformation, Produktentwicklung und Marktexpansionsstrategie.\n• Executive Dashboard: Bereitstellung von C-Level-gerechten KPIs und Monitoring-Tools für kontinuierliche strategische Steuerung der Compliance-Aktivitäten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie transformiert ADVISORI die CE-Kennzeichnung nach dem CRA von einem Kostenfaktor zu einem messbaren Business Value und welche konkreten ROI-Hebel entstehen?",
        answer: "Die CE-Kennzeichnung nach dem Cyber Resilience Act wird oft als regulatorische Belastung wahrgenommen. ADVISORI kehrt diese Sichtweise um und macht aus der Compliance-Anforderung einen strategischen Werttreiber mit messbarem Return on Investment. Für die C-Suite bedeutet dies eine fundamentale Neubewertung der CRA-Investitionen als Wachstumskatalysator.\n\n💰 Direkte monetäre Werttreiber:\n• Marktvorsprung und Premium-Positionierung: CE-konforme Produkte können Premium-Preise erzielen und exklusive Marktchancen nutzen, da sie höchste Sicherheitsstandards garantieren.\n• Kostenvermeidung und Risikominimierung: Vermeidung von Millionen-Bußgeldern, Produktrückrufen und Reputationsschäden durch proaktive Konformität.\n• Beschleunigte Markteinführung: Strukturierte CE-Vorbereitung verkürzt Time-to-Market und ermöglicht schnellere Monetarisierung neuer Produkte.\n• Operative Effizienzgewinne: Standardisierte CRA-Prozesse reduzieren Entwicklungskosten und schaffen skalierbare Compliance-Frameworks.\n\n📈 Strategische Wertsteigerung:\n• Investoren- und Partnerattraktivität: CRA-Konformität als Qualitätsmerkmal, das Verhandlungspositionen bei Partnerschaften, Akquisitionen und Finanzierungsrunden stärkt.\n• Globale Expansionsfähigkeit: CE-Kennzeichnung als Türöffner für internationale Märkte und als Basis für weitere Compliance-Standards.\n• Innovation Enablement: CRA-konforme Architekturen als Fundament für sichere digitale Services und neue Geschäftsmodelle.\n\n🔧 ADVISORI's Value Engineering:\n• ROI-Kalkulator: Entwicklung individueller Business Cases mit quantifizierten Vorteilen und Kosteneinsparungen der CRA-Compliance.\n• Phased Implementation: Stufenweise Umsetzung mit frühen Quick Wins und kontinuierlichem Wertnachweis.\n• Benchmarking und KPIs: Etablierung von Metriken zur kontinuierlichen Messung des Business Value der CE-Kennzeichnung.\n• Cross-functional Integration: Verzahnung der CRA-Aktivitäten mit bestehenden Geschäftsprozessen zur Maximierung der Synergien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die CRA-Landschaft ist komplex und entwickelt sich rasant weiter. Wie stellt ADVISORI sicher, dass unsere CE-Kennzeichnungsstrategie zukunftsfähig und adaptiv bleibt?",
        answer: "Der Cyber Resilience Act stellt Unternehmen vor die Herausforderung einer sich kontinuierlich entwickelnden Regulierungslandschaft. Statische Compliance-Ansätze werden schnell obsolet. ADVISORI entwickelt adaptive CE-Kennzeichnungsstrategien, die nicht nur aktuelle Anforderungen erfüllen, sondern auch künftige Entwicklungen antizipieren und flexibel darauf reagieren können.\n\n🔄 Adaptive Compliance-Architektur:\n• Kontinuierliches Regulatory Monitoring: Proaktive Überwachung von CRA-Entwicklungen, delegierten Rechtsakten und technischen Standards durch spezialisierte Rechts- und Technikexperten.\n• Evolutionäre Dokumentationssysteme: Aufbau modularer und erweiterbarer Dokumentationsframeworks, die sich schnell an neue Anforderungen anpassen lassen.\n• Szenario-basierte Planung: Entwicklung verschiedener Compliance-Szenarien und Handlungsoptionen für unterschiedliche regulatorische Entwicklungspfade.\n• Technology Roadmapping: Integration emerging Technologies und Standards in die langfristige CE-Strategie.\n\n🎯 ADVISORI's Future-Ready Approach:\n• Regulatory Intelligence Hub: Zugang zu einem spezialisierten Netzwerk von EU-Rechtexperten, Standardisierungsorganisationen und Regulierungsbehörden.\n• Predictive Compliance: Nutzung von Datenanalyse und Trendforschung zur Vorhersage zukünftiger Regulierungsänderungen und deren Auswirkungen.\n• Agile Implementation: Implementierung flexibler Prozesse und Systeme, die schnelle Anpassungen an neue Anforderungen ermöglichen.\n• Continuous Learning: Etablierung von Lernschleifen und Feedback-Mechanismen für kontinuierliche Verbesserung der Compliance-Strategie.\n\n🚀 Strategische Vorbereitung auf zukünftige Entwicklungen:\n• Harmonization Readiness: Vorbereitung auf internationale Harmonisierung von Cybersicherheitsstandards und grenzübergreifende Compliance-Anforderungen.\n• AI and Automation Integration: Integration von KI-gestützten Tools für automatisierte Compliance-Überwachung und -Berichterstattung.\n• Ecosystem Partnerships: Aufbau strategischer Partnerschaften mit Prüfstellen, Zertifizierungsorganisationen und Technologieanbietern.\n• Innovation Pipeline: Entwicklung von Innovationsstrategien, die neue Technologien und Geschäftsmodelle CRA-konform von Anfang an integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie orchestriert ADVISORI eine effiziente CE-Kennzeichnung nach dem CRA über verschiedene Produktlinien und Geschäftsbereiche hinweg und welche organisatorischen Synergien entstehen?",
        answer: "Für diversifizierte Unternehmen mit mehreren Produktlinien stellt die CRA-Compliance eine komplexe organisatorische Herausforderung dar. ADVISORI entwickelt ganzheitliche Orchestrierungsstrategien, die nicht nur Effizienz und Kosteneinsparungen durch Synergien erzielen, sondern auch eine konsistente und skalierbare Compliance-Kultur im gesamten Unternehmen etablieren.\n\n🏗️ Strategische Organisationsarchitektur:\n• Center of Excellence (CoE) Aufbau: Etablierung einer zentralen CRA-Kompetenzeinheit, die Standards, Best Practices und Wissensvermittlung für alle Geschäftsbereiche koordiniert.\n• Cross-functional Integration: Verzahnung von Produktentwicklung, Qualitätsmanagement, Legal, IT-Security und Vertrieb in einem kohärenten CRA-Framework.\n• Skalierbare Prozesslandschaft: Entwicklung modularer und wiederverwendbarer Compliance-Prozesse, die sich effizient auf verschiedene Produktkategorien anwenden lassen.\n• Governance und Steuerung: Implementierung von C-Level-Steuerungsstrukturen mit klaren Verantwortlichkeiten und Eskalationswegen.\n\n⚡ Synergieeffekte und Effizienzgewinne:\n• Shared Services und Ressourcen: Gemeinsame Nutzung von Prüfkapazitäten, Dokumentationstools und Expertenwissen reduziert Kosten pro Produktlinie um bis zu 40%.\n• Standardisierte Toolchains: Einheitliche CE-Kennzeichnungs-Tools und -Plattformen ermöglichen economies of scale und reduzieren Schulungsaufwand.\n• Knowledge Leverage: Übertragung von Lernerfahrungen und Best Practices zwischen Produktlinien beschleunigt Compliance-Prozesse erheblich.\n• Risk Pooling: Verteilung von Compliance-Risiken über mehrere Produktbereiche und Aufbau kollektiver Risikobewältigungskapazitäten.\n\n🎯 ADVISORI's Orchestration Excellence:\n• Portfolio-übergreifende Roadmaps: Entwicklung integrierter CRA-Roadmaps, die Abhängigkeiten und Synergien zwischen verschiedenen Geschäftsbereichen optimal nutzen.\n• Change Management: Professionelle Begleitung des organisatorischen Wandels hin zu einer compliance-integrierten Unternehmenskultur.\n• Performance Management: Etablierung von KPIs und Monitoring-Systemen für kontinuierliche Optimierung der Compliance-Effizienz.\n• Executive Reporting: Bereitstellung konsolidierter C-Level-Dashboards für strategische Steuerung der unternehmensweiten CRA-Aktivitäten."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
