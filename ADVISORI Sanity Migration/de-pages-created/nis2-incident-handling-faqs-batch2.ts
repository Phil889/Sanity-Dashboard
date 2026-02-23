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
    console.log('Updating NIS2 Incident Handling page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nis2-incident-handling' })
    
    if (!existingDoc) {
      throw new Error('Document "nis2-incident-handling" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie können wir sicherstellen, dass unser NIS2-Incident Handling Team die erforderlichen Kompetenzen und Ressourcen für effektive Response besitzt?",
        answer: "Die Entwicklung hochperformanter NIS2-Incident Handling Teams erfordert eine strategische Herangehensweise, die technische Expertise mit organisatorischen Fähigkeiten und kontinuierlicher Kompetenzentwicklung verbindet. Moderne Cyberbedrohungen entwickeln sich täglich weiter, und Ihr Response-Team muss nicht nur technisch versiert, sondern auch strategisch denkend und unter extremem Druck effektiv sein.\n\n🎯 Strategische Kompetenzentwicklung für Incident Response Excellence:\n• Multi-disziplinäre Expertise: Effektive Teams kombinieren technische Cybersecurity-Fähigkeiten mit Geschäftsverständnis, Kommunikationskompetenzen und Krisenmanagement-Erfahrung.\n• Kontinuierliche Bedrohungsintelligenz: Regelmäßige Schulungen zu aktuellen Angriffsvektoren, Taktiken und Technologien halten das Team auf dem neuesten Stand der Bedrohungslandschaft.\n• Simulator-basiertes Training: Realistische Cyber-Range-Übungen und Tabletop-Exercises bereiten Teams auf verschiedene Incident-Szenarien vor und verbessern Entscheidungsfindung unter Stress.\n• Cross-funktionale Integration: Enge Zusammenarbeit zwischen IT, Legal, Communications, und Executive Leadership für koordinierte Response-Strategien.\n\n🛠️ Ressourcen und Technologie-Enabler:\n• Automatisierte Response-Plattformen: SOAR (Security Orchestration, Automation and Response) Tools reduzieren manuelle Aufgaben und ermöglichen Focus auf strategische Entscheidungen.\n• Threat Intelligence Integration: Echtzeit-Feeds zu aktuellen Bedrohungen und Angriffsindikatoren verbessern Erkennungsgeschwindigkeit und Response-Präzision.\n• Forensische Analyse-Capabilities: Fortschrittliche Tools für digitale Forensik und Malware-Analyse ermöglichen tiefgreifende Incident-Untersuchungen.\n• Kommunikations- und Collaboration-Tools: Spezialisierte Plattformen für sichere, koordinierte Kommunikation während Incident Response-Operationen.\n\n💡 ADVISORIs Ansatz für Team Excellence:\n• Kompetenz-Assessment und Skill-Gap-Analyse: Systematische Bewertung bestehender Fähigkeiten und Identifikation von Entwicklungsbedarfen.\n• Maßgeschneiderte Trainingsprogramme: Entwicklung spezifischer Schulungsmodule basierend auf Ihren Systemen, Bedrohungen und Geschäftsanforderungen.\n• Mentoring und Knowledge Transfer: Pairing erfahrener ADVISORI-Experten mit Ihren Teams für praktisches, hands-on Learning.\n• Performance-Metriken und kontinuierliche Verbesserung: Etablierung von KPIs für Team-Performance und Response-Effektivität mit regelmäßigen Optimierungszyklen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "Welche kritischen Entscheidungen muss die Geschäftsleitung während eines major Cybersecurity-Incidents treffen, und wie bereiten wir uns darauf vor?",
        answer: "Major Cybersecurity-Incidents konfrontieren die Geschäftsleitung mit komplexen, zeitkritischen Entscheidungen, die weitreichende Auswirkungen auf das Unternehmen, Stakeholder und die öffentliche Wahrnehmung haben. Diese Entscheidungen müssen oft unter unvollständigen Informationen, extremem Zeitdruck und erheblicher Unsicherheit getroffen werden. Eine strategische Vorbereitung ist entscheidend für effektive Krisenführung.\n\n⚡ Kritische C-Level Entscheidungspunkte während Incidents:\n• Business Continuity vs. Security: Entscheidung über Systemabschaltungen zur Schadensbegrenzung versus Aufrechterhaltung kritischer Geschäftsprozesse.\n• Kommunikationsstrategie: Timing und Umfang der Kommunikation mit Kunden, Medien, Regulatoren und anderen Stakeholdern.\n• Ressourcenallokation: Mobilisierung interner Teams, Engagement externer Experten und Budgetfreigaben für Incident Response.\n• Legal und Compliance Implications: Bewertung von Haftungsrisiken, Versicherungsansprüchen und regulatorischen Meldepflichten.\n• Reputation Management: Balance zwischen Transparenz und Schadensbegrenzung für das Unternehmensimage.\n\n🎯 Strategische Vorbereitung für Crisis Leadership:\n• Executive Playbooks: Detaillierte Entscheidungsframeworks mit vorgeplanten Szenarien und Eskalationspfaden für verschiedene Incident-Typen.\n• Crisis Communication Protocols: Vordefinierte Kommunikationsstrategien mit Templates für verschiedene Stakeholder-Gruppen und Medienkanäle.\n• Legal und Regulatory Preparedness: Vorab-Abstimmung mit Rechtsberatern und Compliance-Teams über Meldepflichten und Haftungsminimierung.\n• Stakeholder Mapping: Klare Identifikation aller relevanten internen und externen Stakeholder mit spezifischen Kommunikationsverantwortlichkeiten.\n\n🛡️ Organisatorische Resilienz für Executive Decision Making:\n• Crisis Management Team Structure: Etablierung eines multidisziplinären Crisis Management Teams mit klaren Rollen, Verantwortlichkeiten und Entscheidungsbefugnissen.\n• Information Flow Optimization: Systeme zur schnellen, präzisen Informationsübermittlung an die Geschäftsleitung für fundierte Entscheidungsfindung.\n• Scenario Planning und War Gaming: Regelmäßige Simulation verschiedener Incident-Szenarien mit Executive Leadership zur Verbesserung der Entscheidungsgeschwindigkeit.\n• External Expert Network: Aufbau von Beziehungen zu Cybersecurity-Experten, Krisenmanagement-Spezialisten und PR-Professionellen für schnelle Unterstützung.\n\n💼 ADVISORIs Executive Crisis Preparedness Approach:\n• C-Suite Crisis Readiness Assessment: Bewertung der aktuellen Preparedness und Identifikation von Verbesserungspotenzialen.\n• Executive Training und Simulation: Maßgeschneiderte Crisis Management Workshops mit realistischen Incident-Simulationen.\n• Decision Support System Design: Entwicklung von Tools und Frameworks zur Unterstützung schneller, fundierter Entscheidungsfindung unter Druck."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie integrieren wir NIS2-Incident Handling effektiv in unsere bestehende IT-Service-Management und Business Continuity Strategie?",
        answer: "Die nahtlose Integration von NIS2-Incident Handling in bestehende IT-Service-Management (ITSM) und Business Continuity Management (BCM) Frameworks ist entscheidend für operative Effizienz und strategische Kohärenz. Diese Integration verwandelt isolierte Sicherheitsprozesse in einen ganzheitlichen Resilienz-Ansatz, der technische Excellence mit Geschäftskontinuität verbindet.\n\n🔄 Strategische Integration von Security und Service Management:\n• Unified Incident Management: Konvergenz von IT-Service-Incidents und Security-Incidents in einem integrierten Workflow mit gemeinsamen Tools, Prozessen und Metriken.\n• Risk-based Prioritization: Integration von Cybersecurity-Risikobewertungen in ITSM-Prioritisierungsprozesse für holistische Impact-Assessments.\n• Cross-functional Response Teams: Entwicklung hybrider Teams, die sowohl IT-Service-Recovery als auch Cybersecurity-Response-Kompetenzen vereinen.\n• Shared Knowledge Management: Gemeinsame Wissensbasis für Security-Incidents und Service-Disruptions zur Verbesserung der Lerneffekte und Response-Qualität.\n\n🏢 Business Continuity Integration für operative Resilienz:\n• Cyber-aware Business Impact Analysis: Erweiterung traditioneller BIA-Methoden um Cybersecurity-Szenarien und deren spezifische Auswirkungen auf Geschäftsprozesse.\n• Integrated Recovery Strategies: Entwicklung von Recovery-Plänen, die sowohl traditionelle Disaster Recovery als auch Cyber-Incident Recovery abdecken.\n• Stakeholder Communication Alignment: Harmonisierung von Business Continuity und Cybersecurity-Kommunikationsprotokollen für konsistente Stakeholder-Information.\n• Testing und Validation: Kombinierte Business Continuity und Cybersecurity-Übungen für realistische Resilienz-Validierung.\n\n🔧 Technische Integration und Process Optimization:\n• Tool Orchestration: Integration von SIEM, SOAR und ITSM-Plattformen für automatisierte Incident-Workflows und einheitliche Dashboards.\n• Metrics und KPI Alignment: Entwicklung gemeinsamer Performance-Indikatoren für Service Management und Security Management.\n• Change Management Integration: Einbindung von Cybersecurity-Anforderungen in IT-Change-Management-Prozesse zur präventiven Risikominimierung.\n• Vendor und Third-party Management: Koordinierte Bewertung und Management von Service-Providern und Security-Vendors.\n\n💡 ADVISORIs integrierter Transformationsansatz:\n• Gap-Analyse zwischen bestehenden ITSM/BCM und NIS2-Anforderungen: Systematische Bewertung von Overlap, Synergien und Optimierungspotenzialen.\n• Framework-Design für integrierte Resilienz: Entwicklung maßgeschneiderter Governance-Strukturen, die Security, Service Management und Business Continuity vereinen.\n• Technology Stack Optimization: Rationalisierung und Integration von Tools für einheitliche, effiziente Operations.\n• Change Management für kulturelle Integration: Unterstützung bei der Entwicklung einer integrierten Resilienz-Kultur, die traditionelle Silos überwindet."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Welche Metriken und KPIs sollten wir implementieren, um die Effektivität unseres NIS2-Incident Handling kontinuierlich zu messen und zu optimieren?",
        answer: "Die Implementierung aussagekräftiger Metriken und KPIs für NIS2-Incident Handling erfordert einen balanced Ansatz, der technische Performance, Business Impact und strategische Wertschöpfung misst. Effective Metriken dienen nicht nur der Compliance-Dokumentation, sondern ermöglichen datengetriebene Optimierung und demonstrieren den Business Value von Cybersecurity-Investitionen.\n\n📊 Strategische Performance-Dimensionen für Incident Handling:\n• Response Velocity Metrics: Mean Time to Detection (MTTD), Mean Time to Response (MTTR), und Mean Time to Recovery (MTR) für verschiedene Incident-Kategorien und Severity-Level.\n• Business Impact Minimization: Quantifizierung vermiedener Schäden, reduzierter Ausfallzeiten und geschützter Umsätze durch effektive Incident Response.\n• Stakeholder Satisfaction: Bewertung der Response-Qualität durch interne und externe Stakeholder, einschließlich Regulatoren und Geschäftspartner.\n• Continuous Improvement Indicators: Trends in Incident-Häufigkeit, Severity-Distribution und Lessons Learned Implementation zur Bewertung der Resilienz-Entwicklung.\n\n🎯 Operative Excellence Metriken:\n• Detection Accuracy: False Positive und False Negative Raten für verschiedene Detection-Mechanismen zur Optimierung der Alert-Qualität.\n• Response Team Performance: Team-Effizienz, Skill-Development-Progress und Cross-training Effectiveness für kontinuierliche Kapazitätsentwicklung.\n• Process Adherence: Compliance mit definierten Response-Prozessen, Dokumentationsqualität und Escalation-Effectiveness.\n• Technology Performance: Tool-Effectiveness, Automation-Rate und Integration-Quality für technische Optimierung.\n\n📈 Business Value und ROI Metriken:\n• Cost Avoidance: Quantifizierung vermiedener direkter und indirekter Kosten durch professionelle Incident Response.\n• Compliance Performance: Bewertung der Einhaltung von NIS2-Meldepflichten, Audit-Results und Regulatory-Feedback.\n• Reputation Protection: Messung von Brand-Impact, Customer-Retention und Market-Confidence nach Incidents.\n• Investment Efficiency: ROI-Analyse für Incident Handling Investitionen, Cost-per-Incident-Trends und Resource-Optimization.\n\n🔄 Predictive und Forward-looking Indicators:\n• Threat Landscape Adaptation: Bewertung der Anpassungsfähigkeit an neue Bedrohungen und Attack-Patterns.\n• Capability Maturity: Fortschritt in Incident Handling Maturity Models und Best-Practice-Adoption.\n• Strategic Alignment: Integration von Incident Handling in Geschäftsstrategie und Digital-Transformation-Initiativen.\n• Innovation Metrics: Entwicklung neuer Capabilities, Tool-Innovation und Process-Optimization-Erfolge.\n\n💡 ADVISORIs Metrics-Driven Optimization Approach:\n• Balanced Scorecard Development: Design maßgeschneiderter KPI-Frameworks, die technische, operative und strategische Dimensionen ausbalancieren.\n• Benchmarking und Industry Comparison: Vergleich Ihrer Performance mit Industry-Standards und Best-in-Class-Organisationen.\n• Predictive Analytics Implementation: Nutzung von Machine Learning und Advanced Analytics für proaktive Performance-Vorhersagen und Optimization-Opportunities.\n• Executive Dashboard Design: Entwicklung aussagekräftiger Executive-Reports, die komplexe Metriken in actionable Business Intelligence übersetzen."
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
