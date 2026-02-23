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
    console.log('Updating ISO 27001 Risikoanalyse page with FAQ batch 5...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-risikoanalyse' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-risikoanalyse" not found')
    }
    
    // Create new FAQs for future trends and expert insights
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 17),
        question: 'Welche zukünftigen Trends werden die ISO 27001 Risikoanalyse in den nächsten Jahren prägen?',
        answer: "Die ISO 27001 Risikoanalyse steht vor bedeutenden Veränderungen durch technologische Innovationen, sich wandelnde Bedrohungslandschaften und neue regulatorische Anforderungen. Diese Trends erfordern eine proaktive Anpassung der Risikomanagement-Strategien und -Methoden.\n\n🤖 Automatisierung und KI-Integration:\n• Einsatz von Machine Learning für automatisierte Bedrohungserkennung und Risikobewertung\n• KI-gestützte Vulnerability Assessment und Penetration Testing Tools\n• Automatisierte Compliance-Überwachung und Reporting-Generierung\n• Predictive Analytics für proaktive Risikomanagement-Entscheidungen\n• Natural Language Processing für automatisierte Policy-Analyse und Gap-Identifikation\n\n🌐 Quantum Computing und Post-Quantum Kryptographie:\n• Vorbereitung auf Quantum-Threats gegen aktuelle Verschlüsselungsstandards\n• Migration zu Quantum-resistenten Kryptographie-Algorithmen\n• Bewertung von Quantum Key Distribution und Quantum-Safe Kommunikation\n• Integration von Quantum Risk Assessment in traditionelle Risikoanalyse\n• Entwicklung von Quantum-Readiness-Frameworks für Organisationen\n\n🔗 Zero Trust Architecture und Identity-Centric Security:\n• Übergang von perimeter-basierten zu identity-zentrierten Sicherheitsmodellen\n• Continuous Authentication und Adaptive Access Control\n• Micro-Segmentation und Least Privilege Access Prinzipien\n• Integration von Behavioral Analytics und User Entity Behavior Analytics\n• Device Trust und Endpoint Detection and Response Integration\n\n🌍 Sustainability und Green IT Security:\n• Integration von Environmental, Social und Governance Faktoren in Risikobewertungen\n• Bewertung von Climate Change Impacts auf IT-Infrastrukturen\n• Energy-Efficient Security Solutions und Carbon Footprint Considerations\n• Sustainable Supply Chain Security und Circular Economy Principles\n• Green Compliance und Environmental Risk Management\n\n📱 Extended Reality und Metaverse Security:\n• Risikobewertung für Virtual und Augmented Reality Umgebungen\n• Privacy und Security in immersiven digitalen Welten\n• Avatar Identity Management und Digital Twin Security\n• Cross-Reality Data Protection und Interoperability Challenges\n• Regulatory Frameworks für Extended Reality Environments"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 18),
        question: 'Wie können kleine und mittlere Unternehmen eine effektive ISO 27001 Risikoanalyse mit begrenzten Ressourcen durchführen?',
        answer: "Kleine und mittlere Unternehmen stehen vor der Herausforderung, eine umfassende ISO 27001 Risikoanalyse mit begrenzten personellen und finanziellen Ressourcen durchzuführen. Durch strategische Ansätze und effiziente Methoden können auch KMUs eine wirksame Risikoanalyse implementieren.\n\n💡 Pragmatische Ansätze und Priorisierung:\n• Fokussierung auf kritische Assets und Geschäftsprozesse statt vollständiger Abdeckung\n• Verwendung von Risk-Based Approaches zur Priorisierung von Sicherheitsmaßnahmen\n• Adoption von Standardized Risk Assessment Templates und Frameworks\n• Konzentration auf High-Impact, Low-Cost Sicherheitskontrollen\n• Iterative Implementierung mit schrittweiser Erweiterung des ISMS-Scope\n\n🤝 Externe Unterstützung und Partnerschaften:\n• Nutzung von spezialisierten Beratungsdienstleistungen für initiale Risikoanalyse\n• Teilnahme an Brancheninitiativen und Peer-Learning-Gruppen\n• Kooperation mit anderen KMUs für gemeinsame Security Services\n• Nutzung von Managed Security Service Providern für kontinuierliche Überwachung\n• Engagement von Freelance-Experten für spezifische Projekte\n\n🛠️ Kosteneffiziente Tools und Technologien:\n• Einsatz von Open Source Security Tools und Frameworks\n• Cloud-basierte Security-as-a-Service Lösungen\n• Automatisierte Vulnerability Scanning und Compliance-Monitoring Tools\n• Integration bestehender IT-Management-Tools für Sicherheitszwecke\n• Nutzung von kostenlosen oder günstigen Online-Schulungsressourcen\n\n📚 Wissensaufbau und Kompetenzentwicklung:\n• Investition in Schulungen für interne Mitarbeiter zu Risikomanagement\n• Nutzung von Online-Zertifizierungsprogrammen und Webinaren\n• Aufbau interner Security Champions und Multiplikatoren\n• Teilnahme an kostenlosen Branchenveranstaltungen und Workshops\n• Entwicklung einer Lernkultur für kontinuierliche Sicherheitsverbesserung\n\n🎯 Skalierbare Implementierungsstrategien:\n• Start mit Minimum Viable Security Program und schrittweise Erweiterung\n• Verwendung von Maturity Models zur strukturierten Entwicklung\n• Integration von Sicherheit in bestehende Geschäftsprozesse\n• Aufbau auf bestehenden Compliance-Anforderungen und Standards\n• Entwicklung von Business Cases für Security-Investitionen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 19),
        question: 'Welche Rolle spielt die Organisationskultur bei der erfolgreichen Implementierung einer ISO 27001 Risikoanalyse?',
        answer: "Die Organisationskultur ist ein entscheidender Erfolgsfaktor für die Implementierung und nachhaltige Wirksamkeit einer ISO 27001 Risikoanalyse. Eine sicherheitsbewusste Kultur schafft die Grundlage für effektives Risikomanagement und gewährleistet die aktive Beteiligung aller Mitarbeiter.\n\n🎯 Führung und Management-Commitment:\n• Sichtbare Unterstützung und Vorbildfunktion der Geschäftsführung\n• Integration von Sicherheitszielen in Unternehmensstrategie und -vision\n• Bereitstellung angemessener Ressourcen für Risikomanagement-Aktivitäten\n• Regelmäßige Kommunikation der Bedeutung von Informationssicherheit\n• Etablierung von Sicherheit als Kernwert der Organisation\n\n👥 Mitarbeiterengagement und Awareness:\n• Entwicklung umfassender Security Awareness Programme\n• Einbindung aller Mitarbeiter in Risikobewertungsprozesse\n• Schaffung von Anreizsystemen für sicherheitsbewusstes Verhalten\n• Etablierung offener Kommunikationskanäle für Sicherheitsbedenken\n• Förderung einer Fehlerkultur, die Lernen aus Sicherheitsvorfällen ermöglicht\n\n🔄 Kontinuierliche Verbesserung und Lernkultur:\n• Etablierung von Feedback-Mechanismen für Risikomanagement-Prozesse\n• Regelmäßige Schulungen und Kompetenzentwicklung\n• Förderung von Innovation und kreativen Lösungsansätzen\n• Integration von Lessons Learned aus Sicherheitsvorfällen\n• Aufbau einer Community of Practice für Informationssicherheit\n\n🤝 Kollaboration und Cross-funktionale Zusammenarbeit:\n• Aufbau von Security Champions in verschiedenen Abteilungen\n• Etablierung interdisziplinärer Risikomanagement-Teams\n• Förderung von Wissensaustausch zwischen verschiedenen Bereichen\n• Integration von Sicherheit in alle Geschäftsprozesse\n• Entwicklung gemeinsamer Verantwortung für Informationssicherheit\n\n📊 Messung und Anerkennung kultureller Veränderungen:\n• Entwicklung von Metriken für Sicherheitskultur und -bewusstsein\n• Regelmäßige Umfragen zur Bewertung der Sicherheitskultur\n• Anerkennung und Belohnung sicherheitsbewussten Verhaltens\n• Integration von Sicherheitszielen in Mitarbeiterbeurteilungen\n• Kommunikation von Erfolgsgeschichten und Best Practices"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 20),
        question: 'Wie wird die ISO 27001 Risikoanalyse an die Anforderungen der digitalen Transformation angepasst?',
        answer: "Die digitale Transformation verändert fundamental die Art, wie Organisationen arbeiten, und erfordert eine entsprechende Anpassung der ISO 27001 Risikoanalyse. Neue Technologien, Arbeitsmodelle und Geschäftsprozesse bringen neuartige Risiken mit sich, die traditionelle Ansätze herausfordern.\n\n🌐 Cloud-First und Hybrid-Arbeitsmodelle:\n• Bewertung von Remote Work Security Risks und Home Office Vulnerabilities\n• Integration von Cloud Security Posture Management in die Risikoanalyse\n• Berücksichtigung von Shadow IT und unkontrollierter Cloud-Nutzung\n• Assessment von Collaboration Tools und deren Sicherheitsimplikationen\n• Evaluation von Bring Your Own Device Policies und Mobile Device Management\n\n🔄 Agile und DevOps Integration:\n• Integration von Security in Continuous Integration/Continuous Deployment Pipelines\n• Shift-Left Security Approaches und Security by Design Prinzipien\n• Bewertung von Container Security und Microservices Architectures\n• Assessment von Infrastructure as Code und Configuration Management\n• Integration von Automated Security Testing und Vulnerability Management\n\n📊 Data-Driven Decision Making:\n• Nutzung von Big Data Analytics für erweiterte Risikobewertung\n• Integration von Real-Time Monitoring und Threat Intelligence\n• Bewertung von Data Lakes und Advanced Analytics Platforms\n• Assessment von Machine Learning Model Security und Data Privacy\n• Evaluation von Data Governance in komplexen Datenlandschaften\n\n🤖 Automation und Orchestration:\n• Bewertung von Robotic Process Automation Security Risks\n• Integration von Security Orchestration, Automation and Response\n• Assessment von AI-Powered Security Tools und deren Limitationen\n• Evaluation von Automated Incident Response und Remediation\n• Berücksichtigung von Human-Machine Interaction Risks\n\n🔗 Ecosystem und Platform Security:\n• Bewertung von API Security und Microservices Communication\n• Assessment von Third-Party Integrations und Vendor Ecosystems\n• Evaluation von Platform-as-a-Service und Low-Code/No-Code Environments\n• Integration von Supply Chain Security in digitale Ökosysteme\n• Berücksichtigung von Digital Identity und Access Management Complexity"
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
    console.log('✅ FAQ batch 5 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
