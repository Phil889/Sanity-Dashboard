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
    console.log('Updating KRITIS Schutzkonzepte Physisch Digital page with FAQs batch 3...')
    
    // First, get the existing document
    console.log('Fetching existing document...')
    const existingDoc = await client.fetch('*[_id == $id][0]', { id: 'kritis-schutzkonzepte-physisch-digital' })
    
    if (!existingDoc) {
      throw new Error('Document "kritis-schutzkonzepte-physisch-digital" not found')
    }
    
    // Create new FAQs
    const newFaqs = [
      {
        _type: 'object',
        _key: generateKey('faq', 9),
        question: "Wie addressiert ADVISORI die komplexen regulatorischen Anforderungen verschiedener Sektoren bei der Entwicklung integrierter Schutzkonzepte?",
        answer: "Kritische Infrastrukturen verschiedener Sektoren unterliegen unterschiedlichen regulatorischen Frameworks, die spezifische Sicherheitsanforderungen definieren. ADVISORI entwickelt sektorspezifische Schutzkonzepte, die nicht nur branchenübergreifende KRITIS-Anforderungen erfüllen, sondern auch sektor-spezifische Compliance-Verpflichtungen nahtlos integrieren.\n\n🏭 Sektorspezifische Compliance-Integration:\n• Energiesektor: Integration von NERC CIP Standards, EU Clean Energy Package und nationalen Energieregulierungen in umfassende Cyber-Physical Security Frameworks.\n• Telekommunikation: Compliance mit TKG, NIS2-Richtlinie und sektorspezifischen BSI-Katalogmaßnahmen für kritische Kommunikationsinfrastrukturen.\n• Wasserversorgung: Berücksichtigung der Trinkwasserverordnung, EU-Wasserrahmenrichtlinie und spezifischer physischer Sicherheitsanforderungen für Wasserinfrastrukturen.\n• Gesundheitswesen: Integration von Datenschutzbestimmungen (DSGVO), Medizinprodukterecht und krankenhaus-spezifischen Sicherheitsanforderungen.\n\n📋 Multi-Framework Compliance Management:\n• Regulatory Mapping: Systematische Erfassung und Korrelation aller relevanten regulatorischen Anforderungen für spezifische Infrastrukturen und Geschäftsmodelle.\n• Gap Analysis: Identifikation von Überschneidungen, Konflikten und Lücken zwischen verschiedenen regulatorischen Frameworks zur optimalen Compliance-Strategie.\n• Unified Compliance Architecture: Entwicklung integrierter Compliance-Architekturen, die multiple regulatorische Anforderungen mit minimaler Redundanz erfüllen.\n• Continuous Regulatory Monitoring: Etablierung von Prozessen zur kontinuierlichen Überwachung regulatorischer Änderungen und deren Auswirkungen auf bestehende Schutzkonzepte.\n\n🔄 Adaptive Compliance Strategien:\n• Cross-Border Considerations: Berücksichtigung internationaler Standards und Anforderungen für Organisationen mit grenzüberschreitenden Operationen.\n• Future-Proofing: Antizipation kommender regulatorischer Entwicklungen und Integration von Flexibilität in Compliance-Architekturen.\n• Risk-based Compliance: Implementierung risikobasierter Ansätze, die Compliance-Aufwände basierend auf tatsächlichen Risiken und Business Impact priorisieren.\n• Audit-ready Documentation: Aufbau umfassender Dokumentationsframeworks, die gleichzeitig multiple Audit-Anforderungen erfüllen und Compliance nachweisen."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 10),
        question: "Welche Rolle spielen Supply Chain Security und Third-Party Risk Management in integrierten KRITIS-Schutzkonzepten von ADVISORI?",
        answer: "Moderne kritische Infrastrukturen sind zunehmend von komplexen Lieferketten und Third-Party Services abhängig, was neue Angriffsvektoren und Risiken schafft. ADVISORI entwickelt umfassende Supply Chain Security Frameworks, die sowohl physische als auch digitale Aspekte der Lieferkettenrisiken adressieren und integrierte Schutzmaßnahmen implementieren.\n\n🔗 Umfassende Supply Chain Risk Assessment:\n• Third-Party Risk Profiling: Entwicklung detaillierter Risikoprofile für alle kritischen Lieferanten, Service Provider und Partner basierend auf ihrer Rolle in der kritischen Infrastruktur.\n• Dependency Mapping: Visualisierung und Analyse komplexer Abhängigkeiten zwischen internen Systemen und externen Anbietern zur Identifikation kritischer Single Points of Failure.\n• Vendor Security Assessment: Implementierung kontinuierlicher Sicherheitsbewertungen für Lieferanten mit standardisierten Frameworks und automatisierten Monitoring-Tools.\n• Supply Chain Threat Intelligence: Integration spezialisierter Threat Intelligence für Lieferketten-spezifische Bedrohungen und Angriffsmuster.\n\n🛡️ Integrierte Supply Chain Protection:\n• Secure by Design Procurement: Entwicklung von Beschaffungsrichtlinien, die Sicherheitsanforderungen von Anfang an in Lieferantenauswahl und Vertragsgestaltung integrieren.\n• Zero Trust Supply Chain: Implementierung von Zero Trust Prinzipien für alle Lieferanten-Interaktionen, einschließlich kontinuierlicher Verifikation und minimaler Privilegien.\n• Physical Supply Chain Security: Sicherung physischer Lieferketten durch Tracking, Tamper-Detection und sichere Logistikprozesse für kritische Komponenten.\n• Software Supply Chain Security: Implementierung von Code Signing, Software Bill of Materials (SBOM) und kontinuierlicher Vulnerability Assessments für Software-Komponenten.\n\n⚡ Kontinuierliches Third-Party Monitoring:\n• Real-time Vendor Monitoring: Aufbau von Systemen zur kontinuierlichen Überwachung der Sicherheitslage kritischer Lieferanten und automatische Alarmierung bei Risikoveränderungen.\n• Incident Response Coordination: Etablierung koordinierter Incident Response Prozesse mit kritischen Lieferanten für schnelle Reaktion auf Supply Chain Sicherheitsvorfälle.\n• Contract Security Integration: Integration spezifischer Sicherheitsanforderungen, SLAs und Incident Response Verpflichtungen in alle kritischen Lieferantenverträge.\n• Supply Chain Business Continuity: Entwicklung von Backup-Strategien und alternativen Lieferanten für kritische Services zur Sicherstellung der Geschäftskontinuität."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 11),
        question: "Wie integriert ADVISORI emerging technologies wie KI, IoT und 5G in sichere KRITIS-Schutzkonzepte ohne Kompromisse bei der Sicherheit?",
        answer: "Die Integration emerging technologies in kritische Infrastrukturen bietet enormes Potenzial für Effizienzsteigerung und Innovation, bringt aber auch neue Sicherheitsrisiken mit sich. ADVISORI entwickelt sichere Innovationsframeworks, die die Vorteile neuer Technologien nutzen, während sie gleichzeitig robuste Sicherheitsarchitekturen aufrechterhalten.\n\n🤖 Sichere KI-Integration in kritische Infrastrukturen:\n• AI Security by Design: Entwicklung von KI-Systemen mit integrierten Sicherheitsmaßnahmen, einschließlich Adversarial Attack Protection und Model Poisoning Prevention.\n• Explainable AI für kritische Entscheidungen: Implementierung erklärbarer KI-Modelle für sicherheitskritische Anwendungen, die Transparenz und Nachvollziehbarkeit gewährleisten.\n• AI-powered Security Operations: Einsatz von Machine Learning für erweiterte Threat Detection, Behavioral Analytics und predictive Security Management.\n• Federated Learning Frameworks: Aufbau sicherer Federated Learning Systeme, die Datenschutz und Sicherheit bei der Nutzung verteilter Datenquellen gewährleisten.\n\n📡 IoT Security Excellence für KRITIS:\n• Secure IoT Device Lifecycle: Implementierung umfassender Sicherheitsmaßnahmen für den gesamten IoT-Gerätelebenszyklus von Procurement bis Disposal.\n• Network Segmentation für IoT: Entwicklung spezialisierter Netzwerkarchitekturen, die IoT-Geräte isolieren und laterale Bewegungen von Angreifern verhindern.\n• Edge Computing Security: Implementierung sicherer Edge-Computing-Lösungen für IoT-Datenverarbeitung mit minimaler Latenz und maximaler Sicherheit.\n• IoT Device Identity Management: Aufbau robuster Identitäts- und Zugriffsmanagementsysteme für massive IoT-Deployments in kritischen Infrastrukturen.\n\n🌐 5G Security Integration:\n• Private 5G Networks: Design und Implementation privater 5G-Netze für kritische Infrastrukturen mit enhanced security controls und isolation.\n• Network Slicing Security: Entwicklung sicherer Network Slicing Strategien, die verschiedene Anwendungen isolieren und spezifische Sicherheitsanforderungen erfüllen.\n• 5G Core Security: Implementierung umfassender Sicherheitsmaßnahmen für 5G Core Network Funktionen und Service-Based Architecture.\n• Multi-Access Edge Computing (MEC) Security: Sichere Integration von MEC-Lösungen für latency-kritische Anwendungen in kritischen Infrastrukturen.\n\n🔮 Future Technology Readiness:\n• Quantum-Safe Cryptography: Vorbereitung auf Quantum Computing durch Implementation quantum-resistenter Verschlüsselungsalgorithmen.\n• Blockchain für Infrastructure Security: Evaluation und sichere Integration von Blockchain-Technologien für Identity Management, Supply Chain Tracking und Audit Trails."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 12),
        question: "Wie gewährleistet ADVISORI Business Continuity und Disaster Recovery in integrierten physisch-digitalen Schutzkonzepten für kritische Infrastrukturen?",
        answer: "Business Continuity und Disaster Recovery sind fundamentale Komponenten jeder kritischen Infrastruktur und erfordern eine nahtlose Integration physischer und digitaler Wiederherstellungsstrategien. ADVISORI entwickelt resiliente Continuity-Frameworks, die sowohl geplante als auch ungeplante Unterbrechungen antizipieren und minimale Recovery-Zeiten gewährleisten.\n\n🏗️ Integrierte Resilience Architecture:\n• Cyber-Physical Recovery Planning: Entwicklung koordinierter Recovery-Pläne, die sowohl digitale Systemwiederherstellung als auch physische Infrastrukturreparaturen synchronisieren.\n• Redundancy Design: Implementierung mehrschichtiger Redundanzen für kritische Systeme, einschließlich geografisch verteilter Backup-Standorte und Failover-Mechanismen.\n• Cross-Domain Impact Analysis: Analyse der Auswirkungen physischer Schäden auf digitale Systeme und vice versa für comprehensive Recovery Planning.\n• Adaptive Recovery Strategies: Entwicklung flexibler Recovery-Strategien, die sich an verschiedene Schadensszenarien und verfügbare Ressourcen anpassen können.\n\n⚡ Real-time Continuity Management:\n• Integrated Monitoring für Business Continuity: Überwachung kritischer Indikatoren sowohl für physische als auch digitale Systeme zur frühzeitigen Erkennung von Kontinuitätsrisiken.\n• Automated Failover Systems: Implementation intelligenter Failover-Systeme, die automatisch auf Backup-Systeme umschalten und kritische Services aufrechterhalten.\n• Dynamic Resource Allocation: Entwicklung von Systemen zur automatischen Umverteilung von Ressourcen bei partiellen Ausfällen zur Aufrechterhaltung kritischer Funktionen.\n• Real-time Recovery Coordination: Aufbau von Koordinationssystemen, die Recovery-Teams und -Aktivitäten in Echtzeit synchronisieren.\n\n🎯 Testing und Validation:\n• Comprehensive DR Testing: Regelmäßige Tests aller Recovery-Szenarien unter realistischen Bedingungen, einschließlich koordinierter physischer und digitaler Recovery-Übungen.\n• Tabletop Exercises: Durchführung regelmäßiger Tabletop-Übungen mit allen Stakeholdern zur Validierung von Recovery-Plänen und Verbesserung der Koordination.\n• Recovery Time Optimization: Kontinuierliche Analyse und Optimierung von Recovery-Zeiten durch Process Improvement und Technologie-Upgrades.\n• Lessons Learned Integration: Systematische Integration von Erkenntnissen aus Tests, Übungen und tatsächlichen Vorfällen in verbesserte Recovery-Strategien.\n\n📊 Compliance und Reporting:\n• Regulatory Compliance für BC/DR: Sicherstellung, dass alle Business Continuity und Disaster Recovery Maßnahmen relevante regulatorische Anforderungen erfüllen.\n• Stakeholder Communication: Entwicklung klarer Kommunikationsstrategien für verschiedene Stakeholder-Gruppen während Recovery-Operationen.\n• Recovery Metrics und KPIs: Implementierung umfassender Metriken zur Messung der Effektivität von Recovery-Operationen und kontinuierlichen Verbesserung."
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
