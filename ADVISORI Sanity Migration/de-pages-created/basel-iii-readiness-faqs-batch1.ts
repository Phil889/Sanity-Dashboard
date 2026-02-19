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
    console.log('Updating Basel III Readiness page with FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-readiness" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine frühzeitige Basel III-Readiness-Bewertung für unsere Bank strategisch wertvoll und wie unterscheidet sich der ADVISORI-Ansatz von standardisierten Gap-Analysen?",
        answer: "Eine Basel III-Readiness-Bewertung ist weit mehr als eine regulatorische Pflichtübung – sie ist ein strategisches Instrument, das tiefgreifende Einblicke in Ihre Geschäftsmodellrobustheit, Kapitaleffizienz und Wettbewerbsfähigkeit liefert. Für die C-Suite bietet sie die Möglichkeit, regulatorische Anforderungen in strategische Vorteile umzuwandeln und frühzeitig Weichenstellungen vorzunehmen.\n\n🔍 Strategischer Mehrwert einer frühzeitigen Readiness-Bewertung:\n• Wettbewerbsvorteil durch frühe Weichenstellung: Frühzeitige Erkennung struktureller Anpassungsbedarfe ermöglicht die Integration in strategische Transformationsinitiativen statt isolierter Compliance-Projekte.\n• Priorisierung kapitalschonender Geschäftsfelder: Identifikation von Geschäftsbereichen mit überproportionalem Kapitalverbrauch unter Basel III erlaubt strategische Portfolioanpassungen vor der Vollumsetzung.\n• Opportunitätskosten-Vermeidung: Frühzeitige Erkennung ineffizienter Strukturen verhindert die Bindung von Kapital und Ressourcen in später suboptimalen Geschäftsmodellen.\n• Strategische Budgetallokation: Entwicklung einer priorisierten Investitionsroadmap, die regulatorische Anforderungen mit strategischen Initiativen verbindet und Doppelarbeit vermeidet.\n\n💡 Der ADVISORI-Differenzierungsansatz:\n• Business-Impact-zentrierte Analyse: Wir fokussieren nicht nur auf technische Compliance-Lücken, sondern quantifizieren konkrete Auswirkungen auf Ihre Geschäftsstrategie, Profitabilität und Wettbewerbsposition.\n• Szenariobasierte Modellierung: Entwicklung verschiedener Implementierungsszenarien mit detaillierter Kosten-Nutzen-Analyse und Quantifizierung der RoI für jede Option.\n• Strategische Chancenidentifikation: Systematische Identifikation von Bereichen, in denen regulatorische Anpassungen gleichzeitig als Katalysator für Effizienzsteigerungen und Innovationen dienen können.\n• Integrierter Transformationsansatz: Verbindung der Basel III-Implementierung mit anderen strategischen Initiativen wie Digitalisierung, Prozessoptimierung und Datenmanagement für maximale Synergienutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche spezifischen Vorteile bietet eine umfassende Basel III-Readiness-Bewertung im Vergleich zu einer reinen Compliance-Checkliste und wie wirkt sich dies auf unsere Kapitaleffizienz aus?",
        answer: "Die Unterschiede zwischen einer umfassenden Readiness-Bewertung und einer standardisierten Compliance-Checkliste sind fundamental und haben weitreichende Auswirkungen auf Ihre Kapitaleffizienz, Wettbewerbsfähigkeit und Rentabilität. Eine strategische Readiness-Bewertung betrachtet Basel III nicht isoliert, sondern als integralen Bestandteil Ihrer Geschäftsstrategie und Wertschöpfung.\n\n🚀 Mehrwertdimensionen einer strategischen Readiness-Bewertung:\n• Kapitaloptimierung statt Kapitalbindung: Eine umfassende Bewertung identifiziert nicht nur Kapitalbedarfe, sondern entwickelt konkrete Strategien zur Optimierung der Kapitalallokation und RWA-Reduzierung, was direkt die Eigenkapitalrendite steigert.\n• Geschäftsmodell-Integration: Die Bewertung analysiert, wie Basel III-Anforderungen in Ihre Produktgestaltung, Preismodelle und Kundenstrategien integriert werden können, um Wettbewerbsvorteile zu generieren.\n• Zukunftssichere Architektur: Entwicklung einer flexiblen Compliance-Architektur, die nicht nur aktuelle, sondern auch zukünftige regulatorische Anforderungen effizient adressieren kann.\n• Datenstrategische Perspektive: Identifikation von Datenmanagement-Verbesserungen, die sowohl regulatorische Anforderungen erfüllen als auch neue Business-Intelligence-Möglichkeiten erschließen.\n\n💰 Konkrete Kapitaleffizienzvorteile:\n• Präzise RWA-Optimierung: Identifikation spezifischer Hebel zur Risikominderung und effizienteren Kapitalunterlegung, die eine signifikante RWA-Reduktion ohne Geschäftsvolumenrückgang ermöglichen.\n• Portfolioumschichtungspotenziale: Detaillierte Analyse der Kapitalrentabilität verschiedener Geschäftsfelder unter Basel III, um strategische Make-or-Buy-Entscheidungen zu unterstützen.\n• Collateral-Management-Optimierung: Entwicklung fortschrittlicher Strategien zur Sicherheitenverwaltung und -optimierung, die sowohl regulatorische Anforderungen erfüllen als auch Kapitalkosten senken.\n• Treasury-Transformation: Identifikation von Optimierungspotentialen im Liquiditäts- und Refinanzierungsmanagement, die sowohl NSFR- und LCR-Compliance sicherstellen als auch Finanzierungskosten reduzieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann unsere Bank die Basel III-Readiness-Bewertung nutzen, um gleichzeitig unsere digitale Transformation voranzutreiben und welche Synergien ergeben sich?",
        answer: "Eine strategisch durchgeführte Basel III-Readiness-Bewertung bietet außergewöhnliche Möglichkeiten, regulatorische Compliance und digitale Transformation als komplementäre statt konkurrierende Initiativen zu gestalten. Die dabei identifizierten Anforderungen können als Katalysator für eine umfassendere Modernisierung Ihrer Bank wirken und erhebliche Synergien freisetzen.\n\n🔄 Synergiepotenziale zwischen Basel III-Readiness und digitaler Transformation:\n• Dateninfrastruktur-Modernisierung: Die für Basel III erforderliche Datenaggregation, -qualität und -governance bildet das Fundament für fortschrittliche Analytics, KI-Anwendungen und personalisierte Kundenerlebnisse.\n• Prozessautomatisierung als Doppelgewinn: Die Automatisierung regulatorischer Prozesse kann als Blueprint für die breitere Geschäftsprozessautomatisierung dienen und operative Effizienzsteigerungen über das Regulatory-Team hinaus ermöglichen.\n• API-Ökosystem-Entwicklung: Die für regulatorisches Reporting benötigten Schnittstellen können erweitert werden, um Open Banking-Funktionalitäten und FinTech-Partnerschaften zu unterstützen.\n• Cloud-Adoption-Beschleunigung: Die Modernisierung von Risiko- und Reporting-Systemen kann als Einstiegspunkt für eine breitere Cloud-Strategie dienen, die Agilität und Innovationsfähigkeit steigert.\n\n⚡ ADVISORIs integrierter Transformationsansatz:\n• Gemeinsame Zielarchitektur: Entwicklung einer technischen Zielarchitektur, die sowohl regulatorische Anforderungen erfüllt als auch die digitale Geschäftstransformation unterstützt.\n• Priorisierte Transformations-Roadmap: Identifikation von Initiativen mit dualer Wertschöpfung für Compliance und Digitalisierung, um Investitionsrenditen zu maximieren.\n• Agile Delivery-Methoden: Implementierung agiler Entwicklungs- und Projektmethoden, die sowohl für regulatorische als auch für digitale Transformationsprojekte geeignet sind.\n• Gemeinsames Capability Building: Aufbau von Kompetenzen und Organisationsstrukturen, die sowohl regulatorische als auch digitale Anforderungen effektiv adressieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche konkreten Risiken vermeidet unser Institut durch eine frühzeitige und umfassende Basel III-Readiness-Bewertung?",
        answer: "Eine frühzeitige und umfassende Basel III-Readiness-Bewertung ist ein mächtiges Instrument zur Risikominimierung, das weit über die offensichtlichen regulatorischen Compliance-Risiken hinausgeht. Sie adressiert strategische, finanzielle, operative und reputationsbezogene Risikodimensionen und schafft so einen umfassenden Schutzschild für Ihr Institut.\n\n🛡️ Vermeidbare Risikokategorien durch frühzeitige Readiness-Bewertung:\n• Strategische Fehlinvestitionen: Verhinderung kostspieliger Investitionen in Geschäftsfelder oder Produkte, die unter Basel III kapitalineffizient oder unprofitabel werden könnten.\n• Implementierungskostenexplosion: Vermeidung unkoordinierter Ad-hoc-Maßnahmen und teurer Last-Minute-Implementierungen durch strukturierte, priorisierte Vorgehensweise.\n• Wettbewerbsnachteile: Schutz vor relativen Marktanteilsverlusten durch verspätete Anpassung an Basel III-Anforderungen im Vergleich zu besser vorbereiteten Wettbewerbern.\n• Regulatorische Strafmaßnahmen: Minimierung des Risikos von Auflagen, Beschränkungen oder finanziellen Sanktionen durch frühzeitige Identifikation und Adressierung von Compliance-Lücken.\n\n🔍 Spezifische finanzielle Risikodimensionen:\n• Kapitalzuschläge: Vermeidung zusätzlicher SREP-Kapitalanforderungen durch die Aufsicht aufgrund identifizierter Schwächen in der Basel III-Umsetzung.\n• Refinanzierungskostenerhöhungen: Schutz vor Rating-Herabstufungen und steigenden Funding-Kosten durch nachgewiesene robuste Compliance-Strategien.\n• Opportunitätskosten durch Restriktionen: Vermeidung eingeschränkter Geschäftsmöglichkeiten durch aufsichtsrechtliche Beschränkungen bei unzureichender Basel III-Compliance.\n• Shareholder-Value-Erosion: Schutz vor Aktienkursrückgängen und erhöhtem Shareholder-Druck durch negative Marktwahrnehmung bei Compliance-Problemen.\n\n💼 Operative und Governance-Risiken:\n• Ressourcenengpässe: Vermeidung von personellen und technischen Kapazitätsengpässen durch frühzeitige Planung und priorisierte Ressourcenallokation.\n• Governance-Defizite: Frühzeitige Identifikation und Behebung von Schwachstellen in Kontroll- und Governance-Strukturen, bevor diese zu aufsichtsrechtlichen Beanstandungen führen.\n• Datenqualitätsrisiken: Prävention von Entscheidungsfehlern und Fehlmeldungen durch frühzeitige Adressierung von Datenmängeln und -inkonsistenzen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
