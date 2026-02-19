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
    console.log('Updating EBA SREP Readiness page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eba-srep-readiness' })
    
    if (!existingDoc) {
      throw new Error('Document "eba-srep-readiness" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können wir als Bank den SREP-Prozess strategisch nutzen, um nicht nur regulatorische Anforderungen zu erfüllen, sondern auch einen Wettbewerbsvorteil zu erlangen?",
        answer: "Der SREP ist weit mehr als eine regulatorische Pflichtübung – richtig angegangen bietet er ein strategisches Potenzial zur Wertsteigerung und Differenzierung im Markt. Die proaktive Transformation des SREP von einer Compliance-Aktivität zu einem strategischen Enabler erfordert jedoch einen grundlegenden Perspektivwechsel in der Organisation.\n\n🔍 Strategische Hebelwirkung des SREP-Prozesses:\n• Tiefgreifende Selbsterkenntnis: Der SREP-Prozess erzwingt eine objektive Auseinandersetzung mit dem eigenen Geschäftsmodell, der Governance-Struktur und den Risikomanagementpraktiken – eine wertvolle Grundlage für strategische Weiterentwicklungen jenseits regulatorischer Anforderungen.\n• Katalysator für Digitalisierung: Die datenintensiven SREP-Anforderungen bieten einen legitimen Anlass, in fortschrittliche Datenmanagement-Systeme und Analysetools zu investieren, die auch anderen Geschäftsbereichen zugutekommen.\n• Früherkennung strategischer Risiken: Die SREP-Bewertungsmethodik hilft, potenzielle Schwachstellen im Geschäftsmodell zu identifizieren, bevor sie zu tatsächlichen Problemen werden – ein wertvoller Frühwarnmechanismus.\n• Kapitaleffizienz als Wettbewerbsvorteil: Eine bessere SREP-Bewertung führt zu niedrigeren Kapitalanforderungen, was direkte Kostenvorteile bietet und Spielraum für strategische Investitionen schafft.\n\n🚀 ADVISORI's Ansatz zur strategischen SREP-Nutzung:\n• Integration in die strategische Planung: Wir helfen Ihnen, SREP-Erkenntnisse systematisch in Ihre strategische Planung und Entscheidungsfindung zu integrieren, statt sie isoliert zu betrachten.\n• Benchmarking und Best Practices: Unsere umfassende Marktkenntnis ermöglicht es, Ihre SREP-Performance im Wettbewerbsvergleich zu bewerten und von Best Practices zu profitieren.\n• Aufbau strategischer Capabilities: Wir unterstützen Sie dabei, über die bloße SREP-Compliance hinauszugehen und langfristige organisatorische Fähigkeiten aufzubauen, die Ihre Wettbewerbsposition stärken.\n• Optimierung der Kommunikation: Wir entwickeln mit Ihnen eine Strategie, um SREP-Ergebnisse positiv gegenüber Investoren, Rating-Agenturen und anderen Stakeholdern zu kommunizieren und so Ihr Marktvertrauen zu stärken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche häufigen Fallstricke sollten Banken im SREP-Prozess vermeiden und wie unterstützt ADVISORI dabei, diese proaktiv zu adressieren?",
        answer: "Der SREP-Prozess birgt eine Vielzahl potenzieller Fallstricke, die über offensichtliche Compliance-Versäumnisse hinausgehen und oft in strukturellen oder methodischen Defiziten wurzeln. Unsere Erfahrung zeigt, dass eine frühzeitige Identifikation und systematische Adressierung dieser Herausforderungen entscheidend für ein positives SREP-Ergebnis ist.\n\n⚠️ Kritische Fallstricke im SREP-Prozess:\n• Fragmentierte Datenlandschaft: Inkonsistente, verstreute Daten führen zu widersprüchlichen Berichten und unterminieren das Vertrauen der Aufsicht in die Qualität Ihres Risikomanagements.\n• Mangelnde Konsistenz zwischen ICAAP/ILAAP und tatsächlicher Geschäftspraxis: Eine Diskrepanz zwischen dokumentierten Prozessen und gelebter Praxis wird von Prüfern schnell erkannt und führt zu erheblichen Bewertungsabschlägen.\n• Unzureichende Verknüpfung von Risikomanagement und Strategie: Wenn die Risikobetrachtung nicht integraler Bestandteil Ihrer strategischen Entscheidungsfindung ist, wird dies im SREP als schwerwiegendes Governance-Defizit gewertet.\n• Reaktive statt proaktive Kommunikation: Ein defensiver Kommunikationsstil gegenüber der Aufsicht kann Misstrauen erzeugen und zu intensiveren Prüfungen führen.\n• Fehlende Kohärenz in der Darstellung des Geschäftsmodells: Widersprüchliche oder unklare Darstellungen der eigenen Geschäftsstrategie signalisieren mangelnde strategische Klarheit.\n\n🛡️ ADVISORI's präventiver Ansatz:\n• Ganzheitliche Gap-Analyse: Wir identifizieren potenzielle Problembereiche frühzeitig durch eine umfassende Analyse aller SREP-relevanten Dimensionen – bevor die Aufsicht darauf stößt.\n• Datenqualitäts-Management: Implementierung robuster Prozesse zur Sicherstellung der Konsistenz, Genauigkeit und Nachvollziehbarkeit aller SREP-relevanten Daten und Informationen.\n• Strategische Narrativ-Entwicklung: Wir unterstützen Sie bei der Entwicklung eines kohärenten, überzeugenden Narrativs zu Ihrem Geschäftsmodell und Ihrer Risikostrategie, das alle SREP-Elemente schlüssig verbindet.\n• Proaktives Stakeholder-Management: Entwicklung einer strukturierten Kommunikationsstrategie mit der Aufsicht, die auf Transparenz und konstruktiven Dialog setzt.\n• Simulierte Prüfungssituationen: Durchführung von Mock-SREP-Assessments, um Schwachstellen unter realitätsnahen Bedingungen zu identifizieren und zu beheben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir unsere internen Prozesse und Governance-Strukturen optimieren, um nicht nur den aktuellen SREP-Anforderungen zu genügen, sondern auch für zukünftige regulatorische Entwicklungen gerüstet zu sein?",
        answer: "Die Optimierung interner Prozesse und Governance-Strukturen für den SREP erfordert einen zukunftsorientierten Ansatz, der nicht nur aktuelle Anforderungen erfüllt, sondern auch die Flexibilität und Anpassungsfähigkeit für kommende regulatorische Entwicklungen sicherstellt. ADVISORI unterstützt Sie dabei, eine resiliente und zukunftssichere Governance-Architektur zu etablieren.\n\n🏗️ Grundprinzipien einer zukunftssicheren Governance-Struktur:\n• Prinzipienbasierte statt regelbasierte Ausrichtung: Entwicklung einer Governance, die auf fundamentalen Risikomanagement-Prinzipien basiert und damit flexibel auf sich ändernde regulatorische Detailanforderungen reagieren kann.\n• Integrierte Kontrollfunktionen: Etablierung eines nahtlosen Zusammenspiels der drei Verteidigungslinien mit klaren, aber nicht isolierten Verantwortlichkeiten und effektiven Kommunikationskanälen.\n• Datengetriebene Entscheidungsfindung: Aufbau einer Infrastruktur, die evidenzbasierte Risikoentscheidungen auf allen Ebenen der Organisation ermöglicht und dokumentiert.\n• Proaktive Risikokultur: Förderung einer organisationsweiten Kultur, in der Risikobewusstsein und verantwortungsvolles Handeln tief verankert sind und nicht nur als Compliance-Anforderung verstanden werden.\n• Agile Anpassungsfähigkeit: Implementierung von Governance-Mechanismen, die schnelle Anpassungen an neue regulatorische Anforderungen ermöglichen, ohne die Grundarchitektur zu gefährden.\n\n🔄 ADVISORI's Transformationsansatz für zukunftssichere Prozesse:\n• Umfassende Reifegradanalyse: Bewertung Ihrer aktuellen Governance-Strukturen und Prozesse anhand eines mehrdimensionalen Reifegradmodells, das über die SREP-Anforderungen hinausgeht.\n• Strategische Prozessoptimierung: Identifikation und Beseitigung von Redundanzen, Inkonsistenzen und Effizienzbarrieren in SREP-relevanten Prozessen unter Berücksichtigung zukünftiger regulatorischer Trends.\n• Integriertes Governance-Framework: Entwicklung einer kohärenten Governance-Architektur, die Risikomanagement, Compliance, interne Kontrolle und strategische Planung harmonisch verbindet.\n• Aufbau eines Regulatory Intelligence Systems: Etablierung von Prozessen zur frühzeitigen Erkennung und Bewertung regulatorischer Entwicklungen, um proaktiv statt reaktiv agieren zu können.\n• Change Management und Kulturwandel: Begleitung des notwendigen Kulturwandels durch maßgeschneiderte Change-Management-Maßnahmen, die auf nachhaltige Verhaltensänderungen abzielen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche Innovationen und Best Practices empfiehlt ADVISORI, um die Qualität und Effizienz unserer ICAAP- und ILAAP-Prozesse signifikant zu verbessern?",
        answer: "ICAAP (Internal Capital Adequacy Assessment Process) und ILAAP (Internal Liquidity Adequacy Assessment Process) sind Kernelemente des SREP und bieten erhebliches Potenzial für Innovation und Effizienzsteigerung. ADVISORI unterstützt Sie dabei, diese Prozesse von bürokratischen Pflichtübungen zu wertschöpfenden Steuerungsinstrumenten zu transformieren.\n\n💡 Innovative Ansätze für zukunftsweisende ICAAP/ILAAP-Prozesse:\n• Integrierte Risiko- und Kapitalplanung: Vollständige Integration der ICAAP/ILAAP-Prozesse in die strategische und finanzielle Planung, um Konsistenz zu gewährleisten und Silodenken zu überwinden.\n• Advanced Analytics und Szenario-Erweiterung: Einsatz fortschrittlicher Analysemethoden für differenziertere Stressszenarien, die auch neuartige Risiken wie Klimarisiken, Cyberrisiken und geopolitische Veränderungen berücksichtigen.\n• Real-Time Monitoring: Aufbau von Kapazitäten für eine kontinuierliche, nahezu Echtzeit-Überwachung kritischer Risiko- und Kapitalindikatoren, anstatt sich auf periodische Assessments zu beschränken.\n• Automatisierte Dokumentation und Berichterstattung: Nutzung moderner Dokumentationstools, die regulatorische Änderungen automatisch tracken und Berichtsanforderungen dynamisch anpassen.\n• Kollaborative Validierungsprozesse: Entwicklung interaktiver Formate für die Validierung von ICAAP/ILAAP-Ergebnissen, die Expertise aus verschiedenen Unternehmensbereichen effektiv einbinden.\n\n🔧 ADVISORI's Best Practices für exzellente ICAAP/ILAAP-Prozesse:\n• Strategische Risikotaxonomie: Entwicklung einer umfassenden, aber fokussierten Risikotaxonomie, die alle materiellen Risiken abdeckt und gleichzeitig unnötige Komplexität vermeidet.\n• Differenzierte Methodik-Selektion: Anwendung risikospezifischer, maßgeschneiderter Methoden statt eines One-Size-Fits-All-Ansatzes für verschiedene Risikoarten.\n• Integrierte Datenarchitektur: Aufbau einer einheitlichen Datenbasis für ICAAP, ILAAP und weitere regulatorische Anforderungen, um Konsistenz zu gewährleisten und Doppelarbeit zu vermeiden.\n• Governance durch Ownership: Etablierung klarer Verantwortlichkeiten für jeden Aspekt des ICAAP/ILAAP auf allen Ebenen der Organisation, von der operativen Umsetzung bis zur Vorstandsebene.\n• Evolutionäre Weiterentwicklung: Implementierung eines strukturierten Prozesses zur kontinuierlichen Verbesserung der ICAAP/ILAAP-Methoden und -Prozesse auf Basis von Feedback der Aufsicht, internen Erkenntnissen und regulatorischen Entwicklungen."
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
