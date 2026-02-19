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
    console.log('Updating Datenlecks durch LLMs verhindern page with Technical Implementation FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datenlecks-durch-llms-verhindern' })
    
    if (!existingDoc) {
      throw new Error('Document "datenlecks-durch-llms-verhindern" not found')
    }
    
    // Create new Technical Implementation FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie implementiert ADVISORI technische Schutzmaßnahmen gegen Prompt Injection und Data Exfiltration in LLM-Systemen?",
        answer: "Prompt Injection und Data Exfiltration gehören zu den kritischsten Sicherheitsbedrohungen für LLM-Systeme. ADVISORI entwickelt mehrschichtige technische Schutzmaßnahmen, die diese Angriffsvektoren proaktiv erkennen, blockieren und dokumentieren. Unser Ansatz kombiniert präventive Sicherheitsarchitekturen mit intelligenter Anomalie-Erkennung für umfassenden Schutz.\n\n🛡️ Prompt Injection Prevention Technologien:\n• Input-Sanitization und Validierung: Implementierung robuster Input-Filter, die schädliche Prompts erkennen und neutralisieren, bevor sie das LLM erreichen, ohne die Funktionalität zu beeinträchtigen.\n• Prompt-Template-Systeme: Entwicklung sicherer Prompt-Templates mit definierten Parametern, die unautorisierten Code oder Befehle verhindern und gleichzeitig Flexibilität gewährleisten.\n• Context-Isolation-Techniken: Implementierung von Kontext-Isolation, die verhindert, dass Benutzer-Inputs die System-Prompts oder andere Benutzer-Sessions beeinflussen können.\n• Semantic Analysis Engines: Einsatz fortschrittlicher semantischer Analysesysteme, die verdächtige Prompt-Muster und Manipulationsversuche in Echtzeit identifizieren.\n\n🔒 Data Exfiltration Prevention Systeme:\n• Output-Filtering und Content-Kontrolle: Implementierung intelligenter Output-Filter, die sensible Daten in LLM-Antworten erkennen und redaktieren, bevor sie an Benutzer übertragen werden.\n• Data Loss Prevention Integration: Nahtlose Integration spezialisierter DLP-Systeme, die für LLM-Umgebungen optimiert sind und verschiedene Datentypen und -klassifikationen überwachen.\n• Real-time Monitoring und Alerting: Kontinuierliche Überwachung aller LLM-Interaktionen mit sofortigen Benachrichtigungen bei verdächtigen Aktivitäten oder Anomalien.\n• Forensische Logging und Audit-Trails: Umfassende Protokollierung aller Sicherheitsereignisse für forensische Analyse und Compliance-Nachweis."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Architekturprinzipien wendet ADVISORI für sichere LLM-Implementierungen an und wie gewährleisten diese Privacy-by-Design?",
        answer: "ADVISORI folgt strengen Architekturprinzipien, die Sicherheit und Datenschutz von Grund auf in LLM-Systeme integrieren. Unser Privacy-by-Design-Ansatz gewährleistet, dass Datenschutz nicht nachträglich hinzugefügt, sondern als fundamentales Designprinzip implementiert wird. Diese Architektur schafft vertrauensvolle LLM-Umgebungen ohne Kompromisse bei der Funktionalität.\n\n🏗️ Sichere LLM-Architekturprinzipien:\n• Zero-Trust-Architektur: Implementierung von Zero-Trust-Prinzipien, bei denen jede Anfrage, jeder Benutzer und jedes System kontinuierlich verifiziert wird, unabhängig von der Netzwerkposition.\n• Mikroservice-basierte Isolation: Aufbau modularer LLM-Systeme mit isolierten Mikroservices, die Sicherheitsverletzungen eindämmen und granulare Sicherheitskontrollen ermöglichen.\n• End-to-End-Verschlüsselung: Implementierung umfassender Verschlüsselung für Daten in Ruhe, in Bewegung und in Verarbeitung, um sensible Informationen durchgängig zu schützen.\n• Secure Enclaves und Containerisierung: Einsatz sicherer Container-Technologien und Hardware-basierter Enclaves für zusätzliche Isolation kritischer LLM-Komponenten.\n\n🔐 Privacy-by-Design-Implementierung:\n• Datenminimierung und Zweckbindung: Architektur-Design, das nur notwendige Daten verarbeitet und strenge Zweckbindung für alle Datenverarbeitungsprozesse gewährleistet.\n• Anonymisierung und Pseudonymisierung: Integration fortschrittlicher Anonymisierungstechniken, die personenbezogene Daten schützen, ohne die LLM-Funktionalität zu beeinträchtigen.\n• Granulare Zugriffskontrolle: Implementierung feingranularer Berechtigungssysteme mit rollenbasiertem Zugriff und dynamischen Sicherheitsrichtlinien.\n• Transparenz und Auditierbarkeit: Architektur-Design, das vollständige Transparenz und Nachvollziehbarkeit aller Datenverarbeitungsprozesse gewährleistet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI die sichere Integration von LLMs in bestehende Unternehmensinfrastrukturen ohne Sicherheitslücken?",
        answer: "Die sichere Integration von LLMs in bestehende Unternehmensinfrastrukturen erfordert einen systematischen Ansatz, der sowohl neue als auch legacy Systeme berücksichtigt. ADVISORI entwickelt maßgeschneiderte Integrationslösungen, die Sicherheit, Kompatibilität und Performance optimieren, während sie nahtlos in Ihre bestehende IT-Landschaft eingebettet werden.\n\n🔗 Sichere Integrationsmethoden:\n• API-Gateway-Sicherheit: Implementierung sicherer API-Gateways mit umfassender Authentifizierung, Autorisierung und Rate-Limiting für alle LLM-Interaktionen mit bestehenden Systemen.\n• Network Segmentation und Firewalling: Strategische Netzwerksegmentierung, die LLM-Systeme isoliert und gleichzeitig kontrollierte Kommunikation mit notwendigen Unternehmenssystemen ermöglicht.\n• Identity und Access Management Integration: Nahtlose Integration in bestehende IAM-Systeme mit Single Sign-On, Multi-Faktor-Authentifizierung und zentralisierter Benutzerverwaltung.\n• Legacy-System-Kompatibilität: Entwicklung sicherer Adapter und Middleware-Lösungen, die moderne LLM-Sicherheit mit älteren Unternehmenssystemen verbinden.\n\n⚙️ Infrastruktur-Sicherheitsmaßnahmen:\n• Hybrid-Cloud-Sicherheit: Implementierung sicherer Hybrid-Cloud-Architekturen, die On-Premises-Sicherheitsanforderungen mit Cloud-basierter LLM-Flexibilität kombinieren.\n• Continuous Security Monitoring: Integration in bestehende SIEM-Systeme und Security Operations Centers für einheitliche Sicherheitsüberwachung und Incident Response.\n• Backup und Disaster Recovery: Entwicklung umfassender Backup- und Wiederherstellungsstrategien, die LLM-spezifische Anforderungen berücksichtigen.\n• Performance und Skalierbarkeit: Architektur-Design, das sichere LLM-Integration ohne Beeinträchtigung der bestehenden Systemperformance gewährleistet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche spezialisierten Monitoring- und Anomalie-Erkennungssysteme setzt ADVISORI für LLM-Sicherheit ein?",
        answer: "ADVISORI implementiert fortschrittliche Monitoring- und Anomalie-Erkennungssysteme, die speziell für die einzigartigen Sicherheitsherausforderungen von LLM-Umgebungen entwickelt wurden. Diese Systeme kombinieren traditionelle Sicherheitsüberwachung mit AI-spezifischen Bedrohungserkennung für umfassenden Schutz und proaktive Sicherheitsmaßnahmen.\n\n📊 Spezialisierte LLM-Monitoring-Systeme:\n• Behavioral Analytics für LLMs: Implementierung fortschrittlicher Verhaltensanalyse-Systeme, die normale LLM-Interaktionsmuster lernen und Abweichungen identifizieren, die auf Sicherheitsbedrohungen hinweisen könnten.\n• Real-time Prompt Analysis: Kontinuierliche Analyse aller eingehenden Prompts auf verdächtige Muster, Injection-Versuche oder ungewöhnliche Anfragevolumen mit sofortiger Alarmierung.\n• Output Content Monitoring: Intelligente Überwachung aller LLM-Outputs auf sensible Daten, ungewöhnliche Inhalte oder Anzeichen von Data Exfiltration mit automatischer Redaktion.\n• Performance und Ressourcen-Monitoring: Überwachung von LLM-Performance-Metriken zur Erkennung von DDoS-Angriffen, Ressourcenmissbrauch oder anderen Performance-basierten Bedrohungen.\n\n🚨 Anomalie-Erkennungs-Technologien:\n• Machine Learning-basierte Bedrohungserkennung: Einsatz spezialisierter ML-Modelle, die aus historischen LLM-Interaktionen lernen und neue Bedrohungsmuster automatisch identifizieren.\n• Statistische Anomalie-Analyse: Implementierung statistischer Analysemethoden zur Erkennung ungewöhnlicher Nutzungsmuster, Anfragevolumen oder Interaktionssequenzen.\n• Threat Intelligence Integration: Integration externer Threat Intelligence Feeds mit LLM-spezifischen Bedrohungsinformationen für proaktive Erkennung bekannter Angriffsmuster.\n• Automated Incident Response: Entwicklung automatisierter Response-Systeme, die bei erkannten Anomalien sofortige Schutzmaßnahmen einleiten und Sicherheitsteams benachrichtigen."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Technical Implementation FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Technical Implementation FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
