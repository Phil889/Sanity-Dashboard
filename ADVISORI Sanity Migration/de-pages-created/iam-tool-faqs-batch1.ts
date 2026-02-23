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
    console.log('Updating IAM Tool page with FAQ batch 1...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'iam-tool' })
    
    if (!existingDoc) {
      throw new Error('Document "iam-tool" not found')
    }
    
    // Create new FAQs for IAM Tool selection criteria and evaluation frameworks
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 1),
        question: 'Welche Kriterien sind bei der Auswahl von IAM Tools entscheidend und wie entwickelt man ein systematisches Evaluierungsframework?',
        answer: "Die Auswahl der richtigen IAM Tools ist eine strategische Entscheidung, die die Effizienz und Sicherheit Ihrer gesamten Identitätsverwaltung maßgeblich beeinflusst. Ein systematisches Evaluierungsframework ermöglicht objektive Vergleiche und gewährleistet, dass die ausgewählten Tools optimal zu Ihren spezifischen Anforderungen und organisatorischen Zielen passen.\n\n🎯 Funktionale Anforderungen und Use Case Mapping:\n• Identity Provisioning und Deprovisioning Capabilities für automatisierte Benutzerverwaltung\n• Access Management Features für granulare Berechtigungssteuerung und Role-based Access Control\n• Authentication Mechanisms mit Multi-Faktor-Unterstützung und adaptiver Sicherheit\n• Directory Integration für nahtlose Anbindung an bestehende Verzeichnisdienste\n• Workflow Automation für effiziente Genehmigungsprozesse und Self-Service-Funktionen\n\n🔧 Technische Architektur und Integration:\n• API-Verfügbarkeit und Standards-Compliance für flexible Systemintegration\n• Skalierbarkeits-Charakteristika für wachsende User-Zahlen und Transaktionsvolumen\n• Performance-Metriken für Authentication-Latenz und System-Response-Zeiten\n• High Availability und Disaster Recovery Capabilities für Business Continuity\n• Cloud-Readiness und Hybrid-Deployment-Optionen für moderne IT-Architekturen\n\n🛡️ Sicherheits- und Compliance-Features:\n• Encryption Standards für Data-in-Transit und Data-at-Rest Protection\n• Audit-Logging und Compliance-Reporting für regulatorische Anforderungen\n• Threat Detection und Anomaly Analytics für proaktive Sicherheitsüberwachung\n• Privileged Access Management für kritische System- und Administratorzugriffe\n• Zero Trust Architecture Support für moderne Sicherheitskonzepte\n\n💰 Total Cost of Ownership und Wirtschaftlichkeit:\n• Lizenzmodelle und Pricing-Strukturen basierend auf User Count oder Feature-Umfang\n• Implementation Costs für Professional Services und System Integration\n• Operational Expenses für Administration, Wartung und kontinuierliche Optimierung\n• Training und Change Management Kosten für User Adoption und Skill Development\n• Hidden Costs für zusätzliche Module, Premium Support oder Compliance-Features\n\n📊 Evaluierungsframework und Bewertungsmethodik:\n• Gewichtete Scoring-Modelle für objektive Tool-Vergleiche basierend auf Prioritäten\n• Proof-of-Concept Szenarien mit realistischen Use Cases und Performance-Tests\n• Vendor Assessment für Marktposition, Roadmap und langfristige Viabilität\n• Reference Checks und Customer Testimonials für praktische Erfahrungswerte\n• Risk Assessment für Vendor Lock-in, Technology Dependencies und Migration-Komplexität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 2),
        question: 'Wie unterscheiden sich spezialisierte IAM Tools von integrierten Plattform-Lösungen und welche Vor- und Nachteile bieten beide Ansätze?',
        answer: "Die Entscheidung zwischen spezialisierten IAM Tools und integrierten Plattform-Lösungen ist eine der fundamentalsten Architektur-Entscheidungen bei der IAM Tool Auswahl. Beide Ansätze bieten spezifische Vorteile und Herausforderungen, die sorgfältig gegen die organisatorischen Anforderungen, technischen Gegebenheiten und strategischen Ziele abgewogen werden müssen.\n\n🔧 Spezialisierte IAM Tools und Best-of-Breed Ansätze:\n• Deep Functionality in spezifischen IAM-Bereichen mit hochentwickelten Features\n• Flexibilität bei der Tool-Auswahl für verschiedene Identity-Management-Aufgaben\n• Vendor-Diversifikation zur Risikominimierung und Vermeidung von Single-Point-of-Failure\n• Innovation Leadership durch spezialisierte Anbieter mit Fokus auf spezifische Problemstellungen\n• Customization Möglichkeiten für organisationsspezifische Anforderungen und Workflows\n\n🏢 Integrierte Plattform-Lösungen und Suite-Ansätze:\n• Einheitliche User Experience und konsistente Administration über alle IAM-Funktionen\n• Nahtlose Integration zwischen verschiedenen Identity-Management-Komponenten\n• Vereinfachte Vendor-Beziehungen mit Single Point of Contact für Support und Services\n• Reduzierte Integration-Komplexität durch vorkonfigurierte Konnektoren und Workflows\n• Economies of Scale bei Lizenzierung und Wartung durch Bundle-Pricing-Modelle\n\n⚖️ Architektur-Überlegungen und Integration-Komplexität:\n• Data Consistency und Synchronisation zwischen verschiedenen spezialisierten Tools\n• API Management und Orchestrierung für nahtlose Tool-Interoperabilität\n• Single Sign-On Implementierung über heterogene Tool-Landschaften\n• Monitoring und Troubleshooting in Multi-Vendor-Umgebungen\n• Change Management und Koordination bei Updates verschiedener Tool-Komponenten\n\n🎯 Use Case Spezifität und Performance-Optimierung:\n• Spezialisierte Tools bieten oft überlegene Performance für spezifische Anwendungsfälle\n• Plattform-Lösungen ermöglichen optimierte Workflows über Tool-Grenzen hinweg\n• Skalierbarkeits-Charakteristika unterscheiden sich je nach Architektur-Ansatz\n• Feature-Tiefe versus Feature-Breite als strategische Entscheidung\n• Innovation-Geschwindigkeit und Time-to-Market für neue Funktionalitäten\n\n💼 Organisatorische und operative Überlegungen:\n• Skill Requirements und Expertise-Aufbau für verschiedene Tool-Kategorien\n• Operational Overhead für Multi-Tool-Management versus Single-Platform-Administration\n• Vendor Relationship Management und Contract Negotiation Komplexität\n• Training und Certification Requirements für verschiedene Tool-Stacks\n• Change Management und User Adoption bei heterogenen versus einheitlichen Lösungen\n\n🔄 Hybrid-Ansätze und strategische Flexibilität:\n• Core Platform mit spezialisierten Add-on Tools für besondere Anforderungen\n• Phased Migration Strategien von Best-of-Breed zu Plattform-Ansätzen\n• Multi-Cloud und Multi-Vendor Strategien für Risikominimierung\n• Future-Proofing durch modulare Architekturen und Standards-basierte Integration\n• Exit-Strategien und Tool-Portabilität für langfristige Flexibilität"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 3),
        question: 'Welche Rolle spielen Cloud-native IAM Tools im Vergleich zu traditionellen On-Premise-Lösungen und wie bewertet man Hybrid-Ansätze?',
        answer: "Cloud-native IAM Tools haben die Identity-Management-Landschaft revolutioniert und bieten fundamentale Vorteile gegenüber traditionellen On-Premise-Lösungen. Die Bewertung verschiedener Deployment-Modelle erfordert eine differenzierte Betrachtung von Sicherheits-, Performance-, Compliance- und Kostenaspekten sowie die strategische Einordnung in die gesamte IT-Architektur.\n\n☁️ Cloud-native IAM Tool Vorteile und Charakteristika:\n• Elastische Skalierung basierend auf aktuellen Anforderungen ohne Infrastruktur-Investitionen\n• Automatische Updates und Security Patches ohne Downtime oder manuelle Intervention\n• Globale Verfügbarkeit und Built-in Disaster Recovery durch Cloud Provider Infrastructure\n• Pay-as-you-Grow Modelle für kosteneffiziente Skalierung mit wachsenden Anforderungen\n• Integrierte Threat Intelligence und Advanced Analytics durch Cloud-Provider-Capabilities\n\n🏢 On-Premise IAM Tool Kontrolle und Anpassbarkeit:\n• Vollständige Kontrolle über Identity-Daten und Authentifizierungs-Prozesse\n• Anpassbare Sicherheitsrichtlinien und Custom Authentication Flows\n• Integration in bestehende Enterprise-Infrastrukturen und Legacy-Systeme\n• Compliance-Konformität für regulierte Industrien mit strikten Data Residency Anforderungen\n• Erweiterte Audit-Capabilities und detaillierte Logging für Forensik und Compliance\n\n🔒 Sicherheits- und Compliance-Überlegungen:\n• Data Sovereignty und geografische Beschränkungen für Identity-Datenverarbeitung\n• Shared Responsibility Models in Cloud-Umgebungen versus Full Control in On-Premise Deployments\n• Encryption-Standards für Identity Data in Transit und Data at Rest\n• Network Security und Access Control für verschiedene Deployment-Modelle\n• Regulatory Compliance und Audit-Trails für verschiedene Jurisdiktionen\n\n🔄 Hybrid IAM Architekturen und Best Practices:\n• Identity Federation zwischen Cloud und On-Premise Komponenten\n• Selective Data Placement basierend auf Sensitivität und Compliance-Anforderungen\n• Workload Distribution für optimale Performance und Kosteneffizienz\n• Disaster Recovery Strategien mit Cross-Platform Redundancy\n• Graduelle Migration-Pfade von On-Premise zu Cloud-basierten Lösungen\n\n⚡ Performance und User Experience Faktoren:\n• Latency-Überlegungen für Authentication und Authorization Requests\n• Network Dependencies und Connectivity Requirements\n• Offline Capabilities und Local Authentication Fallback-Mechanismen\n• Mobile und Remote Access Optimierung für verschiedene Deployment-Modelle\n• Global User Base Support und Multi-Region Performance\n\n💰 Kostenmodelle und Investment-Strategien:\n• CAPEX versus OPEX Modelle und deren Auswirkungen auf IT-Budget und Cash Flow\n• Hidden Costs in Cloud-Modellen wie Data Transfer und Premium Support\n• Infrastructure Costs für On-Premise Deployments inklusive Hardware und Wartung\n• Operational Expenses für Administration und Maintenance in verschiedenen Modellen\n• Total Cost of Ownership Vergleiche über verschiedene Zeiträume und Skalierungsszenarien\n\n🎯 Strategische Entscheidungskriterien und Bewertungsframework:\n• Business Criticality der IAM Function und Acceptable Risk Levels\n• Organizational Cloud Readiness und Change Management Capabilities\n• Vendor Evaluation für Cloud Provider Security und SLA-Garantien\n• Future Technology Roadmap und Strategic IT Direction\n• Risk Mitigation Strategien für verschiedene Deployment-Szenarien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 4),
        question: 'Wie führt man effektive Proof-of-Concept Tests für IAM Tools durch und welche Bewertungskriterien sind dabei entscheidend?',
        answer: "Proof-of-Concept Tests sind ein kritischer Baustein bei der IAM Tool Evaluierung und ermöglichen objektive Bewertungen basierend auf realistischen Szenarien und messbaren Kriterien. Ein strukturierter PoC-Ansatz reduziert Implementierungsrisiken und gewährleistet, dass die ausgewählten Tools tatsächlich die erwarteten Vorteile in der produktiven Umgebung liefern.\n\n🎯 PoC-Planung und Szenario-Definition:\n• Realistische Use Cases basierend auf aktuellen Identity-Management-Herausforderungen\n• Repräsentative User-Gruppen und Anwendungsszenarien für umfassende Testing-Abdeckung\n• Performance-Benchmarks und Skalierbarkeits-Tests mit erwarteten Produktions-Lasten\n• Integration-Szenarien mit bestehenden Systemen und Legacy-Anwendungen\n• Security-Testing und Vulnerability-Assessment für Sicherheitsbewertung\n\n🔧 Testumgebung und Infrastructure-Setup:\n• Produktionsnahe Testumgebung mit realistischen Datenvolumen und User-Zahlen\n• Network-Konfiguration und Security-Policies entsprechend Produktions-Standards\n• Monitoring und Logging-Setup für detaillierte Performance-Analyse\n• Backup und Recovery-Testing für Business Continuity Validation\n• Load Testing Infrastructure für Skalierbarkeits- und Stress-Tests\n\n📊 Bewertungskriterien und Metriken:\n• Authentication Performance mit Response-Zeiten und Throughput-Messungen\n• User Experience Bewertung für Usability und Adoption-Wahrscheinlichkeit\n• Administrative Efficiency für Management-Aufwände und Operational Overhead\n• Integration Complexity und Time-to-Value für System-Anbindungen\n• Security Effectiveness durch Penetration Testing und Vulnerability Scans\n\n🔍 Funktionale Validierung und Feature-Testing:\n• Identity Provisioning und Deprovisioning Workflows mit verschiedenen User-Typen\n• Access Control und Authorization Testing für verschiedene Anwendungsszenarien\n• Self-Service Capabilities und User Portal Funktionalitäten\n• Reporting und Analytics Features für Compliance und Operational Insights\n• Mobile und Remote Access Testing für moderne Arbeitsmodelle\n\n⚖️ Vergleichende Bewertung und Scoring:\n• Gewichtete Bewertungsmatrizen basierend auf organisatorischen Prioritäten\n• Quantitative Metriken für Performance, Skalierbarkeit und Effizienz\n• Qualitative Bewertungen für User Experience und Administrative Usability\n• Risk Assessment für Implementation Complexity und Vendor Dependencies\n• Cost-Benefit-Analyse basierend auf PoC-Ergebnissen und Projektionen\n\n📋 Dokumentation und Entscheidungsunterstützung:\n• Detaillierte Test-Protokolle mit reproduzierbaren Ergebnissen\n• Lessons Learned und Best Practices für Implementation Planning\n• Gap Analysis zwischen Tool-Capabilities und organisatorischen Anforderungen\n• Recommendation Reports mit objektiven Bewertungen und strategischen Empfehlungen\n• Implementation Roadmaps basierend auf PoC-Erkenntnissen und Prioritäten\n\n🔄 Iterative Verbesserung und Optimization:\n• Feedback-Integration von verschiedenen Stakeholder-Gruppen\n• Configuration Tuning basierend auf Performance-Ergebnissen\n• Security Hardening und Best Practice Implementation\n• Pilot Deployment Vorbereitung mit ausgewählten User-Gruppen\n• Change Management Planning basierend auf PoC-Erfahrungen"
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
    console.log('✅ FAQ batch 1 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
