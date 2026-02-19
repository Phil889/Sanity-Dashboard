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
    console.log('Updating Business Continuity Management Training page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'business-continuity-management-training' })
    
    if (!existingDoc) {
      throw new Error('Document "business-continuity-management-training" not found')
    }
    
    // Create new FAQs for advanced BCM Training topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie integriere ich moderne Technologien wie KI und Automatisierung in BCM-Schulungen?',
        answer: "Die Integration moderner Technologien in BCM-Schulungen ist entscheidend, um Fachkräfte auf die digitale Zukunft des Business Continuity Managements vorzubereiten. Technologische Innovationen verändern sowohl die Art der Bedrohungen als auch die verfügbaren Lösungsansätze fundamental.\n\n🤖 Künstliche Intelligenz in BCM-Training:\n• Predictive Analytics für Risikovorhersage und Frühwarnsysteme\n• Machine Learning Algorithmen zur Mustererkennung in historischen Störungsdaten\n• Automatisierte Threat Intelligence und Vulnerability Assessment\n• AI-gestützte Entscheidungsunterstützung in Krisensituationen\n• Intelligente Ressourcenallokation und Kapazitätsplanung\n\n⚡ Automatisierung und Orchestrierung:\n• Automated Incident Response und Self-Healing Systeme\n• Orchestrierte Failover-Prozesse und automatische Systemwiederherstellung\n• Robotic Process Automation für repetitive BCM-Aufgaben\n• Automatisierte Compliance-Überwachung und Reporting\n• Integration von SOAR-Plattformen in BCM-Prozesse\n\n📱 Digitale Lernplattformen und Simulationen:\n• Virtual Reality Training für immersive Krisenerfahrungen\n• Augmented Reality für kontextuelle Anleitungen während Notfällen\n• Gamification-Ansätze zur Steigerung des Lernengagements\n• Mobile Learning Apps für Just-in-Time Training\n• Adaptive Learning Systeme mit personalisierten Lernpfaden\n\n🔗 IoT und Real-Time Monitoring:\n• Sensor-basierte Überwachung kritischer Infrastrukturen\n• Edge Computing für dezentrale Entscheidungsfindung\n• Digital Twins für Szenario-Modellierung und Testing\n• Blockchain für sichere und unveränderliche Audit-Trails\n• 5G-Technologie für verbesserte Kommunikation in Krisen\n\n☁️ Cloud-native BCM-Ansätze:\n• Multi-Cloud und Hybrid-Cloud Strategien für Resilienz\n• Containerisierung und Microservices für flexible Recovery\n• Infrastructure as Code für schnelle Wiederherstellung\n• Serverless Computing für skalierbare Notfalllösungen\n• DevOps und Site Reliability Engineering Prinzipien\n\n🎯 Praktische Implementierung in Schulungen:\n• Hands-on Workshops mit aktuellen Technologie-Stacks\n• Case Studies erfolgreicher Technologie-Integration\n• Kollaboration mit IT-Abteilungen und Technology Partnern\n• Continuous Learning Programme für technologische Updates\n• Zertifizierungspfade für spezialisierte Technologie-Kompetenzen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielen Soft Skills und Leadership-Kompetenzen in BCM-Schulungen?',
        answer: "Soft Skills und Leadership-Kompetenzen sind fundamentale Erfolgsfaktoren im Business Continuity Management, da Krisen nicht nur technische Herausforderungen darstellen, sondern vor allem menschliche und organisationale Bewährungsproben sind. Effektive BCM-Schulungen müssen diese Dimensionen gleichberechtigt neben technischen Aspekten behandeln.\n\n👥 Krisenführung und Entscheidungsfindung:\n• Entscheidungsfindung unter Unsicherheit und Zeitdruck\n• Delegation und Verantwortungsverteilung in Krisensituationen\n• Situational Leadership und adaptive Führungsstile\n• Ethische Entscheidungsfindung bei konkurrierenden Prioritäten\n• Resilienz-orientierte Führung und Vorbild-Funktion\n\n💬 Kommunikation und Stakeholder-Management:\n• Krisenkommunikation für verschiedene Zielgruppen und Kanäle\n• Empathische Kommunikation mit betroffenen Mitarbeitern und Kunden\n• Medientraining und Public Relations in Krisensituationen\n• Interkulturelle Kommunikation in globalen Organisationen\n• Konfliktmanagement und Deeskalationstechniken\n\n🧠 Psychologische Aspekte und Stressmanagement:\n• Stressresistenz und emotionale Intelligenz in Krisen\n• Umgang mit Angst, Panik und irrationalen Reaktionen\n• Trauma-informierte Ansätze für Mitarbeiterbetreuung\n• Burnout-Prävention bei BCM-Teams und Krisenmanagern\n• Psychologische Erste Hilfe und Peer-Support Programme\n\n🤝 Teamdynamik und Kollaboration:\n• Aufbau und Führung funktionsübergreifender Krisenteams\n• Virtuelle Teamführung bei Remote-Arbeit und Notfallsituationen\n• Vertrauensbildung und psychologische Sicherheit\n• Diversity und Inclusion in Krisenteams\n• Agile Arbeitsweisen und schnelle Anpassungsfähigkeit\n\n🎯 Change Management und Organisationsentwicklung:\n• Kulturwandel hin zu einer resilienz-orientierten Organisation\n• Überwindung von Widerständen gegen BCM-Maßnahmen\n• Kontinuierliche Verbesserung und Lernende Organisation\n• Innovation und Kreativität in Problemlösungsansätzen\n• Nachhaltigkeit und langfristige Organisationsentwicklung\n\n📚 Praktische Entwicklungsansätze:\n• Rollenspiele und Simulationen für Soft Skill Training\n• 360-Grad-Feedback und Peer-Coaching Programme\n• Mentoring und Leadership Development Pfade\n• Cross-funktionale Projekte und Job Rotation\n• Externe Coaching und professionelle Entwicklungsunterstützung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gestalte ich branchenspezifische BCM-Schulungen für regulierte Industrien?',
        answer: "Branchenspezifische BCM-Schulungen für regulierte Industrien erfordern eine tiefgreifende Anpassung an spezifische regulatorische Anforderungen, Compliance-Verpflichtungen und branchentypische Risikoprofile. Diese Spezialisierung ist entscheidend für die praktische Anwendbarkeit und rechtliche Konformität der Schulungsinhalte.\n\n🏦 Finanzdienstleistungen und Banking:\n• Basel III und Säule 2 Anforderungen für operationelle Resilienz\n• DORA Compliance und digitale operationelle Resilienz\n• Systemrelevante Finanzinstitute und Too-Big-to-Fail Regulierung\n• Payment System Continuity und Clearing House Requirements\n• Anti-Money Laundering und Fraud Prevention in Krisensituationen\n\n🏥 Healthcare und Pharmazeutische Industrie:\n• Patient Safety und kontinuierliche Versorgung während Störungen\n• FDA und EMA Compliance für pharmazeutische Produktion\n• HIPAA und Datenschutz bei medizinischen Informationen\n• Supply Chain Integrity für kritische Medikamente\n• Pandemic Preparedness und Public Health Emergency Response\n\n⚡ Kritische Infrastrukturen und Energieversorgung:\n• NIS2 Richtlinie und Cybersecurity für kritische Infrastrukturen\n• NERC CIP Standards für Stromversorgungsunternehmen\n• Pipeline Safety und Hazardous Materials Transportation\n• Nuclear Safety und radiologische Notfallplanung\n• Smart Grid Resilienz und Cyber-Physical Security\n\n✈️ Luftfahrt und Transportation:\n• ICAO Standards und Safety Management Systems\n• FAA und EASA Compliance für Flugbetrieb\n• Maritime Security und Port State Control\n• Railway Safety und intermodaler Transport\n• Supply Chain Security und Cargo Screening\n\n🏭 Manufacturing und Chemische Industrie:\n• Process Safety Management und HAZOP Analysen\n• Environmental Compliance und Emission Control\n• Occupational Health and Safety in Notfallsituationen\n• Product Liability und Recall Management\n• Lean Manufacturing und Just-in-Time Vulnerabilities\n\n📋 Regulatorische Compliance Integration:\n• Mapping von BCM-Prozessen zu spezifischen Regulierungsanforderungen\n• Audit-Vorbereitung und Regulatory Reporting\n• Cross-Border Compliance bei internationalen Operationen\n• Regulatory Change Management und Impact Assessment\n• Stakeholder Engagement mit Aufsichtsbehörden und Regulatoren"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Wie entwickle ich ein nachhaltiges Train-the-Trainer Programm für BCM-Multiplikatoren?',
        answer: "Ein nachhaltiges Train-the-Trainer Programm für BCM-Multiplikatoren ist der Schlüssel zur Skalierung von BCM-Kompetenzen in großen Organisationen. Durch die Entwicklung interner Trainer können Unternehmen kontinuierliche, kosteneffiziente und kulturell angepasste Schulungsprogramme etablieren.\n\n🎓 Trainer-Qualifikation und Auswahlkriterien:\n• Fachliche BCM-Expertise und praktische Erfahrung in der Organisation\n• Pädagogische Fähigkeiten und Motivation zur Wissensvermittlung\n• Kommunikationsstärke und Präsentationsfähigkeiten\n• Glaubwürdigkeit und Respekt innerhalb der Organisation\n• Verfügbarkeit und langfristige Commitment für die Trainer-Rolle\n\n📚 Umfassendes Curriculum-Design:\n• BCM-Fachkompetenz Vertiefung über Standard-Schulungen hinaus\n• Erwachsenenbildung und moderne Lerntheorien\n• Präsentationstechniken und interaktive Schulungsmethoden\n• Umgang mit schwierigen Teilnehmern und Widerständen\n• Assessment und Feedback-Techniken für Lernerfolgsmessung\n\n🛠️ Praktische Trainer-Entwicklung:\n• Co-Training mit erfahrenen externen Trainern\n• Schrittweise Übernahme von Schulungsverantwortung\n• Video-basiertes Feedback und Selbstreflexion\n• Peer-Learning und Erfahrungsaustausch zwischen Trainern\n• Kontinuierliche Weiterbildung und Skill-Updates\n\n📖 Standardisierte Schulungsunterlagen:\n• Modulare Trainingskonzepte mit flexiblen Bausteinen\n• Einheitliche Präsentationen und Handouts\n• Interaktive Übungen und Fallstudien-Bibliothek\n• Assessment-Tools und Bewertungskriterien\n• Digitale Lernplattformen und Ressourcen-Repositories\n\n🔄 Qualitätssicherung und Kontinuität:\n• Regelmäßige Trainer-Meetings und Best-Practice Sharing\n• Standardisierte Evaluierung von Schulungsqualität\n• Refresher-Training und Updates zu neuen BCM-Entwicklungen\n• Mentoring-Programme für neue Trainer\n• Recognition und Incentive-Programme für Trainer-Engagement\n\n🌐 Skalierung und Organisationsweite Implementierung:\n• Train-the-Trainer Kaskadierung für verschiedene Organisationsebenen\n• Lokale Anpassung für verschiedene Standorte und Kulturen\n• Integration in bestehende HR-Entwicklungsprogramme\n• Aufbau einer Community of Practice für BCM-Trainer\n• Langfristige Nachfolgeplanung und Wissenserhaltung"
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
    console.log('✅ FAQ batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
