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
    console.log('Updating KRITIS Ongoing Compliance page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-ongoing-compliance' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-ongoing-compliance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie kann KRITIS Ongoing Compliance als strategisches Instrument zur kontinuierlichen Wertschöpfung und Risikosteuerung für die C-Suite fungieren?",
        answer: "KRITIS Ongoing Compliance ist weit mehr als eine regulatorische Pflichterfüllung – es ist ein strategisches Instrument zur nachhaltigen Wertschöpfung und proaktiven Risikosteuerung. Für die Führungsebene bedeutet kontinuierliche Compliance eine systematische Absicherung des Geschäftsmodells gegen operative und regulatorische Risiken, während gleichzeitig Effizienzpotenziale erschlossen und Wettbewerbsvorteile aufgebaut werden.\n\n🎯 Strategische Dimensionen von KRITIS Ongoing Compliance:\n• Geschäftskontinuität als Wertschöpfungsgarant: Kontinuierliche Compliance-Überwachung minimiert das Risiko kostspieliger Betriebsunterbrechungen und sichert damit die Grundlage für stabile Umsätze und Kundenvertrauen.\n• Proaktive Risikoanticipation: Durch fortlaufende Bedrohungsanalysen und Gap-Identifikation können potenzielle Risiken erkannt und behoben werden, bevor sie sich zu geschäftskritischen Problemen entwickeln.\n• Regulatorische Flexibilität: Ein etabliertes Ongoing Compliance-System ermöglicht schnelle Anpassungen an neue Anforderungen ohne kostspielige Ad-hoc-Projekte.\n• Stakeholder-Vertrauen als Kapitalvorteil: Nachweisbare kontinuierliche Compliance stärkt das Vertrauen von Investoren, Kunden und Partnern und kann zu besseren Finanzierungskonditionen führen.\n\n🛡️ ADVISORIs integrierter Wertschöpfungsansatz:\n• Strategische Compliance-Integration: Wir verankern Compliance-Prozesse direkt in Ihre Geschäftsstrategie und operative Steuerung, sodass jede Compliance-Investition messbare Geschäftsvorteile generiert.\n• Datengetriebene Entscheidungsunterstützung: Unsere Monitoring-Systeme liefern nicht nur Compliance-Status, sondern auch wertvolle Geschäftsintelligenz für strategische Entscheidungen.\n• Kostenoptimierung durch Automatisierung: Intelligente Automatisierung reduziert nicht nur Compliance-Kosten, sondern schafft Kapazitäten für wertschöpfende Aktivitäten.\n• Kontinuierliche Effizienzsteigerung: Regelmäßige Prozessoptimierung basierend auf Monitoring-Daten führt zu nachhaltigen Kosteneinsparungen und Leistungsverbesserungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Kostenvorteile und ROI-Potenziale bietet ein professionelles KRITIS Ongoing Compliance Management gegenüber reaktiven Ansätzen?",
        answer: "Ein strategisches KRITIS Ongoing Compliance Management generiert erhebliche Kostenvorteile und messbare ROI-Potenziale, die weit über die Vermeidung von Bußgeldern hinausgehen. Während reaktive Ansätze oft zu kostspieligen Notfallmaßnahmen und Betriebsunterbrechungen führen, ermöglicht proaktive kontinuierliche Compliance eine planbare, kosteneffiziente Risikosteuerung mit nachweisbarem Return on Investment.\n\n💰 Quantifizierbare Kostenvorteile:\n• Vermeidung von Incident-Kosten: Proaktive Überwachung und Prävention können die Kosten von Sicherheitsvorfällen um bis zu 80% reduzieren, da Probleme erkannt werden, bevor sie zu kostspieligen Ausfällen oder Datenverletzungen führen.\n• Reduzierte Audit- und Prüfungskosten: Kontinuierliche Dokumentation und automatisierte Compliance-Nachweise verkürzen Audit-Zyklen erheblich und reduzieren den Aufwand für externe Prüfungen.\n• Optimierte Ressourcenallokation: Automatisierte Monitoring-Systeme ersetzen manuelle Überwachungsaktivitäten und ermöglichen es, spezialisierte Fachkräfte für strategische Aufgaben einzusetzen.\n• Planbare Compliance-Investitionen: Anstatt unvorhersehbarer Notfall-Ausgaben ermöglicht systematisches Ongoing Compliance eine budgetierbare, kontinuierliche Verbesserung.\n\n📈 Strategische ROI-Dimensionen:\n• Business Continuity Value: Jeder vermiedene Tag Betriebsunterbrechung kann je nach Branche Millionenwerte darstellen – kontinuierliche Compliance minimiert dieses Risiko systematisch.\n• Insurance Premium Optimization: Nachweisbare kontinuierliche Compliance kann zu erheblichen Einsparungen bei Cyber-Versicherungsprämien führen.\n• Competitive Advantage: Unternehmen mit nachweislich robuster Compliance-Struktur gewinnen Ausschreibungen häufiger und können Premium-Preise für ihre Dienstleistungen durchsetzen.\n• Innovation Enablement: Solide Compliance-Grundlagen ermöglichen risikoärmere Digitalisierung und Innovation, die neue Geschäftsmöglichkeiten eröffnen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ADVISORI dabei unterstützen, KRITIS Ongoing Compliance als Enabler für digitale Transformation und Innovationsinitiativen zu nutzen?",
        answer: "KRITIS Ongoing Compliance und digitale Transformation sind keine konkurrierenden Prioritäten, sondern synergetische Prozesse, die sich gegenseitig verstärken können. ADVISORI hilft dabei, Compliance-Investitionen strategisch zu nutzen, um gleichzeitig die digitale Modernisierung voranzutreiben und Innovationskapazitäten aufzubauen, während regulatorische Anforderungen erfüllt werden.\n\n🚀 Synergien zwischen Compliance und Innovation:\n• Dateninfrastruktur als Innovationsplattform: Die für KRITIS-Compliance erforderlichen Datenarchitekturen bilden die Grundlage für fortschrittliche Analytics, KI-Anwendungen und datengetriebene Geschäftsmodelle.\n• Automatisierung als Effizienzmotor: Compliance-Automatisierung dient als Katalysator für breitere Digitalisierungsinitiativen und schafft organisatorische Kompetenz für weitere Automatisierungsprojekte.\n• Sicherheitsarchitektur als Vertrauensbasis: Robuste KRITIS-Compliance schafft das notwendige Vertrauen für cloudbasierte Innovationen und digitale Partnerschaften.\n• Monitoring-Kompetenz als Geschäftsintelligenz: Fortschrittliche Compliance-Monitoring-Systeme können erweitert werden, um wertvolle Geschäfts- und Kundeneinblicke zu generieren.\n\n🔧 ADVISORIs integrierter Transformationsansatz:\n• Dual-Use Technologiestrategien: Wir konzipieren Compliance-Technologien so, dass sie gleichzeitig innovative Geschäftsanwendungen unterstützen und maximalen Wertbeitrag leisten.\n• Agile Compliance-Innovation: Implementierung agiler Methoden für kontinuierliche Compliance-Verbesserung, die gleichzeitig Innovationskapazitäten aufbauen.\n• Cloud-First Compliance: Strategische Migration von Compliance-Systemen in moderne Cloud-Umgebungen als Grundlage für weitere Digitalisierungsschritte.\n• API-driven Integration: Entwicklung offener, API-basierter Compliance-Architekturen, die Integration neuer Technologien und Geschäftsmodelle erleichtern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Risiken entstehen durch unzureichendes KRITIS Ongoing Compliance Management und wie kann ADVISORI bei der Transformation helfen?",
        answer: "Unzureichendes KRITIS Ongoing Compliance Management erzeugt ein Kaskaden-Risikoszenario, das von operativen Störungen bis hin zu existenzbedrohenden Geschäftsrisiken reicht. Diese Risiken sind oft unterbewertet, da ihre Auswirkungen zeitversetzt auftreten und sich exponentiell verstärken können. ADVISORI unterstützt bei der systematischen Transformation zu einem robusten, vorausschauenden Compliance-Management.\n\n⚠️ Kritische Risikodimensionen bei unzureichender Ongoing Compliance:\n• Compliance-Drift und regulatorische Blindflecken: Ohne kontinuierliche Überwachung entstehen schleichende Abweichungen, die bei der nächsten Prüfung zu erheblichen Nachbesserungsaufwänden oder Sanktionen führen können.\n• Incident-Eskalationspotenzial: Kleine, unerkannte Sicherheitslücken können zu großflächigen Systemausfällen eskalieren, die nicht nur operative Kosten verursachen, sondern auch Reputationsschäden nach sich ziehen.\n• Regulatorisches Vertrauen und Geschäftsrisiko: Wiederholte Compliance-Probleme können zu verschärfter regulatorischer Überwachung führen und die Geschäftslizenz gefährden.\n• Wettbewerbsnachteile durch Reaktivität: Während Wettbewerber proaktive Compliance-Systeme als Geschäftsvorteil nutzen, verlieren reaktive Unternehmen Marktanteile und Kundvertrauen.\n\n🔄 ADVISORIs Transformationsansatz zur Risikominimierung:\n• Risiko-Assessment und Gap-Analyse: Systematische Bewertung der aktuellen Compliance-Maturity und Identifikation kritischer Verbesserungsbereiche mit prioritätsbasierter Roadmap.\n• Gradueller Transformationsansatz: Schrittweise Transformation bestehender Systeme ohne Geschäftsunterbrechung, mit Quick Wins zur frühen Wertgenerierung.\n• Cultural Change Management: Entwicklung einer proaktiven Compliance-Kultur durch Training, Incentive-Strukturen und Change-Management-Programme.\n• Kontinuierliche Verbesserungsschleifen: Etablierung selbstlernender Compliance-Systeme, die sich kontinuierlich an neue Anforderungen und Bedrohungen anpassen."
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
