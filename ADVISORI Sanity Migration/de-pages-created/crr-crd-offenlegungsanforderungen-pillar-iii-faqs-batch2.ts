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
    console.log('Updating CRR/CRD Offenlegungsanforderungen Pillar III page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'crr-crd-offenlegungsanforderungen-pillar-iii' })
    
    if (!existingDoc) {
      throw new Error('Document "crr-crd-offenlegungsanforderungen-pillar-iii" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche technischen Lösungen empfiehlt ADVISORI für die effiziente Umsetzung der Pillar III Anforderungen und wie integrieren sich diese in die bestehende IT-Landschaft?",
        answer: "Die technische Umsetzung der Pillar III Anforderungen erfordert eine durchdachte Architektur, die sowohl regulatorische Compliance als auch operative Effizienz gewährleistet. ADVISORI verfolgt einen pragmatischen Ansatz, der die vorhandene IT-Landschaft optimal nutzt und gleichzeitig zukunftssichere Komponenten integriert, um den wachsenden Anforderungen gerecht zu werden.\n\n💻 Technologische Lösungskomponenten für effiziente Pillar III Offenlegung:\n• Data Warehouse und Data Lakes: Zentralisierte Datenrepositorien für die konsistente Speicherung und Verarbeitung aller relevanten Daten aus unterschiedlichen Quellsystemen.\n• ETL/ELT-Frameworks: Robuste Prozesse zur Extraktion, Transformation und Ladung von Daten mit transparenter Nachvollziehbarkeit aller Verarbeitungsschritte.\n• Regulatory Reporting Engines: Spezialisierte Berechnungs- und Reportingmodule mit vorkonfigurierten regulatorischen Logiken und Templates.\n• Workflow-Management-Systeme: Digitalisierte Prozesssteuerung mit definierten Freigabestufen, Eskalationsmechanismen und Audit-Trails.\n• Business Intelligence und Visualisierungstools: Intuitive Dashboards für Management-Übersichten und dynamische Analysen der offengelegten Informationen.\n\n🔄 Integrationsstrategie für bestehende IT-Landschaften:\n• Adapter-basierte Anbindung: Entwicklung flexibler Schnittstellen zu bestehenden Kernsystemen ohne invasive Änderungen an kritischen Anwendungen.\n• Service-orientierte Architektur: Implementierung modularer Microservices für spezifische Funktionalitäten, die sich nahtlos in die Gesamtarchitektur einfügen.\n• API-Management: Standardisierte Schnittstellen für den kontrollierten Datenaustausch zwischen verschiedenen Systemen und Anwendungen.\n• Legacy-System-Integration: Pragmatische Einbindung älterer Systeme durch geeignete Middleware und Datenextraktionsroutinen.\n• Cloud-hybride Ansätze: Nutzung von Cloud-Technologien für skalierbare Rechenleistung bei gleichzeitiger Berücksichtigung von Datenschutz- und Compliance-Anforderungen.\n\nUnsere technologischen Lösungen werden immer institutsspezifisch angepasst und berücksichtigen sowohl die vorhandene IT-Landschaft als auch strategische Entwicklungspläne, um eine nachhaltige und zukunftssichere Implementierung zu gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie können Finanzinstitute die Pillar III Offenlegung als strategischen Vorteil nutzen und welche Best Practices empfiehlt ADVISORI für die Kommunikation mit Stakeholdern?",
        answer: "Die Pillar III Offenlegung wird oft primär als regulatorische Pflichtübung betrachtet. Vorausschauende Institute erkennen jedoch, dass eine strategisch ausgerichtete Offenlegungspraxis erhebliche Wettbewerbsvorteile bieten kann, indem sie das Vertrauen von Investoren stärkt und die Marktpositionierung verbessert. ADVISORI unterstützt Finanzinstitute dabei, dieses strategische Potenzial zu erschließen und die Stakeholder-Kommunikation zu optimieren.\n\n🌟 Strategische Vorteile einer exzellenten Offenlegungspraxis:\n• Vertrauensbildung: Transparente und qualitativ hochwertige Offenlegungen signalisieren Integrität und stärken das Vertrauen von Investoren, Rating-Agenturen und Kunden.\n• Kapitalkosten-Optimierung: Umfassende und verständliche Risikooffenlegungen können zu günstigeren Finanzierungsbedingungen und einer positiven Bewertung durch Ratingagenturen führen.\n• Differenzierung im Wettbewerb: Eine über die Mindestanforderungen hinausgehende Transparenz kann ein Differenzierungsmerkmal im Vergleich zu weniger offenen Wettbewerbern sein.\n• Präventives Reputationsmanagement: Proaktive Kommunikation von Risikomanagementpraktiken kann im Krisenfall als Schutzschild dienen und negative Marktreaktionen abfedern.\n• Attraktivität für ESG-orientierte Investoren: Besonders im Bereich der Nachhaltigkeitsrisiken kann eine umfassende Offenlegung die Attraktivität für institutionelle Investoren mit ESG-Fokus steigern.\n\n📣 Best Practices für eine wirkungsvolle Stakeholder-Kommunikation:\n• Klarheit und Zugänglichkeit: Strukturierte Darstellung komplexer Informationen mit erläuternden Grafiken, Glossaren und kontextbezogenen Erklärungen.\n• Narrative Integration: Einbettung quantitativer Daten in ein qualitatives Narrativ, das die Geschäftsstrategie und den Risikoappetit des Instituts verdeutlicht.\n• Konsistenz über Berichtsformate: Harmonisierung der Offenlegungsberichte mit anderen Kommunikationskanälen wie Geschäftsberichten, Investor Relations und Nachhaltigkeitsberichten.\n• Digitale Aufbereitung: Nutzung interaktiver digitaler Formate, die eine benutzerfreundliche Navigation und tiefergehende Analysen ermöglichen.\n• Benchmark-Vergleiche: Kontextualisierung der eigenen Kennzahlen durch Branchenvergleiche und historische Entwicklungen.\n\nADVISORIs Beratungsansatz unterstützt Sie dabei, die regulatorische Pflicht in einen strategischen Hebel zu transformieren und durch exzellente Offenlegungspraktiken Vertrauen bei allen relevanten Stakeholdern aufzubauen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche besonderen Herausforderungen ergeben sich aus den Pillar III Offenlegungsanforderungen für kleinere und mittlere Finanzinstitute und wie unterstützt ADVISORI bei der proportionalen Umsetzung?",
        answer: "Kleinere und mittlere Finanzinstitute (KMIs) stehen bei der Umsetzung der Pillar III Anforderungen vor spezifischen Herausforderungen, da sie oft über begrenztere Ressourcen verfügen, aber dennoch komplexe regulatorische Vorgaben erfüllen müssen. ADVISORI bietet einen proportionalen Implementierungsansatz, der die spezifischen Bedürfnisse und Möglichkeiten dieser Institute berücksichtigt und eine effiziente Compliance-Lösung gewährleistet.\n\n⚖️ Spezifische Herausforderungen für kleinere und mittlere Institute:\n• Ressourcenlimitierung: Begrenzte personelle und finanzielle Kapazitäten für die Implementierung und laufende Berichterstattung.\n• Technologische Einschränkungen: Oft weniger ausgereifte IT-Infrastrukturen und geringere Automatisierungsgrade im Reporting.\n• Know-how-Lücken: Herausforderungen beim Aufbau und Erhalt spezialisierten regulatorischen Fachwissens in kleineren Teams.\n• Komplexitätsbewältigung: Schwierigkeiten bei der Interpretation und praktischen Umsetzung komplexer regulatorischer Anforderungen.\n• Kosten-Nutzen-Verhältnis: Verhältnismäßig höhere Implementierungskosten pro Bilanzvolumen im Vergleich zu Großbanken.\n\n🔍 ADVISORIs proportionaler Implementierungsansatz:\n• Fokussierte Gap-Analyse: Identifikation der spezifisch relevanten Anforderungen unter Berücksichtigung des Proportionalitätsprinzips und der Wesentlichkeit.\n• Priorisierte Roadmap: Entwicklung einer gestaffelten Implementierungsstrategie mit Fokus auf hochrelevante Bereiche und regulatorische Kernelemente.\n• Kosteneffiziente Technologielösungen: Empfehlung skalierbarer und modularer Lösungen, die auch für kleinere Institute wirtschaftlich tragfähig sind.\n• Vorlagen und Standardisierung: Bereitstellung vorkonfigurierter Templates und Best-Practice-Ansätze zur Reduzierung des Implementierungsaufwands.\n• Selektive Automatisierung: Identifikation von Prozessschritten mit dem höchsten Automatisierungspotenzial für ein optimales Kosten-Nutzen-Verhältnis.\n\n🤝 Spezifische Unterstützungsleistungen für KMIs:\n• Regulatorische Interpretation: Praxisnahe Übersetzung komplexer Anforderungen in konkrete Handlungsanweisungen.\n• Skill-Transfer: Gezielte Schulungen und Wissenstransfer zur Befähigung der internen Teams.\n• Shared-Service-Modelle: Entwicklung von Ansätzen zur gemeinsamen Ressourcennutzung, z.B. innerhalb von Verbundstrukturen.\n• Fallstudien und Benchmarking: Vergleichsanalysen mit ähnlich strukturierten Instituten zur Identifikation effizienter Lösungsansätze.\n• Flexibles Ressourcenmodell: Bedarfsorientierte Unterstützung in Phasen mit erhöhtem Ressourcenbedarf oder bei spezifischen Fachfragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie integriert man ESG-Faktoren und Nachhaltigkeitsrisiken in die Pillar III Offenlegung und welche aktuellen regulatorischen Entwicklungen sind zu beachten?",
        answer: "Die Integration von ESG-Faktoren (Environmental, Social, Governance) und Nachhaltigkeitsrisiken in die Pillar III Offenlegung gewinnt zunehmend an Bedeutung und stellt viele Institute vor neue methodische und datenbezogene Herausforderungen. ADVISORI unterstützt bei der systematischen Einbindung dieser Aspekte unter Berücksichtigung der aktuellen und sich entwickelnden regulatorischen Anforderungen.\n\n🌱 Regulatorische Entwicklung der ESG-Offenlegungsanforderungen:\n• EBA ITS zur ESG-Offenlegung: Technische Standards mit detaillierten Tabellen und KPIs zu Umwelt-, Sozial- und Governance-Risiken.\n• Green Asset Ratio (GAR): Offenlegung des Anteils taxonomiekonformer Aktivitäten und Exposition gegenüber klimasensitiven Sektoren.\n• Banking Package (CRR III/CRD VI): Erweiterte Anforderungen zur Offenlegung von Übergangsrisiken und physischen Risiken im Zusammenhang mit dem Klimawandel.\n• TCFD-Alignment: Zunehmende Erwartung an die Konsistenz der Offenlegung mit den Empfehlungen der Task Force on Climate-related Financial Disclosures.\n• Proportionalitätsprinzipien: Abgestufte Anforderungen je nach Größe und Komplexität des Instituts sowie Wesentlichkeit der ESG-Risiken.\n\n🔄 Methodische Ansätze zur ESG-Integration:\n• Doppelte Wesentlichkeit: Berücksichtigung sowohl der finanziellen Wesentlichkeit (Outside-In) als auch der Umwelt- und Sozialwirkung (Inside-Out).\n• Szenarioanalysen und Stresstests: Integration von Klimaszenarien in die Risikobewertung und Offenlegung potenzieller Auswirkungen.\n• ESG-Scorecards: Entwicklung und Implementierung von Bewertungssystemen für ESG-Risiken im Kreditportfolio.\n• Datenaggregation: Etablierung von Prozessen zur Erfassung, Validierung und Aggregation von ESG-bezogenen Daten aus internen und externen Quellen.\n• Transitionsplanung: Offenlegung der strategischen Ausrichtung und konkreten Maßnahmen zur Erreichung von Nachhaltigkeitszielen und zur Risikominderung.\n\n📋 ADVISORIs praktischer Implementierungsansatz:\n• Gap-Analyse: Bewertung bestehender ESG-Datenverfügbarkeit und -qualität sowie Identifikation erforderlicher Erweiterungen.\n• Data-Sourcing-Strategie: Entwicklung eines Konzepts zur Beschaffung und Validierung externer ESG-Daten und Ratings.\n• Prozessintegration: Einbettung von ESG-Faktoren in bestehende Risikomanagement- und Berichtsprozesse.\n• IT-Anpassung: Erweiterung von Datenmodellen und Reporting-Tools für die Erfassung und Auswertung von ESG-Kennzahlen.\n• Governance-Framework: Etablierung klarer Verantwortlichkeiten und Kontrollen für die ESG-bezogene Offenlegung.\n\nUnser Ziel ist es, Sie bei der Entwicklung einer zukunftssicheren ESG-Offenlegungsstrategie zu unterstützen, die sowohl die aktuellen regulatorischen Anforderungen erfüllt als auch die dynamische Weiterentwicklung in diesem Bereich antizipiert."
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
