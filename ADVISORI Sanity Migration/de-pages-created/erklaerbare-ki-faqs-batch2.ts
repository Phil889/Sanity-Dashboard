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
    console.log('Updating Erklärbare KI page with Technical Implementation FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'erklaerbare-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "erklaerbare-ki" not found')
    }
    
    // Create new Technical Implementation FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Welche konkreten XAI-Techniken und Methoden setzt ADVISORI ein, um komplexe Machine Learning Modelle interpretierbar zu machen, ohne dabei die Modellperformance zu beeinträchtigen?",
        answer: "ADVISORI setzt auf einen multi-methodischen Ansatz zur Implementierung von Explainable AI, der modernste Interpretability-Techniken mit performance-optimierten Implementierungen kombiniert. Unser Ziel ist es, maximale Transparenz zu erreichen, ohne die Vorhersagequalität Ihrer KI-Systeme zu kompromittieren. Wir nutzen sowohl model-agnostic als auch model-specific Ansätze, um für jeden Anwendungsfall die optimale Balance zwischen Erklärbarkeit und Performance zu finden.\n\n🔬 Model-Agnostic Explainability Techniken:\n• SHAP (SHapley Additive exPlanations): Implementierung von TreeSHAP, KernelSHAP und DeepSHAP für verschiedene Modelltypen mit optimierten Berechnungsalgorithmen für Enterprise-Scale-Anwendungen.\n• LIME (Local Interpretable Model-agnostic Explanations): Adaptive LIME-Implementierungen mit intelligenter Sampling-Strategien für stabile und konsistente lokale Erklärungen.\n• Permutation Feature Importance: Robuste Implementierung mit statistischer Signifikanzprüfung und Confidence-Intervallen für zuverlässige Feature-Ranking.\n• Counterfactual Explanations: Generierung von What-if-Szenarien und minimalen Änderungsvorschlägen für bessere Entscheidungsunterstützung.\n\n🧠 Model-Specific Interpretability Ansätze:\n• Attention Mechanisms: Visualisierung und Analyse von Attention-Weights in Transformer-Modellen für nachvollziehbare NLP- und Computer Vision-Anwendungen.\n• Gradient-based Methods: Implementierung von Integrated Gradients, GradCAM und Layer-wise Relevance Propagation für Deep Learning Modelle.\n• Tree-based Interpretability: Native Feature Importance und Partial Dependence Plots für Random Forest und Gradient Boosting Modelle.\n• Linear Model Coefficients: Statistische Analyse und Visualisierung von Koeffizienten in linearen und logistischen Regressionsmodellen.\n\n⚡ Performance-Optimierte Implementierung:\n• Efficient Computation: Verwendung von approximativen Methoden und Sampling-Techniken für skalierbare Erklärungen auch bei großen Datensätzen.\n• Caching und Preprocessing: Intelligente Zwischenspeicherung von Erklärungen und Vorverarbeitung für Echtzeit-Anwendungen.\n• Parallel Processing: Multi-Threading und GPU-Acceleration für schnelle Berechnung komplexer Erklärungen.\n• Adaptive Explanation Depth: Dynamische Anpassung der Erklärungstiefe basierend auf Anwendungskontext und Performance-Anforderungen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Wie gewährleistet ADVISORI die Konsistenz und Zuverlässigkeit von XAI-Erklärungen über verschiedene Modellversionen und Datenverteilungen hinweg, insbesondere bei kontinuierlichem Model Retraining?",
        answer: "Die Konsistenz und Zuverlässigkeit von XAI-Erklärungen ist entscheidend für das Vertrauen in KI-Systeme, insbesondere in dynamischen Umgebungen mit kontinuierlichem Model Retraining. ADVISORI implementiert robuste Monitoring- und Validierungssysteme, die sicherstellen, dass Erklärungen über Zeit und Modellversionen hinweg stabil und vertrauenswürdig bleiben.\n\n📊 Explanation Consistency Monitoring:\n• Explanation Drift Detection: Kontinuierliche Überwachung von Veränderungen in Feature Importance und Erklärungsmustern zwischen Modellversionen mit statistischen Tests und Anomalie-Erkennung.\n• Stability Metrics: Implementierung von Konsistenz-Metriken wie Explanation Fidelity, Stability Score und Feature Ranking Correlation für quantitative Bewertung der Erklärungsqualität.\n• Cross-Version Validation: Systematischer Vergleich von Erklärungen zwischen verschiedenen Modellversionen mit automatisierten Alerts bei signifikanten Abweichungen.\n• Temporal Consistency Analysis: Analyse von Erklärungsmustern über Zeit hinweg zur Identifikation von Trends und unerwarteten Veränderungen.\n\n🔄 Robust Explanation Generation:\n• Ensemble Explanations: Kombination mehrerer Erklärungsmethoden für robustere und stabilere Insights mit Confidence-Scoring für jede Erklärung.\n• Bootstrap Sampling: Verwendung von Bootstrap-Methoden zur Schätzung der Unsicherheit in Erklärungen und Generierung von Confidence-Intervallen.\n• Adversarial Robustness: Testing der Erklärungen gegen kleine Eingabeperturbationen zur Sicherstellung der Stabilität gegenüber Rauschen.\n• Reference Point Standardization: Verwendung konsistenter Referenzpunkte und Baseline-Werte für vergleichbare Erklärungen über verschiedene Modellversionen.\n\n🎯 Adaptive Explanation Frameworks:\n• Context-Aware Explanations: Anpassung der Erklärungstiefe und -art basierend auf Datenverteilung und Modellkomplexität für optimale Relevanz.\n• Dynamic Threshold Management: Automatische Anpassung von Erklärungsschwellenwerten basierend auf Modellperformance und Datencharakteristika.\n• Explanation Versioning: Systematische Versionierung und Archivierung von Erklärungsmodellen parallel zu ML-Modellversionen für Nachvollziehbarkeit.\n• Continuous Calibration: Regelmäßige Kalibrierung von Erklärungsmodellen gegen Ground Truth und Expertenwissen für anhaltende Genauigkeit."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Welche spezifischen Herausforderungen entstehen bei der Implementierung von XAI in hochregulierten Branchen und wie adressiert ADVISORI die besonderen Anforderungen von Finanzdienstleistungen, Healthcare und Automotive?",
        answer: "Hochregulierte Branchen stellen besondere Anforderungen an Explainable AI, die über technische Implementierung hinausgehen und spezifische Compliance-, Sicherheits- und Qualitätsstandards erfüllen müssen. ADVISORI hat spezialisierte XAI-Frameworks für verschiedene regulierte Branchen entwickelt, die sowohl technische Excellence als auch regulatorische Compliance gewährleisten.\n\n🏦 Finanzdienstleistungen - Regulatory Excellence:\n• MiFID II und GDPR Compliance: Implementierung von Right-to-Explanation-konformen Erklärungssystemen mit audit-fähiger Dokumentation für automatisierte Entscheidungen.\n• Model Risk Management: Integration von XAI in bestehende Model Risk Management Frameworks mit quantitativen Risikometriken und Stress-Testing der Erklärungen.\n• Fair Lending Compliance: Spezialisierte Bias-Detection und Fairness-Monitoring für Kreditentscheidungen mit demografischen Parity-Checks und Disparate Impact-Analysen.\n• Regulatory Reporting: Automatisierte Generierung von regulatorischen Reports mit XAI-basierten Begründungen für Aufsichtsbehörden wie BaFin und EBA.\n\n🏥 Healthcare - Patient Safety und Clinical Excellence:\n• FDA und CE-MDR Compliance: Entwicklung von XAI-Systemen für Medizinprodukte mit klinischer Validierung und Post-Market-Surveillance-Integration.\n• Clinical Decision Support: Implementierung von evidenzbasierten Erklärungen, die medizinische Guidelines und Best Practices referenzieren für bessere Arzt-Akzeptanz.\n• Patient Privacy Protection: HIPAA-konforme XAI-Implementierungen mit Differential Privacy und Federated Learning für Datenschutz-preservierende Erklärungen.\n• Clinical Workflow Integration: Nahtlose Integration von XAI in bestehende Electronic Health Record Systeme mit kontextuellen Erklärungen für verschiedene Stakeholder.\n\n🚗 Automotive - Safety-Critical AI Systems:\n• ISO 26262 Functional Safety: Entwicklung von XAI-Systemen für safety-critical Automotive-Anwendungen mit ASIL-konformer Dokumentation und Hazard Analysis.\n• UNECE WP.29 Compliance: Implementierung von XAI für autonome Fahrsysteme entsprechend internationaler Regulierungsstandards für automatisierte Fahrzeuge.\n• Real-time Explanation Generation: Hochperformante XAI-Systeme für Echtzeit-Entscheidungen in autonomen Fahrzeugen mit Latenz-optimierten Erklärungsalgorithmen.\n• Incident Investigation Support: Forensische XAI-Capabilities für Post-Incident-Analysen mit detaillierter Rekonstruktion von Entscheidungspfaden."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie entwickelt ADVISORI stakeholder-spezifische Erklärungsmodelle, die sowohl für technische Teams als auch für Endnutzer und Regulierungsbehörden verständlich und actionable sind?",
        answer: "Die Entwicklung stakeholder-spezifischer Erklärungsmodelle ist ein Kernbestandteil von ADVISORI's XAI-Strategie. Wir verstehen, dass verschiedene Zielgruppen unterschiedliche Informationsbedürfnisse, technische Hintergründe und Entscheidungskontext haben. Unser multi-layered Explanation Framework ermöglicht es, aus derselben KI-Entscheidung verschiedene Erklärungsebenen zu generieren, die jeweils optimal auf die spezifischen Bedürfnisse der Zielgruppe zugeschnitten sind.\n\n👨‍💻 Technical Teams - Deep Dive Explanations:\n• Feature Engineering Insights: Detaillierte Analyse der Feature-Transformationen und deren Einfluss auf Modellentscheidungen mit Code-Level-Nachvollziehbarkeit.\n• Model Architecture Explanations: Visualisierung von Modellstrukturen, Attention-Mechanismen und Layer-wise Aktivierungen für Deep Learning Modelle.\n• Performance Debugging: Granulare Analyse von Modellfehlern mit Feature-Level-Attribution und Konfidenz-Intervallen für systematische Modellverbesserung.\n• Hyperparameter Impact Analysis: Quantifizierung des Einflusses verschiedener Hyperparameter auf Erklärungen und Modellverhalten.\n\n👥 End Users - Intuitive und Actionable Insights:\n• Natural Language Explanations: Automatische Generierung verständlicher Textbeschreibungen von KI-Entscheidungen in natürlicher Sprache ohne technischen Jargon.\n• Visual Explanation Interfaces: Intuitive Dashboards mit interaktiven Visualisierungen, die komplexe Zusammenhänge durch Charts, Heatmaps und What-if-Szenarien erklären.\n• Contextual Recommendations: Actionable Empfehlungen basierend auf XAI-Insights, die Nutzern konkrete Handlungsoptionen aufzeigen.\n• Confidence Communication: Verständliche Darstellung von Unsicherheit und Konfidenz in KI-Entscheidungen mit Risiko-Kommunikation.\n\n⚖️ Regulatory Bodies - Compliance-Ready Documentation:\n• Audit Trail Generation: Comprehensive Dokumentation aller Entscheidungsschritte mit Zeitstempeln, Datenquellen und verwendeten Algorithmen für regulatorische Prüfungen.\n• Statistical Validation Reports: Quantitative Bewertung der Erklärungsqualität mit statistischen Tests, Signifikanz-Analysen und Robustness-Metriken.\n• Bias and Fairness Assessment: Systematische Analyse von Diskriminierungsrisiken mit demografischen Aufschlüsselungen und Fairness-Metriken entsprechend regulatorischer Standards.\n• Compliance Mapping: Direkte Zuordnung von XAI-Outputs zu spezifischen regulatorischen Anforderungen wie GDPR Article 22 oder EU AI Act Transparency-Verpflichtungen."
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
