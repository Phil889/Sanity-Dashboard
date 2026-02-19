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
    console.log('Updating KRITIS Schwachstellenanalyse & Risikobewertung page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schwachstellenanalyse-risikobewertung' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schwachstellenanalyse-risikobewertung" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie stellt eine systematische Schwachstellenanalyse sicher, dass unsere kritische Infrastruktur den sich entwickelnden Cyber-Bedrohungen standhält und welche strategischen Vorteile bietet ADVISORI der C-Suite?",
        answer: "Eine professionelle Schwachstellenanalyse ist für die C-Suite weit mehr als eine technische Compliance-Übung – sie ist ein strategisches Instrument zur Sicherung der Geschäftskontinuität und des Unternehmenswerts. In kritischen Infrastrukturen können bereits kleinste Schwachstellen zu katastrophalen Ausfällen führen, die nicht nur regulatorische Strafen, sondern auch massive Reputationsschäden und Vertrauensverluste nach sich ziehen. ADVISORI transformiert die Schwachstellenanalyse von einer reaktiven zu einer proaktiven strategischen Maßnahme.\n\n🎯 Strategische Imperative für die Geschäftsführung:\n• Schutz des Unternehmenswerts: Systematische Identifizierung und Priorisierung von Risiken, die den Geschäftsbetrieb und die Marktposition gefährden könnten.\n• Regulatorische Compliance: Erfüllung der KRITIS-Verordnung und BSI-Standards zur Vermeidung von Bußgeldern und behördlichen Sanktionen.\n• Operative Exzellenz: Minimierung ungeplanter Ausfallzeiten durch proaktive Schwachstellenbehebung und optimierte Sicherheitsarchitekturen.\n• Stakeholder-Vertrauen: Demonstration gegenüber Kunden, Partnern und Aufsichtsbehörden, dass Sicherheit systematisch und professionell gemanagt wird.\n\n🔍 Der ADVISORI-Ansatz für C-Level-Entscheidungen:\n• Ganzheitliche Risikobetrachtung: Wir analysieren nicht nur technische Schwachstellen, sondern auch organisatorische und prozessuale Risiken, die Ihre Geschäftsziele beeinträchtigen könnten.\n• Quantifizierte Risikobewertung: Bereitstellung konkreter Kennzahlen und finanzieller Auswirkungsanalysen, die fundierte Investitionsentscheidungen ermöglichen.\n• Strategische Roadmap-Entwicklung: Ableitung priorisierter Handlungsempfehlungen, die sowohl kurzfristige Compliance als auch langfristige Resilienz sicherstellen.\n• Executive Reporting: Aufbereitung der Ergebnisse in verständlichen Management-Dashboards mit klaren Handlungsempfehlungen für die Geschäftsleitung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welchen messbaren ROI liefert eine professionelle Schwachstellenanalyse durch ADVISORI und wie wirkt sich dies auf die Betriebskosten und Risikoposition aus?",
        answer: "Eine professionelle Schwachstellenanalyse von ADVISORI ist eine der kosteneffizientesten Investitionen im Bereich Cybersicherheit und Compliance. Der Return on Investment manifestiert sich sowohl in direkten Kosteneinsparungen als auch in der Vermeidung potenziell katastrophaler Verluste. Für die C-Suite bedeutet dies eine messbare Verbesserung der Risikoposition und operative Effizienzgewinne.\n\n💰 Direkte finanzielle Auswirkungen und ROI-Faktoren:\n• Vermeidung von Compliance-Strafen: KRITIS-Verstöße können Bußgelder von bis zu 20 Millionen Euro zur Folge haben. Eine systematische Schwachstellenanalyse minimiert dieses Risiko erheblich.\n• Reduktion von Incident-Response-Kosten: Proaktive Schwachstellenbehebung ist bis zu 100-mal kostengünstiger als die Bewältigung eines Sicherheitsvorfalls nach dessen Eintritt.\n• Optimierung der Sicherheitsinvestitionen: Gezielter Einsatz von Sicherheitsbudgets durch priorisierte Maßnahmen statt ungezielter Sicherheitstechnologie-Beschaffung.\n• Verbesserung der Cyber-Versicherungskonditionen: Nachweisliche Schwachstellenanalysen können zu günstigeren Prämien und besseren Deckungssummen führen.\n\n📈 Langfristige strategische Werttreiber:\n• Erhöhte Betriebsstabilität: Systematische Schwachstellenbehebung reduziert ungeplante Ausfallzeiten und verbessert die Service-Verfügbarkeit für Kunden.\n• Stärkung der Marktposition: Demonstrierte Sicherheitsexzellenz kann als Wettbewerbsvorteil bei Ausschreibungen und Kundenakquise genutzt werden.\n• Fundament für digitale Transformation: Solide Sicherheitsgrundlagen ermöglichen die sichere Einführung neuer Technologien und Geschäftsmodelle.\n• Risikotransparenz für Investoren: Klare Risikoidentifikation und -bewertung stärkt das Vertrauen von Stakeholdern und kann sich positiv auf Unternehmensbewertungen auswirken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die Bedrohungslandschaft für kritische Infrastrukturen entwickelt sich exponentiell – von APTs bis zu hybriden Warfare-Szenarien. Wie gewährleistet ADVISORI, dass unsere Risikobewertung diesen dynamischen Bedrohungen gerecht wird?",
        answer: "Die moderne Bedrohungslandschaft für kritische Infrastrukturen ist geprägt von hochentwickelten, persistenten Bedrohungen (APTs), staatlich gesponserten Akteuren und hybriden Kriegsführungstaktiken. ADVISORI versteht, dass statische Schwachstellenanalysen in diesem Umfeld unzureichend sind. Wir implementieren adaptive, intelligence-gestützte Analysemethoden, die der Dynamik und Komplexität moderner Cyber-Bedrohungen gerecht werden.\n\n🌐 Adaptive Bedrohungsmodellierung für kritische Infrastrukturen:\n• Advanced Threat Intelligence Integration: Kontinuierliche Einbindung aktueller Threat-Intelligence-Feeds und Analyse von Angriffskampagnen gegen vergleichbare Infrastrukturen.\n• Szenariobasierte Risikomodellierung: Entwicklung realistischer Angriffsszenarien basierend auf aktuellen Taktiken, Techniken und Verfahren (TTPs) relevanter Bedrohungsakteure.\n• Geopolitische Risikointegration: Berücksichtigung geopolitischer Spannungen und deren Auswirkungen auf die Bedrohungslage für Ihre spezifische Branche und Region.\n• Supply-Chain-Risikoanalyse: Umfassende Bewertung von Drittanbieter-Risiken und Abhängigkeiten in komplexen Lieferketten.\n\n🛡️ Proaktive Sicherheitsarchitektur von ADVISORI:\n• Purple Team Assessments: Kombination aus Red Team-Angriffssimulationen und Blue Team-Verteidigungsanalysen für realistische Bedrohungstests.\n• Zero-Trust-Architektur-Bewertung: Analyse der aktuellen Sicherheitsarchitektur gegen Zero-Trust-Prinzipien und Identifikation von Verbesserungspotenzialen.\n• OT/IT-Konvergenz-Sicherheit: Spezielle Fokussierung auf die einzigartigen Risiken der Operational Technology in kritischen Infrastrukturen.\n• Kontinuierliche Monitoring-Integration: Aufbau von Capability-Frameworks für kontinuierliche Bedrohungserkennung und adaptive Sicherheitsmaßnahmen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI die Schwachstellenanalyse von einem Compliance-getriebenen Kostenfaktor zu einem strategischen Business-Enabler für Wachstum und Innovation?",
        answer: "ADVISORI revolutioniert das traditionelle Verständnis von Schwachstellenanalysen, indem wir sie als strategischen Business-Enabler positionieren, der Wachstum und Innovation aktiv unterstützt. Für die C-Suite bedeutet dies, dass Sicherheitsinvestitionen nicht nur Risiken minimieren, sondern auch neue Geschäftschancen eröffnen und die Marktposition stärken.\n\n🚀 Von Compliance zu strategischem Wettbewerbsvorteil:\n• Sicherheit als Marktdifferenziator: Nachweisliche Sicherheitsexzellenz wird zu einem USP bei Kundenakquise und Partnerschaftsverhandlungen, insbesondere in sicherheitskritischen Branchen.\n• Accelerated Digital Transformation: Solide Sicherheitsgrundlagen ermöglichen beschleunigte Digitalisierungsprojekte, da Risiken kalkulierbar und beherrschbar werden.\n• Neue Geschäftsmodelle: Demonstrierte Cyber-Resilienz öffnet Türen zu neuen Märkten und Kundengruppen, die hohe Sicherheitsstandards voraussetzen.\n• Operative Effizienz: Systematische Schwachstellenbehebung reduziert nicht nur Sicherheitsrisiken, sondern optimiert auch Betriebsprozesse und Systemperformance.\n\n💡 Strategische Wertschöpfung durch ADVISORI:\n• Business-Impact-Analyse: Direkte Verknüpfung von Sicherheitsmaßnahmen mit Geschäftszielen und quantifizierbare Auswirkungen auf KPIs und Revenue-Streams.\n• Innovation-Security-Integration: Beratung zur nahtlosen Integration von Sicherheitsaspekten in Innovationsprozesse ohne Verlangsamung der Time-to-Market.\n• Ecosystem-Sicherheit: Entwicklung von Sicherheitsstrategien, die nicht nur interne Systeme schützen, sondern auch das gesamte Partner- und Kunden-Ökosystem absichern.\n• C-Level Security Governance: Aufbau von Governance-Strukturen, die Sicherheit als strategische Geschäftsfunktion etablieren und in alle Unternehmensentscheidungen integrieren."
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
    console.log('✅ C-Level FAQs batch 1 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
