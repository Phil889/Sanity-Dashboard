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
    console.log('Updating EBA page with C-Level FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie verändert die zunehmende Integration von ESG-Faktoren in die EBA-Regulierung die strategischen Prioritäten für Finanzinstitute?",
        answer: "Die Integration von Environmental, Social und Governance (ESG) Faktoren in den regulatorischen Rahmen der EBA markiert einen fundamentalen Paradigmenwechsel für den europäischen Finanzsektor. Für die C-Suite bedeutet dies nicht nur neue Compliance-Anforderungen, sondern erfordert eine grundlegende Neuausrichtung der Geschäftsstrategie, des Risikomanagements und der Kapitalallokation, um langfristige Wettbewerbsfähigkeit zu sichern.\n\n🌱 Strategische Implikationen der ESG-Integration in EBA-Regularien:\n• Transformation des Risikomanagements: Klimabezogene und ökologische Risiken müssen in bestehende Risikomodelle integriert werden, was eine Neubewertung von Kreditportfolios, Investitionsstrategien und Geschäftsbeziehungen erfordert.\n• Kapitalallokation und Produktstrategie: Die zunehmende regulatorische Differenzierung zwischen \"grünen\" und \"braunen\" Vermögenswerten beeinflusst die Kapitalkosten und erfordert eine strategische Neuausrichtung des Produkt- und Dienstleistungsportfolios.\n• Erweiterte Offenlegungspflichten: Die EBA-Anforderungen zur Transparenz von ESG-Risiken erhöhen den Druck auf Finanzinstitute, robuste Dateninfrastrukturen und Berichtsverfahren zu entwickeln, die über traditionelle Finanzmetriken hinausgehen.\n• Reputationsmanagement in einer ESG-sensitiven Welt: Die ESG-Performance wird zunehmend zu einem entscheidenden Faktor für die Wahrnehmung durch Investoren, Kunden und Aufsichtsbehörden und damit für die Unternehmensbewertung.\n\n📈 ADVISORI's strategischer Ansatz für ESG-Integration:\n• Ganzheitliche ESG-Strategieentwicklung: Wir unterstützen Sie bei der Entwicklung einer integrierten ESG-Strategie, die regulatorische Anforderungen mit Ihren Geschäftszielen in Einklang bringt und neue Marktchancen identifiziert.\n• ESG-Risikomanagement-Framework: Unsere Methodik integriert ESG-Faktoren in Ihre bestehenden Risikomanagement-Prozesse und -Modelle, um eine umfassende Bewertung und Steuerung von Nachhaltigkeitsrisiken zu ermöglichen.\n• Datenarchitektur für ESG-Reporting: Wir konzipieren und implementieren skalierbare Datenarchitekturen, die die Erfassung, Analyse und Berichterstattung von ESG-Daten in der erforderlichen Granularität und Qualität ermöglichen.\n• ESG-Transformations-Roadmap: Gemeinsam entwickeln wir einen praxisorientierten Fahrplan für die schrittweise Integration von ESG-Faktoren in Ihre Geschäftsprozesse, Governance-Strukturen und strategischen Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie können Finanzinstitute die komplexen Anforderungen der EBA an das Datenmanagement und -reporting in einen strategischen Vorteil umwandeln?",
        answer: "Die regulatorischen Anforderungen der EBA an Datenmanagement und -reporting haben in den letzten Jahren erheblich an Umfang, Granularität und Komplexität zugenommen. Für visionäre C-Level-Führungskräfte liegt darin nicht nur eine regulatorische Herausforderung, sondern eine strategische Chance, Daten als wertvollen Unternehmensasset zu erschließen und einen nachhaltigen Wettbewerbsvorteil aufzubauen.\n\n💾 Von der Compliance-Last zum strategischen Datenvorteil:\n• Data Governance als Wertschöpfungstreiber: Die EBA-Anforderungen an die Datenqualität und -governance zwingen Finanzinstitute zu Investitionen in ihre Dateninfrastruktur, die weit über die Compliance hinaus Mehrwert generieren können.\n• Strategische Erkenntnisse aus regulatorischen Daten: Die für aufsichtsrechtliche Zwecke erhobenen detaillierten Daten können als Grundlage für fortschrittliche Analysen und Business Intelligence dienen und neue Einblicke in Kundenverhalten, Risikoprofile und Geschäftspotenziale liefern.\n• Integrierte Datenarchitektur statt Silos: Die Konsolidierung fragmentierter Datensilos zu einer einheitlichen Datenarchitektur, die sowohl regulatorische als auch geschäftliche Anforderungen erfüllt, reduziert Redundanzen und erhöht die Datenintegrität.\n• Automatisierung und KI-gestützte Analysen: Die für regulatorische Zwecke implementierten Automatisierungslösungen können auf andere Geschäftsbereiche ausgeweitet werden und die Effizienz und Präzision von Entscheidungsprozessen verbessern.\n\n🔍 ADVISORI's Ansatz für strategisches Datenmanagement:\n• Regulatory Data Strategy: Wir entwickeln eine umfassende Datenstrategie, die regulatorische Anforderungen mit geschäftlichen Zielen verbindet und Daten als strategischen Asset positioniert.\n• Data Operating Model: Wir konzipieren ein zukunftsfähiges Betriebsmodell für das Datenmanagement, das klare Verantwortlichkeiten, effiziente Prozesse und robuste Kontrollen umfasst.\n• Integrated Data Architecture: Unsere Architekturansätze schaffen eine einheitliche Datenbasis, die regulatorische Anforderungen erfüllt und gleichzeitig als Fundament für geschäftliche Anwendungen und Analysen dient.\n• Advanced Analytics & Insights: Wir unterstützen Sie bei der Entwicklung von Analysecapabilities, die aus regulatorischen Daten wertvolle Geschäftseinblicke generieren und datengetriebene Entscheidungen fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche Strategien empfiehlt ADVISORI, um die Resilienz von Finanzinstituten gegenüber den sich ständig ändernden EBA-Anforderungen zu stärken?",
        answer: "Die Dynamik und Komplexität der EBA-Regulierungen stellen Finanzinstitute vor die kontinuierliche Herausforderung, ihre Compliance-Strukturen anzupassen und gleichzeitig ihre operative Effizienz und strategische Agilität zu wahren. Für die C-Suite ist die Entwicklung einer nachhaltigen Resilienz gegenüber regulatorischen Veränderungen daher ein kritischer Erfolgsfaktor für langfristige Wettbewerbsfähigkeit und Wertschöpfung.\n\n🔄 Kernelemente einer robusten regulatorischen Resilienz:\n• Adaptive Governance-Strukturen: Flexible, aber robuste Governance-Modelle, die schnelle Entscheidungsfindung und klare Verantwortlichkeiten bei regulatorischen Änderungen ermöglichen, ohne die organisatorische Stabilität zu gefährden.\n• Modulare Compliance-Architekturen: Technologie- und Prozessarchitekturen, die auf Komponenten basieren, die unabhängig voneinander aktualisiert werden können, um auf spezifische regulatorische Änderungen zu reagieren, ohne das Gesamtsystem zu destabilisieren.\n• Proaktives Regulatory Intelligence: Systematische Überwachung und Analyse regulatorischer Entwicklungen, um frühzeitig potenzielle Auswirkungen zu erkennen und strategische Anpassungen zu initiieren, bevor sie zu Compliance-Risiken werden.\n• Regulatorische Szenarien und Stresstests: Entwicklung von Szenarien für mögliche regulatorische Entwicklungen und deren Integration in die strategische Planung und das Risikomanagement, um Unsicherheiten zu reduzieren und Anpassungsfähigkeit zu erhöhen.\n\n🛠️ ADVISORI's Resilienz-Stärkungsansatz:\n• Regulatory Change Management Framework: Wir etablieren robuste Prozesse und Strukturen für die systematische Identifikation, Bewertung und Umsetzung regulatorischer Änderungen, die die organisatorische Anpassungsfähigkeit maximieren.\n• Compliance by Design: Wir integrieren regulatorische Anforderungen bereits in die Konzeption von Geschäftsprozessen und IT-Systemen, um nachträgliche Anpassungen zu minimieren und die strukturelle Resilienz zu erhöhen.\n• Capability Building & Knowledge Transfer: Wir entwickeln die internen Fähigkeiten Ihrer Organisation, regulatorische Änderungen zu antizipieren und zu bewältigen, durch gezielte Schulungen, Tools und Wissensmanagementsysteme.\n• Technology Enablement: Wir identifizieren und implementieren technologische Lösungen, die die regulatorische Flexibilität erhöhen, wie RegTech-Anwendungen, KI-gestützte Compliance-Monitoring-Tools und adaptive Reporting-Systeme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können Vorstände und Aufsichtsräte ihre persönlichen Haftungsrisiken im Zusammenhang mit EBA-Compliance effektiv managen und minimieren?",
        answer: "Die persönliche Haftung von Vorständen und Aufsichtsräten bei Compliance-Verstößen hat in den letzten Jahren erheblich zugenommen. Die EBA und nationale Aufsichtsbehörden legen einen immer stärkeren Fokus auf die individuelle Verantwortlichkeit von Führungskräften im Rahmen von Governance-Anforderungen. Ein proaktives Management dieser persönlichen Haftungsrisiken ist daher für C-Level-Executives essentiell geworden.\n\n⚖️ Dimensionen der persönlichen Haftung bei EBA-Compliance:\n• Verschärfte Sorgfaltspflichten: Die regulatorischen Anforderungen an die Sorgfaltspflicht von Führungskräften sind erheblich gestiegen, mit expliziten Erwartungen an das aktive Engagement in Compliance-Fragen und die Überwachung von Risiken.\n• Nachweispflicht der Führungsverantwortung: Führungskräfte müssen zunehmend nachweisen können, dass sie angemessene Maßnahmen ergriffen haben, um Compliance-Risiken zu identifizieren, zu bewerten und zu mindern.\n• Persönliche Sanktionen: Die Bandbreite möglicher persönlicher Sanktionen reicht von finanziellen Strafen über berufliche Einschränkungen bis hin zu strafrechtlichen Konsequenzen bei schwerwiegenden Verstößen.\n• Reputationsrisiken: Neben formalen Sanktionen können Compliance-Verstöße erhebliche Reputationsschäden für die betroffenen Führungskräfte verursachen, die ihre Karriereaussichten langfristig beeinträchtigen können.\n\n🛡️ ADVISORI's Strategie zur Minimierung persönlicher Haftungsrisiken:\n• Executive Compliance Dashboard: Wir entwickeln maßgeschneiderte Compliance-Dashboards für die Führungsebene, die einen klaren Überblick über den Compliance-Status, kritische Risikoindikatoren und ausstehende Maßnahmen bieten.\n• Dokumentation der Führungsaufsicht: Wir implementieren robuste Prozesse zur Dokumentation der Aufsichts- und Überwachungsaktivitäten von Vorständen und Aufsichtsräten, die als Nachweis der Erfüllung ihrer Sorgfaltspflichten dienen können.\n• Governance-Optimierung: Wir analysieren und optimieren die Governance-Strukturen und Entscheidungsprozesse, um klare Verantwortlichkeiten, effektive Kontrollen und angemessene Eskalationswege sicherzustellen.\n• Executive Compliance Training: Wir bieten spezialisierte Schulungsprogramme für Führungskräfte an, die nicht nur regulatorisches Wissen vermitteln, sondern auch praktische Handlungsanleitungen für den Umgang mit Compliance-Risiken bieten."
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
    console.log('✅ C-Level FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
