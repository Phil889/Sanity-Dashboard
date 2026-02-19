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
    console.log('Updating ESG Governance page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-governance' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-governance" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie unterstützt ADVISORI bei der Entwicklung einer ESG-Kommunikationsstrategie, die sowohl interne als auch externe Stakeholder überzeugt und das Unternehmensimage stärkt?",
        answer: "Eine strategische ESG-Kommunikation ist entscheidend für die erfolgreiche Positionierung eines Unternehmens als verantwortungsvoller Corporate Citizen und nachhaltiger Investment-Case. ADVISORI entwickelt integrierte Kommunikationsstrategien, die authentische ESG-Botschaften schaffen, Greenwashing-Risiken vermeiden und dabei sowohl interne Mitarbeiter-Motivation als auch externe Stakeholder-Wahrnehmung positiv beeinflussen.\n\n📢 Strategische Kommunikations-Dimensionen:\n• Authentic-Storytelling und Purpose-Communication: Entwicklung authentischer Narrative, die ESG-Initiativen in den Kontext der Unternehmensmission und -werte einbetten und dabei emotionale Verbindungen zu Stakeholdern schaffen.\n• Data-driven-Transparency: Präsentation quantifizierbarer ESG-Fortschritte durch überzeugende Visualisierungen und Benchmarks, die Glaubwürdigkeit und Vertrauen aufbauen.\n• Crisis-Communication und Issue-Management: Proaktive Kommunikationsstrategien für ESG-bezogene Herausforderungen oder Kontroversen, die Reputation schützen und Lernbereitschaft demonstrieren.\n• Multi-Channel-Content-Strategy: Entwicklung zielgruppenspezifischer Inhalte für verschiedene Kanäle - von Investor-Präsentationen über Social Media bis zu Employee-Communications.\n\n🎯 ADVISORI's Communication-Excellence-Framework:\n• Materiality-based-Messaging: Fokussierung der Kommunikation auf wesentliche ESG-Themen, die sowohl für das Geschäft als auch für Stakeholder relevant sind.\n• Stakeholder-Journey-Mapping: Entwicklung differenzierter Kommunikationsansätze basierend auf spezifischen Informationsbedürfnissen und Entscheidungsprozessen verschiedener Stakeholder-Gruppen.\n• Content-Calendar und Campaign-Management: Strategische Planung und Orchestrierung von ESG-Kommunikation über verschiedene Touchpoints und Zeiträume hinweg.\n• Impact-Measurement und Communication-ROI: Systematische Messung der Wirksamkeit von ESG-Kommunikation auf Reputation, Stakeholder-Engagement und Business-Outcomes.\n• Thought-Leadership-Positioning: Etablierung von Führungskräften als ESG-Thought-Leaders durch Strategic-Content-Creation und Speaking-Opportunities."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt ESG-Governance bei der Krisenbewältigung und wie hilft ADVISORI bei der Entwicklung resilienter Nachhaltigkeitsstrategien für volatile Zeiten?",
        answer: "ESG-Governance in Krisenzeiten transformiert von einem 'Nice-to-have' zu einem kritischen Resilienz-Faktor, der Unternehmen dabei hilft, volatile Perioden nicht nur zu überstehen, sondern gestärkt daraus hervorzugehen. ADVISORI entwickelt adaptive ESG-Governance-Systeme, die in Krisenzeiten Stabilität bieten, Stakeholder-Vertrauen erhalten und gleichzeitig neue Chancen für nachhaltige Transformation identifizieren und nutzen.\n\n🌪️ ESG-Governance als Krisenresilienz-Enabler:\n• Stakeholder-Trust-Preservation: Robuste ESG-Governance schafft Vertrauen bei Investoren, Kunden und Mitarbeitern, das in Krisenzeiten als stabilisierender Faktor wirkt und Zugang zu Critical-Support sichert.\n• Adaptive-Decision-Making-Frameworks: Entwicklung von Entscheidungsrahmen, die ESG-Prinzipien auch unter Druck aufrechterhalten und dabei kurzfristige Entscheidungen mit langfristigen Nachhaltigkeitszielen in Einklang bringen.\n• Crisis-Opportunity-Identification: Systematische Analyse von Krisen-induzierten Marktveränderungen zur Identifikation neuer nachhaltiger Geschäftsmöglichkeiten und Wettbewerbsvorteile.\n• Supply-Chain-Resilience durch ESG: Nutzung diversifizierter, ESG-konformer Lieferketten als Puffer gegen Störungen und Absicherung gegen Single-Source-Risiken.\n\n⚡ ADVISORI's Crisis-Ready-ESG-Governance-Approach:\n• Scenario-Planning für ESG-Governance: Entwicklung verschiedener Krisenszenarien und entsprechender ESG-Governance-Anpassungen zur Sicherstellung kontinuierlicher Handlungsfähigkeit.\n• Rapid-Response-ESG-Committees: Etablierung agiler ESG-Governance-Strukturen, die schnelle Entscheidungen ermöglichen, ohne ESG-Standards zu kompromittieren.\n• Stakeholder-Communication in Crisis: Spezialisierte Kommunikationsstrategien, die in Krisenzeiten Transparenz und Accountability bezüglich ESG-Commitments aufrechterhalten.\n• Post-Crisis-ESG-Recovery-Planning: Entwicklung von Recovery-Strategien, die ESG-Aspekte als Wachstums- und Differenzierungstreiber für die Post-Krisen-Phase nutzen.\n• Continuous-Learning und Adaptation: Implementierung von Feedback-Mechanismen, die Erkenntnisse aus Krisen in verbesserte ESG-Governance-Systeme überführen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die Herausforderungen der ESG-Governance in internationalen und multinationalen Unternehmensstrukturen?",
        answer: "Multinationale ESG-Governance erfordert die Navigation komplexer kultureller, regulatorischer und operativer Unterschiede, während gleichzeitig globale Konsistenz und lokale Relevanz sichergestellt werden müssen. ADVISORI entwickelt skalierbare ESG-Governance-Frameworks, die kulturelle Sensitivität mit strategischer Kohärenz verbinden und dabei sowohl zentrale Steuerung als auch lokale Autonomie ermöglichen.\n\n🌍 Komplexitäten multinationaler ESG-Governance:\n• Regulatory-Harmonization: Navigation unterschiedlicher ESG-Regulatorik in verschiedenen Jurisdiktionen und Entwicklung einheitlicher Compliance-Ansätze, die höchste Standards überall erfüllen.\n• Cultural-Adaptation von ESG-Prinzipien: Anpassung globaler ESG-Standards an lokale kulturelle Werte und Geschäftspraktiken, ohne Kernprinzipien zu verwässern.\n• Cross-Border-Coordination: Etablierung effektiver Koordinationsmechanismen zwischen verschiedenen Länderorganisationen für kohärente ESG-Umsetzung.\n• Local-vs-Global-Materiality: Balance zwischen global wesentlichen ESG-Themen und regionsspezifischen Prioritäten und Herausforderungen.\n\n🔄 ADVISORI's Global-ESG-Governance-Excellence-Framework:\n• Matrix-Governance-Structures: Design hybrider Governance-Modelle, die zentrale ESG-Standards mit lokaler Implementierungsflexibilität verbinden.\n• Cultural-Intelligence-Integration: Einbindung kultureller Expertise in ESG-Governance-Design zur Sicherstellung lokaler Akzeptanz und Effektivität.\n• Regional-ESG-Hubs und Centers-of-Excellence: Etablierung regionaler ESG-Kompetenzzentren, die lokale Expertise mit globalen Standards verknüpfen.\n• Cross-Cultural-Training und Capability-Building: Entwicklung von Schulungsprogrammen, die ESG-Governance-Fähigkeiten in verschiedenen kulturellen Kontexten aufbauen.\n• Global-Local-Reporting-Integration: Implementierung von Reporting-Systemen, die sowohl globale Konsolidierung als auch lokale Transparenz ermöglichen und dabei verschiedene Stakeholder-Erwartungen erfüllen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie unterstützt ADVISORI bei der Entwicklung von ESG-Innovation und der Integration nachhaltiger Technologien in die Governance-Struktur?",
        answer: "ESG-Innovation ist ein kritischer Differenzierungsfaktor für zukunftsfähige Unternehmen und erfordert spezielle Governance-Mechanismen, die nachhaltige Innovationen fördern, beschleunigen und skalieren. ADVISORI entwickelt Innovation-enabling ESG-Governance-Systeme, die systematisch nachhaltige Technologien identifizieren, bewerten und in Geschäftsmodelle integrieren, um competitive Advantage und Market Leadership zu schaffen.\n\n💡 Innovation-orientierte ESG-Governance-Prinzipien:\n• Sustainable-Innovation-Committees: Etablierung spezialisierter Governance-Gremien, die nachhaltige Innovationsprojekte priorisieren, finanzieren und überwachen.\n• ESG-Innovation-Investment-Frameworks: Entwicklung von Bewertungskriterien und Entscheidungsprozessen für Investitionen in nachhaltige Technologien und innovative ESG-Lösungen.\n• Cross-Functional-Innovation-Teams: Integration von ESG-Expertise in Produkt- und Service-Innovation-Teams zur Sicherstellung nachhaltiger Design-Prinzipien.\n• External-Innovation-Partnerships: Governance-Strukturen für strategische Partnerschaften mit Start-ups, Forschungseinrichtungen und anderen Innovatoren im ESG-Bereich.\n\n🚀 ADVISORI's ESG-Innovation-Governance-Methodology:\n• Innovation-Pipeline-Management: Systematische Identifikation, Bewertung und Priorisierung von ESG-Innovationsmöglichkeiten entlang der gesamten Wertschöpfungskette.\n• Technology-Scouting und Trend-Analysis: Kontinuierliche Beobachtung emerging Technologies und deren Potenzial für ESG-Verbesserungen und Geschäftsmodell-Innovation.\n• Innovation-Metrics und ROI-Tracking: Entwicklung spezialisierter KPIs für ESG-Innovation, die sowohl nachhaltige Auswirkungen als auch geschäftlichen Wert messen.\n• Rapid-Prototyping und Pilot-Governance: Etablierung agiler Governance-Prozesse für schnelle Tests und Skalierung vielversprechender ESG-Innovationen.\n• Innovation-Culture und Mindset-Change: Förderung einer Innovationskultur, die Nachhaltigkeit als Innovationstreiber und Opportunity-Source betrachtet."
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
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
