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
    console.log('Updating FRTB page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'frtb' })
    
    if (!existingDoc) {
      throw new Error('Document "frtb" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie wirkt sich FRTB auf unsere globale Handelsstrategie aus und welche Ansätze empfiehlt ADVISORI für unterschiedliche Jurisdiktionen?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) wirkt als globaler Rahmen mit regionalen Variationen, was für international tätige Institute besondere Herausforderungen, aber auch strategische Chancen schafft. Für die C-Suite ergeben sich weitreichende Implikationen für die globale Handelsstrategie und die optimale Positionierung in verschiedenen Märkten.\n\n🌎 Regionale FRTB-Komplexität und strategische Implikationen:\n• Implementierungszeitpläne: Die gestaffelte Einführung der FRTB-Regularien (EU, USA, Asien) ermöglicht eine strategische Priorisierung der Implementierung nach Märkten und schafft zeitliche Arbitrage-Möglichkeiten.\n• Regulatorische Fragmentierung: Trotz des Basler Rahmens existieren signifikante regionale Unterschiede in der FRTB-Interpretation und -Umsetzung, die eine differenzierte Markt- und Produktstrategie erfordern.\n• Geschäftsverlagerungspotenziale: Die unterschiedlichen Kapitalanforderungen in verschiedenen Jurisdiktionen eröffnen Möglichkeiten zur strategischen Verlagerung von Handelsaktivitäten zur Kapitaloptimierung.\n• Wettbewerbsdynamik: Institute, die die globale FRTB-Landschaft geschickt navigieren, können regionale Wettbewerbsvorteile erzielen und Marktanteilsgewinne in weniger gut vorbereiteten Märkten realisieren.\n\n🧭 ADVISORI's globaler Implementierungsansatz:\n• Holistische Jurisdiktionsanalyse: Wir bieten eine umfassende Bewertung der FRTB-Anforderungen in allen für Sie relevanten Märkten und identifizieren Abweichungen und Optimierungspotenziale.\n• Koordinierte Implementierungsstrategie: Entwicklung eines global kohärenten, aber lokal angepassten Implementierungsplans, der regulatorische Unterschiede berücksichtigt und Synergien maximiert.\n• Globales Betriebsmodell: Gestaltung einer zentralisierten FRTB-Governance mit lokalen Anpassungen, die ein optimales Gleichgewicht zwischen globaler Konsistenz und lokaler Compliance schafft.\n• Strategische Neupositionierung: Unterstützung bei der Neubewertung Ihrer globalen Marktpräsenz und Produktpalette unter Berücksichtigung der FRTB-induzierten Kapitalbelastung in verschiedenen Regionen.\n\n🔗 Synergien mit anderen globalen Regulierungsinitiativen:\n• Integration mit BCBS 239 und weiteren Risikodatenaggregationsprojekten zur Schaffung einer einheitlichen globalen Datenarchitektur.\n• Harmonisierung mit anderen Marktrisikoregelungen wie SA-CCR und CVA-Risikoanforderungen für eine effiziente Gesamtimplementierung.\n• Abstimmung mit den ESG-Risikomanagementanforderungen, die zunehmend in den Fokus der globalen Aufsichtsbehörden rücken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche technologischen Innovationen empfiehlt ADVISORI, um die Rechenintensität der FRTB-Anforderungen zu bewältigen und gleichzeitig Kosteneffizienz zu gewährleisten?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) stellt beispiellose Anforderungen an die Rechenleistung und Datenverarbeitungsfähigkeiten von Finanzinstituten. Für die C-Suite ergeben sich daraus fundamentale Entscheidungen bezüglich Technologieinvestitionen, die weit über FRTB hinaus strategische Bedeutung haben und die digitale Transformation des Risikomanagements insgesamt beeinflussen.\n\n⚡ Technologische Herausforderungen und Innovationspotenziale:\n• Exponentielle Rechenanforderungen: Die FRTB-Berechnungen – insbesondere die Expected Shortfall-Methodik und NMRF-Stresstests – erfordern eine bis zu 100-fache Steigerung der Rechenleistung gegenüber bisherigen Marktrisikosystemen.\n• Datenintegrationskomplexität: Die granularen Datenanforderungen für historische Zeitreihen, Risikofaktoren und Sensitivitäten erfordern eine grundlegende Neugestaltung der Datenarchitektur.\n• Near-Real-Time Anforderungen: Die FRTB-Reporting-Zeitlinien und die Notwendigkeit zeitnaher Kapitalauswirkungs-Analysen für Handelsaktivitäten stellen hohe Anforderungen an die Verarbeitungsgeschwindigkeit.\n• Budgetäre Grenzen: Die Implementierung fortschrittlicher Technologien muss gegen budgetäre Beschränkungen abgewogen werden, was innovative Lösungsansätze erfordert.\n\n🚀 Innovative Technologielösungen von ADVISORI:\n• Cloud-native FRTB-Architekturen: Nutzung skalierbarer Cloud-Infrastrukturen, die Rechenkapazitäten bedarfsgerecht bereitstellen und Fixkosten in variable Kosten umwandeln.\n• High-Performance Computing (HPC): Implementierung von GPU-beschleunigten Berechnungsumgebungen, die speziell für die parallelisierbaren FRTB-Algorithmen optimiert sind und eine 20-50-fache Beschleunigung gegenüber konventionellen CPU-basierten Systemen bieten.\n• Fortschrittliche Datenverarbeitungstechnologien: Einsatz von In-Memory-Datenbanken und Streaming-Analytics für die Echtzeitverarbeitung großer Datenmengen und die Integration heterogener Datenquellen.\n• KI/ML-gestützte Optimierung: Anwendung von Machine Learning für intelligente Approximationen, Risikofaktor-Reduktionstechniken und Proxy-Modellierung zur Optimierung der Recheneffizienz.\n\n💰 Investitionsstrategien für maximalen ROI:\n• Modularer Plattformansatz: Entwicklung einer flexiblen, skalierbaren FRTB-Technologieplattform, die schrittweise implementiert werden kann und gleichzeitig andere regulatorische Anforderungen unterstützt.\n• Build-vs-Buy-Analyse: Sorgfältige Bewertung der Optionen zwischen Eigenentwicklung, Kauf von Speziallösungen und hybriden Ansätzen basierend auf Ihren spezifischen Anforderungen und bestehenden Investitionen.\n• Vendor-Management-Strategie: Strategische Partnerschaften mit spezialisierten FinTech-Anbietern, die innovative FRTB-Lösungskomponenten bereitstellen können, um interne Ressourcen zu ergänzen.\n• Synergistische Technologieinvestitionen: Priorisierung von Technologien, die sowohl FRTB-Anforderungen erfüllen als auch breitere strategische Vorteile für Ihre digitale Transformation bieten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie navigieren wir den Übergang vom Standardansatz zum Internal Models Approach und welche Schritte empfiehlt ADVISORI für eine erfolgreiche Modellzulassung?",
        answer: "Die Entscheidung zwischen dem Standardansatz (SA) und dem Internal Models Approach (IMA) unter FRTB stellt einen strategischen Wendepunkt für Ihr Institut dar. Für die C-Suite geht es nicht nur um eine technische Modellfrage, sondern um eine fundamentale Weichenstellung mit erheblichen Auswirkungen auf Kapitaleffizienz, Wettbewerbsfähigkeit und strategische Flexibilität.\n\n🧮 Strategische Dimensionen der SA-IMA-Entscheidung:\n• Kapitalimplikationen: Der IMA kann je nach Portfolio eine Kapitalersparnis von 20-40% gegenüber dem SA ermöglichen, jedoch mit erheblich höheren Implementierungs- und Betriebskosten.\n• Desk-selektiver Ansatz: FRTB ermöglicht eine differenzierte Anwendung von SA und IMA auf Trading-Desk-Ebene, was eine optimierte, risikobasierte Modellstrategie erlaubt.\n• Zeitliche Dimension: Die Implementierung eines vollständigen IMA erfordert 2-3 Jahre und sollte mit einer phasenweisen Migration vom SA beginnen, wobei Desks mit dem höchsten Kapitaloptimierungspotenzial priorisiert werden.\n• Regulatorisches Risiko: Die strengen Anforderungen an die Modellgenehmigung und die P&L-Attribution-Tests (PLAT) erfordern eine sorgfältige Vorbereitung, um Rückstufungen zum SA zu vermeiden.\n\n🛣️ ADVISORI's Fahrplan für eine erfolgreiche IMA-Implementierung:\n• Strategische Desk-Priorisierung: Detaillierte Kosten-Nutzen-Analyse für jeden Trading Desk, um diejenigen mit dem höchsten Potenzial für Kapitalersparnis durch IMA zu identifizieren.\n• Pre-Application Assessment: Umfassende Bewertung Ihrer Modellierungs-Capabilities, Datenqualität und Governance-Strukturen, um Lücken frühzeitig zu identifizieren und zu adressieren.\n• Optimierte Testumgebung: Implementierung einer robusten Testinfrastruktur für PLAT und Backtesting, die kontinuierliche Überwachung und schnelle Anpassungen ermöglicht.\n• Regulatorisches Engagement: Frühzeitige und transparente Kommunikation mit den Aufsichtsbehörden, um deren Erwartungen zu verstehen und in die Implementierungsstrategie einzubeziehen.\n\n📋 Erfolgsfaktoren für die Modellzulassung:\n• Robuste Modellrisikogovernance: Etablierung eines umfassenden Rahmenwerks für die Entwicklung, Validierung und kontinuierliche Überwachung der FRTB-Modelle gemäß regulatorischen Erwartungen.\n• Non-Modellable Risk Factors (NMRF)-Management: Entwicklung einer effektiven Strategie zur Identifikation, Quantifizierung und Minimierung von NMRFs, die einen erheblichen Einfluss auf die Kapitalanforderungen haben können.\n• Datenqualitätsmanagement: Implementierung eines End-to-End-Prozesses zur Sicherstellung der Qualität, Konsistenz und Auditierbarkeit aller für die FRTB-Modellierung verwendeten Daten.\n• Kompetenzaufbau: Investition in spezialisierte Fachkräfte und Schulung bestehender Teams in den komplexen methodischen und technischen Aspekten der FRTB-Modellierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie können wir die FRTB-Implementierung mit unseren ESG-Zielen in Einklang bringen und welchen Mehrwert bietet ADVISORI in diesem Bereich?",
        answer: "Die Integration von FRTB-Compliance und ESG-Zielen repräsentiert eine zukunftsweisende Strategie, die regulatorische Anforderungen mit Nachhaltigkeitsaspekten verbindet. Für die C-Suite bietet diese Verknüpfung die Chance, Compliance-Investitionen zu hebeln und gleichzeitig die wachsende Bedeutung von ESG-Faktoren in der Geschäftsstrategie zu adressieren.\n\n🌱 Synergiepotenziale zwischen FRTB und ESG:\n• Integrierte Risikobetrachtung: Die für FRTB erforderliche Verbesserung der Risikomodellierung kann erweitert werden, um auch klimabezogene Risiken und ESG-Faktoren zu erfassen, die zunehmend in den regulatorischen Fokus rücken.\n• Dateninfrastruktur-Synergien: Die für FRTB notwendigen Investitionen in Datenmanagement und -analyse können gleichzeitig die Erfassung und Verarbeitung von ESG-Daten unterstützen, die für Offenlegungspflichten und Risikomanagement benötigt werden.\n• Erweiterte Szenarioanalysen: Die für FRTB entwickelten Stresstesting-Fähigkeiten können auf Klimastressszenarien ausgeweitet werden, um die Auswirkungen von Klimarisiken auf das Handelsbuch zu quantifizieren.\n• Nachhaltigkeitsorientierte Produktinnovation: Die durch FRTB induzierte Neubetrachtung des Produktportfolios bietet die Gelegenheit, nachhaltige Finanzprodukte zu entwickeln, die sowohl kapitaleffizient unter FRTB sind als auch ESG-Anforderungen erfüllen.\n\n🔄 Integration von FRTB in Ihre ESG-Transformation:\n• ESG-risikosensitive Kapitalallokation: Entwicklung von Frameworks, die FRTB-Kapitalkosten mit ESG-Risikoprofilen verbinden, um eine nachhaltigkeitsorientierte Kapitalallokation zu fördern.\n• Klimasensitive Marktrisikobewertung: Erweiterung der FRTB-Risikomodelle um klimabezogene Faktoren und Übergangsrisiken, die das Marktrisikoprofil beeinflussen können.\n• Nachhaltige Handelsbuchstrategie: Nutzung der FRTB-induzierten Portfolioumstrukturierung zur strategischen Ausrichtung des Handelsbuchs an ESG-Kriterien und zur Reduzierung der Exposition gegenüber CO2-intensiven Sektoren.\n• Ganzheitliches Reporting: Integration von FRTB- und ESG-Berichterstattung für ein kohärentes Risikobild, das sowohl regulatorische als auch nachhaltigkeitsbezogene Dimensionen abdeckt.\n\n🛠️ ADVISORI's einzigartiger Mehrwert:\n• Interdisziplinäre Expertise: Unser Team vereint tiefgreifende Kenntnisse in Marktrisikoregelungen, FRTB-Implementierung und nachhaltiger Finanzierung, um ganzheitliche Lösungen zu entwickeln.\n• Innovative Methodikentwicklung: Wir haben Pionierarbeit bei der Integration von Klimarisiken in Marktrisikomanagementframeworks geleistet und bieten erprobte Ansätze für die FRTB-ESG-Integration.\n• Regulatorisches Vorausdenken: Wir antizipieren die Konvergenz von Prudential- und ESG-Regulierung und bereiten Ihre Organisation auf kommende Anforderungen an der Schnittstelle dieser Bereiche vor.\n• Transformative Beratung: Über technische Lösungen hinaus unterstützen wir Sie bei der strategischen Positionierung Ihres Instituts als Vorreiter im nachhaltigen Risikomanagement."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
