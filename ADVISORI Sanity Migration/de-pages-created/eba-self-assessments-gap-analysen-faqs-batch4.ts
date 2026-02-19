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
    console.log('Updating EBA Self-Assessments & Gap Analysen page with C-Level FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-self-assessments-gap-analysen' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-self-assessments-gap-analysen" not found')
    }
    
    // Create new C-Level FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche Rolle spielen Self-Assessments und Gap-Analysen im aufsichtsrechtlichen Dialog, und wie können wir diese strategisch nutzen?",
        answer: "Self-Assessments und Gap-Analysen sind nicht nur interne Compliance-Instrumente, sondern auch wertvolle strategische Hebel im aufsichtsrechtlichen Dialog. Ein proaktiver, transparenter Umgang mit diesen Instrumenten kann die Qualität der Aufsichtsbeziehung maßgeblich verbessern und Handlungsspielräume in der regulatorischen Kommunikation eröffnen.\n\n🔍 Strategische Dimensionen im aufsichtsrechtlichen Dialog:\n• Nachweis regulatorischer Sorgfalt: Systematische Self-Assessments demonstrieren proaktives Compliance-Management und Risikobewusstsein, was Vertrauen bei Aufsichtsbehörden schafft und die Grundlage für einen konstruktiven Dialog bildet.\n• Transparenzstrategie: Offener Umgang mit identifizierten Gaps und geplanten Maßnahmen signalisiert Integrität und kann ein kollaborativeres Verhältnis zur Aufsicht fördern, anstatt Schwächen zu verbergen und später mit Findings konfrontiert zu werden.\n• Interpretationshoheit: Fundierte Self-Assessments ermöglichen es, eigene, fachlich begründete Interpretationen regulatorischer Anforderungen in den Aufsichtsdialog einzubringen, statt nur auf aufsichtliche Auslegungen zu reagieren.\n• Priorisierungsargumentationen: Detaillierte Gap-Analysen liefern die Faktenbasis für begründete Priorisierungsentscheidungen, die auch gegenüber der Aufsicht vertreten werden können.\n\n🛠️ Praktische Umsetzungsstrategien:\n• Proaktive Kommunikation: Regelmäßiger, proaktiver Austausch mit Aufsichtsbehörden über Assessment-Ergebnisse und Maßnahmenpläne, ohne auf formelle Anfragen zu warten.\n• Präzise Narrativbildung: Entwicklung einer kohärenten, faktenbasierten Erzählung zu Compliance-Status, identifizierten Gaps und Implementierungsstrategie für den aufsichtlichen Dialog.\n• Dokumentierte Entscheidungsprozesse: Transparente Dokumentation von Bewertungen, Entscheidungen und Priorisierungen als Grundlage für fundierte Diskussionen mit der Aufsicht.\n• Collaborative Approach: Einbeziehung aufsichtlicher Perspektiven in die Weiterentwicklung der Assessment-Methodik, um Erwartungen frühzeitig zu integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie sollten wir in einer internationalen Finanzgruppe Self-Assessments zu EBA-Anforderungen organisieren, um sowohl lokale Besonderheiten als auch gruppenweite Konsistenz zu gewährleisten?",
        answer: "Die Organisation von Self-Assessments in internationalen Finanzgruppen erfordert eine Balance zwischen zentraler Steuerung und lokaler Anpassungsfähigkeit. Der Schlüssel liegt in einem harmonisierten Rahmenwerk, das gruppenweite Standards mit ausreichender Flexibilität für lokale regulatorische Besonderheiten und Organisationsstrukturen verbindet.\n\n🌐 Strukturelle Gestaltungsprinzipien:\n• Mehrebenen-Governance-Modell: Etablierung einer klaren Governance-Struktur mit definierten Rollen und Verantwortlichkeiten auf Gruppen- und Lokalebene sowie transparenten Eskalations- und Entscheidungswegen.\n• Prinzipienbasiertes Framework: Entwicklung eines gruppenweiten Assessment-Frameworks, das auf gemeinsamen Prinzipien und Methoden basiert, aber ausreichend Flexibilität für lokale Anpassungen bietet.\n• Proportionaler Ansatz: Differenzierung der Assessment-Tiefe und -Intensität basierend auf der Größe, Komplexität und dem Risikoprofil der lokalen Einheiten, ohne die Vergleichbarkeit zu kompromittieren.\n• Zentrales Monitoring mit lokaler Verantwortung: Kombination aus lokaler Durchführungsverantwortung und zentralem Monitoring des Assessment-Prozesses und der -Ergebnisse für eine ausgewogene Steuerung.\n\n🔄 Praktische Implementierungsstrategien:\n• Core & Flex Assessment-Modules: Entwicklung von verpflichtenden Kernmodulen für gruppenweite Standards und flexiblen Zusatzmodulen für lokale regulatorische Anforderungen.\n• Harmonisierte Bewertungsskalen: Implementierung einheitlicher Bewertungsskalen und -kriterien über alle Gruppeneinheiten hinweg, um Vergleichbarkeit und Aggregation zu ermöglichen.\n• Validierungsprozess mit lokaler und zentraler Beteiligung: Mehrstufiger Validierungsprozess, der sowohl lokales Fachwissen als auch zentrale Qualitätssicherung integriert.\n• Lokale Compliance Champions: Etablierung eines Netzwerks von lokalen Compliance-Experten, die sowohl mit dem gruppenweiten Framework als auch mit lokalen regulatorischen Besonderheiten vertraut sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir sicherstellen, dass die Erkenntnisse aus EBA-Self-Assessments nicht isoliert bleiben, sondern effektiv in Strategie- und Geschäftsentscheidungen einfließen?",
        answer: "Die Integration von Self-Assessment-Erkenntnissen in die strategische Entscheidungsfindung transformiert Compliance von einer isolierten Funktion zu einem strategischen Enabler. Eine systematische Verankerung der Erkenntnisse in Governance-Strukturen, Planungsprozessen und Performance-Management-Systemen ist entscheidend, um regulatorische Anforderungen mit geschäftlichen Zielen in Einklang zu bringen.\n\n🔄 Integrationsmechanismen auf strategischer Ebene:\n• Governance-Integration: Verankerung von Self-Assessment-Ergebnissen in regulären Board- und Executive-Committee-Agenden, um regulatorische Erkenntnisse systematisch in strategische Diskussionen einzubringen.\n• Strategische Planungsverknüpfung: Direkte Verknüpfung von Assessment-Ergebnissen und Maßnahmenplänen mit dem strategischen Planungszyklus und Budgetierungsprozessen.\n• Risk Appetite Alignment: Nutzung der Gap-Analyse-Erkenntnisse zur Kalibrierung des Risk Appetite Frameworks und Übersetzung regulatorischer Anforderungen in operationalisierbare Risikolimits.\n• Cross-functional Insight Sharing: Etablierung systematischer Prozesse zum Austausch von Assessment-Erkenntnissen zwischen Compliance, Risikomanagement, Business und IT für eine ganzheitliche Perspektive.\n\n📊 Operative Umsetzungsstrategien:\n• Integrierte Entscheidungsvorlagen: Entwicklung von Entscheidungsvorlagen für Geschäfts- und Strategieinitiativen, die explizit Assessment-Erkenntnisse und regulatorische Implikationen berücksichtigen.\n• Business Impact Mapping: Systematische Analyse der Geschäftsauswirkungen regulatorischer Gaps und Maßnahmen als Basis für informierte Entscheidungen.\n• Performance-KPI-Integration: Einbettung von Compliance-KPIs aus Self-Assessments in das Performance-Management-System auf allen Führungsebenen.\n• Incentive Alignment: Berücksichtigung von Assessment-Ergebnissen und Maßnahmenumsetzung in Vergütungs- und Anreizsystemen, um konsistente Anreize zu schaffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Trends und Entwicklungen sehen wir bei regulatorischen Self-Assessments, und wie sollten wir uns darauf vorbereiten?",
        answer: "Die Landschaft regulatorischer Self-Assessments befindet sich in einem kontinuierlichen Wandel, geprägt durch zunehmende aufsichtliche Erwartungen, technologische Innovationen und neue methodische Ansätze. Eine vorausschauende Ausrichtung auf diese Trends ermöglicht es Finanzinstituten, nicht nur reaktiv zu bleiben, sondern proaktiv Wettbewerbsvorteile zu erzielen.\n\n🔮 Zentrale Entwicklungstrends:\n• Erhöhte aufsichtliche Erwartungen: Zunehmender Fokus der Aufsichtsbehörden auf die Robustheit und Nachvollziehbarkeit von Self-Assessment-Prozessen mit steigenden Anforderungen an Methodik, Evidenz und Unabhängigkeit.\n• Integrierte Assessment-Ansätze: Entwicklung hin zu holistischen Assessment-Frameworks, die verschiedene regulatorische Domänen (Governance, Risiko, Compliance, IT) in einem kohärenten Ansatz verbinden.\n• Kontinuierliche statt punktuelle Assessments: Verschiebung von periodischen, punktuellen Übungen zu kontinuierlichen Monitoring- und Assessment-Prozessen mit Echtzeiteinblicken in den Compliance-Status.\n• Datengetriebene Assessment-Methoden: Zunehmender Einsatz von Datenanalyse, KI und Machine Learning zur Automatisierung von Assessments, Erkennung von Mustern und prädiktiver Identifikation potenzieller Compliance-Risiken.\n\n🧭 Strategische Vorbereitungsmaßnahmen:\n• Capability Building: Aufbau spezialisierter Fähigkeiten in datengetriebenen Assessment-Methoden, regulatorischer Analytik und integrierten GRC-Ansätzen (Governance, Risk, Compliance).\n• Technologische Modernisierung: Evaluation und Implementation moderner GRC-Plattformen, die integrierte Assessments, automatisierte Datenerfassung und fortschrittliche Analytik unterstützen.\n• Methodische Weiterentwicklung: Kontinuierliche Verfeinerung der Assessment-Methodik mit Fokus auf Objektivierung, Quantifizierung und Nachvollziehbarkeit von Bewertungen.\n• Proaktives Aufsichtsengagement: Aktiver Dialog mit Aufsichtsbehörden über evolvierende Erwartungen und Best Practices im Bereich regulatorischer Self-Assessments."
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
    console.log('✅ EBA Self-Assessments & Gap Analysen C-Level FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
