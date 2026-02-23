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
    console.log('Updating KRITIS Regelmäßige Tests & Audits page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-regelmaessige-tests-audits' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-regelmaessige-tests-audits" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie können regelmäßige KRITIS-Tests und Audits als strategisches Instrument zur Risikominimierung und Wertschöpfung für die C-Suite eingesetzt werden?",
        answer: "Regelmäßige KRITIS-Tests und Audits sind strategische Investitionen, die weit über die reine Compliance-Erfüllung hinausgehen und direkten Geschäftswert generieren. Für die Führungsebene bieten systematische Test- und Audit-Programme eine datenbasierte Grundlage für risikoinformierte Entscheidungen und proaktive Werterhaltung kritischer Geschäftsassets.\n\n🎯 Strategischer Mehrwert für die C-Suite:\n• Risikotransparenz als Entscheidungsgrundlage: Regelmäßige Tests liefern quantifizierbare Risikoindikatoren, die eine präzise Bewertung der Cyberrisiko-Exposition und deren potenzielle Geschäftsauswirkungen ermöglichen.\n• Proaktive Schadensvermeidung: Früherkennung von Sicherheitslücken verhindert kostspielige Incidents und schützt vor Reputationsschäden, die das Marktvertrauen und den Unternehmenswert beeinträchtigen könnten.\n• Investitionsoptimierung: Test-Ergebnisse ermöglichen eine datengestützte Priorisierung von Sicherheitsinvestitionen und maximieren den ROI von IT-Sicherheitsbudgets.\n• Stakeholder-Vertrauen: Nachweisbare, regelmäßige Validierung der Sicherheitsmaßnahmen stärkt das Vertrauen von Investoren, Aufsichtsbehörden und Geschäftspartnern.\n\n🛡️ ADVISORIs wertschöpfender Test-Ansatz:\n• Business-Impact-orientierte Testplanung: Wir konzentrieren unsere Tests auf die geschäftskritischsten Assets und Prozesse, um maximale Relevanz für strategische Entscheidungen zu gewährleisten.\n• Quantifizierte Risikobewertung: Unsere Test-Ergebnisse werden in Geschäftsterminologie übersetzt, einschließlich potenzieller finanzieller Auswirkungen und Wahrscheinlichkeiten.\n• Strategische Roadmap-Entwicklung: Basierend auf Test-Erkenntnissen entwickeln wir langfristige Sicherheitsstrategien, die Geschäftsziele unterstützen und Wettbewerbsvorteile schaffen.\n• Continuous Intelligence: Etablierung kontinuierlicher Test-Zyklen, die eine permanente Überwachung der Risikosituation und agile Anpassung der Sicherheitsstrategie ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche konkreten Kostenvorteile und ROI-Messungen ermöglichen systematische KRITIS-Tests und Audits gegenüber ad-hoc Sicherheitsüberprüfungen?",
        answer: "Systematische KRITIS-Tests und Audits generieren messbare Kostenvorteile und nachweisbare ROI-Potenziale durch proaktive Risikominimierung und operative Effizienzsteigerung. Im Gegensatz zu reaktiven ad-hoc Überprüfungen ermöglichen planmäßige Test-Programme eine kostenoptimierte, strategische Herangehensweise an die IT-Sicherheit mit quantifizierbaren Geschäftsvorteilen.\n\n💰 Quantifizierbare Kostenoptimierungen:\n• Incident-Kostenvermeidung: Systematische Tests können die Kosten von Sicherheitsvorfällen um bis zu 85% reduzieren, da kritische Schwachstellen erkannt werden, bevor sie zu kostspieligen Ausfällen oder Datenverletzungen führen.\n• Optimierte Remediation-Kosten: Planmäßige Identifikation von Sicherheitslücken ermöglicht kosteneffiziente Behebung im Rahmen regulärer Wartungszyklen statt teurer Notfall-Interventionen.\n• Reduzierte Compliance-Risiken: Kontinuierliche Validierung minimiert das Risiko regulatorischer Bußgelder und verkürzt Audit-Zyklen durch bereits verfügbare Compliance-Nachweise.\n• Versicherungsoptimierung: Nachweisbare, systematische Sicherheitstests können zu erheblichen Reduktionen bei Cyber-Versicherungsprämien führen und bessere Deckungskonditionen ermöglichen.\n\n📊 ROI-Dimensionen und Messbarkeit:\n• Verfügbarkeitsgewinn: Jeder durch proaktive Tests vermiedene Ausfalltag kann je nach Branche Millionenwerte darstellen – systematische Tests minimieren dieses Risiko nachweisbar.\n• Effizienzsteigerung: Automatisierte Test-Komponenten reduzieren den manuellen Aufwand für Sicherheitsvalidierung um bis zu 70% und schaffen Kapazitäten für strategische Initiativen.\n• Wettbewerbsvorteil: Unternehmen mit nachweislich robusten Test-Programmen gewinnen Ausschreibungen häufiger und können Premium-Preise für sichere Dienstleistungen durchsetzen.\n• Innovation-Enablement: Vertrauen in die Sicherheitsarchitektur durch regelmäßige Validierung ermöglicht risikoärmere Digitalisierung und neue Geschäftsmodelle."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie kann ADVISORI dabei unterstützen, KRITIS-Tests und Audits als Enabler für kontinuierliche Geschäftsverbesserung und Innovationsförderung zu nutzen?",
        answer: "KRITIS-Tests und Audits sind nicht nur Compliance-Instrumente, sondern strategische Hebel für kontinuierliche Geschäftsverbesserung und Innovationsförderung. ADVISORI hilft dabei, Test-Programme so zu konzipieren, dass sie gleichzeitig Sicherheitsrisiken minimieren, operative Effizienz steigern und neue Geschäftsmöglichkeiten erschließen.\n\n🚀 Innovation durch systematische Sicherheitsvalidierung:\n• Datengetriebene Geschäftsintelligenz: Test-Ergebnisse liefern wertvolle Einblicke in Systemperformance und Nutzerverhalten, die für Geschäftsoptimierung und Produktentwicklung genutzt werden können.\n• Technologie-Modernisierung: Sicherheitstests identifizieren veraltete Systeme und schaffen Business Cases für strategische IT-Modernisierung und Cloud-Migration.\n• Prozessoptimierung: Audit-Erkenntnisse decken Effizienzpotenziale in Geschäftsprozessen auf und ermöglichen datenbasierte Verbesserungsmaßnahmen.\n• Competitive Intelligence: Regelmäßige Bedrohungsanalysen liefern Markteinblicke und identifizieren neue Geschäftsrisiken und -chancen.\n\n🔧 ADVISORIs integrierter Verbesserungsansatz:\n• Dual-Purpose Test-Design: Wir konzipieren Tests so, dass sie gleichzeitig Sicherheitslücken aufdecken und Geschäftsverbesserungspotenziale identifizieren.\n• Continuous Improvement Integration: Etablierung systematischer Feedback-Schleifen, die Test-Erkenntnisse direkt in Geschäftsprozessoptimierung und strategische Planung einfließen lassen.\n• Innovation-Safe Testing: Entwicklung von Test-Umgebungen, die sichere Erprobung neuer Technologien und Geschäftsmodelle ermöglichen, ohne Produktionssysteme zu gefährden.\n• Cross-functional Value Creation: Verknüpfung von Sicherheitstests mit anderen Geschäftsfunktionen wie Qualitätsmanagement, Kundenservice und Produktentwicklung für maximalen Synergieeffekt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Risiken entstehen durch unzureichende oder oberflächliche KRITIS-Test- und Audit-Programme und wie adressiert ADVISORI diese Herausforderungen?",
        answer: "Unzureichende oder oberflächliche KRITIS-Test- und Audit-Programme erzeugen eine gefährliche Scheinsicherheit, die zu gravierenden strategischen Risiken für die Unternehmensführung führt. Diese Risiken manifestieren sich oft erst bei kritischen Ereignissen und können dann existenzbedrohende Auswirkungen haben. ADVISORI entwickelt tiefgreifende, methodisch fundierte Test-Programme, die echte Sicherheitstransparenz schaffen.\n\n⚠️ Kritische Risikodimensionen oberflächlicher Tests:\n• Falsche Sicherheit durch Check-Box-Compliance: Oberflächliche Tests erfüllen zwar formale Anforderungen, übersehen aber kritische Schwachstellen, die bei realen Angriffen ausgenutzt werden können.\n• Regulatory Blind Spots: Unvollständige Audit-Programme können zu Compliance-Lücken führen, die bei regulatorischen Prüfungen zu erheblichen Sanktionen und Geschäftseinschränkungen führen.\n• Incident-Eskalationsrisiko: Unerkannte Sicherheitslücken können bei Vorfällen zu unkontrollierten Eskalationen führen, die weit über den ursprünglichen Schaden hinausgehen.\n• Stakeholder-Vertrauensverlust: Wenn oberflächliche Tests kritische Probleme übersehen, die später öffentlich werden, kann dies zu nachhaltigen Reputationsschäden und Vertrauensverlust führen.\n\n🔍 ADVISORIs methodischer Tiefenansatz:\n• Multi-Layer Security Validation: Wir führen Tests auf allen Architekturebenen durch, von der physischen Infrastruktur bis zu Anwendungslogik und organisatorischen Prozessen.\n• Real-World Attack Simulation: Verwendung aktueller Angriffstechniken und Threat Intelligence für realistische Bedrohungssimulation statt theoretischer Checklisten.\n• Business-Context Testing: Tests werden im Kontext tatsächlicher Geschäftsprozesse durchgeführt, um die realen Auswirkungen potenzieller Vorfälle zu verstehen.\n• Continuous Evolution: Regelmäßige Anpassung der Test-Methoden an neue Bedrohungen und Technologien, um dauerhafte Relevanz und Effektivität zu gewährleisten."
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
