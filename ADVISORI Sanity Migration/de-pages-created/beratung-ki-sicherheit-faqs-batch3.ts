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
    console.log('Updating Beratung KI-Sicherheit page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'beratung-ki-sicherheit' })
    
    if (!existingDoc) {
      throw new Error('Document "beratung-ki-sicherheit" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: 'Wie können Unternehmen ihre AI-Supply-Chain absichern und welche Risiken entstehen durch Third-Party AI-Services und -Modelle?',
        answer: "Die AI-Supply-Chain stellt eine oft übersehene, aber kritische Sicherheitsdimension dar, da Unternehmen zunehmend auf externe AI-Services, Pre-trained Models und Third-Party-Komponenten angewiesen sind. Diese Abhängigkeiten können erhebliche Sicherheitsrisiken schaffen, die über traditionelle Vendor-Management-Ansätze hinausgehen. ADVISORI entwickelt umfassende AI-Supply-Chain-Security-Strategien, die diese komplexen Risiken adressieren.\n\n🔗 AI-Supply-Chain Vulnerabilities:\n• Model Provenance und Integrity: Sicherstellung der Authentizität und Integrität von Third-Party AI-Modellen, einschließlich Verifikation der Trainingsverfahren und Datenquellen.\n• Dependency Vulnerabilities: Identifikation und Management von Sicherheitslücken in AI-Frameworks, Bibliotheken und Dependencies, die in der gesamten AI-Pipeline verwendet werden.\n• Vendor Lock-in Risks: Bewertung und Mitigation von Risiken, die durch übermäßige Abhängigkeit von einzelnen AI-Service-Providern entstehen.\n• Data Sovereignty Concerns: Gewährleistung der Kontrolle über sensible Daten bei der Nutzung externer AI-Services und Cloud-basierter ML-Plattformen.\n\n🛡️ ADVISORI's Supply Chain Security Framework:\n• Comprehensive Vendor Assessment: Entwicklung spezialisierter Bewertungskriterien für AI-Vendor, die über traditionelle IT-Security-Assessments hinausgehen und AI-spezifische Risiken berücksichtigen.\n• Model Validation und Testing: Implementierung rigoroser Testverfahren für externe AI-Modelle, einschließlich Adversarial Testing und Performance Validation.\n• Secure Integration Patterns: Entwicklung sicherer Architekturmuster für die Integration externer AI-Services, die Isolation und Kontrolle gewährleisten.\n• Continuous Supply Chain Monitoring: Etablierung kontinuierlicher Überwachung der AI-Supply-Chain auf Sicherheitsupdates, Vulnerabilities und Compliance-Änderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche spezifischen Sicherheitsanforderungen gelten für AI-Systeme in regulierten Branchen und wie unterstützt ADVISORI bei der Compliance?',
        answer: "Regulierte Branchen wie Finanzdienstleistungen, Gesundheitswesen und Automobilindustrie stehen vor besonderen Herausforderungen bei der sicheren Implementierung von AI-Systemen. Diese Sektoren müssen nicht nur allgemeine AI-Sicherheitsstandards erfüllen, sondern auch branchenspezifische Regulierungen beachten. ADVISORI entwickelt maßgeschneiderte Compliance-Strategien, die sowohl Innovation ermöglichen als auch regulatorische Anforderungen vollständig erfüllen.\n\n📋 Branchenspezifische AI-Compliance-Anforderungen:\n• Financial Services: Einhaltung von Basel III, MiFID II und anderen Finanzregulierungen bei AI-gestützten Trading-Algorithmen, Kreditentscheidungen und Risikobewertungen.\n• Healthcare: Compliance mit HIPAA, FDA-Richtlinien und Medizinproduktegesetzen für AI-basierte Diagnose- und Behandlungssysteme.\n• Automotive: Erfüllung von ISO 26262 und anderen Sicherheitsstandards für AI in autonomen Fahrzeugen und Fahrerassistenzsystemen.\n• Critical Infrastructure: Beachtung von NIS2, KRITIS und anderen Schutzvorschriften für AI in kritischen Infrastrukturen.\n\n🏛️ ADVISORI's Regulatory Compliance Approach:\n• Sector-Specific Expertise: Tiefes Verständnis für die regulatorischen Landschaften verschiedener Branchen und deren spezifische AI-Anforderungen.\n• Compliance-by-Design: Integration regulatorischer Anforderungen in den AI-Entwicklungsprozess von Anfang an, nicht als nachgelagerte Compliance-Übung.\n• Audit-Ready Documentation: Entwicklung umfassender Dokumentationsstandards, die regulatorische Audits und Inspektionen unterstützen.\n• Regulatory Change Management: Kontinuierliche Überwachung regulatorischer Entwicklungen und proaktive Anpassung der AI-Systeme an neue Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie implementiert ADVISORI Zero-Trust-Prinzipien für AI-Infrastrukturen und welche besonderen Herausforderungen entstehen dabei?',
        answer: "Zero-Trust-Architekturen für AI-Infrastrukturen erfordern einen grundlegend anderen Ansatz als traditionelle Zero-Trust-Implementierungen, da AI-Systeme einzigartige Vertrauens- und Verifikationsherausforderungen mit sich bringen. ADVISORI entwickelt spezialisierte Zero-Trust-Frameworks, die die dynamische Natur von AI-Workloads berücksichtigen und gleichzeitig höchste Sicherheitsstandards gewährleisten.\n\n🔒 Zero-Trust Challenges für AI-Systeme:\n• Dynamic Trust Evaluation: Entwicklung von Mechanismen zur kontinuierlichen Bewertung der Vertrauenswürdigkeit von AI-Modellen und deren Entscheidungen in Echtzeit.\n• Model Identity und Authentication: Implementierung robuster Identitäts- und Authentifizierungssysteme für AI-Modelle, die über traditionelle User-Authentication hinausgehen.\n• Data Flow Verification: Kontinuierliche Verifikation und Autorisierung von Datenflüssen zwischen verschiedenen AI-Komponenten und -Services.\n• Micro-Segmentation für AI: Entwicklung granularer Netzwerksegmentierung, die AI-spezifische Kommunikationsmuster und -anforderungen berücksichtigt.\n\n🛡️ ADVISORI's Zero-Trust AI Architecture:\n• Continuous Model Verification: Implementierung kontinuierlicher Verifikationsprozesse für AI-Modelle, die deren Integrität und Performance in Echtzeit überwachen.\n• Least Privilege für AI: Anwendung von Least-Privilege-Prinzipien auf AI-Systeme, einschließlich granularer Zugriffskontrolle auf Daten, Modelle und Compute-Ressourcen.\n• Encrypted AI Pipelines: End-to-End-Verschlüsselung von AI-Datenverarbeitungspipelines, einschließlich Homomorphic Encryption für Privacy-Preserving AI.\n• Behavioral Analytics für AI: Einsatz von Behavioral Analytics zur Erkennung anomaler Aktivitäten in AI-Systemen und automatische Anpassung von Trust-Levels."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Rolle spielt Incident Response bei AI-Sicherheitsvorfällen und wie entwickelt ADVISORI spezialisierte Response-Strategien?',
        answer: "AI-Sicherheitsvorfälle erfordern spezialisierte Incident Response-Strategien, die über traditionelle Cybersecurity-Reaktionspläne hinausgehen. AI-spezifische Vorfälle können subtil sein, schwer zu erkennen und komplexe Auswirkungen auf Geschäftsprozesse haben. ADVISORI entwickelt maßgeschneiderte AI-Incident-Response-Frameworks, die schnelle Erkennung, effektive Eindämmung und vollständige Wiederherstellung gewährleisten.\n\n🚨 AI-Specific Incident Types:\n• Model Compromise: Erkennung und Reaktion auf kompromittierte AI-Modelle, einschließlich Backdoor-Angriffe und Model Poisoning.\n• Data Leakage Incidents: Spezielle Verfahren für Vorfälle, bei denen AI-Systeme unbeabsichtigt sensible Informationen preisgeben.\n• Adversarial Attack Response: Schnelle Identifikation und Neutralisierung von Adversarial Attacks auf produktive AI-Systeme.\n• AI System Failures: Reaktion auf kritische AI-Systemausfälle, die Geschäftsprozesse beeinträchtigen oder Sicherheitsrisiken schaffen.\n\n🔄 ADVISORI's AI Incident Response Framework:\n• Specialized Detection Capabilities: Entwicklung AI-spezifischer Erkennungssysteme, die subtile Anomalien und Angriffe identifizieren können, die traditionelle Security Tools übersehen.\n• Rapid Containment Strategies: Implementierung schneller Eindämmungsverfahren für AI-Vorfälle, einschließlich Model Isolation und Rollback-Mechanismen.\n• Forensic Analysis für AI: Spezialisierte forensische Verfahren zur Analyse von AI-Vorfällen, einschließlich Model Archaeology und Data Provenance Tracking.\n• Recovery und Lessons Learned: Systematische Wiederherstellungsprozesse und Post-Incident-Analysen zur kontinuierlichen Verbesserung der AI-Sicherheitsposture."
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
    console.log('✅ FAQs batch 3 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
