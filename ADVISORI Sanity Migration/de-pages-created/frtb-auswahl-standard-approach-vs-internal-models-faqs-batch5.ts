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
    console.log('Updating FRTB Auswahl Standard Approach vs. Internal Models page with FAQs batch 5...')
    
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
        question: "Wie unterscheiden sich die FRTB-Implementierungsherausforderungen für verschiedene Institutsgrößen und welche spezifischen Strategien empfiehlt ADVISORI für mittlere und kleinere Institute?",
        answer: "Die Implementierungsherausforderungen von FRTB variieren signifikant je nach Institutsgröße, Komplexität des Handelsbuchs und verfügbaren Ressourcen. Während große globale Banken mit umfangreichen Ressourcen kämpfen, stehen mittlere und kleinere Institute vor spezifischen Herausforderungen, die maßgeschneiderte Strategien erfordern, um Compliance kostengünstig zu erreichen und gleichzeitig Wettbewerbsfähigkeit zu wahren.\n\n📊 Größenspezifische Implementierungsherausforderungen:\n• Ressourcen und Expertise: Kleinere und mittlere Institute verfügen typischerweise über limitierte Ressourcen und spezialisierte FRTB-Expertise, was die Entwicklung und Implementierung komplexer Methoden wie des Internal Models Approach erschwert.\n• Datenmanagement-Kapazitäten: Die umfangreichen Datenanforderungen von FRTB stellen besonders für Institute mit weniger entwickelten Datenmanagement-Frameworks eine signifikante Herausforderung dar.\n• Proportionalitätsbetrachtungen: Regulatorische Proportionalitätsprinzipien können für kleinere Institute Erleichterungen bieten, jedoch ist die konkrete Anwendung oft unklar und variiert zwischen verschiedenen Jurisdiktionen.\n• Kosten-Nutzen-Relation: Für Institute mit kleineren Handelsbüchern kann die Kosten-Nutzen-Relation einer vollständigen IMA-Implementation ungünstig sein, was strategische Entscheidungen für kosteneffizientere Ansätze erforderlich macht.\n\n🛠️ ADVISORI's spezialisierte Strategien für mittlere und kleinere Institute:\n• Standardansatz-Optimierung: Wir haben spezialisierte Optimierungsmethoden für den FRTB-Standardansatz entwickelt, die besonders für mittlere und kleinere Institute mit beschränkten Ressourcen signifikante Kapitalentlastungen ermöglichen können.\n• Selektiver IMA-Einsatz: Entwicklung maßgeschneiderter Strategien für den selektiven Einsatz des IMA nur für die kapitalintensivsten und strategisch wichtigsten Trading Desks, während der Standardansatz für weniger kritische Bereiche verwendet wird.\n• Compliance-as-a-Service-Lösungen: Wir bieten spezialisierte Compliance-as-a-Service-Lösungen, die kleineren Instituten Zugang zu fortschrittlichen FRTB-Kapazitäten ohne massive Eigeninvestitionen ermöglichen.\n• Kooperationsmodelle: Unterstützung bei der Entwicklung von Kooperationsmodellen zwischen kleineren Instituten zur Teilung von Implementierungskosten, gemeinsamen Nutzung von Datenressourcen und Bündelung von Expertise."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Metriken und KPIs sollten für die kontinuierliche Überwachung und Optimierung der FRTB-Implementierung eingesetzt werden?",
        answer: "Ein robustes Monitoring- und Optimierungs-Framework mit klar definierten Metriken und KPIs ist entscheidend für den nachhaltigen Erfolg Ihrer FRTB-Implementierung. Die kontinuierliche Überwachung ermöglicht nicht nur die Sicherstellung regulatorischer Compliance, sondern auch die fortlaufende Optimierung der Kapitaleffizienz und operativen Performance.\n\n📈 Essentielle Metriken und KPIs für FRTB-Monitoring:\n• Kapitaleffizienz-Metriken: Systematische Überwachung der FRTB-Kapitalanforderungen auf verschiedenen Ebenen (Gesamtbank, Trading Desk, einzelne Portfolios) mit Vergleich zu Benchmarks und historischen Trends ermöglicht die Identifikation von Optimierungspotenzialen.\n• Modellperformance-Indikatoren: Für Institute mit IMA sind Frühwarnindikatoren für potenzielle Modellprobleme kritisch – darunter P&L Attribution Test-Ergebnisse, Backtesting-Exceptions und die Evolution von Non-Modellable Risk Factors.\n• Operationale Effizienz-KPIs: Überwachung von Berechnungszeiten, Systemauslastung, Datenqualitätsmetriken und Prozesseffizienz ermöglicht die kontinuierliche Optimierung der FRTB-Infrastruktur und -Prozesse.\n• Compliance-Sicherheit-Indikatoren: Monitoring der Einhaltung interner Limits, regulatorischer Schwellenwerte und Governance-Anforderungen stellt die fortlaufende Compliance sicher und minimiert regulatorische Risiken.\n\n🔄 ADVISORI's Framework für kontinuierliche FRTB-Optimierung:\n• Multi-Layer-Monitoring-Ansatz: Wir implementieren ein mehrstufiges Monitoring-Framework, das strategische, taktische und operative KPIs kombiniert und eine granulare Steuerung der FRTB-Performance ermöglicht.\n• Predictive Analytics für Kapitaloptimierung: Unsere fortschrittlichen Analysemodelle identifizieren proaktiv Optimierungspotenziale durch die Analyse von Mustern und Trends in FRTB-Kapitalanforderungen und deren Treibern.\n• Integrated Dashboard-Lösungen: Wir entwickeln maßgeschneiderte Management-Dashboards, die eine intuitive Visualisierung kritischer FRTB-KPIs ermöglichen und datengetriebene Entscheidungsfindung auf allen Ebenen unterstützen.\n• Benchmarking und Best-Practice-Sharing: Unser kontinuierliches Benchmarking ermöglicht den Vergleich Ihrer FRTB-Performance mit Peers und Best Practices und identifiziert konkrete Verbesserungspotenziale."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie integriert sich FRTB in die breitere regulatorische Landschaft und welche Synergien bestehen mit anderen regulatorischen Initiativen wie Basel IV und BCBS 239?",
        answer: "FRTB existiert nicht isoliert, sondern ist Teil einer umfassenderen regulatorischen Landschaft mit zahlreichen Interdependenzen und potenziellen Synergien. Ein integrierter Ansatz, der FRTB im Kontext anderer regulatorischer Initiativen betrachtet, ermöglicht die Nutzung von Synergien, die Vermeidung von Doppelarbeit und die Entwicklung einer kohärenten regulatorischen Strategie.\n\n🔄 Regulatorische Interdependenzen und Synergien:\n• FRTB und Basel IV (finalisiertes Basel III): FRTB ist integraler Bestandteil des finalisierten Basel III-Frameworks (oft als Basel IV bezeichnet) und teilt fundamentale Prinzipien mit anderen Komponenten wie den revidierten Kreditrisikoansätzen und dem Output Floor – eine integrierte Betrachtung ermöglicht die strategische Optimierung der Gesamtkapitalposition.\n• FRTB und BCBS 239: Die strengen Datenanforderungen von FRTB überschneiden sich signifikant mit den BCBS 239-Prinzipien für effektive Risikodatenaggregation und -berichterstattung – Investitionen in robuste Datenarchitekturen können beiden regulatorischen Anforderungen dienen.\n• FRTB und IBOR-Transition: Die Umstellung von LIBOR auf alternative Referenzzinssätze hat tiefgreifende Auswirkungen auf FRTB-Modelle und -Prozesse, insbesondere im Bereich der Risikofaktor-Modellierbarkeit und historischen Zeitreihen.\n• FRTB und klimabezogene Finanzvorschriften: Emerging regulatory requirements für klimabezogene Risiken und nachhaltige Finanzierung werden zunehmend mit Marktrisiko-Frameworks wie FRTB interagieren und neue Anforderungen an Risikomanagement-Kapazitäten stellen.\n\n🛠️ ADVISORI's integrierter regulatorischer Ansatz:\n• Regulatory Radar und Impact Assessment: Wir bieten ein umfassendes Monitoring der regulatorischen Landschaft mit detaillierten Impact Assessments der Wechselwirkungen verschiedener Regulierungen auf Ihr spezifisches Geschäftsmodell.\n• Synergistic Implementation Planning: Unsere integrierten Implementierungspläne identifizieren und nutzen systematisch Synergien zwischen verschiedenen regulatorischen Initiativen, um Implementierungskosten zu reduzieren und Effizienz zu maximieren.\n• Shared Services und Capabilities: Wir unterstützen die Entwicklung gemeinsam nutzbarer regulatorischer Kapazitäten und Services, die multiple Compliance-Anforderungen adressieren und Doppelarbeit vermeiden.\n• Integriertes Regulatory Reporting: Unser Ansatz zur Integration regulatorischer Reporting-Frameworks harmonisiert Datenquellen, Definitionen und Berechnungsmethoden über verschiedene regulatorische Anforderungen hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche langfristigen strategischen Vorteile können Finanzinstitute aus einer erfolgreichen FRTB-Transformation ziehen und wie unterstützt ADVISORI bei der Realisierung dieser Vorteile?",
        answer: "Eine erfolgreiche FRTB-Transformation bietet weit mehr als nur regulatorische Compliance – sie kann als strategischer Katalysator für fundamentale Verbesserungen in Risikomanagement-Kapazitäten, Dateninfrastruktur und Business Intelligence dienen. Institute, die FRTB als strategische Chance begreifen, können signifikante langfristige Wettbewerbsvorteile realisieren.\n\n🚀 Strategische Transformationsvorteile jenseits der Compliance:\n• Vertiefte Risikoeinblicke und Business Intelligence: Die granularen Risikodaten und fortschrittlichen Analysefähigkeiten, die für FRTB entwickelt werden, können transformative Einblicke in Portfolioperformance, Kundenrentabilität und Markttrends liefern und so strategische Entscheidungsfindung auf allen Ebenen stärken.\n• Technologische Modernisierung: Die technologischen Anforderungen von FRTB katalysieren oft eine fundamentale Modernisierung veralteter Risikotechnologie-Stacks, mit weitreichenden Vorteilen für Agilität, Kosteneffizienz und Innovationsfähigkeit über FRTB hinaus.\n• Enhanced Risk-Adjusted Performance Management: Die Integration von FRTB-Metriken in Performance-Management-Frameworks ermöglicht eine präzisere risikoadjustierte Performancemessung und strategische Ressourcenallokation auf Basis granularer Risiko-Rendite-Betrachtungen.\n• Kulturelle Evolution und Talent-Entwicklung: Die FRTB-Transformation fördert eine fortschrittlichere Risikokultur und entwickelt kritische Kompetenzen in Bereichen wie quantitative Analyse, Data Science und regulatorisches Management, die langfristige strategische Assets darstellen.\n\n🌟 ADVISORI's Ansatz zur Realisierung strategischer Transformationsvorteile:\n• Value-Beyond-Compliance-Assessment: Wir führen spezialisierte Assessments durch, die systematisch strategische Nutzenpotenziale Ihrer FRTB-Investitionen identifizieren – von Datenmonetarisierung über Prozesseffizienz bis hin zu verbesserter Kundenberatung.\n• Strategic Capability Building: Wir unterstützen Sie bei der Entwicklung kritischer strategischer Capabilities, die über die reine FRTB-Compliance hinausgehen – darunter Real-time Risk Analytics, Advanced Stress Testing und Integrated Business Planning.\n• Innovation Acceleration: Unsere Innovation Labs entwickeln und pilotieren fortschrittliche Anwendungsfälle für FRTB-Kapazitäten, von KI-gestützter Handelsoptimierung bis zu proaktivem Limit Management und dynamischer Risikokommunikation.\n• Leadership Enablement: Wir begleiten Ihre Führungskräfte dabei, die durch FRTB geschaffenen strategischen Möglichkeiten vollständig zu verstehen und zu nutzen, und entwickeln konkrete Roadmaps für die Realisierung des vollen strategischen Potenzials Ihrer FRTB-Transformation."
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
    console.log('✅ FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
