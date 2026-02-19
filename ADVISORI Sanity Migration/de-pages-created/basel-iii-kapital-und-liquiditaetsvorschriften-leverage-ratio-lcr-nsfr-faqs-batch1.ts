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
    console.log('Updating Basel III Capital and Liquidity Requirements page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-kapital-und-liquiditaetsvorschriften-leverage-ratio-lcr-nsfr" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können Finanzinstitute die Basel III Kapitalanforderungen strategisch umsetzen, ohne ihre Geschäftsentwicklung zu beeinträchtigen?",
        answer: "Die strategische Umsetzung der Basel III Kapitalanforderungen erfordert einen ausgewogenen Ansatz, der regulatorische Compliance mit nachhaltigen Geschäftsmodellen verbindet. Finanzinstitute stehen vor der Herausforderung, höhere Kapitalquoten zu erfüllen und gleichzeitig wettbewerbsfähig zu bleiben. Ein durchdachtes, ganzheitliches Vorgehen ist der Schlüssel zum Erfolg.\n\n🔍 Strategische Kapitaloptimierung:\n• Granulare Portfolioanalyse: Durchführung detaillierter Untersuchungen zur Identifikation von RWA-intensiven Geschäftsbereichen und Entwicklung gezielter Optimierungsstrategien für jeden Bereich.\n• Kapitalallokationsrahmen: Implementierung eines risikoadjustierten Kapitalallokationsmodells, das Eigenkapitalrendite (RoE) mit regulatorischen Anforderungen in Einklang bringt und eine transparente Bepreisung ermöglicht.\n• Bilanzstrukturmanagement: Entwicklung einer aktiven Bilanzsteuerung, die sowohl Leverage Ratio als auch risikogewichtete Kapitalquoten optimiert, etwa durch selektiven Abbau von Niedrigmargenpositionen.\n• Kapitalinstrumente-Mix: Diversifizierung der Kapitalquellen durch strategischen Einsatz von CET1, AT1 und Tier 2-Instrumenten unter Berücksichtigung von Kosten- und Verfügbarkeitsaspekten.\n\n📊 Geschäftsmodell-Transformation:\n• Produkt- und Preisanpassungen: Neugestaltung von Produkten und Preismodellen unter Berücksichtigung ihrer regulatorischen Kapitalkosten, um Rentabilität trotz höherer Kapitalanforderungen zu gewährleisten.\n• Geschäftsfelddiversifikation: Strategische Verlagerung zu kapitaleffizienten Geschäftsfeldern wie gebührenbasierten Dienstleistungen, die geringere Eigenkapitalunterlegung erfordern.\n• Operative Effizienzsteigerung: Implementierung von Kostensenkungsprogrammen und Prozessoptimierungen, um Margenrückgänge durch höhere Kapitalkosten auszugleichen.\n• Digitale Transformation: Nutzung digitaler Technologien zur Reduzierung operativer Kosten und Verbesserung der Kapitaleffizienz durch datengetriebene Entscheidungsprozesse.\n\n🛠️ Implementierungsansatz:\n• Integrierte Planungsprozesse: Verankerung der Kapitalplanung in strategische Entscheidungsprozesse mit regelmäßigen Stresstests und Szenarioanalysen.\n• Governance-Strukturen: Etablierung klarer Verantwortlichkeiten und Anreizsysteme für das Management von regulatorischem Kapital auf allen Ebenen des Instituts.\n• Dateninfrastruktur: Aufbau robuster Datenarchitekturen, die eine präzise Messung, Allokation und Berichterstattung von regulatorischem Kapital ermöglichen.\n• Kontinuierliches Monitoring: Einrichtung von Frühwarnsystemen und Dashboards zur proaktiven Steuerung der Kapitalquoten und rechtzeitigen Identifikation von Handlungsbedarf."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche praktischen Herausforderungen treten bei der Implementierung der Liquidity Coverage Ratio (LCR) auf und wie können diese effektiv bewältigt werden?",
        answer: "Die Implementierung der Liquidity Coverage Ratio (LCR) stellt Finanzinstitute vor vielschichtige praktische Herausforderungen, die sowohl operative als auch strategische Dimensionen umfassen. Eine erfolgreiche LCR-Umsetzung erfordert einen systematischen Ansatz, der diese Komplexitäten adressiert und in effiziente Liquiditätsmanagementprozesse überführt.\n\n💧 Kernherausforderungen bei der LCR-Implementierung:\n• Datenqualität und -granularität: Die präzise Klassifizierung von Aktiva nach ihrer Liquiditätsqualität (HQLA Level 1, 2A, 2B) und die Berechnung von Netto-Liquiditätsabflüssen erfordern detaillierte, konsistente Daten aus verschiedenen Systemen und Geschäftsbereichen.\n• Dynamische Cash-Flow-Modellierung: Die Prognose von Liquiditätszu- und -abflüssen unter Stressszenarien über einen 30-Tage-Horizont erfordert komplexe Modelle, die das tatsächliche Kundenverhalten realistisch abbilden.\n• Operative Umsetzung: Die Integration der LCR in tägliche Treasury-Prozesse, Limitsysteme und das Liquiditätsrisikomanagement erfordert signifikante Anpassungen bestehender Prozesse und Systeme.\n• Geschäftsmodellimplikationen: Die Notwendigkeit, einen ausreichenden Bestand an hochliquiden Aktiva zu halten, kann die Profitabilität beeinträchtigen und erfordert Anpassungen der Bilanzstruktur und Geschäftsstrategie.\n\n🔄 Lösungsansätze für eine effektive LCR-Steuerung:\n• Integrierte Datenarchitektur: Implementierung einer zentralen Liquiditätsdatenplattform, die Informationen aus verschiedenen Quellsystemen konsolidiert und harmonisiert, mit automatisierten Qualitätskontrollen und Validierungsregeln.\n• Erweiterte Analysekapazitäten: Entwicklung fortschrittlicher Prognosemodelle, die historische Daten, Marktindikatoren und Verhaltensanalysen kombinieren, um realistische Stressszenarien für Liquiditätsströme zu simulieren.\n• Granulares Liquiditätsreporting: Etablierung eines mehrdimensionalen Reportingsystems, das LCR auf verschiedenen Ebenen (Gesamtbank, Geschäftsbereiche, Währungen, juristische Einheiten) mit Drill-down-Funktionalitäten darstellt.\n• Intraday-Liquiditätsmanagement: Integration der LCR-Steuerung mit dem Intraday-Liquiditätsmanagement, um Schwankungen im Tagesverlauf zu überwachen und proaktiv zu steuern.\n\n⚙️ Operative Exzellenz im LCR-Management:\n• Treasury-Transformation: Neugestaltung der Treasury-Funktion mit klaren Verantwortlichkeiten für aktives LCR-Management, unterstützt durch automatisierte Workflows und Entscheidungsunterstützungssysteme.\n• Liquiditätstransferpreissystem (LTP): Implementierung eines LTP-Systems, das die LCR-Kosten transparent auf Produkte und Geschäftsbereiche allokiert und Anreize für liquiditätsschonendes Geschäftsverhalten schafft.\n• Frühwarnindikatoren: Etablierung eines Frühwarnsystems mit klar definierten Schwellenwerten und Eskalationsprozessen, um potenzielle LCR-Verschlechterungen frühzeitig zu erkennen.\n• Technologische Unterstützung: Nutzung moderner Technologien wie Echtzeit-Analytics und KI-gestützte Prognoseverfahren zur Verbesserung der Genauigkeit und Effizienz des LCR-Managements."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche Wechselwirkungen bestehen zwischen der Leverage Ratio und den risikogewichteten Kapitalquoten, und wie können Banken diese Anforderungen ausbalancieren?",
        answer: "Die simultane Einhaltung der Leverage Ratio und der risikogewichteten Kapitalquoten stellt für Banken eine komplexe Balanceaufgabe dar, da beide Kennzahlen unterschiedliche aufsichtsrechtliche Perspektiven repräsentieren und teilweise gegenläufige Optimierungsansätze erfordern. Ein fundiertes Verständnis ihrer Wechselwirkungen ist essentiell für eine effektive Kapitalsteuerung.\n\n⚖️ Fundamentale Wechselwirkungen und Spannungsfelder:\n• Unterschiedliche Risikoberücksichtigung: Während risikogewichtete Quoten (CET1, Tier 1, Gesamtkapitalquote) Risikodifferenzierung durch RWA-Gewichtung ermöglichen, fungiert die Leverage Ratio als ungewichtete Backstop-Kennzahl ohne Risikosensitivität.\n• Bindende Beschränkung: Je nach Geschäftsmodell und Portfoliozusammensetzung kann entweder die Leverage Ratio oder die risikogewichtete Quote als bindende Beschränkung wirken, was unterschiedliche Optimierungsstrategien erfordert.\n• Regulatorische Arbitrage: Die Leverage Ratio wurde eingeführt, um Schwächen der risikobasierten Quoten auszugleichen und RWA-Optimierungen ohne entsprechende Risikoreduktion zu begrenzen.\n• Prozyklische Effekte: In Krisenzeiten können sich die Wechselwirkungen verstärken, wenn Banken gleichzeitig beide Quoten verbessern müssen, was zu simultanen Bilanzreduktionen führen kann.\n\n🔄 Strategische Balancierungsansätze:\n• Portfoliooptimierung mit dualer Perspektive: Entwicklung von Steuerungsmodellen, die simultan die Auswirkungen von Geschäftsentscheidungen auf beide Kennzahlen bewerten und visualisieren.\n• Strategische Kapitalplanung: Aufbau von Kapitalpuffern, die beide Anforderungen berücksichtigen, mit besonderem Fokus auf qualitativ hochwertiges Kernkapital (CET1), das sowohl für die Leverage Ratio als auch für risikogewichtete Quoten anrechenbar ist.\n• Bilanzstrukturmanagement: Gezielte Steuerung der Bilanzkomposition, um ein optimales Verhältnis zwischen Bilanzsumme und risikogewichteten Aktiva zu erreichen, etwa durch Fokus auf niedrig risikogewichtete, aber ertragsstarke Geschäftsfelder.\n• Absicherungsstrategien: Implementierung von Hedging-Strategien, die RWA reduzieren, ohne die Bilanzsumme substanziell zu erhöhen, etwa durch Netting-Vereinbarungen und zentrale Clearing-Arrangements.\n\n📊 Operationalisierung einer integrierten Steuerung:\n• Mehrdimensionale Limitsysteme: Etablierung von Limitstrukturen, die sowohl Leverage- als auch RWA-basierte Grenzen auf verschiedenen Organisationsebenen definieren und überwachen.\n• Integrierte Planungs- und Simulationstools: Entwicklung fortschrittlicher Analysetools, die Szenarioanalysen und Stresstests für beide Kennzahlen ermöglichen und Wechselwirkungen transparent machen.\n• Angepasste Anreizsysteme: Gestaltung von Performance-Metriken und Vergütungssystemen, die beide Kapitalquoten berücksichtigen und Managementhandeln entsprechend ausrichten.\n• Regulatorischer Dialog: Proaktive Kommunikation mit Aufsichtsbehörden über die spezifischen Herausforderungen des Geschäftsmodells hinsichtlich der simultanen Erfüllung beider Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie kann die Net Stable Funding Ratio (NSFR) zur Stärkung der langfristigen Finanzierungsstruktur und Stressresilienz von Banken beitragen?",
        answer: "Die Net Stable Funding Ratio (NSFR) wurde als komplementäres Element zu den kurzfristigen Liquiditätsanforderungen konzipiert und adressiert strukturelle Finanzierungsrisiken, indem sie Banken zu einer nachhaltigeren, längerfristigen Refinanzierung ihrer Aktivitäten verpflichtet. Ihre konsequente Implementierung trägt maßgeblich zur Stärkung der Finanzstabilität und individuellen Bankresilienz bei.\n\n🏗️ Fundamentale Beiträge der NSFR zur Finanzstabilität:\n• Reduktion von Fristentransformationsrisiken: Die NSFR limitiert übermäßige Fristentransformation, indem sie eine Mindestquote stabiler Finanzierung relativ zu langfristigen Aktiva vorschreibt und damit Abhängigkeiten von kurzfristigen, volatilen Finanzierungsquellen reduziert.\n• Förderung nachhaltiger Geschäftsmodelle: Durch die Anforderung einer ausgewogenen Finanzierungsstruktur werden Geschäftsmodelle mit extremer Fristentransformation oder übermäßiger Abhängigkeit von Wholesale-Finanzierung unattraktiver.\n• Systemische Risikominderung: Die NSFR verringert das Risiko simultaner Marktanspannungen durch kollektive Refinanzierungsbedarfe, indem sie eine bessere Verteilung von Fälligkeitsprofilen im Bankensystem fördert.\n• Komplementarität zur LCR: Während die LCR kurzfristige Liquiditätsrisiken (30 Tage) adressiert, fokussiert die NSFR auf längerfristige strukturelle Ungleichgewichte, wodurch ein umfassender Liquiditätsrisikoschutz entsteht.\n\n🔄 Transformative Auswirkungen auf die Banksteuerung:\n• Strategische Finanzierungsplanung: Die NSFR erfordert eine vorausschauende, langfristig orientierte Refinanzierungsstrategie mit diversifizierten Finanzierungsquellen und gestaffelten Fälligkeitsprofilen.\n• Produkt- und Bilanzgestaltung: Förderung von Produktinnovationen, die stabile Finanzierungsquellen erschließen (z.B. langfristige Einlagenprodukte) und Anpassung der Aktivseite hinsichtlich Laufzeit und Liquidierbarkeit.\n• Asset-Liability-Management (ALM): Integration der NSFR in ALM-Strategien, was zu einer bewussteren Steuerung der Interdependenzen zwischen Aktiv- und Passivgeschäft führt.\n• Pricing und Kapitalallokation: Internalisierung der Kosten für stabile Finanzierung in Produkt- und Kundenpreismodellen, was zu einer risikoadäquateren Bepreisung führt.\n\n🛡️ Konkrete Resilienzsteigerungen durch NSFR-Compliance:\n• Verbesserte Stressresistenz: Eine ausgewogene Finanzierungsstruktur erhöht die Widerstandsfähigkeit gegenüber prolongierten Marktstresssituationen, in denen kurzfristige Refinanzierungsquellen eingeschränkt sind.\n• Reduktion von Notverkaufsrisiken: Durch die Anforderung stabiler Finanzierung für illiquide Aktiva wird das Risiko von Notverkäufen in Stresssituationen reduziert, was Marktpreisverzerrungen und Ansteckungseffekte minimiert.\n• Erhöhte Investorensicherheit: Eine nachhaltige Finanzierungsstruktur stärkt das Vertrauen von Investoren und Einlegern, was wiederum die Finanzierungsstabilität selbstverstärkend verbessert.\n• Strategische Flexibilität: Eine solide NSFR-Position eröffnet strategische Handlungsoptionen, etwa die Fähigkeit, in Stresszeiten opportunistisch Marktchancen zu nutzen, während Wettbewerber mit fragiler Finanzierungsstruktur eingeschränkt sind."
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
