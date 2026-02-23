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
    console.log('Updating IAM Services page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-services' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-services" not found')
    }
    
    // Create new FAQs for IAM Services governance and optimization
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie unterstützen IAM Services bei der Entwicklung und Implementierung einer umfassenden Identity Governance Strategie?',
        answer: "Identity Governance ist das strategische Fundament für nachhaltige IAM-Excellence und erfordert eine ganzheitliche Herangehensweise, die Technologie, Prozesse, Menschen und Compliance integriert. IAM Services bieten spezialisierte Expertise für die Entwicklung und Implementierung robuster Governance-Frameworks, die kontinuierliche Kontrolle, Transparenz und Optimierung aller Identitäts- und Zugriffsprozesse gewährleisten.\n\n🎯 Strategic Governance Framework Development:\n• Identity Governance Vision und Mission Definition mit klaren strategischen Zielen\n• Stakeholder Alignment für organisationsweite Unterstützung und Verantwortlichkeiten\n• Governance Operating Model Design mit definierten Rollen, Verantwortlichkeiten und Eskalationspfaden\n• Policy Framework Development für konsistente Richtlinien und Standards\n• Risk-based Governance Approach für priorisierte Kontrollen und Ressourcenallokation\n\n📋 Comprehensive Policy und Process Management:\n• Identity Lifecycle Policies für systematische Verwaltung von Identitätserstellung bis Deaktivierung\n• Access Request und Approval Workflows mit automatisierten Genehmigungsprozessen\n• Segregation of Duties Controls für Interessenkonflikt-Vermeidung und Compliance\n• Privileged Access Governance für erweiterte Kontrollen kritischer Systemzugriffe\n• Exception Management Processes für kontrollierte Abweichungen und Notfallzugriffe\n\n🔍 Advanced Analytics und Monitoring:\n• Identity Analytics Dashboards für Real-time Einblicke in Governance-Performance\n• Risk Scoring und Heat Maps für priorisierte Aufmerksamkeit auf kritische Bereiche\n• Compliance Monitoring mit automatisierten Violation-Detection und Alerting\n• Trend Analysis für proaktive Identifikation von Governance-Verbesserungsmöglichkeiten\n• Predictive Analytics für Vorhersage potenzieller Compliance-Risiken\n\n⚡ Automated Governance Processes:\n• Automated Access Reviews mit intelligenten Empfehlungen und Bulk-Approval-Optionen\n• Role Mining und Optimization für kontinuierliche Verbesserung von Rollenmodellen\n• Orphaned Account Detection für automatische Identifikation ungenutzter Accounts\n• Entitlement Sprawl Management für Kontrolle übermäßiger Berechtigungen\n• Compliance Reporting Automation für effiziente Audit-Bereitschaft\n\n🛡️ Risk Management und Compliance Integration:\n• Regulatory Mapping für Alignment mit spezifischen Compliance-Anforderungen\n• Control Effectiveness Testing für kontinuierliche Validierung von Governance-Kontrollen\n• Audit Trail Management für umfassende Nachverfolgbarkeit aller Governance-Aktivitäten\n• Incident Response Integration für schnelle Reaktion auf Governance-Verletzungen\n• Third-Party Risk Management für erweiterte Governance auf Partner und Lieferanten\n\n🔄 Continuous Improvement und Maturity Development:\n• Governance Maturity Assessment für Bewertung aktueller Capabilities und Verbesserungspotentiale\n• Benchmarking gegen Industry Best Practices für kontinuierliche Optimierung\n• Innovation Integration für Adoption neuer Governance-Technologien und Methoden\n• Training und Awareness Programs für nachhaltige Governance-Kultur\n• Regular Governance Reviews für strategische Anpassungen und Roadmap-Updates"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielen IAM Services bei der Sicherstellung von Business Continuity und Disaster Recovery für kritische Identitätssysteme?',
        answer: "Business Continuity und Disaster Recovery für IAM-Systeme sind kritisch für die Aufrechterhaltung von Geschäftsprozessen und Sicherheitskontrollen während Störungen oder Katastrophen. IAM Services entwickeln und implementieren umfassende Continuity-Strategien, die Hochverfügbarkeit, schnelle Recovery und minimale Geschäftsunterbrechung gewährleisten, während gleichzeitig Sicherheitsstandards und Compliance-Anforderungen aufrechterhalten werden.\n\n🎯 Strategic Business Continuity Planning:\n• Business Impact Analysis für Bewertung kritischer IAM-Services und deren Geschäftsauswirkungen\n• Recovery Time Objectives und Recovery Point Objectives Definition für verschiedene Service-Level\n• Dependency Mapping für Identifikation kritischer Abhängigkeiten und Single Points of Failure\n• Risk Assessment für potentielle Bedrohungen und Vulnerabilities\n• Continuity Strategy Development mit Multi-Tier-Recovery-Ansätzen\n\n🏗️ Resilient Architecture Design:\n• High Availability Architecture mit redundanten Systemen und Load Balancing\n• Geographic Distribution für Schutz vor regionalen Ausfällen\n• Active-Active und Active-Passive Deployment-Strategien\n• Database Replication und Synchronization für Datenintegrität\n• Network Redundancy und Failover-Mechanismen\n\n💾 Comprehensive Backup und Recovery:\n• Automated Backup Strategies mit regelmäßigen Vollsicherungen und inkrementellen Updates\n• Cross-Site Backup Replication für geografische Diversifikation\n• Backup Validation und Integrity Testing für Wiederherstellbarkeits-Sicherstellung\n• Granular Recovery Capabilities für selektive Datenwiederherstellung\n• Backup Encryption und Security für Schutz sensibler Identitätsdaten\n\n🚨 Incident Response und Crisis Management:\n• Incident Detection und Alerting Systems für schnelle Problemidentifikation\n• Escalation Procedures mit definierten Verantwortlichkeiten und Kommunikationswegen\n• Crisis Communication Plans für Stakeholder-Information und Koordination\n• Emergency Access Procedures für kritische Systemzugriffe während Ausfällen\n• Damage Assessment und Recovery Prioritization\n\n🧪 Testing und Validation:\n• Regular Disaster Recovery Testing mit verschiedenen Failure-Scenarios\n• Tabletop Exercises für Team-Preparedness und Process-Validation\n• Recovery Time Testing für Verification von RTO-Compliance\n• Data Integrity Validation nach Recovery-Operationen\n• Lessons Learned Integration für kontinuierliche Verbesserung\n\n🔄 Operational Continuity Management:\n• Service Level Monitoring für proaktive Problem-Detection\n• Capacity Management für Skalierung während Stress-Situationen\n• Vendor Management für Third-Party-Service-Continuity\n• Documentation Management für aktuelle Recovery-Procedures\n• Training und Awareness für Incident-Response-Teams"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie gestalten IAM Services die Integration mit DevOps und agilen Entwicklungsprozessen für moderne Software-Delivery?',
        answer: "Die Integration von IAM Services in DevOps und agile Entwicklungsprozesse ist essentiell für moderne Software-Delivery und ermöglicht Security-by-Design, automatisierte Compliance und nahtlose Entwickler-Experience. Diese Integration transformiert traditionelle Sicherheitsansätze zu DevSecOps-Praktiken, die Geschwindigkeit und Sicherheit optimal balancieren und kontinuierliche Innovation ermöglichen.\n\n🚀 DevSecOps Integration und Automation:\n• CI/CD Pipeline Integration für automatisierte IAM-Konfiguration und Deployment\n• Infrastructure as Code für versionierte und reproduzierbare IAM-Setups\n• Automated Security Testing mit IAM-spezifischen Vulnerability-Scans\n• Policy as Code für versionierte und testbare Sicherheitsrichtlinien\n• Continuous Compliance Monitoring in Development und Production\n\n⚙️ Developer-Friendly IAM Services:\n• Self-Service Developer Portals für autonome IAM-Konfiguration\n• API-First Design für nahtlose Integration in Entwicklungsworkflows\n• SDK und Libraries für vereinfachte IAM-Implementation\n• Documentation und Tutorials für Developer-Enablement\n• Sandbox Environments für sichere Entwicklung und Testing\n\n🔧 Automated Provisioning und Configuration:\n• Dynamic Service Account Creation für Microservices und Container\n• Automated Role Assignment basierend auf Application-Metadata\n• Environment-Specific Configuration Management\n• Secret Management Integration für sichere Credential-Handhabung\n• Automated Cleanup für nicht mehr benötigte Identitäten und Berechtigungen\n\n📊 Continuous Monitoring und Feedback:\n• Real-time Security Metrics in Development Dashboards\n• Automated Vulnerability Reporting und Remediation-Guidance\n• Performance Impact Monitoring für IAM-Services\n• Developer Feedback Loops für Service-Improvement\n• Security Champions Programs für Kultur-Transformation\n\n🌐 Cloud-Native und Container Integration:\n• Kubernetes RBAC Integration für Container-Orchestration\n• Service Mesh Security für Microservices-Communication\n• Serverless Function Authentication und Authorization\n• Container Image Security Scanning für IAM-Komponenten\n• Multi-Cloud Identity Federation für Hybrid-Deployments\n\n🔄 Agile Governance und Compliance:\n• Sprint-Integrated Security Reviews für kontinuierliche Compliance\n• Automated Compliance Reporting für Audit-Bereitschaft\n• Risk-based Security Controls für agile Anpassung\n• Continuous Risk Assessment in Development-Lifecycle\n• Regulatory Change Management für dynamische Compliance-Anforderungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Strategien verwenden IAM Services für die erfolgreiche Migration von Legacy-Systemen zu modernen Identity-Plattformen?',
        answer: "Legacy-System-Migration zu modernen Identity-Plattformen ist eine komplexe Transformation, die strategische Planung, risikominimierte Ausführung und kontinuierliche Optimierung erfordert. IAM Services entwickeln maßgeschneiderte Migrationsstrategien, die Geschäftskontinuität gewährleisten, Sicherheitsrisiken minimieren und gleichzeitig die Vorteile moderner Technologien maximieren.\n\n🎯 Strategic Migration Planning:\n• Legacy System Assessment für umfassende Bewertung bestehender Systeme und Abhängigkeiten\n• Migration Readiness Evaluation für Bewertung organisatorischer und technischer Bereitschaft\n• Target Architecture Design mit modernen Best-Practices und Zukunftssicherheit\n• Migration Strategy Selection zwischen Big Bang, Phased und Parallel-Ansätzen\n• Risk Assessment und Mitigation Planning für potentielle Migration-Risiken\n\n🔄 Phased Migration Approach:\n• Pilot Migration mit nicht-kritischen Systemen für Proof-of-Concept und Learning\n• Wave-based Rollout für kontrollierte Migration kritischer Systeme\n• Parallel Operation Periods für Risikominimierung und Fallback-Optionen\n• Gradual Feature Migration für schrittweise Funktionalitäts-Übertragung\n• Legacy System Decommissioning nach erfolgreicher Migration-Validierung\n\n🛠️ Technical Migration Execution:\n• Data Migration Strategies für sichere und vollständige Identitätsdaten-Übertragung\n• Identity Mapping und Transformation für Kompatibilität zwischen Systemen\n• Integration Bridge Development für temporäre Koexistenz alter und neuer Systeme\n• Automated Migration Tools für Effizienz und Konsistenz\n• Rollback Procedures für schnelle Wiederherstellung bei Problemen\n\n🔍 Quality Assurance und Testing:\n• Comprehensive Testing Strategies mit funktionalen und Performance-Tests\n• User Acceptance Testing für Validation der Migration-Ergebnisse\n• Security Testing für Sicherstellung unveränderter Sicherheitsstandards\n• Load Testing für Performance-Validation unter realistischen Bedingungen\n• Data Integrity Validation für Vollständigkeit und Korrektheit migrierter Daten\n\n👥 Change Management und User Adoption:\n• Stakeholder Communication für transparente Migration-Updates\n• Training Programs für neue System-Capabilities und Workflows\n• Support Structure Enhancement für Migration-spezifische Unterstützung\n• Feedback Collection und Issue Resolution während Migration\n• Success Metrics Tracking für Migration-Progress und User-Satisfaction\n\n🚀 Post-Migration Optimization:\n• Performance Tuning für optimale System-Performance\n• Feature Enhancement für Nutzung neuer Platform-Capabilities\n• Process Optimization basierend auf Migration-Learnings\n• Continuous Monitoring für langfristige System-Stabilität\n• Innovation Roadmap Development für zukünftige Verbesserungen"
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
    console.log('✅ FAQ batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
