import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'wwmm9rbb',
  dataset: 'production',
  apiVersion: '2024-02-14',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function generateKey(prefix: string, index: number): string {
  return `${prefix}_${Date.now()}_${index}`
}

const run = async () => {
  try {
    console.log('Updating PKI Infrastructure page with FAQ batch 4...')
    
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'pki-infrastructure' })
    
    if (!existingDoc) {
      throw new Error('Document "pki-infrastructure" not found')
    }
    
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Compliance-Anforderungen müssen bei PKI-Implementierungen beachtet werden?',
        answer: "PKI-Compliance umfasst ein breites Spektrum regulatorischer, branchenspezifischer und internationaler Anforderungen, die je nach Anwendungsbereich und geografischer Lage variieren. Erfolgreiche PKI-Implementierungen müssen diese Anforderungen von Beginn an berücksichtigen.\n\n📋 Regulatorische Frameworks:\n• eIDAS Regulation definiert europäische Standards für elektronische Identifizierung und Vertrauensdienste\n• GDPR/DSGVO Compliance erfordert Datenschutz-konforme PKI-Implementierung\n• SOX Compliance für Finanzunternehmen mit strengen Audit-Anforderungen\n• HIPAA Requirements für Gesundheitswesen mit besonderen Datenschutzbestimmungen\n• PCI DSS Standards für Zahlungskartenindustrie\n\n🏛️ Government und Public Sector:\n• Common Criteria Evaluations für Regierungs-PKI-Systeme\n• FIPS 140-2 Compliance für US-Bundesbehörden\n• BSI TR-03116 für deutsche Behörden und kritische Infrastrukturen\n• ANSSI Zertifizierung für französische Regierungssysteme\n• NATO Standards für militärische und Verteidigungs-PKI\n\n🔒 Industry-spezifische Standards:\n• WebTrust for CAs definiert Audit-Kriterien für kommerzielle Certificate Authorities\n• CA/Browser Forum Baseline Requirements für SSL/TLS-Zertifikate\n• ETSI Standards für europäische Trust Service Providers\n• ICAO PKI für Machine Readable Travel Documents\n• 3GPP Standards für Mobilfunk-PKI-Anwendungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie wird PKI-Performance optimiert und skaliert?',
        answer: "PKI-Performance-Optimierung erfordert einen ganzheitlichen Ansatz, der Hardware, Software, Netzwerk und Architektur-Design berücksichtigt. Skalierbare PKI-Systeme müssen wachsende Anforderungen ohne Performance-Degradation bewältigen.\n\n⚡ Hardware-Optimierung:\n• HSM Performance Tuning maximiert kryptographische Durchsatzraten\n• Multi-Core Processing nutzt parallele Verarbeitung für Zertifikatsoperationen\n• SSD Storage reduziert Latenz bei Datenbankzugriffen\n• Network Interface Optimization minimiert Netzwerk-Bottlenecks\n• Memory Optimization reduziert Speicher-Fragmentierung\n\n🏗️ Architektur-Skalierung:\n• Load Balancing verteilt PKI-Anfragen auf mehrere Server-Instanzen\n• Horizontal Scaling fügt zusätzliche PKI-Server bei Bedbedarf hinzu\n• Caching Strategies reduzieren wiederholte Berechnungen\n• Database Sharding verteilt PKI-Daten auf mehrere Datenbank-Instanzen\n• CDN Integration beschleunigt CRL und OCSP-Verteilung\n\n📊 Performance Monitoring:\n• Real-time Metrics überwachen Durchsatz und Latenz kontinuierlich\n• Bottleneck Analysis identifiziert Performance-Engpässe\n• Capacity Planning prognostiziert zukünftige Anforderungen\n• SLA Monitoring gewährleistet Service-Level-Agreements\n• Automated Alerting benachrichtigt bei Performance-Problemen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Sicherheitsbedrohungen gibt es für PKI-Systeme und wie werden sie abgewehrt?',
        answer: "PKI-Systeme sind attraktive Ziele für Angreifer, da sie das Vertrauensfundament digitaler Infrastrukturen bilden. Umfassende Sicherheitsmaßnahmen müssen verschiedene Bedrohungsvektoren abdecken.\n\n🎯 Angriffsvektoren:\n• CA Compromise bedroht das gesamte Vertrauensmodell der PKI\n• Man-in-the-Middle Attacks nutzen gefälschte Zertifikate\n• Certificate Spoofing imitiert legitime Zertifikate\n• Key Extraction Attacks zielen auf private Schlüssel\n• Social Engineering gegen PKI-Administratoren\n\n🛡️ Defensive Maßnahmen:\n• Multi-Factor Authentication für alle PKI-Administratoren\n• HSM Protection schützt kritische private Schlüssel\n• Certificate Transparency Logs ermöglichen Überwachung ausgestellter Zertifikate\n• OCSP Stapling reduziert Angriffsfläche bei Revocation-Checks\n• Network Segmentation isoliert PKI-Komponenten\n\n🔍 Monitoring und Detection:\n• Anomaly Detection identifiziert ungewöhnliche PKI-Aktivitäten\n• Certificate Validation Monitoring überwacht Validierungsfehler\n• Threat Intelligence Integration korreliert PKI-Events mit bekannten Bedrohungen\n• Incident Response Procedures definieren Reaktion auf PKI-Sicherheitsvorfälle\n• Forensic Capabilities ermöglichen Analyse von Sicherheitsverletzungen"
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie wird PKI in DevOps und CI/CD-Pipelines integriert?',
        answer: "PKI-Integration in DevOps-Workflows ermöglicht sichere, automatisierte Software-Entwicklung und -Deployment. Moderne CI/CD-Pipelines nutzen PKI für Code-Signing, Container-Sicherheit und Infrastructure-as-Code.\n\n🔧 CI/CD Pipeline Integration:\n• Code Signing Automation signiert Software-Artefakte automatisch während Build-Prozessen\n• Container Image Signing gewährleistet Integrität von Docker-Images\n• Infrastructure-as-Code Signing schützt Terraform und Ansible-Skripte\n• Artifact Repository Security nutzt PKI für sichere Artefakt-Speicherung\n• Deployment Verification validiert signierte Komponenten vor Deployment\n\n🏗️ Infrastructure Automation:\n• Certificate Provisioning APIs automatisieren Zertifikatsanforderung und -installation\n• Kubernetes Integration nutzt PKI für Pod-zu-Pod-Kommunikation\n• Service Mesh Security implementiert mTLS zwischen Microservices\n• Secrets Management integriert PKI-Zertifikate in Vault oder ähnliche Systeme\n• GitOps Workflows verwalten PKI-Konfigurationen in Versionskontrolle\n\n📊 Monitoring und Compliance:\n• Automated Compliance Checks validieren PKI-Konfigurationen kontinuierlich\n• Security Scanning integriert PKI-Zertifikatsprüfungen in Security-Pipelines\n• Audit Logging dokumentiert alle PKI-Operationen in CI/CD-Prozessen\n• Performance Metrics messen Auswirkungen von PKI auf Pipeline-Performance\n• Rollback Capabilities ermöglichen schnelle Rückkehr bei PKI-Problemen"
      }
    ]
    
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
