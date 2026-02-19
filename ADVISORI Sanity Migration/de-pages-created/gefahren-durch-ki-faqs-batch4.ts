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
    console.log('Updating Gefahren durch KI page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'gefahren-durch-ki' })
    
    if (!existingDoc) {
      throw new Error('Document "gefahren-durch-ki" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: 'Welche Risiken entstehen durch KI-Modell-Drift und wie implementiert ADVISORI kontinuierliche Überwachung zur Qualitätssicherung?',
        answer: "KI-Modell-Drift stellt eine schleichende aber potenziell verheerende Bedrohung für Unternehmen dar, da sich die Leistung von KI-Systemen über Zeit verschlechtern kann, ohne dass dies sofort erkennbar wird. Diese Degradation kann zu fehlerhaften Geschäftsentscheidungen, Compliance-Verletzungen und Reputationsschäden führen. ADVISORI entwickelt umfassende Monitoring- und Maintenance-Frameworks zur frühzeitigen Erkennung und proaktiven Behandlung von Modell-Drift.\n\n📉 Modell-Drift Kategorien und Geschäftsrisiken:\n• Data Drift: Veränderungen in der Datenverteilung, die dazu führen, dass Modelle auf unbekannten Mustern operieren müssen.\n• Concept Drift: Änderungen in den zugrundeliegenden Beziehungen zwischen Eingabe- und Ausgabevariablen.\n• Performance Drift: Graduelle Verschlechterung der Modellleistung durch verschiedene externe Faktoren.\n• Adversarial Drift: Bewusste Manipulation der Umgebung zur Verschlechterung der Modellleistung.\n\n🔍 ADVISORI's Comprehensive Drift Detection Framework:\n• Statistical Monitoring: Kontinuierliche statistische Analyse von Eingabedaten zur Erkennung von Verteilungsänderungen.\n• Performance Tracking: Überwachung von Modellleistungsmetriken in Echtzeit zur frühzeitigen Erkennung von Degradation.\n• Prediction Confidence Analysis: Analyse der Vorhersagekonfidenzen zur Identifikation unsicherer Modellentscheidungen.\n• Feature Importance Monitoring: Überwachung der Wichtigkeit verschiedener Features zur Erkennung von Konzeptänderungen.\n\n🛡️ Proactive Maintenance Strategies:\n• Automated Retraining Pipelines: Implementierung automatisierter Systeme für regelmäßiges Modell-Retraining mit aktuellen Daten.\n• Ensemble Robustness: Verwendung von Modell-Ensembles zur Erhöhung der Robustheit gegen Drift.\n• Adaptive Learning: Implementierung von Online-Learning-Verfahren für kontinuierliche Modellanpassung.\n• Fallback Mechanisms: Entwicklung von Backup-Systemen für den Fall kritischer Modell-Degradation.\n\n📊 Business Process Integration:\n• Alert Systems: Sofortige Benachrichtigung relevanter Stakeholder bei Erkennung kritischer Drift-Ereignisse.\n• Decision Support: Integration von Drift-Informationen in Geschäftsentscheidungsprozesse.\n• Quality Gates: Implementierung automatischer Qualitätsprüfungen vor kritischen Geschäftsentscheidungen.\n• Audit Trails: Vollständige Dokumentation von Modellleistung und Drift-Ereignissen für Compliance und Analyse.\n\n🔬 Advanced Analytics und Prediction:\n• Drift Prediction Models: Entwicklung von Modellen zur Vorhersage wahrscheinlicher Drift-Ereignisse.\n• Root Cause Analysis: Systematische Analyse der Ursachen von Modell-Drift zur Verbesserung zukünftiger Systeme.\n• Impact Assessment: Bewertung der Geschäftsauswirkungen verschiedener Drift-Szenarien.\n• Continuous Improvement: Nutzung von Drift-Erkenntnissen zur kontinuierlichen Verbesserung der Modellarchitektur."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: 'Wie schützt ADVISORI vor KI-basierten Social Engineering Angriffen und welche neuen Bedrohungen entstehen durch intelligente Manipulation?',
        answer: "KI-basierte Social Engineering Angriffe stellen eine neue Generation von Cyber-Bedrohungen dar, die menschliche Psychologie mit fortschrittlicher Technologie kombinieren, um hochgradig personalisierte und überzeugende Angriffe zu erstellen. Diese Bedrohungen können traditionelle Sicherheitsmaßnahmen umgehen, da sie auf menschliche Schwächen abzielen. ADVISORI entwickelt umfassende Abwehrstrategien, die technische Lösungen mit menschenzentrierten Sicherheitsansätzen kombinieren.\n\n🎭 KI-Enhanced Social Engineering Bedrohungen:\n• Hyper-Personalized Phishing: Verwendung von KI zur Erstellung maßgeschneiderter Phishing-Nachrichten basierend auf öffentlich verfügbaren Daten.\n• Voice Cloning Attacks: Nachahmung von Stimmen vertrauenswürdiger Personen für Betrugsversuche oder Manipulation.\n• Behavioral Mimicry: KI-gestützte Nachahmung von Kommunikationsstilen und Verhaltensmustern zur Täuschung.\n• Automated Social Manipulation: Skalierte Manipulation durch KI-gesteuerte Bots und automatisierte Interaktionen.\n\n🛡️ ADVISORI's Multi-Dimensional Defense Strategy:\n• AI-Powered Detection: Einsatz von KI-Systemen zur Erkennung ungewöhnlicher Kommunikationsmuster und verdächtiger Inhalte.\n• Behavioral Authentication: Implementierung von Systemen zur Verifikation der Identität basierend auf Verhaltensmustern.\n• Content Analysis: Tiefgreifende Analyse von Nachrichten und Medieninhalten zur Erkennung von Manipulation.\n• Real-time Risk Assessment: Kontinuierliche Bewertung des Risikos eingehender Kommunikation.\n\n🧠 Human-Centric Security Measures:\n• Advanced Security Awareness: Spezialisierte Schulungen zu KI-basierten Social Engineering Techniken.\n• Verification Protocols: Etablierung strenger Verifikationsverfahren für kritische Anfragen oder Anweisungen.\n• Psychological Resilience Training: Aufbau mentaler Widerstandsfähigkeit gegen Manipulationsversuche.\n• Cultural Security Integration: Einbettung von Sicherheitsbewusstsein in die Unternehmenskultur.\n\n🔍 Advanced Threat Intelligence:\n• Adversarial AI Monitoring: Überwachung der Entwicklung neuer KI-basierter Angriffstechniken.\n• Threat Actor Profiling: Analyse der Taktiken und Techniken verschiedener Angreifer.\n• Predictive Threat Modeling: Vorhersage wahrscheinlicher zukünftiger Angriffsvektoren.\n• Industry Collaboration: Zusammenarbeit mit anderen Organisationen zum Austausch von Threat Intelligence.\n\n📊 Organizational Resilience Building:\n• Incident Response Planning: Spezialisierte Verfahren für den Umgang mit KI-basierten Social Engineering Angriffen.\n• Communication Security: Sichere Kommunikationskanäle und -protokolle für kritische Geschäftskommunikation.\n• Trust Verification Systems: Implementierung von Systemen zur Verifikation der Vertrauenswürdigkeit von Kommunikation.\n• Continuous Monitoring: Langfristige Überwachung von Kommunikationsmustern zur Erkennung von Anomalien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: 'Welche spezifischen Risiken entstehen durch KI in kritischen Infrastrukturen und wie implementiert ADVISORI Sicherheitsmaßnahmen für systemkritische Anwendungen?',
        answer: "KI-Systeme in kritischen Infrastrukturen bergen einzigartige Risiken, da Ausfälle oder Kompromittierungen weitreichende gesellschaftliche und wirtschaftliche Folgen haben können. Von Energieversorgung über Verkehrssysteme bis hin zu Finanzinfrastrukturen - die Integration von KI in kritische Systeme erfordert höchste Sicherheitsstandards. ADVISORI entwickelt spezialisierte Sicherheitsframeworks für systemkritische KI-Anwendungen.\n\n⚡ Kritische Infrastruktur KI-Risiken:\n• Cascading Failures: KI-Ausfälle, die Kettenreaktionen in vernetzten Infrastruktursystemen auslösen können.\n• Adversarial Attacks on Critical Systems: Gezielte Angriffe auf KI-Systeme zur Störung kritischer Dienste.\n• Safety-Security Convergence: Überschneidung von Sicherheits- und Safety-Risiken in KI-gesteuerten Systemen.\n• Systemic Dependencies: Abhängigkeiten zwischen verschiedenen kritischen Systemen, die durch KI-Ausfälle betroffen sein können.\n\n🏗️ ADVISORI's Critical Infrastructure Security Framework:\n• Redundancy und Failover: Implementierung mehrfacher Backup-Systeme und automatischer Failover-Mechanismen.\n• Isolation und Segmentation: Strikte Trennung kritischer KI-Systeme von weniger kritischen Netzwerken.\n• Real-time Monitoring: Kontinuierliche Überwachung aller kritischen KI-Komponenten mit sofortiger Alarmierung.\n• Formal Verification: Mathematische Verifikation kritischer KI-Algorithmen zur Gewährleistung korrekten Verhaltens.\n\n🔒 Advanced Security Measures:\n• Hardware Security Modules: Verwendung spezialisierter Hardware zum Schutz kritischer KI-Operationen.\n• Secure Enclaves: Implementierung isolierter Ausführungsumgebungen für kritische KI-Berechnungen.\n• Cryptographic Protection: Umfassende Verschlüsselung aller kritischen Daten und Kommunikation.\n• Zero Trust Architecture: Implementierung von Zero-Trust-Prinzipien für alle kritischen Systemzugriffe.\n\n🚨 Emergency Response und Business Continuity:\n• Incident Command Systems: Spezialisierte Kommandostrukturen für KI-bezogene Notfälle in kritischen Infrastrukturen.\n• Rapid Recovery Procedures: Schnelle Wiederherstellungsverfahren für kompromittierte oder ausgefallene KI-Systeme.\n• Cross-Sector Coordination: Koordination mit anderen kritischen Infrastrukturbetreibern bei systemweiten Ereignissen.\n• Regulatory Compliance: Einhaltung aller relevanten Vorschriften für kritische Infrastrukturen.\n\n📋 Governance und Risk Management:\n• Risk Assessment Frameworks: Spezialisierte Risikobewertungsverfahren für kritische KI-Infrastrukturen.\n• Safety Case Development: Entwicklung umfassender Safety Cases für KI-Systeme in kritischen Anwendungen.\n• Continuous Auditing: Regelmäßige Sicherheitsaudits und Penetrationstests für kritische Systeme.\n• Stakeholder Engagement: Enge Zusammenarbeit mit Regulierungsbehörden und anderen Stakeholdern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: 'Wie adressiert ADVISORI die Herausforderungen von KI-Explainability in sicherheitskritischen Anwendungen und gewährleistet Transparenz bei gleichzeitigem Schutz vor Reverse Engineering?',
        answer: "Die Balance zwischen KI-Explainability und Sicherheit stellt eine der komplexesten Herausforderungen in der modernen KI-Entwicklung dar. Während Transparenz für Vertrauen, Compliance und Debugging essentiell ist, kann zu viel Einblick in KI-Systeme Angreifern helfen, Schwachstellen zu identifizieren oder Modelle zu kompromittieren. ADVISORI entwickelt innovative Ansätze für sichere Explainability, die Transparenz ermöglichen, ohne Sicherheit zu gefährden.\n\n🔍 Explainability-Security Dilemma:\n• Information Leakage: Detaillierte Erklärungen können sensible Informationen über Modellarchitektur oder Trainingsdaten preisgeben.\n• Adversarial Exploitation: Angreifer können Erklärungen nutzen, um gezielte Adversarial Attacks zu entwickeln.\n• Model Extraction Risks: Umfassende Erklärungen können bei der unbefugten Rekonstruktion von Modellen helfen.\n• Privacy Violations: Erklärungen können unbeabsichtigt personenbezogene Daten aus Trainingsdaten offenlegen.\n\n🛡️ ADVISORI's Secure Explainability Framework:\n• Differential Privacy for Explanations: Implementierung von Differential Privacy Techniken für Erklärungen zur Minimierung von Information Leakage.\n• Layered Explanation Systems: Entwicklung mehrstufiger Erklärungssysteme mit unterschiedlichen Detailgraden je nach Nutzerrolle.\n• Adversarial-Robust Explanations: Erstellung von Erklärungen, die gegen Adversarial Attacks resistent sind.\n• Selective Information Disclosure: Intelligente Auswahl der preisgegebenen Informationen basierend auf Sicherheitsrisiken.\n\n🎯 Context-Aware Explanation Strategies:\n• Role-Based Explanations: Anpassung der Erklärungstiefe an die Rolle und Berechtigung des Nutzers.\n• Risk-Adaptive Transparency: Dynamische Anpassung der Transparenz basierend auf dem aktuellen Bedrohungslevel.\n• Temporal Explanation Controls: Zeitlich begrenzte Erklärungen für besonders sensitive Operationen.\n• Audit-Trail Integration: Vollständige Protokollierung aller Explanation-Zugriffe für Sicherheitsanalysen.\n\n🔬 Technical Innovation für Secure Explainability:\n• Homomorphic Explanation: Entwicklung von Erklärungsverfahren, die auf verschlüsselten Daten operieren können.\n• Federated Explanation: Verteilte Erklärungssysteme, die lokale Datenschutzanforderungen respektieren.\n• Synthetic Explanation Generation: Erstellung synthetischer Erklärungen, die Verständnis ermöglichen ohne echte Daten preiszugeben.\n• Explanation Watermarking: Einbettung von Wasserzeichen in Erklärungen zur Nachverfolgung unbefugter Nutzung.\n\n📊 Governance und Compliance Balance:\n• Regulatory Alignment: Erfüllung von Explainability-Anforderungen bei gleichzeitiger Wahrung von Sicherheitsstandards.\n• Stakeholder Communication: Transparente Kommunikation über Explainability-Limitierungen aus Sicherheitsgründen.\n• Ethics Committee Integration: Einbindung von Ethik-Gremien in Entscheidungen über Explainability-Security Trade-offs.\n• Continuous Risk Assessment: Regelmäßige Neubewertung der Balance zwischen Transparenz und Sicherheit."
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
