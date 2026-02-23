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
    console.log('Updating Basel III Einführung neuer Kennzahlen page with FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-einfuehrung-neuer-kennzahlen-countercyclical-buffer-etc" not found')
    }
    
    // Create new FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie lassen sich die Auswirkungen der Basel III Kennzahlen auf das Geschäftsmodell einer Bank quantifizieren und wie unterstützt ADVISORI bei der strategischen Neuausrichtung?",
        answer: "Die Einführung der Basel III Kennzahlen hat tiefgreifende Auswirkungen auf das Geschäftsmodell von Banken. Diese Auswirkungen sind quantifizierbar und erlauben eine datenbasierte strategische Neuausrichtung, die regulatorische Anforderungen erfüllt und gleichzeitig die Profitabilität sichert. ADVISORI unterstützt Banken mit einer strukturierten Methodik zur Quantifizierung dieser Auswirkungen und bei der darauf aufbauenden strategischen Transformation.\n\n📊 Quantifizierung der Auswirkungen auf das Geschäftsmodell:\n• Produktspezifische RWA-Effizienz: Detaillierte Analyse der Kapitalintensität verschiedener Produkte und Geschäftsfelder unter den neuen Kennzahlen mit Identifikation von Produkten, die überproportional hohe Kapitalkosten verursachen.\n• Liquiditätskostenallokation: Präzise Zuordnung der Kosten für die Erfüllung von LCR und NSFR zu spezifischen Geschäftsbereichen und Kundengruppen, um versteckte Quersubventionen aufzudecken.\n• Sensitivitätsanalyse der Profitabilität: Berechnung der Auswirkungen verschiedener Basel III Kennzahlen auf die Rentabilität einzelner Geschäftsfelder, Produkte und Kundenbeziehungen unter verschiedenen Szenarien.\n• Kapitalallokations-Simulation: Modellierung der optimalen Kapitalallokation unter Berücksichtigung aller regulatorischen Kennzahlen, Geschäftsziele und Marktbedingungen.\n\n🔄 ADVISORIs Ansatz zur strategischen Neuausrichtung:\n• Geschäftsmodell-Diagnose: Umfassende Analyse Ihres aktuellen Geschäftsmodells im Hinblick auf die Sensitivität gegenüber allen Basel III Kennzahlen und Identifikation von Anpassungsbedarfen.\n• Portfolio-Optimierung: Entwicklung von Strategien zur Anpassung des Produkt- und Kundenportfolios mit dem Ziel, die regulatorische Effizienz zu maximieren ohne strategische Ziele zu kompromittieren.\n• Preismodell-Transformation: Überarbeitung der Preismodelle unter Berücksichtigung der regulatorischen Kosten, um eine angemessene Rendite auf das regulatorisch gebundene Kapital sicherzustellen.\n• Organisatorische Neuausrichtung: Unterstützung bei der Anpassung von Steuerungsprozessen, Anreizsystemen und organisatorischen Strukturen, um die effiziente Einhaltung aller Basel III Kennzahlen zu fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche technologischen Innovationen können die Implementierung und kontinuierliche Überwachung von Basel III Kennzahlen revolutionieren, und wie setzt ADVISORI diese ein?",
        answer: "Die Implementierung und kontinuierliche Überwachung der Basel III Kennzahlen stellt Banken vor komplexe technologische Herausforderungen. Moderne Technologien und innovative Ansätze können diesen Prozess jedoch revolutionieren, indem sie Effizienz, Genauigkeit und strategischen Mehrwert erheblich steigern. ADVISORI integriert führende technologische Innovationen in seine Beratungsansätze, um Ihnen einen Wettbewerbsvorteil zu verschaffen.\n\n🚀 Transformative Technologien für Basel III Kennzahlen:\n• KI und Machine Learning: Fortschrittliche Algorithmen ermöglichen die Erkennung komplexer Muster in Bankdaten, die automatisierte Klassifizierung von Finanzinstrumenten für regulatorische Zwecke und die Vorhersage von Kennzahlenentwicklungen unter verschiedenen Szenarien.\n• Echtzeit-Datenverarbeitung: Moderne In-Memory-Datenbanken und Stream-Processing-Technologien ermöglichen die kontinuierliche Berechnung regulatorischer Kennzahlen in nahezu Echtzeit, was proaktive Steuerungsmaßnahmen und unmittelbares Feedback zu Geschäftsentscheidungen ermöglicht.\n• Distributed Ledger Technology: Blockchain-basierte Lösungen können die Datenintegrität in regulatorischen Prozessen sicherstellen, Compliance-Nachweise unveränderbar dokumentieren und die Transparenz in komplexen Berechnungen erhöhen.\n• Cloud-native Microservices: Flexible, skalierbare Architekturen ermöglichen die agile Anpassung an sich ändernde regulatorische Anforderungen und die kostengünstige Verarbeitung komplexer Berechnungen.\n\n💻 ADVISORIs technologiegestützter Implementierungsansatz:\n• Digital Twin für regulatorische Kennzahlen: Entwicklung eines digitalen Abbilds Ihrer Bank, das die Auswirkungen von Geschäftsentscheidungen auf alle Basel III Kennzahlen in Echtzeit simulieren kann.\n• Regulatory-as-Code: Implementierung regulatorischer Anforderungen als ausführbaren Code, der automatisch auf Änderungen in der Regulierung aktualisiert werden kann und vollständige Nachvollziehbarkeit bietet.\n• Intelligente Automatisierung: Einsatz von Robotic Process Automation (RPA) in Kombination mit KI für die Automatisierung komplexer regulatorischer Prozesse, von der Datenextraktion bis zur Validierung und Berichterstattung.\n• Integrierte Datenplattform: Etablierung einer einheitlichen Datenplattform für alle regulatorischen Kennzahlen, die Dateninkonsistenzen eliminiert und Single-Source-of-Truth für alle regulatorischen Berechnungen bietet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann die Implementierung neuer Basel III Kennzahlen als Katalysator für eine umfassende digitale Transformation des Risikomanagements genutzt werden?",
        answer: "Die Implementierung neuer Basel III Kennzahlen wird oft als isolierte regulatorische Übung betrachtet. Vorausschauende Institute erkennen jedoch die Chance, diese Anforderung als strategischen Katalysator für eine umfassende digitale Transformation ihres Risikomanagements zu nutzen. Diese transformative Perspektive erschließt erhebliche langfristige Wertpotenziale, die weit über die reine Compliance hinausgehen.\n\n🔄 Basel III als Transformationskatalysator:\n• Datenfundament für intelligentes Risikomanagement: Die für Basel III erforderliche Dateninfrastruktur kann als Grundlage für ein vollständig datengetriebenes Risikomanagement dienen, das präzisere Risikoeinschätzungen, proaktive Früherkennung und granulare Steuerung ermöglicht.\n• Automatisierung von Risikoprozessen: Die Automatisierung von Berechnungen für Basel III Kennzahlen kann als Blaupause für die End-to-End-Automatisierung weiterer Risikoprozesse dienen, was Effizienz steigert, manuelle Fehler reduziert und Ressourcen für wertschöpfende Aktivitäten freisetzt.\n• Integration von Silos: Die notwendige bereichsübergreifende Zusammenarbeit bei der Implementierung neuer Kennzahlen bietet die Gelegenheit, historisch gewachsene Silos zwischen Markt, Kredit- und Liquiditätsrisiko sowie zwischen Risiko und Finanzen aufzubrechen.\n• Modernisierung der Risikoarchitektur: Die Implementierung neuer Kennzahlen rechtfertigt Investitionen in eine moderne, zukunftssichere Risikoarchitektur, die flexibel auf künftige regulatorische und geschäftliche Anforderungen reagieren kann.\n\n🛠️ ADVISORIs transformativer Implementierungsansatz:\n• Ganzheitliche Transformation Roadmap: Entwicklung einer integrierten Roadmap, die die Basel III Implementierung als Schlüsselelement einer umfassenderen digitalen Transformation des Risikomanagements positioniert.\n• Aufbau einer Risk Data Factory: Etablierung einer modernen Datenplattform, die als zentrale Drehscheibe für alle Risikoarten dient und sowohl regulatorische als auch interne Steuerungsanforderungen abdeckt.\n• Implementierung eines Digital Risk Cockpits: Entwicklung einer integrierten Visualisierungs- und Steuerungsplattform, die alle Basel III Kennzahlen mit weiteren Risikokennzahlen verknüpft und ein holistisches Risikobild vermittelt.\n• Agile Transformation des Risikomanagements: Begleitung der organisatorischen Transformation hin zu agilen, cross-funktionalen Teams, die regulatorische und geschäftliche Risikomanagementaufgaben integriert bearbeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute die zunehmenden Wechselwirkungen zwischen den verschiedenen Basel III Kennzahlen optimal managen, und welche spezifischen Tools bietet ADVISORI dafür?",
        answer: "Die verschiedenen Basel III Kennzahlen wurden nicht isoliert konzipiert, sondern bilden ein komplexes Netzwerk mit vielschichtigen Wechselwirkungen. Diese Interdependenzen können sowohl Herausforderungen als auch strategische Chancen darstellen. Ein optimales Management dieser Wechselwirkungen ist entscheidend für eine effiziente Compliance und die Maximierung der Eigenkapitalrendite. ADVISORI bietet spezialisierte Tools und Methoden, um diese Komplexität zu beherrschen und in einen Wettbewerbsvorteil zu verwandeln.\n\n🔄 Zentrale Wechselwirkungen zwischen Basel III Kennzahlen:\n• Kapital- vs. Liquiditätsoptimierung: Maßnahmen zur Optimierung der Kapitalquoten (z.B. Verbriefungen, Kreditrisikoabsicherungen) können negative Auswirkungen auf Liquiditätskennzahlen haben und umgekehrt, was ein sorgfältiges Abwägen erfordert.\n• Leverage Ratio als Bindungsrestriktion: Bei bestimmten Geschäftsmodellen kann die Leverage Ratio zur bindenden Restriktion werden, was die Optimierung risikogewichteter Aktiva weniger relevant macht und alternative Strategien erfordert.\n• Dynamische Zeiteffekte: Änderungen im Countercyclical Buffer haben zeitverzögerte Auswirkungen auf andere Kennzahlen und erfordern vorausschauende Planung über mehrere Zeitperioden.\n• Wechselwirkungen mit MREL/TLAC: Die Anforderungen an bail-in-fähige Verbindlichkeiten interagieren mit den Basel III Kennzahlen und müssen in die Gesamtoptimierung einbezogen werden.\n\n🧰 ADVISORIs spezialisierte Tools für das Management von Wechselwirkungen:\n• Multi-Constraint Optimization Engine: Ein fortschrittliches Optimierungsmodell, das simultane Einschränkungen durch verschiedene Basel III Kennzahlen berücksichtigt und optimale Geschäftsstrategien unter multiplen regulatorischen Constraints identifiziert.\n• Regulatory Impact Matrix: Ein strukturiertes Framework zur systematischen Analyse und Quantifizierung der Wechselwirkungen zwischen verschiedenen regulatorischen Kennzahlen für spezifische Geschäftstransaktionen und Portfolioentscheidungen.\n• Scenario-Based Stress Testing Suite: Eine umfassende Stress-Testing-Lösung, die die simultanen Auswirkungen von Stressszenarien auf alle relevanten Basel III Kennzahlen modelliert und kritische Vulnerabilitäten identifiziert.\n• Dynamic Regulatory Dashboard: Ein interaktives Management-Tool, das Entscheidungsträgern ermöglicht, die Auswirkungen strategischer Optionen auf alle relevanten Kennzahlen in Echtzeit zu visualisieren und zu bewerten."
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
    console.log('✅ FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
