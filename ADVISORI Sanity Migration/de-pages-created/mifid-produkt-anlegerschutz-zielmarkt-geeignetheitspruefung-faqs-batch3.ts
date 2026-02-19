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
    console.log('Updating MiFID Produkt Anlegerschutz page with strategic FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung' })
    
    if (!existingDoc) {
      throw new Error('Document "mifid-produkt-anlegerschutz-zielmarkt-geeignetheitspruefung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die MiFID II-Anforderungen an die Produktgovernance in ihre bestehenden Entwicklungs- und Genehmigungsprozesse integrieren?",
        answer: "Die Integration der MiFID II-Produktgovernance-Anforderungen in bestehende Produktentwicklungs- und Genehmigungsprozesse stellt eine komplexe Transformationsaufgabe dar. Eine erfolgreiche Integration erfordert eine systematische Neugestaltung der Prozesse unter Berücksichtigung regulatorischer Anforderungen, ohne dabei Effizienz und Innovationskraft zu beeinträchtigen.\n\n🔄 Kernaspekte der Prozessintegration:\n• End-to-End Prozessdesign: Entwicklung einer ganzheitlichen Produktgovernance-Architektur, die den gesamten Produktlebenszyklus abdeckt – von der Ideenfindung über Entwicklung, Genehmigung und Vertrieb bis hin zur regelmäßigen Überprüfung und Anpassung.\n• Stage-Gate-Modell: Implementierung eines strukturierten Freigabeprozesses mit klar definierten Meilensteinen und Go/No-Go-Entscheidungen, die regulatorische Prüfungen integrieren, ohne den Prozessfluss unnötig zu verlangsamen.\n• Verantwortlichkeitsmatrix: Etablierung einer klaren Governance-Struktur mit definierten Rollen, Verantwortlichkeiten und Entscheidungsbefugnissen für alle Produktgovernance-relevanten Aspekte.\n• Informationsmanagement: Aufbau einer systematischen Informationsarchitektur zur Dokumentation aller relevanten Produktinformationen, Entscheidungen und Begründungen über den gesamten Produktlebenszyklus.\n\n🛠️ Der ADVISORI-Integrationsansatz:\n• Ist-Analyse und Gap-Assessment: Detaillierte Analyse Ihrer bestehenden Prozesse und Identifikation spezifischer Anpassungsbedarfe zur Erfüllung der MiFID II-Anforderungen.\n• Maßgeschneidertes Prozessdesign: Entwicklung eines individualisierten Produktgovernance-Prozesses, der Ihre spezifischen Organisationsstrukturen, Produkttypen und bestehenden Workflows berücksichtigt.\n• Balanced Integration: Gestaltung eines ausgewogenen Ansatzes, der regulatorische Compliance sicherstellt, ohne unnötige Bürokratie zu schaffen oder Innovationen zu hemmen.\n• Digitalisierungsstrategie: Konzeption und Implementierung digitaler Lösungen zur Automatisierung von Routineaspekten der Produktgovernance und zur nahtlosen Integration in Ihre bestehende IT-Landschaft."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Anforderungen stellt MiFID II an die Dokumentation von Geeignetheitsprüfungen und wie unterstützt ADVISORI bei deren effizienter Umsetzung?",
        answer: "Die Dokumentation von Geeignetheitsprüfungen ist ein zentraler Bestandteil der MiFID II-Anforderungen und dient sowohl dem Nachweis regulatorischer Compliance als auch dem Schutz vor potenziellen Haftungsrisiken. Eine systematische, effiziente Dokumentation erfordert durchdachte Prozesse und unterstützende Technologien, die regulatorische Anforderungen erfüllen, ohne den Beratungsprozess zu belasten.\n\n📝 Dokumentationsanforderungen unter MiFID II:\n• Vollständige Kundenprofilerfassung: Umfassende Dokumentation aller relevanten Kundeninformationen zu Kenntnissen, Erfahrungen, finanzieller Situation, Risikotoleranz und Anlagezielen mit nachvollziehbarer Methodik zur Erfassung und Bewertung.\n• Beratungsprozessdokumentation: Lückenlose Aufzeichnung des gesamten Beratungsprozesses, einschließlich diskutierter Optionen, Kundenentscheidungen und spezifischer Begründungen für Produktempfehlungen in Bezug auf das individuelle Kundenprofil.\n• Geeignetheitsbeurteilung: Explizite Dokumentation der Eignungsbewertung für jede empfohlene Transaktion mit klarer Darlegung, warum das empfohlene Produkt den Zielen, Bedürfnissen und Eigenschaften des Kunden entspricht.\n• Langfristige Nachweisführung: Sicherstellung der langfristigen Verfügbarkeit und Integrität aller relevanten Dokumentationen für regulatorische Prüfungen und potenzielle Streitfälle mit Kunden.\n\n📋 Der ADVISORI-Dokumentationsansatz:\n• Dokumentationsframework: Entwicklung eines strukturierten Dokumentationsrahmens, der alle regulatorischen Anforderungen abdeckt und gleichzeitig praktikabel im Beratungsalltag ist.\n• Digitale Dokumentationslösungen: Konzeption und Implementierung digitaler Tools zur effizienten, strukturierten Erfassung und Verwaltung aller relevanten Informationen mit minimaler Belastung für Berater und Kunden.\n• Integrierte Beratungsstrecke: Gestaltung eines nahtlosen Beratungsprozesses, der die regulatorisch erforderliche Dokumentation organisch integriert und als Unterstützung für qualitativ hochwertige Beratung nutzt.\n• Compliance by Design: Implementation von proaktiven Kontrollen und Validierungen, die Dokumentationslücken oder -fehler frühzeitig identifizieren und beheben, bevor sie zu regulatorischen Risiken werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können Finanzinstitute sicherstellen, dass ihre Produktüberwachungsprozesse den fortlaufenden MiFID II-Anforderungen entsprechen?",
        answer: "Die fortlaufende Produktüberwachung stellt einen kritischen, oft unterschätzten Aspekt der MiFID II-Produktgovernance dar. Sie erfordert ein systematisches, proaktives Monitoring, das weit über eine reine Compliance-Übung hinausgeht und als strategisches Instrument zur Produktoptimierung und Risikominimierung dienen sollte.\n\n🔍 Kernelemente eines MiFID II-konformen Produktüberwachungsprozesses:\n• Systematisches Monitoring-Framework: Etablierung eines strukturierten Rahmenwerks zur regelmäßigen Überwachung aller relevanten Produktaspekte – von der Zielmarktkonformität über die Produktperformance bis hin zu Vertriebsaktivitäten und Kundenfeedback.\n• Ereignis- und zeitbasierte Überprüfung: Implementation eines dualen Ansatzes mit sowohl regelmäßigen, zeitplanbasierten Überprüfungen als auch ereignisgetriggerten Reviews bei signifikanten Marktveränderungen oder anderen relevanten Ereignissen.\n• Vertriebsfeedback-Integration: Aufbau systematischer Prozesse zur Erfassung und Analyse von Rückmeldungen aus dem Vertrieb über Produkteignung, Kundenakzeptanz und potenzielle Probleme.\n• Eskalations- und Maßnahmenprozesse: Entwicklung klarer Verfahren für die Eskalation identifizierter Probleme und die Einleitung angemessener Maßnahmen – von Produktanpassungen bis hin zu Vertriebsstopps oder Produktrückrufen.\n\n📊 Der ADVISORI-Überwachungsansatz:\n• Risikoorientiertes Monitoring: Konzeption eines risikobasierten Überwachungsansatzes, der Überwachungsintensität und -frequenz an die Produktkomplexität, Zielgruppenvulnerabilität und potenzielle Risiken anpasst.\n• Kennzahlengestütztes System: Entwicklung eines aussagekräftigen KPI-Sets zur objektiven Bewertung der Produkteignung und -performance mit klaren Schwellenwerten für weitergehende Analysen oder Maßnahmen.\n• Automatisierte Monitoringlösungen: Implementation digitaler Tools zur Automatisierung von Routineaspekten der Produktüberwachung, wie Datenerfassung, Schwellenwertüberwachung und Standardberichterstattung.\n• Integriertes Governance-Modell: Etablierung klarer Verantwortlichkeiten, Entscheidungsprozesse und Dokumentationsstandards für alle Aspekte der fortlaufenden Produktüberwachung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Herausforderungen und Best Practices gibt es bei der Implementierung von MiFID II-Anforderungen im Rahmen von Robo-Advice und digitalen Beratungsmodellen?",
        answer: "Die Implementierung von MiFID II-Anforderungen in digitalen Beratungsmodellen und Robo-Advisory-Lösungen stellt spezifische Herausforderungen dar, bietet aber auch einzigartige Chancen. Die Digitalisierung der Anlegerschutzprozesse erfordert eine sorgfältige Balance zwischen regulatorischer Compliance, technologischer Innovation und nutzerzentriertem Design.\n\n💻 Spezifische Herausforderungen bei digitalen Beratungsmodellen:\n• Algorithmus-Transparenz: Notwendigkeit, die Entscheidungslogik und Parameter der verwendeten Algorithmen transparent, nachvollziehbar und prüfbar zu gestalten, um regulatorischen Anforderungen zu genügen.\n• Digitale Geeignetheitsprüfung: Herausforderung, eine umfassende, tiefgehende Geeignetheitsprüfung in einem digitalen, oft selbstbedienten Format zu gewährleisten, das sowohl regulatorisch robust als auch nutzerfreundlich ist.\n• Vollständige Kundenprofilierung: Komplexität, alle relevanten Kundeninformationen in einem digitalen Prozess zu erfassen, ohne den Nutzer mit übermäßig langen Fragebögen zu überfordern oder wichtige Nuancen zu übersehen.\n• Hybride Beratungsmodelle: Notwendigkeit, nahtlose Übergänge zwischen automatisierten und menschlichen Beratungselementen zu schaffen, besonders für komplexere Beratungssituationen oder vulnerable Kundengruppen.\n\n🚀 Best Practices und ADVISORI-Ansatz:\n• User-Centered Compliance Design: Entwicklung digitaler Anlegerschutzprozesse, die regulatorische Anforderungen erfüllen und gleichzeitig ein optimales Nutzererlebnis bieten, durch iterative Testverfahren und Nutzerfeedback.\n• Intelligente Fragebogentechnik: Implementation adaptiver Befragungstechniken, die Folgefragen dynamisch an vorherige Antworten anpassen und so die Relevanz erhöhen und den Umfang minimieren.\n• Digitale Beratungsdokumentation: Konzeption automatisierter, aber dennoch umfassender Dokumentationslösungen, die alle regulatorischen Anforderungen erfüllen und gleichzeitig für Kunden verständlich und nachvollziehbar sind.\n• Integrierte Überwachungsmechanismen: Etablierung kontinuierlicher Monitoring- und Validierungsprozesse für digitale Beratungsalgorithmen, um deren Qualität und regulatorische Konformität fortlaufend sicherzustellen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new strategic FAQs to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Strategic FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
