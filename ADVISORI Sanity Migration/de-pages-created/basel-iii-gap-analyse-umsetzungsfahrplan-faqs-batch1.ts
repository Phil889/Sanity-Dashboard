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
    console.log('Updating Basel III Gap-Analyse & Umsetzungsfahrplan page with FAQs batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'basel-iii-gap-analyse-umsetzungsfahrplan' })
    
    if (!existingDoc) {
      throw new Error('Document "basel-iii-gap-analyse-umsetzungsfahrplan" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Wie unterstützt eine strukturierte Gap-Analyse den C-Level bei der strategischen Ausrichtung für die Basel III-Implementierung?",
        answer: "Eine strategisch konzipierte Gap-Analyse für Basel III transformiert eine regulatorische Pflichtübung in einen wertvollen Steuerungsmechanismus für die Unternehmensführung. Sie bietet der C-Suite nicht nur einen präzisen Überblick über Compliance-Lücken, sondern auch wertvolle Einblicke für strategische Entscheidungen und Ressourcenallokation, die weit über die reine Regulierungskonformität hinausgehen.\n\n🔍 Strategischer Mehrwert für die Führungsebene:\n• Priorisierte Entscheidungsgrundlage: Präzise Identifikation kritischer Handlungsfelder ermöglicht eine strategische Priorisierung von Investitionen und Ressourcen, basierend auf regulatorischer Dringlichkeit und geschäftlichem Impact.\n• Kostenoptimierung durch Gesamtperspektive: Vermeidung isolierter Lösungsansätze und Identifikation von Synergiepotenzialen durch eine ganzheitliche Betrachtung aller Basel III-Komponenten (Kapital, Liquidität, Risikomanagement).\n• Strategische Neuausrichtung: Frühzeitige Erkennung, wo regulatorische Anforderungen bestehende Geschäftsmodelle unter Druck setzen, ermöglicht proaktive Anpassungen der Geschäftsstrategie.\n• Wettbewerbsvorteile durch Effizienz: Fundierte Planung vermeidet kostspielige Nachbesserungen und schafft Wettbewerbsvorteile durch schnellere Implementierung und geringere Compliance-Kosten.\n\n📊 ADVISORI's differenzierter Gap-Analyse-Ansatz:\n• Mehrdimensionale Bewertungsmethodik: Integration von regulatorischen, geschäftlichen und technologischen Perspektiven für eine ganzheitliche Bewertung.\n• Quantitative Impact-Bewertung: Präzise Quantifizierung der Auswirkungen auf Kapitalquoten, Liquiditätskennzahlen und Risikoprofile als Basis für fundierte Entscheidungen.\n• Strategische Handlungsoptionen: Entwicklung alternativer Implementierungsszenarien mit Kosten-Nutzen-Bewertung für informierte Führungsentscheidungen.\n• Benchmark-Integration: Einbindung von Branchenvergleichen und Best Practices zur Kontextualisierung der Ergebnisse und Identifikation von Optimierungspotenzialen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie können wir den Return on Investment (ROI) einer umfassenden Basel III Gap-Analyse und eines strukturierten Umsetzungsfahrplans quantifizieren?",
        answer: "Die Quantifizierung des ROI einer Basel III Gap-Analyse und eines strukturierten Umsetzungsfahrplans manifestiert sich sowohl in direkten Kosteneinsparungen als auch in strategischen Vorteilen, die weit über die reine Compliance hinausgehen. Für die C-Suite bietet eine methodische Herangehensweise messbare finanzielle Vorteile und zukunftssichernde strategische Werte.\n\n💰 Quantifizierbare finanzielle Vorteile:\n• Implementierungskostenreduktion: Eine methodische Gap-Analyse und Planung reduziert nachweislich die Gesamtimplementierungskosten um 25-40% durch Vermeidung von Redundanzen, ineffizienten Ad-hoc-Lösungen und nachträglichen Anpassungen.\n• Ressourceneffizienz: Präzise Ressourcenplanung verhindert Überdimensionierung und ermöglicht die optimale Nutzung interner Kapazitäten, was die externen Beratungskosten um bis zu 30% senken kann.\n• Kapitaloptimierung: Frühzeitige Identifikation von Optimierungspotenzialen in der Kapitalstruktur kann die Kapitalkosten signifikant reduzieren und die Risk-Adjusted Return on Capital (RAROC) verbessern.\n• Verkürzung der Implementierungszeit: Strukturierte Planung reduziert die Gesamtimplementierungszeit um durchschnittlich 4-6 Monate, was zu früheren Compliance-Vorteilen und geringeren Projektkosten führt.\n\n🌟 Strategische Wertschöpfung über Compliance hinaus:\n• Risikominderung: Systematische Identifikation von Implementierungsrisiken reduziert potenzielle Complianceverstöße und damit verbundene regulatorische Strafen oder Reputationsschäden.\n• Wettbewerbsvorteile: Effiziente Implementierung schafft Freiraum für strategische Initiativen, während Wettbewerber noch mit Compliance-Basics beschäftigt sind.\n• Geschäftsmodelltransformation: Tiefgreifende Analyse ermöglicht die Identifikation von Geschäftsbereichen, die unter Basel III unter Druck geraten, und die rechtzeitige Entwicklung alternativer Strategien.\n• Datenstrategische Vorteile: Die für Basel III optimierte Datenhaltung und -verarbeitung schafft Grundlagen für datengetriebene Geschäftsstrategien und AI/ML-Anwendungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche kritischen Erfolgsfaktoren sollten bei der Entwicklung eines Basel III Umsetzungsfahrplans besonders berücksichtigt werden?",
        answer: "Die Entwicklung eines erfolgreichen Basel III Umsetzungsfahrplans erfordert mehr als nur regulatorisches Know-how. Sie verlangt ein tiefgreifendes Verständnis der organisatorischen Dynamik, technologischen Möglichkeiten und strategischen Prioritäten des Unternehmens. ADVISORI's Erfahrung aus zahlreichen Implementierungsprojekten hat die folgenden kritischen Erfolgsfaktoren identifiziert.\n\n🔑 Fundamentale Erfolgstreiber für die Implementierungsplanung:\n• Executive Sponsorship mit Entscheidungskompetenz: Verankerung des Projekts auf höchster Führungsebene mit klaren Entscheidungsbefugnissen und direktem Reporting an die C-Suite, um Verzögerungen und Ressourcenkonflikte zu minimieren.\n• Ganzheitlicher Implementierungsansatz: Integration aller Basel III-Komponenten in einen kohärenten Plan, der Interdependenzen berücksichtigt und Silodenken überwindet – besonders zwischen Finanzen, Risikomanagement und IT.\n• Ausgewogene Priorisierungsmethodik: Balancierung regulatorischer Dringlichkeit mit Implementierungsaufwand und strategischem Geschäftswert, um eine optimale Sequenzierung zu gewährleisten.\n• Inkrementeller Umsetzungsansatz: Strukturierung in manageable Teilprojekte mit klaren Zwischenergebnissen, um Komplexität zu reduzieren und frühe Erfolge sicherzustellen.\n\n📈 Differenzierende Qualitätsmerkmale eines erfolgreichen Fahrplans:\n• Präzise Ressourcenplanung und Kapazitätsmanagement: Realistische Einschätzung der benötigten Ressourcen unter Berücksichtigung von Engpässen und Spezialistenbedarfen, mit klarer Staffing-Strategie für Schlüsselrollen.\n• Integriertes Change Management: Systematische Berücksichtigung der organisatorischen Veränderungsdimension mit dediziertem Stakeholder Management und Kommunikationsplan.\n• Flexible Governance-Struktur: Etablierung eines adaptiven Steuerungsmodells, das schnelle Entscheidungen ermöglicht und gleichzeitig robuste Qualitätssicherung gewährleistet.\n• Kontinuierliche Validierung: Implementierung von regelmäßigen Checkpoints zur Validierung der Annahmen, Neubewertung von Prioritäten und Anpassung des Plans an regulatorische Entwicklungen und organisatorische Veränderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie unterstützt ADVISORI bei der Integration der Basel III-Anforderungen in die übergeordnete Digitalisierungsstrategie der Bank?",
        answer: "Die Integration der Basel III-Implementierung in die Digitalisierungsstrategie einer Bank repräsentiert eine strategische Chance, regulatorische Notwendigkeit in digitalen Mehrwert zu transformieren. ADVISORI's Ansatz vermeidet isolierte Compliance-Lösungen und fokussiert auf die Schaffung nachhaltiger digitaler Fundamente, die sowohl regulatorische Anforderungen erfüllen als auch zukünftige Innovationen beschleunigen.\n\n🔄 Synergien zwischen Basel III und Digitalisierung:\n• Datenarchitektur als gemeinsames Fundament: Nutzung der Basel III-getriebenen Datenanforderungen als Katalysator für die Entwicklung einer zukunftsfähigen, skalierbaren Datenarchitektur, die auch analytische Use Cases und KI-Anwendungen unterstützt.\n• Prozessautomatisierung mit dualem Nutzen: Implementierung von automatisierten Prozessen, die sowohl regulatorische Compliance effizienter gestalten als auch operative Exzellenz fördern und Grundlagen für End-to-End-Prozessdigitalisierung schaffen.\n• Integrierte Risikomodellierung: Aufbau fortschrittlicher Risikomodellierungskapazitäten, die sowohl Basel III-Anforderungen erfüllen als auch präzisere Kundenrisikobewertungen für Geschäftsentscheidungen ermöglichen.\n• Governance-Rahmenwerk mit Digitalbezug: Entwicklung von Governance-Strukturen, die gleichzeitig regulatorische Compliance sicherstellen und das Management digitaler Initiativen unterstützen.\n\n🚀 ADVISORI's Integrationsmethodik:\n• Digital Readiness Assessment: Systematische Bewertung, inwieweit bestehende und geplante digitale Infrastrukturen Basel III-Anforderungen unterstützen können, mit Identifikation von Optimierungspotenzialen.\n• Integrierte Roadmap-Entwicklung: Abstimmung der Basel III-Implementierungsmeilensteine mit der digitalen Transformationsagenda, um Ressourcenkonflikte zu minimieren und Synergien zu maximieren.\n• Technologieportfolio-Optimierung: Evaluation und Auswahl von Technologielösungen, die sowohl Basel III-Compliance unterstützen als auch strategische digitale Kapazitäten aufbauen.\n• Agile Implementierungsmethodik: Anwendung agiler Prinzipien bei der Basel III-Implementierung, die kontinuierliche Verbesserung fördern und flexible Anpassungen an sich ändernde digitale Prioritäten ermöglichen."
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
    console.log('✅ FAQs batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
