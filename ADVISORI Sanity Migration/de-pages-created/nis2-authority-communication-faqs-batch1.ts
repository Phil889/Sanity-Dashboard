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
    console.log('Updating NIS2 Authority Communication page with C-Level FAQs batch 1 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-authority-communication' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-authority-communication" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: "Warum ist strategische Authority Communication unter NIS2 für die C-Suite mehr als nur Compliance und wie transformiert ADVISORI diese in einen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte repräsentiert die Authority Communication unter NIS2 weit mehr als die Erfüllung regulatorischer Mindestanforderungen. Sie ist ein strategisches Instrument zur Risikominimierung, Vertrauensbildung und zur Positionierung des Unternehmens als verantwortlicher Akteur im Cybersicherheitsökosystem. ADVISORI versteht diese Kommunikation als Investition in langfristige Stakeholder-Relationships, die in kritischen Situationen entscheidende Vorteile bieten.\n\n🎯 Strategische Dimensionen für die Führungsebene:\n• Reputationsmanagement: Proaktive, professionelle Behördenkommunikation stärkt das Vertrauen von Aufsichtsbehörden und positioniert Ihr Unternehmen als verlässlichen Partner in der Cybersicherheitslandschaft.\n• Risikominimierung: Strukturierte Authority Relations reduzieren das Risiko von Missverständnissen, regulatorischen Sanktionen und verstärken die Wahrscheinlichkeit kooperativer Lösungsansätze bei Compliance-Herausforderungen.\n• Marktdifferenzierung: Unternehmen mit exzellenter Authority Communication werden von Aufsichtsbehörden als Best-Practice-Beispiele wahrgenommen, was zu privilegierten Stakeholder-Beziehungen führen kann.\n• Strategische Intelligence: Regelmäßiger, professioneller Austausch mit Behörden bietet wertvolle Einblicke in regulatorische Entwicklungen und Enforcement-Prioritäten.\n\n🛡️ Der ADVISORI-Ansatz für strategische Authority Relations:\n• Proaktive Stakeholder-Orchestrierung: Wir entwickeln maßgeschneiderte Communication-Strategien, die über reaktive Meldepflichten hinausgehen und vertrauensvolle Beziehungen zu Schlüssel-Stakeholdern aufbauen.\n• Professionelle Positioning-Strategien: Unsere Beratung positioniert Ihr Unternehmen als kompetenten, kooperativen Partner, der Cybersicherheit als strategische Priorität versteht und umsetzt.\n• Integrierte Compliance-Excellence: Wir verbinden technische Compliance-Erfüllung mit strategischer Kommunikation, um sowohl regulatorische Anforderungen zu erfüllen als auch Stakeholder-Vertrauen zu stärken.\n• Crisis-Resiliente Communication: Entwicklung robuster Communication-Frameworks, die auch in kritischen Situationen professionelle, transparente Behördenkommunikation gewährleisten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie quantifiziert ADVISORI den ROI exzellenter Authority Communication und welchen direkten Einfluss hat dies auf Unternehmensrisiken und operative Effizienz?",
        answer: "Die Investition in professionelle Authority Communication unter NIS2 generiert messbaren Return on Investment durch Risikoreduktion, operative Effizienzsteigerungen und strategische Vorteile. ADVISORI quantifiziert diese Werttreiber durch konkrete Metriken und demonstriert, wie exzellente Behördenkommunikation direkt zur Wertsteigerung und Risikominimierung beiträgt.\n\n💰 Direkte finanzielle Werttreiber:\n• Sanktionsrisiko-Minimierung: Professionelle Authority Communication reduziert das Risiko regulatorischer Sanktionen, die bei NIS2-Verstößen erhebliche finanzielle Auswirkungen haben können (bis zu 2% des weltweiten Jahresumsatzes).\n• Compliance-Kostenoptimierung: Strukturierte Meldeprozesse und proaktive Behördenkommunikation reduzieren Ad-hoc-Compliance-Kosten und vermeiden kostspielige Nachbesserungsaufwendungen.\n• Incident-Response-Effizienz: Etablierte Authority-Channels ermöglichen schnellere, koordinierte Incident-Response, was die direkten und indirekten Kosten von Cybersicherheitsvorfällen minimiert.\n• Versicherungsprämien-Optimierung: Nachweisbare Authority Relations und professionelle Compliance-Kommunikation können zu günstigeren Cyber-Versicherungskonditionen führen.\n\n📈 Strategische und operative Vorteile:\n• Regulatory-Advantage: Unternehmen mit exzellenter Authority Communication erhalten oft frühzeitige Einblicke in regulatorische Entwicklungen und können proaktiv strategische Anpassungen vornehmen.\n• Stakeholder-Vertrauen: Professionelle Behördenkommunikation stärkt das Vertrauen von Investoren, Kunden und Partnern in die Governance- und Risikomanagement-Fähigkeiten des Unternehmens.\n• Operational Excellence: Strukturierte Communication-Prozesse verbessern die interne Koordination zwischen Compliance-, IT- und Management-Teams und erhöhen die operative Effizienz.\n• Market Positioning: Unternehmen mit vorbildlicher Authority Communication werden oft als Thought Leader und Best-Practice-Beispiele in der Branche wahrgenommen, was zu Wettbewerbsvorteilen führt."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Die NIS2-Aufsichtslandschaft ist komplex und national unterschiedlich ausgeprägt. Wie navigiert ADVISORI diese Komplexität und stellt konsistente, effektive Authority Communication sicher?",
        answer: "Die Heterogenität der nationalen NIS2-Implementierungen und Aufsichtsstrukturen stellt international operierende Unternehmen vor erhebliche Herausforderungen. ADVISORI begegnet dieser Komplexität mit einem systematischen, datengetriebenen Ansatz, der lokale Besonderheiten berücksichtigt und gleichzeitig kohärente, strategische Authority Communication sicherstellt.\n\n🌍 Komplexitätsmanagement in der EU-weiten Aufsichtslandschaft:\n• Multi-Jurisdictional Mapping: Wir entwickeln detaillierte Stakeholder-Maps für jede relevante Jurisdiktion, die spezifische Aufsichtsstrukturen, Enforcement-Philosophien und Communication-Präferenzen der nationalen Behörden berücksichtigen.\n• Harmonisierte Communication-Standards: Trotz nationaler Unterschiede etablieren wir konsistente Communication-Frameworks, die lokale Anforderungen erfüllen und gleichzeitig strategische Kohärenz gewährleisten.\n• Cultural Intelligence Integration: Unsere Authority Communication-Strategien berücksichtigen kulturelle und administrative Besonderheiten verschiedener EU-Mitgliedstaaten, um optimale Stakeholder-Relationships zu erreichen.\n• Adaptive Compliance-Orchestrierung: Wir entwickeln flexible Prozesse, die auf unterschiedliche nationale Interpretationen und Enforcement-Ansätze reagieren können, ohne die Gesamtstrategie zu kompromittieren.\n\n🔍 ADVISORI's systematischer Navigationsansatz:\n• Intelligence-Driven Strategy: Kontinuierliche Analyse regulatorischer Entwicklungen, Enforcement-Patterns und Best Practices verschiedener nationaler Aufsichtsbehörden zur Optimierung der Communication-Strategien.\n• Local-Expertise-Networks: Nutzung etablierter Netzwerke zu nationalen Regulierungs-Experten und ehemaligen Behördenvertretern für präzise, lokal informierte Beratung.\n• Scenario-Based Planning: Entwicklung verschiedener Communication-Szenarien für unterschiedliche Aufsichtsansätze und regulatorische Situationen, um agile Anpassungen zu ermöglichen.\n• Continuous Learning Integration: Systematische Dokumentation und Analyse von Authority Interactions zur kontinuierlichen Verbesserung der Communication-Strategien und -Prozesse."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie transformiert ADVISORI reaktive Compliance-Kommunikation in proaktive Strategic Authority Relations, die langfristigen Unternehmenswert schaffen?",
        answer: "Der Paradigmenwechsel von reaktiver Compliance-Kommunikation zu proaktiven Strategic Authority Relations erfordert fundamentale Neuausrichtung der Stakeholder-Interaktionen. ADVISORI orchestriert diese Transformation durch systematische Entwicklung vertrauensvoller, strategischer Beziehungen, die über Mindest-Compliance hinausgehen und nachhaltigen Unternehmenswert schaffen.\n\n🚀 Von Compliance-Reaktion zu strategischer Proaktivität:\n• Stakeholder-Value-Creation: Transformation von obligatorischen Meldeprozessen in wertstiftende Dialogformate, die sowohl regulatorische Anforderungen erfüllen als auch strategische Insights generieren.\n• Thought-Leadership-Positioning: Positionierung Ihres Unternehmens als proaktiver Contributor zur Cybersicherheitslandschaft durch substanzielle Beiträge zu regulatorischen Diskussionen und Best-Practice-Entwicklung.\n• Collaborative-Partnership-Building: Entwicklung echter Partnerschaften mit Aufsichtsbehörden, die auf gemeinsamen Zielen der Cybersicherheitsverbesserung basieren, anstatt nur auf regulatorischen Verpflichtungen.\n• Innovation-Dialogue-Integration: Nutzung von Authority Relations für Diskussionen über innovative Cybersicherheitsansätze und regulatorische Sandboxes für neue Technologien.\n\n💡 ADVISORI's Transformation-Framework:\n• Strategic Relationship Architecture: Entwicklung langfristiger Engagement-Pläne, die systematisch Vertrauen aufbauen und Ihr Unternehmen als verlässlichen, kompetenten Partner etablieren.\n• Value-Based Communication: Gestaltung aller Behörden-Interaktionen als wertstiftende Exchanges, die sowohl Compliance-Ziele erfüllen als auch strategische Business-Objectives unterstützen.\n• Proactive Intelligence Sharing: Etablierung von Mechanismen für den proaktiven Austausch relevanter Cybersicherheits-Intelligence, was das Unternehmen als wertvollen Ecosystem-Partner positioniert.\n• Continuous Relationship Investment: Implementierung systematischer Relationship-Maintenance-Prozesse, die auch außerhalb von Compliance-Ereignissen aktive, wertvolle Stakeholder-Connections pflegen und stärken."
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
