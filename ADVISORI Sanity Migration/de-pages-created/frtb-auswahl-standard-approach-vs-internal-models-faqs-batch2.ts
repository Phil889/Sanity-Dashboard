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
    console.log('Updating FRTB Auswahl Standard Approach vs. Internal Models page with FAQs batch 2...')
    
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
        question: "Wie können Finanzinstitute die Kapitalanforderungen unter dem FRTB-Standardansatz optimieren und welche spezifischen Strategien empfiehlt ADVISORI?",
        answer: "Der FRTB-Standardansatz (SA) ist zwar konzeptionell einfacher als der IMA, bietet jedoch zahlreiche Optimierungsmöglichkeiten, die bei gezielter Anwendung erhebliche Kapitalentlastungen ermöglichen können. Ein strategischer Ansatz zur SA-Optimierung kombiniert verschiedene Techniken und berücksichtigt die spezifischen Eigenschaften Ihres Handelsportfolios.\n\n💡 Strategische Optimierungshebel für den FRTB-Standardansatz:\n• Delta-Sensitivitäts-Management: Systematische Analyse und gezielte Optimierung Ihrer Delta-Sensitivitäten innerhalb und zwischen Risikoklassen kann Kapitalanforderungen um 15-25% reduzieren durch Ausnutzung von Netting-Effekten und Minimierung von Basis-Risiko-Aufschlägen.\n• Risikofaktor-Mapping-Optimierung: Präzise Kalibrierung des Mappings von Risikofaktoren auf regulatorische Buckets unter Berücksichtigung der FRTB-Korrelationsstruktur kann signifikante Diversifikationsvorteile erschließen, besonders bei komplexen Multi-Asset-Portfolios.\n• Handelsbuchumstrukturierung: Strategische Reorganisation Ihres Handelsbuchs durch selektive Reallokation von Positionen zwischen Handelsdesks kann die Kapitaleffizienz verbessern und gleichzeitig betriebliche Synergien schaffen.\n• Curvature- und Vega-Risiko-Reduktion: Implementierung gezielter Hedging-Strategien zur Minimierung von Curvature- und Vega-Risiken, die unter FRTB-SA besonders kapitalintensiv sind und bis zu 40% der Gesamtkapitalanforderungen ausmachen können.\n\n🛠️ ADVISORI's spezialisierter Ansatz zur SA-Optimierung:\n• Comprehensive Impact Analysis: Unsere proprietären Simulationsmodelle quantifizieren präzise die Kapitalauswirkungen verschiedener Optimierungsstrategien auf Ebene einzelner Positionen und aggregiert auf Portfolio-Ebene.\n• Portfolio-Optimierungstechniken: Wir setzen fortschrittliche Optimierungsalgorithmen ein, um die optimale Kombination von Positionen und Hedges zu identifizieren, die Ihre Kapitalanforderungen unter FRTB-SA minimiert.\n• Operationale Umsetzungsstrategien: Wir entwickeln pragmatische Implementierungsstrategien, die nicht nur theoretische Kapitaloptimierung, sondern auch praktische Umsetzbarkeit und Governance-Aspekte berücksichtigen.\n• Kontinuierliche Optimierung: Implementierung eines systematischen Monitoring-Prozesses, der die Kapitaleffizienz kontinuierlich überwacht und dynamische Anpassungen ermöglicht, um auf Marktveränderungen und regulatorische Entwicklungen zu reagieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche technischen und methodischen Innovationen erfordert der FRTB Internal Models Approach und wie unterstützt ADVISORI die technische Implementierung?",
        answer: "Der FRTB Internal Models Approach erfordert nicht nur eine Anpassung bestehender Risikomodelle, sondern eine fundamentale technologische und methodische Transformation Ihrer Risikomanagement-Infrastruktur. Die technischen Herausforderungen reichen von extremen Rechenanforderungen über komplexe Datenmanagement-Anforderungen bis hin zu anspruchsvollen Validierungsprozessen, die fortschrittliche analytische Fähigkeiten erfordern.\n\n🖥️ Technologische Herausforderungen und Innovationsfelder:\n• High-Performance Computing: Die Berechnung des Expected Shortfall über multiple Liquiditätshorizonte erfordert eine exponentiell höhere Rechenleistung im Vergleich zu traditionellen VaR-Modellen – mit bis zu 100-fach höherem Rechenaufwand bei komplexen Portfolios.\n• Data Integration und Management: Die strengen Anforderungen an Risikofaktormodellierbarkeit und P&L-Attribution erfordern ein hochgradig integriertes Datenmanagement-Framework, das Markt-, Position- und Bewertungsdaten nahtlos zusammenführt.\n• Parallelisierte Simulationsarchitekturen: Die Implementation skalierbarer, parallelisierter Simulationsarchitekturen ist kritisch, um die rechenintensiven FRTB-Anforderungen innerhalb der engen zeitlichen Rahmenbedingungen des täglichen Risikomanagement-Prozesses zu bewältigen.\n• Advanced Analytics für Modellvalidierung: Die rigorosen Anforderungen an Modellvalidierung und Backtesting erfordern fortschrittliche statistische Analysemethoden und robuste Validierungsframeworks.\n\n🔬 ADVISORI's innovative Lösungsansätze für die IMA-Implementierung:\n• Hybride Cloud-/On-Premise-Architekturen: Wir haben spezialisierte Referenzarchitekturen entwickelt, die Cloud-basierte Rechenressourcen für Spitzenlasten mit On-Premise-Systemen für sensible Berechnungen kombinieren.\n• Intelligente Approximationstechniken: Unsere proprietären Approximationsverfahren reduzieren den Rechenaufwand für die Expected-Shortfall-Berechnung signifikant, während sie gleichzeitig regulatorische Genauigkeitsanforderungen erfüllen.\n• Integrierte Data-Lineage und Governance: Wir implementieren end-to-end Data-Lineage-Systeme, die die vollständige Nachvollziehbarkeit von Marktdaten bis zu Kapitalberechnungen sicherstellen und regulatorische Prüfprozesse unterstützen.\n• Automated Testing und Validation Frameworks: Unsere automatisierten Validierungsframeworks ermöglichen kontinuierliches Monitoring kritischer Modellkomponenten und frühzeitige Identifikation potenzieller Issues."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie wirkt sich die FRTB-Methodenwahl auf die Trading-Desk-Struktur eines Instituts aus und welche Reorganisationsstrategien empfiehlt ADVISORI?",
        answer: "Die FRTB-Methodenwahl – Standardansatz, Internal Models Approach oder eine Hybrid-Strategie – hat tiefgreifende Implikationen für Ihre Trading-Desk-Struktur und erfordert eine strategische Neubewertung und potenzielle Reorganisation Ihrer Handelsaktivitäten. Eine optimal gestaltete Trading-Desk-Struktur kann die Kapitaleffizienz signifikant verbessern, während sie gleichzeitig regulatorische Anforderungen erfüllt und betriebliche Synergien maximiert.\n\n🔄 Strategische Überlegungen zur Trading-Desk-Reorganisation:\n• FRTB-konforme Desk-Definition: Die stringenten FRTB-Anforderungen an Trading-Desk-Definitionen – einschließlich klarer Organisationsstruktur, dedizierter Händler, spezifischer Handelsstrategien und separater P&L-Attribution – erfordern eine grundlegende Neuevaluation Ihrer bestehenden Desk-Struktur.\n• Kapitaloptimierung durch Desk-Reorganisation: Eine strategische Neuorganisation von Handelspositionen zwischen verschiedenen Desks kann erhebliche Kapitalvorteile durch verbesserte Diversifikation und reduzierte Basis-Risiko-Aufschläge erzielen.\n• Modellierbarkeits-zentrierte Strukturierung: Für Institute mit IMA-Ambitionen ist die Strukturierung der Trading Desks mit Fokus auf Risikofaktor-Modellierbarkeit und P&L-Attribution-Performance entscheidend für die erfolgreiche Modellzulassung.\n• Operationale Effizienz vs. Kapitaloptimierung: Die Abwägung zwischen operationaler Effizienz (weniger, breitere Desks) und regulatorischer Kapitaloptimierung (mehr, spezialisierte Desks) ist ein zentrales Element jeder FRTB-Desk-Strategie.\n\n📋 ADVISORI's mehrstufiger Ansatz zur optimalen Desk-Strukturierung:\n• Comprehensive Desk Assessment: Detaillierte Analyse jedes bestehenden Trading Desks hinsichtlich seiner Portfolio-Zusammensetzung, Risikoprofil, P&L-Charakteristik und operationalen Struktur als Basis für die Reorganisationsstrategie.\n• Quantitative Szenario-Simulation: Entwicklung und Evaluation multipler Reorganisationsszenarien mit präziser Quantifizierung der Kapitalauswirkungen jedes Szenarios durch unsere proprietären Simulationsmodelle.\n• IMA-Eligibility-Assessment: Für jedes Reorganisationsszenario führen wir eine detaillierte Bewertung der IMA-Eignung durch, einschließlich Risikofaktor-Modellierbarkeit, P&L-Attribution-Performance und Backtesting-Ergebnissen.\n• Operationale Impact-Analyse: Umfassende Bewertung der operationalen Auswirkungen verschiedener Reorganisationsszenarien, einschließlich IT-Systemen, Prozessen, Berichtswesen und Governance-Strukturen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie können Finanzinstitute die regulatorischen Anforderungen des FRTB-IMA erfüllen und welche spezifischen Validierungsstrategien sind erforderlich?",
        answer: "Die Erfüllung der regulatorischen Anforderungen des FRTB Internal Models Approach (IMA) stellt eine beispiellose Herausforderung dar, die weit über traditionelle Marktrisiko-Modellierungsanforderungen hinausgeht. Ein robusten Validierungsframework ist dabei entscheidend, um die strengen Zulassungskriterien zu erfüllen und nachhaltige Compliance zu gewährleisten.\n\n🔍 Kritische regulatorische Anforderungen und Validierungsherausforderungen:\n• P&L Attribution Test (PLAT): Die verschärften PLAT-Kriterien mit ihren rigorosen statistischen Tests stellen eine fundamentale Herausforderung dar, die eine tiefgreifende Harmonisierung von Front-Office- und Risikobewertungsmethoden erfordert.\n• Risk Factor Eligibility Test (RFET): Die präzise Identifikation und Validierung modellierbarer Risikofaktoren gemäß den stringenten RFET-Kriterien ist entscheidend für die Minimierung von NMRF-Aufschlägen, die bis zu 30% der Gesamtkapitalanforderungen ausmachen können.\n• Backtesting-Anforderungen: Die verschärften Backtesting-Anforderungen mit ihren multiplen Testebenen (VaR vs. Actual P&L, VaR vs. Hypothetical P&L) erfordern robuste statistische Validierungsmethoden und detaillierte Exception-Analysen.\n• Model Risk Management: Die erhöhten Anforderungen an Modellrisikomanagement und -governance erfordern ein umfassendes Framework zur kontinuierlichen Überwachung, Validierung und Dokumentation aller Modellkomponenten.\n\n🛠️ ADVISORI's spezialisierter Ansatz zur IMA-Validierung und Compliance:\n• Integrated PLAT Optimization Framework: Unser proprietäres Framework zur systematischen Verbesserung der PLAT-Performance kombiniert methodische Anpassungen, Datenqualitätsverbesserungen und statistische Optimierungstechniken.\n• RFET Compliance Strategy: Wir haben spezialisierte Methoden zur Optimierung der Risikofaktor-Modellierbarkeit entwickelt, die regulatorische Anforderungen erfüllen und gleichzeitig die Anzahl nicht-modellierbarer Risikofaktoren minimieren.\n• Backtesting Excellence Program: Unser umfassendes Backtesting-Framework umfasst fortschrittliche statistische Analysetechniken, automatisierte Exception-Analysen und proaktive Maßnahmen zur Minimierung von Multiplikator-Erhöhungen.\n• Regulatory Engagement Strategy: Wir unterstützen Sie bei der Entwicklung einer effektiven Strategie für die Interaktion mit Aufsichtsbehörden, einschließlich der Vorbereitung überzeugender Dokumentation und der Antizipation kritischer regulatorischer Fragen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
