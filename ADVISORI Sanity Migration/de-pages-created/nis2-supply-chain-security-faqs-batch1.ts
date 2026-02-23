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
    console.log('Updating NIS2 Supply Chain Security page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-supply-chain-security' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-supply-chain-security" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist NIS2-konforme Supply Chain Security für die C-Suite mehr als nur Vendor Management und wie transformiert ADVISORI dies zu einem strategischen Wettbewerbsvorteil?",
        answer: "Die NIS2-Richtlinie hat Supply Chain Security von einer operativen IT-Funktion zu einer strategischen C-Level-Verantwortung erhoben. Für kritische und wichtige Einrichtungen bedeutet dies nicht nur die Bewertung von Lieferanten, sondern die Orchestrierung eines ganzheitlichen Ökosystems der Cyber-Resilienz. ADVISORI positioniert NIS2-Supply Chain Security als Katalysator für Marktdifferenzierung und als Fundament für nachhaltige Geschäftsexpansion.\n\n🎯 Strategische Transformation der Lieferkettensicherheit:\n• Ecosystem Resilience als Marktdifferenzierung: Unternehmen mit nachweislich sicheren und transparenten Lieferketten gewinnen Vertrauen bei Großkunden, Regulatoren und Investoren, was direkt in Auftragsvolumen und Unternehmensbewertung übersetzt.\n• Supply Chain als Innovation Driver: Systematische Sicherheitsbewertungen decken Optimierungspotenziale in der Lieferkette auf und ermöglichen die Identifikation innovativer, sicherheitsbewusster Partner.\n• Risikominimierung und Kostenoptimierung: Proaktive Supply Chain Security reduziert sowohl direkte als auch indirekte Kosten von Lieferkettenunterbrechungen erheblich.\n• Regulatorische Sicherheit: NIS2-konforme Supply Chain Governance schützt vor Sanktionen bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes.\n\n💡 Der ADVISORI-Ansatz für strategische Supply Chain Security:\n• Geschäftsorientierte Lieferkettenarchitektur: Wir entwickeln Supply Chain Security-Systeme, die nicht nur NIS2-Anforderungen erfüllen, sondern auch Ihre Sourcing-Strategien und Wachstumspläne unterstützen.\n• C-Level Supply Chain Dashboard: Bereitstellung von Executive Dashboards, die der Geschäftsleitung transparente Einblicke in Supply Chain Risks und deren Auswirkungen auf Geschäftsziele geben.\n• Integrierte Supplier Lifecycle Management: Verknüpfung der Supply Chain Security mit Ihrem Procurement und Vendor Management für eine ganzheitliche Lieferantensteuerung.\n• Kontinuierliche Wertschöpfung: Etablierung von Prozessen, die Supply Chain Security-Investitionen kontinuierlich in messbare Geschäftsvorteile und Kosteneinsparungen umwandeln."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI von NIS2-Supply Chain Security Investitionen und welchen messbaren Beitrag leistet dies zur operativen Effizienz und Kostenreduktion?",
        answer: "Investitionen in NIS2-konforme Supply Chain Security generieren sowohl quantifizierbare Kosteneinsparungen als auch strategische Wertsteigerungen, die sich direkt auf die Profitabilität und operative Effizienz auswirken. ADVISORI entwickelt ROI-Modelle, die sowohl Risikomitigation als auch Effizienzgewinne transparent machen und der C-Suite fundierte Entscheidungsgrundlagen für Supply Chain Security-Investitionen liefern.\n\n💰 Direkte Kosteneinsparungen und operative Effizienz:\n• Vermeidung von Supply Chain Disruptions: Jede verhinderte Lieferkettenunterbrechung schützt direkt Produktionskosten, Umsätze und vermeidet Notfallbeschaffungskosten. Bei kritischen Infrastrukturen können Supply Chain-Ausfälle Kosten von 500.000€ bis mehrere Millionen Euro pro Tag verursachen.\n• Optimierung von Procurement-Prozessen: Systematische Vendor Assessments reduzieren den Aufwand für ad-hoc Due Diligence und ermöglichen automatisierte Compliance-Überprüfungen.\n• Reduzierte Cyber-Versicherungsprämien: Nachweisbare Supply Chain Security führt zu günstigeren Versicherungskonditionen und besseren Deckungen bei Third-Party-Risiken.\n• Vermeidung regulatorischer Sanktionen: Vollständige NIS2-Supply Chain Compliance schützt vor empfindlichen Geldstrafen und den damit verbundenen Reputationsschäden.\n\n📈 Strategische Werttreiber und Wachstumseffekte:\n• Beschleunigte Supplier Onboarding: Standardisierte Security Assessment-Prozesse reduzieren die Time-to-Market für neue Lieferantenbeziehungen erheblich.\n• Verbesserte Verhandlungsposition: Transparente Supply Chain Security-Standards stärken Ihre Position in Vertragsverhandlungen und ermöglichen bessere Konditionen.\n• Erhöhte Kundenzufriedenheit: Zuverlässige und sichere Lieferketten führen zu höherer Servicequalität und stärkerer Kundenbindung.\n• M&A-Vorteile: Unternehmen mit exzellenten Supply Chain Security-Systemen sind attraktivere Übernahmeziele und erzielen höhere Bewertungen bei Transaktionen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die NIS2-Richtlinie macht Unternehmen für Sicherheitsvorfälle in ihrer Lieferkette mitverantwortlich. Wie stellt ADVISORI sicher, dass unser Supply Chain Security-System proaktiv und rechtssicher ist?",
        answer: "Die NIS2-Richtlinie führt das Konzept der 'shared responsibility' ein, wodurch Organisationen für Sicherheitsvorfälle ihrer Lieferanten mitverantwortlich gemacht werden können. Dies erfordert nicht nur reaktive Incident Response, sondern proaktive Risikomitigation und rechtssichere Dokumentation aller Supply Chain Security-Maßnahmen. ADVISORI implementiert defensive und offensive Supply Chain Security-Strategien, die sowohl regulatorische Compliance als auch rechtliche Absicherung gewährleisten.\n\n🛡️ Proaktive Supply Chain Risk Mitigation:\n• Predictive Risk Analytics: Einsatz von KI-gestützten Systemen zur Früherkennung von Risiken in der Lieferkette, bevor sie zu Sicherheitsvorfällen werden.\n• Continuous Supplier Monitoring: Implementierung von 24/7-Überwachungssystemen, die Veränderungen in der Sicherheitslage von Lieferanten in Echtzeit erfassen und bewerten.\n• Threat Intelligence Integration: Kontinuierliche Einbindung aktueller Bedrohungsinformationen zur proaktiven Anpassung der Supply Chain Security-Maßnahmen.\n• Automated Response Capabilities: Entwicklung automatisierter Systeme zur sofortigen Reaktion auf Supply Chain Security-Vorfälle.\n\n⚖️ Rechtssichere NIS2-Compliance und Dokumentation:\n• Comprehensive Audit Trails: Lückenlose Dokumentation aller Supply Chain Security-Aktivitäten zur Demonstration der due diligence gegenüber Aufsichtsbehörden.\n• Legal-Grade Risk Assessments: Entwicklung rechtlich belastbarer Risikobewertungen, die im Fall von Compliance-Prüfungen oder rechtlichen Auseinandersetzungen Bestand haben.\n• Contractual Security Framework: Erstellung wasserdichter Vertragsklauseln und SLAs, die Supply Chain Security-Verantwortlichkeiten klar definieren und rechtlich absichern.\n• Incident Attribution und Liability Management: Etablierung von Prozessen zur eindeutigen Zuordnung von Sicherheitsvorfällen und zur Minimierung der Haftungsrisiken."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI NIS2-Supply Chain Security von einer reinen Compliance-Funktion zu einem strategischen Enabler für Digitalisierung und nachhaltiges Wachstum?",
        answer: "Die NIS2-Richtlinie schafft eine einzigartige Gelegenheit, Supply Chain Security als strategischen Hebel für Digitalisierung und Geschäftsexpansion zu nutzen. Anstatt Supply Chain Security als regulatorische Hürde zu betrachten, positioniert ADVISORI sie als Fundament für sichere digitale Transformation und als Katalysator für innovative Geschäftsmodelle. Dies ermöglicht es C-Level-Führungskräften, Compliance-Investitionen in strategische Wettbewerbsvorteile umzuwandeln.\n\n🚀 Supply Chain Security als Digitalisierungs-Enabler:\n• Sichere Digital Supply Networks: NIS2-konforme Supply Chain Security schafft das Vertrauen und die Sicherheitsarchitektur für die Implementierung digitaler Supply Chain-Technologien wie IoT, Blockchain und AI.\n• Ecosystem Orchestration: Robuste Supply Chain Security ermöglicht es, komplexe digitale Ökosysteme mit multiplen Partnern sicher zu orchestrieren und neue Geschäftsmodelle zu entwickeln.\n• Data-driven Supplier Intelligence: Die umfassende Datensammlung im Rahmen des NIS2-Supply Chain Managements liefert wertvolle Insights für strategische Sourcing-Entscheidungen und Marktanalysen.\n• Agile Partnership Models: Standardisierte Security Assessment-Prozesse ermöglichen es, neue Partnerschaften schneller und mit geringerem Risiko einzugehen.\n\n💡 ADVISORI's Innovationsansatz für strategische Supply Chain Security:\n• AI-powered Supplier Analytics: Einsatz künstlicher Intelligenz zur Analyse von Lieferantenperformance, Risikoprognosen und zur Identifikation strategischer Partnerschaften.\n• Blockchain-basierte Transparency: Implementierung von Blockchain-Technologien für transparente und manipulationssichere Supply Chain-Dokumentation.\n• Digital Twin Supply Chains: Entwicklung digitaler Zwillinge Ihrer Lieferkette zur Simulation und Optimierung von Security-Maßnahmen und Geschäftsprozessen.\n• Innovation Labs für Supply Chain Security: Etablierung von Innovationslaboren zur Entwicklung und Erprobung neuer Supply Chain Security-Technologien und -Methoden vor der Produktionseinführung."
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
