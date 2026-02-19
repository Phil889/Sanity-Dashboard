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
    console.log('Updating EBA page with C-Level FAQs batch 5...')
    
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
        _key: generateKey('faq', 17),
        question: "Wie können Finanzinstitute die EBA-Anforderungen an Vergütungssysteme nutzen, um strategische Personalziele zu unterstützen und eine leistungsorientierte Kultur zu fördern?",
        answer: "Die EBA-Anforderungen an Vergütungssysteme werden oft primär als Einschränkung und Komplexitätsfaktor wahrgenommen. Für die strategisch denkende C-Suite bieten sie jedoch einen strukturierten Rahmen, um Vergütungssysteme mit der Unternehmensstrategie, dem Risikoprofil und langfristigen Wertschöpfungszielen in Einklang zu bringen und so eine nachhaltige Leistungskultur zu fördern.\n\n👥 Strategische Dimensionen regulatorischer Vergütungsanforderungen:\n• Alignment von Vergütung und Strategie: Die regulatorischen Anforderungen an die Verknüpfung von Vergütung mit langfristiger Wertschöpfung bieten einen strukturierten Rahmen, um Vergütungssysteme direkt mit strategischen Zielen zu verknüpfen und so die Umsetzung der Unternehmensstrategie zu fördern.\n• Risikobewusste Leistungskultur: Die Anforderungen an die Risikoadjustierung von Vergütungen unterstützen die Entwicklung einer Unternehmenskultur, die sowohl leistungs- als auch risikoorientiert ist und nachhaltige Ergebnisse über kurzfristige Erfolge stellt.\n• Talent Acquisition und Retention: Ein gut gestaltetes, regulatorisch konformes Vergütungssystem kann als Differenzierungsmerkmal im Wettbewerb um Talente dienen und die Bindung leistungsstarker Mitarbeiter fördern.\n• Governance und Transparenz: Die strengen Anforderungen an Governance und Transparenz von Vergütungssystemen können das Vertrauen von Investoren, Aufsichtsbehörden und anderen Stakeholdern stärken und die Unternehmensreputation positiv beeinflussen.\n\n🎯 ADVISORI's ganzheitlicher Vergütungsansatz:\n• Strategic Compensation Framework: Wir entwickeln ein Vergütungsrahmenwerk, das regulatorische Anforderungen erfüllt und gleichzeitig strategische Ziele, Risikokultur und Wertschöpfungsorientierung optimal unterstützt.\n• Risk-Adjusted Performance Metrics: Unsere Methodik zur Entwicklung risikoadjustierter Leistungskennzahlen schafft eine direkte Verbindung zwischen individueller Leistung, Risikoexposition und langfristiger Wertschöpfung.\n• Governance Operating Model: Wir etablieren effiziente Governance-Strukturen und -Prozesse für Vergütungssysteme, die sowohl regulatorische Anforderungen erfüllen als auch strategische Flexibilität und operative Effizienz gewährleisten.\n• Stakeholder Communication Strategy: Wir entwickeln einen transparenten, strukturierten Ansatz für die Kommunikation von Vergütungsentscheidungen und -praktiken gegenüber internen und externen Stakeholdern, der Vertrauen und Akzeptanz fördert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Wie sollten Vorstände und Aufsichtsräte den regulatorischen Dialog mit der EBA und nationalen Aufsichtsbehörden strategisch gestalten?",
        answer: "Der aufsichtliche Dialog mit der EBA und nationalen Behörden wird von vielen Finanzinstituten als reaktive Pflichtübung wahrgenommen. Für die strategisch denkende C-Suite bietet er jedoch eine wichtige Plattform für die proaktive Gestaltung regulatorischer Erwartungen, den Aufbau vertrauensvoller Beziehungen und die Gewinnung wertvoller strategischer Einblicke, die weit über Compliance-Aspekte hinausgehen.\n\n🗣️ Strategische Dimensionen des aufsichtlichen Dialogs:\n• Regulatorisches Relationship Management: Der kontinuierliche, proaktive Dialog mit Aufsichtsbehörden ermöglicht den Aufbau vertrauensvoller Beziehungen, die in Krisensituationen oder bei kontroversen Themen von unschätzbarem Wert sein können.\n• Früherkennung regulatorischer Trends: Der direkte Austausch mit Aufsehern bietet frühzeitige Einblicke in regulatorische Entwicklungen und Erwartungen, die einen strategischen Vorsprung bei der Anpassung an neue Anforderungen ermöglichen.\n• Gestaltung des regulatorischen Umfelds: Ein aktives Engagement im regulatorischen Dialog bietet die Möglichkeit, die Entwicklung neuer Regulierungen zu beeinflussen und sicherzustellen, dass geschäftsmodellspezifische Besonderheiten angemessen berücksichtigt werden.\n• Strategische Nutzung aufsichtlicher Erkenntnisse: Die Rückmeldungen und Erkenntnisse aus dem aufsichtlichen Dialog können wertvolle Impulse für die strategische Weiterentwicklung des Unternehmens liefern und blinde Flecken in der eigenen Risikowahrnehmung aufdecken.\n\n📋 ADVISORI's strategischer Ansatz zum aufsichtlichen Dialog:\n• Supervisory Engagement Strategy: Wir entwickeln eine proaktive Strategie für den aufsichtlichen Dialog, die Timing, Frequenz, Inhalte und Teilnehmer verschiedener Interaktionen definiert und eine konsistente, strategisch ausgerichtete Kommunikation sicherstellt.\n• Regulatory Intelligence Framework: Unser strukturierter Ansatz zur Sammlung, Analyse und Verteilung regulatorischer Informationen maximiert den strategischen Wert der im aufsichtlichen Dialog gewonnenen Erkenntnisse.\n• Executive Preparation & Coaching: Wir bereiten Führungskräfte gezielt auf aufsichtliche Gespräche vor und coachen sie für eine effektive, überzeugende Kommunikation, die sowohl inhaltlich fundiert als auch beziehungsorientiert ist.\n• Stakeholder Mapping & Influence Strategy: Wir identifizieren die relevanten Entscheidungsträger und Einflussfaktoren im aufsichtlichen Umfeld und entwickeln zielgerichtete Strategien für eine effektive Interessenvertretung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Welche Strategien empfiehlt ADVISORI zur Integration der wachsenden EBA-Anforderungen an Operational Resilience und wie können diese als Wettbewerbsvorteil genutzt werden?",
        answer: "Die expandierenden EBA-Anforderungen an Operational Resilience werden oft primär als regulatorische Last wahrgenommen. Für die weitsichtige C-Suite bieten sie jedoch einen Rahmen, um die organisatorische Widerstandsfähigkeit systematisch zu stärken und so nicht nur regulatorische Risiken zu minimieren, sondern auch einen nachhaltigen Wettbewerbsvorteil in einem zunehmend volatilen Umfeld zu schaffen.\n\n🛡️ Strategische Dimensionen operationeller Resilienz:\n• Business Continuity als strategischer Differenziator: Die Fähigkeit, kritische Geschäftsprozesse auch unter widrigen Umständen aufrechtzuerhalten, wird in einem Umfeld wachsender Bedrohungen (Cyber, Klima, Pandemie) zunehmend zu einem entscheidenden Wettbewerbsfaktor und Vertrauensanker für Kunden und Partner.\n• Digitale Resilienz als Innovationsenabler: Robuste, resiliente digitale Infrastrukturen ermöglichen es, neue Technologien und Geschäftsmodelle schneller und sicherer einzuführen, was die Innovationsfähigkeit und Marktreaktionsfähigkeit steigert.\n• Datenresilienz als Grundlage für Analytics und KI: Die Anforderungen an Datenresilienz und -qualität schaffen die Grundlage für fortschrittliche Analytik und KI-Anwendungen, die strategische Entscheidungen verbessern und neue Geschäftschancen eröffnen können.\n• Third-Party Risk Management als Supply Chain Optimierer: Ein fortschrittliches Management von Drittanbieterrisiken verbessert nicht nur die Resilienz, sondern optimiert auch die gesamte Lieferkette in Bezug auf Kosten, Qualität und Innovation.\n\n🔄 ADVISORI's ganzheitlicher Resilienz-Ansatz:\n• Integrated Resilience Framework: Wir entwickeln ein ganzheitliches Resilienzrahmenwerk, das regulatorische Anforderungen erfüllt und gleichzeitig die spezifischen Geschäftsziele, Risikoprofil und Technologielandschaft Ihres Unternehmens berücksichtigt.\n• Advanced Scenario Analysis & Testing: Unsere Methodik für Szenarioanalysen und Resilienztests geht über regulatorische Mindestanforderungen hinaus und liefert tiefere Einblicke in Schwachstellen und Optimierungspotenziale.\n• Technology Resilience Architecture: Wir konzipieren resiliente Technologiearchitekturen, die sowohl regulatorische Anforderungen erfüllen als auch die digitale Transformation und Innovation optimal unterstützen.\n• Resilience Metrics & Reporting: Wir entwickeln aussagekräftige Metriken und Reportingstrukturen für operationelle Resilienz, die sowohl regulatorischen Anforderungen genügen als auch wertvolle Steuerungsinformationen für die Geschäftsleitung liefern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie unterstützt ADVISORI Finanzinstitute dabei, ihre Compliance-Investitionen für EBA-Regularien zu optimieren und einen nachhaltigen ROI zu erzielen?",
        answer: "Die steigenden Kosten für die Einhaltung von EBA-Regularien stellen Finanzinstitute vor erhebliche budgetäre Herausforderungen. Für die C-Suite ist es entscheidend, diese Investitionen nicht als reinen Kostenfaktor, sondern als strategische Investition zu betrachten und einen messbaren Return on Investment (ROI) zu erzielen, der über die reine Vermeidung regulatorischer Sanktionen hinausgeht.\n\n💰 Strategien zur Optimierung regulatorischer Investitionen:\n• Synergieeffekte zwischen regulatorischen Initiativen: Die systematische Identifikation und Nutzung von Überschneidungen zwischen verschiedenen regulatorischen Anforderungen kann erhebliche Effizienzgewinne und Kosteneinsparungen ermöglichen.\n• Regulierung als Katalysator für Modernisierung: Regulatorische Anforderungen können als Treiber und Rechtfertigung für längst überfällige Modernisierungen in Technologie, Prozessen und Organisationsstrukturen dienen, die auch über die Compliance hinaus Mehrwert schaffen.\n• Skalierbare Compliance-Architekturen: Die Entwicklung flexibler, modularer Compliance-Architekturen, die leicht an neue Anforderungen angepasst werden können, reduziert langfristige Kosten und erhöht die Agilität.\n• Strategische Automatisierung: Der gezielte Einsatz von Automatisierungstechnologien in Compliance-Prozessen kann sowohl Kosten senken als auch Qualität und Konsistenz verbessern.\n\n📈 ADVISORI's ROI-orientierter Compliance-Ansatz:\n• Regulatory Value Assessment: Wir entwickeln eine Methodik zur Bewertung und Quantifizierung des geschäftlichen Mehrwerts regulatorischer Investitionen, die über die reine Compliance hinausgeht und strategische Entscheidungen unterstützt.\n• Regulatory Investment Portfolio Optimization: Unser strukturierter Ansatz zur Optimierung des regulatorischen Investitionsportfolios maximiert Synergien, priorisiert Initiativen mit dem höchsten Wertbeitrag und minimiert Redundanzen und Ineffizienzen.\n• Scalable Target Operating Model: Wir konzipieren ein zukunftsfähiges Betriebsmodell für Compliance-Funktionen, das flexibel auf neue Anforderungen reagieren kann, ohne proportional steigende Kosten zu verursachen.\n• Compliance Technology Strategy: Unsere Technologiestrategie für Compliance-Funktionen fokussiert auf strategische Plattformen und Automatisierungslösungen, die sowohl kurzfristige Effizienzgewinne als auch langfristige strategische Flexibilität bieten."
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
    console.log('✅ C-Level FAQs batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
