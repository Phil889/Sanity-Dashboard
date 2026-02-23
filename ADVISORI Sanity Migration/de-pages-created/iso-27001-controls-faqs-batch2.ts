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
    console.log('Updating ISO 27001 Controls page with FAQ batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iso-27001-controls' })
    
    if (!existingDoc) {
      throw new Error('Document "iso-27001-controls" not found')
    }
    
    // Create new FAQs for ISO 27001 Controls implementation
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie werden physische und personelle Controls effektiv implementiert und überwacht?',
        answer: "Physische und personelle Controls bilden die Grundlage für eine ganzheitliche Sicherheitsarchitektur und erfordern eine durchdachte Implementierungsstrategie, die sowohl technische Maßnahmen als auch menschliche Faktoren berücksichtigt. Diese Controls sind oft die erste Verteidigungslinie gegen Bedrohungen und müssen daher besonders sorgfältig geplant und umgesetzt werden.\n\n🏢 Physische Sicherheitskontrollen:\n• Implementierung von mehrstufigen Zugangskontrollen mit Kartensystemen, biometrischen Verfahren und Besuchermanagement\n• Etablierung von Sicherheitszonen mit unterschiedlichen Schutzlevels entsprechend der Kritikalität der Assets\n• Überwachungssysteme mit Videoaufzeichnung, Bewegungsmeldern und Alarmanlagen\n• Umgebungsschutz gegen Feuer, Wasser, Stromausfall und andere physische Bedrohungen\n• Sichere Entsorgung von Datenträgern und vertraulichen Dokumenten\n\n👥 Personelle Sicherheitsmaßnahmen:\n• Systematische Hintergrundprüfungen und Screening-Verfahren für neue Mitarbeiter\n• Entwicklung und Durchführung umfassender Awareness-Programme für alle Organisationsebenen\n• Regelmäßige Sicherheitsschulungen mit praktischen Übungen und Phishing-Simulationen\n• Klare Arbeitsverträge mit Sicherheitsklauseln und Vertraulichkeitsvereinbarungen\n• Strukturierte Onboarding und Offboarding Prozesse mit Sicherheitsfokus\n\n📊 Überwachung und Messung:\n• Entwicklung von KPIs für physische Sicherheit wie Anzahl der Sicherheitsvorfälle und Zugangsversuche\n• Regelmäßige Audits der physischen Sicherheitsmaßnahmen und Zugangskontrollen\n• Monitoring der Mitarbeiter-Compliance durch Schulungsteilnahme und Awareness-Tests\n• Incident Tracking und Analyse von Sicherheitsverletzungen\n• Kontinuierliche Verbesserung basierend auf Lessons Learned und Best Practices\n\n🔄 Integration und Automatisierung:\n• Verknüpfung physischer Zugangskontrollen mit IT-Systemen für einheitliche Berechtigungsverwaltung\n• Automatisierte Benachrichtigungen bei Sicherheitsereignissen und Anomalien\n• Integration von Besuchermanagement-Systemen mit Sicherheitsrichtlinien\n• Digitale Schulungsplattformen für effiziente Mitarbeiterausbildung\n• Mobile Lösungen für Sicherheitsmeldungen und Incident Response\n\n🎯 Kulturelle Verankerung:\n• Entwicklung einer starken Sicherheitskultur durch Führungsvorbilder und regelmäßige Kommunikation\n• Belohnungssysteme für sicherheitsbewusstes Verhalten und proaktive Meldungen\n• Integration von Sicherheitszielen in Mitarbeiterbeurteilungen und Zielvereinbarungen\n• Regelmäßige Kommunikation von Sicherheitserfolgen und Herausforderungen\n• Aufbau von Sicherheitsbotschaftern in verschiedenen Abteilungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Herausforderungen entstehen bei der Integration von ISO 27001 Controls in Cloud-Umgebungen?',
        answer: "Die Integration von ISO 27001 Controls in Cloud-Umgebungen bringt einzigartige Herausforderungen mit sich, die eine Anpassung traditioneller Sicherheitsansätze erfordern. Cloud-Computing verändert die Verantwortlichkeiten, Kontrollmechanismen und Überwachungsmöglichkeiten grundlegend und erfordert neue Strategien für die Implementierung und Überwachung von Sicherheitskontrollen.\n\n☁️ Shared Responsibility Model:\n• Klare Definition der Verantwortlichkeiten zwischen Cloud-Provider und Kunde für verschiedene Sicherheitsaspekte\n• Verständnis der unterschiedlichen Verantwortungsmodelle für IaaS, PaaS und SaaS\n• Dokumentation der Kontrollverteilung in der Statement of Applicability\n• Regelmäßige Überprüfung und Anpassung der Verantwortlichkeiten bei Service-Änderungen\n• Etablierung klarer Eskalationswege und Kommunikationskanäle mit Cloud-Providern\n\n🔍 Visibility und Monitoring Herausforderungen:\n• Eingeschränkte Sichtbarkeit in die Infrastruktur und Sicherheitsmaßnahmen des Cloud-Providers\n• Implementierung von Cloud Security Posture Management Tools für kontinuierliche Überwachung\n• Entwicklung von Cloud-spezifischen Logging und Monitoring Strategien\n• Integration von Cloud-Logs in bestehende SIEM-Systeme\n• Etablierung von Cloud-nativen Sicherheitskontrollen und Alerting-Mechanismen\n\n🌐 Multi-Cloud und Hybrid-Komplexität:\n• Konsistente Implementierung von Sicherheitskontrollen über verschiedene Cloud-Plattformen hinweg\n• Herausforderungen bei der einheitlichen Identitäts und Zugriffsverwaltung\n• Komplexe Netzwerksegmentierung und Firewall-Konfigurationen\n• Datenklassifizierung und Schutz bei der Migration zwischen verschiedenen Umgebungen\n• Orchestrierung von Sicherheitsrichtlinien über hybride Infrastrukturen\n\n📋 Compliance und Audit-Herausforderungen:\n• Nachweis der Kontrollwirksamkeit ohne direkten Zugang zur Provider-Infrastruktur\n• Abhängigkeit von Provider-Zertifizierungen und Compliance-Berichten\n• Herausforderungen bei der Durchführung von Penetrationstests in Cloud-Umgebungen\n• Dokumentation von Cloud-spezifischen Kontrollimplementierungen\n• Regelmäßige Bewertung der Provider-Compliance und Sicherheitsstandards\n\n🔐 Datenresidenz und Souveränität:\n• Kontrolle über Datenstandorte und grenzüberschreitende Datenübertragungen\n• Compliance mit lokalen Datenschutzgesetzen und regulatorischen Anforderungen\n• Verschlüsselung und Schlüsselmanagement in Cloud-Umgebungen\n• Sichere Datenvernichtung und Right-to-be-forgotten Implementierung\n• Backup und Disaster Recovery in verschiedenen geografischen Regionen\n\n🚀 DevSecOps und Automatisierung:\n• Integration von Sicherheitskontrollen in CI/CD-Pipelines\n• Infrastructure as Code Ansätze für konsistente Sicherheitskonfigurationen\n• Automatisierte Compliance-Checks und Policy-Enforcement\n• Container-Sicherheit und Kubernetes-spezifische Kontrollen\n• Kontinuierliche Sicherheitstests und Vulnerability Management"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie wird die Wirksamkeit von ISO 27001 Controls gemessen und kontinuierlich verbessert?',
        answer: "Die Messung und kontinuierliche Verbesserung der Kontrollwirksamkeit ist ein zentraler Aspekt des ISO 27001 Standards und erfordert einen systematischen Ansatz mit klaren Metriken, regelmäßigen Bewertungen und strukturierten Verbesserungsprozessen. Nur durch kontinuierliche Überwachung und Anpassung können Controls ihre Schutzwirkung langfristig aufrechterhalten.\n\n📊 Entwicklung von Wirksamkeitsmetriken:\n• Definition spezifischer, messbarer KPIs für jede implementierte Kontrolle\n• Etablierung von Baseline-Messungen für Vergleichszwecke und Trendanalysen\n• Entwicklung von Leading und Lagging Indicators für proaktive und reaktive Messungen\n• Berücksichtigung quantitativer und qualitativer Bewertungskriterien\n• Regelmäßige Überprüfung und Anpassung der Metriken an veränderte Bedrohungslandschaften\n\n🔍 Systematische Bewertungsmethoden:\n• Regelmäßige interne Audits mit strukturierten Checklisten und Bewertungskriterien\n• Penetrationstests und Vulnerability Assessments für technische Kontrollen\n• Tabletop-Übungen und Simulationen für Incident Response und Business Continuity\n• Mitarbeiterbefragungen und Awareness-Tests für personelle Kontrollen\n• Externe Audits und Zertifizierungsverfahren für unabhängige Bewertungen\n\n📈 Kontinuierliches Monitoring:\n• Implementierung von Real-time Monitoring für kritische Sicherheitskontrollen\n• Automatisierte Alerting-Systeme für Abweichungen von definierten Schwellenwerten\n• Dashboard-basierte Visualisierung von Sicherheitsmetriken für das Management\n• Regelmäßige Reporting-Zyklen mit Trend-Analysen und Handlungsempfehlungen\n• Integration von Threat Intelligence für kontextuelle Bewertungen\n\n🔄 Verbesserungsprozesse:\n• Strukturierte Root Cause Analysen bei Kontrollversagen oder Sicherheitsvorfällen\n• Implementierung von Corrective und Preventive Action Programmen\n• Regelmäßige Management Reviews mit Entscheidungen zu Kontrollverbesserungen\n• Benchmarking mit Branchenstandards und Best Practices\n• Integration von Lessons Learned aus internen und externen Sicherheitsvorfällen\n\n🎯 Risikobasierte Priorisierung:\n• Fokussierung der Verbesserungsmaßnahmen auf Controls mit dem höchsten Risikoreduktionspotenzial\n• Berücksichtigung von Kosten-Nutzen-Verhältnissen bei Kontrollverbesserungen\n• Anpassung der Kontrollintensität an veränderte Bedrohungslandschaften\n• Regelmäßige Neubewertung der Kontrollrelevanz basierend auf aktuellen Risikobewertungen\n• Priorisierung basierend auf Compliance-Anforderungen und Geschäftskritikalität\n\n📋 Dokumentation und Nachverfolgung:\n• Systematische Dokumentation aller Bewertungsergebnisse und Verbesserungsmaßnahmen\n• Tracking von Verbesserungsprojekten mit klaren Meilensteinen und Verantwortlichkeiten\n• Historische Analyse von Kontrollentwicklungen und Wirksamkeitstrends\n• Regelmäßige Updates der Statement of Applicability basierend auf Bewertungsergebnissen\n• Kommunikation von Verbesserungserfolgen an alle relevanten Stakeholder"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Rolle spielen automatisierte Tools und Technologien bei der Implementierung von ISO 27001 Controls?',
        answer: "Automatisierte Tools und Technologien spielen eine zunehmend wichtige Rolle bei der effizienten und effektiven Implementierung von ISO 27001 Controls. Sie ermöglichen nicht nur eine konsistente Umsetzung von Sicherheitsmaßnahmen, sondern auch eine kontinuierliche Überwachung und schnelle Reaktion auf Sicherheitsereignisse in komplexen IT-Landschaften.\n\n🤖 Automatisierung von Kontrollimplementierung:\n• Infrastructure as Code für konsistente und wiederholbare Sicherheitskonfigurationen\n• Automatisierte Deployment-Pipelines mit integrierten Sicherheitschecks und Compliance-Validierung\n• Policy as Code Ansätze für die automatische Durchsetzung von Sicherheitsrichtlinien\n• Konfigurationsmanagement-Tools für die einheitliche Härtung von Systemen\n• Automatisierte Patch-Management-Systeme mit risikobasierter Priorisierung\n\n📊 GRC-Plattformen und Compliance-Management:\n• Integrierte Governance, Risk und Compliance Plattformen für zentrale Kontrollverwaltung\n• Automatisierte Risikobewertungen und Kontroll-Mapping-Funktionen\n• Workflow-basierte Approval-Prozesse für Kontrollimplementierungen\n• Automatisierte Compliance-Reporting und Dashboard-Generierung\n• Integration mit Audit-Management-Systemen für effiziente Prüfungsprozesse\n\n🔍 Kontinuierliche Überwachung und Monitoring:\n• SIEM-Systeme für Real-time Monitoring und Korrelation von Sicherheitsereignissen\n• SOAR-Plattformen für automatisierte Incident Response und Orchestrierung\n• Vulnerability Management Tools für kontinuierliche Schwachstellenidentifikation\n• Configuration Monitoring für die Überwachung von Sicherheitsbaselines\n• User and Entity Behavior Analytics für die Erkennung anomaler Aktivitäten\n\n🛡️ Identity und Access Management Automatisierung:\n• Automatisierte Benutzerprovisioning und Deprovisioning basierend auf HR-Systemen\n• Rollenbasierte Zugriffskontrolle mit automatischer Rechtevergabe\n• Privileged Access Management mit Just-in-Time-Zugriff und Session-Monitoring\n• Automatisierte Access Reviews und Zertifizierungsprozesse\n• Single Sign-On und Multi-Faktor-Authentifizierung für verbesserte Benutzerfreundlichkeit\n\n☁️ Cloud Security Automation:\n• Cloud Security Posture Management für automatisierte Compliance-Checks\n• Container-Sicherheit mit automatisierten Vulnerability-Scans und Policy-Enforcement\n• API-Gateway-Lösungen für automatisierte Authentifizierung und Autorisierung\n• Serverless Security mit automatisierten Function-Level-Kontrollen\n• Multi-Cloud-Management-Plattformen für einheitliche Sicherheitsrichtlinien\n\n📈 Analytics und Machine Learning:\n• Predictive Analytics für die Vorhersage von Sicherheitsrisiken und Kontrollversagen\n• Machine Learning basierte Anomalieerkennung für erweiterte Bedrohungserkennung\n• Automatisierte Threat Intelligence Integration für kontextuelle Risikobewertungen\n• Behavioral Analytics für die Identifikation von Insider-Bedrohungen\n• Automated Incident Classification und Prioritization basierend auf historischen Daten"
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
