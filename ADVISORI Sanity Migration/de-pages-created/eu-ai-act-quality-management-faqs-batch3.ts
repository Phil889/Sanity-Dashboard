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
    console.log('Updating EU AI Act Quality Management page with C-Level FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'eu-ai-act-quality-management' })
    
    if (!existingDoc) {
      throw new Error('Document "eu-ai-act-quality-management" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie adressiert ADVISORI die Herausforderung der Quality-Skalierung bei exponentiell wachsenden AI-Portfolios und welche Automation-Strategien setzen wir ein?",
        answer: "Die Skalierung von AI Quality Management bei exponentiell wachsenden AI-Portfolios erfordert fundamental neue Ansätze, die weit über traditionelle QM-Methoden hinausgehen. ADVISORI entwickelt selbst-skalierende Quality-Frameworks, die durch intelligente Automation und ML-basierte Quality-Assessment-Systeme auch bei Hunderten oder Tausenden von AI-Modellen höchste Quality-Standards gewährleisten.\n\n📈 Quality-at-Scale Herausforderungen:\n• Model Portfolio Explosion: Management von Quality-Standards für diverse AI-Modelle mit unterschiedlichen Architekturen, Anwendungsfällen und Performance-Anforderungen.\n• Resource Optimization: Effiziente Allokation von Quality-Ressourcen über große AI-Portfolios hinweg ohne Qualitätskompromisse.\n• Cross-Model Quality Dependencies: Management von Quality-Interdependenzen zwischen gekoppelten AI-Systemen und Model-Ensembles.\n• Quality Consistency Assurance: Gewährleistung einheitlicher Quality-Standards über verschiedene Teams, Projekte und Entwicklungszyklen hinweg.\n\n🤖 ADVISORI's Quality Automation Excellence:\n• Autonomous Quality Assessment: Entwicklung selbstlernender Quality-Assessment-Systeme, die automatisch neue AI-Modelle evaluieren und Quality-Scores generieren.\n• Intelligent Quality Prioritization: ML-basierte Priorisierung von Quality-Efforts basierend auf Business-Impact, Risk-Level und Resource-Availability.\n• Self-Healing Quality Systems: Implementation von Quality-Frameworks, die automatisch Quality-Issues identifizieren und Corrective Actions ohne menschliche Intervention durchführen.\n• Quality Pattern Recognition: Nutzung von Pattern-Recognition zur automatischen Identifikation von Quality-Best-Practices und deren Übertragung auf neue AI-Projekte.\n• Distributed Quality Orchestration: Aufbau dezentraler Quality-Management-Systeme, die Quality-Tasks intelligent über verfügbare Ressourcen verteilen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Wie entwickelt ADVISORI Quality-Frameworks für AI-Systeme mit kritischen Safety-Anforderungen und Zero-Defect-Tolerance?",
        answer: "AI-Systeme in sicherheitskritischen Anwendungen erfordern Quality Management Ansätze mit Zero-Defect-Tolerance und höchsten Safety-Standards. ADVISORI entwickelt mission-critical Quality Frameworks, die auf bewährte Safety-Engineering-Prinzipien aufbauen und dabei die spezifischen Herausforderungen von AI-Systemen addressieren.\n\n🛡️ Mission-Critical Quality Architecture:\n• Formal Verification Integration: Anwendung mathematischer Verifikationsmethoden für AI-Systeme in safety-critical Applications.\n• Redundancy-based Quality Assurance: Implementierung mehrschichtiger Quality-Validierung mit unabhängigen Assessment-Systemen.\n• Fail-Safe Quality Design: Entwicklung von AI-Systemen, die bei Quality-Failures in sichere Zustände übergehen.\n• Continuous Safety Monitoring: Real-time Überwachung safety-kritischer AI-Parameter mit sofortigen Emergency-Response-Mechanismen.\n\n🔬 ADVISORI's Zero-Defect Quality Innovation:\n• Exhaustive Testing Frameworks: Entwicklung umfassender Testing-Strategien, die alle möglichen Failure-Modes und Edge-Cases abdecken.\n• Statistical Quality Guarantees: Anwendung statistischer Methoden zur Quantifizierung von Quality-Confidence-Levels und Failure-Probabilities.\n• Hardware-Software Co-Quality: Integrierte Quality-Ansätze, die sowohl AI-Software als auch underlying Hardware-Components berücksichtigen.\n• Certification-Ready Documentation: Entwicklung lückenloser Quality-Dokumentation für Safety-Zertifizierungen (ISO 26262, DO-178C, IEC 61508).\n• Independent Quality Validation: Aufbau unabhängiger Quality-Assessment-Teams für objektive Safety-kritische System-Evaluierung.\n• Quality Traceability Systems: Vollständige Nachverfolgbarkeit aller Quality-Entscheidungen und Test-Results für Audit- und Certification-Zwecke."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Welche innovativen Quality-Metriken entwickelt ADVISORI für die Bewertung von AI-Systemen jenseits traditioneller Performance-Indicators?",
        answer: "Traditionelle Performance-Metriken wie Accuracy oder F1-Score erfassen nur einen Bruchteil der Quality-Dimensionen moderner AI-Systeme. ADVISORI entwickelt holistische Quality-Frameworks, die ethische, soziale, ökonomische und operational Aspekte integrieren und dabei neuartige Metriken für comprehensive AI-System Assessment etablieren.\n\n🎯 Next-Generation Quality Dimensions:\n• Ethical Quality Metrics: Quantifizierung von Fairness, Bias, Transparency und Accountability durch mathematisch fundierte Ethical-AI-Metriken.\n• Explainability Quality Assessment: Bewertung der Interpretierbarkeit und Nachvollziehbarkeit von AI-Entscheidungen für verschiedene Stakeholder-Gruppen.\n• Robustness Quality Indicators: Messung der Widerstandsfähigkeit gegen Adversarial Attacks, Data Drift und Environmental Changes.\n• Social Impact Quality Scoring: Assessment der gesellschaftlichen Auswirkungen von AI-Systemen auf verschiedene Bevölkerungsgruppen.\n\n📊 ADVISORI's Innovative Quality Metrics Portfolio:\n• Business Value Quality Index: Composite-Metriken, die AI-Performance direkt mit Business-Outcomes und ROI verknüpfen.\n• Stakeholder Satisfaction Scoring: Multi-dimensionale Bewertung der AI-System-Quality aus Perspektive verschiedener Stakeholder (Users, Customers, Regulators).\n• Temporal Quality Stability: Langzeit-Monitoring von Quality-Degradation und Performance-Drift über extended Time-Periods.\n• Cross-Modal Quality Consistency: Bewertung der Quality-Konsistenz bei Multi-Modal AI-Systemen über verschiedene Input-Modalitäten hinweg.\n• Quality Predictability Metrics: Messung der Vorhersagbarkeit und Zuverlässigkeit von AI-System-Behavior unter verschiedenen Bedingungen.\n• Adaptive Quality Indicators: Dynamische Metriken, die sich automatisch an veränderte Anwendungskontexte und Requirements anpassen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie integriert ADVISORI Human-in-the-Loop Quality-Prozesse für AI-Systeme, die sowohl Automation als auch menschliche Expertise optimal kombinieren?",
        answer: "Die optimale Integration menschlicher Expertise in automatisierte Quality-Prozesse erfordert sophisticated Human-AI-Collaboration-Frameworks. ADVISORI entwickelt hybride Quality-Management-Systeme, die die Stärken von AI-Automation mit menschlicher Intuition, Kreativität und ethischem Urteilsvermögen kombinieren.\n\n🤝 Human-AI Quality Collaboration:\n• Intelligent Task Distribution: Automatische Zuweisung von Quality-Tasks basierend auf menschlichen Stärken (Kreativität, Ethik) vs. AI-Capabilities (Scale, Consistency).\n• Augmented Quality Decision-Making: AI-unterstützte Quality-Entscheidungen mit human oversight für kritische Quality-Determinations.\n• Expert Knowledge Integration: Systematische Erfassung und Integration von Domain-Expert-Knowledge in automatisierte Quality-Assessment-Systeme.\n• Quality Consensus Mechanisms: Entwicklung von Consensus-Building-Prozessen zwischen menschlichen Experts und AI-Quality-Systems.\n\n🧠 ADVISORI's Human-Centric Quality Innovation:\n• Cognitive Load Optimization: Design von Quality-Interfaces, die human cognitive capabilities optimal nutzen ohne Overwhelm zu verursachen.\n• Quality Expertise Amplification: AI-Tools, die menschliche Quality-Experts befähigen, komplexere und umfassendere Quality-Assessments durchzuführen.\n• Continuous Learning Loops: Bidirectionales Learning zwischen Human-Experts und AI-Quality-Systems für kontinuierliche Quality-Improvement.\n• Contextual Quality Guidance: AI-Systeme, die humans mit kontextrelevanten Quality-Insights und Recommendations unterstützen.\n• Quality Skill Development: Integration von Learning-Komponenten, die human Quality-Skills kontinuierlich weiterentwickeln.\n• Emotional Intelligence Integration: Berücksichtigung menschlicher emotional intelligence in Quality-Assessment-Prozessen für user-facing AI-Systems."
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
    console.log('✅ C-Level FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
