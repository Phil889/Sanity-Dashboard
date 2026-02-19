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
    console.log('Updating Public Key Infrastructure (PKI) page with FAQ batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'public-key-infrastructure-pki' })
    
    if (!existingDoc) {
      throw new Error('Document "public-key-infrastructure-pki" not found')
    }
    
    // Create new FAQs for implementation and operational aspects
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Rolle spielen Hardware Security Modules (HSM) in modernen PKI-Implementierungen und wie werden sie optimal eingesetzt?',
        answer: "Hardware Security Modules (HSM) bilden das Herzstück sicherer PKI-Implementierungen und bieten hardwarebasierte Sicherheit für die kritischsten kryptographischen Operationen. Als tamper-resistant Hardware-Geräte gewährleisten HSMs höchste Sicherheitsstandards für Schlüsselgenerierung, -speicherung und kryptographische Verarbeitung, die durch Software allein nicht erreichbar sind.\n\n🔐 Fundamentale HSM-Funktionen in PKI-Umgebungen:\n• Root CA Key Protection schützt die wertvollsten PKI-Schlüssel in FIPS 140-2 Level 3 oder 4 zertifizierter Hardware\n• High-Performance Cryptographic Operations ermöglichen schnelle Zertifikatssignierung auch bei hohen Durchsatzanforderungen\n• Secure Key Generation nutzt echte Hardware-Zufallszahlengeneratoren für kryptographisch starke Schlüssel\n• Tamper Detection und Response vernichten automatisch Schlüsselmaterial bei physischen Manipulationsversuchen\n• Authentication und Authorization kontrollieren granular den Zugriff auf kryptographische Funktionen\n\n🏗️ HSM-Architektur und Deployment-Modelle:\n• Network-Attached HSMs bieten zentrale kryptographische Services für verteilte PKI-Infrastrukturen\n• PCIe Card HSMs integrieren sich direkt in CA-Server für optimale Performance und niedrige Latenz\n• USB Token HSMs ermöglichen portable, sichere Schlüsselspeicherung für kleinere Implementierungen\n• Cloud HSM Services kombinieren Hardware-Sicherheit mit Cloud-Skalierbarkeit und -flexibilität\n• Clustered HSM Deployments gewährleisten High Availability und Load Distribution für kritische PKI-Services\n\n⚡ Performance-Optimierung und Skalierung:\n• Load Balancing verteilt kryptographische Operationen optimal auf mehrere HSM-Instanzen\n• Connection Pooling minimiert Overhead durch effiziente Verwaltung von HSM-Verbindungen\n• Batch Processing optimiert Durchsatz durch Gruppierung ähnlicher kryptographischer Operationen\n• Caching Strategies reduzieren HSM-Load durch intelligente Zwischenspeicherung häufig verwendeter Daten\n• Performance Monitoring überwacht kontinuierlich HSM-Auslastung und identifiziert Optimierungspotenziale\n\n🔧 Integration und API-Management:\n• PKCS#11 Standard Interface gewährleistet Kompatibilität mit verschiedenen PKI-Anwendungen und -plattformen\n• REST API Integration ermöglicht moderne, webbasierte Anwendungsintegration\n• SDK und Libraries vereinfachen Entwicklung HSM-integrierter Anwendungen\n• Middleware Solutions abstrahieren HSM-Komplexität für einfachere Anwendungsentwicklung\n• Multi-Vendor Support vermeidet Vendor Lock-in durch standardisierte Schnittstellen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie werden PKI-Services in Cloud-Umgebungen implementiert und welche besonderen Sicherheitsüberlegungen sind dabei zu beachten?',
        answer: "Cloud-basierte PKI-Implementierungen bieten Skalierbarkeit, Flexibilität und Kosteneffizienz, erfordern jedoch spezielle Sicherheitsarchitekturen und Governance-Modelle. Die Migration von PKI-Services in die Cloud oder die Implementierung nativer Cloud-PKI-Lösungen bringt einzigartige Herausforderungen und Chancen mit sich.\n\n☁️ Cloud PKI-Architektur und Service-Modelle:\n• Infrastructure as a Service (IaaS) PKI ermöglicht vollständige Kontrolle über PKI-Software und -konfiguration\n• Platform as a Service (PaaS) PKI bietet verwaltete PKI-Plattformen mit reduzierten Betriebsanforderungen\n• Software as a Service (SaaS) PKI liefert vollständig verwaltete PKI-Services mit minimaler interner Komplexität\n• Hybrid Cloud PKI kombiniert On-Premises Root CAs mit Cloud-basierten Issuing CAs für optimale Sicherheit\n• Multi-Cloud PKI Strategies verteilen PKI-Services auf mehrere Cloud-Provider für erhöhte Resilienz\n\n🛡️ Cloud-spezifische Sicherheitsmaßnahmen:\n• Cloud HSM Integration nutzt Cloud-native Hardware Security Modules für sichere Schlüsselverwaltung\n• Identity and Access Management (IAM) Integration verbindet PKI-Services mit Cloud-nativen Identitätssystemen\n• Network Security Groups und Virtual Private Clouds isolieren PKI-Services von öffentlichen Netzwerken\n• Encryption in Transit und at Rest schützt PKI-Daten während Übertragung und Speicherung\n• Cloud Security Monitoring überwacht kontinuierlich PKI-Services auf Sicherheitsbedrohungen\n\n🔐 Data Sovereignty und Compliance:\n• Geographic Data Residency gewährleistet Einhaltung lokaler Datenschutzbestimmungen\n• Compliance Certifications validieren Cloud-Provider-Sicherheit gegen relevante Standards\n• Data Classification und Handling definiert angemessene Schutzmaßnahmen für verschiedene PKI-Datentypen\n• Audit Trails und Logging erfüllen regulatorische Anforderungen für PKI-Aktivitätsnachweise\n• Cross-Border Data Transfer Agreements regeln internationale PKI-Datenübertragungen\n\n📈 Skalierung und Performance-Optimierung:\n• Auto-Scaling ermöglicht automatische Anpassung der PKI-Kapazität an schwankende Anforderungen\n• Content Delivery Networks (CDN) optimieren globale Verteilung von Zertifikaten und CRL/OCSP-Services\n• Load Balancing verteilt PKI-Anfragen optimal auf verfügbare Cloud-Ressourcen\n• Caching Strategies reduzieren Latenz und verbessern Performance von PKI-Services\n• Performance Monitoring und Analytics optimieren kontinuierlich Cloud-PKI-Performance"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Automatisierungsstrategien und DevOps-Praktiken sind für moderne PKI-Operationen essentiell?',
        answer: "Moderne PKI-Operationen erfordern umfassende Automatisierung und DevOps-Integration, um Skalierbarkeit, Konsistenz und Sicherheit zu gewährleisten. Manuelle PKI-Prozesse sind fehleranfällig, zeitaufwändig und nicht skalierbar, weshalb Automatisierung für erfolgreiche PKI-Implementierungen unerlässlich ist.\n\n🤖 Certificate Lifecycle Automation:\n• Automated Certificate Enrollment ermöglicht selbstständige Zertifikatsanforderung durch Anwendungen und Services\n• Auto-Renewal Processes verhindern Zertifikatsabläufe durch proaktive, automatische Erneuerung\n• Certificate Discovery und Inventory Management identifizieren und verwalten automatisch alle organisationsweiten Zertifikate\n• Validation Automation überprüft automatisch Zertifikatsanforderungen gegen definierte Richtlinien\n• Deployment Automation installiert und konfiguriert Zertifikate automatisch in Zielanwendungen\n\n🔧 Infrastructure as Code (IaC) für PKI:\n• PKI Infrastructure Provisioning definiert PKI-Komponenten als Code für konsistente, wiederholbare Deployments\n• Configuration Management gewährleistet einheitliche PKI-Konfigurationen durch Code-basierte Verwaltung\n• Version Control für PKI-Konfigurationen ermöglicht Änderungsverfolgung und Rollback-Fähigkeiten\n• Automated Testing validiert PKI-Konfigurationen vor Produktionsdeployment\n• Environment Consistency gewährleistet identische PKI-Setups in Entwicklung, Test und Produktion\n\n🚀 CI/CD Integration für PKI:\n• Pipeline Integration einbettet PKI-Operationen in bestehende CI/CD-Workflows\n• Automated Security Testing validiert PKI-Sicherheit als Teil des Deployment-Prozesses\n• Certificate Validation in Build Processes überprüft Zertifikatsgültigkeit vor Anwendungsdeployment\n• Rollback Capabilities ermöglichen schnelle Wiederherstellung bei PKI-Deployment-Problemen\n• Deployment Orchestration koordiniert komplexe PKI-Updates über mehrere Systeme hinweg\n\n📊 Monitoring und Observability Automation:\n• Automated Health Checks überwachen kontinuierlich PKI-Service-Verfügbarkeit und -performance\n• Certificate Expiration Monitoring warnt proaktiv vor ablaufenden Zertifikaten\n• Security Event Correlation identifiziert automatisch PKI-Sicherheitsvorfälle\n• Performance Metrics Collection sammelt kontinuierlich PKI-Performance-Daten\n• Automated Alerting benachrichtigt Teams sofort bei PKI-Problemen oder Anomalien"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie wird die Interoperabilität zwischen verschiedenen PKI-Systemen und -standards gewährleistet?',
        answer: "PKI-Interoperabilität ist entscheidend für organisationsübergreifende Zusammenarbeit und die Integration verschiedener Systeme und Technologien. Erfolgreiche Interoperabilität erfordert sorgfältige Planung, Standardkonformität und umfassende Testing-Strategien.\n\n🌐 Standards-basierte Interoperabilität:\n• X.509 Certificate Standards gewährleisten grundlegende Zertifikatskompatibilität zwischen verschiedenen PKI-Implementierungen\n• PKCS Standards (Public Key Cryptography Standards) definieren einheitliche Formate für kryptographische Objekte\n• RFC-konforme Implementierungen stellen sicher, dass PKI-Services Internet-Standards befolgen\n• ASN.1 Encoding Standards ermöglichen konsistente Datenrepräsentation zwischen verschiedenen Systemen\n• Algorithm Identifier Standards gewährleisten einheitliche kryptographische Algorithmus-Verwendung\n\n🔗 Cross-Certification und Trust Models:\n• Hierarchical Trust Models etablieren Vertrauensbeziehungen zwischen verschiedenen PKI-Hierarchien\n• Cross-Certification Agreements ermöglichen gegenseitige Anerkennung zwischen unabhängigen PKI-Systemen\n• Bridge CA Implementations verbinden verschiedene PKI-Domänen durch zentrale Vertrauensinstanzen\n• Mesh Trust Models ermöglichen flexible, dezentrale Vertrauensbeziehungen\n• Trust Anchor Management koordiniert Vertrauensanker zwischen verschiedenen PKI-Implementierungen\n\n🔧 Technical Integration Strategies:\n• API Standardization ermöglicht einheitliche Schnittstellen zwischen verschiedenen PKI-Systemen\n• Protocol Compatibility gewährleistet Kommunikation zwischen verschiedenen PKI-Implementierungen\n• Data Format Conversion übersetzt zwischen verschiedenen Zertifikats- und Schlüsselformaten\n• Middleware Solutions abstrahieren Unterschiede zwischen verschiedenen PKI-Systemen\n• Gateway Services vermitteln zwischen inkompatiblen PKI-Implementierungen\n\n🧪 Testing und Validation:\n• Interoperability Testing validiert Kompatibilität zwischen verschiedenen PKI-Systemen\n• Conformance Testing überprüft Standards-Compliance von PKI-Implementierungen\n• Cross-Platform Validation testet PKI-Funktionalität auf verschiedenen Betriebssystemen und Plattformen\n• Load Testing unter Interoperabilitätsbedingungen validiert Performance bei systemübergreifender Nutzung\n• Security Testing überprüft Sicherheit bei PKI-System-Integration"
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
