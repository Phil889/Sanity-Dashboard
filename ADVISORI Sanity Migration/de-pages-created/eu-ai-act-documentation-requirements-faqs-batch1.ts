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
    console.log('Updating EU AI Act Documentation Requirements page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-documentation-requirements' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-documentation-requirements" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum sind umfassende Dokumentationsanforderungen der EU AI Act für die C-Suite strategisch entscheidend und wie transformiert ADVISORI diese Compliance-Pflicht in einen Wettbewerbsvorteil?",
        answer: "Für die C-Suite stellen die Dokumentationsanforderungen der EU AI Act weit mehr als nur administrative Compliance-Pflichten dar – sie sind fundamentale Bausteine für strategische KI-Governance, Risikomanagement und nachhaltiges Wachstum. Eine systematische Dokumentationsstrategie schafft nicht nur rechtliche Sicherheit, sondern auch organisatorische Transparenz und Vertrauen bei Stakeholdern, Investoren und Kunden.\n\n📋 Strategische Dimensionen der KI-Dokumentation:\n• Rechtssicherheit und Haftungsschutz: Vollständige Dokumentation minimiert regulatorische Risiken und schützt die Geschäftsführung vor persönlicher Haftung bei KI-bedingten Schäden oder Compliance-Verstößen.\n• Investoren- und Stakeholder-Vertrauen: Transparente Dokumentation demonstriert verantwortliche KI-Governance und stärkt das Vertrauen von Investoren, Partnern und Aufsichtsbehörden.\n• Operative Exzellenz: Strukturierte Dokumentationsprozesse verbessern die KI-Entwicklung, reduzieren Entwicklungszeiten und erhöhen die Qualität der KI-Systeme.\n• Marktdifferenzierung: Unternehmen mit nachweislich ethischer und compliant entwickelter KI können sich als vertrauenswürdige Partner positionieren.\n\n🎯 ADVISORI's strategischer Dokumentationsansatz:\n• Business-integrierte Compliance: Wir entwickeln Dokumentationssysteme, die nahtlos in Ihre bestehenden Geschäftsprozesse integriert sind und operative Effizienz steigern statt behindern.\n• Automatisierte Dokumentationsworkflows: Implementierung intelligenter Systeme, die Dokumentation automatisch generieren und aktuell halten, wodurch der administrative Aufwand minimiert wird.\n• C-Level Dashboard und Reporting: Bereitstellung executive-tauglicher Übersichten über Compliance-Status, Risikobewertungen und Dokumentationsqualität für informierte strategische Entscheidungen.\n• Continuous Compliance Framework: Etablierung eines Systems der kontinuierlichen Compliance-Überwachung, das proaktiv auf Änderungen in der Regulierung reagiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI von Investitionen in EU AI Act konforme Dokumentationssysteme und welche direkten Auswirkungen hat dies auf operative Kosten und Marktchancen?",
        answer: "Die Investition in EU AI Act konforme Dokumentationssysteme generiert messbaren Return on Investment durch Risikoreduktion, operative Effizienzsteigerungen und neue Marktchancen. ADVISORI entwickelt mit Ihnen quantifizierbare Metriken, die den business case für umfassende KI-Dokumentation klar demonstrieren und die Auswirkungen auf EBITDA und Unternehmenswert aufzeigen.\n\n💰 Direkte Kosteneinsparungen und Effizienzgewinne:\n• Vermeidung von Bußgeldern: EU AI Act Verstöße können Bußgelder bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes zur Folge haben – eine umfassende Dokumentation minimiert dieses Risiko erheblich.\n• Reduzierte Audit- und Compliance-Kosten: Systematische Dokumentation verkürzt Audit-Zeiten um bis zu 60% und reduziert externe Beratungskosten für Ad-hoc-Compliance-Maßnahmen.\n• Beschleunigte Produktentwicklung: Standardisierte Dokumentationsprozesse reduzieren time-to-market für KI-Produkte durch klarere Entwicklungsrichtlinien und weniger Iterationen.\n• Optimierte Ressourcenallokation: Transparente Dokumentation ermöglicht bessere Entscheidungen über KI-Investitionen und Ressourcenverteilung.\n\n📈 Neue Marktchancen und Wettbewerbsvorteile:\n• Premium-Positionierung: Nachweislich compliant entwickelte KI-Systeme ermöglichen premium pricing gegenüber weniger dokumentierten Konkurrenzprodukten.\n• Erschließung regulierter Märkte: Vollständige EU AI Act Compliance öffnet Türen zu stark regulierten Branchen wie Gesundheitswesen, Finanzdienstleistungen und öffentlicher Sektor.\n• Partnerschafts- und M&A-Vorteile: Gut dokumentierte KI-Portfolios steigern den Unternehmenswert bei Akquisitionen und erleichtern strategische Partnerschaften.\n• Versicherungsvorteile: Nachweisliche Dokumentationsqualität kann zu reduzierten Prämien bei Cyber- und Produkthaftungsversicherungen führen.\n\n🔍 ADVISORI's ROI-Messframework:\n• Quantitative Risikobewertung: Entwicklung spezifischer Metriken zur Messung von Compliance-Risiken und deren finanziellen Auswirkungen.\n• Kostenanalyse-Tools: Implementierung von Systemen zur kontinuierlichen Überwachung von Dokumentationskosten vs. eingesparten Compliance-Aufwänden.\n• Marktchancen-Assessment: Systematische Bewertung neuer Geschäftsmöglichkeiten, die durch überlegene Dokumentationsqualität entstehen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die EU AI Act Dokumentationsanforderungen sind komplex und vielschichtig – von technischer Dokumentation bis hin zu Konformitätsbewertungen. Wie stellt ADVISORI sicher, dass alle kritischen Dokumentationsaspekte systematisch erfasst und lückenlos verwaltet werden?",
        answer: "Die Komplexität der EU AI Act Dokumentationsanforderungen erfordert einen systematischen und ganzheitlichen Ansatz, der technische Präzision mit strategischer Weitsicht verbindet. ADVISORI hat ein integriertes Dokumentationsframework entwickelt, das alle kritischen Aspekte der Verordnung abdeckt und gleichzeitig praktikabel und effizient in der Umsetzung ist.\n\n📑 Umfassende Dokumentationsarchitektur:\n• Technische Dokumentation (Artikel 11): Detaillierte Systembeschreibungen, Algorithmus-Dokumentation, Trainingsdaten-Spezifikationen und Leistungsmetriken nach EU AI Act Standards.\n• Risikomanagementsystem-Dokumentation: Vollständige Erfassung von Risikobewertungen, Mitigation-Strategien und kontinuierlichen Überwachungsmaßnahmen für alle KI-Systemrisiken.\n• Qualitätsmanagementsystem: Dokumentation von QMS-Prozessen, Verantwortlichkeiten, Änderungsmanagement und kontinuierlichen Verbesserungszyklen.\n• Konformitätsbewertung und CE-Kennzeichnung: Systematische Vorbereitung und Dokumentation aller Konformitätsbewertungsverfahren und Zertifizierungsprozesse.\n\n🔧 ADVISORI's integrierter Dokumentationsansatz:\n• Lifecycle-integrierte Dokumentation: Wir integrieren Dokumentationsprozesse direkt in Ihre KI-Entwicklungszyklen (DevOps/MLOps), sodass Dokumentation automatisch mit der Systementwicklung aktualisiert wird.\n• Template-basierte Standardisierung: Entwicklung maßgeschneiderter Dokumentationsvorlagen, die EU AI Act Anforderungen erfüllen und gleichzeitig an Ihre spezifischen Geschäftsprozesse angepasst sind.\n• Automatisierte Compliance-Checks: Implementierung intelligenter Systeme, die kontinuierlich die Vollständigkeit und Aktualität der Dokumentation überwachen und Lücken proaktiv identifizieren.\n• Cross-funktionale Integration: Verbindung von technischer Dokumentation mit Business-, Legal- und Compliance-Anforderungen für eine holistische Sicht auf KI-Governance.\n\n✅ Qualitätssicherung und kontinuierliche Verbesserung:\n• Multi-Level-Reviewprozesse: Etablierung strukturierter Review-Zyklen mit technischen Experten, Legal-Teams und Business-Stakeholdern.\n• Automatisierte Versionskontrolle: Implementierung von Systemen zur automatischen Verfolgung von Dokumentationsänderungen und deren Auswirkungen auf Compliance-Status.\n• Regulatory Update Management: Kontinuierliche Überwachung von EU AI Act Entwicklungen und proaktive Anpassung der Dokumentationssysteme an neue Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI EU AI Act Dokumentation von einer reaktiven Compliance-Übung zu einem proaktiven strategischen Instrument für KI-Innovation und Geschäftswachstum?",
        answer: "Traditionell wird Dokumentation oft als nachgelagerte Compliance-Übung betrachtet, die Innovation verlangsamt. ADVISORI revolutioniert diesen Ansatz, indem wir Dokumentation als strategisches Instrument für beschleunigte Innovation, Qualitätssteigerung und nachhaltiges Geschäftswachstum positionieren. Für die C-Suite bedeutet dies, dass Compliance-Investitionen direkt zu besseren KI-Produkten und stärkerer Marktposition führen.\n\n🚀 Von Compliance zu strategischem Enablement:\n• Innovation-beschleunigende Dokumentation: Strukturierte Dokumentationsprozesse schaffen Klarheit über KI-Capabilities, Limitationen und Verbesserungsmöglichkeiten, was gezielte Innovation fördert.\n• Qualitäts-getriebene Entwicklung: Umfassende Dokumentationsanforderungen zwingen Teams zu tieferem Verständnis ihrer KI-Systeme, was zu robusteren und leistungsfähigeren Lösungen führt.\n• Wissensmanagement und -transfer: Systematische Dokumentation schafft organisatorisches Wissen, das Innovation beschleunigt und Abhängigkeiten von Einzelpersonen reduziert.\n• Marktdifferenzierung durch Transparenz: Vollständige Dokumentation ermöglicht überzeugende Kommunikation von KI-Capabilities und Vertrauenswürdigkeit an Kunden und Partner.\n\n💡 ADVISORI's strategischer Dokumentations-Transformationsansatz:\n• Design for Documentation: Integration von Dokumentationsanforderungen bereits in die frühen Phasen der KI-Systementwicklung, wodurch bessere Architekturentscheidungen getroffen werden.\n• Living Documentation: Entwicklung dynamischer Dokumentationssysteme, die automatisch aktualisiert werden und als aktuelle Referenz für Entwicklungsteams dienen.\n• Business Intelligence Integration: Verknüpfung von Dokumentationsdaten mit Business-Metriken, um Zusammenhänge zwischen Dokumentationsqualität und Geschäftserfolg aufzuzeigen.\n• Stakeholder-zentrierte Dokumentation: Erstellung verschiedener Dokumentationsebenen für unterschiedliche Stakeholder (technische Teams, Management, Regulatoren, Kunden).\n\n🎯 Konkrete Geschäftsvorteile:\n• Verkürzte Entwicklungszyklen: Klare Dokumentationsstandards reduzieren Missverständnisse und Rework in Entwicklungsteams.\n• Verbesserte KI-Performance: Systematische Dokumentation von Experimenten und Ergebnissen führt zu datengetriebeneren Optimierungsentscheidungen.\n• Erhöhte Kundenzufriedenheit: Transparente Dokumentation ermöglicht bessere Kundenkommunikation und realistic expectation setting.\n• Strategische Partnerschaften: Nachweislich gut dokumentierte KI-Systeme erleichtern technische Due Diligence bei Kooperationen und Akquisitionen."
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
