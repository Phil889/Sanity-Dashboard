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
    console.log('Updating NIS2 Scope Assessment page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-scope-assessment' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-scope-assessment" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist eine professionelle NIS2 Scope Assessment für die C-Suite mehr als nur eine regulatorische Notwendigkeit und wie positioniert ADVISORI dies strategisch?",
        answer: "Für C-Level-Führungskräfte stellt die NIS2 Scope Assessment nicht nur die Grundlage regulatorischer Compliance dar, sondern fungiert als strategisches Instrument zur Identifikation von Cybersicherheitsrisiken, Optimierung von Compliance-Investitionen und Schaffung von Wettbewerbsvorteilen. Eine ungenaue Scope-Bestimmung kann zu erheblichen finanziellen und reputationellen Risiken führen, während eine strategische Herangehensweise transformative Chancen eröffnet.\n\n🎯 Strategische Bedeutung der NIS2 Scope Assessment für die Führungsebene:\n• Risikomanagement und Haftungsminimierung: Präzise Bestimmung regulatorischer Verpflichtungen reduziert persönliche Haftungsrisiken der Geschäftsleitung und schützt vor regulatorischen Sanktionen.\n• Optimierung von Compliance-Investitionen: Genaue Scope-Definition ermöglicht zielgerichtete Ressourcenallokation und verhindert Over-Engineering oder Unter-Compliance.\n• Strategische Positionierung: Proaktive Compliance kann als Differenzierungsmerkmal im Markt genutzt werden und Vertrauen bei Kunden und Partnern schaffen.\n• M&A-Readiness: Klare Compliance-Position erhöht Unternehmenswert und reduziert Due-Diligence-Risiken bei Transaktionen.\n\n🛠️ ADVISORIs strategischer Ansatz zur Scope Assessment:\n• Business-Impact-Analyse: Wir bewerten nicht nur regulatorische Compliance, sondern analysieren auch die strategischen Auswirkungen auf Geschäftsmodelle und Wachstumspläne.\n• Kostenoptimierung: Unsere Methodik identifiziert Bereiche, in denen Compliance-Anforderungen minimiert werden können, ohne Sicherheitsrisiken zu erhöhen.\n• Zukunftssichere Strategie: Wir berücksichtigen geplante Geschäftserweiterungen und regulatorische Entwicklungen, um nachträgliche Anpassungen zu vermeiden.\n• Stakeholder-Management: Entwicklung kommunikativer Strategien zur transparenten Darstellung der Compliance-Position gegenüber Aufsichtsbehörden, Investoren und Kunden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Welche finanziellen und operationellen Risiken entstehen für unser Unternehmen bei einer fehlerhaften NIS2 Scope-Bestimmung und wie können diese vermieden werden?",
        answer: "Eine fehlerhafte NIS2 Scope-Bestimmung kann weitreichende finanzielle und operationelle Konsequenzen haben, die von regulatorischen Sanktionen bis hin zu strategischen Fehlentscheidungen reichen. Die Kosten einer nachträglichen Korrektur übersteigen die Investition in eine professionelle Assessment um ein Vielfaches und können die Wettbewerbsfähigkeit nachhaltig beeinträchtigen.\n\n⚠️ Finanzielle Risiken einer fehlerhaften Scope-Bestimmung:\n• Regulatorische Sanktionen: Bei Unter-Compliance drohen Bußgelder von bis zu 2% des weltweiten Jahresumsatzes oder 10 Millionen Euro, je nachdem welcher Betrag höher ist.\n• Nachträgliche Compliance-Kosten: Kurzfristige Implementierung von Sicherheitsmaßnahmen ist oft 3-5x teurer als geplante Umsetzung.\n• Geschäftsunterbrechungen: Unvorbereitete Organisationen riskieren operative Disruptions bei der hastigen Compliance-Umsetzung.\n• Reputationsschäden: Öffentliche Sanktionen können Kundenvertrauen und Marktposition nachhaltig beschädigen.\n\n🔍 Operationelle Risiken und strategische Fehlentscheidungen:\n• Over-Engineering: Überschätzung des Scope führt zu unnötigen Investitionen in Cybersicherheitsmaßnahmen, die das Budget belasten ohne entsprechenden Mehrwert zu generieren.\n• Unter-Preparedness: Unterschätzung der Anforderungen kann zu unzureichenden Sicherheitsinfrastrukturen führen, die bei Audits versagen.\n• Strategische Fehlallokation: Unklare Scope-Definition führt zu suboptimaler Ressourcenverteilung zwischen verschiedenen Geschäftsbereichen.\n• M&A-Komplikationen: Ungenaue Compliance-Bewertung kann Transaktionen verzögern oder zum Scheitern bringen.\n\n✅ ADVISORIs Risikominimierungsstrategie:\n• Strukturierte Due Diligence: Systematische Analyse aller relevanten Geschäftsbereiche und Dienstleistungen mit dokumentierter Begründung.\n• Rechtssichere Dokumentation: Erstellung auditfähiger Assessments, die regulatorischen Prüfungen standhalten.\n• Kontinuierliches Monitoring: Implementierung von Prozessen zur laufenden Überwachung von Scope-Änderungen bei Geschäftsentwicklungen.\n• Stakeholder-Alignment: Sicherstellung, dass alle relevanten Unternehmensbereiche die Scope-Entscheidung verstehen und mittragen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie können wir unsere NIS2 Scope Assessment als Katalysator für eine umfassende Cybersicherheitsstrategie nutzen und welche Synergien entstehen dabei?",
        answer: "Die NIS2 Scope Assessment bietet eine einzigartige Gelegenheit, über die reine Compliance-Erfüllung hinaus eine ganzheitliche Cybersicherheitsstrategie zu entwickeln, die operative Exzellenz, Risikominimierung und Wettbewerbsvorteile kombiniert. Dieser strategische Ansatz transformiert eine regulatorische Anforderung in einen Geschäftsvorteil und schafft nachhaltige Organisationsverbesserungen.\n\n🔄 Synergien zwischen NIS2 Assessment und Cybersicherheitsstrategie:\n• Umfassende Risikoinventarisierung: Die für NIS2 erforderliche Analyse kritischer Systeme und Prozesse bildet die Grundlage für ein enterprise-weites Risikomanagement.\n• Governance-Optimierung: NIS2-Anforderungen an Führungsstrukturen können als Blaupause für verbesserte IT-Governance und Entscheidungsprozesse dienen.\n• Technologie-Modernisierung: Compliance-Investitionen in Monitoring und Incident Response schaffen Infrastrukturen, die auch andere Sicherheitsanforderungen erfüllen.\n• Organisationale Reife: Der strukturierte Ansatz zur NIS2-Compliance entwickelt Capabilities, die auf andere regulatorische Frameworks übertragbar sind.\n\n🚀 Strategische Wertschöpfung durch integrierte Herangehensweise:\n• Business Continuity Enhancement: NIS2-Vorbereitungen stärken gleichzeitig die allgemeine Resilienz gegen verschiedene Bedrohungsszenarien.\n• Operational Excellence: Systematische Prozessverbesserungen im Rahmen der Compliance schaffen operative Effizienzgewinne in der gesamten Organisation.\n• Innovation Enablement: Moderne Sicherheitsarchitekturen unterstützen digitale Transformation und neue Geschäftsmodelle.\n• Stakeholder Confidence: Proaktive Cybersicherheit stärkt Vertrauen bei Kunden, Partnern und Investoren.\n\n💡 ADVISORIs integrierter Strategieansatz:\n• Holistische Roadmap-Entwicklung: Wir verbinden NIS2-Compliance mit strategischen Cybersicherheitszielen in einem kohärenten Implementierungsplan.\n• ROI-Optimierung: Identifikation von Investitionen, die sowohl Compliance als auch Business Value generieren.\n• Capability Building: Entwicklung interner Kompetenzen, die über NIS2 hinaus Cybersicherheitsexzellenz fördern.\n• Kontinuierliche Wertschöpfung: Etablierung von Prozessen, die laufende Verbesserungen und Anpassungen an neue Bedrohungen ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Welche strategischen Chancen ergeben sich für unser Unternehmen durch eine proaktive NIS2 Scope Assessment und wie können wir diese für Wettbewerbsvorteile nutzen?",
        answer: "Eine proaktive NIS2 Scope Assessment eröffnet signifikante strategische Chancen, die weit über regulatorische Compliance hinausgehen und transformative Wettbewerbsvorteile schaffen können. Während viele Organisationen NIS2 reaktiv als Last betrachten, ermöglicht ein proaktiver Ansatz die Positionierung als Cybersicherheitsführer und die Erschließung neuer Geschäftsmöglichkeiten.\n\n🌟 Strategische Chancen durch proaktive NIS2-Vorbereitung:\n• First-Mover-Advantage: Frühe Compliance-Bereitschaft positioniert Ihr Unternehmen als vertrauenswürdigen Partner und kann Marktanteile sichern, bevor Wettbewerber nachziehen.\n• Premium-Positioning: Überlegene Cybersicherheitsstandards rechtfertigen Premium-Preise und schaffen Differenzierung in commoditisierten Märkten.\n• Ecosystem Leadership: Proaktive Compliance kann Ihr Unternehmen zum bevorzugten Partner in Lieferketten machen, die ebenfalls NIS2-konform sein müssen.\n• Innovation Catalyst: Moderne Sicherheitsinfrastrukturen ermöglichen sichere Digitalisierung und neue datengetriebene Geschäftsmodelle.\n\n💼 Konkrete Wettbewerbsvorteile und Geschäftschancen:\n• Kundenakquisition: NIS2-Compliance wird zunehmend zum Auswahlkriterium für B2B-Kunden, insbesondere in kritischen Sektoren.\n• Partnerschaftsqualifikation: Überlegene Cybersicherheit öffnet Türen zu strategischen Partnerschaften und Joint Ventures.\n• Investoren-Appeal: Proaktives Risikomanagement erhöht Unternehmensbewertungen und erleichtert Kapitalzugang.\n• Talent Attraction: Moderne Sicherheitskultur zieht Top-Talente an und reduziert Rekrutierungskosten.\n\n🎯 ADVISORIs strategischer Value-Creation-Ansatz:\n• Market Intelligence: Wir analysieren, wie Cybersicherheitsexzellenz in Ihrer Branche als Wettbewerbsvorteil genutzt werden kann.\n• Business Case Development: Entwicklung konkreter ROI-Berechnungen für Cybersicherheitsinvestitionen, die Business Value demonstrieren.\n• Stakeholder Engagement Strategy: Aufbau strategischer Narrative, die Cybersicherheitsführerschaft gegenüber Kunden, Investoren und Partnern kommunizieren.\n• Continuous Advantage Building: Etablierung von Capabilities für kontinuierliche Innovation im Cybersicherheitsbereich, um Vorsprünge nachhaltig zu sichern."
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
