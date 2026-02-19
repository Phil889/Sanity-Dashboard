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
    console.log('Updating NIST Integration page with FAQs batch 4...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-integration' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-integration" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 13),
        question: "Wie können wir NIST-Integration für Remote Work und Hybrid-Arbeitsmodelle optimieren und neue Sicherheitsherausforderungen adressieren?",
        answer: "Die NIST-Integration für Remote Work und Hybrid-Arbeitsmodelle erfordert eine Neukonzeption traditioneller Sicherheitsansätze, da die Grenzen zwischen Unternehmens- und privaten Umgebungen verschwimmen. Moderne Arbeitsmodelle bieten Flexibilität und Produktivitätsvorteile, bringen aber auch komplexe Cybersecurity-Herausforderungen mit sich, die durch strategische NIST-Anpassung effektiv adressiert werden können.\n\n🏠 Remote Work NIST-Herausforderungen:\n• Perimeter-Auflösung: Traditionelle Netzwerkgrenzen existieren nicht mehr, was neue Ansätze für Asset Protection und Network Security erfordert.\n• Device Management Complexity: BYOD und gemischte Gerätelandschaften erschweren einheitliche Sicherheitsstandards und Monitoring.\n• Data Dispersion: Unternehmensdaten befinden sich auf verschiedenen Geräten und in unterschiedlichen Netzwerken mit variierenden Sicherheitsniveaus.\n• Human Factor Risks: Erhöhte Social Engineering-Angriffe und Phishing-Risiken durch isolierte Arbeitsumgebungen.\n\n🔧 NIST-Anpassungen für Hybrid Work:\n• Identity-First Security: Verstärkter Fokus auf Identitäts- und Zugriffskontrolle als primäre Sicherheitsschicht für ortsunabhängiges Arbeiten.\n• Endpoint Protection Evolution: Erweiterte EDR-Capabilities und Device Trust-Frameworks für heterogene Gerätelandschaften.\n• Cloud-Native Security: Verlagerung von On-Premises-Kontrollen zu Cloud-basierten Sicherheitslösungen für flexible Zugriffsmodelle.\n• Behavioral Analytics: Kontinuierliche Überwachung von Benutzerverhalten und Anomalieerkennung für verteilte Arbeitsumgebungen.\n\n🌐 Strategische Hybrid Work Security-Architektur:\n• Secure Access Service Edge (SASE): Integration von Netzwerk- und Sicherheitsfunktionen für einheitliche Policy-Durchsetzung unabhängig vom Standort.\n• Cloud Workload Protection: Sicherheitskontrollen für Cloud-basierte Anwendungen und Daten, auf die remote zugegriffen wird.\n• Collaboration Security: Sicherheitsframeworks für Video-Conferencing, File-Sharing und andere Kollaborationstools.\n• Incident Response Adaptation: Angepasste IR-Prozesse für Vorfälle in Remote-Umgebungen und verteilten Teams.\n\n🛡️ ADVISORIs Remote Work NIST-Integration:\n• Hybrid Security Assessment: Bewertung aktueller Remote Work-Sicherheitslücken und Entwicklung NIST-basierter Verbesserungsstrategien.\n• Policy Framework Adaptation: Anpassung bestehender NIST-Policies für Remote Work-Szenarien und Hybrid-Arbeitsmodelle.\n• Technology Stack Modernization: Auswahl und Implementierung moderner Sicherheitstechnologien für distributed workforce protection.\n• Employee Security Training: Entwicklung spezifischer Schulungsprogramme für Remote Work-Sicherheit basierend auf NIST-Prinzipien."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche Rolle spielt DevSecOps bei der NIST-Integration und wie können wir Security-by-Design in Entwicklungsprozesse einbetten?",
        answer: "DevSecOps-Integration in NIST Cybersecurity Framework transformiert die Art, wie Sicherheit in den Softwareentwicklungslebenszyklus eingebettet wird. Anstatt Sicherheit als nachgelagerte Überprüfung zu betrachten, wird sie zum integralen Bestandteil jeder Entwicklungsphase, was sowohl die Sicherheit als auch die Entwicklungsgeschwindigkeit verbessert.\n\n⚙️ DevSecOps-NIST-Integration:\n• Shift-Left Security: Frühe Integration von NIST-Kontrollen in Design- und Entwicklungsphasen für proaktive Schwachstellenvermeidung.\n• Continuous Compliance: Automatisierte NIST-Compliance-Überprüfung in CI/CD-Pipelines für kontinuierliche Sicherheitsbewertung.\n• Security-as-Code: Einbettung von NIST-Sicherheitsanforderungen als ausführbarer Code in Infrastructure und Application Deployment.\n• Threat Modeling Integration: Systematische Bedrohungsanalyse basierend auf NIST-Kategorien während der Architektur- und Design-Phasen.\n\n🔄 Continuous Security Integration:\n• Automated Security Testing: Integration von SAST, DAST und IAST-Tools in Entwicklungs-Workflows mit NIST-basierten Bewertungskriterien.\n• Vulnerability Management Automation: Automatisierte Schwachstellen-Scanning und -Priorisierung basierend auf NIST-Risikobewertung.\n• Compliance Monitoring: Real-time Überwachung der NIST-Compliance während des gesamten Entwicklungszyklus.\n• Security Feedback Loops: Schnelle Feedback-Mechanismen für Entwicklerteams zur sofortigen Adressierung von Sicherheitsproblemen.\n\n🚀 Security-by-Design-Prinzipien:\n• Secure Architecture Patterns: Entwicklung wiederverwendbarer, NIST-konformer Architekturmuster für verschiedene Anwendungstypen.\n• Security Requirements Engineering: Integration von NIST-Subcategories in funktionale und nicht-funktionale Anforderungen.\n• Privacy-by-Design: Einbettung von Datenschutz- und NIST-Privacy-Kontrollen in Anwendungsdesign und -architektur.\n• Resilience Engineering: Aufbau selbstheilender Systeme mit integrierter NIST Recover-Funktionalität.\n\n🎯 ADVISORIs DevSecOps-NIST-Methodik:\n• Pipeline Security Assessment: Bewertung bestehender CI/CD-Pipelines und Integration von NIST-basierten Sicherheitskontrollen.\n• Tool Chain Optimization: Auswahl und Integration von DevSecOps-Tools, die NIST-Compliance automatisiert unterstützen.\n• Developer Security Training: Schulung von Entwicklungsteams in NIST-Prinzipien und Secure Coding-Practices.\n• Metrics and KPIs: Entwicklung von DevSecOps-Metriken, die NIST-Sicherheitsziele messbar machen und kontinuierliche Verbesserung fördern."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie können wir NIST-Integration für Incident Response und Business Continuity optimieren und Resilienz stärken?",
        answer: "NIST-Integration in Incident Response und Business Continuity schafft eine systematische, strukturierte Herangehensweise an Krisenmanagement und Organisationsresilienz. Die NIST-Funktionen Detect, Respond und Recover bieten ein bewährtes Framework für effektive Incident Response, während gleichzeitig Business Continuity und Disaster Recovery-Capabilities gestärkt werden.\n\n🚨 NIST-basierte Incident Response-Optimierung:\n• Structured Detection: Systematische Implementierung von Detection-Capabilities basierend auf NIST-Subcategories für umfassende Threat Visibility.\n• Response Playbooks: Entwicklung standardisierter Response-Prozeduren, die NIST-Respond-Funktionen operationalisieren und konsistente Reaktionen gewährleisten.\n• Forensic Readiness: Vorbereitung forensischer Capabilities entsprechend NIST-Standards für effektive Incident Investigation und Legal Compliance.\n• Communication Frameworks: Strukturierte Kommunikationspläne für verschiedene Incident-Typen basierend auf NIST-Governance-Prinzipien.\n\n⚡ Business Continuity durch NIST:\n• Critical Asset Identification: Verwendung von NIST Identify-Funktionen für umfassende Business Impact Analysis und Prioritätssetzung.\n• Recovery Time Optimization: NIST Recover-basierte Strategien für minimale Recovery Time Objectives (RTO) und Recovery Point Objectives (RPO).\n• Resilience Testing: Regelmäßige Business Continuity-Tests und Disaster Recovery-Übungen basierend auf NIST-Szenarien.\n• Supply Chain Continuity: Integration von Third-Party-Risiken in Business Continuity Planning unter Verwendung von NIST Supply Chain-Frameworks.\n\n🔄 Adaptive Response Capabilities:\n• Dynamic Threat Response: Flexible Incident Response-Strategien, die sich an evolving Bedrohungslandschaften anpassen.\n• Cross-Functional Coordination: Integration verschiedener Organisationsebenen in Incident Response mit klaren NIST-basierten Rollen und Verantwortlichkeiten.\n• Lessons Learned Integration: Systematische Post-Incident-Analyse und kontinuierliche Verbesserung basierend auf NIST-Feedback-Loops.\n• Regulatory Compliance: Incident Response-Prozesse, die gleichzeitig Multiple Compliance-Anforderungen erfüllen.\n\n🛡️ ADVISORIs Incident Response & BC-Integration:\n• Maturity Assessment: Bewertung aktueller Incident Response und Business Continuity-Capabilities gegen NIST-Standards.\n• Playbook Development: Erstellung maßgeschneiderter, NIST-basierter Incident Response-Playbooks für verschiedene Threat-Szenarien.\n• Crisis Simulation: Durchführung realistischer Crisis-Simulationen zur Validierung und Verbesserung von Response-Capabilities.\n• Technology Integration: Implementierung von Incident Response-Plattformen, die NIST-Workflows automatisieren und beschleunigen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie können wir NIST-Integration nutzen, um Cybersecurity-Talent zu entwickeln und eine Security-bewusste Unternehmenskultur zu schaffen?",
        answer: "NIST-Integration bietet eine hervorragende Gelegenheit, systematisch Cybersecurity-Talent zu entwickeln und eine tiefgreifende Security-Kultur in der Organisation zu verankern. Das Framework liefert strukturierte Ansätze für Skills Development, Performance Management und kulturelle Transformation, die über traditionelle Security Awareness hinausgehen.\n\n👥 NIST-basierte Talent Development:\n• Competency Frameworks: Entwicklung rollenspezifischer Cybersecurity-Kompetenzen basierend auf NIST-Funktionen und -Kategorien.\n• Career Progression Paths: Strukturierte Karrierewege für Cybersecurity-Professionals mit NIST-basierten Meilensteinen und Qualifikationen.\n• Skills Assessment: Regelmäßige Bewertung von Cybersecurity-Fähigkeiten und Gap-Identifikation unter Verwendung von NIST-Benchmarks.\n• Cross-Functional Training: Entwicklung von Security-Verständnis in nicht-technischen Rollen durch NIST-Framework-Education.\n\n🎓 Kulturelle Transformation-Strategien:\n• Security Champion Programs: Aufbau von Security Champion-Netzwerken, die NIST-Prinzipien in verschiedenen Organisationsbereichen fördern.\n• Gamification of Security: Integration spielerischer Elemente zur Förderung von NIST-Awareness und Security-Best-Practices.\n• Performance Integration: Einbettung von Security-KPIs und NIST-Compliance-Metriken in individuelle Performance-Reviews.\n• Leadership Engagement: Schulung der Führungsebene in NIST-Prinzipien für authentische Security-Leadership und Top-Down-Cultural Change.\n\n📚 Continuous Learning Ecosystems:\n• Personalized Learning Paths: Individuelle Lernpfade basierend auf Rollen, NIST-Kompetenzlücken und Karrierezielen.\n• Hands-On Learning Labs: Praktische Cybersecurity-Labs und Simulationsumgebungen für experiential learning von NIST-Konzepten.\n• Industry Collaboration: Partnerschaften mit Bildungseinrichtungen und Branchenverbänden für cutting-edge Cybersecurity-Education.\n• Knowledge Management: Aufbau organisationaler Cybersecurity-Wissensdatenbanken mit NIST-strukturierten Best Practices und Lessons Learned.\n\n🌟 ADVISORIs Talent & Culture-Development:\n• Organizational Security Maturity Assessment: Bewertung der aktuellen Security-Kultur und Identifikation von Verbesserungsopportunitäten.\n• Customized Training Programs: Entwicklung maßgeschneiderter, NIST-basierter Schulungsprogramme für verschiedene Organisationsebenen.\n• Mentorship and Coaching: Etablierung von Mentorship-Programmen für Cybersecurity-Career Development und NIST-Expertise-Transfer.\n• Culture Change Measurement: Entwicklung von Metriken und KPIs zur Messung kultureller Transformation und Security-Awareness-Improvement."
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
