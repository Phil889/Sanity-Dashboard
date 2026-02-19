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
    console.log('Updating EBA page with C-Level FAQs batch 1...')
    
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
        _key: generateKey('faq', 1),
        question: "Welche strategischen Implikationen haben die EBA-Regularien für Finanzinstitute und wie unterstützt ADVISORI bei deren effizienten Integration in die Unternehmensstrategie?",
        answer: "Für die C-Suite sind EBA-Regularien weit mehr als nur Compliance-Anforderungen; sie bilden einen integralen Bestandteil der strategischen Unternehmensführung und können bei richtiger Implementierung zu erheblichen Wettbewerbsvorteilen führen. Die European Banking Authority gestaltet maßgeblich die regulatorische Landschaft im europäischen Finanzsektor und erfordert einen ganzheitlichen Ansatz, der über reine Pflichterfüllung hinausgeht.\n\n🔍 Strategische Dimensionen der EBA-Compliance:\n• Kapitalallokation und Geschäftsmodell-Optimierung: EBA-Regularien beeinflussen direkt, wie Kapital eingesetzt werden kann und welche Geschäftsfelder profitabel bleiben. Eine strategische Analyse dieser Auswirkungen ermöglicht die frühzeitige Anpassung von Geschäftsmodellen und Investitionsentscheidungen.\n• Risikomanagement als Wertschöpfungsfaktor: Regulatorische Anforderungen an das Risikomanagement können genutzt werden, um Risikokosten zu senken und Kapitaleffizienz zu steigern, was direkt die Profitabilität verbessert.\n• Datenmanagement und digitale Transformation: Die umfangreichen Datenerfordernisse der EBA-Regularien bieten die Chance, Datenarchitekturen zu modernisieren und Daten als strategischen Asset zu nutzen.\n• Reputationsmanagement und Stakeholder-Vertrauen: Die nachweisliche Einhaltung regulatorischer Standards stärkt das Vertrauen von Investoren, Kunden und Aufsichtsbehörden und schafft strategische Stabilität.\n\n💡 ADVISORI's strategischer Compliance-Ansatz:\n• Regulatorische Frühwarnsysteme: Wir etablieren Monitoring-Prozesse, die regulatorische Entwicklungen frühzeitig identifizieren und deren strategische Implikationen analysieren, bevor sie verbindlich werden.\n• Business Impact Assessment: Unsere Methodik quantifiziert die Auswirkungen regulatorischer Anforderungen auf Ihr Geschäftsmodell, Ihre Profitabilität und Kapitalstruktur und identifiziert Optimierungspotenziale.\n• Strategic Compliance Roadmap: Wir entwickeln eine mehrjährige Compliance-Strategie, die regulatorische Anforderungen mit Ihren Geschäftszielen in Einklang bringt und Synergien zwischen verschiedenen Regulierungsinitiativen schafft.\n• Technologie- und Datenintegration: Wir konzipieren zukunftssichere Compliance-Architekturen, die regulatorische Anforderungen mit Ihren digitalen Transformationsinitiativen verbinden und Datensilos auflösen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können Finanzinstitute die Compliance-Kosten für EBA-Regularien optimieren und gleichzeitig Wettbewerbsvorteile aus der Regulierung gewinnen?",
        answer: "Die steigenden Kosten für regulatorische Compliance stellen für viele Finanzinstitute eine erhebliche Belastung dar. Die Erfüllung der EBA-Anforderungen wird jedoch oft isoliert betrachtet, statt als integraler Bestandteil der Unternehmensstrategie. Der richtige Ansatz transformiert Compliance-Ausgaben von einem reinen Kostenfaktor zu einer strategischen Investition mit messbarem ROI.\n\n💰 Strategien zur Kostenoptimierung und Wertschöpfung:\n• Prozessautomatisierung und Digitalisierung: Manuelle Compliance-Prozesse sind nicht nur fehleranfällig, sondern auch kostenintensiv. Die Automatisierung regulatorischer Workflows und Berichtsprozesse kann die operativen Kosten um 30-50% senken und gleichzeitig die Datenqualität verbessern.\n• Integrierte Compliance-Plattformen: Die Konsolidierung fragmentierter Compliance-Systeme zu einer einheitlichen Plattform reduziert Redundanzen, senkt IT-Betriebskosten und verbessert die Datenintegrität über alle regulatorischen Bereiche hinweg.\n• Shared Services und Ressourcen-Pooling: Die Bündelung von Compliance-Ressourcen in spezialisierten Kompetenzzentren erhöht die Effizienz und Qualität der regulatorischen Arbeit und optimiert gleichzeitig den Personaleinsatz.\n• Risikosensitive Ressourcenallokation: Die datengestützte Priorisierung von Compliance-Aktivitäten basierend auf tatsächlichen Risiken stellt sicher, dass Ressourcen dort eingesetzt werden, wo sie den größten Nutzen stiften.\n\n🚀 Transformation von Compliance zu strategischem Wettbewerbsvorteil:\n• Datenbasierte Geschäftsentscheidungen: Die für regulatorische Zwecke erhobenen Daten können als wertvolle Informationsquelle für strategische Entscheidungen dienen und neue Einblicke in Risikoprofile, Kundenverhalten und Geschäftschancen liefern.\n• Beschleunigte Innovationsfähigkeit: Eine robuste Compliance-Infrastruktur ermöglicht es, neue Produkte und Dienstleistungen schneller und sicherer auf den Markt zu bringen, da regulatorische Anforderungen bereits im Entwicklungsprozess berücksichtigt werden.\n• Vertrauensgewinn bei Kunden und Partnern: Nachgewiesene regulatorische Exzellenz stärkt das Vertrauen von Kunden, Geschäftspartnern und Investoren und kann als Differenzierungsmerkmal im Markt positioniert werden.\n• Strategische Agilität: Eine effiziente Compliance-Infrastruktur erhöht die organisatorische Anpassungsfähigkeit und ermöglicht es, schneller auf regulatorische Veränderungen und neue Marktchancen zu reagieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Risiken bestehen für die C-Suite bei mangelhafter EBA-Compliance und wie kann ADVISORI bei deren effektiver Minimierung unterstützen?",
        answer: "Für die Führungsebene von Finanzinstituten stellt mangelhafte EBA-Compliance ein vielschichtiges Risikocluster dar, das weit über regulatorische Sanktionen hinausgeht und existenzielle Bedrohungen für das Unternehmen und persönliche Haftungsrisiken für Führungskräfte mit sich bringen kann. In der zunehmend komplexen regulatorischen Landschaft ist ein proaktives und strategisches Risikomanagement unerlässlich.\n\n⚠️ Mehrdimensionale Risikoprofile bei EBA-Compliance-Defiziten:\n• Direkte finanzielle Konsequenzen: Aufsichtsrechtliche Maßnahmen können Bußgelder in signifikanter Höhe, Beschränkungen der Geschäftstätigkeit und erhöhte Kapitalanforderungen umfassen, die direkte Auswirkungen auf die Profitabilität und Kapitalplanung haben.\n• Persönliche Haftung der Führungsebene: Die zunehmende regulatorische Fokussierung auf individuelle Verantwortlichkeit (z.B. über SREP-Prozesse) kann zu persönlichen Sanktionen, Berufsverboten und strafrechtlichen Konsequenzen für Mitglieder der Geschäftsleitung und Aufsichtsorgane führen.\n• Reputationsschäden und Marktvertrauen: Compliance-Verstöße werden zunehmend öffentlich und können zu nachhaltigen Vertrauensverlusten bei Kunden, Investoren und Geschäftspartnern führen, was langfristige Auswirkungen auf Marktstellung und Finanzierungskosten hat.\n• Strategische Handlungsbeschränkungen: Aufsichtliche Interventionen können die strategische Agilität einschränken, Expansionsvorhaben verzögern und die Wettbewerbsfähigkeit nachhaltig beeinträchtigen.\n\n🛡️ ADVISORI's mehrstufiger Ansatz zur Risikominimierung:\n• Executive Risk Assessment: Wir entwickeln spezifische Risikoprofile für Führungskräfte und identifizieren potenzielle persönliche Haftungsrisiken in Bezug auf EBA-Regularien, um gezielte Schutzmaßnahmen zu implementieren.\n• Governance-Optimierung: Wir etablieren robuste Governance-Strukturen mit klaren Verantwortlichkeiten, dokumentierten Entscheidungsprozessen und wirksamen Kontrollmechanismen, die auch bei aufsichtlichen Prüfungen standhalten.\n• Early Warning System: Unsere proaktiven Monitoring-Mechanismen identifizieren Compliance-Risiken frühzeitig und ermöglichen zeitnahe Korrekturmaßnahmen, bevor regulatorische Eskalationen entstehen.\n• Dokumentierte Sorgfaltspflicht: Wir implementieren umfassende Dokumentationsprozesse, die die angemessene Sorgfalt der Führungsebene nachweisen und im Falle aufsichtlicher Untersuchungen als Evidenz dienen können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute den SREP-Prozess (Supervisory Review and Evaluation Process) der EBA nutzen, um ihre Kapitalplanung und Geschäftsstrategie zu optimieren?",
        answer: "Der Supervisory Review and Evaluation Process (SREP) der EBA wird von vielen Finanzinstituten primär als regulatorische Belastung wahrgenommen. Tatsächlich bietet er jedoch eine wertvolle Gelegenheit, strategische Erkenntnisse zu gewinnen und die eigene Kapitalplanung, Risikomanagement-Praktiken und Geschäftsstrategie zu optimieren. Eine proaktive Herangehensweise kann den SREP von einem reinen Compliance-Prozess zu einem strategischen Instrument transformieren.\n\n📊 Strategische Nutzung des SREP-Prozesses:\n• Kapitaleffizienz und -allokation: Die detaillierten SREP-Bewertungen liefern wertvolle Einblicke in die Kapitaladäquanz verschiedener Geschäftsbereiche und ermöglichen eine präzisere Kapitalallokation basierend auf regulatorischen Erwartungen und Risiko-Rendite-Profilen.\n• Frühzeitige Erkennung strategischer Risiken: Der SREP identifiziert oft Risiken, die über das traditionelle Risikomanagement hinausgehen, wie etwa Geschäftsmodellrisiken, strategische Defizite oder Governance-Schwächen, und bietet damit wertvolle strategische Impulse.\n• Benchmarking und Marktpositionierung: SREP-Ergebnisse ermöglichen ein qualifiziertes Benchmarking mit Wettbewerbern und können zur Identifikation kompetitiver Vorteile oder Nachholbedarfe genutzt werden.\n• Regulatorische Voraussicht: Der Dialog mit der Aufsicht im SREP-Prozess liefert Einblicke in zukünftige regulatorische Entwicklungen und ermöglicht proaktive strategische Anpassungen.\n\n🔄 ADVISORI's ganzheitlicher SREP-Optimierungsansatz:\n• Proaktive SREP-Vorbereitung: Wir unterstützen Sie bei der Entwicklung einer strukturierten Vorbereitung auf den SREP-Prozess, die weit über die Bereitstellung der geforderten Dokumentation hinausgeht und einen strategischen Dialog mit der Aufsicht fördert.\n• Strategisches Capital Planning: Basierend auf SREP-Erkenntnissen entwickeln wir ein zukunftsorientiertes Kapitalplanungsmodell, das regulatorische Anforderungen, Geschäftsstrategie und Marktentwicklungen integriert.\n• Holistisches SREP-Impact-Assessment: Wir analysieren die Auswirkungen von SREP-Ergebnissen auf Ihre gesamte Organisation – von Governance-Strukturen über Risikomanagement bis hin zu operativen Prozessen – und entwickeln integrierte Optimierungsstrategien.\n• SREP-basierte Transformationsagenda: Wir transformieren SREP-Erkenntnisse in eine konkrete strategische Agenda, die sowohl regulatorische Anforderungen erfüllt als auch Ihre Wettbewerbsposition stärkt."
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
    console.log('✅ C-Level FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
