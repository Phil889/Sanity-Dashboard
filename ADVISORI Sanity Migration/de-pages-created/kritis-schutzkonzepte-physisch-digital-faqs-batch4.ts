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
    console.log('Updating KRITIS Schutzkonzepte Physisch Digital page with FAQs batch 4...')
    
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
        _key: generateKey('faq', 13),
        question: "Wie entwickelt ADVISORI Incident Response und Crisis Management Strategien für koordinierte physisch-digitale Sicherheitsvorfälle in kritischen Infrastrukturen?",
        answer: "Sicherheitsvorfälle in kritischen Infrastrukturen können sowohl physische als auch digitale Komponenten betreffen und erfordern koordinierte Response-Strategien. ADVISORI entwickelt integrierte Incident Response Frameworks, die schnelle, effektive Reaktionen auf komplexe cyberphysische Bedrohungen ermöglichen und dabei Business Continuity und öffentliche Sicherheit gewährleisten.\n\n🚨 Integrierte Incident Detection und Classification:\n• Unified Threat Correlation: Entwicklung von Systemen, die physische Sicherheitsereignisse (Einbruch, Sabotage) mit digitalen Anomalien (Cyberangriffe, Systemausfälle) korrelieren und umfassende Bedrohungsbilder erstellen.\n• Multi-domain Alert Fusion: Integration verschiedener Alerting-Systeme (SIEM, physische Überwachung, IoT-Sensoren) in zentrale Command and Control Systeme für ganzheitliche Situational Awareness.\n• Automated Incident Classification: Implementation KI-gestützter Klassifizierungssysteme, die Vorfälle automatisch nach Schweregrad, Auswirkungsbereich und erforderlichen Response-Maßnahmen kategorisieren.\n• Real-time Impact Assessment: Entwicklung von Tools zur sofortigen Bewertung der Auswirkungen von Sicherheitsvorfällen auf kritische Services und abhängige Infrastrukturen.\n\n⚡ Koordinierte Crisis Response Orchestration:\n• Cross-functional Response Teams: Aufbau spezialisierter Teams, die sowohl technische IT-Security Expertise als auch physische Sicherheits- und Facility Management Kompetenzen vereinen.\n• Escalation Frameworks: Entwicklung klarer Eskalationspfade, die automatisch relevante Stakeholder (interne Teams, externe Partner, Behörden) basierend auf Vorfallstyp und -schwere einbeziehen.\n• Automated Response Orchestration: Implementation automatisierter Response-Mechanismen, die sofortige Schutzmaßnahmen (Systemisolation, physische Sperrungen) einleiten und menschliche Entscheidungen unterstützen.\n• Communication Management: Aufbau robuster Kommunikationssysteme für interne Koordination und externe Stakeholder-Information während kritischer Vorfälle.\n\n🔄 Adaptive Recovery und Lessons Learned:\n• Parallel Recovery Streams: Entwicklung koordinierter Recovery-Prozesse, die physische Reparaturen und digitale Systemwiederherstellung parallel durchführen und optimale Recovery-Zeiten erzielen.\n• Post-Incident Analysis: Systematische Analyse aller Sicherheitsvorfälle zur Identifikation von Verbesserungspotenzialen in Detection, Response und Recovery Prozessen.\n• Continuous Improvement: Integration von Lessons Learned in verbesserte Incident Response Procedures und proaktive Sicherheitsmaßnahmen.\n• Tabletop Exercise Program: Regelmäßige Durchführung realistischer Incident Response Übungen, die komplexe cyberphysische Szenarien simulieren."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 14),
        question: "Welche spezifischen Herausforderungen entstehen bei der Implementierung von Zero Trust Architectures in physisch-digitalen KRITIS-Umgebungen und wie löst ADVISORI diese?",
        answer: "Zero Trust Implementierung in kritischen Infrastrukturen bringt einzigartige Herausforderungen mit sich, da traditionelle Perimeter-basierte Sicherheitskonzepte mit operativen Anforderungen und Legacy-Systemen kollidieren können. ADVISORI entwickelt pragmatische Zero Trust Strategien, die maximale Sicherheit mit operativer Effizienz und System-Kompatibilität verbinden.\n\n🏗️ Architektonische Zero Trust Herausforderungen:\n• Legacy System Integration: Kritische Infrastrukturen nutzen oft jahrzehntealte Systeme (SCADA, PLC), die nicht für Zero Trust Design konzipiert wurden und spezielle Adaptationsstrategien erfordern.\n• Operational Technology (OT) Constraints: OT-Systeme haben unique Anforderungen (Real-time Performance, Verfügbarkeit) die traditionelle Zero Trust Implementierungen herausfordern.\n• Physical-Digital Boundary Management: Definition und Enforcement von Zero Trust Prinzipien an der Schnittstelle zwischen physischen und digitalen Assets.\n• Network Segmentation Complexity: Implementierung mikrosekundenschneller Segmentierung in komplexen, interconnected critical infrastructure networks.\n\n🔐 ADVISORI's Zero Trust Implementation Strategy:\n• Gradual Zero Trust Adoption: Entwicklung phasenweiser Implementierungsstrategien, die kritische Systeme nicht beeinträchtigen und schrittweise Zero Trust Prinzipien einführen.\n• Hybrid Trust Models: Aufbau hybrider Modelle, die Zero Trust für neue Systeme implementieren, während sie pragmatische Sicherheitsmaßnahmen für Legacy-Systeme aufrechterhalten.\n• Identity-Centric Security: Fokus auf robuste Identity and Access Management Systeme, die sowohl menschliche als auch maschinelle Identitäten in kritischen Infrastrukturen verwalten.\n• Behavioral Analytics Integration: Einsatz kontinuierlicher Verhaltensanalyse zur Validation von Trust Decisions und Erkennung anomaler Aktivitäten.\n\n⚡ Operative Zero Trust Excellence:\n• Dynamic Risk Assessment: Kontinuierliche Bewertung von Trust Levels basierend auf aktuellen Bedrohungsinformationen, Systemzustand und Benutzerverhalten.\n• Contextual Access Controls: Implementation kontextueller Zugangskontrollen, die Faktoren wie Standort, Zeit, Gerätestatus und Aktivitätsmuster berücksichtigen.\n• Automated Trust Verification: Entwicklung automatisierter Systeme zur kontinuierlichen Verification von Trust Assumptions und dynamischen Anpassung von Sicherheitsrichtlinien.\n• Zero Trust Monitoring: Aufbau spezialisierter Monitoring-Systeme, die Zero Trust Policy Violations erkennen und automatische Remediation einleiten."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 15),
        question: "Wie berücksichtigt ADVISORI Human Factors und Insider Threat Management in integrierten physisch-digitalen Schutzkonzepten?",
        answer: "Menschen sind sowohl die größte Stärke als auch die größte Schwachstelle in jedem Sicherheitssystem. ADVISORI entwickelt menschenzentrierte Sicherheitsstrategien, die sowohl unbeabsichtigte Fehler als auch böswillige Insider-Aktivitäten adressieren, während sie gleichzeitig operative Effizienz und Mitarbeiterzufriedenheit aufrechterhalten.\n\n👥 Comprehensive Human Risk Assessment:\n• Behavioral Baseline Establishment: Entwicklung individueller Verhaltensbaselines für Mitarbeiter in kritischen Positionen zur Erkennung abnormaler Aktivitätsmuster.\n• Psychosocial Risk Factors: Berücksichtigung psychosozialer Faktoren (Stress, Unzufriedenheit, Lebenskrisen), die Insider Threat Risiken erhöhen können.\n• Access Pattern Analysis: Kontinuierliche Analyse von Zugangsmustern sowohl für physische als auch digitale Systeme zur Identifikation risikoreicher Verhaltensweisen.\n• Cross-domain Activity Correlation: Korrelation von Aktivitäten zwischen physischen und digitalen Domänen zur Erkennung koordinierter Insider Threats.\n\n🛡️ Proaktive Insider Threat Prevention:\n• Least Privilege Implementation: Strikte Durchsetzung von Least Privilege Prinzipien für sowohl physische als auch digitale Zugriffe mit regelmäßiger Überprüfung und Anpassung.\n• Segregation of Duties: Implementierung robuster Segregation of Duties Frameworks, die kritische Aktivitäten auf mehrere Personen verteilen.\n• Continuous Monitoring: Aufbau nicht-invasiver Monitoring-Systeme, die sowohl digitale als auch physische Aktivitäten überwachen und Anomalien identifizieren.\n• Buddy System Implementation: Einführung von Buddy System Protocols für kritische Aktivitäten, die potenzielle Insider Threats durch Peer Oversight reduzieren.\n\n🎓 Human-Centric Security Culture:\n• Security Awareness Excellence: Entwicklung kontinuierlicher, role-spezifischer Security Awareness Programme, die sowohl physische als auch digitale Sicherheitsaspekte abdecken.\n• Positive Security Incentives: Aufbau von Incentive-Systemen, die proaktives Sicherheitsverhalten belohnen und Security Champions fördern.\n• Psychological Safety: Schaffung einer Umgebung, in der Mitarbeiter Sicherheitsbedenken und potenzielle Vorfälle ohne Angst vor Vergeltung melden können.\n• Work-Life Balance Integration: Berücksichtigung von Work-Life Balance Faktoren, die Stress reduzieren und potenzielle Insider Threat Risiken minimieren.\n\n📊 Technology-Enhanced Human Security:\n• User and Entity Behavior Analytics (UEBA): Implementation fortschrittlicher UEBA-Systeme, die menschliches Verhalten in kritischen Infrastrukturen modellieren und Anomalien erkennen.\n• Biometric Integration: Sichere Integration biometrischer Systeme für sowohl physische als auch digitale Authentifizierung mit Privacy-by-Design Prinzipien.\n• Stress Detection Systems: Entwicklung von Systemen zur Erkennung von Stressindikatoren, die erhöhte Insider Threat Risiken signalisieren können."
      },
      {
        _type: 'object',
        _key: generateKey('faq', 16),
        question: "Wie gewährleistet ADVISORI die Skalierbarkeit und Performance von integrierten Schutzkonzepten bei wachsenden kritischen Infrastrukturen?",
        answer: "Kritische Infrastrukturen wachsen kontinuierlich und integrieren neue Technologien, was Sicherheitsarchitekturen vor Skalierungs- und Performance-Herausforderungen stellt. ADVISORI entwickelt skalierbare Sicherheitsframeworks, die mit der Infrastruktur mitwachsen und dabei konstante Sicherheitsstandards und Performance aufrechterhalten.\n\n📈 Scalable Security Architecture Design:\n• Modular Security Frameworks: Entwicklung modularer Sicherheitsarchitekturen, die neue Komponenten nahtlos integrieren können ohne Disruption bestehender Systeme.\n• Cloud-Native Security Services: Implementation cloud-nativer Sicherheitsservices, die automatisch skalieren und geografisch verteilte Infrastrukturen unterstützen.\n• Microservices Security Architecture: Aufbau von Microservices-basierten Sicherheitslösungen, die Independent Scaling und flexible Deployment-Strategien ermöglichen.\n• Edge Computing Integration: Strategische Platzierung von Security Services an Edge Locations für reduzierte Latenz und verbesserte Performance.\n\n⚡ Performance Optimization Strategies:\n• Intelligent Load Balancing: Implementation intelligenter Load Balancing Algorithmen, die Sicherheitsprocessing optimal auf verfügbare Ressourcen verteilen.\n• Caching und Optimization: Strategisches Caching von Sicherheitsdaten und -entscheidungen zur Reduktion von Processing Overhead und Latenz.\n• Parallel Processing: Aufbau parallelisierter Security Processing Pipelines für gleichzeitige Analyse physischer und digitaler Sicherheitsdaten.\n• Hardware Acceleration: Integration spezialisierter Hardware (GPUs, FPGAs) für performance-kritische Sicherheitsfunktionen wie Verschlüsselung und ML-Inferenz.\n\n🔄 Dynamic Resource Management:\n• Auto-scaling Security Services: Implementierung automatischer Skalierungsmechanismen, die Sicherheitsressourcen basierend auf aktueller Last und Bedrohungslage anpassen.\n• Predictive Capacity Planning: Einsatz von Machine Learning zur Vorhersage zukünftiger Sicherheitsressourcenanforderungen und proaktiven Kapazitätsplanung.\n• Resource Optimization: Kontinuierliche Optimierung von Ressourcenallokation basierend auf tatsächlicher Nutzung und Performance-Metriken.\n• Disaster Recovery Scaling: Aufbau von DR-Systemen, die im Notfall automatisch zusätzliche Sicherheitskapazitäten bereitstellen.\n\n📊 Performance Monitoring und Optimization:\n• Real-time Performance Analytics: Kontinuierliche Überwachung von Security Performance Metriken mit automatischen Alerts bei Performance-Degradation.\n• Bottleneck Analysis: Systematische Identifikation und Elimination von Performance-Bottlenecks in integrierten Sicherheitsarchitekturen.\n• Capacity Forecasting: Langfristige Kapazitätsplanung basierend auf Infrastrukturwachstum und Sicherheitsanforderungen.\n• ROI-based Performance Optimization: Optimierung von Security Performance basierend auf Business Impact und Return on Investment Considerations."
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
