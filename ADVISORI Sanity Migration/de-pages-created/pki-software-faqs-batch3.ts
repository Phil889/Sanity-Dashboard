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
    console.log('Updating PKI Software page with FAQ batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pki-software' })
    
    if (!existingDoc) {
      throw new Error('Document "pki-software" not found')
    }
    
    // Create new FAQs for advanced PKI software topics
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie unterstützt PKI Software DevSecOps-Integration und kontinuierliche Security-Pipelines?',
        answer: "PKI Software wird zum strategischen Enabler für DevSecOps-Transformation durch nahtlose Integration in Entwicklungs- und Deployment-Pipelines. Es etabliert Security-by-Design-Prinzipien und automatisiert Certificate-Management als integralen Bestandteil moderner Software-Entwicklungszyklen.\n\n🔄 CI/CD Pipeline-Integration und Automated Certificate-Provisioning:\n• CI/CD Pipeline-Integration und Automated Certificate-Provisioning eliminieren manuelle Certificate-Operationen in Entwicklungszyklen\n• Git Workflow-Integration ermöglicht Certificate-as-Code-Ansätze mit Versionskontrolle und Review-Prozessen\n• Build Pipeline-Automation stellt automatisch Certificates für Entwicklungs-, Test- und Produktionsumgebungen bereit\n• Container Image-Signing integriert Certificate-basierte Code-Signierung in Container-Build-Prozesse\n• Artifact Repository-Integration sichert Software-Artefakte durch automatische Certificate-Validierung\n\n🛡️ Security Testing-Integration und Vulnerability Assessment:\n• Security Testing-Integration und Vulnerability Assessment integrieren PKI-Sicherheitstests in automatisierte Test-Suites\n• Certificate Validation-Tests überprüfen automatisch Certificate-Konfigurationen und -Gültigkeit\n• Security Scanning-Integration identifiziert PKI-bezogene Schwachstellen in Anwendungen\n• Penetration Testing-Automation führt regelmäßige PKI-Sicherheitstests durch\n• Compliance Testing-Frameworks validieren PKI-Implementierungen gegen Sicherheitsstandards\n\n⚡ Infrastructure-as-Code und PKI-Automation:\n• Infrastructure-as-Code und PKI-Automation verwalten PKI-Konfigurationen als versionierte Code-Artefakte\n• Terraform Provider-Integration ermöglicht deklarative PKI-Infrastruktur-Definition\n• Ansible Playbook-Integration automatisiert PKI-Deployment und -Konfiguration\n• Kubernetes Operator-Pattern verwaltet PKI-Ressourcen als native Kubernetes-Objekte\n• GitOps-Integration synchronisiert PKI-Konfigurationen automatisch mit Git-Repositories"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Rolle spielt PKI Software bei Zero Trust Architecture und modernen Sicherheitsmodellen?',
        answer: "PKI Software bildet das kryptographische Fundament für Zero Trust Architecture durch granulare Identity-Verification, kontinuierliche Authentication und policy-basierte Access Control. Es transformiert traditionelle perimeter-basierte Sicherheitsmodelle in adaptive, identity-zentrierte Vertrauensarchitekturen.\n\n🔐 Identity-centric Security und Continuous Verification:\n• Identity-centric Security und Continuous Verification etablieren PKI als primäres Vertrauensmodell für Zero Trust-Umgebungen\n• Device Identity-Management verwaltet eindeutige Certificate-basierte Identitäten für alle Endgeräte\n• User Certificate-Authentication ersetzt traditionelle Passwort-basierte Authentifizierung durch starke kryptographische Identitäten\n• Service-to-Service Authentication sichert Microservices-Kommunikation durch automatische Certificate-Rotation\n• Continuous Identity-Validation überprüft Certificate-Status in Echtzeit für adaptive Access Control\n\n🌐 Micro-Segmentation und Policy-based Access Control:\n• Micro-Segmentation und Policy-based Access Control nutzen PKI für granulare Netzwerk-Sicherheit\n• Certificate-based Network-Segmentation isoliert Netzwerk-Segmente basierend auf Certificate-Attributen\n• Dynamic Policy-Enforcement passt Zugriffskontrolle automatisch an Certificate-Eigenschaften an\n• Attribute-based Access Control nutzt Certificate-Metadaten für kontextuelle Autorisierungsentscheidungen\n• Risk-based Authentication adjustiert Sicherheitsanforderungen basierend auf Certificate-Vertrauensstufen\n\n📱 Endpoint Security und Device Trust:\n• Endpoint Security und Device Trust etablieren Certificate-basierte Geräteverifikation für Zero Trust-Compliance\n• Hardware Security Module-Integration verankert Device-Identitäten in manipulationssicherer Hardware\n• Mobile Device Management-Integration verwaltet Certificate-Lifecycle für mobile Endgeräte\n• IoT Device-Authentication sichert Internet-of-Things-Geräte durch automatische Certificate-Provisioning\n• Endpoint Detection-Integration korreliert Certificate-Events mit Endpoint-Sicherheitsdaten"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie gewährleistet PKI Software Interoperabilität und Standards-Compliance in heterogenen Umgebungen?',
        answer: "PKI Software gewährleistet nahtlose Interoperabilität durch Standards-konforme Implementierungen, Cross-Platform-Kompatibilität und adaptive Protocol-Unterstützung. Es verbindet verschiedene PKI-Ökosysteme und ermöglicht einheitliche Certificate-Management-Erfahrungen über Technologie-Grenzen hinweg.\n\n📋 Standards-Compliance und Protocol-Unterstützung:\n• Standards-Compliance und Protocol-Unterstützung gewährleisten Kompatibilität mit etablierten PKI-Standards und -Protokollen\n• X.509 Certificate-Standard-Compliance sichert universelle Certificate-Kompatibilität\n• PKCS Standards-Implementation unterstützt verschiedene Cryptographic Token-Interfaces\n• RFC-konforme Protocol-Implementation gewährleistet Interoperabilität mit Standard-PKI-Komponenten\n• FIPS Compliance-Validation erfüllt behördliche Kryptographie-Anforderungen\n\n🔄 Cross-Platform Integration und Vendor-Neutrality:\n• Cross-Platform Integration und Vendor-Neutrality eliminieren Vendor Lock-in und maximieren Flexibilität\n• Multi-Vendor CA-Integration verbindet verschiedene Certificate Authority-Systeme nahtlos\n• Legacy System-Compatibility ermöglicht Integration mit bestehenden PKI-Infrastrukturen\n• Cloud Provider-Agnostic Design funktioniert konsistent über verschiedene Cloud-Plattformen\n• Operating System-Independence gewährleistet einheitliche Funktionalität über verschiedene Betriebssysteme\n\n🌐 Federation und Trust Relationship-Management:\n• Federation und Trust Relationship-Management ermöglichen sichere Cross-Domain-Kommunikation\n• Cross-Certification-Support etabliert Vertrauensbeziehungen zwischen verschiedenen PKI-Domänen\n• Bridge CA-Integration verbindet isolierte PKI-Hierarchien über Trust-Bridges\n• External Trust-Validation überprüft Certificates von externen PKI-Providern automatisch\n• Policy Mapping-Engines übersetzen verschiedene Certificate-Policies für einheitliche Behandlung"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Disaster Recovery und Business Continuity-Strategien sind für PKI Software kritisch?',
        answer: "PKI Software Disaster Recovery und Business Continuity erfordern spezialisierte Strategien aufgrund der kritischen Rolle von PKI in Sicherheitsarchitekturen. Umfassende Backup-, Recovery- und Failover-Mechanismen gewährleisten kontinuierliche PKI-Verfügbarkeit auch bei schwerwiegenden Störungen.\n\n💾 PKI-specific Backup und Recovery-Strategien:\n• PKI-specific Backup und Recovery-Strategien berücksichtigen die einzigartigen Anforderungen kryptographischer Schlüssel und Certificates\n• Private Key-Backup mit Hardware Security Module-Integration schützt kritische Schlüsselmaterialien\n• Certificate Database-Replication gewährleistet konsistente Certificate-Daten über mehrere Standorte\n• CRL Distribution-Redundancy sichert kontinuierliche Certificate Revocation List-Verfügbarkeit\n• OCSP Responder-Clustering ermöglicht hochverfügbare Certificate-Status-Abfragen\n\n🔄 Multi-Site Redundancy und Geographic Distribution:\n• Multi-Site Redundancy und Geographic Distribution minimieren Single Points of Failure in PKI-Infrastrukturen\n• Active-Active CA-Deployment ermöglicht Load Balancing und automatisches Failover\n• Cross-Region Certificate-Synchronization gewährleistet globale Certificate-Konsistenz\n• Disaster Recovery Site-Activation stellt PKI-Services schnell an alternativen Standorten wieder her\n• Network Partition-Resilience ermöglicht PKI-Operationen auch bei Netzwerk-Segmentierung\n\n⚡ Automated Failover und Service Restoration:\n• Automated Failover und Service Restoration minimieren Downtime durch intelligente Automatisierung\n• Health Check-Monitoring erkennt PKI-Service-Ausfälle proaktiv und initiiert automatische Recovery\n• Load Balancer-Integration verteilt PKI-Traffic automatisch auf verfügbare Instanzen\n• Database Failover-Clustering gewährleistet kontinuierliche Certificate-Daten-Verfügbarkeit\n• Service Mesh-Integration ermöglicht resiliente PKI-Service-Kommunikation mit automatischem Retry"
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
