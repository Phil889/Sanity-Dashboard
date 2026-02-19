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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'standards-frameworks-nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "standards-frameworks-nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist das NIST Cybersecurity Framework aus C-Level Perspektive essentiell und wie transformiert ADVISORI dessen Implementierung in einen strategischen Wettbewerbsvorteil?",
        answer: "Für die C-Suite ist das NIST Cybersecurity Framework weit mehr als eine technische Compliance-Anforderung – es ist ein strategisches Instrument zur Risikominimierung, Vertrauensbildung und nachhaltigen Wertschöpfung. In einer zunehmend digitalisierten Geschäftswelt können Cyber-Bedrohungen nicht nur operative Unterbrechungen verursachen, sondern auch existenzbedrohende Reputationsschäden und finanzielle Verluste zur Folge haben. ADVISORI transformiert die NIST-Framework-Implementierung in einen systematischen Ansatz zur Stärkung der Unternehmensresilienz.\n\n🎯 Strategische Imperative für die Führungsebene:\n• Risikomanagement: Strukturierte Identifikation, Bewertung und Behandlung von Cyber-Risiken als integraler Bestandteil der Unternehmensführung.\n• Stakeholder-Vertrauen: Demonstration von Cybersecurity-Excellence gegenüber Kunden, Investoren, Partnern und Aufsichtsbehörden.\n• Geschäftskontinuität: Gewährleistung der Betriebsfähigkeit auch bei schwerwiegenden Cyber-Ereignissen durch robuste Detect-, Respond- und Recover-Kapazitäten.\n• Compliance-Effizienz: Erfüllung regulatorischer Anforderungen durch einen international anerkannten Standard.\n\n🛡️ Der ADVISORI-Ansatz für strategische Cyber-Resilienz:\n• Business-Impact orientierte Framework-Anpassung: Wir konfigurieren das NIST-Framework spezifisch für Ihre Geschäftsmodelle, Wertschöpfungsketten und Risikotoleranz.\n• Executive-Dashboard und KPI-Integration: Entwicklung von C-Level-gerechten Metriken und Reporting-Systemen für kontinuierliche Überwachung der Cyber-Resilienz.\n• Investment-Optimierung: Strategische Priorisierung von Cybersecurity-Investitionen basierend auf Geschäftskritikalität und ROI-Bewertungen.\n• Governance-Integration: Einbettung des Frameworks in bestehende Unternehmensführungsstrukturen und Entscheidungsprozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie stellt ADVISORI sicher, dass die NIST Framework-Implementierung auch in komplexen, multi-nationalen Unternehmensstrukturen effektiv funktioniert?",
        answer: "Globale Unternehmen stehen vor der Herausforderung, einheitliche Cybersecurity-Standards über verschiedene Jurisdiktionen, Kulturen und Geschäftseinheiten hinweg zu implementieren. Das NIST Cybersecurity Framework bietet die notwendige Flexibilität für solche komplexen Umgebungen, aber die erfolgreiche Umsetzung erfordert spezialisierte Expertise in der Orchestrierung verteilter Sicherheitsarchitekturen. ADVISORI hat bewährte Methoden entwickelt, um diese Komplexität zu meistern.\n\n🌍 Herausforderungen globaler Framework-Implementierung:\n• Regulatorische Vielfalt: Unterschiedliche Datenschutz- und Cybersecurity-Gesetze in verschiedenen Ländern erfordern angepasste Implementierungsansätze.\n• Kulturelle Unterschiede: Verschiedene Sicherheitskulturen und Risikobewertungen in unterschiedlichen Regionen und Geschäftseinheiten.\n• Technische Heterogenität: Verschiedene IT-Landschaften, Legacy-Systeme und Cloud-Umgebungen über multiple Standorte hinweg.\n• Ressourcen-Koordination: Effiziente Allokation von Cybersecurity-Ressourcen und -Expertise über geografische und organisatorische Grenzen.\n\n🔄 ADVISORI's spezialisierte Orchestrierungsmethodik:\n• Federated Framework Design: Entwicklung einer modularen NIST-Implementierung, die lokale Anpassungen ermöglicht, während globale Konsistenz gewährleistet wird.\n• Cross-Cultural Change Management: Berücksichtigung kultureller Faktoren bei der Entwicklung von Awareness-Programmen und Prozessanpassungen.\n• Unified Governance Structure: Etablierung von globalen Cybersecurity-Governance-Mechanismen mit lokaler Flexibilität für spezifische Anforderungen.\n• Scalable Technology Integration: Design von Sicherheitsarchitekturen, die sowohl zentrale Kontrolle als auch dezentrale Anpassungsfähigkeit ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Welche messbaren ROI-Verbesserungen und Kosteneinsparungen kann die C-Suite durch ADVISORI's strategische NIST Framework-Implementierung erwarten?",
        answer: "Eine professionelle NIST Framework-Implementierung durch ADVISORI ist eine strategische Investition, die sich sowohl in direkten Kosteneinsparungen als auch in langfristigen Wertschöpfungsgewinnen manifestiert. Unsere datengetriebene Herangehensweise maximiert den Return on Security Investment (ROSI) durch präzise Ressourcenallokation und Effizienzoptimierung.\n\n💰 Quantifizierbare Kosteneinsparungen und Effizienzgewinne:\n• Incident Response-Optimierung: Reduzierung der durchschnittlichen Kosten von Cybersecurity-Vorfällen um 40-60% durch verbesserte Detection- und Response-Kapazitäten.\n• Compliance-Effizienz: Verringerung des Aufwands für regulatorische Audits und Assessments um bis zu 50% durch strukturierte Dokumentation und Nachweisführung.\n• Versicherungsvorteile: Potenzielle Reduzierung der Cyber-Versicherungsprämien um 15-25% durch nachgewiesene Framework-Compliance.\n• Operational Excellence: Automatisierung von Sicherheitsprozessen führt zu 30-40% weniger manuellen Aufwand bei Routine-Sicherheitsoperationen.\n\n📈 Strategische Wertschöpfung und Wettbewerbsvorteile:\n• Market Differentiation: Nachgewiesene NIST-Compliance als Differenzierungsmerkmal bei Ausschreibungen und Partnerschaften, besonders in B2B-Märkten.\n• Accelerated Digital Transformation: Robuste Cybersecurity-Fundamente ermöglichen sichere und schnellere Adoption neuer Technologien und Geschäftsmodelle.\n• Supply Chain Trust: Gestärkte Position als vertrauenswürdiger Partner in Lieferketten durch transparente und standardisierte Sicherheitspraktiken.\n• Innovation Enablement: Sichere Innovationsumgebungen fördern risikobereite Entwicklung neuer Produkte und Services ohne Kompromittierung der Sicherheit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie garantiert ADVISORI, dass die NIST Framework-Implementierung nicht nur aktuellen Bedrohungen begegnet, sondern auch zukünftige Cyber-Herausforderungen antizipiert?",
        answer: "In der rasant evolvierende Cyber-Bedrohungslandschaft ist es für die C-Suite kritisch, dass Cybersecurity-Investitionen nicht nur heutige Risiken addressieren, sondern auch zukunftssicher sind. ADVISORI verfolgt einen vorausschauenden Ansatz, der das NIST Framework als adaptives und evolutionsfähiges System implementiert, das kontinuierlich mit neuen Bedrohungen und Technologien Schritt hält.\n\n🔮 Zukunftsorientierte Framework-Architektur:\n• Threat Intelligence Integration: Kontinuierliche Einbindung von globalen Bedrohungsdaten und Trend-Analysen in die Framework-Anpassung.\n• Emerging Technology Assessment: Proaktive Bewertung neuer Technologien (AI, Quantum Computing, IoT) und deren Implikationen für die Cybersecurity-Strategie.\n• Adaptive Security Architecture: Design flexibler Sicherheitsarchitekturen, die schnelle Anpassungen an neue Bedrohungsszenarien ermöglichen.\n• Predictive Analytics: Einsatz von Machine Learning und AI für die Vorhersage und Prävention zukünftiger Angriffsvektoren.\n\n🚀 Strategische Zukunftssicherung durch ADVISORI:\n• Modular Framework Evolution: Aufbau des NIST-Frameworks in erweiterbaren Modulen, die unabhängig aktualisiert und angepasst werden können.\n• Continuous Learning Culture: Etablierung von Lernmechanismen und Feedback-Schleifen, die organisatorische Anpassungsfähigkeit an neue Cyber-Realitäten fördern.\n• Technology-Agnostic Principles: Fokus auf fundamentale Sicherheitsprinzipien, die technologie-unabhängig sind und damit langfristige Stabilität gewährleisten.\n• Innovation Lab Approach: Schaffung von sicheren Testumgebungen für die Bewertung und Integration neuer Sicherheitstechnologien ohne Risiko für die Produktionsumgebung."
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
