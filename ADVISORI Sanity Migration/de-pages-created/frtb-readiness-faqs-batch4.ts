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
    console.log('Updating FRTB Readiness page with FAQs batch 4...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie bereitet eine FRTB-Readiness-Bewertung unser Institut auf die Interaktion mit Aufsichtsbehörden vor und welche regulatorischen Aspekte sind besonders kritisch?",
        answer: "Die Interaktion mit Aufsichtsbehörden stellt einen kritischen Erfolgsfaktor in der FRTB-Implementierung dar, insbesondere bei der Anwendung des Internal Models Approach (IMA). Eine umfassende Readiness-Bewertung sollte Sie nicht nur auf die technischen Anforderungen vorbereiten, sondern auch auf den intensiven regulatorischen Dialog und Genehmigungsprozess.\n\n🔍 Kritische regulatorische Interaktionspunkte unter FRTB:\n• IMA-Genehmigungsprozess: Der Prozess zur Genehmigung interner Modelle wurde unter FRTB erheblich verschärft, mit detaillierten Anforderungen auf Trading-Desk-Ebene und kontinuierlichen Nachweispflichten.\n• Handelsbuchabgrenzung: Die Definition und Abgrenzung des Handelsbuchs unterliegt strengeren Kriterien, die mit den Aufsichtsbehörden abgestimmt und dokumentiert werden müssen.\n• Modell-Validierung und Backtesting: Die strengen Anforderungen an P&L-Attribution und Backtesting erfordern transparente, nachvollziehbare Prozesse, die einer intensiven aufsichtlichen Prüfung standhalten müssen.\n• Non-Modellable Risk Factors (NMRFs): Die Identifikation und Behandlung von NMRFs sowie die dafür verwendeten Methoden unterliegen besonderer aufsichtlicher Aufmerksamkeit.\n\n📋 ADVISORI's Ansatz zur regulatorischen Vorbereitung:\n• Regulatory Engagement Strategy: Entwicklung einer proaktiven Strategie für die Kommunikation mit Aufsichtsbehörden, einschließlich Zeitplan, Inhalten und verantwortlichen Ansprechpartnern.\n• Dokumentationsframework: Konzeption eines umfassenden Dokumentationsrahmenwerks, das alle relevanten Aspekte der FRTB-Implementierung abdeckt und den aufsichtlichen Anforderungen entspricht.\n• Pre-Application Assessment: Durchführung einer kritischen Vorab-Bewertung Ihrer FRTB-Implementierung aus aufsichtlicher Perspektive, um potenzielle Schwachstellen und Fragen frühzeitig zu identifizieren.\n• Regulatory Reporting Readiness: Bewertung Ihrer Bereitschaft für die erweiterten regulatorischen Berichtspflichten unter FRTB und Entwicklung effizienter Reporting-Prozesse.\n\n🛡️ Besonders kritische regulatorische Aspekte:\n• Desk-Level Approval: Die detaillierte Prüfung und Genehmigung auf Trading-Desk-Ebene stellt eine besondere Herausforderung dar und erfordert eine sorgfältige Vorbereitung jedes einzelnen Desks.\n• P&L Attribution Tests: Die strengen Kriterien für die Übereinstimmung zwischen hypothetischen P&L und Risk-Theoretical P&L werden von Aufsichtsbehörden besonders kritisch geprüft.\n• Modellrisikomanagement: Die umfassenden Anforderungen an die Governance von Risikomodellen, einschließlich unabhängiger Validierung und kontinuierlichem Monitoring, stehen im Fokus der Aufsicht.\n• Datenqualität und -historisierung: Die Anforderungen an Datenqualität, -granularität und -verfügbarkeit werden besonders intensiv geprüft, insbesondere im Hinblick auf die Modellierbarkeit von Risikofaktoren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Herausforderungen stellt FRTB für mittelgroße Institute dar und wie kann eine maßgeschneiderte Readiness-Bewertung diese adressieren?",
        answer: "Während die FRTB-Anforderungen für alle Institute anspruchsvoll sind, stellen sie mittelgroße Banken vor besondere Herausforderungen. Diese Institute müssen einen Balanceakt zwischen regulatorischer Compliance, begrenzten Ressourcen und strategischer Wettbewerbspositionierung vollziehen. Eine speziell auf mittelgroße Institute zugeschnittene Readiness-Bewertung berücksichtigt diese besonderen Rahmenbedingungen und entwickelt pragmatische, proportionale Lösungsansätze.\n\n⚖️ Spezifische Herausforderungen für mittelgroße Institute:\n• Ressourcen- und Budgetrestriktionen: Begrenzte personelle und finanzielle Ressourcen für die Implementierung komplexer regulatorischer Anforderungen im Vergleich zu Großbanken.\n• Spezialisiertes Know-how: Herausforderungen bei der Rekrutierung und Bindung von Spezialisten mit tiefgreifender FRTB-Expertise in einem hart umkämpften Talentmarkt.\n• IT-Infrastruktur: Oft weniger fortschrittliche Risikomanagement- und Handelssysteme, die umfangreiche Anpassungen oder Neuinvestitionen erfordern.\n• Kosten-Nutzen-Verhältnis: Die Implementierungskosten müssen in einem angemessenen Verhältnis zum Handelsvolumen und zur Komplexität des Handelsbuchs stehen.\n\n🔍 Maßgeschneiderte Bewertungsansätze für mittelgroße Institute:\n• Proportionalitätsorientierte Gap-Analyse: Bewertung der Lücken unter besonderer Berücksichtigung des Proportionalitätsprinzips und Fokussierung auf die für Ihr Geschäftsmodell wesentlichen Aspekte.\n• Pragmatische Modellstrategie: Sorgfältige Evaluation des Kosten-Nutzen-Verhältnisses zwischen Standardansatz und selektivem IMA-Einsatz, basierend auf Ihrem spezifischen Handelsbuchprofil.\n• Ressourcenoptimierte Implementierungsstrategie: Entwicklung eines Implementierungsfahrplans, der die begrenzten Ressourcen optimal nutzt und kritische Pfade identifiziert.\n• Technologische Alternativbewertung: Evaluation kosteneffizienter Technologieoptionen wie Cloud-basierte Lösungen, Vendor-Produkte oder Shared Services.\n\n💼 ADVISORI's Unterstützung für mittelgroße Institute:\n• Fokussierte Bewertungsmethodik: Unser strukturierter, aber schlanker Bewertungsansatz konzentriert sich auf die für Ihr Institut relevantesten Aspekte und liefert schnell handlungsorientierte Ergebnisse.\n• Benchmark-basierte Einordnung: Nutzung unserer umfangreichen Erfahrung mit Peer-Instituten, um realistische Benchmarks und Best Practices für mittelgroße Banken bereitzustellen.\n• Pragmatische Lösungsansätze: Entwicklung kosteneffizienter, aber regulatorisch robuster Implementierungsoptionen, die den spezifischen Rahmenbedingungen mittelgroßer Institute Rechnung tragen.\n• Kollaborative Implementierungsmodelle: Beratung zu alternativen Implementierungsansätzen wie Shared Services, Outsourcing oder Kooperationsmodellen, die den Ressourceneinsatz optimieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie berücksichtigt eine umfassende FRTB-Readiness-Bewertung die internationalen Unterschiede in der Umsetzung und was bedeutet dies für global tätige Institute?",
        answer: "Die globale Implementierung der FRTB-Standards ist durch erhebliche regionale Unterschiede in Zeitplänen, Interpretationen und spezifischen Anforderungen gekennzeichnet. Für international tätige Institute stellt dies eine zusätzliche Komplexitätsebene dar, die in einer umfassenden Readiness-Bewertung explizit berücksichtigt werden muss, um eine effiziente und konforme globale Implementierung zu gewährleisten.\n\n🌐 Wesentliche internationale Unterschiede in der FRTB-Umsetzung:\n• Implementierungszeitpläne: Signifikante Unterschiede in den Einführungsterminen zwischen verschiedenen Jurisdiktionen, von der EU (CRR III) über die USA (Basel Endgame) bis zu asiatischen Märkten.\n• Nationale Diskretionen: Trotz eines gemeinsamen Basler Rahmens haben nationale Aufsichtsbehörden erhebliche Spielräume bei der konkreten Ausgestaltung, insbesondere bei Aspekten wie NMRF-Behandlung oder P&L-Attribution-Tests.\n• Berichtspflichten: Unterschiedliche regulatorische Reporting-Anforderungen hinsichtlich Frequenz, Format und Granularität der FRTB-bezogenen Daten.\n• Modellgenehmigungsprozesse: Variierende Ansätze und Schwerpunkte nationaler Aufsichtsbehörden bei der Prüfung und Genehmigung interner Modelle.\n\n🔍 Globale Dimensionen einer umfassenden FRTB-Readiness-Bewertung:\n• Jurisdiktionsspezifische Gap-Analysen: Durchführung separater Lückenanalysen für jede relevante Jurisdiktion unter Berücksichtigung der lokalen regulatorischen Interpretationen und Anforderungen.\n• Regulatorische Entwicklungsüberwachung: Kontinuierliche Beobachtung und Analyse der regulatorischen Entwicklungen in allen relevanten Märkten, um Divergenzen und Konvergenzen frühzeitig zu identifizieren.\n• Globale vs. lokale Implementierungsstrategien: Bewertung der optimalen Balance zwischen einem konsistenten globalen Ansatz und notwendigen lokalen Anpassungen.\n• Cross-Border-Datenflüsse: Analyse der Anforderungen und Herausforderungen bei grenzüberschreitenden Datenflüssen unter Berücksichtigung von Datenschutz- und Souveränitätsaspekten.\n\n💼 ADVISORI's globaler Ansatz zur FRTB-Readiness-Bewertung:\n• Internationale Regulierungsexpertise: Unser globales Netzwerk von Regulierungsexperten gewährleistet eine fundierte Analyse der spezifischen Anforderungen in allen relevanten Jurisdiktionen.\n• Regulatorisches Frühwarnsystem: Kontinuierliches Monitoring internationaler regulatorischer Entwicklungen und proaktive Information über relevante Änderungen und deren Auswirkungen.\n• Globale Implementierungsroadmap: Entwicklung einer integrierten, globalen Implementierungsstrategie, die jurisdiktionsspezifische Anforderungen und Zeitpläne berücksichtigt und gleichzeitig operative Effizienz sicherstellt.\n• Best-Practice-Sharing: Nutzung unserer Erfahrung mit globalen FRTB-Implementierungen, um bewährte Praktiken für den Umgang mit internationalen Regulierungsunterschieden zu identifizieren und zu adaptieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie kann unsere FRTB-Readiness-Bewertung die besonderen Herausforderungen von komplexen Produkten und exotischen Derivaten adressieren?",
        answer: "Komplexe Produkte und exotische Derivate stellen unter FRTB besondere Herausforderungen dar, die in einer umfassenden Readiness-Bewertung spezifisch adressiert werden müssen. Die strengeren Anforderungen an Risikofaktor-Modellierbarkeit, Datenqualität und Modellvalidierung können erhebliche Auswirkungen auf die Kapitalanforderungen und sogar auf die strategische Tragfähigkeit bestimmter Produktlinien haben.\n\n🧩 Spezifische Herausforderungen für komplexe Produkte:\n• Non-Modellable Risk Factors (NMRFs): Exotische Produkte sind besonders anfällig für NMRFs aufgrund der häufig begrenzten Verfügbarkeit von beobachtbaren Marktdaten, was zu signifikanten Kapitalaufschlägen führen kann.\n• Modellrisiko und Validierung: Die Bewertung und Risikomessung komplexer Produkte erfordert oft anspruchsvolle Modelle, die unter FRTB strengeren Validierungsanforderungen unterliegen und größere P&L-Attribution-Herausforderungen aufwerfen.\n• Datenqualität und -historisierung: Die für exotische Produkte benötigten Markt- und Risikodaten sind oft fragmentiert, inkonsistent oder schlicht nicht in der erforderlichen historischen Tiefe verfügbar.\n• Handelsbuch-Bankbuch-Abgrenzung: Für komplexe Strukturen kann die eindeutige Zuordnung zum Handelsbuch unter den verschärften FRTB-Kriterien herausfordernd sein.\n\n🔍 Produkt-spezifische Aspekte einer umfassenden FRTB-Readiness-Bewertung:\n• Produkt-spezifische Kapitalimpact-Analyse: Detaillierte Bewertung der FRTB-Auswirkungen auf Produkt- und Unterportfolioebene, um besonders kapitalintensive Bereiche zu identifizieren.\n• Risikofaktor-Modellierbarkeitsanalyse: Systematische Bewertung der Modellierbarkeit aller relevanten Risikofaktoren unter FRTB-Kriterien und Identifikation potenzieller NMRFs.\n• Produktstrategische Optionsanalyse: Evaluation verschiedener strategischer Optionen für kapitalintensive Produkte, von Modellverbesserungen über Portfolioumstrukturierungen bis hin zu möglichen Produkteinstellungen.\n• Daten-Proxying-Strategien: Entwicklung und Bewertung von Ansätzen zur Überbrückung von Datenlücken durch statistische Methoden, Benchmarking oder alternative Datenquellen.\n\n🛠️ ADVISORI's spezialisierte Expertise für komplexe Produkte:\n• Produktspezifische Bewertungsmethodik: Unsere spezialisierte Methodik berücksichtigt die besonderen Eigenschaften und Risiken verschiedener Produktklassen und deren spezifische FRTB-Implikationen.\n• Advanced Analytics: Einsatz fortschrittlicher Analysemethoden zur Identifikation von Optimierungspotenzialen und zur Quantifizierung der Kapitalauswirkungen verschiedener Modellierungs- und Strukturierungsoptionen.\n• Regulatory Acceptance Analysis: Bewertung der aufsichtlichen Akzeptanzwahrscheinlichkeit verschiedener Ansätze zur Behandlung komplexer Produkte, basierend auf unserer Erfahrung mit regulatorischen Prüfungen.\n• Cross-Asset-Optimierung: Identifikation von Diversifikations- und Hedging-Potenzialen über verschiedene Produktklassen hinweg, um die Gesamtkapitalbelastung zu optimieren."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
