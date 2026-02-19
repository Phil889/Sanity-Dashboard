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
    console.log('Updating ESG Training page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'esg-training' })
    
    if (!existingDoc) {
      throw new Error('Document "esg-training" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie etabliert ADVISORI ESG Training als strategisches Tool für Talent Attraction, Retention und Employer Branding in einem umkämpften Arbeitsmarkt?",
        answer: "In einem zunehmend talentgetriebenen Markt wird ESG-Kompetenz zu einem entscheidenden Faktor für Talent Attraction und Retention. Moderne Fachkräfte, insbesondere Millennials und Gen Z, erwarten von ihren Arbeitgebern nicht nur attraktive Karrieremöglichkeiten, sondern auch sinnstiftende Arbeit und authentisches Engagement für Nachhaltigkeit. ADVISORI entwickelt ESG Training-Programme, die gleichzeitig Kompetenzaufbau und Employer Branding optimieren.\n\n🌟 ESG Training als Talent Magnet:\n• Purpose-Driven Career Development: Integration von ESG-Kompetenzen in Karriereentwicklungspfade, wodurch Mitarbeiter ihre berufliche Entwicklung mit persönlichen Werten und gesellschaftlichem Impact verknüpfen können.\n• Next-Generation Leadership Pipeline: Entwicklung von ESG-Leadership-Programmen, die High-Potentials für zukünftige Führungsrollen in einer nachhaltigen Wirtschaft vorbereiten.\n• Competitive Differentiation im Talent Market: Positionierung als ESG-Vorreiter durch sichtbare Investitionen in nachhaltige Kompetenzentwicklung, wodurch Top-Talente angezogen werden.\n• Internal Mobility und Cross-Functional Skills: Schaffung neuer Karrierewege durch ESG-spezifische Rollen und Kompetenzen, die interne Mobilität und Mitarbeiterbindung fördern.\n\n🎯 ADVISORI's Talent-Centric ESG Training Strategy:\n• Generational Learning Preferences: Anpassung der Training-Formate an die spezifischen Lernpräferenzen verschiedener Generationen, von interaktiven digitalen Formaten für Digital Natives bis zu strukturierten Mentoring-Programmen für erfahrene Professionals.\n• ESG Innovation Challenges: Integration von Hackathons, Innovation Labs und Sustainability Challenges in Training-Programme zur Förderung von Kreativität und Unternehmergeist.\n• Recognition und Certification Programs: Entwicklung anerkannter ESG-Zertifizierungen und Auszeichnungen, die Mitarbeitern externe Anerkennung und Karrierevorteile bieten.\n• Alumni Networks und Community Building: Aufbau von ESG-Training-Alumni-Netzwerken für kontinuierlichen Erfahrungsaustausch und professionelle Weiterentwicklung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie entwickelt ADVISORI ESG Training-Programme für Board Members und Aufsichtsräte zur Erfüllung ihrer fiduziären Pflichten in der ESG-Governance?",
        answer: "Board Members und Aufsichtsräte tragen eine besondere Verantwortung für die ESG-Governance ihrer Unternehmen und stehen unter zunehmendem regulatorischen und gesellschaftlichen Druck, fundierte ESG-Entscheidungen zu treffen. ADVISORI entwickelt spezialisierte Board-Level ESG Training-Programme, die Directors mit den notwendigen Kompetenzen für effektive ESG-Oversight und strategische Entscheidungsfindung ausstatten.\n\n🏛️ Board-Level ESG Governance Excellence:\n• Fiduciary Duty und ESG Integration: Umfassende Schulung in der Integration von ESG-Faktoren in fiduziäre Entscheidungen und der Balance zwischen Shareholder Value und Stakeholder Interests.\n• Regulatory Compliance und Liability Management: Detaillierte Ausbildung in ESG-bezogenen regulatorischen Anforderungen und deren Auswirkungen auf Board-Haftung und Oversight-Verantwortlichkeiten.\n• ESG Risk Assessment und Materiality: Befähigung zur Bewertung ESG-spezifischer Risiken und deren Materialität für das Unternehmen sowie zur Entwicklung angemessener Risk Appetite Statements.\n• Stakeholder Engagement und Communication: Training in effektiver Kommunikation mit Investoren, Regulatoren und anderen Stakeholdern zu ESG-Themen und -Performance.\n\n🎯 ADVISORI's Director-Focused Training Methodology:\n• Case-Based Learning mit Real-World Scenarios: Intensive Fallstudienarbeit mit authentischen Board-Situationen und ESG-Dilemmata aus verschiedenen Branchen und Jurisdiktionen.\n• Peer Learning und Best Practice Sharing: Exklusive Director-Roundtables für vertraulichen Erfahrungsaustausch zwischen Board Members verschiedener Unternehmen.\n• Legal und Regulatory Updates: Kontinuierliche Briefings über sich entwickelnde ESG-Regulatorik und deren Implikationen für Board-Governance und Entscheidungsfindung.\n• ESG Metrics und Performance Oversight: Training in der Interpretation und Überwachung ESG-Performance-Metriken sowie der Bewertung Management-Leistung in ESG-Bereichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die besonderen ESG Training-Anforderungen regulierter Branchen wie Finanzdienstleistungen, Energie und Gesundheitswesen?",
        answer: "Regulierte Branchen stehen unter besonderem Druck, ESG-Compliance zu gewährleisten, da Verstöße nicht nur zu finanziellen Strafen, sondern auch zu Lizenzverlusten oder operativen Einschränkungen führen können. ADVISORI entwickelt hochspezialisierte, regulierungskonformen ESG Training-Programme, die die einzigartigen Compliance-Landschaften und Stakeholder-Erwartungen regulierter Sektoren berücksichtigen.\n\n🏦 Sector-Specific Regulatory ESG Training:\n• Financial Services ESG Compliance: Spezialisierte Programme für Banken, Versicherungen und Asset Manager mit Fokus auf SFDR, EU-Taxonomie, TCFD und ESG Risk Management in Finanzprodukten.\n• Energy Sector Transition Training: Umfassende Schulungen für Energieunternehmen zu Just Transition, Renewable Energy Integration, Carbon Management und Stakeholder Relations in der Energiewende.\n• Healthcare ESG Responsibilities: Branchenspezifische Module zu Patient Safety, Access to Healthcare, Clinical Trial Ethics und Pharmaceutical Supply Chain Sustainability.\n• Telecommunications und Critical Infrastructure: ESG-Training für systemrelevante Sektoren mit Schwerpunkt auf Digital Rights, Cybersecurity Ethics und Infrastructure Resilience.\n\n⚖️ ADVISORI's Regulatory-Compliant Training Framework:\n• Regulatory Mapping und Compliance Integration: Systematische Zuordnung von ESG-Training-Inhalten zu spezifischen regulatorischen Anforderungen und Audit-Standards der jeweiligen Branche.\n• Regulator Engagement und Validation: Direkte Zusammenarbeit mit Aufsichtsbehörden zur Validierung von Training-Inhalten und zur Sicherstellung regulatorischer Akzeptanz.\n• Documentation und Audit Trail: Umfassende Dokumentation aller Training-Aktivitäten für regulatorische Prüfungen und Compliance-Nachweise.\n• Crisis Management und Regulatory Response: Spezialisierte Module zur Vorbereitung auf ESG-bezogene Krisen und angemessene Kommunikation mit Regulatoren und Stakeholdern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie integriert ADVISORI ESG Training in bestehende Corporate University-Strukturen und Learning Management Systems für nahtlose Skalierung?",
        answer: "Die Integration von ESG Training in bestehende Unternehmens-Bildungsinfrastrukturen ist entscheidend für Skalierung und nachhaltige Implementierung. ADVISORI entwickelt modulare, technologie-kompatible ESG Training-Lösungen, die nahtlos in Corporate Universities, Learning Management Systems und bestehende Weiterbildungsprogramme integriert werden können.\n\n🎓 Corporate University ESG Integration:\n• Learning Architecture Harmonization: Entwicklung von ESG-Curricula, die sich nahtlos in bestehende Kompetenz-Frameworks und Qualifikationsmatrizen der Corporate University einfügen.\n• Technology Stack Integration: Kompatibilität mit führenden LMS-Plattformen (Cornerstone, Workday Learning, SAP SuccessFactors) und Learning Experience Platforms für reibungslose technische Integration.\n• Blended Learning Ecosystem: Kombination von ESG-spezifischen Inhalten mit bestehenden Leadership-, Compliance- und Technical Training-Programmen für ganzheitliche Kompetenzentwicklung.\n• Assessment und Certification Alignment: Integration ESG-spezifischer Bewertungen und Zertifizierungen in bestehende Performance Management und Career Development Systeme.\n\n🔧 ADVISORI's Systematic Integration Approach:\n• Change Management für Learning Organizations: Strukturierte Begleitung der Integration von ESG-Lerninhalten in etablierte Bildungsstrukturen mit minimaler Disruption bestehender Prozesse.\n• Train-the-Trainer für interne L&D Teams: Befähigung interner Learning & Development Teams zur eigenständigen Weiterentwicklung und Anpassung von ESG-Training-Inhalten.\n• Analytics und Learning Intelligence: Integration fortschrittlicher Learning Analytics zur Messung der ESG-Kompetenzentwicklung und deren Korrelation mit Geschäftsergebnissen.\n• Continuous Content Evolution: Etablierung von Prozessen für kontinuierliche Aktualisierung und Verbesserung von ESG-Lerninhalten basierend auf Learner Feedback und Marktentwicklungen."
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
