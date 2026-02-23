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
    console.log('Updating ISO 27001 page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001" not found')
    }
    
    // Create new FAQs for ISO 27001 business continuity and future trends
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie unterstützt ISO 27001 Business Continuity und Disaster Recovery Planning?',
        answer: "ISO 27001 integriert Business Continuity und Disaster Recovery als wesentliche Komponenten eines umfassenden Informationssicherheitsmanagementsystems. Der Standard erkennt, dass Informationssicherheit nicht nur den Schutz vor Bedrohungen umfasst, sondern auch die Gewährleistung der Geschäftskontinuität bei Störungen und Notfällen.\n\n🔄 Integration von Business Continuity in das ISMS:\n• Business Continuity Management wird als integraler Bestandteil der Informationssicherheitsstrategie behandelt\n• Systematische Identifikation kritischer Geschäftsprozesse und deren Abhängigkeiten von Informationssystemen\n• Entwicklung von Kontinuitätsplänen, die sowohl technische als auch organisatorische Aspekte berücksichtigen\n• Regelmäßige Business Impact Analysen zur Bewertung der Auswirkungen von Systemausfällen\n• Koordination zwischen Informationssicherheit und Business Continuity Teams für ganzheitliche Resilienz\n\n🛡️ Disaster Recovery als Sicherheitskontrolle:\n• Implementierung robuster Backup und Recovery Verfahren als Teil der Kontrollmaßnahmen\n• Entwicklung detaillierter Disaster Recovery Pläne für verschiedene Ausfallszenarien\n• Etablierung alternativer Verarbeitungsstandorte und redundanter Systeme\n• Definition von Recovery Time Objectives und Recovery Point Objectives für kritische Systeme\n• Regelmäßige Tests und Übungen zur Validierung der Disaster Recovery Fähigkeiten\n\n📊 Risikobasierte Kontinuitätsplanung:\n• Integration von Business Continuity Risiken in die allgemeine Risikoanalyse des ISMS\n• Bewertung von Bedrohungen wie Naturkatastrophen, Cyberangriffen und technischen Ausfällen\n• Entwicklung von Szenarien für verschiedene Störungsarten und deren Auswirkungen\n• Priorisierung von Kontinuitätsmaßnahmen basierend auf Geschäftskritikalität\n• Kontinuierliche Anpassung der Pläne an veränderte Bedrohungslandschaften\n\n🔧 Operative Umsetzung und Testing:\n• Etablierung von Incident Response Teams mit klaren Rollen und Verantwortlichkeiten\n• Entwicklung von Kommunikationsplänen für Krisensituationen\n• Regelmäßige Durchführung von Disaster Recovery Tests und Business Continuity Übungen\n• Dokumentation von Lessons Learned und kontinuierliche Verbesserung der Pläne\n• Integration mit externen Dienstleistern und Lieferanten für umfassende Kontinuität\n\n🎯 Compliance und Governance:\n• Erfüllung regulatorischer Anforderungen für Business Continuity in verschiedenen Branchen\n• Integration mit anderen Standards wie ISO 22301 für Business Continuity Management\n• Berichterstattung an das Management über Kontinuitätsbereitschaft und Testresultate\n• Aufbau einer Kultur der Resilienz und Vorbereitung in der gesamten Organisation\n• Kontinuierliche Überwachung und Messung der Kontinuitätsfähigkeiten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Trends und zukünftigen Entwicklungen beeinflussen ISO 27001 und wie sollten sich Organisationen darauf vorbereiten?',
        answer: "Die Informationssicherheitslandschaft entwickelt sich rasant weiter, und ISO 27001 muss sich kontinuierlich an neue Bedrohungen, Technologien und regulatorische Anforderungen anpassen. Organisationen sollten proaktiv auf diese Trends reagieren, um ihre ISMS zukunftsfähig zu gestalten und Wettbewerbsvorteile zu sichern.\n\n🤖 Künstliche Intelligenz und Machine Learning:\n• Integration von KI-basierten Sicherheitslösungen für erweiterte Bedrohungserkennung\n• Entwicklung neuer Kontrollmaßnahmen für KI-Systeme und algorithmische Entscheidungsfindung\n• Berücksichtigung von KI-spezifischen Risiken wie Bias, Manipulation und Datenschutz\n• Automatisierung von ISMS-Prozessen durch intelligente Systeme\n• Schulung von Mitarbeitern im Umgang mit KI-gestützten Sicherheitstools\n\n☁️ Cloud-native Sicherheit und Zero Trust:\n• Anpassung der ISMS-Architektur an Cloud-first und Multi-Cloud-Strategien\n• Implementierung von Zero Trust Prinzipien als neue Sicherheitsparadigma\n• Entwicklung cloud-spezifischer Kontrollmaßnahmen und Governance-Modelle\n• Integration von DevSecOps-Praktiken in die ISMS-Prozesse\n• Berücksichtigung von Container-Sicherheit und Microservices-Architekturen\n\n🔐 Quantum Computing und Post-Quantum Kryptografie:\n• Vorbereitung auf die Bedrohung durch Quantum Computing für aktuelle Verschlüsselungsverfahren\n• Migration zu quantum-resistenten Kryptografie-Algorithmen\n• Entwicklung von Crypto-Agility für flexible Anpassung an neue Standards\n• Bewertung der Auswirkungen auf bestehende PKI-Infrastrukturen\n• Langfristige Planung für den Übergang zu Post-Quantum-Sicherheit\n\n🌐 Erweiterte Compliance-Landschaft:\n• Integration neuer Regulierungen wie EU Cyber Resilience Act und AI Act\n• Harmonisierung mit ESG-Anforderungen und Nachhaltigkeitsberichterstattung\n• Berücksichtigung von Supply Chain Transparency und Lieferkettengesetzen\n• Anpassung an branchenspezifische Cybersecurity-Frameworks\n• Vorbereitung auf internationale Cybersecurity-Standards und -abkommen\n\n🔄 Kontinuierliche Anpassung und Innovation:\n• Etablierung agiler ISMS-Prozesse für schnelle Anpassung an neue Bedrohungen\n• Implementierung von Threat Intelligence und proaktiver Bedrohungsanalyse\n• Aufbau von Cyber Resilience Capabilities für erweiterte Widerstandsfähigkeit\n• Integration von Behavioral Analytics und User Experience Security\n• Entwicklung von Security by Design Prinzipien für alle Geschäftsprozesse\n\n🚀 Strategische Vorbereitung:\n• Aufbau einer lernenden Organisation mit kontinuierlicher Kompetenzentwicklung\n• Investition in moderne Sicherheitstechnologien und -plattformen\n• Entwicklung strategischer Partnerschaften mit Technologie- und Beratungsunternehmen\n• Etablierung von Innovation Labs für Sicherheitstechnologien\n• Regelmäßige Überprüfung und Aktualisierung der ISMS-Strategie"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie kann ISO 27001 in agilen und DevOps-Umgebungen erfolgreich implementiert werden?',
        answer: "Die Integration von ISO 27001 in agile und DevOps-Umgebungen erfordert einen modernen, flexiblen Ansatz, der Sicherheit als integralen Bestandteil des Entwicklungsprozesses behandelt. Statt traditioneller, dokumentenlastiger Methoden müssen ISMS-Prozesse agil, automatisiert und entwicklerfreundlich gestaltet werden.\n\n🔄 Agile ISMS-Prinzipien:\n• Implementierung von Security by Design in allen Entwicklungsphasen\n• Kontinuierliche Sicherheitsbewertung durch iterative Risikomanagement-Zyklen\n• Flexible Dokumentation, die sich an agile Arbeitsweisen anpasst\n• Cross-funktionale Teams mit integrierten Sicherheitsverantwortlichkeiten\n• Kurze Feedback-Zyklen für schnelle Anpassung an neue Sicherheitsanforderungen\n\n🛠️ DevSecOps Integration:\n• Automatisierung von Sicherheitskontrollen in CI/CD-Pipelines\n• Integration von Security Testing in automatisierte Testprozesse\n• Implementierung von Infrastructure as Code mit eingebauten Sicherheitsrichtlinien\n• Kontinuierliche Vulnerability Assessments und Penetration Testing\n• Automated Compliance Monitoring für Echtzeit-Überwachung der ISMS-Konformität\n\n📊 Moderne Risikomanagement-Ansätze:\n• Threat Modeling als integraler Bestandteil des Design-Prozesses\n• Kontinuierliche Risikobewertung durch automatisierte Tools und Metriken\n• Agile Risk Assessments mit kurzen Bewertungszyklen\n• Integration von Threat Intelligence in Entwicklungsentscheidungen\n• Dynamische Anpassung von Kontrollmaßnahmen basierend auf aktuellen Bedrohungen\n\n🔧 Technische Implementierung:\n• Container-Sicherheit und Kubernetes-spezifische Kontrollmaßnahmen\n• API-Sicherheit und Microservices-Governance\n• Cloud-native Sicherheitsarchitekturen mit Zero Trust Prinzipien\n• Automated Security Orchestration und Response Capabilities\n• Integration von Security Information and Event Management in DevOps-Tools\n\n📚 Agile Dokumentation und Compliance:\n• Living Documentation, die sich automatisch mit Code-Änderungen aktualisiert\n• Compliance as Code für automatisierte Regelkonformität\n• Kontinuierliche Audit-Bereitschaft durch automatisierte Evidenz-Sammlung\n• Lean Documentation mit Fokus auf wesentliche Sicherheitsinformationen\n• Integration von Compliance-Checks in Pull Request Workflows\n\n🎯 Kultureller Wandel und Schulungen:\n• Security Champions Programme für Entwicklerteams\n• Kontinuierliche Sicherheitsschulungen in agilen Formaten\n• Gamification von Sicherheitspraktiken für erhöhtes Engagement\n• Blameless Post-Mortem Kultur für Sicherheitsvorfälle\n• Integration von Sicherheitszielen in agile Retrospektiven und Sprint-Planungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Metriken und KPIs sind entscheidend für die Messung der ISO 27001 ISMS-Effektivität?',
        answer: "Die Messung der ISMS-Effektivität ist entscheidend für kontinuierliche Verbesserung und Nachweis des Geschäftswerts von Informationssicherheitsinvestitionen. Effektive Metriken sollten sowohl technische Sicherheitsaspekte als auch Geschäftsauswirkungen erfassen und actionable Insights für das Management liefern.\n\n📊 Strategische Sicherheitsmetriken:\n• Mean Time to Detection von Sicherheitsvorfällen als Indikator für Monitoring-Effektivität\n• Mean Time to Response und Recovery für Incident Response Capabilities\n• Anzahl und Schweregrad von Sicherheitsvorfällen mit Trendanalyse\n• Compliance Rate für implementierte Kontrollmaßnahmen\n• Risk Reduction Metrics zur Bewertung der Risikomanagement-Effektivität\n\n💼 Geschäftsorientierte KPIs:\n• Return on Security Investment zur Bewertung der Wirtschaftlichkeit\n• Ausfallzeiten und Verfügbarkeit kritischer Systeme\n• Kosten von Sicherheitsvorfällen und vermiedene Schäden\n• Customer Trust Metrics und Reputationsindikator\n• Compliance-Kosten und Effizienzsteigerungen durch Automatisierung\n\n🎯 Operative Leistungsindikatoren:\n• Patch Management Effectiveness mit Time-to-Patch Metriken\n• Vulnerability Management Metrics einschließlich Remediation-Zeiten\n• Security Awareness Training Completion Rates und Wissenstests\n• Phishing Simulation Erfolgsraten und Verbesserungstrends\n• Access Management Metrics wie Privileged Account Reviews\n\n🔄 Kontinuierliche Verbesserungsmetriken:\n• Audit Finding Trends und Closure Rates\n• Management Review Action Item Completion\n• ISMS Process Maturity Assessments\n• Employee Security Behavior Metrics\n• Third-party Risk Assessment Coverage und Ergebnisse\n\n📈 Technische Sicherheitsmetriken:\n• Network Security Metrics wie Firewall Block Rates\n• Endpoint Security Coverage und Malware Detection Rates\n• Data Loss Prevention Effectiveness\n• Encryption Coverage für Daten in Ruhe und Übertragung\n• Identity and Access Management Metrics\n\n🎨 Dashboard und Reporting:\n• Executive Dashboards mit High-Level-Sicherheitsstatus\n• Operational Dashboards für tägliche Sicherheitsoperationen\n• Trend-Analysen für langfristige Sicherheitsentwicklung\n• Benchmark-Vergleiche mit Industriestandards\n• Automated Reporting für regulatorische Anforderungen\n\n💡 Best Practices für Metriken-Management:\n• Regelmäßige Überprüfung und Anpassung der Metriken an Geschäftsziele\n• Balance zwischen Leading und Lagging Indicators\n• Integration von Metriken in Geschäftsprozesse und Entscheidungsfindung\n• Automatisierung der Datensammlung für Konsistenz und Effizienz\n• Storytelling mit Daten für effektive Kommunikation an Stakeholder"
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
    console.log('✅ FAQ batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
