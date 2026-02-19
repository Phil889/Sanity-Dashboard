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
    console.log('Updating KRITIS page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'regulatory-compliance-management-kritis' })
    
    if (!existingDoc) {
      throw new Error('Document "regulatory-compliance-management-kritis" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist KRITIS-Compliance für die C-Suite mehr als nur eine regulatorische Pflicht und wie kann ADVISORI uns dabei unterstützen, strategische Vorteile zu erzielen?",
        answer: "KRITIS-Compliance transzendiert für C-Level-Führungskräfte die reine Erfüllung regulatorischer Vorgaben und entwickelt sich zu einem fundamentalen Pfeiler der Unternehmensstrategie für kritische Infrastrukturen. Die Auswirkungen von Cyber-Bedrohungen auf kritische Systeme können existenzbedrohende Konsequenzen haben, die weit über finanzielle Verluste hinausgehen und die gesellschaftliche Verantwortung des Unternehmens tangieren.\n\n🎯 Strategische Imperative der KRITIS-Verordnung für die Führungsebene:\n• Schutz der gesellschaftlichen Verantwortung: Als Betreiber kritischer Infrastrukturen tragen Sie Verantwortung für die Versorgungssicherheit und müssen Reputationsrisiken durch Systemausfälle minimieren.\n• Wettbewerbsfähigkeit durch Resilienz: Überlegene Cyber-Sicherheit und Betriebskontinuität werden zu entscheidenden Differenzierungsmerkmalen in einem zunehmend digitalisierten Umfeld.\n• Investorensicherheit und ESG-Compliance: Robuste KRITIS-Compliance stärkt das Vertrauen von Stakeholdern und erfüllt wachsende ESG-Anforderungen bezüglich Cyber-Risiken.\n• Operative Exzellenz: Integrierte Sicherheitsarchitekturen verbessern nicht nur die Compliance, sondern optimieren auch Geschäftsprozesse und betriebliche Effizienz.\n\n🛡️ Der ADVISORI-Ansatz für strategisches KRITIS-Management:\n• Ganzheitliche Risikointegration: Wir verbinden Cyber-Sicherheitsrisiken mit Geschäftsrisiken und entwickeln integrierte Management-Frameworks, die sowohl Compliance als auch Geschäftswert schaffen.\n• Zukunftsorientierte Sicherheitsarchitekturen: Entwicklung anpassungsfähiger Sicherheitslösungen, die nicht nur aktuelle KRITIS-Anforderungen erfüllen, sondern auch auf zukünftige Bedrohungen und regulatorische Entwicklungen vorbereitet sind.\n• Digitale Transformation als Sicherheitshebel: Integration von KRITIS-Compliance in digitale Transformationsinitiativen, um Sicherheit als Enabler für Innovation zu positionieren.\n• Stakeholder-orientierte Kommunikation: Entwicklung transparenter Kommunikationsstrategien, die Sicherheitsmaßnahmen als Wettbewerbsvorteil und gesellschaftlichen Beitrag positionieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Geschäftsrisiken entstehen für kritische Infrastrukturen durch unzureichende KRITIS-Compliance und wie kann ein strategischer Ansatz diese in Wettbewerbsvorteile verwandeln?",
        answer: "Unzureichende KRITIS-Compliance birgt für Betreiber kritischer Infrastrukturen existenzielle Risiken, die weit über regulatorische Sanktionen hinausgehen. Diese Risiken können die Geschäftskontinuität, gesellschaftliche Akzeptanz und langfristige Überlebensfähigkeit des Unternehmens fundamental gefährden. ADVISORI unterstützt Sie dabei, diese Herausforderungen in nachhaltige Wettbewerbsvorteile zu transformieren.\n\n⚠️ Kritische Geschäftsrisiken durch unzureichende KRITIS-Compliance:\n• Systemausfälle mit gesellschaftlichen Konsequenzen: Kritische Infrastrukturen tragen besondere Verantwortung für die Versorgungssicherheit; Ausfälle können zu erheblichen gesellschaftlichen Störungen und massiven Reputationsschäden führen.\n• Regulatorische Sanktionen und Interventionen: BSI-Maßnahmen können von Bußgeldern bis hin zu betrieblichen Eingriffen reichen, die die Geschäftsautonomie erheblich einschränken.\n• Cyber-Angriffe auf kritische Systeme: Unzureichende Schutzmaßnahmen machen kritische Infrastrukturen zu bevorzugten Zielen staatlicher und krimineller Akteure mit potenziell katastrophalen Folgen.\n• Verlust der Betriebslizenz: In extremen Fällen kann unzureichende Compliance zur Aberkennung der Berechtigung zum Betrieb kritischer Infrastrukturen führen.\n• Haftungsrisiken für die Geschäftsleitung: Persönliche Haftung der Vorstände und Geschäftsführer bei Verletzung der Sorgfaltspflichten im Bereich kritischer Infrastrukturen.\n\n🌟 Transformation von Compliance zu Wettbewerbsvorteilen:\n• Vertrauensvorsprung bei Stakeholdern: Überlegene KRITIS-Compliance schafft Vertrauen bei Regulatoren, Kunden und Partnern und ermöglicht bevorzugte Behandlung bei Ausschreibungen und Kooperationen.\n• Technologische Modernisierung: KRITIS-Investitionen können als Katalysator für umfassende Digitalisierung und Automatisierung genutzt werden, die operative Effizienz steigern.\n• Risikoprämienvorteil: Demonstrierte Cyber-Resilienz führt zu besseren Versicherungskonditionen und niedrigeren Risikoprämien bei Finanzierungen.\n• Innovation durch Sicherheit: Sicherheitstechnologien können neue Geschäftsmodelle ermöglichen und als Basis für die Entwicklung sicherheitsrelevanter Dienstleistungen dienen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir KRITIS-Compliance nutzen, um unsere digitale Transformation zu beschleunigen und gleichzeitig die Cyber-Resilienz zu maximieren?",
        answer: "KRITIS-Compliance und digitale Transformation sollten nicht als konkurrierende Prioritäten, sondern als synergetische Initiativen betrachtet werden, die sich gegenseitig verstärken und beschleunigen. Die für KRITIS erforderlichen Investitionen in Sicherheitstechnologien und -prozesse können als strategischer Hebel für eine umfassende digitale Modernisierung dienen und dabei gleichzeitig die Cyber-Resilienz auf ein überdurchschnittliches Niveau heben.\n\n🔄 Strategische Synergien zwischen KRITIS und digitaler Transformation:\n• Security-by-Design als Transformationsprinzip: KRITIS-Anforderungen zwingen zur Implementierung von Security-by-Design-Prinzipien, die eine solidere Basis für digitale Services und Automatisierung schaffen.\n• Datenqualität und -governance: Die für KRITIS-Monitoring erforderliche Datenexzellenz bildet das Fundament für datengetriebene Geschäftsmodelle und KI-Anwendungen.\n• Automatisierung von Sicherheitsprozessen: KRITIS-konforme Monitoring- und Response-Systeme können als Grundlage für die Automatisierung weiterer Geschäftsprozesse genutzt werden.\n• Cloud-Security als Enabler: Die Entwicklung von KRITIS-konformen Cloud-Strategien ermöglicht skalierbare und flexible IT-Infrastrukturen für innovative Dienste.\n\n🚀 ADVISORIs integrierter Transformationsansatz:\n• Digitale Sicherheitsarchitekturen: Entwicklung von Zero-Trust-Architekturen, die sowohl KRITIS-Compliance gewährleisten als auch als Plattform für innovative digitale Services fungieren.\n• DevSecOps-Implementierung: Integration von Sicherheit in agile Entwicklungsprozesse, die sowohl regulatorische Anforderungen erfüllen als auch Innovationsgeschwindigkeit erhöhen.\n• Intelligente Threat Detection: Implementierung von AI/ML-basierten Sicherheitslösungen, die nicht nur Bedrohungen erkennen, sondern auch Geschäftsprozesse optimieren.\n• Resilienz-Engineering: Aufbau adaptiver Systeme, die sich selbst gegen Störungen schützen und gleichzeitig kontinuierliche Innovation ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Überlegungen sind bei der Budgetplanung für KRITIS-Compliance entscheidend und wie können wir den ROI maximieren?",
        answer: "Die Budgetplanung für KRITIS-Compliance erfordert eine strategische Herangehensweise, die über die reine Kostenbetrachtung hinausgeht und die langfristigen Wertschöpfungspotenziale berücksichtigt. Für die C-Suite ist es entscheidend, KRITIS-Investitionen als strategische Ausgaben zu positionieren, die nicht nur Compliance sicherstellen, sondern auch nachhaltige Geschäftsvorteile generieren.\n\n💰 Strategische Budgetierungsansätze für KRITIS-Compliance:\n• Total Cost of Ownership (TCO) vs. Business Value: Berücksichtigung der Gesamtkosten über den Lebenszyklus hinweg sowie der indirekten Wertschöpfung durch verbesserte Resilienz und operative Effizienz.\n• Risikoadjustierte Budgetierung: Integration von Cyber-Risikobewertungen in die Budgetplanung, um das optimale Verhältnis zwischen Schutzinvestitionen und akzeptablem Restrisiko zu bestimmen.\n• Phasenweise Implementierung: Strategische Staffelung der Investitionen zur Optimierung des Cashflows und zur Ermöglichung von Lerneffekten zwischen den Implementierungsphasen.\n• Synergieidentifikation: Systematische Identifikation von Kosteneinsparungen durch Integration von KRITIS-Maßnahmen mit bestehenden IT- und Sicherheitsinvestitionen.\n\n📈 Maximierung des ROI durch strategische Positionierung:\n• Duale Nutzung von Technologien: Auswahl von Sicherheitslösungen, die sowohl KRITIS-Compliance gewährleisten als auch geschäftliche Mehrwerte schaffen (z.B. Analytics-Plattformen für Security und Business Intelligence).\n• Automatisierungseffekte: Investition in Automatisierungstechnologien, die Compliance-Kosten senken und gleichzeitig operative Effizienz steigern.\n• Kompetenzaufbau als Asset: Entwicklung interner Fähigkeiten, die nicht nur für KRITIS relevant sind, sondern auch für die digitale Transformation und Innovation genutzt werden können.\n• Versicherungsoptimierung: Nutzung nachweislich verbesserter Sicherheitsposture zur Reduzierung von Cyber-Versicherungsprämien und zur Verbesserung der Deckungskonditionen.\n\n🔍 ADVISORIs ROI-optimierter Implementierungsansatz:\n• Business Case Development: Entwicklung detaillierter Business Cases, die direkte und indirekte Wertbeiträge quantifizieren und gegenüber Stakeholdern kommunizierbar machen.\n• Metriken und KPIs: Definition messbarkeitsbasierter Erfolgskriterien, die sowohl Compliance-Aspekte als auch Geschäftswert abbilden.\n• Continuous Improvement: Implementierung von Feedback-Mechanismen zur kontinuierlichen Optimierung der KRITIS-Investitionen und Maximierung der Wertschöpfung."
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
