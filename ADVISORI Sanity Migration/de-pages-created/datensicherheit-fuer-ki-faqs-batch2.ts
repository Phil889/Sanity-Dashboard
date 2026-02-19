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
    console.log('Updating Datensicherheit für KI page with FAQs batch 2...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'datensicherheit-fuer-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "datensicherheit-fuer-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: 'Wie implementiert ADVISORI sichere ML-Pipelines mit End-to-End-Verschlüsselung und welche Verschlüsselungstechnologien kommen zum Einsatz?',
        answer: "Sichere ML-Pipelines mit End-to-End-Verschlüsselung sind essentiell für den Schutz sensibler Daten während des gesamten Machine Learning Lebenszyklus. ADVISORI entwickelt umfassende Verschlüsselungsstrategien, die Daten von der Sammlung über die Verarbeitung bis zur Speicherung und Übertragung schützen, ohne dabei die Funktionalität oder Performance der KI-Systeme zu beeinträchtigen.\n\n🔐 End-to-End-Verschlüsselungsarchitektur:\n• Data-at-Rest Encryption: Implementierung fortschrittlicher Verschlüsselungsverfahren für gespeicherte Daten, einschließlich Trainingsdatensätze, Modellparameter und Zwischenergebnisse mit Hardware-Security-Modulen für Schlüsselmanagement.\n• Data-in-Transit Protection: Sichere Übertragung aller Daten zwischen verschiedenen Komponenten der ML-Pipeline durch TLS-Verschlüsselung und zusätzliche Anwendungsschicht-Sicherheit.\n• Data-in-Use Security: Schutz von Daten während der aktiven Verarbeitung durch Technologien wie Intel SGX, AMD Memory Guard und andere Trusted Execution Environments.\n• Key Management Infrastructure: Entwicklung robuster Schlüsselverwaltungssysteme mit automatischer Rotation, Escrow-Verfahren und Multi-Party-Kontrolle für kritische Verschlüsselungsschlüssel.\n\n🛡️ Advanced Encryption Technologies:\n• Homomorphic Encryption Implementation: Ermöglicht Berechnungen auf verschlüsselten Daten ohne Entschlüsselung, ideal für Privacy-Preserving Machine Learning und kollaborative Datenanalyse.\n• Functional Encryption: Selektive Entschlüsselung spezifischer Datenattribute basierend auf Zugriffsrichtlinien, ohne vollständige Datenpreisgabe.\n• Searchable Encryption: Ermöglicht Suche und Indexierung verschlüsselter Daten ohne Kompromittierung der Vertraulichkeit.\n• Multi-Party Computation: Sichere gemeinsame Berechnungen zwischen mehreren Parteien ohne Preisgabe individueller Datenbeiträge.\n\n🔧 Pipeline Security Implementation:\n• Secure Containerization: Verwendung verschlüsselter Container mit Hardware-basierter Attestierung für isolierte und sichere ML-Workload-Ausführung.\n• Encrypted Model Storage: Schutz trainierter Modelle durch Verschlüsselung mit rollenbasiertem Zugriff und Versionskontrolle.\n• Secure Communication Protocols: Implementierung maßgeschneiderter Kommunikationsprotokolle für sichere Datenübertragung zwischen ML-Pipeline-Komponenten.\n• Audit Trail Encryption: Verschlüsselte Protokollierung aller Pipeline-Aktivitäten für Compliance und forensische Analyse ohne Kompromittierung der Vertraulichkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: 'Welche Rolle spielt Federated Learning in ADVISORI\'s Datensicherheitsstrategie und wie werden dabei Datenschutz und Modellqualität balanciert?',
        answer: "Federated Learning repräsentiert einen paradigmatischen Wandel in der KI-Entwicklung, der Datenschutz und Modellqualität in einer bisher unerreichten Weise vereint. ADVISORI nutzt Federated Learning als Kernkomponente unserer Datensicherheitsstrategie, um Organisationen zu ermöglichen, von kollaborativer KI zu profitieren, ohne dabei sensible Daten preiszugeben oder Compliance-Anforderungen zu verletzen.\n\n🌐 Federated Learning Architecture Excellence:\n• Decentralized Model Training: Entwicklung von Systemen, die es ermöglichen, hochwertige KI-Modelle zu trainieren, ohne dass Rohdaten jemals zentrale Server verlassen oder zwischen Organisationen ausgetauscht werden.\n• Privacy-Preserving Aggregation: Implementierung fortschrittlicher Aggregationsverfahren, die Modell-Updates kombinieren, ohne individuelle Beiträge oder lokale Datencharakteristika preiszugeben.\n• Differential Privacy Integration: Systematische Anwendung von Differential Privacy Techniken auf Federated Learning Updates, um mathematisch garantierte Privatsphäre zu gewährleisten.\n• Secure Multi-Party Computation: Verwendung kryptographischer Protokolle für sichere Aggregation von Modell-Updates ohne Preisgabe individueller Gradienten oder Parameter.\n\n⚖️ Balancing Privacy and Model Quality:\n• Adaptive Privacy Budgets: Entwicklung dynamischer Privacy-Budget-Management-Systeme, die Datenschutz und Modellperformance optimal ausbalancieren basierend auf spezifischen Anwendungsanforderungen.\n• Quality-Preserving Noise Addition: Implementierung intelligenter Rauschzugabe-Verfahren, die Privatsphäre schützen, während sie minimale Auswirkungen auf Modellgenauigkeit haben.\n• Selective Participation: Entwicklung von Mechanismen zur intelligenten Auswahl von Federated Learning Teilnehmern basierend auf Datenqualität und Datenschutzanforderungen.\n• Robust Aggregation: Implementierung Byzantine-fault-toleranter Aggregationsverfahren, die sowohl gegen böswillige Teilnehmer als auch gegen Datenqualitätsprobleme robust sind.\n\n🔒 Advanced Security Measures:\n• Client Authentication: Robuste Authentifizierungssysteme für Federated Learning Teilnehmer mit Hardware-basierter Attestierung und Zero-Trust-Prinzipien.\n• Communication Security: End-to-End-verschlüsselte Kommunikation zwischen allen Federated Learning Komponenten mit Perfect Forward Secrecy.\n• Model Poisoning Defense: Entwicklung fortschrittlicher Erkennungs- und Abwehrmechanismen gegen Model Poisoning Angriffe in dezentralen Lernumgebungen.\n• Gradient Privacy Protection: Spezielle Techniken zum Schutz vor Gradient-basierten Inference-Angriffen, die private Informationen aus Modell-Updates extrahieren könnten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: 'Wie gewährleistet ADVISORI die Anonymisierung und Pseudonymisierung von Daten für KI-Training und welche Techniken werden verwendet, um Re-Identifikationsrisiken zu minimieren?',
        answer: "Anonymisierung und Pseudonymisierung sind fundamentale Säulen des Datenschutzes in KI-Systemen, die jedoch bei unsachgemäßer Implementierung zu falscher Sicherheit führen können. ADVISORI entwickelt robuste Anonymisierungsstrategien, die nicht nur aktuellen Datenschutzanforderungen entsprechen, sondern auch gegen zukünftige Re-Identifikationsrisiken und fortschrittliche Deanonymisierungstechniken gewappnet sind.\n\n🎭 Advanced Anonymization Techniques:\n• K-Anonymity and Beyond: Implementierung von K-Anonymity, L-Diversity und T-Closeness Verfahren mit dynamischen Parametern, die sich an Datencharakteristika und Risikoprofile anpassen.\n• Differential Privacy Application: Systematische Anwendung von Differential Privacy nicht nur auf Modellausgaben, sondern bereits auf Rohdaten vor der Anonymisierung für mathematisch garantierte Privatsphäre.\n• Synthetic Data Generation: Entwicklung fortschrittlicher Generative Adversarial Networks und Variational Autoencoders für die Erstellung synthetischer Datensätze, die statistische Eigenschaften bewahren, aber keine individuellen Informationen enthalten.\n• Multi-Dimensional Generalization: Intelligente Generalisierung von Datenattributen basierend auf Sensitivitätsanalyse und Utility-Preservation-Algorithmen.\n\n🔍 Re-Identification Risk Assessment:\n• Linkage Attack Simulation: Systematische Simulation verschiedener Linkage-Attack-Szenarien unter Verwendung externer Datenquellen und öffentlich verfügbarer Informationen.\n• Uniqueness Analysis: Fortlaufende Analyse der Eindeutigkeit von Datenkombinationen und automatische Anpassung von Anonymisierungsparametern bei erhöhtem Re-Identifikationsrisiko.\n• Temporal Privacy Protection: Berücksichtigung zeitlicher Aspekte bei der Anonymisierung, um Schutz vor longitudinalen Linkage-Angriffen zu gewährleisten.\n• Cross-Dataset Correlation Analysis: Bewertung von Re-Identifikationsrisiken durch Korrelation mit anderen verfügbaren Datensätzen und öffentlichen Informationsquellen.\n\n🛡️ Robust Pseudonymization Infrastructure:\n• Cryptographic Pseudonymization: Verwendung kryptographischer Hash-Funktionen und Salting-Verfahren für irreversible Pseudonymisierung mit regelmäßiger Schlüsselrotation.\n• Format-Preserving Encryption: Implementierung von Verschlüsselungsverfahren, die Datenformate bewahren, während sie starke Pseudonymisierung gewährleisten.\n• Tokenization Systems: Entwicklung sicherer Tokenization-Systeme mit Hardware Security Modules für hochsensible Identifikatoren.\n• Multi-Layer Pseudonymization: Implementierung mehrschichtiger Pseudonymisierungsverfahren für verschiedene Sensitivitätsstufen und Anwendungskontexte."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: 'Welche Monitoring- und Audit-Systeme implementiert ADVISORI für kontinuierliche Datensicherheitsüberwachung in KI-Umgebungen?',
        answer: "Kontinuierliche Überwachung und Audit-Systeme sind essentiell für die Aufrechterhaltung der Datensicherheit in dynamischen KI-Umgebungen. ADVISORI entwickelt umfassende Monitoring-Infrastrukturen, die nicht nur Compliance gewährleisten, sondern auch proaktiv Bedrohungen erkennen und automatisch auf Sicherheitsvorfälle reagieren, während sie gleichzeitig vollständige Transparenz und Nachvollziehbarkeit aller Datenverarbeitungsaktivitäten bieten.\n\n📊 Comprehensive Monitoring Infrastructure:\n• Real-Time Data Flow Monitoring: Kontinuierliche Überwachung aller Datenflüsse in ML-Pipelines mit automatischer Erkennung ungewöhnlicher Zugriffsmuster, Datenvolumen-Anomalien und verdächtiger Verarbeitungsaktivitäten.\n• Model Behavior Analysis: Fortlaufende Analyse des Modellverhaltens zur Erkennung von Drift, Performance-Degradation oder Anzeichen für Kompromittierung durch adversarielle Angriffe.\n• Privacy Compliance Monitoring: Automatisierte Überwachung der Einhaltung von Datenschutzrichtlinien mit Real-Time-Alerts bei potenziellen Compliance-Verletzungen.\n• Access Pattern Analysis: Intelligente Analyse von Zugriffmustern auf KI-Systeme und Daten zur Erkennung von Insider-Bedrohungen oder unauthorisierten Zugriffen.\n\n🔍 Advanced Threat Detection:\n• Anomaly Detection Systems: Implementierung Machine Learning-basierter Anomalieerkennung für die Identifikation ungewöhnlicher Aktivitäten in KI-Infrastrukturen.\n• Behavioral Analytics: Entwicklung von Systemen zur Analyse des Nutzerverhaltens und automatischen Erkennung von Abweichungen von normalen Arbeitsmustern.\n• Data Exfiltration Detection: Spezialisierte Systeme zur Erkennung von Datenabfluss-Versuchen, einschließlich subtiler Angriffe über Modellausgaben oder Seitenkanalangriffe.\n• Adversarial Attack Detection: Real-Time-Erkennung von adversariellen Angriffen auf KI-Modelle durch Analyse von Input-Mustern und Modellresponse-Anomalien.\n\n📋 Comprehensive Audit Trail Systems:\n• Immutable Audit Logs: Implementierung blockchain-basierter oder kryptographisch gesicherter Audit-Logs, die Manipulation verhindern und vollständige Nachvollziehbarkeit gewährleisten.\n• Data Lineage Tracking: Umfassende Verfolgung der Datenherkunft und -transformation durch alle Phasen des ML-Lebenszyklus für vollständige Transparenz.\n• Decision Audit Trails: Detaillierte Protokollierung aller automatisierten Entscheidungen mit Kontext, verwendeten Daten und Entscheidungslogik für Compliance und Erklärbarkeit.\n• Compliance Reporting Automation: Automatisierte Generierung von Compliance-Berichten für verschiedene regulatorische Anforderungen mit Real-Time-Dashboards für Stakeholder."
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
    console.log('✅ FAQs batch 2 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
