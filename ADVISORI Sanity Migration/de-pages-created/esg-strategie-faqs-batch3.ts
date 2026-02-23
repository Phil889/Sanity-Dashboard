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
    console.log('Updating ESG-Strategie page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-strategie' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-strategie" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie gestaltet ADVISORI Change Management für ESG-Transformation und welche bewährten Praktiken gibt es für die Überwindung organisationaler Widerstände?",
        answer: "ESG-Transformation erfordert fundamentale Verhaltens- und Kulturveränderungen, die oft auf organisationalen Widerstand stoßen. ADVISORI hat einen human-zentrierten Change-Management-Ansatz entwickelt, der psychologische Barrieren adressiert, Sinnstiftung vermittelt und nachhaltige Verhaltensänderungen bewirkt. Unser Ansatz geht weit über traditionelle Change-Programme hinaus und schafft echte ESG-Begeisterung.\n\n🧠 Psychologie-basiertes ESG-Change-Management:\n• Purpose-Driven Transformation: Entwicklung einer inspirierenden ESG-Vision, die persönliche Werte der Mitarbeiter mit Unternehmenszielen verbindet und intrinsische Motivation für Nachhaltigkeit schafft.\n• Behavioral Nudging für ESG: Einsatz verhaltensökonomischer Prinzipien zur sanften Förderung nachhaltiger Entscheidungen durch intelligentes Choice Architecture und positive Verstärkung.\n• Storytelling und Emotional Connection: Entwicklung kraftvoller Narrativen, die ESG-Transformation emotional erlebbar machen und persönliche Betroffenheit für Nachhaltigkeitsthemen erzeugen.\n• Peer-to-Peer Advocacy: Aufbau von ESG-Champions-Netzwerken in verschiedenen Hierarchieebenen und Funktionen zur organischen Verbreitung von Nachhaltigkeitsengagement.\n\n🔄 Strukturierter Transformationsprozess:\n• Resistance Mapping und Stakeholder Analysis: Systematische Identifikation potenzieller Widerstandsquellen und Entwicklung zielgruppenspezifischer Überzeugungsstrategien.\n• Quick Wins und Momentum Building: Strategische Implementierung sichtbarer, kurzfristiger ESG-Erfolge zur Stärkung des Vertrauens in die Transformation.\n• Capability Building Programme: Umfassende Schulungs- und Entwicklungsprogramme, die Mitarbeiter befähigen, aktiv an der ESG-Transformation teilzunehmen.\n• Feedback Loops und Continuous Improvement: Etablierung regelmäßiger Feedback-Mechanismen zur Anpassung der Change-Strategie basierend auf organisationalem Lernen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche spezifischen Herausforderungen ergeben sich bei der ESG-Integration in traditionelle Industrien und wie unterstützt ADVISORI bei der sektorspezifischen Transformation?",
        answer: "Traditionelle Industrien wie Produktion, Energie oder Chemie stehen vor besonderen ESG-Herausforderungen durch legacy Infrastrukturen, regulatorischen Druck und hohe Transformationskosten. ADVISORI entwickelt maßgeschneiderte Transformationsstrategien, die sektorspezifische Realitäten berücksichtigen und gleichzeitig ambitionierte ESG-Ziele erreichen. Unser industriespezifischer Ansatz macht ESG-Transformation auch in kapitalintensiven Branchen wirtschaftlich machbar.\n\n🏭 Sektorspezifische ESG-Herausforderungen:\n• Asset-Heavy Transformations: Entwicklung von Strategien für die nachhaltige Modernisierung bestehender Anlagen und Infrastrukturen ohne prohibitive Kapitalkosten.\n• Regulatorischer Anpassungsdruck: Navigation komplexer und sich wandelnder regulatorischer Landschaften (Green Deal, Carbon Pricing, Emissionshandel) mit proaktiven Compliance-Strategien.\n• Supply Chain Complexity: Management komplexer, globaler Lieferketten mit unterschiedlichen ESG-Standards und begrenzter Transparenz.\n• Technology Transition Risks: Bewältigung von Stranded Assets und Technologierisiken beim Übergang zu nachhaltigen Produktionsverfahren.\n\n⚙️ ADVISORI's Industry-4.0-ESG-Ansatz:\n• Smart Manufacturing für Sustainability: Integration von IoT, KI und Digitalisierung zur Optimierung von Ressourceneffizienz und Emissionsreduktion in Produktionsprozessen.\n• Circular Economy Redesign: Fundamentale Neugestaltung von Produktions- und Geschäftsmodellen nach Kreislaufprinzipien zur Minimierung von Abfall und Maximierung der Ressourcennutzung.\n• Green Technology Roadmaps: Entwicklung strategischer Technologie-Roadmaps für den stufenweisen Übergang zu nachhaltigen Produktionstechnologien und erneuerbaren Energien.\n• Ecosystem Partnerships: Aufbau strategischer Allianzen mit Technologieanbietern, Forschungsinstituten und anderen Industriepartnern zur gemeinsamen Entwicklung nachhaltiger Lösungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie entwickelt ADVISORI ESG-Governance-Strukturen, die sowohl Aufsichtsrat als auch Geschäftsführung optimal in die Nachhaltigkeitsstrategie einbinden?",
        answer: "ESG-Governance auf Vorstandsebene ist entscheidend für glaubwürdige und nachhaltige ESG-Transformation. ADVISORI entwickelt maßgeschneiderte Governance-Strukturen, die ESG systematisch in Entscheidungsprozesse, Risikomanagement und strategische Planung integrieren. Unser Ansatz stärkt die ESG-Kompetenz von Führungsgremien und schafft klare Verantwortlichkeiten für Nachhaltigkeitsperformance.\n\n🏛️ ESG-Governance-Excellence auf Boardebene:\n• Board ESG Competency Building: Entwicklung gezielter Schulungs- und Weiterbildungsprogramme für Aufsichtsrats- und Vorstandsmitglieder zu ESG-Themen, regulatorischen Anforderungen und Branchentrends.\n• ESG Committee Design: Etablierung spezialisierter ESG-Ausschüsse mit klaren Mandaten, Entscheidungsbefugnissen und Berichtswegen zur strategischen Steuerung der Nachhaltigkeitstransformation.\n• Integrated Risk Governance: Integration von ESG-Risiken in bestehende Risikomanagement-Frameworks und Entscheidungsprozesse zur systematischen Berücksichtigung von Nachhaltigkeitsaspekten.\n• ESG Performance Incentives: Entwicklung von Vergütungs- und Incentive-Systemen, die ESG-Performance mit Führungskompensation verknüpfen und langfristige Nachhaltigkeitsziele fördern.\n\n📊 Strategische ESG-Steuerung und Monitoring:\n• ESG-Dashboard für Executives: Entwicklung von Executive-Dashboards mit relevanten ESG-KPIs, die regelmäßige Überwachung und strategische Entscheidungsfindung unterstützen.\n• Scenario Planning und Stresstests: Implementation von ESG-Szenarioanalysen und Klimastress-Tests zur strategischen Vorbereitung auf verschiedene Nachhaltigkeitszukünfte.\n• Stakeholder Integration in Governance: Systematische Integration von Stakeholder-Perspektiven in Governance-Prozesse durch Advisory Boards, Stakeholder Panels und regelmäßige Konsultationen.\n• ESG Due Diligence für M&A: Integration von ESG-Bewertungskriterien in Merger & Acquisition-Prozesse zur Sicherstellung der Nachhaltigkeitskompatibilität strategischer Entscheidungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie misst und kommuniziert ADVISORI ESG-Impact authentisch und transparent, um Greenwashing-Vorwürfen vorzubeugen und Stakeholder-Vertrauen zu stärken?",
        answer: "Authentische ESG-Kommunikation und Impact-Messung sind essentiell für die Glaubwürdigkeit von Nachhaltigkeitsstrategien. ADVISORI entwickelt wissenschaftsbasierte Measurement-Frameworks und transparente Kommunikationsstrategien, die echte Fortschritte dokumentieren und gleichzeitig Herausforderungen ehrlich addressieren. Unser Ansatz baut langfristiges Stakeholder-Vertrauen durch Authentizität statt PR.\n\n🔬 Science-Based Impact Measurement:\n• Third-Party Verified Metrics: Implementierung extern validierter Messsysteme und Standards (Science Based Targets, GRI, SASB) zur objektiven Bewertung der ESG-Performance.\n• Life Cycle Assessment Integration: Entwicklung umfassender Lebenszyklusanalysen für Produkte und Services zur transparenten Darstellung der gesamten Umweltauswirkungen.\n• Theory of Change Modeling: Erstellung detaillierter Wirkungsmodelle, die kausale Zusammenhänge zwischen ESG-Maßnahmen und tatsächlichen gesellschaftlichen/ökologischen Impacts darstellen.\n• Real-Time Impact Tracking: Implementation von Echtzeit-Monitoring-Systemen für kontinuierliche Überwachung und sofortige Korrekturmöglichkeiten bei Zielabweichungen.\n\n💬 Authentische Stakeholder-Kommunikation:\n• Balanced Reporting Approach: Entwicklung ausgewogener Berichterstattung, die sowohl Erfolge als auch Herausforderungen, Lessons Learned und Verbesserungsbereiche transparent kommuniziert.\n• Multi-Stakeholder Validation: Einbindung verschiedener Stakeholder-Gruppen in die Validierung von ESG-Reports und Impact-Claims zur Sicherstellung der Glaubwürdigkeit.\n• Progress Journey Narratives: Entwicklung authentischer Geschichten, die den ESG-Transformationsprozess als kontinuierliche Reise darstellen statt statischer Achievements.\n• Proactive Issue Management: Etablierung proaktiver Kommunikationsstrategien für potenzielle ESG-Herausforderungen oder Zielverfehlungen zur Aufrechterhaltung des Stakeholder-Vertrauens."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
