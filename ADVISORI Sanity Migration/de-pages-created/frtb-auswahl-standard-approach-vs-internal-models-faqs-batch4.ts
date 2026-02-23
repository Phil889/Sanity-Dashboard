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
    console.log('Updating FRTB Auswahl Standard Approach vs. Internal Models page with FAQs batch 4...')
    
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
        question: "Wie können Finanzinstitute die Performance und Kosteneffizienz ihrer FRTB-Implementierung optimieren und welche Benchmarks sollten angestrebt werden?",
        answer: "Die Optimierung von Performance und Kosteneffizienz einer FRTB-Implementierung ist ein kritischer Erfolgsfaktor, der sowohl technologische als auch methodische Innovationen erfordert. Ein strategischer Ansatz zur Performance-Optimierung kann nicht nur die Betriebskosten signifikant reduzieren, sondern auch die Geschäftsagilität und Entscheidungsqualität verbessern.\n\n⚡ Performance-Optimierungsstrategien für FRTB:\n• Berechnungsarchitektur-Optimierung: Implementierung skalierbarer, parallelisierter Berechnungsarchitekturen mit intelligenter Workload-Verteilung kann die Berechnungszeiten um 50-70% reduzieren – entscheidend für die Integration von FRTB in Echtzeit-Handelsentscheidungen.\n• Approximationstechniken und Proxy-Modelle: Strategischer Einsatz von Approximationstechniken für nicht-kritische Berechnungen und Zwischenergebnisse kann den Rechenaufwand drastisch reduzieren, während regulatorische Genauigkeitsanforderungen erfüllt werden.\n• Data Caching und Inkrementelle Berechnung: Implementation intelligenter Caching-Strategien und inkrementeller Berechnungsmethoden, die nur Änderungen neu berechnen, kann insbesondere bei What-if-Analysen und Intraday-Risikoberechnungen erhebliche Performance-Vorteile bieten.\n• Sensitivitäts-basierte Aggregation: Für Institute mit dem Standardansatz kann eine sensitivitätsbasierte Aggregationsmethodik die Berechnungskomplexität signifikant reduzieren und gleichzeitig präzise Risikometriken liefern.\n\n💰 Kosteneffizienz-Benchmarks und Optimierungsansätze:\n• Implementierungskosten: Führende Institute erreichen FRTB-Implementierungen mit einem Gesamtbudget von 20-30 Millionen Euro für mittelgroße Handelsbücher, während ineffiziente Implementierungen leicht das Doppelte oder Dreifache kosten können.\n• Laufende Betriebskosten: Best-Practice-Institute halten die laufenden jährlichen Betriebskosten für FRTB unter 15-20% der initialen Implementierungskosten durch Automatisierung, effiziente Datenmanagement-Strategien und optimierte Berechnungsinfrastrukturen.\n• Ressourceneffizienz: Hocheffiziente FRTB-Implementierungen erreichen eine Produktivität von weniger als 0,5 Vollzeitäquivalenten pro 100 Millionen Euro Handelskapital durch weitgehende Automatisierung und Prozessintegration.\n• Technology Cost per Risk Calculation: Führende Institute erreichen Technologiekosten von unter 5-10 Euro pro täglicher vollständiger FRTB-Kapitalberechnung für ein mittelgroßes Handelsbuch durch optimierte Cloud-Strategien und effiziente Ressourcennutzung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie wirkt sich die FRTB-Methodenwahl auf die Produktentwicklung und Innovationsfähigkeit eines Finanzinstituts aus?",
        answer: "Die FRTB-Methodenwahl hat tiefgreifende Auswirkungen auf Ihre Produktentwicklungsstrategie und Innovationsfähigkeit, die weit über regulatorische Compliance hinausgehen. Ein strategischer Ansatz zur Integration von FRTB in Ihre Produktstrategie kann nicht nur Kapitaleffizienz sicherstellen, sondern auch als Katalysator für Innovation und Differenzierung im Markt dienen.\n\n🔄 FRTB-Implikationen für Produktstrategie und Innovation:\n• Produkt-Rentabilitätsverschiebungen: Die unterschiedliche Kapitalbehandlung verschiedener Produkttypen unter FRTB führt zu fundamentalen Verschiebungen in der Rentabilität bestimmter Produkte – komplexe, strukturierte Produkte können unter dem Standardansatz prohibitiv teuer werden, während der IMA hier signifikante Vorteile bieten kann.\n• Time-to-Market-Implikationen: Die Anforderungen an Risikofaktor-Modellierbarkeit und Produktvalidierung unter dem IMA können die Einführungszeit für innovative Produkte verlängern, während der Standardansatz hier eine höhere Agilität bieten kann, allerdings oft zu höheren Kapitalkosten.\n• Produktdesign-Neuausrichtung: Die FRTB-Methodologie incentiviert ein risikosensitives Produktdesign, bei dem Produkte gezielt so gestaltet werden, dass sie unter dem gewählten Ansatz kapitaleffizient sind – mit potenziell transformativen Auswirkungen auf Ihre Produktpalette.\n• Innovationsfokus-Verschiebung: Die FRTB-Anforderungen können den Fokus der Produktinnovation von exotischen Payoff-Strukturen hin zu kapitaleffizienten Strukturierungstechniken verschieben, die ähnliche ökonomische Exposures mit reduziertem regulatorischem Kapital ermöglichen.\n\n🚀 Strategien zur Maximierung der Innovationsfähigkeit unter FRTB:\n• FRTB-integrierter Produktentwicklungsprozess: Integration von FRTB-Kapitalanalysen früh in den Produktentwicklungsprozess ermöglicht die Optimierung neuer Produkte für regulatorische Kapitaleffizienz ohne Kompromisse bei Kundennutzen.\n• Agile Modellentwichklung und -validierung: Entwicklung eines agilen Frameworks für die schnelle Modellierung und Validierung neuer Risikofaktoren kann die Time-to-Market für innovative Produkte unter dem IMA signifikant reduzieren.\n• Hybrid-Strategien für Produktinnovation: Nutzung des Standardansatzes für schnelle Innovation in neuen Produktbereichen mit gezielter Migration zu internen Modellen für etablierte, kapitalintensive Produktlinien.\n• Analytics-driven Innovation: Nutzung der umfangreichen FRTB-Risikodaten für datengetriebene Produktinnovation, die Kundenbedürfnisse mit regulatorischer Kapitaleffizienz verbindet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Change-Management-Strategien empfiehlt ADVISORI für eine erfolgreiche FRTB-Transformation und wie können kulturelle Barrieren überwunden werden?",
        answer: "Die FRTB-Implementation ist nicht nur ein technisches oder methodisches Projekt, sondern eine fundamentale Transformation, die tiefgreifende Veränderungen in Prozessen, Systemen und vor allem in der Organisationskultur erfordert. Ein strategisches Change Management ist entscheidend, um Widerstände zu überwinden und eine nachhaltige Transformation zu ermöglichen.\n\n🔄 Kritische Change-Management-Dimensionen für FRTB:\n• Kulturelle Transformation: Die FRTB-Implementierung erfordert eine fundamentale kulturelle Veränderung – von einer Silo-orientierten zu einer integrierten Risikokultur mit enger Zusammenarbeit zwischen Handel, Risikomanagement, Finance und IT.\n• Skill-Gap-Überbrückung: Die neuen methodischen und technologischen Anforderungen von FRTB schaffen signifikante Skill-Gaps, die durch gezielte Weiterbildung, strategische Rekrutierung und effektiven Wissenstransfer adressiert werden müssen.\n• Prozess- und Arbeitsweisen-Transformation: Die intensivere Integration von Handel und Risikomanagement unter FRTB erfordert neue Arbeitsweisen, kollaborative Prozesse und agile Entscheidungsstrukturen, die oft im Kontrast zu etablierten Organisationsmustern stehen.\n• Stakeholder-Management: Die Komplexität und strategische Bedeutung von FRTB erfordert ein systematisches Stakeholder-Management, das vom Board über das Senior Management bis zu den operativen Teams alle Ebenen einbezieht.\n\n🛠️ ADVISORI's bewährte Change-Management-Strategien:\n• Executive Alignment Program: Wir führen spezialisierte Executive-Workshops durch, um ein gemeinsames Verständnis der FRTB-Implikationen zu entwickeln und klare Leadership-Commitments für die Transformation zu etablieren.\n• Integrated Change Network: Wir unterstützen Sie bei der Etablierung eines cross-funktionalen Change-Netzwerks mit Change Champions aus allen betroffenen Funktionen, die als Multiplikatoren und Feedback-Kanäle dienen.\n• Capability Building Program: Wir entwickeln maßgeschneiderte Trainings- und Entwicklungsprogramme, die methodisches und technisches Know-how mit Cultural-Change-Elementen verbinden und so eine ganzheitliche Kompetenzentwicklung fördern.\n• Impact-focused Communication: Wir unterstützen Sie bei der Entwicklung einer zielgruppenspezifischen Kommunikationsstrategie, die die Bedeutung von FRTB für verschiedene Stakeholder-Gruppen verdeutlicht und konkrete Handlungsimpulse setzt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie entwickeln sich die regulatorischen Anforderungen und Marktpraktiken im FRTB-Bereich weiter und wie können Finanzinstitute sich auf zukünftige Änderungen vorbereiten?",
        answer: "Die regulatorischen Anforderungen und Marktpraktiken im FRTB-Bereich befinden sich in kontinuierlicher Evolution, mit laufenden Anpassungen durch Standardsetter, nationalen Implementierungsvariationen und sich entwickelnden Industriepraktiken. Ein proaktiver, zukunftsorientierter Ansatz ist entscheidend, um regulatorische Überraschungen zu vermeiden und strategische Flexibilität zu bewahren.\n\n🔮 Evolutionstrends in FRTB-Regulierung und Marktpraktiken:\n• Regulatorische Feinjustierung: Der Baseler Ausschuss und nationale Aufsichtsbehörden führen kontinuierliche Anpassungen der FRTB-Standards durch, mit besonderem Fokus auf die Kalibrierung von Risikofaktoren, die P&L-Attribution-Anforderungen und die Behandlung von Non-Modellable Risk Factors.\n• Implementierungsvariationen: Die nationale Umsetzung von FRTB zeigt signifikante Variationen in Timing, Scope und spezifischen Anforderungen – eine Entwicklung, die für global aktive Institute besondere Herausforderungen bei der Harmonisierung ihrer globalen FRTB-Strategie schafft.\n• Industriepraktiken-Evolution: Die Marktpraktiken für FRTB-Implementation entwickeln sich rapide weiter, mit kontinuierlichen Innovationen in Berechnungsmethoden, Datenmanagement-Strategien und Validierungsansätzen, die neue Best Practices etablieren.\n• Aufsichtliche Erwartungsentwicklung: Die aufsichtlichen Erwartungen an FRTB-Implementierungen entwickeln sich fortlaufend durch Erkenntnisse aus frühen Implementierungen, horizontalen Reviews und dem regulatorischen Dialog, oft mit steigenden Anforderungen an Robustheit und Transparenz.\n\n🛡️ Strategien zur Zukunftssicherung Ihrer FRTB-Implementation:\n• Regulatorisches Radar: Etablierung eines systematischen Monitorings regulatorischer Entwicklungen nicht nur auf Basel-Ebene, sondern auch in allen relevanten Jurisdiktionen, mit früher Analyse der Implikationen für Ihre spezifische FRTB-Strategie.\n• Szenario-basierte Planung: Entwicklung multipler Implementierungsszenarien basierend auf verschiedenen regulatorischen Entwicklungspfaden, mit klaren Trigger-Punkten für strategische Anpassungen und kontingente Aktionsplänen.\n• Flexible Systemarchitektur: Implementation einer modularen, konfigurierbaren Systemarchitektur, die schnelle Anpassungen an regulatorische Änderungen ermöglicht, ohne fundamentale Redesigns zu erfordern.\n• Proaktives Regulatory Engagement: Aktive Beteiligung an Konsultationen, Industrieforen und bilateralem regulatorischem Dialog, um Einfluss auf die Entwicklung zu nehmen und frühzeitige Einblicke in kommende Änderungen zu gewinnen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
