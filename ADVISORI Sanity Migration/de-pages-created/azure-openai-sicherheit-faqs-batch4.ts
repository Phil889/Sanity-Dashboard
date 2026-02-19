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
    console.log('Updating Azure OpenAI Sicherheit page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'azure-openai-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "azure-openai-sicherheit" not found')
    }
    
    // Create new FAQs focusing on technical security architecture
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Welche spezifischen Netzwerkarchitekturen implementiert ADVISORI für sichere Azure OpenAI Verbindungen und wie werden Zero-Trust-Prinzipien in Cloud-AI-Umgebungen umgesetzt?",
        answer: "Sichere Netzwerkarchitekturen für Azure OpenAI erfordern einen ganzheitlichen Ansatz, der traditionelle Perimeter-Sicherheit mit modernen Zero-Trust-Prinzipien verbindet. ADVISORI entwickelt mehrstufige Netzwerksicherheitskonzepte, die sowohl Performance als auch höchste Sicherheitsstandards gewährleisten. Unser Ansatz schafft sichere, skalierbare und manageable Netzwerkumgebungen für Cloud-AI.\n\n🔐 Zero-Trust-Architektur-Prinzipien für Cloud-AI:\n• Never-Trust-Always-Verify: Implementierung von Authentifizierungs- und Autorisierungsmechanismen für jeden Zugriff auf Azure OpenAI Services, unabhängig von der Quelle oder dem Standort der Anfrage.\n• Least-Privilege-Access: Granulare Zugriffskontrollen, die nur die minimal notwendigen Berechtigungen für spezifische AI-Operationen gewähren und dabei Prinzipien der Rollentrennung befolgen.\n• Micro-Segmentation: Implementierung feingranularer Netzwerksegmentierung, die AI-Workloads von anderen Systemen isoliert und laterale Bewegungen von Angreifern verhindert.\n• Continuous-Verification: Kontinuierliche Überwachung und Validierung von Netzwerkverbindungen und Zugriffsmustern für frühzeitige Erkennung anomaler Aktivitäten.\n\n🌐 ADVISORI's Advanced-Network-Security-Architecture:\n• Private-Endpoint-Excellence: Deployment von Azure Private Endpoints für OpenAI Services, die sicherstellen, dass Datenverkehr niemals das öffentliche Internet durchläuft und vollständig innerhalb des Azure-Backbones verbleibt.\n• VPN-and-ExpressRoute-Integration: Integration mit bestehenden VPN- oder Azure ExpressRoute-Verbindungen für sichere, dedizierte Konnektivität zwischen On-Premises-Umgebungen und Azure OpenAI.\n• Network-Security-Groups-Optimization: Konfiguration fortschrittlicher Network Security Groups mit präzisen Regeln für AI-spezifischen Datenverkehr und automatisierte Threat-Detection.\n• Application-Gateway-and-WAF-Protection: Implementierung von Azure Application Gateway mit Web Application Firewall für zusätzlichen Schutz vor Application-Layer-Angriffen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Wie implementiert ADVISORI End-to-End-Verschlüsselung für Azure OpenAI Datenflüsse und welche Schlüsselmanagement-Strategien werden für höchste Sicherheitsanforderungen eingesetzt?",
        answer: "End-to-End-Verschlüsselung für Azure OpenAI erfordert einen umfassenden Ansatz, der Daten in allen Zuständen schützt – at rest, in transit und in use. ADVISORI implementiert fortschrittliche Kryptographie-Strategien mit robusten Schlüsselmanagement-Systemen, die höchste Sicherheitsstandards erfüllen und gleichzeitig operative Effizienz gewährleisten.\n\n🔒 Comprehensive-Encryption-Strategy:\n• Data-at-Rest-Protection: Implementierung von Azure Storage Service Encryption mit Customer-Managed Keys für vollständige Kontrolle über Verschlüsselungsschlüssel und Compliance mit strengsten Datenschutzanforderungen.\n• Transit-Encryption-Excellence: Nutzung von TLS-Verschlüsselung für alle Datenübertragungen mit Perfect Forward Secrecy und regelmäßigen Schlüsselrotationen für maximale Sicherheit.\n• In-Use-Encryption-Capabilities: Deployment von Azure Confidential Computing für Verschlüsselung von Daten während der Verarbeitung, einschließlich Hardware-basierter Trusted Execution Environments.\n• Application-Layer-Encryption: Implementierung zusätzlicher Verschlüsselungsebenen auf Anwendungsebene für sensible Datenelemente vor der Übertragung an Azure OpenAI.\n\n🗝️ ADVISORI's Advanced-Key-Management-Excellence:\n• Azure-Key-Vault-Integration: Zentrale Verwaltung aller Verschlüsselungsschlüssel über Azure Key Vault mit Hardware Security Module-Unterstützung für höchste Sicherheitsanforderungen.\n• Multi-Tenant-Key-Isolation: Implementierung strikter Schlüsseltrennung zwischen verschiedenen Mandanten oder Anwendungen für vollständige Datenisolation.\n• Automated-Key-Rotation: Deployment automatisierter Schlüsselrotations-Mechanismen mit konfigurierbaren Zyklen und Notfall-Rotation-Capabilities.\n• Backup-and-Recovery-Strategies: Entwicklung umfassender Backup- und Recovery-Strategien für Verschlüsselungsschlüssel mit geografisch verteilten, sicheren Speicherorten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Welche Identity-and-Access-Management-Strategien implementiert ADVISORI für Azure OpenAI und wie werden privilegierte Zugriffe auf AI-Systeme kontrolliert und überwacht?",
        answer: "Identity and Access Management für Azure OpenAI erfordert spezialisierte Ansätze, die die einzigartigen Herausforderungen von AI-Systemen adressieren. ADVISORI entwickelt umfassende IAM-Strategien, die granulare Zugriffskontrollen mit kontinuierlicher Überwachung verbinden und dabei höchste Sicherheits- und Compliance-Standards erfüllen.\n\n👤 Advanced-Identity-Management-Architecture:\n• Multi-Factor-Authentication-Excellence: Implementierung adaptiver MFA-Systeme, die Risikobewertungen basierend auf Benutzerverhalten, Standort und Zugriffsmustern durchführen.\n• Privileged-Identity-Management: Deployment von Azure PIM für Just-in-Time-Zugriff auf kritische AI-Ressourcen mit zeitlich begrenzten, genehmigungsbasierten Berechtigungen.\n• Service-Principal-Security: Sichere Konfiguration von Service Principals für Anwendungszugriffe mit minimalen Berechtigungen und regelmäßigen Credential-Rotationen.\n• Conditional-Access-Policies: Entwicklung intelligenter Conditional-Access-Richtlinien, die Zugriff basierend auf Risikofaktoren, Gerätestatus und Compliance-Status gewähren oder verweigern.\n\n🔍 ADVISORI's Access-Control-and-Monitoring-Excellence:\n• Role-Based-Access-Control-Optimization: Design granularer RBAC-Modelle, die spezifische AI-Operationen und -Ressourcen berücksichtigen und Prinzipien der Rollentrennung durchsetzen.\n• Privileged-Access-Monitoring: Kontinuierliche Überwachung aller privilegierten Zugriffe auf Azure OpenAI mit Real-time-Alerting bei anomalen Aktivitäten oder Richtlinienverletzungen.\n• Access-Review-and-Certification: Implementierung regelmäßiger Access-Reviews und Zertifizierungsprozesse für alle AI-bezogenen Berechtigungen mit automatisierten Workflows.\n• Identity-Governance-Integration: Integration von Identity-Governance-Prozessen in AI-Lifecycle-Management für konsistente Sicherheitsstandards über alle AI-Initiativen hinweg."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie gewährleistet ADVISORI die Sicherheit von Azure OpenAI APIs und welche spezifischen Maßnahmen werden gegen API-basierte Angriffe und Missbrauch implementiert?",
        answer: "API-Sicherheit für Azure OpenAI ist ein kritischer Erfolgsfaktor, da APIs die primären Schnittstellen für AI-Interaktionen darstellen. ADVISORI entwickelt umfassende API-Security-Strategien, die sowohl technische Schutzmaßnahmen als auch operative Kontrollen umfassen und dabei Performance und Benutzerfreundlichkeit erhalten.\n\n🛡️ Comprehensive-API-Security-Framework:\n• API-Gateway-Protection: Deployment fortschrittlicher API-Gateways mit integrierter Threat-Protection, Rate-Limiting und Request-Validation für umfassenden Schutz vor API-basierten Angriffen.\n• Authentication-and-Authorization-Excellence: Implementierung robuster API-Authentifizierung mit OAuth-Token, API-Keys und Certificate-based Authentication für verschiedene Anwendungsszenarien.\n• Input-Validation-and-Sanitization: Strenge Validierung und Bereinigung aller API-Inputs zur Verhinderung von Injection-Angriffen und Datenmanipulation.\n• Output-Filtering-and-DLP: Implementierung von Data Loss Prevention-Mechanismen, die sensible Informationen in API-Responses identifizieren und filtern.\n\n⚡ ADVISORI's API-Threat-Mitigation-Excellence:\n• Rate-Limiting-and-Throttling: Intelligente Rate-Limiting-Strategien, die legitime Nutzung ermöglichen, während sie Missbrauch und DoS-Angriffe verhindern.\n• API-Anomaly-Detection: Deployment von Machine Learning-basierten Systemen zur Erkennung anomaler API-Nutzungsmuster und potenzieller Sicherheitsbedrohungen.\n• API-Logging-and-Monitoring: Umfassende Protokollierung aller API-Aktivitäten mit Real-time-Monitoring und automatisierten Alerting-Mechanismen.\n• API-Versioning-and-Deprecation-Security: Sichere Verwaltung von API-Versionen mit kontrollierten Deprecation-Prozessen und Backward-Compatibility-Sicherheitsüberprüfungen."
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
    console.log('✅ Azure OpenAI Sicherheit FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
