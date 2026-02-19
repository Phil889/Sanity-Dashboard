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
    console.log('Updating FRTB Readiness page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Welche organisatorischen und Governance-Aspekte sollten in einer FRTB-Readiness-Bewertung berücksichtigt werden und wie unterstützt ADVISORI bei deren Optimierung?",
        answer: "Die technischen Anforderungen der FRTB-Regulierung stehen oft im Vordergrund, aber eine erfolgreiche Implementierung hängt ebenso kritisch von passenden organisatorischen Strukturen und robusten Governance-Prozessen ab. Diese Aspekte werden in vielen Readiness-Bewertungen vernachlässigt, bilden jedoch häufig die größten Hindernisse für eine erfolgreiche Umsetzung.\n\n🏛️ Kritische organisatorische und Governance-Aspekte:\n• Trading Desk Definition und Strukturierung: Die FRTB-Anforderungen an die Handelstisch-Struktur (insbesondere für IMA) erfordern oft eine Neuorganisation der Handelsaktivitäten mit klaren Verantwortlichkeiten, Strategien und Risikolimiten.\n• Front-Office und Risk Alignment: Die strengen P&L-Attribution-Anforderungen setzen eine beispiellose Abstimmung zwischen Front-Office und Risikocontrolling voraus – sowohl technisch als auch organisatorisch.\n• Modell-Governance und Validierung: FRTB stellt erhöhte Anforderungen an die Governance von Risikomodellen, einschließlich unabhängiger Validierung, kontinuierlichem Backtesting und Management von Modellrisiken.\n• Daten-Governance: Die umfangreichen Datenanforderungen verlangen robuste Governance-Strukturen für Datenqualität, -vollständigkeit und -konsistenz über alle relevanten Systeme hinweg.\n\n⚙️ ADVISORI's umfassender Governance-Bewertungsansatz:\n• Organisationsstruktur-Assessment: Analyse Ihrer aktuellen Handels- und Risikoorganisation im Hinblick auf FRTB-Anforderungen und Identifikation notwendiger struktureller Anpassungen.\n• Governance-Gap-Analyse: Systematische Bewertung Ihrer bestehenden Governance-Prozesse, Komitee-Strukturen und Entscheidungswege gegenüber den FRTB-Anforderungen.\n• Rollen- und Verantwortlichkeitsmatrix: Entwicklung einer detaillierten RACI-Matrix für alle FRTB-relevanten Aktivitäten, die klare Verantwortlichkeiten und Entscheidungsbefugnisse definiert.\n• Change-Management-Strategie: Ausarbeitung eines strukturierten Ansatzes zur Bewältigung des kulturellen und organisatorischen Wandels, der mit der FRTB-Implementierung einhergeht.\n\n🔄 ADVISORI's praxisorientierter Optimierungsansatz:\n• Zielorganisationsmodell: Entwicklung eines optimalen Organisationsdesigns, das regulatorische Anforderungen mit operativer Effizienz und strategischen Geschäftszielen in Einklang bringt.\n• Governance-Framework: Konzeption eines umfassenden FRTB-spezifischen Governance-Frameworks, einschließlich Komitee-Strukturen, Berichtswegen und Eskalationsprozessen.\n• Prozessoptimierung: Überarbeitung von Schlüsselprozessen wie Modellvalidierung, Datenqualitätsmanagement und regulatorischem Reporting für maximale Effizienz und Compliance.\n• Kultur- und Kompetenzentwicklung: Unterstützung bei der Entwicklung einer risikobewussten Kultur und dem Aufbau der für FRTB erforderlichen Kompetenzen in allen relevanten Funktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie sollten wir den Erfolg unserer FRTB-Implementierung messen und welche Key Performance Indicators (KPIs) empfiehlt ADVISORI für das Programm-Monitoring?",
        answer: "Eine erfolgreiche FRTB-Implementierung erfordert mehr als nur technische Compliance – sie sollte messbare geschäftliche Vorteile liefern und die strategischen Ziele Ihres Instituts unterstützen. Ein umfassendes Rahmenwerk für die Erfolgsmessung und das kontinuierliche Programm-Monitoring ist daher ein wesentlicher Bestandteil jeder FRTB-Readiness-Bewertung und Implementierungsstrategie.\n\n📊 Mehrdimensionale KPIs für FRTB-Erfolg:\n• Regulatorische Effektivität: Messung der Compliance-Konformität und Bewertung der Robustheit der implementierten Lösungen gegenüber regulatorischen Anforderungen und Prüfungen.\n• Kapitaleffizienz: Quantifizierung der Kapitaloptimierung durch die FRTB-Implementierung im Vergleich zu Benchmarks und Ausgangsszenarien.\n• Operationelle Exzellenz: Bewertung der Effizienz, Zuverlässigkeit und Skalierbarkeit der implementierten Prozesse und Systeme.\n• Strategische Wertschöpfung: Messung des Beitrags der FRTB-Implementierung zu übergeordneten strategischen Zielen wie Wettbewerbspositionierung und Geschäftswachstum.\n\n🎯 ADVISORI's empfohlene FRTB-spezifische KPIs:\n• Regulatorische KPIs:\n  - Modell-Performance-Metriken (P&L Attribution Ratios, Backtesting Exceptions)\n  - Datenqualitätsmetriken (Vollständigkeit, Aktualität, Genauigkeit)\n  - Anzahl und Schweregrad regulatorischer Findings\n  - Zeitgerechte Einreichung regulatorischer Berichte\n• Finanzielle KPIs:\n  - Kapitaleffizienzratio (tatsächliche vs. potenzielle Kapitalanforderungen)\n  - RWA-Optimierungskennzahlen (pro Desk, Produkt, Risikofaktor)\n  - Implementation ROI (Kapitalersparnis vs. Implementierungskosten)\n  - Handelsbuch-Profitabilität unter FRTB-Bedingungen\n• Operationelle KPIs:\n  - Berechnungs- und Reporting-Durchlaufzeiten\n  - Systemverfügbarkeit und Performance-Metriken\n  - Prozessautomatisierungsgrad\n  - Ressourcenauslastung und Effizienzgewinne\n\n📈 ADVISORI's Programm-Monitoring-Ansatz:\n• KPI-Dashboard-Entwicklung: Konzeption eines integrierten Management-Dashboards, das alle relevanten KPIs visualisiert und Trends sowie Abweichungen hervorhebt.\n• Meilenstein-basiertes Tracking: Etablierung eines strukturierten Frameworks zur Bewertung des Implementierungsfortschritts gegenüber definierten Meilensteinen und Erfolgsmetriken.\n• Kontinuierlicher Verbesserungszyklus: Implementierung eines systematischen Prozesses zur regelmäßigen Überprüfung der Performance-Metriken und Ableitung von Optimierungsmaßnahmen.\n• Benchmarking-Framework: Entwicklung eines Ansatzes zum kontinuierlichen Vergleich Ihrer FRTB-Implementation mit Best Practices und Peer-Institutionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche Rolle spielt Technologie in einer erfolgreichen FRTB-Implementierung und wie unterstützt ADVISORI bei der Bewertung und Auswahl geeigneter IT-Lösungen?",
        answer: "Die Implementierung der FRTB-Anforderungen stellt erhebliche technologische Herausforderungen dar, die weit über inkrementelle Anpassungen bestehender Systeme hinausgehen. Die Wahl der richtigen Technologiestrategie und IT-Lösungen ist ein kritischer Erfolgsfaktor, der erhebliche Auswirkungen auf Kosten, Zeitplan und letztendlichen Erfolg Ihrer FRTB-Implementierung haben kann.\n\n💻 Technologische Schlüsselherausforderungen unter FRTB:\n• Rechenleistung und Performance: Die komplexen Berechnungen des FRTB (insbesondere Expected Shortfall, NMRF-Zuschläge) erfordern eine exponentiell höhere Rechenkapazität als bisherige Risikomodelle.\n• Datenintegration und -management: Die umfangreichen Datenanforderungen verlangen eine nahtlose Integration verschiedener Datenquellen und ein leistungsfähiges Datenmanagement über den gesamten Lebenszyklus.\n• Flexibilität und Skalierbarkeit: Angesichts der kontinuierlichen regulatorischen Weiterentwicklung ist eine flexible, skalierbare Architektur essentiell, um zukünftige Anforderungen effizient integrieren zu können.\n• Front-to-Risk-Integration: Die strengen P&L-Attribution-Anforderungen setzen eine beispiellose Harmonisierung zwischen Front-Office- und Risikosystemen voraus.\n\n🔍 ADVISORI's Technologie-Assessment-Ansatz:\n• Systemarchitektur-Analyse: Detaillierte Bewertung Ihrer bestehenden Risikomanagement- und Handelssysteme hinsichtlich ihrer FRTB-Readiness und Identifikation kritischer Gaps.\n• Technologie-Optionsbewertung: Systematische Evaluation verschiedener Implementierungsansätze – von der Eigenentwicklung über Vendor-Lösungen bis hin zu Cloud-basierten Services – unter Berücksichtigung Ihrer spezifischen Ausgangssituation und Anforderungen.\n• Vendor-Solution-Assessment: Strukturierte Bewertung verfügbarer Marktlösungen anhand eines umfassenden Kriterienkatalogs, der sowohl funktionale als auch nicht-funktionale Anforderungen abdeckt.\n• IT-Roadmap-Entwicklung: Ausarbeitung einer mehrjährigen Technologie-Roadmap, die FRTB-Anforderungen mit anderen strategischen IT-Initiativen synchronisiert.\n\n🛠️ ADVISORI's Lösungsauswahl-Methodik:\n• Anforderungsdefinition: Entwicklung eines detaillierten Business- und IT-Anforderungskatalogs als Grundlage für die Lösungsbewertung und -auswahl.\n• Proof-of-Concept-Ansatz: Konzeption und Durchführung gezielter PoCs zur praktischen Validierung der Eignung potenzieller Lösungen für Ihre spezifischen Anforderungen.\n• TCO-Analyse: Erstellung einer umfassenden Total-Cost-of-Ownership-Analyse für verschiedene Technologieoptionen, die sowohl direkte als auch indirekte Kosten über den gesamten Lebenszyklus berücksichtigt.\n• Implementierungsstrategie: Ausarbeitung einer optimalen Umsetzungsstrategie, einschließlich Phasenplanung, Change Management und Risikominimierung während der Transition."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie können wir sicherstellen, dass unsere FRTB-Readiness-Bewertung einen nachhaltigen Wert schafft und nicht nur ein kurzfristiges Compliance-Projekt bleibt?",
        answer: "Eine wirklich wertschöpfende FRTB-Readiness-Bewertung sollte weit über eine einmalige Compliance-Übung hinausgehen und als strategisches Instrument zur langfristigen Stärkung Ihres Instituts dienen. Der nachhaltige Wert entsteht dabei nicht durch die Bewertung selbst, sondern durch ihre strategische Einbettung in Ihre Unternehmenstransformation und die konsequente Umsetzung der identifizierten Optimierungspotenziale.\n\n🌱 Schlüsselelemente für nachhaltige Wertschöpfung:\n• Strategische Verankerung: Integration der FRTB-Implementierung in Ihre übergeordnete Geschäfts- und Digitalisierungsstrategie, anstatt sie als isoliertes Compliance-Projekt zu behandeln.\n• Capability-Building: Fokus auf den Aufbau dauerhafter Fähigkeiten und Kompetenzen, die über die unmittelbaren FRTB-Anforderungen hinaus Wert schaffen.\n• Transformative Ambition: Nutzung der FRTB-Anforderungen als Katalysator für eine breitere Transformation von Geschäftsmodell, Prozessen und Technologie.\n• Langfristige Perspektive: Ausrichtung der Implementierungsstrategie auf langfristige Ziele und Zukunftsfähigkeit, nicht nur auf minimale Compliance.\n\n💼 ADVISORI's Ansatz für nachhaltige Wertschöpfung:\n• Business-Case-getriebene Priorisierung: Entwicklung eines umfassenden Business Cases, der nicht nur Compliance-Vorteile, sondern auch operative und strategische Werttreiber quantifiziert und die Priorisierung von Maßnahmen leitet.\n• Capability-basierte Roadmap: Ausrichtung der FRTB-Implementierung an einem übergreifenden Capability-Modell, das die Grundlage für verschiedene strategische Initiativen bildet.\n• Synergieorientierte Umsetzung: Systematische Identifikation und Realisierung von Synergien mit anderen Transformationsinitiativen, um Investitionen zu optimieren und Mehrfachnutzen zu erzielen.\n• Nachhaltigkeits-KPIs: Definition und Tracking von Erfolgskennzahlen, die nicht nur die Compliance-Konformität, sondern auch den langfristigen geschäftlichen und operativen Mehrwert messen.\n\n🔄 Kontinuierlicher Mehrwert über den FRTB-Lebenszyklus:\n• Pre-Implementation-Phase: Nutzung der Readiness-Bewertung zur strategischen Weichenstellung, Business-Case-Entwicklung und Schaffung organisatorischer Voraussetzungen.\n• Implementierungsphase: Kontinuierliche Optimierung der Umsetzungsstrategie basierend auf neuen Erkenntnissen, regulatorischen Entwicklungen und sich verändernden Geschäftsprioritäten.\n• Post-Implementation-Phase: Etablierung eines kontinuierlichen Verbesserungszyklus, der regelmäßige Neubewertungen der FRTB-Lösung im Hinblick auf Effizienz, Effektivität und strategische Ausrichtung umfasst.\n• Evolutionsphase: Proaktive Anpassung an neue regulatorische Anforderungen und Marktentwicklungen, aufbauend auf den durch die FRTB-Implementierung geschaffenen Fähigkeiten."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
