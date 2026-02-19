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
    console.log('Updating EU AI Act Risk Management System page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-risk-management-system' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-risk-management-system" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist ein strategisches Risikomanagementsystem für KI-Systeme für die C-Suite mehr als nur eine Compliance-Anforderung und wie unterstützt ADVISORI bei der Transformation?",
        answer: "Für die Führungsebene stellt ein robustes KI-Risikomanagementsystem nicht nur die Erfüllung der EU AI Act-Anforderungen sicher, sondern fungiert als strategisches Instrument zur Steuerung von Innovation, Vertrauensbildung und Wettbewerbsvorteilen. Es geht weit über reine Compliance hinaus und wird zum zentralen Baustein einer verantwortungsvollen KI-Strategie, die Geschäftswert schafft und Risiken systematisch minimiert.\n\n🎯 Strategische Imperative für die Geschäftsleitung:\n• Risikominimierung und Reputationsschutz: Proaktive Identifikation und Minderung von KI-Risiken schützt vor kostspieligen Fehlentscheidungen, rechtlichen Konsequenzen und Reputationsschäden.\n• Vertrauensaufbau bei Stakeholdern: Ein systematisches Risikomanagement demonstriert verantwortungsvollen Umgang mit KI-Technologien gegenüber Kunden, Partnern, Investoren und Regulierungsbehörden.\n• Beschleunigte Innovation: Strukturierte Risikobewertungsprozesse ermöglichen schnellere, fundierte Entscheidungen bei der Einführung neuer KI-Anwendungen.\n• Operative Exzellenz: Integrierte Risikomanagementprozesse verbessern die Qualität und Verlässlichkeit von KI-Systemen und optimieren deren Geschäftswert.\n\n🛡️ Der ADVISORI-Ansatz für strategisches KI-Risikomanagement:\n• Ganzheitliche Risikobewertung: Wir analysieren nicht nur technische Risiken, sondern auch deren Auswirkungen auf Geschäftsziele, Compliance-Anforderungen und strategische Initiativen.\n• Maßgeschneiderte Governance-Frameworks: Entwicklung von Risikomanagementstrukturen, die präzise auf Ihre spezifischen KI-Anwendungen, Branchenrisiken und Geschäftsmodelle zugeschnitten sind.\n• Integration in Unternehmensstrategie: Wir positionieren KI-Risikomanagement als integralen Bestandteil Ihrer digitalen Transformation und Innovationsstrategie.\n• Entscheidungsunterstützung: Bereitstellung klarer, datengestützter Risikoinformationen, die der C-Suite fundierte Entscheidungen über KI-Investitionen und Risikobereitschaft ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche strategischen Wettbewerbsvorteile kann unser Unternehmen durch ein fortschrittliches KI-Risikomanagementsystem gegenüber Konkurrenten erzielen?",
        answer: "Ein strategisch ausgerichtetes KI-Risikomanagementsystem kann erhebliche Wettbewerbsvorteile generieren, die weit über die bloße Compliance-Erfüllung hinausgehen. Während viele Unternehmen KI-Risikomanagement als notwendiges Übel betrachten, bietet ein durchdachter Ansatz die Möglichkeit, sich als vertrauensvoller, innovativer und operativ exzellenter Marktführer zu positionieren.\n\n🚀 Strategische Wettbewerbsvorteile durch KI-Risikomanagement:\n• Schnellere Markteinführung: Systematische Risikobewertungsprozesse ermöglichen eine beschleunigte, aber dennoch verantwortungsvolle Einführung neuer KI-Produkte und -Services.\n• Verbessertes Kundenvertrauen: Transparente Risikokommunikation und nachweislich sichere KI-Systeme schaffen Vertrauen bei Kunden und ermöglichen Premium-Positionierung.\n• Regulatorische Vorreiterrolle: Proaktive Compliance-Umsetzung positioniert Sie als bevorzugten Partner für Regulierungsbehörden und kann zu Wettbewerbsvorteilen bei Ausschreibungen führen.\n• Qualitätsvorsprung: Kontinuierliche Risikoüberwachung und -optimierung führt zu qualitativ besseren, zuverlässigeren KI-Systemen als bei Wettbewerbern.\n• Kosten- und Effizienzvorteile: Systematische Risikominderung reduziert Nacharbeiten, Fehlentscheidungen und Compliance-Kosten und erhöht die operative Effizienz.\n\n🎯 ADVISORIs Ansatz zur Schaffung strategischer Vorteile:\n• Differenzierungsstrategien: Entwicklung einzigartiger Risikomanagement-Ansätze, die als Alleinstellungsmerkmal in der Marktpositionierung genutzt werden können.\n• Innovation als Wettbewerbsmotor: Aufbau von Risikomanagementprozessen, die Innovation fördern statt hemmen und schnellere Produktentwicklungszyklen ermöglichen.\n• Stakeholder-Integration: Design von Risikokommunikationsstrategien, die Vertrauen bei Kunden, Investoren und Partnern aufbauen und neue Geschäftschancen erschließen.\n• Operative Transformation: Implementierung von Risikomanagementprozessen, die gleichzeitig die operative Exzellenz und Effizienz der gesamten KI-Organisation steigern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir die Investitionen in KI-Risikomanagement strategisch nutzen, um unsere digitale Transformation und Innovation zu beschleunigen?",
        answer: "Die Implementierung eines umfassenden KI-Risikomanagementsystems sollte nicht als isolierte Compliance-Initiative betrachtet werden, sondern als strategischer Katalysator für die gesamte digitale Transformation Ihres Unternehmens. Die Investitionen in Risikomanagement können synergetisch genutzt werden, um Innovation zu beschleunigen, operative Exzellenz zu steigern und neue Geschäftsmöglichkeiten zu erschließen.\n\n🔄 Synergien zwischen KI-Risikomanagement und digitaler Transformation:\n• Data Governance als Innovationsmotor: Die für Risikomanagement erforderliche Datenqualität und -transparenz bildet das Fundament für datengetriebene Geschäftsmodelle und fortschrittliche Analytik.\n• Automatisierung und Prozessoptimierung: Risikomanagementprozesse können als Blaupause für die Automatisierung anderer Geschäftsprozesse dienen und operative Effizienz steigern.\n• KI-Kompetenzen und -Kapazitäten: Der Aufbau interner KI-Risikomanagement-Fähigkeiten entwickelt gleichzeitig die technischen und organisatorischen Kompetenzen für breitere KI-Initiativen.\n• Vertrauensinfrastruktur: Robuste Risikomanagementpraktiken schaffen die Vertrauensbasis für ambitioniertere KI-Anwendungen und Partnerschaften.\n\n🚀 ADVISORIs integrierter Transformationsansatz:\n• Strategische Technologie-Roadmap: Entwicklung einer Architektur, die Risikomanagement-Anforderungen mit Innovations- und Transformationszielen verbindet und Synergien maximiert.\n• Agile Risiko-Innovation-Frameworks: Implementierung von Methoden, die Risikobeurteilung nahtlos in Innovationsprozesse integrieren und Entwicklungszyklen beschleunigen.\n• Kompetenzentwicklung: Aufbau interdisziplinärer Teams, die sowohl Risikomanagement als auch Innovation vorantreiben können und als interne Multiplikatoren fungieren.\n• Kultureller Wandel: Förderung einer risikobewussten Innovationskultur, die verantwortungsvolle Experimente und kontinuierliches Lernen unterstützt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Risiken entstehen für unser Unternehmen, wenn wir KI-Risikomanagement nur oberflächlich implementieren, und wie kann ADVISORI diese in Chancen verwandeln?",
        answer: "Eine oberflächliche, minimale Umsetzung von KI-Risikomanagement birgt erhebliche strategische Risiken, die weit über regulatorische Strafen hinausgehen und die Wettbewerbsfähigkeit, Innovation und Vertrauenswürdigkeit Ihres Unternehmens fundamental gefährden können. ADVISORI unterstützt Sie dabei, diese Herausforderungen in strategische Chancen zu transformieren und Risikomanagement als Wettbewerbsvorteil zu positionieren.\n\n⚠️ Strategische Risiken oberflächlicher KI-Risikomanagement-Umsetzung:\n• Reputations- und Vertrauensschäden: Unzureichende Risikokontrolle kann zu KI-bedingten Fehlentscheidungen, Diskriminierung oder Sicherheitsvorfällen führen, die das Vertrauen von Kunden, Partnern und Investoren nachhaltig beschädigen.\n• Innovations-Lähmung: Ohne systematische Risikobewertung werden KI-Initiativen entweder zu risikoreich oder zu konservativ angegangen, was Innovation hemmt und Marktchancen verpasst.\n• Regulatorische Nachteile: Oberflächliche Compliance kann zu Strafen, verstärkter Aufsicht und Wettbewerbsnachteilen bei regulatorischen Genehmigungen führen.\n• Operationelle Ineffizienzen: Fragmentierte Risikoprozesse verursachen höhere Kosten, langsamere Entscheidungen und qualitativ schlechtere KI-Systeme.\n• Strategische Fehlentscheidungen: Ohne fundierte Risikoinformationen riskieren Sie Fehlinvestitionen in KI-Technologien und -Anwendungen.\n\n🌟 ADVISORIs Transformationsansatz – von Risiken zu strategischen Chancen:\n• Risiko-Wert-Analyse: Identifikation von KI-Anwendungsbereichen mit suboptimalem Risiko-Rendite-Verhältnis und Entwicklung von Optimierungsstrategien mit signifikantem Geschäftspotenzial.\n• Innovation-Risiko-Integration: Aufbau von Risikomanagementprozessen, die Innovation fördern statt hemmen und als Enabler für ambitionierte KI-Projekte fungieren.\n• Stakeholder-Vertrauen als Asset: Transformation von Risikomanagement in ein strategisches Instrument zur Vertrauensbildung, das neue Partnerschaften und Marktchancen erschließt.\n• Operative Excellence-Programme: Implementierung von Risikomanagementprozessen, die gleichzeitig Compliance sicherstellen und operative Effizienz, Qualität und Geschwindigkeit steigern."
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
