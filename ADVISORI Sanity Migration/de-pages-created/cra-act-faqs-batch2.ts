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
    console.log('Updating CRA Act page with FAQs batch 2...')
    
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
        _key: generateKey('faq', 5),
        question: 'Wie implementieren wir Security-by-Design Prinzipien effektiv in unsere bestehenden Entwicklungsprozesse und welche technischen Frameworks sind dabei am wirksamsten?',
        answer: "Die effektive Implementierung von Security-by-Design Prinzipien erfordert eine fundamentale Neuausrichtung der Entwicklungsprozesse, bei der Cybersicherheit nicht nachträglich hinzugefügt, sondern von Beginn an in die Architektur und den Entwicklungslebenszyklus integriert wird. Dies bedeutet eine Transformation von reaktiven zu proaktiven Sicherheitsansätzen, die sowohl technische als auch kulturelle Veränderungen umfasst.\n\n🏗️ Architektonische Security-by-Design Integration:\n• Implementierung von Threat Modeling als integraler Bestandteil der Designphase, wobei potenzielle Angriffsvektoren systematisch identifiziert und Gegenmaßnahmen bereits in der Architektur verankert werden.\n• Adoption von Zero Trust Architekturen, die keine impliziten Vertrauensbeziehungen voraussetzen und kontinuierliche Verifikation aller Systemkomponenten erfordern.\n• Integration von Privacy-by-Design Prinzipien zur Sicherstellung, dass Datenschutz und Privatsphäre bereits in der Systemarchitektur berücksichtigt werden.\n• Implementierung von Defense-in-Depth Strategien mit mehrschichtigen Sicherheitskontrollen auf verschiedenen Systemebenen.\n• Verwendung von Secure Coding Standards und automatisierten Code-Analyse-Tools zur Identifikation von Sicherheitslücken während der Entwicklung.\n\n⚙️ Technische Frameworks und Implementierungsansätze:\n• Integration von DevSecOps-Pipelines mit automatisierten Sicherheitstests, Vulnerability Scanning und Compliance-Checks in jeden Build-Prozess.\n• Verwendung von Infrastructure as Code Ansätzen zur Sicherstellung konsistenter und sicherer Systemkonfigurationen.\n• Implementierung von Container Security und Microservices Security Patterns für moderne, verteilte Architekturen.\n• Adoption von API Security Frameworks mit OAuth, API Gateways und Rate Limiting für sichere Systemintegration.\n• Verwendung von Secure Development Lifecycle Frameworks wie Microsoft SDL oder OWASP SAMM zur strukturierten Implementierung.\n\n🔄 Prozessintegration und Automatisierung:\n• Etablierung von Security Gates in der CI/CD Pipeline, die automatische Sicherheitsprüfungen vor jeder Produktionsfreigabe durchführen.\n• Integration von Static Application Security Testing und Dynamic Application Security Testing in den Entwicklungsworkflow.\n• Implementierung von Dependency Scanning zur kontinuierlichen Überwachung von Sicherheitslücken in verwendeten Bibliotheken und Komponenten.\n• Aufbau von Security Champions Programmen zur Verbreitung von Sicherheitsexpertise in Entwicklungsteams.\n• Etablierung von kontinuierlichen Security Training und Awareness Programmen für alle Entwickler."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche konkreten technischen Maßnahmen sind für die Erfüllung der Essential Requirements des CRA Act erforderlich und wie priorisieren wir deren Implementierung?',
        answer: "Die Essential Requirements des CRA Act definieren spezifische technische Anforderungen, die systematisch implementiert werden müssen. Eine strukturierte Herangehensweise erfordert die Priorisierung basierend auf Risikobewertung, Komplexität der Implementierung und Auswirkungen auf die Geschäftskontinuität. Die technischen Maßnahmen müssen dabei sowohl aktuelle Bedrohungen als auch zukünftige Entwicklungen berücksichtigen.\n\n🔐 Grundlegende Sicherheitsanforderungen:\n• Implementierung robuster Authentifizierung und Autorisierung mit Multi-Faktor-Authentifizierung, rollenbasierter Zugriffskontrolle und Prinzipien der minimalen Berechtigung.\n• Verschlüsselung aller Daten in Ruhe und während der Übertragung unter Verwendung aktueller kryptographischer Standards und sicherer Schlüsselverwaltung.\n• Sichere Kommunikationsprotokolle mit TLS-Verschlüsselung, Zertifikatspinning und sicherer API-Kommunikation.\n• Implementierung von Logging und Monitoring Systemen für umfassende Nachverfolgbarkeit und Anomalieerkennung.\n• Sichere Software-Update-Mechanismen mit digitaler Signierung, automatischer Verteilung und Rollback-Fähigkeiten.\n\n⚡ Priorisierungsframework für technische Maßnahmen:\n• Risiko-basierte Bewertung aller Essential Requirements basierend auf Bedrohungslandschaft, Produktkritikalität und potenziellen Auswirkungen.\n• Quick-Win-Identifikation für Maßnahmen mit hohem Sicherheitswert und geringem Implementierungsaufwand.\n• Abhängigkeitsanalyse zur Identifikation von Maßnahmen, die Voraussetzung für andere Implementierungen sind.\n• Ressourcenplanung unter Berücksichtigung verfügbarer Expertise, Budget und Zeitrahmen.\n• Integration in bestehende Entwicklungszyklen zur Minimierung von Geschäftsunterbrechungen.\n\n🛡️ Erweiterte Sicherheitsmaßnahmen:\n• Implementierung von Intrusion Detection und Prevention Systemen für Echtzeit-Bedrohungserkennung.\n• Aufbau von Security Information and Event Management Systemen für zentrale Sicherheitsüberwachung.\n• Implementierung von Backup und Disaster Recovery Mechanismen für Geschäftskontinuität.\n• Etablierung von Penetration Testing und Red Team Exercises zur kontinuierlichen Sicherheitsbewertung.\n• Integration von Threat Intelligence Feeds für proaktive Bedrohungserkennung und -abwehr."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie etablieren wir ein effektives Schwachstellenmanagement-System, das sowohl proaktive Identifikation als auch schnelle Response-Zeiten gewährleistet?',
        answer: "Ein effektives Schwachstellenmanagement-System ist ein kritischer Baustein der CRA Act Compliance und erfordert eine Kombination aus automatisierten Tools, strukturierten Prozessen und qualifizierten Ressourcen. Das System muss sowohl bekannte Schwachstellen kontinuierlich überwachen als auch Zero-Day-Bedrohungen schnell identifizieren und darauf reagieren können.\n\n🔍 Proaktive Schwachstellenidentifikation:\n• Implementierung kontinuierlicher Vulnerability Scanning Tools, die automatisiert Infrastruktur, Anwendungen und Abhängigkeiten auf bekannte Schwachstellen überprüfen.\n• Integration von Software Composition Analysis zur Identifikation von Sicherheitslücken in verwendeten Open-Source-Komponenten und Drittanbieter-Bibliotheken.\n• Etablierung von Bug Bounty Programmen zur Nutzung externer Sicherheitsexperten für die Identifikation unbekannter Schwachstellen.\n• Durchführung regelmäßiger Penetration Tests und Security Assessments durch interne Teams und externe Spezialisten.\n• Monitoring von Threat Intelligence Feeds und Security Advisory Databases für frühzeitige Warnung vor neuen Bedrohungen.\n\n⚡ Schnelle Response und Remediation:\n• Entwicklung eines Risk-based Vulnerability Management Frameworks mit klaren SLAs für verschiedene Schweregrade von Schwachstellen.\n• Implementierung automatisierter Patch Management Systeme für schnelle Verteilung kritischer Sicherheitsupdates.\n• Etablierung von Emergency Response Teams mit definierten Rollen, Verantwortlichkeiten und Eskalationspfaden.\n• Aufbau von Workaround und Mitigation Strategien für Situationen, in denen sofortige Patches nicht verfügbar sind.\n• Integration von Incident Response Prozessen mit Schwachstellenmanagement für koordinierte Reaktion auf aktive Angriffe.\n\n📊 Kontinuierliche Verbesserung und Optimierung:\n• Implementierung von Metriken und KPIs zur Messung der Effektivität des Schwachstellenmanagements wie Mean Time to Detection, Mean Time to Remediation und Patch Coverage.\n• Regelmäßige Bewertung und Optimierung der verwendeten Tools und Prozesse basierend auf Erfahrungen und sich ändernden Bedrohungen.\n• Aufbau von Lessons Learned Prozessen zur kontinuierlichen Verbesserung der Response-Fähigkeiten.\n• Integration von Schwachstellenmanagement in die strategische Sicherheitsplanung und Risikobewertung.\n• Etablierung von Kommunikations- und Reporting-Mechanismen für Stakeholder auf verschiedenen Organisationsebenen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Monitoring- und Logging-Strategien sind erforderlich, um kontinuierliche CRA Act Compliance zu gewährleisten und gleichzeitig operative Effizienz zu erhalten?',
        answer: "Effektives Monitoring und Logging für CRA Act Compliance erfordert eine ausgewogene Strategie, die umfassende Sicherheitsüberwachung mit operativer Effizienz verbindet. Das System muss sowohl regulatorische Anforderungen erfüllen als auch praktikable Einblicke für das tägliche Sicherheitsmanagement liefern, ohne die Systemperformance oder die Produktivität der Teams zu beeinträchtigen.\n\n📊 Strategische Monitoring-Architektur:\n• Implementierung einer zentralisierten Logging-Infrastruktur mit SIEM-Systemen, die alle sicherheitsrelevanten Events aus verschiedenen Quellen korrelieren und analysieren.\n• Aufbau von Real-time Monitoring Dashboards mit konfigurierbaren Alerts für verschiedene Stakeholder-Gruppen und Eskalationsebenen.\n• Integration von Behavioral Analytics und Machine Learning zur Erkennung anomaler Aktivitäten und potenzieller Sicherheitsbedrohungen.\n• Implementierung von Compliance Monitoring Tools, die automatisch die Einhaltung von CRA-Anforderungen überwachen und Abweichungen melden.\n• Etablierung von Performance Monitoring zur Sicherstellung, dass Sicherheitsmaßnahmen die Systemleistung nicht negativ beeinträchtigen.\n\n🔐 Umfassende Logging-Strategien:\n• Implementierung strukturierter Logging-Standards mit einheitlichen Formaten, Zeitstempeln und Korrelations-IDs für effiziente Analyse und Forensik.\n• Aufbau von Security Event Logging für alle kritischen Systemkomponenten, einschließlich Authentifizierung, Autorisierung, Datenzugriff und Systemänderungen.\n• Integration von Application Performance Monitoring mit Security Logging zur ganzheitlichen Sicht auf System- und Sicherheitsstatus.\n• Implementierung von Audit Trails für alle compliance-relevanten Aktivitäten mit unveränderlicher Speicherung und digitaler Signierung.\n• Etablierung von Log Retention Policies, die sowohl regulatorische Anforderungen als auch operative Bedürfnisse berücksichtigen.\n\n⚡ Operative Effizienz und Automatisierung:\n• Entwicklung intelligenter Alerting-Systeme mit Machine Learning-basierter Filterung zur Reduzierung von False Positives und Alert Fatigue.\n• Implementierung automatisierter Response-Mechanismen für häufige Sicherheitsereignisse zur Entlastung der Security Teams.\n• Integration von Monitoring-Daten in bestehende IT Service Management Prozesse für streamlined Incident Handling.\n• Aufbau von Self-Service Dashboards für verschiedene Teams zur autonomen Überwachung ihrer Bereiche.\n• Etablierung von Continuous Improvement Prozessen basierend auf Monitoring-Insights zur Optimierung von Sicherheits- und Betriebsprozessen."
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
