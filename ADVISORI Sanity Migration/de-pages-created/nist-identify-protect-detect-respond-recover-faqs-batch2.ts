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
    console.log('Updating NIST Identify, Protect, Detect, Respond, Recover page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-identify-protect-detect-respond-recover' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-identify-protect-detect-respond-recover" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie entwickelt ADVISORI eine integrierte NIST CSF-Maturity-Strategie, die schrittweise von reaktiver zu proaktiver und schließlich zu prädiktiver Cybersicherheit führt?",
        answer: "Die Entwicklung einer ausgereiften Cybersicherheitsorganisation erfordert einen systematischen Ansatz zur Steigerung der Maturity über alle fünf NIST CSF-Kernfunktionen hinweg. ADVISORI entwickelt maßgeschneiderte Maturity-Roadmaps, die Unternehmen von grundlegenden Sicherheitsmaßnahmen zu fortgeschrittenen, selbstadaptierenden Cybersicherheitsarchitekturen führen.\n\n📈 Structured Maturity Evolution Framework:\n• Level 1 - Reactive Foundation: Etablierung grundlegender Sicherheitskontrollen und Incident Response-Capabilities mit Fokus auf Compliance und Risikominimierung.\n• Level 2 - Managed Protection: Implementierung strukturierter Prozesse, kontinuierlicher Überwachung und standardisierter Response-Verfahren mit messbaren KPIs.\n• Level 3 - Proactive Defense: Integration von Threat Intelligence, automatisierter Erkennung und präventiven Sicherheitsmaßnahmen mit Business-Alignment.\n• Level 4 - Adaptive Security: Entwicklung selbstlernender Systeme, dynamischer Risikobewertung und automatisierter Threat Response mit kontinuierlicher Optimierung.\n• Level 5 - Predictive Excellence: Implementierung KI-gestützter Vorhersagemodelle, autonomer Sicherheitsentscheidungen und strategischer Cybersicherheits-Innovation.\n\n🎯 ADVISORI's Maturity Acceleration Approach:\n• Assessment-Based Baseline: Umfassende Bewertung der aktuellen Cybersicherheits-Maturity über alle fünf NIST CSF-Funktionen mit Identifikation von Stärken und Verbesserungspotenzialen.\n• Business-Aligned Roadmapping: Entwicklung einer Maturity-Roadmap, die direkt mit Geschäftszielen, Wachstumsplänen und Risikotoleranz verknüpft ist.\n• Incremental Value Delivery: Strukturierte Implementierung in Phasen, die kontinuierlichen Geschäftswert liefern und ROI-Nachweise ermöglichen.\n• Change Management Excellence: Ganzheitliche Begleitung der organisatorischen Transformation mit Fokus auf Kultur, Prozesse und Technologie.\n\n💡 Advanced Capabilities Development:\n• Threat Intelligence Integration: Systematischer Aufbau von Threat Intelligence-Capabilities zur proaktiven Bedrohungserkennung und -prävention.\n• Security Automation Platform: Implementierung fortgeschrittener SOAR-Plattformen zur Automatisierung von Routine-Security-Tasks und Response-Prozessen.\n• Machine Learning Analytics: Integration von ML-basierten Anomalieerkennung und Verhaltensmuster-Analyse für erweiterte Detection-Capabilities.\n• Strategic Security Innovation: Entwicklung zukunftsorientierter Sicherheitsarchitekturen, die emerging Technologies und Bedrohungen berücksichtigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche Rolle spielt die IDENTIFY-Funktion bei der Etablierung einer datengetriebenen Cybersicherheits-Governance und wie quantifiziert ADVISORI Cyber-Risiken für strategische Entscheidungen?",
        answer: "Die IDENTIFY-Funktion bildet das analytische Fundament für eine datengetriebene Cybersicherheits-Governance, die es C-Level-Führungskräften ermöglicht, fundierte strategische Entscheidungen auf Basis quantifizierbarer Risikodaten zu treffen. ADVISORI entwickelt umfassende Risk Intelligence-Frameworks, die komplexe Cybersicherheitsrisiken in geschäftsrelevante Entscheidungsgrundlagen transformieren.\n\n📊 Data-Driven Risk Intelligence Framework:\n• Quantitative Risk Modeling: Entwicklung fortgeschrittener mathematischer Modelle zur Quantifizierung von Cybersicherheitsrisiken in finanziellen Begriffen (Value at Risk, Expected Loss).\n• Business Impact Correlation: Direkte Verknüpfung von IT-Assets und Sicherheitsrisiken mit Geschäftsprozessen, Umsatzströmen und strategischen Zielen.\n• Dynamic Risk Scoring: Real-time-Berechnung von Risikoscores basierend auf aktuellen Bedrohungen, Vulnerabilities und Geschäftskontext.\n• Predictive Risk Analytics: Nutzung von Machine Learning zur Vorhersage zukünftiger Risikoszenarien und deren wahrscheinlicher Geschäftsauswirkungen.\n\n🎯 Strategic Decision Support Systems:\n• Executive Risk Dashboards: Entwicklung C-Level-gerechter Dashboards, die komplexe Sicherheitsmetriken in strategische Entscheidungshilfen übersetzen.\n• Investment Prioritization: Datenbasierte Priorisierung von Cybersicherheitsinvestitionen basierend auf Risiko-Rendite-Analysen und Geschäftswert.\n• Scenario Planning: Entwicklung von Risikoszenarien und deren finanziellen Auswirkungen zur Unterstützung strategischer Planung und Budgetallokation.\n• Regulatory Impact Assessment: Quantifizierung regulatorischer Risiken und Compliance-Kosten zur Optimierung der Governance-Strategie.\n\n🏗️ Governance Integration und Compliance Excellence:\n• Risk Appetite Framework: Entwicklung klarer Risikotoleranz-Parameter, die mit der Unternehmensstrategie und Stakeholder-Erwartungen aligned sind.\n• Third-Party Risk Quantification: Comprehensive Assessment und Quantifizierung von Supply Chain- und Vendor-Risiken mit kontinuierlicher Überwachung.\n• Regulatory Mapping: Systematische Zuordnung von Assets und Prozessen zu regulatorischen Anforderungen mit automatisierter Compliance-Überwachung.\n• Strategic Risk Communication: Entwicklung strukturierter Kommunikationsframeworks für Board-Level-Reporting und Stakeholder-Engagement.\n\n💼 Business Value Creation durch Advanced Analytics:\n• Cyber Insurance Optimization: Datengestützte Optimierung von Cyber-Versicherungsstrategien und -prämien basierend auf quantifizierten Risikoprofilen.\n• M&A Due Diligence: Strukturierte Cybersicherheits-Due-Diligence-Prozesse für Merger & Acquisition-Aktivitäten mit quantifizierten Risikobewertungen.\n• Market Differentiation: Nutzung überlegener Cybersicherheits-Governance als Wettbewerbsvorteil und Vertrauensbildner bei Kunden und Partnern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie implementiert ADVISORI eine adaptive PROTECT-Strategie, die sich automatisch an verändernde Bedrohungslagen anpasst und dabei Usability und Produktivität optimiert?",
        answer: "Eine moderne PROTECT-Strategie muss die Balance zwischen maximaler Sicherheit und optimaler Benutzererfahrung finden, während sie sich kontinuierlich an evolvierende Bedrohungen anpasst. ADVISORI entwickelt adaptive Sicherheitsarchitekturen, die intelligente, kontextbasierte Schutzmaßnahmen implementieren und dabei Geschäftsprozesse enablen statt behindern.\n\n🛡️ Adaptive Security Architecture Implementation:\n• Context-Aware Security: Implementierung von Sicherheitskontrollen, die sich dynamisch an Benutzerkontext, Risikolevel und Geschäftsanforderungen anpassen.\n• Risk-Based Authentication: Entwicklung intelligenter Authentifizierungssysteme, die Sicherheitslevel basierend auf Real-time-Risikobewertung adjustieren.\n• Dynamic Policy Enforcement: Automatische Anpassung von Sicherheitsrichtlinien basierend auf aktuellen Bedrohungsinformationen und Geschäftskontext.\n• Continuous Security Posture Assessment: Real-time-Bewertung und Optimierung der Sicherheitshaltung mit automatischen Adjustierungen.\n\n⚡ User Experience Optimization und Productivity Enhancement:\n• Frictionless Security: Implementierung von Sicherheitsmaßnahmen, die für Benutzer transparent sind und Workflows nicht unterbrechen.\n• Intelligent Access Management: Entwicklung von Smart-Access-Systemen, die berechtigte Zugriffe beschleunigen und verdächtige Aktivitäten verzögern.\n• Behavioral Learning: Machine Learning-basierte Systeme, die normale Benutzerverhalten lernen und Sicherheitskontrollen entsprechend optimieren.\n• Productivity Metrics Integration: Kontinuierliche Messung des Impacts von Sicherheitsmaßnahmen auf Produktivität mit datenbasierten Optimierungen.\n\n🔄 Threat-Adaptive Response Mechanisms:\n• Threat Intelligence Integration: Real-time-Integration von Threat Intelligence zur automatischen Anpassung von Schutzmaßnahmen an neue Bedrohungen.\n• Automated Defense Scaling: Dynamische Erhöhung oder Reduzierung von Sicherheitslevels basierend auf aktueller Bedrohungslage.\n• Proactive Vulnerability Management: Automatisierte Identification und Remediation von Vulnerabilities mit Priorisierung basierend auf Exploit-Wahrscheinlichkeit.\n• Emergency Response Automation: Vordefinierte Automated Response-Mechanismen für bekannte Angriffsmuster mit sofortiger Aktivierung.\n\n🎯 Business-Aligned Security Excellence:\n• Zero-Friction Integration: Nahtlose Integration von Sicherheitsmaßnahmen in bestehende Geschäftsprozesse ohne Workflow-Disruption.\n• Performance-Based Security: Entwicklung von Sicherheitsmetriken, die sowohl Schutzeffektivität als auch Business-Performance berücksichtigen.\n• Scalable Security Architecture: Implementierung von Sicherheitsarchitekturen, die mit Geschäftswachstum und -veränderungen skalieren.\n• Innovation Enablement: Sicherheitsframeworks, die Innovation und digitale Transformation enablen statt blockieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche fortgeschrittenen DETECT-Technologien und -Methoden nutzt ADVISORI, um auch die raffiniertesten APT-Angriffe und Zero-Day-Exploits zu identifizieren?",
        answer: "Die Detection sophistizierter Angriffe erfordert den Einsatz fortgeschrittener Technologien und innovativer Erkennungsmethoden, die über traditionelle signaturbasierte Ansätze hinausgehen. ADVISORI implementiert cutting-edge Detection-Capabilities, die auch die raffiniertesten Advanced Persistent Threats und Zero-Day-Exploits identifizieren können.\n\n🔍 Advanced Detection Technologies und AI-Integration:\n• Behavioral Analytics Platform: Implementierung von User and Entity Behavior Analytics (UEBA) zur Erkennung subtiler Abweichungen von normalen Verhaltensmustern.\n• Machine Learning Anomaly Detection: Deployment von unüberwachten ML-Algorithmen, die unbekannte Angriffsmuster ohne vorherige Signaturen identifizieren.\n• Network Traffic Analysis: Deep Packet Inspection und Traffic Flow Analysis zur Erkennung von Command & Control-Kommunikation und Data Exfiltration.\n• Endpoint Detection and Response (EDR): Advanced EDR-Solutions mit Real-time-Monitoring, Threat Hunting und Automated Response-Capabilities.\n\n🎯 APT-Detection und Advanced Threat Hunting:\n• Threat Intelligence Fusion: Integration multipler Threat Intelligence-Feeds zur Correlation mit internen Security Events und Identification von APT-Indikatoren.\n• Timeline Analysis: Comprehensive Analysis von Angriffstimelines zur Identification von Long-term-Infiltrations und Lateral Movement-Patterns.\n• Memory Forensics: Advanced Memory Analysis zur Detection von File-less Malware und Living-off-the-Land-Techniken.\n• Deception Technology: Strategic Deployment von Honeypots und Decoy-Systems zur frühen APT-Detection und Angreifer-Ablenkung.\n\n⚡ Zero-Day und Unknown Threat Detection:\n• Sandboxing und Dynamic Analysis: Automated Analysis verdächtiger Files und URLs in isolierten Umgebungen zur Zero-Day-Detection.\n• Heuristic Analysis Engines: Implementation von Heuristic-based Detection-Engines, die verdächtige Aktivitäten basierend auf Verhaltensmustern identifizieren.\n• Code Similarity Analysis: Advanced Static Analysis zur Identification von Code-Ähnlichkeiten mit bekannten Malware-Familien.\n• Threat Hunting Automation: Proaktive Suche nach Indicators of Compromise (IoCs) mit automatisierten Hunting-Queries und Pattern-Recognition.\n\n📊 Continuous Detection Optimization und Tuning:\n• False Positive Reduction: Machine Learning-basierte Optimierung von Detection-Rules zur Minimierung von False Positives ohne Kompromittierung der Detection-Rate.\n• Detection Coverage Assessment: Regelmäßige Evaluation der Detection-Coverage mit MITRE ATT&CK-Framework-Mapping zur Identification von Blind Spots.\n• Threat Simulation: Regular Purple Team-Exercises und Red Team-Assessments zur Validation und Improvement der Detection-Capabilities.\n• Performance Metrics: Comprehensive Measurement von Detection-Performance mit KPIs wie Mean Time to Detection (MTTD) und Detection-Accuracy-Rates."
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
    console.log('✅ C-Level FAQs batch 2 (German) added successfully')
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

run()
