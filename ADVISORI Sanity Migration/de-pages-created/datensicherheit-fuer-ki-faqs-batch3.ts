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
    console.log('Updating Datensicherheit für KI page with FAQs batch 3...')
    
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
        _key: generateKey('faq', 9),
        question: 'Wie entwickelt ADVISORI Data Governance Frameworks speziell für KI-Systeme und welche Rollen und Verantwortlichkeiten werden definiert?',
        answer: "Data Governance in KI-Umgebungen erfordert spezialisierte Frameworks, die über traditionelle Datenmanagement-Ansätze hinausgehen. ADVISORI entwickelt umfassende Governance-Strukturen, die die einzigartigen Herausforderungen von Machine Learning berücksichtigen und klare Verantwortlichkeiten für Datenschutz, Qualität und Compliance in dynamischen KI-Landschaften etablieren.\n\n🏛️ KI-spezifische Governance-Architektur:\n• AI Data Stewardship: Etablierung spezialisierter Data Steward Rollen für KI-Projekte mit Expertise in Machine Learning Datenflüssen, Modelltraining und Privacy-Preserving Techniken.\n• Cross-Functional Governance Committees: Bildung interdisziplinärer Teams aus Datenwissenschaftlern, Rechtsexperten, Compliance-Spezialisten und Geschäftsverantwortlichen für holistische KI-Governance.\n• Dynamic Policy Management: Entwicklung adaptiver Governance-Richtlinien, die sich an evolvierende KI-Technologien und regulatorische Anforderungen anpassen können.\n• Automated Governance Enforcement: Implementierung technischer Systeme zur automatischen Durchsetzung von Governance-Richtlinien in ML-Pipelines ohne manuelle Intervention.\n\n📋 Rollen und Verantwortlichkeiten Framework:\n• Chief AI Officer: Strategische Verantwortung für KI-Governance, Risikomanagement und Compliance-Überwachung auf Unternehmensebene.\n• AI Ethics Officer: Spezialisierte Rolle für ethische KI-Entwicklung, Bias-Erkennung und verantwortungsvolle AI-Praktiken.\n• ML Data Protection Officer: Fokus auf Datenschutz in Machine Learning Kontexten, DSGVO-Compliance und Privacy-by-Design Implementierung.\n• AI Security Architect: Verantwortung für technische Sicherheitsmaßnahmen, Threat Modeling und Incident Response in KI-Systemen.\n• Model Risk Manager: Überwachung von Modellrisiken, Performance-Monitoring und Governance von Modell-Lebenszyklus-Management.\n\n🔄 Governance-Prozess-Integration:\n• Data Lifecycle Governance: Umfassende Governance-Prozesse für alle Phasen des Datenlebenszyklus in KI-Kontexten, von der Sammlung bis zur Archivierung.\n• Model Governance Pipeline: Integrierte Governance-Kontrollen in ML-Entwicklungspipelines mit automatisierten Compliance-Checks und Genehmigungsworkflows.\n• Continuous Compliance Monitoring: Etablierung kontinuierlicher Überwachungssysteme für Governance-Compliance mit Real-Time-Reporting und Eskalationsmechanismen.\n• Stakeholder Engagement: Strukturierte Prozesse für regelmäßige Kommunikation und Abstimmung zwischen verschiedenen Governance-Stakeholdern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: 'Welche Secure Multi-Party Computation Techniken setzt ADVISORI für kollaborative KI-Entwicklung ein und wie wird dabei Datenschutz gewährleistet?',
        answer: "Secure Multi-Party Computation ermöglicht es mehreren Parteien, gemeinsam KI-Modelle zu entwickeln und zu trainieren, ohne dabei ihre sensiblen Daten preiszugeben. ADVISORI implementiert fortschrittliche SMPC-Protokolle, die kollaborative Innovation fördern, während sie gleichzeitig höchste Datenschutzstandards aufrechterhalten und regulatorische Compliance gewährleisten.\n\n🤝 Advanced SMPC Protocol Implementation:\n• Secret Sharing Schemes: Implementierung von Shamir's Secret Sharing und anderen fortschrittlichen Verfahren zur sicheren Verteilung von Daten und Berechnungen auf mehrere Parteien ohne Preisgabe individueller Beiträge.\n• Garbled Circuits: Verwendung von Garbled Circuit Protokollen für sichere Funktionsauswertung in Zwei-Parteien-Szenarien mit optimierter Performance für ML-Workloads.\n• Homomorphic Encryption Integration: Kombination von SMPC mit homomorpher Verschlüsselung für zusätzliche Sicherheitsschichten bei rechenintensiven ML-Operationen.\n• BGW and GMW Protocols: Implementierung klassischer SMPC-Protokolle mit Optimierungen für Machine Learning spezifische Berechnungen und Datenstrukturen.\n\n🔐 Privacy-Preserving Collaborative ML:\n• Federated SMPC: Kombination von Federated Learning mit SMPC-Techniken für dezentrale Modellentwicklung ohne zentrale Datensammlung oder Vertrauensanforderungen.\n• Private Set Intersection: Ermöglicht Parteien, gemeinsame Datenelemente zu identifizieren, ohne ihre vollständigen Datensätze preiszugeben, ideal für Datenqualitätsbewertung und Feature-Engineering.\n• Secure Aggregation Protocols: Entwicklung spezialisierter Aggregationsprotokolle für sichere Kombination von Modell-Updates oder Gradienten ohne Preisgabe individueller Beiträge.\n• Differential Privacy Integration: Systematische Integration von Differential Privacy in SMPC-Protokolle für mathematisch garantierte Privatsphäre auch bei wiederholten Berechnungen.\n\n⚡ Performance and Scalability Optimization:\n• Optimized Circuit Design: Entwicklung effizienter Schaltkreise für häufige ML-Operationen wie Matrixmultiplikation, Aktivierungsfunktionen und Gradientenberechnungen.\n• Preprocessing Techniques: Implementierung von Offline-Preprocessing-Phasen zur Reduzierung der Online-Berechnungszeit während der eigentlichen SMPC-Ausführung.\n• Parallel Computation: Nutzung von Parallelisierungsstrategien und verteilten Computing-Ressourcen für skalierbare SMPC-Implementierungen.\n• Network Optimization: Optimierung der Netzwerkkommunikation zwischen SMPC-Parteien durch Kompression, Batching und intelligente Protokollauswahl."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: 'Wie implementiert ADVISORI Zero-Knowledge Proofs in KI-Systemen und welche Anwendungsfälle werden damit abgedeckt?',
        answer: "Zero-Knowledge Proofs revolutionieren die Art, wie Vertrauen und Verifikation in KI-Systemen etabliert werden können. ADVISORI nutzt ZK-Technologien, um zu beweisen, dass KI-Systeme korrekt funktionieren, ohne dabei sensible Daten, Modellparameter oder proprietäre Algorithmen preiszugeben. Dies ermöglicht transparente Verifikation bei gleichzeitigem Schutz geistigen Eigentums.\n\n🔍 ZK-Proof Applications in AI Systems:\n• Model Integrity Verification: Beweis, dass ein KI-Modell korrekt trainiert wurde und bestimmte Qualitätsstandards erfüllt, ohne die Trainingsdaten oder Modellarchitektur preiszugeben.\n• Compliance Verification: Nachweis der Einhaltung regulatorischer Anforderungen wie DSGVO-Compliance oder Bias-Freiheit ohne Offenlegung der zugrundeliegenden Daten oder Entscheidungslogik.\n• Data Quality Attestation: Beweis, dass Trainingsdaten bestimmte Qualitätskriterien erfüllen, ohne die Daten selbst oder deren Herkunft preiszugeben.\n• Privacy-Preserving Audits: Ermöglicht externen Auditoren, die Korrektheit von KI-Systemen zu verifizieren, ohne Zugang zu sensiblen Daten oder proprietären Algorithmen zu benötigen.\n\n⚙️ Technical ZK Implementation Strategies:\n• zk-SNARKs for ML: Implementierung von Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge für effiziente Verifikation komplexer ML-Berechnungen.\n• zk-STARKs Integration: Nutzung von Scalable Transparent Arguments of Knowledge für transparente und skalierbare Verifikation ohne Trusted Setup-Anforderungen.\n• Bulletproofs for Range Proofs: Anwendung von Bulletproof-Protokollen für effiziente Bereichsnachweise in KI-Kontexten, wie Beweis von Modellgenauigkeit innerhalb bestimmter Grenzen.\n• Polynomial Commitment Schemes: Verwendung von Polynomial-Commitment-Verfahren für effiziente Verifikation von ML-Modell-Eigenschaften.\n\n🛡️ Privacy and IP Protection Use Cases:\n• Proprietary Algorithm Protection: Beweis der korrekten Ausführung proprietärer KI-Algorithmen ohne Preisgabe der Implementierungsdetails oder Geschäftsgeheimnisse.\n• Competitive Benchmarking: Ermöglicht Unternehmen, ihre KI-Performance zu vergleichen, ohne sensible Modelldetails oder Trainingsdaten preiszugeben.\n• Regulatory Reporting: Automatisierte Generierung verifizierbarer Compliance-Berichte für Regulierungsbehörden ohne Offenlegung geschäftskritischer Informationen.\n• Third-Party Verification: Ermöglicht unabhängige Verifikation von KI-System-Claims durch Dritte ohne Vertrauensanforderungen oder Datenzugang."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: 'Welche Incident Response Strategien entwickelt ADVISORI für Datenschutzverletzungen in KI-Systemen und wie wird die Schadensbegrenzung gewährleistet?',
        answer: "Datenschutzvorfälle in KI-Systemen erfordern spezialisierte Incident Response Strategien, die die einzigartigen Charakteristika von Machine Learning berücksichtigen. ADVISORI entwickelt umfassende Response-Frameworks, die schnelle Schadensbegrenzung, forensische Analyse und regulatorische Compliance gewährleisten, während sie gleichzeitig den Geschäftsbetrieb minimimal beeinträchtigen.\n\n🚨 KI-spezifische Incident Response Framework:\n• Rapid Detection Systems: Implementierung spezialisierter Erkennungssysteme für KI-spezifische Sicherheitsvorfälle wie Model Inversion Attacks, Data Poisoning oder Adversarial Attacks mit automatischen Alerting-Mechanismen.\n• AI Incident Classification: Entwicklung detaillierter Klassifikationssysteme für verschiedene Arten von KI-Sicherheitsvorfällen mit spezifischen Response-Protokollen für jeden Incident-Typ.\n• Automated Containment: Implementierung automatisierter Eindämmungsmaßnahmen, die KI-Systeme bei Erkennung von Sicherheitsvorfällen sofort isolieren oder in einen sicheren Modus versetzen können.\n• Forensic Data Preservation: Spezialisierte Verfahren zur Sicherung forensischer Beweise in KI-Umgebungen, einschließlich Modellzustände, Trainingsdaten und Inferenz-Logs.\n\n🔧 Technical Response Capabilities:\n• Model Rollback Procedures: Entwicklung schneller Rollback-Verfahren für kompromittierte KI-Modelle mit automatischer Wiederherstellung zu bekannten sicheren Zuständen.\n• Data Contamination Analysis: Fortschrittliche Analyseverfahren zur Identifikation und Bewertung von Datenverunreinigungen in Trainingsdatensätzen mit Impact-Assessment.\n• Privacy Breach Assessment: Spezialisierte Tools zur schnellen Bewertung des Umfangs von Datenschutzverletzungen in KI-Kontexten, einschließlich potentieller Inference-basierter Datenlecks.\n• Communication Isolation: Technische Maßnahmen zur sofortigen Isolation kompromittierter KI-Systeme von Netzwerken und Datenquellen zur Schadensbegrenzung.\n\n📋 Regulatory and Legal Response:\n• DSGVO Breach Notification: Automatisierte Systeme zur schnellen Bewertung von DSGVO-Meldepflichten bei KI-Datenschutzvorfällen mit Template-basierten Meldeverfahren.\n• Stakeholder Communication: Strukturierte Kommunikationspläne für verschiedene Stakeholder-Gruppen, einschließlich Kunden, Regulierungsbehörden und interne Teams.\n• Legal Impact Assessment: Schnelle Bewertung rechtlicher Auswirkungen von KI-Sicherheitsvorfällen mit Empfehlungen für rechtliche Schritte und Schadensbegrenzung.\n• Documentation and Reporting: Umfassende Dokumentationsverfahren für alle Incident Response Aktivitäten zur Unterstützung rechtlicher Verfahren und regulatorischer Untersuchungen."
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
