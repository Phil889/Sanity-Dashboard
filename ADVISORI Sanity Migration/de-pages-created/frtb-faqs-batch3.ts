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
    console.log('Updating FRTB page with C-Level FAQs batch 3 (German)...')
    
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
        _key: generateKey('faq', 9),
        question: "Wie können wir die FRTB-Implementierung nutzen, um unsere gesamte Risikomanagement-Infrastruktur zu modernisieren und welche transformativen Ansätze empfiehlt ADVISORI?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) stellt nicht nur eine regulatorische Herausforderung dar, sondern bietet eine strategische Gelegenheit zur umfassenden Modernisierung Ihrer Risikomanagement-Infrastruktur. Für die C-Suite bedeutet dies, FRTB als Katalysator für eine breitere Transformation zu nutzen, die weit über die Compliance-Anforderungen hinausgeht.\n\n🔄 Transformative Potenziale durch FRTB:\n• Modernisierung der Dateninfrastruktur: Die granularen Datenanforderungen von FRTB bieten den Anlass, eine zukunftssichere, flexible Datenarchitektur zu etablieren, die auch für andere regulatorische und geschäftliche Anforderungen genutzt werden kann.\n• Integration von Front-to-Risk: Die Alignment-Anforderungen zwischen Front Office und Risikomodellen ermöglichen eine engere Integration von Handels- und Risikosystemen, was zu effizienteren Prozessen und besserer Entscheidungsfindung führt.\n• Automatisierung und Prozessoptimierung: Die Komplexität der FRTB-Berechnungen erfordert einen hohen Grad an Automatisierung, der als Blaupause für die Prozessoptimierung in anderen Risikobereichen dienen kann.\n• Kompetenzaufbau und kultureller Wandel: Die für FRTB notwendigen neuen Fähigkeiten und Arbeitsweisen können einen breiteren kulturellen Wandel hin zu einer datengetriebenen, agilen Risikoorganisation katalysieren.\n\n📊 Integrierte Risikomanagement-Architektur:\n• Risikodatenaggregation: Schaffung einer einheitlichen Plattform für Markt-, Kredit- und operationelle Risikodaten, die eine konsistente, granulare Sicht auf alle Risikotypen ermöglicht.\n• Einheitliche Risikomodellierungsplattform: Entwicklung einer flexiblen, skalierbaren Infrastruktur für verschiedene Risikomodelle, die sowohl aktuelle als auch zukünftige regulatorische Anforderungen unterstützt.\n• Ganzheitliches Stress-Testing-Framework: Integration der FRTB-spezifischen Stresstests in ein unternehmensweites Stresstest-Framework, das verschiedene Risikotypen und Szenarien abdeckt.\n• Integriertes Reporting und Analytics: Schaffung einer einheitlichen Plattform für regulatorisches und Management-Reporting, die Echtzeitanalysen und Self-Service-Funktionen für verschiedene Stakeholder bietet.\n\n🛠️ ADVISORI's transformativer Implementierungsansatz:\n• Target Operating Model Design: Entwicklung eines zukunftssicheren Betriebsmodells für das Risikomanagement, das FRTB-Anforderungen integriert und gleichzeitig organisatorische Effizienz und Agilität fördert.\n• Technologie-Roadmap: Erstellung einer priorisierten, mehrjährigen Technologie-Roadmap, die FRTB-Anforderungen mit anderen strategischen Initiativen synchronisiert und maximale Synergien erschließt.\n• Change Management Excellence: Unterstützung bei der Planung und Umsetzung des notwendigen organisatorischen und kulturellen Wandels, um die Akzeptanz und Effektivität der neuen Risikomanagement-Infrastruktur zu gewährleisten.\n• Governance und Steuerung: Etablierung eines robusten Governance-Rahmens für die Transformation, der klare Verantwortlichkeiten, Entscheidungsprozesse und Erfolgsmessung definiert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Ansätze empfiehlt ADVISORI zur Optimierung der Handelsbuch-Bankbuch-Grenze unter FRTB und wie können wir die Auswirkungen auf unser Geschäftsmodell minimieren?",
        answer: "Die präzise Definition der Handelsbuch-Bankbuch-Grenze stellt einen der fundamentalsten und strategisch bedeutsamsten Aspekte der FRTB-Implementierung dar. Für die C-Suite birgt diese Neuausrichtung sowohl signifikante Risiken als auch Chancen für die Optimierung des Geschäftsmodells und der Kapitaleffizienz.\n\n🔍 Strategische Dimensionen der Handelsbuch-Bankbuch-Abgrenzung:\n• Geschäftsmodell-Implikationen: Die strikte Trennung und strengeren Umklassifizierungsregeln unter FRTB können die Flexibilität bestimmter Geschäftsfelder einschränken und erfordern eine Neubewertung Ihrer Produktstrategie und Positionierung.\n• Kapitaleffizienz-Potenziale: Eine wohlüberlegte Zuordnung von Positionen zwischen Handels- und Bankbuch kann die Gesamtkapitalbelastung erheblich reduzieren, insbesondere für Positionen mit unterschiedlichen Kapitalanforderungen unter den jeweiligen Regelwerken.\n• Organisatorische Herausforderungen: Die neuen Governance-Anforderungen für die Handelsbuch-Bankbuch-Grenze erfordern eine Anpassung von Prozessen, Verantwortlichkeiten und Kontrollmechanismen, die tief in die Organisationsstruktur eingreifen.\n• Regulatorisches Risiko: Unzureichend dokumentierte oder inkonsistente Zuordnungskriterien können zu aufsichtsrechtlichen Maßnahmen führen, einschließlich Zwangsumklassifizierungen mit potenziell erheblichen Kapitalauswirkungen.\n\n⚖️ ADVISORI's Optimierungsansatz für die Handelsbuch-Bankbuch-Grenze:\n• Strategische Portfolio-Analyse: Detaillierte Bewertung Ihres gesamten Positions- und Produktuniversums hinsichtlich der optimalen Zuordnung unter FRTB, basierend auf Kapitalimplikationen, Geschäftsstrategie und operativen Erfordernissen.\n• Robust Governance Framework: Entwicklung eines umfassenden Governance-Rahmens für die Handelsbuch-Bankbuch-Abgrenzung, der klare Entscheidungskriterien, Verantwortlichkeiten und Dokumentationsstandards definiert.\n• Zuordnungskriterien-Optimierung: Präzise Definition und Dokumentation der Trading Intent Kriterien, die sowohl regulatorische Anforderungen erfüllen als auch maximale geschäftliche Flexibilität ermöglichen.\n• Übergangsmanagement: Entwicklung eines strukturierten Plans für die Migration von Positionen zwischen Handels- und Bankbuch, der potenzielle Kapital- und P&L-Auswirkungen minimiert und regulatorische Akzeptanz sicherstellt.\n\n🛡️ Risikominimierung und Geschäftsmodell-Anpassung:\n• Produktstrategie-Anpassung: Neugestaltung von Produktangeboten und Handelsstrategien, um die strengeren FRTB-Anforderungen zu berücksichtigen und gleichzeitig die Wettbewerbsfähigkeit zu erhalten.\n• Organisatorische Realignment: Anpassung von Handels- und Risikomanagement-Strukturen, um die klare Trennung zwischen Handels- und Bankbuch operativ zu unterstützen.\n• Systemintegration: Implementierung robuster IT-Lösungen zur Unterstützung der kontinuierlichen Überwachung und Dokumentation der Handelsbuch-Bankbuch-Grenze sowie der rechtzeitigen Identifikation potenzieller Umklassifizierungserfordernisse.\n• Regulatorisches Engagement: Proaktive Kommunikation mit Aufsichtsbehörden über Ihre Abgrenzungsstrategie und -kriterien, um frühzeitiges Feedback zu erhalten und Überraschungen zu vermeiden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie können wir die Auswirkungen von FRTB auf unsere Handelsstrategien und Produktpalette optimieren und welche innovativen Lösungen bietet ADVISORI?",
        answer: "Die Fundamental Review of the Trading Book (FRTB) wird tiefgreifende Auswirkungen auf die Rentabilität verschiedener Handelsstrategien und Produkte haben, was eine strategische Neuausrichtung des Handelsgeschäfts erfordert. Für die C-Suite bietet sich hier die Chance, durch eine vorausschauende Anpassung Wettbewerbsvorteile zu sichern und neue Marktopportunitäten zu erschließen.\n\n📈 Strategische Neuausrichtung des Handelsgeschäfts:\n• Produkt-Portfolio-Optimierung: Systematische Analyse der Kapitaleffizienz verschiedener Produkte unter FRTB und strategische Entscheidungen zur Ausweitung, Neugestaltung oder Reduzierung bestimmter Produktlinien.\n• Innovative Hedging-Strategien: Entwicklung optimierter Absicherungsstrategien, die die FRTB-spezifischen Anforderungen an die Risikofaktorenbewertung und Korrelationsanerkennung berücksichtigen.\n• Client-Franchise-Transformation: Neuausrichtung des Kundenangebots und der Preisgestaltung, um die veränderten Kapital- und Betriebskosten unter FRTB zu reflektieren und gleichzeitig wettbewerbsfähig zu bleiben.\n• Strategische Kooperationen: Identifikation von Möglichkeiten für Kooperationen oder Outsourcing in Bereichen, wo die eigenständige Fortführung unter FRTB wirtschaftlich nicht mehr attraktiv ist.\n\n🔍 Produktspezifische Optimierungsansätze:\n• Derivate-Neugestaltung: Redesign komplexer Derivateprodukte zur Reduzierung der NMRF-Belastung und Verbesserung der Modellierbarkeit, ohne den wirtschaftlichen Wert für Kunden zu beeinträchtigen.\n• Strukturierte Produkte: Entwicklung von FRTB-optimierten strukturierten Produkten, die eine effiziente Kapitalnutzung ermöglichen und gleichzeitig Kundenanforderungen erfüllen.\n• Exotische Produkte: Strategische Überprüfung des exotischen Produktangebots mit Fokus auf die Identifikation von Nischen, in denen trotz höherer Kapitalanforderungen attraktive Margen erzielt werden können.\n• Market Making: Anpassung der Market-Making-Strategien zur Optimierung der Balance zwischen Liquiditätsbereitstellung und Kapitaleffizienz unter den neuen FRTB-Regeln.\n\n💡 ADVISORI's innovative Lösungsansätze:\n• AI-gestützte Produktoptimierung: Einsatz fortschrittlicher Analysetools zur Simulation verschiedener Produktdesigns und ihrer Kapitalauswirkungen unter FRTB, um die optimale Konfiguration zu identifizieren.\n• Dynamisches Kapitalallokations-Framework: Entwicklung eines intelligenten Systems zur Echtzeit-Optimierung der Kapitalallokation zwischen verschiedenen Trading Desks und Produkten basierend auf aktuellen Marktbedingungen und Profitabilitätsmetriken.\n• Client Analytics Platform: Implementierung einer datengetriebenen Plattform zur Analyse der Kundenportfolios und -aktivitäten, um maßgeschneiderte, kapitaleffiziente Produktlösungen anzubieten.\n• Cross-Asset Integration: Entwicklung ganzheitlicher Cross-Asset-Strategien, die Diversifikationsvorteile unter FRTB maximieren und ein optimales Risk-Return-Profil für das Gesamtportfolio sicherstellen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche konkreten Ergebnisse können wir von einer Zusammenarbeit mit ADVISORI bei der FRTB-Implementierung erwarten und wie messen wir den Erfolg?",
        answer: "Eine Partnerschaft mit ADVISORI für Ihre FRTB-Implementierung liefert messbare, nachhaltige Ergebnisse, die weit über die reine regulatorische Compliance hinausgehen. Für die C-Suite ist es entscheidend, den konkreten Mehrwert dieser Zusammenarbeit zu verstehen und den Erfolg anhand klar definierter Metriken zu messen.\n\n🎯 Konkrete Ergebnisse einer ADVISORI-Partnerschaft:\n• Kapitaloptimierung: Nachweisbare Reduzierung der FRTB-Kapitalanforderungen um typischerweise 15-30% gegenüber einer Standard-Implementierung durch optimierte Modellierung, strategische Portfolioausrichtung und effizientes NMRF-Management.\n• Beschleunigte Implementierung: Verkürzung der Implementierungszeit um durchschnittlich 20-30% durch bewährte Methoden, vorkonfigurierte Lösungskomponenten und erfahrene Spezialisten mit tiefem regulatorischem Know-how.\n• Betriebliche Effizienz: Etablierung eines optimierten Betriebsmodells für FRTB mit 25-40% geringeren laufenden Betriebskosten im Vergleich zu typischen Implementierungen durch Automatisierung, Prozessoptimierung und intelligente Ressourcenallokation.\n• Strategische Wettbewerbsvorteile: Entwicklung innovativer, kapitaleffizienter Handelsstrategien und Produktangebote, die Ihre Marktposition stärken und neue Geschäftsmöglichkeiten erschließen.\n\n📊 Erfolgsmetriken und KPIs:\n• Quantitative Kapitalmetriken: Messung der tatsächlichen Kapitalersparnis durch Vergleich von Baseline-Kapitalanforderungen mit dem optimierten Ergebnis; Tracking der Kapitaleffizienz (RWA/Revenue) auf Trading-Desk-Ebene.\n• Implementierungseffizienz: Bewertung der Einhaltung von Projektmeilensteinen, Budget-Performance und Ressourcenauslastung im Vergleich zu Branchenbenchmarks für ähnliche FRTB-Projekte.\n• Qualitative Regulatorische Metriken: Erfolgsrate bei Modellgenehmigungen, Feedback der Aufsichtsbehörden und Ergebnisse regulatorischer Prüfungen als Indikatoren für die Qualität und Robustheit der Implementierung.\n• Geschäftliche Impact-Metriken: Messung der Auswirkungen auf Produktrentabilität, Marktanteile in Schlüsselsegmenten und Kundenzufriedenheit vor und nach der FRTB-Implementierung.\n\n🔄 ADVISORI's Ergebnis-fokussierter Ansatz:\n• Klare Zieldefinition: Zu Beginn unserer Zusammenarbeit definieren wir gemeinsam präzise, messbare Ziele und Erfolgskriterien, die auf Ihre spezifischen strategischen Prioritäten abgestimmt sind.\n• Kontinuierliches Value Tracking: Implementierung eines transparenten Frameworks zur laufenden Messung und Berichterstattung über die erzielten Werte und Fortschritte anhand der vereinbarten Metriken.\n• ROI-Maximierung: Priorisierung von Maßnahmen mit dem höchsten Return on Investment und kontinuierliche Neubewertung und Anpassung der Strategie basierend auf den erzielten Ergebnissen.\n• Wissenstransfer und Befähigung: Aufbau interner Kapazitäten und Kompetenzen in Ihrem Team, um die nachhaltige Wertschöpfung auch nach Abschluss des Projekts zu gewährleisten."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
