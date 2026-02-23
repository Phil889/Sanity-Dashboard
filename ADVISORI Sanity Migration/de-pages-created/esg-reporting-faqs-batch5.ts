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
    console.log('Updating ESG-Reporting page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-reporting' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-reporting" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: "Wie gewährleistet ADVISORI die Balance zwischen ESG-Ambition und realistischer Zielsetzung in der Berichterstattung?",
        answer: "Die Glaubwürdigkeit von ESG-Reporting hängt entscheidend von der Balance zwischen ambitionierten Zielen und realistischer Erreichbarkeit ab. Übertriebene Versprechen führen zu Greenwashing-Vorwürfen, während zu konservative Ziele die Stakeholder-Erwartungen nicht erfüllen. ADVISORI entwickelt wissenschaftlich fundierte ESG-Strategien, die ambitious aber achievable sind und durch transparente Roadmaps und Interim-Milestones Vertrauen schaffen.\n\n⚖️ Credible Ambition Framework:\n• Science-Based Target Setting: Verwendung wissenschaftlich validierter Methodologien (SBTi, TCFD) für ambitionierte aber erreichbare Ziele.\n• Baseline Reality Check: Ehrliche Bewertung der aktuellen Position als Basis für realistische Ziel-Planung.\n• Phased Approach: Aufbau von Short-, Medium- und Long-term Zielen mit klaren Milestones und Accountability-Mechanismen.\n• External Validation: Third-Party Validation von Zielen und Fortschritten für erhöhte Glaubwürdigkeit.\n\n📊 Transparent Progress Tracking:\n• Regular Progress Updates: Quartalsweise oder halbjährliche Fortschrittsberichte mit honest Assessment von Challenges.\n• Variance Analysis: Detaillierte Analyse von Abweichungen zwischen Zielen und tatsächlicher Performance.\n• Adaptive Management: Strukturierte Prozesse zur Anpassung von Zielen bei veränderten Rahmenbedingungen.\n• Stakeholder Communication: Proaktive Kommunikation von Herausforderungen und Anpassungen an alle Stakeholder.\n\n🎯 Strategic Alignment:\n• Business Case Integration: Verknüpfung von ESG-Zielen mit Business Strategy und finanziellen Zielen.\n• Risk-Adjusted Planning: Berücksichtigung von Risiken und Unsicherheiten in der Zielplanung.\n• Resource Allocation: Realistische Bewertung der erforderlichen Ressourcen für Zielerreichung.\n• Capability Assessment: Ehrliche Bewertung der internen Fähigkeiten und externer Unterstützungsbedarfe.\n\n🔄 Continuous Improvement:\n• Learning Culture: Etablierung einer Kultur des kontinuierlichen Lernens und der Anpassung.\n• Best Practice Integration: Kontinuierliche Integration von Industry Best Practices und Lessons Learned.\n• Innovation Integration: Berücksichtigung technologischer Entwicklungen und Innovationspotenziale.\n• Stakeholder Feedback: Systematische Integration von Stakeholder-Feedback in die Ziel-Refinement."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: "Welche Rolle spielt ESG-Reporting bei der Krisenkommunikation und wie bereitet ADVISORI Unternehmen auf ESG-related Reputationskrisen vor?",
        answer: "ESG-related Krisen können den Unternehmenswert innerhalb von Stunden vernichten und jahrelang aufgebautes Vertrauen zerstören. Gleichzeitig kann proaktive, transparente Krisenkommunikation das Vertrauen sogar stärken. ADVISORI entwickelt comprehensive Crisis Communication-Strategien, die ESG-Reporting als Fundament für Glaubwürdigkeit und schnelle Response nutzen und Unternehmen befähigen, Krisen in Opportunities für Vertrauensaufbau zu transformieren.\n\n🚨 Crisis Preparedness Framework:\n• ESG Risk Mapping: Systematische Identifikation potenzieller ESG-Krisen und deren Wahrscheinlichkeit und Impact.\n• Early Warning Systems: Implementation von Monitoring-Systemen für frühzeitige Identifikation von ESG-Risiken.\n• Response Playbooks: Vordefinierte Kommunikations-Playbooks für verschiedene ESG-Crisis-Szenarien.\n• Stakeholder Contact Management: Gepflegte Stakeholder-Datenbanken für rapid Outreach im Krisenfall.\n\n💬 Crisis Communication Excellence:\n• Immediate Response Protocols: 24-Stunden-Response-Capability mit vorgefertigten Statements und Q&A-Dokumenten.\n• Transparency Strategy: Prinzipien für maximale Transparenz bei gleichzeitigem Schutz rechtlicher Interessen.\n• Multi-Channel Coordination: Koordinierte Kommunikation über alle Kanäle (Media, Social Media, Direct Stakeholder Communication).\n• Leadership Visibility: Preparation der C-Suite für authentic und empathetic Crisis Leadership.\n\n🔄 Recovery und Rebuilding:\n• Action Plan Communication: Klare Kommunikation konkreter Maßnahmen zur Behebung der Krise und Verhinderung von Wiederholung.\n• Progress Reporting: Regelmäßige Updates über Fortschritte bei Korrekturmaßnahmen.\n• Stakeholder Re-engagement: Strukturierte Programme zur Wiederherstellung des Stakeholder-Vertrauens.\n• Lessons Learned Integration: Öffentliche Kommunikation der Lessons Learned und Verbesserungsmaßnahmen.\n\n⚡ Crisis as Opportunity:\n• Authenticity Demonstration: Nutzung von Krisen zur Demonstration authentischer Values und Commitment.\n• Stakeholder Appreciation: Anerkennung und Wertschätzung von Stakeholder-Geduld und -Support.\n• Innovation Showcase: Präsentation innovativer Lösungen, die aus der Krise entstanden sind.\n• Industry Leadership: Positionierung als Industry Leader in ESG-Crisis-Management und -Prevention."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: "Wie entwickelt ADVISORI sector-spezifische ESG-Reporting-Ansätze und welche Besonderheiten berücksichtigen wir für verschiedene Industrien?",
        answer: "ESG-Materialität und -Risiken variieren erheblich zwischen Industrien. Was für einen Finanzdienstleister kritisch ist, mag für einen Industriekonzern weniger relevant sein. ADVISORI entwickelt sector-spezifische ESG-Reporting-Frameworks, die industry-specific Risks, Opportunities und Stakeholder-Expectations adressieren und gleichzeitig Cross-Sector-Benchmarking und Best Practice-Transfer ermöglichen.\n\n🏭 Industry-Specific Materiality:\n• Sector Risk Analysis: Detaillierte Analyse branchenspezifischer ESG-Risiken und deren Business Impact.\n• Stakeholder Mapping: Industry-spezifische Stakeholder-Landschaften und deren einzigartige Anforderungen.\n• Regulatory Landscape: Branchenspezifische Regulierungs-Anforderungen und deren Integration in Reporting-Strategien.\n• Value Chain Analysis: Industry-spezifische Wertschöpfungsketten-Analyse für targeted ESG-Interventionen.\n\n🏦 Financial Services Excellence:\n• Climate Risk Disclosure: TCFD-konforme Klimarisikoanalyse und Stress-Testing für Finanzportfolios.\n• Sustainable Finance: Integration von EU Taxonomy und Green Finance-Kriterien in Reporting.\n• Responsible Investment: Transparente Berichterstattung über ESG-Integration in Investment-Entscheidungen.\n• Financial Inclusion: Social Impact-Metriken für Access to Finance und Financial Literacy-Programme.\n\n⚡ Energy und Utilities Focus:\n• Transition Planning: Detaillierte Net-Zero-Transition-Pläne mit Interim-Targets und Technology-Roadmaps.\n• Renewable Energy Integration: Transparente Berichterstattung über Renewable Energy-Investments und -Performance.\n• Grid Modernization: Smart Grid und Energy Storage-Initiativen als ESG-Innovation-Driver.\n• Community Impact: Local Community-Engagement und Just Transition-Programme.\n\n🏭 Manufacturing und Industrials:\n• Circular Economy: Comprehensive Reporting über Circular Business Models und Waste Reduction.\n• Supply Chain Sustainability: Deep-Dive Scope 3-Reporting mit Supplier-Engagement-Programmen.\n• Product Lifecycle: Cradle-to-Cradle Analysis und Sustainable Product Design-Initiativen.\n• Worker Safety: Advanced Safety-Metriken und Occupational Health-Programme.\n\n💊 Healthcare und Life Sciences:\n• Access to Healthcare: Affordable Healthcare-Initiativen und Global Health-Impact-Metriken.\n• R&D Sustainability: Sustainable R&D-Practices und Ethical Clinical Trial-Standards.\n• Product Safety: Comprehensive Pharmacovigilance und Product Safety-Reporting.\n• Healthcare Equity: Diversity in Clinical Trials und Healthcare Access-Programme."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: "Wie integriert ADVISORI Cultural Transformation und Change Management in ESG-Reporting-Programme für nachhaltige Verhaltensänderungen?",
        answer: "ESG-Reporting-Excellence erfordert fundamentale Kulturveränderungen, die weit über technische Reporting-Prozesse hinausgehen. Es geht um die Transformation von Mindsets, Verhaltensweisen und Entscheidungsprozessen auf allen Ebenen der Organisation. ADVISORI entwickelt holistische Change Management-Programme, die ESG-Reporting als Katalysator für tiefgreifende Cultural Transformation nutzen und nachhaltiges ESG-Leadership in der DNA des Unternehmens verankern.\n\n🧠 Cultural Assessment und Transformation:\n• ESG Culture Baseline: Comprehensive Assessment der aktuellen ESG-Kultur und Identification von Transformation-Bedarfen.\n• Leadership Alignment: Executive Alignment-Programme für authentic ESG-Leadership und Role-Modeling.\n• Employee Engagement: Bottom-up Engagement-Programme für ESG-Awareness und -Ownership auf allen Ebenen.\n• Cultural Integration: Integration von ESG-Prinzipien in Core Values, Performance Management und Reward Systems.\n\n📚 Learning und Development Excellence:\n• ESG Competency Framework: Entwicklung umfassender ESG-Kompetenzen für verschiedene Rollen und Ebenen.\n• Digital Learning Platforms: Skalierbare E-Learning-Programme mit Interactive Content und Progress Tracking.\n• Experiential Learning: Hands-on Workshops, Site Visits und Real-World ESG-Projekte für praktisches Lernen.\n• Cross-Functional Collaboration: ESG-fokussierte Cross-Functional Teams und Projects für Silo-Breaking.\n\n🎯 Behavioral Change Management:\n• Nudging Strategies: Behavioral Economics-basierte Interventionen für nachhaltige Verhaltensänderungen.\n• Incentive Alignment: Integration von ESG-Performance in Individual und Team-Incentive-Systeme.\n• Social Influence: Peer-Learning-Programme und ESG-Champion-Netzwerke für positive Social Pressure.\n• Feedback Loops: Kontinuierliche Feedback-Mechanismen für Behavior Reinforcement und Course Correction.\n\n🔄 Sustainable Change Integration:\n• Governance Integration: Embedding von ESG-Governance in alle Business Processes und Decision-Making.\n• System Thinking: Development von System Thinking-Capabilities für holistische ESG-Betrachtung.\n• Innovation Culture: Förderung einer ESG-Innovation-Kultur mit Experimentation und Learning from Failure.\n• Legacy Planning: Succession Planning für ESG-Leadership und Knowledge Transfer für nachhaltige Transformation.\n\n📊 Transformation Measurement:\n• Culture Metrics: Entwicklung von Metriken zur Messung kultureller Veränderungen und ESG-Mindset-Shifts.\n• Behavioral Analytics: Tracking konkreter Verhaltensänderungen und deren Business Impact.\n• Engagement Surveys: Regelmäßige Employee Surveys zur ESG-Engagement-Messung und Improvement-Identification.\n• Success Story Documentation: Systematic Documentation und Communication von Transformation-Success-Stories für Momentum-Building."
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
    console.log('✅ C-Level FAQs batch 5 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
