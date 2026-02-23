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
    console.log('Updating ESG Training page with C-Level FAQs batch 1 (German)...')
    
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
        _key: generateKey('faq', 1),
        question: "Warum ist strategisches ESG Training für die C-Suite unverzichtbar und wie transformiert ADVISORI Executive Education in einen nachhaltigen Wettbewerbsvorteil?",
        answer: "Für C-Level-Führungskräfte ist ESG Training längst nicht mehr nur eine Compliance-Maßnahme, sondern ein strategischer Imperativ zur Sicherung der Zukunftsfähigkeit und Wettbewerbsposition des Unternehmens. In einer Zeit rapider ESG-Transformation erwarten Investoren, Regulatoren und Stakeholder von der Führungsebene fundierte ESG-Kompetenzen und authentische nachhaltige Führung. ADVISORI entwickelt maßgeschneiderte Executive Training Programme, die ESG-Leadership zu einem strategischen Differenzierungsmerkmal transformieren.\n\n🎯 Strategische Notwendigkeit für ESG Executive Education:\n• Leadership Credibility und Stakeholder Confidence: Fundierte ESG-Kompetenz der Führungsebene stärkt das Vertrauen von Investoren, Kunden und anderen Stakeholdern und positioniert das Unternehmen als glaubwürdigen Akteur der nachhaltigen Transformation.\n• Strategic Decision Making unter ESG-Gesichtspunkten: Befähigung zur Integration von ESG-Faktoren in strategische Entscheidungsprozesse, von M&A-Transaktionen bis zur Produktentwicklung.\n• Risk Management und Opportunity Recognition: Entwicklung der Fähigkeit, ESG-Risiken frühzeitig zu identifizieren und gleichzeitig nachhaltige Geschäftschancen zu erkennen und zu kapitalisieren.\n• Regulatory Preparedness und Compliance Leadership: Proaktive Vorbereitung auf kommende ESG-Regulatorik und Positionierung als Compliance Leader in der Branche.\n\n🚀 ADVISORI's Executive ESG Training Excellence:\n• C-Suite-spezifische Curriculum-Entwicklung: Wir entwickeln hochgradig maßgeschneiderte Training-Programme, die auf die spezifischen Herausforderungen und Verantwortlichkeiten der jeweiligen C-Level-Position zugeschnitten sind.\n• Strategic ESG Integration Workshops: Intensive Sessions zur praktischen Integration von ESG-Prinzipien in bestehende Geschäftsstrategien und Entscheidungsprozesse.\n• ESG Governance und Board Readiness: Spezialisierte Programme zur Vorbereitung auf ESG-bezogene Board-Diskussionen und Aufsichtsrats-Verantwortlichkeiten.\n• Peer Learning und Best Practice Sharing: Exklusive Executive Peer Groups zum Erfahrungsaustausch mit anderen C-Level-Führungskräften, die bereits erfolgreiche ESG-Transformationen geleitet haben."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: "Wie entwickelt ADVISORI maßgeschneiderte ESG Training-Programme, die den spezifischen Anforderungen verschiedener Organisationsebenen und Fachbereiche gerecht werden?",
        answer: "Die Heterogenität der ESG-Anforderungen in modernen Organisationen erfordert differenzierte und zielgruppenspezifische Training-Ansätze. ADVISORI entwickelt modulare, skalierbare Training-Ökosysteme, die von strategischer C-Level-Bildung bis zu operativen Fachschulungen alle Organisationsebenen abdecken und dabei branchenspezifische Besonderheiten und funktionale Anforderungen berücksichtigen.\n\n🎯 Zielgruppenspezifische Training-Architekturen:\n• Executive Leadership Track: Strategisch ausgerichtete Programme für C-Level und Senior Management mit Fokus auf ESG-Governance, Stakeholder-Management und nachhaltige Geschäftsmodell-Innovation.\n• Functional Expert Tracks: Spezialisierte Curricula für Finance (ESG Reporting, Sustainable Finance), Risk Management (ESG Risk Assessment), HR (Social Sustainability), Operations (Environmental Management) und andere Fachbereiche.\n• Middle Management Development: Programme zur Befähigung von Abteilungs- und Teamleitern als ESG-Change-Agents und Multiplikatoren in ihren Bereichen.\n• General Workforce Awareness: Breit angelegte Sensibilisierungs- und Grundlagenprogramme für alle Mitarbeiter zur Schaffung einer nachhaltigen Unternehmenskultur.\n\n📚 ADVISORI's Adaptive Learning Methodology:\n• Competency-based Curriculum Design: Entwicklung von lernzielorientierten Curricula basierend auf detaillierten Kompetenz-Assessments und Skill-Gap-Analysen für jede Zielgruppe.\n• Multi-Modal Learning Delivery: Flexible Kombination aus Präsenz-Workshops, E-Learning-Modulen, Action Learning Projects und Mentoring-Programmen zur Berücksichtigung verschiedener Lernpräferenzen.\n• Industry-specific Case Studies: Integration branchenspezifischer Fallstudien und Real-World-Szenarien zur Erhöhung der Praxisrelevanz und Anwendbarkeit.\n• Progressive Skill Building: Strukturierte Lernpfade mit aufeinander aufbauenden Modulen, von ESG-Grundlagen bis zu Advanced Expert-Level-Kompetenzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: "Wie misst und validiert ADVISORI den ROI von ESG Training-Investitionen und welche nachhaltigen Veränderungen lassen sich in der Organisationsperformance nachweisen?",
        answer: "Die Quantifizierung des Return on Investment (ROI) von ESG Training ist eine komplexe, aber essenzielle Aufgabe zur Rechtfertigung von Bildungsinvestitionen und zur kontinuierlichen Optimierung der Lernprogramme. ADVISORI entwickelt umfassende Assessment- und Measurement-Frameworks, die sowohl quantitative als auch qualitative Erfolgsmetriken erfassen und den direkten Zusammenhang zwischen Kompetenzentwicklung und Geschäftsergebnissen dokumentieren.\n\n💡 Mehrdimensionale ROI-Measurement-Ansätze:\n• Immediate Learning Outcomes: Messung des unmittelbaren Wissenszuwachses durch Pre/Post-Assessments, Zertifizierungstests und praktische Kompetenzdemonstrationen.\n• Behavioral Change Indicators: Tracking von Verhaltensänderungen am Arbeitsplatz durch 360-Grad-Feedback, Vorgesetzten-Bewertungen und Self-Assessment-Tools über definierte Zeiträume.\n• Business Impact Metrics: Quantifizierung der direkten Geschäftsauswirkungen wie verbesserte ESG-Scores, reduzierte Compliance-Verstöße, erhöhte Stakeholder-Satisfaction und gestiegene Mitarbeiterengagement-Werte.\n• Long-term Transformation Indicators: Langfristige Verfolgung von Organisationsveränderungen wie Cultural Shift Assessments, ESG Integration Maturity Levels und Sustainable Innovation Outputs.\n\n📊 ADVISORI's Evidence-based Validation System:\n• Kirkpatrick-Model Implementation: Systematische Anwendung des bewährten Vier-Ebenen-Modells (Reaction, Learning, Behavior, Results) zur strukturierten Erfolgsmessung.\n• Control Group Studies: Wissenschaftlich fundierte Vergleichsstudien zwischen trainierten und nicht-trainierten Mitarbeitergruppen zur Isolierung der Training-Effekte.\n• Longitudinal Impact Tracking: Mehrjährige Verlaufsstudien zur Dokumentation nachhaltiger Lerneffekte und deren Einfluss auf Karriereentwicklung und Organisationsperformance.\n• Economic Impact Quantification: Berechnung konkreter finanzieller Vorteile wie Kosteneinsparungen durch bessere ESG-Performance, reduzierte Risikopositionen und erhöhte Marktbewertungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: "Wie entwickelt ADVISORI nachhaltige Train-the-Trainer-Programme, die interne ESG-Expertise aufbauen und organisationale Lernkulturen transformieren?",
        answer: "Die Etablierung interner ESG-Trainingskapazitäten ist ein strategischer Ansatz zur Skalierung von Kompetenzentwicklung und zur Schaffung selbstverstärkender Lernkulturen. ADVISORI's Train-the-Trainer-Programme gehen über traditionelle Wissensvermittlung hinaus und entwickeln interne Change Agents, die als ESG-Multiplikatoren und Kulturträger fungieren und nachhaltige Transformationsprozesse in der gesamten Organisation vorantreiben.\n\n🎓 Aufbau interner ESG-Trainingsexzellenz:\n• Train-the-Trainer Certification Programmes: Umfassende Zertifizierungsprogramme für interne Trainer, die sowohl ESG-Fachwissen als auch moderne Erwachsenenbildungs-Methodiken vermitteln.\n• Content Development Enablement: Befähigung interner Teams zur eigenständigen Entwicklung und Anpassung von ESG-Trainingsinhalten für spezifische Organisationsanforderungen.\n• Digital Learning Platform Setup: Implementierung und Schulung in der Nutzung digitaler Lernplattformen für skalierbare ESG-Wissensvermittlung.\n• Continuous Professional Development: Ongoing Support und Weiterbildung für interne Trainer zur Sicherstellung aktueller ESG-Expertise und methodischer Kompetenz.\n\n🌱 Kulturelle Transformation durch interne Multiplikatoren:\n• Change Agent Network Development: Aufbau strukturierter Netzwerke von ESG-Champions in verschiedenen Unternehmensbereichen zur dezentralen Förderung nachhaltiger Praktiken.\n• Mentoring und Coaching Programmes: Entwicklung interner Mentoring-Systeme zur peer-to-peer Wissensvermittlung und zur Unterstützung kontinuierlicher ESG-Kompetenzentwicklung.\n• Community of Practice Establishment: Schaffung interner Communities of Practice für kontinuierlichen Erfahrungsaustausch, Best Practice Sharing und kollektive Problemlösung.\n• Innovation Lab Integration: Integration der Train-the-Trainer-Absolventen in ESG-Innovation Labs zur Förderung kreativer Lösungsansätze und zur Entwicklung neuer nachhaltiger Geschäftspraktiken."
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
