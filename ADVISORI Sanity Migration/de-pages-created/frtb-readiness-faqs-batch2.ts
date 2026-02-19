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
    console.log('Updating FRTB Readiness page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: "Wie können wir durch eine proaktive FRTB-Readiness-Bewertung einen strategischen Wettbewerbsvorteil erlangen und welche konkreten Geschäftsvorteile bietet dieser Ansatz?",
        answer: "Eine proaktive FRTB-Readiness-Bewertung ist weit mehr als ein regulatorisches Pflichtprogramm – sie ist ein strategisches Instrument, das Ihrem Institut einen signifikanten Wettbewerbsvorteil verschaffen kann. In einem Umfeld, in dem viele Banken noch reaktiv und minimalistisch auf FRTB reagieren, bietet ein proaktiver, strategischer Ansatz erhebliche Differenzierungschancen und konkrete geschäftliche Vorteile.\n\n🏆 Strategische Wettbewerbsvorteile durch proaktive FRTB-Readiness:\n• Kapitaloptimierung als Wettbewerbsvorteil: Institute, die frühzeitig FRTB-optimierte Handelsstrategien entwickeln, können ihre Kapitalanforderungen signifikant reduzieren (oft 15-25% gegenüber Wettbewerbern) und diesen Vorteil in wettbewerbsfähigere Preise oder höhere Margen übersetzen.\n• First-Mover-Advantage: Während Wettbewerber noch mit grundlegenden Compliance-Fragen kämpfen, können Sie bereits Ihre Handelsstrategie optimieren und neue Marktchancen identifizieren, die durch FRTB-bedingte Marktverschiebungen entstehen.\n• Strategische Portfoliooptimierung: Eine frühe, detaillierte Analyse ermöglicht die strategische Neuausrichtung Ihres Handelsbuchs auf kapitaleffiziente Produkte und Märkte, bevor Wettbewerber ähnliche Anpassungen vornehmen.\n• Attraktivität für Investoren und Rating-Agenturen: Eine nachweislich proaktive und strategische Herangehensweise an FRTB wird von Investoren und Rating-Agenturen zunehmend als Indikator für zukunftsfähiges Risikomanagement und vorausschauende Unternehmensführung gewertet.\n\n💼 Konkrete Geschäftsvorteile eines proaktiven FRTB-Ansatzes:\n• Reduzierte Implementierungskosten: Eine frühzeitige, strukturierte Planung kann die Gesamtkosten der FRTB-Implementierung um 20-30% senken durch Vermeidung von Notfallmaßnahmen, redundanten Systemen und nachträglichen Anpassungen.\n• Optimierte Ressourcenallokation: Ein klarer, priorisierter Implementierungsfahrplan ermöglicht die effiziente Nutzung knapper Ressourcen (IT, Risikomanagement, Fachexperten) und minimiert Störungen des Tagesgeschäfts.\n• Geringere Compliance-Risiken: Die frühzeitige Identifikation und Adressierung potenzieller Compliance-Lücken reduziert das Risiko regulatorischer Sanktionen, unerwarteter Kapitalaufschläge oder Einschränkungen der Handelsaktivitäten.\n• Strategische IT-Transformation: Die FRTB-Readiness-Bewertung kann als Katalysator für eine breitere Modernisierung Ihrer Risiko- und Handelssysteme dienen, die weit über FRTB hinaus strategische Vorteile bietet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie unterstützt ADVISORI bei der Entscheidung zwischen Standardansatz (SA) und Internal Models Approach (IMA) und welche Faktoren sind bei dieser strategischen Weichenstellung zu berücksichtigen?",
        answer: "Die Entscheidung zwischen Standardansatz (SA) und Internal Models Approach (IMA) ist eine der folgenreichsten strategischen Weichenstellungen im FRTB-Kontext. Sie beeinflusst nicht nur Ihre Kapitalanforderungen, sondern auch Ihre operativen Strukturen, IT-Investitionen und langfristige Wettbewerbsposition. ADVISORI unterstützt Sie bei dieser komplexen Entscheidung mit einem strukturierten, datengetriebenen Ansatz.\n\n⚖️ Entscheidungsfaktoren für SA vs. IMA:\n• Kapitaleffizienz: Der IMA kann potenziell zu deutlich niedrigeren Kapitalanforderungen führen (oft 20-40% niedriger als SA), jedoch nur wenn die strengen Validierungskriterien (insbesondere P&L Attribution Test und Backtesting) konsistent erfüllt werden können.\n• Implementierungskomplexität und -kosten: Der IMA erfordert erheblich höhere Investitionen in Dateninfrastruktur, Modellentwicklung, Validierungsprozesse und IT-Systeme, deren ROI sorgfältig gegen die potenziellen Kapitalersparnisse abgewogen werden muss.\n• Granularität der Entscheidung: FRTB erlaubt eine Trading-Desk-spezifische Entscheidung zwischen SA und IMA, was eine differenzierte Strategie ermöglicht, bei der nur für kapitalintensive Desks mit guter Modellierbarkeit der IMA angestrebt wird.\n• Geschäftsmodell-Implikationen: Die Wahl zwischen SA und IMA hat weitreichende Auswirkungen auf Ihre Produktpalette, Handelsstrategie und Wettbewerbspositionierung, insbesondere in komplexen oder illiquiden Märkten.\n\n📊 ADVISORI's methodischer Entscheidungsansatz:\n• Quantitative Impact-Analyse: Durchführung detaillierter Simulationen der Kapitalanforderungen unter SA und IMA auf Desk-Ebene, um die potenziellen Kapitalersparnisse präzise zu quantifizieren.\n• Kosten-Nutzen-Analyse: Entwicklung einer umfassenden Business-Case-Analyse, die Implementierungskosten, laufende Betriebskosten und potenzielle Kapitalersparnisse für verschiedene Implementierungsszenarien gegenüberstellt.\n• Risiko- und Machbarkeitsanalyse: Bewertung der technischen, datenbezogenen und organisatorischen Voraussetzungen für eine erfolgreiche IMA-Implementierung, einschließlich einer Gap-Analyse und Risikobeurteilung.\n• Strategische Roadmap: Entwicklung eines phasenbasierten Implementierungsplans, der einen pragmatischen Weg von SA zu selektivem IMA-Einsatz aufzeigt, mit klaren Meilensteinen und Entscheidungspunkten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche spezifischen Datenhürden stellen die FRTB-Anforderungen dar und wie unterstützt ADVISORI bei deren Überwindung im Rahmen der Readiness-Bewertung?",
        answer: "Die Datenanforderungen unter FRTB gehören zu den anspruchsvollsten Aspekten der Regulierung und stellen für viele Institute eine zentrale Herausforderung dar. Besonders der Internal Models Approach (IMA) setzt neue Maßstäbe hinsichtlich Datenqualität, -granularität und -historisierung. Eine fundierte Bewertung und Strategie zur Überwindung dieser Datenhürden ist daher ein Kernelement jeder effektiven FRTB-Readiness-Bewertung.\n\n🔍 Kritische Datenhürden unter FRTB:\n• Risikofaktor-Modellierbarkeit: Die strengen Kriterien für die Modellierbarkeit von Risikofaktoren (RFET) erfordern nachweisbar \"echte\" Preise mit ausreichender Häufigkeit und Konsistenz – eine Herausforderung besonders für illiquide Märkte und exotische Produkte.\n• Historische Datenreihen: Für den IMA werden lange historische Datenreihen (10+ Jahre für Expected Shortfall, gestresste Perioden) in hoher Qualität und Granularität benötigt – oft weit über das hinaus, was typischerweise verfügbar ist.\n• P&L-Attribution: Die rigorosen Anforderungen an die P&L-Attribution erfordern eine präzise Abstimmung zwischen Front-Office- und Risk-Management-Systemen mit minimalen Abweichungen – was oft fundamentale Datenarchitektur-Probleme aufdeckt.\n• Datengranularität und Hierarchien: FRTB erfordert eine konsistente Datenorganisation über Trading Desks, Risikofaktorklassen und Liquidity Horizons hinweg – oft inkompatibel mit gewachsenen Datenstrukturen.\n\n💡 ADVISORI's umfassender Daten-Readiness-Ansatz:\n• Daten-Gap-Analyse: Systematische Bewertung Ihrer aktuellen Datenverfügbarkeit, -qualität und -prozesse gegenüber den FRTB-Anforderungen, mit klarer Priorisierung der kritischen Lücken.\n• Modellierbarkeitsanalyse: Detaillierte Bewertung Ihrer Risikofaktoren hinsichtlich ihrer Modellierbarkeit unter FRTB und Entwicklung von Strategien zum Umgang mit Non-Modellable Risk Factors (NMRFs).\n• Datenarchitektur-Assessment: Evaluation Ihrer Datenarchitektur und -governance im Hinblick auf FRTB-Anforderungen und Entwicklung eines Zielbilds für eine FRTB-konforme Datenlandschaft.\n• Proxying- und Datenerweiterungsstrategien: Entwicklung pragmatischer Ansätze zur Überbrückung von Datenlücken durch statistische Methoden, Benchmarking und Proxying, unter Berücksichtigung regulatorischer Akzeptanz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie kann eine FRTB-Readiness-Bewertung mit anderen regulatorischen und strategischen Initiativen synchronisiert werden, um Synergien zu maximieren?",
        answer: "Eine isolierte Betrachtung der FRTB-Implementierung verschenkt erhebliches Synergiepotenzial und kann zu fragmentierten, ineffizienten Lösungen führen. Eine strategisch ausgerichtete FRTB-Readiness-Bewertung sollte daher bewusst Verbindungen zu anderen regulatorischen Anforderungen und strategischen Initiativen herstellen, um Investitionen zu optimieren und einen kohärenten Transformationsansatz zu gewährleisten.\n\n🔄 Synergiepotenziale mit anderen regulatorischen Initiativen:\n• BCBS 239 und Datenmanagement: Die Datenanforderungen unter FRTB überschneiden sich signifikant mit den Prinzipien für effektive Risikodatenaggregation (BCBS 239), insbesondere hinsichtlich Datenqualität, -integration und -governance.\n• IBOR-Transition: Die Umstellung von LIBOR auf alternative Referenzzinssätze erfordert ähnliche Änderungen an Bewertungsmodellen, Marktdateninfrastruktur und Risikometriken wie FRTB.\n• Climate Risk und ESG: Die aufkommenden Anforderungen zur Bewertung und Steuerung von Klimarisiken erfordern ähnliche Erweiterungen der Risikomanagementsysteme und Dateninfrastruktur wie FRTB.\n• Basel IV (Kreditrisiko): Die überarbeiteten Ansätze für Kreditrisiko unter Basel IV haben Schnittstellen zu FRTB, insbesondere bei der Behandlung von Kreditspread-Risiken und CVA-Risiken.\n\n🚀 Integration mit strategischen Transformationsinitiativen:\n• Digitalisierung und Prozessautomatisierung: FRTB-bedingte Prozessanpassungen bieten ideale Gelegenheiten zur gleichzeitigen Digitalisierung und Automatisierung manueller Workflows im Risikomanagement.\n• Cloud-Migration: Die rechenintensiven FRTB-Anforderungen können als Katalysator für eine breitere Cloud-Strategie dienen, die Skalierbarkeit und Kosteneffizienz verbessert.\n• KI/ML-Integration: Die Herausforderungen bei der Datenmodellierung unter FRTB (z.B. NMRFs, Stress Scenarios) bieten konkrete Anwendungsfälle für fortschrittliche Analytics und Machine Learning.\n• Target Operating Model: FRTB erfordert eine Neubewertung der Organisation und Governance von Trading und Risikomanagement, die in ein breiteres TOM integriert werden sollte.\n\n🧩 ADVISORI's integrierter Transformationsansatz:\n• Regulatorische Landkarte: Entwicklung einer umfassenden Übersicht aller relevanten regulatorischen Anforderungen und ihrer Interdependenzen, um Überschneidungen und Synergien systematisch zu identifizieren.\n• Capability-basierte Roadmap: Ausrichtung der FRTB-Implementierung an einem übergreifenden Capability-Modell, das die Grundlage für verschiedene regulatorische und strategische Initiativen bildet.\n• Integrated Investment Planning: Entwicklung eines konsolidierten Investitionsplans, der Ressourcen und Budgets über regulatorische Silos hinweg optimiert und Doppelentwicklungen vermeidet.\n• Change-Portfolio-Management: Etablierung eines integrierten Steuerungsansatzes für verschiedene regulatorische und strategische Initiativen, der Abhängigkeiten managt und Ressourcenkonflikte minimiert."
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
