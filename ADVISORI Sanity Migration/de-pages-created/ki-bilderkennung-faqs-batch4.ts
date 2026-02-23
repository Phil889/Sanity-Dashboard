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
    console.log('Updating KI-Bilderkennung page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'ki-bilderkennung' })
    
    if (!existingDoc) {
      throw new Error('Document "ki-bilderkennung" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Cybersecurity-Risiken bestehen bei Computer Vision Systemen und wie implementiert ADVISORI umfassende Sicherheitsmaßnahmen zum Schutz vor Angriffen?',
        answer: "Computer Vision Systeme sind einzigartigen Cybersecurity-Risiken ausgesetzt, die von traditionellen IT-Sicherheitsmaßnahmen oft nicht vollständig abgedeckt werden. ADVISORI hat spezialisierte Sicherheitsframeworks entwickelt, die sowohl klassische Cyberbedrohungen als auch spezifische Angriffe auf Computer Vision Systeme adressieren und umfassenden Schutz gewährleisten.\n\n🛡️ Spezifische Computer Vision Sicherheitsbedrohungen:\n• Adversarial Attacks: Schutz vor gezielten Manipulationen von Eingabebildern, die darauf abzielen, Computer Vision Modelle zu täuschen oder falsche Klassifikationen zu provozieren.\n• Model Extraction und IP-Diebstahl: Implementierung von Schutzmaßnahmen gegen Versuche, proprietäre Computer Vision Modelle durch gezielte Abfragen zu rekonstruieren oder zu stehlen.\n• Data Poisoning: Sicherung der Trainingsdaten-Pipeline gegen Manipulation und Einschleusung schädlicher Daten, die die Modellleistung beeinträchtigen könnten.\n• Privacy Inference Attacks: Schutz vor Angriffen, die darauf abzielen, sensible Informationen aus Computer Vision Modellen oder deren Ausgaben zu extrahieren.\n\n🔒 Mehrstufige Sicherheitsarchitektur:\n• Zero-Trust-Prinzipien für Computer Vision: Implementierung von Zero-Trust-Architekturen, die jeden Zugriff auf Computer Vision Systeme und Daten kontinuierlich verifizieren und autorisieren.\n• Secure Enclaves und Hardware-basierte Sicherheit: Nutzung von Trusted Execution Environments und Hardware Security Modules für die sichere Ausführung kritischer Computer Vision Operationen.\n• End-to-End-Verschlüsselung: Implementierung von Verschlüsselung für Bilddaten sowohl in Transit als auch at Rest, einschließlich homomorpher Verschlüsselung für Privacy-Preserving Computation.\n• Secure Multi-Party Computation: Ermöglichung kollaborativer Computer Vision Anwendungen ohne Preisgabe sensibler Daten zwischen Parteien.\n\n🔍 Kontinuierliche Bedrohungsüberwachung und Incident Response:\n• AI-spezifische SIEM-Integration: Entwicklung spezialisierter Security Information and Event Management Systeme, die Computer Vision spezifische Anomalien und Angriffsmuster erkennen.\n• Automated Threat Detection: Implementierung von Machine Learning basierten Systemen zur automatischen Erkennung von Adversarial Attacks und anderen Computer Vision spezifischen Bedrohungen.\n• Incident Response Playbooks: Entwicklung spezialisierter Reaktionspläne für Computer Vision Sicherheitsvorfälle, einschließlich Modell-Rollback und Datenintegrität-Wiederherstellung.\n• Penetration Testing für AI-Systeme: Regelmäßige Sicherheitstests, die spezifisch auf Computer Vision Vulnerabilitäten ausgerichtet sind."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie gewährleistet ADVISORI die Qualitätssicherung und Validierung von Computer Vision Modellen in produktiven Umgebungen und welche Metriken werden verwendet?',
        answer: "Qualitätssicherung und Validierung von Computer Vision Modellen in produktiven Umgebungen erfordern spezialisierte Ansätze, die über traditionelle Software-Testing hinausgehen. ADVISORI hat umfassende Qualitätssicherungsframeworks entwickelt, die sowohl technische Performance als auch geschäftliche Anforderungen und Compliance-Standards berücksichtigen.\n\n📊 Umfassende Performance-Metriken und Evaluation:\n• Multi-dimensionale Accuracy-Bewertung: Implementierung verschiedener Genauigkeitsmetriken wie Precision, Recall, F1-Score, mAP und IoU, angepasst an spezifische Computer Vision Aufgaben und Geschäftsanforderungen.\n• Robustness Testing unter realen Bedingungen: Systematische Evaluierung der Modellleistung unter verschiedenen Umgebungsbedingungen, Beleuchtungsverhältnissen, Bildqualitäten und Edge Cases.\n• Latenz und Throughput-Optimierung: Kontinuierliche Überwachung und Optimierung von Inferenzzeiten und Verarbeitungskapazitäten für Echtzeit-Anwendungen.\n• Resource Utilization Monitoring: Überwachung von GPU, CPU und Speicherverbrauch zur Optimierung der Infrastrukturkosten und Performance.\n\n🔍 Kontinuierliche Modell-Validierung und Drift-Detection:\n• Statistical Drift Detection: Implementierung statistischer Verfahren zur Früherkennung von Datenverteilungsänderungen, die die Modellleistung beeinträchtigen könnten.\n• Concept Drift Monitoring: Überwachung von Änderungen in den zugrundeliegenden Konzepten und Mustern, die Computer Vision Modelle erlernt haben.\n• Performance Degradation Alerts: Automatische Benachrichtigungssysteme bei signifikanten Leistungseinbußen mit konfigurierbaren Schwellenwerten.\n• A/B Testing Frameworks: Systematische Vergleichstests zwischen verschiedenen Modellversionen in kontrollierten produktiven Umgebungen.\n\n🏭 Produktions-spezifische Qualitätssicherung:\n• Shadow Mode Testing: Parallele Ausführung neuer Modellversionen im Hintergrund zur Validierung ohne Auswirkung auf produktive Prozesse.\n• Canary Deployments: Stufenweise Einführung neuer Computer Vision Modelle mit schrittweiser Erhöhung des Traffics basierend auf Performance-Validierung.\n• Rollback-Mechanismen: Automatische Rückführung auf vorherige Modellversionen bei Erkennung von Performance-Problemen oder Anomalien.\n• Human-in-the-Loop Validation: Integration menschlicher Expertise für kritische Entscheidungen und kontinuierliche Qualitätskontrolle.\n\n📈 Business Impact und Compliance Monitoring:\n• Business KPI Integration: Verknüpfung technischer Computer Vision Metriken mit geschäftlichen Kennzahlen wie Kosteneinsparungen, Qualitätsverbesserungen und Kundenzufriedenheit.\n• Regulatory Compliance Tracking: Kontinuierliche Überwachung der Einhaltung branchenspezifischer Regulierungen und Qualitätsstandards.\n• Audit Trail Management: Umfassende Dokumentation aller Modellentscheidungen und -änderungen für Compliance und Nachvollziehbarkeit.\n• Stakeholder Reporting: Automatisierte Berichterstattung über Computer Vision Performance an verschiedene Stakeholder-Gruppen mit angepassten Dashboards."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche Rolle spielt Explainable AI bei ADVISORI\'s Computer Vision Lösungen und wie wird Transparenz in kritischen Anwendungsbereichen gewährleistet?',
        answer: "Explainable AI ist ein fundamentaler Baustein von ADVISORI's Computer Vision Lösungen, insbesondere in kritischen Anwendungsbereichen wie Medizin, Automotive und Finanzwesen. Wir haben spezialisierte Explainability-Frameworks entwickelt, die nicht nur technische Transparenz bieten, sondern auch regulatorische Anforderungen erfüllen und Vertrauen bei Stakeholdern aufbauen.\n\n🔍 Technische Explainability-Methoden für Computer Vision:\n• Gradient-based Attribution: Implementierung von Techniken wie Grad-CAM, Integrated Gradients und SHAP für die Visualisierung wichtiger Bildbereiche, die zu Modellentscheidungen beitragen.\n• Attention Mechanism Visualization: Nutzung von Attention Maps und Saliency Maps zur Darstellung, welche Bildregionen das Modell bei der Entscheidungsfindung fokussiert.\n• Counterfactual Explanations: Entwicklung von Verfahren zur Generierung kontrafaktischer Beispiele, die zeigen, wie Bilder verändert werden müssten, um andere Klassifikationsergebnisse zu erzielen.\n• Layer-wise Relevance Propagation: Implementierung von LRP-Techniken zur Rückverfolgung von Entscheidungen durch alle Schichten neuronaler Netzwerke.\n\n📋 Anwendungsbereichs-spezifische Explainability:\n• Medizinische Bildanalyse: Entwicklung von Explainability-Tools, die Ärzten helfen, AI-Diagnosen zu verstehen und zu validieren, einschließlich Heatmaps für verdächtige Bereiche und Confidence-Scores.\n• Autonome Fahrsysteme: Implementierung von Echtzeit-Explainability für Fahrentscheidungen, die Sicherheitsingenieuren und Regulierungsbehörden Einblicke in AI-Verhalten geben.\n• Industrielle Qualitätskontrolle: Bereitstellung detaillierter Erklärungen für Defekterkennung, die Qualitätsingenieuren helfen, Produktionsprozesse zu optimieren.\n• Finanzielle Betrugserkennung: Entwicklung von Explainability-Tools für Bildbasierte Betrugserkennung, die Compliance-Anforderungen und Audit-Trails unterstützen.\n\n🎯 Stakeholder-spezifische Explanation Interfaces:\n• Technical Explanations für Data Scientists: Detaillierte technische Analysen mit Feature Importance, Model Confidence und Statistical Significance.\n• Business Explanations für Management: Hochrangige Zusammenfassungen der AI-Entscheidungen mit Fokus auf Geschäftsauswirkungen und ROI-Beiträge.\n• Regulatory Explanations für Compliance: Strukturierte Dokumentation von AI-Entscheidungsprozessen, die regulatorische Anforderungen und Audit-Standards erfüllen.\n• End-User Explanations: Benutzerfreundliche Visualisierungen und Erklärungen für Endanwender ohne technischen Hintergrund.\n\n⚖️ Compliance und Governance Integration:\n• GDPR Right to Explanation: Implementierung von Systemen zur Bereitstellung verständlicher Erklärungen für automatisierte Entscheidungen, die Einzelpersonen betreffen.\n• Algorithmic Accountability: Entwicklung von Frameworks zur Dokumentation und Nachvollziehbarkeit von Computer Vision Entscheidungen für regulatorische Zwecke.\n• Bias Detection und Fairness Explanation: Integration von Explainability-Tools zur Identifikation und Erklärung potenzieller Verzerrungen in Computer Vision Systemen.\n• Continuous Explainability Monitoring: Implementierung von Systemen zur kontinuierlichen Überwachung und Berichterstattung über die Explainability-Qualität in produktiven Umgebungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie unterstützt ADVISORI Unternehmen bei der Skalierung von Computer Vision Lösungen von Pilot-Projekten zu unternehmensweiten Implementierungen?',
        answer: "Die Skalierung von Computer Vision Lösungen von erfolgreichen Pilot-Projekten zu unternehmensweiten Implementierungen ist eine komplexe Herausforderung, die strategische Planung, technische Expertise und organisatorische Transformation erfordert. ADVISORI hat bewährte Skalierungsframeworks entwickelt, die systematische und nachhaltige Expansion gewährleisten.\n\n🚀 Strategische Skalierungsplanung und Roadmap-Entwicklung:\n• Maturity Assessment und Readiness Evaluation: Umfassende Bewertung der organisatorischen, technischen und kulturellen Bereitschaft für Computer Vision Skalierung.\n• Phased Scaling Strategy: Entwicklung stufenweiser Skalierungspläne, die Risiken minimieren und kontinuierlichen Wertnachweis ermöglichen.\n• Business Case Optimization: Kontinuierliche Verfeinerung des Business Case basierend auf Pilot-Ergebnissen und erweiterten Anwendungsszenarien.\n• Stakeholder Alignment: Sicherstellung der Unterstützung aller relevanten Stakeholder durch klare Kommunikation von Vorteilen und Erwartungsmanagement.\n\n🏗️ Technische Skalierungsarchitektur:\n• Cloud-Native Scaling Strategies: Implementierung von Auto-Scaling, Load Balancing und Container-Orchestrierung für dynamische Kapazitätsanpassung.\n• Multi-Tenant Architecture: Entwicklung von Architekturen, die mehrere Geschäftsbereiche und Anwendungsfälle effizient unterstützen können.\n• Edge-to-Cloud Hybrid Deployments: Strategische Verteilung von Computer Vision Workloads zwischen Edge-Devices und Cloud-Infrastruktur basierend auf Latenz- und Datenschutzanforderungen.\n• API Gateway und Service Mesh: Implementierung von Infrastrukturen für sichere und skalierbare Integration mit bestehenden Unternehmenssystemen.\n\n📊 Performance und Qualitätsmanagement bei Skalierung:\n• Distributed Model Management: Implementierung von MLOps-Pipelines für die Verwaltung und Deployment von Computer Vision Modellen über verschiedene Standorte und Anwendungsfälle.\n• Centralized Monitoring und Governance: Aufbau zentraler Überwachungs- und Governance-Systeme für konsistente Qualitätssicherung über alle Computer Vision Implementierungen.\n• Resource Optimization: Kontinuierliche Optimierung von Rechenressourcen und Infrastrukturkosten durch intelligente Workload-Verteilung und Capacity Planning.\n• Performance Benchmarking: Etablierung konsistenter Performance-Standards und Benchmarks für alle Computer Vision Anwendungen.\n\n👥 Organisatorische Transformation und Change Management:\n• Center of Excellence Aufbau: Etablierung spezialisierter Teams für Computer Vision Expertise, Best Practices und kontinuierliche Innovation.\n• Skills Development Programme: Umfassende Schulungs- und Zertifizierungsprogramme für verschiedene Rollen und Kompetenzniveaus.\n• Cultural Change Management: Begleitung des kulturellen Wandels hin zu datengetriebenen Entscheidungen und AI-unterstützten Prozessen.\n• Cross-functional Collaboration: Förderung der Zusammenarbeit zwischen IT, Business Units und Fachbereichen für erfolgreiche Computer Vision Adoption."
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
    console.log('✅ FAQs batch 4 added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
