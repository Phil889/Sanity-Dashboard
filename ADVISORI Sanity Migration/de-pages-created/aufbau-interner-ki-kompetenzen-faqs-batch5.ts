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
    console.log('Updating Aufbau interner KI-Kompetenzen page with C-Level FAQs batch 5 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'aufbau-interner-ki-kompetenzen' })
    
    if (!existingDoc) {
      throw new Error('Document "aufbau-interner-ki-kompetenzen" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche Continuous-Learning-Strategien implementiert ADVISORI für nachhaltigen KI-Kompetenzaufbau und wie schaffen wir eine selbstlernende Organisation?',
        answer: "ADVISORI entwickelt Continuous-Learning-Ökosysteme, die über traditionelle Schulungsansätze hinausgehen und eine selbstlernende, adaptive Organisation schaffen. Unsere Strategien integrieren formelles und informelles Lernen, nutzen KI-gestützte Personalisierung und etablieren Lernkultur als strategischen Wettbewerbsvorteil für kontinuierliche Innovation und Anpassungsfähigkeit.\n\n🔄 Self-Learning Organization Architecture:\n• Adaptive Learning Ecosystems: Aufbau von Lernumgebungen, die sich automatisch an neue Technologien, Marktanforderungen und individuelle Lernbedürfnisse anpassen.\n• Knowledge Capture und Sharing: Systematische Erfassung und Verteilung von Lernerfahrungen, Best Practices und Lessons Learned für organisationsweites Wissen.\n• Peer-to-Peer Learning Networks: Etablierung horizontaler Lernstrukturen, die Wissensaustausch zwischen verschiedenen Rollen und Abteilungen fördern.\n• Innovation Labs und Experimentation: Schaffung von Räumen für kontinuierliches Experimentieren und Lernen durch praktische Anwendung neuer Technologien.\n\n📈 AI-Powered Learning Personalization:\n• Intelligent Learning Pathways: KI-gestützte Personalisierung von Lernpfaden basierend auf individuellen Stärken, Schwächen und Karrierezielen.\n• Adaptive Content Delivery: Dynamische Anpassung von Lerninhalten und -methoden entsprechend Lernfortschritt und Präferenzen.\n• Predictive Skill Gap Analysis: Vorhersage zukünftiger Kompetenzanforderungen und proaktive Entwicklung entsprechender Lernprogramme.\n• Performance-Based Learning Optimization: Kontinuierliche Optimierung der Lerneffektivität basierend auf messbaren Leistungsindikatoren.\n\n🌱 Cultural Transformation für Continuous Learning:\n• Learning Mindset Development: Kulturwandel hin zu einer Organisation, die Lernen als kontinuierlichen Prozess und Wettbewerbsvorteil versteht.\n• Failure-Tolerant Innovation Culture: Schaffung einer Kultur, die Experimente und Lernen aus Fehlern als wertvollen Beitrag zur Organisationsentwicklung betrachtet.\n• Recognition und Incentive Systems: Belohnungssysteme, die kontinuierliches Lernen und Wissensaustausch fördern und anerkennen.\n• Leadership Learning Modeling: Führungskräfte als Vorbilder für kontinuierliches Lernen und Entwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie fördert ADVISORI den Aufbau einer innovationsorientierten KI-Kultur und welche spezifischen Maßnahmen nutzen wir zur Transformation der Organisationskultur?',
        answer: "ADVISORI orchestriert umfassende Kulturwandel-Initiativen, die eine innovationsorientierte KI-Kultur als Fundament für nachhaltigen Geschäftserfolg etablieren. Unsere Ansätze gehen über technische Schulungen hinaus und schaffen eine Organisationskultur, die KI-Innovation als natürlichen Teil der Geschäftstätigkeit versteht und kontinuierlich vorantreibt.\n\n🚀 Innovation Culture Transformation:\n• AI-First Mindset Development: Kulturwandel hin zu einer Organisation, die KI-Möglichkeiten in allen Geschäftsprozessen und Entscheidungen mitdenkt.\n• Experimentation und Risk-Taking: Förderung einer Kultur des intelligenten Risikos und der kontinuierlichen Experimentation mit neuen KI-Technologien.\n• Cross-Functional Collaboration: Aufbau von Strukturen und Prozessen, die abteilungsübergreifende Zusammenarbeit und Innovation fördern.\n• Customer-Centric AI Innovation: Ausrichtung der Innovationskultur auf Kundenbedürfnisse und Wertschöpfung durch KI-gestützte Lösungen.\n\n💡 Practical Culture Change Initiatives:\n• Innovation Challenges und Hackathons: Regelmäßige Events zur Förderung kreativer KI-Lösungen und interdisziplinärer Zusammenarbeit.\n• AI Innovation Labs: Dedizierte Räume und Ressourcen für Experimentation und Prototyping neuer KI-Anwendungen.\n• Internal AI Showcases: Plattformen zur Präsentation und Anerkennung interner KI-Innovationen und Erfolgsgeschichten.\n• Innovation Time Allocation: Strukturierte Zeit für Mitarbeiter zur Verfolgung eigener KI-Innovationsprojekte und Ideen.\n\n🌟 Leadership und Change Management:\n• Change Champion Networks: Aufbau von Netzwerken interner Botschafter für KI-Innovation und Kulturwandel.\n• Storytelling und Communication: Strategische Kommunikation von KI-Erfolgsgeschichten und Visionen für kulturelle Transformation.\n• Resistance Management: Proaktive Identifikation und Adressierung von Widerständen gegen KI-Innovation und Veränderung.\n• Continuous Culture Assessment: Regelmäßige Bewertung und Anpassung der Kulturwandel-Initiativen basierend auf Feedback und Ergebnissen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Performance-Metriken und KPIs entwickelt ADVISORI zur Messung des Erfolgs von KI-Kompetenzentwicklungs-Initiativen und wie optimieren wir kontinuierlich die Lerneffektivität?',
        answer: "ADVISORI entwickelt umfassende Performance-Measurement-Frameworks, die sowohl quantitative als auch qualitative Aspekte der KI-Kompetenzentwicklung erfassen und kontinuierliche Optimierung ermöglichen. Unsere Metriken verbinden Lernfortschritt mit Geschäftsergebnissen und schaffen datengetriebene Grundlagen für strategische Entscheidungen über Kompetenzinvestitionen.\n\n📊 Multi-Dimensional Performance Metrics:\n• Learning Effectiveness Indicators: Messung von Wissensaufnahme, Kompetenzentwicklung und praktischer Anwendungsfähigkeit durch verschiedene Assessment-Methoden.\n• Business Impact Metrics: Quantifizierung des direkten Einflusses von KI-Kompetenzentwicklung auf Geschäftsergebnisse, Produktivität und Innovation.\n• Engagement und Satisfaction Scores: Bewertung der Lernmotivation, Zufriedenheit und langfristigen Bindung der Teilnehmer an Entwicklungsprogramme.\n• Time-to-Competency Measurements: Tracking der Geschwindigkeit, mit der Mitarbeiter produktive KI-Kompetenzen entwickeln und anwenden.\n\n🎯 ROI und Value Creation Tracking:\n• Skill Application Success Rates: Messung der erfolgreichen Anwendung erlernter KI-Kompetenzen in realen Geschäftsprojekten.\n• Innovation Output Metrics: Quantifizierung neuer Ideen, Projekte und Lösungen, die aus KI-Kompetenzentwicklung resultieren.\n• Career Progression Indicators: Tracking von Karriereentwicklung und internen Beförderungen als Resultat von KI-Kompetenzaufbau.\n• Retention und Talent Attraction: Messung der Auswirkungen von KI-Kompetenzprogrammen auf Mitarbeiterbindung und Talentakquisition.\n\n🔄 Continuous Optimization Frameworks:\n• Adaptive Learning Analytics: KI-gestützte Analyse von Lernmustern und -ergebnissen für kontinuierliche Programm-Optimierung.\n• Feedback Loop Integration: Systematische Einbindung von Teilnehmer-, Manager- und Stakeholder-Feedback in Programm-Verbesserungen.\n• Predictive Performance Modeling: Vorhersage von Lernerfolg und Geschäftsimpact für proaktive Programm-Anpassungen.\n• Benchmarking und Best Practice Sharing: Vergleich mit Branchenstandards und Integration externer Best Practices für kontinuierliche Verbesserung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie positioniert ADVISORI KI-Kompetenzentwicklung als Future-Proofing-Strategie und welche Ansätze nutzen wir zur Vorbereitung auf zukünftige technologische Entwicklungen?',
        answer: "ADVISORI konzipiert KI-Kompetenzentwicklung als strategische Future-Proofing-Initiative, die Organisationen nicht nur für aktuelle Herausforderungen rüstet, sondern auch für unvorhersehbare technologische Entwicklungen und Marktveränderungen vorbereitet. Unsere Ansätze schaffen adaptive Fähigkeiten und Denkweisen, die mit der Geschwindigkeit technologischer Innovation Schritt halten.\n\n🔮 Future-Ready Competency Architecture:\n• Foundational Thinking Skills: Entwicklung übertragbarer kognitiver Fähigkeiten wie systemisches Denken, Problemlösung und kritische Analyse, die technologie-agnostisch anwendbar sind.\n• Adaptive Learning Capabilities: Aufbau der Fähigkeit, neue Technologien schnell zu verstehen, zu bewerten und zu integrieren, unabhängig von spezifischen Tools oder Plattformen.\n• Cross-Domain Knowledge Integration: Förderung interdisziplinärer Kompetenzen, die verschiedene Technologiebereiche und Anwendungsdomänen verbinden.\n• Innovation Methodology Mastery: Beherrschung von Innovationsprozessen und -methoden, die bei verschiedenen technologischen Paradigmen anwendbar sind.\n\n🚀 Emerging Technology Readiness:\n• Technology Scouting und Trend Analysis: Kontinuierliche Überwachung technologischer Entwicklungen und Integration relevanter Trends in Kompetenzentwicklung.\n• Experimental Learning Frameworks: Strukturierte Ansätze zum Experimentieren mit neuen Technologien und zur Bewertung ihres Potenzials.\n• Scenario Planning und Strategic Foresight: Entwicklung von Fähigkeiten zur Antizipation verschiedener technologischer Zukunftsszenarien und entsprechender Vorbereitung.\n• Agile Competency Development: Flexible, iterative Ansätze zur Kompetenzentwicklung, die schnelle Anpassung an neue Anforderungen ermöglichen.\n\n🌐 Organizational Resilience Building:\n• Change Readiness Cultivation: Aufbau organisationaler Fähigkeiten zur schnellen Anpassung an technologische Disruption und Marktveränderungen.\n• Knowledge Network Resilience: Schaffung robuster interner und externer Wissensnetzwerke für kontinuierlichen Zugang zu neuen Entwicklungen.\n• Strategic Partnership Ecosystems: Aufbau von Partnerschaften mit Forschungseinrichtungen, Technologieanbietern und Innovatoren für frühzeitigen Zugang zu Entwicklungen.\n• Continuous Capability Refresh: Etablierung von Prozessen zur regelmäßigen Aktualisierung und Erweiterung organisationaler Fähigkeiten entsprechend technologischer Evolution."
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
