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
    console.log('Updating FRTB Neuausrichtung Handels-Bankbuch-Abgrenzung page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb-neuausrichtung-handels-bankbuch-abgrenzung' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb-neuausrichtung-handels-bankbuch-abgrenzung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Welche technischen und organisatorischen Voraussetzungen müssen für eine erfolgreiche Neuausrichtung der Handels- und Bankbuchabgrenzung geschaffen werden?",
        answer: "Eine erfolgreiche Neuausrichtung der Handels- und Bankbuchabgrenzung unter FRTB erfordert weitreichende technische und organisatorische Anpassungen, die weit über punktuelle Maßnahmen hinausgehen. Es handelt sich um eine ganzheitliche Transformation, die sowohl Ihre IT-Systeme und Datenarchitektur als auch Ihre Organisationsstruktur und Entscheidungsprozesse betrifft.\n\n💻 Technische Voraussetzungen für eine FRTB-konforme Abgrenzung:\n• Integrierte Datenplattform: Entwicklung einer zentralen Datenplattform, die alle relevanten Handelspositionen, deren Eigenschaften und Kennzahlen in einem einheitlichen Format zusammenführt und konsistent hält.\n• Granulares Positionsmanagement: Implementierung von Systemen, die eine hinreichend detaillierte Erfassung und Klassifizierung aller Positionen gemäß den FRTB-Kriterien ermöglichen.\n• Automatisierte Kontrollmechanismen: Entwicklung technischer Kontrollen, die eine unbeabsichtigte oder unautorisierte Reklassifizierung von Positionen zwischen Handels- und Bankbuch verhindern.\n• Leistungsfähige Reporting-Infrastruktur: Etablierung einer flexiblen, leistungsfähigen Reporting-Lösung für die kontinuierliche Überwachung und Dokumentation der Handels-Bankbuch-Abgrenzung.\n\n🏢 Organisatorische Voraussetzungen für nachhaltige Compliance:\n• Klare Verantwortlichkeiten: Etablierung eindeutiger Rollen und Verantwortlichkeiten für die Klassifikation von Instrumenten und die Überwachung der Abgrenzung.\n• Interdisziplinäre Governance-Strukturen: Schaffung funktionsübergreifender Gremien mit Vertretern aus Handel, Risikomanagement, Finanzen und Compliance für konsistente Entscheidungsfindung.\n• Umfassendes Schulungsprogramm: Entwicklung und Durchführung gezielter Schulungen für alle relevanten Mitarbeiter, um ein tiefgreifendes Verständnis der FRTB-Abgrenzungskriterien zu schaffen.\n• Angepasste Anreizsysteme: Überprüfung und Anpassung von Vergütungs- und Anreizsystemen, um unerwünschte Anreize für regulatorische Arbitrage zu vermeiden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche typischen Fallstricke und Herausforderungen treten bei der FRTB-konformen Neugestaltung der Handels- und Bankbuchabgrenzung auf und wie hilft ADVISORI, diese zu überwinden?",
        answer: "Die Neugestaltung der Handels- und Bankbuchabgrenzung unter FRTB birgt zahlreiche komplexe Herausforderungen und potenzielle Fallstricke, die ohne fundierte Expertise und strukturierte Herangehensweise zu erheblichen regulatorischen und wirtschaftlichen Risiken führen können. Unsere umfangreiche Projekterfahrung hat uns einen einzigartigen Einblick in diese Herausforderungen gegeben und spezifische Lösungsansätze hervorgebracht.\n\n⚠️ Kritische Fallstricke und Herausforderungen:\n• Komplexe Übergangsszenarien: Die Umstellung auf die neuen Abgrenzungskriterien kann zu komplexen Übergangssituationen führen, insbesondere bei der Behandlung bestehender Positionen und laufender Handelsstrategien.\n• Datenqualitäts- und Verfügbarkeitsprobleme: Häufig fehlen kritische Datenattribute, die für eine präzise Klassifikation gemäß FRTB-Kriterien erforderlich sind, oder die Datenqualität ist unzureichend.\n• Inkonsistente Interpretation: Die Auslegung der FRTB-Abgrenzungskriterien variiert oft zwischen verschiedenen Abteilungen und Funktionen, was zu inkonsistenten Entscheidungen führen kann.\n• Systemische Abhängigkeiten: Die Abgrenzung hat weitreichende Auswirkungen auf nachgelagerte Systeme und Prozesse (Risikomanagement, Reporting, Accounting), die oft unterschätzt werden.\n\n🛠️ ADVISORI's spezifische Lösungsansätze:\n• Strukturierte Übergangsstrategie: Wir entwickeln einen detaillierten Transitionsplan, der klare Stichtage, Migrationspfade für bestehende Positionen und eine präzise Kommunikationsstrategie umfasst.\n• Daten-Readiness-Assessment: Durchführung einer umfassenden Analyse Ihrer Dateninfrastruktur mit spezifischem Fokus auf die für die FRTB-Abgrenzung kritischen Datenattribute und Entwicklung gezielter Maßnahmen zur Schließung von Datenlücken.\n• Interpretation Guidelines: Erarbeitung detaillierter Interpretationsleitlinien für alle FRTB-Abgrenzungskriterien, die als verbindliche Referenz für konsistente Entscheidungen dienen.\n• End-to-End Impact Analysis: Systematische Analyse aller systemischen und prozessualen Abhängigkeiten und Entwicklung eines koordinierten Anpassungsplans für alle betroffenen Bereiche."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie wirkt sich die FRTB-Abgrenzung auf spezifische Produktklassen und Handelsstrategien aus und welche Optimierungsmöglichkeiten bieten sich?",
        answer: "Die FRTB-Abgrenzungsregeln haben differenzierte Auswirkungen auf verschiedene Produktklassen und Handelsstrategien, wobei bestimmte Instrumente und Strategien besonders stark betroffen sind. Ein tiefgreifendes Verständnis dieser produktspezifischen Implikationen ist entscheidend, um gezielte Optimierungsmaßnahmen zu identifizieren und Ihre Handelsaktivitäten strategisch neu auszurichten.\n\n📊 Produktspezifische Auswirkungen und Handlungsoptionen:\n• Komplexe Derivate und strukturierte Produkte: Diese Instrumente werden unter FRTB besonders kritisch betrachtet und müssen spezifische Handelbarkeits- und Bewertungskriterien erfüllen, um im Handelsbuch verbleiben zu können.\n  - Optimierungspotenzial: Vereinfachung komplexer Strukturen, Verbesserung der Bewertungsmodelle und -prozesse, strategische Entscheidung über Standortverortung im Handels- oder Bankbuch.\n• Illiquide Anleihen und Kreditinstrumente: Die verschärften Liquiditätskriterien stellen eine erhebliche Herausforderung für weniger liquide Fixed-Income-Instrumente dar.\n  - Optimierungspotenzial: Entwicklung alternativer Handelsstrategien mit liquideren Instrumenten, Überprüfung der Haltedauer und Handelsintention.\n• FX- und Rohstoffpositionen: Hier ist besonders die Abgrenzung zwischen Handelsaktivitäten und Treasury/ALM-Funktionen relevant.\n  - Optimierungspotenzial: Klare organisatorische und prozessuale Trennung zwischen Trading und Treasury, spezifische Dokumentation der Handelsintention.\n\n🧩 Strategie-spezifische Implikationen und Anpassungsoptionen:\n• Market-Making und Liquiditätsbereitstellung: Diese Aktivitäten bleiben grundsätzlich im Handelsbuch, müssen aber klare organisatorische und dokumentatorische Anforderungen erfüllen.\n  - Optimierungspotenzial: Etablierung klarer Kriterien und Prozesse für Market-Making-Aktivitäten, Verbesserung der Dokumentation und Nachweisführung.\n• Langfristige Absicherungsstrategien: Diese werden unter FRTB kritischer betrachtet und könnten teilweise ins Bankbuch reklassifiziert werden müssen.\n  - Optimierungspotenzial: Überprüfung und Neugestaltung von Hedging-Strategien, klare Dokumentation der Absicherungsbeziehungen.\n• Arbitrage-Strategien: Diese werden unter FRTB besonders streng geprüft und müssen klare Handelbarkeits- und Bewertungskriterien erfüllen.\n  - Optimierungspotenzial: Fokussierung auf liquidere Märkte und Instrumente, Verbesserung der Risikomess- und Bewertungsmethoden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Inwiefern beeinflusst die Wahl zwischen Standardansatz (SA) und Internal Models Approach (IMA) die optimale Handels-Bankbuch-Abgrenzungsstrategie?",
        answer: "Die Entscheidung zwischen dem Standardansatz (SA) und dem Internal Models Approach (IMA) für die Marktrisiko-Kapitalberechnung unter FRTB hat tiefgreifende Auswirkungen auf die optimale Strategie zur Handels- und Bankbuchabgrenzung. Diese Wechselwirkung ist komplex und mehrdimensional, wobei die Abgrenzungsstrategie sowohl die Modellwahl beeinflussen kann als auch umgekehrt.\n\n🔄 Wechselwirkungen zwischen Modellwahl und Abgrenzungsstrategie:\n• Eligibility-Kriterien für IMA: Die Nutzung des IMA unterliegt strengen Eligibility-Kriterien auf Trading Desk-Ebene, darunter P&L-Attribution-Tests und Backtesting. Diese Kriterien können indirekt die optimale Struktur und Zusammensetzung Ihrer Trading Desks und damit Ihre Abgrenzungsstrategie beeinflussen.\n• Unterschiedliche Kapitalwirkung: Die Kapitalwirkung der Zuordnung bestimmter Positionen zum Handels- oder Bankbuch kann sich unter SA und IMA erheblich unterscheiden, was zu unterschiedlichen optimalen Abgrenzungsstrategien führen kann.\n• Non-Modellable Risk Factors (NMRFs): Im IMA führen NMRFs zu signifikanten Kapitalaufschlägen. Die Prävalenz von NMRFs in bestimmten Produktklassen kann die Entscheidung beeinflussen, diese Produkte im Handelsbuch zu halten oder ins Bankbuch zu verschieben.\n\n📋 Strategische Überlegungen für verschiedene Modellansätze:\n• Reiner Standardansatz (SA):\n  - Vorteile: Geringere Anforderungen an Daten und Modelle, keine P&L-Attribution-Tests, potenziell einfachere Implementierung.\n  - Abgrenzungsstrategie: Fokus auf klare Handelsabsicht und Handelbarkeit, strategische Neuausrichtung des Produktmix zur Optimierung der Standardrisikogewichte.\n• Reiner Internal Models Approach (IMA):\n  - Vorteile: Potenziell niedrigere Kapitalanforderungen durch Berücksichtigung von Diversifikationseffekten, bessere Risikorepräsentation.\n  - Abgrenzungsstrategie: Ausrichtung der Trading Desk-Struktur an den IMA-Eligibility-Kriterien, besondere Aufmerksamkeit für Positionen mit NMRFs.\n• Hybrider Ansatz (teilweise IMA, teilweise SA):\n  - Vorteile: Flexibilität, Optimierung der Kapitalanforderungen durch selektiven Modellansatz.\n  - Abgrenzungsstrategie: Differenzierte Strategie mit fokussierter IMA-Anwendung für Kernhandelsaktivitäten und SA für weniger modellierbare oder kapitaleffiziente Bereiche."
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
