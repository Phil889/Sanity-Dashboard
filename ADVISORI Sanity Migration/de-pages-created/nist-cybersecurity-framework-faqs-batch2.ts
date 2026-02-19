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
    console.log('Updating NIST Cybersecurity Framework page with C-Level FAQs batch 2 (German)...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'nist-cybersecurity-framework' })
    
    if (!existingDoc) {
      throw new Error('Document "nist-cybersecurity-framework" not found')
    }
    
    // Create new C-Level FAQs in German
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 5),
        question: "Wie adressiert ADVISORI die Herausforderung der NIST CSF-Implementierung in komplexen, multi-nationalen Unternehmensstrukturen mit heterogenen regulatorischen Anforderungen?",
        answer: "Multinationale Unternehmen stehen vor der komplexen Aufgabe, das NIST Cybersecurity Framework in verschiedenen Rechtsräumen mit unterschiedlichen regulatorischen Anforderungen zu implementieren. ADVISORI entwickelt adaptive, skalierbare Lösungen, die lokale Compliance-Anforderungen respektieren und gleichzeitig eine einheitliche, globale Cybersicherheitsstrategie ermöglichen.\n\n🌍 Herausforderungen multinationaler NIST CSF-Implementierung:\n• Regulatorische Divergenz: Unterschiedliche nationale Cybersicherheitsgesetze (z.B. EU NIS2, US FISMA, UK Cyber Essentials) erfordern lokale Anpassungen des globalen Frameworks.\n• Kulturelle und organisatorische Unterschiede: Verschiedene Unternehmenskulturen und operative Praktiken in verschiedenen Regionen müssen in die Framework-Implementierung einbezogen werden.\n• Datenresidenz und Souveränität: Nationale Datenschutzgesetze und Anforderungen an die Datenresidenz beeinflussen die technische Implementierung von Sicherheitskontrollen.\n• Koordination und Governance: Sicherstellung einer konsistenten Implementierung und Überwachung über geografische und organisatorische Grenzen hinweg.\n\n🎯 ADVISORI's Global Implementation Strategy:\n• Federated Framework Approach: Entwicklung einer föderierten NIST CSF-Struktur, die zentrale Standards definiert und lokale Anpassungen ermöglicht, ohne die Gesamtkohärenz zu beeinträchtigen.\n• Regional Expertise Integration: Nutzung lokaler regulatorischer Expertise in jedem Markt, um sicherzustellen, dass Framework-Implementierungen den spezifischen nationalen Anforderungen entsprechen.\n• Cultural Adaptation Methodology: Anpassung der Kommunikation, Schulung und Implementierungsansätze an lokale Geschäftskulturen und operative Praktiken.\n• Unified Risk Management: Etablierung einer globalen Risikomanagement-Perspektive, die lokale Risiken aggregiert und eine konsistente C-Level-Berichterstattung ermöglicht.\n\n🔧 Operative Lösungsansätze:\n• Modular Framework Design: Entwicklung modularer Framework-Komponenten, die je nach lokalen Anforderungen aktiviert oder angepasst werden können.\n• Global-Local Governance Model: Implementierung eines Governance-Modells, das zentrale Strategieentscheidungen mit lokaler operativer Flexibilität kombiniert.\n• Cross-Border Incident Response: Entwicklung von Incident Response-Plänen, die grenzüberschreitende Koordination und lokale regulatorische Meldepflichten berücksichtigen.\n• Harmonized Metrics and Reporting: Schaffung einheitlicher KPIs und Berichterstattungsstandards, die lokale Unterschiede berücksichtigen und trotzdem globale Vergleichbarkeit ermöglichen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 6),
        question: "In einer Zeit der digitalen Transformation und Cloud-First-Strategien – wie passt ADVISORI das traditionelle NIST CSF an moderne Cloud-native und DevSecOps-Umgebungen an?",
        answer: "Die digitale Transformation und der Übergang zu Cloud-first-Strategien erfordern eine Neuinterpretation traditioneller Cybersicherheits-Frameworks. ADVISORI modernisiert das NIST CSF für Cloud-native Umgebungen und integriert DevSecOps-Prinzipien, um Sicherheit nahtlos in moderne Entwicklungs- und Betriebsprozesse zu integrieren.\n\n☁️ Cloud-native NIST CSF-Transformation:\n• Container und Microservices Security: Anpassung der 'Protect'-Funktion für containerisierte Umgebungen mit spezifischen Kontrollen für Kubernetes, Docker und Service Mesh-Architekturen.\n• Infrastructure as Code (IaC) Security: Integration von Sicherheitskontrollen in IaC-Pipelines zur Gewährleistung von Security-by-Design in Cloud-Infrastrukturen.\n• Multi-Cloud und Hybrid-Cloud-Governance: Entwicklung von Framework-Erweiterungen für die einheitliche Sicherheitsverwaltung über verschiedene Cloud-Provider und Hybrid-Umgebungen hinweg.\n• Serverless Security: Spezielle Kontrollen und Überwachungsmechanismen für serverlose Computing-Modelle (AWS Lambda, Azure Functions).\n\n🔄 DevSecOps-Integration und Continuous Security:\n• Security-in-Pipeline: Einbettung von NIST CSF-Kontrollen in CI/CD-Pipelines zur kontinuierlichen Sicherheitsbewertung und -durchsetzung.\n• Shift-Left Security: Verlagerung von Sicherheitsaktivitäten in frühe Entwicklungsphasen durch automatisierte Vulnerability Scanning, Static Code Analysis und Dynamic Testing.\n• Continuous Monitoring und Observability: Implementierung von cloudnativen Monitoring-Lösungen, die Echtzeit-Visibilität in die Sicherheitslage komplexer, verteilter Systeme bieten.\n• Automated Incident Response: Entwicklung automatisierter Response-Mechanismen, die in Cloud-native Umgebungen schnell und skalierbar reagieren können.\n\n⚡ ADVISORI's Modernisierungsansatz:\n• Cloud Security Posture Management (CSPM): Integration von CSPM-Tools zur kontinuierlichen Überwachung und Durchsetzung von NIST CSF-Kontrollen in Cloud-Umgebungen.\n• Zero Trust Architecture Implementation: Neugestaltung der Framework-Implementierung basierend auf Zero-Trust-Prinzipien für moderne, perimeter-lose IT-Landschaften.\n• API Security Framework: Entwicklung spezifischer Kontrollen und Überwachungsmechanismen für API-zentrierte Architekturen.\n• Cloud-native Threat Intelligence: Integration von Cloud-spezifischen Threat Intelligence-Feeds und Bedrohungsmodellen in die Framework-Implementierung."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 7),
        question: "Wie gewährleistet ADVISORI, dass NIST CSF-Implementierungen skalierbar bleiben und mit dem Unternehmenswachstum, M&A-Aktivitäten und sich ändernden Geschäftsmodellen Schritt halten?",
        answer: "Geschäftswachstum, Fusionen und Akquisitionen sowie sich wandelnde Geschäftsmodelle stellen traditionelle, statische Cybersicherheits-Frameworks vor erhebliche Herausforderungen. ADVISORI entwickelt adaptive, skalierbare NIST CSF-Implementierungen, die organisches Wachstum unterstützen und bei strukturellen Unternehmensveränderungen flexibel angepasst werden können.\n\n📈 Skalierbarkeit und Wachstumsunterstützung:\n• Modular Framework Architecture: Entwicklung modularer Framework-Komponenten, die je nach Unternehmensgröße, Komplexität und Risikolandschaft skaliert werden können.\n• Automated Scaling Mechanisms: Implementierung automatisierter Skalierungsmechanismen für Sicherheitskontrollen, die sich an Geschäftswachstum und veränderte Infrastruktur anpassen.\n• Risk-based Resource Allocation: Dynamische Allokation von Cybersicherheitsressourcen basierend auf Geschäftswachstum und sich ändernden Risikoprofilen.\n• Performance Benchmarking: Etablierung von Leistungsbenchmarks, die es ermöglichen, die Framework-Effektivität auch bei steigendem Geschäftsvolumen aufrechtzuerhalten.\n\n🤝 M&A-Integration und Organisationsveränderungen:\n• Due Diligence Integration: Entwicklung von Cybersicherheits-Due-Diligence-Prozessen, die NIST CSF-Compliance und -Maturität als Bewertungskriterien für Akquisitionsziele einbeziehen.\n• Rapid Integration Methodologies: Schaffung beschleunigter Integrationsmethoden zur schnellen Einbindung akquirierter Unternehmen in bestehende NIST CSF-Strukturen.\n• Cultural Integration Management: Berücksichtigung unterschiedlicher Cybersicherheitskulturen und -praktiken bei der Integration von Unternehmen mit verschiedenen Sicherheitsreifegraden.\n• Portfolio-wide Risk Management: Entwicklung portfolioweiter Risikomanagement-Ansätze, die heterogene Geschäftseinheiten unter einem einheitlichen Framework-Dach vereinen.\n\n🔄 Adaptive Framework-Evolution:\n• Business Model Alignment: Kontinuierliche Anpassung des Frameworks an sich ändernde Geschäftsmodelle, von traditionellen zu digitalen oder plattformbasierten Modellen.\n• Technology Evolution Support: Proaktive Anpassung an neue Technologien und digitale Trends (IoT, Edge Computing, Quantum Computing) durch vorausschauende Framework-Entwicklung.\n• Regulatory Future-Proofing: Antizipation regulatorischer Entwicklungen und proaktive Anpassung des Frameworks an erwartete Compliance-Anforderungen.\n• Continuous Improvement Integration: Etablierung kontinuierlicher Verbesserungsprozesse, die Feedback aus Geschäftsentwicklung, Bedrohungslandschaft und operativer Erfahrung integrieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 8),
        question: "Wie nutzt ADVISORI fortgeschrittene Technologien wie KI, Machine Learning und Automation, um die Effektivität und Effizienz von NIST CSF-Implementierungen zu revolutionieren?",
        answer: "Die Integration fortgeschrittener Technologien in NIST CSF-Implementierungen transformiert traditionelle, manuelle Cybersicherheitsprozesse in intelligente, adaptive und hocheffiziente Systeme. ADVISORI nutzt KI, Machine Learning und Automation, um die fünf Kernfunktionen des NIST CSF zu revolutionieren und gleichzeitig C-Level-Führungskräften unprecedented Einblicke in ihre Cybersicherheitslage zu bieten.\n\n🤖 KI-gestützte Framework-Enhancement:\n• Intelligent Risk Assessment: Machine Learning-Algorithmen analysieren historische Sicherheitsdaten, Bedrohungsintelligenz und Geschäftskontexte, um präzisere und vorausschauende Risikobewertungen zu erstellen.\n• Adaptive Control Selection: KI-basierte Systeme empfehlen optimale Sicherheitskontrollen basierend auf spezifischen Risikoprofilen, Branchen-Benchmarks und sich entwickelnden Bedrohungslandschaften.\n• Predictive Threat Modeling: Fortgeschrittene Algorithmen modellieren potenzielle Angriffsvektoren und -szenarien, um proaktive Abwehrstrategien zu entwickeln.\n• Automated Compliance Monitoring: Kontinuierliche, automatisierte Überwachung der Framework-Compliance mit intelligenter Anomalieerkennung und automatischer Berichterstattung.\n\n⚡ Automation und Operational Excellence:\n• Orchestrated Incident Response: Vollautomatisierte Incident Response-Workflows, die basierend auf NIST CSF-Prinzipien sofortige, konsistente und skalierbare Reaktionen auf Sicherheitsvorfälle ermöglichen.\n• Self-Healing Security Controls: Implementierung selbstheilender Sicherheitssysteme, die automatisch auf Kontrollausfälle oder -schwächen reagieren und alternative Schutzmaßnahmen aktivieren.\n• Dynamic Policy Enforcement: Automatische Anpassung von Sicherheitsrichtlinien und -kontrollen basierend auf sich ändernden Geschäftsanforderungen, Risikobewertungen und Bedrohungslagen.\n• Intelligent Resource Optimization: KI-gestützte Optimierung der Allokation von Cybersicherheitsressourcen zur Maximierung der Schutzwirkung bei minimalen Kosten.\n\n📊 Advanced Analytics und Executive Intelligence:\n• Real-time Security Dashboards: KI-powered Executive Dashboards, die komplexe Cybersicherheitsdaten in actionable Business Intelligence für C-Level-Entscheidungen übersetzen.\n• Predictive Security Metrics: Entwicklung vorausschauender KPIs, die nicht nur aktuelle Sicherheitszustände messen, sondern zukünftige Trends und potenzielle Probleme vorhersagen.\n• Automated Benchmark Analysis: Kontinuierlicher Vergleich der eigenen Cybersicherheitsperformance mit Branchen-Benchmarks und Best Practices durch automatisierte Analyse und Berichterstattung.\n• Investment ROI Optimization: KI-basierte Analyse und Empfehlung von Cybersicherheitsinvestitionen mit höchstem erwarteten ROI basierend auf Risikoreduktion und Geschäftswert."
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
