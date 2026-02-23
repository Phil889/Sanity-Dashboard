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
    console.log('Updating CRR/CRD Risikosteuerung & Validierung page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-risikosteuerung-validierung' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-risikosteuerung-validierung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche strategischen Vorteile bietet eine fortschrittliche Risikosteuerung über die bloße CRR/CRD-Compliance hinaus für die Geschäftsleitung?",
        answer: "Die moderne Risikosteuerung im CRR/CRD-Kontext hat sich weit über den Status einer reinen Compliance-Übung hinaus entwickelt und stellt heute einen strategischen Werttreiber dar. Für die Führungsebene erschließt eine fortschrittliche Risikosteuerung substanzielle Wettbewerbsvorteile und schafft nachhaltigen Unternehmenswert jenseits der bloßen Erfüllung regulatorischer Mindestanforderungen.\n\n🔍 Strategischer Mehrwert einer fortschrittlichen Risikosteuerung:\n• Präzisere Kapitalallokation: Durch verfeinerte Risikomodelle wird Kapital exakter dort eingesetzt, wo es die höchste risikoadjustierte Rendite erzielt, was die Gesamtkapitalrentabilität signifikant steigert.\n• Strategische Geschäftsfeldsteuerung: Risikometriken ermöglichen eine fundierte Bewertung der Performance verschiedener Geschäftsfelder und unterstützen strategische Make-or-Buy-Entscheidungen sowie Portfolio-Optimierungen.\n• Wettbewerbsvorteile bei Preisgestaltung: Präzisere Risikokosten-Kalkulation erlaubt eine wettbewerbsfähigere Preisgestaltung in Märkten mit hohen Margen und die Vermeidung unprofitabler Geschäfte in Niedrigmargensegmenten.\n• Frühwarnfunktion für emergente Risiken: Advanced-Analytics-Verfahren identifizieren Veränderungen im Risikoprofil frühzeitig und ermöglichen proaktives Management vor der Materialisation von Verlusten.\n\n💡 Transformative Ansätze im modernen Risikomanagement:\n• Integration von Risiko- und Strategieprozessen: Risikoüberlegungen werden unmittelbar in die strategische Planung und Geschäftsfeldentwicklung eingebettet, nicht nachgelagert betrachtet.\n• Datengetriebene Risikokultur: Etablierung einer unternehmensweiten Kultur, die Risikotransparenz fördert und Daten als Grundlage für Entscheidungsfindung auf allen Ebenen nutzt.\n• Technologische Innovation: Einsatz von KI und maschinellem Lernen für prädiktive Risikoanalysen, die komplexe Muster und Korrelationen erkennen, die mit traditionellen Methoden verborgen bleiben.\n• Agile Governance-Strukturen: Implementierung flexibler Governance-Rahmen, die sowohl regulatorische Robustheit als auch geschäftliche Agilität gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir sicherstellen, dass unsere Modellvalidierungsprozesse nicht nur regulatorischen Anforderungen genügen, sondern auch realen geschäftlichen Mehrwert schaffen?",
        answer: "Die Transformation von Modellvalidierung von einer Compliance-Pflichtübung zu einem strategischen Werttreiber erfordert einen paradigmatischen Wandel im Denken und in der Umsetzung. Eine zukunftsorientierte Modellvalidierung erschließt Potenziale weit über regulatorische Anforderungen hinaus und wird zum Katalysator für geschäftliche Exzellenz.\n\n🔄 Neukonzeption der Modellvalidierung als Wertschöpfungsprozess:\n• Geschäftsorientierte Validierungskriterien: Erweitern Sie Ihre Validierungsmetriken über regulatorische Kennzahlen hinaus um geschäftsspezifische KPIs wie Kundenakquisitionskosten, Cross-Selling-Potenziale oder Lifetime-Value-Prognosen.\n• Komparative Modellanalyse: Evaluieren Sie alternative Modellansätze nicht nur nach statistischer Genauigkeit, sondern nach ihrem Beitrag zur Geschäftsstrategie und operativen Effizienz.\n• Szenariobasierte Stress-Tests: Entwickeln Sie maßgeschneiderte Szenarien, die nicht nur regulatorisch geforderte Extremsituationen abbilden, sondern auch realistischere, geschäftsrelevante Marktverwerfungen simulieren.\n• Kontinuierliches Modell-Monitoring: Implementieren Sie Echtzeit-Dashboards, die Modellperformance mit direkten Geschäftskennzahlen korrelieren und frühzeitige Anpassungen ermöglichen.\n\n🚀 Praktische Implementierungsstrategien für wertschöpfende Validierung:\n• Cross-funktionale Validierungsteams: Integrieren Sie Fachexperten aus dem Business direkt in Validierungsprozesse, um Modellresultate aus Geschäftsperspektive zu interpretieren.\n• Feedback-Schleifen zu Produktentwicklung: Etablieren Sie formale Prozesse, wie Validierungserkenntnisse direkt in Produktinnovationen und -verbesserungen einfließen.\n• Entwicklung von Challenger-Modellen: Fördern Sie die parallele Entwicklung alternativer Modellansätze, die unterschiedliche methodische Stärken kombinieren können.\n• Validierung als Innovations-Inkubator: Positionieren Sie das Validierungsteam als Innovationstreiber, der neue analytische Ansätze pilotiert und deren Anwendbarkeit für das Kerngeschäft bewertet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche konkreten Schritte sollten wir unternehmen, um unsere internen Modelle für Markt-, Kredit- und operationelle Risiken CRR/CRD-konform zu validieren?",
        answer: "Die konforme Validierung interner Modelle für die Risikomessung und -steuerung unter CRR/CRD erfordert einen strukturierten, umfassenden Ansatz, der sowohl quantitative Rigidität als auch qualitative Tiefe vereint. Eine methodisch fundierte Validierung schafft nicht nur Compliance, sondern optimiert die Modellleistung und stärkt das Vertrauen von Aufsichtsbehörden und Management.\n\n📊 Systematischer Validierungsprozess für interne Modelle:\n• Unabhängigkeitsstruktur etablieren: Schaffen Sie eine organisatorisch unabhängige Validierungsfunktion mit direkter Berichtslinie an den CRO/Vorstand, getrennt von der Modellentwicklung, mit eigenem Budget und Ressourcen.\n• Validierungsstrategie definieren: Entwickeln Sie eine risikobasierte Validierungsstrategie mit klaren Priorisierungskriterien, Validierungsfrequenzen und -tiefen je nach Modellrelevanz und Komplexität.\n• Validierungsrahmenwerk dokumentieren: Formalisieren Sie Validierungsmethoden, Akzeptanzkriterien, Eskalationspfade und Governance-Prozesse in einem umfassenden Framework-Dokument.\n• Modellkartographie erstellen: Inventarisieren Sie alle verwendeten Modelle in einem zentralen Modellregister mit Klassifizierung nach Risikotyp, Verwendungszweck, regulatorischer Relevanz und Materialität.\n\n🔬 Spezifische Validierungstechniken nach Risikotyp:\n• Marktrisikospezifische Validierung: Führen Sie P&L-Attribution-Tests, Backtesting auf verschiedenen Aggregationsebenen, Hypothesentests der VaR-Überschreitungen und Benchmark-Vergleiche mit Standardmodellen durch.\n• Kreditrisikospezifische Validierung: Validieren Sie Ratingmigrationsstabilitäten, Kalibrierung von PD/LGD/EAD-Parametern, Diskriminierungsfähigkeit von Scorecards und die Konsistenz von Downturn-Schätzungen.\n• Validierung operationeller Risiken: Überprüfen Sie die Szenarien-Plausibilität, Validität von Verteilungsannahmen, statistische Sensitivitäten und die Einbindung externer Verlustdaten.\n\n⚙️ Technologische Unterstützung des Validierungsprozesses:\n• Automatisierte Validierungsroutinen: Implementieren Sie automatisierte Scripts für standardisierte Tests, Backtesting und Sensitivitätsanalysen zur Effizienzsteigerung.\n• Validierungsdatenbank: Etablieren Sie eine zentrale Datenbank für Validierungsergebnisse, die historische Vergleiche, Trendanalysen und regulatorisches Reporting unterstützt.\n• Kollaborationsplattformen: Nutzen Sie digitale Workflow-Tools für Validierungsprozesse, um Transparenz, Nachvollziehbarkeit und effizientes Issue-Management zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann ADVISORI uns dabei unterstützen, unsere Risikosteuerungsprozesse zu optimieren und gleichzeitig die Kapitaleffizienz zu verbessern?",
        answer: "ADVISORI bietet einen differenzierten Beratungsansatz, der regulatorische Expertise mit geschäftlicher Transformation verbindet, um Ihre Risikosteuerung zu einem strategischen Wettbewerbsvorteil auszubauen. Unser Ziel ist es, nicht nur Compliance zu sichern, sondern durch optimierte Risikosteuerungsprozesse eine signifikante Steigerung Ihrer Kapitaleffizienz zu erreichen.\n\n🏆 ADVISORI's integrierter Optimierungsansatz:\n• Ganzheitliche Prozessanalyse: Wir führen eine End-to-End-Analyse Ihrer Risikosteuerungsprozesse durch, identifizieren Ineffizienzen, manuelle Brüche und Optimierungspotenziale in der gesamten Risikomanagement-Wertschöpfungskette.\n• Regulatorische Lückenanalyse: Systematische Überprüfung Ihrer bestehenden Prozesse gegen aktuelle und kommende CRR/CRD-Anforderungen, mit besonderem Fokus auf ICAAP/ILAAP-Prozesse und die Stresstesting-Architektur.\n• Benchmark-Vergleich: Positionierung Ihrer Risikosteuerungspraktiken im Vergleich zu Best Practices im Markt und Identifikation spezifischer Verbesserungspotenziale.\n• Technologische Reifegradbestimmung: Bewertung des Digitalisierungs- und Automatisierungsgrads Ihrer Risikosteuerungsprozesse mit konkreten Handlungsempfehlungen zur Effizienzsteigerung.\n\n💸 Ansätze zur Kapitaleffizienzsteigerung:\n• Modellpräzisionsoptimierung: Verfeinerung von Risikomodellen für präzisere Risikoquantifizierung, die Kapitalpuffer reduziert ohne Risikotoleranz zu gefährden.\n• Risikokonzentrationsmanagement: Entwicklung fortschrittlicher Methoden zur Identifikation und Steuerung von Risikokonzentrationen über alle Risikokategorien hinweg.\n• Diversifikationseffekte: Weiterentwicklung von Methoden zur angemessenen Berücksichtigung von Diversifikationseffekten in der Kapitalberechnung innerhalb des regulatorischen Rahmens.\n• RWA-Optimierung: Identifikation konkreter Hebel zur Optimierung risikogewichteter Aktiva durch verbesserte Datenqualität, Sicherheitenbewertung und Exposuremanagement.\n\n📈 ADVISORI's Implementierungsunterstützung:\n• Transformations-Roadmap: Entwicklung einer pragmatischen, priorisierten Umsetzungsroadmap mit Quick Wins und strategischen Initiativen zur nachhaltigen Prozessoptimierung.\n• Change Management: Unterstützung bei der kulturellen Transformation hin zu einer risikobewussten Organisation mit klaren Verantwortlichkeiten und Anreizstrukturen.\n• Technologische Modernisierung: Beratung bei der Auswahl und Implementierung moderner GRC-Tools, Risikoanalyse-Plattformen und automatisierter Reportinglösungen.\n• Wissenstransfer: Gezielte Schulungen und Workshops für Ihre Mitarbeiter zur Befähigung, optimierte Prozesse nachhaltig zu betreiben und weiterzuentwickeln."
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
