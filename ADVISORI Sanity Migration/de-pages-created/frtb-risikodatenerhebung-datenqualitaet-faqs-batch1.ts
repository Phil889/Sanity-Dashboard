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
    console.log('Updating FRTB Risikodatenerhebung Datenqualität page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-risikodatenerhebung-datenqualitaet' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-risikodatenerhebung-datenqualitaet" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Vorteile bietet ein umfassendes FRTB-Risikodatenmanagement über die reine Compliance hinaus, und wie unterstützt ADVISORI bei der Wertschöpfung?",
        answer: "Ein strategisches FRTB-Risikodatenmanagement geht weit über regulatorische Compliance hinaus und wird zum entscheidenden Wettbewerbsfaktor im modernen Bankgeschäft. Während viele Institute FRTB als reine Compliance-Übung betrachten, erkennen führende Banken die transformative Kraft hochwertiger Risikodaten für strategische Entscheidungen und Geschäftsperformance.\n\n🔍 Strategische Dimensionen des FRTB-Datenmanagements:\n• Kapitaloptimierung durch Präzision: Hochwertige Risikodaten ermöglichen eine genauere Risikoberechnung, was zu optimierten Kapitalanforderungen führen kann – Studien zeigen Potenzial für 15-25% Kapitalersparnis im Vergleich zu suboptimalen Datengrundlagen.\n• Strategisches Risiko-Opportunity-Management: Präzise Risikodaten erlauben eine feinere Kalibrierung des Risikoappetits und die Identifikation profitabler Nischen mit optimalem Risiko-Rendite-Verhältnis.\n• Enterprise Risk Intelligence: Die für FRTB etablierten Datenstrukturen und -prozesse bilden die Grundlage für ein bankweites Risikoinformationssystem, das wertvolle Geschäftseinblicke jenseits regulatorischer Anforderungen liefert.\n• Beschleunigte Entscheidungsfindung: Automatisierte, qualitätsgesicherte Risikodatenprozesse reduzieren die Time-to-Insight dramatisch und ermöglichen schnellere Reaktionen auf Marktveränderungen.\n\n💡 Der ADVISORI-Ansatz für wertschöpfendes FRTB-Datenmanagement:\n• Business-Value-Driven Implementation: Wir priorisieren Datenmanagement-Maßnahmen nicht nur nach regulatorischen Anforderungen, sondern nach ihrem strategischen Wertbeitrag für Ihr spezifisches Geschäftsmodell.\n• Data Governance als strategischer Enabler: Wir etablieren Datenverantwortlichkeiten und -prozesse, die Datenqualität kontinuierlich verbessern und den Wert Ihrer Datenassets steigern.\n• Integrierte Datenarchitektur: Unsere Lösungen vermeiden Compliance-Silos und integrieren FRTB-Datenanforderungen in eine zukunftssichere Enterprise-Datenarchitektur.\n• Advanced Analytics Readiness: Wir gestalten Datenprozesse so, dass sie nicht nur regulatorische Anforderungen erfüllen, sondern auch die Grundlage für fortschrittliche Analytik und datengetriebene Geschäftsmodelle bilden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir die komplexen Datenerhebungsanforderungen für Non-Modellable Risk Factors (NMRFs) unter FRTB effizient bewältigen und optimieren?",
        answer: "Die Datenerhebung für Non-Modellable Risk Factors (NMRFs) stellt eine der größten Herausforderungen bei der FRTB-Implementierung dar. Eine effiziente und strategische Herangehensweise kann nicht nur die Compliance sicherstellen, sondern auch erhebliche Kapitalvorteile durch die Reduzierung von NMRFs erzielen.\n\n📊 Kernherausforderungen bei der NMRF-Datenerhebung:\n• Identifikation relevanter Risikofaktoren: Die präzise Kartierung und Kategorisierung aller im Handelsbuch enthaltenen Risikofaktoren erfordert tiefes Verständnis sowohl der Handelsstrategien als auch der FRTB-Anforderungen.\n• Real Price Observation (RPO) Sammlung: Die Erfassung ausreichender, qualitativ hochwertiger Preisbeobachtungen gemäß regulatorischer Definitionen stellt hohe Anforderungen an Datenmanagementprozesse.\n• Nachweis der Repräsentativität: Die Dokumentation, dass gesammelte Preisdaten tatsächlich die zugrundeliegenden Risikofaktoren repräsentieren, erfordert robuste Validierungsmethoden.\n• Kontinuierliche Überwachung: Die Modellierbarkeit von Risikofaktoren kann sich im Zeitverlauf ändern, was ein kontinuierliches Monitoring und Management erfordert.\n\n🛠️ ADVISORIs umfassender Optimierungsansatz:\n• Strategische Risikofaktor-Taxonomie: Wir entwickeln eine maßgeschneiderte Taxonomie, die regulatorische Anforderungen mit der spezifischen Struktur Ihres Handelsportfolios vereint und Modellierbarkeit maximiert.\n• Multi-Source Data Strategy: Implementation einer diversifizierten Datenbeschaffungsstrategie, die interne Datenquellen, Vendor-Daten und Pooling-Lösungen optimal kombiniert.\n• Advanced Data Processing Pipeline: Etablierung automatisierter Prozesse zur Sammlung, Validierung, Transformation und Speicherung von RPOs mit Audit-Trail und Qualitätskontrollen.\n• Proxying und Interpolationsmethoden: Entwicklung regulatorisch konformer Methoden zur Ableitung von Preisinformationen für schwer beobachtbare Risikofaktoren, um NMRFs zu reduzieren.\n• Dynamisches NMRF-Management: Implementation eines Frühwarnsystems, das potentielle Modellierbarkeitsrisiken identifiziert und proaktive Maßnahmen zur Sicherung ausreichender RPOs ermöglicht."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Schlüsselkomponenten umfasst ein robustes Datenqualitätsframework für FRTB, und wie implementiert ADVISORI dies in bestehende Banksysteme?",
        answer: "Ein robustes Datenqualitätsframework bildet das Fundament für eine erfolgreiche FRTB-Implementierung. Es sichert nicht nur die regulatorische Compliance, sondern ermöglicht auch präzisere Risikoberechnungen und fundierte Geschäftsentscheidungen. Die Integration in bestehende Systemlandschaften erfordert einen durchdachten, praxisorientierten Ansatz.\n\n🏗️ Schlüsselkomponenten eines FRTB-Datenqualitätsframeworks:\n• Umfassende Datendefinition und -klassifikation: Präzise Definition aller für FRTB relevanten Datenelemente mit klaren Eigentümerschaften, Qualitätsanforderungen und Kritikalitätsstufen.\n• Multidimensionale Qualitätsmetriken: Entwicklung granularer Metriken, die alle relevanten Dimensionen der Datenqualität (Vollständigkeit, Genauigkeit, Konsistenz, Aktualität, etc.) für FRTB-spezifische Anforderungen abdecken.\n• End-to-End Lineage und Traceability: Vollständige Dokumentation der Datenherkunft und -transformation vom Ursprungssystem bis zur regulatorischen Berichterstattung mit klarer Nachvollziehbarkeit.\n• Automatisierte Validierungsregeln: Implementierung mehrstufiger Validierungskontrollen an kritischen Punkten der Datenverarbeitungskette, von einfachen Formatkontrolleń bis zu komplexen Cross-Validierungen.\n• Eskalations- und Remediationsprozesse: Klar definierte Prozesse zur Behandlung von Datenqualitätsproblemen mit angemessenen Eskalationswegen und Verantwortlichkeiten.\n\n🔄 ADVISORIs integrierter Implementierungsansatz:\n• Systemübergreifende Datenqualitätsarchitektur: Wir entwickeln eine Architektur, die existierende Datenqualitätsfunktionen verschiedener Systeme orchestriert und Lücken durch gezielte Ergänzungen schließt.\n• Layer-basiertes Implementierungsmodell: Anstatt monolithische Lösungen zu forcieren, implementieren wir Datenqualitätskontrollen in verschiedenen Schichten (Quellsysteme, Data Warehouse, Risikomotoren, Reporting) mit minimalen Eingriffen in bestehende Systeme.\n• Metadata-getriebene Automatisierung: Nutzung von Business- und technischen Metadaten zur automatisierten Generierung und Anpassung von Datenqualitätsregeln, was Wartbarkeit und Skalierbarkeit erhöht.\n• Integration in bestehende Data Governance: Nahtlose Einbindung des FRTB-Datenqualitätsframeworks in existierende Governance-Strukturen mit klaren Schnittstellen und Verantwortlichkeiten.\n• Progressive Implementation: Priorisierte, schrittweise Implementierung mit Quick Wins und strategischen Langzeitmaßnahmen basierend auf Risiko und Business Impact."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann die Datenqualität für Marktrisikomodelle unter FRTB effektiv gemessen und kontinuierlich verbessert werden?",
        answer: "Die effektive Messung und kontinuierliche Verbesserung der Datenqualität für FRTB-Marktrisikomodelle erfordert einen systematischen, multidimensionalen Ansatz. Über die initiale Compliance hinaus ist ein nachhaltiger Verbesserungsprozess entscheidend für präzise Risikoberechnungen und Kapitaloptimierung.\n\n📏 Framework zur Messung der FRTB-Datenqualität:\n• Dimensionsspezifische KPIs: Etablierung granularer Kennzahlen für jede relevante Datenqualitätsdimension (Vollständigkeit, Aktualität, Konsistenz, Genauigkeit, Integrität), die spezifisch auf FRTB-Anforderungen zugeschnitten sind.\n• Hierarchisches Scoring-System: Implementation eines mehrstufigen Bewertungssystems, das Datenqualität auf verschiedenen Granularitätsebenen misst – von einzelnen Datenelementen über Risikofaktorklassen bis hin zu aggregierten Portfolio- und Unternehmensscores.\n• Business Impact Metrics: Ergänzung technischer Qualitätsmetriken durch geschäftsorientierte Kennzahlen, die den Einfluss von Datenqualitätsproblemen auf Kapitalanforderungen, Modellgenauigkeit und Geschäftsentscheidungen quantifizieren.\n• Trendanalyse und Mustererkennuńg: Implementierung von Zeitreihenanalysen und KI-gestützten Verfahren zur Erkennung systematischer Qualitätsprobleme und Vorhersage potentieller Datenrisiken.\n\n🔄 ADVISORIs Continuous Improvement Cycle:\n• Integriertes Quality Monitoring: Wir etablieren ein Echtzeit-Monitoring-System, das Datenqualitätsprobleme frühzeitig erkennt und automatisch Alerts generiert, bevor sie sich auf Geschäftsprozesse auswirken.\n• Root Cause Analysis Framework: Implementation strukturierter Methoden zur systematischen Identifikation von Grundursachen für wiederkehrende Datenqualitätsprobleme, die über Symptombehandlung hinausgehen.\n• Collaborative Remediation Platform: Entwicklung einer kollaborativen Plattform, die Datenqualitätsprobleme transparent macht und die koordinierte Behebung durch verschiedene Stakeholder (IT, Business, Risk) unterstützt.\n• Data Quality by Design: Integration von Datenqualitätsaspekten in alle Phasen der Systementwicklung und -änderung, um Qualitätsprobleme proaktiv zu verhindern, statt sie reaktiv zu beheben.\n• Continuous Learning Loop: Etablierung eines strukturierten Prozesses, der Erkenntnisse aus Datenqualitätsproblemen in die Verbesserung von Datendefinitionen, Prozessen und Kontrollen einfließen lässt."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
