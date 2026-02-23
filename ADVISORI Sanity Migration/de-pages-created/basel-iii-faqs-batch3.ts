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
    console.log('Updating Basel III page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie hilft uns ADVISORI, die erhöhten Offenlegungspflichten (Pillar 3) von Basel III als strategisches Kommunikationsinstrument zu nutzen?",
        answer: "Die erweiterten Offenlegungspflichten (Pillar 3) von Basel III werden von vielen Banken primär als Compliance-Anforderung und administrative Belastung wahrgenommen. Mit dem richtigen strategischen Ansatz können diese Anforderungen jedoch in ein wirkungsvolles Kommunikationsinstrument transformiert werden, das das Vertrauen von Investoren stärkt und einen Wettbewerbsvorteil generiert.\n\n📢 Strategische Nutzung der Pillar 3-Offenlegungen:\n• Vom Pflichtbericht zum Vertrauensinstrument: Die transparente Kommunikation über Kapital, Risiken und Governance kann das Vertrauen von Investoren, Ratingagenturen und anderen Stakeholdern systematisch stärken.\n• Differenzierung im Markt: Eine qualitativ hochwertige, über die Minimalanforderungen hinausgehende Offenlegung kann als Differenzierungsfaktor gegenüber weniger transparenten Wettbewerbern dienen.\n• Narrative Kontrolle: Proaktive Steuerung der Marktwahrnehmung durch strategisch formulierte Offenlegungen, die Ihre Risikomanagement-Exzellenz und strategische Weitsicht demonstrieren.\n• Feedback-Kanal: Nutzung der Marktreaktionen auf Offenlegungen als wertvolle Informationsquelle für die Weiterentwicklung der Geschäftsstrategie.\n\n💼 ADVISORIs Ansatz zur strategischen Offenlegung:\n• Stakeholder-zentrierte Berichterstattung: Entwicklung maßgeschneiderter Offenlegungsformate, die nicht nur regulatorische Anforderungen erfüllen, sondern gezielt auf die Informationsbedürfnisse verschiedener Stakeholder-Gruppen eingehen.\n• Integration von Finanzkommunikation: Harmonisierung von regulatorischen Offenlegungen mit Investor Relations und anderen Kommunikationskanälen zu einer kohärenten Kommunikationsstrategie.\n• Digitale Offenlegungsplattformen: Implementierung interaktiver, digitaler Formate, die es Stakeholdern ermöglichen, relevante Informationen gezielt zu filtern und zu analysieren.\n• Benchmark-basierte Optimierung: Kontinuierliche Analyse und Integration von Best Practices und Marktstandards in Ihre Offenlegungsstrategie für eine Positionierung als Branchenführer."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche Auswirkungen haben die Basel III-Anforderungen auf unsere M&A-Strategie und wie unterstützt ADVISORI uns bei der Bewertung potenzieller Übernahmeziele unter regulatorischen Gesichtspunkten?",
        answer: "Basel III hat die Dynamik von Fusionen und Übernahmen im Bankensektor fundamental verändert. Die neuen regulatorischen Anforderungen beeinflussen nicht nur die Bewertung potenzieller Übernahmeziele, sondern auch die strategische Logik und den zu erwartenden Wertbeitrag von M&A-Transaktionen. ADVISORI unterstützt Sie dabei, diese Komplexität zu navigieren und M&A als strategisches Instrument unter Basel III optimal zu nutzen.\n\n🔍 Basel III-Implikationen für Ihre M&A-Strategie:\n• Kapitalbasierte Transaktionsbewertung: Die Auswirkungen einer Übernahme auf Kapitalquoten und Kapitalpuffer werden zu einem primären Bewertungskriterium, das traditionelle Kennzahlen wie P/E oder P/B ergänzt oder sogar dominiert.\n• Regulatorische Due Diligence: Detaillierte Analyse der regulatorischen Compliance und versteckter Risiken des Übernahmeziels wird zu einem kritischen Erfolgsfaktor für erfolgreiche Transaktionen.\n• Strategische Konsolidierung: Basel III schafft Anreize für Konsolidierungen, die Skaleneffekte in regulatorischen Funktionen (Reporting, Compliance, Modellentwicklung) realisieren können.\n• Veränderte Attraktivität von Geschäftsfeldern: Die relative Kapitalintensität verschiedener Geschäftsmodelle unter Basel III führt zu einer Neubewertung der Attraktivität verschiedener Übernahmeziele und Geschäftssegmente.\n\n💡 ADVISORIs M&A-Beratung unter Basel III:\n• Regulatorischer Bewertungsansatz: Wir entwickeln maßgeschneiderte Bewertungsmodelle, die traditionelle finanzielle Bewertungsmethoden mit detaillierten regulatorischen Implikationsanalysen verbinden.\n• Pre-Deal-Simulation: Durchführung umfassender Simulationen der kombinierten Entität, mit detaillierter Modellierung der Auswirkungen auf Kapitalquoten, Liquiditätskennzahlen und regulatorische Anforderungen.\n• Post-Merger-Integrationsplanung: Entwicklung eines regulatorisch fundierten Integrationsplans, der nicht nur operative Synergien, sondern auch regulatorische Optimierungspotenziale identifiziert und realisiert.\n• Regulatorische Verhandlungsunterstützung: Beratung bei der Strukturierung von Transaktionen, um regulatorische Genehmigungsprozesse zu optimieren und regulatorisch bedingte Anpassungen in Transaktionsverträgen sachgerecht zu adressieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie unterstützt ADVISORI uns bei der Implementierung der verschärften Risikomanagementanforderungen von Basel III und welche strategischen Vorteile können wir daraus ziehen?",
        answer: "Basel III hat die Anforderungen an das Risikomanagement von Banken substantiell erhöht – von der Governance über Modelle bis hin zu Stresstests und Validierungsprozessen. Diese regulatorische Verschärfung birgt jedoch auch die Chance, Risikomanagement von einer reinen Kontrollfunktion zu einem strategischen Wettbewerbsvorteil zu entwickeln. ADVISORI unterstützt Sie bei dieser strategischen Transformation.\n\n🛡️ Strategische Transformation des Risikomanagements unter Basel III:\n• Von Risikokontrolle zu Wertschöpfung: Entwicklung eines Risikomanagement-Frameworks, das nicht nur Risiken minimiert, sondern aktiv zur optimalen Kapital- und Ressourcenallokation beiträgt.\n• Präzisere Risikosteuerung: Implementierung fortschrittlicher Risikomodelle und -metriken, die eine genauere Preisgestaltung, gezieltere Kundensegmentierung und effektivere Produktentwicklung ermöglichen.\n• Systemisches Frühwarnsystem: Aufbau von Frühwarnindikatoren und Prognosemodellen, die Risiken und Chancen frühzeitig identifizieren und strategische Anpassungen ermöglichen.\n• Resilienz als Wettbewerbsvorteil: Transformation des Stresstestings von einer regulatorischen Übung zu einem strategischen Planungsinstrument, das Krisenresistenz und Anpassungsfähigkeit fördert.\n\n🔧 ADVISORIs ganzheitlicher Risikomanagement-Ansatz:\n• Integrierte Risikotaxonomie: Entwicklung eines umfassenden Risiko-Frameworks, das alle relevanten Risikoarten (Kredit-, Markt-, Liquiditäts-, Operational-Risk) in einer kohärenten Methodik erfasst und bewertet.\n• Risikodatenaggregation der nächsten Generation: Implementierung modernster Datenarchitekturen, die konsistente, granulare und zeitnahe Risikoanalysen über alle Geschäftsbereiche hinweg ermöglichen.\n• Advanced Analytics für Risikomanagement: Einsatz von Machine Learning und KI zur Identifikation nicht-linearer Risikozusammenhänge und Optimierung von Frühwarnsystemen.\n• Strategische Risikokultur: Etablierung einer risikobasierten Entscheidungskultur, die Risikobewusstsein und -verantwortung auf allen Ebenen fördert und Risikomanagement als integralen Bestandteil aller Geschäftsprozesse verankert."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Inwiefern verändert Basel III die Anforderungen an die IT-Infrastruktur und Datenarchitektur unserer Bank, und wie hilft ADVISORI bei der strategischen Neuausrichtung?",
        answer: "Basel III stellt beispiellose Anforderungen an die IT-Infrastruktur und Datenarchitektur von Banken – von der Integration verschiedener Datenquellen über Echtzeit-Verarbeitungskapazitäten bis hin zu komplexen Berechnungs- und Reporting-Anforderungen. Diese Herausforderung bietet gleichzeitig die Chance für eine strategische Modernisierung Ihrer IT-Landschaft. ADVISORI unterstützt Sie bei dieser transformativen Reise.\n\n💻 Basel III als Katalysator für IT-Transformation:\n• Überwindung von Datensilos: Die Notwendigkeit, Daten aus verschiedenen Bereichen (Risiko, Finanzen, Handel, Kundenmanagement) für regulatorische Berechnungen zu integrieren, erfordert und fördert den Abbau historisch gewachsener Datensilos.\n• Echtzeit-Kapazitäten: Die Anforderungen an zeitnahe Risiko- und Kapitalberechnungen treiben den Aufbau von Echtzeit-Datenverarbeitungsfähigkeiten voran, die auch für operative Exzellenz und Kundenerlebnisse genutzt werden können.\n• Flexibilität und Skalierbarkeit: Die kontinuierliche Evolution regulatorischer Anforderungen erzwingt den Aufbau flexibler, skalierbarer Architekturen, die auch schnellere Markteinführungen neuer Produkte und Services ermöglichen.\n• Automatisierung und Effizienz: Die Komplexität und Häufigkeit regulatorischer Berechnungen und Reports treiben die Automatisierung von Prozessen voran, die operative Kosten reduziert und Fehlerquoten minimiert.\n\n🔌 ADVISORIs Ansatz zur strategischen IT-Transformation:\n• Regulatory Technology Blueprint: Entwicklung einer zukunftsorientierten IT-Architektur, die regulatorische Anforderungen mit strategischen Geschäftszielen in einem kohärenten technologischen Rahmen verbindet.\n• Data Lineage und Governance: Implementierung durchgängiger Data-Lineage-Systeme, die regulatorische Anforderungen erfüllen und gleichzeitig die Basis für datengetriebene Geschäftsentscheidungen bilden.\n• Cloud-Transformation für Regulatorik: Strategische Nutzung von Cloud-Technologien zur Bewältigung regulatorischer Anforderungen mit besonderem Fokus auf Skalierbarkeit, Kosteneffizienz und regulatorische Compliance.\n• API-basierte Integrationsarchitektur: Entwicklung einer API-Strategie, die nicht nur interne Systeme integriert, sondern auch die Grundlage für Open Banking, Partnerschaften und neue Geschäftsmodelle legt."
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
