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
    console.log('Updating EU AI Act Data Governance page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-data-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-data-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist strategische Data Governance für KI-Systeme für die C-Suite ein kritischer Erfolgsfaktor und wie transformiert ADVISORI Datenmanagement in einen Wettbewerbsvorteil?",
        answer: "Für die Führungsebene stellt strategische Data Governance bei KI-Systemen weit mehr dar als reine EU AI Act-Compliance – sie wird zum fundamentalen Baustein für datengetriebene Geschäftsmodelle, Vertrauensbildung und nachhaltigen Wettbewerbsvorsprung. Hochwertige Datensteuerung ermöglicht nicht nur regulatorische Sicherheit, sondern auch operative Exzellenz, Innovation und strategische Differenzierung im Markt.\n\n🎯 Strategische Imperative für die Geschäftsleitung:\n• Vertrauensbildung und Reputationsschutz: Transparente, nachvollziehbare Datenqualität demonstriert verantwortungsvollen Umgang mit KI-Technologien und schützt vor kostspieligen Diskriminierungs- oder Bias-Vorfällen.\n• Datengetriebene Wertschöpfung: Systematische Data Governance schafft die Grundlage für erweiterte Analytik, neue Geschäftsmodelle und datenbasierte Innovationen mit erheblichem Umsatzpotenzial.\n• Risikominimierung und Compliance: Proaktive Datenqualitätskontrolle minimiert regulatorische Risiken, Strafen und Betriebsunterbrechungen durch KI-Ausfälle oder -Fehlverhalten.\n• Operative Effizienz: Strukturierte Datenmanagementprozesse reduzieren Nacharbeiten, verbessern KI-Performance und beschleunigen Entscheidungsprozesse.\n\n🛡️ Der ADVISORI-Ansatz für strategische KI-Data Governance:\n• Ganzheitliche Datenwertanalyse: Wir bewerten nicht nur Compliance-Aspekte, sondern auch das strategische Potenzial Ihrer Datenassets für Geschäftsinnovation und Wettbewerbsvorteile.\n• Maßgeschneiderte Governance-Architekturen: Entwicklung von Datensteuerungsframeworks, die präzise auf Ihre spezifischen KI-Anwendungen, Branchen-requirements und Geschäftsziele zugeschnitten sind.\n• Integration in Unternehmensstrategie: Wir positionieren Data Governance als integralen Bestandteil Ihrer digitalen Transformation und Datenmonetarisierungsstrategie.\n• Entscheidungsoptimierung: Bereitstellung von Datenqualitäts- und Governance-Metriken, die der C-Suite fundierte Entscheidungen über KI-Investitionen und Datenanlagestrategie ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche strategischen Geschäftsrisiken entstehen durch unzureichende Data Governance bei KI-Systemen und wie kann ADVISORI diese in Wachstumschancen verwandeln?",
        answer: "Unzureichende Data Governance bei KI-Systemen kann erhebliche strategische Geschäftsrisiken verursachen, die von Reputationsschäden über regulatorische Strafen bis hin zu verpassten Marktchancen reichen. ADVISORI transformiert diese Herausforderungen in strategische Wachstumschancen durch systematische Datenqualitäts- und Governance-Optimierung, die gleichzeitig Compliance sicherstellt und Geschäftswert maximiert.\n\n⚠️ Strategische Risiken mangelhafter KI-Data Governance:\n• Diskriminierung und Bias-Risiken: Unausgewogene oder qualitativ minderwertige Trainingsdaten können zu diskriminierenden KI-Entscheidungen führen, die rechtliche Konsequenzen, Reputationsschäden und Kundenvertrauensverlust verursachen.\n• Regulatorische Compliance-Versagen: Nichteinhaltung der EU AI Act-Datenanforderungen kann zu erheblichen Geldstrafen, Betriebsverboten und verstärkter regulatorischer Überwachung führen.\n• Performance- und Qualitätsmängel: Schlechte Datenqualität führt zu suboptimaler KI-Leistung, ungenauen Vorhersagen und kostspieligen Fehlentscheidungen in kritischen Geschäftsprozessen.\n• Innovations-Lähmung: Ohne vertrauensvolle Datengrundlage können ambitionierte KI-Projekte nicht realisiert werden, was Marktchancen und Wettbewerbsvorteile kostet.\n• Operative Ineffizienzen: Mangelhafte Datensteuerung verursacht höhere Betriebskosten, längere Entwicklungszyklen und suboptimale Ressourcenallokation.\n\n🌟 ADVISORIs Transformationsansatz – von Datenrisiken zu Geschäftschancen:\n• Datenqualität als Innovationstreiber: Aufbau exzellenter Datenqualitätsprozesse, die als Fundament für fortschrittliche KI-Anwendungen und neue Geschäftsmodelle dienen.\n• Compliance als Wettbewerbsvorteil: Transformation von regulatorischen Anforderungen in Differenzierungsmerkmale, die Vertrauen schaffen und neue Marktchancen erschließen.\n• Datenmonetarisierung: Entwicklung von Strategien zur direkten und indirekten Wertschöpfung aus hochwertigen, governance-konformen Datenassets.\n• Operational Excellence: Implementierung von Data Governance-Prozessen, die gleichzeitig Compliance gewährleisten und operative Effizienz, Agilität und Entscheidungsqualität steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir Data Governance-Investitionen strategisch nutzen, um unsere KI-Innovation zu beschleunigen und neue Geschäftsmodelle zu erschließen?",
        answer: "Data Governance-Investitionen sollten nicht als isolierte Compliance-Kosten betrachtet werden, sondern als strategische Enabler für beschleunigte Innovation, neue Geschäftsmodelle und nachhaltige Wettbewerbsvorteile. ADVISORI unterstützt Sie dabei, Ihre Data Governance-Initiativen synergetisch zu nutzen, um gleichzeitig regulatorische Excellence und Geschäftswachstum zu erreichen.\n\n🚀 Strategische Synergien zwischen Data Governance und Innovation:\n• Datenqualität als Innovationsmotor: Hochwertige, governance-konforme Datensets ermöglichen fortschrittlichere KI-Algorithmen, präzisere Modelle und innovative Anwendungsfälle mit höherem Geschäftswert.\n• Vertrauensinfrastruktur für Partnerschaften: Nachweislich exzellente Data Governance ermöglicht strategische Datenpartnerschaften, Kooperationen und neue Ecosystem-basierte Geschäftsmodelle.\n• Beschleunigte Time-to-Market: Systematische Datensteuerungsprozesse reduzieren Entwicklungszyklen, verbessern Prototyping-Geschwindigkeit und ermöglichen schnellere Markteinführungen.\n• Skalierbare Datenarchitekturen: Governance-konforme Dateninfrastrukturen schaffen die Grundlage für skalierbare KI-Services und platform-basierte Geschäftsmodelle.\n\n🎯 ADVISORIs integrierter Innovation-Governance-Ansatz:\n• Datenmonetarisierungs-Strategien: Entwicklung von Ansätzen zur direkten Kommerzialisierung hochwertiger, compliance-konformer Datenprodukte und -Services.\n• Agile Governance-Frameworks: Implementierung flexibler Datensteuerungsprozesse, die Innovation fördern statt hemmen und experimentelle KI-Projekte unterstützen.\n• Cross-Industry-Insights: Übertragung von Data Governance-Erkenntnissen aus verschiedenen Branchen zur Erschließung neuer Marktchancen und Anwendungsfelder.\n• Kompetenzentwicklung: Aufbau interdisziplinärer Teams, die sowohl Data Governance als auch Geschäftsinnovation vorantreiben und als interne Multiplikatoren fungieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Entscheidungskriterien sollte die C-Suite bei der Priorisierung von Data Governance-Initiativen für verschiedene KI-Anwendungen berücksichtigen?",
        answer: "Die strategische Priorisierung von Data Governance-Initiativen erfordert eine ganzheitliche Betrachtung von Geschäftswert, Risikoprofil, regulatorischen Anforderungen und strategischen Zielen. ADVISORI unterstützt die C-Suite bei der Entwicklung datengetriebener Entscheidungsframeworks, die Ressourcen optimal allokieren und maximalen ROI aus Data Governance-Investitionen generieren.\n\n📊 Strategische Priorisierungskriterien für C-Level-Entscheidungen:\n• Geschäftswert und Revenue-Impact: Bewertung des direkten und indirekten Umsatzpotenzials verschiedener KI-Anwendungen und deren Abhängigkeit von hochwertiger Data Governance.\n• Regulatorisches Risikoprofil: Systematische Analyse der EU AI Act-Risikokategorien und potenzieller Compliance-Kosten bei unzureichender Datensteuerung.\n• Strategische Bedeutung: Einschätzung der Rolle verschiedener KI-Systeme für langfristige Wettbewerbsvorteile, Marktpositionierung und Unternehmensstrategie.\n• Implementierungskomplexität: Bewertung des Aufwands, der Zeitrahmen und der organisatorischen Herausforderungen für verschiedene Data Governance-Initiativen.\n• Skalierungspotenzial: Analyse der Wiederverwendbarkeit und Übertragbarkeit von Data Governance-Investitionen auf zukünftige KI-Projekte.\n\n🎯 ADVISORIs strategisches Priorisierungs-Framework:\n• Business Case-Entwicklung: Quantifizierung von Kosten, Nutzen und ROI verschiedener Data Governance-Szenarien mit klaren Empfehlungen für die Geschäftsleitung.\n• Risiko-Rendite-Optimierung: Entwicklung optimaler Portfolio-Ansätze, die Ressourcen basierend auf Risiko-Rendite-Profilen verschiedener KI-Anwendungen allokieren.\n• Phasenweise Umsetzungsplanung: Design gestaffelter Implementierungsstrategien, die Quick Wins mit langfristigen strategischen Zielen verbinden.\n• Performance-Monitoring: Aufbau von KPIs und Governance-Metriken, die kontinuierliche Optimierung und faktenbasierte Anpassungen der Priorisierung ermöglichen."
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
