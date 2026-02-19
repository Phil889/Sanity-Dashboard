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
    console.log('Updating EBA page with C-Level FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba' })
    
    if (!existingDoc) {
      throw new Error('Document "eba" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie können Finanzinstitute die zahlreichen EBA-Stresstestanforderungen nicht nur als Compliance-Übung, sondern als strategisches Instrument nutzen?",
        answer: "Stresstests, ursprünglich als aufsichtsrechtliches Instrument konzipiert, haben sich zu einem der mächtigsten strategischen Werkzeuge für vorausschauendes Risikomanagement und strategische Planung entwickelt. Für die C-Suite bieten die von der EBA geforderten Stresstests eine einzigartige Möglichkeit, die Widerstandsfähigkeit des Geschäftsmodells unter verschiedenen Szenarien zu testen und strategische Entscheidungen auf einer fundierten Basis zu treffen.\n\n📊 Transformation von regulatorischen Stresstests zu strategischen Entscheidungshilfen:\n• Integration in die strategische Planung: Statt Stresstests isoliert durchzuführen, können die Ergebnisse direkt in den strategischen Planungsprozess einfließen und Entscheidungen über Kapitalallokation, Geschäftsausrichtung und Risikoappetit informieren.\n• Forward-Looking Risk Intelligence: Die in Stresstests verwendeten Szenarien bieten wertvolle Einblicke in potenzielle zukünftige Entwicklungen und ermöglichen es, Schwachstellen und Opportunitäten frühzeitig zu identifizieren.\n• Optimierung der Kapitalstruktur: Die detaillierte Analyse der Kapitalauswirkungen unter Stressszenarien ermöglicht eine effizientere Kapitalplanung und -allokation, die sowohl regulatorische Anforderungen erfüllt als auch Renditeerwartungen optimiert.\n• Differenziertes Verständnis von Risikotreibern: Stresstests identifizieren die spezifischen Faktoren, die das Risikoprofil eines Instituts am stärksten beeinflussen, und ermöglichen gezielte Maßnahmen zur Risikominderung.\n\n🔄 ADVISORI's strategischer Stresstest-Ansatz:\n• Integrated Stress Testing Framework: Wir entwickeln ein ganzheitliches Stresstestrahmenwerk, das regulatorische Anforderungen erfüllt und gleichzeitig als strategisches Steuerungsinstrument für die Geschäftsleitung dient.\n• Scenario Development & Analysis: Wir unterstützen Sie bei der Entwicklung maßgeschneiderter Szenarien, die neben makroökonomischen Faktoren auch geschäftsspezifische Risiken und strategische Unsicherheiten berücksichtigen.\n• Strategic Interpretation & Communication: Wir transformieren komplexe Stresstest-Ergebnisse in klare, handlungsorientierte Erkenntnisse für die Führungsebene und entwickeln evidenzbasierte strategische Handlungsoptionen.\n• Capital Planning & Optimization: Basierend auf Stresstest-Ergebnissen identifizieren wir Optimierungspotentiale in der Kapitalstruktur und -allokation und entwickeln Strategien zur Verbesserung der Kapitaleffizienz unter Beibehaltung regulatorischer Compliance."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie können Finanzinstitute die wachsenden EBA-Anforderungen an die IT-Infrastruktur und Cybersicherheit als Chance für digitale Transformation nutzen?",
        answer: "Die zunehmend detaillierten EBA-Anforderungen an IT-Governance, Cybersicherheit und operationelle Resilienz werden von vielen Finanzinstituten primär als regulatorische Last wahrgenommen. Für die weitsichtige C-Suite bieten diese Anforderungen jedoch einen strategischen Rahmen und Katalysator für die notwendige digitale Transformation des Unternehmens, die weit über die reine Compliance hinaus Wettbewerbsvorteile schaffen kann.\n\n🔐 Von Compliance zu Digital Leadership:\n• Modernisierung der IT-Architektur: Die regulatorischen Anforderungen an Stabilität, Skalierbarkeit und Sicherheit der IT-Systeme schaffen einen überzeugenden Business Case für die längst überfällige Modernisierung veralteter Systeme und die Konsolidierung fragmentierter IT-Landschaften.\n• Datenmanagement als strategischer Asset: Die strengen Anforderungen an Datenqualität, -governance und -sicherheit zwingen Finanzinstitute zu Investitionen in ihre Datenfähigkeiten, die auch die Grundlage für datengetriebene Geschäftsmodelle und KI-Anwendungen bilden.\n• Cybersicherheit als Vertrauensbasis: Robuste Cybersicherheitsmaßnahmen, die über regulatorische Minimalanforderungen hinausgehen, können als Differenzierungsmerkmal und Vertrauensbasis im Kundengeschäft positioniert werden.\n• Agilität durch Cloud-Transformation: Die EBA-Vorgaben für Cloud-Computing bieten einen strukturierten Rahmen für die sichere Migration in die Cloud, die Agilität, Innovationsfähigkeit und Kosteneffizienz steigern kann.\n\n💻 ADVISORI's ganzheitlicher Digital Transformation Ansatz:\n• Regulatory-Driven IT Strategy: Wir entwickeln eine IT-Strategie, die regulatorische Anforderungen als Treiber für strategische Modernisierung und digitale Innovation nutzt und einen klaren Mehrwert über die Compliance hinaus schafft.\n• Secure-by-Design Architecture: Unser Architekturansatz integriert Sicherheits- und Compliance-Anforderungen von Beginn an in das Design neuer Systeme und Prozesse, was nachträgliche Anpassungen minimiert und die Time-to-Market neuer Lösungen beschleunigt.\n• Cloud Governance Framework: Wir etablieren ein robustes Governance-Modell für Cloud-Services, das regulatorische Anforderungen erfüllt und gleichzeitig die Vorteile der Cloud in Bezug auf Skalierbarkeit, Kosteneffizienz und Innovation maximiert.\n• Integrated Third-Party Risk Management: Wir implementieren ein umfassendes Risikomanagement für IT-Dienstleister und -Partner, das regulatorische Anforderungen erfüllt und gleichzeitig die strategische Nutzung von Partnerschaften zur Beschleunigung der digitalen Transformation ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie unterstützt ADVISORI Finanzinstitute dabei, die EBA-Anforderungen an das Management von Modellrisiken effektiv umzusetzen und gleichzeitig den Wert ihrer Modelle zu maximieren?",
        answer: "Mit der zunehmenden Nutzung komplexer Modelle für kritische Geschäftsentscheidungen hat die EBA ihre Anforderungen an das Modellrisikomanagement deutlich verschärft. Diese regulatorischen Anforderungen werden oft als Einschränkung der Modellinnovation wahrgenommen, bieten jedoch bei strategischer Umsetzung die Chance, die Qualität und den Wert von Modellen signifikant zu steigern und somit bessere Geschäftsentscheidungen zu ermöglichen.\n\n🧮 Strategische Dimensionen des Modellrisikomanagements:\n• Modellportfolio-Optimierung: Ein systematischer Überblick über alle Modelle ermöglicht die Identifikation von Redundanzen, Inkonsistenzen und Optimierungspotentialen im Modellportfolio und schafft die Basis für eine strategische Priorisierung von Modellressourcen.\n• Qualitätssteigerung und Vertrauensbildung: Robuste Validierungsverfahren erhöhen nicht nur die Zuverlässigkeit von Modellen, sondern auch das Vertrauen der Entscheidungsträger in die Modellergebnisse, was zu einer besseren Integration in Geschäftsentscheidungen führt.\n• Agile Modellinnovation im regulatorischen Rahmen: Ein strukturierter Entwicklungs- und Validierungsprozess ermöglicht es, neue Modellansätze und Technologien schneller und sicherer einzuführen, ohne regulatorische Risiken zu erhöhen.\n• Wissensmanagement und organisationales Lernen: Die systematische Dokumentation von Modellannahmen, -limitationen und -performance fördert den Wissenstransfer innerhalb der Organisation und die kontinuierliche Verbesserung von Modellen.\n\n📐 ADVISORI's integrierter Ansatz für Modellrisikomanagement:\n• Comprehensive Model Inventory: Wir entwickeln einen strukturierten Überblick über Ihr gesamtes Modellportfolio, der als Basis für eine strategische Steuerung von Modellrisiken und -ressourcen dient.\n• Risk-Based Validation Framework: Unser risikobasierter Validierungsansatz konzentriert Ressourcen auf die kritischsten Modelle und stellt sicher, dass Validierungsaktivitäten im Verhältnis zum tatsächlichen Risiko und Geschäftswert des Modells stehen.\n• Model Governance Operating Model: Wir etablieren effiziente Prozesse und Strukturen für das Modellrisikomanagement, die regulatorische Anforderungen erfüllen und gleichzeitig agile Modellinnovation ermöglichen.\n• Advanced Validation Techniques: Wir setzen fortschrittliche Validierungsmethoden ein, die über regulatorische Mindestanforderungen hinausgehen und tiefere Einblicke in Modellqualität und -performance bieten, was die kontinuierliche Verbesserung von Modellen unterstützt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie können Finanzinstitute die EBA-Anforderungen an die Offenlegung und Transparenz (Pillar 3) strategisch nutzen, um Vertrauen bei Investoren und anderen Stakeholdern zu stärken?",
        answer: "Die umfangreichen Offenlegungsanforderungen der EBA unter Pillar 3 werden von vielen Finanzinstituten als ressourcenintensive Compliance-Übung betrachtet. Für strategisch denkende C-Level-Executives bieten diese Anforderungen jedoch eine einzigartige Plattform, um das Vertrauen von Investoren, Kunden und anderen Stakeholdern zu stärken und die Marktwahrnehmung des Instituts positiv zu beeinflussen.\n\n📣 Strategische Nutzung regulatorischer Transparenz:\n• Differenzierung durch Qualität der Offenlegung: Die Art und Weise, wie ein Institut seine regulatorischen Berichte präsentiert, kann ein starkes Signal für seine generelle Governance-Qualität, Risikomanagement-Exzellenz und strategische Klarheit sein.\n• Narrative Control und Kontextualisierung: Die Offenlegungsanforderungen bieten die Möglichkeit, Kennzahlen zu kontextualisieren und die strategische Ausrichtung, Stärken und Differenzierungsmerkmale des Instituts zu kommunizieren.\n• Investorenvertrauen und Kapitalkosten: Eine transparente, proaktive und qualitativ hochwertige Offenlegungspraxis kann das Vertrauen von Investoren stärken und potenziell die Kapitalkosten senken.\n• Regulatorisches Beziehungsmanagement: Eine vorbildliche Umsetzung der Offenlegungsanforderungen kann die Beziehung zu Aufsichtsbehörden positiv beeinflussen und mehr Spielraum in anderen regulatorischen Bereichen schaffen.\n\n📊 ADVISORI's strategischer Transparenz-Ansatz:\n• Strategic Disclosure Framework: Wir entwickeln ein Rahmenwerk, das regulatorische Offenlegungsanforderungen mit Ihrer Investor Relations- und Kommunikationsstrategie verknüpft und einen konsistenten, wertstiftenden Ansatz für alle Arten von Offenlegungen sicherstellt.\n• Competitive Benchmarking & Best Practices: Wir analysieren die Offenlegungspraktiken führender Institute und identifizieren Differenzierungsmöglichkeiten und Best Practices, die auf Ihr Institut übertragen werden können.\n• Automated Disclosure Solutions: Wir konzipieren und implementieren Automatisierungslösungen für den Offenlegungsprozess, die nicht nur die Effizienz steigern, sondern auch die Qualität, Konsistenz und Verlässlichkeit der offengelegten Informationen verbessern.\n• Integrated ESG & Financial Disclosure: Wir entwickeln einen integrierten Ansatz für die Offenlegung finanzieller und nicht-finanzieller Informationen, der den wachsenden Anforderungen an ESG-Transparenz gerecht wird und gleichzeitig regulatorische Anforderungen erfüllt."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
