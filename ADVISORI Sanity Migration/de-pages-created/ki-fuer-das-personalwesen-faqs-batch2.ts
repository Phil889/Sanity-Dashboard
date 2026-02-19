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
    console.log('Updating KI für das Personalwesen page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-fuer-das-personalwesen' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-fuer-das-personalwesen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Welche Herausforderungen entstehen bei der Implementierung von KI im Personalwesen und wie überwindet ADVISORI diese systematisch?',
        answer: "Die Implementierung von KI im Personalwesen bringt komplexe technische, organisatorische und kulturelle Herausforderungen mit sich. ADVISORI hat einen bewährten Ansatz entwickelt, der diese Herausforderungen systematisch adressiert und Unternehmen zu erfolgreichen AI-HR-Transformationen führt. Unser Fokus liegt auf nachhaltiger Veränderung, die sowohl technische Exzellenz als auch menschliche Akzeptanz gewährleistet.\n\n🔧 Technische Implementierungsherausforderungen:\n• Datenqualität und Integration: Viele Unternehmen haben fragmentierte HR-Daten in verschiedenen Systemen. ADVISORI entwickelt umfassende Datenintegrations-Strategien, die bestehende Systeme verbinden und Datenqualität durch intelligente Bereinigung und Standardisierung sicherstellen.\n• Legacy-System-Integration: Bestehende HR-Systeme sind oft nicht für KI-Integration ausgelegt. Wir entwickeln Brückenlösungen und API-Architekturen, die moderne AI-Funktionalitäten nahtlos in bestehende Infrastrukturen integrieren.\n• Skalierbarkeit und Performance: KI-Systeme müssen mit wachsenden Datenmengen und Nutzerzahlen skalieren. Unsere Cloud-native Architekturen gewährleisten optimale Performance auch bei steigenden Anforderungen.\n• Sicherheit und Compliance: HR-Daten sind besonders sensibel und erfordern höchste Sicherheitsstandards. Wir implementieren mehrstufige Sicherheitskonzepte mit Verschlüsselung, Zugriffskontrollen und kontinuierlicher Überwachung.\n\n👥 Organisatorische und kulturelle Transformation:\n• Change Management und Mitarbeiterakzeptanz: KI-Implementierung verändert Arbeitsweisen fundamental. ADVISORI entwickelt umfassende Change-Management-Programme, die Ängste abbauen, Vorteile kommunizieren und Mitarbeiter zu aktiven Unterstützern der Transformation machen.\n• Skill-Entwicklung und Training: HR-Teams benötigen neue Kompetenzen für die Arbeit mit KI-Systemen. Wir entwickeln maßgeschneiderte Schulungsprogramme, die sowohl technisches Verständnis als auch praktische Anwendungsfähigkeiten vermitteln.\n• Governance und Verantwortlichkeiten: Klare Rollen und Verantwortlichkeiten für KI-Systeme sind essentiell. Wir etablieren AI-Governance-Strukturen mit definierten Entscheidungsprozessen und Verantwortlichkeiten.\n• Kulturwandel zur datengetriebenen HR: Der Übergang von intuitionsbasierten zu datengetriebenen Entscheidungen erfordert kulturelle Veränderung. Wir begleiten diesen Wandel durch Coaching, Best-Practice-Sharing und kontinuierliche Unterstützung.\n\n🎯 ADVISORI Erfolgsansatz:\n• Phasenweise Implementierung mit Quick Wins: Wir beginnen mit einfachen, aber wirkungsvollen AI-Anwendungen, die schnelle Erfolge zeigen und Vertrauen in die Technologie aufbauen.\n• Kontinuierliche Optimierung und Lernen: Unsere Implementierungen sind darauf ausgelegt, kontinuierlich zu lernen und sich zu verbessern, was langfristigen Erfolg und Anpassungsfähigkeit gewährleistet.\n• Umfassende Unterstützung und Begleitung: Von der Strategieentwicklung bis zur vollständigen Implementierung bieten wir durchgängige Unterstützung und stellen sicher, dass alle Herausforderungen erfolgreich gemeistert werden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Wie verändert KI die Rolle von HR-Professionals und welche neuen Kompetenzen werden in der Zukunft der Personalarbeit benötigt?',
        answer: "KI transformiert die Rolle von HR-Professionals von administrativen Aufgaben hin zu strategischen, beratenden und kreativen Tätigkeiten. ADVISORI unterstützt HR-Teams dabei, diese Transformation erfolgreich zu meistern und sich zu wertvollen strategischen Partnern für das Business zu entwickeln. Die Zukunft der Personalarbeit liegt in der intelligenten Kombination menschlicher Expertise mit AI-Capabilities.\n\n🚀 Evolution der HR-Rolle durch KI:\n• Von Administration zu Strategie: KI übernimmt repetitive, administrative Aufgaben und befreit HR-Professionals für strategische Planung, Organisationsentwicklung und Business-Partnership-Aktivitäten.\n• Von reaktiv zu proaktiv: Predictive Analytics ermöglichen es HR-Teams, Trends frühzeitig zu erkennen und proaktive Maßnahmen zu entwickeln, statt nur auf Probleme zu reagieren.\n• Von Bauchgefühl zu datengetriebenen Insights: HR-Entscheidungen basieren zunehmend auf fundierten Datenanalysen und evidenzbasierten Erkenntnissen statt auf Intuition allein.\n• Von Einzelkämpfer zu AI-Orchestrator: HR-Professionals werden zu Dirigenten intelligenter Systeme, die menschliche Kreativität mit maschineller Effizienz kombinieren.\n\n💡 Neue Kernkompetenzen für AI-gestützte HR:\n• Data Literacy und Analytics: Verständnis für Datenanalyse, Interpretation von KI-Insights und Ableitung strategischer Handlungsempfehlungen aus komplexen Datensätzen.\n• AI-System-Management: Fähigkeit zur Konfiguration, Überwachung und Optimierung von KI-HR-Systemen sowie Verständnis für deren Möglichkeiten und Grenzen.\n• Ethische AI-Governance: Kompetenz in der Bewertung ethischer Implikationen von KI-Entscheidungen und Sicherstellung fairer, transparenter AI-Anwendungen.\n• Change Management und Digital Leadership: Fähigkeiten zur Führung digitaler Transformationen und Begleitung von Mitarbeitern durch technologische Veränderungen.\n• Human-Centered Design: Verständnis für die Gestaltung AI-gestützter Prozesse, die menschliche Bedürfnisse und Erfahrungen in den Mittelpunkt stellen.\n\n🎯 Strategische Wertsteigerung durch AI-kompetente HR:\n• Business Intelligence und Workforce Planning: HR-Professionals werden zu internen Beratern, die durch AI-gestützte Analysen strategische Geschäftsentscheidungen unterstützen.\n• Employee Experience Design: Gestaltung personalisierter, AI-optimierter Mitarbeitererfahrungen, die Engagement und Produktivität maximieren.\n• Talent Intelligence und Future Skills: Identifikation zukünftiger Skill-Anforderungen und Entwicklung proaktiver Talent-Strategien basierend auf Markt- und Technologietrends.\n• Organizational Agility: Aufbau adaptiver Organisationsstrukturen, die durch AI-Insights kontinuierlich optimiert werden.\n\n🔍 ADVISORI Kompetenzentwicklung:\n• Maßgeschneiderte Schulungsprogramme, die HR-Teams systematisch auf die AI-gestützte Zukunft vorbereiten und sowohl technische als auch strategische Kompetenzen entwickeln.\n• Mentoring und Coaching durch erfahrene AI-HR-Experten, die praktische Erfahrungen vermitteln und bei der Transformation begleiten.\n• Kontinuierliche Weiterbildung und Zertifizierung in neuesten AI-HR-Technologien und Best Practices für dauerhafte Kompetenz und Relevanz."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Welche Auswirkungen hat KI auf die Diversität und Inklusion im Unternehmen und wie kann AI dabei helfen, Bias zu reduzieren statt zu verstärken?',
        answer: "KI hat das Potenzial, Diversität und Inklusion im Unternehmen erheblich zu fördern, birgt aber auch Risiken der Bias-Verstärkung. ADVISORI entwickelt AI-HR-Systeme, die aktiv zur Schaffung fairerer, inklusiverer Arbeitsumgebungen beitragen und systematisch Vorurteile reduzieren. Unser Ansatz verbindet technische Exzellenz mit ethischen Prinzipien für nachhaltige D&I-Verbesserungen.\n\n⚖️ KI als Katalysator für faire Personalentscheidungen:\n• Objektive Bewertungskriterien: KI-Systeme können menschliche Vorurteile eliminieren, indem sie ausschließlich auf relevanten, jobbezogenen Kriterien basieren und persönliche Merkmale wie Geschlecht, Alter oder Herkunft ausblenden.\n• Strukturierte Entscheidungsprozesse: Algorithmen sorgen für konsistente, nachvollziehbare Bewertungen, die nicht von Tagesform, persönlichen Präferenzen oder unbewussten Vorurteilen beeinflusst werden.\n• Erweiterte Talentpools: KI kann Kandidaten identifizieren, die bei traditionellen Suchverfahren übersehen würden, und so den Zugang zu unterrepräsentierten Gruppen verbessern.\n• Kontinuierliche Fairness-Überwachung: Intelligente Monitoring-Systeme erkennen Bias-Muster in Echtzeit und ermöglichen sofortige Korrekturen.\n\n🔍 Proaktive Bias-Detection und Mitigation:\n• Algorithmus-Auditing: Regelmäßige Überprüfung von KI-Systemen auf versteckte Vorurteile durch statistische Analysen und Fairness-Metriken.\n• Diverse Trainingsdaten: Sicherstellung, dass KI-Modelle auf repräsentativen, ausgewogenen Datensätzen trainiert werden, die alle Bevölkerungsgruppen fair abbilden.\n• Explainable AI für Transparenz: Nachvollziehbare Entscheidungsprozesse ermöglichen es, Bias-Quellen zu identifizieren und zu korrigieren.\n• Kontinuierliche Kalibrierung: Adaptive Algorithmen, die aus Feedback lernen und ihre Fairness-Performance kontinuierlich verbessern.\n\n🌈 Förderung von Diversität durch intelligente Systeme:\n• Inclusive Recruiting: KI-gestützte Stellenausschreibungen, die diverse Kandidaten ansprechen und Barrieren für unterrepräsentierte Gruppen reduzieren.\n• Blind Recruitment: Anonymisierte Bewerbungsverfahren, die Entscheidungen ausschließlich auf Qualifikationen und Potenzial basieren lassen.\n• Diverse Team-Zusammenstellung: Algorithmen, die bei der Bildung von Teams aktiv auf ausgewogene Zusammensetzung achten und Diversitätsziele unterstützen.\n• Inklusive Karriereentwicklung: Personalisierte Entwicklungspfade, die individuelle Stärken fördern und allen Mitarbeitern gleiche Chancen bieten.\n\n🛡️ ADVISORI Fairness-by-Design-Ansatz:\n• Entwicklung ethischer AI-Frameworks, die Fairness und Inklusion von Grund auf in alle HR-Systeme integrieren und kontinuierlich überwachen.\n• Implementierung von Diversity-KPIs und Monitoring-Dashboards, die Fortschritte bei D&I-Zielen transparent machen und Handlungsbedarfe aufzeigen.\n• Schulung von HR-Teams in Bias-Erkennung und ethischer KI-Nutzung für kompetente und verantwortungsvolle Systemnutzung.\n• Aufbau von Feedback-Schleifen mit Mitarbeitern und Bewerbern, um kontinuierlich Verbesserungen zu identifizieren und umzusetzen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickelt sich die Zukunft der Arbeit durch KI im Personalwesen und welche strategischen Vorbereitungen sollten Unternehmen heute treffen?',
        answer: "Die Zukunft der Arbeit wird durch KI im Personalwesen fundamental neu gestaltet. ADVISORI hilft Unternehmen dabei, sich strategisch auf diese Transformation vorzubereiten und Wettbewerbsvorteile durch frühzeitige Adoption intelligenter HR-Systeme zu sichern. Erfolgreiche Unternehmen werden diejenigen sein, die heute die Weichen für eine AI-gestützte, menschenzentrierte Arbeitswelt stellen.\n\n🔮 Vision der AI-gestützten Arbeitswelt:\n• Hyper-personalisierte Arbeitsumgebungen: KI schafft individuell optimierte Arbeitserfahrungen, die sich kontinuierlich an Präferenzen, Leistungsmuster und Entwicklungsziele anpassen.\n• Predictive Workforce Management: Intelligente Systeme prognostizieren Personalbedarf, Skills-Entwicklung und Marktveränderungen, ermöglichen proaktive strategische Planung.\n• Seamless Human-AI-Collaboration: Nahtlose Zusammenarbeit zwischen Menschen und KI-Systemen, bei der jeder Partner seine Stärken optimal einbringt.\n• Continuous Learning Organizations: AI-gestützte Lernplattformen schaffen Organisationen, die sich kontinuierlich weiterentwickeln und an Marktveränderungen anpassen.\n\n📈 Strategische Vorbereitungen für die AI-HR-Zukunft:\n• Dateninfrastruktur und Analytics-Capabilities: Aufbau robuster Datenarchitekturen und Analytics-Kompetenzen als Grundlage für alle zukünftigen AI-Anwendungen.\n• Change-Ready Organisationskultur: Entwicklung einer Kultur der kontinuierlichen Veränderung und Innovation, die AI-Adoption als Chance statt Bedrohung versteht.\n• Future Skills und Kompetenzentwicklung: Proaktive Identifikation und Entwicklung der Fähigkeiten, die in einer AI-gestützten Arbeitswelt benötigt werden.\n• Flexible Arbeitsmodelle und Strukturen: Aufbau adaptiver Organisationsstrukturen, die schnell auf technologische und marktliche Veränderungen reagieren können.\n\n🎯 Wettbewerbsvorteile durch frühzeitige AI-Adoption:\n• First-Mover-Advantage: Unternehmen, die heute in AI-HR investieren, sichern sich Talentvorteile und Effizienzgewinne vor der Konkurrenz.\n• Employer Branding Excellence: AI-gestützte Employee Experience wird zum entscheidenden Differenzierungsfaktor im Kampf um Top-Talente.\n• Operational Excellence: Intelligente HR-Prozesse schaffen Effizienzvorteile, die sich direkt in Kosteneinsparungen und Produktivitätssteigerungen niederschlagen.\n• Innovation Leadership: AI-kompetente Organisationen sind besser positioniert, um zukünftige Technologien zu adoptieren und Marktchancen zu nutzen.\n\n🚀 ADVISORI Zukunftsvorbereitung:\n• Entwicklung maßgeschneiderter AI-HR-Roadmaps, die Unternehmen schrittweise auf die Zukunft der Arbeit vorbereiten und Quick Wins mit langfristiger Vision verbinden.\n• Aufbau von AI-Kompetenzen und Change-Management-Fähigkeiten, die Organisationen befähigen, Transformationen erfolgreich zu meistern.\n• Implementierung zukunftssicherer Technologiearchitekturen, die mit neuen Entwicklungen skalieren und sich an verändernde Anforderungen anpassen können.\n• Kontinuierliche Begleitung und Optimierung, um sicherzustellen, dass Unternehmen auch in Zukunft an der Spitze der AI-HR-Innovation stehen."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
