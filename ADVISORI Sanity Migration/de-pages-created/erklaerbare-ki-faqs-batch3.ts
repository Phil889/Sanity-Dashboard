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
    console.log('Updating Erklärbare KI page with Business Value & Ethics FAQs batch 3 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'erklaerbare-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "erklaerbare-ki" not found')
    }
    
    // Create new Business Value & Ethics FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie kann ADVISORI durch Explainable AI die Akzeptanz und das Vertrauen von Endnutzern in KI-Systeme steigern und welche messbaren Auswirkungen hat dies auf User Experience und Adoption Rates?",
        answer: "Die Steigerung von Nutzerakzeptanz und Vertrauen durch Explainable AI ist ein zentraler Erfolgsfaktor für die erfolgreiche Implementierung von KI-Systemen. ADVISORI entwickelt nutzerorientierte XAI-Lösungen, die komplexe AI-Entscheidungen in verständliche, actionable Insights übersetzen und dadurch messbare Verbesserungen in User Experience und Adoption Rates erzielen.\n\n👥 User-Centric Explanation Design:\n• Persona-basierte Erklärungsmodelle: Entwicklung verschiedener Erklärungsebenen basierend auf Nutzergruppen, technischem Hintergrund und Entscheidungskontext für optimale Verständlichkeit.\n• Progressive Disclosure: Implementierung von mehrstufigen Erklärungssystemen, die Nutzern ermöglichen, von oberflächlichen zu detaillierten Erklärungen zu navigieren je nach Interesse und Bedarf.\n• Interactive Explanation Interfaces: Entwicklung interaktiver Dashboards und What-if-Szenarien, die Nutzern ermöglichen, KI-Entscheidungen zu explorieren und zu verstehen.\n• Contextual Help Systems: Integration kontextueller Hilfestellungen und Tooltips, die Erklärungen genau dann bereitstellen, wenn Nutzer sie benötigen.\n\n📊 Messbare User Experience Verbesserungen:\n• Trust Metrics: Implementierung quantitativer Trust-Scores basierend auf Nutzerverhalten, Interaktionsmustern und explizitem Feedback zur Messung des Vertrauensaufbaus.\n• Adoption Rate Analytics: Systematische Messung von Adoption-Metriken wie Time-to-Value, Feature-Nutzung und User Retention in Korrelation mit XAI-Implementierung.\n• User Satisfaction Scoring: Regelmäßige Bewertung der Nutzerzufriedenheit mit KI-Entscheidungen und deren Erklärungen durch Surveys und Behavioral Analytics.\n• Error Recovery Metrics: Messung der Fähigkeit von Nutzern, KI-Fehler zu verstehen und zu korrigieren basierend auf bereitgestellten Erklärungen.\n\n🎯 Behavioral Change und Engagement:\n• Explanation-driven Learning: Design von Erklärungssystemen, die Nutzer über Zeit hinweg über KI-Funktionsweise aufklären und dadurch Vertrauen und Kompetenz aufbauen.\n• Feedback Loop Integration: Implementierung von Mechanismen, die Nutzerfeedback zu Erklärungen sammeln und zur kontinuierlichen Verbesserung der XAI-Systeme nutzen.\n• Gamification Elements: Integration spielerischer Elemente in Erklärungssysteme zur Steigerung des Nutzerengagements und der Lernbereitschaft.\n• Community Building: Aufbau von Nutzergemeinschaften rund um transparente KI-Systeme zur Förderung von Wissensaustausch und kollektivem Lernen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielt Explainable AI bei der Implementierung ethischer KI-Prinzipien und wie gewährleistet ADVISORI, dass XAI-Systeme Fairness, Accountability und Transparency fördern?",
        answer: "Explainable AI ist das Fundament für ethische KI-Implementierungen und ermöglicht die praktische Umsetzung von Fairness, Accountability und Transparency in KI-Systemen. ADVISORI integriert ethische Prinzipien direkt in die XAI-Architektur und schafft Systeme, die nicht nur transparent sind, sondern aktiv zur Förderung ethischer AI-Praktiken beitragen.\n\n⚖️ Fairness durch Transparenz:\n• Bias Detection und Visualization: Systematische Identifikation und Visualisierung von Bias-Mustern in KI-Entscheidungen mit demografischen Aufschlüsselungen und Fairness-Metriken.\n• Counterfactual Fairness Analysis: Implementierung von What-if-Analysen zur Bewertung, wie sich Entscheidungen bei Änderung sensibler Attribute verhalten würden.\n• Intersectional Bias Assessment: Analyse von Bias-Effekten über multiple demografische Dimensionen hinweg zur Identifikation komplexer Diskriminierungsmuster.\n• Fairness-Constraint Integration: Entwicklung von XAI-Systemen, die Fairness-Constraints direkt in Erklärungen integrieren und Abweichungen transparent machen.\n\n🔍 Accountability durch Nachvollziehbarkeit:\n• Decision Audit Trails: Comprehensive Dokumentation aller Entscheidungsschritte mit Zeitstempeln, Datenquellen und verwendeten Algorithmen für vollständige Nachvollziehbarkeit.\n• Responsibility Attribution: Klare Zuordnung von Verantwortlichkeiten für verschiedene Aspekte von KI-Entscheidungen von Datenqualität bis Algorithmus-Design.\n• Impact Assessment Integration: Systematische Bewertung der gesellschaftlichen und individuellen Auswirkungen von KI-Entscheidungen mit Risiko-Kommunikation.\n• Stakeholder Notification Systems: Automatisierte Benachrichtigung relevanter Stakeholder bei kritischen KI-Entscheidungen mit entsprechenden Erklärungen.\n\n🌟 Transparency als Grundprinzip:\n• Multi-Level Transparency: Bereitstellung verschiedener Transparenz-Ebenen für unterschiedliche Stakeholder von technischen Details bis zu verständlichen Zusammenfassungen.\n• Algorithmic Transparency: Offenlegung von Algorithmus-Funktionsweise, Limitationen und Unsicherheiten in verständlicher Form.\n• Data Provenance Tracking: Nachverfolgung der Herkunft und Transformation von Daten durch den gesamten ML-Pipeline für vollständige Transparenz.\n• Continuous Transparency Monitoring: Regelmäßige Bewertung und Verbesserung der Transparenz-Qualität basierend auf Stakeholder-Feedback und Best Practices."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie adressiert ADVISORI die Herausforderung des Trade-offs zwischen Modellkomplexität und Erklärbarkeit und welche innovativen Ansätze nutzen wir für hochperformante, aber dennoch interpretierbare KI-Systeme?",
        answer: "Der Trade-off zwischen Modellkomplexität und Erklärbarkeit ist eine der zentralen Herausforderungen in der praktischen XAI-Implementierung. ADVISORI hat innovative Ansätze entwickelt, die es ermöglichen, hochperformante KI-Systeme zu schaffen, ohne dabei die Interpretierbarkeit zu opfern. Unser Ziel ist es, das Beste aus beiden Welten zu kombinieren durch intelligente Architektur-Entscheidungen und fortschrittliche Erklärungstechniken.\n\n🏗️ Hybrid Architecture Approaches:\n• Interpretable-by-Design Models: Entwicklung von Modellarchitekturen, die intrinsisch interpretierbar sind, wie Attention-basierte Transformer mit expliziten Reasoning-Pfaden.\n• Ensemble Interpretability: Kombination mehrerer interpretierbarer Modelle zu leistungsstarken Ensembles mit aggregierten Erklärungen für bessere Performance bei erhaltener Transparenz.\n• Hierarchical Explanation Systems: Implementierung mehrstufiger Modelle, bei denen einfache, interpretierbare Modelle für Standardfälle und komplexe Modelle nur für Edge Cases verwendet werden.\n• Modular AI Architectures: Design modularer KI-Systeme, bei denen einzelne Komponenten interpretierbar sind und das Gesamtsystem durch Komposition verständlich bleibt.\n\n🔬 Advanced Explainability Techniques:\n• Neural-Symbolic Integration: Kombination neuronaler Netzwerke mit symbolischen Reasoning-Systemen für leistungsstarke, aber erklärbare Entscheidungsfindung.\n• Concept-based Explanations: Entwicklung von Erklärungen basierend auf high-level Konzepten statt low-level Features für bessere menschliche Verständlichkeit.\n• Prototype-based Learning: Implementierung von Modellen, die Entscheidungen durch Ähnlichkeit zu interpretierbaren Prototypen erklären.\n• Causal Explanation Models: Integration kausaler Inferenz in Erklärungsmodelle für tieferes Verständnis von Ursache-Wirkungs-Beziehungen.\n\n⚡ Performance-Optimized Interpretability:\n• Efficient Approximation Methods: Entwicklung schneller Approximationsalgorithmen für komplexe Erklärungsmethoden zur Reduktion der Computational Overhead.\n• Selective Explanation Generation: Intelligente Auswahl, wann detaillierte Erklärungen benötigt werden basierend auf Kontext, Unsicherheit und Stakeholder-Bedürfnissen.\n• Cached Explanation Systems: Implementierung intelligenter Caching-Mechanismen für häufig angeforderte Erklärungen zur Verbesserung der Response-Zeit.\n• Real-time Explanation Pipelines: Entwicklung von Echtzeit-Erklärungssystemen, die auch bei hochfrequenten Entscheidungen interpretierbare Insights liefern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Welche spezifischen Metriken und KPIs verwendet ADVISORI zur Bewertung der Qualität und Effektivität von XAI-Implementierungen und wie messen wir den Erfolg von Explainability-Initiativen?",
        answer: "Die Bewertung der Qualität und Effektivität von XAI-Implementierungen erfordert ein umfassendes Metriken-Framework, das sowohl technische als auch geschäftliche Aspekte berücksichtigt. ADVISORI hat ein multi-dimensionales Bewertungssystem entwickelt, das objektive Messungen mit subjektiven Bewertungen kombiniert und kontinuierliche Verbesserung der Explainability-Qualität ermöglicht.\n\n📊 Technical Quality Metrics:\n• Explanation Fidelity: Messung der Genauigkeit von Erklärungen durch Vergleich mit Ground Truth und Expertenbewertungen mit quantitativen Fidelity-Scores.\n• Stability und Robustness: Bewertung der Konsistenz von Erklärungen über verschiedene Eingaben und Modellversionen hinweg mit Stability-Koeffizienten.\n• Completeness Metrics: Quantifizierung des Abdeckungsgrads von Erklärungen bezüglich aller relevanten Entscheidungsfaktoren.\n• Computational Efficiency: Messung der Performance-Impact von Erklärungsgenerierung auf Systemlatenz und Ressourcenverbrauch.\n\n👥 User Experience Metrics:\n• Comprehensibility Scores: Systematische Bewertung der Verständlichkeit von Erklärungen durch Nutzerstudien und Comprehension-Tests.\n• Trust Calibration: Messung der Korrelation zwischen Nutzervertrauen und tatsächlicher Modellperformance zur Bewertung angemessener Vertrauensbildung.\n• Task Performance Impact: Quantifizierung der Auswirkung von Erklärungen auf Nutzerentscheidungen und Task-Completion-Raten.\n• Cognitive Load Assessment: Bewertung der mentalen Belastung durch Erklärungen mittels Eye-Tracking und Response-Time-Analysen.\n\n🎯 Business Impact KPIs:\n• Adoption Rate Correlation: Messung des Zusammenhangs zwischen XAI-Qualität und Nutzeradoption von KI-Systemen.\n• Decision Quality Improvement: Quantifizierung der Verbesserung menschlicher Entscheidungen durch XAI-unterstützte Insights.\n• Compliance Readiness Score: Bewertung der Erfüllung regulatorischer Transparenz-Anforderungen durch systematische Compliance-Audits.\n• ROI von Explainability: Messung des Return on Investment von XAI-Implementierungen durch Kostenvermeidung und Wertschöpfung.\n\n🔄 Continuous Improvement Framework:\n• Explanation Quality Dashboards: Real-time Monitoring von Erklärungsqualität mit automatisierten Alerts bei Qualitätsverschlechterung.\n• A/B Testing für Explanations: Systematisches Testing verschiedener Erklärungsansätze zur Optimierung von Verständlichkeit und Effektivität.\n• Feedback Loop Analytics: Analyse von Nutzerfeedback zu Erklärungen für kontinuierliche Verbesserung der XAI-Systeme.\n• Longitudinal Impact Studies: Langzeit-Bewertung der Auswirkungen von XAI auf Nutzerverhalten und Geschäftsergebnisse."
      }
    ]
    
    // Update the document with new FAQs
    const updatedFaqs = [...(existingDoc.faq || []), ...newFaqs]
    
    console.log(`Adding ${newFaqs.length} new Business Value & Ethics FAQs (German) to the document...`)
    const transaction = client.transaction()
    transaction.patch(existingDoc._id, {
      set: {
        faq: updatedFaqs
      }
    })
    
    await transaction.commit()
    console.log('✅ Business Value & Ethics FAQs batch 3 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
