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
    console.log('Updating CRA Act page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-act' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-act" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche organisatorischen Strukturen und Rollen sind für eine erfolgreiche CRA Act Implementierung erforderlich und wie können wir diese effektiv in unsere bestehende Organisation integrieren?',
        answer: "Die erfolgreiche CRA Act Implementierung erfordert eine durchdachte organisatorische Transformation, die neue Rollen und Verantwortlichkeiten schafft, während sie gleichzeitig bestehende Strukturen respektiert und optimiert. Die Herausforderung liegt darin, Cybersicherheit als integralen Bestandteil aller Geschäftsprozesse zu etablieren, ohne organisatorische Silos zu schaffen oder die operative Effizienz zu beeinträchtigen.\n\n🏗️ Strategische Organisationsstrukturen:\n• Etablierung eines CRA Center of Excellence als zentrale Koordinationsstelle, die strategische Führung, Best Practice Entwicklung und organisationsweite Standardisierung vorantreibt.\n• Implementierung einer Matrix-Organisationsstruktur, die funktionale CRA-Expertise mit produktspezifischen Verantwortlichkeiten verknüpft und flexible Ressourcenallokation ermöglicht.\n• Aufbau von CRA Steering Committees auf verschiedenen Organisationsebenen zur Sicherstellung strategischer Ausrichtung und operativer Koordination.\n• Integration von CRA-Verantwortlichkeiten in bestehende Führungsrollen zur Vermeidung von Governance-Lücken und Verantwortungsdiffusion.\n• Schaffung von Cross-funktionalen CRA Teams, die verschiedene Fachbereiche wie IT, Compliance, Produktentwicklung und Qualitätsmanagement vereinen.\n\n👥 Neue Rollen und Verantwortlichkeiten:\n• Einführung der Rolle des Chief Cyber Resilience Officers oder CRA Officers mit direkter Berichtslinie zur Geschäftsführung und umfassenden Befugnissen für CRA-Implementierung.\n• Etablierung von Security Champions in allen Geschäftsbereichen als lokale Ansprechpartner und Multiplikatoren für CRA-Anforderungen.\n• Aufbau spezialisierter CRA Analyst Rollen für kontinuierliche Risikobewertung, Compliance-Monitoring und Bedrohungsanalyse.\n• Integration von CRA-Verantwortlichkeiten in bestehende Produktmanager und Entwicklungsleiter Rollen zur Sicherstellung von Security-by-Design.\n• Schaffung von CRA Audit und Assurance Funktionen für unabhängige Bewertung und Validierung der Compliance-Maßnahmen.\n\n🔄 Integration und Change Management:\n• Entwicklung umfassender Change Management Strategien, die kulturelle Transformation und Akzeptanz der neuen organisatorischen Strukturen fördern.\n• Implementierung von Kommunikations- und Training-Programmen zur Klarstellung neuer Rollen, Verantwortlichkeiten und Arbeitsabläufe.\n• Etablierung von Performance Management Systemen, die CRA-bezogene Ziele und KPIs in individuelle und Team-Bewertungen integrieren.\n• Aufbau von Karriereentwicklungspfaden für CRA-Spezialisten zur Förderung interner Expertise und Mitarbeiterbindung.\n• Integration der neuen Strukturen in bestehende Governance-Frameworks zur Sicherstellung konsistenter Entscheidungsfindung und Verantwortlichkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie können wir eine effektive Schulungs- und Awareness-Strategie entwickeln, die alle Mitarbeiterebenen erreicht und nachhaltiges Sicherheitsbewusstsein schafft?',
        answer: "Eine effektive Schulungs- und Awareness-Strategie für CRA Act Compliance muss über traditionelle Cybersicherheits-Trainings hinausgehen und eine umfassende Lernkultur schaffen, die kontinuierliche Weiterentwicklung und proaktives Sicherheitsverhalten fördert. Die Strategie muss verschiedene Lernstile, Rollen und Verantwortlichkeiten berücksichtigen und messbare Verhaltensänderungen bewirken.\n\n🎯 Zielgruppenspezifische Schulungsansätze:\n• Entwicklung rollenbasierter Schulungsprogramme, die spezifische CRA-Anforderungen für verschiedene Funktionen wie Entwicklung, Produktmanagement, Vertrieb und Führung adressieren.\n• Implementierung von Executive Education Programmen, die Führungskräfte über strategische Auswirkungen der CRA und ihre Rolle bei der Compliance-Sicherstellung informieren.\n• Aufbau spezialisierter Technical Deep-Dive Sessions für IT- und Entwicklungsteams zu Security-by-Design, Schwachstellenmanagement und Incident Response.\n• Schaffung von Awareness-Kampagnen für alle Mitarbeiter, die grundlegendes Verständnis für CRA-Anforderungen und individuelle Verantwortlichkeiten vermitteln.\n• Entwicklung von Onboarding-Programmen für neue Mitarbeiter, die CRA-Compliance als integralen Bestandteil der Unternehmenskultur etablieren.\n\n📚 Innovative Lernmethoden und Formate:\n• Implementierung von Microlearning-Ansätzen mit kurzen, fokussierten Lerneinheiten, die in den Arbeitsalltag integriert werden können.\n• Aufbau von Gamification-Elementen wie Cybersecurity Challenges, Quizzes und Wettbewerben zur Steigerung von Engagement und Motivation.\n• Verwendung von Simulation und Tabletop Exercises zur praktischen Anwendung von CRA-Wissen in realistischen Szenarien.\n• Integration von E-Learning Plattformen mit personalisierten Lernpfaden und adaptiven Inhalten basierend auf individuellen Bedürfnissen und Fortschritten.\n• Etablierung von Peer-to-Peer Learning und Mentoring-Programmen zur Förderung von Wissensaustausch und kollaborativem Lernen.\n\n🔄 Kontinuierliche Verbesserung und Messung:\n• Implementierung von Learning Analytics zur Messung von Trainingseffektivität, Wissensretention und Verhaltensänderungen.\n• Aufbau von Feedback-Mechanismen zur kontinuierlichen Verbesserung von Schulungsinhalten und -methoden basierend auf Teilnehmererfahrungen.\n• Entwicklung von Kompetenz-Assessments zur Bewertung von CRA-Kenntnissen und Identifikation von Schulungsbedarfen.\n• Integration von Schulungsmetriken in Performance Management Systeme zur Sicherstellung nachhaltiger Lernkultur.\n• Etablierung von regelmäßigen Refresher-Trainings und Updates zu neuen CRA-Entwicklungen und Bedrohungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Herausforderungen entstehen bei der CRA Act Implementierung in multinationalen Organisationen und wie können wir diese erfolgreich bewältigen?',
        answer: "Die CRA Act Implementierung in multinationalen Organisationen bringt komplexe Herausforderungen mit sich, die von unterschiedlichen regulatorischen Landschaften über kulturelle Unterschiede bis hin zu technischen Infrastruktur-Variationen reichen. Eine erfolgreiche Bewältigung erfordert einen ausgewogenen Ansatz zwischen globaler Standardisierung und lokaler Anpassung.\n\n🌍 Regulatorische und Compliance-Herausforderungen:\n• Navigation komplexer regulatorischer Landschaften mit unterschiedlichen Cybersicherheitsanforderungen in verschiedenen Jurisdiktionen und deren Harmonisierung mit CRA-Standards.\n• Entwicklung von Global Compliance Frameworks, die CRA-Anforderungen mit lokalen Gesetzen und Vorschriften in Einklang bringen.\n• Implementierung von Multi-jurisdictional Risk Assessments zur Bewertung von Compliance-Risiken in verschiedenen Märkten.\n• Aufbau von Legal und Regulatory Intelligence Capabilities zur kontinuierlichen Überwachung sich ändernder Anforderungen weltweit.\n• Etablierung von Coordination Mechanisms zwischen verschiedenen Rechtsordnungen für konsistente Compliance-Interpretation und -umsetzung.\n\n🏢 Organisatorische und kulturelle Komplexität:\n• Überbrückung kultureller Unterschiede in der Wahrnehmung und Priorisierung von Cybersicherheit durch kulturell sensible Kommunikations- und Trainingsansätze.\n• Harmonisierung verschiedener Organisationsstrukturen und Governance-Modelle in verschiedenen Ländern und Regionen.\n• Aufbau einheitlicher CRA-Standards und -prozesse bei gleichzeitiger Berücksichtigung lokaler Geschäftspraktiken und Anforderungen.\n• Entwicklung von Global-Local Balance Strategien, die zentrale Kontrolle mit regionaler Flexibilität verbinden.\n• Implementierung von Cross-Cultural Change Management Programmen zur Förderung globaler CRA-Akzeptanz und -adoption.\n\n⚙️ Technische und operative Herausforderungen:\n• Standardisierung heterogener IT-Infrastrukturen und Sicherheitsarchitekturen über verschiedene Standorte und Regionen hinweg.\n• Implementierung einheitlicher Security-by-Design Prinzipien in verschiedenen Entwicklungsstandorten mit unterschiedlichen technischen Capabilities.\n• Aufbau globaler Incident Response und Monitoring Capabilities, die Zeitzonendifferenzen und lokale Expertise berücksichtigen.\n• Entwicklung von Scalable Training und Awareness Programmen, die verschiedene Sprachen, Kulturen und Bildungsniveaus berücksichtigen.\n• Etablierung konsistenter Vendor Management und Supply Chain Security Praktiken über verschiedene Märkte und Lieferantennetzwerke hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie können wir die Effektivität unserer CRA Act Implementierung messen und kontinuierlich verbessern, um nachhaltigen Compliance-Erfolg zu gewährleisten?',
        answer: "Die Messung und kontinuierliche Verbesserung der CRA Act Implementierung erfordert ein umfassendes Performance Management System, das sowohl quantitative Metriken als auch qualitative Bewertungen umfasst. Das System muss sowohl Compliance-Status als auch Geschäftswert der Implementierung transparent machen und als Grundlage für datengetriebene Optimierungsentscheidungen dienen.\n\n📊 Umfassende Metriken und KPIs:\n• Entwicklung eines Balanced Scorecard Ansatzes für CRA-Performance, der Compliance-Metriken, Risikoindikatoren, operative Effizienz und Geschäftswert integriert.\n• Implementierung von Leading Indicators wie Schulungsabschlussraten, Vulnerability Scan Coverage und Security Gate Pass Rates zur proaktiven Performance-Überwachung.\n• Aufbau von Lagging Indicators wie Incident Response Times, Compliance Audit Results und Customer Security Satisfaction zur Bewertung der Implementierungseffektivität.\n• Integration von Business Impact Metriken wie Time-to-Market Improvements, Cost Avoidance und Customer Trust Scores zur Demonstration des Geschäftswerts.\n• Etablierung von Benchmarking-Prozessen gegen Industriestandards und Best Practices zur relativen Performance-Bewertung.\n\n🔄 Kontinuierliche Verbesserungsprozesse:\n• Implementierung von Plan-Do-Check-Act Zyklen für systematische Identifikation, Umsetzung und Bewertung von Verbesserungsmaßnahmen.\n• Aufbau von Root Cause Analysis Capabilities zur tiefgreifenden Untersuchung von Performance-Gaps und Compliance-Problemen.\n• Entwicklung von Lessons Learned Repositories zur Sammlung und Verbreitung von Erfahrungen und Best Practices.\n• Etablierung von Innovation Labs und Pilot Programs zur Testung neuer Ansätze und Technologien für CRA-Compliance.\n• Integration von Continuous Improvement Metriken in Performance Management Systeme zur Förderung einer Verbesserungskultur.\n\n🎯 Strategische Performance-Optimierung:\n• Entwicklung von Maturity Models für CRA-Implementierung zur systematischen Bewertung und Weiterentwicklung der Compliance-Fähigkeiten.\n• Implementierung von Predictive Analytics zur Vorhersage zukünftiger Performance-Trends und proaktiven Optimierung.\n• Aufbau von Stakeholder Feedback Mechanismen zur Integration verschiedener Perspektiven in Verbesserungsprozesse.\n• Etablierung von Executive Dashboards und Reporting-Systeme für transparente Kommunikation der CRA-Performance an verschiedene Stakeholder-Gruppen.\n• Integration von Performance-Daten in strategische Planungsprozesse zur Sicherstellung kontinuierlicher Alignment zwischen CRA-Implementierung und Geschäftszielen."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
