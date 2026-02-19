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
    console.log('Updating CRA Cyber Resilience Act Security by Default page with C-Level FAQs batch 4 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'cra-cyber-resilience-actsecurity-by-default' })
    
    if (!existingDoc) {
      throw new Error('Document "cra-cyber-resilience-actsecurity-by-default" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI Security by Default Frameworks für Multi-Cloud und Hybrid-Cloud Umgebungen, die gleichzeitig Cloud-Agnostic und CRA-konform sind?",
        answer: "Multi-Cloud und Hybrid-Cloud Strategien bringen einzigartige Sicherheitsherausforderungen mit sich, die traditionelle Security by Default Ansätze überfordern. ADVISORI entwickelt cloud-agnostische Security by Default Frameworks, die konsistente Sicherheitsstandards über verschiedene Cloud-Provider und On-Premise-Umgebungen hinweg gewährleisten, während sie CRA-Compliance sicherstellen.\n\n☁️ Cloud-Agnostic Security Architecture:\n• Universal Security Policies: Entwicklung provider-unabhängiger Sicherheitsrichtlinien, die automatisch in AWS, Azure, GCP und On-Premise-Umgebungen übersetzt und implementiert werden.\n• Cross-Cloud Identity and Access Management: Implementation einheitlicher IAM-Strategien, die Cloud-übergreifende Zugriffskontrolle und Identity Federation mit Security by Default Prinzipien verbinden.\n• Portable Security Configurations: Entwicklung von Infrastructure-as-Code Templates, die sichere Defaults unabhängig von der zugrunde liegenden Cloud-Plattform gewährleisten.\n• Multi-Cloud Compliance Orchestration: Aufbau automatisierter Compliance-Überwachung, die CRA-Anforderungen Cloud-übergreifend validiert und durchsetzt.\n\n🔄 Hybrid-Environment Security Integration:\n• Seamless Security Boundary Management: Implementation von Security by Default Prinzipien an Cloud-to-Cloud und Cloud-to-On-Premise Schnittstellen ohne Brüche in der Sicherheitsarchitektur.\n• Distributed Security Orchestration: Entwicklung zentralisierter Security-Management-Systeme, die lokale Security by Default Implementierungen in verschiedenen Umgebungen koordinieren.\n• Cross-Platform Security Telemetry: Aufbau einheitlicher Security-Monitoring und -Alerting-Systeme, die Sicherheitsereignisse aus verschiedenen Cloud-Umgebungen korrelieren und analysieren.\n• Adaptive Security Scaling: Implementation dynamischer Sicherheitsmechanismen, die sich automatisch an Workload-Migrationen zwischen verschiedenen Cloud-Umgebungen anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Strategien implementiert ADVISORI für Security by Default in containerisierten Umgebungen und Kubernetes-Clustern, um Container-spezifische Bedrohungen zu adressieren?",
        answer: "Container und Kubernetes haben die Art der Anwendungsbereitstellung revolutioniert, aber auch neue Angriffsvektoren und Sicherheitsherausforderungen geschaffen. ADVISORI entwickelt container-native Security by Default Strategien, die die ephemere und dynamische Natur von Container-Umgebungen berücksichtigen und gleichzeitig CRA-Compliance gewährleisten.\n\n🐳 Container-Native Security by Default:\n• Secure Container Image Pipelines: Implementation automatisierter Image-Building-Prozesse, die Security by Default Prinzipien in jede Container-Schicht einbetten und Vulnerability-Scanning integrieren.\n• Runtime Security Enforcement: Entwicklung von Runtime-Protection-Systemen, die anomales Container-Verhalten erkennen und automatisch sichere Defaults durchsetzen.\n• Immutable Infrastructure Principles: Aufbau unveränderlicher Container-Architekturen, die Security by Default durch Design garantieren und Post-Deployment-Kompromittierungen verhindern.\n• Container Registry Security: Implementation sicherer Container-Registry-Strategien mit automatisierter Signatur-Validierung und Compliance-Checking.\n\n⚙️ Kubernetes Security Orchestration:\n• Pod Security Standards Implementation: Automatische Durchsetzung von Kubernetes Pod Security Standards als Teil von Security by Default Konfigurationen.\n• Network Policy Automation: Entwicklung intelligenter Netzwerk-Segmentierung, die Mikro-Segmentierung und Zero-Trust-Prinzipien in Kubernetes-Clustern automatisiert.\n• RBAC Security by Default: Implementation granularer rollenbasierter Zugriffskontrolle, die Least-Privilege-Prinzipien standardmäßig durchsetzt.\n• Service Mesh Security Integration: Nahtlose Integration von Service Mesh Security (Istio, Linkerd) zur Durchsetzung von Security by Default in Service-to-Service-Kommunikation."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie adressiert ADVISORI die spezifischen Herausforderungen von Security by Default in industriellen IoT (IIoT) und operationalen Technologie (OT) Umgebungen, die traditionell sicherheitsfern entwickelt wurden?",
        answer: "Industrielle IoT (IIoT) und operationale Technologie (OT) Umgebungen stellen besondere Herausforderungen für Security by Default dar, da sie oft auf Legacy-Systemen basieren, die ursprünglich ohne Sicherheitsüberlegungen entwickelt wurden. ADVISORI entwickelt spezialisierte Security by Default Frameworks für IIoT/OT-Umgebungen, die operative Continuity mit moderner Cybersicherheit verbinden.\n\n🏭 Industrial Security by Default Transformation:\n• Legacy System Security Retrofit: Entwicklung von Security-Overlay-Architekturen, die bestehende IIoT-Systeme mit Security by Default Capabilities ausstatten, ohne operative Prozesse zu unterbrechen.\n• Air-Gap Bridge Security: Implementation sicherer Kommunikationsbrücken zwischen isolierten OT-Netzwerken und IT-Systemen mit automatischer Bedrohungserkennung.\n• Industrial Protocol Security: Hardening industrieller Kommunikationsprotokolle (Modbus, DNP3, OPC-UA) mit Security by Default Konfigurationen und Verschlüsselung.\n• Predictive Maintenance Security: Integration von Cybersicherheit in vorausschauende Wartungssysteme zur Erkennung sowohl mechanischer als auch cyber-bezogener Anomalien.\n\n⚡ Operational Continuity und Security Balance:\n• Zero-Downtime Security Implementation: Entwicklung von Sicherheitsupgrades, die kritische industrielle Prozesse nicht unterbrechen und High-Availability-Anforderungen erfüllen.\n• Safety-Security Convergence: Integration von Cybersicherheit (Security) mit funktionaler Sicherheit (Safety) zur Vermeidung von Konflikten zwischen beiden Domänen.\n• Real-Time Security Monitoring: Implementation von Echtzeit-Sicherheitsüberwachung, die mit den strikten Latenz-Anforderungen industrieller Systeme kompatibel ist.\n• Incident Response für kritische Infrastruktur: Entwicklung spezialisierter Incident-Response-Pläne, die sowohl Cybersicherheits- als auch operative Sicherheitsaspekte berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Welche innovativen Ansätze entwickelt ADVISORI für Security by Default in der Ära von Web3, Blockchain und dezentralen Anwendungen (dApps), wo traditionelle Sicherheitsmodelle nicht greifen?",
        answer: "Web3, Blockchain und dezentrale Anwendungen (dApps) stellen traditionelle Security-Paradigmen auf den Kopf und erfordern völlig neue Ansätze für Security by Default. ADVISORI entwickelt innovative Frameworks, die die dezentrale Natur von Web3 mit robusten Sicherheitsstandards und CRA-Compliance verbinden.\n\n🔗 Decentralized Security by Default Architecture:\n• Smart Contract Security Templates: Entwicklung vorkonfigurierter Smart Contract Templates mit eingebauten Security by Default Mustern, die häufige Vulnerabilities (Reentrancy, Integer Overflow) automatisch verhindern.\n• Decentralized Identity Management: Implementation selbst-souveräner Identitätssysteme, die Privacy by Design und Security by Default in dezentralen Umgebungen gewährleisten.\n• Cross-Chain Security Orchestration: Entwicklung sicherheitsübergreifender Mechanismen für Multi-Blockchain-Anwendungen, die konsistente Security by Default Standards chainübergreifend durchsetzen.\n• Consensus Mechanism Security: Integration von Security by Default Prinzipien in verschiedene Consensus-Algorithmen (PoS, PoA, DPoS) zur Stärkung der Netzwerksicherheit.\n\n🌐 Web3 Security Innovation Framework:\n• DAO Security Governance: Entwicklung von Security by Default Governance-Mechanismen für Decentralized Autonomous Organizations, die demokratische Entscheidungsfindung mit Sicherheitsstandards verbinden.\n• DeFi Security Protocols: Implementation automatisierter Sicherheitsmechanismen für DeFi-Anwendungen, die Liquiditäts- und Flash-Loan-Angriffe verhindern.\n• NFT Security Standards: Entwicklung von Security by Default Standards für NFT-Marktplätze und -Anwendungen, die Authentizität und Eigentumsrechte schützen.\n• Metaverse Security Architecture: Aufbau von Sicherheitsframeworks für virtuelle Welten und Metaverse-Anwendungen, die User Privacy und Asset Protection gewährleisten."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new C-Level FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ C-Level FAQs batch 4 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
