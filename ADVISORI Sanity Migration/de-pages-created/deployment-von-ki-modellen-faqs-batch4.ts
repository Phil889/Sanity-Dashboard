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
    console.log('Updating Deployment von KI-Modellen page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'deployment-von-ki-modellen' })
    
    if (!existingDoc) {
      throw new Error('Document "deployment-von-ki-modellen" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Wie implementiert ADVISORI skalierbare MLOps-Strategien und welche Technologien ermöglichen nachhaltiges Wachstum von KI-Deployments?',
        answer: "Skalierbare MLOps-Strategien sind essentiell für Unternehmen, die ihre KI-Initiativen erfolgreich ausbauen möchten. ADVISORI entwickelt zukunftssichere MLOps-Architekturen, die es ermöglichen, von Proof-of-Concept-Projekten zu unternehmensweiten AI-Plattformen zu skalieren, ohne dabei Qualität, Sicherheit oder Compliance zu kompromittieren.\n\n🚀 Fundamentale Skalierungsstrategien:\n• Modulare Architektur-Prinzipien: Entwicklung flexibler, modularer Deployment-Architekturen, die horizontale und vertikale Skalierung unterstützen und gleichzeitig Wartbarkeit und Erweiterbarkeit gewährleisten.\n• Container-Orchestrierung und Microservices: Implementierung von Kubernetes-basierten Container-Umgebungen mit Microservices-Architekturen für maximale Flexibilität und Ressourceneffizienz.\n• Multi-Cloud und Hybrid-Strategien: Entwicklung cloud-agnostischer Deployment-Strategien, die Vendor-Lock-in vermeiden und optimale Ressourcennutzung über verschiedene Cloud-Provider ermöglichen.\n• Edge-Computing-Integration: Strategische Verteilung von KI-Workloads zwischen zentralen Cloud-Ressourcen und Edge-Standorten für optimale Latenz und Datenlokalität.\n\n⚙️ Technologie-Stack für Enterprise-Skalierung:\n• Automatisierte CI/CD-Pipelines: Implementierung hochautomatisierter Continuous Integration und Continuous Deployment Pipelines, die schnelle und zuverlässige Model-Deployments in großem Maßstab ermöglichen.\n• Infrastructure-as-Code und GitOps: Verwendung deklarativer Infrastruktur-Management-Ansätze für konsistente, reproduzierbare und versionskontrollierte Deployment-Umgebungen.\n• Feature-Stores und Data-Pipelines: Aufbau zentralisierter Feature-Management-Systeme und hochperformanter Daten-Pipelines für konsistente Datenbereitstellung über alle Modelle hinweg.\n• Model-Registry und Governance: Implementierung umfassender Model-Management-Systeme mit Versionskontrolle, Metadaten-Management und automatisierten Governance-Workflows.\n\n📈 Performance-Optimierung und Ressourcen-Management:\n• Intelligente Auto-Scaling: Implementierung prädiktiver Skalierungsalgorithmen, die Ressourcenbedarf basierend auf historischen Daten und Geschäftsmustern vorhersagen.\n• Multi-Model-Serving und Resource-Sharing: Optimierung der Ressourcennutzung durch intelligente gemeinsame Nutzung von Infrastruktur-Ressourcen zwischen verschiedenen Modellen.\n• Performance-Monitoring und Optimization: Kontinuierliche Überwachung und Optimierung von System-Performance mit automatischer Identifikation von Bottlenecks und Optimierungsmöglichkeiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Welche Continuous Integration und Continuous Deployment Strategien sind für KI-Modelle erforderlich und wie automatisiert ADVISORI den gesamten Deployment-Lifecycle?',
        answer: "CI/CD für KI-Modelle erfordert spezialisierte Ansätze, die über traditionelle Software-Entwicklung hinausgehen. ADVISORI implementiert umfassende MLOps-Pipelines, die den gesamten Modell-Lifecycle automatisieren und dabei höchste Qualitäts- und Sicherheitsstandards gewährleisten.\n\n🔄 Spezialisierte CI/CD für Machine Learning:\n• Model-Training-Pipelines: Automatisierte Pipelines für Model-Training mit integrierter Hyperparameter-Optimierung, Cross-Validation und Performance-Bewertung.\n• Automated-Testing für ML-Modelle: Implementierung umfassender Test-Suites, die Datenqualität, Model-Performance, Bias-Detection und Robustheit validieren.\n• Model-Validation und Approval-Workflows: Systematische Validierungsprozesse mit automatisierten Quality-Gates und manuellen Approval-Schritten für kritische Deployments.\n• Rollback-Strategien und Canary-Deployments: Implementierung sicherer Deployment-Strategien mit automatischen Rollback-Mechanismen bei Performance-Degradation.\n\n⚡ Automatisierung des gesamten Deployment-Lifecycle:\n• Infrastructure-Provisioning: Automatische Bereitstellung und Konfiguration der erforderlichen Infrastruktur-Ressourcen basierend auf Model-Anforderungen und Skalierungszielen.\n• Environment-Management: Automatisierte Verwaltung verschiedener Deployment-Umgebungen mit konsistenten Konfigurationen und Sicherheitsrichtlinien.\n• Dependency-Management: Automatische Verwaltung von Software-Dependencies, Container-Images und Modell-Artefakten mit Versionskontrolle und Konfliktauflösung.\n• Configuration-Management: Zentrale Verwaltung von Deployment-Konfigurationen mit Environment-spezifischen Anpassungen und Secrets-Management.\n\n🛡️ Qualitätssicherung und Governance-Integration:\n• Automated-Compliance-Checks: Integration automatisierter Compliance-Validierungen in CI/CD-Pipelines für DSGVO, Sicherheitsrichtlinien und Unternehmensstandards.\n• Security-Scanning und Vulnerability-Assessment: Automatische Sicherheitsüberprüfungen von Container-Images, Dependencies und Deployment-Konfigurationen.\n• Performance-Benchmarking: Automatisierte Performance-Tests und Benchmarking gegen definierte SLAs und Qualitätskriterien.\n• Documentation-Generation: Automatische Generierung und Aktualisierung von Deployment-Dokumentation, API-Dokumentation und Compliance-Nachweisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Wie gewährleistet ADVISORI Versionskontrolle und Rollback-Fähigkeiten für deployed KI-Modelle und welche Best Practices gelten für Model-Lifecycle-Management?',
        answer: "Effektive Versionskontrolle und Rollback-Fähigkeiten sind kritisch für die operative Stabilität und Governance von KI-Deployments. ADVISORI implementiert umfassende Model-Lifecycle-Management-Systeme, die vollständige Nachverfolgbarkeit, sichere Rollbacks und strategische Governance ermöglichen.\n\n📚 Umfassende Model-Versionskontrolle:\n• Semantic-Versioning für ML-Modelle: Implementierung strukturierter Versionierungsstrategien, die Major-, Minor- und Patch-Releases für Modelle mit klaren Upgrade-Pfaden definieren.\n• Model-Registry und Artefakt-Management: Zentrale Verwaltung aller Modell-Versionen mit vollständigen Metadaten, Training-Parametern, Performance-Metriken und Abhängigkeiten.\n• Immutable-Model-Artefakte: Sicherstellung der Unveränderlichkeit deployed Modelle durch kryptographische Signaturen und Content-Hashing für Integrität und Nachvollziehbarkeit.\n• Branching-Strategien für ML-Entwicklung: Implementierung von Git-Flow-ähnlichen Branching-Strategien speziell für Machine Learning Entwicklung mit Feature-, Release- und Hotfix-Branches.\n\n🔄 Sichere Rollback-Strategien:\n• Blue-Green-Deployments: Implementierung paralleler Produktionsumgebungen für risikofreie Deployments mit sofortigen Rollback-Möglichkeiten bei Problemen.\n• Canary-Releases und A/B-Testing: Graduelle Einführung neuer Modell-Versionen mit kontinuierlicher Performance-Überwachung und automatischen Rollbacks bei Anomalien.\n• Feature-Flags für Model-Features: Dynamische Aktivierung und Deaktivierung von Modell-Features ohne vollständige Deployments für flexible Rollout-Kontrolle.\n• Automated-Rollback-Triggers: Implementierung intelligenter Monitoring-Systeme, die automatische Rollbacks bei Performance-Degradation, Fehlerquoten oder Compliance-Verstößen auslösen.\n\n🎯 Strategic Model-Lifecycle-Management:\n• Model-Performance-Tracking: Kontinuierliche Verfolgung der Performance-Entwicklung über verschiedene Modell-Versionen hinweg für datengetriebene Upgrade-Entscheidungen.\n• Deprecation-Strategien: Systematische Planung und Durchführung von Modell-Deprecations mit klaren Timelines, Migrationspfaden und Stakeholder-Kommunikation.\n• Model-Governance und Approval-Workflows: Etablierung formaler Governance-Prozesse für Modell-Releases mit rollenbasierten Genehmigungen und Compliance-Validierungen.\n• Legacy-Model-Management: Strategien für die Verwaltung und schrittweise Migration von Legacy-Modellen mit minimalen Geschäftsunterbrechungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Welche Disaster Recovery und Business Continuity Strategien implementiert ADVISORI für kritische KI-Model-Deployments?',
        answer: "Disaster Recovery und Business Continuity für KI-Deployments erfordern spezialisierte Ansätze, die sowohl technische Ausfälle als auch modellspezifische Risiken adressieren. ADVISORI entwickelt umfassende Kontinuitätsstrategien, die Geschäftsprozesse auch bei schwerwiegenden Störungen aufrechterhalten.\n\n🛡️ Umfassende Disaster Recovery Architektur:\n• Multi-Region-Deployments: Implementierung geografisch verteilter Deployment-Architekturen mit automatischem Failover zwischen Regionen für maximale Verfügbarkeit.\n• Real-time-Data-Replication: Kontinuierliche Synchronisation von Modell-Daten, Konfigurationen und Zustandsinformationen zwischen primären und Backup-Standorten.\n• Infrastructure-Redundancy: Aufbau redundanter Infrastruktur-Komponenten mit automatischer Lastverteilung und Failover-Mechanismen für kritische System-Komponenten.\n• Backup-Strategien für ML-Artefakte: Systematische Sicherung aller Modell-Artefakte, Training-Daten, Konfigurationen und Abhängigkeiten mit definierten Recovery-Point-Objectives.\n\n⚡ Business Continuity Planning:\n• Recovery-Time-Objectives für AI-Services: Definition und Implementierung spezifischer RTO-Ziele für verschiedene KI-Services basierend auf Geschäftskritikalität und Auswirkungsanalyse.\n• Degraded-Mode-Operations: Entwicklung von Fallback-Strategien und vereinfachten Modell-Versionen für den Betrieb bei eingeschränkten Ressourcen oder Teilausfällen.\n• Cross-Functional-Incident-Response: Etablierung koordinierter Incident-Response-Teams mit klaren Rollen, Verantwortlichkeiten und Eskalationspfaden für verschiedene Störungsszenarien.\n• Stakeholder-Communication-Plans: Vordefinierte Kommunikationsstrategien für verschiedene Stakeholder-Gruppen während Störungen mit klaren Informationsflüssen und Updates.\n\n🔄 Kontinuierliche Resilienz-Verbesserung:\n• Disaster-Recovery-Testing: Regelmäßige Tests der Disaster-Recovery-Prozeduren mit simulierten Ausfallszenarien und Bewertung der Recovery-Performance.\n• Lessons-Learned-Integration: Systematische Analyse von Störungen und Near-Miss-Ereignissen für kontinuierliche Verbesserung der Resilienz-Strategien.\n• Resilienz-Metriken und KPIs: Definition und Überwachung spezifischer Resilienz-Kennzahlen für proaktive Identifikation von Schwachstellen und Verbesserungsmöglichkeiten.\n• Business-Impact-Assessment: Regelmäßige Bewertung der Geschäftsauswirkungen verschiedener Ausfallszenarien für priorisierte Resilienz-Investitionen."
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
